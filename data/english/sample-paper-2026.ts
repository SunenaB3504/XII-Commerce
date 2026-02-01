import { QuestionPaper } from '../../types';
import { englishSamplePaper2026Batch1 } from './sample-paper-2026-batch-1';
import { englishSamplePaper2026Batch2 } from './sample-paper-2026-batch-2';
import { englishSamplePaper2026Batch3 } from './sample-paper-2026-batch-3';
import { englishSamplePaper2026Batch4 } from './sample-paper-2026-batch-4';
import { englishSamplePaper2026Batch5 } from './sample-paper-2026-batch-5';
import { englishSamplePaper2026Batch6 } from './sample-paper-2026-batch-6';
import { englishSamplePaper2026Batch7 } from './sample-paper-2026-batch-7';
import { englishSamplePaper2026Batch8 } from './sample-paper-2026-batch-8';

export const englishSamplePaper2026: QuestionPaper = {
    id: 'english-sample-paper-2026',
    name: 'CBSE Sample Paper 2025-26',
    year: '2025-26',
    subject: 'english',
    questions: [
        ...englishSamplePaper2026Batch1,
        ...englishSamplePaper2026Batch2,
        ...englishSamplePaper2026Batch3,
        ...englishSamplePaper2026Batch4,
        ...englishSamplePaper2026Batch5,
        ...englishSamplePaper2026Batch6,
        ...englishSamplePaper2026Batch7,
        ...englishSamplePaper2026Batch8,
    ],
};
