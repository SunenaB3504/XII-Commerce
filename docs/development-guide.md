# Development Guide

## Overview

This guide outlines coding standards, development practices, and contribution guidelines for the Neil's Commerce Prep application.

## Technology Stack & Requirements

### Prerequisites
- **Node.js**: 18+ (LTS 18.x or 20.x recommended)
- **npm**: 8+ (comes with Node.js)
- **Git**: 2.30+ for version control
- **VS Code**: Recommended editor with these extensions:
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

### Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Coding Standards

### TypeScript Guidelines

#### Type Definitions
- Use explicit types for all function parameters and return values
- Prefer interfaces over types for object shapes
- Use union types for related constants
- Avoid `any` type; use `unknown` if type is truly unknown

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email?: string;
}

function processUser(user: User): boolean {
  // implementation
}

// ❌ Avoid
function processUser(user: any): any {
  // implementation
}
```

#### Component Props
- Define props interfaces for all components
- Use `React.FC<Props>` or explicit function signatures
- Mark optional props with `?`

```typescript
interface QuestionViewProps {
  question: Question;
  showSolution?: boolean;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question, showSolution = false }) => {
  // implementation
};
```

### React Best Practices

#### Component Structure
- Use functional components with hooks
- Prefer custom hooks for complex logic
- Keep components focused on single responsibility
- Use meaningful component names

#### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects and data fetching
- Use `useCallback` to prevent unnecessary re-renders
- Avoid deep state nesting

```typescript
// ✅ Good
const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(false);

const handleSelectQuestion = useCallback((id: string) => {
  setSelectedQuestion(id);
}, []);
```

#### Event Handlers
- Prefix with `handle` (e.g., `handleClick`, `handleSubmit`)
- Use `useCallback` for handlers passed as props
- Destructure event parameters appropriately

### File Organization

#### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (buttons, inputs)
│   ├── layout/         # Layout components (sidebar, header)
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── data/               # Static data and content
```

