# Content Contribution Guide

## Overview

This guide provides detailed instructions for adding new educational content to Neil's Commerce Prep. All contributions must follow the established data structure and formatting guidelines.

## Content Authenticity & Accuracy

### Verbatim Content Policy
- **Official CBSE Content**: All Sample Question Papers (SQP) and Marking Schemes (MS) must be maintained verbatim with official CBSE PDF files
- **Complete Accuracy**: Include all multiple choice options, OR parts, and detailed financial data exactly as published by CBSE
- **No Modifications**: Do not rephrase, abbreviate, or modify official CBSE content - maintain exact wording and formatting
- **Source Verification**: Always cross-reference with official CBSE PDFs before adding or updating content

### Content Sources
- **Primary Source**: Official CBSE Sample Question Papers and Marking Schemes (PDF format)
- **Raw Content Directory**: Extracted text from official PDFs stored in `RawContent/` directory for reference
- **Official Solutions**: Use CBSE marking schemes for all solutions and explanations

### Quality Standards
- **100% Accuracy**: Content must match official CBSE sources exactly
- **Complete Coverage**: All questions, options, and data must be included
- **Professional Format**: Maintain proper accounting and financial statement formatting
- **Educational Value**: Ensure solutions are comprehensive and follow CBSE standards

## Content Types

### Question Papers
Structured assessment materials with questions, solutions, and explanations.

### Learning Modules
Comprehensive study materials organized by chapters with concepts, examples, and case studies.

### Challenge Mode Papers
Interactive timed testing content using authentic CBSE Sample Question Papers (SQP) and Marking Schemes (MS) for comprehensive exam preparation.

## Adding Challenge Mode Papers

### Overview
Challenge Mode transforms official CBSE content into interactive 3-hour timed testing experiences. Content must be extracted verbatim from official CBSE SQP and MS PDFs to ensure authenticity and accuracy.

### Step 1: Content Source Verification
- **Official CBSE PDFs Only**: Use only official CBSE Sample Question Papers and Marking Schemes
- **Raw Content Reference**: Extract text from PDFs using the provided extraction tools
- **Year Coverage**: Create challenges for 5-year period (2021-2025) when available
- **Complete Accuracy**: Maintain exact wording, formatting, and solutions from official sources

### Step 2: Create Challenge Paper Structure

#### Main Challenge File
Create the main challenge file in the subject directory:

```
data/[subject]/[subject]-challenge-[year].ts
```

**Example Structure:**
```typescript
import { ChallengePaper } from '../../types';
import React from 'react';
import { questions17to22 } from './q17-22';
import { questions23to26 } from './q23-26';
import { questions27to34 } from './q27-34';

export const businessStudiesChallenge2025: ChallengePaper = {
  id: 'business-studies-challenge-2025',
  subject: 'Business Studies',
  year: 2025,
  title: 'CBSE Business Studies Challenge Paper 2025',
  timeLimit: 180, // 3 hours in minutes
  totalMarks: 80,
  questions: [
    // Questions 1-16: 1-mark MCQs (inline for better performance)
    {
      id: '1',
      number: 1,
      type: 'short',
      marks: 1,
      content: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold mb-4" }, "Question text from official CBSE SQP..."),
        React.createElement("ul", { className: "list-none pl-6 space-y-2" },
          React.createElement("li", null, "a) Option 1"),
          React.createElement("li", null, "b) Option 2"),
          React.createElement("li", null, "c) Option 3"),
          React.createElement("li", null, "d) Option 4")
        )
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-500" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Correct Answer"),
          React.createElement("p", { className: "font-semibold text-green-700" }, "a) Option 1"),
          React.createElement("h4", { className: "font-bold text-green-800 mt-4 mb-2" }, "Marking Scheme"),
          React.createElement("p", { className: "text-green-700" }, "1 mark for correct option selection")
        )
      ),
      metadata: {
        topic: 'Nature and Significance of Management',
        difficulty: 'easy',
        chapter: 1
      }
    },
    // ... questions 2-16

    // Questions 17-34: Spread from batch files
    ...questions17to22,
    ...questions23to26,
    ...questions27to34
  ],
  metadata: {
    source: 'CBSE Sample Paper 2025-26',
    markingScheme: 'CBSE Marking Scheme 2025-26',
    totalQuestions: 34,
    sections: [
      { name: 'Section A', questions: '1-16', marks: 1, totalMarks: 16 },
      { name: 'Section B', questions: '17-22', marks: 3, totalMarks: 18 },
      { name: 'Section C', questions: '23-26', marks: 4, totalMarks: 16 },
      { name: 'Section D', questions: '27-34', marks: 6, totalMarks: 30 }
    ]
  }
};
```

