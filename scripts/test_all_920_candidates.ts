import { translateTextToLanguage } from "../src/utils/universalTranslator";
import { SupportedLanguage } from "../src/types/language";
import * as fs from "fs";

const candidates: string[] = JSON.parse(
  fs.readFileSync("scripts/extracted_all_ui_candidates.json", "utf-8")
);

const languages: SupportedLanguage[] = ["es", "fr", "de", "zh", "ar", "hi", "pt", "ru", "ja", "ur", "bn"];

console.log(`Checking ${candidates.length} candidates...`);

// Filter out noise like purely code identifiers or CSS classes
const isNoise = (text: string) => {
  if (text.startsWith("http") || text.startsWith("/") || text.includes("px") || text.includes("rem")) return true;
  if (text.includes("(") && text.includes(")") && text.includes("=>")) return true;
  if (text.length < 2) return true;
  return false;
};

const cleanCandidates = candidates.filter(c => !isNoise(c));
console.log(`Clean candidates: ${cleanCandidates.length}`);

const untranslatedMap: Record<string, string[]> = {};

for (const text of cleanCandidates) {
  for (const lang of languages) {
    const res = translateTextToLanguage(text, lang);
    // If output still equals input and contains english letters
    if (res.trim().toLowerCase() === text.trim().toLowerCase() && /[a-zA-Z]{3,}/.test(text)) {
      // Ignore acceptable proper nouns
      const isAcceptable = ["vocabino", "lingofi", "ielts", "hamid ali", "idp"].includes(text.trim().toLowerCase());
      if (!isAcceptable) {
        if (!untranslatedMap[text]) {
          untranslatedMap[text] = [];
        }
        untranslatedMap[text].push(lang);
      }
    }
  }
}

const untranslatedKeys = Object.keys(untranslatedMap);
console.log(`Untranslated strings count: ${untranslatedKeys.length}`);

fs.writeFileSync("scripts/untranslated_candidates.json", JSON.stringify(untranslatedMap, null, 2));

console.log("First 30 untranslated strings:");
for (const key of untranslatedKeys.slice(0, 30)) {
  console.log(`- "${key}": missing in [${untranslatedMap[key].slice(0, 5).join(", ")}...]`);
}
