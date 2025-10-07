/**
 * MCQ Extractor Utility
 * 
 * This script helps extract 1-mark MCQs from existing question papers
 * and convert them into the standardized MCQ pool format.
 * 
 * Usage: Run this script and it will generate formatted MCQ objects
 * that can be copy-pasted into mcq-pool.ts
 */

import { businessStudiesSamplePaper2025 } from './business-studies/sample-paper-2025';
import { businessStudiesChallenge2025 } from './business-studies/business-studies-challenge-2025';
import { businessStudiesBoardExam66_1_1 } from './business-studies/board-exam-66-1-1';
import { businessStudiesBoardExam66_1_2 } from './business-studies/board-exam-66-1-2';
import { businessStudiesBoardExam66_5_3 } from './business-studies/board-exam-66-5-3';
import { businessStudiesBoardExam66_5_3_Term2 } from './business-studies/board-exam-66-5-3-term2';
import { businessStudiesBoardExam66_7_3 } from './business-studies/board-exam-66-7-3';

// Extract text from React element (simple version for console output)
const extractSimpleText = (element: any): string => {
  if (typeof element === 'string') return element;
  if (typeof element === 'number') return element.toString();
  if (!element) return '';
  
  if (element.props && element.props.children) {
    if (Array.isArray(element.props.children)) {
      // Only take first child (question text, skip options)
      const firstChild = element.props.children[0];
      return extractSimpleText(firstChild);
    }
    return extractSimpleText(element.props.children);
  }
  
  return '';
};

// Detect chapter from question text
const detectChapter = (text: string): string => {
  const lower = text.toLowerCase();
  
  if (lower.includes('nature') && lower.includes('significance') || lower.includes('introduction')) return '1';
  if (lower.includes('principles') && lower.includes('management') || lower.includes('fayol') || lower.includes('henri fayol') || lower.includes('taylor')) return '2';
  if (lower.includes('business environment') || lower.includes('external environment') || lower.includes('economic environment')) return '3';
  if (lower.includes('planning') && !lower.includes('financial')) return '4';
  if (lower.includes('organising') || lower.includes('organizing') || (lower.includes('organisation') && !lower.includes('international'))) return '5';
  if (lower.includes('staffing') || lower.includes('recruitment') || lower.includes('selection') || lower.includes('training')) return '6';
  if (lower.includes('directing') || lower.includes('motivation') || lower.includes('leadership') || lower.includes('communication')) return '7';
  if (lower.includes('controlling') || (lower.includes('control') && !lower.includes('consumer'))) return '8';
  if (lower.includes('financial management') || (lower.includes('capital') && !lower.includes('market'))) return '9';
  if (lower.includes('financial market') || lower.includes('money market') || lower.includes('capital market')) return '10';
  if (lower.includes('marketing') || lower.includes('consumer') || lower.includes('protection') || lower.includes('right')) return '11';
  
  return 'Unknown';
};

// Extract all 1-mark MCQs from a paper
const extractMCQs = (paper: any, paperName: string) => {
  const mcqs: any[] = [];
  
  paper.questions.forEach((q: any) => {
    if (q.marks === 1) {
      const questionText = extractSimpleText(q.question);
      const chapter = detectChapter(questionText);
      
      mcqs.push({
        originalId: q.id,
        paperName,
        chapter,
        questionText: questionText.substring(0, 100) + '...',
        fullQuestion: q.question,
        solution: q.solution,
        explanation: q.explanation
      });
    }
  });
  
  return mcqs;
};

// Main extraction
export const extractAllMCQs = () => {
  console.log('=== MCQ Extraction Report ===\n');
  
  const papers = [
    { paper: businessStudiesSamplePaper2025, name: 'Sample Paper 2025' },
    { paper: businessStudiesChallenge2025, name: 'Challenge 2025' },
    { paper: businessStudiesBoardExam66_1_1, name: 'Board Exam 66/1/1' },
    { paper: businessStudiesBoardExam66_1_2, name: 'Board Exam 66/1/2' },
    { paper: businessStudiesBoardExam66_5_3, name: 'Board Exam 66/5/3' },
    { paper: businessStudiesBoardExam66_5_3_Term2, name: 'Board Exam 66/5/3 Term2' },
    { paper: businessStudiesBoardExam66_7_3, name: 'Board Exam 66/7/3' }
  ];
  
  const allMCQs: any[] = [];
  const chapterCounts: { [key: string]: number } = {};
  
  papers.forEach(({ paper, name }) => {
    const mcqs = extractMCQs(paper, name);
    console.log(`${name}: ${mcqs.length} MCQs found`);
    
    mcqs.forEach(mcq => {
      chapterCounts[mcq.chapter] = (chapterCounts[mcq.chapter] || 0) + 1;
    });
    
    allMCQs.push(...mcqs);
  });
  
  console.log(`\nTotal MCQs: ${allMCQs.length}`);
  console.log('\nBreakdown by Chapter:');
  Object.entries(chapterCounts).sort(([a], [b]) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return parseInt(a) - parseInt(b);
  }).forEach(([chapter, count]) => {
    console.log(`  Chapter ${chapter}: ${count} questions`);
  });
  
  // Group by chapter for easy copying
  const byChapter: { [key: string]: any[] } = {};
  allMCQs.forEach(mcq => {
    if (!byChapter[mcq.chapter]) byChapter[mcq.chapter] = [];
    byChapter[mcq.chapter].push(mcq);
  });
  
  return { allMCQs, byChapter, chapterCounts };
};

// Run extraction if this is executed directly
if (typeof window === 'undefined') {
  extractAllMCQs();
}