#### Batch Files for Large Questions
Create modular batch files for questions 17+ (3-mark and above):

```
data/[subject]/q[range].ts
```

**Example Batch File:**
```typescript
import { ChallengeQuestion } from '../../types';
import React from 'react';

export const questions17to22: ChallengeQuestion[] = [
  {
    id: '17',
    number: 17,
    type: 'short',
    marks: 3,
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-4" }, "Explain the concept of 'Management as an Art' with any three features.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("div", { className: "space-y-2" },
          React.createElement("p", null, React.createElement("strong", null, "Management as an Art has the following features:")),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, React.createElement("strong", null, "Personalized Application:")),
            React.createElement("li", null, React.createElement("strong", null, "Creativity:")),
            React.createElement("li", null, React.createElement("strong", null, "Practical Knowledge:"))
          )
        ),
        React.createElement("h4", { className: "font-bold text-blue-800 mt-4 mb-2" }, "Marking Scheme"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm" },
          React.createElement("ul", { className: "space-y-1" },
            React.createElement("li", null, "1 mark for each correct feature with explanation"),
            React.createElement("li", null, "Total: 3 marks")
          )
        )
      )
    ),
    metadata: {
      topic: 'Nature and Significance of Management',
      difficulty: 'medium',
      chapter: 1,
      subTopic: 'Management as Art'
    }
  },
  // ... questions 18-22
];
```

### Step 3: Content Formatting Guidelines

#### Question Content Structure
- **Exact CBSE Wording**: Copy questions verbatim from official SQP
- **Complete Options**: Include all multiple choice options (a, b, c, d)
- **OR Questions**: Include both parts of OR questions as separate entries
- **Financial Data**: Maintain exact numerical values and currency formatting

#### Solution Format by Question Type

**1-Mark MCQs (Q1-16)**:
- Green highlight box for correct answer
- Brief marking scheme reference
- Clear indication of correct option

**3/4/6-Mark Questions**:
- Blue highlight box for detailed answers
- Structured response format
- Complete marking scheme breakdown
- Step-by-step solutions for calculations
- Professional table formatting for financial statements

#### Table Formatting (Critical)
```typescript
// Journal Entry Table
React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
  React.createElement("thead", null,
    React.createElement("tr", null,
      React.createElement("th", { className: "border border-gray-300 p-2 font-bold bg-gray-100 text-gray-900" }, "Date"),
      React.createElement("th", { className: "border border-gray-300 p-2 font-bold bg-gray-100 text-gray-900" }, "Particulars"),
      React.createElement("th", { className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900" }, "Debit (₹)"),
      React.createElement("th", { className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900" }, "Credit (₹)")
    )
  ),
  React.createElement("tbody", null,
    React.createElement("tr", null,
      React.createElement("td", { className: "border border-gray-300 p-2" }, "2024-01-01"),
      React.createElement("td", { className: "border border-gray-300 p-2" }, "Cash A/c Dr."),
      React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "50,000"),
      React.createElement("td", { className: "border border-gray-300 p-2" }, "")
    )
  )
)
```

**Critical Table Rules:**
- Always include `text-gray-900` on colored backgrounds
- Right-align number columns with `text-right`
- Use proper header styling for visibility

### Step 4: Metadata and Classification

#### Question Metadata
```typescript
metadata: {
  topic: 'Nature and Significance of Management', // Main topic
  difficulty: 'easy' | 'medium' | 'hard',        // Based on CBSE classification
  chapter: 1,                                    // Chapter number
  subTopic: 'Management as Art'                  // Optional sub-topic
}
```

#### Difficulty Guidelines
- **Easy**: Direct recall, basic concepts (1-mark questions)
- **Medium**: Application, analysis (3-4 mark questions)
- **Hard**: Evaluation, complex calculations (6-mark questions)

