# Design System

## Overview

Neil's Commerce Prep follows a **vibrant, teen-friendly design system** optimized for engaging educational content delivery and exam preparation. The design emphasizes energy, motivation, and fun through the use of bold colors, playful emojis, dynamic gradients, and celebration-style interactions - making learning feel like an exciting game rather than boring study!

## Color Palette - Teen Energy Edition! 🎨

### Primary Vibrant Colors
- **Purple-Pink Gradient**: `from-purple-500 via-pink-500 to-orange-400` - Main background gradient (energetic!)
- **Hot Pink Gradient**: `from-pink-500 to-rose-500` - Challenge/Question mode (exciting!)
- **Teal-Cyan Gradient**: `from-teal-500 to-cyan-500` - Study/Learn mode (cool & calm)
- **Purple Power**: `from-purple-500 to-pink-500` - Business Studies subject
- **Emerald Energy**: `from-emerald-500 to-teal-500` - Accountancy subject
- **Orange Blast**: `from-orange-500 to-red-500` - Economics subject

### Accent Colors
- **Yellow Pop**: `from-yellow-400 to-orange-500` - Points badges, streak indicators, special highlights
- **Green Success**: `from-green-400 to-emerald-500` - Correct answers, achievements
- **Blue Bright**: `from-blue-400 to-indigo-500` - Explanations, learning content

### Background Effects
- **Page Background**: `bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400` (bold, energetic gradient)
- **Card Backgrounds**: 
  - White with colorful tints: `bg-gradient-to-br from-white via-yellow-50 to-orange-50`
  - Purple tint: `bg-gradient-to-br from-white via-purple-50 to-pink-50`
  - Teal tint: `bg-gradient-to-br from-white via-teal-50 to-cyan-50`
- **Header Background**: `bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500` (super vibrant!)

### Border System - Bold & Playful
- **Thick Borders**: `border-4` (strong, visible, modern)
- **Border Colors**: 
  - Yellow: `border-yellow-300` (headers, highlights)
  - Purple: `border-purple-200`, `border-purple-300` (cards)
  - White: `border-white` (active states, overlays)
  - Teal: `border-teal-300` (study content)
- **Shadows**: 
  - Medium: `shadow-lg`
  - Large: `shadow-2xl` (most cards)
  - Extra: `shadow-3xl` (hover states)

### Table Text Colors - Critical for Visibility ⚠️
**IMPORTANT**: Always specify dark text colors on light backgrounds to ensure readability!

