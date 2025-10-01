# Data Structure & Content Organization

## Overview

The application uses a structured TypeScript-based data system to organize educational content. All content is statically typed and modularized for maintainability and scalability.

## Core Type Definitions

### Question Interface
```typescript
interface Question {
  id: string;              // Unique identifier (e.g., "1", "2a", "3b")
  marks: number;           // Question marks (1-6 typically)
  question: ReactNode;     // Rich content with formatting
  solution: ReactNode;     // Correct answer display
  explanation: ReactNode;  // Detailed explanation
}
```

### QuestionPaper Interface
```typescript
interface QuestionPaper {
  name: string;           // Display name (e.g., "CBSE Sample Paper 2025-26")
  questions: Question[];  // Array of questions
}
```

### Learning Module Interfaces
```typescript
interface Concept {
  title: string;          // Concept name
  content: ReactNode;     // Main explanation (supports rich JSX)
  examFocus?: boolean;    // Exam importance flag (shows EXAM FOCUS badge)
  mnemonic?: string;      // Memory aid for retention
  example?: ReactNode;    // Illustrative example (changed from string to ReactNode for rich content)
}

interface CaseStudy {
  title: string;          // Case study title
  scenario: string;       // Situation description (plain text)
  analysis: ReactNode;    // Analysis and takeaways (supports rich JSX)
}

interface LearningModule {
  chapter: string;        // Chapter number as string (e.g., "1", "2", "10")
  title: string;          // Chapter title (e.g., "Nature and Significance of Management")
  overview: string;       // Brief introduction (plain text, read by TTS)
  keyConcepts: Concept[]; // Array of 3-8 concepts per chapter
  keywords: Array<{       // Glossary terms (5-10 terms recommended)
    term: string;         // Technical term or vocabulary
    definition: string;   // Clear, concise definition
  }>;
  caseStudies: CaseStudy[]; // Practical examples (1-3 per chapter)
  quickRevision: ReactNode; // Summary content for rapid review (supports rich JSX)
  subject?: string;       // Subject name (optional, for reference)
}
```

### Subject Interface
```typescript
interface Subject {
  name: string;                    // Subject name
  questionPapers: QuestionPaper[]; // Available papers
  learningModules?: LearningModule[]; // Optional learning content
}
```

## File Organization

### Directory Structure
```
data/
├── index.ts                    # Central data aggregation
├── [subject]/                  # Subject-specific papers
│   ├── sample-paper-2025.ts    # Main file (imports + Q1-16 for modular papers)
│   ├── sample-paper-2025-q17-20.ts  # Batch file for questions 17-20
│   ├── sample-paper-2025-q21-22.ts  # Batch file for questions 21-22
│   ├── sample-paper-2025-q23-26.ts  # Batch file for questions 23-26
│   ├── sample-paper-2025-q27-34.ts  # Batch file for questions 27-34
│   ├── board-exam-[code].ts
│   └── ...
├── learning-content/
│   └── [subject]/
│       ├── chapter1.ts
│       ├── chapter2.ts
│       └── ...
└── types.ts                    # Type definitions (root level)
```

### Modular Question Papers (New Approach)

For large question papers (30+ questions), use a modular approach to improve maintainability:

#### Official CBSE Marking Scheme Integration

**CBSE Sample Paper 2025-26 (Accountancy)** follows the official marking scheme with comprehensive solutions:

**Solution Structure by Question Type:**
- **MCQs (Q1-16)**: Verified correct answers matching official answer key
- **3-Mark Questions (Q17-20)**: 
  - Journal entries with proper date, particulars, debit/credit columns
  - Working notes showing detailed calculations (goodwill, ratios, adjustments)
  - Step-by-step explanations with formulas and reasoning
- **4-Mark Questions (Q21-22)**:
  - Complete balance sheets with assets and liabilities sections
  - Working notes tables for calculations (depreciation, provisions, capital)
  - Proper accounting format with headers and subtotals
