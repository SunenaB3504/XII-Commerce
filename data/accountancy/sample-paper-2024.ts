import { QuestionPaper } from '../../types';
import { questions1to10 } from './sample-paper-2024-q1-10';

import { questions11to15 } from './sample-paper-2024-q11-15';
import { questions16to20 } from './sample-paper-2024-q16-20';
import { questions21to25 } from './sample-paper-2024-q21-25';
import { questions26to30 } from './sample-paper-2024-q26-30';
import { questions31to34 } from './sample-paper-2024-q31-34';

export const samplePaper2024: QuestionPaper = {
    name: 'CBSE Sample Paper 2023-24',
    questions: [
        ...questions1to10,
        ...questions11to15,
        ...questions16to20,
        ...questions21to25,
        ...questions26to30,
        ...questions31to34,
    ],
};