import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter3Module: LearningModule = {
  chapter: "3",
  title: "Reconstitution: Retirement/Death of a Partner",
  overview: "This chapter addresses the accounting adjustments required when a partner leaves the firm, either through retirement or death. The process is the reverse of admission. The core task is to calculate the total amount due to the outgoing partner (including their share of goodwill, revaluation profit, and accumulated reserves) and settle their account.",
  keyConcepts: [
    {
      title: "Gaining Ratio",
      content: React.createElement('p', null, "When a partner retires, their share of profit is acquired by the remaining partners. The ratio in which they acquire this share is called the gaining ratio. This is the most important calculation in this chapter as it's used for the goodwill adjustment."),
      examFocus: true,
      example: React.createElement('p', { className: "font-mono bg-slate-100 p-2 rounded" }, 'Gaining Ratio = New Profit Share – Old Profit Share')
    },
    {
      title: "Accounting Treatment of Goodwill",
      content: React.createElement('p', null, "The retiring or deceased partner is entitled to their share of the firm's goodwill. This share is compensated by the gaining partners. The adjustment is made through the partners' capital accounts without opening a Goodwill Account."),
      examFocus: true,
      example: React.createElement('p', null, "Journal Entry: ", React.createElement('i', null, "Gaining Partners' Capital A/cs Dr. (in gaining ratio) To Retiring/Deceased Partner's Capital A/c."))
    },
    {
      title: "Revaluation and Accumulated Profits",
      content: React.createElement('p', null, "Similar to admission, assets and liabilities are revalued, and a Revaluation Account is prepared. The profit or loss on revaluation, along with any accumulated profits or reserves, is distributed among ALL partners (including the retiring/deceased partner) in their OLD profit-sharing ratio."),
      examFocus: true,
    },
    {
      title: "Profit/Loss up to Date of Death/Retirement",
      content: React.createElement('p', null, "If a partner retires or dies during the year, their share of profit or loss from the last balance sheet date to the date of retirement/death must be calculated. This is usually done on a time basis or turnover basis and is debited to a temporary account called 'Profit & Loss Suspense Account'."),
    },
    {
      title: "Settlement of Amount Due",
      content: React.createElement('p', null, "The final balance of the outgoing partner's capital account represents the total amount due to them. This amount is either paid immediately in cash/bank, or it is transferred to their Loan Account (in case of retirement) or their Executor's Account (in case of death), to be paid later with interest."),
    }
  ],
  keywords: [
    { term: "Retirement of a Partner", definition: "The withdrawal of a partner from the business of the firm." },
    { term: "Gaining Ratio", definition: "The ratio in which the continuing partners acquire the share of profit from the retiring partner." },
    { term: "P&L Suspense Account", definition: "A temporary account used to record the deceased/retiring partner's share of profit for the interim period." },
    { term: "Executor's Account", definition: "An account representing the amount due to the legal representatives of a deceased partner." },
    { term: "Joint Life Policy", definition: "An insurance policy taken out by the firm on the joint lives of the partners, often used to settle claims on death." }
  ],
  caseStudies: [
    {
      title: "The Retiring Partner's Settlement",
      scenario: "Keshav, Nirmal, and Pankaj are partners sharing profits 4:3:2. Their goodwill is valued at ₹72,000. Nirmal retires. Keshav and Pankaj decide to share future profits in the ratio 5:3.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Key Adjustments for Goodwill:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Calculate Nirmal's Share of Goodwill:"), ' 3/9 of ₹72,000 = ₹24,000.'),
          React.createElement('li', null, React.createElement('b', null, "Calculate Gaining Ratio:"),
            React.createElement('p', null, "Keshav's Gain = New (5/8) - Old (4/9) = 13/72"),
            React.createElement('p', null, "Pankaj's Gain = New (3/8) - Old (2/9) = 11/72. So, Gaining Ratio = 13:11.")
          ),
          React.createElement('li', null, React.createElement('b', null, "Pass Adjustment Entry:"), " Keshav and Pankaj will compensate Nirmal in their gaining ratio."),
          React.createElement('p', {className: "ml-4"}, "Keshav's Capital A/c Dr. (13/24 of ₹24,000) = ₹13,000"),
          React.createElement('p', {className: "ml-4"}, "Pankaj's Capital A/c Dr. (11/24 of ₹24,000) = ₹11,000"),
          React.createElement('p', {className: "ml-4"}, "To Nirmal's Capital A/c = ₹24,000")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 3 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "First step: Calculate the ", React.createElement('b', null, 'New Ratio'), " and ", React.createElement('b', null, 'Gaining Ratio'), "."),
      React.createElement('li', null, "Retiring partner's goodwill share is paid by gaining partners in the ", React.createElement('b', null, 'Gaining Ratio'), "."),
      React.createElement('li', null, "Journal entry for Goodwill: ", React.createElement('i', null, "Gaining Partners' Capital A/cs Dr. To Retiring Partner's Capital A/c.")),
      React.createElement('li', null, "Revaluation profit/loss and reserves are shared by ", React.createElement('b', null, 'ALL'), " partners (including outgoing) in ", React.createElement('b', null, 'OLD'), " ratio."),
      React.createElement('li', null, "Profit till date of retirement/death is calculated and passed through ", React.createElement('b', null, "P&L Suspense A/c"), "."),
      React.createElement('li', null, "Final amount due is transferred to the ", React.createElement('b', null, "Loan Account"), " (Retirement) or ", React.createElement('b', null, "Executor's Account"), " (Death).")
    )
  )
};