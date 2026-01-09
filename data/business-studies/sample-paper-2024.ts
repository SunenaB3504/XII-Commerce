import { QuestionPaper } from '../../types';
import { samplePaper2024Q1To10 } from './sample-paper-2024-q1-10';
import { samplePaper2024Q11To20 } from './sample-paper-2024-q11-20';
import { samplePaper2024Q21To25 } from './sample-paper-2024-q21-25';
import { samplePaper2024Q26To30 } from './sample-paper-2024-q26-30';
import { samplePaper2024Q31To34 } from './sample-paper-2024-q31-34';

export const businessStudiesSamplePaper2024: QuestionPaper = {
    name: 'CBSE Sample Paper 2023-24',
    questions: [
        ...samplePaper2024Q1To10,
        ...samplePaper2024Q11To20,
        ...samplePaper2024Q21To25,
        ...samplePaper2024Q26To30,
        ...samplePaper2024Q31To34
    ]
};