- **6-Mark Questions (Q23-26)**:
  - Business acquisition journal entries (4 entries minimum)
  - Loan accounts with interest calculations
  - Partner capital accounts in T-account format
  - Detailed working notes for all adjustments
- **Part B Questions (Q27-34)**:
  - Comparative statements (horizontal analysis)
  - Common size statements (vertical analysis)
  - Cash flow statements with detailed working
  - Ratio calculations with interpretations

**Table Formatting Standards** (Critical for Visibility):
```typescript
// Table Headers - Must have dark text on light gray background
{ content: "Particulars", className: "font-bold text-left bg-gray-100 text-gray-900" }

// Subtotal Rows - Must have dark text for visibility
{ content: "Total Current Assets", className: "font-semibold bg-gray-50 text-gray-900" }

// Final Total Rows - Must have dark text on light green background
{ content: "Profit After Tax", className: "font-bold bg-green-50 text-gray-900" }

// Regular Data Cells
{ content: "500,000", className: "text-right" }
```

**Common Table Styling Issues & Fixes:**
- ❌ **Problem**: `bg-gray-100` without text color → White text invisible on light gray
- ✅ **Solution**: Always add `text-gray-900` to headers with colored backgrounds
- ❌ **Problem**: `font-semibold bg-gray-50` → Inherits light text color
- ✅ **Solution**: Explicitly set `text-gray-900` for all semibold rows
- ❌ **Problem**: `bg-green-50` totals invisible
- ✅ **Solution**: Add `text-gray-900` to maintain contrast

**Color Specifications for Tables:**
- `text-gray-900`: #111827 (very dark gray, excellent contrast on light backgrounds)
- `bg-gray-100`: #F3F4F6 (light gray for headers)
- `bg-gray-50`: #F9FAFB (very light gray for subtotals)
- `bg-green-50`: #F0FDF4 (very light green for final totals)

#### Modular File Structure

**Main File Structure** (`sample-paper-2025.ts`):
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
    // Questions 1-16: 1-mark MCQs (inline for main file)
    { id: '1', marks: 1, question: ..., solution: ..., explanation: ... },
    // ... questions 2-16
    
    // Questions 17-34: Imported from batch files
    ...questions17to20,
    ...questions21to22,
    ...questions23to26,
    ...questions27to34
  ]
};
```

**Batch File Structure** (`sample-paper-2025-q17-20.ts`):
```typescript
import { Question } from '../../types';
import React from 'react';

export const questions17to20: Question[] = [
  {
    id: '17',
    marks: 3,
    question: React.createElement(...),
    solution: React.createElement(...),
    explanation: React.createElement(...)
  },
  // ... questions 18-20
];
```

**Benefits of Modular Approach:**
- **Manageable File Sizes**: Each file stays under 500 lines
- **Better Version Control**: Easier to track changes in specific question ranges
- **Team Collaboration**: Multiple contributors can work on different batches simultaneously
- **Reduced Merge Conflicts**: Changes in one batch don't affect others
- **Easier Maintenance**: Quickly locate and update specific questions

### Naming Conventions

#### Question Papers
- **Sample Papers**: `sample-paper-2025.ts` (main file)
- **Sample Paper Batches** (for modular papers): `sample-paper-2025-q[range].ts`
  - Example: `sample-paper-2025-q17-20.ts` (Questions 17-20, 3-mark batch)
  - Example: `sample-paper-2025-q21-22.ts` (Questions 21-22, 4-mark batch)
  - Example: `sample-paper-2025-q23-26.ts` (Questions 23-26, 6-mark batch)
  - Example: `sample-paper-2025-q27-34.ts` (Questions 27-34, Part B batch)
  - Batch by marks or logical sections (3-mark, 4-mark, 6-mark, Part B, etc.)
  - Each batch file exports `Question[]` array for import into main file
- **Board Exams**: `board-exam-[set]-[question]-[year].ts`
  - Example: `board-exam-67-3-1.ts` (Set 67, Q3, Variant 1)

#### Learning Modules
- **Files**: `chapter[number].ts` (e.g., `chapter1.ts`, `chapter10.ts`)
- **Chapter Numbers**: Sequential, zero-padded for sorting

#### Subjects
- **Accountancy**: `accountancy`
- **Business Studies**: `business-studies`
- **Economics**: `economics`

## Content Formatting Guidelines

### Rich Text Content
All `ReactNode` fields support JSX for rich formatting:

```typescript
// Bold text
React.createElement("b", null, "important term")

