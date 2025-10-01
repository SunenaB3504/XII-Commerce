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
  content: ReactNode;     // Main explanation
  examFocus?: boolean;    // Exam importance flag
  mnemonic?: string;      // Memory aid
  example?: ReactNode;    // Illustrative example
}

interface CaseStudy {
  title: string;          // Case study title
  scenario: string;       // Situation description
  analysis: ReactNode;    // Analysis and takeaways
}

interface LearningModule {
  chapter: string;        // Chapter number (e.g., "1", "2")
  title: string;          // Chapter title
  overview: string;       // Brief introduction
  keyConcepts: Concept[]; // Array of concepts
  keywords: Array<{       // Glossary terms
    term: string;
    definition: string;
  }>;
  caseStudies: CaseStudy[]; // Practical examples
  quickRevision: ReactNode; // Summary content
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
│   ├── sample-paper-2025.ts
│   ├── board-exam-[code].ts
│   └── ...
├── learning-content/
│   └── [subject]/
│       ├── chapter1.ts
│       ├── chapter2.ts
│       └── ...
└── types.ts                    # Type definitions (root level)
```

### Naming Conventions

#### Question Papers
- **Sample Papers**: `sample-paper-2025.ts`
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

// Links (if needed)
React.createElement("a", {
  href: "#",
  className: "text-blue-600 hover:underline"
}, "link text")
```

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
- **Solution**: Must clearly indicate correct answer
- **Explanation**: Must be educational and comprehensive

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
- Content must align with CBSE syllabus
- Solutions must be correct and well-explained
- Examples must be relevant and clear

### Accessibility
- Text-to-speech compatible content
- Screen reader friendly structure
- Alternative text for visual elements

### Consistency
- Uniform formatting across all content
- Consistent terminology usage
- Standard question/solution structure

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

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\data-structure.md