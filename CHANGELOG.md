# Changelog

All notable changes to Neil's Commerce Prep will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2025-01-XX

### Added
- **Official CBSE Marking Scheme Integration**: Accountancy Sample Paper 2025-26 updated with comprehensive solutions from official CBSE marking scheme
  - PDF extraction tool (`scripts/extract-pdf.py`) for automated content extraction from official CBSE documents
  - All 34 questions now include official solutions with step-by-step working notes
  - Enhanced solution format with detailed journal entries, T-accounts, and financial statements
  - Structured tables for balance sheets, comparative statements, and common size statements
  - Professional formatting with proper accounting headers and subtotals

### Changed
- **Solution Structure Enhancement**: Upgraded from simple answers to comprehensive educational solutions
  - Q1-16 (MCQs): Verified against official answer key
  - Q17-20 (3-mark): Detailed journal entries, goodwill calculations, ratio analysis with formulas
  - Q21-22 (4-mark): Complete balance sheets with working notes tables
  - Q23-26 (6-mark): Business acquisition entries, loan accounts, partner capital accounts with T-account format
  - Q27-34 (Part B): Comparative statements, common size analysis, cash flow statements with detailed working

### Fixed
- **Table Visibility Issues**: Resolved text color problems in all accounting tables
  - Added `text-gray-900` to table headers with `bg-gray-100` backgrounds (Commit: 61fc4e9)
  - Added `text-gray-900` to subtotal rows with `bg-gray-50` backgrounds (Commit: dcd2778)
  - Added `text-gray-900` to total rows with `bg-green-50` backgrounds (Commit: dcd2778)
  - Ensured all semibold text has dark color for visibility on light backgrounds
  - Changes applied across all 4 question batch files (73 insertions, 67 deletions)

### Technical
- Maintained modular architecture with 5 TypeScript files for better maintainability
- Zero TypeScript compilation errors across all updated files
- All solutions tested in development environment (Vite dev server on port 3001)
- Git workflow: 3 commits pushed to main branch
  - 148f956: Initial marking scheme integration
  - 61fc4e9: Table header visibility fix
  - dcd2778: Subtotal/total visibility fix

## [1.1.0] - 2025-10-01

### Added
- **Modular Question Paper Architecture**: Introduced batch file approach for large question papers (30+ questions)
  - Created separate batch files for question ranges to improve maintainability
  - Accountancy Sample Paper 2025-26 now uses modular structure:
    - `sample-paper-2025.ts` - Main file with Q1-16 and imports
    - `sample-paper-2025-q17-20.ts` - 3-mark questions batch
    - `sample-paper-2025-q21-22.ts` - 4-mark questions batch
    - `sample-paper-2025-q23-26.ts` - 6-mark questions batch
    - `sample-paper-2025-q27-34.ts` - Part B questions batch
  - Benefits: Better version control, easier collaboration, reduced merge conflicts

### Changed
- Updated documentation to reflect modular approach:
  - `docs/data-structure.md` - Added modular question paper structure section
  - `docs/content-contribution.md` - Added guidelines for choosing single file vs modular approach
  - Enhanced file organization examples and naming conventions

### Fixed
- Questions 1-16 restored to Accountancy Sample Paper 2025-26 with proper ₹ symbol encoding
- All 34 questions now complete with solutions and explanations

### Technical
- Zero TypeScript compilation errors across all files
- Maintained full type safety with Question and QuestionPaper interfaces
- All spread operators working correctly for batch imports
- File sizes kept under 500 lines for better editability

## [1.0.0] - 2025-09-XX

### Added
- Initial release of Neil's Commerce Prep
- Complete React 19 + TypeScript 5.8.2 application
- Vite 6.2.0 build system
- Tailwind CSS 4.1.13 for styling
- Three subjects: Accountancy, Business Studies, Economics
- Question papers for all subjects
- Learning modules with chapters, concepts, case studies
- Text-to-speech functionality
- Responsive design with glassmorphism UI
- GitHub Pages deployment with automated CI/CD

### Features
- Subject tabs for easy navigation
- Mode selector: Practice Papers / Learn
- Question navigation sidebar
- Solution toggle functionality
- Rich content formatting with React nodes
- Keyboard navigation support
- Accessibility features (WCAG AA/AAA compliant)

### Documentation
- Complete architecture documentation
- Design system guide
- Visual design reference
- Data structure documentation
- Development guide
- Content contribution guide
- Setup and deployment guide

---

## Version History Summary

- **1.2.0** (2025-01-XX) - Official CBSE marking scheme integration + table visibility fixes
- **1.1.0** (2025-10-01) - Modular question paper architecture
- **1.0.0** (2025-09-XX) - Initial release

---

**Note**: This changelog tracks significant changes to the application. For detailed commit history, see the repository's git log.
