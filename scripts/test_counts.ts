import fs from "fs";
import path from "path";

// Load all phrases and words
const phrases: string[] = JSON.parse(fs.readFileSync("scripts/unique_incomplete_phrases.json", "utf8"));
const words: string[] = JSON.parse(fs.readFileSync("scripts/all_missing_words_in_audit.json", "utf8"));

console.log("Phrases count:", phrases.length, "Words count:", words.length);
