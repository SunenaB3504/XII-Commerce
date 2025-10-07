# MCQ Pool Population Guide

## Current Status (October 7, 2025)

The centralized MCQ pool has been created with the infrastructure and only 3 Business Studies Chapter 2 questions as examples.

## Available Source Data

### Business Studies (Sample Paper 2025)
- **Total 1-mark MCQs:** 20 questions (Questions 1-20)
- **Chapters Covered:**
  - Chapter 2 (Principles of Management): Q1, Q2, Q4
  - Chapter 7 (Directing): Q3 (Maslow), Q5 (Communication), Q10 (Communication sequence)
  - Chapter 6 (Staffing): Q5 (Compensation), Q9 (Recruitment), Q15 (Training)
  - Chapter 3 (Business Environment): Q6 (Social environment)
  - Chapter 10 (Marketing): Q7 (Product), Q12 (Customer value)
  - Chapter 8 (Controlling): Q8 (Controlling)
  - Chapter 11 (Consumer Protection): Q11 (Depository)
  - Chapter 4 (Planning): Q14 (Dynamic environment)
  - Chapter 9 (Financial Management): Q16, Q17, Q18, Q19, Q20
  - Chapter 5 (Organising): Q13 (Management hierarchy)

### Accountancy (Sample Paper 2025)
- **Total 1-mark MCQs:** 16 questions (Questions 1-16)
- **Chapters Covered:**
  - Chapter 1 (Partnership Accounts): Q1, Q2
  - Chapter 2 (Admission of Partner): Q5, Q10
  - Chapter 3 (Retirement/Death): Q8
  - Chapter 4 (Dissolution): Q9, Q15
  - Chapter 5 (Accounting for Share Capital): Q3, Q4, Q12-14
  - Chapter 6 (Debentures): Q12-14
  - Chapter 7 (Company Final Accounts): None in 1-mark section
  - Chapter 8 (Analysis of Financial Statements): None in 1-mark section
  - Chapter 9 (Accounting Ratios): None in 1-mark section
  - Chapter 10 (Cash Flow Statement): None in 1-mark section

### Economics (Sample Paper 2025)
- **Total 1-mark MCQs:** 27 questions (Questions 1-10 Macro, 18-27 Indian Economy + Micro)
- **Macroeconomics Chapters:**
  - National Income: Q5, Q7
  - Money & Banking: Q3, Q8, Q10
  - Determination of Income: Q1, Q6
  - Government Budget: None in 1-mark section
  - Balance of Payments: Q4, Q9
  - GDP/Deflator: Q2
- **Indian Economy Chapters:**
  - Q18-27 covering various topics

## Recommended Approach for Full Population

### Phase 1: Sample Paper 2025 (All Subjects) ✅ IN PROGRESS
Extract all 1-mark MCQs from sample-paper-2025.ts files

**Estimated Total:** ~63 questions
- Business Studies: 20 MCQs
- Accountancy: 16 MCQs  
- Economics: 27 MCQs

### Phase 2: Board Exam Papers
Extract from:
- Business Studies: board-exam-66-*.ts files (6 papers)
- Accountancy: board-exam-67-*.ts files (4 papers)
- Economics: board-exam-58-*.ts files (6 papers)

**Estimated Total:** ~200-300 additional questions

### Phase 3: Challenge Papers
Extract from business-studies-challenge-*.ts files (2021-2025)

**Estimated Total:** ~100-150 additional questions

## Quick Population Script

Due to the complexity of React.createElement statements and the volume of questions, here's the recommended manual process:

### For Each Question:
1. **Copy the question object** from source file
2. **Transform into MCQPoolQuestion format:**
   ```typescript
   {
     id: 'SUBJECT-CH#-###',  // e.g., 'BS-CH2-001'
     subject: 'Business Studies' | 'Accountancy' | 'Economics',
     chapter: '1' | '2' | '3' etc.,
     topic: 'Brief topic name',
     source: 'Sample Paper 2025' | 'Board Exam 66/1/1' etc.,
     difficulty: 'easy' | 'medium' | 'hard',
     examWeightage: 20,  // Chapter weightage %
     marks: 1,
     question: [COPY from source],
     solution: [COPY from source],
     explanation: [COPY from source]
   }
   ```

