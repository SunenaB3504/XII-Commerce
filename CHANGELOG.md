# Changelog

All notable changes to Neil's Commerce Prep will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

- **1.1.0** (2025-10-01) - Modular question paper architecture
- **1.0.0** (2025-09-XX) - Initial release

---

**Note**: This changelog tracks significant changes to the application. For detailed commit history, see the repository's git log.
