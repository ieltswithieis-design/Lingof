import fs from "fs";
import path from "path";

// Master Dictionary Generator for 100% Translation Coverage in all 11 Languages
// Languages: ur, ar, zh, es, fr, de, hi, pt, ru, ja, bn

const phrases: string[] = JSON.parse(fs.readFileSync("scripts/unique_incomplete_phrases.json", "utf8"));
const missingWords: string[] = JSON.parse(fs.readFileSync("scripts/all_missing_words_in_audit.json", "utf8"));

console.log(`Generating translations for ${phrases.length} phrases and ${missingWords.length} words...`);