// Lists
React.createElement("ul", { className: "list-disc pl-5" },
  React.createElement("li", null, "First point"),
  React.createElement("li", null, "Second point")
)

// Tables for accounting data (Balance Sheets, Financial Statements)
React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
  React.createElement("thead", null,
    React.createElement("tr", null,
      React.createElement("th", {
        className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900"
      }, "Particulars"),
      React.createElement("th", {
        className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900"
      }, "Amount (₹)")
    )
  ),
  React.createElement("tbody", null,
    React.createElement("tr", null,
      React.createElement("td", { className: "border border-gray-300 p-2" }, "Cash"),
      React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "50,000")
    ),
    React.createElement("tr", null,
      React.createElement("td", {
        className: "border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900"
      }, "Total Current Assets"),
      React.createElement("td", {
        className: "border border-gray-300 p-2 text-right font-semibold bg-gray-50 text-gray-900"
      }, "500,000")
    ),
    React.createElement("tr", null,
      React.createElement("td", {
        className: "border border-gray-300 p-2 font-bold bg-green-50 text-gray-900"
      }, "Profit After Tax"),
      React.createElement("td", {
        className: "border border-gray-300 p-2 text-right font-bold bg-green-50 text-gray-900"
      }, "1,250,000")
    )
  )
)

// Links (if needed)
React.createElement("a", {
  href: "#",
  className: "text-blue-600 hover:underline"
}, "link text")
```

### Table Styling Best Practices

**CRITICAL**: Always specify `text-gray-900` (or appropriate dark color) when using light background colors:

- ✅ **Correct**: `className: "font-bold bg-gray-100 text-gray-900"`
- ❌ **Wrong**: `className: "font-bold bg-gray-100"` (text may be invisible)

**Standard Table Classes:**
- **Table Container**: `border-collapse border border-gray-300 w-full mt-4`
- **Header Cells**: `border border-gray-300 p-2 font-bold bg-gray-100 text-gray-900`
- **Data Cells**: `border border-gray-300 p-2` (add `text-right` for numbers)
- **Subtotal Rows**: `border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900`
- **Total Rows**: `border border-gray-300 p-2 font-bold bg-green-50 text-gray-900`

**Alignment Guidelines:**
- **Text/Particulars**: `text-left` (default, can be omitted)
- **Numbers/Amounts**: `text-right` (always specify for financial data)
- **Centered**: `text-center` (rarely used, mostly for column headers)

### Question Structure
```typescript
{
  id: "1",
  marks: 4,
  question: React.createElement(React.Fragment, null,
    React.createElement("p", { className: "font-semibold" },
      "Question text here..."
    ),
    React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
      React.createElement("li", null, "a) Option 1"),
      React.createElement("li", null, "b) Option 2")
    )
  ),
  solution: React.createElement("p", { className: "font-bold text-green-700" },
    "Correct Answer: a) Option 1"
  ),
  explanation: React.createElement(React.Fragment, null,
    React.createElement("h4", { className: "font-bold text-lg mt-4" },
      "Explanation"
    ),
    React.createElement("p", null, "Detailed explanation here...")
  )
}
```

### Learning Module Structure
```typescript
export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Nature and Significance of Management",
  overview: "Brief chapter introduction...",
  keyConcepts: [
    {
      title: "Effectiveness vs. Efficiency",
      content: React.createElement("p", null, "Explanation..."),
      examFocus: true,
      example: React.createElement("p", null, "Example text..."),
      mnemonic: "Memory aid phrase"
    }
  ],
  keywords: [
    { term: "Process", definition: "Definition here..." }
  ],
  caseStudies: [
    {
      title: "Case Study Title",
      scenario: "Situation description...",
      analysis: React.createElement("p", null, "Analysis content...")
    }
  ],
  quickRevision: React.createElement("ul", { className: "list-disc pl-5" },
    React.createElement("li", null, "Key point 1"),
    React.createElement("li", null, "Key point 2")
  )
};
```

## Data Aggregation

### Central Index File (`data/index.ts`)
```typescript
import { accountancySamplePaper2025 } from './accountancy/sample-paper-2025';
// ... other imports

