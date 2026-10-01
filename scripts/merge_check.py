import json
from part1 import PART1
from part2 import PART2
from part3 import PART3
from part4 import PART4

with open("scripts/master_strings_to_translate.json", "r", encoding="utf-8") as f:
    master = json.load(f)

merged = {}
merged.update(PART1)
merged.update(PART2)
merged.update(PART3)
merged.update(PART4)

print(f"Total merged keys: {len(merged)}")
print(f"Total master strings: {len(master)}")

missing = []
for s in master:
    k = s.strip().lower()
    if k not in merged:
        missing.append(s)

print(f"Missing count: {len(missing)}")
for m in missing:
    print("MISSING:", repr(m))