#### Challenge Paper Metadata
```typescript
metadata: {
  source: 'CBSE Sample Paper 2025-26',
  markingScheme: 'CBSE Marking Scheme 2025-26',
  totalQuestions: 34,
  sections: [
    { name: 'Section A', questions: '1-16', marks: 1, totalMarks: 16 },
    { name: 'Section B', questions: '17-22', marks: 3, totalMarks: 18 },
    { name: 'Section C', questions: '23-26', marks: 4, totalMarks: 16 },
    { name: 'Section D', questions: '27-34', marks: 6, totalMarks: 30 }
  ]
}
```

### Step 5: Update Data Index

Add the new challenge paper to the subject's data in `data/index.ts`:

```typescript
import { businessStudiesChallenge2025 } from './business-studies/business-studies-challenge-2025';
// ... other imports

export const subjects: Subject[] = [
  {
    name: 'Business Studies',
    questionPapers: [
      // ... existing question papers
    ],
    learningModules: businessStudiesLearningModules,
    challengePapers: [
      businessStudiesChallenge2025,  // Add new challenge paper
      // Future: challenge2024, challenge2023, etc.
    ]
  },
  // ... other subjects
];
```

## Challenge Mode Quality Assurance

### Content Accuracy Checklist
- [ ] Questions copied verbatim from official CBSE SQP PDF
- [ ] Solutions follow official CBSE marking scheme exactly
- [ ] All options included for multiple choice questions
- [ ] Financial data and calculations match official sources
- [ ] OR questions included as separate entries
- [ ] No modifications to official content wording

### Technical Validation
- [ ] TypeScript compilation succeeds without errors
- [ ] All React elements properly formatted
- [ ] Question IDs are unique and sequential
- [ ] Marks allocation matches CBSE scheme
- [ ] Metadata fields complete and accurate
- [ ] Batch file imports working correctly

### Functional Testing
- [ ] Challenge loads in application interface
- [ ] Timer starts and counts down correctly
- [ ] Question navigation works properly
- [ ] Answer submission functions
- [ ] Solution reveal displays correctly
- [ ] Progress tracking updates accurately
- [ ] Results calculation produces valid scores

### Scoring Validation
- [ ] Answer evaluation matches marking scheme
- [ ] Partial credit awarded appropriately
- [ ] Performance analytics generate correctly
- [ ] Recommendations based on actual performance
- [ ] Difficulty classification accurate

## PDF Content Extraction Workflow

### Step 1: Prepare Source PDFs
- Obtain official CBSE SQP and MS PDFs
- Store in `RawContent/[Subject]/SQP/` and `RawContent/[Subject]/MS/` directories
- Name files clearly: `business-studies-sqp-2025.pdf`, `business-studies-ms-2025.pdf`

### Step 2: Extract Content
Use the provided Python extraction script:

```bash
# Extract SQP content
python scripts/extract_challenge_content.py "RawContent/BusinessStudies/SQP/business-studies-sqp-2025.pdf"

# Extract MS content
python scripts/extract_challenge_content.py "RawContent/BusinessStudies/MS/business-studies-ms-2025.pdf"
```

### Step 3: Process Extracted Text
- Review extracted text for accuracy
- Identify question boundaries and structure
- Map solutions to corresponding questions
- Note any formatting issues for manual correction

### Step 4: Create TypeScript Files
- Convert extracted content to React elements
- Apply proper formatting and styling
- Test rendering in development environment
- Validate against original PDF sources

## Maintenance and Updates

### Annual Content Updates
- Add new SQP content as CBSE releases them
- Maintain 5-year rolling archive (current year + 4 previous)
- Update metadata and classifications as needed
- Refresh difficulty assessments based on student performance

### Quality Monitoring
- Track student performance data for content improvement
- Identify commonly missed questions for review
- Update solutions based on CBSE clarifications
- Maintain consistency across year-over-year content

### Technical Maintenance
- Update type definitions as features evolve
- Optimize batch file loading for performance
- Enhance scoring algorithms based on feedback
- Improve content extraction tools

---

**Challenge Mode Content Standards:**
- **100% Authenticity**: Only official CBSE content accepted
- **Complete Accuracy**: Exact reproduction of SQP and MS
- **Educational Value**: Comprehensive solutions with marking schemes
- **Technical Quality**: Proper formatting and error-free code
- **Testing Ready**: Fully functional in Challenge Mode interface

