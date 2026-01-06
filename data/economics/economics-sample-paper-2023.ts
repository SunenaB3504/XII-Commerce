import { QuestionPaper } from '../../types';
import { questions1to20 } from './economics-sample-paper-2023-q1-20';
import { economics2023Q21to25 } from './economics-sample-paper-2023-q21-25';
import { questions26to30 } from './economics-sample-paper-2023-q26-30';
import { questions31to34 } from './economics-sample-paper-2023-q31-34';

export const economicsSamplePaper2023: QuestionPaper = {
  name: 'CBSE Sample Paper 2023',
  questions: [
    ...questions1to20,
    ...economics2023Q21to25,
    ...questions26to30,
    ...questions31to34
  ]
};