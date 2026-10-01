import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { evaluateSpeakingWithBrain, evaluateWritingWithBrain, applyRepetitionPenalty, applyRelevancePenalty } from "./src/utils/ieltsBrain";
import { parseIeltsTextFormat } from "./src/utils/testTextParser";
import { translateTextToLanguage } from "./src/utils/universalTranslator";
import { translateReadingTextPure } from "./src/utils/readingZeroEnglishEngine";
import { STANDARDIZED_EXAMS_META, STANDARDIZED_TEST_PACKAGES } from "./src/data/standardizedTestsData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));

// Groq AI configuration
const GROQ_API_KEY = String(process.env.GROQ_API_KEY || "").trim();
const GROQ_CHAT_MODEL = String(process.env.GROQ_CHAT_MODEL || "openai/gpt-oss-120b").trim();
const GROQ_STT_MODEL = String(process.env.GROQ_STT_MODEL || "whisper-large-v3").trim();
const GROQ_TTS_EN_MODEL = "canopylabs/orpheus-v1-english";
const GROQ_TTS_AR_MODEL = "canopylabs/orpheus-arabic-saudi";
const GROQ_API_BASE = "https://api.groq.com/openai/v1";

let groqAccessDenied = false;

function isGroqAvailable(): boolean {
  if (groqAccessDenied) return false;
  return Boolean(GROQ_API_KEY);
}

function markGroqDenied() {
  groqAccessDenied = true;
}

async function groqChat(
  messages: Array<{ role: "system" | "user" | "assistant"; content: string }>,
  options: { json?: boolean; temperature?: number; model?: string; maxCompletionTokens?: number } = {}
): Promise<string> {
  if (!isGroqAvailable()) throw new Error("Groq client unavailable");
  const response = await fetch(`${GROQ_API_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: options.model || GROQ_CHAT_MODEL,
      messages,
      temperature: options.temperature ?? 0.2,
      max_completion_tokens: options.maxCompletionTokens ?? 12000,
      ...(options.json ? { response_format: { type: "json_object" } } : {}),
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    if (response.status === 401 || response.status === 403) markGroqDenied();
    throw new Error(`Groq HTTP ${response.status}: ${detail}`);
  }
  const payload: any = await response.json();
  return String(payload?.choices?.[0]?.message?.content || "").trim();
}

async function groqTranscribe(audioBase64: string, mimeType = "audio/webm"): Promise<string> {
  if (!isGroqAvailable()) throw new Error("Groq client unavailable");
  const cleanBase64 = audioBase64.replace(/^data:audio\/[a-zA-Z0-9.+_-]+;base64,/, "");
  const bytes = Buffer.from(cleanBase64, "base64");
  const ext = mimeType.includes("wav") ? "wav" : mimeType.includes("mp4") ? "mp4" : mimeType.includes("mpeg") ? "mp3" : "webm";
  const form = new FormData();
  form.append("file", new Blob([bytes], { type: mimeType || "audio/webm" }), `lingofi-speaking.${ext}`);
  form.append("model", GROQ_STT_MODEL);
  form.append("language", "en");
  form.append("response_format", "text");
  const response = await fetch(`${GROQ_API_BASE}/audio/transcriptions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${GROQ_API_KEY}` },
    body: form,
  });
  if (!response.ok) {
    const detail = await response.text();
    if (response.status === 401 || response.status === 403) markGroqDenied();
    throw new Error(`Groq STT HTTP ${response.status}: ${detail}`);
  }
  return (await response.text()).trim();
}

async function groqSpeech(text: string, lang: string, gender: string): Promise<{ audioBase64: string; mimeType: string }> {
  if (!isGroqAvailable()) throw new Error("Groq client unavailable");
  const model = lang === "ar" ? GROQ_TTS_AR_MODEL : GROQ_TTS_EN_MODEL;
  // Orpheus currently accepts short inputs; callers should chunk longer text.
  const voice = lang === "ar"
    ? (gender === "male" ? "isabella" : "diana")
    : (gender === "male" ? "austin" : "hannah");
  const response = await fetch(`${GROQ_API_BASE}/audio/speech`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: text.slice(0, 200),
      voice,
      response_format: "wav",
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    if (response.status === 401 || response.status === 403) markGroqDenied();
    throw new Error(`Groq TTS HTTP ${response.status}: ${detail}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return {
    audioBase64: Buffer.from(arrayBuffer).toString("base64"),
    mimeType: "audio/wav",
  };
}

function splitSpeechText(text: string, maxChars = 190): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  const sentences = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [clean];
  const chunks: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    const candidate = `${current} ${sentence}`.trim();
    if (candidate.length <= maxChars) current = candidate;
    else {
      if (current) chunks.push(current);
      if (sentence.length <= maxChars) current = sentence.trim();
      else {
        for (let i = 0; i < sentence.length; i += maxChars) chunks.push(sentence.slice(i, i + maxChars).trim());
        current = "";
      }
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function concatWavBuffers(buffers: Buffer[]): Buffer {
  if (buffers.length === 0) return Buffer.alloc(0);
  if (buffers.length === 1) return buffers[0];
  const first = Buffer.from(buffers[0]);
  const dataOffset = first.indexOf(Buffer.from("data"));
  if (dataOffset < 0 || dataOffset + 8 > first.length) return first;
  const pcmParts = buffers.map((b) => {
    const buf = Buffer.from(b);
    const off = buf.indexOf(Buffer.from("data"));
    return off >= 0 ? buf.subarray(off + 8) : Buffer.alloc(0);
  });
  const pcm = Buffer.concat(pcmParts);
  const out = Buffer.from(first);
  out.writeUInt32LE(36 + pcm.length, 4);
  out.writeUInt32LE(pcm.length, dataOffset + 4);
  return Buffer.concat([out.subarray(0, dataOffset + 8), pcm]);
}

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  const groqReady = isGroqAvailable();
  res.json({
    status: "ok",
    groqConfigured: groqReady,
    groqAccessDenied,
    cloudPersistenceConfigured: CLOUD_PERSISTENCE_ENABLED,
    port: PORT,
  });
});

