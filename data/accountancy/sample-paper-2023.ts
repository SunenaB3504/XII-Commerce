import { QuestionPaper } from '../../types';
import { samplePaper2023Q1To10 } from './sample-paper-2023-q1-10';
import { samplePaper2023Q11To16 } from './sample-paper-2023-q11-16';
import { samplePaper2023Q17To20 } from './sample-paper-2023-q17-20';
import { samplePaper2023Q21To22 } from './sample-paper-2023-q21-22';
import { samplePaper2023Q23To26 } from './sample-paper-2023-q23-26';
import { samplePaper2023Q27To34 } from './sample-paper-2023-q27-34';

export const samplePaper2023: QuestionPaper = {
  name: 'CBSE Sample Paper 2022-23',
  questions: [
    ...samplePaper2023Q1To10,
    ...samplePaper2023Q11To16,
    ...samplePaper2023Q17To20,
    ...samplePaper2023Q21To22,
    ...samplePaper2023Q23To26,
    ...samplePaper2023Q27To34,
  ],
};