export const subjects: Subject[] = [
  {
    name: 'Accountancy',
    questionPapers: [
      accountancySamplePaper2025,
      // ... other papers
    ],
    learningModules: accountancyLearningModules,
  },
  // ... other subjects
];
```

### Learning Content Index
Each subject has an `index.ts` in its learning-content directory:
```typescript
import { chapter1Module } from './chapter1';
// ... other imports

export const accountancyLearningModules: LearningModule[] = [
  chapter1Module,
  // ... other modules
];
```

## Validation Rules

### Question Validation
- **ID**: Must be unique within a paper, string format
- **Marks**: Positive integer (1-6 for CBSE)
- **Content**: Must be valid ReactNode, not empty
- **Solution**: Must clearly indicate correct answer with proper formatting
- **Explanation**: Must be educational, comprehensive, and follow official marking scheme
- **Tables**: Must include proper text colors (text-gray-900) on all colored backgrounds
- **Financial Data**: Must use right-aligned numbers, proper accounting format

### Learning Module Validation
- **Chapter**: Sequential numbering as string
- **Title**: Descriptive and accurate
- **Key Concepts**: At least 3-5 concepts per chapter
- **Keywords**: 5-10 relevant terms with clear definitions
- **Case Studies**: 1-3 practical examples
- **Quick Revision**: Concise summary points

### Subject Validation
- **Name**: Official CBSE subject name
- **Question Papers**: At least 3-5 papers per subject
- **Learning Modules**: Match official syllabus chapters

## Content Quality Standards

### Educational Accuracy
- Content must align with CBSE Class XII syllabus (2025-26)
- Solutions must be correct and verified against official CBSE marking schemes
- All accounting solutions must follow standard formats (journal entries, ledgers, financial statements)
- Examples must be relevant, clear, accurate, and match official patterns
- Case studies should reflect real-world scenarios
- Working notes must show all calculations step-by-step

### Accessibility & Usability
- **Text-to-Speech Compatible**: All text content must work with Web Speech API
- **Screen Reader Friendly**: Proper semantic structure and ARIA labels where needed
- **Alternative Text**: Descriptions for visual elements
- **Rich Content Support**: Proper ReactNode formatting for complex layouts

### Consistency
- **Formatting**: Uniform use of ReactNode patterns across all content
- **Terminology**: Consistent usage of technical terms
- **Structure**: Standard question/solution/explanation format
- **Styling**: Follow design system guidelines for visual elements

### Visual Design in Content
- Use gradient sections appropriately (refer to design-system.md)
- Apply glassmorphism patterns for cards and containers
- Include proper spacing and typography classes
- Ensure responsive design for all screen sizes

## Maintenance Guidelines

### Adding New Content
1. Create new TypeScript file following naming conventions
2. Export properly typed object
3. Add to appropriate index file
4. Update central data/index.ts
5. Test in application

### Updating Existing Content
1. Maintain backward compatibility
2. Update type definitions if needed
3. Ensure all references are updated
4. Test thoroughly

### Version Control
- Content changes should be committed separately from code changes
- Use descriptive commit messages
- Tag major content updates

**Last Updated:** January 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\data-structure.md