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
- Content must align with CBSE Class XII syllabus (2025-26)
- Solutions must be correct and verified against official materials
- Examples must be relevant, clear, and accurate
- Case studies should reflect real-world scenarios

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

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\data-structure.md