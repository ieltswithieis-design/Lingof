

import { SupportedLanguage, SUPPORTED_LANGUAGES } from "../types/language";

export type SpeakerGender = "female" | "male" | "narrator";

export interface DialogueTurn {
  id: string;
  type: "announcement" | "pause" | "dialogue";
  speaker: string;
  speakerName: string;
  gender: SpeakerGender;
  text: string;
  pauseDuration?: number;
}

export interface ParsedPartScript {
  turns: DialogueTurn[];
  isConversation: boolean;
  speakers: { name: string; gender: SpeakerGender; role?: string }[];
}

const FEMALE_NAMES = new Set([
  "emma", "sarah", "chloe", "sophia", "maya", "nina", "grace", "hannah", 
  "zoe", "mia", "elena", "mei", "fiona", "natalie", "olivia", "rebecca", 
  "victoria", "claire", "rachel", "marianne", "anna", "mary", "lucy", 
  "alice", "lisa", "helen", "jane", "woman", "girl", "female", "mrs", "ms", "miss"
]);

const MALE_NAMES = new Set([
  "jack", "liam", "harry", "tom", "alex", "oliver", "daniel", "ben", 
  "leo", "ethan", "david", "robert", "michael", "james", "thomas", 
  "arthur", "marcus", "christopher", "benjamin", "dan", "jonathan", 
  "donald", "man", "boy", "male", "mr", "dr"
]);

