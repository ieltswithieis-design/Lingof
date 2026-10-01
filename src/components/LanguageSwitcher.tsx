import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SupportedLanguage } from "../types/language";

interface LanguageSwitcherProps {
  compact?: boolean;
  variant?: "light" | "dark";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false, variant = "light" }) => {
  const { currentLanguage, currentLanguageInfo, setLanguage, supportedLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const buttonClasses = variant === "dark"
    ? "flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-xs font-bold text-slate-200 shadow-2xs hover:bg-slate-700 hover:text-white transition cursor-pointer"
    : "flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs hover:bg-slate-50 transition cursor-pointer";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={t("selectLanguage", "Select Language")}
      >
        <span className="text-sm leading-none">{currentLanguageInfo.flag}</span>
        {!compact && (
          <span className={`hidden sm:inline font-semibold ${variant === "dark" ? "text-slate-200" : "text-slate-700"}`}>
            {currentLanguageInfo.name}
          </span>
        )}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${variant === "dark" ? "text-slate-400" : "text-slate-400"} ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-1.5 w-60 rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xl z-[99999] ring-1 ring-black/10 text-slate-900"
          >
            <div className="px-2 py-1 border-b border-slate-100 mb-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Globe className="h-3 w-3 text-blue-600" />
              <span>{t("selectLanguage", "Major World Languages")}</span>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-0.5">
              {supportedLanguages.map((lang) => {
                const isSelected = lang.code === currentLanguage;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition cursor-pointer ${
                      isSelected
                        ? "bg-blue-50 text-blue-900 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <div className="text-left">
                        <div className="leading-tight">{lang.name}</div>
                        <div className="text-[10px] text-slate-400 leading-tight">{lang.englishName}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
