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
  mnemonic?: string;
  // FIX: Changed type from string to ReactNode to allow JSX elements.
  example?: ReactNode;
}

export interface CaseStudy {
  title: string;
  scenario: string;
  analysis: ReactNode;
}

export interface LearningModule {
  chapter: string;
  title: string;
  overview: string;
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