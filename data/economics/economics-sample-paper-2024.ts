import { QuestionPaper } from '../../types';
import React from 'react';
import { questions1to20 } from './economics-sample-paper-2024-q1-20';
import { questions21to24 } from './economics-sample-paper-2024-q21-24';
import { questions25to30 } from './economics-sample-paper-2024-q25-30';
import { questions31to34 } from './economics-sample-paper-2024-q31-34';

export const economicsSamplePaper2024: QuestionPaper = {
  name: 'CBSE Sample Paper 2024-25',
  questions: [
    // Questions 1-20: 1-mark MCQs (imported from batch file)
    ...questions1to20,

    // Questions 21-24: 3-mark questions (imported from batch file)
    ...questions21to24,

    // Questions 25-30: 4-mark questions (imported from batch file)
    ...questions25to30,

    // Questions 31-34: 6-mark questions (imported from batch file)
    ...questions31to34
  ]
};