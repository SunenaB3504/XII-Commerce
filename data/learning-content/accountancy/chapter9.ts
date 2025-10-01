import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter9Module: LearningModule = {
  chapter: "9",
  title: "Accounting Ratios",
  overview: "Ratio analysis is a powerful tool of financial analysis that establishes a quantitative relationship between two accounting figures to interpret the financial statements. This chapter explores the four main categories of ratios: Liquidity, Solvency, Activity (or Turnover), and Profitability. We will learn how to calculate these ratios and, more importantly, what they reveal about a firm's performance.",
  keyConcepts: [
    {
      title: "Liquidity Ratios",
      content: React.createElement('p', null, "These ratios measure a firm's ability to meet its short-term obligations (current liabilities)."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Current Ratio:'), " Current Assets / Current Liabilities. (Ideal: 2:1)"),
        React.createElement('li', null, React.createElement('b', null, 'Quick Ratio (or Acid-Test Ratio):'), " Quick Assets / Current Liabilities. (Quick Assets = Current Assets - Inventories). (Ideal: 1:1)")
      )
    },
    {
      title: "Solvency Ratios",
      content: React.createElement('p', null, "These ratios assess a firm's ability to meet its long-term obligations."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Debt-Equity Ratio:'), " Long-term Debt / Shareholders' Funds. (A lower ratio is generally safer)."),
        React.createElement('li', null, React.createElement('b', null, 'Total Assets to Debt Ratio:'), " Total Assets / Long-term Debt. (Indicates safety margin for lenders).")
      )
    },
    {
      title: "Activity (Turnover) Ratios",
      content: React.createElement('p', null, "These ratios measure how efficiently a company is using its resources to generate sales."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Inventory Turnover Ratio:'), " Cost of Revenue from Operations / Average Inventory. (Measures how fast inventory is sold)."),
        React.createElement('li', null, React.createElement('b', null, 'Trade Receivables Turnover Ratio:'), " Net Credit Revenue from Operations / Average Trade Receivables. (Measures efficiency in collecting dues from debtors).")
      )
    },
    {
      title: "Profitability Ratios",
      content: React.createElement('p', null, "These ratios measure the overall financial performance and profitability of the business."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Gross Profit Ratio:'), " (Gross Profit / Revenue from Operations) x 100."),
        React.createElement('li', null, React.createElement('b', null, 'Net Profit Ratio:'), " (Net Profit / Revenue from Operations) x 100."),
        React.createElement('li', null, React.createElement('b', null, 'Return on Investment (ROI):'), " (Profit Before Interest & Tax / Capital Employed) x 100.")
      )
    }
  ],
  keywords: [
    { term: "Ratio Analysis", definition: "The process of determining and interpreting numerical relationships based on financial statements." },
    { term: "Liquidity", definition: "A firm's ability to meet its short-term financial obligations." },
    { term: "Solvency", definition: "A firm's ability to meet its long-term financial obligations." },
    { term: "Turnover", definition: "A measure of how efficiently a company uses its assets to generate sales." },
    { term: "Profitability", definition: "A company's ability to generate profit relative to its revenue, assets, and equity." }
  ],
  caseStudies: [
    {
      title: "Assessing a Company's Health",
      scenario: "Company A has Current Assets of ₹2,00,000 and Current Liabilities of ₹1,00,000. Company B has Current Assets of ₹5,00,000 and Current Liabilities of ₹4,00,000.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Analysis using Current Ratio:"),
        React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
          React.createElement('li', null, "Company A's Current Ratio = 2,00,000 / 1,00,000 = 2:1."),
          React.createElement('li', null, "Company B's Current Ratio = 5,00,000 / 4,00,000 = 1.25:1."),
        ),
        React.createElement('p', {className:'mt-2'}, "Conclusion: Although Company B has larger current assets, Company A is in a much better short-term financial position. Its current ratio of 2:1 (the ideal benchmark) indicates it has twice the amount of current assets to cover its current liabilities, providing a comfortable safety margin. Company B's ratio is much lower, indicating potential liquidity risk.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 9 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, React.createElement('b', null, 'Liquidity (Short-term):'), " Current Ratio (2:1), Quick Ratio (1:1)."),
      React.createElement('li', null, React.createElement('b', null, 'Solvency (Long-term):'), " Debt-Equity Ratio (lower is better), Total Assets to Debt."),
      React.createElement('li', null, React.createElement('b', null, 'Activity (Efficiency):'), " Inventory Turnover (higher is better), Trade Receivables Turnover (higher is better)."),
      React.createElement('li', null, React.createElement('b', null, 'Profitability (Performance):'), " GP Ratio, NP Ratio, Operating Ratio, ROI (higher is better).")
    )
  )
};