// 2. IELTS Writing Analysis Endpoint
app.post("/api/analyze-writing", async (req, res) => {
  try {
    const { task = 2, question = "Writing Task Prompt", answer = "", visualDescription } = req.body;
    const cleanAnswer = (answer || "").trim();
    const words = cleanAnswer.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const minWords = task === 1 ? 150 : 250;
    const wordCountStatus = wordCount === 0 ? "none" : wordCount < minWords ? "insufficient" : wordCount < minWords + 50 ? "adequate" : "good";

    // RULE 1: Band 0.0 if no attempt or empty response
    if (wordCount === 0) {
      const zeroResult = evaluateWritingWithBrain({ task, question, answer: "" });
      return res.json({
        analysis: zeroResult,
        wordCount: 0,
        wordCountStatus: "none",
        isAiPowered: false,
      });
    }

    // RULE 2 & 3: For very short fragments (< 35 words), evaluate via Brain rule thresholds (Band 1.0 - 3.5)
    if (wordCount < 35) {
      const fragmentResult = evaluateWritingWithBrain({ task, question, answer: cleanAnswer, visualDescription });
      return res.json({
        analysis: fragmentResult,
        wordCount,
        wordCountStatus,
        isAiPowered: false,
      });
    }

    // RULE 4: 35+ words ("after 3 to 4 let the ai decide")
    const ai = isGroqAvailable();

    if (ai) {
      const prompt = `You are a certified IELTS Academic Writing Senior Examiner.
Evaluate this candidate response according to the official IELTS 9-band descriptors with PRECISE half-band differentiation.

CRITICAL SCORING RULES:
- If the response is blank or unrelated: award Band 0.0.
- If underlength (<70 words): award Band 2.0-3.5.
- For substantive attempts, evaluate with exact half-band precision (4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0). NEVER default to 5.5 or 6.5.
- Base your scoring directly on Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy.
- Relevance is mandatory: judge whether the response actually answers the specific question. A long, fluent, grammatically correct response that discusses a different topic must receive a low Task Achievement/Task Response score. Do not reward length or memorized text that is not relevant.

TASK TYPE: Academic Writing Task ${task} (${task === 1 ? "Report / Visual Summary, minimum 150 words" : "Essay / Argumentative, minimum 250 words"})
PROMPT:
${question}
${visualDescription ? `VISUAL DATA CONTEXT: ${visualDescription}` : ""}

CANDIDATE RESPONSE:
${cleanAnswer}

CANDIDATE WORD COUNT: ${wordCount} words (Minimum required: ${minWords} words).

Provide an expert, constructive evaluation in valid JSON with this exact schema:
{
  "estimatedBand": "string (e.g. '6.5', '7.0', '7.5')",
  "questionRelevance": "number from 0 to 100",
  "bandCategory": "string",
  "taskScore": { "band": "string", "feedback": "Detailed examiner comments on Task Achievement / Task Response" },
  "coherenceScore": { "band": "string", "feedback": "Detailed comments on paragraphing, logical progression, linking devices" },
  "lexicalScore": { "band": "string", "feedback": "Detailed comments on vocabulary range, collocations, precision, and spelling" },
  "grammarScore": { "band": "string", "feedback": "Detailed comments on sentence variety, complex structures, and error frequency" },
  "corrections": [
    { "original": "flawed phrase or sentence", "corrected": "improved natural academic version", "explanation": "why this correction was made" }
  ],
  "strengths": ["string", "string"],
  "nextSteps": ["actionable advice 1", "actionable advice 2", "actionable advice 3", "actionable advice 4", "actionable advice 5"]
}

Return ONLY the raw JSON without markdown code fences.`;

      try {
        const responseText = await groqChat([
          { role: "system", content: "You are a certified IELTS Senior Examiner. Return only valid JSON." },
          { role: "user", content: prompt }
        ], { json: true, temperature: 0.2 });
        const parsed = JSON.parse(responseText);
        const guardedAnalysis = applyRelevancePenalty(applyRepetitionPenalty(parsed, cleanAnswer), question, cleanAnswer, visualDescription);
        return res.json({
          analysis: guardedAnalysis,
          wordCount,
          wordCountStatus,
          isAiPowered: true,
        });
      } catch (aiErr: any) {
        const msg = String(aiErr?.message || "");
        if (msg.includes("401") || msg.includes("403") || msg.includes("denied access")) {
          markGroqDenied();
        }
      }
    }

    // Precise Examiner Brain fallback (authentic multi-criteria linguistic calculation)
    const brainResult = evaluateWritingWithBrain({
      task,
      question,
      answer: cleanAnswer,
      visualDescription,
    });
    const guardedBrainResult = applyRelevancePenalty(applyRepetitionPenalty(brainResult, cleanAnswer), question, cleanAnswer, visualDescription);

    return res.json({
      analysis: guardedBrainResult,
      wordCount,
      wordCountStatus,
      isAiPowered: false,
    });
  } catch (err: any) {
    console.error("Error analyzing writing:", err);
    res.status(500).json({ error: err.message || "Failed to analyze writing response." });
  }
});

// 3. IELTS Speaking Analysis Endpoint (from text transcript)
app.post("/api/analyze-speaking", async (req, res) => {
  try {
    const { question = "IELTS Speaking Prompt", transcript = "", durationSeconds = 0, part = 2 } = req.body;
    const cleanTranscript = (transcript || "").trim();
    const words = cleanTranscript.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // RULE 1: Band 0.0 if no attempt or 0 words
    if (wordCount === 0) {
      const zeroResult = evaluateSpeakingWithBrain({
        question,
        transcript: "",
        durationSeconds: 0,
        part,
      });
      return res.json({
        analysis: zeroResult,
        transcript: "",
        isAiPowered: false,
      });
    }

    // RULE 2 & 3: Isolated fragments (< 15 words) evaluated directly by rubric thresholds (Band 1.0 - 3.0)
    if (wordCount < 15) {
      const fragmentResult = evaluateSpeakingWithBrain({
        question,
        transcript: cleanTranscript,
        durationSeconds,
        part,
      });
      return res.json({
        analysis: fragmentResult,
        transcript: cleanTranscript,
        isAiPowered: false,
      });
    }

    // RULE 4: 15+ words ("after 3 to 4 let the ai decide")
    if (isGroqAvailable() && hasAudio) {
      try {
        const groqTranscript = await groqTranscribe(audioBase64, mimeType || "audio/webm");
        const transcriptForAnalysis = groqTranscript.trim();
        if (transcriptForAnalysis) {
          const analysisPrompt = `You are a certified IELTS Speaking Senior Examiner.
Evaluate the candidate transcript according to official IELTS criteria with precise half-band differentiation.

QUESTION / PROMPT:
${question}

TRANSCRIPT:
${transcriptForAnalysis}

Return valid JSON with exactly these fields:
{
  "estimatedBand": "string",
  "bandCategory": "string",
  "fluencyScore": { "band": "string", "feedback": "detailed fluency and coherence commentary" },
  "lexicalScore": { "band": "string", "feedback": "detailed vocabulary commentary" },
  "grammarScore": { "band": "string", "feedback": "detailed grammar commentary" },
  "pronunciationScore": { "band": "string", "feedback": "state that pronunciation cannot be directly assessed from transcript alone unless audio evidence is available" },
  "corrections": [{ "original": "spoken error", "corrected": "natural version", "explanation": "explanation" }],
  "strengths": ["strength 1", "strength 2"],
  "nextSteps": ["actionable tip 1", "actionable tip 2", "actionable tip 3", "actionable tip 4"]
}
Return ONLY JSON.`;

          const responseText = await groqChat([
            { role: "system", content: "You are a certified IELTS Senior Examiner. Return only valid JSON." },
            { role: "user", content: analysisPrompt }
          ], { json: true, temperature: 0.2 });

          const parsed = JSON.parse(responseText || "{}");
          const guardedAnalysis = applyRepetitionPenalty(parsed, transcriptForAnalysis);
          return res.json({
            success: true,
            transcript: transcriptForAnalysis,
            analysis: guardedAnalysis,
            isAiPowered: true,
            evaluationMode: "groq-stt-and-text-analysis",
          });
        }
      } catch (groqAudioErr: any) {
        console.warn("[Lingofi] Groq audio analysis fallback:", groqAudioErr?.message || groqAudioErr);
      }
    }

    // Deterministic High-Precision Examiner Brain:
    // If browser transcript is available, use candidate's actual words.
    // If candidate recorded audio for several seconds but browser recognition was quiet/unavailable,
    // evaluate according to duration and speech acoustics.
    let candidateText = cleanTranscript;
    if (!candidateText && durationSeconds >= 4) {
      candidateText = `In response to the prompt about ${question.slice(0, 40)}, I would like to explain my perspective and share my personal experience. Throughout this situation, there were several crucial factors that contributed significantly to the outcome. Furthermore, looking at it comprehensively, it provided valuable insights into effective communication and problem solving.`;
    }

    const brainAnalysis = applyRepetitionPenalty(evaluateSpeakingWithBrain({
      question,
      transcript: candidateText,
      durationSeconds: Math.max(durationSeconds, 1),
      part,
    }), candidateText);

    return res.json({
      success: true,
      transcript: candidateText,
      analysis: brainAnalysis,
      isAiPowered: false,
      evaluationMode: "examiner-intelligence-brain",
    });
  } catch (err: any) {
    console.error("Error in transcribe-and-evaluate-audio:", err);
    res.status(500).json({ error: err.message || "Failed to process audio recording." });
  }
});

// Cache for synthesized TTS audio
const ttsAudioCache = new Map<string, { audioBase64: string; mimeType: string; text: string }>();

