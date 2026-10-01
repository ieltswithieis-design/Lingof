export type TestSection = 'reading' | 'listening' | 'writing' | 'speaking';

export interface Question {
  type: 'mcq' | 'tfng' | 'completion' | 'short';
  q: string;
  options?: string[];
  answer: string | number;
}

export interface ReadingTest {
  id: number;
  title: string;
  passages: string[];
  questions: Question[];
}

export interface ListeningPart {
  part: number;
  script: string;
  questions: Question[];
}

export interface ListeningTest {
  id: number;
  title: string;
  parts: ListeningPart[];
}

export type VisualType = 
  | { kind: 'line' | 'bar'; labels: string[]; series: { name: string; values: number[] }[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'pie'; labels: string[]; values: number[] }
  | { kind: 'process'; steps: string[] }
  | { kind: 'map'; before: string[]; after: string[] };

export interface WritingTest {
  id: number;
  title: string;
  task1: string;
  task1_type: string;
  task2: string;
  visual: VisualType;
  task1Prompt?: string;
  task2Prompt?: string;
  task1Type?: string;
  task1Instructions?: string;
  task2Instructions?: string;
  responseRequirements?: {
    task1MinimumWords?: number;
    task2MinimumWords?: number;
    task1Minutes?: number;
    task2Minutes?: number;
    totalMinutes?: number;
  };
}

export interface SpeakingTest {
  id: number;
  title: string;
  part1: string[];
  part2: string;
  part3: string[];
}

export interface FullIeltsTest {
  id: number;
  title: string;
  subTitle: string;
  readingId: number;
  listeningId: number;
  writingId: number;
  speakingId: number;
  difficulty: "Standard Academic" | "High Stakes Academic" | "Official Cambridge Simulation";
  estimatedTime: string;
}

export interface IeltsDatabase {
  reading: ReadingTest[];
  listening: ListeningTest[];
  writing: WritingTest[];
  speaking: SpeakingTest[];
}

export interface UserTestAttempt {
  section: TestSection;
  testId: number;
  completedAt: string;
  score?: number; // e.g. 34/40
  band?: string;  // e.g. 7.5
  task1Response?: string;
  task2Response?: string;
  speakingTranscript?: string;
  aiFeedback?: string;
}

export interface WritingAiAnalysis {
  band: string;
  taskAchievement: { score: string; feedback: string };
  coherenceCohesion: { score: string; feedback: string };
  lexicalResource: { score: string; feedback: string };
  grammaticalRange: { score: string; feedback: string };
  wordCount: number;
  wordCountStatus: 'insufficient' | 'adequate' | 'good';
  corrections: { original: string; corrected: string; explanation: string }[];
  strengths: string[];
  keyImprovements: string[];
  rawText?: string;
}

export interface SpeakingAiAnalysis {
  band: string;
  fluencyCoherence: { score: string; feedback: string };
  lexicalResource: { score: string; feedback: string };
  grammaticalRange: { score: string; feedback: string };
  pronunciation: { score: string; feedback: string };
  transcript: string;
  corrections: { original: string; corrected: string; explanation: string }[];
  strengths: string[];
  keyImprovements: string[];
  rawText?: string;
}
