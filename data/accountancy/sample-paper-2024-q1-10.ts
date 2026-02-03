import React from 'react';
import { Question } from '../../types';

export const questions1to10: Question[] = [
    {
        id: 'accountancy-2024-1',
        marks: 1,
        chapter: 'Admission of a Partner',
        name: 'New Profit Sharing Ratio',
        topic: 'Admission of a Partner',
        question: React.createElement('div', null,
            'A & B are partners sharing profits and losses in the ratio of 3:2. C is admitted for ¼ and for which ₹30,000 and ₹10,000 are credited as a premium for goodwill to A and B respectively. The new profit-sharing ratio of A:B:C will be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) 3:2:1'),
                React.createElement('li', null, 'b) 12:8:5'),
                React.createElement('li', null, 'c) 9:6:5'),
                React.createElement('li', null, 'd) 33:27:20')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) 33:27:20')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 4: Admission of a Partner - New Profit Sharing Ratio'),
            'Sacrificing Ratio = Premium for Goodwill credited = 30,000 : 10,000 = 3:1.',
            React.createElement('br'),
            'Old Ratio (A:B) = 3:2.',
            React.createElement('br'),
            'Sacrifice of A = 3/4 of C\'s share (1/4) = 3/16.',
            React.createElement('br'),
            'Sacrifice of B = 1/4 of C\'s share (1/4) = 1/16.',
            React.createElement('br'),
            'New Share A = 3/5 - 3/16 = (48-15)/80 = 33/80.',
            React.createElement('br'),
            'New Share B = 2/5 - 1/16 = (32-5)/80 = 27/80.',
            React.createElement('br'),
            'New Share C = 1/4 = 20/80.',
            React.createElement('br'),
            'New Ratio = 33:27:20.'
        )
    },
    {
        id: 'accountancy-2024-2',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Interest on Loan',
        topic: 'Provisions in absence of Partnership Deed',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'mb-2' }, 'Assertion: Batman, a partner in a firm with four partners has advanced a loan of ₹50,000 to the firm for last six months of the financial year without any agreement. He claims an interest on loan of ₹3,000 despite the firm being in loss for the year.'),
            React.createElement('p', { className: 'mb-2' }, 'Reasoning: In the absence of any agreement / provision in the partnership deed, provisions of Indian Partnership Act, 1932 would apply.'),
            React.createElement('ul', { className: 'list-none pl-5' },
                React.createElement('li', null, 'a) Both A and R are correct, and R is the correct explanation of A.'),
                React.createElement('li', null, 'b) Both A and R are correct, but R is not the correct explanation of A.'),
                React.createElement('li', null, 'c) A is correct but R is incorrect.'),
                React.createElement('li', null, 'd) A is incorrect but R is correct.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) A is incorrect but R is correct.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Provisions in absence of Partnership Deed'),
            'Interest on loan is a charge against profit and is payable @ 6% p.a. even in case of loss.',
            React.createElement('br'),
            'Correct Interest = 50,000 × 6/100 × 6/12 = ₹1,500.',
            React.createElement('br'),
            'Batman claimed ₹3,000 which is incorrect. Reason is correct as per IPA 1932.'
        )
    },
    {
        id: 'accountancy-2024-3',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Forfeiture and Reissue',
        topic: 'Minimum Re-issue Price',
        question: React.createElement('div', null,
            'If 10,000 shares of ₹10 each were forfeited for non-payment of final call money of ₹3 per share and only 7,000 of these shares were re-issued @₹ 11 per share as fully paid up, then what is the minimum amount that company must collect at the time of re-issue of the remaining 3,000 shares?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹ 21,000'),
                React.createElement('li', null, 'b) ₹ 9,000'),
                React.createElement('li', null, 'c) ₹ 16,000'),
                React.createElement('li', null, 'd) ₹ 30,000')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'b) ₹ 9,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 8: Accounting for Share Capital - Forfeiture and Reissue'),
            'Amount forfeited per share = Called up (10) - Unpaid (3) = ₹7.',
            React.createElement('br'),
            'Maximum discount allowed on reissue = Amount forfeited = ₹7.',
            React.createElement('br'),
            'Minimum amount to be collected = Face Value - Max Discount = 10 - 7 = ₹3 per share.',
            React.createElement('br'),
            'For 3,000 shares: 3,000 × 3 = ₹9,000.'
        )
    },
    {
        id: 'accountancy-2024-3-OR',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Loss on Issue',
        topic: 'Writing off Loss on Issue of Debentures',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'On 1st April 2022, Galaxy ltd. had a balance of ₹8,00,000 in Securities Premium account. During the year company issued 20,000 Equity shares of ₹10 each as bonus shares and used the balance amount to write off Loss on issue of Debenture on account of issue of 2,00,000, 9% Debentures of ₹100 each at a discount of 10% redeemable @ 5% Premium. The amount to be charged to Statement of P&L for the year for Loss on issue of Debentures would be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹30,00,000.'),
                React.createElement('li', null, 'b) ₹22,00,000.'),
                React.createElement('li', null, 'c) ₹24,00,000.'),
                React.createElement('li', null, 'd) ₹20,00,000.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) ₹24,00,000.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 9: Issue of Debentures - Loss on Issue'),
            'Total Loss on Issue = Discount (10%) + Prem on Red (5%) = 15% of (2,00,000 × 100) = 15% of 2,00,00,000 = ₹30,00,000.',
            React.createElement('br'),
            'Securities Premium Opening = 8,00,000.',
            React.createElement('br'),
            'Used for Bonus Shares = 20,000 × 10 = 2,00,000.',
            React.createElement('br'),
            'Remaining SP = 8,00,000 - 2,00,000 = 6,00,000.',
            React.createElement('br'),
            'Amount charged to Statement of P&L = Total Loss - Remaining SP = 30,00,000 - 6,00,000 = ₹24,00,000.'
        )
    },
    {
        id: 'accountancy-2024-4',
        marks: 1,
        chapter: 'Change in Profit Sharing Ratio',
        name: 'Workmen Compensation',
        topic: 'Reconstitution of Partnership',
        question: React.createElement('div', null,
            'A, B and C who were sharing profits and losses in the ratio of 4:3:2 decided to share the future profits and losses in the ratio to 2:3:4 with effect from 1st April 2023. An extract of their Balance Sheet as at 31st March 2023 is:',
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Liabilities'),
                            React.createElement('th', { className: 'border p-2' }, 'Amount(₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Assets'),
                            React.createElement('th', { className: 'border p-2' }, 'Amount(₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'Workmen Compensation Reserve'),
                            React.createElement('td', { className: 'border p-2' }, '65,000'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        )
                    )
                )
            ),
            'At the time of reconstitution, a certain amount of Claim on workmen compensation was determined for which B’s share of loss amounted to₹5,000. The Claim for workmen compensation would be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹15,00,000'),
                React.createElement('li', null, 'b) ₹70,000'),
                React.createElement('li', null, 'c) ₹50,000'),
                React.createElement('li', null, 'd) ₹80,000')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) ₹80,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 3: Change in Profit Sharing Ratio - Workmen Compensation Reserve'),
            'B\'s share of loss = 5,000.',
            React.createElement('br'),
            'B\'s profit share = 3/9 = 1/3.',
            React.createElement('br'),
            'Total Loss on revaluation (due to excess claim) = 5,000 × 3 = 15,000.',
            React.createElement('br'),
            'Claim = Reserve + Loss = 65,000 + 15,000 = ₹80,000.'
        )
    },
    {
        id: 'accountancy-2024-4-OR',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Rectification',
        topic: 'Partner using firm\'s money',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'A, B and C are in partnership business. A used ₹2,00,000 belonging to the firm without the information to other partners and made a profit of ₹35,000 by using this amount. Which decision should be taken by the firm to rectify this situation?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) A need to return only ₹2,00,000 to the firm.'),
                React.createElement('li', null, 'b) A is required to return ₹35,000 to the firm.'),
                React.createElement('li', null, 'c) A is required to pay back ₹35,000 only equally to B and C.'),
                React.createElement('li', null, 'd) A need to return ₹2,35,000 to the firm.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) A need to return ₹2,35,000 to the firm.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Partner using firm\'s money'),
            'If a partner derives any profit for himself from any transaction of the firm, or from the use of the property or business connection of the firm or the firm name, he shall account for that profit and pay it to the firm. (Indian Partnership Act, 1932).'
        )
    },
    {
        id: 'accountancy-2024-5',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Interest on Loan',
        topic: 'Accounting Treatment',
        question: React.createElement('div', null,
            'Interest on Partner’s loan is credited to:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Partner’s Fixed capital account.'),
                React.createElement('li', null, 'b) Partner’s Current account.'),
                React.createElement('li', null, 'c) Partner’s Loan Account.'),
                React.createElement('li', null, 'd) Partner’s Drawings Account.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) Partner’s Loan Account.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Interest on Partner’s Loan'),
            'Interest on Partner\'s Loan is credited to his Loan Account, not Capital or Current Account.'
        )
    },
    {
        id: 'accountancy-2024-6',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Issue for Consideration other than Cash',
        topic: 'Issue at Discount',
        question: React.createElement('div', null,
            'Alexa Ltd. purchased building from Siri Ltd for ₹8,00,000. The consideration was paid by issue of 6%debentures of ₹100 each at a discount of 20%. The 6% Debentures account is credited with:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹10,40,000'),
                React.createElement('li', null, 'b) ₹10,00,000'),
                React.createElement('li', null, 'c) ₹9,60,000'),
                React.createElement('li', null, 'd) ₹6,40,000')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'b) ₹10,00,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 9: Issue of Debentures - Issue for Consideraton other than Cash'),
            'Number of Debentures = Purchase Price / Issue Price = 8,00,000 / (100 - 20) = 8,00,000 / 80 = 10,000 Debentures.',
            React.createElement('br'),
            'Amount credited to Debentures A/c = No. of Debentures × Face Value = 10,000 × 100 = ₹10,00,000.'
        )
    },
    {
        id: 'accountancy-2024-6-OR',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Debenture Concepts',
        topic: 'Features of Debentures',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'Which of the following statements is incorrect about debentures?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Interest on debentures is an appropriation of profits.'),
                React.createElement('li', null, 'b) Debenture holders are the creditors of a company.'),
                React.createElement('li', null, 'c) Debentures can be issued to vendors at discount.'),
                React.createElement('li', null, 'd) Interest is not paid on Debentures issued as Collateral Security.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'a) Interest on debentures is an appropriation of profits.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 9: Issue of Debentures - Nature of Debenture Interest'),
            'Interest on debentures is a charge against profits, not an appropriation.'
        )
    },
    {
        id: 'accountancy-2024-7',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Reserve Capital',
        topic: 'Presentation in Balance Sheet',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'mb-2' }, 'Assertion (A) :- A Company is Registered with an authorised Capital of 5,00,000 Equity Shares of ₹10 each of which 2,00,000 Equity shares were issued and subscribed. All the money had been called up except ₹2 per share which was declared as ‘Reserve Capital’. The Share Capital reflected in balance sheet as ‘Subscribed and Fully paid up’ will be Zero.'),
            React.createElement('p', { className: 'mb-2' }, 'Reason ( R ) :- Reserve Capital can be called up only at the time of winding up of the company.'),
            React.createElement('ul', { className: 'list-none pl-5' },
                React.createElement('li', null, '(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)'),
                React.createElement('li', null, '(b) Both Assertion (A) and Reason (R) are Correct, but Reason (R) is not the correct explanation of Assertion (A)'),
                React.createElement('li', null, '(c) Assertion (A) is incorrect, but Reason (R) is Correct.'),
                React.createElement('li', null, '(d) Assertion (A) is correct, but Reason (R) is incorrect')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, '(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 8: Accounting for Share Capital - Reserve Capital'),
            'Since ₹2 is Reserve Capital, it has not been called up. Shares are fully paid only when the entire face value (₹10) is called and paid. Since ₹2 is uncalled, no share is "Subscribed and Fully Paid up". All will be under "Subscribed but not fully paid up".'
        )
    },
    {
        id: 'accountancy-2024-8',
        marks: 1,
        chapter: 'Retirement of a Partner',
        name: 'Hidden Goodwill',
        topic: 'Retirement/Death of a Partner',
        question: React.createElement('div', null,
            'G, S and T were partners sharing profits in the ratio 3:2:1. G retired and his dues towards the firm including Capital balance, Accumulated profits and losses share, Revaluation Gain amounted to ₹ 5,80,000. G was being paid ₹ 7,00,000 in full settlement. For giving that additional amount of ₹ 1,20,000, S was debited for ₹ 40,000. Determine goodwill of the firm.',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a). ₹ 1,20,000'),
                React.createElement('li', null, 'b). ₹80,000'),
                React.createElement('li', null, 'c). ₹2,40,000'),
                React.createElement('li', null, 'd). ₹ 3,60,000')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c). ₹2,40,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 5: Retirement of a Partner - Hidden Goodwill'),
            'Hidden Goodwill (G\'s Share) = Amount Paid - Amount Due = 7,00,000 - 5,80,000 = 1,20,000.',
            React.createElement('br'),
            'G\'s Share = 3/6 = 1/2.',
            React.createElement('br'),
            'Firm\'s Goodwill = G\'s Share of Goodwill / G\'s Profit Share = 1,20,000 / (1/2) = ₹2,40,000.'
        )
    },
    {
        id: 'accountancy-2024-8-OR',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'Guarantee of Profit',
        topic: 'Distribution of Loss',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'Annu, Banu and Chanu are partners, Chanu has been given a guarantee of minimum profit of ₹8,000 by the firm. Firm suffered a loss of ₹5,000 during the year. Capital account ofBanu will be ________ by₹_________.',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Credited, ₹6,500.'),
                React.createElement('li', null, 'b) Debited, ₹6,500.'),
                React.createElement('li', null, 'c) Credited, ₹1,500.'),
                React.createElement('li', null, 'd) Debited, ₹1,500.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'b) Debited, ₹6,500.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Guarantee of Profit'),
            'Loss ₹5,000. Chanu guaranteed profit ₹8,000.',
            React.createElement('br'),
            'Chanu needs to be credited 8,000 (Profit) + Loss Share (assuming equal ratio if not given? No, standard is equal if not detailed, but let\'s check. Names: Annu, Banu, Chanu. No ratio given. Assume equal 1:1:1.).',
            React.createElement('br'),
            'Loss share of Chanu = 5000/3 = 1667 (approx). Total deficiency to Chanu = 8000 + 1667 = 9667.',
            React.createElement('br'),
            'This deficiency is borne by Annu and Banu. Share of Banu = 9667/2 = 4833.',
            React.createElement('br'),
            'Plus Banu\'s share of loss = 1667. Total debit to Banu = 4833 + 1667 = 6500.',
            React.createElement('br'),
            'Verification: Total Loss 5000 + Guaranteed Profit 8000 = 13000 to be borne by A & B. Each 6500. So B is debited by 6500.'
        )
    },
    {
        id: 'accountancy-2024-9',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'P&L Appropriation',
        topic: 'Calculation of Distributable Profit',
        question: React.createElement('div', null,
            React.createElement('div', { className: 'mb-4' },
                'Read the following hypothetical situation, answer question no. 9 and 10.',
                React.createElement('br'),
                React.createElement('br'),
                'Richa and Anmol are partners sharing profits in the ratio of 3:2 with capitals of ₹2,50,000 and ₹1,50,000 respectively. Interest on capital is agreed @ 6% p.a. Anmol is to be allowed an annual salary of 12,500. During the year ended 31st March 2023, the profits of the year prior to calculation of interest on capital but after charging Anmol’s salary amounted to ₹62,000.A provision of 5% of this profit is to be made in respect of manager’s commission.',
                React.createElement('div', { className: 'overflow-x-auto my-4' },
                    React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                        React.createElement('thead', null,
                            React.createElement('tr', { className: 'bg-gray-100' },
                                React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                                React.createElement('th', { className: 'border p-2' }, '(₹)'),
                                React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                                React.createElement('th', { className: 'border p-2' }, '(₹)')
                            )
                        ),
                        React.createElement('tbody', null,
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2' }, 'To Interest on Capital'),
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, 'By Profit & loss account (After manager’s commission)'),
                                React.createElement('td', { className: 'border p-2' }, '___(2)___')
                            ),
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2 pl-4' }, 'Richa'),
                                React.createElement('td', { className: 'border p-2' }, '---------'),
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, '')
                            ),
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2 pl-4' }, 'Anmol'),
                                React.createElement('td', { className: 'border p-2' }, '---------'),
                                React.createElement('td', { className: 'border p-2' }, 'To Anmol’s Salary a/c'),
                                React.createElement('td', { className: 'border p-2' }, '12,500')
                            ),
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2 font-bold', colSpan: 4 }, 'To Profit transferred to:')
                            ),
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2 pl-4' }, 'Richa’s Capital A/C (1)'),
                                React.createElement('td', { className: 'border p-2' }, '__(1)___'),
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, '')
                            ),
                            React.createElement('tr', null,
                                React.createElement('td', { className: 'border p-2 pl-4' }, 'Anmol’s Capital A/c'),
                                React.createElement('td', { className: 'border p-2' }, '-----------'),
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, '')
                            ),
                            React.createElement('tr', { className: 'font-bold' },
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, '-----------'),
                                React.createElement('td', { className: 'border p-2' }, ''),
                                React.createElement('td', { className: 'border p-2' }, '----------')
                            )
                        )
                    )
                )
            ),
            'The amount to bereflected in blank (1) will be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹37,200'),
                React.createElement('li', null, 'b) ₹44,700'),
                React.createElement('li', null, 'c) ₹22,800'),
                React.createElement('li', null, 'd) ₹20,940')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) ₹20,940')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - P&L Appropriation'),
            '1. Profit before Interest on Capital but after Anmol\'s Salary = ₹62,000.',
            React.createElement('br'),
            '2. Manager\'s Commission is 5% of "this profit" (i.e., ₹62,000).',
            React.createElement('br'),
            '   Manager\'s Commission = 5/100 × 62,000 = ₹3,100.',
            React.createElement('br'),
            '3. Profit transferred to P&L Appropriation A/c = Profit before appropriations - Manager\'s Commission',
            React.createElement('br'),
            '   = (62,000 + 12,500) - 3,100 = 74,500 - 3,100 = 71,400.',
            React.createElement('br'),
            '   (Note: The commission is calculated on ₹62,000 as per the specific instruction "5% of THIS profit").',
            React.createElement('br'),
            '   Net Profit transferred to P&L Appropriation (Blank 2) = 71,400.',
            React.createElement('br'),
            '4. Distributable Profit Calculation:',
            React.createElement('br'),
            '   Credit Side: 71,400.',
            React.createElement('br'),
            '   Debit Side:',
            React.createElement('br'),
            '   - Interest on Capital: Richa (2.5L × 6%) = 15,000; Anmol (1.5L × 6%) = 9,000. Total IoC = 24,000.',
            React.createElement('br'),
            '   - Salary to Anmol = 12,500.',
            React.createElement('br'),
            '   Total Appropriations = 24,000 + 12,500 = 36,500.',
            React.createElement('br'),
            '   Divisible Profit = 71,400 - 36,500 = 34,900.',
            React.createElement('br'),
            '5. Richa\'s Share (Blank 1):',
            React.createElement('br'),
            '   Ratio = 3:2.',
            React.createElement('br'),
            '   Richa = 34,900 × 3/5 = 20,940.'
        )
    },
    {
        id: 'accountancy-2024-10',
        marks: 1,
        chapter: 'Accounting for Partnership Firms - Fundamentals',
        name: 'P&L Appropriation',
        topic: 'Net Profit Calculation',
        question: React.createElement('div', null,
            'The amount to be reflected in blank (2) will be:',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) ₹62,000.'),
                React.createElement('li', null, 'b) ₹74,500.'),
                React.createElement('li', null, 'c) ₹71,400.'),
                React.createElement('li', null, 'd) ₹70,775.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) ₹71,400.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Net Profit Calculation'),
            '1. Calculate Net Profit before appropriations:',
            React.createElement('br'),
            '   Profit given (after salary) = ₹62,000.',
            React.createElement('br'),
            '   Add back Salary = ₹12,500.',
            React.createElement('br'),
            '   Net Profit before Salary = ₹74,500.',
            React.createElement('br'),
            '2. Calculate Manager\'s Commission:',
            React.createElement('br'),
            '   The question states "5% of this profit" refers to the specific figure of ₹62,000 provided in the text.',
            React.createElement('br'),
            '   Commission = 5% of 62,000 = ₹3,100.',
            React.createElement('br'),
            '3. Calculate Amount for Blank (2) (Profit transferred to P&L Appropriation):',
            React.createElement('br'),
            '   Net Profit - Manager\'s Commission = 74,500 - 3,100 = ₹71,400.'
        )
    }
];
