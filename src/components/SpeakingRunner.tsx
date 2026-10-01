import React, { useState, useEffect, useRef } from "react";
import { SpeakingTest } from "../types/ielts";
import { saveAttempt, getAttempt } from "../utils/storage";
import { 
  Clock, 
  CheckCircle, 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  AlertCircle, 
  FileText, 
  CheckCircle2,
  Award,
  Radio,
  FileCheck,
  RefreshCw,
  Sliders,
  AudioLines,
  ShieldCheck,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SpeakingQuestionRecorder, QuestionEvaluationResult } from "./SpeakingQuestionRecorder";
import { AutonomousExaminerRoom } from "./AutonomousExaminerRoom";
import { stopAllActiveMedia } from "../utils/audioControl";
import { useLanguage } from "../context/LanguageContext";
import { translateReadingTextPure } from "../utils/readingZeroEnglishEngine";
import { speakInLanguage } from "../utils/speechVoice";

interface SpeakingRunnerProps {
  test: SpeakingTest;
  onBack: () => void;
  onComplete: () => void;
  onOpenCertificate?: () => void;
}

export const SpeakingRunner: React.FC<SpeakingRunnerProps> = ({ 
  test, 
  onBack, 
  onComplete,
  onOpenCertificate 
}) => {
  const { t, currentLanguage, currentLanguageInfo, speak, speakEnglish, stopSpeaking } = useLanguage();
  const localize = (str: string): string => {
    if (!str || currentLanguage === "en") return str;
    return translateReadingTextPure(str, currentLanguage);
  };
  const previous = getAttempt("speaking", test.id);
  const [activePart, setActivePart] = useState<1 | 2 | 3>(1); // Default to Part 1 interview
  const [prepSeconds, setPrepSeconds] = useState<number>(60);
  const [isPrepRunning, setIsPrepRunning] = useState<boolean>(false);
  const [speakSeconds, setSpeakSeconds] = useState<number>(120);
  const [isSpeakRunning, setIsSpeakRunning] = useState<boolean>(false);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null);
  const [transcript, setTranscript] = useState<string>(previous?.speakingTranscript || "");
  const [prepNotes, setPrepNotes] = useState<string>("");

  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [aiStatusMsg, setAiStatusMsg] = useState<string>("");
  const [aiError, setAiError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(!!previous);

  // Per-question recording evaluations for Part 1 and Part 3
  const [part1Results, setPart1Results] = useState<Record<number, QuestionEvaluationResult>>({});
  const [part3Results, setPart3Results] = useState<Record<number, QuestionEvaluationResult>>({});

  // Autonomous Examiner vs Individual Cards mode
  const [interviewMode, setInterviewMode] = useState<"autonomous" | "cards">("autonomous");

  // Microphone permission and level meter
  const [micPermission, setMicPermission] = useState<"unknown" | "granted" | "denied">("unknown");
  const [micTesting, setMicTesting] = useState<boolean>(false);
  const [micVolume, setMicVolume] = useState<number>(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<any>(null);

  // Clean up all audio on unmount
  useEffect(() => {
    return () => {
      stopAllActiveMedia();
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch {}
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        try { mediaRecorderRef.current.stop(); } catch {}
      }
    };
  }, []);

  // When activePart changes, stop all speech & audio
  useEffect(() => {
    stopAllActiveMedia();
  }, [activePart]);

  // Check microphone permissions on mount
  useEffect(() => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "microphone" as any })
        .then(pStatus => {
          setMicPermission(pStatus.state as any);
          pStatus.onchange = () => {
            setMicPermission(pStatus.state as any);
          };
        })
        .catch(() => {});
    }
  }, []);

  // Request / Test microphone permission
  const handleRequestMicPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission("granted");
      setMicTesting(true);

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const audioCtx = new AudioCtx();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
        const dataArr = new Uint8Array(analyser.frequencyBinCount);

        let frames = 0;
        const checkLevel = () => {
          analyser.getByteFrequencyData(dataArr);
          let sum = 0;
          for (let i = 0; i < dataArr.length; i++) sum += dataArr[i];
          const avg = sum / dataArr.length;
          setMicVolume(Math.min(100, Math.round(avg * 2.5)));
          frames++;
          if (frames < 50) {
            requestAnimationFrame(checkLevel);
          } else {
            setMicTesting(false);
            setMicVolume(0);
            stream.getTracks().forEach(t => t.stop());
            audioCtx.close();
          }
        };
        requestAnimationFrame(checkLevel);
      } else {
        setTimeout(() => {
          setMicTesting(false);
          stream.getTracks().forEach(t => t.stop());
        }, 1500);
      }
    } catch (err) {
      setMicPermission("denied");
      setAiError("Microphone permission was denied. Please allow microphone access in your browser settings to record answers.");
    }
  };

  // 1-minute prep timer
  useEffect(() => {
    if (!isPrepRunning) return;
    const interval = setInterval(() => {
      setPrepSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPrepRunning]);

  // Handle prep time expiration safely outside render/updater
  useEffect(() => {
    if (prepSeconds === 0 && isPrepRunning) {
      setIsPrepRunning(false);
      speakInLanguage("One minute preparation time has ended. Please begin speaking now.", "en");
    }
  }, [prepSeconds, isPrepRunning]);

  // 2-minute speaking timer
  useEffect(() => {
    if (!isSpeakRunning) return;
    const interval = setInterval(() => {
      setSpeakSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSpeakRunning]);

  // Handle speak time expiration safely outside render/updater
  useEffect(() => {
    if (speakSeconds === 0 && isSpeakRunning) {
      setIsSpeakRunning(false);
      handleStopRecording();
    }
  }, [speakSeconds, isSpeakRunning]);

  // Read question aloud with speech synthesis in the active language
  const handleReadQuestion = (text: string) => {
    speakEnglish(text, { rate: 0.95 });
  };

  // Start Voice Recording + Live Speech-to-Text
  const handleStartRecording = async () => {
    try {
      setAiError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setRecordedAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start(250);
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setIsSpeakRunning(true);

      // Start SpeechRecognition if available in browser for interim live display in selected language
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognizer = new SpeechRecognition();
        recognizer.continuous = true;
        recognizer.interimResults = true;
        recognizer.lang = "en-US";

        recognizer.onresult = (event: any) => {
          let currentSpeech = "";
          for (let i = 0; i < event.results.length; i++) {
            currentSpeech += event.results[i][0].transcript + " ";
          }
          setTranscript(currentSpeech.trim());
        };

        recognizer.onerror = (e: any) => {
          console.warn("Speech recognition error:", e);
        };

        recognizer.start();
        recognitionRef.current = recognizer;
      }
    } catch (err: any) {
      setAiError(
        "Microphone access was denied or is unavailable. You can still type your speaking transcript directly to receive full AI evaluation."
      );
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }
    setIsRecording(false);
    setIsSpeakRunning(false);
  };

  // Convert audio directly to transcript & evaluate with AI
  const handleTranscribeAndEvaluateAudio = async () => {
    setIsLoadingAi(true);
    setAiError(null);
    setAiStatusMsg("Preparing speech audio package...");

    try {
      let audioBase64 = "";
      let mimeType = "audio/webm";

      if (recordedAudioBlob) {
        setAiStatusMsg("Transcribing audio recording & evaluating IELTS Speaking criteria...");
        mimeType = recordedAudioBlob.type || "audio/webm";
        audioBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(recordedAudioBlob);
        });
      } else {
        setAiStatusMsg("Evaluating speech transcript against IELTS criteria...");
      }

      const durationSeconds = Math.max(120 - speakSeconds, recordedAudioBlob ? 10 : 0);
      const response = await fetch("/api/transcribe-and-evaluate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audioBase64,
          mimeType,
          question: test.part2,
          browserTranscript: transcript,
          durationSeconds,
          part: 2,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze audio recording.");
      }

      if (data.transcript) {
        setTranscript(data.transcript);
      }

      setAiAnalysis(data.analysis);
      saveAttempt({
        section: "speaking",
        testId: test.id,
        completedAt: new Date().toISOString(),
        speakingTranscript: data.transcript || transcript,
        band: data.analysis?.estimatedBand || "0.0",
      });
      setIsSaved(true);
      setTimeout(() => {
        onComplete();
      }, 0);
    } catch (err: any) {
      setAiError(err.message || "Failed to transcribe and analyze audio.");
    } finally {
      setIsLoadingAi(false);
      setAiStatusMsg("");
    }
  };

  const handleAnalyzeSpeakingText = async () => {
    if (!transcript.trim()) {
      setAiError("Please record your speech or type your response transcript first.");
      return;
    }

    setIsLoadingAi(true);
    setAiError(null);
    setAiStatusMsg("Analyzing candidate transcript with IELTS Brain...");

    try {
      const response = await fetch("/api/analyze-speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: test.part2,
          transcript,
          durationSeconds: Math.max(120 - speakSeconds, 15),
          part: 2,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze speaking response.");
      }

      setAiAnalysis(data.analysis);
      saveAttempt({
        section: "speaking",
        testId: test.id,
        completedAt: new Date().toISOString(),
        speakingTranscript: transcript,
        band: data.analysis?.estimatedBand || "0.0",
      });
      setIsSaved(true);
      setTimeout(() => {
        onComplete();
      }, 0);
    } catch (err: any) {
      setAiError(err.message || "Failed to analyze speech.");
    } finally {
      setIsLoadingAi(false);
      setAiStatusMsg("");
    }
  };

  // Aggregated speaking band score updater (saves attempt without interrupting active session)
  const saveSpeakingProgress = (
    p1: Record<number, QuestionEvaluationResult>,
    p3: Record<number, QuestionEvaluationResult>
  ) => {
    const validBands: number[] = [];
    Object.values(p1).forEach(r => {
      if (r.estimatedBand) {
        const b = parseFloat(r.estimatedBand);
        if (!isNaN(b) && b > 0) validBands.push(b);
      }
    });
    if (aiAnalysis?.estimatedBand) {
      const b = parseFloat(aiAnalysis.estimatedBand);
      if (!isNaN(b) && b > 0) validBands.push(b);
    }
    Object.values(p3).forEach(r => {
      if (r.estimatedBand) {
        const b = parseFloat(r.estimatedBand);
        if (!isNaN(b) && b > 0) validBands.push(b);
      }
    });

    if (validBands.length > 0) {
      const avg = validBands.reduce((a, b) => a + b, 0) / validBands.length;
      // IELTS rounding rule: e.g. 6.25 -> 6.5, 6.75 -> 7.0
      const decimal = avg - Math.floor(avg);
      let roundedBand = Math.floor(avg);
      if (decimal >= 0.75) roundedBand = Math.ceil(avg);
      else if (decimal >= 0.25) roundedBand = Math.floor(avg) + 0.5;
      const rounded = roundedBand.toFixed(1);

      saveAttempt({
        section: "speaking",
        testId: test.id,
        completedAt: new Date().toISOString(),
        speakingTranscript: transcript || Object.values(p1).map(r => r.transcript).join("\n"),
        band: rounded,
      });
      setIsSaved(true);
    } else {
      // Official IELTS rule: No attempt recorded = Band 0.0
      saveAttempt({
        section: "speaking",
        testId: test.id,
        completedAt: new Date().toISOString(),
        speakingTranscript: "No spoken answer recorded. Band 0.0 awarded for non-attempt.",
        band: "0.0",
      });
      setIsSaved(true);
    }
  };

  // Safe question evaluators called outside React render cycle
  const handlePart1Evaluated = (idx: number, result: QuestionEvaluationResult) => {
    setPart1Results(prev => {
      const updated = { ...prev, [idx]: result };
      setTimeout(() => {
        saveSpeakingProgress(updated, part3Results);
      }, 0);
      return updated;
    });
  };

  const handlePart3Evaluated = (idx: number, result: QuestionEvaluationResult) => {
    setPart3Results(prev => {
      const updated = { ...prev, [idx]: result };
      setTimeout(() => {
        saveSpeakingProgress(part1Results, updated);
      }, 0);
      return updated;
    });
  };

  // Candidate explicitly completes speaking test
  const handleFinalizeSpeakingTest = () => {
    saveSpeakingProgress(part1Results, part3Results);
    setIsSaved(true);
    setTimeout(() => {
      onComplete();
    }, 0);
  };

  const totalQuestionsInTest = test.part1.length + 1 + test.part3.length;
  const recordedCount =
    Object.keys(part1Results).length +
    (recordedAudioUrl || transcript ? 1 : 0) +
    Object.keys(part3Results).length;

  return (
    <div className="test-content flex flex-col gap-6 pb-20">
      {/* Top Runner Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isRecording) handleStopRecording();
              if ("speechSynthesis" in window) window.speechSynthesis.cancel();
              onBack();
            }}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t("backToHub")}
          </button>
          <div>
            <h2 data-no-translate className="text-base font-bold text-slate-900 leading-snug">{test.title}</h2>
            <span className="text-xs text-slate-500">{localize("IELTS Speaking • 11–14 minutes • Full Recording Across All Parts")}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            <AudioLines className="h-3.5 w-3.5 text-blue-600" />
            <span>{localize("Answers Recorded:")} {recordedCount} / {totalQuestionsInTest}</span>
          </div>

          {isSaved ? (
            <span className="flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-extrabold text-emerald-800">
              <CheckCircle2 className="h-3.5 w-3.5" /> {t("statusCompleted")}
            </span>
          ) : (
            <button
              onClick={handleFinalizeSpeakingTest}
              className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-emerald-700 transition cursor-pointer shadow-2xs"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              {t("submitTest")}
            </button>
          )}

          {onOpenCertificate && (
            <button
              onClick={onOpenCertificate}
              className="flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-extrabold text-red-700 hover:bg-red-100 transition cursor-pointer"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-red-600" />
              {t("viewOfficialTrf")}
            </button>
          )}
        </div>
      </div>

      {/* Global Microphone Permission & Device Checker Banner */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50/70 via-white to-emerald-50/50 p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                micPermission === "granted"
                  ? "bg-emerald-600 text-white"
                  : micPermission === "denied"
                  ? "bg-red-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {micPermission === "granted" ? (
                <Mic className="h-5 w-5" />
              ) : micPermission === "denied" ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Zap className="h-5 w-5" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-slate-900">
                  {localize("Full Speech Recording Permission")}
                </span>
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                    micPermission === "granted"
                      ? "bg-emerald-100 text-emerald-800"
                      : micPermission === "denied"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {micPermission === "granted"
                    ? localize("✓ Permission Granted")
                    : micPermission === "denied"
                    ? localize("✕ Permission Denied")
                    : localize("Ready to Request")}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {localize("Record your voice answers for every single question in Part 1 (Interview), Part 2 (Cue Card), and Part 3 (Discussion).")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {micTesting && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500">{localize("Mic Level:")}</span>
                <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-75"
                    style={{ width: `${micVolume}%` }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleRequestMicPermission}
              disabled={micTesting}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-extrabold text-slate-800 shadow-2xs hover:bg-slate-50 transition cursor-pointer"
            >
              <Mic className="h-3.5 w-3.5 text-blue-600" />
              {micTesting ? localize("Testing Mic...") : micPermission === "granted" ? localize("Test Microphone") : localize("Enable Microphone")}
            </button>
          </div>
        </div>
      </div>

      {/* Parts Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActivePart(1)}
          className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
            activePart === 1
              ? "bg-emerald-700 text-white shadow-2xs"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {localize("Part 1: Introduction (4–5 mins)")}
        </button>

        <button
          onClick={() => setActivePart(2)}
          className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
            activePart === 2
              ? "bg-emerald-700 text-white shadow-2xs"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {localize("Part 2: Cue Card & Audio Lab (3–4 mins)")}
        </button>

        <button
          onClick={() => setActivePart(3)}
          className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
            activePart === 3
              ? "bg-emerald-700 text-white shadow-2xs"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {localize("Part 3: Discussion (4–5 mins)")}
        </button>
      </div>

      {/* Part 1 Content */}
      {activePart === 1 && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 uppercase">
                {localize("Part 1: Interview on Familiar Topics")}
              </span>
              <p className="mt-1 text-xs text-slate-500">
                {localize("The examiner introduces themselves and asks questions on familiar topics (home, work, studies, free time).")}
              </p>
            </div>

            {/* Delivery Mode Toggle */}
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setInterviewMode("autonomous")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                  interviewMode === "autonomous"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="h-3.5 w-3.5 text-amber-300" />
                {localize("Auto-Examiner (Ask & 30s Record)")}
              </button>
              <button
                onClick={() => setInterviewMode("cards")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  interviewMode === "cards"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sliders className="h-3.5 w-3.5" />
                {localize("Question Cards")}
              </button>
            </div>
          </div>

          {interviewMode === "autonomous" ? (
            <AutonomousExaminerRoom
              test={test}
              activePart={1}
              part1Results={part1Results}
              part3Results={part3Results}
              onQuestionEvaluated={(part, idx, res) =>
                part === 1 ? handlePart1Evaluated(idx, res) : handlePart3Evaluated(idx, res)
              }
              onSelectPart={setActivePart}
              onCompleteTest={handleFinalizeSpeakingTest}
            />
          ) : (
            <div className="space-y-4">
              {test.part1.map((q, idx) => (
                <SpeakingQuestionRecorder
                  key={`part1-${test.id}-${idx}`}
                  question={q}
                  questionNumber={idx + 1}
                  part={1}
                  partTitle="Interview & Familiar Topics"
                  recommendedDuration="20–35 seconds (2–3 sentences)"
                  onEvaluated={(result) => handlePart1Evaluated(idx, result)}
                />
              ))}
            </div>
          )}

          <div className="rounded-lg bg-emerald-50/60 border border-emerald-200 p-4 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-emerald-900 block">{localize("Band 7.0+ Examiner Advice:")}</span>
            <p>{localize("• Avoid one-word answers. Always extend your answers with 2–3 sentences giving a reason or example.")}</p>
            <p>{localize("• Speak naturally at a steady pace without memorizing responses.")}</p>
          </div>
        </div>
      )}

      {/* Part 2 Content (Cue Card + Preparation + Recording + Transcription) */}
      {activePart === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Cue Card Prompt & 1-Min Prep Notes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50/30 p-5 shadow-xs">
                <div className="mb-2 flex items-center justify-between border-b border-emerald-200 pb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    {localize("Candidate Task Card (Part 2)")}
                  </span>
                  <button
                    onClick={() => handleReadQuestion(test.part2)}
                    className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer"
                  >
                    <Volume2 className="h-3 w-3" /> {localize("Read aloud")}
                  </button>
                </div>

                <p data-no-translate data-test-content className="font-serif text-sm font-medium leading-relaxed text-slate-800 whitespace-pre-line">
                  {test.part2}
                </p>

                <p className="mt-4 text-xs font-semibold text-slate-600">
                  {localize("You will have to talk about the topic for one to two minutes. You have one minute to think about what you are going to say. You can make some notes to help you if you wish.")}
                </p>
              </div>

              {/* 1-Minute Prep Box */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-700">{localize("1-Minute Preparation")}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm tabular-nums text-slate-800">
                      00:{String(prepSeconds).padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => {
                        if (isPrepRunning) {
                          setIsPrepRunning(false);
                        } else {
                          setPrepSeconds(60);
                          setIsPrepRunning(true);
                        }
                      }}
                      className={`rounded px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer ${
                        isPrepRunning ? "bg-red-100 text-red-700" : "bg-emerald-600 text-white"
                      }`}
                    >
                      {isPrepRunning ? localize("Pause") : localize("Start Prep Timer")}
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={prepNotes}
                  onChange={e => setPrepNotes(e.target.value)}
                  placeholder={localize("Draft your bullet notes here (keywords, idiomatic vocabulary, key story points)...")}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Right: Audio Recording & Transcription Lab */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{localize("Voice Recording & Multimodal Transcription")}</h3>
                    <span className="text-xs text-slate-500">{localize("Official IELTS Part 2 Speech Lab • 1:30–2:00 min target")}</span>
                  </div>

                  {/* 2-Min Timer */}
                  <div
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold tabular-nums ${
                      isSpeakRunning ? "bg-red-50 text-red-700 animate-pulse border border-red-200" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>0{Math.floor(speakSeconds / 60)}:{String(speakSeconds % 60).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Live Soundwave Audio Visualizer when recording */}
                {isRecording && (
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-red-700">
                      <Radio className="h-4 w-4 animate-pulse" />
                      {localize("RECORDING LIVE MICROPHONE AUDIO...")}
                    </div>
                    {/* Animated Equalizer Waveform */}
                    <div className="flex items-center gap-1.5 h-10">
                      {[14, 28, 38, 20, 32, 44, 26, 40, 18, 30, 42, 24, 36, 16, 28, 34, 22].map((height, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [8, height, 10],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6 + (i % 5) * 0.1,
                            ease: "easeInOut",
                            repeatType: "reverse",
                          }}
                          className="w-1 rounded-full bg-red-600"
                          style={{ minHeight: "6px" }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {localize("Speak clearly into your microphone addressing all cue card points")}
                    </span>
                  </div>
                )}

                {/* Recording Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  {!isRecording ? (
                    <button
                      onClick={handleStartRecording}
                      className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-extrabold text-white shadow-xs hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <Mic className="h-4 w-4" />
                      {recordedAudioBlob ? localize("Record New Take") : localize("Start Speaking & Recording")}
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-extrabold text-white shadow-xs hover:bg-slate-800 transition-colors animate-pulse cursor-pointer"
                    >
                      <MicOff className="h-4 w-4" />
                      {localize("Finish & Stop Recording")}
                    </button>
                  )}

                  {recordedAudioUrl && (
                    <div className="flex items-center gap-2 flex-1 min-w-[240px]">
                      <audio controls src={recordedAudioUrl} className="h-9 w-full rounded-lg" />
                    </div>
                  )}
                </div>

                {/* Spoken Transcript Area */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <AudioLines className="h-3.5 w-3.5 text-blue-600" />
                      {localize("Candidate Spoken Transcript")}
                    </span>
                    {recordedAudioBlob && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {localize("Audio Captured")} ({Math.round(recordedAudioBlob.size / 1024)} KB)
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={6}
                    value={transcript}
                    onChange={e => setTranscript(e.target.value)}
                    placeholder={localize("When you record your audio, click 'Convert Audio to Transcript & Evaluate' below to automatically transcribe and evaluate your spoken language with AI...")}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden leading-relaxed"
                  />
                </div>

                {/* Progress status notification */}
                {isLoadingAi && aiStatusMsg && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800 font-semibold animate-pulse">
                    <RefreshCw className="h-4 w-4 animate-spin text-blue-600 shrink-0" />
                    <span>{localize(aiStatusMsg)}</span>
                  </div>
                )}

                {/* Action Buttons Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Primary Button: Convert Audio & Evaluate with AI */}
                    <button
                      onClick={handleTranscribeAndEvaluateAudio}
                      disabled={isLoadingAi || (!recordedAudioBlob && !transcript.trim())}
                      className="flex items-center gap-2 rounded-xl bg-[#002d62] px-4 py-2.5 text-xs font-extrabold text-white shadow-xs hover:bg-blue-900 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                      {isLoadingAi ? localize("Processing Speech...") : localize("Convert Audio to Transcript & Evaluate with AI")}
                    </button>

                    {/* Secondary text-only evaluation */}
                    {transcript.trim() && (
                      <button
                        onClick={handleAnalyzeSpeakingText}
                        disabled={isLoadingAi}
                        className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer"
                      >
                        {localize("Evaluate Text Transcript")}
                      </button>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-400">
                    {localize("Word count:")} {transcript.trim().split(/\s+/).filter(Boolean).length} {localize("words")}
                  </span>
                </div>

                {aiError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{localize(aiError)}</span>
                  </div>
                )}
              </div>

              {/* AI Diagnostic Report */}
              {aiAnalysis && (
                <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-xs space-y-5 animate-fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#002d62] text-white font-extrabold text-sm shadow-xs">
                        LF
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900">{localize("Lingofi Speaking Examiner Assessment")}</h4>
                        <span className="text-[11px] text-slate-500">{localize("Official Assessment Rubric")}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {onOpenCertificate && (
                        <button
                          onClick={onOpenCertificate}
                          className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-extrabold text-red-800 hover:bg-red-100 transition shadow-2xs cursor-pointer"
                        >
                          <Award className="h-3.5 w-3.5 text-red-700" />
                          {localize("View Official TRF Certificate")}
                        </button>
                      )}

                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-slate-500">{localize("Estimated Band:")}</span>
                        <span className="rounded-lg bg-red-600 px-3 py-1 text-sm font-black text-white">
                          {localize("Band")} {aiAnalysis.estimatedBand || "6.5"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Fluency & Coherence */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-800">{localize("Fluency & Coherence")}</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-800">
                          {localize("Band")} {aiAnalysis.fluencyScore?.band || "6.5"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {localize(aiAnalysis.fluencyScore?.feedback || "")}
                      </p>
                    </div>

                    {/* Lexical Resource */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-800">{localize("Lexical Resource")}</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-800">
                          {localize("Band")} {aiAnalysis.lexicalScore?.band || "6.5"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {localize(aiAnalysis.lexicalScore?.feedback || "")}
                      </p>
                    </div>

                    {/* Grammatical Range & Accuracy */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-800">{localize("Grammar & Accuracy")}</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-800">
                          {localize("Band")} {aiAnalysis.grammarScore?.band || "6.5"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {localize(aiAnalysis.grammarScore?.feedback || "")}
                      </p>
                    </div>

                    {/* Pronunciation & Delivery */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-800">{localize("Pronunciation & Rhythm")}</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-800">
                          {localize("Band")} {aiAnalysis.pronunciationScore?.band || "6.5"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {localize(aiAnalysis.pronunciationScore?.feedback || "")}
                      </p>
                    </div>
                  </div>

                  {/* Corrections */}
                  {aiAnalysis.corrections && aiAnalysis.corrections.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {localize("Language & Idiomatic Enhancements")}
                      </h5>
                      {aiAnalysis.corrections.map((c: any, i: number) => (
                        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-red-100 px-1.5 py-0.5 font-bold text-red-800 line-through">
                              {c.original}
                            </span>
                            <span className="text-slate-400">→</span>
                            <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-bold text-emerald-800">
                              {localize(c.corrected)}
                            </span>
                          </div>
                          {c.explanation && (
                            <p className="mt-1 text-[11px] text-slate-500 italic">{localize(c.explanation)}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Next steps */}
                  {aiAnalysis.nextSteps && (
                    <div className="rounded-lg border border-emerald-100 bg-emerald-50/40 p-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5">
                        {localize("High-Band Speaking Targets")}
                      </h5>
                      <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                        {aiAnalysis.nextSteps.map((step: string, idx: number) => (
                          <li key={idx}>{localize(step)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Part 3 Content */}
      {activePart === 3 && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 uppercase">
                {localize("Part 3: Two-Way In-Depth Discussion")}
              </span>
              <p className="mt-1 text-xs text-slate-500">
                {localize("The examiner asks broader, abstract questions linked to the Part 2 theme.")}
              </p>
            </div>

            {/* Delivery Mode Toggle */}
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setInterviewMode("autonomous")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                  interviewMode === "autonomous"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="h-3.5 w-3.5 text-amber-300" />
                {localize("Auto-Examiner (Ask & 30s Record)")}
              </button>
              <button
                onClick={() => setInterviewMode("cards")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  interviewMode === "cards"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sliders className="h-3.5 w-3.5" />
                {localize("Question Cards")}
              </button>
            </div>
          </div>

          {interviewMode === "autonomous" ? (
            <AutonomousExaminerRoom
              test={test}
              activePart={3}
              part1Results={part1Results}
              part3Results={part3Results}
              onQuestionEvaluated={(part, idx, res) =>
                part === 1 ? handlePart1Evaluated(idx, res) : handlePart3Evaluated(idx, res)
              }
              onSelectPart={setActivePart}
              onCompleteTest={handleFinalizeSpeakingTest}
            />
          ) : (
            <div className="space-y-4">
              {test.part3.map((q, idx) => (
                <SpeakingQuestionRecorder
                  key={`part3-${test.id}-${idx}`}
                  question={q}
                  questionNumber={idx + 1}
                  part={3}
                  partTitle="Two-Way In-Depth Discussion"
                  recommendedDuration="45–60 seconds (4–5 sentences with justification)"
                  onEvaluated={(result) => handlePart3Evaluated(idx, result)}
                />
              ))}
            </div>
          )}

          <div className="rounded-lg bg-emerald-50/60 border border-emerald-200 p-4 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-emerald-900 block">{localize("Part 3 Success Strategy:")}</span>
            <p>{localize("• Structure answers with the P.E.E.L method: Point → Explanation → Example → Link back.")}</p>
            <p>{localize("• Use speculative modal verbs (\"could potentially lead to...\", \"one plausible outcome might be...\").")}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <div>
              <h4 className="text-sm font-bold text-slate-800">{localize("Finished your IELTS Speaking session?")}</h4>
              <p className="text-xs text-slate-500">{localize("Save all evaluated answers and record your highest band attempt.")}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleFinalizeSpeakingTest}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="h-4 w-4" />
                {localize("Complete Speaking Test")}
              </button>
              {onOpenCertificate && (
                <button
                  onClick={onOpenCertificate}
                  className="flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-100 transition cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4 text-red-600" />
                  {localize("View TRF Certificate")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
