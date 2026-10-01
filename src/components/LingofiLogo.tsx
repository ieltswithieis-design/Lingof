import React, { useId } from "react";
import { motion } from "motion/react";

interface LingofiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "white";
  className?: string;
}

export const LingofiLogo: React.FC<LingofiLogoProps> = ({
  size = "md",
  variant = "full",
  className = ""
}) => {
  // Use React useId to generate unique SVG gradient/filter IDs per instance
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "_");
  const navyGradId = `lfNavyGrad_${uid}`;
  const goldLuxeId = `lfGoldLuxe_${uid}`;
  const cyanAccentId = `lfCyanAccent_${uid}`;
  const shineGlassId = `lfShineGlass_${uid}`;
  const shadowId = `lfShadow_${uid}`;

  const iconDimensions = {
    sm: "h-8 w-8 min-w-[32px]",
    md: "h-10 w-10 min-w-[40px] sm:h-11 sm:w-11 sm:min-w-[44px]",
    lg: "h-14 w-14 min-w-[56px]",
    xl: "h-20 w-20 min-w-[80px]"
  }[size];

  const titleSize = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
    xl: "text-3xl sm:text-4xl tracking-tight"
  }[size];

  const subtitleSize = {
    sm: "text-[9.5px]",
    md: "text-[10.5px] sm:text-[11px]",
    lg: "text-xs",
    xl: "text-sm"
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* ELITE VECTOR CREST EMBLEM: STATELY LINGOFI "LF" MONOGRAM */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: [0, -1, 1, 0] }}
        transition={{ duration: 0.3 }}
        className={`relative ${iconDimensions} shrink-0 rounded-2xl shadow-[0_4px_16px_rgba(2,11,28,0.3)] ring-1 ring-black/10 overflow-hidden cursor-pointer bg-[#0a254d]`}
        title="LingoFi • Official IELTS Academic Examination Institute"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full block"
        >
          <defs>
            {/* Deep Stately Obsidian Navy Gradient */}
            <linearGradient id={navyGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#030b1a" />
              <stop offset="50%" stopColor="#0a254d" />
              <stop offset="100%" stopColor="#123b75" />
            </linearGradient>

            {/* Radiant 24K Burnished Gold */}
            <linearGradient id={goldLuxeId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2a3" />
              <stop offset="25%" stopColor="#facc15" />
              <stop offset="65%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            {/* Cyan/Sapphire Accent */}
            <linearGradient id={cyanAccentId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            {/* Bevel Reflection Mask */}
            <linearGradient id={shineGlassId} x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Drop Shadow Filter */}
            <filter id={shadowId} x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Shield Outer Body */}
          <rect width="120" height="120" rx="28" fill={`url(#${navyGradId})`} />

          {/* Outer Precision Rim: Metallic Gold */}
          <rect
            x="5"
            y="5"
            width="110"
            height="110"
            rx="23"
            stroke={`url(#${goldLuxeId})`}
            strokeWidth="2"
            strokeOpacity="0.8"
          />

          {/* Inner Inset Rim */}
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            rx="18"
            stroke={`url(#${cyanAccentId})`}
            strokeWidth="1"
            strokeOpacity="0.25"
          />

          {/* Diagonal Glass Sheen */}
          <path
            d="M5 28 C5 15, 15 5, 28 5 H92 C105 5, 115 15, 115 28 V45 L5 85 Z"
            fill={`url(#${shineGlassId})`}
          />

          {/* HERALDIC ELEMENTS */}
          {/* Left Laurel Wing */}
          <g opacity="0.4" stroke={`url(#${goldLuxeId})`} strokeWidth="1.5" fill="none">
            <path d="M22 68 C18 55, 20 40, 26 30" />
            <path d="M20 58 C16 52, 22 48, 22 48" />
            <path d="M23 46 C20 40, 26 38, 26 38" />
          </g>

          {/* Right Laurel Wing */}
          <g opacity="0.4" stroke={`url(#${goldLuxeId})`} strokeWidth="1.5" fill="none">
            <path d="M98 68 C102 55, 100 40, 94 30" />
            <path d="M100 58 C104 52, 98 48, 98 48" />
            <path d="M97 46 C100 40, 94 38, 94 38" />
          </g>

          {/* MONUMENTAL SERIF "L" & "F" FOR LINGOFI */}
          {/* Main Stately "L" Stem & Foot */}
          <path
            d="M32 26 H45 V76 H70 V88 H32 Z"
            fill="#ffffff"
            filter={`url(#${shadowId})`}
          />

          {/* Ascending Golden "F" Cross and Wing */}
          <path
            d="M52 26 H88 V37 H64 V50 H82 V61 H64 V76 H52 Z"
            fill={`url(#${goldLuxeId})`}
            filter={`url(#${shadowId})`}
          />

          {/* Apex 8-Pointed North Star / Excellence Star */}
          <g transform="translate(60, 18)">
            <path
              d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z"
              fill={`url(#${goldLuxeId})`}
            />
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
          </g>

          {/* Bottom Precision Seal Point */}
          <circle cx="60" cy="107" r="2.5" fill={`url(#${goldLuxeId})`} />
        </svg>
      </motion.div>

      {/* BRAND TYPOGRAPHY & OFFICIAL ACCREDITATION BADGES */}
      {variant !== "icon" && (
        <div className="flex flex-col text-left shrink-0">
          {/* Primary Wordmark Line */}
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif font-black ${titleSize} whitespace-nowrap ${
                variant === "white" 
                  ? "text-white drop-shadow-xs" 
                  : "bg-gradient-to-r from-[#030b1a] via-[#0a254d] to-[#123b75] bg-clip-text text-transparent"
              }`}
            >
              lingofi
            </span>

            {/* Institute Standard Pill Badge */}
            <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-1.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider text-amber-300 shadow-[0_2px_8px_rgba(10,37,77,0.3)] ring-1 ring-amber-400/30 whitespace-nowrap">
              <span>Institute</span>
              <span className="hidden xs:inline opacity-70">★</span>
              <span className="hidden xs:inline">IELTS</span>
            </span>
          </div>

          {/* Subtitle & Official Verification Indicator - shown on sm+ or when space permits */}
          <div className="hidden sm:flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span
              className={`font-semibold tracking-wide ${subtitleSize} whitespace-nowrap ${
                variant === "white" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Institute of Language & Testing
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