#### File Naming
- **Components**: PascalCase (e.g., `QuestionView.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLocalStorage.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with descriptive names (e.g., `QuestionTypes.ts`)

#### Import Organization
```typescript
// React imports first
import React, { useState, useEffect } from 'react';

// Third-party libraries
import { format } from 'date-fns';

// Local imports - types first, then components, then utils
import type { Question } from '../types';
import { Button } from '../components/ui/Button';
import { formatQuestion } from '../utils/questionUtils';

// Relative imports
import Sidebar from './Sidebar';
```

### Styling Guidelines

#### Tailwind CSS Best Practices
- Use utility-first approach following the design system
- Follow established gradient patterns for consistency
- Use responsive prefixes consistently (`sm:`, `md:`, `lg:`, `xl:`)
- Group related classes logically: layout → spacing → colors → effects
- Leverage design tokens from design-system.md

```tsx
// ✅ Good - Organized, follows design system
<div className="bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">

// ❌ Avoid - Inconsistent with design system, poor organization
<div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow">
```

#### Visual Design Patterns

**Glassmorphism Cards:**
```tsx
// Standard glassmorphism pattern
className="bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-xl"

// With hover enhancement
className="bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
```

**Gradient Buttons:**
```tsx
// Primary action button
className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 shadow-lg hover:shadow-xl"

// Secondary/cancel button
className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold py-3 px-6 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-md"
```

**Gradient Icon Containers:**
```tsx
// Small icon (24px)
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
  <svg className="w-4 h-4 text-white">...</svg>
</div>

// Medium icon (32px)
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
  <svg className="w-5 h-5 text-white">...</svg>
</div>

// Large icon (48px)
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
  <svg className="w-7 h-7 text-white">...</svg>
</div>
```

**Gradient Badges:**
```tsx
// Exam focus badge
<span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-3 py-1 rounded-full shadow-md">
  EXAM FOCUS
</span>

// Marks indicator
<div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
  <svg className="w-4 h-4 inline mr-1">...</svg>
  6 Marks
</div>
```

**Content Sections with Gradients:**
```tsx
// Neutral content section
<div className="bg-gradient-to-r from-slate-50 to-blue-50/30 border border-slate-200/50 rounded-xl p-6">
  {content}
</div>

// Success/solution section
<div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-xl p-6 shadow-lg">
  {solution}
</div>

// Information/explanation section
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-xl p-6 shadow-lg">
  {explanation}
</div>
```

#### Icon System

**Icon Guidelines:**
- Use Heroicons (outline style) for consistency
- Inline SVG for performance and customization
- Follow size standards: `h-3 w-3` (small), `h-4 w-4` (medium), `h-5 w-5` (standard), `h-6 w-6` (large)
- Use `stroke="currentColor"` for color inheritance
- Always include proper viewBox and strokeWidth

```tsx
// Standard icon usage
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>

// Icon in button
<button className="flex items-center space-x-3">
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
  </svg>
  <span>Button Text</span>
</button>
```

#### Animation Standards

**CSS Animations:**
```tsx
const styles = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  @keyframes fadeInSlow {
    0% { opacity: 0; transform: translateY(-5px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-slow {
    animation: fadeInSlow 0.6s ease-out forwards;
  }
`;

return (
  <>
    <style>{styles}</style>
    <div className="animate-fade-in">{content}</div>
  </>
);
```

**Transition Classes:**
```tsx
// Standard transitions
className="transition-all duration-300"  // All properties, 300ms
className="transition-colors duration-200"  // Colors only, 200ms
className="transition-transform duration-300"  // Transform only
className="transition-shadow duration-200"  // Shadow only

// Hover effects
className="hover:scale-105 transition-transform"  // Scale on hover
className="hover:shadow-xl transition-shadow"  // Shadow on hover
className="hover:from-blue-700 hover:to-blue-800 transition-colors"  // Gradient shift
```

### Performance Optimization

#### React Optimization
- Use `React.memo` for expensive components
- Optimize context providers
- Lazy load route components
- Avoid inline functions in render

#### Bundle Optimization
- Import only required functions from libraries
- Use dynamic imports for large components
- Optimize images and assets
- Monitor bundle size

### Accessibility (a11y)

#### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<button>`, `<nav>`, `<main>`)
- Provide meaningful alt text for images

#### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Maintain logical tab order
- Provide visible focus indicators

#### Screen Readers
- Use ARIA labels when needed
- Test with screen readers
- Ensure text-to-speech compatibility

### Testing Guidelines

#### Component Testing
- Test user interactions
- Test state changes
- Test accessibility features
- Use React Testing Library

#### Content Testing
- Validate data structure compliance
- Test content rendering
- Verify accessibility features

### Git Workflow

#### Branch Naming
- Feature branches: `feature/add-question-types`
- Bug fixes: `fix/sidebar-navigation`
- Documentation: `docs/update-api-reference`

#### Commit Messages
```
type(scope): description

Types:
- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting
- refactor: code restructuring
- test: testing
- chore: maintenance

Examples:
- feat(questions): add solution toggle functionality
- fix(sidebar): resolve navigation overflow on mobile
- docs(readme): update installation instructions
```

#### Pull Request Process
1. Create feature branch from `main`
2. Make changes following guidelines
3. Test thoroughly
4. Update documentation if needed
5. Create PR with clear description
6. Code review and approval
7. Merge to `main`

### Code Quality Tools

#### ESLint Configuration
```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

#### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

### Error Handling

#### User-Facing Errors
- Provide clear, actionable error messages
- Use appropriate error states in UI
- Log errors for debugging

#### Development Errors
- Use TypeScript strict mode
- Handle null/undefined values appropriately
- Validate props in development

### Documentation

#### Code Comments
- Document complex logic
- Explain business rules
- Comment side effects

#### Component Documentation
```typescript
interface QuestionViewProps {
  /** The question object to display */
  question: Question;
  /** Whether to show the solution by default */
  showSolution?: boolean;
}
```

## Deployment

### Build Process
```bash
# Create production build
npm run build

# The build artifacts will be stored in the `dist/` directory
```

### Environment Variables
- Use `.env.local` for local development
- Never commit sensitive data
- Use environment-specific configs

### CI/CD
- Run tests on every push
- Build and deploy on main branch merges
- Use automated deployment platforms

## Security Considerations

- Sanitize user inputs
- Use HTTPS in production
- Implement Content Security Policy
- Regular dependency updates

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and update documentation
- Monitor performance metrics
- Security audits quarterly

### Code Reviews
- All changes require review
- Focus on code quality, security, and performance
- Ensure adherence to guidelines

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\development-guide.md