import { QuestionPaper } from '../../types';
import { questions1to20 } from './economics-sample-paper-2022-q1-20';
import { questions21to25 } from './economics-sample-paper-2022-q21-25';
import { questions26to30 } from './economics-sample-paper-2022-q25-30';
import { questions31to34 } from './economics-sample-paper-2022-q31-34';

export const economicsSamplePaper2022: QuestionPaper = {
  name: 'CBSE Sample Paper 2022-23',
  questions: [
    ...questions1to20,
    ...questions21to25,
    ...questions26to30,
    ...questions31to34
  ]
};