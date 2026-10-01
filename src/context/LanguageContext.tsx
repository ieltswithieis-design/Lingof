import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { SupportedLanguage, SUPPORTED_LANGUAGES, LanguageInfo } from "../types/language";
import { TRANSLATIONS, AppTranslations } from "../utils/translations";
import { speakInLanguage, stopAllSpeech, isCurrentlySpeaking, SpeechOptions } from "../utils/speechVoice";
import { translateTextToLanguage, translateDomTree, isTranslatingDom } from "../utils/universalTranslator";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Globe, Volume2 } from "lucide-react";

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  currentLanguageInfo: LanguageInfo;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: keyof AppTranslations, fallback?: string) => string;
  translate: (text: string) => string;
  speak: (text: string, optionsOrOnEnd?: SpeechOptions | (() => void)) => void;
  speakEnglish: (text: string, options?: SpeechOptions) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
  isRTL: boolean;
  supportedLanguages: LanguageInfo[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "lingofi_user_language_v2";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved as SupportedLanguage;
      }
    } catch {}
    return "en";
  });

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [toastNotice, setToastNotice] = useState<{ title: string; desc: string; flag: string } | null>(null);

  const currentLanguageInfo = SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
  const isRTL = currentLanguageInfo.dir === "rtl";

  const setLanguage = (lang: SupportedLanguage) => {
    stopAllSpeech();
    setIsSpeaking(false);
    setCurrentLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}

    const langInfo = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
    if (typeof document !== "undefined") {
      document.documentElement.lang = langInfo.locale || "en";
      document.documentElement.dir = langInfo.dir || "ltr";
      document.body.dataset.uiLanguage = lang;
      // React rerenders from the new language state first; then translate the live DOM
      // in the next frames. This makes language changes immediate even inside an open test.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => translateDomTree(document.body, lang));
      });
    }

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    setToastNotice({
      title: dict.currentLanguageBadge || `Language: ${langInfo.name}`,
      desc: dict.languageChangedNotice || `Switched to ${langInfo.name}. Audio reading & interface adapted.`,
      flag: langInfo.flag
    });

    // Auto dismiss after 3.5 seconds
    setTimeout(() => {
      setToastNotice(null);
    }, 3500);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLanguageInfo.locale;
      document.documentElement.dir = currentLanguageInfo.dir;
    }
  }, [currentLanguageInfo]);

  // Polling to keep isSpeaking in sync with window.speechSynthesis
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpeaking(isCurrentlySpeaking());
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const t = useCallback(
    (key: keyof AppTranslations, fallback?: string): string => {
      const dict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
      return (dict[key] as string) || (TRANSLATIONS.en[key] as string) || fallback || "";
    },
    [currentLanguage]
  );

  const translate = useCallback(
    (text: string): string => {
      return translateTextToLanguage(text, currentLanguage);
    },
    [currentLanguage]
  );

  // Automatic DOM Tree-Walker and Mutation Observer
  // Guarantees zero residual English across all views, runners, test data, and dynamic content
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Always synchronize the interface with the selected language. The translator
    // restores exact original English for `en`, while protected exam-content nodes
    // (`data-no-translate` / `data-test-content`) are never touched.
    document.body.dataset.uiLanguage = currentLanguage;
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => translateDomTree(document.body, currentLanguage));
    });

    if (currentLanguage === "en") {
      return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
    }

    // Watch for dynamic DOM changes (route transitions, test loads, pagination, audio turns)
    let debounceTimer: any = null;
    const observer = new MutationObserver(() => {
      // Avoid reacting to mutations generated by translateDomTree itself
      if (isTranslatingDom()) return;

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        translateDomTree(document.body, currentLanguage);
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [currentLanguage]);

  const speak = useCallback(
    (text: string, optionsOrOnEnd?: SpeechOptions | (() => void)) => {
      setIsSpeaking(true);
      const opts: SpeechOptions = typeof optionsOrOnEnd === "function"
        ? { onEnd: optionsOrOnEnd }
        : (optionsOrOnEnd || {});

      speakInLanguage(text, currentLanguage, {
        ...opts,
        onStart: () => {
          setIsSpeaking(true);
          opts.onStart?.();
        },
        onEnd: () => {
          setIsSpeaking(false);
          opts.onEnd?.();
        },
        onError: (err) => {
          setIsSpeaking(false);
          opts.onError?.(err);
        },
      });
    },
    [currentLanguage]
  );

  const speakEnglish = useCallback(
    (text: string, options?: SpeechOptions) => {
      setIsSpeaking(true);
      speakInLanguage(text, "en", {
        ...options,
        onStart: () => {
          setIsSpeaking(true);
          options?.onStart?.();
        },
        onEnd: () => {
          setIsSpeaking(false);
          options?.onEnd?.();
        },
        onError: (err) => {
          setIsSpeaking(false);
          options?.onError?.(err);
        },
      });
    },
    []
  );

  const stopSpeaking = useCallback(() => {
    stopAllSpeech();
    setIsSpeaking(false);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentLanguageInfo,
        setLanguage,
        t,
        translate,
        speak,
        speakEnglish,
        stopSpeaking,
        isSpeaking,
        isRTL,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}

      {/* Floating Language Switched Toast Alert */}
      <AnimatePresence>
        {toastNotice && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[99999] max-w-sm rounded-2xl border border-slate-700 bg-slate-950 p-4 text-white shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">{toastNotice.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{toastNotice.title}</span>
                </div>
                <p className="mt-1 text-xs text-slate-300 leading-snug">
                  {toastNotice.desc}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1"><Volume2 className="h-3 w-3 text-cyan-400" /> Native TTS Voice</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Globe className="h-3 w-3 text-blue-400" /> UI Synchronized</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

