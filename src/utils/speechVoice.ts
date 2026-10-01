import { SupportedLanguage, SUPPORTED_LANGUAGES } from "../types/language";
import { translateTextToLanguage } from "./universalTranslator";
import { translateReadingTextPure } from "./readingZeroEnglishEngine";

let activeUtterance: SpeechSynthesisUtterance | null = null;
let activeAudioElement: HTMLAudioElement | null = null;
let voicesLoaded = false;
let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve([]);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      cachedVoices = voices;
      voicesLoaded = true;
      resolve(voices);
      return;
    }

    // Wait for onvoiceschanged
    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices();
      cachedVoices = updatedVoices;
      voicesLoaded = true;
      resolve(updatedVoices);
    };

    // Fallback timeout
    setTimeout(() => {
      const fallbackVoices = window.speechSynthesis.getVoices();
      cachedVoices = fallbackVoices;
      resolve(fallbackVoices);
    }, 500);
  });
}

// Pre-warm voices on load
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  loadVoices();
}

/**
 * Multilingual name keywords for female and male voices across various OS/TTS engines
 */
const FEMALE_VOICE_KEYWORDS = [
  "female", "girl", "woman", "femme", "mujer", "weiblich", "donna", "feminino", "женский", "女性", "स्त्री", "মহিলা", "خاتون",
  "samantha", "victoria", "karen", "fiona", "moira", "tessa", "zira", "libby", "sonia", "hazel", "susan",
  "catherine", "jenny", "aria", "stephanie", "ava", "helena", "laura", "monica", "paulina", "marta", "elena",
  "hortense", "julie", "amelie", "celine", "virginie", "hedda", "katja", "anna", "marlene", "huihui", "yaoyao",
  "ting-ting", "xiaoxiao", "xiaoyi", "sinji", "meijia", "szuchin", "laila", "layla", "zeina", "hoda", "salma", "fatima", "mariam", "zariyah",
  "noura", "sana", "rana", "asma", "muna", "kalpana", "swara", "geeta", "neerja", "anjali", "meera", "deepa",
  "luciana", "raquel", "heloisa", "francisca", "joana", "leticia", "camila", "vitória", "brenda",
  "milena", "irina", "olga", "tatyana", "ekaterina", "dariya", "svetlana",
  "kyoko", "ayumi", "haruka", "sayaka", "nanami", "aoi", "shiori", "mayu",
  "tanishaa", "mithu", "joyeta", "uzma", "amna", "saba", "farah"
];

const MALE_VOICE_KEYWORDS = [
  "male", "boy", "man", "homme", "hombre", "männlich", "uomo", "masculino", "мужской", "男性", "पुरुष", "পুরুষ", "مرد",
  "daniel", "oliver", "alex", "fred", "george", "ryan", "david", "mark", "tom", "james", "guy", "arthur",
  "marcus", "jack", "eric", "roger", "pablo", "manuel", "jorge", "alvaro", "diego", "alonso", "thomas", "paul", "alain", "nicolas", "henri", "stefan",
  "hans", "florian", "viktor", "conrad", "christoph", "kangkang", "yunxi", "yunjian", "zhiwei", "wanlung",
  "maged", "majed", "tarik", "tariq", "naayf", "shakir", "hamed", "zayd", "yousef", "khalid", "hamdan", "taim", "tamer",
  "hemant", "madhur", "aarav", "kapil", "felipe", "antonio", "duarte",
  "yuri", "pavel", "dmitry", "aleksandr", "maxim", "mikhail",
  "otoya", "ichiro", "daichi", "keita", "naoki", "takumi", "kenji",
  "bashkar", "pradeep", "subhasish", "asad", "salman", "gul", "bilal"
];

