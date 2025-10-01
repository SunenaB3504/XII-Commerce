# Architecture Overview

## System Architecture

Neil's Commerce Prep is a React-based single-page application (SPA) built with modern web technologies for CBSE Class XII Commerce exam preparation.

### Technology Stack

- **Frontend Framework**: React 19.1.1 (latest stable) with TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0 (ultra-fast HMR, optimized production builds)
- **Styling**: Tailwind CSS 4.1.13 (utility-first with custom animations, gradients, glassmorphism)
- **PostCSS**: Autoprefixer 10.4.21 for cross-browser compatibility
- **State Management**: React hooks (useState, useEffect, useCallback, custom hooks)
- **Content Format**: Rich JSX/React nodes for complex formatting and rich media
- **Accessibility**: 
  - Web Speech API for text-to-speech functionality in learning content
  - WCAG AA/AAA compliant color contrast
  - Semantic HTML5 structure
  - Keyboard navigation support
  - Screen reader compatibility
- **Deployment**: GitHub Pages with automated CI/CD via GitHub Actions
- **Package Manager**: npm with strict dependency management

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
- Implements gradient backgrounds and enhanced visual hierarchy
- Manages responsive layout with sticky header

#### View Components
- **QuestionView**: Displays individual questions with interactive solution reveal, gradient badges for marks, enhanced typography, and smooth animations
- **LearningContentView**: Renders learning modules with TTS functionality, gradient sections, glassmorphism cards, and enhanced content organization
- **Sidebar**: Navigation for questions/chapters with glassmorphism effect, gradient active states, and sticky positioning
- **SubjectTabs**: Subject selection interface with gradient buttons, icons, and smooth transitions
- **PaperSelector**: Question paper selection dropdown with enhanced styling
- **ModeSelector**: Toggle between papers/learn modes with color-coded gradient buttons (blue for practice, green for learning)

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

### Build Optimization
- **Vite Build System**: Lightning-fast development and optimized production builds (~2.3s build time)
- **Code Splitting**: Automatic with Vite for optimal loading
- **Tree Shaking**: Removes unused code from final bundle
- **Minification**: CSS and JavaScript compression
- **Bundle Size**: ~207 KB gzipped production bundle
- **Asset Optimization**: Efficient handling of SVG icons and static assets

### Runtime Optimization
- **Lazy Loading**: Content modules loaded on demand
- **Optimized Re-renders**: useCallback for event handlers, React.memo for expensive components
- **Efficient State Updates**: Minimal state changes, derived state patterns
- **CSS Performance**: Tailwind JIT compilation, purged unused styles
- **Animation Performance**: GPU-accelerated transforms and transitions

### Monitoring
- **Bundle Analysis**: Rollup plugin visualizer for bundle inspection
- **Lighthouse Scores**: Regular performance audits
- **Web Vitals**: Core Web Vitals monitoring (LCP, FID, CLS)

## Extensibility

The architecture supports easy addition of:
- **New Subjects**: Simply add new data files following established patterns
- **Additional Content**: Question papers and learning modules via structured TypeScript files
- **UI Component Enhancements**: Modular component system with design system guidelines
- **Accessibility Improvements**: Built-in support for new accessibility features
- **Interactive Features**: Easy integration of new educational tools
- **Styling Updates**: Tailwind-based system allows rapid design iterations
- **Analytics & Tracking**: Extensible for learning analytics (future enhancement)
- **Offline Support**: Architecture ready for Progressive Web App conversion

## Visual Design Architecture

### Design System Integration
- **Glassmorphism**: Backdrop blur effects with semi-transparent backgrounds for modern UI
- **Gradient System**: Consistent gradient usage across buttons, badges, and sections
- **Icon Library**: Inline SVG Heroicons for customization and performance
- **Animation Framework**: CSS keyframes with Tailwind transitions for smooth interactions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Component Visual Patterns
- **Cards**: Glassmorphism with `bg-white/95 backdrop-blur-sm` and subtle borders
- **Buttons**: Gradient backgrounds with hover effects and scale transforms
- **Badges**: Gradient-filled rounded pills with shadow effects
- **Sections**: Color-coded gradient backgrounds for different content types
- **Icons**: Gradient-filled containers with white icons

## Security Considerations

### Build Security
- **Dependency Management**: Regular npm audit for vulnerabilities
- **TypeScript**: Strict type checking prevents common errors
- **Content Security**: Static site with no server-side code execution
- **HTTPS**: Enforced on GitHub Pages deployment

### Runtime Security
- **XSS Protection**: React's built-in escaping for user-generated content
- **CSP Headers**: Content Security Policy via GitHub Pages
- **No External Dependencies**: Minimal attack surface with self-contained application

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\architecture.md