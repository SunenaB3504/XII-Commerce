import React from 'react';
import { Question } from '../../types';

export const samplePaper2023Q21To22: Question[] = [
  {
    id: 'acc-2023-q21',
    number: 21,
    book: 'Accountancy',
    chapter: 'Accounting for Share Capital',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Altaur Ltd. was registered with an authorised Capital of ₹ 4,00,00,000 divided in 25,00,000 Equity Shares of ₹ 10 each and 1,50,000, 9% Preference Shares of ₹ 100 each. The company issued 8,00,000 Equity Shares for public subscription at 20% premium, payable ₹ 3 on application; ₹ 7 on allotment (including premium) and balance on call. Public had applied for 10,00,000 shares. Excess Applications were sent letters of regret.'),
      React.createElement('p', null, 'All the dues on allotment received except on 15,000 shares held by Sanju. Another shareholder Rocky paid his call dues along with allotment on his holding of 25,000 shares. You are required to prepare the Balance Sheet of the company as per Schedule III of Companies Act, 2013, showing Share Capital balance and also prepare Notes to Accounts.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 4,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold text-center' }, 'Altaur Ltd.'),
      React.createElement('p', { className: 'font-bold text-center' }, 'Balance Sheet (Extract)'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-4' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Note No.'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Current Year (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-2', colSpan: 3 }, 'I. EQUITY AND LIABILITIES')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '1. Shareholders\' Funds'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2 pl-8' }, '(a) Share Capital'),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-center' }, '1'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '63,25,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold underline' }, 'Notes to Accounts:'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Note No.'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Amount (₹)')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2 text-center' }, '1'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('p', { className: 'font-bold' }, 'Share Capital'),
              React.createElement('p', { className: 'font-semibold' }, 'Authorised Capital'),
              React.createElement('p', null, '25,00,000 Equity Shares of ₹ 10 each'),
              React.createElement('p', null, '1,50,000 9% Preference Shares of ₹ 100 each'),
              React.createElement('p', { className: 'font-semibold mt-2' }, 'Issued Capital'),
              React.createElement('p', null, '8,00,000 Equity Shares of ₹ 10 each'),
              React.createElement('p', { className: 'font-semibold mt-2' }, 'Subscribed Capital'),
              React.createElement('p', null, 'Subscribed but not fully paid up:'),
              React.createElement('p', null, '8,00,000 Equity Shares of ₹ 10 each ... 80,00,000'),
              React.createElement('p', null, 'Less: Calls in Arrears (15,000 x 5) ... (75,000)'), // Called up is 3+5=8? Wait.
              // Question says: "payable 3 on app, 7 on allotment (inc premium)".
              // Premium is 20% of 10 = 2. So Allotment = 5 Capital + 2 Premium.
              // Total Capital Called = 3 (App) + 5 (Allotment) = 8.
              // Sanju failed allotment. So he paid only 3. Arrears = 5 on allotment? No, Arrears is Alloment (7).
              // But for Share Capital Note, we only deduct Capital part of arrears if we consider called up.
              // Wait, Notes to Accounts usually shows "Subscribed and fully paid" and "not fully paid".
              // Here balance is on call. Call is not made yet. So shares are NOT fully called up.
              // So all are "Subscribed but not fully paid".
              // Called up = 8 per share.
              // 8,00,000 x 8 = 64,00,000.
              // Less: Calls in Arrears. Sanju failed Allotment (5 Capital + 2 Premium).
              // Arrears for Share Capital = 15,000 x 5 = 75,000.
              // Result = 64,00,000 - 75,000 = 63,25,000.
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top text-right' },
              React.createElement('div', null, ' '),
              React.createElement('div', null, ' '),
              React.createElement('div', null, '2,50,00,000'),
              React.createElement('div', { className: 'border-b border-black mb-2' }, '1,50,00,000'),
              React.createElement('div', null, '4,00,00,000'), // Double underline usually
              React.createElement('div', { className: 'mt-2' }, ' '),
              React.createElement('div', { className: 'border-b border-black mb-2' }, '80,00,000'), // This is nominal value 8L x 10? Or called up? Issued is usually face value.
              // Notes to accounts standard format usually shows Face Value for Issued.
              React.createElement('div', { className: 'mt-4' }, ' '),
              React.createElement('div', null, ' '),
              React.createElement('div', null, '64,00,000'), // 8L x 8 called up
              React.createElement('div', { className: 'border-b border-black' }, '75,000'),
              React.createElement('div', { className: 'font-bold' }, '63,25,000')
            )
          )
        )
      )
    ),
    explanation: 'Since the final call has not been made, shares are "Subscribed but not fully paid up". Called up amount is ₹8 (₹3 App + ₹5 Allotment). Calls in Arrears strictly for Share Capital excludes Securities Premium.'
  },
  {
    id: 'acc-2023-q22',
    number: 22,
    book: 'Accountancy',
    chapter: 'Dissolution of Partnership Firm',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Charu, Dhwani, Iknoor and Paavni were partners in a firm. They had entered into partnership firm last year only, through a verbal agreement. They contributed Capitals in the firm and to meet other financial requirements, few partners also provided loan to the firm. Within a year, their conflicts arisen due to certain disagreements and they decided to dissolve the firm. The firm had appointed Ms. Kavya, who is a financial advisor and legal consultant, to carry on the dissolution process. In the first instance, Ms. Kavya had transferred various assets and external liabilities to Realisation A/c. Due to her busy schedule; Ms. Kavya has delegated this assignment to you, being an intern in her firm. On the date of dissolution, you have observed the following transactions:'),
      React.createElement('ol', { className: 'list-[lower-roman] list-inside mb-4' },
        React.createElement('li', null, 'Dhwani\'s Loan of ₹ 50,000 to the firm was settled by paying ₹ 42,000.'),
        React.createElement('li', null, 'Paavni\'s Loan of ₹ 40,000 was settled by giving an unrecorded asset of ₹ 45,000.'),
        React.createElement('li', null, 'Loan to Charu of ₹ 60,000 was settled by payment to Charu\'s brother loan of the same amount.'),
        React.createElement('li', null, 'Iknoor\'s Loan of ₹ 80,000 to the firm and she took over Machinery of ₹ 60,000 as part payment.')
      ),
      React.createElement('p', null, 'You are required to pass necessary entries for all the above mentioned transactions.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 4,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Journal Entries'),
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
              React.createElement('div', null, 'Dhwani\'s Loan A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Bank A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Realisation A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Loan settled for less amount)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '50,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '42,000'),
              React.createElement('div', null, '8,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(ii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Paavni\'s Loan A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Realisation A/c'),
              // Wait. Paavni's Loan (Liability) settled by Unrecorded Asset.
              // Usually, output implies no entry?
              // However, MS says: Paavni's Loan A/c Dr 40,000 to Realisation A/c 40,000.
              // Why? Because Asset was unrecorded?
              // If asset is given to settle liability, if both are in realisation, no entry.
              // But Partner's Loan is NOT in Realisation.
              // So we debit Partner Loan to close it, and Credit Realisation (as if asset realised).
              // Amount? Settle full loan 40k. Asset worth 45k.
              // MS says 40,000.
              React.createElement('div', { className: 'text-sm italic' }, '(Loan settled by giving unrecorded asset)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '40,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '40,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iii)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Realisation A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Loan to Charu A/c'),
              // Wait. "Loan to Charu" is an ASSET (Firm gave loan).
              // "Charu's Brother Loan" is a LIABILITY (Third party).
              // Asset settled by paying Liability.
              // Normally no entry if both in Realisation.
              // Loan to Charu (Asset) -> Transferred to Dr side of Realisation? No, usually separate?
              // But Brother's loan IS in Realisation (Liability).
              // MS says: Realisation A/c Dr 60,000 to Loan to Charu A/c 60,000.
              // This implies Loan to Charu is credited (removed). And Realisation is debited (Liability paid).
              React.createElement('div', { className: 'text-sm italic' }, '(Loan to Charu settled by payment to Charu\'s brother loan)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '60,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '60,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iv)'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Iknoor\'s Loan A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Realisation A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Bank A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Loan settled partly by asset and balance cash)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '80,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '60,000'),
              React.createElement('div', null, '20,000')
            )
          )
        )
      )
    ),
    explanation: 'Partner\'s Loan to the firm is an outside liability payment priority but internal debt. When settled at less amount, gain goes to Realisation. When settled by asset, Realisation is credited. Asset given to partner is treated as sale.'
  }
];
