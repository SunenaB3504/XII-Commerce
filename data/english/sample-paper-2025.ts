import { QuestionPaper } from '../../types';
import { englishSamplePaper2025Batch1 } from './sample-paper-2025-batch-1';
import { englishSamplePaper2025Batch2 } from './sample-paper-2025-batch-2';
import { englishSamplePaper2025Batch3 } from './sample-paper-2025-batch-3';
import { englishSamplePaper2025Batch4 } from './sample-paper-2025-batch-4';
import { englishSamplePaper2025Batch5 } from './sample-paper-2025-batch-5';
import { englishSamplePaper2025Batch6 } from './sample-paper-2025-batch-6';
import { englishSamplePaper2025Batch7 } from './sample-paper-2025-batch-7';
import { englishSamplePaper2025Batch8 } from './sample-paper-2025-batch-8';

export const englishSamplePaper2025: QuestionPaper = {
    id: 'english-sample-paper-2025',
    name: 'CBSE Sample Paper 2024-25',
    year: '2024-25',
    subject: 'english',
    questions: [
        ...englishSamplePaper2025Batch1,
        ...englishSamplePaper2025Batch2,
        ...englishSamplePaper2025Batch3,
        ...englishSamplePaper2025Batch4,
        ...englishSamplePaper2025Batch5,
        ...englishSamplePaper2025Batch6,
        ...englishSamplePaper2025Batch7,
        ...englishSamplePaper2025Batch8,
    ],
};
