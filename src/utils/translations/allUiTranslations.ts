import { SupportedLanguage } from "../../types/language";
import { UI_EXAMINER_PHRASES } from "./uiExaminerPhrases";
import { UI_BLOG_LEXICAL_PHRASES } from "./uiBlogLexicalPhrases";
import { UI_DESCRIPTORS_PHRASES } from "./uiDescriptorsPhrases";
import { UI_TRF_IQ_PHRASES } from "./uiTrfIqPhrases";
import { UI_TESTS_NAV_PHRASES } from "./uiTestsNavPhrases";
import { UI_TRF_ADDITIONAL_PHRASES } from "./uiTrfAdditionalPhrases";
import { UI_MODEL_BLOG_PHRASES } from "./uiModelBlogPhrases";
import { UI_IQ_YOUTUBE_MEDIA_PHRASES } from "./uiIqYoutubeMediaPhrases";
import { UI_ACADEMIC_VOCABULARY } from "./uiAcademicVocabulary";
import { UI_REMAINING_FULL_COVERAGE_PHRASES } from "./uiRemainingFullCoveragePhrases";

export const ALL_NEW_UI_TRANSLATIONS: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  ...UI_EXAMINER_PHRASES,
  ...UI_BLOG_LEXICAL_PHRASES,
  ...UI_DESCRIPTORS_PHRASES,
  ...UI_TRF_IQ_PHRASES,
  ...UI_TESTS_NAV_PHRASES,
  ...UI_TRF_ADDITIONAL_PHRASES,
  ...UI_MODEL_BLOG_PHRASES,
  ...UI_IQ_YOUTUBE_MEDIA_PHRASES,
  ...UI_ACADEMIC_VOCABULARY,
  ...UI_REMAINING_FULL_COVERAGE_PHRASES,
};