## Adding Question Papers

### Step 1: Create Question Paper File

Create a new TypeScript file in the appropriate subject directory:

```
data/[subject]/[paper-name].ts
```

**File Naming Convention:**
- Sample Papers: `sample-paper-2025.ts`
- Board Exams: `board-exam-[set]-[question]-[variant].ts`
  - Example: `board-exam-67-3-1.ts`

### Step 2: Choose Approach (Single File vs Modular)

**For Small Papers** (< 25 questions): Use single file approach

**For Large Papers** (30+ questions): Use modular approach with batch files

#### Option A: Single File Approach

```typescript
import { QuestionPaper } from '../../types';
import React from 'react';

export const businessStudiesSamplePaper2025: QuestionPaper = {
  name: 'CBSE Sample Paper 2025-26',
  questions: [
    {
      id: '1',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Question text here..."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Option 1"),
          React.createElement("li", null, "b) Option 2"),
          React.createElement("li", null, "c) Option 3"),
          React.createElement("li", null, "d) Option 4")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" },
        "Correct Answer: a) Option 1"
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "Detailed explanation here...")
      )
    }
    // Add more questions...
  ]
};
```

#### Option B: Modular Approach (Recommended for 30+ Questions)

**Step 2a: Create Main File** (`sample-paper-2025.ts`)
```typescript
import { QuestionPaper } from '../../types';
import React from 'react';
import { questions17to20 } from './sample-paper-2025-q17-20';
import { questions21to22 } from './sample-paper-2025-q21-22';
import { questions23to26 } from './sample-paper-2025-q23-26';
import { questions27to34 } from './sample-paper-2025-q27-34';

export const accountancySamplePaper2025: QuestionPaper = {
  name: 'CBSE Sample Paper 2025-26',
  questions: [
    // Questions 1-16: 1-mark MCQs (inline in main file)
    {
      id: '1',
      marks: 1,
      question: React.createElement(...),
      solution: React.createElement(...),
      explanation: React.createElement(...)
    },
    // ... questions 2-16
    
    // Questions 17-34: Spread from batch files
    ...questions17to20,
    ...questions21to22,
    ...questions23to26,
    ...questions27to34
  ]
};
```

**Step 2b: Create Batch Files**

Create separate files for each batch (e.g., `sample-paper-2025-q17-20.ts`):

```typescript
import { Question } from '../../types';
import React from 'react';

export const questions17to20: Question[] = [
  {
    id: '17',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Question 17 text...")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Solution..."),
    explanation: React.createElement("p", null, "Explanation...")
  },
  {
    id: '17 (OR)',
    marks: 3,
    question: React.createElement(...),
    solution: React.createElement(...),
    explanation: React.createElement(...)
  },
  // ... questions 18-20
];
```

**Batch File Naming Guide:**
- Group by marks: `q17-20.ts` (3-mark questions)
- Group by section: `q27-34.ts` (Part B questions)
- Keep batches manageable (2-8 questions per file)
- Use descriptive names: `q23-26.ts` for 6-mark questions

**Benefits:**
- ✅ Files stay under 500 lines (easier to edit)
- ✅ Better version control and collaboration
- ✅ Reduced merge conflicts
- ✅ Faster navigation to specific questions
- ✅ Easier maintenance and updates

### Step 2c: Using Official CBSE Marking Schemes (Recommended)

When available, always reference official CBSE marking schemes for accuracy and completeness.

#### Extracting Content from Official PDFs

Use the PDF extraction tool to extract text from official CBSE marking scheme PDFs:

```bash
# From project root
python scripts/extract-pdf.py "path/to/Accountancy-MS.pdf"
```

This creates a text file with extracted content for easy reference.

#### Solution Format by Question Type

**1-Mark MCQs (Q1-16)**:
- Verify correct answer matches official answer key
- Include brief explanation of why it's correct
- Reference relevant concept or formula

