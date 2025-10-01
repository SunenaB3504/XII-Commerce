import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter8Module: LearningModule = {
  chapter: "8",
  title: "Analysis of Financial Statements",
  overview: "Preparing financial statements is just one part of the story. This chapter deals with how we can analyze these statements to derive meaningful conclusions about a company's performance and financial position. We will focus on two primary tools: Comparative Statements and Common-Size Statements, which help in understanding trends and the structural composition of financial data.",
  keyConcepts: [
    {
      title: "Meaning and Objectives of Financial Analysis",
      content: React.createElement('p', null, "Financial statement analysis is a systematic process of reviewing a company's financial statements to make better economic decisions. Its objectives are to assess the firm's earning capacity, managerial efficiency, and solvency (both short-term and long-term)."),
    },
    {
      title: "Tools of Financial Analysis",
      content: React.createElement('p', null, "Several tools are used for analysis, including Comparative Statements, Common-Size Statements, Trend Analysis, Ratio Analysis, and Cash Flow Analysis. This chapter focuses on the first two."),
    },
    {
      title: "Comparative Statements",
      content: React.createElement('p', null, "These statements present financial data from different time periods side-by-side to allow for comparison. They show the absolute change and the percentage change for each line item. This is also known as 'horizontal analysis' as it compares figures across time."),
      examFocus: true,
    },
    {
      title: "Common-Size Statements",
      content: React.createElement('p', null, "In these statements, each line item is expressed as a percentage of a common base. For the Balance Sheet, the common base is Total Assets. For the Statement of Profit and Loss, the common base is Revenue from Operations. This is also known as 'vertical analysis' as it analyzes the relationship of items within a single period."),
      examFocus: true,
    }
  ],
  keywords: [
    { term: "Financial Analysis", definition: "The process of evaluating a business's financial statements for decision-making purposes." },
    { term: "Comparative Statement", definition: "A statement that compares financial data from two or more accounting periods." },
    { term: "Horizontal Analysis", definition: "The comparison of financial information over a series of reporting periods." },
    { term: "Common-Size Statement", definition: "A statement where each line item is expressed as a percentage of a base figure (e.g., total assets or revenue)." },
    { term: "Vertical Analysis", definition: "The analysis of financial statements where each line item is listed as a percentage of another item for a single period." },
  ],
  caseStudies: [
    {
      title: "Comparing Two Years of Sales",
      scenario: "A company's Revenue from Operations was ₹10,00,000 in 2022 and ₹12,00,000 in 2023. Its Cost of Revenue from Operations was ₹6,00,000 in 2022 and ₹7,80,000 in 2023.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Analysis using Comparative & Common-Size Statements:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Comparative Analysis:"), " Revenue increased by ₹2,00,000, which is a 20% increase [(2,00,000 / 10,00,000) * 100]. Cost increased by ₹1,80,000, which is a 30% increase. The analysis shows that costs grew faster than sales, which is a cause for concern."),
          React.createElement('li', null, React.createElement('b', null, "Common-Size Analysis:"), " In 2022, Cost was 60% of Revenue (6L/10L). In 2023, Cost was 65% of Revenue (7.8L/12L). This vertical analysis confirms that the company's profitability per rupee of sale has decreased.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 8 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Financial analysis is about making sense of the numbers."),
      React.createElement('li', null, React.createElement('b', null, 'Comparative Statements'), " = Side-by-side comparison of two years. It's ", React.createElement('b', null, 'Horizontal Analysis'), ". Focus on Absolute and Percentage Change."),
      React.createElement('li', null, React.createElement('b', null, 'Common-Size Statements'), " = Expressing everything as a percentage of a common base. It's ", React.createElement('b', null, 'Vertical Analysis'), "."),
      React.createElement('li', null, "Base for Common-Size Balance Sheet = ", React.createElement('b', null, 'Total Assets'), "."),
      React.createElement('li', null, "Base for Common-Size P&L Statement = ", React.createElement('b', null, 'Revenue from Operations'), ".")
    )
  )
};