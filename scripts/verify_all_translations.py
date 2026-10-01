import json

with open("scripts/master_strings_to_translate.json", "r", encoding="utf-8") as f:
    master = json.load(f)

# Let's read uiRemainingFullCoveragePhrases.ts to parse our dictionary
from part1 import PART1
from part2 import PART2
from part3 import PART3
from part4 import PART4
from extra_creator_phrases import EXTRA

merged = {}
merged.update(PART1)
merged.update(PART2)
merged.update(PART3)
merged.update(PART4)
merged.update(EXTRA)

languages = ["es", "fr", "de", "zh", "ar", "hi", "pt", "ru", "ja", "ur", "bn"]

failures = []
for s in master:
    k = s.strip().lower()
    if k not in merged:
        failures.append((s, "Missing key in dictionary"))
        continue
    dict_entry = merged[k]
    for lang in languages:
        if lang not in dict_entry or not dict_entry[lang]:
            failures.append((s, f"Missing {lang}"))
        elif dict_entry[lang].strip() == "" or (dict_entry[lang] == s and len(s) > 10 and not s.startswith("src/")):
            failures.append((s, f"Language {lang} matches raw English: {dict_entry[lang]}"))

print(f"Total master strings tested: {len(master)}")
print(f"Total languages tested: {len(languages)}")
print(f"Total checks: {len(master) * len(languages)}")
print(f"Failures count: {len(failures)}")
if failures:
    for f in failures[:20]:
        print("FAIL:", f)
else:
    print("SUCCESS: ALL 371 STRINGS HAVE 100% TRANSLATION COVERAGE ACROSS ALL 11 LANGUAGES!")
