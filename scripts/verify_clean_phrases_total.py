import json
from translations_examiner import EXAMINER_PHRASES
from translations_blog_lexical import BLOG_LEXICAL_PHRASES
from translations_descriptors import DESCRIPTOR_PHRASES
from translations_trf_iq import TRF_IQ_PHRASES
from translations_director_creator import DIRECTOR_CREATOR_PHRASES
from translations_tests_nav import TESTS_NAV_PHRASES
from translations_trf_additional import TRF_ADDITIONAL_PHRASES
from translations_model_blog import MODEL_BLOG_PHRASES
from translations_creator_details import CREATOR_DETAILS_PHRASES
from translations_iq_youtube_media import IQ_YOUTUBE_MEDIA_PHRASES
from translations_labels_director_office import LABELS_DIRECTOR_OFFICE_PHRASES

with open("scripts/clean_ui_phrases_to_translate.json", "r", encoding="utf-8") as f:
    clean_phrases = json.load(f)

all_dicts = {}
for d in [
    EXAMINER_PHRASES, BLOG_LEXICAL_PHRASES, DESCRIPTOR_PHRASES,
    TRF_IQ_PHRASES, DIRECTOR_CREATOR_PHRASES, TESTS_NAV_PHRASES,
    TRF_ADDITIONAL_PHRASES, MODEL_BLOG_PHRASES, CREATOR_DETAILS_PHRASES,
    IQ_YOUTUBE_MEDIA_PHRASES, LABELS_DIRECTOR_OFFICE_PHRASES
]:
    for k, v in d.items():
        all_dicts[k.lower().strip()] = v

covered = []
uncovered = []

for p in clean_phrases:
    pl = p.lower().strip()
    if pl in all_dicts:
        covered.append(p)
    else:
        uncovered.append(p)

print(f"Total clean UI phrases: {len(clean_phrases)}")
print(f"Covered: {len(covered)}")
print(f"Uncovered: {len(uncovered)}")

if uncovered:
    print("Still uncovered:", uncovered)
