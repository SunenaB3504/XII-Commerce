import React from 'react';
import { Question } from '../../types';

export const questions11to15: Question[] = [
    {
        id: 'accountancy-2024-11',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Provisions in absence of Partnership Deed',
        topic: 'Rights of Partners',
        question: React.createElement('div', null,
            'In the absence of an agreement, partners are entitled to:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'i) Profit share in capital ratio.'),
                React.createElement('li', null, 'ii) Commission for making additional sale.'),
                React.createElement('li', null, 'iii) Interest on Loan & Advances by them to the firm.'),
                React.createElement('li', null, 'iv) Salary for working extra hours.'),
                React.createElement('li', null, 'v) Interest on Capital.')
            ),
            React.createElement('p', { className: 'mt-4 font-semibold' }, 'Choose the correct option:'),
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Only i), iv) and v).'),
                React.createElement('li', null, 'b) Only ii) and iii).'),
                React.createElement('li', null, 'c) Only iii).'),
                React.createElement('li', null, 'd) Only i) and iii).')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) Only (iii).')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Provisions in absence of Partnership Deed'),
            'In the absence of a partnership deed:',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'Profits are shared equally (not capital ratio).'),
                React.createElement('li', null, 'No Interest on Capital is allowed.'),
                React.createElement('li', null, 'No Salary or Commission is allowed.'),
                React.createElement('li', null, 'Interest on Loan provided by a partner is allowed @ 6% p.a.')
            ),
            'Therefore, only (iii) is correct.'
        )
    },
    {
        id: 'accountancy-2024-12',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Issue of Shares',
        topic: 'Consideration other than Cash',
        question: React.createElement('div', null,
            'Rancho Ltd. took over assets worth ₹ 20,00,000 from PK Ltd. by paying 30% through bank draft and balance by issue of shares of ₹ 100 each at a premium of 10%. The entry to be passed by Rancho Ltd for settlement will be :-',
            React.createElement('div', { className: 'grid grid-cols-1 gap-4 mt-4' },
                React.createElement('div', { className: 'border p-2' },
                    React.createElement('p', { className: 'font-semibold' }, 'A.'),
                    React.createElement('pre', { className: 'whitespace-pre-wrap text-sm' },
                        'PK Ltd. Dr. 20,00,000\n  To Share Capital A/c           12,72,700\n  To Securities Premium A/c       1,27,270\n  To Bank A/c                     6,00,000\n  To Statement of P&L                    30\n(Being settlement of amount due to vendors)'
                    )
                ),
                React.createElement('div', { className: 'border p-2' },
                    React.createElement('p', { className: 'font-semibold' }, 'B.'),
                    React.createElement('pre', { className: 'whitespace-pre-wrap text-sm' },
                        'PK Ltd. Dr. 20,00,000\n  To Share Capital A/c           12,72,700\n  To Securities Premium A/c       1,27,270\n  To Bank A/c                     6,00,030\n(Being settlement of amount due to vendors)'
                    )
                ),
                React.createElement('div', { className: 'border p-2' },
                    React.createElement('p', { className: 'font-semibold' }, 'C.'),
                    React.createElement('pre', { className: 'whitespace-pre-wrap text-sm' },
                        'PK Ltd. Dr. 20,00,000\n  To Share Capital A/c           12,72,700\n  To Securities Premium A/c       1,27,300\n  To Bank A/c                     6,00,000\n(Being settlement of amount due to vendors)'
                    )
                ),
                React.createElement('div', { className: 'border p-2' },
                    React.createElement('p', { className: 'font-semibold' }, 'D.'),
                    React.createElement('pre', { className: 'whitespace-pre-wrap text-sm' },
                        'PK Ltd. Dr. 20,00,000\n  To Share Capital A/c           12,73,000\n  To Securities Premium A/c       1,27,300\n  To Bank A/c                     5,99,700\n(Being settlement of amount due to vendors)'
                    )
                )
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'B.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 8: Accounting for Share Capital - Issue of Shares for Consideration other than Cash'),
            'Total Amount Due to PK Ltd = 20,00,000.',
            React.createElement('br'),
            'Paid by Bank Draft (30%) = 30% of 20,00,000 = 6,00,000.',
            React.createElement('br'),
            'Wait, the option B shows Bank as 6,00,030. Why? Let\'s re-calculate shares.',
            React.createElement('br'),
            'Balance Purchase Consideration = 20,00,000 - 6,00,000 = 14,00,000.',
            React.createElement('br'),
            'Issue Price per share = 100 + 10% premium = 110.',
            React.createElement('br'),
            'Number of Shares = 14,00,000 / 110 = 12,727.27 shares.',
            React.createElement('br'),
            'Fractions cannot be issued. Shares issued = 12,727.',
            React.createElement('br'),
            'Amount towards Share Capital = 12,727 * 100 = 12,72,700.',
            React.createElement('br'),
            'Amount towards Securities Premium = 12,727 * 10 = 1,27,270.',
            React.createElement('br'),
            'Total Value of Shares = 12,72,700 + 1,27,270 = 13,99,970.',
            React.createElement('br'),
            'Amount Short Paid via Shares = 14,00,000 - 13,99,970 = 30.',
            React.createElement('br'),
            'This ₹30 balance must be paid in Cash/Bank additionally.',
            React.createElement('br'),
            'Total Bank Payment = 6,00,000 (30%) + 30 (fractional adjustment) = 6,00,030.'
        )
    },
    {
        id: 'accountancy-2024-13',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Forfeiture and Reissue',
        topic: 'Calculation of Number of Shares',
        question: React.createElement('div', null,
            'A company forfeited 3,000 shares of ₹10 each, on which only ₹5 per share (including ₹1 premium) has been paid. Out of these few shares were re-issued at a discount of ₹1 per share were and ₹6,000 were transferred to Capital Reserve. How many shares were re-issued?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) 3,000 shares'),
                React.createElement('li', null, 'b) 1,000 shares'),
                React.createElement('li', null, 'c) 2,000 shares'),
                React.createElement('li', null, 'd) 1,500 shares')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) 2,000 shares')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 8: Accounting for Share Capital - Forfeiture and Reissue'),
            'Amount received per share = ₹5 (including ₹1 premium).',
            React.createElement('br'),
            'Amount forfeited = Amount received towards Capital = 5 - 1 = ₹4 per share (Premium is not forfeited if received).',
            React.createElement('br'),
            'Discount on Re-issue = ₹1 per share.',
            React.createElement('br'),
            'Gain per share = Amount Forfeited - Discount = 4 - 1 = ₹3 per share.',
            React.createElement('br'),
            'Total Gain transferred to Capital Reserve = ₹6,000.',
            React.createElement('br'),
            'Number of shares re-issued = Total Gain / Gain per share = 6,000 / 3 = 2,000 shares.'
        )
    },
    {
        id: 'accountancy-2024-14',
        marks: 1,
        chapter: 'Admission of a Partner',
        name: 'Adjustment of Capital',
        topic: 'New Partner Capital Logic',
        question: React.createElement('div', null,
            'X and Y are partners in a firm with capital of ₹18,000 and ₹20,000. Z brings ₹10,000 for his share of goodwill and he is required to bring proportionate capital for 1/3rd share in profits. The capital contribution of Z will be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹24,000.'),
                React.createElement('li', null, 'b) ₹19,000.'),
                React.createElement('li', null, 'c) ₹12,667.'),
                React.createElement('li', null, 'd) ₹14,000.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'a) ₹24,000.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 4: Admission of a Partner - Adjustment of Capital'),
            'Adjusted Capital of X and Y = Existing Capital + Share of Goodwill (distributed to them).',
            React.createElement('br'),
            'Combined Adjusted Capital of X & Y = (18,000 + 20,000) + 10,000 = 48,000.',
            React.createElement('br'),
            'Z\'s Share = 1/3. Remaining Share for X & Y = 1 - 1/3 = 2/3.',
            React.createElement('br'),
            'Total Capital of the Firm = (Combined Capital of X & Y) × (Reciprocal of rem. share) = 48,000 × 3/2 = 72,000.',
            React.createElement('br'),
            'Z\'s Capital = Total Capital × Z\'s Share = 72,000 × 1/3 = ₹24,000.'
        )
    },
    {
        id: 'accountancy-2024-15',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Interest on Drawings',
        topic: 'Calculation of Drawings',
        question: React.createElement('div', null,
            'A and B are partners. B draws a fixed amount at the end of every quarter. Interest on drawings is charged @15% p.a. At the end of the year interest on B’s drawings amounted to ₹9,000. Drawings of B were:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹24,000 per quarter.'),
                React.createElement('li', null, 'b) ₹40,000 per quarter'),
                React.createElement('li', null, 'c) ₹30,000 per quarter'),
                React.createElement('li', null, 'd) ₹80,000 per quarter')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'b) ₹40,000 per quarter')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Interest on Drawings'),
            'Let the amount withdrawn per quarter be \'x\'.',
            React.createElement('br'),
            'Total Drawings = 4x.',
            React.createElement('br'),
            'Average Period for quarterly drawings at the end of each quarter = 4.5 months.',
            React.createElement('br'),
            'Interest = Total Drawings × Rate/100 × Avg Period/12',
            React.createElement('br'),
            '9,000 = 4x × 15/100 × 4.5/12',
            React.createElement('br'),
            '9,000 = 4x × 0.15 × 0.375',
            React.createElement('br'),
            '9,000 = x × (4 × 0.15 × 0.375) => 9,000 = x × 0.225',
            React.createElement('br'),
            'x = 9,000 / 0.225 = 40,000.'
        )
    },
    {
        id: 'accountancy-2024-15-OR',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Interest on Drawings',
        topic: 'Calculation for Multiple Partners',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'Shyam, Gopal & Arjun are partners carrying on garment business. Shyam withdrew ₹ 10,000 in the beginning of each quarter. Gopal, withdrew garments amounting to ₹ 15,000 to distribute it to flood victims, and Arjun withdrew ₹ 20,000 from his capital account. The partnership deed provides for interest on drawings @ 10% p.a. The interest on drawing charged from Shyam, Gopal & Arjun at the end of the year will be',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Shyam- ₹ 4,800; Gopal- ₹ 1,000; Arjun- ₹ 2,000.'),
                React.createElement('li', null, 'b) Shyam- ₹ 4,800; Gopal- ₹ 1,000; Arjun- ₹ 2,000.'),
                React.createElement('li', null, 'c) Shyam- ₹ 2,500; Gopal- ₹ 750; Arjun- Nil.'),
                React.createElement('li', null, 'd) Shyam- ₹ 4,800; Gopal- Nil; Arjun- Nil.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) Shyam- ₹ 2,500; Gopal- ₹ 750; Arjun- Nil.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Interest on Drawings'),
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'Shyam: 10,000 beginning of each quarter. Total = 40,000. Avg Period = 7.5 months. Interest = 40,000 × 10/100 × 7.5/12 = 2,500.'),
                React.createElement('li', null, 'Gopal: Withdrew garments ₹15,000. This is drawings in kind. Interest is charged on drawings in kind as well usually? Wait. MS says "Gopal- ₹ 750". That would be 15,000 * 10% * 6/12 = 750. So yes, interest charged on goods withdrawn for average 6 months.'),
                React.createElement('li', null, 'Arjun: Withdrew from Capital Account. Interest is NOT charged on withdrawal of capital (it reduces capital balance for Interest on Capital calculation, but is not "Drawings" for Interest on Drawings). So Nil.')
            )
        )
    }
];
