import React from 'react';
import { Question } from '@/types';

export const samplePaper2023Q11To16: Question[] = [
    {
        id: 'acc-2023-q11',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Division of Profit',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Choose the correct sequence of the following transactions in context of Division of Profits.'),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, '(i) Guarantee by Firm to Partners'),
                React.createElement('li', {}, '(ii) Guarantee by Partners to Firm'),
                React.createElement('li', {}, '(iii) Transfer of Profits to Profit and Loss Appropriation Account'),
                React.createElement('li', {}, '(iv) Guarantee by Partner to Partner'),
                React.createElement('li', {}, 'a)  (i); (iii) ; (iv) ; (ii)'),
                React.createElement('li', {}, 'b) (iii); (i) ; (ii) ; (iv)'),
                React.createElement('li', {}, 'c) (iii) ; (ii) ; (i); (iv)'),
                React.createElement('li', {}, 'd) (ii); (iii); (iv); (i)')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) (iii) ; (ii) ; (i); (iv)')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 2: Accounting for Partnership Firms - Fundamentals - Division of Profit.'),
            React.createElement('p', {}, 'The correct sequence for distributing profits is:'),
            React.createElement('ol', { className: 'list-decimal pl-6 mt-1' },
                React.createElement('li', {}, 'Transfer Net Profit from P&L A/c to P&L Appropriation A/c (iii).'),
                React.createElement('li', {}, 'Adjust Guarantee by Partners to Firm (ii) - this increases the available profit.'),
                React.createElement('li', {}, 'Adjust Guarantee by Firm to Partners (i) - this is a charge against the available profit.'),
                React.createElement('li', {}, 'Adjust Guarantee by Partner to Partner (iv) - this is an inter-partner adjustment done after the initial distribution.')
            ),
            React.createElement('p', { className: 'mt-2' }, 'Therefore, the sequence is (iii) -> (ii) -> (i) -> (iv).')
        )
    },
    {
        id: 'acc-2023-q12',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Unit 3: Accounting for Share Capital',
        topic: 'Forfeiture and Re-issue of Shares',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'If 10,000 shares of ₹10 each were forfeited for non-payment of final call money of ₹ 3 per share and only 7,000 shares were re-issued @ ₹ 11 per share as fully paid up, then what is the amount of maximum possible discount that company can allow at the time of re-issue of the remaining 3,000 shares?'),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 28,000'),
                React.createElement('li', {}, 'b) ₹ 21,000'),
                React.createElement('li', {}, 'c) ₹ 9,000'),
                React.createElement('li', {}, 'd) ₹ 16,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: b) ₹ 21,000')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 9: Accounting for Share Capital - Forfeiture and Re-issue.'),
            React.createElement('p', {}, 'Maximum Discount allowed on re-issue is limited to the amount forfeited on those specific shares.'),
            React.createElement('p', {}, 'Amount Forfeited per share = Face Value - Unpaid Amount = ₹10 - ₹3 = ₹7 per share.'),
            React.createElement('p', {}, 'Remaining shares to be re-issued = 3,000.'),
            React.createElement('p', {}, 'Max Discount = 3,000 shares * ₹7/share = ₹ 21,000.')
        )
    },
    {
        id: 'acc-2023-q13',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Unit 3: Accounting for Share Capital',
        topic: 'Utilisation of Securities Premium',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'As per Companies Act 2013, Securities Premium Balance can be utilised for which of the following purpose?'),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) Issuing bonus to existing shareholders to convert partly paid up into fully paid-up bonus shares.'),
                React.createElement('li', {}, 'b) Providing for Premium payable on Redemption of Debentures.'),
                React.createElement('li', {}, 'c) Writing off all Capitalised Expenditures'),
                React.createElement('li', {}, 'd) Buy Back of Debentures')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: b) Providing for Premium payable on Redemption of Debentures.')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 9: Accounting for Share Capital - Utilisation of Securities Premium Reserve (Section 52).'),
            React.createElement('p', {}, 'Securities Premium can be used for:'),
            React.createElement('ul', { className: 'list-disc pl-6 mt-1' },
                React.createElement('li', {}, 'Issuing fully paid bonus shares (not partly paid to fully paid).'),
                React.createElement('li', {}, 'Writing off preliminary expenses.'),
                React.createElement('li', {}, 'Writing off expenses/commission/discount on issue of shares/debentures.'),
                React.createElement('li', {}, 'Providing for premium payable on redemption of preference shares or debentures (Option b).'),
                React.createElement('li', {}, 'Buy-back of own shares (not debentures directly, though effectively similar, the specific act wording is "own shares").')
            ),
            React.createElement('p', { className: 'mt-1' }, 'Note: Option (d) "Buy Back of Debentures" is incorrect; it is Buy Back of Shares (Sec 68). Option (b) is explicitly permitted.')
        )
    },
    {
        id: 'acc-2023-q14',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Admission of a Partner',
        topic: 'Adjustment of Capital',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, "Ganga and Jamuna are partners sharing profits in the ratio of 2:1. They admit Saraswati for 1/5th share in future profits. On the date of admission, Ganga's capital was ₹ 1,02,000 and Jamuna's capital was ₹ 73,000. Saraswati brings ₹ 25,000 as her share of goodwill and she agrees to contribute proportionate capital of the new firm. How much capital will be brought by Saraswati?"),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 43,750'),
                React.createElement('li', {}, 'b) ₹ 37,500'),
                React.createElement('li', {}, 'c) ₹ 50,000'),
                React.createElement('li', {}, 'd) ₹ 40,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) ₹ 50,000')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 4: Admission of a Partner - Adjustment of Capital.'),
            React.createElement('p', {}, '1. Calculate Adjusted Capitals of Old Partners:'),
            React.createElement('p', {}, '   Since Saraswati brings goodwill in cash, it is distributed to sacrificing partners.'),
            React.createElement('p', {}, '   Old Ratio = 2:1. New share = 1/5. Sacrificing Ratio = 2:1 (Assumed).'),
            React.createElement('p', {}, '   Ganga = 1,02,000 + (25,000 * 2/3) = 1,02,000 + 16,667 = 1,18,667'),
            React.createElement('p', {}, '   Jamuna = 73,000 + (25,000 * 1/3) = 73,000 + 8,333 = 81,333'),
            React.createElement('p', {}, '   Total Adjusted Capital of Old Partners = 1,18,667 + 81,333 = ₹ 2,00,000.'),
            React.createElement('p', { className: 'mt-2' }, '2. Calculate Total Capital of New Firm:'),
            React.createElement('p', {}, '   Remaining Share = 1 - 1/5 = 4/5.'),
            React.createElement('p', {}, '   If 4/5 share = ₹ 2,00,000, then Total Capital = 2,00,000 * 5/4 = ₹ 2,50,000.'),
            React.createElement('p', { className: 'mt-2' }, "3. Calculate Saraswati's Capital:"),
            React.createElement('p', {}, '   Saraswati Share = 1/5 of 2,50,000 = ₹ 50,000.')
        )
    },
    {
        id: 'acc-2023-q15',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Interest on Drawings',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, "Green and Orange are partners. Green draws a fixed amount at the beginning of every month. Interest on drawings is charged @8% p.a. At the end of the year interest on Green's drawings amounts to ₹ 2,600. Monthly drawings of Green were:"),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 8,000'),
                React.createElement('li', {}, 'b) ₹ 60,000'),
                React.createElement('li', {}, 'c) ₹ 7,000'),
                React.createElement('li', {}, 'd) ₹ 5,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) ₹ 5,000')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 2: Fundamentals - Interest on Drawings.'),
            React.createElement('p', {}, 'Formula: Interest = Total Drawings * Rate/100 * Average Period/12'),
            React.createElement('p', {}, 'Average Period for beginning of every month = 6.5 months.'),
            React.createElement('p', {}, 'Let monthly drawing be X. Total Drawings = 12X.'),
            React.createElement('p', {}, '2,600 = 12X * 8/100 * 6.5/12'),
            React.createElement('p', {}, '2,600 = X * 8 * 6.5 / 100'),
            React.createElement('p', {}, '2,600 = X * 52 / 100'),
            React.createElement('p', {}, '2,600 * 100 = 52X'),
            React.createElement('p', {}, '2,60,000 / 52 = X'),
            React.createElement('p', {}, 'X = 5,000.')
        )
    },
    {
        id: 'acc-2023-q15-or',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Interest on Drawings Calculation',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-bold mb-1' }, 'OR'),
            React.createElement('p', {}, 'Girdhar, a partner withdrew ₹ 5,000 in the beginning of each quarter and interest on drawings was calculated as ₹ 1,500 at the end of accounting year 31 March 2022. What is the rate of interest on drawings charged?'),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) 6% p.a.'),
                React.createElement('li', {}, 'b) 8% p.a.'),
                React.createElement('li', {}, 'c) 10% p.a.'),
                React.createElement('li', {}, 'd) 12% p.a.')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) 12% p.a.')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 2: Fundamentals - Interest on Drawings (Quarterly).'),
            React.createElement('p', {}, 'Total Drawings = 5,000 * 4 = 20,000.'),
            React.createElement('p', {}, 'Average Period for beginning of each quarter = 7.5 months.'),
            React.createElement('p', {}, 'Interest = Total Drawings * Rate/100 * 7.5/12'),
            React.createElement('p', {}, '1,500 = 20,000 * R/100 * 7.5/12'),
            React.createElement('p', {}, '1,500 = 200 * R * 0.625'),
            React.createElement('p', {}, '1,500 = 125R'),
            React.createElement('p', {}, 'R = 1,500 / 125 = 12%.')
        )
    },
    {
        id: 'acc-2023-q16',
        marks: 1,
        chapter: 'Dissolution of Partnership Firm',
        name: 'Dissolution',
        topic: 'Realisation Account',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, "At the time of dissolution of a firm, Creditors are ₹ 70,000; Firm's Capital is ₹ 1,20,000; Cash Balance is ₹ 10,000. Other assets realised ₹ 1,50,000. Gain/Loss in the realisation account will be:"),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 30,000 (Gain)'),
                React.createElement('li', {}, 'b) ₹ 40,000 (Gain)'),
                React.createElement('li', {}, 'c) ₹ 40,000 (Loss)'),
                React.createElement('li', {}, 'd) ₹ 30,000 (Loss)')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) ₹ 30,000 (Loss)')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 5: Dissolution of Partnership Firm - Realisation Account.'),
            React.createElement('p', {}, '1. Calculate Sundry Assets (Book Value):'),
            React.createElement('p', {}, '   Total Liabilities = Capital + Creditors = 1,20,000 + 70,000 = 1,90,000.'),
            React.createElement('p', {}, '   Total Assets = Total Liabilities = 1,90,000.'),
            React.createElement('p', {}, '   Sundry Assets = Total Assets - Cash Balance = 1,90,000 - 10,000 = 1,80,000.'),
            React.createElement('p', { className: 'mt-2' }, '2. Calculate Profit/Loss on Realisation:'),
            React.createElement('p', {}, '   Realisation A/c Dr (Book Value of Assets) = 1,80,000.'),
            React.createElement('p', {}, '   Realisation A/c Cr (Payment to Liabilities) = 70,000 (Creditors paid full implied).'),
            React.createElement('p', {}, '   Realisation A/c Cr (Book Value of Liabilities) = 70,000.'),
            React.createElement('p', {}, '   Realisation A/c Cr (Assets Realised) = 1,50,000.'),
            React.createElement('p', { className: 'mt-2 font-semibold' }, 'Net Result:'),
            React.createElement('p', {}, '   Dr: To Sundry Assets 1,80,000 + To Bank (Creditors) 70,000 = 2,50,000.'),
            React.createElement('p', {}, '   Cr: By Creditors 70,000 + By Bank (Assets Realised) 1,50,000 = 2,20,000.'),
            React.createElement('p', {}, '   Loss = Dr - Cr = 2,50,000 - 2,20,000 = ₹ 30,000 Loss.')
        )
    }
];
