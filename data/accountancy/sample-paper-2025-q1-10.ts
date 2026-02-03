import React from 'react';
import { Question } from '../../types';

export const questions1to10: Question[] = [
    {
        id: 'accountancy-2025-1',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Guarantee of Profit',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "Anthony a partner was being guaranteed that his share of profits will not be less than ₹ 60,000 p.a. Deficiency, if any was to be borne by other partners Amar and Akbar equally. For the year ended 31st March, 2024 the firm incurred loss of ₹ 1,80,000. What amount will be debited to Amar’s Capital Account in total at the end of the year?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. ₹ 60,000"),
                React.createElement("li", null, "B. ₹ 1,20,000"),
                React.createElement("li", null, "C. ₹ 90,000"),
                React.createElement("li", null, "D. ₹ 80,000")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. ₹ 1,20,000"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Loss of ₹ 1,80,000 is distributed among Amar, Akbar, and Anthony (assuming equal ratio 1:1:1): Each bears ₹ 60,000 loss."),
            React.createElement("p", null, "Anthony is guaranteed a Minimum Profit of ₹ 60,000. His current share is a Loss of ₹ 60,000. So the total deficiency is ₹ 60,000 (Guaranteed Profit) + ₹ 60,000 (Loss to be recovered) = ₹ 1,20,000."),
            React.createElement("p", null, "Deficiency is borne by Amar and Akbar equally. Amar's share of Deficiency = ₹ 1,20,000 / 2 = ₹ 60,000."),
            React.createElement("p", null, "Total Debit to Amar = Share of Loss (₹ 60,000) + Share of Deficiency (₹ 60,000) = ₹ 1,20,000."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 2"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Partnership: Basic Concepts"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Guarantee of Profit")
            )
        )
    },
    {
        id: 'accountancy-2025-2',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Fixed vs Fluctuating Capital',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2 font-semibold" }, "Assertion (A): Partner’s current accounts are opened when their capital are fluctuating."),
            React.createElement("p", { className: "mb-2 font-semibold" }, "Reasoning (R): In case of Fixed capitals all the transactions other than Capital are done through Current account of the partner."),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Both A and R are true and R is the correct explanation of A."),
                React.createElement("li", null, "B. Both A and R are true but R is not the correct explanation of A."),
                React.createElement("li", null, "C. A is true but R is false"),
                React.createElement("li", null, "D. A is false but R is true")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: D. A is false but R is true"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Assertion is False because Current Accounts are opened when capitals are FIXED, not fluctuating."),
            React.createElement("p", null, "Reason is True: Under fixed capital method, all adjustments like interest on capital, drawings, etc., are made in Current Accounts."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 2"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Partnership: Basic Concepts"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Fixed and Fluctuating Capital Accounts")
            )
        )
    },
    {
        id: 'accountancy-2025-3',
        marks: 1,
        chapter: 'Accounting for Companies',
        name: 'Accounting for Share Capital',
        topic: 'Forfeiture of Shares',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "Forfeiture of shares leads to reduction of _________________Capital."),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Authorised"),
                React.createElement("li", null, "B. Issued"),
                React.createElement("li", null, "C. Subscribed"),
                React.createElement("li", null, "D. Called up")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: C. Subscribed"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "When shares are forfeited, the Subscribed Capital is reduced because these shares are cancelled and no longer held by shareholders."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 1 (Part B - Company Accounts)"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Share Capital"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Forfeiture of Shares")
            )
        )
    },
    {
        id: 'accountancy-2025-3-OR',
        marks: 1,
        chapter: 'Accounting for Companies',
        name: 'Issue of Debentures',
        topic: 'Issue of Debentures with Terms of Redemption',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2 font-bold" }, "OR"),
            React.createElement("p", { className: "mb-2" }, "Moon ltd. issued 40,000, 10% debentures of ₹100 each at certain rate of discount and were to be redeemed at 20% premium. Exiting balance of Securities premium before issuing of these debentures was ₹12,00,000 and after writing off loss on issue of debentures, the balance in Securities Premium was ₹2,00,000. At what rate of discount these debentures were issued?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. 10%"),
                React.createElement("li", null, "B. 5%"),
                React.createElement("li", null, "C. 25%"),
                React.createElement("li", null, "D. 15%")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. 5%"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Total Loss Written off from SP = Opening SP - Closing SP = 12,00,000 - 2,00,000 = ₹ 10,00,000."),
            React.createElement("p", null, "Total Loss = Discount on Issue + Premium on Redemption."),
            React.createElement("p", null, "Premium on Redemption = 40,000 × 100 × 20% = ₹ 8,00,000."),
            React.createElement("p", null, "Therefore, Discount on Issue = Total Loss - Premium on Redemption = 10,00,000 - 8,00,000 = ₹ 2,00,000."),
            React.createElement("p", null, "Face Value of Debentures = 40,000 × 100 = ₹ 40,00,000."),
            React.createElement("p", null, "Rate of Discount = (2,00,000 / 40,00,000) × 100 = 5%."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 2 (Part B - Company Accounts)"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Issue of Debentures"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Writing off Loss on Issue of Debentures")
            )
        )
    },
    {
        id: 'accountancy-2025-4',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Admission of a Partner',
        topic: 'Treatment of Bad Debts',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "At the time of admission of new partner Vasu, Old partners Paresh and Prabhav had debtors of ₹ 6,20,000 and a provision for doubtful debts (PDD) of ₹ 20,000 in their books. As per terms of admission, assets were revalued, and it was found that debtors worth ₹ 15,000 had turned bad and hence should be written off. Which journal entry reflects the correct accounting treatment of the above situation?"),
            React.createElement("ul", { className: "space-y-4 list-none pl-6" },
                React.createElement("li", null,
                    React.createElement("div", { className: "font-semibold" }, "A."),
                    React.createElement("div", null, "Bad Debts A/c ... Dr 15,000"),
                    React.createElement("div", { className: "pl-4" }, "To Debtors A/c 15,000"),
                    React.createElement("div", null, "Prov for D. debts A/c ... Dr 15,000"),
                    React.createElement("div", { className: "pl-4" }, "To Bad Debts A/c 15,000")
                ),
                React.createElement("li", null,
                    React.createElement("div", { className: "font-semibold" }, "B."),
                    React.createElement("div", null, "Bad Debts A/c ... Dr 15,000"),
                    React.createElement("div", { className: "pl-4" }, "To Debtors A/c 15,000"),
                    React.createElement("div", null, "Revaluation A/c ... Dr 15,000"),
                    React.createElement("div", { className: "pl-4" }, "To Prov for doubt debts A/c 15,000")
                ),
                React.createElement("li", null, "C. Revaluation A/c ... Dr 15,000 | To Debtors A/c 15,000"),
                React.createElement("li", null, "D. Bad Debts A/c ... Dr 15,000 | To Revaluation A/c 15,000")
            )
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: A -"),
            React.createElement("div", { className: "mt-2 p-2 font-mono text-sm bg-gray-50 rounded" },
                React.createElement("div", { className: "grid grid-cols-[1fr_auto]" },
                    React.createElement("span", null, "Bad Debts A/c ... Dr."),
                    React.createElement("span", null, "15,000")
                ),
                React.createElement("div", { className: "grid grid-cols-[1fr_auto]" },
                    React.createElement("span", { className: "pl-8" }, "To Debtors A/c"),
                    React.createElement("span", null, "15,000")
                ),
                React.createElement("div", { className: "grid grid-cols-[1fr_auto] mt-2" },
                    React.createElement("span", null, "Prov. for Doubtful Debts A/c ... Dr."),
                    React.createElement("span", null, "15,000")
                ),
                React.createElement("div", { className: "grid grid-cols-[1fr_auto]" },
                    React.createElement("span", { className: "pl-8" }, "To Bad Debts A/c"),
                    React.createElement("span", null, "15,000")
                )
            )
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "Correct Journal Entries:"),
            React.createElement("ul", { className: "list-decimal ml-5" },
                React.createElement("li", null, "Write off Bad Debts: Bad Debts A/c Dr. 15,000 | To Debtors A/c 15,000"),
                React.createElement("li", null, "Adjust Bad Debts against Provision: Provision for Doubtful Debts A/c Dr. 15,000 | To Bad Debts A/c 15,000")
            ),
            React.createElement("p", { className: "mt-2" }, "Since PDD (₹ 20,000) is sufficient to cover Bad Debts (₹ 15,000), no amount goes to Revaluation A/c for this write-off."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 4"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Admission of a Partner"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Revaluation of Assets and Liabilities")
            )
        )
    },
    {
        id: 'accountancy-2025-4-OR',
        marks: 1,
        chapter: 'Reconstitution of Partnership',
        name: 'Admission of a Partner',
        topic: 'Revaluation of Assets',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2 font-bold" }, "OR"),
            React.createElement("p", { className: "mb-2" }, "Ram and Shyam were partners sharing profits and losses in the ratio of 3:2. Their balance sheet shows building at ₹ 1,60,000. They admitted Mohan as a new partner for 1/4th share. In additional information it is given that building is undervalued by 20%. The share of loss/gain of revaluation of Shyam is ____________ & current value of building shown in new balance sheet is _______."),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Gain ₹ 12,800, Value ₹ 1,92,000"),
                React.createElement("li", null, "B. Loss ₹ 12,800, Value ₹ 1,28,000"),
                React.createElement("li", null, "C. Gain ₹ 16,000, Value ₹ 2,00,000"),
                React.createElement("li", null, "D. Gain ₹ 40,000, Value ₹ 2,00,000")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: C - Gain ₹ 16,000, ₹ 2,00,000"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Undervaluation means Book Value is less than Actual Value."),
            React.createElement("p", null, "If Book Value (₹ 1,60,000) is undervalued by 20%, it means Book Value = 80% of Actual Value."),
            React.createElement("p", null, "Actual Value = ₹ 1,60,000 / 0.80 = ₹ 2,00,000."),
            React.createElement("p", null, "Increase (Gain) = ₹ 2,00,000 - ₹ 1,60,000 = ₹ 40,000."),
            React.createElement("p", null, "Shyam's Share of Gain = ₹ 40,000 × 2/5 = ₹ 16,000."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 4"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Admission of a Partner"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Revaluation: Undervaluation of Assets")
            )
        )
    },
    {
        id: 'accountancy-2025-5',
        marks: 1,
        chapter: 'Accounting for Partnership',
        name: 'Nature and Valuation of Goodwill',
        topic: 'Capitalisation Method',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "The profit earned by a firm after retaining ₹ 15,000 to its reserve was ₹ 75,000. The firm had total tangible assets worth ₹ 10,00,000 and outside liabilities ₹ 3,00,000. The value of the goodwill as per capitalization of average profit method was valued as ₹ 50,000. Determine the rate of Normal Rate of Return."),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. 10 %"),
                React.createElement("li", null, "B. 5 %"),
                React.createElement("li", null, "C. 12 %"),
                React.createElement("li", null, "D. 8 %")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: C. 12 %"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Actual Profit = Retained Earnings + Distributed Profit = 15,000 + 75,000 = ₹ 90,000."),
            React.createElement("p", null, "Capital Employed = Assets - Liabilities = 10,00,000 - 3,00,000 = ₹ 7,00,000."),
            React.createElement("p", null, "Goodwill = Capitalised Value - Capital Employed => 50,000 = Capitalised Value - 7,00,000 => Capitalised Value = 7,50,000."),
            React.createElement("p", null, "Capitalised Value = Average Profit / NRR × 100."),
            React.createElement("p", null, "7,50,000 = 90,000 / NRR × 100."),
            React.createElement("p", null, "NRR = (90,000 / 7,50,000) × 100 = 12%."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 3"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Valuation of Goodwill"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Capitalisation of Average Profit Method")
            )
        )
    },
    {
        id: 'accountancy-2025-6',
        marks: 1,
        chapter: 'Accounting for Companies',
        name: 'Accounting for Share Capital',
        topic: 'Forfeiture of Prorata Shares',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "Mohit had applied for 900 shares, and was allotted in the ratio 3 : 2. He had paid application money of ₹ 3 per share and couldn’t pay allotment money of ₹ 5 per share. First and Final call of ₹ 2 per share was not yet made by the company. His shares were forfeited. The following entry will be passed:"),
            React.createElement("div", { className: "my-2 p-2 border rounded bg-gray-50 font-mono text-sm" },
                React.createElement("div", null, "Share Capital A/c ... Dr  X"),
                React.createElement("div", { className: "pl-4" }, "To Share Forfeited A/c  Y"),
                React.createElement("div", { className: "pl-4" }, "To Share Allotment A/c  Z")
            ),
            React.createElement("p", { className: "mb-2" }, "Here X, Y and Z are:"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. ₹ 6,000; ₹ 2,700; ₹ 3,300"),
                React.createElement("li", null, "B. ₹ 4,800; ₹ 2,700; ₹ 2,100"),
                React.createElement("li", null, "C. ₹ 4,800; ₹ 1,800; ₹ 3,000"),
                React.createElement("li", null, "D. ₹ 6,000; ₹ 1,800; ₹ 4,200")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. ₹ 4,800; ₹ 2,700; ₹ 2,100"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Applied = 900. Allotted = 900 × (2/3) = 600 shares."),
            React.createElement("p", null, "Application Received = 900 × 3 = ₹ 2,700."),
            React.createElement("p", null, "Application Required = 600 × 3 = ₹ 1,800."),
            React.createElement("p", null, "Excess = ₹ 900 (adjusted to allotment)."),
            React.createElement("p", null, "Allotment Due = 600 × 5 = ₹ 3,000."),
            React.createElement("p", null, "Allotment Arrears (Z) = 3,000 - 900 = ₹ 2,100."),
            React.createElement("p", null, "Note: Share Forfeited (Y) is amount received = ₹ 2,700 (App money on applied shares)."),
            React.createElement("p", null, "Share Capital (X) = Called up = 600 × (10 - 2) = 600 × 8 = ₹ 4,800."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 1 (Part B)"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Share Capital"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Forfeiture with Pro-rata Allotment")
            )
        )
    },
    {
        id: 'accountancy-2025-6-OR',
        marks: 1,
        chapter: 'Accounting for Companies',
        name: 'Accounting for Share Capital',
        topic: 'Reissue of Forfeited Shares',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2 font-bold" }, "OR"),
            React.createElement("p", { className: "mb-2" }, "A company forfeited 6,000 shares of ₹ 10 each, on which only application money of ₹ 3 has been paid. 4,000 of these shares were re-issued at ₹ 12 per share as fully paid up. Amount of Capital Reserve will be _______."),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. ₹ 18,000"),
                React.createElement("li", null, "B. ₹ 12,000"),
                React.createElement("li", null, "C. ₹ 30,000"),
                React.createElement("li", null, "D. ₹ 24,000")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. ₹ 12,000"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Forfeited Amount = Amount paid = 6,000 shares × ₹ 3 = ₹ 18,000."),
            React.createElement("p", null, "Forfeited Amount proportional to 4,000 reissued shares = (18,000 / 6,000) × 4,000 = ₹ 12,000."),
            React.createElement("p", null, "Discount on Reissue = 0 (Reissued at ₹ 12, which is premium)."),
            React.createElement("p", null, "Capital Reserve = Forfeited Amount on Reissued Shares - Discount = 12,000 - 0 = ₹ 12,000."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 1 (Part B)"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Share Capital"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Capital Reserve on Reissue")
            )
        )
    },
    {
        id: 'accountancy-2025-7',
        marks: 1,
        chapter: 'Accounting for Companies',
        name: 'Issue of Debentures',
        topic: 'Default in Repayment',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "On 1st April 2019 a company took a loan of ₹80,00,000 on security of land and building. This loan was further secured by issue of 40,000, 12% Debentures of ₹100 each as collateral security. On 31st March 2024 the company defaulted on repayment of the principal amount of this loan consequently on 1st April 2024 the land and building were taken over and sold by the bank for ₹70,00,000. For the balance amount debentures were sold in the market on 1st May 2024. From which date would the interest on debentures become payable by the company?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. 1st April 2019."),
                React.createElement("li", null, "B. 31st March 2024."),
                React.createElement("li", null, "C. 1st April 2024."),
                React.createElement("li", null, "D. 1st May 2024.")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: D. 1st May 2024."),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Debentures issued as collateral security do not carry any right to interest until they become active debt."),
            React.createElement("p", null, "They become active debt only when the principal borrower defaults and the debentures are sold/issued to the lender or market to recover dues."),
            React.createElement("p", null, "Since they were sold in the market on 1st May 2024, the obligation to pay interest starts from that date."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 2 (Part B)"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Issue of Debentures"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Debentures as Collateral Security")
            )
        )
    },
    {
        id: 'accountancy-2025-8',
        marks: 1,
        chapter: 'Dissolution of Partnership Firm',
        name: 'Dissolution of Partnership Firm',
        topic: 'Settlement of Loan by Partner',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "Rama, a partner took over Machinery of ₹ 50,000 in full settlement of her Loan of ₹ 60,000. Machinery was already transferred to Realisation Account. How it will effect the Realisation Account?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Realisation Account will be credited by ₹ 60,000"),
                React.createElement("li", null, "B. Realisation Account will be credited by ₹ 10,000"),
                React.createElement("li", null, "C. Realisation Account will be credited by ₹ 50,000"),
                React.createElement("li", null, "D. No effect on Realisation Account")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: A - Realisation Account will be credited by ₹ 60,000"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "When a partner's loan is settled by taking over an asset, the entry is: Partner's Loan A/c Dr. To Realisation A/c."),
            React.createElement("p", null, "Since the loan of ₹ 60,000 is settled in full, the entire amount of ₹ 60,000 is credited to Realisation A/c to cancel the loan liability against the asset."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 5"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Dissolution of Partnership Firm"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Treatment of Partner's Loan")
            )
        )
    },
    {
        id: 'accountancy-2025-8-OR',
        marks: 1,
        chapter: 'Dissolution of Partnership Firm',
        name: 'Dissolution of Partnership Firm',
        topic: 'Workmen Compensation Reserve',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2 font-bold" }, "OR"),
            React.createElement("p", { className: "mb-2" }, "Dada, Yuvi and Viru were partners sharing profits and losses in the ratio 3:2:1. Their books showed Workmen Compensation Reserve of ₹ 1,00,000. Workmen Claim amounted to ₹ 60,000. How it will affect the books of Accounts at the time of dissolution of firm?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Only ₹ 40,000 will be distributed amongst partner’s capital account"),
                React.createElement("li", null, "B. ₹ 1,00,000 will be credited to Realisation Account and ₹ 60,000 will be paid off."),
                React.createElement("li", null, "C. ₹ 60,000 will be credited to Realisation Account and will be even paid off. Balance ₹ 40,000 will be distributed amongst partners."),
                React.createElement("li", null, "D. Only ₹ 60,000 will be credited to Realisation Account and will be even paid off")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: C- ₹ 60,000 will be credited to Realisation Account and will be even paid off. Balance ₹ 40,000 will be distributed amongst partners"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "In dissolution, the liability portion of WCR (equal to claim) is transferred to Realisation A/c to be paid off."),
            React.createElement("p", null, "Claim = ₹ 60,000. This is credited to Realisation A/c (By WCR) and then paid (To Bank)."),
            React.createElement("p", null, "The remaining excess reserve (₹ 40,000) is distributed to partners in their profit sharing ratio."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 5"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Dissolution of Partnership Firm"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Treatment of WCR")
            )
        )
    },
    {
        id: 'accountancy-2025-9',
        marks: 1,
        chapter: 'Accounting for Partnership Firms',
        name: 'Fundamentals',
        topic: 'Past Adjustments',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "Ikka, Dukka and Teeka were partners sharing profits and losses in the ratio of 2:2:1. Their fixed Capital balances were ₹ 5,00,000; ₹ 4,00,000 and ₹ 3,00,000 respectively. For the year ended March 31, 2024 profits of ₹ 84,000 were distributed without providing for Interest on Capital @ 10% p.a as per the partnership deed. While passing an adjustment entry, which of the following is correct?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. Teeka will be debited by ₹ 4,200"),
                React.createElement("li", null, "B. Teeka will be credited by ₹ 4,200"),
                React.createElement("li", null, "C. Teeka will be credited by ₹ 6,000"),
                React.createElement("li", null, "D. Teeka will be debited by ₹ 6,000")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. Teeka will be credited by ₹ 4,200"),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "1. Interest on Capital to be provided:"),
            React.createElement("ul", { className: "list-disc ml-5" },
                React.createElement("li", null, "Ikka: 50,000"),
                React.createElement("li", null, "Dukka: 40,000"),
                React.createElement("li", null, "Teeka: 30,000"),
                React.createElement("li", null, "Total IoC = 1,20,000")
            ),
            React.createElement("p", null, "2. Since profits (₹ 84,000) are less than the Total Interest on Capital (₹ 1,20,000), the available profit is distributed in the ratio of claims (which is the Capital Ratio: 5:4:3)."),
            React.createElement("p", null, "However, the question states profits were 'distributed without providing' for interest. This means ₹ 84,000 was wrongly distributed in the profit-sharing ratio (2:2:1)."),
            React.createElement("p", null, "To rectify, we must reverse the wrong distribution and credit the amount as per the correct appropriation (Capital Ratio)."),
            React.createElement("p", null, "Teeka's Wrong Credit (Profit Share) = 84,000 × 1/5 = ₹ 16,800."),
            React.createElement("p", null, "Teeka's Correct Credit (Capital Ratio 3/12 of 84,000) = 84,000 × 3/12 = ₹ 21,000."),
            React.createElement("p", null, "Adjustment = Correct Credit - Wrong Credit = 21,000 - 16,800 = +4,200 (Credit)."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 2"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Fundamentals"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Past Adjustments with Insufficient Profits")
            )
        )
    },
    {
        id: 'accountancy-2025-10',
        marks: 1,
        chapter: 'Dissolution of Partnership Firm',
        name: 'Dissolution of Partnership Firm',
        topic: 'Settlement with Creditors',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-2" }, "At the time of dissolution Machinery appears at ₹ 10,00,000 and accumulated depreciation for the machinery appears at ₹ 6,00,000 in the balance sheet of a firm. This machine is taken over by a creditor of ₹ 5,40,000 at 5% below the net value. The balance amount of the creditor was paid through bank. By what amount should the bank account be credited for this transaction?"),
            React.createElement("ul", { className: "space-y-1 list-none pl-6" },
                React.createElement("li", null, "A. ₹ 60,000."),
                React.createElement("li", null, "B. ₹ 1,60,000."),
                React.createElement("li", null, "C. ₹ 5,40,000."),
                React.createElement("li", null, "D. ₹ 4,00,000.")
            )
        ),
        solution: React.createElement("p", { className: "font-semibold text-green-700" }, "Correct Answer: B. ₹ 1,60,000."),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Net Value of Machine = Cost - Acc. Dep. = 10,00,000 - 6,00,000 = ₹ 4,00,000."),
            React.createElement("p", null, "Taken over value = Net Value - 5% = 4,00,000 - 20,000 = ₹ 3,80,000."),
            React.createElement("p", null, "Creditor's Claim = ₹ 5,40,000."),
            React.createElement("p", null, "Amount adjusted = ₹ 3,80,000."),
            React.createElement("p", null, "Balance to be paid = 5,40,000 - 3,80,000 = ₹ 1,60,000."),
            React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: 5"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Dissolution of Partnership Firm"),
                React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Realisation of Assets and Settlement of Liabilities")
            )
        )
    }
];
