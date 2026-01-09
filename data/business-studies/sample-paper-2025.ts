import { QuestionPaper } from '../../types';
import { samplePaper2025Q1To10 } from './sample-paper-2025-q1-10';
import { samplePaper2025Q11To20 } from './sample-paper-2025-q11-20';
import { samplePaper2025Q21To25 } from './sample-paper-2025-q21-25';
import { samplePaper2025Q26To30 } from './sample-paper-2025-q26-30';
import { samplePaper2025Q31To34 } from './sample-paper-2025-q31-34';

export const businessStudiesSamplePaper2025: QuestionPaper = {
  name: 'CBSE Sample Paper 2024-25',
  questions: [
    ...samplePaper2025Q1To10,
    ...samplePaper2025Q11To20,
    ...samplePaper2025Q21To25,
    ...samplePaper2025Q26To30,
    ...samplePaper2025Q31To34,
  ]
};
