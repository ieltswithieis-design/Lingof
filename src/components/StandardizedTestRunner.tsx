import React, { useState, useEffect, useRef } from "react";
import { 
  StandardizedExamId, 
  StandardizedTestPackage, 
  TestQuestion, 
  StandardizedTestResult 
} from "../types/standardizedTests";
import { STANDARDIZED_EXAMS_META, calculateExamScore } from "../data/standardizedTestsData";
import { 
  Clock, 
  Play, 
  Pause, 
  Volume2, 
  Mic, 
  Square, 
  Flag, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Calculator, 
  Sparkles, 
  HelpCircle,
  Award,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translateReadingTextPure } from "../utils/readingZeroEnglishEngine";
import { speakInLanguage } from "../utils/speechVoice";

interface StandardizedTestRunnerProps {
  testPackage: StandardizedTestPackage;
  onBack: () => void;
  onCompleteTest: (result: StandardizedTestResult) => void;
}

export const StandardizedTestRunner: React.FC<StandardizedTestRunnerProps> = ({
  testPackage,
  onBack,
  onCompleteTest,
}) => {
  const { t, currentLanguage, currentLanguageInfo, stopSpeaking } = useLanguage();
  const localize = (str: string): string => {
    if (currentLanguage === "en" || !str) return str;
    return translateReadingTextPure(str, currentLanguage);
  };

  // These are candidate-response tasks. Their prompts/content must remain English,
  // while the surrounding interface can still follow the selected UI language.
  const isOpenResponseQuestion = (type: string) => [
    "essay-writing", "write_essay", "summarize_written_text", "summarize_spoken_text",
    "analytical-writing", "essay", "write_email", "academic_discussion",
    "build_sentence", "write_from_dictation", "fill-in-blanks", "listening_fill_blanks",
  ].includes(type);

  const isMultiSelectQuestion = (type: string) => [
    "multiple-choice-multiple", "sentence-equivalence", "mcq_multiple",
    "listening_mcq_multiple", "rw_fill_blanks", "reading_fill_blanks",
  ].includes(type);

  const isSingleChoiceQuestion = (type: string) => [
    "multiple-choice-single", "quantitative-comparison", "data-sufficiency",
    "audio-lecture-mcq", "select_missing_word", "highlight_correct_summary",
    "complete_words", "read_daily_life", "read_academic_passage",
    "listen_choose_response", "conversation", "announcement", "academic_talk",
  ].includes(type);

  const isSpokenResponseQuestion = (question: TestQuestion) =>
    question.responseType === "spoken_recording" || [
      "read_aloud", "repeat_sentence", "describe_image", "retell_lecture",
      "answer_short_question", "summarize_group_discussion", "respond_to_situation",
      "listen_repeat", "interview",
    ].includes(question.type);

  const getWritingPlaceholder = (type: string) => {
    switch (type) {
      case "write_email": return "Write your email response here...";
      case "academic_discussion": return "Write your discussion response here...";
      case "summarize_written_text": return "Write your summary here...";
      case "summarize_spoken_text": return "Write your summary here...";
      case "analytical-writing": return "Develop your position and support it with reasons and examples...";
      default: return "Plan and compose your response here...";
    }
  };

  const getWritingTarget = (type: string) => {
    switch (type) {
      case "summarize_written_text": return "Target: 5–75 words";
      case "summarize_spoken_text": return "Target: 50–70 words";
      case "write_email": return "Target: Follow the task instructions";
      case "academic_discussion": return "Target: Follow the task instructions";
      case "analytical-writing": return "Target: Develop a clear, supported position";
      default: return "Target: 200–300 words";
    }
  };

  const validExamId = testPackage?.examId || "pte";
  const meta = STANDARDIZED_EXAMS_META[validExamId] || STANDARDIZED_EXAMS_META.pte;

  // Flatten all questions across sections
  const allSections = testPackage?.sections || [];
  const allQuestions: { question: TestQuestion; sectionIndex: number }[] = [];
  allSections.forEach((sec, sIdx) => {
    sec?.questions?.forEach((q) => {
      allQuestions.push({ question: q, sectionIndex: sIdx });
    });
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string | string[]>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  
  // Timer state: each section has its own official time window.
  const initialSectionTimes = allSections.map(section => (section.timeMinutes || 30) * 60);
  const [sectionTimeLeft, setSectionTimeLeft] = useState<number[]>(initialSectionTimes);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  // Audio / Speech Synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Voice recording state for Speaking
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordedAudioAvailable, setRecordedAudioAvailable] = useState<Record<string, boolean>>({});
  const recordingTimerRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingStreamRef = useRef<MediaStream | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  // On-screen calculator popup
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcInput, setCalcInput] = useState("");
  const [calcResult, setCalcResult] = useState("");

  // Submit confirmation modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Countdown timer: section-specific timing matching the configured test pattern.
  useEffect(() => {
    if (isTimerPaused || !testPackage?.examId || !activeSection) return;
    const sectionIndex = currentItem?.sectionIndex || 0;
    const interval = setInterval(() => {
      setSectionTimeLeft(prev => {
        const next = [...prev];
        const remaining = next[sectionIndex] ?? 0;
        if (remaining <= 1) {
          next[sectionIndex] = 0;
          clearInterval(interval);
          const nextQuestion = allQuestions.findIndex(item => item.sectionIndex === sectionIndex + 1);
          if (nextQuestion >= 0) setCurrentQuestionIndex(nextQuestion);
          else handleSubmitExam();
        } else {
          next[sectionIndex] = remaining - 1;
        }
        return next;
      });
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerPaused, testPackage?.examId, currentQuestionIndex]);

  // Clean up audio on unmount or question switch
  useEffect(() => {
    stopSpeaking();
    setIsPlayingAudio(false);
    if (isRecording) {
      clearInterval(recordingTimerRef.current);
      mediaRecorderRef.current?.stop();
      recordingStreamRef.current?.getTracks().forEach(track => track.stop());
      mediaRecorderRef.current = null;
      recordingStreamRef.current = null;
      setIsRecording(false);
    }
  }, [currentQuestionIndex, stopSpeaking]);

  useEffect(() => {
    return () => {
      stopSpeaking();
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
      mediaRecorderRef.current?.stop();
      recordingStreamRef.current?.getTracks().forEach(track => track.stop());
      if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
    };
  }, [stopSpeaking]);

  if (!testPackage || !testPackage.examId) {
    return (
      <div className="test-content mx-auto max-w-xl p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm mt-8 space-y-4">
        <p className="text-base font-bold text-slate-800">{localize("Exam package not found or currently unavailable.")}</p>
        <button
          onClick={onBack}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
        >
          {localize("Return to All Exams")}
        </button>
      </div>
    );
  }

  const currentItem = allQuestions[currentQuestionIndex];
  const activeQuestion = currentItem?.question;
  const activeSection = allSections[currentItem?.sectionIndex || 0];

  const timeLeft = sectionTimeLeft[currentItem?.sectionIndex || 0] ?? 0;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? "0" : ""}${remaining}`;
  };

  // Handle Audio Playback
  const handleToggleAudio = () => {
    if (!activeQuestion) return;

    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    const script = activeQuestion.audioScript || activeQuestion.passage || activeQuestion.prompt;
    const textToSpeak = script;
    setIsPlayingAudio(true);
    speakInLanguage(textToSpeak, "en", {
      rate: 0.95,
      pitch: activeQuestion.speakerGender === "female" ? 1.1 : 0.9,
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false),
    });
  };

  // Real microphone recording for speaking/interview tasks.
  const handleToggleRecord = async () => {
    if (!activeQuestion) return;

    if (isRecording) {
      clearInterval(recordingTimerRef.current);
      mediaRecorderRef.current?.stop();
      recordingStreamRef.current?.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      setRecordedAudioAvailable(prev => ({ ...prev, [activeQuestion.id]: true }));
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordingStreamRef.current = stream;
      const chunks: Blob[] = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = event => {
        if (event.data.size > 0) chunks.push(event.data);
      };
      recorder.onstop = () => {
        if (!chunks.length) return;
        if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
        const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
        setRecordedAudioUrl(URL.createObjectURL(blob));
      };
      recorder.start(250);
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setRecordingSeconds(0);
      recordingTimerRef.current = setInterval(() => setRecordingSeconds(seconds => seconds + 1), 1000);
    } catch {
      setIsRecording(false);
      alert("Microphone access is required to record your English response.");
    }
  };

  const handleSingleSelect = (val: string) => {
    if (!activeQuestion) return;
    setUserAnswers(prev => ({
      ...prev,
      [activeQuestion.id]: val
    }));
  };

  const handleMultiSelect = (val: string) => {
    if (!activeQuestion) return;
    const current = (userAnswers[activeQuestion.id] as string[]) || [];
    let updated: string[];
    if (current.includes(val)) {
      updated = current.filter(x => x !== val);
    } else {
      updated = [...current, val];
    }
    setUserAnswers(prev => ({
      ...prev,
      [activeQuestion.id]: updated
    }));
  };

  const handleTextInput = (val: string) => {
    if (!activeQuestion) return;
    setUserAnswers(prev => ({
      ...prev,
      [activeQuestion.id]: val
    }));
  };

  const toggleFlag = () => {
    if (!activeQuestion) return;
    setFlaggedQuestions(prev => ({
      ...prev,
      [activeQuestion.id]: !prev[activeQuestion.id]
    }));
  };

  // Safe Calculator Evaluation
  const handleCalcEval = () => {
    try {
      // Allow only numbers and arithmetic symbols
      const sanitized = calcInput.replace(/[^0-9+\-*/().]/g, "");
      if (!sanitized) return;
      // eslint-disable-next-line no-eval
      const res = Function(`"use strict"; return (${sanitized})`)();
      setCalcResult(String(res));
    } catch {
      setCalcResult("Error");
    }
  };

  // Submit test and generate official score report
  const handleSubmitExam = () => {
    let totalEarned = 0;
    let totalMax = 0;

    const sectionBreakdowns = allSections.map(sec => {
      let secEarned = 0;
      let secMax = 0;

      sec.questions.forEach(q => {
        const points = q.points || 10;
        secMax += points;
        const uAns = userAnswers[q.id];

        if (Array.isArray(q.correctAnswer)) {
          if (Array.isArray(uAns) && q.correctAnswer.length === uAns.length && q.correctAnswer.every(a => uAns.includes(a))) {
            secEarned += points;
          }
        } else if (typeof q.correctAnswer === "string" && typeof uAns === "string") {
          if (uAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
            secEarned += points;
          } else if (isOpenResponseQuestion(q.type)) {
            // For open essays/speech, award proportional points if non-empty
            if (uAns.trim().length > 30) {
              secEarned += Math.round(points * 0.85);
            }
          }
        }
      });

      totalEarned += secEarned;
      totalMax += secMax;

      const secRatio = secMax > 0 ? secEarned / secMax : 0;
      const { scaledScore } = calculateExamScore(testPackage.examId, secEarned, secMax);

      return {
        sectionTitle: sec.title,
        score: secEarned,
        maxScore: secMax,
        scaledScore,
        percentage: Math.round(secRatio * 100),
      };
    });

    const { scaledScore, percentile } = calculateExamScore(testPackage.examId, totalEarned, totalMax);

    const verificationCode = `LFI-${testPackage.examId.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const testResult: StandardizedTestResult = {
      testId: testPackage.id,
      examId: testPackage.examId,
      examName: meta?.name || testPackage.title,
      candidateName: "International Academic Candidate",
      dateCompleted: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      timeSpentSeconds: timeSpent,
      overallScore: totalEarned,
      maxScore: totalMax,
      scaledScore,
      percentile,
      sectionBreakdown: sectionBreakdowns,
      userAnswers,
      questions: allQuestions.map(item => item.question),
      verificationCode,
    };

    onCompleteTest(testResult);
  };

  const answeredCount = Object.keys(userAnswers).filter(k => {
    const val = userAnswers[k];
    return Array.isArray(val) ? val.length > 0 : Boolean(val && String(val).trim());
  }).length;

  return (
    <div className="test-content mx-auto max-w-6xl space-y-4 pb-12">
      {/* Top Test Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-900 transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Exit Exam</span>
          </button>

          <div className="h-4 w-px bg-slate-200" />

          <div>
            <div className="flex items-center gap-2">
              <span data-no-translate data-test-content dir="ltr" className="rounded-md bg-blue-100 border border-blue-200 px-2 py-0.5 text-[10px] font-black text-blue-900 uppercase tracking-wide">
                {meta?.name}
              </span>
              <span data-no-translate data-test-content dir="ltr" className="text-xs font-black text-slate-900 truncate max-w-xs">
                {activeSection?.title}
              </span>
            </div>
          </div>
        </div>

        {/* Right Tools: Calculator (SAT/GRE), Timer & Finish */}
        <div className="flex items-center gap-3">
          {(testPackage.examId === "sat" || testPackage.examId === "gre" || testPackage.examId === "act") && (
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                showCalculator ? "border-blue-500 bg-blue-50 text-blue-900" : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
              title="Toggle On-Screen Calculator"
            >
              <Calculator className="h-3.5 w-3.5 text-blue-600" />
              <span className="hidden md:inline">Calculator</span>
            </button>
          )}

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-black text-slate-800">
            <Clock className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>{formatTimer(timeLeft)}</span>
            <button
              onClick={() => setIsTimerPaused(!isTimerPaused)}
              className="text-slate-400 hover:text-slate-700 ml-1 cursor-pointer"
              title={isTimerPaused ? "Resume Timer" : "Pause Timer"}
            >
              {isTimerPaused ? <Play className="h-3 w-3 text-emerald-600" /> : <Pause className="h-3 w-3" />}
            </button>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="rounded-xl bg-blue-600 px-4 py-1.5 text-xs font-black text-white hover:bg-blue-700 transition shadow-xs cursor-pointer"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Calculator Floating Window if Opened */}
      {showCalculator && (
        <div className="rounded-2xl border-2 border-blue-300 bg-white p-4 shadow-xl max-w-xs ml-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <span>Standard Desmos-Style Calculator</span>
            <button onClick={() => setShowCalculator(false)} className="text-slate-400 hover:text-slate-700">✕</button>
          </div>
          <div className="space-y-1">
            <input
              type="text"
              value={calcInput}
              onChange={e => setCalcInput(e.target.value)}
              placeholder="e.g. (14 * 22) + sqrt(16)"
              className="w-full rounded-lg border border-slate-300 p-2 font-mono text-xs text-right"
            />
            {calcResult && (
              <div className="font-mono text-sm font-black text-blue-900 text-right">
                = {calcResult}
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-xs">
            {["7","8","9","/", "4","5","6","*", "1","2","3","-", "0",".","=","+"].map(btn => (
              <button
                key={btn}
                onClick={() => {
                  if (btn === "=") handleCalcEval();
                  else setCalcInput(prev => prev + btn);
                }}
                className="rounded-md border border-slate-200 bg-slate-50 py-1.5 font-bold text-slate-800 hover:bg-slate-100 active:scale-95"
              >
                {btn}
              </button>
            ))}
            <button
              onClick={() => { setCalcInput(""); setCalcResult(""); }}
              className="col-span-4 rounded-md border border-red-200 bg-red-50 py-1 text-[11px] font-bold text-red-700 hover:bg-red-100"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Main Question Display Card */}
      {activeQuestion && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          {/* Question Meta Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs">
                {currentQuestionIndex + 1}
              </span>
              <span className="text-xs font-bold text-slate-500">
                Question {currentQuestionIndex + 1} of {allQuestions.length}
              </span>
              {activeQuestion.category && (
                <span data-no-translate data-test-content dir="ltr" className="hidden sm:inline rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {activeQuestion.category}
                </span>
              )}
            </div>

            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1.5 text-xs font-bold transition cursor-pointer ${
                flaggedQuestions[activeQuestion.id] ? "text-amber-600" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <Flag className={`h-4 w-4 ${flaggedQuestions[activeQuestion.id] ? "fill-amber-500 text-amber-500" : ""}`} />
              <span className="hidden sm:inline">
                {flaggedQuestions[activeQuestion.id] ? "Flagged for Review" : "Flag Question"}
              </span>
            </button>
          </div>

          {/* Audio Lecture / Dictation Player if applicable */}
          {(activeQuestion.audioScript || activeQuestion.type === "audio-lecture-mcq" || isSpokenResponseQuestion(activeQuestion)) && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleAudio}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-xs transition cursor-pointer ${
                    isPlayingAudio ? "bg-amber-600 text-white animate-pulse" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isPlayingAudio ? <Pause className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <div>
                  <div className="text-xs font-black text-blue-950">
                    {isPlayingAudio ? "Playing Official Exam Audio Stream..." : "Listen to Audio Stimulus"}
                  </div>
                  <div className="text-[11px] text-blue-800/80">
                    <span data-no-translate data-test-content dir="ltr">Speaker: {activeQuestion.audioSpeaker || "Official Academic Examiner"}</span>
                  </div>
                </div>
              </div>

              {/* Spoken-response controls for speaking tasks */}
              {isSpokenResponseQuestion(activeQuestion) && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleRecord}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black shadow-xs transition cursor-pointer ${
                      isRecording 
                        ? "bg-red-600 text-white animate-pulse" 
                        : recordedAudioAvailable[activeQuestion.id]
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Mic className="h-4 w-4" />
                    <span>
                      {isRecording ? `Recording (${recordingSeconds}s)... Click Stop` : recordedAudioAvailable[activeQuestion.id] ? "Re-record Voice" : "Start Speaking (Record)"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Reading Passage if Provided */}
          {activeQuestion.passage && (
            <div data-no-translate data-test-content className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 font-serif text-xs sm:text-sm leading-relaxed text-slate-800 shadow-2xs" dir="ltr">
              <div className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                {localize("Reading Passage / Context")}
              </div>
              <div className="whitespace-pre-line">{activeQuestion.passage}</div>
            </div>
          )}

          {/* Question Prompt */}
          <div data-no-translate data-test-content className="text-base sm:text-lg font-bold text-slate-900 leading-snug whitespace-pre-line" dir="ltr">
            {activeQuestion.prompt}
          </div>

          {/* Input Types & Options */}
          <div className="pt-2">
            {/* 1. Multiple Choice Single Answer (Radio) */}
            {isSingleChoiceQuestion(activeQuestion.type) && activeQuestion.options && (
              <div className="space-y-3">
                {activeQuestion.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[activeQuestion.id] === opt;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSingleSelect(opt)}
                      className={`w-full text-left flex items-start gap-3.5 rounded-xl border p-3.5 text-xs sm:text-sm transition cursor-pointer ${
                        isSelected 
                          ? "border-blue-600 bg-blue-50/60 font-semibold text-blue-950 shadow-2xs ring-1 ring-blue-500" 
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                        isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 text-slate-500"
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span data-no-translate data-test-content className="leading-normal" dir="ltr">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. Multiple Choice Multiple Answers (Checkboxes) */}
            {isMultiSelectQuestion(activeQuestion.type) && activeQuestion.options && (
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-blue-700">
                  ℹ️ {localize("This item requires selecting multiple options.")}
                </div>
                {activeQuestion.options.map((opt, oIdx) => {
                  const currentSelected = (userAnswers[activeQuestion.id] as string[]) || [];
                  const isSelected = currentSelected.includes(opt);
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleMultiSelect(opt)}
                      className={`w-full text-left flex items-start gap-3.5 rounded-xl border p-3.5 text-xs sm:text-sm transition cursor-pointer ${
                        isSelected 
                          ? "border-blue-600 bg-blue-50/60 font-semibold text-blue-950 shadow-2xs ring-1 ring-blue-500" 
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold ${
                        isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 text-slate-500"
                      }`}>
                        {isSelected ? "✓" : String.fromCharCode(65 + oIdx)}
                      </span>
                      <span data-no-translate data-test-content className="leading-normal" dir="ltr">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Fill in Blanks / Write from Dictation (Single Line Input) */}
            {["fill-in-blanks", "listening_fill_blanks", "write_from_dictation", "build_sentence"].includes(activeQuestion.type) && !activeQuestion.responseType?.includes("spoken") && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Your Answer:
                </label>
                <input
                  type="text"
                  value={(userAnswers[activeQuestion.id] as string) || ""}
                  onChange={e => handleTextInput(e.target.value)}
                  placeholder="Type your response here..."
                  className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                />
              </div>
            )}

            {/* 4. Spoken response tasks */}
            {isSpokenResponseQuestion(activeQuestion) && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                <p className="text-sm font-semibold text-slate-700">Speak in English. Your response will be recorded.</p>
                <button
                  onClick={handleToggleRecord}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black shadow-xs transition cursor-pointer ${isRecording ? "bg-red-600 text-white animate-pulse" : recordedAudioAvailable[activeQuestion.id] ? "bg-emerald-600 text-white" : "bg-slate-900 text-white"}`}
                >
                  <Mic className="h-4 w-4" />
                  {isRecording ? `Recording (${recordingSeconds}s)... Click Stop` : recordedAudioAvailable[activeQuestion.id] ? "Re-record Voice" : "Start Speaking (Record)"}
                </button>
                {recordedAudioUrl && (
                  <audio controls src={recordedAudioUrl} className="h-9 max-w-full" aria-label="Recorded English response" />
                )}
              </div>
            )}

            {/* 5. Reorder paragraph */}
            {activeQuestion.type === "reorder_paragraph" && Array.isArray((activeQuestion as any).items) && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">Choose the correct order. Enter the sentence numbers, for example: 1, 2, 3, 4.</p>
                <div className="space-y-2">
                  {(activeQuestion as any).items.map((item: string, idx: number) => (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm" dir="ltr">
                      <strong className="mr-2">{idx + 1}.</strong>{item}
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={(userAnswers[activeQuestion.id] as string) || ""}
                  onChange={e => handleTextInput(e.target.value)}
                  placeholder="Example: 1, 2, 3, 4"
                  className="w-full rounded-xl border border-slate-300 p-3 text-sm"
                />
              </div>
            )}

            {/* 6. Highlight incorrect words */}
            {activeQuestion.type === "highlight_incorrect_words" && activeQuestion.displayText && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700">Type the words that are different.</p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed" dir="ltr">{activeQuestion.displayText}</div>
                <input
                  type="text"
                  value={(userAnswers[activeQuestion.id] as string) || ""}
                  onChange={e => handleTextInput(e.target.value)}
                  placeholder="Type the different words"
                  className="w-full rounded-xl border border-slate-300 p-3 text-sm"
                />
              </div>
            )}

            {/* 7. Generic written response / essay */}
            {isOpenResponseQuestion(activeQuestion.type) && !isSpokenResponseQuestion(activeQuestion) && !["fill-in-blanks", "listening_fill_blanks", "write_from_dictation", "build_sentence"].includes(activeQuestion.type) && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{getWritingTarget(activeQuestion.type)}</span>
                  <span>
                    Word Count: <strong className="text-slate-900">
                      {((userAnswers[activeQuestion.id] as string) || "").trim().split(/\s+/).filter(Boolean).length}
                    </strong>
                  </span>
                </div>
                <textarea
                  rows={11}
                  value={(userAnswers[activeQuestion.id] as string) || ""}
                  onChange={e => handleTextInput(e.target.value)}
                  placeholder={getWritingPlaceholder(activeQuestion.type)}
                  className="w-full rounded-2xl border border-slate-300 p-4 text-sm leading-relaxed focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                />
              </div>
            )}
          </div>

          {/* Bottom Question Navigation & Review Tray */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-100">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            {/* Jump Question Dots */}
            <div className="flex items-center gap-1.5 flex-wrap max-w-md justify-center">
              {allQuestions.map((item, idx) => {
                const ans = userAnswers[item.question.id];
                const isAns = Array.isArray(ans) ? ans.length > 0 : Boolean(ans && String(ans).trim());
                const isCurrent = idx === currentQuestionIndex;
                const isFlg = flaggedQuestions[item.question.id];

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`relative flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-black transition cursor-pointer ${
                      isCurrent 
                        ? "bg-blue-600 text-white shadow-xs" 
                        : isAns 
                        ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {idx + 1}
                    {isFlg && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {currentQuestionIndex < allQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(allQuestions.length - 1, prev + 1))}
                className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-black text-white hover:bg-blue-700 transition shadow-xs cursor-pointer"
              >
                <span>Next Question</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-black text-white hover:bg-emerald-700 transition shadow-xs cursor-pointer"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Finish & Submit</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              Complete {meta?.name} Exam?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You have answered <strong className="text-slate-900">{answeredCount}</strong> of <strong className="text-slate-900">{allQuestions.length}</strong> items.
              {answeredCount < allQuestions.length && (
                <span className="text-amber-600 block mt-1 font-semibold">
                  ⚠️ Note: Unanswered items will be scored as 0 points.
                </span>
              )}
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                Return to Test
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-black text-white hover:bg-blue-700 transition shadow-xs cursor-pointer"
              >
                Submit & View Score Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
