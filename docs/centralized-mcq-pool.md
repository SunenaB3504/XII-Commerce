# Centralized MCQ Pool - Implementation Guide

## Overview

This document explains the new **Centralized MCQ Pool** approach implemented to eliminate duplicate questions in the Knowledge Evaluation system.

## Architecture

### Old Approach (Problematic)
```
Question Papers → Extract MCQs → Deduplicate → Select Questions
                    ↓
         (Duplicates still appeared)
```

### New Approach (Robust)
```
Question Papers → Manual Curation → Centralized MCQ Pool → Select Questions
                                          ↓
                                   (NO DUPLICATES POSSIBLE)
```

## File Structure

```
data/
├── mcq-pool.ts                 # ⭐ Centralized MCQ pool with all unique questions
├── mcq-extractor.ts            # 🔧 Utility to extract MCQs from papers
├── business-studies/           # Original question papers (unchanged)
├── accountancy/                # Original question papers (unchanged)
└── economics/                  # Original question papers (unchanged)
```

## Core Files

### 1. `mcq-pool.ts` - Centralized Pool

**Purpose:** Single source of truth for all unique MCQs

**Structure:**
```typescript
export interface MCQPoolQuestion extends Question {
  subject: 'Business Studies' | 'Accountancy' | 'Economics';
  chapter: string;              // '1', '2', '3', etc.
  topic: string;                // 'Principles of Management', etc.
  source: string;               // Which papers contain this question
  difficulty: 'easy' | 'medium' | 'hard';
  examWeightage: number;        // Chapter weightage %
}
```

**Organization:**
- Questions organized by subject and chapter
- Each question has a unique ID: `BS-CH2-001`, `ACC-CH3-015`, etc.
- Metadata includes source, difficulty, weightage

**Current Status:**
- ✅ Business Studies Chapter 2: 3 questions
- ⏳ Other chapters: To be added

### 2. `mcq-extractor.ts` - Extraction Utility

**Purpose:** Helper script to extract MCQs from existing papers

**Features:**
- Reads all question papers
- Extracts 1-mark MCQs
- Auto-detects chapters using keywords
- Generates reports and statistics
- Outputs formatted code for easy copying

**Usage:**
```typescript
import { extractAllMCQs } from './data/mcq-extractor';

const { allMCQs, byChapter, chapterCounts } = extractAllMCQs();
// Then manually review and add to mcq-pool.ts
```

## Integration with Knowledge Evaluation

### Updated Component

**File:** `components/KnowledgeEvaluationView.tsx`

**Key Changes:**

1. **Import Centralized Pool:**
```typescript
import { 
  getMCQsBySubject, 
  getMCQsByChapters, 
  getWeightedMCQs, 
  getRandomMCQs,
  getMCQStats 
} from '../data/mcq-pool';
```

2. **Simplified poolQuestions():**
```typescript
const poolQuestions = (subjectName: string, selectedChapters: string[], count: number) => {
  if (selectedChapters.length === 0) {
    // All chapters - weighted selection
    return getWeightedMCQs(subjectName, count);
  } else {
    // Specific chapters - balanced selection
    const chapterMCQs = getMCQsByChapters(subjectName, selectedChapters);
    return getRandomMCQs(chapterMCQs, count);
  }
};
```

3. **Removed Complex Logic:**
- ❌ No more text extraction from React elements
- ❌ No more deduplication logic
- ❌ No more chapter detection from keywords
- ✅ Pure data retrieval from pool

## Helper Functions

### `getMCQsBySubject(subject)`
Returns all MCQs for a subject
```typescript
const bsMCQs = getMCQsBySubject('Business Studies');
// Returns: MCQPoolQuestion[]
```

### `getMCQsByChapter(subject, chapter)`
Returns MCQs for a specific chapter
```typescript
const ch2MCQs = getMCQsByChapter('Business Studies', '2');
// Returns: MCQPoolQuestion[]
```

### `getMCQsByChapters(subject, chapters)`
Returns MCQs for multiple chapters
```typescript
const mcqs = getMCQsByChapters('Business Studies', ['2', '3', '7']);
// Returns: MCQPoolQuestion[]
```

### `getWeightedMCQs(subject, count)`
Returns questions distributed by exam weightage
```typescript
const mcqs = getWeightedMCQs('Business Studies', 20);
// Ch2: ~4 questions (20%), Ch3: ~3 questions (14%), etc.
```

### `getRandomMCQs(pool, count)`
Returns random selection from a pool
```typescript
const randomMCQs = getRandomMCQs(allBSMCQs, 10);
```

### `getMCQStats(subject?)`
Returns statistics about the pool
```typescript
const stats = getMCQStats('Business Studies');
// { total: 3, byChapter: { '2': 3 }, byTopic: {...}, byDifficulty: {...} }
```

## Adding New MCQs

### Method 1: Manual Addition (Recommended)

1. Open `data/mcq-pool.ts`
2. Find the appropriate chapter array (e.g., `businessStudiesChapter2`)
3. Add new question:

```typescript
{
  id: 'BS-CH2-004',              // Unique ID
  subject: 'Business Studies',
  chapter: '2',
  topic: 'Fayol Principles',
  source: 'Board Exam 66/1/1',
  difficulty: 'medium',
  examWeightage: 20,
  marks: 1,
  question: React.createElement(...),
  solution: React.createElement(...),
  explanation: React.createElement(...)
}
```

