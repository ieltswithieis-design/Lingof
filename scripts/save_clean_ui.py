import json
import re

with open("scripts/unique_incomplete_phrases.json", "r", encoding="utf-8") as f:
    phrases = json.load(f)

def is_code_artifact(s: str) -> bool:
    s = s.strip()
    if s.startswith(")") or s.startswith("(") or s.startswith("="):
        return True
    if "iframeDoc" in s or "outerHTML" in s:
        return True
    if re.search(r"(\?\s*\(|\:\s*\(|=>|\$\{|\}\s*\))", s):
        return True
    if re.search(r"\b(let|const|var|return|function|import|export)\b", s):
        return True
    if "passageQuestionRanges" in s:
        return True
    if len(s) < 2:
        return True
    return False

ui_items = [p.strip() for p in phrases if not is_code_artifact(p)]
# Remove duplicates while preserving order
seen = set()
unique_ui = []
for item in ui_items:
    norm = item.lower()
    if norm not in seen:
        seen.add(norm)
        unique_ui.append(item)

print(f"Clean unique UI items to translate: {len(unique_ui)}")
with open("scripts/clean_ui_phrases_to_translate.json", "w", encoding="utf-8") as f:
    json.dump(unique_ui, f, indent=2, ensure_ascii=False)