export function parseScriptToDialogue(rawScript: string, partNumber: number): ParsedPartScript {
  if (!rawScript) {
    return { turns: [], isConversation: false, speakers: [] };
  }

  const segments: DialogueTurn[] = [];
  const rawParts = rawScript.split(/\[pause\]/i);

  // Extract contextual student names if in Part 3
  const p3Match = rawScript.match(/two university students,\s+([A-Za-z]+)\s+and\s+([A-Za-z]+)/i);
  const student1Name = p3Match ? p3Match[1] : null;
  const student2Name = p3Match ? p3Match[2] : null;

  // Extract customer name if in Part 1
  const custMatch = rawScript.match(/(?:first name is|my name is)\s+([A-Za-z]+)/i);
  const customerName = custMatch ? custMatch[1] : null;

  // Part 2 speaker check
  const speakerMatch = rawScript.match(/talk given by\s+([A-Za-z\s\.]+?)\s*\(/i);
  let p2SpeakerGender: SpeakerGender = "female";
  if (speakerMatch) {
    const fn = speakerMatch[1].trim().split(" ")[0].toLowerCase();
    p2SpeakerGender = FEMALE_NAMES.has(fn) ? "female" : "male";
  }

  rawParts.forEach((partText, pIdx) => {
    const speakerPattern = /(?:^|\n|(?<=\.\s))([A-Z][a-zA-Z0-9\s]{1,15}):\s+/g;
    let m: RegExpExecArray | null;
    const indices: { speaker: string; index: number; matchLength: number }[] = [];

    while ((m = speakerPattern.exec(partText)) !== null) {
      indices.push({ speaker: m[1].trim(), index: m.index, matchLength: m[0].length });
    }

    if (indices.length === 0) {
      const cleanText = partText.trim();
      if (cleanText) {
        segments.push({
          id: `turn-${segments.length}`,
          type: "announcement",
          speaker: "Narrator",
          speakerName: "Narrator",
          gender: "narrator",
          text: cleanText,
        });
      }
    } else {
      const intro = partText.slice(0, indices[0].index).trim();
      if (intro) {
        segments.push({
          id: `turn-${segments.length}`,
          type: "announcement",
          speaker: "Narrator",
          speakerName: "Narrator",
          gender: "narrator",
          text: intro,
        });
      }

      for (let i = 0; i < indices.length; i++) {
        const rawSpeaker = indices[i].speaker;
        const start = indices[i].index + indices[i].matchLength;
        const end = (i + 1 < indices.length) ? indices[i + 1].index : partText.length;
        const text = partText.slice(start, end).trim();

        let gender: SpeakerGender = "narrator";
        let displayName = rawSpeaker;
        const lower = rawSpeaker.toLowerCase();

        if (lower.includes("student 1") && student1Name) {
          displayName = `Student 1 (${student1Name})`;
          gender = FEMALE_NAMES.has(student1Name.toLowerCase()) ? "female" : "male";
        } else if (lower.includes("student 2") && student2Name) {
          displayName = `Student 2 (${student2Name})`;
          gender = FEMALE_NAMES.has(student2Name.toLowerCase()) ? "female" : "male";
        } else if (lower.includes("customer")) {
          if (customerName) {
            displayName = `Customer (${customerName})`;
            gender = FEMALE_NAMES.has(customerName.toLowerCase()) ? "female" : "male";
          } else {
            gender = "male";
          }
        } else if (lower.includes("officer")) {
          const custIsFemale = customerName ? FEMALE_NAMES.has(customerName.toLowerCase()) : false;
          gender = custIsFemale ? "male" : "female";
        } else if (lower.includes("tutor")) {
          gender = "male";
        } else if (lower.includes("lecturer")) {
          gender = partNumber % 2 === 0 ? "male" : "female";
        } else if (lower.includes("speaker")) {
          gender = p2SpeakerGender;
        } else {
          const fn = rawSpeaker.split(" ")[0].toLowerCase();
          if (FEMALE_NAMES.has(fn)) gender = "female";
          else if (MALE_NAMES.has(fn)) gender = "male";
          else gender = "female";
        }

        segments.push({
          id: `turn-${segments.length}`,
          type: "dialogue",
          speaker: rawSpeaker,
          speakerName: displayName,
          gender,
          text,
        });
      }
    }

    if (pIdx < rawParts.length - 1) {
      // IELTS Standard Pause for reading questions
      segments.push({
        id: `turn-${segments.length}`,
        type: "pause",
        speaker: "Exam Director",
        speakerName: "Exam Director",
        gender: "narrator",
        text: "",
        pauseDuration: 15,
      });
    }
  });

  const dialogueTurns = segments.filter(s => s.type === "dialogue");
  const uniqueSpeakers = Array.from(new Set(dialogueTurns.map(s => s.speaker)));
  const speakersList = uniqueSpeakers.map(name => {
    const matched = dialogueTurns.find(t => t.speaker === name);
    return {
      name: matched?.speakerName || name,
      gender: matched?.gender || "narrator",
    };
  });

  return {
    turns: segments,
    isConversation: uniqueSpeakers.length >= 2,
    speakers: speakersList,
  };
}

/**
 * Multilingual name keywords for female and male voices across browser engines
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
 * Intelligent voice selector for Web Speech API.
 * Detects female (girl) and male (boy) system voices in the target language.
 */
export function getVoicesForDialogue(
  preferredLocale?: string,
  langCode: SupportedLanguage = "en"
): {
  femaleVoice: SpeechSynthesisVoice | null;
  maleVoice: SpeechSynthesisVoice | null;
  defaultVoice: SpeechSynthesisVoice | null;
} {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return { femaleVoice: null, maleVoice: null, defaultVoice: null };
  }

  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) {
    return { femaleVoice: null, maleVoice: null, defaultVoice: null };
  }

  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
  const code = langCode.toLowerCase();
  const locale = (preferredLocale || langConfig?.locale || "en-US").toLowerCase().replace("_", "-");
  const prefixes = (langConfig?.ttsVoicePrefix || [code]).map((p) => p.toLowerCase());
  const aliases = LANGUAGE_NAME_ALIASES[langCode] || [code];

  // Filter voices matching target language
  let pool = voices.filter((v) => {
    const vLang = v.lang.toLowerCase().replace("_", "-");
    const vName = v.name.toLowerCase();
    const langCodeOnly = vLang.split("-")[0];

    return (
      vLang === locale ||
      prefixes.some((p) => vLang.startsWith(p) || p.startsWith(langCodeOnly)) ||
      vLang.startsWith(code) ||
      aliases.some((alias) => vName.includes(alias) || vLang.includes(alias)) ||
      (langConfig && vName.includes(langConfig.englishName.toLowerCase())) ||
      (langConfig && vName.includes(langConfig.name.toLowerCase()))
    );
  });

  // Fallback for Arabic: check any dialect or online natural voice
  if (pool.length === 0 && langCode === "ar") {
    pool = voices.filter((v) => {
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

  // Fallback for Bengali: if no bn voice, try regional voices
  if (pool.length === 0 && langCode === "bn") {
    pool = voices.filter((v) => {
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

  // Fallback for Urdu if no explicit ur voice installed
  if (pool.length === 0 && langCode === "ur") {
    pool = voices.filter((v) => {
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

  // If English, fallback to any english voices or system default
  if (pool.length === 0 && langCode === "en") {
    pool = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
    if (pool.length === 0) pool = voices;
  }

  // If no language-specific voice exists in browser, provide system voice fallback
  // so SpeechSynthesis NEVER fails with voice-unavailable
  const systemDefault = voices.find((v) => v.default) || voices[0] || null;
  const systemFemale =
    voices.find((v) => FEMALE_VOICE_KEYWORDS.some((kw) => v.name.toLowerCase().includes(kw))) ||
    systemDefault;
  const systemMale =
    voices.find((v) => MALE_VOICE_KEYWORDS.some((kw) => v.name.toLowerCase().includes(kw))) ||
    (voices.length > 1 ? voices[1] : systemDefault);

  if (pool.length === 0) {
    if (langCode === "ar") {
      return {
        femaleVoice: null,
        maleVoice: null,
        defaultVoice: null
      };
    }
    return {
      femaleVoice: systemFemale,
      maleVoice: systemMale,
      defaultVoice: systemDefault
    };
  }

  const femaleVoice =
    pool.find((v) => {
      const name = v.name.toLowerCase();
      return FEMALE_VOICE_KEYWORDS.some((kw) => name.includes(kw));
    }) ||
    pool.find((v) => v.name.toLowerCase().includes("female")) ||
    pool[0] ||
    systemFemale;

  const maleVoice =
    pool.find((v) => {
      const name = v.name.toLowerCase();
      return MALE_VOICE_KEYWORDS.some((kw) => name.includes(kw));
    }) ||
    pool.find((v) => v.name.toLowerCase().includes("male")) ||
    (pool.length > 1 ? pool[1] : pool[0]) ||
    systemMale;

  const defaultVoice =
    pool.find((v) => v.lang.toLowerCase().replace("_", "-") === locale) ||
    pool[0] ||
    systemDefault;

  return { femaleVoice, maleVoice, defaultVoice };
}

/**
 * Configure utterance with authentic vocal traits for girl/boy/narrator in the selected language.
 */
export function applyVoiceToUtterance(
  utterance: SpeechSynthesisUtterance,
  gender: SpeakerGender,
  playbackRate: number,
  voices: {
    femaleVoice: SpeechSynthesisVoice | null;
    maleVoice: SpeechSynthesisVoice | null;
    defaultVoice: SpeechSynthesisVoice | null;
  },
  preferredLocale: string = "en-US"
) {
  utterance.rate = playbackRate;

  const isArabic = preferredLocale.toLowerCase().startsWith("ar");

  let chosenVoice =
    gender === "female"
      ? (voices.femaleVoice || voices.defaultVoice)
      : gender === "male"
      ? (voices.maleVoice || voices.defaultVoice)
      : (voices.defaultVoice || voices.maleVoice || voices.femaleVoice);

  // Only fallback to system voice if NOT Arabic (to avoid speaking Arabic with an English voice)
  if (!chosenVoice && !isArabic) {
    const sysFallback = (typeof window !== "undefined" && window.speechSynthesis)
      ? window.speechSynthesis.getVoices().find(v => v.default) || window.speechSynthesis.getVoices()[0] || null
      : null;
    chosenVoice = sysFallback;
  }

  if (chosenVoice) {
    utterance.voice = chosenVoice;
    utterance.lang = chosenVoice.lang;
  } else if (isArabic) {
    // DO NOT bind to an English voice! Let browser invoke its Arabic speech engine
    utterance.lang = "ar-SA";
  } else {
    utterance.lang = preferredLocale || "en-US";
  }

  if (gender === "female") {
    // Girl voice configuration
    // High-pitched bright, clear timbre for girl/female speech
    utterance.pitch = 1.18;
  } else if (gender === "male") {
    // Boy voice configuration
    // Resonant deeper pitch for boy/male speech
    utterance.pitch = 0.88;
  } else {
    // Narrator configuration
    utterance.pitch = 1.0;
  }
}
