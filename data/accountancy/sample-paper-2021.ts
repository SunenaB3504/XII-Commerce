import { QuestionPaper } from '../../types';
import React from 'react';
import { questions1to9 } from './sample-paper-2021-q1-9';
import { questions10to12 } from './sample-paper-2021-q10-12';

export const accountancySamplePaper2021: QuestionPaper = {
  name: 'CBSE Sample Paper 2021-22',
  questions: [
    // Questions 1-9: 1-mark MCQs
    ...questions1to9,

    // Questions 10-12: Part B - Analysis of Financial Statements
    ...questions10to12
  ]
};