- **Header Text**: `text-gray-900` (very dark gray #111827) on `bg-gray-100` (light gray #F3F4F6)
- **Subtotal Text**: `text-gray-900` on `bg-gray-50` (very light gray #F9FAFB)
- **Total Text**: `text-gray-900` on `bg-green-50` (very light green #F0FDF4)
- **Body Text**: Default dark color, no background needed

**Common Mistake**: Omitting text color on colored backgrounds causes text to inherit lighter colors and become invisible.

**Rule**: Any row with `bg-gray-100`, `bg-gray-50`, or `bg-green-50` MUST include `text-gray-900` in the className.

## Typography - Bold & Energetic

### Font Weights - Go Big or Go Home!
- **Black**: `font-black` (900) - Main titles, super emphasis (NEW!)
- **Bold**: `font-bold` (700) - Headers, buttons, important text
- **Semibold**: `font-semibold` (600) - Subheadings
- **Medium**: `font-medium` (500) - Body emphasis

### Text Sizes - Make It Pop!
- **App Title**: `text-3xl sm:text-4xl font-black` (HUGE on mobile!)
- **Section Headers**: `text-3xl font-black` (bigger = better)
- **Card Titles**: `text-2xl font-black` (bold presence)
- **Body Text**: `text-lg font-medium` (easier to read)
- **Badges**: `text-base font-black` (stand out!)

### Text Colors - Vibrant & Clear
- **Primary**: `text-slate-800` - Main content (dark enough to read)
- **Accent Purple**: `text-purple-600`, `text-purple-700` - Highlights
- **Accent Teal**: `text-teal-600` - Study mode accents
- **White on Gradients**: `text-white` with `drop-shadow-lg` (readable on colorful backgrounds)

## Layout System

### Grid System
- **Container**: `max-w-7xl mx-auto` (1280px max width, centered)
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8` (mobile to desktop)
- **Sidebar Layout**: `lg:w-1/4 xl:w-1/5` (sidebar) + `flex-1` (main content)
- **Content Spacing**: Consistent gaps with `gap-6` to `gap-8`

### Spacing Scale (Tailwind)
- **2xs**: `space-y-1` (0.25rem/4px)
- **xs**: `space-y-2` (0.5rem/8px)
- **Small**: `space-y-3` (0.75rem/12px)
- **Medium**: `space-y-4` (1rem/16px)
- **Large**: `space-y-6` (1.5rem/24px)
- **XL**: `space-y-8` (2rem/32px)

### Flexbox & Grid Patterns
- **Center Alignment**: `flex items-center justify-center`
- **Space Between**: `flex items-center justify-between`
- **Column Layout**: `flex flex-col lg:flex-row` (responsive)
- **Gap Spacing**: `space-x-3`, `space-x-4`, `gap-4`, `gap-6`, `gap-8`

## Component Patterns

### Vibrant Card Design
```tsx
// Standard colorful card with thick borders
<div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl shadow-2xl p-8">
  {/* Card content */}
</div>

// Hover-enhanced playful card
<div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-102">
  {/* Card content */}
</div>
</div>

// Legacy simple card (for reference)
<div className="bg-white p-6 rounded-lg shadow-md">
  {/* Card content */}
</div>
```

### Buttons - Bold & Engaging
```tsx
// Primary Action Button (vibrant gradient)
<button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-black text-lg py-5 px-10 rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-2xl border-4 border-white">
  <span className="text-2xl animate-bounce">💡</span>
  <span>Reveal Answer!</span>
  <span className="text-2xl">✨</span>
</button>

// Secondary Button (slate)
<button className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold text-base py-3 px-6 rounded-2xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-400 shadow-lg">
  <span>Hide Solution</span>
</button>

// Emoji Icon Container (playful, rotating)
<div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
  <span className="text-3xl transform -rotate-6">❓</span>
</div>
```

### Navigation Elements - Color-Coded & Playful
```tsx
// Active Tab (subject-specific gradient)
<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105 border-4 border-white px-6 py-4 rounded-2xl font-bold transition-all duration-300">

// Inactive Tab
<button className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:scale-105 hover:shadow-lg border-2 border-slate-300 px-6 py-4 rounded-2xl font-bold transition-all duration-300">

// Sidebar Item - Active (Challenge Mode)
<button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl scale-105 border-4 border-white p-4 rounded-2xl">

// Sidebar Item - Active (Study Mode)
<button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-2xl scale-105 border-4 border-white p-4 rounded-2xl">

// Sidebar Item - Inactive
<button className="bg-white/80 hover:bg-white text-slate-700 border-2 border-purple-200 hover:border-pink-300 hover:shadow-lg p-4 rounded-2xl transition-all hover:scale-105">
```
```

### Tables - Accounting & Financial Data
```tsx
// Standard accounting table with proper text colors
<table className="border-collapse border border-gray-300 w-full mt-4">
  <thead>
    <tr>
      {/* CRITICAL: Always include text-gray-900 on colored backgrounds */}
      <th className="border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900">
        Particulars
      </th>
      <th className="border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900">
        Amount (₹)
      </th>
    </tr>
  </thead>
  <tbody>
    {/* Regular data row - no background color */}
    <tr>
      <td className="border border-gray-300 p-2">Cash</td>
      <td className="border border-gray-300 p-2 text-right">50,000</td>
    </tr>
    {/* Subtotal row - light gray background with dark text */}
    <tr>
      <td className="border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900">
        Total Current Assets
      </td>
      <td className="border border-gray-300 p-2 text-right font-semibold bg-gray-50 text-gray-900">
        500,000
      </td>
    </tr>
    {/* Final total row - light green background with dark text */}
    <tr>
      <td className="border border-gray-300 p-2 font-bold bg-green-50 text-gray-900">
        Profit After Tax
      </td>
      <td className="border border-gray-300 p-2 text-right font-bold bg-green-50 text-gray-900">
        1,250,000
      </td>
    </tr>
  </tbody>
</table>

// Table in React.createElement format (for data files)
React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
  React.createElement("thead", null,
    React.createElement("tr", null,
      React.createElement("th", {
        className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900"
      }, "Particulars")
    )
  ),
  React.createElement("tbody", null,
    React.createElement("tr", null,
      React.createElement("td", {
        className: "border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-900"
      }, "Subtotal")
    )
  )
)
```

### Icon Containers
```tsx
// Gradient Icon Container (Small)
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
  <span className="text-white font-bold text-sm">1</span>
</div>

// Gradient Icon Container (Medium)
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
  <svg className="w-5 h-5 text-white">...</svg>
</div>

// Gradient Icon Container (Large)
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
  <svg className="w-7 h-7 text-white">...</svg>
</div>

// Circular Checkmark Icon
<div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
</div>
```

### Badges & Indicators - Eye-Catching!
```tsx
// Exam Focus Badge (hot pink gradient, bold)
<span className="text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-4 py-2 rounded-full shadow-lg border-2 border-white">
  ⭐ EXAM FOCUS!
</span>

// Points Badge (yellow-orange gradient)
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-base font-black px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-300 transform hover:scale-110 transition-transform">
  <span className="text-xl">⭐</span> 6 Points
</div>

// Study Mode Badge
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-black px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-300">
  <span className="text-xl">💡</span> Study Mode
</div>

// Streak Indicator (gamification!)
<div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border-2 border-white/40 shadow-lg">
  <span className="text-white font-bold text-sm">🔥 Streak: 7 days!</span>
</div>
```

### Content Sections - Colorful & Clear
```tsx
// Question Card (yellow-orange tint)
<div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-8">
  {/* Question content */}
</div>

// Correct Answer Section (bright green gradient)
<div className="bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-green-300 rounded-3xl p-6 shadow-2xl">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
      <span className="text-3xl">✅</span>
    </div>
    <h4 className="text-2xl font-black text-white drop-shadow-lg">Correct Answer!</h4>
  </div>
  <div className="text-white text-xl font-bold bg-white/20 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/40">
    {solution}
  </div>
</div>

// Explanation Section (bright blue gradient)
<div className="bg-gradient-to-r from-blue-400 to-indigo-500 border-4 border-blue-300 rounded-3xl p-6 shadow-2xl">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
      <span className="text-3xl">🧠</span>
    </div>
    <h4 className="text-2xl font-black text-white drop-shadow-lg">How It Works</h4>
  </div>
  <div className="prose prose-slate max-w-none text-white text-base leading-relaxed font-medium bg-white/20 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/40">
    {explanation}
  </div>
</div>

// Example Box (green gradient with emoji)
<div className="bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-green-300 rounded-2xl p-5 text-sm font-bold text-white shadow-lg">
  <span className="text-lg">💡</span> <span className="font-black">Example: </span>{example}
</div>

// Mnemonic Box (purple gradient with emoji)
<div className="bg-gradient-to-r from-purple-400 to-pink-500 border-4 border-purple-300 rounded-2xl p-5 text-sm font-bold text-white shadow-lg">
  <span className="text-lg">🧠</span> <span className="font-black">Remember: </span>{mnemonic}
</div>
```
    <h4 className="text-xl font-bold text-green-800">Solution</h4>
  </div>
  <div className="text-green-900 text-lg font-medium bg-white/50 rounded-lg p-4 border border-green-100">
    {solution}
  </div>
</div>

// Explanation Section (Blue Gradient)
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-xl p-6 shadow-lg">
  <div className="flex items-center space-x-3 mb-4">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
      <svg className="w-5 h-5 text-white">...</svg>
    </div>
    <h4 className="text-xl font-bold text-blue-800">Detailed Explanation</h4>
  </div>
  <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed">
    {explanation}
  </div>
</div>

// Dashed Border Section (Quick Revision)
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300/50 rounded-2xl shadow-xl p-8">
  <div className="bg-white/50 border border-blue-200/50 rounded-xl p-6 shadow-inner">
    {content}
  </div>
</div>
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

@keyframes fadeInSlow {
  0% { opacity: 0; transform: translateY(-5px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-slow {
  animation: fadeInSlow 0.6s ease-out forwards;
}
```

### Hover & Interactive Effects
- **Button Scale**: `hover:scale-105` (5% scale increase)
- **Enhanced Scale**: `transform scale-[1.02]` (2% for active states)
- **Shadow Growth**: `hover:shadow-lg`, `hover:shadow-xl`, `hover:shadow-2xl`
- **Background Change**: `hover:bg-slate-100`, `hover:bg-blue-50/50`
- **Gradient Shift**: `hover:from-blue-700 hover:to-blue-800`

### Transition Classes
- **Colors**: `transition-colors` (default duration)
- **Transforms**: `transition-transform`
- **Shadows**: `transition-shadow`
- **All Properties**: `transition-all duration-200`, `transition-all duration-300`
- **Custom Duration**: `duration-200`, `duration-300`, `duration-500`

### Interactive States
```tsx
// Focus Ring (Accessibility)
focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2

// Focus Ring (Secondary)
focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2

// Hover Transitions
hover:shadow-xl transition-all duration-300

// Active/Selected States
transform scale-[1.02]
```

## Icons & Visual Elements

### Icon Library
- **Primary**: Heroicons (outline style for consistency)
- **Source**: Inline SVG for performance and customization
- **Style**: `stroke="currentColor"` for color inheritance

### Icon Sizes
- **Extra Small**: `h-3 w-3` (12px) - Inline icons, checkmarks
- **Small**: `h-4 w-4` (16px) - Badges, small buttons
- **Medium**: `h-5 w-5` (20px) - Standard UI icons
- **Large**: `h-6 w-6` (24px) - Navigation, primary actions
- **Extra Large**: `h-7 w-7` (28px) - Hero sections, main branding

### Icon Usage Patterns
```tsx
// Inline with text
<svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
</svg>

// In button with spacing
<button className="flex items-center space-x-3">
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
  </svg>
  <span>Button Text</span>
</button>

// Centered in container
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
  </svg>
</div>
```

### Common Icon Types
- **Book/Learning**: Open book icon for study content
- **Document**: File/paper icons for questions
- **Check/Success**: Checkmark for completed items, correct answers
- **Star**: Star for marks/importance
- **Lightbulb**: Ideas, key takeaways
- **Info**: Information, explanations
- **Lightning**: Quick revision, speed
- **Briefcase**: Business Studies subject
- **Calculator**: Accountancy subject
- **Currency**: Economics subject

### Visual Decorative Elements
- **Gradient Backgrounds**: Used throughout for visual interest
- **Backdrop Blur**: `backdrop-blur-sm` for glassmorphism
- **Border Accents**: Left borders (`border-l-4`) for emphasis
- **Rounded Corners**: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- **Shadow Inner**: `shadow-inner` for inset depth

## Responsive Design

### Breakpoints (Tailwind)
- **Mobile First**: Default styles (up to 640px)
- **Small (sm)**: `sm:` prefix (640px+) - Large phones, small tablets
- **Medium (md)**: `md:` prefix (768px+) - Tablets
- **Large (lg)**: `lg:` prefix (1024px+) - Desktops, laptops
- **Extra Large (xl)**: `xl:` prefix (1280px+) - Large desktops
- **2XL**: `2xl:` prefix (1536px+) - Very large screens

### Responsive Patterns
```tsx
// Flexible Layouts
<div className="flex flex-col lg:flex-row gap-8">
  {/* Stacks on mobile, side-by-side on desktop */}
</div>

// Responsive Spacing
<div className="p-4 sm:p-6 lg:p-8">
  {/* Padding increases with screen size */}
</div>

// Responsive Typography
<h1 className="text-2xl sm:text-3xl lg:text-4xl">
  {/* Font size scales with screen size */}
</h1>

// Responsive Display
<div className="hidden md:flex">
  {/* Hidden on mobile, shown on tablets and above */}
</div>

// Adaptive Components
<aside className="lg:sticky lg:top-24">
  {/* Sticky sidebar only on large screens */}
</aside>
```

### Mobile Optimization
- **Touch Targets**: Minimum 44x44px tap areas
- **Readable Text**: Minimum 16px base font size
- **Scrollable Areas**: `max-h-[70vh] overflow-y-auto`
- **Stack Layout**: `flex-col` for mobile, `lg:flex-row` for desktop

## Accessibility Guidelines

### Color Contrast (WCAG AA/AAA)
- **Text on White**: `text-slate-800` (#1e293b), `text-slate-900` (#0f172a) - Excellent contrast
- **Text on Colored Backgrounds**: Ensure minimum 4.5:1 contrast ratio
- **Focus States**: Visible focus rings with high contrast
  - Primary: `focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2`
  - Secondary: `focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`
- **Gradient Overlays**: Ensure text remains readable on all gradient backgrounds

### Semantic HTML Structure
- **Headings**: Proper h1-h6 hierarchy (skip no levels)
- **Lists**: Semantic `<ul>`, `<ol>`, `<dl>` elements
- **Buttons**: Use `<button>` elements, not divs with click handlers
- **Navigation**: `<nav>` elements with proper ARIA labels
- **Landmarks**: `<main>`, `<aside>`, `<header>` for page structure
- **Labels**: Associated form labels and ARIA labels

### Interactive Elements
- **Focus Management**: Logical tab order (top to bottom, left to right)
- **Keyboard Navigation**: All interactive elements accessible via keyboard
  - Enter/Space for buttons
  - Arrow keys for lists (when applicable)
  - Escape for modals/dismissing overlays
- **Screen Readers**: 
  - ARIA labels: `aria-label="Subject Tabs"`
  - ARIA descriptions where needed
  - Hidden decorative elements: `aria-hidden="true"`
- **Text-to-Speech**: 
  - Web Speech API integration for learning content
  - Play/pause controls for all audio content
  - Visual indicators for audio state

### Visual Accessibility
- **High Contrast Mode**: Compatible with OS-level high contrast
- **Reduced Motion**: Respect `prefers-reduced-motion` (future enhancement)
- **Focus Indicators**: Always visible, never hidden
- **Icon Labels**: Text labels or ARIA labels for all icon-only buttons
- **Error States**: Clear visual and textual error messages

## Content Formatting

### Prose & Rich Text
- **Prose Classes**: `prose prose-slate max-w-none` for rich content
- **Text Leading**: `leading-relaxed` (1.625), `leading-loose` (2) for readability
- **Max Width**: `max-w-none` to prevent content truncation in prose
- **Font Size**: Adjust with `text-base`, `text-lg` for better legibility

### Lists & Structured Content
```tsx
// Unordered Lists with styling
<ul className="list-disc pl-5 space-y-1">
  <li>First point</li>
  <li>Second point</li>
</ul>

// Ordered Lists
<ol className="list-decimal pl-5 space-y-2">
  <li>First step</li>
  <li>Second step</li>
</ol>

// Custom Lists (no markers)
<ul className="list-none pl-6 mt-4 space-y-2">
  <li>a) Option 1</li>
  <li>b) Option 2</li>
</ul>

// Definition Lists (Keywords)
<div className="space-y-4">
  <div className="flex items-start space-x-3">
    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
      <svg className="w-3 h-3 text-white">...</svg>
    </div>
    <div className="flex-1">
      <div className="font-semibold text-slate-800 text-lg">Term</div>
      <div className="text-slate-600 pl-4 border-l-2 border-slate-200 ml-2 mt-1 leading-relaxed">Definition</div>
    </div>
  </div>
</div>
```

### Emphasis & Special Text
```tsx
// Bold emphasis
<b>important term</b>
<strong className="font-bold text-slate-800">critical concept</strong>

// Italic
<em>emphasized text</em>
<i className="italic">example text</i>

// Inline code
<code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">
  codeSnippet()
</code>

// Large prominent text
<p className="text-lg font-medium">Important statement</p>
```

### Tables (When Needed)
```tsx
<table className="border-collapse border border-slate-300 mt-4 w-full">
  <thead>
    <tr className="bg-slate-100">
      <th className="border border-slate-300 p-3 text-left font-semibold">Column 1</th>
      <th className="border border-slate-300 p-3 text-left font-semibold">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 p-3">Data 1</td>
      <td className="border border-slate-300 p-3">Data 2</td>
    </tr>
  </tbody>
</table>
```

### Mathematical & Special Formatting
- Use standard text for simple math: "x + y = z"
- For complex equations, consider MathJax or KaTeX (future enhancement)
- Subscripts/Superscripts: Use HTML `<sub>` and `<sup>` tags

## Emoji System - Fun & Engaging! 🎉

### Strategic Emoji Usage
Emojis replace traditional SVG icons throughout the app to create a more playful, approachable, and teen-friendly experience.

### Emoji Mapping by Component

**App Header:**
- 🎯 - Main logo icon (rotates on hover)
- 🚀 - Part of title "Commerce Champions!"
- 💪 - Motivational tagline
- 🔥 - Streak indicator
- ⭐ - Year badge

**Subject Tabs:**
- 💰 - Accountancy
- 📊 - Business Studies  
- 📈 - Economics
- 🔥 - Active subject indicator (bouncing animation)

**Mode Selector:**
- 🎮 - Challenge Mode (Practice Papers)
- 📖 - Study Mode (Learning Content)
- ⚡ - Active mode indicator (bouncing)
- 💡 - Study mode active indicator (bouncing)

**Sidebar:**
- 🎯 - Challenge/Questions header
- 📚 - Chapters header
- ✓ - Completed item indicator
- ✨ - Recently completed
- 🌟 - Completed chapter indicator

**Question View:**
- ❓ - Question icon (rotating on hover)
- ⭐ - Points badge
- 💡 - Reveal answer button (bouncing)
- ✨ - Decoration on reveal button
- ✅ - Correct answer header
- 🧠 - Explanation header
- 🎉 - Celebration on answer reveal

**Learning Content:**
- 📚 - Chapter header (rotating)
- 💡 - Study mode badge
- ℹ️ - Overview section
- 💡 - Key concepts header
- ⭐ - Exam focus badge
- 💡 - Example indicator
- 🧠 - Mnemonic/remember indicator

### Emoji Size Guidelines
- **Small** (text-xl): 1.25rem - Inline with text
- **Medium** (text-2xl): 1.5rem - Buttons, tabs
- **Large** (text-3xl): 1.875rem - Headers, icons
- **XL** (text-5xl): 3rem - Celebrations, focal points

### Emoji Animation Patterns
```tsx
// Bouncing emoji (active states)
<span className="text-xl animate-bounce">🔥</span>

// Rotating emoji icon (headers)
<div className="transform rotate-6 hover:rotate-0 transition-transform">
  <span className="text-3xl">🎯</span>
</div>

// Static emoji (labels, badges)
<span className="text-2xl">📚</span>
```

## Animation System - Make It Pop! ✨

### Transform Animations
```tsx
// Hover scale (buttons, cards)
className="transform hover:scale-105 transition-all duration-300"
className="transform hover:scale-110 transition-transform"

// Active scale (selected items)
className="transform scale-105"

// Rotate on hover (icon containers)
className="transform rotate-6 hover:rotate-0 transition-transform duration-300"
```

### Keyframe Animations
```css
/* Bounce In (solution reveal) */
@keyframes bounceIn {
    0% { opacity: 0; transform: scale(0.3); }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
}
.animate-bounce-in {
    animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

/* Fade In (page load) */
@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}
```

### Tailwind Animate Classes
- **Bounce**: `animate-bounce` - Active indicators, celebrations
- **Pulse**: `animate-pulse` - Loading states (if needed)
- **Spin**: `animate-spin` - Loading spinners (if needed)

## Design Principles - Teen Edition!

1. **Energy Over Elegance**: Bold, vibrant, exciting > subtle and sophisticated
2. **Gamification**: Points, streaks, achievements, celebrations
3. **Clarity Through Color**: Color-coding makes navigation intuitive
4. **Playful Not Childish**: Fun emojis and colors while maintaining educational value
5. **Instant Feedback**: Animations, celebrations, progress indicators
6. **Mobile-First Fun**: Large touch targets, readable on phones
7. **Motivation Built-In**: "Level Up", "Champions", "Challenge", encouraging language
8. **Visual Rewards**: Celebrations (🎉), achievements (✨), progress bars
9. **Text Visibility**: Always specify dark text colors on light backgrounds (tables, cards, badges)

## Design System Governance - Teen Edition Rules!

### When to Use Bold Colors
- **✅ Always**: Headers, buttons, badges, active states, subject tabs
- **✅ Backgrounds**: Page gradients, card tints (with white base)
- **✅ Celebrations**: Answer reveals, achievements, progress
- **❌ Never**: Body text (keep dark for readability)

### When to Use Emojis
- **✅ Replace Icons**: Headers, buttons, indicators, navigation
- **✅ Add Personality**: Motivational messages, celebrations
- **✅ Size Appropriately**: Match text size or slightly larger
- **❌ Don't Overuse**: Keep meaningful, not decorative clutter

### Table Text Color Rules ⚠️
- **✅ ALWAYS**: Include `text-gray-900` with `bg-gray-100`, `bg-gray-50`, or `bg-green-50`
- **✅ Headers**: `font-bold bg-gray-100 text-gray-900`
- **✅ Subtotals**: `font-semibold bg-gray-50 text-gray-900`
- **✅ Totals**: `font-bold bg-green-50 text-gray-900`
- **❌ NEVER**: Use colored backgrounds without explicit text color (causes invisible text)
- **Testing**: View tables in browser to verify all text is clearly visible

### Border & Shadow Guidelines
- **Thick Borders (`border-4`)**: Main cards, active states, important sections
- **Medium Borders (`border-2`)**: Secondary elements, inactive states
- **White Borders**: Active/selected items for contrast on colorful backgrounds
- **Heavy Shadows (`shadow-2xl`)**: Default for most cards (make them pop!)
- **Extra Shadows (`shadow-3xl`)**: Hover states

### Border Radius Standards - Go Big!
- **Medium (`rounded-2xl`)**: 16px - Buttons, smaller cards
- **Large (`rounded-3xl`)**: 24px - Main cards, sections (PRIMARY CHOICE!)
- **Full (`rounded-full`)**: Badges, pills, circular containers

### Animation Guidelines
- **Transforms**: Scale 105-110% on hover for interactive elements
- **Bouncing**: Use `animate-bounce` for active indicators only
- **Rotations**: Subtle 6° tilt on emoji containers, 0° on hover
- **Duration**: 300ms standard, 600ms for reveals

## Component Library Reference - Teen Version

### Subject-Specific Colors & Emojis
- **Accountancy**: Emerald-Teal gradient (`from-emerald-500 to-teal-500`) + 💰
- **Business Studies**: Purple-Pink gradient (`from-purple-500 to-pink-500`) + 📊
- **Economics**: Orange-Red gradient (`from-orange-500 to-red-500`) + 📈
- **Challenge Mode**: Pink-Rose gradient (`from-pink-500 to-rose-500`) + 🎮⚡
- **Study Mode**: Teal-Cyan gradient (`from-teal-500 to-cyan-500`) + 📖💡

### State Indicators with Emojis
- **Active/Selected**: Vibrant gradient, white text, thick white border, scale-105, bouncing emoji
- **Completed**: ✓ or ✨ indicator, lighter gradient
- **Hover**: Scale-105, increased shadow, slight color shift
- **Focus**: Yellow ring (`ring-4 ring-yellow-400`)
- **Disabled**: Reduced opacity, no hover effects

### Content Hierarchy
1. **Page Title**: Large, gradient text, with icon
2. **Section Headers**: Bold, with decorative icons
3. **Card Titles**: Medium bold, often with badges
4. **Body Content**: Regular weight, readable sizing
5. **Metadata**: Smaller, muted color

**Last Updated:** January 2025

---

**Note for Future Development**: 
When adding new components or features, always refer to this design system to ensure visual consistency. All new UI elements should follow the established patterns for gradients, glassmorphism, spacing, and interactions. Test across all breakpoints and ensure accessibility standards are met.</content>
<parameter name="filePath">c:\Users\Admin\Neil\XII-Commerce\docs\design-system.md