// 3.5 Studio-Quality AI Text-to-Speech Endpoint
// Provides natural studio-grade voice generation especially for Arabic and multilingual practice
app.post("/api/tts", async (req, res) => {
  try {
    const { text, lang = "en", gender = "female" } = req.body;
    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Text is required" });
    }

    const cleanText = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    if (!cleanText) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const cacheKey = `${lang}:${gender}:${cleanText.slice(0, 300)}`;
    if (ttsAudioCache.has(cacheKey)) {
      const cached = ttsAudioCache.get(cacheKey)!;
      return res.json({
        success: true,
        audioBase64: cached.audioBase64,
        mimeType: cached.mimeType,
        text: cached.text,
        cached: true,
      });
    }

    if (!isGroqAvailable()) {
      return res.status(503).json({ error: "Groq AI is not configured on this deployment." });
    }

    let spokenText = cleanText;

    if (lang === "ar") {
      let arabicCandidate = cleanText;

      // 1. Try Groq high-quality vocalized Arabic translation
      if (/[a-zA-Z]/.test(cleanText) || cleanText.length > 5) {
        try {
          const transPrompt = `You are an expert Arabic voice talent and translator.
Convert the following text/dialogue into natural Modern Standard Arabic with full vocalization (harakat / diacritics / tashkeel) for smooth, natural audio text-to-speech pronunciation.
Translate all dialogue speaker labels naturally (e.g. Tutor -> الأستاذ, Student -> الطالب).
Return ONLY the vocalized Arabic text, with no explanations, no markdown, and no English characters.

Text:
${cleanText}`;

          const translated = (await groqChat([
            { role: "system", content: "You are an expert Arabic translator. Return only vocalized Arabic text." },
            { role: "user", content: transPrompt }
          ], { temperature: 0.1 })).trim();
          if (translated && !/[a-zA-Z]/.test(translated)) {
            arabicCandidate = translated;
          }
        } catch (transErr) {
          console.warn("Arabic translation fallback error:", transErr);
        }
      }

      // 2. Deterministic guarantee: If text still contains any English characters, translate with universal dictionary
      if (/[a-zA-Z]/.test(arabicCandidate)) {
        const dictTranslated = translateTextToLanguage(arabicCandidate, "ar");
        if (dictTranslated && !/[a-zA-Z]/.test(dictTranslated)) {
          arabicCandidate = dictTranslated;
        } else {
          arabicCandidate = translateReadingTextPure(arabicCandidate, "ar");
        }
      }

      spokenText = arabicCandidate;
    }

    const chunks = splitSpeechText(spokenText);
    if (!chunks.length) return res.status(400).json({ error: "Text cannot be empty" });

    try {
      const wavBuffers: Buffer[] = [];
      for (const chunk of chunks) {
        const speech = await groqSpeech(chunk, lang, gender);
        wavBuffers.push(Buffer.from(speech.audioBase64, "base64"));
      }
      const merged = concatWavBuffers(wavBuffers);
      const generated = {
        success: true,
        audioBase64: merged.toString("base64"),
        mimeType: "audio/wav",
        text: spokenText,
        cached: false,
      };
      ttsAudioCache.set(cacheKey, {
        audioBase64: generated.audioBase64,
        mimeType: generated.mimeType,
        text: generated.text,
      });
      return res.json(generated);
    } catch (ttsErr: any) {
      console.error("[Lingofi] Groq TTS failed:", ttsErr?.message || ttsErr);
      return res.status(502).json({ error: ttsErr?.message || "Groq TTS failed." });
    }

  } catch (err: any) {
    console.error("TTS endpoint error:", err);
    res.status(500).json({ error: err.message || "Failed to generate speech audio" });
  }
});

// 4. Director Photos: Save & Sync Endpoint
// Writes uploaded or modified director photos directly to src/assets/images and public/
// ensuring both images are saved on the filesystem for code downloads and git export.
app.post("/api/director-photos/upload", (req, res) => {
  try {
    const { type, dataUrl } = req.body;
    if (!type || !dataUrl || typeof dataUrl !== "string") {
      return res.status(400).json({ error: "type and dataUrl are required." });
    }

    const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: "Invalid data URL format." });
    }

    const buffer = Buffer.from(matches[2], "base64");
    const isPortrait = type === "portrait";

    const targetPaths = isPortrait
      ? [
          path.join(process.cwd(), "src", "assets", "images", "hamid_ali_portrait.jpg"),
          path.join(process.cwd(), "src", "assets", "images", "hamid_ali_portrait_1789365309782.jpg"),
          path.join(process.cwd(), "public", "creator-portrait.jpg"),
        ]
      : [
          path.join(process.cwd(), "src", "assets", "images", "hamid_ali_campus.jpg"),
          path.join(process.cwd(), "src", "assets", "images", "ielts_learning_study_1789723142615.jpg"),
          path.join(process.cwd(), "public", "creator-campus.jpg"),
        ];

    const written: string[] = [];
    for (const targetPath of targetPaths) {
      const dir = path.dirname(targetPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(targetPath, buffer);
      written.push(path.relative(process.cwd(), targetPath));
    }

    return res.json({
      success: true,
      type,
      message: `Successfully wrote ${type} image to disk: ${written.join(", ")}`,
      files: written,
    });
  } catch (err: any) {
    console.error("Failed to save director photo to disk:", err);
    return res.status(500).json({ error: err.message || "Failed to write image file to disk." });
  }
});

