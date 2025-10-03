import { Question, QuestionPaper } from '../../types';
import React from 'react';

const samplePaper2024Q23to26: QuestionPaper = {
  name: 'Sample Paper 2024 Q23-26',
  questions: [
    {
        id: '23',
        marks: 6,
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "K.N. Ltd. invited applications for issuing 6,00,000 equity shares of ₹10 each at a premium of ₹3 per share. The amount was payable as follows: On Application and Allotment - ₹3 per share; On First Call -₹4 per share; On Second and Final Call — Balance (including premium). The issue was oversubscribed by 1,50,000 shares. Applications for 50,000 shares were rejected and the application money was refunded. Shares were allotted to the remaining applicants as follows:"),
            React.createElement("ul", { className: "list-disc pl-6 mt-2" },
                React.createElement("li", null, React.createElement("b", null, "Category I:"), " Those who had applied for 4,00,000 shares were allotted 3,00,000 shares on pro-rata basis."),
                React.createElement("li", null, React.createElement("b", null, "Category II:"), " The remaining applicants were allotted the remaining shares.")
            ),
            React.createElement("p", { className: "mt-2" }, "Excess application money received with applications was adjusted towards sums due on first call. Rakesh to whom 6,000 shares were allotted (out of Category I) failed to pay the first call money. His shares were forfeited. The forfeited shares were re-issued at ₹13 per share fully paid up after the second call. Pass necessary journal entries for the above transactions in the books of K.N. Ltd.")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries in the books of K.N. Ltd."),
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
                        React.createElement("td", { className: "border p-2" }, "Bank A/c Dr. \n To Share Application and Allotment A/c \n (Being application money received for 7,50,000 shares @ ₹3)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "22,50,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 22,50,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Share Application and Allotment A/c Dr. \n To Equity Share Capital A/c \n To Share First Call A/c (Excess adjusted) \n To Bank A/c (Refund) \n (Being application money adjusted)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "22,50,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 18,00,000 \n 3,00,000 \n 1,50,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Share First Call A/c Dr. \n To Equity Share Capital A/c \n (Being first call money due on 6,00,000 shares @ ₹4)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "24,00,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 24,00,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Bank A/c Dr. \n Calls-in-Arrears A/c Dr. \n To Share First Call A/c \n (Being first call money received)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "20,82,000 \n 18,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n \n 21,00,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Share Capital A/c (6,000 x ₹7) Dr. \n To Share Forfeiture A/c \n To Calls-in-Arrears A/c \n (Being 6,000 shares forfeited)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "42,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 24,000 \n 18,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Share Second and Final Call A/c Dr. \n To Equity Share Capital A/c \n To Securities Premium A/c \n (Being final call due on 5,94,000 shares @ ₹6)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "35,64,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 17,82,000 \n 17,82,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Bank A/c Dr. \n To Share Second and Final Call A/c \n (Being final call money received)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "35,64,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 35,64,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Bank A/c (6,000 x ₹13) Dr. \n To Share Capital A/c (6,000 x ₹10) \n To Securities Premium A/c \n (Being forfeited shares reissued)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "78,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 60,000 \n 18,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Share Forfeiture A/c Dr. \n To Capital Reserve A/c \n (Being balance in forfeiture account transferred)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "24,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 24,000")
                    )
                )
            )
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2 space-y-2" },
                React.createElement("li", null, React.createElement("b", null, "Application Stage:"), " Total applications = 6,00,000 + 1,50,000 = 7,50,000. Money received = 7,50,000 * ₹3 = ₹22,50,000."),
                React.createElement("li", null, React.createElement("b", null, "Allotment Adjustment:"), " Money for capital = 6,00,000 * ₹3 = ₹18,00,000. Refund = 50,000 * ₹3 = ₹1,50,000. Excess adjusted to First Call = ₹22,50,000 - ₹18,00,000 - ₹1,50,000 = ₹3,00,000."),
                React.createElement("li", null, React.createElement("b", null, "First Call:"), " Due = 6,00,000 * ₹4 = ₹24,00,000. Amount to be received = ₹24,00,000 - ₹3,00,000 (excess from app) = ₹21,00,000."),
                React.createElement("li", null, React.createElement("b", null, "Rakesh's Default (Category I):"), " Applied for (4,00,000 / 3,00,000) * 6,000 = 8,000 shares. Money paid on app = 8,000 * ₹3 = ₹24,000. Money for capital = 6,000 * ₹3 = ₹18,000. Excess = ₹6,000. First call due for Rakesh = 6,000 * ₹4 = ₹24,000. Amount not paid (Calls-in-Arrears) = ₹24,000 - ₹6,000 (excess) = ₹18,000."),
                React.createElement("li", null, React.createElement("b", null, "Forfeiture:"), " Called-up capital per share = ₹3 (App) + ₹4 (Call 1) = ₹7. Amount forfeited for Rakesh = Money paid - Call arrears adjusted from premium = (8,000 * 3) - 18,000 = 24,000. No, amount forfeited is money paid towards capital = (6,000 * 3) + 6,000 = 24,000. The MS is correct. Amount paid by Rakesh = 24,000. Amount due on allotment = 18,000. Excess = 6,000. Amount due on call = 24,000. Amount not paid = 18,000. Amount forfeited = 24,000 - 18,000 = 6,000. No, amount forfeited is amount paid = 24,000. Let's recheck MS. MS says 24,000. How? Money paid by Rakesh = 8,000 * 3 = 24,000. This is the amount forfeited."),
                React.createElement("li", null, React.createElement("b", null, "Second & Final Call:"), " Balance per share = ₹13 - ₹3 - ₹4 = ₹6. This includes ₹3 premium. So, ₹3 for capital and ₹3 for premium. Due on 5,94,000 shares (6,00,000 - 6,000)."),
                React.createElement("li", null, React.createElement("b", null, "Reissue:"), " Reissued at ₹13 (₹10 capital + ₹3 premium). Since shares are reissued at a premium, the entire forfeited amount of ₹24,000 is a capital gain and transferred to Capital Reserve.")
            )
        )
    },
    {
        id: '23 (OR)',
        marks: 6,
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "a) Pass the necessary journal entries for 'Issue of Debenture' for the following:"),
            React.createElement("ul", { className: "list-disc pl-6 mt-2" },
                React.createElement("li", null, "Arman Ltd. issued 750, 12% Debentures of ₹100 each at a discount of 10% redeemable at a premium of 5%."),
                React.createElement("li", null, "Sohan Ltd. issued 800, 9% Debentures of ₹100 each at a premium of 20 per debenture redeemable at a premium of ₹10 per Debenture.")
            ),
            React.createElement("p", { className: "mt-2 font-semibold" }, "b) X Ltd. obtained a loan of ₹4,00,000 from IDBI Bank. The company issued 5,000 9%. Debentures of ₹100 each as a collateral security for the same. Show how these items will be presented in the Balance Sheet of the company.")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "a) Journal Entries"),
            React.createElement("h5", { className: "font-semibold text-md mt-3" }, "i. In the books of Arman Ltd."),
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
                        React.createElement("td", { className: "border p-2" }, "Bank A/c Dr. \n To Debenture Application and Allotment A/c \n (Being application money received for 750 debentures @ ₹90)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "67,500"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 67,500")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Debenture Application and Allotment A/c Dr. \n Loss on Issue of Debentures A/c Dr. \n To 12% Debentures A/c \n To Premium on Redemption of Debentures A/c \n (Being debentures issued at discount, redeemable at premium)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "67,500 \n 11,250"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n \n 75,000 \n 3,750")
                    )
                )
            ),
            React.createElement("h5", { className: "font-semibold text-md mt-4" }, "ii. In the books of Sohan Ltd."),
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
                        React.createElement("td", { className: "border p-2" }, "Bank A/c Dr. \n To Debenture Application and Allotment A/c \n (Being application money received for 800 debentures @ ₹120)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "96,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n 96,000")
                    ),
                    React.createElement("tr", null,
                        React.createElement("td", { className: "border p-2" }, "Debenture Application and Allotment A/c Dr. \n Loss on Issue of Debentures A/c Dr. \n To 9% Debentures A/c \n To Securities Premium A/c \n To Premium on Redemption of Debentures A/c \n (Being debentures issued at premium, redeemable at premium)"),
                        React.createElement("td", { className: "border p-2 text-right" }, "96,000 \n 8,000"),
                        React.createElement("td", { className: "border p-2 text-right" }, "\n \n 80,000 \n 16,000 \n 8,000")
                    )
                )
            ),
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "b) Balance Sheet Presentation"),
            React.createElement("p", { className: "mt-2" }, "The items will be presented in the Balance Sheet of X Ltd. as follows:"),
            React.createElement("div", { className: "p-4 border rounded-lg mt-2" },
                React.createElement("h5", { className: "font-bold" }, "Balance Sheet of X Ltd. (Extract)"),
                React.createElement("table", { className: "w-full mt-2" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "font-semibold" }, "I. EQUITY AND LIABILITIES"),
                            React.createElement("td", null),
                            React.createElement("td", null)
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "pl-4" }, "1. Non-Current Liabilities"),
                            React.createElement("td", null),
                            React.createElement("td", null)
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "pl-8" }, "a) Long-term Borrowings"),
                            React.createElement("td", { className: "text-center" }, "1"),
                            React.createElement("td", { className: "text-right" }, "4,00,000")
                        )
                    )
                )
            ),
            React.createElement("div", { className: "p-4 border rounded-lg mt-4" },
                React.createElement("h5", { className: "font-bold" }, "Notes to Accounts"),
                React.createElement("table", { className: "w-full mt-2" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "font-semibold" }, "1. Long-term Borrowings"),
                            React.createElement("td", null)
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "pl-4" }, "Loan from IDBI Bank"),
                            React.createElement("td", { className: "text-right" }, "4,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "pl-4 text-sm" }, "(Secured by issue of 5,000, 9% Debentures of ₹100 each as collateral security)"),
                            React.createElement("td", null)
                        )
                    )
                )
            )
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
            React.createElement("h5", { className: "font-semibold text-md mt-3" }, "Arman Ltd."),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                React.createElement("li", null, "Loss on Issue = Discount on Issue + Premium on Redemption"),
                React.createElement("li", null, "Discount = 750 * ₹100 * 10% = ₹7,500"),
                React.createElement("li", null, "Premium on Redemption = 750 * ₹100 * 5% = ₹3,750"),
                React.createElement("li", null, "Total Loss = ₹7,500 + ₹3,750 = ₹11,250")
            ),
            React.createElement("h5", { className: "font-semibold text-md mt-3" }, "Sohan Ltd."),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                React.createElement("li", null, "Premium on Issue = 800 * ₹20 = ₹16,000 (Credited to Securities Premium)"),
                React.createElement("li", null, "Premium on Redemption = 800 * ₹10 = ₹8,000 (Debited to Loss on Issue of Debentures)")
            )
        )
    },
    {
        id: '24',
        marks: 6,
        question: React.createElement(React.Fragment, null, 
            React.createElement("p", { className: "font-semibold" }, "Meghna, Mehak and Mandeep were partners in a firm whose Balance Sheet as on 31st March, 2023 was as under:"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", null, React.createElement("tr", {className: "bg-gray-100"}, React.createElement("th", {className: "border p-2"}, "Liabilities"), React.createElement("th", {className: "border p-2"}, "Amount"), React.createElement("th", {className: "border p-2"}, "Assets"), React.createElement("th", {className: "border p-2"}, "Amount"))),
                React.createElement("tbody", null, 
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Creditors"), React.createElement("td", {className: "border p-2 text-right"}, "28,000"), React.createElement("td", {className: "border p-2"}, "Cash"), React.createElement("td", {className: "border p-2 text-right"}, "27,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "General Reserve"), React.createElement("td", {className: "border p-2 text-right"}, "7,500"), React.createElement("td", {className: "border p-2"}, "Debtors"), React.createElement("td", {className: "border p-2 text-right"}, "20,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Capitals:"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}, "Stock"), React.createElement("td", {className: "border p-2 text-right"}, "28,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Meghna"), React.createElement("td", {className: "border p-2 text-right"}, "20,000"), React.createElement("td", {className: "border p-2"}, "Furniture"), React.createElement("td", {className: "border p-2 text-right"}, "5,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Mehak"), React.createElement("td", {className: "border p-2 text-right"}, "14,500"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Mandeep"), React.createElement("td", {className: "border p-2 text-right"}, "10,000"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "80,000"), React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "80,000"))
                )
            ),
            React.createElement("p", { className: "mt-2" }, "Mehak retired on this date under following terms:"),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                React.createElement("li", null, "To reduce stock and furniture by 5% and 10% respectively."),
                React.createElement("li", null, "To provide for doubtful debts at 10% on debtors."),
                React.createElement("li", null, "Goodwill was valued at ₹12,000."),
                React.createElement("li", null, "Creditors of ₹8,000 were settled at ₹7,100."),
                React.createElement("li", null, "Mehak should be paid off and the entire sum payable to Mehak shall be brought in by Meghna and Mandeep in such a way that their capitals should be in their new profit-sharing ratio and a balance of ₹25,000 is maintained in the cash account.")
            ),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Prepare Revaluation Account and partners’ capital accounts of the new firm.")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Revaluation Account"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Stock A/c"), React.createElement("td", {className: "border p-2 text-right"}, "1,400"), React.createElement("td", {className: "border p-2"}, "By Creditors A/c"), React.createElement("td", {className: "border p-2 text-right"}, "900")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Furniture A/c"), React.createElement("td", {className: "border p-2 text-right"}, "500"), React.createElement("td", {className: "border p-2"}, "By Loss transferred to:"), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Provision for Doubtful Debts A/c"), React.createElement("td", {className: "border p-2 text-right"}, "2,000"), React.createElement("td", {className: "border p-2 pl-6"}, "Meghna's Capital"), React.createElement("td", {className: "border p-2 text-right"}, "1,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2 pl-6"}, "Mehak's Capital"), React.createElement("td", {className: "border p-2 text-right"}, "1,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2 pl-6"}, "Mandeep's Capital"), React.createElement("td", {className: "border p-2 text-right"}, "1,000")),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "3,900"), React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "3,900"))
                )
            ),
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Partners' Capital Accounts"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Meghna (₹)"), React.createElement("th", {className: "border p-2"}, "Mehak (₹)"), React.createElement("th", {className: "border p-2"}, "Mandeep (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Meghna (₹)"), React.createElement("th", {className: "border p-2"}, "Mehak (₹)"), React.createElement("th", {className: "border p-2"}, "Mandeep (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Revaluation A/c (Loss)"), React.createElement("td", {className: "border p-2 text-right"}, "1,000"), React.createElement("td", {className: "border p-2 text-right"}, "1,000"), React.createElement("td", {className: "border p-2 text-right"}, "1,000"),
                        React.createElement("td", {className: "border p-2"}, "By Balance b/d"), React.createElement("td", {className: "border p-2 text-right"}, "20,000"), React.createElement("td", {className: "border p-2 text-right"}, "14,500"), React.createElement("td", {className: "border p-2 text-right"}, "10,000")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Mehak's Capital A/c (Goodwill)"), React.createElement("td", {className: "border p-2 text-right"}, "2,000"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "2,000"),
                        React.createElement("td", {className: "border p-2"}, "By General Reserve"), React.createElement("td", {className: "border p-2 text-right"}, "2,500"), React.createElement("td", {className: "border p-2 text-right"}, "2,500"), React.createElement("td", {className: "border p-2 text-right"}, "2,500")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Cash A/c"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "20,000"), React.createElement("td", {className: "border p-2 text-right"}, "-"),
                        React.createElement("td", {className: "border p-2"}, "By Meghna's Capital"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "2,000"), React.createElement("td", {className: "border p-2 text-right"}, "-")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Balance c/d"), React.createElement("td", {className: "border p-2 text-right"}, "27,050"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "27,050"),
                        React.createElement("td", {className: "border p-2"}, "By Mandeep's Capital"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "2,000"), React.createElement("td", {className: "border p-2 text-right"}, "-")
                    ),
                     React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}),
                        React.createElement("td", {className: "border p-2"}, "By Cash A/c (Bal. Fig.)"), React.createElement("td", {className: "border p-2 text-right"}, "7,550"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "17,550")
                    ),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, 
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "30,050"), React.createElement("td", {className: "border p-2 text-right"}, "21,000"), React.createElement("td", {className: "border p-2 text-right"}, "30,050"),
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "30,050"), React.createElement("td", {className: "border p-2 text-right"}, "21,000"), React.createElement("td", {className: "border p-2 text-right"}, "30,050")
                    )
                )
            )
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2 space-y-2" },
                React.createElement("li", null, React.createElement("b", null, "Profit Sharing Ratios:"), " Old ratio is not given, so it's assumed to be equal (1:1:1). Mehak retires. New ratio between Meghna and Mandeep is 1:1. Gaining ratio is also 1:1."),
                React.createElement("li", null, React.createElement("b", null, "Amount due to Mehak:"), " Capital (14,500) + General Reserve (2,500) + Goodwill (4,000) - Revaluation Loss (1,000) = ₹20,000."),
                React.createElement("li", null, React.createElement("b", null, "Total Capital of New Firm:"), " Closing Capital of Meghna + Closing Capital of Mandeep. Let's find their adjusted capitals first. Meghna: 20,000 + 2,500 - 1,000 - 2,000 (goodwill) = 19,500. Mandeep: 10,000 + 2,500 - 1,000 - 2,000 (goodwill) = 9,500. Total adjusted capital = 19,500 + 9,500 = 29,000."),
                React.createElement("li", null, React.createElement("b", null, "Cash to be brought in:"), " Amount to pay Mehak (20,000) + Cash to be maintained (25,000) - Existing Cash (27,000) - Cash from creditors settlement (900) = 17,100. The MS has a different calculation. Let's follow MS. Cash to be brought in = 20,000 (to Mehak) + 25,000 (closing bal) - 27,000 (opening bal) - 900 (gain on creditors) = 17,100. The MS calculation for cash brought in is 7,550 + 17,550 = 25,100. Let's re-evaluate. Total Capital of New Firm = (Adjusted Capitals of continuing partners) + (Cash to be brought in). Total Capital = 29,000 + Cash. Also, Total Capital = Closing Capital of Meghna + Closing Capital of Mandeep. Let's work backwards from MS. Closing Capitals are 27,050 each. Total Capital = 54,100. Cash brought in = 54,100 - 29,000 = 25,100. Cash brought in by Meghna = 27,050 - 19,500 = 7,550. Cash brought in by Mandeep = 27,050 - 9,500 = 17,550. Total = 7,550 + 17,550 = 25,100. Let's check cash account: Opening 27,000 + Cash from partners 25,100 - Paid to Mehak 20,000 - Paid to Creditors 7,100 = 25,000. This matches. The MS is correct."),
                React.createElement("li", null, React.createElement("b", null, "Final Capitals:"), " Total capital required is ₹54,100. Since new ratio is 1:1, each partner's capital will be ₹27,050.")
            )
        )
    },
    {
        id: '24 (OR)',
        marks: 6,
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "Varun and Vivek were partners in a firm sharing profits in the ratio of 3:2. The balance in their capital and current accounts as on 1st April, 2022 were as under:"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", null, React.createElement("tr", {className: "bg-gray-100"}, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Varun(₹)"), React.createElement("th", {className: "border p-2"}, "Vivek(₹)"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Capital accounts"), React.createElement("td", {className: "border p-2 text-right"}, "3,00,000 (Cr.)"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000 (Cr.)")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Current accounts"), React.createElement("td", {className: "border p-2 text-right"}, "1,00,000 (Cr.)"), React.createElement("td", {className: "border p-2 text-right"}, "28,000 (Dr)"))
                )
            ),
            React.createElement("p", { className: "mt-2" }, "The partnership deed provided that Varun was to be paid a salary of ₹ 5,000 p.m. whereas Vivek was to get a commission of ₹ 30,000 for the year. Interest on capital was to be allowed @ 8% p.a. whereas interest on drawings was to be charged @ 6% p.a. The drawings of Varun were ₹ 3,000 at the beginning of each quarter while Vivek withdrew ₹ 30,000 on 1st September, 2022. The net profit of the firm for the year, 2022-23, before making the above adjustments was ₹ 1,20,000."),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Prepare Profit and Loss Appropriation Account and Partners' Capital and Current Accounts.")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Profit & Loss Appropriation Account"),
            React.createElement("p", {className: "text-center"}, "for the year ended on March 31, 2023"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Partners Current A/c"), React.createElement("td", {className: "border p-2"}),
                        React.createElement("td", {className: "border p-2"}, "By Profit & Loss A/c - Net Profit"), React.createElement("td", {className: "border p-2 text-right"}, "1,20,000")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2 pl-6"}, "Varun"), React.createElement("td", {className: "border p-2 text-right"}, "78,508"),
                        React.createElement("td", {className: "border p-2"}, "By Interest on Drawings"), React.createElement("td", {className: "border p-2"})
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2 pl-6"}, "Vivek"), React.createElement("td", {className: "border p-2 text-right"}, "42,992"),
                        React.createElement("td", {className: "border p-2 pl-6"}, "Varun"), React.createElement("td", {className: "border p-2 text-right"}, "450")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}),
                        React.createElement("td", {className: "border p-2 pl-6"}, "Vivek"), React.createElement("td", {className: "border p-2 text-right"}, "1,050")
                    ),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, 
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "1,21,500"),
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "1,21,500")
                    )
                )
            ),
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Partners' Capital Accounts"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Varun (₹)"), React.createElement("th", {className: "border p-2"}, "Vivek (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Varun (₹)"), React.createElement("th", {className: "border p-2"}, "Vivek (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Balance c/d"), React.createElement("td", {className: "border p-2 text-right"}, "3,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000"),
                        React.createElement("td", {className: "border p-2"}, "By Balance b/d"), React.createElement("td", {className: "border p-2 text-right"}, "3,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000")
                    ),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, 
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "3,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000"),
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "3,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000")
                    )
                )
            ),
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Partners' Current Accounts"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Varun (₹)"), React.createElement("th", {className: "border p-2"}, "Vivek (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Varun (₹)"), React.createElement("th", {className: "border p-2"}, "Vivek (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Balance b/d"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "28,000"),
                        React.createElement("td", {className: "border p-2"}, "By Balance b/d"), React.createElement("td", {className: "border p-2 text-right"}, "1,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "-")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Drawings"), React.createElement("td", {className: "border p-2 text-right"}, "12,000"), React.createElement("td", {className: "border p-2 text-right"}, "30,000"),
                        React.createElement("td", {className: "border p-2"}, "By Profit and Loss App. A/c"), React.createElement("td", {className: "border p-2 text-right"}, "78,508"), React.createElement("td", {className: "border p-2 text-right"}, "42,992")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Interest on Drawings"), React.createElement("td", {className: "border p-2 text-right"}, "450"), React.createElement("td", {className: "border p-2 text-right"}, "1,050"),
                        React.createElement("td", {className: "border p-2"}, "By Balance c/d"), React.createElement("td", {className: "border p-2 text-right"}, "-"), React.createElement("td", {className: "border p-2 text-right"}, "16,058")
                    ),
                    React.createElement("tr", null, 
                        React.createElement("td", {className: "border p-2"}, "To Balance c/d"), React.createElement("td", {className: "border p-2 text-right"}, "1,66,058"), React.createElement("td", {className: "border p-2 text-right"}, "-"),
                        React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"})
                    ),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, 
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "1,78,508"), React.createElement("td", {className: "border p-2 text-right"}, "59,050"),
                        React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "1,78,508"), React.createElement("td", {className: "border p-2 text-right"}, "59,050")
                    )
                )
            )
        ),
        explanation: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
            React.createElement("p", null, "As divisible profits are insufficient, so available profits are distributed in ratio of appropriations i.e 42:23"),
            React.createElement("ul", {className: "list-disc pl-5"}, 
                React.createElement("li", null, "Varun's Salary: 5,000 * 12 = 60,000"),
                React.createElement("li", null, "Vivek's Commission: 30,000"),
                React.createElement("li", null, "Interest on Capital (Varun): 3,00,000 * 8% = 24,000"),
                React.createElement("li", null, "Interest on Capital (Vivek): 2,00,000 * 8% = 16,000"),
                React.createElement("li", null, "Total Appropriations for Varun: 60,000 + 24,000 = 84,000"),
                React.createElement("li", null, "Total Appropriations for Vivek: 30,000 + 16,000 = 46,000"),
                React.createElement("li", null, "Ratio of Appropriations: 84,000 : 46,000 => 42 : 23"),
                React.createElement("li", null, "Available Profit: 1,20,000 + 450 (Varun's Int on Dr) + 1,050 (Vivek's Int on Dr) = 1,21,500"),
                React.createElement("li", null, "Varun's share of profit: 1,21,500 * 42 / 65 = 78,508 (approx)"),
                React.createElement("li", null, "Vivek's share of profit: 1,21,500 * 23 / 65 = 42,992 (approx)"),
                React.createElement("li", null, "Interest on Drawings (Varun): 12,000 * 6% * 7.5/12 = 450"),
                React.createElement("li", null, "Interest on Drawings (Vivek): 30,000 * 6% * 7/12 = 1,050")
            )
        )
    },
    {
        id: '25',
        marks: 6,
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "Sunny and Bobby were partners in a firm sharing profits and losses in the ratio of 3:2, their balance sheet as at 31st March, 2012:"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", null, React.createElement("tr", {className: "bg-gray-100"}, React.createElement("th", {className: "border p-2"}, "Liabilities"), React.createElement("th", {className: "border p-2"}, "Amount"), React.createElement("th", {className: "border p-2"}, "Assets"), React.createElement("th", {className: "border p-2"}, "Amount"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Creditors"), React.createElement("td", {className: "border p-2 text-right"}, "1,90,000"), React.createElement("td", {className: "border p-2"}, "Bank"), React.createElement("td", {className: "border p-2 text-right"}, "5,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Bills Payable"), React.createElement("td", {className: "border p-2 text-right"}, "1,10,000"), React.createElement("td", {className: "border p-2"}, "Fixed Deposits"), React.createElement("td", {className: "border p-2 text-right"}, "70,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Employees provident fund"), React.createElement("td", {className: "border p-2 text-right"}, "50,000"), React.createElement("td", {className: "border p-2"}, "Stock"), React.createElement("td", {className: "border p-2 text-right"}, "86,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Mrs. Sunny’s Loan"), React.createElement("td", {className: "border p-2 text-right"}, "55,000"), React.createElement("td", {className: "border p-2"}, "Investments"), React.createElement("td", {className: "border p-2 text-right"}, "1,04,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Bobby’s Loan"), React.createElement("td", {className: "border p-2 text-right"}, "85,000"), React.createElement("td", {className: "border p-2"}, "Debtors"), React.createElement("td", {className: "border p-2 text-right"}, "1,77,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Investment Fluctuation Fund"), React.createElement("td", {className: "border p-2 text-right"}, "30,000"), React.createElement("td", {className: "border p-2"}, "(-) Provision for D/D"), React.createElement("td", {className: "border p-2 text-right"}, "12,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Capitals:"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}, "Other Fixed Assets"), React.createElement("td", {className: "border p-2 text-right"}, "3,80,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Sunny"), React.createElement("td", {className: "border p-2 text-right"}, "2,20,000"), React.createElement("td", {className: "border p-2"}, "Deferred Revenue Expenditure"), React.createElement("td", {className: "border p-2 text-right"}, "35,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Bobby"), React.createElement("td", {className: "border p-2 text-right"}, "1,20,000"), React.createElement("td", {className: "border p-2"}, "Sunny’s Loan"), React.createElement("td", {className: "border p-2 text-right"}, "15,000")),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "8,60,000"), React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "8,60,000"))
                )
            ),
            React.createElement("p", { className: "mt-2" }, "The firm was dissolved on 31st March, 2012. The assets were realized and the liabilities were paid as under:"),
            React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                React.createElement("li", null, "Sunny promised to pay off Mrs. Sunny’s Loan"),
                React.createElement("li", null, "Bobby took away stock at 20% discount and 80% of the investments at 10% discount."),
                React.createElement("li", null, "Dharam, a debtor of Rs. 60,000 had to pay the amount due 2 months after the date of dissolution. He was allowed a discount of 9% p.a. for making immediate payment."),
                React.createElement("li", null, "Creditors were paid Rs.1,75,000 in full settlement of their claim."),
                React.createElement("li", null, "90% of Other fixed assets realised Rs. 1,98,000 and remaining were realised at discount of 15%."),
                React.createElement("li", null, "Balance of investments were sold at 75% value and Fixed Deposits were realised at 110%."),
                React.createElement("li", null, "There was an old furniture which has been written off completely from the books, Bobby took away the same for Rs. 41,000 against his loan and balance to him was given in cash."),
                React.createElement("li", null, "Realisation expenses Rs. 20,000 were paid by Sunny and Bobby equally on behalf of the firm.")
            ),
            React.createElement("p", { className: "mt-2 font-semibold" }, "You are required to prepare Realisation A/c")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Realisation Account"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", { className: "bg-gray-100" },
                    React.createElement("tr", null, React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"), React.createElement("th", {className: "border p-2"}, "Particulars"), React.createElement("th", {className: "border p-2"}, "Amount (₹)"))
                ),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Fixed Deposits"), React.createElement("td", {className: "border p-2 text-right"}, "70,000"), React.createElement("td", {className: "border p-2"}, "By Provision for Doubt. Debts"), React.createElement("td", {className: "border p-2 text-right"}, "12,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Stock"), React.createElement("td", {className: "border p-2 text-right"}, "86,000"), React.createElement("td", {className: "border p-2"}, "By Bills Payable"), React.createElement("td", {className: "border p-2 text-right"}, "1,10,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Investments"), React.createElement("td", {className: "border p-2 text-right"}, "1,04,000"), React.createElement("td", {className: "border p-2"}, "By Creditors"), React.createElement("td", {className: "border p-2 text-right"}, "1,90,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Debtors"), React.createElement("td", {className: "border p-2 text-right"}, "1,77,000"), React.createElement("td", {className: "border p-2"}, "By Employees provident fund"), React.createElement("td", {className: "border p-2 text-right"}, "50,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Other fixed assets"), React.createElement("td", {className: "border p-2 text-right"}, "3,80,000"), React.createElement("td", {className: "border p-2"}, "By Mrs. Sunny's Loan"), React.createElement("td", {className: "border p-2 text-right"}, "55,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Sunny's Capital A/c (Loan repaid)"), React.createElement("td", {className: "border p-2 text-right"}, "55,000"), React.createElement("td", {className: "border p-2"}, "By Investment fluctuation fund"), React.createElement("td", {className: "border p-2 text-right"}, "30,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Bank A/c"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}, "By Bank A/c"), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Creditors"), React.createElement("td", {className: "border p-2 text-right"}, "1,75,000"), React.createElement("td", {className: "border p-2 pl-6"}, "Debtors"), React.createElement("td", {className: "border p-2 text-right"}, "1,76,100")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Bills Payable"), React.createElement("td", {className: "border p-2 text-right"}, "1,10,000"), React.createElement("td", {className: "border p-2 pl-6"}, "Other Fixed assets"), React.createElement("td", {className: "border p-2 text-right"}, "2,30,300")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-6"}, "Emp prov fund"), React.createElement("td", {className: "border p-2 text-right"}, "50,000"), React.createElement("td", {className: "border p-2 pl-6"}, "Investments"), React.createElement("td", {className: "border p-2 text-right"}, "15,600")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Sunny's Capital A/c – Expense"), React.createElement("td", {className: "border p-2 text-right"}, "10,000"), React.createElement("td", {className: "border p-2 pl-6"}, "Fixed deposits"), React.createElement("td", {className: "border p-2 text-right"}, "77,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "To Bobby's Capital A/c – Expense"), React.createElement("td", {className: "border p-2 text-right"}, "10,000"), React.createElement("td", {className: "border p-2"}, "By Bobby's Capital A/c"), React.createElement("td", {className: "border p-2 text-right"}, "1,43,680")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}, "By Bobby's Loan A/c"), React.createElement("td", {className: "border p-2 text-right"}, "41,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}, "By Partners Capital A/c - Loss"), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2 pl-6"}, "Bobby"), React.createElement("td", {className: "border p-2 text-right"}, "57,792")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2 pl-6"}, "Sunny"), React.createElement("td", {className: "border p-2 text-right"}, "38,528")),
                    React.createElement("tr", {className: "bg-gray-100 font-bold"}, React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "12,27,000"), React.createElement("td", {className: "border p-2"}, "Total"), React.createElement("td", {className: "border p-2 text-right"}, "12,27,000"))
                )
            )
        ),
        explanation: null
    },
    {
        id: '26',
        marks: 6,
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold" }, "Balance Sheet (Extract) of XYZEE ltd as at 31.03.2024 (as per schedule -III of Companies Act 2013)"),
            React.createElement("table", { className: "w-full mt-2 border-collapse" },
                React.createElement("thead", null, React.createElement("tr", {className: "bg-gray-100"}, React.createElement("th", {className: "border p-2"}), React.createElement("th", {className: "border p-2"}, "Note no."), React.createElement("th", {className: "border p-2"}, "31.03.2023"), React.createElement("th", {className: "border p-2"}, "31.03.2024"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 font-bold", colSpan: 4}, "I- Equity & Liabilities")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-4"}, "1. Shareholders Funds"), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"}), React.createElement("td", {className: "border p-2"})),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-8"}, "a). Share Capital"), React.createElement("td", {className: "border p-2 text-center"}, "1"), React.createElement("td", {className: "border p-2 text-right"}, "44,90,000"), React.createElement("td", {className: "border p-2 text-right"}, "54,90,000")),
                    React.createElement("tr", null, React.createElement("td", {className: "border p-2 pl-8"}, "b). Reserves and Surplus"), React.createElement("td", {className: "border p-2 text-center"}, "2"), React.createElement("td", {className: "border p-2 text-right"}, "2,00,000"), React.createElement("td", {className: "border p-2 text-right"}, "3,60,000"))
                )
            ),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Note no.1 (For year ending 31.03.2023)"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Note no.1 (For year ending 31.03.2024)"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Note no. 2 - Reserves and Surplus"),
            React.createElement("p", { className: "mt-2" }, "During the year the company took over the business of Quipa Ltd. with Assets of Rs. 12,00,000/ - and Liabilities of Rs.7,30,000. Purchase consideration was paid in cash and by issue of equity shares at par. The entire transaction resulted in Capital reserve of Rs.40,000."),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q1. What is the total face value of Shares issued by the Company during the year 2023-24."),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q2. Shares issued for cash during the year were issued at _______ (assuming they were issued together)?"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q3. On April 1, 2024, the company forfeited all the defaulting shares. What amount will appear in the Share Forfeiture account at the time of forfeiture?"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q4. What will be the number of Issued shares, as on April 1,2024, after the forfeiture of these shares?"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q5. If 2,000 of the forfeited shares were issued at Rs. 14 per share, what will be the amount of securities premium and Capital reserve respectively as on April 1, 2024 ?"),
            React.createElement("p", { className: "mt-2 font-semibold" }, "Q6. What will be the amount in the \"Subscribed and Fully paid\" after the reissue of these 2000 shares?")
        ),
        solution: React.createElement(React.Fragment, null,
            React.createElement("p", null, "Q1. A). Rs.10,00,000"),
            React.createElement("p", null, "Q2. C). Rs.12"),
            React.createElement("p", null, "Q3. A). Rs.40,000"),
            React.createElement("p", null, "Q4. B). 5,50,000 shares"),
            React.createElement("p", null, "Q5. B). Rs.3,28,000, Rs.56,000"),
            React.createElement("p", null, "Q6. C). Rs.54,70,000")
        ),
        explanation: null
    }
]};

export default samplePaper2024Q23to26;

