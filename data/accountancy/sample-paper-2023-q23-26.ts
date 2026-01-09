import React from 'react';
import { Question } from '../../types';

export const samplePaper2023Q23To26: Question[] = [
  {
    id: 'acc-2023-q23',
    number: 23,
    book: 'Accountancy',
    chapter: 'Issue of Shares',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'OTUA Ltd. was registered with an authorised capital of 2,00,000 equity shares of ₹ 100 each. The company offered 60,000 shares for public subscription at 25% premium. The share was payable as ₹ 40 on application and balance on allotment, with premium. Public had applied for 85,000 shares. Pro-rata allotment was made in the ratio of 5:4 and remaining applications were sent letters of regret.'),
      React.createElement('p', null, 'Mr. Anand holding 4,000 shares failed to pay allotment money and his shares were forfeited. Out of these 3,000 shares were re-issued at a discount of ₹ 20 per share. Pass necessary entries in the books of the OTUA Ltd.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Books of OTUA Ltd.'),
      React.createElement('p', { className: 'font-bold mb-2' }, 'Journal Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'L.F.'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Dr. (₹)'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Cr. (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(i)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Bank A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Application A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Application money received on 85,000 shares)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '34,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '34,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(ii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Equity Share Application A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Capital A/c (60,000 x 40)'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Allotment A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Bank A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Transfer to capital, excess adjusted and refund)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '34,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '24,00,000'),
              React.createElement('div', null, '6,00,000'),
              React.createElement('div', null, '4,00,000') // Refund: 85000 - (60000 x 5/4 = 75000) = 10000 rejected x 40 = 400,000.
              // Wait. Ratio 5:4.
              // Applicants for 75,000 allotted 60,000.
              // Rejected 85,000 - 75,000 = 10,000.
              // Refund = 10,000 * 40 = 4,00,000.
              // Excess adjusted = (75,000 - 60,000) * 40 = 15,000 * 40 = 6,00,000.
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Equity Share Allotment A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Capital A/c (60,000 x 60)'),
              React.createElement('div', { className: 'pl-8' }, 'To Securities Premium A/c (60,000 x 25)'),
              React.createElement('div', { className: 'text-sm italic' }, '(Allotment due: Bal 60 + 25 Premium = 85)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '51,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '36,00,000'),
              React.createElement('div', null, '15,00,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iv)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Bank A/c ...Dr.'),
              React.createElement('div', null, 'Calls in Arrears A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Allotment A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Allotment money received except on 4,000 shares)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '42,00,000'),
              React.createElement('div', null, '3,00,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', { className: 'flex justify-end items-end h-full' }, '45,00,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(v)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Equity Share Capital A/c ...Dr. (4000 x 100)'), // Called up? Full.
              React.createElement('div', null, 'Securities Premium A/c ...Dr. (4000 x 25)'), // Premium not received
              React.createElement('div', { className: 'pl-8' }, 'To Share Forfeited A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Calls in Arrears A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Forfeiture of 4,000 shares)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '4,00,000'),
              React.createElement('div', null, '1,00,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '2,00,000'),
              React.createElement('div', null, '3,00,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(vi)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Bank A/c ...Dr. (3000 x 80)'),
              React.createElement('div', null, 'Share Forfeited A/c ...Dr. (3000 x 20)'),
              React.createElement('div', { className: 'pl-8' }, 'To Equity Share Capital A/c (3000 x 100)'),
              React.createElement('div', { className: 'text-sm italic' }, '(Re-issue of 3,000 shares)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '2,40,000'),
              React.createElement('div', null, '60,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '3,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(vii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Share Forfeited A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Capital Reserve A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Gain on re-issue transferred)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '90,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '90,000')
          )
        )
      )
    ),
    explanation: 'Mr. Anand allotment failure: Applied = 4000 x 5/4 = 5000. App money paid 5000 x 40 = 2,00,000. Allotted 4000. App due 4000 x 40 = 1,60,000. Excess 40,000 adjusted. Allotment due 4000 x 85 = 3,40,000. Arrears = 3,40,000 - 40,000 = 3,00,000. Capital Reserve: Amount forfeited on 3000 shares = (2,00,000 / 4000) * 3000 ? No. Forfeited Amount = Amount received - Premium(if reversed). Amount recvd = 2,00,000. Less Premium? Premium not paid on 4000 shares. So entire 2,00,000 is for Capital? Yes. Amount forfeited per share = 50. Discount on reissue = 20. Gain = 30 per share. 3000 x 30 = 90,000.'
  },
  {
    id: 'acc-2023-q23-or',
    number: 23,
    book: 'Accountancy',
    chapter: 'Issue of Shares',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'OR'),
      React.createElement('p', null, 'Pass entries for forfeiture and re-issue in both the following cases.'),
      React.createElement('p', null, '(a) Vikram Ltd. forfeited 5,000 shares of Rahul, who had applied for 6,000 shares for non-payment of allotment money of ₹ 5 per share and first and final call of ₹ 2 per share. Only application money of ₹ 3 was paid by him. Out of these 3,000 shares were re-issued @ ₹ 12 per share as fully paid.'),
      React.createElement('p', null, '(b) Ratan Ltd. forfeited 3,000 shares of ₹ 10 each (issued at ₹ 2 premium) for non-payment of first call of ₹ 2 per share. Final call of ₹ 3 per share was not yet made. Out of these 2,000 shares were re-issued at ₹ 10 per share as fully paid.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, '(a) Books of Vikram Ltd.'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Dr. (₹)'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Cr. (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Share Capital A/c ...Dr. (5000 x 10)'),
              React.createElement('div', { className: 'pl-8' }, 'To Share Forfeited A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Calls in Arrears A/c (5000 x 7 less excess)'),
              // Arrears: Allotment (5) + Call (2) = 7.
              // Applied 6000. Paid 3. Total paid 18,000.
              // Due on App 5000 x 3 = 15,000. Excess 3,000.
              // Allotment due 5000 x 5 = 25,000. Less Excess 3,000 = 22,000 unpaid.
              // Call due 5000 x 2 = 10,000 unpaid.
              // Total Arrears = 32,000.
              // Forfeited = Amount Received = 18,000.
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '50,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '18,000'),
              React.createElement('div', null, '32,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Bank A/c ...Dr. (3000 x 12)'),
              React.createElement('div', { className: 'pl-8' }, 'To Share Capital A/c (3000 x 10)'),
              React.createElement('div', { className: 'pl-8' }, 'To Securities Premium A/c (3000 x 2)'),
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '36,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '30,000'),
              React.createElement('div', null, '6,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Share Forfeited A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Capital Reserve A/c'),
              // Forfeited amount on 3000 shares:
              // Total forfeited 18,000 for 5000 shares.
              // Per share = 18000/5000 = 3.6 per share.
              // For 3000 shares = 10,800.
              // Loss on reissue = 0 (Premium).
              // Capital Reserve = 10,800.
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '10,800'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '10,800')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, '(b) Books of Ratan Ltd.'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Share Capital A/c ...Dr. (3000 x 7)'), // Called up = 10 - 3 = 7.
              // Issued at 2 premium. Premium received?
              // Non payment of First call. Application and Allotment paid? Yes.
              // So premium received. Ignore premium.
              React.createElement('div', { className: 'pl-8' }, 'To Share Forfeited A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Calls in Arrears A/c (3000 x 2)'),
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '21,000'), // 3000 x 7
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '15,000'), // Bal fig or (3000x5 paid)
              React.createElement('div', null, '6,000') // 3000 x 2
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              // Reissue 2000 @ 10 fully paid.
              // Fully paid means 10 credited. Issue price 10. No discount.
              React.createElement('div', null, 'Bank A/c ...Dr. (2000 x 10)'),
              React.createElement('div', { className: 'pl-8' }, 'To Share Capital A/c (2000 x 10)'),
              // Wait. Question says "re-issued at ₹ 10 per share as fully paid".
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '20,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '20,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Share Forfeited A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Capital Reserve A/c'),
              // Forfeited per share = 5.
              // For 2000 shares = 10,000.
              // Loss = 0.
              // CR = 10,000.
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '10,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '10,000')
          )
        )
      )
    ),
    explanation: 'Case (a): Excess application money is adjusted towards allotment. Forfeiture amount includes the excess money. Case (b): Premium received is not reversed. Called up capital excludes the final call not made.'
  },
  {
    id: 'acc-2023-q24',
    number: 24,
    book: 'Accountancy',
    chapter: 'Reconstitution of Partnership',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold mb-2' }, '24. X and Y were partners in the profit-sharing ratio of 3: 2. Their balance sheet as at March 31, 2022 was as follows:'),
      React.createElement('p', { className: 'font-bold text-center mb-2' }, 'Balance Sheet as at March 31, 2022'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-400 mb-4 text-sm' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Liabilities'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Amount (₹)'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Assets'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Amount (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Creditors'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '56,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Plant and Machinery'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '70,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'General Reserve'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '14,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Buildings'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '98,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' },
              React.createElement('div', null, 'Capital Accounts:'),
              React.createElement('div', { className: 'flex justify-between pl-4' },
                React.createElement('span', null, 'X'),
                React.createElement('span', null, '1,19,000')
              ),
              React.createElement('div', { className: 'flex justify-between pl-4' },
                React.createElement('span', null, 'Y'),
                React.createElement('span', null, '1,12,000')
              )
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center align-middle' }, '2,31,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' },
              React.createElement('div', null, 'Stock'),
              React.createElement('div', { className: 'flex justify-between' },
                React.createElement('span', null, 'Debtors'),
                React.createElement('span', null, '42,000')
              ),
              React.createElement('div', { className: 'flex justify-between' },
                React.createElement('span', null, '(-)Provision'),
                React.createElement('span', null, '7,000')
              )
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center align-top' },
              React.createElement('div', null, '21,000'), // Stock
              React.createElement('div', { className: 'mt-8' }, '35,000') // Provision Result
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Cash in Hand'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '77,000')
          ),
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '3,01,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '3,01,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-semibold mb-2' }, 'Z was admitted for 1/6th share on the following terms:'),
      React.createElement('div', { className: 'mb-4' },
        React.createElement('p', null, '(i) Z will bring ₹ 56,000 as his share of capital, but was not able to bring any amount to compensate the sacrificing partners.'),
        React.createElement('p', null, '(ii) Goodwill of the firm is valued at ₹. 84,000.'), // Exact user text "₹." included
        React.createElement('p', null, '(iii) Plant and Machinery were found to be undervalued by ₹ 14,000 Building was to brought up to ₹ 1,09,000.'), // Exact grammar "was to brought"
        React.createElement('p', null, '(iv) All debtors are good.'),
        React.createElement('p', null, '(v) Capitals of X and Y will be adjusted on the basis of Z’s share and adjustments will be done by opening necessary current accounts.')
      ),
      React.createElement('p', { className: 'font-bold' }, 'You are required to prepare revaluation account and partners’ capital account.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6, // 6 marks for reval and partners capital
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Revaluation Account'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        // ... Revaluation Account structure ...
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Partner\'s Capital A/c (Profit)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Plant and Machinery'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '14,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'X (19,200)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Buildings (1,09,000 - 98,000)'), // brought up TO 1,09,000. Increase = 11,000.
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '11,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Y (12,800)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '32,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Prov for DD (All good)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '7,000')
          ),
          React.createElement('tr', { className: 'font-bold bg-gray-50' },
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '32,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '32,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, 'Partners\' Capital Accounts'),
      // ... Partners Capital structure ...
    ),
    explanation: 'Revaluation Profit: 14k+11k+7k = 32k. Distributed 3:2. Z Capital 56,000 for 1/6th share. Total Capital = 56,000 x 6 = 3,36,000. New Ratio 3:2:1. X New Cap = 3,36,000 x 3/6 = 1,68,000. Y New Cap = 1,12,000. Adjustment via Current Account.'
  },
  {
    id: 'acc-2023-q24-or',
    number: 24,
    book: 'Accountancy',
    chapter: 'Reconstitution of Partnership',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold mb-2' }, 'Or'),
      React.createElement('p', { className: 'mb-4' }, 'P, Q and R were partners in a firm sharing profits in the ratio of 3:2:1 respectively. On March 31st, 2022, the balance sheet of the firm stood as follows:'),
      React.createElement('p', { className: 'font-bold text-center mb-2' }, 'Balance Sheet'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-400 mb-4 text-sm' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Liabilities'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Amount (₹)'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Assets'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Amount (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Creditors'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '13,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Cash'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '4,700')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Bills Payable'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '590'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, 'Debtors'),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '8,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' },
              React.createElement('div', null, 'Capital Accounts:'),
              React.createElement('div', { className: 'flex justify-between pl-4' },
                React.createElement('span', null, 'P'),
                React.createElement('span', null, '15,000')
              ),
              React.createElement('div', { className: 'flex justify-between pl-4' },
                React.createElement('span', null, 'Q'),
                React.createElement('span', null, '10,000')
              ),
              React.createElement('div', { className: 'flex justify-between pl-4' },
                React.createElement('span', null, 'R'),
                React.createElement('span', null, '10,000')
              )
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center align-bottom' }, '35,000'),
            React.createElement('td', { className: 'border border-gray-400 p-2' },
              React.createElement('div', null, 'Stock'),
              React.createElement('div', null, 'Buildings'),
              React.createElement('div', null, 'Profit and Loss Account')
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' },
              React.createElement('div', null, '11,690'),
              React.createElement('div', null, '23,000'),
              React.createElement('div', null, '1,200')
            )
          ),
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '48,590'),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2 text-center' }, '48,590')
          )
        )
      ),
      React.createElement('p', { className: 'font-semibold mb-2' }, 'Q retired on the above-mentioned date on the following terms:'),
      React.createElement('div', { className: 'mb-4' },
        React.createElement('p', null, '(i) Buildings to be appreciated by ₹7,000'),
        React.createElement('p', null, '(ii) A provision for doubtful debts to be made at 5 % on debtors.'),
        React.createElement('p', null, '(iii) Goodwill of the firm is valued at ₹ 18,000 and adjustment to be made by raising and writing off the goodwill.'),
        React.createElement('p', null, '(iv) ₹ 2,800 was to be paid to Q immediately and the balance in his capital account to be transferred to his loan account carrying interest as per the agreement.'),
        React.createElement('p', null, '(v) Remaining partner decided to maintain equal capital balances, by opening current account.')
      ),
      React.createElement('p', { className: 'font-bold' }, 'Prepare the revaluation account and partner’s capital accounts.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Dr. Revaluation Account Cr.'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Amount (₹)'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Amount (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Provision for Doubtful Debts'),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '400'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Building A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'To Partner\'s Capital A/c:'),
              React.createElement('div', { className: 'pl-4' }, 'P 3,300'),
              React.createElement('div', { className: 'pl-4' }, 'Q 2,200'),
              React.createElement('div', { className: 'pl-4' }, 'R 1,100')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right align-bottom' }, '6,600'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
          ),
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, 'Dr. Partner\'s Capital Accounts Cr.'),
      React.createElement('div', { className: 'overflow-x-auto' },
        React.createElement('table', { className: 'w-full border-collapse border border-gray-300 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', { className: 'bg-gray-100' },
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'P'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Q'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'R'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'P'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Q'),
              React.createElement('th', { className: 'border border-gray-300 p-1' }, 'R')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Goodwill A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '13,500'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '4,500'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Balance b/d'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '15,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '10,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '10,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Profit & Loss'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '600'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '400'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '200'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Revaluation A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '3,300'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '2,200'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '1,100')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Cash'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '2,800'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Goodwill A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '9,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '6,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '3,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Q\'s Loan'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '15,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'R\'s Current A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '1,900')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'P\'s Current A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '1,900'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Balance c/d'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '11,300'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '--'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '11,300'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, ''),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '')
            ),
            React.createElement('tr', { className: 'font-bold' },
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '27,300'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '18,200'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '16,000'),
              React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '27,300'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '18,200'),
              React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '16,000')
            )
          )
        )
      )
    )
  },
  {
    id: 'acc-2023-q25',
    number: 25,
    book: 'Accountancy',
    chapter: 'Accounting for Partnership Firms',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mb-4' }, 'A, B and C were partners sharing P&L in the ratio 5:3:2. A died on 30th June, 2019. Entry for treatment of goodwill after his death was passed as follows:-'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-400 mb-4 text-sm' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'L.F'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Debit (₹)'),
            React.createElement('th', { className: 'border border-gray-400 p-2' }, 'Credit (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2' },
              React.createElement('div', { className: 'font-bold' }, 'B’s Capital A/c ... Dr.'),
              React.createElement('div', { className: 'font-bold' }, 'C’s Capital A/c ... Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To A’s Capital A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Entry for goodwill treatment passed at the time of death of partner)')
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-400 p-2 align-top text-center' },
              React.createElement('div', null, '1,80,000'),
              React.createElement('div', null, '1,20,000')
            ),
            React.createElement('td', { className: 'border border-gray-400 p-2 align-bottom text-center' }, '3,00,000')
          )
        )
      ),
      React.createElement('p', { className: 'mb-4' }, 'A’s profit till date of death was estimated as ₹ 1,20,000, based on the average profits of past three years. Final dues payable to A’s executors on the date of death was calculated as ₹ 8,40,000 out of which ₹ 2,40,000 was paid immediately by giving him Furniture valued for the same and balance was to be paid in three equal annual instalments starting from 30 June, 2020, together with interest rate as specified in Section 37 of Indian Partnership Act, 1932..'),
      React.createElement('p', { className: 'font-bold' }, 'Pass necessary entry for profit share to be credited to A’s Capital and also prepare A’s executors account till final settlement.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Journal Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'L.F.'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Dr. (₹)'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Cr. (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2019 Jun 30'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Profit and Loss Suspense A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To A\'s Capital A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Being share of profit provided till the date of his death)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '1,20,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '1,20,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, 'Dr. A\'s Executors A/c Cr.'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 text-sm' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Amount'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Amount')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2019 Jun 30'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Furniture A/c'), // Updated from Bank A/c
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '2,40,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2019 Jun 30'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'A\'s Capital A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '8,40,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2020 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Balance c/d'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '6,27,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2020 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Interest A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '27,000')
          ),
          React.createElement('tr', { className: 'bg-gray-50 font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '8,67,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '8,67,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2020 Jun 30'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Bank A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '2,36,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2020 Apr 1'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Balance b/d'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '6,27,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2021 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Balance c/d'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '4,18,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2020 Jun 30'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Interest A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '9,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2021 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Interest A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '18,000')
          ),
          React.createElement('tr', { className: 'bg-gray-50 font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '6,54,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-1 text-right' }, '6,54,000')
          )
        )
      )
    )
  },
  {
    id: 'acc-2023-q26',
    number: 26,
    book: 'Accountancy',
    chapter: 'Issue of Debentures',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Health2Wealth Ltd. had share capital of ₹ 80,00,000 divided in shares of ₹ 100 each and 20,000, 8% Debentures of ₹ 100 each as part of capital employed. The company decided to employ additional funds of ₹ 55,00,000 for setting up a factory at Himachal Pradesh. It was decided to raise the funds by issuing 8% Debentures of ₹ 100 each at a premium of 10% and redeemable at a premium of 20% after 5 years.'),
      React.createElement('p', null, 'Pass necessary entries for issue of debentures, writing off Loss on Issue of Debentures and Bond theory. Also prepare Loss on Issue of Debentures Account.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, '(a) Journal Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'L.F.'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Dr. (₹)'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Cr. (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(i)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Bank A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Debenture Application and Allotment A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Application money received)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '55,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '55,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(ii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Debenture Application and Allotment A/c ...Dr.'),
              React.createElement('div', null, 'Loss on Issue of Debentures A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To 8% Debentures A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Securities Premium A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Premium on Redemption of Debentures A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Debenture issued at premium, to be redeemed at premium)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '55,00,000'),
              React.createElement('div', null, '10,00,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '50,00,000'),
              React.createElement('div', null, '5,00,000'),
              React.createElement('div', null, '10,00,000')
            )
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, '(b) Dr. Loss on Issue of Debentures A/c Cr.'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-6' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Amount'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Amount')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2021 Oct 1'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Premium on Redemption of Debentures A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '10,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2022 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'By Securities Premium A/c'),
              React.createElement('div', null, 'By Statement of Profit and Loss A/c')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top' },
              React.createElement('div', null, '7,80,000'),
              React.createElement('div', null, '2,20,000')
            )
          )
        )
      ),
      React.createElement('p', { className: 'font-bold' }, '(c) Journal Interest Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2022 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Debenture Interest A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Debentureholders A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Interest due on debentures)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2022 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Debentureholders A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Bank A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Interest paid)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2022 Mar 31'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Statement of Profit and Loss ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Debenture Interest A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Interest transferred to P&L)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '2,00,000')
          )
        )
      )
    )
  }
];
