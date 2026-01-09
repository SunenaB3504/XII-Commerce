import { QuestionPaper } from '../../types';
import { samplePaper2023Q1To10 } from './sample-paper-2023-q1-10';
import { samplePaper2023Q11To20 } from './sample-paper-2023-q11-20';
import { samplePaper2023Q21To25 } from './sample-paper-2023-q21-25';
import { samplePaper2023Q26To30 } from './sample-paper-2023-q26-30';
import { samplePaper2023Q31To34 } from './sample-paper-2023-q31-34';

export const businessStudiesSamplePaper2023: QuestionPaper = {
    name: "CBSE Sample Paper 2022-23",
    questions: [
        ...samplePaper2023Q1To10,
        ...samplePaper2023Q11To20,
        ...samplePaper2023Q21To25,
        ...samplePaper2023Q26To30,
        ...samplePaper2023Q31To34
    ]
};
