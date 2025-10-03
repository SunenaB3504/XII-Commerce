import { QuestionPaper } from '../../types';
import paper1to16 from './sample-paper-2023-q1-16.ts';
import paper1720 from './sample-paper-2023-q17-20.ts';
import paper2122 from './sample-paper-2023-q21-22.ts';
import paper2326 from './sample-paper-2023-q23-26.ts';
import paper2734 from './sample-paper-2023-q27-34.ts';

const samplePaper2023: QuestionPaper = {
  name: 'Sample Paper 2023',
  questions: [
    ...paper1to16.questions,
    ...paper1720.questions,
    ...paper2122.questions,
    ...paper2326.questions,
    ...paper2734.questions,
  ],
};

export default samplePaper2023;
