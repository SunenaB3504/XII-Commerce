import { QuestionPaper } from '../../types';
import paper1to16 from './sample-paper-2022-q1-16.ts';
import { questions17to20 } from './sample-paper-2022-q17-20.ts';
import { questions21to22 } from './sample-paper-2022-q21-22.ts';
import { questions23to26 } from './sample-paper-2022-q23-26.ts';
import { questions27to34 } from './sample-paper-2022-q27-34.ts';

const samplePaper2022: QuestionPaper = {
  name: 'CBSE Sample Paper 2022-23',
  questions: [
    ...paper1to16.questions,
    ...questions17to20,
    ...questions21to22,
    ...questions23to26,
    ...questions27to34
  ]
};

export default samplePaper2022;