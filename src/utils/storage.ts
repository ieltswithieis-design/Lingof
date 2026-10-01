import { UserTestAttempt, TestSection } from "../types/ielts";

const STORAGE_KEY = "ielts_mastery_progress_v2";

export interface ProgressState {
  completed: Record<string, boolean>; // key: `${section}-${testId}`
  attempts: Record<string, UserTestAttempt>;
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: {}, attempts: {} };
    return JSON.parse(raw);
  } catch {
    return { completed: {}, attempts: {} };
  }
}

export function saveAttempt(attempt: UserTestAttempt): void {
  try {
    const current = loadProgress();
    const key = `${attempt.section}-${attempt.testId}`;
    current.completed[key] = true;
    current.attempts[key] = attempt;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error("Failed to save attempt to localStorage", err);
  }
}

export function getAttempt(section: TestSection, testId: number): UserTestAttempt | undefined {
  const current = loadProgress();
  return current.attempts[`${section}-${testId}`];
}

/**
 * Finds the attempt with the HIGHEST band score recorded for the specified test section.
 * Test scores must be recorded strictly from the attempt with the highest score.
 */
export function getHighestAttemptForSection(
  progress: ProgressState, 
  section: TestSection
): UserTestAttempt | undefined {
  const attempts = Object.values(progress.attempts || {})
    .filter(a => a && a.section === section && a.band !== undefined);

  if (attempts.length === 0) return undefined;

  // Sort descending by numeric band, then by most recent completion timestamp
  const sorted = [...attempts].sort((a, b) => {
    const bandA = parseFloat(a.band || "0") || 0;
    const bandB = parseFloat(b.band || "0") || 0;
    if (bandB !== bandA) return bandB - bandA;
    return new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime();
  });

  return sorted[0];
}

export function resetSectionProgress(section: TestSection): void {
  try {
    const current = loadProgress();
    Object.keys(current.completed).forEach(key => {
      if (key.startsWith(`${section}-`)) {
        delete current.completed[key];
        delete current.attempts[key];
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error("Failed to reset progress", err);
  }
}