const LANGUAGE_NAME_ALIASES: Record<SupportedLanguage, string[]> = {
  en: [
    "english", "en-us", "en-gb", "en-au", "en-ca", "en-nz", "en-ie", "en-za", "en-in",
    "samantha", "daniel", "karen", "serena", "oliver", "george", "david", "zira", "mark",
    "hazel", "susan", "catherine", "jenny", "guy", "aria", "eric", "michelle", "roger", "steffi", "sonia", "libby", "ryan"
  ],
  es: [
    "spanish", "español", "castellano", "es-es", "es-mx", "es-us", "es-419", "es-ar", "es-co", "es-cl", "es-pe",
    "monica", "paulino", "paulina", "jorge", "alvaro", "marta", "elena", "diego", "lucia", "soledad", "carmen", "pablo", "manuel", "elvira", "dalia", "paloma", "sabina", "alonso"
  ],
  fr: [
    "french", "français", "fr-fr", "fr-ca", "fr-be", "fr-ch",
    "thomas", "julie", "amelie", "celine", "hortense", "virginie", "nicolas", "alain", "paul", "denise", "henri", "eloise", "jerome", "brigitte", "celestine", "claude"
  ],
  de: [
    "german", "deutsch", "de-de", "de-at", "de-ch",
    "stefan", "katja", "hedda", "marlene", "hans", "florian", "anna", "petra", "viktor", "conrad", "amala", "christoph", "elke", "gisela", "killian", "klarissa", "lou", "ralf"
  ],
  zh: [
    "chinese", "mandarin", "cmn", "putonghua", "中文", "汉语", "漢語", "普通话", "普通話", "国语", "國語",
    "zh-cn", "zh-tw", "zh-hk", "cmn-cn", "cmn-tw", "cmn-hans", "cmn-hant", "zh-hans", "zh-hant",
    "huihui", "yaoyao", "tingting", "xiaoxiao", "xiaoyi", "kangkang", "yunxi", "zhiwei", "wanlung", "hiugaai", "sinji", "meijia", "szuchin"
  ],
  ar: [
    "arabic", "عربي", "العربية", "arab", "ar-sa", "ar-eg", "ar-xa", "ar-ae", "ar-kw", "ar-qa", "ar-ma",
    "ar-dz", "ar-tn", "ar-jo", "ar-lb", "ar-iq", "ar-ye", "ara", "ara-sa",
    "naayf", "hoda", "zeina", "tarik", "tariq", "maged", "majed", "laila", "layla", "salma", "shakir",
    "fatima", "mariam", "zayd", "yousef", "zariyah", "hamed", "taim", "tamer", "muna", "rana", "sana", "asma"
  ],
  hi: [
    "hindi", "हिन्दी", "हिंदी", "hi-in", "hi-latn",
    "kalpana", "swara", "hemant", "madhur", "aarav", "geeta", "neerja", "anjali", "meera", "deepa", "kapil"
  ],
  pt: [
    "portuguese", "português", "pt-br", "pt-pt",
    "luciana", "raquel", "heloisa", "felipe", "daniel", "antonio", "francisca", "duarte", "joana", "leticia", "camila", "vitória", "brenda", "donato", "elza", "fabio", "giovanna", "julio", "leila", "manuela", "nicolau", "valerio", "yarina"
  ],
  ru: [
    "russian", "русский", "ru-ru", "ru-by", "ru-kz",
    "irina", "olga", "tatyana", "ekaterina", "dariya", "milena", "yuri", "pavel", "dmitry", "aleksandr", "maxim", "mikhail", "svetlana"
  ],
  ja: [
    "japanese", "日本語", "ja-jp",
    "kyoko", "ayumi", "haruka", "sayaka", "otoya", "ichiro", "daichi", "nanami", "aoi", "shiori", "keita", "naoki", "takumi", "kenji", "mayu"
  ],
  bn: [
    "bengali", "bangla", "বাংলা", "বাঙলা", "bn-bd", "bn-in", "ben-bd", "ben-in", "ben",
    "tanishaa", "bashkar", "pradeep", "mithu", "joyeta", "deepa", "subhasish"
  ],
  ur: [
    "urdu", "اردو", "ur-pk", "ur-in", "urd-pk", "urd-in", "urd",
    "uzma", "amna", "asad", "salman", "gul", "bilal", "saba", "tariq"
  ]
};

