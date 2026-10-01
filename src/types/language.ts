export type SupportedLanguage = 
  | 'en' // English
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'zh' // Chinese (Mandarin)
  | 'hi' // Hindi
  | 'pt' // Portuguese
  | 'ru' // Russian
  | 'ja' // Japanese
  | 'bn'; // Bengali (Bangladeshi)

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string; // Native name
  englishName: string;
  flag: string;
  locale: string; // e.g. en-US, es-ES
  ttsVoicePrefix: string[];
  dir: 'ltr' | 'rtl';
  examAcronym: string; // I + Language first letter + LTS
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    flag: '🇬🇧',
    locale: 'en-US',
    ttsVoicePrefix: ['en-US', 'en-GB', 'en-AU', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-IN', 'en'],
    dir: 'ltr',
    examAcronym: 'IELTS'
  },
  {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    flag: '🇪🇸',
    locale: 'es-ES',
    ttsVoicePrefix: ['es-ES', 'es-MX', 'es-US', 'es-419', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es'],
    dir: 'ltr',
    examAcronym: 'ISLTS'
  },
  {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    flag: '🇫🇷',
    locale: 'fr-FR',
    ttsVoicePrefix: ['fr-FR', 'fr-CA', 'fr-BE', 'fr-CH', 'fr'],
    dir: 'ltr',
    examAcronym: 'IFLTS'
  },
  {
    code: 'de',
    name: 'Deutsch',
    englishName: 'German',
    flag: '🇩🇪',
    locale: 'de-DE',
    ttsVoicePrefix: ['de-DE', 'de-AT', 'de-CH', 'de'],
    dir: 'ltr',
    examAcronym: 'IGLTS'
  },
  {
    code: 'zh',
    name: '简体中文',
    englishName: 'Chinese (Mandarin)',
    flag: '🇨🇳',
    locale: 'zh-CN',
    ttsVoicePrefix: ['zh-CN', 'zh-TW', 'zh-HK', 'cmn-CN', 'cmn-Hans-CN', 'cmn-Hans', 'cmn-TW', 'cmn', 'zh-Hans', 'zh-Hant', 'zh', 'yue'],
    dir: 'ltr',
    examAcronym: 'ICLTS'
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    englishName: 'Hindi',
    flag: '🇮🇳',
    locale: 'hi-IN',
    ttsVoicePrefix: ['hi-IN', 'hi-Latn', 'hi'],
    dir: 'ltr',
    examAcronym: 'IHLTS'
  },
  {
    code: 'pt',
    name: 'Português',
    englishName: 'Portuguese',
    flag: '🇧🇷',
    locale: 'pt-BR',
    ttsVoicePrefix: ['pt-BR', 'pt-PT', 'pt'],
    dir: 'ltr',
    examAcronym: 'IPLTS'
  },
  {
    code: 'ru',
    name: 'Русский',
    englishName: 'Russian',
    flag: '🇷🇺',
    locale: 'ru-RU',
    ttsVoicePrefix: ['ru-RU', 'ru-BY', 'ru-KZ', 'ru'],
    dir: 'ltr',
    examAcronym: 'IRLTS'
  },
  {
    code: 'ja',
    name: '日本語',
    englishName: 'Japanese',
    flag: '🇯🇵',
    locale: 'ja-JP',
    ttsVoicePrefix: ['ja-JP', 'ja'],
    dir: 'ltr',
    examAcronym: 'IJLTS'
  },
  {
    code: 'bn',
    name: 'বাংলা',
    englishName: 'Bengali (Bangladeshi)',
    flag: '🇧🇩',
    locale: 'bn-BD',
    ttsVoicePrefix: ['bn-BD', 'bn-IN', 'ben-BD', 'ben-IN', 'ben', 'bn'],
    dir: 'ltr',
    examAcronym: 'IBLTS'
  }
];

export function getLanguageExamAcronym(lang: string): string {
  const found = SUPPORTED_LANGUAGES.find(l => l.code === lang);
  return found ? found.examAcronym : 'IELTS';
}