### Chapter Weightage Reference:

**Business Studies:**
- Ch 1: 10%, Ch 2: 20%, Ch 3: 14%, Ch 4: 10%
- Ch 5: 10%, Ch 6: 10%, Ch 7: 10%, Ch 8: 8%
- Ch 9: 4%, Ch 10: 2%, Ch 11: 2%

**Accountancy:**
- Ch 1: 15%, Ch 2: 12%, Ch 3: 10%, Ch 4: 8%
- Ch 5: 10%, Ch 6: 10%, Ch 7: 10%, Ch 8: 8%
- Ch 9: 9%, Ch 10: 8%

**Economics:**
- All chapters: 10% each (equal distribution)

## Topics by Chapter

### Business Studies
- **Ch 1:** Nature, Objectives, Importance of Management
- **Ch 2:** Fayol's Principles, Taylor's Scientific Management
- **Ch 3:** Economic, Social, Technological, Political, Legal Environment
- **Ch 4:** Planning process, Types of plans, Limitations
- **Ch 5:** Organisational structure, Delegation, Decentralisation
- **Ch 6:** Recruitment, Selection, Training, Development
- **Ch 7:** Motivation theories, Leadership, Communication
- **Ch 8:** Process of Control, Techniques
- **Ch 9:** Financial decisions, Capital structure
- **Ch 10:** Marketing mix, Functions
- **Ch 11:** Consumer rights, Redressal

### Accountancy
- **Ch 1:** Goodwill, Capital accounts
- **Ch 2:** New partner admission, Revaluation
- **Ch 3:** Retirement, Death of partner
- **Ch 4:** Dissolution
- **Ch 5:** Share capital, Issue, Forfeiture, Reissue
- **Ch 6:** Debentures issue, Redemption
- **Ch 7:** Company final accounts
- **Ch 8:** Financial statements analysis
- **Ch 9:** Ratios - Liquidity, Solvency, Activity, Profitability
- **Ch 10:** Cash flow statement

### Economics (Macro)
- **Ch 1:** National income concepts
- **Ch 2:** Money, Banking
- **Ch 3:** Income determination
- **Ch 4:** Government budget
- **Ch 5:** Balance of payments

### Economics (Indian)
- **Ch 1:** Colonial economy
- **Ch 2:** Economic planning
- **Ch 3:** Agriculture
- **Ch 4:** Industry
- **Ch 5:** External sector
- **Ch 6:** Education, Health
- **Ch 7:** Employment
- **Ch 8:** Infrastructure
- **Ch 9:** Environment
- **Ch 10:** Comparative development (India, China, Pakistan)

## Next Steps

1. ✅ Create infrastructure (DONE)
2. ✅ Add 3 sample BS Chapter 2 questions (DONE)
3. ⏳ Add remaining 17 BS Sample Paper MCQs
4. ⏳ Add 16 Accountancy Sample Paper MCQs
5. ⏳ Add 27 Economics Sample Paper MCQs
6. ⏳ Add MCQs from Board Exam papers
7. ⏳ Add MCQs from Challenge papers

## Automation Considerations

Given the complexity of React.createElement structures, **manual curation is recommended** for:
- Quality control
- Accurate chapter/topic assignment
- Proper difficulty classification
- Verifying exam weightage

**Estimated Time:** 
- Sample Papers: 2-3 hours
- Board Exams: 4-5 hours
- Challenge Papers: 2-3 hours
- **Total:** ~10 hours for complete population

## Tools Available

- `data/mcq-extractor.ts` - Can help identify MCQs from papers
- But final curation should be manual for quality

---

**Status:** Infrastructure Complete, Initial Population In Progress  
**Next Priority:** Complete Sample Paper 2025 population for all 3 subjects  
**Target:** 63 questions from sample papers, then expand to 300+ from all sources
