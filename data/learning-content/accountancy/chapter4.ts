import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter4Module: LearningModule = {
  chapter: "4",
  title: "Dissolution of Partnership Firm",
  overview: "This chapter deals with the final closure of a partnership firm. Unlike reconstitution (dissolution of partnership), the dissolution of a firm means the business ceases to exist. The accounting process involves closing all books of accounts by selling off assets, paying all liabilities, and finally settling the accounts of the partners. The main account prepared here is the Realisation Account.",
  keyConcepts: [
    {
      title: "Dissolution of Partnership vs. Dissolution of Firm",
      content: React.createElement('p', null, "This is a fundamental distinction. Dissolution of partnership simply means a change in the existing relationship between partners (as in admission, retirement), but the firm continues. Dissolution of a firm means the entire business is wound up and comes to an end."),
      examFocus: true,
    },
    {
      title: "Modes of Dissolution",
      content: React.createElement('p', null, "A firm can be dissolved in several ways: by mutual agreement, compulsory dissolution (e.g., if the business becomes illegal), on the happening of a certain event, by notice (in case of partnership at will), or by an order from the court."),
    },
    {
      title: "Realisation Account",
      content: React.createElement('p', null, "This is a nominal account prepared at the time of dissolution. Its purpose is to record the sale of assets and discharge of liabilities to ascertain the net profit or loss from this process."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Debit Side:'), ' All assets (except cash, bank, and fictitious assets) are transferred to this side at their book values. It also records the payment of liabilities and realisation expenses.'),
        React.createElement('li', null, React.createElement('b', null, 'Credit Side:'), " All external liabilities are transferred to this side at their book values. It also records the cash received from the sale of assets.")
      )
    },
    {
      title: "Settlement of Accounts (Section 48)",
      content: React.createElement('p', null, "The Partnership Act prescribes a specific order for the application of assets upon dissolution. First, external debts are paid. Second, any loans given by partners to the firm are repaid. Finally, the partners' capital accounts are settled."),
      examFocus: true,
    }
  ],
  keywords: [
    { term: "Dissolution of Firm", definition: "The complete breakdown of the relationship among all the partners, leading to the closure of the business." },
    { term: "Realisation Account", definition: "A special account prepared during the dissolution of a firm to ascertain the profit or loss on the sale of assets and settlement of liabilities." },
    { term: "Settlement of Accounts", definition: "The process of paying off firm's liabilities and distributing the remaining cash among partners upon dissolution." }
  ],
  caseStudies: [
    {
      title: "Winding Up a Business",
      scenario: "Sita, Rita, and Meeta decide to dissolve their firm. Their Balance Sheet has Stock ₹2,500 and Creditors ₹2,000. During dissolution, the Stock is sold for ₹3,500, and the Creditors are paid ₹1,960 (2% less) in full settlement. Realisation expenses are ₹450.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Realisation Account Entries:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Transfer Assets/Liabilities:"), " Debit Realisation A/c with Stock ₹2,500. Credit Realisation A/c with Creditors ₹2,000."),
          React.createElement('li', null, React.createElement('b', null, "Record Transactions:"), " Credit Realisation A/c with Bank (for sale of stock) ₹3,500. Debit Realisation A/c with Bank (for payment to creditors) ₹1,960. Debit Realisation A/c with Bank (for expenses) ₹450."),
          React.createElement('li', null, React.createElement('b', null, "Calculate Profit/Loss:"), " Total Credits = 2000 + 3500 = ₹5,500. Total Debits = 2500 + 1960 + 450 = ₹4,910. The credit side is greater, so there is a Realisation Profit of ₹5,500 - ₹4,910 = ₹590. This profit will be distributed among the partners.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 4 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Dissolution of firm = Business ", React.createElement('b', null, "ends"), ". Dissolution of partnership = Business ", React.createElement('b', null, "continues"), "."),
      React.createElement('li', null, "A ", React.createElement('b', null, 'Realisation Account'), " is prepared to close books."),
      React.createElement('li', null, React.createElement('b', null, "Step 1:"), " Transfer all assets (except cash/bank) to Debit side of Realisation A/c."),
      React.createElement('li', null, React.createElement('b', null, "Step 2:"), " Transfer all external liabilities to Credit side of Realisation A/c."),
      React.createElement('li', null, React.createElement('b', null, "Step 3:"), " Record sale of assets on Credit side and payment of liabilities on Debit side."),
      React.createElement('li', null, "The final profit or loss on Realisation A/c is transferred to partners' capital accounts in their profit-sharing ratio."),
      React.createElement('li', null, "Finally, all accounts are closed through the Bank/Cash account, which should tally.")
    )
  )
};