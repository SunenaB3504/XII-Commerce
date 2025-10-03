import { QuestionPaper } from '../../types';
import React from 'react';

// Placeholder for 3-mark questions (17-20)
const paper: QuestionPaper = {
  name: 'Sample Paper 2023 Questions 17-20',
  questions: [
    {
      id: '17',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Anshul, Babita and Chander were partners sharing profits in the ratio of 1/2 : 1/3 : 1/6 respectively. Babita retired and Anshul and Chander decided to share future profits in the ratio 3:2. The accountant passed a journal entry for Babita\'s share of goodwill but missed some information. Fill in missing figures and calculate the gaining ratio.'),
        React.createElement('p', null, 'Journal entry: Anshul’s Capital A/c Dr, Chander’s Capital A/c Dr, To Babita’s Capital A/c – amounts missing. (Provide missing figures and gaining ratio.)')
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Journal Entry (as per MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900' }, 'Dr (₹)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900' }, 'Cr (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, "Anshul's Capital A/c Dr."),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '9,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, "Chander's Capital A/c Dr."),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '21,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, "To Babita's Capital A/c"),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '30,000')
            )
          )
        ),
        React.createElement('p', { className: 'mt-3' }, React.createElement('strong', null, 'Gaining Ratio: '), '3 : 7')
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'MS: Anshul debited ₹9,000; Chander debited ₹21,000; Babita credited ₹30,000. Gaining ratio is 3:7 as computed from sacrifice/gain analysis.')
      )
    },
    {
      id: '18',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'P, Q and R were partners with fixed capitals of ₹40,000, ₹32,000 and ₹24,000. After distributing profit of ₹48,000 in ratio 3:1:1 it was observed that interest on capital was provided at 10% instead of 8% and salary of ₹12,000 was credited to P instead of Q. Pass a single rectifying journal entry in the beginning of next year.'),
        React.createElement('p', { className: 'mt-2 font-semibold' }, 'OR'),
        React.createElement('p', { className: 'mt-2' }, 'Cheese and Slice are equal partners. Their capitals as on April 01, 2022 were Rs. 50,000 and Rs. 1,00,000 respectively. After the accounts for the financial year ending March 31, 2023 have been prepared, it is observed that interest on capital @ 6% per annum and salary to Cheese @ ₹5,000 per annum, as provided in the partnership deed has not been credited to the partners\' capital accounts before distribution of profits. You are required to give necessary rectifying entries using P&L adjustment account.')
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Working (as per MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Partners'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Interest on Capital (2%)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, '(i) Salary Paid (wrong credit)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, '(ii) Payable'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, '(iii) Salary Payable'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, '(iv) Excess/Deficiency')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'P'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '800'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '12,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,152'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '—'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '11,648 (Excess)')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Q'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '640'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '—'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '384'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '12,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '11,744 (Deficiency)')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'R'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '480'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '—'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '384'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '—'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '96 (Excess)')
            )
          )
        ),
        React.createElement('h5', { className: 'font-bold mt-3' }, 'Journal Entry (as per MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'P\'s Capital A/c Dr.'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '11,648')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'R\'s Capital A/c Dr.'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '96')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Q\'s Capital A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '11,744')
            )
          )
        )
      ),
      explanation: React.createElement('p', null, 'Follow MS: compute correct interest at 8% and revert excess; transfer salary from P to Q by adjustment.')
    },
    {
      id: '19',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Pioneer Fitness Ltd. took over the running business of Healthy World Ltd. having assets of ₹10,00,000 and liabilities of ₹1,70,000 by issuing 8,000 8% Debentures of ₹100 each at 5% premium redeemable after 6 years @ ₹110 and cheque for ₹50,000. Pass the journal entries in the books of Pioneer Fitness Ltd.'),
        React.createElement('p', { className: 'mt-2 font-semibold' }, 'OR'),
        React.createElement('p', { className: 'mt-2' }, 'Lilly Ltd. forfeited 100 shares of ₹10 each issued at 10% premium (₹8 called up) on which a shareholder did not pay ₹3 of allotment (including premium) and first call of ₹2. Out of these 60 shares were reissued to Ram as fully paid for ₹8 per share and 20 shares to Suraj as fully paid up @ ₹12 per share at different intervals of time. Prepare Share Forfeiture account.')
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Journal Entries (as per MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Dr (₹)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Cr (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Assets A/c Dr.'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '10,00,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Goodwill A/c Dr.'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '60,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Liabilities A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,70,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Healthy World Ltd.'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '8,90,000')
            )
          )
        ),
        React.createElement('h5', { className: 'font-bold mt-3' }, 'Settlement entries (as per MS)'),
        React.createElement('pre', { className: 'whitespace-pre-wrap bg-gray-50 border border-gray-200 p-3 text-sm text-gray-900' }, "Healthy World Ltd. Dr.\nLoss on issue of Debentures A/c Dr.\n    To 8% Debentures A/c\n    To Securities Premium A/c\n    To Premium on redemption A/c\n    To Bank A/c\n(Being Purchase consideration discharged by issue of Debentures and in Cash)\nDr amounts: 8,90,000 ; Loss on issue: 60,000 ; Credits: Debentures 8,00,000 ; Securities Premium 40,000 ; Bank 50,000\n\n(Alternate working in MS also lists equivalent distribution of amounts.)")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'MS provides the detailed takeover journal entries and related loss on issue of debentures entries; replicate these in full when creating final answer display.')
      )
    },
    {
      id: '20',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Calculate goodwill of a firm on the basis of three years purchases of the Weighted Average Profits of the last four years. Profits: 2020 - 28,000; 2021 - 27,000; 2022 - 46,900; 2023 - 53,810. Adjustments: capitalise repair of 10,000 and apply depreciation at 10% on reducing balance; weights: 2020 & 2021 =1 each, 2022=2, 2023=3; period of purchase = 3 years.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Working (MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Year'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Given Profit (₹)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Adjustments (₹)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Adjusted Profit (₹)'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Weight'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Product (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '2020'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '28,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '0'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '28,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '28,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '2021'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '27,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '9,000 (adj)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '36,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '36,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '2022'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '46,900'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '100 (adj)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '46,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '2'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '92,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '2023'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '53,810'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '810 (adj)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '53,000'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '3'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,59,000')
            ),
            React.createElement('tr', { className: 'font-bold bg-gray-50 text-gray-900' },
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '3,15,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, 'Weighted Average Profit'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '45,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, 'Goodwill (×3 yrs)'),
              React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,35,000')
            )
          )
        )
      ),
      explanation: React.createElement('p', null, 'MS: shows depreciation adjustments and weighted products leading to weighted average profit ₹45,000 and goodwill ₹1,35,000.')
    }
  ],
};

export default paper;
