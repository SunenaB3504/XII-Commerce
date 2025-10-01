# Architecture Overview

## System Architecture

Neil's Commerce Prep is a React-based single-page application (SPA) built with modern web technologies for CBSE Class XII Commerce exam preparation.

### Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Content Format**: Rich JSX/React nodes for complex formatting
- **Accessibility**: Web Speech API for text-to-speech functionality

### Application Structure

```
XII-Commerce/
├── components/           # Reusable UI components
├── data/                # Static content and data files
│   ├── [subject]/       # Subject-specific question papers
│   ├── learning-content/ # Structured learning modules
│   └── index.ts         # Central data aggregation
├── docs/                # Documentation (this directory)
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
└── [config files]       # Vite, TypeScript, package configs
```

## Component Architecture

### Core Components

#### App.tsx (Main Container)
- Central state management for subject selection, view modes, and current content
- Orchestrates data flow between components
- Handles routing logic between papers/learn modes

#### View Components
- **QuestionView**: Displays individual questions with solution toggle
- **LearningContentView**: Renders learning modules with TTS functionality
- **Sidebar**: Navigation for questions/chapters
- **SubjectTabs**: Subject selection interface
- **PaperSelector**: Question paper selection
- **ModeSelector**: Toggle between papers/learn modes

### Data Flow

```
Data Sources (data/) → App State → View Components → User Interaction → State Updates
```

### State Management Pattern

- **Local State**: Component-level state using React hooks
- **Derived State**: Computed values from props and local state
- **Side Effects**: useEffect for initialization and synchronization
- **Event Handlers**: useCallback for optimized re-renders

## Content Organization

### Question Papers
- Stored as TypeScript modules exporting `QuestionPaper` objects
- Questions use React nodes for rich formatting
- Solutions and explanations are collapsible

### Learning Modules
- Structured content with overview, concepts, keywords, case studies
- Support for examples, mnemonics, and exam focus indicators
- Text-to-speech integration for accessibility

### Type Safety
- Comprehensive TypeScript interfaces in `types.ts`
- Strict typing for all data structures
- ReactNode types for rich content formatting

## Key Design Patterns

### Component Composition
- Modular, reusable components
- Props drilling for state sharing
- Callback functions for event handling

### Content Rendering
- React.createElement for dynamic content creation
- JSX fragments for complex layouts
- Conditional rendering based on state

### Accessibility Features
- Text-to-speech for learning content
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly markup

## Performance Considerations

- Lazy loading of content modules
- Optimized re-renders with useCallback
- Efficient state updates
- Minimal bundle size with Vite

## Extensibility

The architecture supports easy addition of:
- New subjects and content
- Additional learning features
- UI component enhancements
- Accessibility improvements

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\architecture.md