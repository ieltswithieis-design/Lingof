import React, { useState } from "react";
import { ExamMeta, StandardizedDatabase, StandardizedExamId } from "../types/standardizedTests";
import { STANDARDIZED_EXAMS_META, STANDARDIZED_TEST_PACKAGES } from "../data/standardizedTestsData";
import { 
  Globe2, 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Filter, 
  Search,
  Building,
  Layers,
  Brain,
  Headphones,
  PenTool,
  Check,
  Zap
} from "lucide-react";
import { motion } from "motion/react";

interface StandardizedExamsHubProps {
  onSelectStandardizedTest: (examId: StandardizedExamId, packageId?: string) => void;
  onSelectIelts: () => void;
  onSelectIqTest: () => void;
  database?: StandardizedDatabase | null;
  initialExamId?: StandardizedExamId | null;
}

type ExamCategory = "all" | "english" | "undergraduate" | "graduate" | "cognitive";

export const StandardizedExamsHub: React.FC<StandardizedExamsHubProps> = ({
  onSelectStandardizedTest,
  onSelectIelts,
  onSelectIqTest,
  database,
  initialExamId = null,
}) => {
  const [activeCategory, setActiveCategory] = useState<ExamCategory>(initialExamId ? "all" : "all");
  const [searchQuery, setSearchQuery] = useState("");

  const liveExams = database?.exams && Object.keys(database.exams).length ? database.exams : STANDARDIZED_EXAMS_META;
  const livePackages = database?.packages || STANDARDIZED_TEST_PACKAGES;
  const examsList: ExamMeta[] = Object.values(liveExams) as ExamMeta[];

  const filteredExams = examsList.filter(exam => {
    if (initialExamId && exam.id !== initialExamId) return false;
    const matchesSearch = 
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.governingBody.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === "all") return true;
    if (activeCategory === "english") return exam.id === "pte" || exam.id === "toefl";
    if (activeCategory === "undergraduate") return exam.id === "sat" || exam.id === "act";
    if (activeCategory === "graduate") return exam.id === "gre" || exam.id === "gmat";
    if (activeCategory === "cognitive") return false;
    return true;
  });

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner: Global International Examination Institute */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-10 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-center">
          <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-200">
            <Globe2 className="h-3.5 w-3.5 text-blue-400" />
            <span>{initialExamId ? `${initialExamId.toUpperCase()} Test Subtypes` : "International Standardized Examination Institute"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {initialExamId ? `${String(initialExamId).toUpperCase()} Practice & Test Subtypes` : "World Testing Standard for Higher Education & Immigration"}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Full computerized simulations with verified algorithmic scoring for <strong>PTE Academic, Digital SAT, GRE General, GMAT Focus, TOEFL iBT, ACT</strong>, alongside our comprehensive <strong>IELTS practice suite</strong> and <strong>Mensa IQ Assessment</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Calibrated to Official Scoring Curves</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Official Cryptographic Digital Score Reports</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Full Explanatory Rationales</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl">
            <img src="/exam-hero.svg" alt="Lingofi international examination practice" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeCategory === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => setActiveCategory("english")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeCategory === "english" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            English Language (PTE, TOEFL, IELTS)
          </button>
          <button
            onClick={() => setActiveCategory("undergraduate")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeCategory === "undergraduate" ? "bg-cyan-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Undergraduate (SAT, ACT)
          </button>
          <button
            onClick={() => setActiveCategory("graduate")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeCategory === "graduate" ? "bg-indigo-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Graduate & MBA (GRE, GMAT)
          </button>
          <button
            onClick={() => setActiveCategory("cognitive")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeCategory === "cognitive" ? "bg-purple-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Mensa IQ
          </button>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search exam, institution, skills..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-xs focus:border-blue-600 focus:bg-white focus:outline-hidden"
          />
        </div>
      </div>

      {/* Prominent Quick-Launch Cards for IELTS and IQ Test (if in matching category) */}
      {!initialExamId && (activeCategory === "all" || activeCategory === "english") && (
        <div className="rounded-3xl border-2 border-blue-200 bg-gradient-to-r from-blue-50/80 to-indigo-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-0.5 text-[11px] font-black text-white">
              FLAGSHIP PROGRAM
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-blue-950">
              IELTS Academic & General Comprehensive Testing Hub
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A dynamically expanding library of individual practice tests and complete 4-skill mock examinations aligned with Cambridge, IDP & British Council specifications. Features live AI speech grading, visual charts, and verified TRF certificates.
            </p>
          </div>
          <button
            onClick={onSelectIelts}
            className="w-full md:w-auto shrink-0 rounded-2xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-blue-700 transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Open IELTS Practice Hub</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {[
              ["Listening", "4 parts", "Listen to conversations, talks and instructions."],
              ["Reading", "3 passages", "Read academic texts and answer questions."],
              ["Writing", "Task 1 + Task 2", "Complete the visual/report task and essay."],
              ["Speaking", "3 parts", "Introduction, long turn and discussion."],
            ].map(([title, parts, detail]) => (
              <button key={title} onClick={onSelectIelts} className="text-left rounded-2xl border border-blue-200 bg-white/90 p-4 hover:border-blue-400 hover:shadow-sm transition cursor-pointer">
                <div className="text-sm font-black text-blue-950">{title}</div>
                <div className="mt-1 text-[11px] font-bold text-blue-700">{parts}</div>
                <div className="mt-2 text-[11px] leading-relaxed text-slate-600">{detail}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {!initialExamId && (activeCategory === "all" || activeCategory === "cognitive") && (
        <div className="rounded-3xl border-2 border-purple-200 bg-gradient-to-r from-purple-50/80 to-fuchsia-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-purple-700 px-2.5 py-0.5 text-[11px] font-black text-white">
              COGNITIVE SUITE
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-purple-950">
              Standardized Cognitive Intelligence Exam (Mensa Scale)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              35 standardized fluid intelligence, Raven-style visual matrix, and numerical logic puzzles calibrated to the Wechsler Adult Intelligence Scale (SD 15 / SD 24) with official cryptographic IQ certificate.
            </p>
          </div>
          <button
            onClick={onSelectIqTest}
            className="w-full md:w-auto shrink-0 rounded-2xl bg-purple-700 px-6 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-purple-800 transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Take Standardized IQ Exam</span>
            <Brain className="h-4 w-4" />
          </button>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {[
              ["Matrix Reasoning", "Visual patterns and missing-piece problems."],
              ["Numerical Reasoning", "Number sequences, relationships and calculations."],
              ["Spatial Reasoning", "Shapes, rotations, positions and visual relationships."],
              ["Verbal Reasoning", "Words, meanings, analogies and relationships."],
              ["Logical Reasoning", "Rules, deductions, sequences and problem solving."],
            ].map(([title, detail]) => (
              <button key={title} onClick={onSelectIqTest} className="text-left rounded-2xl border border-purple-200 bg-white/90 p-4 hover:border-purple-400 hover:shadow-sm transition cursor-pointer">
                <div className="text-sm font-black text-purple-950">{title}</div>
                <div className="mt-2 text-[11px] leading-relaxed text-slate-600">{detail}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid of International Standardized Exams (PTE, SAT, GRE, GMAT, TOEFL, ACT) */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Award className="h-5 w-5 text-blue-600" />
          <span>International Examination Suites</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map(exam => {
            const examPackages = livePackages.filter(p => p?.examId === exam.id && p.published !== false);
            return (
              <div 
                key={exam.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-5"
              >
                <div className="space-y-4">
                  {/* Badge & Governing Body */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-[11px] font-black text-slate-800">
                      {exam.governingBody}
                    </span>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-blue-800">
                      {examPackages.length > 1 ? `${examPackages.length} Mocks Available` : exam.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{exam.name}</h3>
                    <div className="text-xs font-semibold text-slate-500">{exam.fullName}</div>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {exam.description}
                    </p>
                  </div>

                  {/* Exam Key Metrics */}
                  <div className="rounded-2xl bg-slate-50 p-3.5 space-y-2 text-xs border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Scoring Scale:</span>
                      <span className="font-black text-slate-900">{exam.scoringScale}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Total Duration:</span>
                      <span className="font-black text-slate-900">{exam.durationMinutes} Minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Target:</span>
                      <span className="font-semibold text-blue-900 text-right truncate max-w-[150px]">{exam.targetAudience}</span>
                    </div>
                  </div>

                  {/* Test Package Directory List */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                      <span className="flex items-center gap-1">
                        <Layers className="h-3.5 w-3.5 text-blue-600" />
                        <span>Available Test Mocks ({examPackages.length})</span>
                      </span>
                    </div>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {examPackages.map((pkg, pIdx) => (
                        <div 
                          key={pkg.id} 
                          className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 transition text-xs"
                        >
                          <div className="min-w-0">
                            <p className="font-black text-slate-800 text-[11px] truncate">
                              Test #{pIdx + 1}: {pkg.title.replace(exam.name, "").replace("Official Full Mock Simulation", "Mock").replace("Official Full Practice Exam", "Mock").trim() || pkg.title}
                            </p>
                            <span className="text-[10px] text-slate-500 font-medium">
                              {pkg.edition} • {pkg.difficulty}
                            </span>
                          </div>
                          <button
                            onClick={() => onSelectStandardizedTest(exam.id, pkg.id)}
                            className="shrink-0 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] shadow-2xs transition cursor-pointer"
                          >
                            Launch →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Launch Simulation Button */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectStandardizedTest(exam.id, examPackages[0]?.id)}
                    className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-black text-white hover:bg-blue-600 transition shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Start Test #1 Simulation</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Exam Comparison Matrix */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            International Examination Benchmark & Equivalency Matrix
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Standard admissions exams recognized across Oxford, Harvard, Cambridge, Stanford, NUS, and global immigration authorities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700 font-black">
                <th className="p-3">Examination</th>
                <th className="p-3">Governing Body</th>
                <th className="p-3">Scoring Metric</th>
                <th className="p-3">Time Limit</th>
                <th className="p-3">Primary Focus</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">PTE Academic</td>
                <td className="p-3">Pearson VUE</td>
                <td className="p-3 font-semibold text-amber-700">10 – 90 Points</td>
                <td className="p-3">2 Hours</td>
                <td className="p-3">Global Study & Visa English Proficiency</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("pte")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">Digital SAT</td>
                <td className="p-3">The College Board</td>
                <td className="p-3 font-semibold text-blue-700">400 – 1600 Total</td>
                <td className="p-3">2h 14m</td>
                <td className="p-3">US & Global Undergraduate Admissions</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("sat")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">GRE General</td>
                <td className="p-3">ETS</td>
                <td className="p-3 font-semibold text-indigo-700">260 – 340 Total</td>
                <td className="p-3">1h 58m</td>
                <td className="p-3">Master's, Doctoral & Global Graduate Schools</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("gre")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">GMAT Focus</td>
                <td className="p-3">GMAC</td>
                <td className="p-3 font-semibold text-emerald-700">205 – 805 Total</td>
                <td className="p-3">2h 15m</td>
                <td className="p-3">Elite MBA & Masters in Management</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("gmat")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">TOEFL iBT</td>
                <td className="p-3">ETS</td>
                <td className="p-3 font-semibold text-rose-700">0 – 120 Total</td>
                <td className="p-3">1h 56m</td>
                <td className="p-3">Academic University English Proficiency</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("toefl")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">ACT Assessment</td>
                <td className="p-3">ACT, Inc.</td>
                <td className="p-3 font-semibold text-teal-700">1 – 36 Composite</td>
                <td className="p-3">2h 55m</td>
                <td className="p-3">Undergraduate Admissions & Merit Scholarships</td>
                <td className="p-3">
                  <button onClick={() => onSelectStandardizedTest("act")} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Simulate →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">IELTS Academic</td>
                <td className="p-3">Cambridge / IDP / BC</td>
                <td className="p-3 font-semibold text-blue-700">Band 1.0 – 9.0</td>
                <td className="p-3">2h 45m</td>
                <td className="p-3">Worldwide University & Migration Standard</td>
                <td className="p-3">
                  <button onClick={onSelectIelts} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    All Tests →
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3 font-bold text-slate-900">Mensa Cognitive IQ</td>
                <td className="p-3">LingoFi Psychometric Board</td>
                <td className="p-3 font-semibold text-purple-700">IQ 70 – 160 (SD 15)</td>
                <td className="p-3">40 Mins</td>
                <td className="p-3">Cognitive Evaluation & High IQ Certification</td>
                <td className="p-3">
                  <button onClick={onSelectIqTest} className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Test IQ →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
