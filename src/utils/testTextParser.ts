import { Question, ReadingTest, ListeningTest, WritingTest, SpeakingTest, VisualType } from "../types/ielts";

export interface ParsedTextTestResult {
  section: "reading" | "listening" | "writing" | "speaking";
  title: string;
  difficulty?: "Standard Academic" | "High Stakes Academic" | "Official Cambridge Simulation";
  passages?: string[];
  questions?: Question[];
  parts?: { part: number; script: string; questions: Question[] }[];
  task1?: string;
  task1_type?: string;
  task2?: string;
  visual?: VisualType;
  part1?: string[];
  part2?: string;
  part3?: string[];
  rawText?: string;
}

/**
 * Parses user-uploaded plain text into a structured IELTS test object.
 */
export function parseIeltsTextFormat(text: string): { success: boolean; data?: ParsedTextTestResult; error?: string } {
  if (!text || !text.trim()) {
    return { success: false, error: "Uploaded text is empty." };
  }

  const cleanText = text.trim();

  // Try JSON first in case the user pasted raw JSON
  if (cleanText.startsWith("{") && cleanText.endsWith("}")) {
    try {
      const parsedJson = JSON.parse(cleanText);
      const section = (parsedJson.section || "reading").toLowerCase() as any;
      return {
        success: true,
        data: {
          section,
          title: parsedJson.title || "Uploaded Test",
          difficulty: parsedJson.difficulty || "Official Cambridge Simulation",
          passages: parsedJson.passages || (parsedJson.passage ? [parsedJson.passage] : []),
          questions: parsedJson.questions || [],
          task1: parsedJson.task1,
          task1_type: parsedJson.task1_type,
          task2: parsedJson.task2,
          visual: parsedJson.visual,
          part1: parsedJson.part1,
          part2: parsedJson.part2,
          part3: parsedJson.part3,
          parts: parsedJson.parts,
        },
      };
    } catch {
      // Continue with text parser
    }
  }

  // Parse structured text blocks
  let title = "Uploaded Custom Test";
  let section: "reading" | "listening" | "writing" | "speaking" = "reading";
  let difficulty: "Standard Academic" | "High Stakes Academic" | "Official Cambridge Simulation" = "Official Cambridge Simulation";
  const passages: string[] = [];
  const questions: Question[] = [];

  // Extract metadata if present
  const metaMatch = cleanText.match(/=== TEST META ===([\s\S]*?)(?:===|$)/i);
  if (metaMatch) {
    const metaBlock = metaMatch[1];
    const titleMatch = metaBlock.match(/title:\s*(.+)/i);
    if (titleMatch) title = titleMatch[1].trim();

    const secMatch = metaBlock.match(/section:\s*(.+)/i);
    if (secMatch) {
      const secVal = secMatch[1].trim().toLowerCase();
      if (["reading", "listening", "writing", "speaking"].includes(secVal)) {
        section = secVal as any;
      }
    }

    const diffMatch = metaBlock.match(/difficulty:\s*(.+)/i);
    if (diffMatch) {
      const d = diffMatch[1].trim();
      if (d.includes("High")) difficulty = "High Stakes Academic";
      else if (d.includes("Standard")) difficulty = "Standard Academic";
      else difficulty = "Official Cambridge Simulation";
    }
  } else {
    // Check if first line has Title: or Section:
    const firstLines = cleanText.split("\n").slice(0, 5);
    for (const l of firstLines) {
      if (/^title:\s*/i.test(l)) title = l.replace(/^title:\s*/i, "").trim();
      if (/^section:\s*/i.test(l)) {
        const s = l.replace(/^section:\s*/i, "").trim().toLowerCase();
        if (["reading", "listening", "writing", "speaking"].includes(s)) section = s as any;
      }
    }
  }

  // 1. READING: Extract passages
  const passageRegex = /=== PASSAGE\s*(\d*)\s*===([\s\S]*?)(?=(?:=== PASSAGE|=== QUESTIONS|=== TASK|=== PART|$))/gi;
  let pMatch: RegExpExecArray | null;
  while ((pMatch = passageRegex.exec(cleanText)) !== null) {
    const pContent = pMatch[2].trim();
    if (pContent) passages.push(pContent);
  }

  // If no === PASSAGE === marker, check for general body before questions
  if (passages.length === 0 && section === "reading") {
    const questionsIndex = cleanText.search(/=== QUESTIONS ===|\[MCQ\]|\[TFNG\]|\[BLANKS\]|\[COMPLETION\]|Q:/i);
    if (questionsIndex > 0) {
      let bodyText = cleanText.substring(0, questionsIndex);
      if (metaMatch) {
        bodyText = bodyText.replace(/=== TEST META ===[\s\S]*?===/i, "").trim();
      }
      if (bodyText.length > 50) {
        passages.push(bodyText);
      }
    }
  }

  // 2. Extract Questions (MCQ, TFNG, BLANKS, SHORT)
  const qSectionIndex = cleanText.search(/=== QUESTIONS ===/i);
  const qText = qSectionIndex !== -1 ? cleanText.substring(qSectionIndex) : cleanText;

  // Split into question chunks by [MCQ], [TFNG], [BLANKS], [COMPLETION], or Q:
  const questionBlocks = qText.split(/(?=\[(?:MCQ|TFNG|BLANKS|COMPLETION|SHORT)\]|(?:\n|^)Q\d*[:.])/i);

  for (const block of questionBlocks) {
    const trimmed = block.trim();
    if (!trimmed || trimmed.startsWith("=== QUESTIONS ===")) continue;

    // Detect type
    let qType: 'mcq' | 'tfng' | 'completion' | 'short' = 'mcq';
    if (/\[TFNG\]/i.test(trimmed) || /true[\/\s]false[\/\s]not given/i.test(trimmed)) {
      qType = 'tfng';
    } else if (/\[BLANKS\]|\[COMPLETION\]/i.test(trimmed)) {
      qType = 'completion';
    } else if (/\[SHORT\]/i.test(trimmed)) {
      qType = 'short';
    } else if (/\[MCQ\]/i.test(trimmed) || /[A-D]\)/i.test(trimmed)) {
      qType = 'mcq';
    }

    // Extract Question prompt
    const qMatch = trimmed.match(/(?:Q\d*[:.]|\?)\s*([^\n\r]+)/i) || trimmed.match(/\]\s*([^\n\r]+)/);
    let questionText = qMatch ? qMatch[1].trim() : trimmed.split("\n")[0].replace(/^\[[A-Z]+\]\s*/i, "").trim();
    if (questionText.startsWith("Q:")) questionText = questionText.replace(/^Q:\s*/i, "").trim();

    // Extract options if MCQ
    const options: string[] = [];
    const optionMatches = trimmed.matchAll(/(?:^|\n)\s*([A-D])\)\s*([^\n\r]+)/g);
    for (const om of optionMatches) {
      options.push(om[2].trim());
    }

    // Extract Answer
    let answerVal: string | number = 0;
    const ansMatch = trimmed.match(/(?:ANS|ANSWER|KEY)\s*[:=]\s*([^\n\r]+)/i);
    if (ansMatch) {
      const rawAns = ansMatch[1].trim();
      if (qType === 'mcq') {
        const upper = rawAns.toUpperCase();
        if (upper === 'A' || upper === '0') answerVal = 0;
        else if (upper === 'B' || upper === '1') answerVal = 1;
        else if (upper === 'C' || upper === '2') answerVal = 2;
        else if (upper === 'D' || upper === '3') answerVal = 3;
        else {
          const idx = options.findIndex(o => o.toLowerCase() === rawAns.toLowerCase());
          answerVal = idx !== -1 ? idx : 0;
        }
      } else if (qType === 'tfng') {
        const upper = rawAns.toUpperCase();
        if (upper.includes("TRUE")) answerVal = "TRUE";
        else if (upper.includes("FALSE")) answerVal = "FALSE";
        else answerVal = "NOT GIVEN";
      } else {
        answerVal = rawAns;
      }
    } else {
      answerVal = qType === 'tfng' ? 'TRUE' : 0;
    }

    if (questionText) {
      questions.push({
        type: qType,
        q: questionText,
        options: options.length > 0 ? options : (qType === 'mcq' ? ["Option A", "Option B", "Option C", "Option D"] : undefined),
        answer: answerVal,
      });
    }
  }

  // Fallback defaults if user uploaded minimal text
  if (section === "reading" && passages.length === 0) {
    passages.push(cleanText.slice(0, 1000));
  }
  if (questions.length === 0 && (section === "reading" || section === "listening")) {
    questions.push({
      type: "mcq",
      q: `What is the central topic explored in ${title}?`,
      options: ["Key themes discussed in the text", "Historical background", "Scientific analysis", "Technological advancements"],
      answer: 0,
    });
  }

  // 3. WRITING: check task1 & task2
  let task1 = "";
  let task2 = "";
  let task1_type = "Chart & Trends";
  const t1Match = cleanText.match(/=== TASK 1 ===([\s\S]*?)(?=(?:=== TASK 2|=== QUESTIONS|$))/i);
  if (t1Match) task1 = t1Match[1].trim();
  const t2Match = cleanText.match(/=== TASK 2 ===([\s\S]*?)(?=(?:=== QUESTIONS|$))/i);
  if (t2Match) task2 = t2Match[1].trim();

  // 4. SPEAKING: check part1, part2, part3
  const part1Questions: string[] = [];
  let part2Cue = "";
  const part3Questions: string[] = [];
  const p1Match = cleanText.match(/=== PART 1 ===([\s\S]*?)(?=(?:=== PART 2|$))/i);
  if (p1Match) {
    p1Match[1].split("\n").map(l => l.replace(/^[-*•\d.]\s*/, "").trim()).filter(Boolean).forEach(q => part1Questions.push(q));
  }
  const p2Match = cleanText.match(/=== PART 2.*?===([\s\S]*?)(?=(?:=== PART 3|$))/i);
  if (p2Match) part2Cue = p2Match[1].trim();
  const p3Match = cleanText.match(/=== PART 3 ===([\s\S]*?)$/i);
  if (p3Match) {
    p3Match[1].split("\n").map(l => l.replace(/^[-*•\d.]\s*/, "").trim()).filter(Boolean).forEach(q => part3Questions.push(q));
  }

  return {
    success: true,
    data: {
      section,
      title,
      difficulty,
      passages: passages.length > 0 ? passages : undefined,
      questions: questions.length > 0 ? questions : undefined,
      task1: task1 || undefined,
      task1_type,
      task2: task2 || undefined,
      part1: part1Questions.length > 0 ? part1Questions : undefined,
      part2: part2Cue || undefined,
      part3: part3Questions.length > 0 ? part3Questions : undefined,
      rawText: cleanText,
    },
  };
}
