export type StoryCategory = 
  | "Band 9 Journeys"
  | "Reading Speed & TFNG"
  | "Writing Task 2 Masterclass"
  | "Writing Task 1 Visuals"
  | "Speaking Fluency & Pronunciation"
  | "Listening 40/40 Tactics"
  | "Study Abroad & University Admissions"
  | "Examiner Insights & Criteria"
  | "From Band 6.0 to 8.5 Transformations"
  | "Grammar & Academic Lexicon";

export interface StoryAuthor {
  name: string;
  role: string;
  avatar: string;
  country: string;
  verifiedScore?: string;
  universityOrInstitution?: string;
}

export interface IeltsStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: StoryCategory;
  targetBand: string; // e.g. "Band 8.5", "Band 9.0", "Overall 8.0"
  author: StoryAuthor;
  publishedDate: string;
  readTime: string;
  heroImage: string;
  secondaryImages: string[];
  summary: string;
  introduction: string;
  challengeFaced: string;
  breakthroughStrategy: string[];
  sampleBand9Excerpts?: {
    context: string;
    sampleText: string;
    examinerComment: string;
  }[];
  vocabularyBank: { word: string; pos: string; definition: string; example: string }[];
  keyTakeaways: string[];
  examinerCriteriaBreakdown?: {
    taskResponse: { band: string; comment: string };
    coherenceCohesion: { band: string; comment: string };
    lexicalResource: { band: string; comment: string };
    grammaticalRange: { band: string; comment: string };
  };
  bandTrapsAvoided?: { trap: string; solution: string }[];
  modelEssayOrTranscript?: {
    type: "Task 2 Essay" | "Task 1 Report" | "Speaking Part 2 & 3 Transcript";
    prompt: string;
    wordCount: number;
    text: string;
  };
  recommendedPracticeTest: {
    section: "reading" | "listening" | "writing" | "speaking" | "fulltests";
    id: number;
    title: string;
  };
  tags: string[];
  views: number;
  likes: number;
  featured?: boolean;
}
