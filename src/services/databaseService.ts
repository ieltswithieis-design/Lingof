import { IeltsDatabase, FullIeltsTest } from "../types/ielts";
import { ieltsDatabase as defaultIeltsDatabase, normalizeIeltsDatabase } from "../data/ieltsData";
import { fullIeltsTests as defaultFullTests } from "../data/fullTestsData";

export interface DatabaseStatus {
  success: boolean;
  databasePath: string;
  counts: {
    reading: number;
    listening: number;
    writing: number;
    speaking: number;
    fullTests: number;
    totalSingleTests: number;
    registeredUsers: number;
    candidateSubmissions: number;
  };
  lastModified: string;
}

function getAdminAuthHeaders(): Record<string, string> {
  const token = sessionStorage.getItem("lingofi_auth_token");
  const raw = sessionStorage.getItem("lingofi_auth_user");
  let email = "";
  try { email = raw ? JSON.parse(raw).email || "" : ""; } catch {}
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(email ? { "x-user-email": email } : {}),
  };
}

/**
 * Loads the complete modular IELTS test database from the backend `/database` storage.
 * Falls back to bundled initial data if backend request fails.
 */
export async function loadDatabaseFromBackend(): Promise<IeltsDatabase> {
  try {
    const res = await fetch("/api/tests/all");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && Array.isArray(data.reading) && data.reading.length > 0) {
      const normalized = normalizeIeltsDatabase(data);
      const readingReady = normalized.reading.length >= 200 &&
        normalized.reading.every(test =>
          Array.isArray(test.passages) && test.passages.length === 3 &&
          Array.isArray(test.questions) && test.questions.length === 40 &&
          test.questions.every(q => Boolean(q.q) && q.answer !== undefined && q.answer !== null)
        );
      const listeningReady = normalized.listening.length >= 200 &&
        normalized.listening.every(test =>
          Array.isArray(test.parts) && test.parts.length === 4 &&
          test.parts.every(part => Array.isArray(part.questions) && part.questions.length === 10)
        );
      if (readingReady && listeningReady) return normalized;
      console.warn("Backend IELTS database is incomplete; using the verified bundled database instead.");
    }
    return defaultIeltsDatabase;
  } catch (err) {
    console.warn("Could not load database from backend API, using local bundle fallback:", err);
    return defaultIeltsDatabase;
  }
}

/**
 * Loads the full IELTS mock examination suite from `/database/tests/full_tests.json`.
 */
export async function loadFullTestsFromBackend(): Promise<FullIeltsTest[]> {
  try {
    const res = await fetch("/api/tests/full");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data as FullIeltsTest[];
    }
    return defaultFullTests;
  } catch (err) {
    console.warn("Could not load full tests from backend, using default tests:", err);
    return defaultFullTests;
  }
}

/**
 * Uploads a text or JSON formatted test into the `/database` storage.
 */