/**
 * Check if a voice is native to the target language
 */
export function isVoiceNativeToLanguage(voice: SpeechSynthesisVoice, langCode: SupportedLanguage): boolean {
  if (!voice) return false;
  const vLang = voice.lang.toLowerCase().replace("_", "-");
  const vName = voice.name.toLowerCase();
  const code = langCode.toLowerCase();
  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
  const prefixes = (langConfig?.ttsVoicePrefix || [code]).map((p) => p.toLowerCase());
  const aliases = LANGUAGE_NAME_ALIASES[langCode] || [code];
  const langCodeOnly = vLang.split("-")[0];

  return (
    vLang.startsWith(code) ||
    prefixes.some((p) => vLang.startsWith(p) || p.startsWith(langCodeOnly)) ||
    aliases.some((alias) => vName.includes(alias) || vLang.includes(alias)) ||
    (langConfig && vName.includes(langConfig.englishName.toLowerCase())) ||
    (langConfig && vName.includes(langConfig.name.toLowerCase()))
  );
}

/**
 * Check whether the user's browser/system has any native voice installed for this language
 */
export function isNativeVoiceAvailable(langCode: SupportedLanguage): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return false;
  return voices.some((v) => isVoiceNativeToLanguage(v, langCode));
}

/**
 * Find the most suitable voice for a given supported language
 */
export async function getVoiceForLanguage(
  langCode: SupportedLanguage,
  gender?: "female" | "male"
): Promise<SpeechSynthesisVoice | null> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;

  // Always refresh from window.speechSynthesis to avoid stale empty cache on page launch
  const freshVoices = window.speechSynthesis.getVoices();
  const voices = (freshVoices && freshVoices.length > 0) ? freshVoices : (cachedVoices.length > 0 ? cachedVoices : await loadVoices());
  if (!voices || voices.length === 0) return null;
  cachedVoices = voices;

  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
  const code = langCode.toLowerCase();
  const locale = (langConfig?.locale || "").toLowerCase().replace("_", "-");
  const prefixes = (langConfig?.ttsVoicePrefix || [code]).map((p) => p.toLowerCase());
  const aliases = LANGUAGE_NAME_ALIASES[langCode] || [code];

  // 1. Gather all voices that match this language's locale, prefix, code, or aliases
  let matchedVoices = voices.filter((v) => isVoiceNativeToLanguage(v, langCode));

  // 2. Fallback for Arabic: check any dialect or online natural voice
  if (matchedVoices.length === 0 && langCode === "ar") {
    matchedVoices = voices.filter((v) => {
      const vLang = v.lang.toLowerCase().replace("_", "-");
      const vName = v.name.toLowerCase();
      return (
        vLang.startsWith("ar") ||
        vLang.includes("ara") ||
        vName.includes("arabic") ||
        vName.includes("عربي") ||
        vName.includes("arab") ||
        aliases.some((a) => vName.includes(a))
      );
    });
  }

  // 3. Fallback for Bengali: if no native bn voice installed, try regional subcontinental voices (Hindi/Indian English)
  if (matchedVoices.length === 0 && langCode === "bn") {
    matchedVoices = voices.filter((v) => {
      const vLang = v.lang.toLowerCase().replace("_", "-");
      const vName = v.name.toLowerCase();
      return (
        vLang.startsWith("bn") ||
        vLang.includes("ben") ||
        vName.includes("bengali") ||
        vName.includes("bangla") ||
        vName.includes("বাংলা") ||
        vLang.startsWith("hi") ||
        vLang.includes("en-in")
      );
    });
  }

  // 4. Fallback for Urdu: if no explicit Urdu voice, try Hindi or Arabic phoneme engines
  if (matchedVoices.length === 0 && langCode === "ur") {
    matchedVoices = voices.filter((v) => {
      const vLang = v.lang.toLowerCase().replace("_", "-");
      const vName = v.name.toLowerCase();
      return (
        vLang.startsWith("ur") ||
        vLang.includes("urd") ||
        vName.includes("urdu") ||
        vName.includes("اردو") ||
        vLang.startsWith("hi") ||
        vLang.startsWith("ar") ||
        vLang.includes("en-in")
      );
    });
  }

  // 5. If gender was requested, find a voice matching the desired gender
  if (matchedVoices.length > 0 && gender) {
    const targetKeywords = gender === "female" ? FEMALE_VOICE_KEYWORDS : MALE_VOICE_KEYWORDS;
    const genderMatch = matchedVoices.find((v) => {
      const name = v.name.toLowerCase();
      return targetKeywords.some((kw) => name.includes(kw));
    });
    if (genderMatch) return genderMatch;
  }

  // 6. Prefer exact locale match first
  if (matchedVoices.length > 0) {
    const exact = matchedVoices.find((v) => v.lang.toLowerCase().replace("_", "-") === locale);
    if (exact) return exact;
    return matchedVoices[0];
  }

  // CRITICAL: For Arabic, if no native Arabic voice is installed in the browser,
  // do NOT return an English voice as fallback!
  if (langCode === "ar") {
    return null;
  }

  // 7. Fallback for other languages: return the system default voice or first available voice so TTS never crashes
  return voices.find((v) => v.default) || voices[0] || null;
}