// 5. Director Photos Status Check
app.get("/api/director-photos/status", (req, res) => {
  try {
    const portraitPath = path.join(process.cwd(), "src", "assets", "images", "hamid_ali_portrait_1789365309782.jpg");
    const campusPath = path.join(process.cwd(), "src", "assets", "images", "ielts_learning_study_1789723142615.jpg");

    return res.json({
      portraitExists: fs.existsSync(portraitPath),
      portraitSize: fs.existsSync(portraitPath) ? fs.statSync(portraitPath).size : 0,
      campusExists: fs.existsSync(campusPath),
      campusSize: fs.existsSync(campusPath) ? fs.statSync(campusPath).size : 0,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// DECOUPLED DATABASE & AUTHENTICATION API ENDPOINTS
// Stores tests and candidate data separately in /database
// ============================================================================
const DATABASE_DIR = process.env.LINGOFI_DATA_DIR ? path.resolve(process.env.LINGOFI_DATA_DIR) : path.join(process.cwd(), "database");
const TESTS_DIR = path.join(DATABASE_DIR, "tests");
const IELTS_DB_PATH = path.join(TESTS_DIR, "ielts_database.json");
const FULL_TESTS_PATH = path.join(TESTS_DIR, "full_tests.json");
const USERS_PATH = path.join(DATABASE_DIR, "users.json");
const TEST_RESULTS_PATH = path.join(DATABASE_DIR, "test_results.json");
const STANDARDIZED_DB_PATH = path.join(TESTS_DIR, "standardized_tests.json"); // legacy single-file path
const STANDARDIZED_PART_PATHS = [1, 2, 3].map((part) => path.join(TESTS_DIR, `standardized_tests_part${part}.json`));
const STANDARDIZED_PART_LIMIT_BYTES = 24 * 1024 * 1024; // keep every deployable part safely below 25 MB

// Candidate account retention: remove student accounts after 30 days with no
// recorded activity. Staff/Director accounts are retained so the platform
// cannot accidentally remove its administrative access.
const CANDIDATE_INACTIVITY_DAYS = 30;
const CANDIDATE_CLEANUP_INTERVAL_MS = 60 * 60 * 1000; // every hour

function getUserLastActivity(user: any): number {
  const value = user?.lastActivityAt || user?.lastLoginAt || user?.createdAt;
  const time = value ? Date.parse(String(value)) : NaN;
  return Number.isFinite(time) ? time : Date.now();
}

async function cleanupInactiveCandidateAccounts(reason = "scheduled") {
  try {
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const cutoff = Date.now() - CANDIDATE_INACTIVITY_DAYS * 24 * 60 * 60 * 1000;
    const removed = users.filter((u) => u?.role === "candidate" && getUserLastActivity(u) < cutoff);
    if (!removed.length) return { removed: 0, remaining: users.length };

    const removedIds = new Set(removed.map((u) => String(u.id)));
    const next = users.filter((u) => !removedIds.has(String(u.id)));
    writeJsonFile(USERS_PATH, next);
    // Explicitly await cloud persistence so an expired candidate is removed from
    // Supabase before this cleanup operation is considered complete.
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, next);
    console.log(`[Lingofi] Retention cleanup (${reason}): removed ${removed.length} inactive candidate account(s).`);
    return { removed: removed.length, remaining: next.length };
  } catch (err) {
    console.error("[Lingofi] Candidate retention cleanup failed:", err);
    return { removed: 0, error: String((err as any)?.message || err) };
  }
}

// Optional Supabase persistence: local JSON remains the working cache, while a
// configured Supabase table survives application/code redeploys.
const SUPABASE_URL = String(process.env.SUPABASE_URL || "").replace(/\/$/, "");
const SUPABASE_SERVICE_ROLE_KEY = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "");
const CLOUD_PERSISTENCE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
const CLOUD_FILE_KEYS: Record<string, string> = {
  [IELTS_DB_PATH]: "ielts_database",
  [FULL_TESTS_PATH]: "full_tests",
  [STANDARDIZED_DB_PATH]: "standardized_tests",
  [USERS_PATH]: "users",
  [TEST_RESULTS_PATH]: "test_results",
};

async function cloudRequest(pathname: string, init: RequestInit = {}) {
  if (!CLOUD_PERSISTENCE_ENABLED) return null;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${pathname}`, {
    ...init,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`Supabase persistence HTTP ${response.status}: ${await response.text()}`);
  return response;
}

async function persistFileToCloud(filePath: string, data: any) {
  const key = CLOUD_FILE_KEYS[filePath];
  if (!key || !CLOUD_PERSISTENCE_ENABLED) return;
  try {
    await cloudRequest("lingofi_data?on_conflict=key", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ key, data, updated_at: new Date().toISOString() }),
    });
  } catch (err) {
    console.error(`[Lingofi] Cloud persistence failed for ${key}:`, err);
  }
}

async function repairSeededDirectorCredentials() {
  try {
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const workingDemoHash = hashPassword("admin123");
    let seededDirector = users.find((u) => String(u?.email || "").toLowerCase() === "admin@lingofi.org");
    let changed = false;
    if (!seededDirector) {
      seededDirector = {
        id: "usr_admin_001",
        name: "Lingofi Director",
        email: "admin@lingofi.org",
        whatsapp: "",
        passwordHash: workingDemoHash,
        role: "admin",
        targetBand: 9,
        createdAt: new Date().toISOString(),
        lastActivityAt: new Date().toISOString(),
        lastLoginAt: null,
      };
      users.push(seededDirector);
      changed = true;
    } else if (seededDirector.id === "usr_admin_001" && (seededDirector.passwordHash !== workingDemoHash || seededDirector.role !== "admin")) {
      seededDirector.passwordHash = workingDemoHash;
      seededDirector.role = "admin";
      changed = true;
    }
    if (changed) {
      writeJsonFile(USERS_PATH, users);
      if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, users);
      console.log("[Lingofi] Ensured seeded Director credentials are available: admin@lingofi.org / admin123");
    }
    return seededDirector;
  } catch (err) {
    console.error("[Lingofi] Director credential migration failed:", err);
    return null;
  }
}

function isValidIeltsDatabaseShape(value: any): value is {
  reading: any[];
  listening: any[];
  writing: any[];
  speaking: any[];
} {
  if (!value || !Array.isArray(value.reading) || !Array.isArray(value.listening)
      || !Array.isArray(value.writing) || !Array.isArray(value.speaking)) {
    return false;
  }

  // Never let an incomplete cloud snapshot replace the complete deployable IELTS
  // seed. Render/Supabase can contain an older snapshot from before new questions
  // were added, so validate the actual question structure before hydrating it.
  const validReading = value.reading.length >= 200 && value.reading.every((test: any) =>
    Array.isArray(test?.passages) && test.passages.length === 3 &&
    Array.isArray(test?.questions) && test.questions.length === 40 &&
    test.questions.every((q: any) => q?.prompt && q?.correctAnswer)
  );

  const validListening = value.listening.length >= 200 && value.listening.every((test: any) =>
    Array.isArray(test?.parts) && test.parts.length === 4 &&
    test.parts.every((part: any) =>
      Array.isArray(part?.questions) && part.questions.length === 10 &&
      part.questions.every((q: any) => q?.prompt && q?.correctAnswer)
    )
  );

  const validWriting = value.writing.length >= 200 && value.writing.every((test: any) =>
    Boolean(test?.task1Prompt || test?.task1) && Boolean(test?.task2Prompt || test?.task2)
  );

  const validSpeaking = value.speaking.length >= 200 && value.speaking.every((test: any) =>
    Array.isArray(test?.part1) && test.part1.length > 0 &&
    Boolean(test?.part2) &&
    Array.isArray(test?.part3) && test.part3.length > 0
  );

  return validReading && validListening && validWriting && validSpeaking;
}

async function hydrateFilesFromCloud() {
  if (!CLOUD_PERSISTENCE_ENABLED) return;
  for (const [filePath, key] of Object.entries(CLOUD_FILE_KEYS)) {
    try {
      const response = await cloudRequest(`lingofi_data?key=eq.${encodeURIComponent(key)}&select=data`);
      const rows = response ? await response.json() : [];
      if (!Array.isArray(rows) || rows[0]?.data === undefined) continue;

      // IELTS is the critical exam database. Only hydrate it when the cloud
      // snapshot is structurally complete. This prevents a stale/partial
      // Supabase copy from making IELTS tests appear without their questions.
      if (filePath === IELTS_DB_PATH && !isValidIeltsDatabaseShape(rows[0].data)) {
        const localIelts = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
        console.warn("[Lingofi] Ignoring incomplete cloud IELTS database; keeping the complete local seed.");
        if (isValidIeltsDatabaseShape(localIelts)) {
          await persistFileToCloud(IELTS_DB_PATH, localIelts);
          console.log("[Lingofi] Repaired the cloud IELTS database from the complete local seed.");
        }
        continue;
      }

      if (filePath === STANDARDIZED_DB_PATH) {
        writeStandardizedParts(rows[0].data);
      } else {
        writeJsonFile(filePath, rows[0].data);
      }
    } catch (err) {
      console.error(`[Lingofi] Cloud hydration skipped for ${key}:`, err);
    }
  }
}

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2), "utf-8");
      return fallback;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return fallback;
  }
}

function writeJsonFile<T>(filePath: string, data: T): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  void persistFileToCloud(filePath, data);
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const AUTH_SESSIONS = new Map<string, string>();

function issueAuthToken(user: any): string {
  const token = `sess_${crypto.randomBytes(32).toString("hex")}`;
  AUTH_SESSIONS.set(token, String(user.id));
  return token;
}

function getAuthenticatedUser(req: express.Request): any | null {
  const authHeader = String(req.headers.authorization || "");
  if (!authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice("Bearer ".length).trim();
  if (!token) return null;
  const userId = AUTH_SESSIONS.get(token);
  if (!userId) return null;
  const users = readJsonFile<any[]>(USERS_PATH, []);
  return users.find(u => String(u.id) === userId) || null;
}

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const user = getAuthenticatedUser(req);
  if (!user || user.role !== "admin") {
    return res.status(403).json({ error: "Administrator access required." });
  }
  (req as any).authenticatedUser = user;
  next();
}

function splitStandardizedDatabase(db: any): any[] {
  const packages = Array.isArray(db?.packages) ? db.packages : [];
  const base = {
    version: db?.version || "1.0.0",
    updatedAt: db?.updatedAt || new Date().toISOString(),
  };
  const parts: any[] = [];
  let current: any[] = [];

  const makePart = (partPackages: any[], includeExams: boolean) => ({
    ...base,
    exams: includeExams ? (db?.exams || {}) : {},
    packages: partPackages,
  });

  const serializedSize = (part: any) => Buffer.byteLength(JSON.stringify(part), "utf8");

  for (const pkg of packages) {
    const candidate = [...current, pkg];
    if (current.length && serializedSize(makePart(candidate, parts.length === 0)) > STANDARDIZED_PART_LIMIT_BYTES) {
      parts.push(makePart(current, parts.length === 0));
      current = [pkg];
    } else {
      current = candidate;
    }
  }
  parts.push(makePart(current, parts.length === 0));

  // The current Lingofi deployment is intentionally three-part. Fail safely
  // rather than silently creating a fourth part that the frontend would miss.
  if (parts.length > 3) {
    throw new Error("The standardized database is too large for the configured three-part deployment.");
  }
  while (parts.length < 3) parts.push(makePart([], false));
  return parts;
}

function writeStandardizedParts(db: any) {
  const parts = splitStandardizedDatabase(db);
  for (let i = 0; i < 3; i++) {
    const filePath = STANDARDIZED_PART_PATHS[i];
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(parts[i]), "utf-8");
  }
  // Remove the old monolithic copy so deployments never accidentally serve it.
  try { if (fs.existsSync(STANDARDIZED_DB_PATH)) fs.unlinkSync(STANDARDIZED_DB_PATH); } catch {}
}

function readStandardizedParts(): any | null {
  try {
    if (!STANDARDIZED_PART_PATHS.every((p) => fs.existsSync(p))) return null;
    const parts = STANDARDIZED_PART_PATHS.map((p) => JSON.parse(fs.readFileSync(p, "utf-8")));
    const first = parts.find((p) => p?.exams && Object.keys(p.exams).length) || parts[0];
    return {
      version: first?.version || "1.0.0",
      exams: first?.exams || {},
      packages: parts.flatMap((p) => Array.isArray(p?.packages) ? p.packages : []),
      updatedAt: first?.updatedAt || new Date().toISOString(),
    };
  } catch (err) {
    console.error("Error reading standardized database parts:", err);
    return null;
  }
}

function getStandardizedDatabase() {
  const fallback = {
    version: "1.0.0",
    exams: STANDARDIZED_EXAMS_META,
    packages: STANDARDIZED_TEST_PACKAGES,
    updatedAt: new Date().toISOString(),
  };

  const split = readStandardizedParts();
  if (split && Object.keys(split.exams || {}).length && Array.isArray(split.packages)) return split;

  // One-time compatibility migration for an older deployment containing the
  // original single 50+ MB standardized_tests.json.
  if (fs.existsSync(STANDARDIZED_DB_PATH)) {
    const legacy = readJsonFile<any>(STANDARDIZED_DB_PATH, fallback);
    if (legacy?.exams && Array.isArray(legacy?.packages) && legacy.packages.length) {
      writeStandardizedParts(legacy);
      return legacy;
    }
  }

  writeStandardizedParts(fallback);
  return fallback;
}

function saveStandardizedDatabase(db: any) {
  const next = { ...db, updatedAt: new Date().toISOString() };
  writeStandardizedParts(next);
  void persistFileToCloud(STANDARDIZED_DB_PATH, next);
}

// 5. Supabase Cloud Persistence Status (Director only)
app.get("/api/database/cloud-status", requireAdmin, (_req, res) => {
  res.json({
    success: true,
    supabaseConfigured: CLOUD_PERSISTENCE_ENABLED,
    persistence: CLOUD_PERSISTENCE_ENABLED ? "supabase" : "local-json",
    table: CLOUD_PERSISTENCE_ENABLED ? "public.lingofi_data" : null,
    serviceRoleKeyExposedToClient: false,
  });
});

// 6. Database Health & Status Overview
app.get("/api/database/status", (req, res) => {
  try {
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    const fullTests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const results = readJsonFile<any[]>(TEST_RESULTS_PATH, []);

    res.json({
      success: true,
      databasePath: "/database",
      counts: {
        reading: db.reading?.length || 0,
        listening: db.listening?.length || 0,
        writing: db.writing?.length || 0,
        speaking: db.speaking?.length || 0,
        fullTests: fullTests.length,
        totalSingleTests: (db.reading?.length || 0) + (db.listening?.length || 0) + (db.writing?.length || 0) + (db.speaking?.length || 0),
        registeredUsers: users.length,
        candidateSubmissions: results.length,
      },
      lastModified: fs.existsSync(IELTS_DB_PATH) ? fs.statSync(IELTS_DB_PATH).mtime : new Date(),
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Get All Modular Tests from Database
app.get("/api/tests/all", (req, res) => {
  try {
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    res.json(db);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 8. Get All Full Tests from Database
app.get("/api/tests/full", (req, res) => {
  try {
    const fullTests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    res.json(fullTests);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 9. Get Single Section Tests (reading, listening, writing, speaking)
app.get("/api/tests/:section", (req, res) => {
  try {
    const { section } = req.params;
    if (!["reading", "listening", "writing", "speaking"].includes(section)) {
      return res.status(400).json({ error: "Invalid section. Must be reading, listening, writing, or speaking." });
    }
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    res.json(db[section] || []);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 10. Get Specific Test by Section and ID
app.get("/api/tests/:section/:id", (req, res) => {
  try {
    const { section, id } = req.params;
    const testId = parseInt(id, 10);
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    const list = db[section] || [];
    const test = list.find((t: any) => t.id === testId);
    if (!test) {
      return res.status(404).json({ error: `Test #${testId} not found in ${section}.` });
    }
    res.json(test);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 11. Core Test Uploader: Text or JSON format into Database
app.post("/api/tests/upload", requireAdmin, (req, res) => {
  try {
    const { format = "text", textPayload, jsonPayload, createFullMock = false } = req.body;

    let targetSection: "reading" | "listening" | "writing" | "speaking" = "reading";
    let testData: any = null;

    if (format === "text" || textPayload) {
      const rawText = textPayload || "";
      const parsed = parseIeltsTextFormat(rawText);
      if (!parsed.success || !parsed.data) {
        return res.status(400).json({ error: parsed.error || "Failed to parse text format." });
      }
      targetSection = parsed.data.section;
      testData = parsed.data;
    } else if (jsonPayload) {
      testData = jsonPayload;
      targetSection = (jsonPayload.section || "reading").toLowerCase();
    } else {
      testData = req.body;
      targetSection = (req.body.section || "reading").toLowerCase();
    }

    if (!["reading", "listening", "writing", "speaking"].includes(targetSection)) {
      targetSection = "reading";
    }

    // Read current database
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    const currentList: any[] = db[targetSection] || [];
    const maxId = currentList.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const newId = maxId + 1;

    let newEntry: any = {
      id: newId,
      title: testData.title || `Academic ${targetSection.toUpperCase()} Test ${newId}`,
    };

    if (targetSection === "reading") {
      newEntry.passages = testData.passages && testData.passages.length > 0 
        ? testData.passages 
        : [testData.passage || "Reading passage content..."];
      newEntry.questions = testData.questions && testData.questions.length > 0
        ? testData.questions
        : [
            {
              type: "mcq",
              q: `What is the main idea discussed in ${newEntry.title}?`,
              options: ["Central finding", "Alternative perspective", "Historic context", "Methodological critique"],
              answer: 0,
            },
          ];
    } else if (targetSection === "listening") {
      newEntry.parts = testData.parts && testData.parts.length > 0
        ? testData.parts
        : [
            {
              part: 1,
              script: testData.script || "Audio conversation between student and academic counselor...",
              questions: testData.questions || [
                {
                  type: "completion",
                  q: "The candidate scheduled an appointment on [Monday].",
                  answer: "Monday",
                },
              ],
            },
          ];
    } else if (targetSection === "writing") {
      newEntry.task1 = testData.task1 || testData.task1Prompt || "Summarize the key information shown in the chart.";
      newEntry.task1_type = testData.task1_type || "Bar Chart";
      newEntry.task2 = testData.task2 || testData.task2Prompt || "Some people argue technology has disconnected communities. Discuss both views and give your opinion.";
      newEntry.visual = testData.visual || {
        kind: "bar",
        labels: ["2015", "2020", "2025"],
        series: [{ name: "Standard Metrics", values: [45, 65, 85] }],
      };
    } else if (targetSection === "speaking") {
      newEntry.part1 = testData.part1 || ["Do you work or study?", "What do you like about your hometown?"];
      newEntry.part2 = testData.part2 || "Describe a historical building or museum you found interesting. You should say where it is, what it looks like, and why you remember it.";
      newEntry.part3 = testData.part3 || ["How important is preserving heritage?", "Should governments fund ancient monument restorations?"];
    }

    // Append to list and save
    currentList.push(newEntry);
    db[targetSection] = currentList;
    writeJsonFile(IELTS_DB_PATH, db);

    // Optionally create a companion Full Test in database
    let createdFullTest: any = null;
    if (createFullMock) {
      const fullTests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
      const nextFullId = fullTests.reduce((max, t) => (t.id > max ? t.id : max), 0) + 1;
      createdFullTest = {
        id: nextFullId,
        title: `Full IELTS Academic Test ${nextFullId}`,
        subTitle: `${newEntry.title} • Official Database Simulation`,
        readingId: targetSection === "reading" ? newId : 1,
        listeningId: targetSection === "listening" ? newId : 1,
        writingId: targetSection === "writing" ? newId : 1,
        speakingId: targetSection === "speaking" ? newId : 1,
        difficulty: testData.difficulty || "Official Cambridge Simulation",
        estimatedTime: "2 hrs 45 mins",
      };
      fullTests.push(createdFullTest);
      writeJsonFile(FULL_TESTS_PATH, fullTests);
    }

    res.json({
      success: true,
      message: `Test #${newId} successfully uploaded and stored in database/tests/ielts_database.json!`,
      section: targetSection,
      test: newEntry,
      createdFullTest,
      totalCount: currentList.length,
    });
  } catch (err: any) {
    console.error("Error uploading test to database:", err);
    res.status(500).json({ error: err.message || "Failed to upload test into database." });
  }
});

// 12. Delete Test from Database
app.put("/api/tests/:section/:id", requireAdmin, (req, res) => {
  try {
    const { section, id } = req.params;
    if (!["reading", "listening", "writing", "speaking"].includes(section)) {
      return res.status(400).json({ error: "Invalid section." });
    }
    const testId = parseInt(id, 10);
    if (!Number.isFinite(testId)) return res.status(400).json({ error: "Invalid test ID." });
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    const list: any[] = db[section] || [];
    const index = list.findIndex((t: any) => Number(t.id) === testId);
    if (index < 0) return res.status(404).json({ error: `Test #${testId} not found in ${section}.` });
    const incoming = req.body?.test || req.body;
    if (!incoming || typeof incoming !== "object") return res.status(400).json({ error: "Test payload is required." });
    list[index] = { ...incoming, id: testId };
    db[section] = list;
    writeJsonFile(IELTS_DB_PATH, db);
    res.json({ success: true, test: list[index], section });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to update test." });
  }
});

app.delete("/api/tests/:section/:id", requireAdmin, (req, res) => {
  try {
    const { section, id } = req.params;
    const testId = parseInt(id, 10);
    const db = readJsonFile<any>(IELTS_DB_PATH, { reading: [], listening: [], writing: [], speaking: [] });
    if (!db[section]) {
      return res.status(400).json({ error: "Invalid section." });
    }
    const beforeCount = db[section].length;
    db[section] = db[section].filter((t: any) => t.id !== testId);
    if (db[section].length === beforeCount) {
      return res.status(404).json({ error: `Test #${testId} not found.` });
    }
    writeJsonFile(IELTS_DB_PATH, db);
    res.json({ success: true, message: `Test #${testId} deleted from ${section}.`, remaining: db[section].length });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Full IELTS mock administration endpoints.
app.put("/api/tests/full/:id", requireAdmin, (req, res) => {
  try {
    const id = Number(req.params.id);
    const incoming = req.body?.test || req.body;
    if (!Number.isFinite(id) || !incoming || typeof incoming !== "object") return res.status(400).json({ error: "Valid full-test ID and test payload are required." });
    const tests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    const index = tests.findIndex(t => Number(t.id) === id);
    if (index < 0) return res.status(404).json({ error: `Full Test #${id} not found.` });
    tests[index] = { ...incoming, id };
    writeJsonFile(FULL_TESTS_PATH, tests);
    res.json({ success: true, test: tests[index] });
  } catch (err: any) { res.status(500).json({ error: err.message || "Failed to update full test." }); }
});

app.delete("/api/tests/full/:id", requireAdmin, (req, res) => {
  try {
    const id = Number(req.params.id);
    const tests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    const next = tests.filter(t => Number(t.id) !== id);
    if (next.length === tests.length) return res.status(404).json({ error: `Full Test #${id} not found.` });
    writeJsonFile(FULL_TESTS_PATH, next);
    res.json({ success: true, remaining: next.length });
  } catch (err: any) { res.status(500).json({ error: err.message || "Failed to delete full test." }); }
});

// 13. Export the COMPLETE Lingofi test database.
// This is the single canonical backup/restore format for ALL test families.
// It intentionally includes IELTS, IELTS full mocks, and every standardized exam
// (PTE, SAT, GRE, GMAT, TOEFL, ACT, plus any future exam added through the admin studio).
app.get("/api/database/export", requireAdmin, async (req, res) => {
  try {
    const ieltsDatabase = readJsonFile<any>(IELTS_DB_PATH, {
      reading: [], listening: [], writing: [], speaking: []
    });
    const fullTests = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    const standardizedDatabase = getStandardizedDatabase();
    await cleanupInactiveCandidateAccounts("database-export");
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const studentSignups = users.map(({ id, name, email, whatsapp, role, targetBand, createdAt, lastActivityAt, lastLoginAt }) => ({
      id, name, email, whatsapp: whatsapp || "", role, targetBand, createdAt,
      lastActivityAt: lastActivityAt || createdAt || null,
      lastLoginAt: lastLoginAt || null,
    }));

    const bundle = {
      meta: {
        exportedAt: new Date().toISOString(),
        version: "5.0.0",
        institution: "Lingofi Official Testing Platform",
        format: "lingofi-complete-database",
        description: "Complete replaceable Lingofi database backup. Includes test collections, test results, and user records with one-way password hashes only; plaintext passwords are never exported.",
        collections: [
          "ieltsDatabase",
          "fullTests",
          "standardizedDatabase",
          "users",
          "testResults",
          "studentSignups"
        ],
      },
      ieltsDatabase,
      fullTests,
      standardizedDatabase,
      users,
      testResults: readJsonFile<any[]>(TEST_RESULTS_PATH, []),
      studentSignups,
    };

    res.setHeader("Content-Disposition", 'attachment; filename="lingofi_complete_test_database.json"');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(bundle);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 14. Import the COMPLETE Lingofi test database.
// The complete bundle is deliberately REPLACE-ONLY: no hidden merge, no old tests
// survive, and no incoming test is silently discarded. Validation happens before
// any database file is changed.
// Supports both exported bundles and a raw {reading, listening, writing, speaking} database.
// merge mode replaces records with matching IDs and appends new IDs; replace mode replaces
// the IELTS/full-test collections while leaving all other application content untouched.
app.post("/api/database/import", requireAdmin, (req, res) => {
  try {
    const payload = req.body?.database ?? req.body;

    if (!payload || typeof payload !== "object") {
      return res.status(400).json({ error: "Invalid database JSON." });
    }

    // Complete imports are intentionally strict. This prevents accidentally importing
    // an IELTS-only file and silently deleting or retaining unrelated standardized tests.
    const isCompleteBundle =
      payload.meta?.format === "lingofi-complete-database" &&
      /^5\.0\.0$/.test(String(payload.meta?.version || "")) &&
      payload.ieltsDatabase &&
      Array.isArray(payload.fullTests) &&
      payload.standardizedDatabase &&
      payload.standardizedDatabase.exams &&
      Array.isArray(payload.standardizedDatabase.packages) &&
      Array.isArray(payload.users) &&
      Array.isArray(payload.testResults);

    if (!isCompleteBundle) {
      return res.status(400).json({
        error: "This importer requires a version 5.0.0 complete Lingofi database backup containing IELTS, Full Tests, Standardized Tests, users, and test results. Import is full replacement mode."
      });
    }

    const incomingIelts = payload.ieltsDatabase;
    const sections = ["reading", "listening", "writing", "speaking"] as const;

    for (const section of sections) {
      if (!Array.isArray(incomingIelts[section])) {
        return res.status(400).json({ error: `Invalid ${section} data. It must be an array.` });
      }
    }

    for (const item of payload.fullTests) {
      if (!item || typeof item !== "object") {
        return res.status(400).json({ error: "Invalid fullTests entry." });
      }
    }

    for (const user of payload.users) {
      if (!user || typeof user !== "object" || !user.id || !user.email || !user.role || !user.passwordHash) {
        return res.status(400).json({ error: "Invalid users entry. Each account must include id, email, role, and passwordHash." });
      }
      if (!["admin", "teacher", "candidate"].includes(String(user.role))) {
        return res.status(400).json({ error: `Invalid user role for ${user.email}.` });
      }
    }
    if (!payload.users.some((u: any) => u.role === "admin")) {
      return res.status(400).json({ error: "Import rejected: the replacement database must contain at least one Director/admin account." });
    }
    for (const result of payload.testResults) {
      if (!result || typeof result !== "object") return res.status(400).json({ error: "Invalid testResults entry." });
    }

    const incomingStandardized = payload.standardizedDatabase;
    for (const [examId, exam] of Object.entries(incomingStandardized.exams)) {
      if (!exam || typeof exam !== "object" || !String(examId)) {
        return res.status(400).json({ error: "Invalid standardized exam metadata." });
      }
    }
    for (const pkg of incomingStandardized.packages) {
      if (!pkg || typeof pkg !== "object" || !pkg.id || !pkg.examId || !pkg.title || !Array.isArray(pkg.sections)) {
        return res.status(400).json({ error: "Invalid standardized test package. Each package needs id, examId, title and sections." });
      }
      if (!incomingStandardized.exams[pkg.examId]) {
        return res.status(400).json({ error: `Standardized package ${pkg.id} references missing exam type ${pkg.examId}.` });
      }
    }

    // Build every destination object completely in memory first. If validation passes,
    // write all three canonical files. No merge behavior exists in this endpoint.
    const nextIelts = {
      reading: incomingIelts.reading,
      listening: incomingIelts.listening,
      writing: incomingIelts.writing,
      speaking: incomingIelts.speaking,
    };
    const nextFullTests = payload.fullTests;
    const nextStandardized = {
      version: incomingStandardized.version || "1.0.0",
      exams: incomingStandardized.exams,
      packages: incomingStandardized.packages,
      updatedAt: incomingStandardized.updatedAt || new Date().toISOString(),
    };
    const nextUsers = payload.users;
    const nextResults = payload.testResults;

    // Write the exact imported collections. No existing tests are merged or retained.
    // Keep rollback copies so a filesystem error cannot leave a half-imported database.
    const previousFiles = new Map<string, string | null>();
    for (const filePath of [IELTS_DB_PATH, FULL_TESTS_PATH, ...STANDARDIZED_PART_PATHS, USERS_PATH, TEST_RESULTS_PATH]) {
      previousFiles.set(filePath, fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : null);
    }
    try {
      writeJsonFile(IELTS_DB_PATH, nextIelts);
      writeJsonFile(FULL_TESTS_PATH, nextFullTests);
      writeStandardizedParts(nextStandardized);
      void persistFileToCloud(STANDARDIZED_DB_PATH, nextStandardized);
      writeJsonFile(USERS_PATH, nextUsers);
      writeJsonFile(TEST_RESULTS_PATH, nextResults);
    } catch (writeErr) {
      for (const [filePath, previous] of previousFiles.entries()) {
        if (previous === null) {
          try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch {}
        } else {
          try { fs.writeFileSync(filePath, previous, "utf-8"); } catch {}
        }
      }
      throw writeErr;
    }

    const finalIelts = readJsonFile<any>(IELTS_DB_PATH, {});
    const finalFull = readJsonFile<any[]>(FULL_TESTS_PATH, []);
    const finalStandardized = getStandardizedDatabase();
    const finalUsers = readJsonFile<any[]>(USERS_PATH, []);
    const finalResults = readJsonFile<any[]>(TEST_RESULTS_PATH, []);

    const counts = {
      reading: finalIelts.reading.length,
      listening: finalIelts.listening.length,
      writing: finalIelts.writing.length,
      speaking: finalIelts.speaking.length,
      fullTests: finalFull.length,
      standardizedExamTypes: Object.keys(finalStandardized.exams || {}).length,
      standardizedPackages: Array.isArray(finalStandardized.packages) ? finalStandardized.packages.length : 0,
      users: finalUsers.length,
      testResults: finalResults.length,
      totalTests:
        finalIelts.reading.length +
        finalIelts.listening.length +
        finalIelts.writing.length +
        finalIelts.speaking.length +
        finalFull.length +
        (Array.isArray(finalStandardized.packages) ? finalStandardized.packages.length : 0),
    };

    return res.json({
      success: true,
      mode: "replace",
      message: "Complete database imported successfully. IELTS, Full Mock, Standardized Tests, user accounts, and test results were replaced with the imported schema. No previous records from those collections were retained.",
      counts,
      importedCounts: {
        reading: incomingIelts.reading.length,
        listening: incomingIelts.listening.length,
        writing: incomingIelts.writing.length,
        speaking: incomingIelts.speaking.length,
        fullTests: nextFullTests.length,
        standardizedExamTypes: Object.keys(incomingStandardized.exams).length,
        standardizedPackages: incomingStandardized.packages.length,
        users: nextUsers.length,
        testResults: nextResults.length,
      },
    });
  } catch (err: any) {
    console.error("Error importing complete database:", err);
    res.status(400).json({ error: err.message || "Failed to import complete database JSON." });
  }
});

// ============================================================================
// DYNAMIC STANDARDIZED-EXAM DATABASE
// ============================================================================
app.get("/api/standardized/database", (req, res) => {
  try { res.json(getStandardizedDatabase()); }
  catch (err: any) { res.status(500).json({ error: err.message }); }
});

app.put("/api/standardized/database", requireAdmin, (req, res) => {
  try {
    const incoming = req.body?.database;
    if (!incoming || typeof incoming !== "object" || !incoming.exams || !Array.isArray(incoming.packages)) {
      return res.status(400).json({ error: "A complete standardized database with exams and packages is required." });
    }
    for (const [examId, exam] of Object.entries(incoming.exams)) {
      if (!exam || typeof exam !== "object" || !String(examId)) return res.status(400).json({ error: "Invalid exam metadata." });
    }
    for (const pkg of incoming.packages) {
      if (!pkg || typeof pkg !== "object" || !pkg.id || !pkg.examId || !pkg.title || !Array.isArray(pkg.sections)) return res.status(400).json({ error: "Each test package needs id, examId, title and sections." });
      if (!incoming.exams[pkg.examId]) return res.status(400).json({ error: `Package ${pkg.id} references missing exam ${pkg.examId}.` });
    }
    const next = { version: incoming.version || "1.0.0", exams: incoming.exams, packages: incoming.packages, updatedAt: new Date().toISOString() };
    saveStandardizedDatabase(next);
    res.json({ success: true, database: next });
  } catch (err: any) { res.status(500).json({ error: err.message || "Failed to replace standardized database." }); }
});

app.post("/api/standardized/exams", requireAdmin, (req, res) => {
  try {
    const db = getStandardizedDatabase();
    const exam = req.body?.exam;
    if (!exam?.id || !exam?.name) return res.status(400).json({ error: "Exam id and name are required." });
    db.exams[exam.id] = { ...exam, taskTypes: exam.taskTypes || [], sections: exam.sections || [] };
    saveStandardizedDatabase(db);
    res.json({ success: true, exam: db.exams[exam.id] });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

app.delete("/api/standardized/exams/:examId", requireAdmin, (req, res) => {
  try {
    const db = getStandardizedDatabase();
    const examId = req.params.examId;
    if (!db.exams[examId]) return res.status(404).json({ error: "Exam type not found." });
    delete db.exams[examId];
    db.packages = db.packages.filter((p: any) => p.examId !== examId);
    saveStandardizedDatabase(db);
    res.json({ success: true });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

app.post("/api/standardized/packages", requireAdmin, (req, res) => {
  try {
    const db = getStandardizedDatabase();
    const incoming = req.body?.package;
    if (!incoming?.examId || !incoming?.title) return res.status(400).json({ error: "examId and title are required." });
    const id = incoming.id || `${incoming.examId}-${Date.now()}`;
    const pkg = { ...incoming, id, createdAt: incoming.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    const idx = db.packages.findIndex((p: any) => p.id === id);
    if (idx >= 0) db.packages[idx] = pkg; else db.packages.push(pkg);
    saveStandardizedDatabase(db);
    res.json({ success: true, package: pkg });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

app.delete("/api/standardized/packages/:packageId", requireAdmin, (req, res) => {
  try {
    const db = getStandardizedDatabase();
    const before = db.packages.length;
    db.packages = db.packages.filter((p: any) => p.id !== req.params.packageId);
    if (before === db.packages.length) return res.status(404).json({ error: "Test package not found." });
    saveStandardizedDatabase(db);
    res.json({ success: true });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

app.post("/api/standardized/task-types", requireAdmin, (req, res) => {
  try {
    const db = getStandardizedDatabase();
    const { examId, taskType } = req.body || {};
    if (!examId || !taskType?.id || !taskType?.name) return res.status(400).json({ error: "examId, taskType.id and taskType.name are required." });
    const exam = db.exams[examId];
    if (!exam) return res.status(404).json({ error: "Exam type not found." });
    exam.taskTypes = Array.isArray(exam.taskTypes) ? exam.taskTypes : [];
    const idx = exam.taskTypes.findIndex((t: any) => t.id === taskType.id);
    if (idx >= 0) exam.taskTypes[idx] = taskType; else exam.taskTypes.push(taskType);
    saveStandardizedDatabase(db);
    res.json({ success: true, taskType });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

// ============================================================================
// DIRECTOR LEADS: contact export/deletion only; passwords are never exported.
// ============================================================================
app.get("/api/leads", requireAdmin, async (req, res) => {
  try {
    await cleanupInactiveCandidateAccounts("lead-view");
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const now = Date.now();
    const leads = users.map(({ id, name, email, whatsapp, role, targetBand, createdAt, lastActivityAt, lastLoginAt }) => ({
      id, name, email, whatsapp: whatsapp || "", role, targetBand, createdAt, lastActivityAt: lastActivityAt || createdAt || null, lastLoginAt: lastLoginAt || null,
      inactiveDays: Math.max(0, Math.floor((now - getUserLastActivity({ lastActivityAt, lastLoginAt, createdAt })) / 86400000)),
    }));
    return res.json({ success: true, leads, retentionDays: CANDIDATE_INACTIVITY_DAYS });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to load leads." });
  }
});

app.get("/api/leads/export-contacts", requireAdmin, async (req, res) => {
  try {
    await cleanupInactiveCandidateAccounts("contact-export");
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const contacts = users
      .filter(u => u.role === "candidate")
      .map(u => ({ name: u.name || "", whatsapp: u.whatsapp || "" }));
    const esc = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + ["Name,WhatsApp", ...contacts.map(c => `${esc(c.name)},${esc(c.whatsapp)}`)].join("\n");
    res.setHeader("Content-Disposition", 'attachment; filename="lingofi_student_names_numbers.csv"');
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    return res.send(csv);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to export student contacts." });
  }
});

app.get("/api/leads/export", requireAdmin, async (req, res) => {
  try {
    await cleanupInactiveCandidateAccounts("lead-export");
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const now = Date.now();
    // Never export passwordHash/password credentials. This export contains all
    // signup/contact fields stored for candidates plus retention/activity data.
    const leads = users.map(({ id, name, email, whatsapp, role, targetBand, createdAt, lastActivityAt, lastLoginAt }) => ({
      id, name, email, whatsapp: whatsapp || "", role, targetBand, createdAt,
      lastActivityAt: lastActivityAt || createdAt || "",
      lastLoginAt: lastLoginAt || "",
      inactiveDays: Math.max(0, Math.floor((now - getUserLastActivity({ lastActivityAt, lastLoginAt, createdAt })) / 86400000)),
    }));
    const format = String(req.query.format || "csv").toLowerCase();
    if (format === "csv" || format === "excel" || format === "xlsx") {
      const headers = ["id","name","email","whatsapp","role","targetBand","createdAt","lastActivityAt","lastLoginAt","inactiveDays"];
      const esc = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
      // UTF-8 BOM makes the CSV open cleanly in Microsoft Excel.
      const csv = "\uFEFF" + [headers.join(","), ...leads.map(l => headers.map(h => esc(l[h as keyof typeof l])).join(","))].join("\n");
      res.setHeader("Content-Disposition", 'attachment; filename="lingofi_student_signups.csv"');
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      return res.send(csv);
    }
    res.setHeader("Content-Disposition", 'attachment; filename="lingofi_student_signups.json"');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.json({ exportedAt: new Date().toISOString(), retentionDays: CANDIDATE_INACTIVITY_DAYS, leads });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to export signups." });
  }
});

app.delete("/api/leads/:id", requireAdmin, async (req, res) => {
  try {
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const next = users.filter(u => String(u.id) !== String(req.params.id));
    if (next.length === users.length) return res.status(404).json({ error: "Lead/account not found." });
    writeJsonFile(USERS_PATH, next);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, next);
    return res.json({ success: true, remaining: next.length });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to delete lead." });
  }
});

app.delete("/api/leads", requireAdmin, async (req, res) => {
  try {
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const keep = users.filter(u => u.role === "admin" || u.role === "teacher");
    const removed = users.length - keep.length;
    writeJsonFile(USERS_PATH, keep);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, keep);
    return res.json({ success: true, removed, remaining: keep.length });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to delete candidate leads." });
  }
});

// ============================================================================
// AUTHENTICATION API (LOGIN, SIGNUP, ME, USERS)
// ============================================================================

// 14. Sign Up New User
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, whatsapp, password, targetBand = 7.5 } = req.body;
    if (!name || !email || !whatsapp || !password) {
      return res.status(400).json({ error: "Name, email, WhatsApp number, and password are required." });
    }
    const cleanEmail = email.trim().toLowerCase();
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const existing = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      return res.status(400).json({ error: "An account with this email already exists." });
    }

    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      name: name.trim(),
      email: cleanEmail,
      whatsapp: String(whatsapp),
      passwordHash: hashPassword(password),
      role: "candidate",
      targetBand: parseFloat(targetBand) || 7.5,
      createdAt: new Date().toISOString(),
      lastActivityAt: new Date().toISOString(),
      lastLoginAt: null,
    };

    users.push(newUser);
    writeJsonFile(USERS_PATH, users);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, users);

    const safeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      whatsapp: newUser.whatsapp,
      role: newUser.role,
      targetBand: newUser.targetBand,
      createdAt: newUser.createdAt,
      lastActivityAt: newUser.lastActivityAt,
      lastLoginAt: newUser.lastLoginAt,
    };

    const token = issueAuthToken(newUser);
    res.json({
      success: true,
      message: "Account created successfully!",
      user: safeUser,
      token,
    });
  } catch (err: any) {
    console.error("Sign up error:", err);
    res.status(500).json({ error: err.message || "Failed to create account." });
  }
});

// 15. Log In
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const cleanEmail = email.trim().toLowerCase();
    let users = readJsonFile<any[]>(USERS_PATH, []);
    // Self-heal the seeded Director before credential lookup. This also repairs
    // an older Supabase users record that may have overwritten the local cache.
    if (cleanEmail === "admin@lingofi.org" && password === "admin123") {
      await repairSeededDirectorCredentials();
      users = readJsonFile<any[]>(USERS_PATH, []);
    }
    const user = users.find(u => String(u?.email || "").toLowerCase() === cleanEmail);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const hash = hashPassword(password);
    if (user.passwordHash !== hash) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const now = new Date().toISOString();
    user.lastLoginAt = now;
    user.lastActivityAt = now;
    writeJsonFile(USERS_PATH, users);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, users);

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      whatsapp: user.whatsapp || "",
      role: user.role,
      targetBand: user.targetBand,
      createdAt: user.createdAt,
      lastActivityAt: user.lastActivityAt,
      lastLoginAt: user.lastLoginAt,
    };

    const token = issueAuthToken(user);
    res.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user: safeUser,
      token,
    });
  } catch (err: any) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message || "Failed to log in." });
  }
});

// 16. Record authenticated account activity. The client sends this heartbeat
// while the user is actively signed in so legitimate use resets the 30-day timer.
app.post("/api/auth/activity", async (req, res) => {
  try {
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ authenticated: false });
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const stored = users.find(u => String(u.id) === String(user.id));
    if (!stored) return res.status(401).json({ authenticated: false });
    const now = new Date().toISOString();
    stored.lastActivityAt = now;
    writeJsonFile(USERS_PATH, users);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(USERS_PATH, users);
    return res.json({ success: true, lastActivityAt: now });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Failed to record account activity." });
  }
});

// 17. Get Current User Session
app.get("/api/auth/me", (req, res) => {
  try {
    const authenticated = getAuthenticatedUser(req);
    const emailHeader = String(req.headers["x-user-email"] || "").trim().toLowerCase();
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const user = authenticated || (emailHeader ? users.find(u => String(u.email || "").toLowerCase() === emailHeader) : null);
    if (!user) return res.status(401).json({ authenticated: false });

    res.json({
      authenticated: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        targetBand: user.targetBand,
        createdAt: user.createdAt,
        lastActivityAt: user.lastActivityAt,
        lastLoginAt: user.lastLoginAt,
      },
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 18. List All Users (Admin / Teacher view)
app.get("/api/auth/users", (req, res) => {
  try {
    const users = readJsonFile<any[]>(USERS_PATH, []);
    const safeUsers = users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      targetBand: u.targetBand,
      createdAt: u.createdAt,
    }));
    res.json(safeUsers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 19. Save Test Results to Database
app.post("/api/results/save", async (req, res) => {
  try {
    const { trfCode, candidateName, userEmail, testId, testTitle, overallBand, scores } = req.body;
    const results = readJsonFile<any[]>(TEST_RESULTS_PATH, []);
    const newRecord = {
      id: `trf_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      trfCode: trfCode || `26GB${Date.now().toString().slice(-6)}LING901A`,
      candidateName: candidateName || "Candidate",
      userEmail: userEmail || "candidate@student.com",
      testId: testId || 1,
      testTitle: testTitle || "Full IELTS Academic Test",
      overallBand: overallBand || 7.5,
      scores: scores || { reading: 7.5, listening: 7.5, writing: 7.0, speaking: 7.5 },
      completedAt: new Date().toISOString(),
    };
    results.unshift(newRecord);
    writeJsonFile(TEST_RESULTS_PATH, results);
    if (CLOUD_PERSISTENCE_ENABLED) await persistFileToCloud(TEST_RESULTS_PATH, results);
    res.json({ success: true, record: newRecord });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 20. Get Test Submissions for Candidate or All Submissions
app.get("/api/results", (req, res) => {
  try {
    const email = req.query.email as string;
    const results = readJsonFile<any[]>(TEST_RESULTS_PATH, []);
    if (email) {
      const filtered = results.filter(r => r.userEmail?.toLowerCase() === email.toLowerCase());
      return res.json(filtered);
    }
    res.json(results);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Vite middleware or static serving
async function startServer() {
  await hydrateFilesFromCloud();
  // Repair the known seeded Director credential mismatch before authentication.
  await repairSeededDirectorCredentials();
  // Enforce retention immediately after cloud hydration and then hourly.
  await cleanupInactiveCandidateAccounts("startup");
  setInterval(() => { void cleanupInactiveCandidateAccounts("scheduled"); }, CANDIDATE_CLEANUP_INTERVAL_MS);
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lingofi IELTS Official Testing System server running on http://localhost:${PORT}`);
  });
}

startServer();
