# Neil's Commerce Prep

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📚 About

A comprehensive study tool for CBSE Class XII Commerce students, featuring interactive question papers with **official CBSE marking scheme solutions** and structured learning modules for Accountancy, Business Studies, and Economics.

### Content Authenticity & Accuracy
- **Verbatim SQP & MS Content**: All Sample Question Papers (SQP) and Marking Schemes (MS) are maintained verbatim with official CBSE PDF files to ensure complete accuracy and authenticity
- **Complete Question Presentation**: Includes all multiple choice options, OR parts, and detailed financial data exactly as published by CBSE
- **Official Solutions**: Comprehensive solutions following official CBSE marking schemes with proper accounting formats

### Latest Updates (v1.2.0)
- ✅ **Official CBSE Marking Scheme Integration**: Accountancy Sample Paper 2025-26 updated with comprehensive solutions from official CBSE marking scheme
- ✅ **Enhanced Solutions**: Detailed journal entries, balance sheets, financial statements with step-by-step working notes
- ✅ **Professional Formatting**: Properly formatted accounting tables with clear visibility
- ✅ **Quality Improvements**: All 34 questions verified against official answer key

## 🚀 Live Demo

Visit the live application: [https://SunenaB3504.github.io/XII-Commerce](https://SunenaB3504.github.io/XII-Commerce)

## 🛠️ Run Locally

**Prerequisites:** Node.js 18+

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SunenaB3504/XII-Commerce.git
   cd XII-Commerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📦 Build & Deploy

### Automatic Deployment (GitHub Pages)
The application automatically deploys to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment
If you prefer to deploy manually:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
XII-Commerce/
├── components/           # Reusable UI components
├── data/                # Static content and data files
│   ├── [subject]/       # Subject-specific question papers
│   │   ├── sample-paper-2025.ts         # Main file
│   │   ├── sample-paper-2025-q17-20.ts  # Modular batch files
│   │   ├── sample-paper-2025-q21-22.ts  # (for large papers 30+ questions)
│   │   └── ...
│   ├── learning-content/ # Structured learning modules
│   └── index.ts         # Central data aggregation
├── docs/                # Documentation
├── types.ts             # TypeScript type definitions
└── [config files]       # Vite, TypeScript, package configs
```

### Modular Question Papers

For maintainability, large question papers (30+ questions) use a modular approach:
- **Main file**: Contains questions 1-16 and imports from batch files
- **Batch files**: Separate files for question ranges (e.g., Q17-20, Q21-22)
- **Benefits**: Better version control, easier collaboration, reduced merge conflicts

## 🎨 Features

- **Official CBSE Solutions**: Sample papers include comprehensive solutions following official CBSE marking schemes
- **Verbatim Content Accuracy**: SQP and MS content maintained exactly as published in official CBSE PDF files
- **Complete Question Papers**: All questions include full options, OR parts, and required financial data
- **Interactive Question Papers**: Practice with CBSE sample papers and board exams with detailed explanations
- **Professional Accounting Format**: Journal entries, balance sheets, and financial statements in proper CBSE format
- **Structured Learning Modules**: Comprehensive study materials with examples and case studies
- **Text-to-Speech**: Accessibility feature for learning content
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, educational-focused interface with excellent visibility

## 📖 Documentation

Detailed documentation is available in the [`docs/`](./docs/) directory:

- [Architecture Overview](./docs/architecture.md)
- [Design System](./docs/design-system.md)
- [Data Structure](./docs/data-structure.md)
- [Development Guide](./docs/development-guide.md)
- [Content Contribution](./docs/content-contribution.md)
- [Setup & Deployment](./docs/setup-deployment.md)

## 🤝 Contributing

We welcome contributions! Please see our [Content Contribution Guide](./docs/content-contribution.md) for details on adding new educational content.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for CBSE Class XII Commerce Students**
