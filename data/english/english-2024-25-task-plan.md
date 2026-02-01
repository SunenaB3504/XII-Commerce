# English Core 2024-25 SQP Implementation Plan

## Objective
Implement the full CBSE English Core Sample Question Paper for 2024-25 into the application.

## Source Materials
*   **Questions:** `SQPs\English\EnglishCore-SQPs\EnglishCore-SQP-2024-25.pdf` (Verbatim Content)
*   **Answers:** `SQPs\English\EnglishCore-SQPs\EnglishCore-MS-2024-25.pdf` (Verbatim Answers)
*   **Explanations:** `SQPs\English\Englsih-chapters` (AI-generated explanations referencing Chapter Number, Name, and Topic).

## Implementation SOP

### 1. Preparation & Structure Analysis
*   **Total Marks:** 80
*   **Sections:**
    *   **Section A: Reading Skills (22 Marks)**
        *   Passage 1 (Literary - Digital Disconnect): 12 Marks
        *   Passage 2 (Case-based - Healthy Snacking): 10 Marks
    *   **Section B: Creative Writing Skills (18 Marks)**
        *   Notice (Q3)
        *   Invitation/Reply (Q4)
        *   Letter (Q5)
        *   Article/Report (Q6)
    *   **Section C: Literature (40 Marks)**
        *   Extracts (Poetry - Keeping Quiet/Roadside Stand, Vistas - Antarctica/Zitkala-Sa, Flamingo - Last Lesson/Lost Spring)
        *   Short Answer (Flamingo, Vistas)
        *   Long Answer (Flamingo, Vistas)

### 2. Execution Batches
*   **Batch 1 (Reading 1):** Section A, Passage 1 (Q1 I-IX)
*   **Batch 2 (Reading 2):** Section A, Passage 2 (Q2 I-VIII)
*   **Batch 3 (Writing):** Section B (Q3 - Q6)
*   **Batch 4 (Lit - Poetry Extract):** Section C, Q7 (A & B)
*   **Batch 5 (Lit - Vistas Extract):** Section C, Q8 (A & B)
*   **Batch 6 (Lit - Flamingo Extract):** Section C, Q9 (A & B)
*   **Batch 7 (Lit - Short Answer):** Section C, Q10 & Q11
*   **Batch 8 (Lit - Long Answer):** Section C, Q12 & Q13

### 3. Per-Batch Workflow (Standard Operating Procedure)
For each batch, perform the following steps:

1.  **Content Extraction:**
    *   Extract **Question Text** verbatim from `EnglishCore-SQP-2024-25.pdf`.
    *   Extract **Answer Text** verbatim from `EnglishCore-MS-2024-25.pdf`.
    *   **Draft Explanations:**
        *   For **Literature**: Reference the specific chapter in `Englsih-chapters` (Flamingo/Vistas).
        *   For **Reading/Writing**: Explain the skill/format involved.

2.  **Code Implementation:**
    *   Create a new file `data/english/sample-paper-2025-batch-[n].ts`.
    *   Define the `questions` array.
    *   Use the `Question` interface.

3.  **Integration:**
    *   Create `data/english/sample-paper-2025.ts`.
    *   Update `data/english/sample-paper-2025.ts` to import and spread the new batch.
    *   Update `data/index.ts` to include the new paper.

4.  **Verification:**
    *   Run `npm run build` to ensure no type errors.
    *   Check in browser.

## Current Status
*   **Plan Created:** Yes
*   **Batch 1 (Reading 1):** Completed
*   **Batch 2 (Reading 2):** Completed
*   **Batch 3 (Writing):** Completed
*   **Batch 4 (Lit - Poetry):** Completed
*   **Batch 5 (Lit - Vistas):** Completed
*   **Batch 6 (Lit - Flamingo):** Completed
*   **Batch 7 (Lit - SA):** Completed
*   **Batch 8 (Lit - LA):** Completed
