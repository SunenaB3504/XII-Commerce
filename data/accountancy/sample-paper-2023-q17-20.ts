import React from 'react';
import { Question } from '../../types';

export const samplePaper2023Q17To20: Question[] = [
  {
    id: 'acc-2023-q17',
    number: 17,
    book: 'Accountancy',
    chapter: 'Accounting for Partnership Firms',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Nirmala, Divisha and Sara were partners in a firm sharing profits and losses in the 3:4:3. Books were closed on 31st March every year. Sara died on 1st February, 2022. As per the partnership deed Sara\'s executors are entitled to her share of profit till the date of death on the basis of Sales turnover. Sales for the year ended 31st March 2021 was ₹ 10,00,000 and profit for the same year was ₹ 1,20,000. Sales show a positive trend of 20% and percentage of profit earning is reduced by 2%.'),
      React.createElement('p', null, 'Journalise the transaction along with the working notes.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Journal Entry'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-4' },
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
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '1.02.22'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Profit and Loss Suspense A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Sara\'s Capital A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Being Sara\'s share of profit allowed till the date of her death)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '30,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '30,000')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold underline mb-2' }, 'Working Notes:'),
      React.createElement('ol', { className: 'list-decimal list-inside space-y-2' },
        React.createElement('li', null, 'Profit % to sales turnover for the year ended 31st March, 2021 = (1,20,000 / 10,00,000) × 100 = 12%'),
        React.createElement('li', null, 'Estimated sales for the year ended 31st March, 2022 = ₹ 10,00,000 + 20% of ₹ 10,00,000 = ₹ 12,00,000'),
        React.createElement('li', null, 'Estimated sales till 1st February, 2022 = ₹ 12,00,000 × 10/12 = ₹ 10,00,000'),
        React.createElement('li', null, 'Profit percentage = 12% - 2% = 10%'),
        React.createElement('li', null, 'Profit amount till 1st February, 2022 = 10% of ₹ 10,00,000 = ₹ 1,00,000'),
        React.createElement('li', null, 'Sara\'s share of profit till 1st February, 2022 = 1,00,000 × 3/10 = ₹ 30,000')
      )
    ),
    explanation: 'The deceased partner is entitled to their share of profit up to the date of death. This is calculated based on sales turnover and profit margin trends. The share is transferred to the partner\'s capital account via the P&L Suspense Account.'
  },
  {
    id: 'acc-2023-q18',
    number: 18,
    book: 'Accountancy',
    chapter: 'Accounting for Partnership Firms',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Amay, Anmol and Rohan entered into partnership on 1st July, 2021 to share profits and losses in the ratio of 3:2:1. Amay guaranteed that Rohan\'s share of profit after charging interest on capital @ 6% p.a would not be less than ₹ 36,000 p.a. Their fixed capital balances are: ₹ 2,00,000, ₹ 1,00,000 and ₹ 1,00,000 respectively. Profit for the year ended 31st March, 2022 was ₹ 1,38,000.'),
      React.createElement('p', null, 'Prepare Profit and Loss Appropriation A/c.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold text-center' }, 'Profit and Loss Appropriation A/c'),
      React.createElement('p', { className: 'text-center mb-2' }, 'for the year ending on 31st March, 2022'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
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
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top' },
              React.createElement('div', null, 'To Interest on Capital:'),
              React.createElement('div', { className: 'pl-4' }, 'Amay\'s Current A/c (2L × 6% × 9/12)'),
              React.createElement('div', { className: 'pl-4' }, 'Anmol\'s Current A/c (1L × 6% × 9/12)'),
              React.createElement('div', { className: 'pl-4' }, 'Rohan\'s Current A/c (1L × 6% × 9/12)'),
              React.createElement('div', { className: 'mt-4' }, 'To Partners\' Current A/c (Profit):'),
              React.createElement('div', { className: 'pl-4' }, 'Amay (1,20,000 × 3/6)'),
              React.createElement('div', { className: 'pl-4' }, 'Anmol (1,20,000 × 2/6)'),
              React.createElement('div', { className: 'pl-4' }, 'Rohan (1,20,000 × 1/6) 20,000'),
              React.createElement('div', { className: 'pl-8 text-sm' }, 'Add: Deficiency met by Amay'), // Wait, guaranteed amount analysis needed
              // Re-calculating based on MS solution which shows correct figures
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top text-right' },
              React.createElement('div', null, ' '),
              React.createElement('div', null, '9,000'),
              React.createElement('div', null, '4,500'),
              React.createElement('div', null, '4,500'),
              React.createElement('div', { className: 'mt-8' }, ' '),
              React.createElement('div', null, '53,000'), // Adjusted figure
              React.createElement('div', null, '40,000'),
              React.createElement('div', null, '27,000'),
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top' }, 'By Profit and Loss A/c'),
            React.createElement('td', { className: 'border border-gray-300 p-2 align-top text-right' }, '1,38,000')
          ),
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,38,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
            React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,38,000')
          )
        )
      ),
      React.createElement('p', { className: 'mt-2 text-sm' }, '** Guarantee met for 9 months. Minimum profit to Rohan = 36,000 × 9/12 = 27,000. Rohan\'s actual share = 20,000. Deficiency = 7,000 met by Amay.')
    ),
    explanation: 'Interest on capital is provided for 9 months (July to March). The guarantee is also proportionate for 9 months. Since Amay provides the guarantee, any deficiency in Rohan\'s share is deducted from Amay\'s share.'
  },
  {
    id: 'acc-2023-q18-or',
    number: 18,
    book: 'Accountancy',
    chapter: 'Accounting for Partnership Firms',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'OR'),
      React.createElement('p', null, 'Ajay, Manish and Sachin were partners sharing profits in the ratio 5:3:2. Their Capitals were ₹ 6,00,000; ₹ 8,00,000 and ₹ 11,00,000 as on April 01, 2021. As per Partnership deed, Interest on Capitals were to be provided @ 10% p.a. For the year ended March 31, 2022, Profits of ₹ 2,00,000 were distributed without providing for Interest on Capitals.'),
      React.createElement('p', null, 'Pass an adjustment entry and show the workings clearly.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Journal Entry'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-4' },
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
              React.createElement('div', null, 'Ajay\'s Capital A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Manish\'s Capital A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Sachin\'s Capital A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Adjustment entry passed)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '52,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '4,000'),
              React.createElement('div', null, '48,000')
            )
          )
        )
      ),
      React.createElement('p', { className: 'font-bold underline' }, 'Working Notes:'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 text-sm' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Particulars'),
            React.createElement('th', { className: 'border border-gray-300 p-1', colSpan: 2 }, 'Ajay'),
            React.createElement('th', { className: 'border border-gray-300 p-1', colSpan: 2 }, 'Manish'),
            React.createElement('th', { className: 'border border-gray-300 p-1', colSpan: 2 }, 'Sachin'),
            React.createElement('th', { className: 'border border-gray-300 p-1', colSpan: 2 }, 'Firm')
          ),
          React.createElement('tr', { className: 'bg-gray-50' },
            React.createElement('th', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Dr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Cr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Dr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Cr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Dr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Cr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Dr'),
            React.createElement('th', { className: 'border border-gray-300 p-1' }, 'Cr')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Profits taken back (5:3:2)'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '1,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '60,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '40,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2,00,000')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'IOC @ 10% (Insufficient Profit)'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '48,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '64,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '88,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '2,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '')
          ),
          React.createElement('tr', { className: 'font-bold' },
            React.createElement('td', { className: 'border border-gray-300 p-1' }, 'Net Effect'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '52,000 (Dr)'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '4,000 (Cr)'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '48,000 (Cr)'),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-1' }, '')
          )
        )
      )
    ),
    explanation: 'Since available profit (2,00,000) is less than total Interest on Capital (60k+80k+1.1L = 2.5L), the available profit is distributed in the ratio of capital/interest claims (6:8:11). The incorrect distribution (profit sharing ratio) is reversed.'
  },
  {
    id: 'acc-2023-q19',
    number: 19,
    book: 'Accountancy',
    chapter: 'Issue of Debentures',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Anthony Ltd. issued 20,000, 9% Debentures of ₹ 100 each at 10% discount to Mithoo Ltd. from whom Assets of ₹ 23,50,000 and Liabilities of ₹ 6,00,000 were taken over. Pass entries in the books of Anthony Ltd. if these debentures were to be redeemed at 5% premium.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'In the books of Anthony Ltd.'),
      React.createElement('p', { className: 'font-bold mb-2' }, 'Journal Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
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
              React.createElement('div', null, 'Assets A/c ...Dr.'),
              React.createElement('div', null, 'Goodwill A/c (Balancing Figure) ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Liabilities A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Mithoo Ltd.'),
              React.createElement('div', { className: 'text-sm italic' }, '(Business purchased)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '23,50,000'),
              React.createElement('div', null, '50,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, ''),
              React.createElement('div', null, ''),
              React.createElement('div', null, '6,00,000'),
              React.createElement('div', null, '18,00,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Mithoo Ltd. ...Dr.'),
              React.createElement('div', null, 'Loss on Issue of Debentures A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To 9% Debentures A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Premium on Redemption of Debentures A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Debentures issued at discount, redeemable at premium)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '18,00,000'),
              React.createElement('div', null, '3,00,000')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, ''),
              React.createElement('div', null, ''),
              React.createElement('div', null, '20,00,000'),
              React.createElement('div', null, '1,00,000')
            )
          )
        )
      )
    ),
    explanation: 'Purchase Consideration = Assets - Liabilities. If PC > Net Assets, difference is Goodwill. Debentures are issued at discount (10%) and redeemable at premium (5%), so Loss on Issue includes both discount and premium.'
  },
  {
    id: 'acc-2023-q19-or',
    number: 19,
    book: 'Accountancy',
    chapter: 'Issue of Debentures',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'OR'),
      React.createElement('p', null, 'Random Ltd. took over running business of Mature Ltd. comprising of Assets of ₹ 45,00,000 and Liabilities of ₹ 6,40,000 for a purchase consideration of ₹ 36,00,000. The amount was settled by bank draft of ₹ 1,50,000 and balance by issuing 12% preference shares of ₹ 100 each at 15% premium. Pass entries in the books of Random Ltd.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Books of Random Ltd.'),
      React.createElement('p', { className: 'font-bold mb-2' }, 'Journal Entries'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
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
              React.createElement('div', null, 'Assets A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Liabilities A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Mature Ltd. A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Capital Reserve A/c (Balancing Figure)'),
              React.createElement('div', { className: 'text-sm italic' }, '(Business purchased)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '45,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '6,40,000'),
              React.createElement('div', null, '36,00,000'),
              React.createElement('div', null, '2,60,000')
            )
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Mature Ltd. A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Bank A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To 12% Preference Share Capital A/c'),
              React.createElement('div', { className: 'pl-8' }, 'To Securities Premium A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Payment made)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '36,00,000'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, '1,50,000'),
              React.createElement('div', null, '30,00,000'),
              React.createElement('div', null, '4,50,000')
            )
          )
        )
      ),
      React.createElement('p', { className: 'mt-2' }, 'Number of Shares = (36,00,000 - 1,50,000) / 115 = 30,000 shares.')
    ),
    explanation: 'Purchase Consideration is less than Net Assets (Assets - Liabilities), resulting in Capital Reserve. Payment is made partly by bank and partly by issue of shares at premium.'
  },
  {
    id: 'acc-2023-q20',
    number: 20,
    book: 'Accountancy',
    chapter: 'Accounting for Partnership Firms',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Doremon, Shinchan and Nobita are partners sharing profits and losses in the ratio of 3:2:1. With effect from 1st April, 2022 they agree to share profits equally. For this purpose, goodwill is to be valued at two year\'s purchase of the average profit of last four years which were as follows:'),
      React.createElement('ul', { className: 'list-disc list-inside mb-4' },
        React.createElement('li', null, 'Year ending on 31st March, 2019: ₹ 50,000 (Profit)'),
        React.createElement('li', null, 'Year ending on 31st March, 2020: ₹ 1,20,000 (Profit)'),
        React.createElement('li', null, 'Year ending on 31st March, 2021: ₹ 1,80,000 (Profit)'),
        React.createElement('li', null, 'Year ending on 31st March, 2022: ₹ 70,000 (Loss)')
      ),
      React.createElement('p', null, 'On 1st April, 2021 a Motor Bike costing ₹ 50,000 was purchased and debited to traveling expenses account, on which depreciation is to be charged @ 20% p.a by Straight Line Method. The firm also paid an annual insurance premium of ₹ 20,000 which had already been charged to Profit and Loss Account for all the years.'),
      React.createElement('p', null, 'Journalise the transaction along with the working notes.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Journal Entry'),
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mb-4' },
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
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '1.4.22'),
            React.createElement('td', { className: 'border border-gray-300 p-2' },
              React.createElement('div', null, 'Nobita\'s Capital A/c ...Dr.'),
              React.createElement('div', { className: 'pl-8' }, 'To Doremon\'s Capital A/c'),
              React.createElement('div', { className: 'text-sm italic' }, '(Being goodwill adjusted at the time of change in profit sharing ratio)')
            ),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '26,667'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '26,667')
          )
        )
      ),
      React.createElement('p', { className: 'font-bold underline' }, 'Working Notes:'),
      React.createElement('div', null, '1. Calculation of Gaining/Sacrificing Ratio:'),
      React.createElement('ul', { className: 'list-none pl-4' },
        React.createElement('li', null, 'Doremon: 3/6 - 2/6 = 1/6 (Sacrifice)'),
        React.createElement('li', null, 'Shinchan: 2/6 - 2/6 = 0'),
        React.createElement('li', null, 'Nobita: 1/6 - 2/6 = -1/6 (Gain)')
      ),
      React.createElement('div', { className: 'mt-2' }, '2. Calculation of Goodwill:'),
      React.createElement('p', null, 'Adjusted Profit for 2022:'),
      React.createElement('ul', { className: 'list-disc list-inside pl-4' },
        React.createElement('li', null, 'Loss given: (70,000)'), // Wait, I need to check depreciation adjustment
        React.createElement('li', null, 'Add: Motor Bike wrongly debited: +50,000'),
        React.createElement('li', null, 'Less: Depreciation on Motor Bike (20% of 50k): -10,000'),
        React.createElement('li', null, 'Adjusted Loss 2022: (30,000)'),
      ),
      React.createElement('p', { className: 'mt-2' }, 'Total Profit = 50,000 + 1,20,000 + 1,80,000 - 30,000 = 3,20,000'),
      React.createElement('p', null, 'Average Profit = 3,20,000 / 4 = 80,000'),
      React.createElement('p', null, 'Goodwill = 80,000 × 2 = 1,60,000'),
      React.createElement('p', null, 'Adjustment = 1,60,000 × 1/6 = 26,666.67 ≈ 26,667')
    ),
    explanation: 'Goodwill is adjusted through capital accounts of gaining and sacrificing partners. Profits must be adjusted for errors (capital expenditure treated as revenue) before calculating goodwill.'
  }
];
