import { accountancySamplePaper2025 } from './accountancy/sample-paper-2025';
import { accountancyBoardExam67_4_1 } from './accountancy/board-exam-67-4-1';
import { accountancyBoardExam67_5_3 } from './accountancy/board-exam-67-5-3';
import { accountancyBoardExam67_3_1 } from './accountancy/board-exam-67-3-1';
import { accountancyBoardExam67_4_3 } from './accountancy/board-exam-67-4-3';
import samplePaper2024 from './accountancy/sample-paper-2024';
import samplePaper2023 from './accountancy/sample-paper-2023';
import samplePaper2022 from './accountancy/sample-paper-2022';
import { businessStudiesSamplePaper2025 } from './business-studies/sample-paper-2025';
import { businessStudiesBoardExam66_1_1 } from './business-studies/board-exam-66-1-1';
import { businessStudiesBoardExam66_1_2 } from './business-studies/board-exam-66-1-2';
import { businessStudiesBoardExam66_7_3 } from './business-studies/board-exam-66-7-3';
import { businessStudiesBoardExam66_5_3 } from './business-studies/board-exam-66-5-3';
import { businessStudiesBoardExam66_5_3_Term2 } from './business-studies/board-exam-66-5-3-term2';
import { economicsSamplePaper2025 } from './economics/sample-paper-2025';
import { economicsBoardExam58_5_1_term } from './economics/board-exam-58-5-1-term';
import { economicsBoardExam58_5_3 } from './economics/board-exam-58-5-3';
import { economicsBoardExam58_4_3 } from './economics/board-exam-58-4-3';
import { economicsBoardExam58_3_3 } from './economics/board-exam-58-3-3';
import { businessStudiesLearningModules } from './learning-content/business-studies';
import { economicsLearningModules } from './learning-content/economics';
import { accountancyLearningModules } from './learning-content/accountancy';
import type { Subject } from '../types';

export const subjects: Subject[] = [
  { 
    name: 'Accountancy', 
  questionPapers: [
  accountancySamplePaper2025, 
  samplePaper2024,
  samplePaper2023,
  samplePaper2022,
      accountancyBoardExam67_4_1, 
      accountancyBoardExam67_5_3,
      accountancyBoardExam67_3_1,
      accountancyBoardExam67_4_3
    ],
    learningModules: accountancyLearningModules,
  },
  { 
    name: 'Business Studies', 
    questionPapers: [
      businessStudiesSamplePaper2025, 
      businessStudiesBoardExam66_1_1,
      businessStudiesBoardExam66_1_2,
      businessStudiesBoardExam66_7_3,
      businessStudiesBoardExam66_5_3,
      businessStudiesBoardExam66_5_3_Term2,
    ],
    learningModules: businessStudiesLearningModules,
  },
  { 
    name: 'Economics', 
    questionPapers: [
      economicsSamplePaper2025,
      economicsBoardExam58_5_1_term,
      economicsBoardExam58_5_3,
      economicsBoardExam58_4_3,
      economicsBoardExam58_3_3,
    ],
    learningModules: economicsLearningModules,
  },
];