/**
 * Speech options interface
 */
export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  gender?: "female" | "male";
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

/**
 * Speak text in the target language using native language voice and localized phonetics
 */
export async function speakInLanguage(
  text: string,
  langCode: SupportedLanguage = "en",
  options?: SpeechOptions
): Promise<void> {
  // Stop any ongoing speech or audio
  stopAllSpeech();

  // Strip Markdown / HTML tags for clean audio
  const cleanText = text
    .replace(/<[^>]*>/g, "")
    .replace(/[*_#`~[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanText) {
    options?.onEnd?.();
    return;
  }

  // Determine spoken text:
  // When a non-English language is active, guarantee zero residual English words are spoken.
  const spokenText = langCode === "en" ? cleanText : translateReadingTextPure(cleanText, langCode);

  // 1. Studio-grade AI Arabic Voice Generation via /api/tts
  // Provides authentic, natural Arabic speech synthesis with zero English accent
  if (langCode === "ar") {
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: spokenText,
          lang: "ar",
          gender: options?.gender || "female",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64) {
          const audio = new Audio(`data:${data.mimeType || "audio/wav"};base64,${data.audioBase64}`);
          audio.playbackRate = options?.rate ?? 1.0;
          activeAudioElement = audio;

          audio.onplay = () => {
            options?.onStart?.();
          };

          audio.onended = () => {
            if (activeAudioElement === audio) {
              activeAudioElement = null;
            }
            options?.onEnd?.();
          };

          audio.onerror = (err) => {
            console.warn("AI Arabic audio playback error, falling back to Web Speech:", err);
            if (activeAudioElement === audio) {
              activeAudioElement = null;
            }
            playWebSpeechFallback(spokenText, langCode, options);
          };

          await audio.play();
          return;
        }
      }
    } catch (apiErr) {
      console.warn("AI TTS endpoint fetch failed, falling back to Web Speech:", apiErr);
    }
  }

  // 2. Web Speech API synthesis
  playWebSpeechFallback(spokenText, langCode, options);
}

