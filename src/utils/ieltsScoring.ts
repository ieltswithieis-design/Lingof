// Official IELTS Academic Reading and Listening Band Conversion Tables

export function getReadingBand(score: number): string {
  if (score >= 39) return "9.0";
  if (score >= 37) return "8.5";
  if (score >= 35) return "8.0";
  if (score >= 33) return "7.5";
  if (score >= 30) return "7.0";
  if (score >= 27) return "6.5";
  if (score >= 23) return "6.0";
  if (score >= 19) return "5.5";
  if (score >= 15) return "5.0";
  if (score >= 13) return "4.5";
  if (score >= 10) return "4.0";
  if (score >= 8) return "3.5";
  if (score >= 6) return "3.0";
  if (score >= 4) return "2.5";
  if (score >= 2) return "2.0";
  if (score >= 1) return "1.0";
  return "0.0";
}

export function getListeningBand(score: number): string {
  if (score >= 39) return "9.0";
  if (score >= 37) return "8.5";
  if (score >= 35) return "8.0";
  if (score >= 32) return "7.5";
  if (score >= 30) return "7.0";
  if (score >= 26) return "6.5";
  if (score >= 23) return "6.0";
  if (score >= 18) return "5.5";
  if (score >= 16) return "5.0";
  if (score >= 13) return "4.5";
  if (score >= 10) return "4.0";
  if (score >= 8) return "3.5";
  if (score >= 6) return "3.0";
  if (score >= 4) return "2.5";
  if (score >= 2) return "2.0";
  if (score >= 1) return "1.0";
  return "0.0";
}

export function calculateOverallBand(bands: (number | null)[]): string {
  const valid = bands.filter((b): b is number => typeof b === "number" && !isNaN(b));
  if (valid.length === 0) return "—";
  const avg = valid.reduce((a, b) => a + b, 0) / valid.length;
  // IELTS rounds to the nearest half band
  // .25 rounds up to .5; .75 rounds up to next whole band
  const fraction = avg - Math.floor(avg);
  if (fraction < 0.25) return (Math.floor(avg)).toFixed(1);
  if (fraction < 0.75) return (Math.floor(avg) + 0.5).toFixed(1);
  return (Math.ceil(avg)).toFixed(1);
}

export function normalizeAnswer(str: string | number | undefined | null): string {
  if (str === undefined || str === null) return "";
  return String(str)
    .toLowerCase()
    .replace(/[£$€]/g, "")
    .replace(/["'“”‘’.,!?;:()[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function isAnswerCorrect(userAnswer: string | number | undefined, expectedAnswer: string | number): boolean {
  if (userAnswer === undefined || userAnswer === null) return false;
  
  // MCQ index comparison
  if (typeof expectedAnswer === "number") {
    return Number(userAnswer) === expectedAnswer;
  }

  const normalizedUser = normalizeAnswer(userAnswer);
  if (!normalizedUser) return false;

  const rawExpectedList = String(expectedAnswer).split("|");
  const possibleAnswers = rawExpectedList.map(ans => normalizeAnswer(ans));

  // Direct match
  if (possibleAnswers.includes(normalizedUser)) return true;

  // Space-collapsed comparison (useful for phone numbers like "07700 900342" vs "07700900342")
  const noSpaceUser = normalizedUser.replace(/\s+/g, "");
  if (possibleAnswers.some(ans => ans.replace(/\s+/g, "") === noSpaceUser)) return true;

  // Numerical comparison (e.g., "25" vs "25 pounds")
  const userNum = parseFloat(normalizedUser);
  if (!isNaN(userNum)) {
    for (const ans of possibleAnswers) {
      const ansNum = parseFloat(ans);
      if (!isNaN(ansNum) && userNum === ansNum && normalizedUser.includes(String(ansNum))) {
        return true;
      }
    }
  }

  return false;
}

export function getBandDescription(band: string): string {
  const num = parseFloat(band);
  if (num >= 9.0) return "Expert User: Has fully operational command of the language with complete understanding.";
  if (num >= 8.0) return "Very Good User: Fully operational command with occasional unsystematic inaccuracies.";
  if (num >= 7.0) return "Good User: Operational command with occasional inaccuracies and misunderstandings.";
  if (num >= 6.0) return "Competent User: Generally effective command despite some inaccuracies and inappropriate usage.";
  if (num >= 5.0) return "Modest User: Partial command; copes with overall meaning in most situations with errors.";
  if (num >= 4.0) return "Limited User: Basic competence is limited to familiar situations; frequent problems.";
  return "Intermittent User: Formulates only basic meaning in very familiar situations.";
}