**3-Mark Questions (Q17-20)**:
```typescript
{
  id: '17',
  marks: 3,
  question: React.createElement(...),
  solution: React.createElement(React.Fragment, null,
    React.createElement("h4", { className: "font-bold text-lg mb-2" }, "Journal Entry"),
    React.createElement("table", { className: "border-collapse border border-gray-300 w-full" },
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", {
            className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900"
          }, "Date"),
          React.createElement("th", {
            className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900"
          }, "Particulars"),
          React.createElement("th", {
            className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900"
          }, "Debit (₹)"),
          React.createElement("th", {
            className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900"
          }, "Credit (₹)")
        )
      ),
      React.createElement("tbody", null,
        React.createElement("tr", null,
          React.createElement("td", { className: "border border-gray-300 p-2" }, "2024-01-01"),
          React.createElement("td", { className: "border border-gray-300 p-2" }, "Cash A/c Dr."),
          React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "50,000"),
          React.createElement("td", { className: "border border-gray-300 p-2" }, "")
        )
      )
    ),
    React.createElement("div", { className: "mt-4" },
      React.createElement("h5", { className: "font-bold" }, "Working Notes:"),
      React.createElement("p", null, "Calculation details...")
    )
  ),
  explanation: React.createElement("p", null, "Step-by-step reasoning...")
}
```

**4-Mark Questions (Q21-22)** - Balance Sheets:
- Include complete balance sheet structure (Assets & Liabilities)
- Add working notes table for all calculations
- Show subtotals and final totals
- Use proper accounting headers

**6-Mark Questions (Q23-26)** - Complex Entries:
- Provide all 4 journal entries as per CBSE format
- Include loan accounts with interest calculations
- Show partner capital accounts in T-account format
- Provide detailed working notes for adjustments

**Part B Questions (Q27-34)** - Financial Analysis:
- Comparative statements with both years' data
- Common size statements with percentages
- Cash flow statements with operating/investing/financing activities
- Ratio calculations with formulas and interpretations

#### Table Formatting Rules - CRITICAL ⚠️

**Always include `text-gray-900` with colored backgrounds:**

```typescript
// ✅ CORRECT - Dark text on light background
className: "font-bold bg-gray-100 text-gray-900"

// ❌ WRONG - Missing text color, will be invisible
className: "font-bold bg-gray-100"
```

**Standard Table Classes:**
- **Headers**: `border border-gray-300 p-2 font-bold bg-gray-100 text-gray-900`
- **Subtotals**: `border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900`
- **Final Totals**: `border border-gray-300 p-2 font-bold bg-green-50 text-gray-900`
- **Number Columns**: Always add `text-right` for financial data

**Example - Proper Balance Sheet Table:**
```typescript
React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
  React.createElement("thead", null,
    React.createElement("tr", null,
      React.createElement("th", {
        // ✅ Header with dark text
        className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900"
      }, "Liabilities"),
      React.createElement("th", {
        className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900"
      }, "Amount (₹)")
    )
  ),
  React.createElement("tbody", null,
    // Regular row - no background color needed
    React.createElement("tr", null,
      React.createElement("td", { className: "border border-gray-300 p-2" }, "Capital"),
      React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "500,000")
    ),
    // Subtotal row - light gray background with dark text
    React.createElement("tr", null,
      React.createElement("td", {
        // ✅ Subtotal with dark text for visibility
        className: "border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900"
      }, "Total Current Liabilities"),
      React.createElement("td", {
        className: "border border-gray-300 p-2 text-right font-semibold bg-gray-50 text-gray-900"
      }, "1,200,000")
    ),
    // Final total row - light green background with dark text
    React.createElement("tr", null,
      React.createElement("td", {
        // ✅ Total with dark text on green background
        className: "border border-gray-300 p-2 font-bold bg-green-50 text-gray-900"
      }, "Total Liabilities"),
      React.createElement("td", {
        className: "border border-gray-300 p-2 text-right font-bold bg-green-50 text-gray-900"
      }, "2,500,000")
    )
  )
)
```

**Testing Table Visibility:**
Always view tables in browser to ensure:
- ✅ All header text is clearly visible (dark on light gray)
- ✅ All subtotal text is readable (dark on very light gray)
- ✅ All total text stands out (dark on light green)
- ✅ Numbers are right-aligned in amount columns

### Step 3: Update Subject Index

Add the new paper to the subject's question papers array in `data/index.ts`:

