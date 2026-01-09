import React from 'react';
import { Question } from '@/types';

export const samplePaper2023Q1To10: Question[] = [
    {
        id: 'acc-2023-q1',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Admission of a Partner',
        topic: 'New Profit Sharing Ratio',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Navya and Radhey were partners sharing profits and losses in the ratio of 3: 1.'),
            React.createElement('p', {}, 'Shreya was admitted for 1/5th share in the profits. Shreya was unable to bring her share of goodwill premium in cash. The journal entry recorded for goodwill premium is given below:'),
            React.createElement('table', { className: 'w-full border-collapse border border-gray-300 mt-2 mb-4' },
                React.createElement('thead', {},
                    React.createElement('tr', {},
                        React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Date'),
                        React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Particulars'),
                        React.createElement('th', { className: 'border border-gray-300 p-2' }, 'LF'),
                        React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Debit (₹)'),
                        React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Credit (₹)')
                    )
                ),
                React.createElement('tbody', {},
                    React.createElement('tr', {},
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
                        React.createElement('td', { className: 'border border-gray-300 p-2' },
                            "Shreya's Current A/c. Dr.",
                            React.createElement('br'),
                            "    To Navya's Capital A/c.",
                            React.createElement('br'),
                            "    To Radhey's Capital A/c"
                        ),
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, '24,000'),
                        React.createElement('td', { className: 'border border-gray-300 p-2' },
                            React.createElement('br'),
                            '8,000',
                            React.createElement('br'),
                            '16,000'
                        )
                    ),
                    React.createElement('tr', {},
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
                        React.createElement('td', { className: 'border border-gray-300 p-2 italic' }, '(Being entry for goodwill treatment passed)'),
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, ''),
                        React.createElement('td', { className: 'border border-gray-300 p-2' }, '')
                    )
                )
            ),
            React.createElement('p', { className: 'mb-2' }, 'The new profit-sharing ratio of Navya, Radhey and Shreya will be:'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) 41: 7: 12'),
                React.createElement('li', {}, 'b) 13:12: 10'),
                React.createElement('li', {}, 'c) 3:1: 1'),
                React.createElement('li', {}, 'd) 5:3: 2')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: a) 41: 7: 12')
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Chapter 4: Admission of a Partner - Calculation of New Profit Sharing Ratio.'),
            React.createElement('p', {}, 'Navya and Radhey are partners sharing profits in 3:1.'),
            React.createElement('p', {}, 'Shreya admitted for 1/5th share.'),
            React.createElement('p', {}, 'Sacrificing Ratio = Credit to Navya : Credit to Radhey = 8,000 : 16,000 = 1:2.'),
            React.createElement('p', {}, 'New Share = Old Share - Sacrifice'),
            React.createElement('p', {}, 'Navya = 3/4 - (1/3 * 1/5) = 3/4 - 1/15 = (45 - 4)/60 = 41/60.'),
            React.createElement('p', {}, 'Radhey = 1/4 - (2/3 * 1/5) = 1/4 - 2/15 = (15 - 8)/60 = 7/60.'),
            React.createElement('p', {}, 'Shreya = 1/5 = 12/60.'),
            React.createElement('p', {}, 'New Ratio = 41:7:12.')
        )
    },
    {
        id: 'acc-2023-q2',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Commission to Partner',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Assertion (A):- Commission provided to partner is shown in Profit and Loss A/c.'),
            React.createElement('p', {}, 'Reason (R):- Commission provided to partner is charge against profits and is to be provided at fixed rate.'),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) (A) is correct but (R) is wrong'),
                React.createElement('li', {}, 'b) Both (A) and (R) are correct, but (R) is not the correct explanation of (A)'),
                React.createElement('li', {}, 'c) Both (A) and (R) are incorrect.'),
                React.createElement('li', {}, 'd) Both (A) and (R) are correct, and (R) is the correct explanation of (A)')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) Both (A) and (R) are incorrect.')
        ),
        explanation: 'Chapter 1: Accounting for Partnership Firms - Fundamentals - Commission to Partner.\n\nCommission provided to a partner is an appropriation of profit, not a charge against profit. Hence, it is shown in the Profit and Loss Appropriation Account, not the Profit and Loss A/c. Therefore, Assertion (A) is incorrect. The Reason (R) is also incorrect because it is an appropriation, not a charge.'
    },
    {
        id: 'acc-2023-q3',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Share Capital',
        topic: 'Uncalled Capital',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'mb-2' }, 'A share of ₹ 10 each, issued at ₹ 4 premium out of which ₹ 7 (including ₹ 1 premium) was called up and paid up. The uncalled Capital will be ___________.'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 7 per share'),
                React.createElement('li', {}, 'b) ₹ 4 per share'),
                React.createElement('li', {}, 'c) ₹ 8 per share'),
                React.createElement('li', {}, 'd) ₹ 3 per share')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: b) ₹ 4 per share')
        ),
        explanation: 'Chapter 7: Accounting for Share Capital - Uncalled Capital.\n\nFace Value = ₹ 10.\nPremium = ₹ 4.\nCalled up (including premium) = ₹ 7.\nPremium included in called up = ₹ 1.\nSo, Called up Capital (Face Value portion) = ₹ 7 - ₹ 1 = ₹ 6.\nUncalled Capital = Total Face Value - Called up Face Value\nUncalled Capital = ₹ 10 - ₹ 6 = ₹ 4 per share.'
    },
    {
        id: 'acc-2023-q3-or',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Issue of Debentures',
        topic: 'Types of Debentures',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-bold mb-1' }, 'OR'),
            React.createElement('p', { className: 'mb-2' }, 'While issuing ___________ type of Debentures, company doesn’t give any undertaking for the repayment of money borrowed by issuing such debentures.'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) Zero Coupon Rate Debentures'),
                React.createElement('li', {}, 'b) Non-Convertible Debentures'),
                React.createElement('li', {}, 'c) Secured Debentures'),
                React.createElement('li', {}, 'd) Non-Redeemable Debentures')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) Non-Redeemable Debentures')
        ),
        explanation: 'Chapter 8: Issue of Debentures - Types of Debentures.\n\nNon-Redeemable Debentures (or Perpetual Debentures) are those which the company does not undertake to repay at any specific time. They are repaid only at the time of winding up of the company or at the option of the company.'
    },
    {
        id: 'acc-2023-q4',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Change in Profit Sharing Ratio',
        topic: 'Adjustment Entry',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Samiksha, Arshiya and Divya were partners in a firm sharing profits and losses in the ratio of 5: 3: 2. With effect from 1st April 2022, they agreed to share future profits and losses in the ratio of 2: 5: 3.'),
            React.createElement('p', {}, 'Their Balance Sheet showed a debit balance of ₹ 50,000 in the Profit and Loss Account and a balance of ₹ 40,000 in the Investment Fluctuation Fund. The market value of an investment is ₹30,000 against the book value of ₹50,000. Partners have decided, not to show revised valued in the balance sheet and to pass an adjusting entry for it.'),
            React.createElement('p', {}, 'Which of the following is the correct treatment of the above?'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, "a) Samiksha's Capital A/c. Dr. 9,000; To Arshiya 6,000; To Divya 3,000"),
                React.createElement('li', {}, "b) Arshiya's Capital A/c. Dr. 5,000; To Samiksha 2,000; To Divya 3,000"),
                React.createElement('li', {}, "c) Arshiya's Capital A/c. Dr. 2,000; Divya's Capital A/c. Dr. 1,000; To Samiksha 3,000"),
                React.createElement('li', {}, "d) Arshiya's Capital A/c. Dr. 6,000; Divya's Capital A/c. Dr. 3,000; To Samiksha 9,000")
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, "Correct Answer: a) Samiksha's Capital A/c. Dr. 9,000; To Arshiya 6,000; To Divya 3,000")
        ),
        explanation: 'Chapter 3: Change in Profit Sharing Ratio - Adjustment Entry.\n\n1. Debit Balance of P&L A/c = (50,000) [Loss]\n2. Investment Fluctuation Fund (IFF) = 40,000.\nBook Value of Inv = 50,000; Market Value = 30,000.\nLoss on Investment = 20,000.\nRemaining IFF = 40,000 - 20,000 = 20,000 [Profit]\n\nNet Effect = Loss from P&L (50,000) + Profit from IFF 20,000 = (30,000) Net Loss.\n\nOld Ratio (S:A:D) = 5:3:2\nNew Ratio = 2:5:3\nSamiksha Sacrifice = 5/10 - 2/10 = 3/10\nArshiya Gain = 3/10 - 5/10 = -2/10\nDivya Gain = 2/10 - 3/10 = -1/10\n\nFor Losses: Sacrificing Partner Dr. to Gaining Partner Cr.\nSamiksha Dr. (30,000 * 3/10) = 9,000.\nArshiya Cr. (30,000 * 2/10) = 6,000.\nDivya Cr. (30,000 * 1/10) = 3,000.'
    },
    {
        id: 'acc-2023-q4-or',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Interest on Loan',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-bold mb-1' }, 'OR'),
            React.createElement('p', {}, 'Sohan and Mohan are partners sharing profits and losses in the ratio of 2:3 with the capitals of ₹ 5,00,000 and ₹ 6,00,000 respectively. On 1st January 2022, Sohan and Mohan granted loans of ₹ 20,000 and ₹ 10,000 respectively to the firm.'),
            React.createElement('p', {}, 'Determine the amount of loss to be borne by each partner for the year ended 31st March 2022 if the loss before interest for the year amounted to ₹ 2,500.'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) Share of Loss Sohan –₹ 1,250 Mohan – ₹ 1,250'),
                React.createElement('li', {}, 'b) Share of Loss Sohan –₹ 1,000 Mohan – ₹ 1,500'),
                React.createElement('li', {}, 'c) Share of Loss Sohan –₹ 820 Mohan – ₹ 1,230'),
                React.createElement('li', {}, 'd) Share of Loss Sohan –₹ 1,180 Mohan – ₹ 1,770')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) Share of Loss Sohan –₹ 1,180 Mohan – ₹ 1,770')
        ),
        explanation: 'Chapter 2: Accounting for Partnership Firms - Interest on Loan.\n\nInterest on Partner Loan (6% p.a. for 3 months):\nSohan: 20,000 * 6% * 3/12 = 300\nMohan: 10,000 * 6% * 3/12 = 150\nTotal Interest = 450.\n\nTotal Loss = 2,500 + 450 = 2,950.\nSohan\'s Share = 2,950 * 2/5 = 1,180.\nMohan\'s Share = 2,950 * 3/5 = 1,770.'
    },
    {
        id: 'acc-2023-q5',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Opening Capital Calculation',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Vihaan and Mann are partners sharing profits and losses in the ratio of 3:2. The firm maintains fluctuating capital accounts and the balance of the same as on 31st March 2022 is ₹ 4,00,000 and ₹ 4,65,000 for Vihaan and Mann respectively.'),
            React.createElement('p', {}, 'Drawings during the year were ₹ 65,000 each. As per the partnership Deed, Interest on capital @ 10% p.a. on Opening Capital has been allowed to them. Calculate the opening capital of Vihaan given that the divisible profits during the year 2021-22 was ₹ 2,25,000.'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 3,30,000'),
                React.createElement('li', {}, 'b) ₹ 4,40,000'),
                React.createElement('li', {}, 'c) ₹ 4,00,000'),
                React.createElement('li', {}, 'd) ₹ 3,00,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) ₹ 3,00,000')
        ),
        explanation: 'Chapter 2: Accounting for Partnership Firms - Calculation of Opening Capital.\n\nClosing Cap (Vihaan) = 4,00,000.\nAdd: Drawings = 65,000.\nLess: Share of Profit (2,25,000 * 3/5) = 1,35,000.\nLess: Interest on Capital (10% of Op Cap).\n\n4,00,000 = Op Cap + 0.10(Op Cap) + 1,35,000 - 65,000\n4,00,000 = 1.10(Op Cap) + 70,000\n3,30,000 = 1.10(Op Cap)\nOp Cap = 3,00,000.'
    },
    {
        id: 'acc-2023-q6',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Issue of Debentures',
        topic: 'Writing off Loss',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Savitri Ltd. issued 50,000, 8% Debentures of ₹ 100 each at certain rate of premium and to be redeemed at 10% premium. At the time of writing off Loss on Issue of Debentures, Statement of Profit and Loss was debited with ₹ 2,00,000. At what rate of premium, these debentures were issued?'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) 10%'),
                React.createElement('li', {}, 'b) 16%'),
                React.createElement('li', {}, 'c) 6%'),
                React.createElement('li', {}, 'd) 4%')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) 6%')
        ),
        explanation: 'Chapter 8: Issue of Debentures - Writing off Loss.\n\nRedemption Premium = 10% of (50,000 * 100) = 5,00,000.\nTotal Loss = 5,00,000.\nP&L Debited = 2,00,000.\nSPR Utilized = 3,00,000.\nSPR comes from Issue Premium = 3,00,000.\nIssue Premium Rate = (3,00,000 / 50,00,000) * 100 = 6%.'
    },
    {
        id: 'acc-2023-q6-or',
        marks: 1,
        chapter: 'Issue of Debentures',
        name: 'Issue of Debentures',
        topic: 'Discount on Issue',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-bold mb-1' }, 'OR'),
            React.createElement('p', {}, 'Durga Ltd. issued 80,000, 10% Debentures of ₹ 100 each at certain rate of discount and were to be redeemed at 20% premium. Existing balance of Securities Premium before issuing of these debentures was ₹ 25,00,000 and after writing off Loss on Issue of Debentures, the balance in Securities Premium was ₹ 5,00,000. At what rate of discount, these debentures were issued?'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) 10%'),
                React.createElement('li', {}, 'b) 5%'),
                React.createElement('li', {}, 'c) 25%'),
                React.createElement('li', {}, 'd) 15%')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: b) 5%')
        ),
        explanation: 'Chapter 8: Issue of Debentures - Discount and Loss.\n\nSPR utilized = 25L - 5L = 20,00,000.\nRedemption Premium = 20% of (80,000*100) = 16,00,000.\nTotal Loss Writen Off = 20,00,000.\nDiscount on Issue = Total Loss - Red. Premium = 20L - 16L = 4,00,000.\nRate of Discount = (4,00,000 / 80,00,000) * 100 = 5%.'
    },
    {
        id: 'acc-2023-q7',
        marks: 1,
        chapter: 'Accounting for Share Capital',
        name: 'Share Capital',
        topic: 'Minimum Subscription',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Attire Ltd, issued a prospectus inviting applications for 12,000 shares of ₹10 each payable ₹3 on application, ₹ 5 on allotment and balance on call. Public had applied for certain number of shares and application money was received.'),
            React.createElement('p', {}, 'Which of the following application money, if received restricts the company to proceed with the allotment of shares, as per SEBI guidelines?'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 36,000'),
                React.createElement('li', {}, 'b) ₹ 45,000'),
                React.createElement('li', {}, 'c) ₹ 30,000'),
                React.createElement('li', {}, 'd) ₹ 32,400')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) ₹ 30,000')
        ),
        explanation: 'Chapter 7: Accounting for Share Capital - Minimum Subscription.\n\nMinimum Subscription = 90% of Issue Size = 90% of 12,000 = 10,800 shares.\nMin App Money = 10,800 * 3 = ₹ 32,400.\nAny amount less than ₹ 32,400 restricts allotment.\n₹ 30,000 is less than ₹ 32,400.'
    },
    {
        id: 'acc-2023-q8',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Retirement of a Partner',
        topic: 'Amount Due to Retiring Partner',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', {}, 'Amay, Bina and Chander are partners in a firm with capital balances of ₹ 50,000, ₹ 70,000 and ₹ 80,000 respectively on 31st March, 2022. Amay decides to retire from the firm on 31st March, 2022. With the help of the information provided, calculate the amount to be paid to Amay on his retirement.'),
            React.createElement('ul', { className: 'list-disc ml-6' },
                React.createElement('li', {}, 'There existed a general reserve of ₹ 7,500 in the balance sheet on that date.'),
                React.createElement('li', {}, 'The goodwill of the firm was valued at ₹ 30,000.'),
                React.createElement('li', {}, 'Gain on revaluation was ₹24,000.')
            ),
            React.createElement('ul', { className: 'list-none pl-4 mt-2 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 88,500'),
                React.createElement('li', {}, 'b) ₹ 90,500'),
                React.createElement('li', {}, 'c) ₹ 65,375'),
                React.createElement('li', {}, 'd) ₹ 70,500')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) ₹ 70,500')
        ),
        explanation: 'Chapter 4: Retirement of a Partner - Amount Due.\n\nAmay\'s Share (Equal) = 1/3.\nBalance = 50,000.\nShare of GR = 7,500/3 = 2,500.\nShare of GW = 30,000/3 = 10,000.\nShare of Rev Profit = 24,000/3 = 8,000.\nTotal = 50,000 + 2,500 + 10,000 + 8,000 = 70,500.'
    },
    {
        id: 'acc-2023-q8-or',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Rules in Absence of Deed',
        question: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-bold mb-1' }, 'OR'),
            React.createElement('p', {}, 'A, B and C are partners. A‘s capital is ₹ 3,00,000 and B‘s capital is ₹1,00,000. C has not invested any amount as capital but he alone manages the whole business. C wants 30,000 p.a. as salary, though the deed is silent. Firm earned a profit of ₹1,50,000. How much will each partner receives as an appropriation of profits?'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) A ₹ 60,000; B ₹ 60,000; C ₹ 30,000'),
                React.createElement('li', {}, 'b) A ₹ 90,000; B ₹ 30,000; C ₹ 30,000'),
                React.createElement('li', {}, 'c) A ₹ 40,000; B ₹ 40,000 and C ₹ 70,000'),
                React.createElement('li', {}, 'd) A ₹ 50,000; B ₹ 50,000 and C ₹ 50,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: d) A ₹ 50,000; B ₹ 50,000 and C ₹ 50,000')
        ),
        explanation: 'Chapter 1: Partnership Fundamentals - Rules in absence of Deed.\n\nNo Salary allowed. Profits shared equally.\n1,50,000 / 3 = 50,000 each.'
    },
    {
        id: 'acc-2023-q9',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Manager/Partner Commission',
        question: React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'bg-gray-100 p-4 mb-4 rounded' },
                React.createElement('p', { className: 'font-semibold' }, 'Read the following hypothetical situation, Answer Question No. 9 and 10'),
                React.createElement('p', {}, 'Puneet and Raju are partners in a clay toys making firm. Their capitals were ₹ 5,00,000 and ₹ 10,00,000 respectively. The firm allowed Puneet to get a commission of 10% on the net profit before charging any commission and Raju to get a commission of 10% on the net profit after charging all commission. Following is the Profit and Loss Appropriation Account for the year ended 31st March 2022.'),
                React.createElement('table', { className: 'w-full border-collapse border border-gray-400 mt-2 text-sm' },
                    React.createElement('thead', {}, React.createElement('tr', {},
                        React.createElement('th', { className: 'border border-gray-400 p-1' }, 'Particulars'),
                        React.createElement('th', { className: 'border border-gray-400 p-1' }, 'Amount (₹)'),
                        React.createElement('th', { className: 'border border-gray-400 p-1' }, 'Particulars'),
                        React.createElement('th', { className: 'border border-gray-400 p-1' }, 'Amount (₹)')
                    )),
                    React.createElement('tbody', {},
                        React.createElement('tr', {},
                            React.createElement('td', { className: 'border border-gray-400 p-1' },
                                "To Puneet's Capital A/c",
                                React.createElement('br'),
                                "(Commission)",
                                React.createElement('br'),
                                "(------ x10/100)"
                            ),
                            React.createElement('td', { className: 'border border-gray-400 p-1 align-top' }, '44,000'),
                            React.createElement('td', { className: 'border border-gray-400 p-1 align-top' },
                                "By Profit and Loss a/c",
                                React.createElement('br'),
                                "..............."
                            ),
                            React.createElement('td', { className: 'border border-gray-400 p-1 align-top' }, '')
                        ),
                        React.createElement('tr', {},
                            React.createElement('td', { className: 'border border-gray-400 p-1' },
                                "To Raju's Capital A/c",
                                React.createElement('br'),
                                "(Commission)",
                                React.createElement('br'),
                                "-----------"
                            ),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, ''),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, ''),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, '')
                        ),
                        React.createElement('tr', {},
                            React.createElement('td', { className: 'border border-gray-400 p-1' },
                                "To Profit share transferred to :-",
                                React.createElement('br'),
                                "Puneet's Capital A/c -----------",
                                React.createElement('br'),
                                "Raju's Capital A/c ------------"
                            ),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, ''),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, ''),
                            React.createElement('td', { className: 'border border-gray-400 p-1' }, '')
                        )
                    )
                )
            ),
            React.createElement('p', {}, 'Raju’s commission will be:-'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 40,000'),
                React.createElement('li', {}, 'b) ₹ 44,000'),
                React.createElement('li', {}, 'c) ₹ 36,000'),
                React.createElement('li', {}, 'd) ₹ 36,440')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: c) ₹ 36,000')
        ),
        explanation: 'Chapter 1: Partnership Fundamentals - Manager/Partner Commission.\n\nPuneet Comm (10% on Net Profit) = 44,000.\nNet Profit = 4,40,000.\nRaju Comm = 10% on (NP - All Comm).\nRaju Comm = 10/110 * (NP - 44,000)? No, "After charging all commission".\nLet Raju Comm = R.\nR = 10% of (4,40,000 - 44,000 - R).\nR = 0.10 * (3,96,000 - R)\nR = 39,600 - 0.10R\n1.10R = 39,600\nR = 39,600 / 1.10 = 36,000.'
    },
    {
        id: 'acc-2023-q10',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Division of Profit',
        question: React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'bg-gray-100 p-4 mb-4 rounded' },
                React.createElement('p', { className: 'font-semibold italic' }, '(Based on the hypothetical situation in Question 9)')
            ),
            React.createElement('p', {}, 'Puneet’s share of profit will be :-'),
            React.createElement('ul', { className: 'list-none pl-4 space-y-1' },
                React.createElement('li', {}, 'a) ₹ 1,80,000'),
                React.createElement('li', {}, 'b) ₹ 1,44,000'),
                React.createElement('li', {}, 'c) ₹ 2,16,000'),
                React.createElement('li', {}, 'd) ₹ 1,60,000')
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement('p', { className: 'font-semibold text-green-700' }, 'Correct Answer: a) ₹ 1,80,000')
        ),
        explanation: 'Chapter 1: Partnership Fundamentals - Division of Profit.\n\nDivisible Profit = 4,40,000 - 44,000 - 36,000 = 3,60,000.\nShared Equally: 3,60,000 / 2 = 1,80,000.'
    }
];