export async function uploadTestToDatabase(payload: {
  format?: "text" | "json";
  textPayload?: string;
  jsonPayload?: any;
  createFullMock?: boolean;
}): Promise<{ success: boolean; message: string; test?: any; section?: string; createdFullTest?: any; error?: string }> {
  try {
    const res = await fetch("/api/tests/upload", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data;
  } catch (err: any) {
    return { success: false, message: err.message || "Failed to upload test", error: err.message };
  }
}

/**
 * Updates any IELTS section test in the live database.
 */
export async function updateTestInDatabase(section: string, id: number, test: any): Promise<{ success: boolean; message?: string; test?: any; error?: string }> {
  try {
    const token = sessionStorage.getItem("lingofi_auth_token");
    const raw = sessionStorage.getItem("lingofi_auth_user");
    let email = "";
    try { email = raw ? JSON.parse(raw).email || "" : ""; } catch {}
    const res = await fetch(`/api/tests/${section}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(email ? { "x-user-email": email } : {}),
      },
      body: JSON.stringify({ test }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Update failed");
    return data;
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to update test" };
  }
}

/**
 * Deletes a test from `/database/tests/ielts_database.json`.
 */
export async function deleteTestFromDatabase(section: string, id: number): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const res = await fetch(`/api/tests/${section}/${id}`, {
      method: "DELETE",
      headers: getAdminAuthHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Delete failed");
    return data;
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to delete test" };
  }
}

/**
 * Fetches database statistics.
 */
export async function updateFullTestInDatabase(id: number, test: any) {
  const res = await fetch(`/api/tests/full/${id}`, { method: "PUT", headers: getAdminAuthHeaders(), body: JSON.stringify({ test }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to update full test");
  return data;
}

export async function deleteFullTestFromDatabase(id: number) {
  const res = await fetch(`/api/tests/full/${id}`, { method: "DELETE", headers: getAdminAuthHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to delete full test");
  return data;
}

export async function importDatabaseBundle(fileData: any): Promise<any> {
  const res = await fetch("/api/database/import", {
    method: "POST",
    headers: getAdminAuthHeaders(),
    body: JSON.stringify({ database: fileData }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Database import failed");
  return data;
}

export async function fetchDatabaseStatus(): Promise<DatabaseStatus | null> {
  try {
    const res = await fetch("/api/database/status");
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Saves candidate test completion to `/database/test_results.json`.
 */
export async function recordTestSubmission(data: {
  trfCode: string;
  candidateName: string;
  userEmail?: string;
  testId: number;
  testTitle: string;
  overallBand: number;
  scores: { reading: number; listening: number; writing: number; speaking: number };
}) {
  try {
    await fetch("/api/results/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.warn("Failed to record test submission to database:", err);
  }
}

import { StandardizedDatabase, StandardizedExamId, StandardizedTestPackage, ExamMeta, ExamTaskType } from "../types/standardizedTests";

export async function loadStandardizedDatabase(): Promise<StandardizedDatabase> {
  try {
    const res = await fetch("/api/standardized/database", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.exams && Array.isArray(data?.packages) && data.packages.length > 0) return data as StandardizedDatabase;
    }
  } catch (err) {
    console.warn("Live standardized database unavailable; loading the validated local copy.", err);
  }

  // Deployment-safe fallback: the standardized database is stored as three
  // sub-25 MB files and reassembled into the exact same in-memory shape.
  const partResponses = await Promise.all(
    [1, 2, 3].map((part) => fetch(`/standardized_tests_part${part}.json`, { cache: "no-store" }))
  );
  if (partResponses.some((response) => !response.ok)) {
    const failed = partResponses.find((response) => !response.ok);
    throw new Error(`Standardized database unavailable (HTTP ${failed?.status || 500})`);
  }
  const parts = await Promise.all(partResponses.map((response) => response.json()));
  const firstWithExams = parts.find((part) => part?.exams && Object.keys(part.exams).length) || parts[0];
  const data = {
    version: firstWithExams?.version || "1.0.0",
    exams: firstWithExams?.exams || {},
    packages: parts.flatMap((part) => Array.isArray(part?.packages) ? part.packages : []),
    updatedAt: firstWithExams?.updatedAt || new Date().toISOString(),
  };
  if (!data?.exams || !Array.isArray(data?.packages)) {
    throw new Error("The standardized database format is invalid.");
  }
  return data as StandardizedDatabase;
}

function authHeaders(): Record<string, string> {
  const token = sessionStorage.getItem("lingofi_auth_token");
  const raw = sessionStorage.getItem("lingofi_auth_user");
  let email = "";
  try { email = raw ? JSON.parse(raw).email || "" : ""; } catch {}
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(email ? { "x-user-email": email } : {}),
  };
}

export async function replaceStandardizedDatabase(database: StandardizedDatabase) {
  const res = await fetch("/api/standardized/database", { method: "PUT", headers: authHeaders(), body: JSON.stringify({ database }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to replace standardized database");
  return data;
}

export async function saveStandardizedExam(exam: ExamMeta) {
  const res = await fetch("/api/standardized/exams", { method: "POST", headers: authHeaders(), body: JSON.stringify({ exam }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to save exam type");
  return data;
}

export async function deleteStandardizedExam(examId: StandardizedExamId) {
  const res = await fetch(`/api/standardized/exams/${encodeURIComponent(examId)}`, { method: "DELETE", headers: authHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to delete exam type");
  return data;
}

export async function saveStandardizedPackage(testPackage: StandardizedTestPackage) {
  const res = await fetch("/api/standardized/packages", { method: "POST", headers: authHeaders(), body: JSON.stringify({ package: testPackage }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to save test package");
  return data;
}

export async function deleteStandardizedPackage(packageId: string) {
  const res = await fetch(`/api/standardized/packages/${encodeURIComponent(packageId)}`, { method: "DELETE", headers: authHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to delete test package");
  return data;
}

export async function saveExamTaskType(examId: string, taskType: ExamTaskType) {
  const res = await fetch("/api/standardized/task-types", { method: "POST", headers: authHeaders(), body: JSON.stringify({ examId, taskType }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to save task type");
  return data;
}
