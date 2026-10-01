import React, { useState, useEffect } from "react";
import { ReadingTest } from "../types/ielts";
import { getReadingBand, isAnswerCorrect } from "../utils/ieltsScoring";
import { saveAttempt } from "../utils/storage";
import { stopAllActiveMedia } from "../utils/audioControl";
import { Clock, CheckCircle, ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, XCircle, Flag, ZoomIn, ZoomOut, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translateReadingTextPure } from "../utils/readingZeroEnglishEngine";

interface ReadingRunnerProps {
  test: ReadingTest;
  onBack: () => void;
  onComplete: () => void;
}

export const ReadingRunner: React.FC<ReadingRunnerProps> = ({ test, onBack, onComplete }) => {
  const { t, currentLanguage, currentLanguageInfo, speakEnglish, stopSpeaking } = useLanguage();
  const [activePassage, setActivePassage] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(`ielts_reading_draft_${test.id}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(60 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);

  // Helper to strictly ensure zero English text if currentLanguage !== "en"
  const localize = (str: string): string => {
    if (currentLanguage === "en") return str;
    return translateReadingTextPure(str, currentLanguage);
  };

  // Stop any lingering media on unmount
  useEffect(() => {
    return () => {
      stopAllActiveMedia();
      stopSpeaking();
    };
  }, [stopSpeaking]);

  useEffect(() => {
    stopSpeaking();
    setIsReadingAloud(false);
  }, [activePassage, stopSpeaking]);

  const handleToggleReadAloud = () => {
    if (isReadingAloud) {
      stopSpeaking();
      setIsReadingAloud(false);
    } else {
      setIsReadingAloud(true);
      const rawText = test.passages[activePassage];
      const textToRead = rawText;
      speakEnglish(textToRead, {
        rate: 0.95,
        onEnd: () => setIsReadingAloud(false),
        onError: () => setIsReadingAloud(false)
      });
    }
  };

  // Strictly localized TFNG labels with ZERO English words in non-English modes
  const getTFNGLabel = (val: "TRUE" | "FALSE" | "NOT GIVEN") => {
    if (currentLanguage === "en") return val;
    const labels: Record<string, Record<string, string>> = {
      TRUE: {
        zh: "正确",
        ar: "صحيح",
        ur: "درست",
        bn: "সত্য",
        es: "VERDADERO",
        fr: "VRAI",
        de: "WAHR",
        hi: "सत्य",
        pt: "VERDADEIRO",
        ru: "ИСТИНА",
        ja: "正"
      },
      FALSE: {
        zh: "错误",
        ar: "خطأ",
        ur: "غلط",
        bn: "মিথ্যা",
        es: "FALSO",
        fr: "FAUX",
        de: "FALSCH",
        hi: "गलत",
        pt: "FALSO",
        ru: "ЛОЖЬ",
        ja: "誤"
      },
      "NOT GIVEN": {
        zh: "未提及",
        ar: "غير مذكور",
        ur: "غیر مذکور",
        bn: "উল্লেখ নেই",
        es: "NO DADO",
        fr: "NON MENTIONNÉ",
        de: "NICHT ANGEGEBEN",
        hi: "उल्लेख नहीं",
        pt: "NÃO CONSTA",
        ru: "НЕ УКАЗАНО",
        ja: "言及なし"
      }
    };
    return labels[val]?.[currentLanguage] || localize(val);
  };

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleAnswerChange = (qIndex: number, val: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const next = { ...prev, [qIndex]: val };
      try {
        localStorage.setItem(`ielts_reading_draft_${test.id}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const toggleFlag = (qIndex: number) => {
    setFlagged(prev => ({ ...prev, [qIndex]: !prev[qIndex] }));
  };

  const calculateScore = () => {
    let score = 0;
    test.questions.forEach((q, idx) => {
      const userVal = userAnswers[idx];
      if (isAnswerCorrect(userVal, q.answer)) {
        score++;
      }
    });
    return score;
  };

  const handleSavePassageAndNext = (passageIdx: number) => {
    stopAllActiveMedia();
    const curScore = calculateScore();
    const curBand = getReadingBand(curScore);
    saveAttempt({
      section: "reading",
      testId: test.id,
      completedAt: new Date().toISOString(),
      score: curScore,
      band: curBand,
    });

    if (passageIdx < 2) {
      setActivePassage(passageIdx + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    stopAllActiveMedia();
    setIsSubmitted(true);
    setIsTimerRunning(false);
    const score = calculateScore();
    const band = getReadingBand(score);

    saveAttempt({
      section: "reading",
      testId: test.id,
      completedAt: new Date().toISOString(),
      score,
      band,
    });
    onComplete();
  };

  const score = isSubmitted ? calculateScore() : 0;
  const band = isSubmitted ? getReadingBand(score) : "0.0";
  const answeredCount = Object.keys(userAnswers).filter(k => (userAnswers[Number(k)] ?? "").trim() !== "").length;

  const fontClasses = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed",
    lg: "text-lg leading-relaxed",
  };

  // Questions range for each passage:
  const passageQuestionRanges = [
    { start: 0, end: 13 },
    { start: 14, end: 27 },
    { start: 28, end: 39 },
  ];

  const currentPassageText = test.passages[activePassage];

  return (
    <div className="test-content flex flex-col gap-5 pb-20">
      {/* Runner Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t("backToHub")}
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-snug">
              {test.title}
            </h2>
            <span className="text-xs text-slate-500">
              {localize("IELTS Academic Reading • 3 Passages • 40 Questions")}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Font Resizer */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => setFontSize(prev => (prev === "lg" ? "base" : "sm"))}
              className="rounded p-1 text-slate-600 hover:bg-white hover:text-slate-900 cursor-pointer"
              title={localize("Decrease font size")}
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setFontSize(prev => (prev === "sm" ? "base" : "lg"))}
              className="rounded p-1 text-slate-600 hover:bg-white hover:text-slate-900 cursor-pointer"
              title={localize("Increase font size")}
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-black tabular-nums shadow-2xs ${
              secondsRemaining < 600
                ? "bg-red-50 text-red-700 border border-red-200 animate-pulse"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-xs transition-colors cursor-pointer"
            >
              {t("submitTest")} ({answeredCount}/40)
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-extrabold text-emerald-800">
                {t("score")}: {score}/40 ({t("bandScore")}: {band})
              </span>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  setSecondsRemaining(60 * 60);
                  setIsTimerRunning(true);
                }}
                className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                {t("iqRetakeTest")}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Submitted Result Banner */}
      {isSubmitted && (
        <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                {t("statusCompleted")}
              </span>
              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {t("score")}: <span className="text-emerald-700">{score} / 40</span> • {t("bandScore")}: <span className="text-blue-700">{band}</span>
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                {t("reviewAnswers")}
              </p>
            </div>
            <button
              onClick={onBack}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              {t("backToHub")}
            </button>
          </div>
        </div>
      )}

      {/* Split Workstation: Left (Passage) / Right (Questions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left: Passage Viewer */}
        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              {[0, 1, 2].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActivePassage(idx)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                    activePassage === idx
                      ? "bg-blue-600 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {localize("Passage")} {idx + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleReadAloud}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isReadingAloud
                    ? "bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs animate-pulse"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
                title={localize("Listen to passage text read aloud")}
              >
                {isReadingAloud ? (
                  <>
                    <VolumeX className="h-3.5 w-3.5 text-amber-700" />
                    <span>{t("stopVoice")}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>{t("voiceReader")}</span>
                  </>
                )}
              </button>
              <span className="text-xs font-semibold text-slate-400">
                {localize("Questions")} {passageQuestionRanges[activePassage].start + 1}–{passageQuestionRanges[activePassage].end + 1}
              </span>
            </div>
          </div>

          {/* Passage Content Container - 100% in current language, 0 words in English */}
          <div
            className={`max-h-[640px] overflow-y-auto pr-3 font-serif text-slate-800 ${fontClasses[fontSize]}`}
            dir="ltr"
          >
            <div data-no-translate data-test-content className="whitespace-pre-line leading-relaxed font-sans">
              {currentPassageText}
            </div>
          </div>
        </div>

        {/* Right: Questions Pane */}
        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {localize("Questions for Passage")} {activePassage + 1}
            </h3>
            <span className="text-xs font-semibold text-slate-400">
              {localize("Passage")} {activePassage + 1} / 3
            </span>
          </div>

          {/* Question List for the active passage */}
          <div className="max-h-[640px] overflow-y-auto pr-3 space-y-6">
            {test.questions.map((q, idx) => {
              const pRange = passageQuestionRanges[activePassage];
              if (idx < pRange.start || idx > pRange.end) return null;

              const userVal = userAnswers[idx];
              const isCorrect = isAnswerCorrect(userVal, q.answer);
              const isFlagged = !flagged[idx];

              return (
                <div
                  key={idx}
                  id={`q-${idx}`}
                  className={`rounded-xl border p-4 transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? "border-emerald-200 bg-emerald-50/30"
                        : "border-red-200 bg-red-50/30"
                      : isFlagged
                      ? "border-amber-300 bg-amber-50/20"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <span data-no-translate data-test-content className="font-bold text-slate-900 text-sm leading-snug" dir="ltr">
                          {q.q}
                        </span>
                      </div>
                    </div>
                    {!isSubmitted && (
                      <button
                        onClick={() => toggleFlag(idx)}
                        title={localize("Flag question")}
                        className={`p-1 rounded transition-colors shrink-0 cursor-pointer ${
                          isFlagged ? "text-amber-600" : "text-slate-300 hover:text-slate-600"
                        }`}
                      >
                        <Flag className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Input Rendering based on type */}
                  {q.type === "mcq" && q.options && (
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, oIdx) => (
                        <label
                          key={oIdx}
                          className={`flex items-start gap-3 rounded-lg border p-2.5 text-xs font-medium cursor-pointer transition-colors ${
                            Number(userVal) === oIdx
                              ? "border-blue-500 bg-blue-50/70 text-blue-900"
                              : "border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q-${idx}`}
                            value={oIdx}
                            disabled={isSubmitted}
                            checked={Number(userVal) === oIdx}
                            onChange={() => handleAnswerChange(idx, String(oIdx))}
                            className="h-4 w-4 text-blue-600 mt-0.5 cursor-pointer"
                          />
                          <span data-no-translate data-test-content dir="ltr">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}

                  {q.type === "tfng" && (
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {(["TRUE", "FALSE", "NOT GIVEN"] as const).map(val => (
                        <button
                          key={val}
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => handleAnswerChange(idx, val)}
                          className={`rounded-lg border py-2 px-1 text-xs font-bold transition-all text-center leading-tight cursor-pointer ${
                            userVal === val
                              ? "border-blue-600 bg-blue-600 text-white shadow-2xs"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                          dir="ltr"
                        >
                          {getTFNGLabel(val)}
                        </button>
                      ))}
                    </div>
                  )}

                  {(q.type === "completion" || q.type === "short") && (
                    <div className="pt-1">
                      <input
                        type="text"
                        disabled={isSubmitted}
                        placeholder={localize("Type answer here...")}
                        value={userVal ?? ""}
                        onChange={e => handleAnswerChange(idx, e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden"
                        dir="ltr"
                      />
                    </div>
                  )}

                  {/* Submitted Feedback Box */}
                  {isSubmitted && (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 pt-2 text-xs">
                      <div className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <span className="flex items-center gap-1 font-bold text-emerald-700">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {localize("Correct")}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 font-bold text-red-700">
                            <XCircle className="h-3.5 w-3.5" />
                            {localize("Incorrect")} ({localize("You answered")}: {
                              !userVal ? localize("No answer") :
                              (userVal === "TRUE" || userVal === "FALSE" || userVal === "NOT GIVEN") ? getTFNGLabel(userVal) :
                              (q.type === "mcq" && q.options && !isNaN(Number(userVal)) && q.options[Number(userVal)]) ? q.options[Number(userVal)] :
                              userVal
                            })
                          </span>
                        )}
                      </div>
                      <span className="font-semibold text-slate-700">
                        {localize("Answer")}:{" "}
                        <span className="font-bold text-blue-700">
                          {typeof q.answer === "number" && q.options
                            ? q.options[q.answer]
                            : (q.answer === "TRUE" || q.answer === "FALSE" || q.answer === "NOT GIVEN")
                            ? getTFNGLabel(q.answer)
                            : String(q.answer)}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Passage Action Buttons */}
          {!isSubmitted && (
            <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
              <div className="text-xs font-semibold text-slate-500">
                {localize("Passage")} {activePassage + 1} / 3
              </div>
              <div className="flex items-center gap-2">
                {activePassage > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      stopAllActiveMedia();
                      setActivePassage(prev => prev - 1);
                    }}
                    className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>{localize("Previous Passage")}</span>
                  </button>
                )}
                {activePassage < 2 ? (
                  <button
                    type="button"
                    onClick={() => handleSavePassageAndNext(activePassage)}
                    className="flex items-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2 text-xs font-bold text-white hover:bg-blue-800 shadow-xs transition cursor-pointer"
                  >
                    <span>{localize("Save Passage")} {activePassage + 1} & {localize("Next")}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-extrabold text-white hover:bg-emerald-700 shadow-md transition cursor-pointer"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{localize("Submit & Finish Reading Test")}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Question Navigator Matrix 1 - 40 */}
          <div className="border-t border-slate-100 pt-3">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {localize("Question Navigator (1–40)")}
            </span>
            <div className="grid grid-cols-10 gap-1.5">
              {test.questions.map((_, i) => {
                const hasAnswer = (userAnswers[i] ?? "").trim() !== "";
                const isFlag = !flagged[i];
                const isCurrentPassage =
                  i >= passageQuestionRanges[activePassage].start &&
                  i <= passageQuestionRanges[activePassage].end;

                let btnStyle = "border-slate-200 bg-white text-slate-600 hover:bg-slate-100";
                if (isSubmitted) {
                  const correct = isAnswerCorrect(userAnswers[i], test.questions[i].answer);
                  btnStyle = correct
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-red-400 bg-red-400 text-white";
                } else if (isFlag) {
                  btnStyle = "border-amber-400 bg-amber-100 text-amber-900";
                } else if (hasAnswer) {
                  btnStyle = "border-blue-600 bg-blue-600 text-white";
                }

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (i <= 13) setActivePassage(0);
                      else if (i <= 27) setActivePassage(1);
                      else setActivePassage(2);

                      const el = document.getElementById(`q-${i}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`h-7 rounded text-[11px] font-bold border transition-all cursor-pointer ${btnStyle} ${
                      isCurrentPassage ? "ring-2 ring-blue-300 ring-offset-1" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
