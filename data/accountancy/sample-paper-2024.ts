import { QuestionPaper } from '../../types';
import paper1to16 from './sample-paper-2024-q1-16.ts';
import paper1720 from './sample-paper-2024-q17-20.ts';
import paper2122 from './sample-paper-2024-q21-22.ts';
import paper2326 from './sample-paper-2024-q23-26.ts';
import paper2730 from './sample-paper-2024-q27-30.ts';
import paper3132 from './sample-paper-2024-q31-32.ts';
import paper3334 from './sample-paper-2024-q33-34.ts';

const samplePaper2024: QuestionPaper = {
    name: 'Sample Paper 2024',
    questions: [
        ...paper1to16.questions,
        ...paper1720.questions,
        ...paper2122.questions,
        ...paper2326.questions,
        ...paper2730.questions,
        ...paper3132.questions,
        ...paper3334.questions,
    ],
};

export default samplePaper2024;