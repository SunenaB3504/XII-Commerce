import { QuestionPaper } from '../../types';
import React from 'react';

const paper: QuestionPaper = {
    name: 'Sample Paper 2024 Q17-20',
    questions: [
        {
            id: '17',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Rusting, a partner of a firm under dissolution was to get a remuneration 2% of the total assets realised other than cash and 10% of the amount distributed to the partners. Sundry assets (including Cash ₹ 8,000) realised at ₹ 1,16,000 and sundry liabilities to be paid ₹ 31,340. Calculate Rusting’s remuneration and Show your workings clearly. Also pass necessary journal entry for remuneration.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation of Remuneration"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "Assets realised (excluding cash) = ₹1,16,000 - ₹8,000 = ₹1,08,000."),
                    React.createElement("li", null, "Commission on assets realised = 2% of ₹1,08,000 = ₹2,160."),
                    React.createElement("li", null, "Amount available for distribution to partners = Total cash realised - Liabilities paid = ₹1,16,000 - ₹31,340 = ₹84,660."),
                    React.createElement("li", null, "Commission on amount distributed = 10% of ₹84,660 = ₹8,466."),
                    React.createElement("li", null, "Total Commission = ₹2,160 + ₹8,466 = ₹10,626."),
                ),
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entry"),
                React.createElement("table", { className: "w-full mt-4 border-collapse" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-200" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Realisation A/c Dr. \n To Rusting’s Capital Account \n (Being remuneration payable to partner)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,626"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,626")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("p", null, "The phrase '10% of the amount distributed to the partners' can be interpreted in two ways:"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                    React.createElement("li", null, "10% of the amount available for distribution *before* deducting the commission itself."),
                    React.createElement("li", null, "10% of the final amount distributed to partners *after* deducting the commission (i.e., commission = 10/110 of the available amount)."),
                ),
                React.createElement("p", { className: "mt-2" }, "The marking scheme uses the first interpretation, which is simpler. Amount available for partners is ₹84,660. Commission is calculated as 10% of this amount, which is ₹8,466. The previous calculation had a typo (8,460 instead of 8,466).")
            )
        },
        {
            id: '18',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "A, B and C were partners sharing profits, and losses in the ratio of 2:2:1. C died on 1st July, 2023 on which date the capitals of A, B and C after all necessary adjustments stood at ₹74,000, ₹ 63,750 and 42,250 respectively. A and B continued to carry on the business for six months without settling the accounts of C. During the period of six months from 1-7-2023, a profit of ₹ 20,500 is earned using the firm’s property. State which of the two options available u/s 37 of the Indian Partnership Act, 1932 should be exercised by executors of C and why?."),
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "mt-2" }, "As per Section 37 of the Indian Partnership Act, 1932, the executors of the deceased partner (C) have two options:"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-4" },
                    React.createElement("li", null, 
                        React.createElement("p", null, React.createElement("b", null, "Option 1: Share in subsequent profits")),
                        React.createElement("p", null, "The share of profit is calculated based on the proportion of the deceased partner's capital to the total capital of the firm."),
                        React.createElement("p", null, "Total Capital used = 74,000 + 63,750 + 42,250 = ₹1,80,000."),
                        React.createElement("p", null, "C's share of profit = (C's Capital / Total Capital) * Profit earned = (₹42,250 / ₹1,80,000) * ₹20,500 = ₹4,812.50")
                    ),
                    React.createElement("li", null, 
                        React.createElement("p", null, React.createElement("b", null, "Option 2: Interest at 6% p.a.")),
                        React.createElement("p", null, "Interest on C's capital for the 6-month period."),
                        React.createElement("p", null, "Interest = C's Capital * Rate * Time = ₹42,250 * (6/100) * (6/12) = ₹1,267.50.")
                    )
                ),
                React.createElement("p", { className: "mt-4 font-bold" }, "Conclusion: The executors of C should exercise Option 1, as the share of profit (₹4,812.50) is higher than the interest on capital (₹1,267.50).")
            ),
            explanation: null
        },
        {
            id: '18 (OR)',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Amit and Kartik are partners sharing profits and losses equally. They decided to admit Saurabh for an equal share in the profits. For this purpose, the goodwill of the firm was to be valued at four years' purchase of super profits. The Balance Sheet of the firm on Saurabh's admission was as follows:"),
                // Balance Sheet table here
                React.createElement("p", { className: "mt-2" }, "The normal rate of return is 12% p.a. Average profit of the firm for the last four years was ₹30,000. Calculate Saurabh’s share of goodwill.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation of Goodwill"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "Capital Employed = Amit's Capital + Kartik's Capital + General Reserve = 90,000 + 50,000 + 20,000 = ₹1,60,000."),
                    React.createElement("li", null, "Normal Profit = Capital Employed * NRR = ₹1,60,000 * 12% = ₹19,200."),
                    React.createElement("li", null, "Average Profit = ₹30,000 (Given)."),
                    React.createElement("li", null, "Super Profit = Average Profit - Normal Profit = ₹30,000 - ₹19,200 = ₹10,800."),
                    React.createElement("li", null, "Goodwill of the firm = Super Profit * No. of years' purchase = ₹10,800 * 4 = ₹43,200."),
                    React.createElement("li", null, "Saurabh is admitted for an equal share, meaning the new ratio is 1:1:1. His share is 1/3."),
                    React.createElement("li", null, "Saurabh's share of goodwill = ₹43,200 * (1/3) = ₹14,400.")
                )
            ),
            explanation: null
        },
        {
            id: '19',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Buddha Limited took over assets of ₹ 40,00,000 and liabilities of ₹ 6,50,000 of Ginny Limited. Buddha Limited issued 30,000, 8% Debentures of ₹ 100 each at 10% discount, to be redeemed at 5% premium along with cheque of ₹ 5,00,000. Pass necessary journal entries in the books of Buddha Ltd.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries in the books of Buddha Ltd."),
                React.createElement("table", { className: "w-full mt-4 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" }, 
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Assets A/c Dr. \n To Liabilities A/c \n To Ginny Ltd. A/c \n To Capital Reserve A/c \n (Being business of Ginny Ltd. purchased)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "40,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 6,50,000 \n 32,00,000 \n 1,50,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Ginny Limited A/c Dr. \n Loss on Issue of Debentures A/c Dr. \n To 8% Debentures A/c \n To Premium on Redemption of Debentures A/c \n To Bank A/c \n (Being purchase consideration discharged)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "32,00,000 \n 4,50,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 30,00,000 \n 1,50,000 \n 5,00,000")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                    React.createElement("li", null, "Net Assets = Assets - Liabilities = ₹40,00,000 - ₹6,50,000 = ₹33,50,000."),
                    React.createElement("li", null, "Purchase Consideration (PC) = Debentures + Cheque = (30,000 shares * ₹100 * 90%) + ₹5,00,000 = ₹27,00,000 + ₹5,00,000 = ₹32,00,000."),
                    React.createElement("li", null, "Since Net Assets > PC, the difference is a capital gain, credited to Capital Reserve. Capital Reserve = ₹33,50,000 - ₹32,00,000 = ₹1,50,000."),
                    React.createElement("li", null, "Loss on Issue of Debentures = Discount on Issue + Premium on Redemption = (30,000 * ₹10) + (30,000 * ₹5) = ₹3,00,000 + ₹1,50,000 = ₹4,50,000.")
                )
            )
        },
        {
            id: '19 (OR)',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "A company forfeited 8,000 shares of ₹ 10 each on which ₹ 8 were called (including ₹ 1 premium) and ₹ 6 was paid (including ₹ 1 premium). Out of these 5,000 shares were re-issued at maximum possible discount. Pass necessary journal entries.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries"),
                React.createElement("table", { className: "w-full mt-4 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" }, /* ... */),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Share Capital A/c (8,000 x ₹7) Dr. \n Securities Premium A/c (8,000 x ₹1) Dr. \n To Share Forfeiture A/c (8,000 x ₹5) \n To Calls in Arrears A/c (8,000 x ₹3) \n (Being 8,000 shares forfeited)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "56,000 \n 8,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 40,000 \n 24,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Bank A/c (5,000 x ₹2) Dr. \n Share Forfeiture A/c (5,000 x ₹5) Dr. \n To Share Capital A/c (5,000 x ₹7) \n (Being 5,000 shares reissued at maximum possible discount)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,000 \n 25,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 35,000")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                    React.createElement("li", null, "Forfeiture: Called up amount per share (excluding premium) is ₹7. Paid amount (excluding premium) is ₹5. Unpaid amount is ₹2 (on call) + ₹1 (premium) = ₹3. Securities premium was called but not received, so it must be debited."),
                    React.createElement("li", null, "Amount forfeited per share (credited to Share Forfeiture A/c) = ₹5 (only the amount paid towards share capital). Total forfeited on 8,000 shares = 8,000 * 5 = ₹40,000."),
                    React.createElement("li", null, "Maximum possible discount on reissue is the amount forfeited per share, which is ₹5. The shares were called up to ₹7. So, reissue price = ₹7 - ₹5 = ₹2."),
                    React.createElement("li", null, "On reissue of 5,000 shares, the entire forfeited amount for these shares (5,000 * ₹5 = ₹25,000) is used as discount. Therefore, no amount is transferred to Capital Reserve.")
                )
            )
        },
        {
            id: '20',
            marks: 3,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Bat, Cat and Rat were partners sharing profits and losses in the ratio 5:3:2. Cat retired and on that date there was a balance of Investment of ₹ 4,00,000 and Investment Fluctuation Reserve of ₹ 1,00,000 was appearing in the balance sheet. Pass necessary journal entries for Investment Fluctuation reserve in the following cases: (i) Market Value of Investments was ₹ 4,80,000. (ii) Market Value of Investments was ₹ 3,80,000. (iii) Market Value of Investments was ₹ 2,90,000.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries"),
                React.createElement("h5", { className: "font-semibold text-md mt-3" }, "(i) Market Value of Investments was ₹ 4,80,000"),
                React.createElement("p", { className: "text-sm text-gray-600" }, "Increase in value of Investment is ₹80,000. The full IFR is free and will be distributed. The gain on revaluation will also be distributed."),
                React.createElement("table", { className: "w-full mt-2 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Investment Fluctuation Reserve A/c Dr. \n To Bat’s Capital A/c \n To Cat’s Capital A/c \n To Rat’s Capital A/c \n (Being IFR distributed in old ratio 5:3:2)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 50,000 \n 30,000 \n 20,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Investment A/c Dr. \n To Revaluation A/c \n (Being increase in investment value recorded)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "80,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 80,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Revaluation A/c Dr. \n To Bat’s Capital A/c \n To Cat’s Capital A/c \n To Rat’s Capital A/c \n (Being revaluation gain distributed in old ratio)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "80,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 40,000 \n 24,000 \n 16,000")
                        )
                    )
                ),
                React.createElement("h5", { className: "font-semibold text-md mt-4" }, "(ii) Market Value of Investments was ₹ 3,80,000"),
                React.createElement("p", { className: "text-sm text-gray-600" }, "Decrease in value of Investment is ₹20,000. This is adjusted from IFR. Balance IFR of ₹80,000 is distributed."),
                React.createElement("table", { className: "w-full mt-2 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Investment Fluctuation Reserve A/c Dr. \n To Investment A/c \n To Bat’s Capital A/c \n To Cat’s Capital A/c \n To Rat’s Capital A/c \n (Being fall in value of investment adjusted and balance IFR distributed)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 20,000 \n 40,000 \n 24,000 \n 16,000")
                        )
                    )
                ),
                React.createElement("h5", { className: "font-semibold text-md mt-4" }, "(iii) Market Value of Investments was ₹ 2,90,000"),
                React.createElement("p", { className: "text-sm text-gray-600" }, "Decrease in value of Investment is ₹1,10,000. Full IFR of ₹1,00,000 is used. The excess loss of ₹10,000 is debited to Revaluation A/c and distributed."),
                React.createElement("table", { className: "w-full mt-2 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Investment Fluctuation Reserve A/c Dr. \n Revaluation A/c Dr. \n To Investment A/c \n (Being fall in value of investment adjusted against IFR and Revaluation A/c)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000 \n 10,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n \n 1,10,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Bat’s Capital A/c Dr. \n Cat’s Capital A/c Dr. \n Rat’s Capital A/c Dr. \n To Revaluation A/c \n (Being revaluation loss distributed in old ratio)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "5,000 \n 3,000 \n 2,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n \n \n 10,000")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("p", null, "On retirement of a partner, the IFR is adjusted based on the market value of investments. Any surplus/deficit in the reserve after adjusting for the change in investment value is distributed among ALL partners (including the retiring one) in their OLD profit-sharing ratio. Any gain or loss on revaluation of the investment itself is also shared by all partners in the old ratio.")
            )
        }
    ]
};

export default paper;

