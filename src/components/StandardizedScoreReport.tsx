import React, { useRef } from "react";
import { StandardizedTestResult } from "../types/standardizedTests";
import { STANDARDIZED_EXAMS_META } from "../data/standardizedTestsData";
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Printer, 
  Share2, 
  ShieldCheck, 
  GraduationCap, 
  TrendingUp, 
  BookOpen, 
  ArrowLeft,
  QrCode,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translateReadingTextPure } from "../utils/readingZeroEnglishEngine";

interface StandardizedScoreReportProps {
  result: StandardizedTestResult;
  onRetake: () => void;
  onBackToHub: () => void;
  onReviewQuestions?: () => void;
}

export const StandardizedScoreReport: React.FC<StandardizedScoreReportProps> = ({
  result,
  onRetake,
  onBackToHub,
}) => {
  const reportRef = useRef<HTMLDivElement>(null);
  const { t, currentLanguage } = useLanguage();
  const localize = (str: string): string => {
    if (!str || currentLanguage === "en") return str;
    return translateReadingTextPure(str, currentLanguage);
  };

  if (!result || !result?.examId) {
    return (
      <div className="mx-auto max-w-xl p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm mt-8 space-y-4">
        <p className="text-base font-bold text-slate-800">{localize("Score report not found.")}</p>
        <button
          onClick={onBackToHub}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
        >
          {localize("Return to All Exams")}
        </button>
      </div>
    );
  }

  const validExamId = result?.examId || "pte";
  const meta = STANDARDIZED_EXAMS_META[validExamId] || STANDARDIZED_EXAMS_META.pte;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12">
      {/* Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        <button
          onClick={onBackToHub}
          className="flex items-center gap-2 text-xs font-black text-slate-700 hover:text-blue-900 transition cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{localize("Back to All International Exams")}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onRetake}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
            <span>{localize("Retake Exam")}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition shadow-xs cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>{localize("Print Official Report")}</span>
          </button>
        </div>
      </div>

      {/* Printable Certificate / Score Report Container */}
      <div 
        ref={reportRef} 
        className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-10 shadow-xl print:border-none print:shadow-none print:p-0 space-y-8"
      >
        {/* Certificate Header Banner */}
        <div className="border-b-2 border-slate-200 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-black text-blue-900 uppercase tracking-wide">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>{localize("Verified Standardized Score Report")}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {localize(meta?.fullName || result.examName)}
              </h1>
              <p className="text-xs text-slate-500">
                {localize("Administered under LingoFi Global Examination Standards • Governing Body:")} {meta?.governingBody}
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{localize("Report Verification ID")}</div>
              <div className="font-mono text-sm font-black text-blue-950 tracking-wider">
                {result.verificationCode}
              </div>
              <div className="text-[11px] text-slate-500">{localize("Issued:")} {result.dateCompleted}</div>
            </div>
          </div>
        </div>

        {/* Candidate & Hero Score Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Candidate Info Box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400">{localize("Candidate Details")}</div>
            <div>
              <div className="text-base font-extrabold text-slate-900">{result.candidateName}</div>
              <div className="text-xs text-slate-500">{localize("Global Test ID:")} LFI-{(result.examId || "PTE").toUpperCase()}-{Math.floor(100000 + Math.random() * 900000)}</div>
            </div>
            <div className="pt-2 border-t border-slate-200/80 space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>{localize("Exam Title:")}</span>
                <span className="font-semibold text-slate-800">{localize(meta?.name)}</span>
              </div>
              <div className="flex justify-between">
                <span>{localize("Duration:")}</span>
                <span className="font-semibold text-slate-800">{Math.round(result.timeSpentSeconds / 60)} {localize("mins used")}</span>
              </div>
              <div className="flex justify-between">
                <span>{localize("Delivery:")}</span>
                <span className="font-semibold text-emerald-700">{localize("Online Computerized")}</span>
              </div>
            </div>
          </div>

          {/* Hero Overall Score Box */}
          <div className="md:col-span-2 rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-900 to-indigo-950 p-6 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-black text-blue-200">
                  <Award className="h-3.5 w-3.5 text-amber-300" />
                  {localize("Official Scaled Score")}
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-2">
                  {result.scaledScore}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold text-blue-200 uppercase tracking-wider">{localize("Percentile Rank")}</div>
                <div className="text-3xl sm:text-4xl font-black text-amber-300">
                  {result.percentile}th
                </div>
                <div className="text-[10px] text-blue-200/80">{localize("Higher than")} {result.percentile}% {localize("of test takers")}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-800/80 flex flex-wrap items-center justify-between text-xs text-blue-200 gap-2">
              <span>{localize("Performance Band:")} <strong className="text-white">{result.percentile >= 90 ? localize("Superior / 90th+ Percentile") : result.percentile >= 75 ? localize("Competitive / High Academic Standing") : localize("Standard Competency")}</strong></span>
              <span className="text-[11px] text-blue-300">{localize("Calibrated to official")} {meta?.governingBody} {localize("curve")}</span>
            </div>
          </div>
        </div>

        {/* Section Score Breakdown */}
        <div className="space-y-4">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <span>{localize("Section-by-Section Scaled Breakdown")}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {result.sectionBreakdown.map((sec, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-2">
                <div className="text-xs font-bold text-slate-500">{localize(sec.sectionTitle)}</div>
                <div className="flex items-baseline justify-between">
                  <div className="text-xl font-black text-slate-900">{sec.scaledScore}</div>
                  <div className="text-xs font-extrabold text-blue-600">{sec.percentage}% {localize("Accuracy")}</div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(5, sec.percentage))}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500">
                  {localize("Raw Points:")} {sec.score} {localize("of")} {sec.maxScore}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Recognition & Verification Footer */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-black text-slate-800 uppercase tracking-wide">
                {localize("Institutional Acceptance Standards")}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                {localize("This score report documents demonstrated competency on standard exam sections. Recognized by over")} {meta?.acceptedInstitutions}. {localize("Target candidates use this documentation for international admissions and academic placement.")}
              </p>
            </div>

            <div className="flex items-center gap-3 self-center sm:self-auto bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
              <QrCode className="h-10 w-10 text-slate-800" />
              <div className="text-[10px] text-slate-500 leading-tight">
                <strong className="text-slate-800 block">{localize("Instant Verification")}</strong>
                {localize("Scan to verify credential authenticity on LingoFi TRF Portal.")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Question Review Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-black text-slate-900">{localize("Comprehensive Item Analysis")}</h3>
            <p className="text-xs text-slate-500">{localize("Review every question, official rationale, and correct answer.")}</p>
          </div>
          <span className="text-xs font-bold text-slate-600">
            {result.questions.length} {localize("Items Total")}
          </span>
        </div>

        <div className="space-y-6">
          {result.questions.map((q, idx) => {
            const userAns = result.userAnswers[q.id];
            const isCorrect = Array.isArray(q.correctAnswer)
              ? Array.isArray(userAns) && q.correctAnswer.length === userAns.length && q.correctAnswer.every(a => userAns.includes(a))
              : typeof userAns === "string" && typeof q.correctAnswer === "string" && userAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

            return (
              <div 
                key={q.id}
                className={`rounded-xl border p-4 space-y-3 ${
                  isCorrect ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{localize(q.category || "General Item")}</span>
                  </span>

                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black ${
                    isCorrect ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-red-100 text-red-800 border border-red-300"
                  }`}>
                    {isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                    {isCorrect ? localize("Correct") : localize("Incorrect")}
                  </span>
                </div>

                {q.passage && (
                  <div className="rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-700 font-serif border border-slate-200/80">
                    {q.passage}
                  </div>
                )}

                <div className="text-xs sm:text-sm font-semibold text-slate-900">
                  {q.prompt}
                </div>

                {/* Answers review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-white border border-slate-200 p-2.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">{localize("Your Submitted Response")}</div>
                    <div className="font-medium text-slate-900 mt-0.5">
                      {Array.isArray(userAns) ? userAns.map(a => localize(a)).join(", ") : (userAns ? localize(userAns) : <em className="text-slate-400">{localize("Unanswered")}</em>)}
                    </div>
                  </div>

                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase">{localize("Official Correct Answer")}</div>
                    <div className="font-bold text-emerald-950 mt-0.5">
                      {Array.isArray(q.correctAnswer) ? q.correctAnswer.map(a => a).join(", ") : q.correctAnswer}
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="rounded-lg bg-blue-50/70 border border-blue-200/70 p-3 text-xs text-blue-950 space-y-1">
                  <div className="font-black text-blue-900 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-blue-600" />
                    {localize("Academic Rationale")}
                  </div>
                  <p className="leading-relaxed text-slate-700">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
