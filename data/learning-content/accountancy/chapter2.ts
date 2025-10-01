import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "Reconstitution of a Partnership Firm: Admission of a Partner",
  overview: "This chapter covers the accounting procedures when a new partner is admitted into an existing firm. Admission leads to a 'reconstitution' of the firm, requiring a new partnership agreement. The central theme is to make adjustments for goodwill and revaluation of assets, ensuring that the old partners are compensated for the share of future profits they sacrifice for the new partner.",
  keyConcepts: [
    {
      title: "Sacrificing Ratio",
      content: React.createElement('p', null, "This is the ratio in which the old partners agree to sacrifice their share of profits in favour of the new partner. It is the most critical calculation as it is used to distribute the new partner's share of goodwill among the old partners."),
      examFocus: true,
      example: React.createElement('p', { className: "font-mono bg-slate-100 p-2 rounded" }, 'Sacrificing Ratio = Old Profit Share – New Profit Share')
    },
    {
      title: "Goodwill: Valuation and Treatment",
      content: React.createElement('p', null, "Goodwill is the value of the reputation of a firm. At the time of admission, it is valued, and the new partner must compensate the old partners for acquiring a share in future profits. This compensation is called 'premium for goodwill'."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, React.createElement('b', null, 'Valuation Methods:'), " Average Profit, Super Profit, and Capitalisation Method."),
        React.createElement('li', null, React.createElement('b', null, 'Accounting Entry (Premium brought in cash):'), " Gaining Partner's Capital A/c (or Premium for Goodwill A/c) Dr. To Sacrificing Partners' Capital A/cs (in sacrificing ratio).")
      )
    },
    {
      title: "Revaluation of Assets and Reassessment of Liabilities",
      content: React.createElement('p', null, "At the time of admission, assets are revalued and liabilities are reassessed to their current values. A 'Revaluation Account' is prepared to record these changes. The resulting profit or loss on revaluation is transferred to the old partners' capital accounts in their old profit-sharing ratio."),
      examFocus: true,
    },
    {
      title: "Adjustment of Accumulated Profits and Reserves",
      content: React.createElement('p', null, "Any existing reserves, accumulated profits or losses in the balance sheet belong to the old partners. Therefore, they are transferred to the old partners' capital accounts in their old profit-sharing ratio before the new partner is admitted."),
    },
    {
      title: "Adjustment of Capitals",
      content: React.createElement('p', null, "Sometimes, partners may decide to adjust their capital accounts to be proportionate to their new profit-sharing ratio. This may involve partners bringing in additional cash or withdrawing excess capital."),
    }
  ],
  keywords: [
    { term: "Reconstitution of Firm", definition: "Any change in the existing agreement of partnership." },
    { term: "Sacrificing Ratio", definition: "The ratio in which old partners sacrifice their share of profit in favour of a new partner." },
    { term: "Goodwill", definition: "The value of the reputation of a firm in respect of the profits expected in future over and above the normal profits." },
    { term: "Premium for Goodwill", definition: "The amount brought in by the new partner to compensate the sacrificing partners." },
    { term: "Revaluation Account", definition: "A nominal account prepared to record the changes in the value of assets and liabilities at the time of reconstitution." },
  ],
  caseStudies: [
    {
      title: "The New Partner Entry",
      scenario: "Vijay and Sanjay are partners sharing profits 3:2. They admit Ajay for a 1/4th share. The goodwill of the firm is valued at ₹20,000. Ajay brings ₹30,000 as capital and his share of goodwill in cash. The new profit sharing ratio is 2:1:1.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Key Adjustments:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Calculate Sacrificing Ratio:"),
            React.createElement('p', null, "Vijay's Sacrifice = Old (3/5) - New (2/4) = 2/20"),
            React.createElement('p', null, "Sanjay's Sacrifice = Old (2/5) - New (1/4) = 3/20. So, Sacrificing Ratio = 2:3.")
          ),
          React.createElement('li', null, React.createElement('b', null, "Calculate Ajay's Goodwill Share:"), " 1/4 of ₹20,000 = ₹5,000."),
          React.createElement('li', null, React.createElement('b', null, "Distribute Goodwill:"), " The ₹5,000 goodwill brought by Ajay will be credited to Vijay and Sanjay in their sacrificing ratio of 2:3."),
          React.createElement('p', {className: "ml-4"}, "Vijay's Share = 2/5 of ₹5,000 = ₹2,000."),
          React.createElement('p', {className: "ml-4"}, "Sanjay's Share = 3/5 of ₹5,000 = ₹3,000.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 2 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "First step: Calculate the ", React.createElement('b', null, 'New Ratio'), " and ", React.createElement('b', null, 'Sacrificing Ratio'), "."),
      React.createElement('li', null, "Goodwill brought by the new partner is distributed among old partners in the ", React.createElement('b', null, 'Sacrificing Ratio'), "."),
      React.createElement('li', null, "Journal entry for Goodwill: ", React.createElement('i', null, "Gaining Partner's Capital A/c Dr. To Sacrificing Partners' Capital A/cs.")),
      React.createElement('li', null, "Profit/Loss on ", React.createElement('b', null, 'Revaluation Account'), " is shared by ", React.createElement('b', null, 'OLD'), " partners in ", React.createElement('b', null, 'OLD'), " ratio."),
      React.createElement('li', null, "Existing reserves and profits are also distributed to ", React.createElement('b', null, 'OLD'), " partners in ", React.createElement('b', null, 'OLD'), " ratio.")
    )
  )
};