// MCQ Extraction Script
// Run this script in Node.js to extract MCQs from all board exam and sample paper files and save as JSON in the jsondata folder

const fs = require('fs');
const path = require('path');

const subjects = [
  {
    name: 'Business Studies',
    files: [
      'data/business-studies/board-exam-66-7-3.ts',
      'data/business-studies/board-exam-66-5-3.ts',
      'data/business-studies/board-exam-66-5-3-term2.ts',
      'data/business-studies/board-exam-66-1-2.ts',
      'data/business-studies/board-exam-66-1-1.ts',
      'data/business-studies/sample-paper-2025.ts'
    ],
    output: 'jsondata/business-studies-mcqs.json'
  },
  {
    name: 'Accountancy',
    files: [
      'data/accountancy/board-exam-67-5-3.ts',
      'data/accountancy/board-exam-67-4-3.ts',
      'data/accountancy/board-exam-67-4-1.ts',
      'data/accountancy/board-exam-67-3-1.ts',
      'data/accountancy/sample-paper-2025.ts'
    ],
    output: 'jsondata/accountancy-mcqs.json'
  },
  {
    name: 'Economics',
    files: [
      'data/economics/board-exam-58-7-3.ts',
      'data/economics/board-exam-58-5-3.ts',
      'data/economics/board-exam-58-5-2.ts',
      'data/economics/board-exam-58-5-1-term.ts',
      'data/economics/board-exam-58-4-3.ts',
      'data/economics/board-exam-58-3-3.ts',
      'data/economics/sample-paper-2025.ts'
    ],
    output: 'jsondata/economics-mcqs.json'
  }
];

function extractMCQsFromFile(tsFilePath) {
  // This function should parse the TypeScript file and extract MCQs
  // For now, it returns an empty array as a placeholder
  // You can use a TypeScript parser or regex to extract the questions array
  return [];
}

subjects.forEach(subject => {
  let allMCQs = [];
  subject.files.forEach(tsFile => {
    const absPath = path.join(__dirname, tsFile);
    if (fs.existsSync(absPath)) {
      const mcqs = extractMCQsFromFile(absPath);
      allMCQs = allMCQs.concat(mcqs);
    }
  });
  fs.writeFileSync(path.join(__dirname, subject.output), JSON.stringify(allMCQs, null, 2));
  console.log(`Extracted ${allMCQs.length} MCQs for ${subject.name} to ${subject.output}`);
});

console.log('MCQ extraction complete.');
