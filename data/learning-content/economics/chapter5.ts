import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter5Module: LearningModule = {
  chapter: "5",
  title: "Government Budget and the Economy",
  overview: "This chapter examines the government's role in the economy through the lens of its annual budget. We'll break down the components of the government's receipts and expenditures, understand the different types of budget deficits (Revenue, Fiscal, and Primary), and explore how the government uses its fiscal policy to achieve economic and social objectives.",
  keyConcepts: [
    {
      title: "Objectives of Government Budget",
      content: React.createElement('p', null, "The government budget is not just an account of finances; it's a tool to achieve key objectives."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Allocation Function:'), ' Providing public goods (like roads, defense) that the market cannot provide.'),
        React.createElement('li', null, React.createElement('b', null, 'Redistribution Function:'), ' Using taxes and subsidies to reduce inequalities of income and wealth.'),
        React.createElement('li', null, React.createElement('b', null, 'Stabilisation Function:'), ' Managing the economy to control inflation or combat unemployment.')
      )
    },
    {
      title: "Components of the Budget",
      content: React.createElement('p', null, "The budget is divided into two main accounts: the Revenue Budget and the Capital Budget."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Revenue Receipts:'), " Receipts that do not create a liability or reduce an asset (e.g., Tax Revenue, Non-Tax Revenue like fines and fees)."),
        React.createElement('li', null, React.createElement('b', null, 'Capital Receipts:'), " Receipts that either create a liability (e.g., Borrowings) or reduce an asset (e.g., Disinvestment)."),
        React.createElement('li', null, React.createElement('b', null, 'Revenue Expenditure:'), " Expenditure that does not create an asset or reduce a liability (e.g., salaries, pensions, subsidies, interest payments)."),
        React.createElement('li', null, React.createElement('b', null, 'Capital Expenditure:'), " Expenditure that either creates an asset (e.g., building roads, schools) or reduces a liability (e.g., repayment of loans).")
      )
    },
    {
      title: "Measures of Government Deficit",
      content: React.createElement('p', null, "A deficit occurs when expenditure exceeds revenue. There are three key measures."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Revenue Deficit:'), ' Excess of Revenue Expenditure over Revenue Receipts. It shows the government is dissaving.'),
        React.createElement('li', null, React.createElement('b', null, 'Fiscal Deficit:'), " Excess of Total Expenditure over Total Receipts (excluding borrowings). It indicates the total borrowing requirement of the government."),
        React.createElement('li', null, React.createElement('b', null, 'Primary Deficit:'), " Fiscal Deficit minus Interest Payments. It shows the borrowing requirement for current year's expenses, excluding interest on past debt.")
      )
    }
  ],
  keywords: [
    { term: "Government Budget", definition: "An annual statement of the estimated receipts and expenditures of the government for a financial year." },
    { term: "Public Goods", definition: "Goods that are non-rivalrous and non-excludable, which are typically provided by the government (e.g., national defense)." },
    { term: "Revenue Deficit", definition: "The excess of government's revenue expenditure over its revenue receipts." },
    { term: "Fiscal Deficit", definition: "The excess of total government expenditure over total receipts, excluding borrowings. It represents the total borrowing needed." },
    { term: "Primary Deficit", definition: "Fiscal deficit of the current year minus interest payments on previous borrowings." },
    { term: "Disinvestment", definition: "The sale of a part of the equity of a Public Sector Undertaking (PSU) by the government." }
  ],
  caseStudies: [
    {
      title: "Decoding the Budget Numbers",
      scenario: "For the year 2024-25, a country's budget shows: Revenue Receipts = ₹100 crore, Capital Receipts (excluding borrowing) = ₹20 crore, Revenue Expenditure = ₹125 crore, Capital Expenditure = ₹35 crore, and Interest Payments = ₹15 crore.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculating the Deficits:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Revenue Deficit:"), ' = Revenue Expenditure - Revenue Receipts = ₹125cr - ₹100cr = ₹25 crore. (This shows the government is borrowing to meet its daily running expenses).'),
          React.createElement('li', null, React.createElement('b', null, "Fiscal Deficit:"), ' = (Rev Exp + Cap Exp) - (Rev Rec + Non-debt Cap Rec) = (₹125cr + ₹35cr) - (₹100cr + ₹20cr) = ₹160cr - ₹120cr = ₹40 crore. (This is the total amount the government needs to borrow).'),
          React.createElement('li', null, React.createElement('b', null, "Primary Deficit:"), ' = Fiscal Deficit - Interest Payments = ₹40cr - ₹15cr = ₹25 crore. (This shows the borrowing needed for expenses other than paying past interest).')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 5 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Budget Objectives: Allocation, Redistribution, Stabilisation."),
      React.createElement('li', null, React.createElement('b', null, "Revenue items"), " are recurring and don't affect assets/liabilities."),
      React.createElement('li', null, React.createElement('b', null, "Capital items"), " are non-recurring and do affect assets/liabilities."),
      React.createElement('li', null, React.createElement('b', null, "Revenue Deficit"), " = Rev. Exp. > Rev. Rec. (Bad, borrowing for consumption)."),
      React.createElement('li', null, React.createElement('b', null, "Fiscal Deficit"), " = Total Exp. > Total Rec. (excluding borrowing). It equals total borrowing."),
      React.createElement('li', null, React.createElement('b', null, "Primary Deficit"), " = Fiscal Deficit - Interest Payments.")
    )
  )
};
