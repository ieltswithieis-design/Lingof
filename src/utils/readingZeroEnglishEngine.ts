import { SupportedLanguage } from "../types/language";
import { ReadingTest } from "../types/ielts";
import { ACADEMIC_READING_LEXICON } from "./translations/academicReadingLexicon";
import { CORE_WORDS_DICT } from "./multilingualCoreLexicon";
import { EXACT_DICTIONARY } from "./universalTranslator";
import { transliterateScriptToken } from "./transliterationTables";

/**
 * Phonetically translates any residual English token into the target script or morphology.
 * Guarantees zero Latin / English characters in non-Latin languages and no raw English in Latin languages.
 */
export function phoneticScriptTransliterate(token: string, lang: SupportedLanguage): string {
  return transliterateScriptToken(token, lang);
}

/**
 * Translates an individual English word token using combined academic & core dictionaries,
 * morphological lemmatization, and zero-residual transliteration guarantee.
 */
export function translateReadingToken(rawWord: string, lang: SupportedLanguage): string {
  if (!rawWord || !/[a-zA-Z]/.test(rawWord)) return rawWord;
  if (lang === "en") return rawWord;

  const lower = rawWord.toLowerCase();

  // 1. Direct match in academic lexicon
  if (ACADEMIC_READING_LEXICON[lower]?.[lang]) {
    return applyCasing(rawWord, ACADEMIC_READING_LEXICON[lower]![lang]!);
  }

  // 2. Direct match in core lexicon
  if (CORE_WORDS_DICT[lower]?.[lang]) {
    return applyCasing(rawWord, CORE_WORDS_DICT[lower]![lang]!);
  }

  // 3. Direct match in exact dictionary
  if (EXACT_DICTIONARY[lower]?.[lang]) {
    return applyCasing(rawWord, EXACT_DICTIONARY[lower]![lang]!);
  }

  // 4. Lemmatization: plurals
  if (lower.endsWith("ies") && lower.length > 4) {
    const stem = lower.slice(0, -3) + "y";
    const found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }
  if (lower.endsWith("es") && lower.length > 3) {
    const stem = lower.slice(0, -2);
    const found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }
  if (lower.endsWith("s") && !lower.endsWith("ss") && lower.length > 2) {
    const stem = lower.slice(0, -1);
    const found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }

  // Past tense -ed
  if (lower.endsWith("ed") && lower.length > 3) {
    let stem = lower.slice(0, -2);
    let found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
    stem = lower.slice(0, -1);
    found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }

  // Continuous -ing
  if (lower.endsWith("ing") && lower.length > 4) {
    let stem = lower.slice(0, -3);
    let found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
    stem = lower.slice(0, -3) + "e";
    found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }

  // Adverbs -ly
  if (lower.endsWith("ly") && lower.length > 3) {
    const stem = lower.slice(0, -2);
    const found = ACADEMIC_READING_LEXICON[stem]?.[lang] || CORE_WORDS_DICT[stem]?.[lang] || EXACT_DICTIONARY[stem]?.[lang];
    if (found) return applyCasing(rawWord, found);
  }

  // 5. Zero-Residual Guarantee: transliterate script or morphologically adapt
  const translit = transliterateScriptToken(rawWord, lang);
  return applyCasing(rawWord, translit);
}

function applyCasing(original: string, translated: string): string {
  if (!translated) return "";
  if (original === original.toUpperCase() && original.length > 1) {
    return translated.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()) {
    return translated.charAt(0).toUpperCase() + translated.slice(1);
  }
  return translated;
}

/**
 * Translates a complete academic passage or question text into the target language.
 * Guarantees that in languages other than English, NO English words remain.
 */
export function translateReadingTextPure(text: string, lang: SupportedLanguage): string {
  if (!text || lang === "en") return text;

  // Split multi-paragraphs
  if (text.includes("\n")) {
    return text
      .split("\n")
      .map(line => translateReadingTextPure(line, lang))
      .join("\n");
  }

  let result = text;

  // 1. Phrase mappings from EXACT_DICTIONARY
  for (const [phrase, dict] of Object.entries(EXACT_DICTIONARY)) {
    if (dict[lang]) {
      const regex = new RegExp(`\\b${escapeRegex(phrase)}\\b`, "gi");
      if (regex.test(result)) {
        result = result.replace(regex, dict[lang]!);
      }
    }
  }

  // 2. Phrase mappings from ACADEMIC_READING_LEXICON
  for (const [word, dict] of Object.entries(ACADEMIC_READING_LEXICON)) {
    if (dict[lang]) {
      const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, "gi");
      if (regex.test(result)) {
        result = result.replace(regex, (match) => {
          return applyCasing(match, dict[lang]!);
        });
      }
    }
  }

  // 3. Token-level translation with Zero-Residual Guarantee
  result = result.replace(/(?<!\p{L})([a-zA-Z]+(?:'[a-zA-Z]+)?)(?!\p{L})/gu, (_match, token) => {
    return translateReadingToken(token, lang);
  });

  // 4. Post-processing for CJK scripts
  if (lang === "zh" || lang === "ja") {
    result = result.replace(/([\u4e00-\u9fa5\u3040-\u30ff])\s+([\u4e00-\u9fa5\u3040-\u30ff])/g, "$1$2");
    result = result.replace(/([\u4e00-\u9fa5\u3040-\u30ff])\s+([\u4e00-\u9fa5\u3040-\u30ff])/g, "$1$2");
  }

  return result;
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Creates a localized version of a ReadingTest where EVERY passage,
 * EVERY question prompt, and EVERY option is translated into the target language.
 * There is NO English word remaining for any non-English language.
 */
export function getLocalizedReadingTest(test: ReadingTest, lang: SupportedLanguage): ReadingTest {
  if (!test || lang === "en") return test;

  const localizedTitle = translateReadingTextPure(test.title, lang);

  const localizedPassages = test.passages.map(passage => {
    return translateReadingTextPure(passage, lang);
  });

  const localizedQuestions = test.questions.map(q => {
    const localizedPrompt = translateReadingTextPure(q.q, lang);
    const localizedOptions = q.options ? q.options.map(opt => translateReadingTextPure(opt, lang)) : undefined;

    return {
      ...q,
      q: localizedPrompt,
      options: localizedOptions,
    };
  });

  return {
    ...test,
    title: localizedTitle,
    passages: localizedPassages,
    questions: localizedQuestions,
  };
}
