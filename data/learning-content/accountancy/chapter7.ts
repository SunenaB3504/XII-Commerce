import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter7Module: LearningModule = {
  chapter: "7",
  title: "Financial Statements of a Company",
  overview: "This chapter focuses on the preparation and presentation of a company's final accounts. We'll learn the specific format of the Balance Sheet and the Statement of Profit and Loss as prescribed by Schedule III of the Companies Act, 2013. Understanding this format and the classification of items under various major heads and sub-heads is crucial for both preparing and analyzing financial statements.",
  keyConcepts: [
    {
      title: "Nature and Objectives of Financial Statements",
      content: React.createElement('p', null, "Financial statements are the end products of the accounting process. Their primary objective is to provide information about the financial performance (profitability) and financial position (solvency) of a company, which is useful to a wide range of users for making economic decisions."),
    },
    {
      title: "Format of the Balance Sheet (Schedule III, Part I)",
      content: React.createElement('p', null, "The Balance Sheet must be prepared in a vertical format. It has two main sides: I. Equity and Liabilities and II. Assets. Each side has major heads and sub-heads."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Equity and Liabilities (Major Heads):'), " Shareholders' Funds, Share Application Money Pending Allotment, Non-Current Liabilities, Current Liabilities."),
        React.createElement('li', null, React.createElement('b', null, 'Assets (Major Heads):'), " Non-Current Assets, Current Assets.")
      )
    },
    {
      title: "Form of the Statement of Profit and Loss (Schedule III, Part II)",
      content: React.createElement('p', null, "This statement is also prepared in a prescribed vertical format. It starts with Revenue from Operations and deducts various expenses to arrive at the Profit before Tax."),
      examFocus: true,
      example: React.createElement('p', null, "The main components include: I. Revenue from Operations, II. Other Income, III. Total Revenue, IV. Expenses (like Cost of Materials Consumed, Employee Benefit Expenses, Finance Costs, Depreciation), V. Profit before tax.")
    }
  ],
  keywords: [
    { term: "Schedule III", definition: "Part of the Companies Act, 2013 that prescribes the format for the preparation of the Balance Sheet and Statement of Profit and Loss." },
    { term: "Operating Cycle", definition: "The time taken by a company to acquire assets for processing and convert them into cash and cash equivalents. It is used to classify assets and liabilities as current or non-current." },
    { term: "Current Assets", definition: "Assets expected to be realised or consumed within the company's operating cycle or 12 months, whichever is longer." },
    { term: "Current Liabilities", definition: "Liabilities expected to be settled within the company's operating cycle or 12 months, whichever is longer." },
    { term: "Shareholders' Funds", definition: "The equity of the owners, consisting of Share Capital and Reserves & Surplus." }
  ],
  caseStudies: [
    {
      title: "Classifying Balance Sheet Items",
      scenario: "A company has the following items: Goodwill, 10% Debentures (repayable after 5 years), Inventories, and Bills Payable.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Classification as per Schedule III:"),
        React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Goodwill:"), ' Major Head: Non-Current Assets; Sub-head: Fixed Assets - Intangible.'),
          React.createElement('li', null, React.createElement('b', null, "10% Debentures:"), " Major Head: Non-Current Liabilities; Sub-head: Long-term Borrowings."),
          React.createElement('li', null, React.createElement('b', null, "Inventories:"), ' Major Head: Current Assets; Sub-head: Inventories.'),
          React.createElement('li', null, React.createElement('b', null, "Bills Payable:"), ' Major Head: Current Liabilities; Sub-head: Trade Payables.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 7 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Financial statements of a company must follow the vertical format of ", React.createElement('b', null, 'Schedule III'), "."),
      React.createElement('li', null, "Balance Sheet Main Heads: ", React.createElement('b', null, "Equity & Liabilities"), " and ", React.createElement('b', null, "Assets"), "."),
      React.createElement('li', null, "P&L Statement starts with ", React.createElement('b', null, 'Revenue from Operations'), "."),
      React.createElement('li', null, "Classification into ", React.createElement('b', null, 'Current'), " and ", React.createElement('b', null, 'Non-Current'), " is based on the Operating Cycle or 12 months.")
    )
  )
};