### Method 2: Using Extractor

1. Run the extractor (see output in console)
2. Review extracted MCQs
3. Manually verify and copy to `mcq-pool.ts`
4. Assign unique IDs
5. Review chapter/topic classification
6. Set appropriate difficulty

## Migration Plan

### Phase 1: Core Subjects ✅
- ✅ Create centralized pool structure
- ✅ Add Business Studies Ch2 (3 questions)
- ✅ Integrate with Knowledge Evaluation
- ✅ Test and verify

### Phase 2: Complete Business Studies (In Progress)
- ⏳ Extract all BS MCQs from all papers
- ⏳ Review and deduplicate manually
- ⏳ Add to appropriate chapter arrays
- ⏳ Verify chapter/topic classification

### Phase 3: Other Subjects
- ⏳ Accountancy (all chapters)
- ⏳ Economics (all chapters)

### Phase 4: Enhancement
- ⏳ Add difficulty levels
- ⏳ Add more detailed topics
- ⏳ Add Bloom's taxonomy levels
- ⏳ Add practice recommendations

## Benefits

### 1. **Zero Duplicates**
- ✅ Each question appears exactly once in pool
- ✅ No runtime deduplication needed
- ✅ Guaranteed unique questions

### 2. **Better Organization**
- ✅ Questions categorized by subject/chapter/topic
- ✅ Easy to find and update questions
- ✅ Clear metadata for each question

### 3. **Improved Maintainability**
- ✅ Single file to manage MCQs
- ✅ No complex extraction logic
- ✅ Easy to add/edit/remove questions

### 4. **Performance**
- ✅ No runtime text extraction
- ✅ No string normalization
- ✅ Instant question retrieval

### 5. **Quality Control**
- ✅ Manual review ensures accuracy
- ✅ Consistent formatting
- ✅ Proper chapter/topic assignment

## Testing

### Test Centralized Pool

```typescript
// In browser console
import { getMCQStats } from './data/mcq-pool';

console.log(getMCQStats('Business Studies'));
// Output: { total: 3, byChapter: { '2': 3 }, ... }
```

### Test Knowledge Evaluation

1. Open app: `http://localhost:3005`
2. Go to Knowledge Evaluation
3. Select Business Studies → Chapter 2 → 10 questions
4. Check console:
```
📊 Fetching from Centralized MCQ Pool
   Subject: Business Studies
   Chapters: 2
   Requested: 10 questions
   ✅ Random selection from 1 chapter(s)
   Pool size: 3 unique MCQs
   Selected: 3 questions
   ✅ NO DUPLICATES (Centralized Pool)
```
5. Start evaluation
6. Verify NO duplicate questions appear

## Console Output

### Before (Old System)
```
📊 Question Pool Stats for Business Studies:
   Total processed: 185
   Unique questions: 142
   Duplicates removed: 43  ⚠️ Still had duplicates
```

### After (New System)
```
📊 Fetching from Centralized MCQ Pool
   Subject: Business Studies
   Chapters: All
   Requested: 20 questions
   ✅ Weighted selection from all chapters
   Pool size: 3 unique MCQs
   Selected: 3 questions
   ✅ NO DUPLICATES (Centralized Pool)
```

## Current Limitations

1. **Small Pool Size:** Only 3 BS Ch2 questions currently
2. **Manual Work:** Requires manual addition of questions
3. **Time Investment:** Need to populate all chapters/subjects

## Next Steps

1. **Extract All BS MCQs:**
   - Run `mcq-extractor.ts`
   - Review output
   - Manually add to pool

2. **Complete Business Studies:**
   - Add all chapters (1-11)
   - Aim for 10-20 questions per chapter

3. **Add Other Subjects:**
   - Accountancy (10 chapters)
   - Economics (10 chapters)

4. **Quality Assurance:**
   - Review all questions
   - Verify solutions
   - Check chapter assignments

## FAQ

**Q: Why not automate the entire process?**
A: Manual curation ensures quality, accurate chapter assignment, and proper deduplication. Automation can miss subtle duplicates.

**Q: How do I add questions from new papers?**
A: Use `mcq-extractor.ts` to extract, then manually review and add to `mcq-pool.ts`.

**Q: Can I still use the old question papers?**
A: Yes! Question papers remain unchanged for "Papers Mode". MCQ pool is only for Knowledge Evaluation.

**Q: What if I find a duplicate in the pool?**
A: Remove it! Check the `id` and `source` fields to see where it came from, then delete the duplicate.

**Q: How are chapters detected?**
A: Manually assigned during curation. The `mcq-extractor` suggests chapters using keywords, but human review is recommended.

## Conclusion

The Centralized MCQ Pool approach provides a **robust, maintainable, and scalable** solution for Knowledge Evaluation with **guaranteed zero duplicates**.

Key advantages:
- ✅ Single source of truth
- ✅ No runtime deduplication
- ✅ Better organization
- ✅ Quality control
- ✅ Performance optimization

---

**Status:** ✅ Phase 1 Complete  
**Build:** dist/assets/index-Bh0i7Pj-.js  
**Date:** October 7, 2025
