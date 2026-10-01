import json, sys

with open("scripts/master_strings_to_translate.json") as f:
    items = json.load(f)

print(f"Loaded {len(items)} items successfully.")
