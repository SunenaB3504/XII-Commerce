# Physical Education 2024-25 SQP Implementation Plan

## Objective
Implement the full CBSE Physical Education Sample Question Paper for 2024-25 into the application, ensuring strict adherence to verbatim content for questions and answers, with high-quality AI-generated explanations.

## Source Materials
*   **Questions:** `SQPs\Physical Education\PhysicalEducation-SQPs\PhysicalEducation-SQP-2024-25.pdf` (Verbatim, no changes)
*   **Answers:** `SQPs\Physical Education\PhysicalEducation-SQPs\PhysicalEducation-MS-2024-25.pdf` (Verbatim, update in 'Correct Answer!' section)
*   **Explanations:** `SQPs\Physical Education\physical-education-12-book.pdf` (AI-generated, update in 'How It Works' section, strictly citing Chapter Number, Name, and Topic)

## Implementation SOP

### 1. Preparation & Structure Analysis
*   **Step 1.1:** Analyze the SQP PDF to confirm the total number of questions and the breakdown of 1-mark questions versus others.
*   **Step 1.2:** define the exact batch ranges based on the user's rule:
    *   **1 Mark Questions:** Batch size = 10.
    *   **Other Questions:** Batch size = 5.

### 2. Execution Batches
*   **Batch 1 (Q19-Q28):** Implemented (Corresponds to user provided Q1-Q10, which are actually Section B questions).
*   **Missing Content (Q1-Q18):** SQP PDF source is incorrect (Persian language). Waiting for correct source or user input.
*   **Batch 2 (Next 5 questions):** Q29 onwards.
*   **[Continues...]**

### 3. Per-Batch Workflow (Standard Operating Procedure)
For each batch, perform the following steps:

1.  **Content Extraction:**
    *   Extract **Question Text** verbatim from `PhysicalEducation-SQP-2024-25.pdf`.
    *   Extract **Answer Text** verbatim from `PhysicalEducation-MS-2024-25.pdf`.
    *   **Draft Explanations:** Search the textbook (`physical-education-12-book.pdf`) for the relevant concept. Draft a clear explanation and identify the specific Chapter Number, Chapter Name, and Topic.

2.  **Code Implementation:**
    *   Create a new file `data/physical-education/sample-paper-2025-q[Start]-[End].ts`.
    *   Define the `questions` array exporting `PhysicalEducation2024Q[Start]ToQ[End]`.
    *   Use the `Question` interface:
        *   `question`: Verbatim text.
        *   `solution`: Verbatim MS text.
        *   `explanation`: AI-generated text with "Chapter X: [Name] - [Topic]".

3.  **Integration:**
    *   Update `data/physical-education/pe-sqp-2024-25.ts` to import and spread the new batch into the `questions` array.

4.  **Verification:**
    *   Run `npm run build` to ensure no type errors.
    *   (Optional) Check in browser if critical complexity warrants it.

## Current Status
*   **Plan Created:** Yes
*   **Batch 1:** Pending
*   **Missing Q1-18:** Pending correct source material.
