import React from 'react';
import { Question } from '../../types';

export const questions16to20: Question[] = [
    {
        id: 'accountancy-2024-16',
        marks: 1,
        chapter: 'Dissolution of Partnership Firm',
        name: 'Realisation Account',
        topic: 'Calculation of Amount Realised',
        question: React.createElement('div', null,
            'On the day of dissolution of the firm ‘Roop Brothers’ had partner’s capital amounting to ₹1,50,000 , external liabilities ₹35,000, Cash balance ₹8,000 and P&LA/c(Dr.) ₹7,000. If Realisation expense and loss on Realisation amounted to₹5,000 and ₹25,000 respectively, the amount realised by sale of assets is:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹1,64,000'),
                React.createElement('li', null, 'b) ₹1,45,000'),
                React.createElement('li', null, 'c) ₹1,57,000'),
                React.createElement('li', null, 'd) ₹1,50,000')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) ₹1,50,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 5: Dissolution of Partnership Firm - Realisation Account'),
            'Total Assets (excluding Cash) = Capital + External Liabilities - P&L(Dr) - Cash',
            React.createElement('br'),
            '= 1,50,000 + 35,000 - 7,000 - 8,000 = 1,70,000.',
            React.createElement('br'),
            'Realisation Account Equation:',
            React.createElement('br'),
            'Loss on Realisation = (Book Value of Assets + Realisation Exp) - (Amount Realised from Assets + Book Value of Liabilities assumed/paid).',
            React.createElement('br'),
            'Realisation A/c:',
            React.createElement('br'),
            'Dr: Sundry Assets (1,70,000) + Cash Paid for Liabilities (35,000) + Expenses (5,000) = 2,10,000.',
            React.createElement('br'),
            'Cr: Liabilities (35,000) + Cash Realised (X) + Loss (25,000).',
            React.createElement('br'),
            '2,10,000 = 35,000 + X + 25,000',
            React.createElement('br'),
            '2,10,000 = 60,000 + X',
            React.createElement('br'),
            'X = 1,50,000.',
            React.createElement('br'),
            'So, Amount Realised = ₹1,50,000.'
        )
    },
    {
        id: 'accountancy-2024-17',
        marks: 3,
        chapter: 'Retirement of a Partner',
        name: 'Gaining Ratio & Goodwill',
        topic: 'Journal Entry for Goodwill',
        question: React.createElement('div', null,
            'Anshul, Babita and Chander were partners in a firm running a successful business of car accessories. They had agreed to share profits and losses in the ratio of 1/2 : 1/3 : 1/6 respectively. After running business successfully and without any disputes for 10 years,Babita decided to retire due to old age and the Anshul and Chander decided to share future profits and losses in the ratio of 3 : 2. The accountant passed the following journal entry for Babita share of goodwill and missed some information. Fill in the missing figures in the following Journal entry and calculate the gaining ratio.',
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Anshul’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '----------'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Chander’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '21,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Babita’s Capital A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '------------')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 italic' }, '(Chander’s share of Goodwill debited to the amounts of continuing partners in their gaining ratio)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        )
                    )
                )
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold mb-2' }, 'Solution:'),
            React.createElement('div', { className: 'overflow-x-auto mb-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr (₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr (₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Anshul’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '9,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Chander’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '21,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Babita’s Capital A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '30,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 italic' }, '(Chander’s share of Goodwill debited to the amounts of continuing partners in their gaining ratio)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        )
                    )
                )
            ),
            React.createElement('p', { className: 'font-semibold' }, 'Gaining Ratio is 3:7')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 5: Retirement of a Partner - Gaining Ratio & Goodwill'),
            'Old Ratio (A:B:C) = 1/2 : 1/3 : 1/6 = 3:2:1.',
            React.createElement('br'),
            'New Ratio (A:C) = 3:2.',
            React.createElement('br'),
            'Gaining Ratio = New Ratio - Old Ratio.',
            React.createElement('br'),
            'Anshul Gain = 3/5 - 3/6 = (18-15)/30 = 3/30.',
            React.createElement('br'),
            'Chander Gain = 2/5 - 1/6 = (12-5)/30 = 7/30.',
            React.createElement('br'),
            'Gaining Ratio = 3:7.',
            React.createElement('br'),
            'Chander\'s Debit = 21,000.',
            React.createElement('br'),
            'Anshul\'s Debit = (21,000 / 7) * 3 = 9,000.',
            React.createElement('br'),
            'Total Credit to Babita = 21,000 + 9,000 = 30,000.'
        )
    },
    {
        id: 'accountancy-2024-18',
        marks: 3,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Rectification of Errors',
        topic: 'Past Adjustments',
        question: React.createElement('div', null,
            'P, Q and R were partners with fixed capital of ₹ 40,000, ₹32,000and ₹24,000.After distributing the profit of ₹48,000 for the year ended 31st March 2022 in their agreed ratio of 3 : 1 : 1it was observed that:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, '(1) Interest on capital was provided at 10% p.a. instead of 8% p.a.'),
                React.createElement('li', null, '(2) Salary of ₹ 12,000 was credited to P instead of Q.')
            ),
            React.createElement('p', { className: 'mt-2' }, 'You are required to pass a single journal entry in the beginning of the next year to rectify the above omissions.')
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold mb-2' }, 'Adjustment Table:'),
            React.createElement('div', { className: 'overflow-x-auto mb-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Partners'),
                            React.createElement('th', { className: 'border p-2' }, 'Interest on Capital (2%) Excess (Dr)'),
                            React.createElement('th', { className: 'border p-2' }, 'Salary Paid (Wrong Credit) (Dr)'),
                            React.createElement('th', { className: 'border p-2' }, 'Salary Payable (Correct Credit) (Cr)'),
                            React.createElement('th', { className: 'border p-2' }, 'Total Effect'),
                            React.createElement('th', { className: 'border p-2' }, 'Adjustment')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'P'),
                            React.createElement('td', { className: 'border p-2' }, '800 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '12,000 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '12,800 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '11,648 (Dr)')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Q'),
                            React.createElement('td', { className: 'border p-2' }, '640 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '12,000 (Cr)'),
                            React.createElement('td', { className: 'border p-2' }, '11,360 (Cr)'),
                            React.createElement('td', { className: 'border p-2' }, '11,744 (Cr)')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'R'),
                            React.createElement('td', { className: 'border p-2' }, '480 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '480 (Dr)'),
                            React.createElement('td', { className: 'border p-2' }, '96 (Dr)')
                        )
                    )
                )
            ),
            React.createElement('p', { className: 'mb-4 italic' }, '*Note: The exact distribution of net effect involves sharing the total error amount in profit sharing ratio. Total Net Error = 1,920 (Surplus Profit due to excess IOC charges). This surplus is credited to partners in 3:1:1 ratio.'),
            React.createElement('div', { className: 'overflow-x-auto mb-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr (₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr (₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'P’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '11,648'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'R’s Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '96'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Q’s Capital A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '11,744')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 italic' }, '(Being entry passed for adjustment of interest on capital and salary)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Rectification of Errors'),
            'Analysis of Errors:',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'IOC Excess Charged (10% - 8% = 2%): P=800, Q=640, R=480. Total = 1,920 (Dr to Partners, Cr to Firm).'),
                React.createElement('li', null, 'Salary Wrongly Credited to P: 12,000 (Dr P, Cr Firm).'),
                React.createElement('li', null, 'Salary Omitted to Q: 12,000 (Cr Q, Dr Firm).'),
                React.createElement('li', null, 'Net Effect on Firm: Cr 1,920 + Cr 12,000 - Dr 12,000 = Cr 1,920.'),
                React.createElement('li', null, 'This Net Profit of 1,920 needs to be distributed to Partners in 3:1:1. P=1152, Q=384, R=384 (Cr to Partners).')
            ),
            'Partner P: Dr 800 (IOC) + Dr 12,000 (Sal) - Cr 1152 (Profit) = 11,648 Dr.',
            React.createElement('br'),
            'Partner Q: Dr 640 (IOC) - Cr 12,000 (Sal) - Cr 384 (Profit) = 11,744 Cr.',
            React.createElement('br'),
            'Partner R: Dr 480 (IOC) - Cr 384 (Profit) = 96 Dr.'
        )
    },
    {
        id: 'accountancy-2024-18-OR',
        marks: 3,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'P&L Adjustment',
        topic: 'Rectification using P&L Adjustment A/c',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'Cheese and Slice are equal partners. Their capitals as on April 01, 2022 were Rs. 50,000 and Rs. 1,00,000 respectively. After the accounts for the financialyear ending March 31, 2023 have been prepared, it is observed that interest on capital @ 6% per annum and salary to Cheese @ ₹5,000 per annum, as provided in the partnership deed has notbeen credited to the partners’ capital accounts before distribution of profits.',
            React.createElement('p', { className: 'mt-2' }, 'You are required to give necessary rectifying entries using P&L adjustment account.')
        ),
        solution: React.createElement('div', null,
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr (₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr (₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'P&L Adjustment A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '9,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Cheese Capital A/c (50k * 6%)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Slice Capital A/c (1L * 6%)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '6,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2', colSpan: 5 }, React.createElement('i', null, '(Being Interest on capital omitted earlier now provided)'))
                        ),
                        // Entry 2
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'P&L Adjustment A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '5,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Cheese Capital A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '5,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2', colSpan: 5 }, React.createElement('i', null, '(Being salary omitted earlier now provided)'))
                        ),
                        // Entry 3
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Cheese Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '7,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Slice Capital A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '7,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To P&L Adjustment A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '14,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2', colSpan: 5 }, React.createElement('i', null, '(Being Loss on Adjustment transferred to partners)'))
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - P&L Adjustment Account'),
            'P&L Adjustment Account is used to record omitted items.',
            React.createElement('br'),
            '1. Interest on Capital: Total 9,000 (Expense for Firm -> Dr P&L Adj).',
            React.createElement('br'),
            '2. Salary: Total 5,000 (Expense for Firm -> Dr P&L Adj).',
            React.createElement('br'),
            'Total Debit to P&L Adj = 14,000. This is a Loss.',
            React.createElement('br'),
            'This Loss of 14,000 shares equally between Cheese and Slice (7,000 each).'
        )
    },
    {
        id: 'accountancy-2024-19',
        marks: 3,
        chapter: 'Issue of Debentures',
        name: 'Purchase of Business',
        topic: 'Vendor Journal Entries',
        question: React.createElement('div', null,
            'Pioneer Fitness Ltd. took over the running business of Healthy World Ltd. having assets of ₹10,00,000 and liabilities of ₹ 1,70,000 by:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Issuing 8,000 8% Debentures of ₹ 100 each at 5% premium redeemable after 6 years @ ₹ 110; and'),
                React.createElement('li', null, 'b) Cheque for ₹ 50,000.')
            ),
            React.createElement('p', { className: 'mt-2' }, 'Pass the Journal entries in the books of Pioneer Fitness Ltd.')
        ),
        solution: React.createElement('div', null,
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr (₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr (₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        // Entry 1
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Assets A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '10,00,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Goodwill A/c (Bal Fig) ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '60,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Liabilities A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,70,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Healthy World Ltd.'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '8,90,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2', colSpan: 4 }, React.createElement('i', null, '(Being business purchased)'))
                        ),
                        // Entry 2
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Healthy World Ltd. ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '8,90,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Loss on issue of Debentures A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '80,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To 8% Debentures A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '8,00,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Securities Premium A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '40,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Premium on redemption A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '80,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Bank A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '50,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2', colSpan: 4 }, React.createElement('i', null, '(Being Purchase consideration discharged)'))
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 9: Issue of Debentures - Purchase of Business'),
            '1. Purchase consideration calculation:',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'Debentures: 8,000 * 105 (100 + 5% prem) = 8,40,000.'),
                React.createElement('li', null, 'Cheque: 50,000.'),
                React.createElement('li', null, 'Total PC = 8,90,000.')
            ),
            '2. Goodwill Calculation:',
            React.createElement('br'),
            'Net Assets = Assets (10L) - Liabilities (1.7L) = 8,30,000.',
            React.createElement('br'),
            'PC (8.9L) > Net Assets (8.3L), so Difference is Goodwill = 60,000.',
            React.createElement('br'),
            '3. Loss on Issue:',
            React.createElement('br'),
            'Premium on Redemption = 8,000 * (110 - 100) = 8,000 * 10 = 80,000.'
        )
    },
    {
        id: 'accountancy-2024-19-OR',
        marks: 3,
        chapter: 'Accounting for Share Capital',
        name: 'Forfeiture Account',
        topic: 'Preparation of Ledger Account',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'Lilly Ltd. forfeited 100 shares of ₹10 each issued at10% premium (₹8 called up ) on which a shareholder did not pay ₹3 of allotment (including premium) and first call of ₹2. Out of these 60 shares were reissued to Ram as fully paid for ₹8 per share and 20 shares to Suraj as fully paid up @ ₹12 per share at different intervals of time.',
            React.createElement('p', { className: 'mt-2' }, 'Prepare Share Forfeiture account.')
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold mb-2' }, 'Share Forfeiture Account'),
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'Amt(₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'Amt(₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'To Share Capital A/c (Loss on Reissue to Ram 60*2)'),
                            React.createElement('td', { className: 'border p-2' }, '120'),
                            React.createElement('td', { className: 'border p-2' }, 'By Share Capital A/c (Amt Forfeited)'),
                            React.createElement('td', { className: 'border p-2' }, '400')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'To Capital Reserve A/c (Ram: 60*(4-2))'),
                            React.createElement('td', { className: 'border p-2' }, '120'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'To Capital Reserve A/c (Suraj: 20*4)'),
                            React.createElement('td', { className: 'border p-2' }, '80'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'To Balance c/d (20 shares * 4)'),
                            React.createElement('td', { className: 'border p-2' }, '80'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', { className: 'font-bold bg-gray-50' },
                            React.createElement('td', { className: 'border p-2' }, 'Total'),
                            React.createElement('td', { className: 'border p-2' }, '400'),
                            React.createElement('td', { className: 'border p-2' }, 'Total'),
                            React.createElement('td', { className: 'border p-2' }, '400')
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 8: Accounting for Share Capital - Share Forfeiture Account'),
            'Amount Forfeited Calculation:',
            React.createElement('br'),
            '1. Called up Value = ₹8 (Capital).',
            React.createElement('br'),
            '2. Unpaid Amount:',
            React.createElement('br'),
            '   - Allotment: ₹3 (₹2 Capital + ₹1 Premium). Premium not received is debited. Capital unpaid = ₹2.',
            React.createElement('br'),
            '   - First Call: ₹2 (Capital).',
            React.createElement('br'),
            '   - Total Capital Unpaid = ₹2 + ₹2 = ₹4.',
            React.createElement('br'),
            '3. Paid (Forfeited) Amount:',
            React.createElement('br'),
            '   Amount Forfeited = Called Up Capital (8) - Unpaid Capital (4) = ₹4 per share.',
            React.createElement('br'),
            '   (Note: Only the Capital portion received is forfeited. Application money = 8 - 4 = 4).',
            React.createElement('br'),
            '   Total Forfeited = 100 shares × 4 = 400. (Matches Credit side).',
            React.createElement('br'),
            '4. Reissue Calculations:',
            React.createElement('br'),
            '   - To Ram (60 shares): Reissued at ₹8 (Fully Paid ₹10). Discount = ₹2.',
            React.createElement('br'),
            '     Loss utilized from Forfeiture = 60 × 2 = 120.',
            React.createElement('br'),
            '     Gain transferred to Capital Reserve = 60 × (4 forfeited - 2 loss) = 120.',
            React.createElement('br'),
            '   - To Suraj (20 shares): Reissued at ₹12 (Fully Paid ₹10). Issued at Premium.',
            React.createElement('br'),
            '     No Discount/Loss. Full forfeiture amount is gain.',
            React.createElement('br'),
            '     Gain transferred to Capital Reserve = 20 × 4 = 80.',
            React.createElement('br'),
            '5. Balance:',
            React.createElement('br'),
            '   Remaining shares = 100 - 60 - 20 = 20 shares.',
            React.createElement('br'),
            '   Balance c/d = 20 shares × 4 = 80.'
        )
    },
    {
        id: 'accountancy-2024-20',
        marks: 3,
        chapter: 'Goodwill: Nature and Valuation',
        name: 'Wealth Weighted Average Profit',
        topic: 'Past Adjustments and Valuation',
        question: React.createElement('div', null,
            'Calculate goodwill of a firm on the basis of three years purchases of the Weighted Average Profits of the last four years. The profits of the last four years were:',
            React.createElement('ul', { className: 'list-none pl-5 my-2' },
                React.createElement('li', null, '2020: 28,000'),
                React.createElement('li', null, '2021: 27,000'),
                React.createElement('li', null, '2022: 46,900'),
                React.createElement('li', null, '2023: 53,810')
            ),
            'Additional Information:',
            React.createElement('ul', { className: 'list-none pl-5' },
                React.createElement('li', null, 'a) On 1st April, 2020 a major plant repair was undertaken for ₹10,000 which was charged to revenue. The said sum is to be capitalized for goodwill calculation subject to adjustment of depreciation of 10% on reducing balance method.'),
                React.createElement('li', null, 'b) For the purpose of calculating Goodwill the company decided that the years ending 31.03.2020 and 31.03.2021 be weighted as 1 each (being COVID affected) and for year ending 31.03.2022 and 31.03.2023 weights be taken as 2 and 3 respectively.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold mb-2' }, 'Solution:'),
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Year Ended 31st March'),
                            React.createElement('th', { className: 'border p-2' }, '2020'),
                            React.createElement('th', { className: 'border p-2' }, '2021'),
                            React.createElement('th', { className: 'border p-2' }, '2022'),
                            React.createElement('th', { className: 'border p-2' }, '2023')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Given Profits'),
                            React.createElement('td', { className: 'border p-2' }, '28,000'),
                            React.createElement('td', { className: 'border p-2' }, '27,000'),
                            React.createElement('td', { className: 'border p-2' }, '46,900'),
                            React.createElement('td', { className: 'border p-2' }, '53,810')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Add: Capital Exp charged to Rev (1.4.2020 falls in 2021)'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '10,000'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '-')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Less: Unprovided Dep (10% WDV)'),
                            React.createElement('td', { className: 'border p-2' }, '-'),
                            React.createElement('td', { className: 'border p-2' }, '(1,000)'),
                            React.createElement('td', { className: 'border p-2' }, '(900)'),
                            React.createElement('td', { className: 'border p-2' }, '(810)')
                        ),
                        React.createElement('tr', { className: 'font-bold' },
                            React.createElement('td', { className: 'border p-2' }, 'Adjusted Profits'),
                            React.createElement('td', { className: 'border p-2' }, '28,000'),
                            React.createElement('td', { className: 'border p-2' }, '36,000'),
                            React.createElement('td', { className: 'border p-2' }, '46,000'),
                            React.createElement('td', { className: 'border p-2' }, '53,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Weights'),
                            React.createElement('td', { className: 'border p-2' }, '1'),
                            React.createElement('td', { className: 'border p-2' }, '1'),
                            React.createElement('td', { className: 'border p-2' }, '2'),
                            React.createElement('td', { className: 'border p-2' }, '3')
                        ),
                        React.createElement('tr', { className: 'bg-gray-50' },
                            React.createElement('td', { className: 'border p-2' }, 'Product'),
                            React.createElement('td', { className: 'border p-2' }, '28,000'),
                            React.createElement('td', { className: 'border p-2' }, '36,000'),
                            React.createElement('td', { className: 'border p-2' }, '92,000'),
                            React.createElement('td', { className: 'border p-2' }, '1,59,000')
                        )
                    )
                )
            ),
            React.createElement('p', null, 'Total Product = 3,15,000'),
            React.createElement('p', null, 'Total Weights = 7'),
            React.createElement('p', null, 'Weighted Average Profit = 3,15,000 / 7 = 45,000'),
            React.createElement('p', { className: 'font-bold' }, 'Goodwill = 45,000 × 3 = ₹1,35,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 2: Goodwill: Nature and Valuation - Weighted Average Profit'),
            'Adjustments:',
            React.createElement('br'),
            '1. Repair Capitalized (2020-21): Add 10,000 to 2021 profit.',
            React.createElement('br'),
            '2. Depreciation on Capitalized Amount (Reducing Balance):',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, '2021: 10% of 10,000 = 1,000.'),
                React.createElement('li', null, '2022: 10% of (10,000 - 1,000) = 900.'),
                React.createElement('li', null, '2023: 10% of (9,000 - 900) = 810.')
            )
        )
    }
];
