export type StandardizedExamId = string;

export interface ExamTaskType {
  id: string;
  name: string;
  section: string;
  skills: string[];
  description: string;
  typicalItems?: string;
  preparationNotes?: string;
}

export interface ExamMeta {
  id: StandardizedExamId;
  name: string;
  fullName: string;
  governingBody: string;
  scoringScale: string;
  durationMinutes: number;
  sectionsCount: number;
  badge: string;
  color: string;
  iconBg: string;
  description: string;
  targetAudience: string;
  acceptedInstitutions: string;
  skills: string[];
  sections?: Array<{ id: string; title: string; duration: string; taskTypes: string[] }>;
  taskTypes?: ExamTaskType[];
}

export type QuestionType =
  | "multiple-choice-single"
  | "multiple-choice-multiple"
  | "fill-in-blanks"
  | "read-aloud"
  | "repeat-sentence"
  | "describe-image"
  | "retell-lecture"
  | "answer-short-question"
  | "summarize-group-discussion"
  | "respond-to-situation"
  | "summarize-written-text"
  | "write-essay"
  | "highlight-incorrect-words"
  | "select-missing-word"
  | "write-from-dictation"
  | "reorder-paragraph"
  | "reading-fill-blanks-dropdown"
  | "reading-fill-blanks-drag"
  | "quantitative-comparison"
  | "data-sufficiency"
  | "sentence-equivalence"
  | "essay-writing"
  | "audio-lecture-mcq"
  | string;

export interface TestQuestion {
  id: string;
  questionNumber: number;
  type: QuestionType;
  prompt: string;
  passage?: string;
  audioScript?: string;
  audioSpeaker?: string;
  speakerGender?: "female" | "male";
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  category?: string;
  points?: number;
  mediaUrl?: string;
  metadata?: Record<string, any>;
}

export interface ExamSection {
  id: string;
  title: string;
  timeMinutes: number;
  description: string;
  questions: TestQuestion[];
  taskTypes?: string[];
}

export interface StandardizedTestPackage {
  id: string;
  examId: StandardizedExamId;
  title: string;
  edition: string;
  difficulty: "Standard" | "Official Mock" | "High Difficulty" | string;
  sections: ExamSection[];
  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface StandardizedDatabase {
  version: string;
  exams: Record<StandardizedExamId, ExamMeta>;
  packages: StandardizedTestPackage[];
  updatedAt: string;
}

export interface StandardizedTestResult {
  testId: string;
  examId: StandardizedExamId;
  examName: string;
  candidateName: string;
  dateCompleted: string;
  timeSpentSeconds: number;
  overallScore: number;
  maxScore: number;
  scaledScore: string;
  percentile: number;
  sectionBreakdown: {
    sectionTitle: string;
    score: number;
    maxScore: number;
    scaledScore: string;
    percentage: number;
  }[];
  userAnswers: Record<string, string | string[]>;
  questions: TestQuestion[];
  verificationCode: string;
}
