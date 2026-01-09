import { accountancySamplePaper2026 } from './accountancy/sample-paper-2026';
import { accountancyBoardExam67_4_1 } from './accountancy/board-exam-67-4-1';
import { accountancyBoardExam67_5_3 } from './accountancy/board-exam-67-5-3';
import { accountancyBoardExam67_3_1 } from './accountancy/board-exam-67-3-1';
import { accountancyBoardExam67_4_3 } from './accountancy/board-exam-67-4-3';
import { samplePaper2025 } from './accountancy/sample-paper-2025';
import { samplePaper2024 } from './accountancy/sample-paper-2024';
import { samplePaper2023 } from './accountancy/sample-paper-2023';

import { accountancySamplePaper2021 } from './accountancy/sample-paper-2021';
import { businessStudiesSamplePaper2026 } from './business-studies/sample-paper-2026';
import { businessStudiesSamplePaper2025 } from './business-studies/sample-paper-2025';
import { businessStudiesSamplePaper2024 } from './business-studies/sample-paper-2024';
import { businessStudiesSamplePaper2023 } from './business-studies/sample-paper-2023';
// import { businessStudiesBoardExam66_1_1 } from './business-studies/board-exam-66-1-1';
// import { businessStudiesBoardExam66_1_2 } from './business-studies/board-exam-66-1-2';
// import { businessStudiesBoardExam66_7_3 } from './business-studies/board-exam-66-7-3';
// import { businessStudiesBoardExam66_5_3 } from './business-studies/board-exam-66-5-3';
// import { businessStudiesBoardExam66_5_3_Term2 } from './business-studies/board-exam-66-5-3-term2';
// import { businessStudiesChallenge2025 } from './business-studies/business-studies-challenge-2025';
import { businessStudiesChallenge2024 } from './business-studies/business-studies-challenge-2024';
import { businessStudiesChallenge2023 } from './business-studies/business-studies-challenge-2023';
import { businessStudiesChallenge2022 } from './business-studies/business-studies-challenge-2022';
import { businessStudiesChallenge2021 } from './business-studies/business-studies-challenge-2021';
import { economicsSamplePaper2025 } from './economics/economics-sample-paper-2025';
import { economicsSamplePaper2024 } from './economics/economics-sample-paper-2024';
import { economicsSamplePaper2023 } from './economics/economics-sample-paper-2023';
import { economicsSamplePaper2022 } from './economics/economics-sample-paper-2022';

import { businessStudiesLearningModules } from './learning-content/business-studies';
import { economicsLearningModules } from './learning-content/economics';
import { accountancyLearningModules } from './learning-content/accountancy';
import type { Subject } from '../types';

export const subjects: Subject[] = [
  {
    name: 'Accountancy',
    questionPapers: [
      accountancySamplePaper2026,
      samplePaper2025,
      samplePaper2024,
      samplePaper2023,
    ],
    learningModules: accountancyLearningModules,
  },
  {
    name: 'Business Studies',
    questionPapers: [
      businessStudiesSamplePaper2026,
      businessStudiesSamplePaper2025,
      businessStudiesSamplePaper2024,
      businessStudiesSamplePaper2023,
      // businessStudiesChallenge2025,
      // businessStudiesChallenge2024,
      // businessStudiesChallenge2023,
      businessStudiesChallenge2022,
      businessStudiesChallenge2021,
      // businessStudiesBoardExam66_1_1,
      // businessStudiesBoardExam66_1_2,
      // businessStudiesBoardExam66_7_3,
      // businessStudiesBoardExam66_5_3,
      // businessStudiesBoardExam66_5_3_Term2,
    ],
    learningModules: businessStudiesLearningModules,
  },
  {
    name: 'Economics',
    questionPapers: [
      economicsSamplePaper2025,
      economicsSamplePaper2024,
      economicsSamplePaper2023,
      economicsSamplePaper2022,

    ],
    learningModules: economicsLearningModules,
  },
];