import type { ReactNode } from 'react';

export interface Question {
  id: string;
  marks: number;
  question: ReactNode;
  solution: ReactNode;
  explanation: ReactNode;
}

export interface QuestionPaper {
  name: string;
  questions: Question[];
}

export interface Concept {
  title: string;
  content: ReactNode;
  examFocus?: boolean;
  mnemonic?: ReactNode;
  // FIX: Changed type from string to ReactNode to allow JSX elements.
  example?: ReactNode;
}

export interface CaseStudy {
  title: string;
  scenario: ReactNode;
  analysis: ReactNode;
}

export interface LearningModule {
  chapter: string;
  title: string;
  overview: ReactNode;
  keyConcepts: Concept[];
  keywords: { term: string; definition: string }[];
  caseStudies: CaseStudy[];
  quickRevision: ReactNode;
}

export interface Subject {
  name:string;
  questionPapers: QuestionPaper[];
  learningModules?: LearningModule[];
}

// Challenge Mode Types
export interface ChallengeMetadata {
  year: number;
  paperType: 'main' | 'comptt' | 'term2';
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  subTopic?: string;
  bloomLevel: 'remembering' | 'understanding' | 'applying' | 'analyzing' | 'evaluating' | 'creating';
  estimatedTime: number; // in seconds
  commonMistakes?: string[];
  markingTips?: string[];
}

export interface ChallengeQuestion extends Question {
  challengeData?: ChallengeMetadata;
}

export interface ChallengeSession {
  id: string;
  paperId: string;
  subject: string;
  startTime: Date;
  timeLimit?: number; // in minutes
  answers: { [questionId: string]: any };
  completed: boolean;
  score?: number;
  timeSpent?: number;
}

export interface ChallengeResult {
  sessionId: string;
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  percentage: number;
  timeSpent: number;
  questionBreakdown: {
    questionId: string;
    correct: boolean;
    timeSpent: number;
    marks: number;
  }[];
}

export interface ChallengePaper extends QuestionPaper {
  challengeMode: true;
  timeLimit: number; // in minutes
  totalMarks: number;
  year: number;
  paperType: 'main' | 'comptt' | 'term2';
  questions: ChallengeQuestion[];
}