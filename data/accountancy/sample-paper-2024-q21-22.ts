import { QuestionPaper } from '../../types';
import React from 'react';

const paper: QuestionPaper = {
    name: 'Sample Paper 2024 Q21-22',
    questions: [
        {
            id: '21',
            marks: 4,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "A company forfeited a certain number of shares of Face Value ₹ 10 each, for non-payment of final call money of ₹ 4. These shares were reissued at a discount of ₹ 5 and amount of ₹ 4500 was transferred to capital Reserve account. Pass the necessary journal entries to show the above transactions and prepare Share forfeited account.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries"),
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
                            React.createElement("td", { className: "border p-2" }, "Share Capital A/c (4,500 x ₹10) Dr. \n To Share Forfeiture A/c (4,500 x ₹6) \n To Share Final Call A/c (4,500 x ₹4) \n (Being 4,500 shares forfeited for non-payment of final call)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "45,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 27,000 \n 18,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Bank A/c (4,500 x ₹5) Dr. \n Share Forfeiture A/c (4,500 x ₹5) Dr. \n To Share Capital A/c (4,500 x ₹10) \n (Being 4,500 forfeited shares reissued at ₹5 per share)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "22,500 \n 22,500"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n \n 45,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Share Forfeiture A/c Dr. \n To Capital Reserve A/c \n (Being balance in Share Forfeiture A/c on reissued shares transferred to Capital Reserve)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,500"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 4,500")
                        )
                    )
                ),
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Share Forfeiture Account"),
                React.createElement("table", { className: "w-full mt-4 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Share Capital A/c (Discount on reissue)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "22,500"),
                            React.createElement("td", { className: "border p-2" }, "By Share Capital A/c (Amount forfeited)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "27,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Capital Reserve A/c (Bal. Fig.)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,500"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "")
                        ),
                        React.createElement("tr", { className: "bg-gray-100 font-bold" },
                            React.createElement("td", { className: "border p-2" }, "Total"),
                            React.createElement("td", { className: "border p-2 text-right" }, "27,000"),
                            React.createElement("td", { className: "border p-2" }, "Total"),
                            React.createElement("td", { className: "border p-2 text-right" }, "27,000")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                    React.createElement("li", null, "Let 'n' be the number of shares reissued."),
                    React.createElement("li", null, "Amount paid per share = ₹10 (Face Value) - ₹4 (Unpaid Final Call) = ₹6."),
                    React.createElement("li", null, "Capital Reserve per share = Amount paid per share - Discount on reissue = ₹6 - ₹5 = ₹1."),
                    React.createElement("li", null, "Total Capital Reserve = n * Capital Reserve per share => ₹4,500 = n * ₹1 => n = 4,500 shares."),
                    React.createElement("li", null, "The question implies all forfeited shares were reissued, so 4,500 shares were forfeited and reissued.")
                )
            )
        },
        {
            id: '22',
            marks: 4,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "X, Y and Z were partners sharing profits and losses equally. Y died on 1st October, 2023 and total amount transferred to Y’s executors was ₹ 15,60,000. Y’s executors were being paid ₹ 3,60,000 immediately and balance was to be paid in four equal quarterly instalments, together with Interest @ 6% p.a. Pass entries till payment of first two instalments.")
            ),
            solution: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Journal Entries"),
                React.createElement("table", { className: "w-full mt-4 border-collapse" },
                    React.createElement("thead", { className: "bg-gray-200" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "border p-2" }, "Date"),
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Debit (₹)"),
                            React.createElement("th", { className: "border p-2" }, "Credit (₹)")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2023 Oct 1"),
                            React.createElement("td", { className: "border p-2" }, "Y's Capital A/c Dr. \n To Y's Executors A/c \n (Being balance in Y's capital account transferred to his executor's account)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "15,60,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 15,60,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2023 Oct 1"),
                            React.createElement("td", { className: "border p-2" }, "Y's Executors A/c Dr. \n To Bank A/c \n (Being immediate payment made to the executor)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "3,60,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 3,60,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2023 Dec 31"),
                            React.createElement("td", { className: "border p-2" }, "Interest A/c Dr. \n To Y's Executor's A/c \n (Being interest due for one quarter on the outstanding balance of ₹12,00,000)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "18,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 18,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2023 Dec 31"),
                            React.createElement("td", { className: "border p-2" }, "Y's Executors A/c Dr. \n To Bank A/c \n (Being payment of first quarterly instalment and interest)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "3,18,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 3,18,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2024 Mar 31"),
                            React.createElement("td", { className: "border p-2" }, "Interest A/c Dr. \n To Y's Executor's A/c \n (Being interest due for one quarter on the outstanding balance of ₹9,00,000)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "13,500"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 13,500")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "2024 Mar 31"),
                            React.createElement("td", { className: "border p-2" }, "Y's Executors A/c Dr. \n To Bank A/c \n (Being payment of second quarterly instalment and interest)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "3,13,500"),
                            React.createElement("td", { className: "border p-2 text-right" }, "\n 3,13,500")
                        )
                    )
                )
            ),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-2" },
                    React.createElement("li", null, "Loan Balance after immediate payment = ₹15,60,000 - ₹3,60,000 = ₹12,00,000."),
                    React.createElement("li", null, "Amount of each quarterly instalment = ₹12,00,000 / 4 = ₹3,00,000."),
                    React.createElement("li", null, "Interest for 1st quarter (Oct 1 to Dec 31) = ₹12,00,000 * 6% * 3/12 = ₹18,000. Payment = ₹3,00,000 + ₹18,000 = ₹3,18,000."),
                    React.createElement("li", null, "Loan Balance after 1st instalment = ₹12,00,000 - ₹3,00,000 = ₹9,00,000."),
                    React.createElement("li", null, "Interest for 2nd quarter (Jan 1 to Mar 31) = ₹9,00,000 * 6% * 3/12 = ₹13,500. Payment = ₹3,00,000 + ₹13,500 = ₹3,13,500.")
                )
            )
        }
    ]
};

export default paper;

