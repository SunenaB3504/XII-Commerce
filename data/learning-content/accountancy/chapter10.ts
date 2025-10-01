import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter10Module: LearningModule = {
  chapter: "10",
  title: "Cash Flow Statement",
  overview: "The Cash Flow Statement is a crucial financial statement that provides information about the historical changes in a company's cash and cash equivalents. It classifies cash flows into three main activities: Operating, Investing, and Financing. This statement helps users assess a company's ability to generate cash, meet its obligations, and fund its operations and investments.",
  keyConcepts: [
    {
      title: "Objectives of Cash Flow Statement",
      content: React.createElement('p', null, "The primary objective is to provide information about a company's cash receipts and cash payments during a period. It helps in assessing a firm's liquidity, solvency, and financial flexibility."),
    },
    {
      title: "Classification of Activities (as per AS-3)",
      content: React.createElement('p', null, "Understanding this classification is the key to preparing the statement correctly."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Operating Activities:'), " These are the principal revenue-producing activities of the enterprise (e.g., cash from sales, payments to suppliers and employees)."),
        React.createElement('li', null, React.createElement('b', null, 'Investing Activities:'), " These include the acquisition and disposal of long-term assets and other investments not included in cash equivalents (e.g., purchase/sale of machinery or investments)."),
        React.createElement('li', null, React.createElement('b', null, 'Financing Activities:'), " These are activities that result in changes in the size and composition of the owner's capital and borrowings (e.g., issue of shares, repayment of loans, payment of dividends).")
      )
    },
    {
      title: "Preparing Cash Flow from Operating Activities (Indirect Method)",
      content: React.createElement('p', null, "This is the most common method and a major focus of exams. It starts with 'Net Profit before Tax and Extraordinary Items' and makes a series of adjustments."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Step 1:'), ' Start with Net Profit before Tax.'),
        React.createElement('li', null, React.createElement('b', null, 'Step 2:'), " Adjust for Non-cash and Non-operating items (Add back depreciation, loss on sale of assets; Subtract gain on sale of assets)."),
        React.createElement('li', null, React.createElement('b', null, 'Step 3:'), " This gives 'Operating Profit before Working Capital Changes'."),
        React.createElement('li', null, React.createElement('b', null, 'Step 4:'), " Adjust for changes in Current Assets and Current Liabilities (Add decrease in CA & increase in CL; Subtract increase in CA & decrease in CL)."),
        React.createElement('li', null, React.createElement('b', null, 'Step 5:'), " Finally, subtract Income Tax paid.")
      )
    }
  ],
  keywords: [
    { term: "Cash Flow Statement", definition: "A statement that shows how changes in balance sheet accounts and income affect cash and cash equivalents." },
    { term: "Operating Activities", definition: "The principal revenue-producing activities of an enterprise." },
    { term: "Investing Activities", definition: "The acquisition and disposal of long-term assets and other investments." },
    { term: "Financing Activities", definition: "Activities that result in changes in the size and composition of the owner's capital and borrowings." },
    { term: "Cash Equivalents", definition: "Short-term, highly liquid investments that are readily convertible to known amounts of cash." },
  ],
  caseStudies: [
    {
      title: "Finding Cash from Operations",
      scenario: "A company reports a Net Profit after Tax of ₹1,50,000. The tax paid was ₹50,000. During the year, depreciation charged was ₹20,000, and there was a gain on the sale of machinery of ₹10,000. Current assets (debtors) increased by ₹30,000 and current liabilities (creditors) increased by ₹15,000.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculation using Indirect Method:"),
        React.createElement('table', { className: 'w-full text-left' },
          React.createElement('tbody', null,
            React.createElement('tr', null, React.createElement('td', null, 'Net Profit after Tax'), React.createElement('td', {className:'text-right'}, '1,50,000')),
            React.createElement('tr', null, React.createElement('td', null, 'Add: Tax'), React.createElement('td', {className:'text-right'}, '50,000')),
            React.createElement('tr', {className:'font-bold border-t'}, React.createElement('td', null, 'Net Profit before Tax'), React.createElement('td', {className:'text-right'}, '2,00,000')),
            React.createElement('tr', null, React.createElement('td', {className:'pl-4'}, 'Add: Depreciation (non-cash)'), React.createElement('td', {className:'text-right'}, '20,000')),
            React.createElement('tr', null, React.createElement('td', {className:'pl-4'}, 'Less: Gain on Sale (non-operating)'), React.createElement('td', {className:'text-right'}, '(10,000)')),
            React.createElement('tr', {className:'font-bold border-t'}, React.createElement('td', null, 'Operating Profit before WC Changes'), React.createElement('td', {className:'text-right'}, '2,10,000')),
            React.createElement('tr', null, React.createElement('td', {className:'pl-4'}, 'Less: Increase in Debtors (CA)'), React.createElement('td', {className:'text-right'}, '(30,000)')),
            React.createElement('tr', null, React.createElement('td', {className:'pl-4'}, 'Add: Increase in Creditors (CL)'), React.createElement('td', {className:'text-right'}, '15,000')),
            React.createElement('tr', {className:'font-bold border-t'}, React.createElement('td', null, 'Cash Generated from Operations'), React.createElement('td', {className:'text-right'}, '1,95,000')),
            React.createElement('tr', null, React.createElement('td', {className:'pl-4'}, 'Less: Tax Paid'), React.createElement('td', {className:'text-right'}, '(50,000)')),
            React.createElement('tr', {className:'font-bold border-t bg-green-100'}, React.createElement('td', null, 'Net Cash from Operating Activities'), React.createElement('td', {className:'text-right'}, '1,45,000'))
          )
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 10 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Three Activities: ", React.createElement('b', null, 'Operating'), " (main business), ", React.createElement('b', null, 'Investing'), " (long-term assets), ", React.createElement('b', null, 'Financing'), " (capital & borrowings)."),
      React.createElement('li', null, "For ", React.createElement('b', null, 'Operating Activities (Indirect Method)'), ": Start with Net Profit before Tax."),
      React.createElement('li', null, "Adjust for Non-Cash items (like Depreciation - ADD) and Non-Operating items (like Gain on Sale - SUBTRACT)."),
      React.createElement('li', null, "Adjust for Working Capital changes: Increase in CA (-), Decrease in CA (+), Increase in CL (+), Decrease in CL (-)."),
      React.createElement('li', null, "Finally, subtract Tax Paid.")
    )
  )
};