```typescript
import { businessStudiesSamplePaper2025 } from './business-studies/sample-paper-2025';
// ... other imports

export const subjects: Subject[] = [
  {
    name: 'Business Studies',
    questionPapers: [
      businessStudiesSamplePaper2025,  // Add new paper here
      // ... existing papers
    ],
    learningModules: businessStudiesLearningModules,
  },
  // ... other subjects
];
```

## Adding Learning Modules

### Step 1: Create Chapter File

Create a new file in the subject's learning-content directory:

```
data/learning-content/[subject]/chapter[number].ts
```

### Step 2: Implement Learning Module Structure

```typescript
import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Nature and Significance of Management",
  overview: "Brief introduction to the chapter covering key concepts and importance.",

  keyConcepts: [
    {
      title: "Effectiveness vs. Efficiency",
      content: React.createElement('p', null,
        "Effectiveness means completing tasks and achieving goals (doing the right things). " +
        "Efficiency means completing tasks with minimum resources (doing things right)."
      ),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, React.createElement('b', null, 'Effectiveness:'), ' Producing 100 shirts when target is 100 shirts'),
        React.createElement('li', null, React.createElement('b', null, 'Efficiency:'), ' Producing 100 shirts with minimal cloth and labor cost')
      ),
      mnemonic: "Effectiveness = Right Things, Efficiency = Things Right"
    }
    // Add more concepts...
  ],

  keywords: [
    { term: "Management", definition: "The process of planning, organizing, staffing, directing, and controlling organizational activities." },
    { term: "Effectiveness", definition: "Achieving organizational goals and objectives." },
    { term: "Efficiency", definition: "Using minimum resources to achieve maximum output." }
    // Add 5-10 keywords...
  ],

  caseStudies: [
    {
      title: "Manufacturing Excellence",
      scenario: "ABC Manufacturing aimed to produce 1000 units daily but was only achieving 800 units with high costs.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'The company focused on efficiency improvements:'),
        React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
          React.createElement('li', null, 'Streamlined production processes'),
          React.createElement('li', null, 'Reduced waste and optimized resource usage'),
          React.createElement('li', null, 'Achieved 1000 units with 20% cost reduction')
        ),
        React.createElement('p', { className: 'mt-2 font-semibold' }, 'Key Takeaway: Efficiency improvements can significantly enhance organizational performance.')
      )
    }
    // Add 1-3 case studies...
  ],

  quickRevision: React.createElement('ul', { className: 'list-disc pl-5 space-y-1' },
    React.createElement('li', null, React.createElement('b', null, 'Management:'), ' Process of achieving goals through coordinated efforts'),
    React.createElement('li', null, React.createElement('b', null, 'Effectiveness:'), ' Doing the right things to achieve goals'),
    React.createElement('li', null, React.createElement('b', null, 'Efficiency:'), ' Doing things right with minimum resources'),
    React.createElement('li', null, React.createElement('b', null, 'Characteristics:'), ' Goal-oriented, pervasive, multidimensional, continuous, dynamic')
  )
};
```

### Step 3: Update Learning Content Index

Add the new module to the subject's learning modules index:

```typescript
// data/learning-content/business-studies/index.ts
import { chapter1Module } from './chapter1';
// ... other imports

export const businessStudiesLearningModules: LearningModule[] = [
  chapter1Module,
  // ... other modules in order
];
```

## Content Formatting Guidelines

### Rich Text Formatting

#### Bold and Emphasis
```typescript
React.createElement("b", null, "important term")
React.createElement("em", null, "emphasized text")
```

#### Lists
```typescript
// Unordered list
React.createElement("ul", { className: "list-disc pl-5" },
  React.createElement("li", null, "First point"),
  React.createElement("li", null, "Second point")
)

// Ordered list
React.createElement("ol", { className: "list-decimal pl-5" },
  React.createElement("li", null, "First step"),
  React.createElement("li", null, "Second step")
)
```

#### Headings
```typescript
React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Section Title")
```

#### Code and Special Elements
```typescript
React.createElement("code", { className: "bg-slate-100 px-1 py-0.5 rounded" }, "code snippet")
```

### Mathematical Expressions
For mathematical content, use LaTeX-style formatting within text or create custom components.

