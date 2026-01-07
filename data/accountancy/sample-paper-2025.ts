import { QuestionPaper } from '../../types';
import { questions1to10 } from './sample-paper-2025-q1-10.ts';

// import { questions11to15 } from './sample-paper-2025-q11-15';
// import { questions16to20 } from './sample-paper-2025-q16-20';
// import { questions21to25 } from './sample-paper-2025-q21-25';
// import { questions26to30 } from './sample-paper-2025-q26-30';
// import { questions31to34 } from './sample-paper-2025-q31-34';

export const samplePaper2025: QuestionPaper = {
    name: 'CBSE Sample Paper 2024-25',
    questions: [
        ...questions1to10,
        // ...questions11to15,
        // ...questions16to20,
        // ...questions21to25,
        // ...questions26to30,
        // ...questions31to34,
    ],
};
