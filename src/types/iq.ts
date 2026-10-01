export type IqCategory = 'matrix' | 'numerical' | 'spatial' | 'verbal' | 'logic';

export interface IqQuestion {
  id: number;
  category: IqCategory;
  question: Record<string, string>; // Multi-language question text by lang code (en, es, fr, de, zh, ar, hi, pt, ru, ja)
  svgDiagram?: string; // Visual representation for matrix/spatial questions
  options: {
    text?: Record<string, string>;
    svgSymbol?: string;
  }[];
  correctAnswer: number; // 0-indexed
  explanation: Record<string, string>;
}

export interface IqScoreBreakdown {
  rawScore: number;
  totalQuestions: number;
  iqScore: number; // Scaled SD 15 (e.g. 100 mean, range 70-160)
  percentile: number;
  classification: string;
  isMensaLevel: boolean;
  subScores: {
    matrix: number;
    numerical: number;
    spatial: number;
    verbal: number;
    logic: number;
  };
}

export interface IqCertificateData {
  certificateId: string;
  candidateName: string;
  iqScore: number;
  percentile: number;
  classification: string;
  issueDate: string;
  verificationHash: string;
  subScores: {
    matrix: number;
    numerical: number;
    spatial: number;
    verbal: number;
    logic: number;
  };
}