### Tables
```typescript
React.createElement("table", { className: "border-collapse border border-slate-300 mt-4" },
  React.createElement("thead", null,
    React.createElement("tr", null,
      React.createElement("th", { className: "border border-slate-300 p-2" }, "Column 1"),
      React.createElement("th", { className: "border border-slate-300 p-2" }, "Column 2")
    )
  ),
  React.createElement("tbody", null,
    React.createElement("tr", null,
      React.createElement("td", { className: "border border-slate-300 p-2" }, "Data 1"),
      React.createElement("td", { className: "border border-slate-300 p-2" }, "Data 2")
    )
  )
)
```

## Quality Assurance Checklist

### Question Papers
- [ ] Question IDs are unique and sequential
- [ ] Marks are appropriate (1-6 for CBSE)
- [ ] Questions have clear, unambiguous wording
- [ ] Options are balanced and plausible
- [ ] Only one correct answer per question
- [ ] Solutions clearly indicate the correct answer
- [ ] Solutions follow official CBSE marking scheme format (when available)
- [ ] Explanations are comprehensive and educational
- [ ] Content aligns with CBSE syllabus
- [ ] No spelling or grammatical errors
- [ ] Tables include proper text colors (text-gray-900 on colored backgrounds)
- [ ] All financial tables tested for visibility in browser
- [ ] Number columns are right-aligned (text-right)
- [ ] Journal entries follow proper debit/credit format
- [ ] Balance sheets include working notes
- [ ] Financial statements have proper headers and subtotals

### Learning Modules
- [ ] Chapter number matches official syllabus
- [ ] Title accurately reflects chapter content
- [ ] Overview provides clear introduction
- [ ] Key concepts cover all important topics (3-8 concepts)
- [ ] Examples are relevant and illustrative
- [ ] Mnemonics are helpful and accurate
- [ ] Keywords include 5-10 important terms
- [ ] Case studies are practical and educational
- [ ] Quick revision summarizes key points
- [ ] Content is original or properly attributed

### Technical Validation
- [ ] TypeScript compilation succeeds
- [ ] All imports are correct
- [ ] Data structure matches type definitions
- [ ] React elements are properly formatted
- [ ] No console errors or warnings
- [ ] Content renders correctly in application

## Testing Your Contribution

### Manual Testing
1. Start the development server: `npm run dev`
2. Navigate to your new content
3. Verify all content displays correctly
4. Test interactive features (solution toggle, TTS)
5. Check responsive design on different screen sizes
6. **For tables**: Verify all text is visible (headers, subtotals, totals)
7. **For financial data**: Check number alignment (right-aligned)
8. **For journal entries**: Verify debit/credit columns are properly formatted

### Accessibility Testing
1. Test keyboard navigation
2. Verify screen reader compatibility
3. Check color contrast
4. Test text-to-speech functionality

### Content Review
1. Cross-reference with CBSE textbooks
2. Verify accuracy of solutions
3. Ensure educational value
4. Check for completeness

## Submission Process

### For Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/add-chapter-5-business-studies`
3. Add your content following the guidelines
4. Test thoroughly
5. Commit with clear message: `feat(content): add chapter 5 learning module for business studies`
6. Create pull request with description of changes

### Pull Request Requirements
- [ ] All quality checks pass
- [ ] Content is original or properly licensed
- [ ] Follows established formatting guidelines
- [ ] Includes appropriate tests
- [ ] Documentation updated if needed
- [ ] No breaking changes to existing functionality

## Content Maintenance

### Regular Updates
- Review content annually for syllabus changes
- Update examples to remain relevant
- Correct any identified errors
- Add new case studies periodically

### Version Control
- Content changes tracked in git
- Major updates tagged with version numbers
- Changelog maintained for significant changes

## Getting Help

### Common Issues
**TypeScript Errors**: Check type definitions in `types.ts`
**Import Errors**: Verify file paths and export statements
**Rendering Issues**: Test React element structure
**Styling Problems**: Follow design system guidelines

### Resources
- [CBSE Syllabus](https://cbse.nic.in/) - Official syllabus reference
- [Design System](./design-system.md) - UI guidelines
- [Data Structure](./data-structure.md) - Technical specifications

## Attribution

When using external content:
- Provide clear attribution
- Ensure licensing compatibility
- Cite sources appropriately
- Maintain academic integrity

**Last Updated:** January 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\content-contribution.md