function playWebSpeechFallback(
  spokenText: string,
  langCode: SupportedLanguage,
  options?: SpeechOptions
): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported on this browser.");
    options?.onEnd?.();
    return;
  }

  getVoiceForLanguage(langCode, options?.gender).then((voice) => {
    const utterance = new SpeechSynthesisUtterance(spokenText);
    const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || langConfig?.locale || "ar-SA";
    } else if (langCode === "ar") {
      // CRITICAL: DO NOT assign an English voice! Let browser invoke online Arabic TTS engine
      utterance.lang = "ar-SA";
    } else {
      utterance.lang = langConfig?.locale || "en-US";
    }

    utterance.rate = options?.rate ?? 0.95;
    if (options?.pitch !== undefined) {
      utterance.pitch = options.pitch;
    } else if (options?.gender === "female") {
      utterance.pitch = 1.15;
    } else if (options?.gender === "male") {
      utterance.pitch = 0.88;
    } else {
      utterance.pitch = 1.0;
    }

    utterance.onstart = () => {
      options?.onStart?.();
    };

    utterance.onend = () => {
      activeUtterance = null;
      options?.onEnd?.();
    };

    utterance.onerror = (e) => {
      if (e.error === "canceled" || e.error === "interrupted") {
        activeUtterance = null;
        options?.onEnd?.();
        return;
      }
      if (langCode === "ar") {
        // Never retry Arabic with an English voice
        activeUtterance = null;
        options?.onEnd?.();
        return;
      }
      if ((e.error === "voice-unavailable" || e.error === "language-unavailable") && typeof window !== "undefined") {
        const allVoices = window.speechSynthesis.getVoices();
        const fallbackVoice = langCode === "en"
          ? (allVoices.find((v) => /^en(-|_)/i.test(v.lang)) || allVoices.find((v) => /english/i.test(v.name)))
          : (allVoices.find((v) => v.default) || allVoices[0]);
        if (fallbackVoice && utterance.voice !== fallbackVoice) {
          const retryUtterance = new SpeechSynthesisUtterance(spokenText);
          retryUtterance.voice = fallbackVoice;
          retryUtterance.lang = fallbackVoice.lang || langConfig?.locale || "en-US";
          retryUtterance.rate = utterance.rate;
          retryUtterance.pitch = utterance.pitch;
          retryUtterance.onend = () => {
            activeUtterance = null;
            options?.onEnd?.();
          };
          retryUtterance.onerror = () => {
            activeUtterance = null;
            options?.onEnd?.();
          };
          activeUtterance = retryUtterance;
          window.speechSynthesis.speak(retryUtterance);
          return;
        }
      }
      console.warn("TTS Error:", e.error || e);
      activeUtterance = null;
      options?.onError?.(e);
      options?.onEnd?.();
    };

    activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  });
}

export function stopAllSpeech(): void {
  if (activeAudioElement) {
    try {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
    } catch {}
    activeAudioElement = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    } catch {}
  }
}

/**
 * Check if the browser is currently speaking
 */
export function isCurrentlySpeaking(): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  return window.speechSynthesis.speaking;
}

/**
 * Create a speech recognition instance set to the target language
 */
export function createSpeechRecognizer(
  langCode: SupportedLanguage,
  onResult: (transcript: string, isFinal: boolean) => void,
  onError?: (error: string) => void,
  onEnd?: () => void
): { start: () => void; stop: () => void } | null {
  if (typeof window === "undefined") return null;

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return null;
  }

  try {
    const recognizer = new SpeechRecognition();
    const langConfig = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
    recognizer.lang = langConfig?.locale || "en-US";
    recognizer.continuous = true;
    recognizer.interimResults = true;

    recognizer.onresult = (event: any) => {
      let interim = "";
      let final = "";
      for (let i = 0; i < event.results.length; i++) {
        const item = event.results[i];
        if (item.isFinal) {
          final += item[0].transcript + " ";
        } else {
          interim += item[0].transcript + " ";
        }
      }
      const combined = (final + interim).trim();
      onResult(combined, Boolean(final && !interim));
    };

    recognizer.onerror = (e: any) => {
      console.warn("STT Error:", e);
      onError?.(e.error || "Speech recognition error");
    };

    recognizer.onend = () => {
      onEnd?.();
    };

    return {
      start: () => {
        try {
          recognizer.start();
        } catch (e) {
          console.warn("Recognizer already started or failed to start", e);
        }
      },
      stop: () => {
        try {
          recognizer.stop();
        } catch {}
      }
    };
  } catch (err) {
    console.error("Failed to initialize SpeechRecognition:", err);
    return null;
  }
}
