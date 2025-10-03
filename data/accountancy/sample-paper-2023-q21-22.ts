import { QuestionPaper } from '../../types';
import React from 'react';

// Placeholder for 4-mark questions (21-22)
const paper: QuestionPaper = {
  name: 'Sample Paper 2023 Questions 21-22',
  questions: [
    {
      id: '21',
      marks: 4,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Atishyokti Ltd. was registered with an authorized capital of ₹20,00,000 divided into 2,00,000 Equity Shares of ₹10 each, payable ₹3 on application, ₹6 on allotment (including ₹1 premium) and balance on call. The company offered 80,000 shares for public subscription. All the money has been duly called and received except allotment and call money on 5,000 shares held by Manish and call money on 4,000 shares held by Alok. Manish\'s shares were forfeited and out of these 3,000 shares were re-issued ₹9 per share as fully paid up. Show share capital in the books of the company and notes to accounts.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (summary): Prepare Share Capital schedule showing issued, subscribed and calls in arrears and show forfeited and reissued shares as per MS figures (Subscribing and Forfeiture calculations).'),
      ),
      explanation: React.createElement('p', null, 'MS provides detailed computations for share capital presentation and notes; follow allotment, calls-in-arrears and forfeiture entries.')
    },
    {
      id: '22',
      marks: 4,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Sun and Kiran are partners sharing profits and losses equally. They decided to dissolve their firm. Assets and Liabilities have been transferred to Realisation Account. Pass necessary Journal entries for the following: (a) Sun will be paid ₹10,000 for realisation and expenses 2% of total value realised; some assets sold for cash ₹12,00,000 and remaining taken over by creditors at ₹3,00,000; (b) Deferred Advertisement Expenditure appeared at ₹28,000; (c) Stock taken over and settled etc.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Series of Realisation A/c entries - Realisation A/c Dr. To Sun\'s Capital A/c (Remuneration & expenses), entries for stock taken over by partner and creditors settlement, and realisation entries as per MS.'),
      ),
      explanation: React.createElement('p', null, 'MS contains stepwise journal entries for each sub-part (a)-(d). Use Realisation A/c format and transfer balances accordingly.')
    }
  ],
};

export default paper;
