import { translateTextToLanguage, EXACT_DICTIONARY } from "../src/utils/universalTranslator";
import { SupportedLanguage } from "../src/types/language";
import * as fs from "fs";

const cleanPhrases: string[] = JSON.parse(
  fs.readFileSync("scripts/clean_ui_phrases_to_translate.json", "utf-8")
);

const languages: SupportedLanguage[] = ["es", "fr", "de", "zh", "ar", "hi", "pt", "ru", "ja", "ur", "bn"];

console.log(`Testing runtime translation for ${cleanPhrases.length} phrases across ${languages.length} languages...`);

let totalChecks = 0;
let untranslated = 0;
const untranslatedList: Array<{ phrase: string; lang: string }> = [];

for (const phrase of cleanPhrases) {
  for (const lang of languages) {
    totalChecks++;
    const translated = translateTextToLanguage(phrase, lang);
    if (!translated || translated.toLowerCase().trim() === phrase.toLowerCase().trim()) {
      // Some proper names or code paths might intentionally match (like "Vocabino", "Lingofi", "IELTS", "src/assets/images/")
      const isAllowedSame =
        phrase.toLowerCase().includes("src/assets/") ||
        ["vocabino", "lingofi", "ielts", "hamid ali", "sophia l."].includes(phrase.toLowerCase().trim());
      if (!isAllowedSame) {
        untranslated++;
        untranslatedList.push({ phrase, lang });
      }
    }
  }
}

console.log(`Total checks: ${totalChecks}`);
console.log(`Untranslated: ${untranslated}`);
if (untranslatedList.length > 0) {
  console.log("Sample untranslated:", untranslatedList.slice(0, 20));
} else {
  console.log("SUCCESS: 100% OF PHRASES TRANSLATE IN ALL 11 LANGUAGES!");
}
