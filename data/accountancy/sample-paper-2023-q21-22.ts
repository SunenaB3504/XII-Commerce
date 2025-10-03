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
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Share Capital (MS disclosures)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Subscribed and fully paid up: 74,000 equity shares of ₹10 each'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,40,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Less: Calls in arrears (4,000 × ₹2)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '(8,000)')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Add: Forfeited shares (2,000 × ₹3)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '6,000')
            ),
            React.createElement('tr', { className: 'font-bold bg-gray-50' },
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total Share Capital (Note)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,78,000')
            )
          )
        )
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'MS: Shows issued/sold/re-forfeited shares computations and the resulting Share Capital note total of ₹7,78,000.')
      )
    },
    {
      id: '22',
      marks: 4,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Sun and Kiran are partners sharing profits and losses equally. They decided to dissolve their firm. Assets and Liabilities have been transferred to Realisation Account. Pass necessary Journal entries for the following: (a) Sun will be paid ₹10,000 for realisation and expenses 2% of total value realised; some assets sold for cash ₹12,00,000 and remaining taken over by creditors at ₹3,00,000; (b) Deferred Advertisement Expenditure appeared at ₹28,000; (c) Stock taken over and settled etc.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Realisation Journal Entries (MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Journal Entry'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Realisation A/c Dr. To Sun\'s Capital A/c (Being remuneration and expenses payable to Sun)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '40,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Sun\'s Capital A/c Dr. & Kiran\'s Capital A/c Dr. To Deferred Advertisement Suspense A/c (Being Advertisement Suspense accounted)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '28,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Kiran\'s Capital A/c Dr. To Realisation A/c (Being 1/3 of stock taken over by Kiran)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '30,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. To Realisation A/c (Being stock realised)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '25,000')
            )
          )
        ),
        React.createElement('p', { className: 'mt-3' }, 'Refer to MS for full set of realisation entries and related transfer entries to partners\' capital accounts.')
      ),
      explanation: React.createElement('p', null, 'MS contains stepwise realisation journal entries for each sub-part; use these entries when displaying the full solution in-app.')
    }
  ],
};

export default paper;
