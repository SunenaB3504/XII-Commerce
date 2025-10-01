# Design System

## Overview

Neil's Commerce Prep follows a clean, modern design system optimized for educational content delivery and exam preparation. The design emphasizes readability, accessibility, and user engagement.

## Color Palette

### Primary Colors
- **Blue (#3B82F6)**: Primary brand color for headers, buttons, and accents
- **Slate Gray (#64748B)**: Primary text color for body content
- **White (#FFFFFF)**: Background color for cards and main content areas

### Semantic Colors
- **Green (#10B981)**: Success states, solutions, positive feedback
- **Yellow (#F59E0B)**: Warning states, exam focus indicators
- **Red (#EF4444)**: Error states, important alerts

### Background Colors
- **Page Background**: `bg-slate-100` (light gray)
- **Card Background**: `bg-white` (white)
- **Accent Backgrounds**: `bg-blue-50`, `bg-green-50`, `bg-yellow-200`

## Typography

### Font Family
- **Primary**: System font stack (sans-serif)
- **Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Text Sizes
- **Page Title**: `text-3xl font-bold` (2rem)
- **Section Headers**: `text-2xl font-bold` (1.5rem)
- **Card Titles**: `text-xl font-bold` (1.25rem)
- **Body Text**: `text-base` (1rem)
- **Small Text**: `text-sm` (0.875rem)

### Font Weights
- **Bold**: `font-bold` (700) - for headings and emphasis
- **Semibold**: `font-semibold` (600) - for subheadings
- **Normal**: `font-normal` (400) - for body text

## Layout System

### Grid System
- **Container**: `max-w-7xl mx-auto` (1280px max width)
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8`
- **Sidebar Layout**: `lg:w-1/4 xl:w-1/5` (sidebar) + `flex-1` (main content)

### Spacing Scale
- **Small**: `space-y-2` (0.5rem)
- **Medium**: `space-y-4` (1rem)
- **Large**: `space-y-6` (1.5rem)
- **Extra Large**: `space-y-8` (2rem)

## Component Patterns

### Cards
```tsx
<div className="bg-white p-6 rounded-lg shadow-md">
  {/* Card content */}
</div>
```

### Buttons
```tsx
// Primary Button
<button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">

// Secondary Button
<button className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300">
```

### Navigation Elements
```tsx
// Active State
<li className="bg-blue-100 text-blue-800 font-semibold px-3 py-2 rounded-md">

// Inactive State
<li className="text-slate-600 hover:bg-slate-100 px-3 py-2 rounded-md cursor-pointer">
```

## Animations & Transitions

### Fade In Animation
```css
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
```

### Hover Effects
- **Buttons**: `hover:scale-105` (slight scale up)
- **Cards**: `hover:shadow-lg` (enhanced shadow)
- **Links**: `hover:bg-slate-100` (background change)

### Transition Classes
- **Colors**: `transition-colors`
- **Transforms**: `transition-transform`
- **All**: `transition-all`

## Icons & Visual Elements

### Icon Usage
- **Heroicons**: Outline style for consistency
- **Sizes**: `h-5 w-5` (small), `h-6 w-6` (medium)
- **Colors**: Match text color or semantic meaning

### Badges & Indicators
```tsx
// Exam Focus Badge
<span className="text-xs bg-yellow-200 text-yellow-800 font-bold px-2 py-1 rounded-full">

// Marks Indicator
<span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
```

## Responsive Design

### Breakpoints
- **Mobile**: Default (up to 640px)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Responsive Patterns
- **Flexible Layouts**: `flex-col lg:flex-row`
- **Responsive Spacing**: `p-4 sm:p-6 lg:p-8`
- **Adaptive Navigation**: Sticky sidebar on large screens

## Accessibility Guidelines

### Color Contrast
- **Text on White**: Slate-800 (#1e293b) on white
- **Text on Colored Backgrounds**: Ensure WCAG AA compliance
- **Focus States**: Visible focus rings with `focus:ring-2`

### Semantic HTML
- **Headings**: Proper h1-h6 hierarchy
- **Lists**: Semantic `ul`, `ol`, `dl` elements
- **Buttons**: `<button>` elements, not divs
- **Navigation**: `<nav>` with proper ARIA labels

### Interactive Elements
- **Focus Management**: Logical tab order
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Screen Readers**: ARIA labels where needed
- **Text-to-Speech**: Web Speech API integration

## Content Formatting

### Rich Text Classes
- **Prose**: `prose max-w-none` for rich content
- **Lists**: `list-disc pl-5`, `list-roman` for custom numbering
- **Emphasis**: `font-semibold`, `italic` for styling

### Code Examples
```tsx
// Inline code
<code className="bg-slate-100 px-1 py-0.5 rounded text-sm">

// Code blocks
<pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
```

## Design Principles

1. **Clarity**: Clean, readable interface focused on content
2. **Consistency**: Uniform patterns across all components
3. **Accessibility**: Inclusive design for all users
4. **Performance**: Lightweight animations and efficient rendering
5. **Scalability**: Modular system that grows with content

**Last Updated:** October 1, 2025</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\design-system.md