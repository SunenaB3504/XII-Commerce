import { QuestionPaper } from '../../types';
import React from 'react';
import { samplePaper2026Q1To10 } from './sample-paper-2026-q1-10';
import { samplePaper2026Q11To20 } from './sample-paper-2026-q11-20';
import { samplePaper2026Q21To25 } from './sample-paper-2026-q21-25';
import { samplePaper2026Q26To30 } from './sample-paper-2026-q26-30';
import { samplePaper2026Q31To34 } from './sample-paper-2026-q31-34';

export const businessStudiesSamplePaper2026: QuestionPaper = {
    name: 'CBSE Sample Paper 2025-26',
    questions: [
        ...samplePaper2026Q1To10,
        ...samplePaper2026Q11To20,
        ...samplePaper2026Q21To25,
        ...samplePaper2026Q26To30,
        ...samplePaper2026Q31To34,
    ]
};
