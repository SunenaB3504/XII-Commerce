#!/usr/bin/env node
/*
  scripts/sync-sqp.js
  Usage: node scripts/sync-sqp.js path/to/Accountancy-SQP-2023-extracted.txt

  What it does:
  - Reads the SQP extracted text file (plain text) provided by the user.
  - Heuristically parses it into question blocks by question number.
  - Searches the repository for tokens like [[SQP_Q7_MISSING]] and replaces them with the verbatim question text from the SQP extraction.
  - Writes backups of modified files (*.bak) and prints a summary of replacements.

  Notes:
  - The SQP extraction must include question numbering (e.g. "1.", "2.", "Question 3", or "Q4" at the start of lines) for reliable parsing.
  - This script is conservative and will only replace exact tokens of the pattern [[SQP_Q<id>_MISSING]] or [[SQP_Q<id>_MISSING_OPTIONS]].
  - Always review the changed files and run the project's TypeScript checks after running this script.
*/

const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/sync-sqp.js path/to/Accountancy-SQP-2023-extracted.txt');
  process.exit(1);
}

const sqpPath = path.resolve(process.argv[2]);
if (!fs.existsSync(sqpPath)) {
  console.error('SQP extraction file not found:', sqpPath);
  process.exit(2);
}

const sqpText = fs.readFileSync(sqpPath, 'utf8');

// Heuristic: split by question numbers like "1.", "2.", or "Question 1", "Q1".
const questionBlocks = new Map();

// Try to find blocks using regex that matches a question number at line start.
const lines = sqpText.split(/\r?\n/);
let currentQ = null;
let buffer = [];
for (let i = 0; i < lines.length; i++) {
  const L = lines[i];
  const m1 = L.match(/^\s*(?:Question\s*)?(?:Q\s*|)(\d{1,2})(?:[\.|\)]|\s|:)/i);
  const m2 = L.match(/^\s*(\d{1,2})[\.|\)]\s+/);
  if (m1) {
    // commit previous
    if (currentQ) {
      questionBlocks.set(currentQ, buffer.join('\n').trim());
    }
    currentQ = parseInt(m1[1], 10);
    buffer = [L.replace(/^\s*(?:Question\s*)?(?:Q\s*|)(\d{1,2})(?:[\.|\)]|\s|:)/i, '').trim()];
  } else if (m2) {
    if (currentQ) {
      questionBlocks.set(currentQ, buffer.join('\n').trim());
    }
    currentQ = parseInt(m2[1], 10);
    buffer = [L.replace(/^\s*(\d{1,2})[\.|\)]\s+/, '').trim()];
  } else {
    if (currentQ) buffer.push(L);
  }
}
if (currentQ) questionBlocks.set(currentQ, buffer.join('\n').trim());

if (questionBlocks.size === 0) {
  console.error('No question blocks found in the provided SQP text. Ensure the file includes numbered question headings.');
  process.exit(3);
}

console.log('Parsed', questionBlocks.size, 'question blocks from SQP extraction.');

// Find files to search: all sample-paper-2023 files under data/accountancy
function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) results.push(...walk(filePath));
    else results.push(filePath);
  });
  return results;
}

const repoRoot = path.resolve(__dirname, '..');
const dataDir = path.join(repoRoot, 'data', 'accountancy');
if (!fs.existsSync(dataDir)) {
  console.error('Expected data/accountancy folder not found in repository root');
  process.exit(4);
}

const candidateFiles = walk(dataDir).filter(f => f.endsWith('.ts') && f.includes('sample-paper-2023'));
if (candidateFiles.length === 0) {
  console.error('No sample-paper-2023 files found to patch.');
  process.exit(5);
}

const tokenRegex = /\[\[SQP_Q(\d{1,2})_MISSING(?:_OPTIONS|)\]\]/g;
let totalReplacements = 0;

for (const filePath of candidateFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(tokenRegex)];
  if (matches.length === 0) continue;

  let newContent = content;
  for (const m of matches) {
    const qid = parseInt(m[1], 10);
    const sqpBlock = questionBlocks.get(qid);
    if (!sqpBlock) {
      console.warn(`SQP text for question ${qid} not found — skipping token in ${filePath}`);
      continue;
    }
    // Prepare JS-safe literal for insertion: escape backticks and $ sequences
    const safeBlock = sqpBlock.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    // Replace token with a template literal string inside a React element. We'll insert as a single line string in the file
    // Find the token and replace with the block wrapped in backticks
    const replacement = '`' + safeBlock + '`';
    newContent = newContent.replace(`[[SQP_Q${qid}_MISSING]]`, replacement);
    totalReplacements += 1;
    console.log(`Will replace token for Q${qid} in ${path.relative(repoRoot, filePath)}`);
  }

  if (newContent !== content) {
    // write backup
    fs.writeFileSync(filePath + '.bak', content, 'utf8');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Patched', path.relative(repoRoot, filePath), ' — backup saved as .bak');
  }
}

console.log('Total replacements performed:', totalReplacements);
console.log('Done. Please run TypeScript checks and review the modified files.');
