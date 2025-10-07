import { QuestionPaper } from '../../types';
import { questions1to20 } from './economics-sample-paper-2023-q1-20';
import { questions21to24 } from './economics-sample-paper-2023-q21-24';
import { questions25to30 } from './economics-sample-paper-2023-q25-30';
import { questions31to34 } from './economics-sample-paper-2023-q31-34';

export const economicsSamplePaper2023: QuestionPaper = {
  name: 'CBSE Class 12 Economics Sample Paper 2023',
  questions: [
    ...questions1to20,
    ...questions21to24,
    ...questions25to30,
    ...questions31to34
  ]
};