import rawData from "./ieltsData.json";
import { IeltsDatabase, Question } from "../types/ielts";

/**
 * The canonical IELTS JSON database uses the richer fields `prompt` and
 * `correctAnswer`, while the test runners use the compact legacy fields `q`
 * and `answer`. Normalize the database once at the application boundary so
 * every runner receives the same, fully populated question shape.
 */
function normalizeQuestion(raw: any): Question {
  const prompt = String(raw?.prompt ?? raw?.q ?? "");
  const rawAnswer = raw?.correctAnswer ?? raw?.answer ?? "";
  const options = Array.isArray(raw?.options) ? raw.options.map(String) : undefined;

  let type: Question["type"];
  const sourceType = String(raw?.type ?? "").toLowerCase();
  if (sourceType.includes("multiple-choice") || sourceType === "mcq") {
    type = "mcq";
  } else if (sourceType === "tfng" || sourceType.includes("true-false") || sourceType.includes("not-given")) {
    type = "tfng";
  } else if (sourceType.includes("completion")) {
    type = "completion";
  } else {
    type = "short";
  }

  // MCQ answers in the canonical database are stored as the option text.
  // The runners store the selected option index, so convert it here.
  let answer: string | number = rawAnswer;
  if (type === "mcq" && options?.length) {
    const answerIndex = options.findIndex(
      option => option.trim().toLowerCase() === String(rawAnswer).trim().toLowerCase()
    );
    if (answerIndex >= 0) answer = answerIndex;
    else if (typeof rawAnswer === "number") answer = rawAnswer;
  }

  return {
    type,
    q: prompt,
    ...(options ? { options } : {}),
    answer,
  };
}

function normalizeReadingTest(test: any) {
  return {
    ...test,
    passages: Array.isArray(test?.passages) ? test.passages.map(String) : [],
    questions: Array.isArray(test?.questions) ? test.questions.map(normalizeQuestion) : [],
  };
}

function normalizeListeningTest(test: any) {
  return {
    ...test,
    parts: Array.isArray(test?.parts)
      ? test.parts.map((part: any) => ({
          ...part,
          script: String(part?.script ?? ""),
          questions: Array.isArray(part?.questions) ? part.questions.map(normalizeQuestion) : [],
        }))
      : [],
  };
}

export function normalizeIeltsDatabase(source: any): IeltsDatabase {
  source = source || {};
  return {
  ...source,
  reading: Array.isArray(source.reading) ? source.reading.map(normalizeReadingTest) : [],
  listening: Array.isArray(source.listening) ? source.listening.map(normalizeListeningTest) : [],
  writing: Array.isArray(source.writing) ? source.writing : [],
  speaking: Array.isArray(source.speaking) ? source.speaking : [],
  };
}

export const ieltsDatabase: IeltsDatabase = normalizeIeltsDatabase(rawData);

export type TestSection = "reading" | "listening" | "writing" | "speaking";
