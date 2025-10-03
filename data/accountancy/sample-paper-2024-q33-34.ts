import { Question, QuestionPaper } from '../../types';
import React from 'react';

const paper: QuestionPaper = {
    name: 'Sample Paper 2024 Questions 33-34',
    questions: [
        {
            id: '33',
            marks: 6,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Pass necessary journal entries for the following transactions on the dissolution of the firm of P and Q after the various assets (other than cash) and outside liabilities have been transferred to Realisation Account:"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "P agreed to pay off his wife's loan of ₹ 6,000."),
                    React.createElement("li", null, "Total Creditors of the firm were ₹ 40,000. Creditors worth ₹ 10,000 were given a piece of furniture costing ₹ 8,000 in full and final settlement. Remaining creditors were allowed a discount of 10%."),
                    React.createElement("li", null, "Q had taken a loan of ₹ 15,000 from the firm. He paid it."),
                    React.createElement("li", null, "A machine which was not recorded in the books was taken over by Q at ₹ 3,000, whereas its expected value was ₹ 5,000."),
                    React.createElement("li", null, "The firm had a debit balance of ₹ 28,000 in the Profit and Loss Account on the date of dissolution."),
                    React.createElement("li", null, "P paid the realisation expenses of ₹ 10,000 out of his private funds. He was to get a remuneration of ₹ 12,000 for completing the dissolution process and was responsible to bear all the realisation expenses.")
                )
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h3", { className: "text-xl font-bold mb-4" }, "Journal Entries"),
                React.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
                    React.createElement("thead", { className: "bg-gray-50" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Date"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Particulars"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "L.F."),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Debit (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "1"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "Realisation A/c Dr.", React.createElement("br", null), "To P's Capital A/c"), React.createElement("i", { className: "text-sm" }, "(Being P's wife's loan taken over by P)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "6,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "6,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "2"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "Realisation A/c Dr.", React.createElement("br", null), "To Bank A/c"), React.createElement("i", { className: "text-sm" }, "(Being remaining creditors paid at a 10% discount)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "27,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "27,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "3"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "Bank A/c Dr.", React.createElement("br", null), "To Q's Loan A/c"), React.createElement("i", { className: "text-sm" }, "(Being loan to Q repaid by him)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "15,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "15,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "4"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "Q's Capital A/c Dr.", React.createElement("br", null), "To Realisation A/c"), React.createElement("i", { className: "text-sm" }, "(Being unrecorded machine taken over by Q)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "3,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "3,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "5"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "P's Capital A/c Dr.", React.createElement("br", null), "Q's Capital A/c Dr.", React.createElement("br", null), "To Profit & Loss A/c"), React.createElement("i", { className: "text-sm" }, "(Being debit balance of P&L A/c distributed, assuming equal ratio)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "14,000", React.createElement("br", null), "14,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "28,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "px-6 py-4" }, "6"),
                            React.createElement("td", { className: "px-6 py-4" }, React.createElement("div", null, "Realisation A/c Dr.", React.createElement("br", null), "To P's Capital A/c"), React.createElement("i", { className: "text-sm" }, "(Being remuneration due to P for dissolution services)")),
                            React.createElement("td", { className: "px-6 py-4" }),
                            React.createElement("td", { className: "px-6 py-4" }, "12,000"),
                            React.createElement("td", { className: "px-6 py-4" }, "12,000")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation of Journal Entries:"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "P taking over his wife's loan is treated as the firm paying a liability, so Realisation is debited, and since P is paying it, his capital is credited."),
                    React.createElement("li", null, "No entry is passed for creditors taking over an asset in full settlement. For the remaining creditors (40,000 - 10,000 = 30,000), a 10% discount is given (3,000), so the actual cash paid is 27,000. This is a payment of a liability, so Realisation is debited and Bank is credited."),
                    React.createElement("li", null, "The loan to Q is an asset for the firm. When he repays it, cash comes in. This transaction does not go through the Realisation account."),
                    React.createElement("li", null, "An unrecorded asset taken by a partner is a gain for the firm. Realisation account is credited, and the partner's capital account is debited with the agreed value (₹3,000), not the expected value."),
                    React.createElement("li", null, "A debit balance in the P&L account is a loss and is debited to the partners' capital accounts in their profit-sharing ratio (assumed equal as it's not given)."),
                    React.createElement("li", null, "The firm is only liable for the agreed remuneration (₹12,000), which is a realisation expense. The actual expenses paid by P (₹10,000) are his personal responsibility as per the agreement. So, Realisation is debited with the remuneration, and P's capital is credited.")
                )
            )
        },
        {
            id: '34',
            marks: 6,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "From the following Receipts and Payments Account of a club, prepare Income and Expenditure Account for the year ended March 31, 2025 and the Balance Sheet as on that date:"),
                React.createElement("h4", { className: "font-semibold mt-4" }, "Receipts and Payments Account for the year ending March 31, 2025"),
                React.createElement("table", { className: "min-w-full divide-y divide-gray-200 mt-2" },
                    React.createElement("thead", { className: "bg-gray-50" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Receipts (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Payments (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Balance b/d"), React.createElement("td", { className: "px-6 py-4" }, "1,00,000"), React.createElement("td", { className: "px-6 py-4" }, "By Salaries"), React.createElement("td", { className: "px-6 py-4" }, "2,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Subscriptions"), React.createElement("td", { className: "px-6 py-4" }, "5,50,000"), React.createElement("td", { className: "px-6 py-4" }, "By Sports Equipment"), React.createElement("td", { className: "px-6 py-4" }, "3,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Sale of old newspaper"), React.createElement("td", { className: "px-6 py-4" }, "30,000"), React.createElement("td", { className: "px-6 py-4" }, "By Rent"), React.createElement("td", { className: "px-6 py-4" }, "60,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Government Grant"), React.createElement("td", { className: "px-6 py-4" }, "1,00,000"), React.createElement("td", { className: "px-6 py-4" }, "By Stationery"), React.createElement("td", { className: "px-6 py-4" }, "40,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Donation for Building"), React.createElement("td", { className: "px-6 py-4" }, "4,00,000"), React.createElement("td", { className: "px-6 py-4" }, "By Balance c/d"), React.createElement("td", { className: "px-6 py-4" }, "5,80,000")),
                        React.createElement("tr", { className: "font-bold" }, React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "11,80,000"), React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "11,80,000"))
                    )
                ),
                React.createElement("p", { className: "mt-4" }, React.createElement("strong", null, "Additional Information:")),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2 space-y-1" },
                    React.createElement("li", null, "On April 1, 2024, the club had the following assets: Building ₹10,00,000; Furniture ₹2,00,000; 12% Investments ₹3,00,000."),
                    React.createElement("li", null, "Subscription outstanding on March 31, 2025 is ₹50,000."),
                    React.createElement("li", null, "Salaries outstanding on March 31, 2025 is ₹20,000."),
                    React.createElement("li", null, "Depreciate Building by 5% and Sports Equipment by 10%.")
                )
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h3", { className: "text-xl font-bold mb-4" }, "Income and Expenditure Account for the year ended March 31, 2025"),
                React.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
                    React.createElement("thead", { className: "bg-gray-50" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Expenditure (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Income (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Salaries (2,00,000 + 20,000)"), React.createElement("td", { className: "px-6 py-4" }, "2,20,000"), React.createElement("td", { className: "px-6 py-4" }, "By Subscriptions (5,50,000 + 50,000)"), React.createElement("td", { className: "px-6 py-4" }, "6,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Rent"), React.createElement("td", { className: "px-6 py-4" }, "60,000"), React.createElement("td", { className: "px-6 py-4" }, "By Sale of old newspaper"), React.createElement("td", { className: "px-6 py-4" }, "30,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Stationery"), React.createElement("td", { className: "px-6 py-4" }, "40,000"), React.createElement("td", { className: "px-6 py-4" }, "By Government Grant"), React.createElement("td", { className: "px-6 py-4" }, "1,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Depreciation on Building"), React.createElement("td", { className: "px-6 py-4" }, "50,000"), React.createElement("td", { className: "px-6 py-4" }, "By Interest on Investments (12% of 3,00,000)"), React.createElement("td", { className: "px-6 py-4" }, "36,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "To Depreciation on Sports Eq."), React.createElement("td", { className: "px-6 py-4" }, "30,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4 font-bold" }, "To Surplus (Bal. Fig.)"), React.createElement("td", { className: "px-6 py-4 font-bold" }, "3,66,000")),
                        React.createElement("tr", { className: "font-bold" }, React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "7,66,000"), React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "7,66,000"))
                    )
                ),

                React.createElement("h3", { className: "text-xl font-bold my-4" }, "Balance Sheet as at March 31, 2025"),
                React.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
                    React.createElement("thead", { className: "bg-gray-50" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Liabilities (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Assets (₹)"),
                            React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "Capital Fund (16,00,000 + 3,66,000)"), React.createElement("td", { className: "px-6 py-4" }, "19,66,000"), React.createElement("td", { className: "px-6 py-4" }, "Building (10,00,000 - 50,000)"), React.createElement("td", { className: "px-6 py-4" }, "9,50,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "Donation for Building"), React.createElement("td", { className: "px-6 py-4" }, "4,00,000"), React.createElement("td", { className: "px-6 py-4" }, "Furniture"), React.createElement("td", { className: "px-6 py-4" }, "2,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, "Salaries Outstanding"), React.createElement("td", { className: "px-6 py-4" }, "20,000"), React.createElement("td", { className: "px-6 py-4" }, "12% Investments"), React.createElement("td", { className: "px-6 py-4" }, "3,00,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, "Sports Equipment (3,00,000 - 30,000)"), React.createElement("td", { className: "px-6 py-4" }, "2,70,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, "Subscription Outstanding"), React.createElement("td", { className: "px-6 py-4" }, "50,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, "Accrued Interest on Investments"), React.createElement("td", { className: "px-6 py-4" }, "36,000")),
                        React.createElement("tr", null, React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, ""), React.createElement("td", { className: "px-6 py-4" }, "Cash at Bank"), React.createElement("td", { className: "px-6 py-4" }, "5,80,000")),
                        React.createElement("tr", { className: "font-bold" }, React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "23,86,000"), React.createElement("td", { className: "px-6 py-4" }, "Total"), React.createElement("td", { className: "px-6 py-4" }, "23,86,000"))
                    )
                ),
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Working Note: Opening Balance Sheet"),
                React.createElement("p", null, "Capital Fund (Balancing Figure) = (10,00,000 + 2,00,000 + 3,00,000 + 1,00,000) = 16,00,000.")
            ),
            explanation: React.createElement(React.Fragment, null)
        }
    ]
};

export default paper;
