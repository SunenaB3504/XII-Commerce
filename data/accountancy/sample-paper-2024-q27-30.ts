import { Question, QuestionPaper } from '../../types';
import React from 'react';

const paper: QuestionPaper = {
    name: 'Sample Paper 2024 Questions 27-30',
    questions: [
        {
            id: '27',
            marks: 1,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Which of the following is not a tool of Financial Statement Analysis?"),
                React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "A. Cash Flow Statement"),
                    React.createElement("li", null, "B. Statement of Profit and Loss"),
                    React.createElement("li", null, "C. Comparative Statements"),
                    React.createElement("li", null, "D. Ratio Analysis")
                )
            ),
            solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Statement of Profit and Loss"),
            explanation: React.createElement("p", { className: "mt-2" }, "The Statement of Profit and Loss is a financial statement itself, not a tool for analyzing financial statements. The other options—Cash Flow Statement, Comparative Statements, and Ratio Analysis—are all established tools used to analyze and interpret the data presented in financial statements like the Balance Sheet and the Statement of Profit and Loss.")
        },
        {
            id: '28',
            marks: 1,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Current Ratio of a firm is 2.5:1 and its current liabilities are ₹ 4,00,000. Its working capital is:"),
                React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "A. ₹ 10,00,000"),
                    React.createElement("li", null, "B. ₹ 6,00,000"),
                    React.createElement("li", null, "C. ₹ 14,00,000"),
                    React.createElement("li", null, "D. ₹ 2,50,000")
                )
            ),
            solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 6,00,000"),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "Current Ratio = Current Assets / Current Liabilities."),
                    React.createElement("li", null, "Given: Current Ratio = 2.5 and Current Liabilities = ₹4,00,000."),
                    React.createElement("li", null, "Current Assets = Current Ratio × Current Liabilities = 2.5 × ₹4,00,000 = ₹10,00,000."),
                    React.createElement("li", null, "Working Capital = Current Assets - Current Liabilities = ₹10,00,000 - ₹4,00,000 = ₹6,00,000.")
                )
            )
        },
        {
            id: '28 (OR)',
            marks: 1,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "A company has a current ratio of 3:1 and a quick ratio of 1.8:1. If its current liabilities are ₹ 2,00,000, the value of its stock will be:"),
                React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "A. ₹ 2,40,000"),
                    React.createElement("li", null, "B. ₹ 3,60,000"),
                    React.createElement("li", null, "C. ₹ 6,00,000"),
                    React.createElement("li", null, "D. ₹ 1,20,000")
                )
            ),
            solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. ₹ 2,40,000"),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
                React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "Current Assets = Current Ratio × Current Liabilities = 3 × ₹2,00,000 = ₹6,00,000."),
                    React.createElement("li", null, "Quick Assets = Quick Ratio × Current Liabilities = 1.8 × ₹2,00,000 = ₹3,60,000."),
                    React.createElement("li", null, "The value of Stock (Inventory) is the difference between Current Assets and Quick Assets."),
                    React.createElement("li", null, "Stock = Current Assets - Quick Assets = ₹6,00,000 - ₹3,60,000 = ₹2,40,000.")
                )
            )
        },
        {
            id: '29',
            marks: 1,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Which of the following transactions will result into 'flow of cash'?"),
                React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "A. Deposited ₹ 50,000 into bank"),
                    React.createElement("li", null, "B. Withdrew cash from bank ₹ 25,000"),
                    React.createElement("li", null, "C. Sale of machinery of the book value of ₹ 78,000 at a loss of ₹ 9,000"),
                    React.createElement("li", null, "D. Converted ₹ 2,00,000, 9% Debentures into equity shares")
                )
            ),
            solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C."),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
                React.createElement("ul", { className: "list-disc pl-6 mt-2 space-y-2" },
                    React.createElement("li", null, "A & B: These are movements between 'Cash' and 'Bank', which are both components of 'Cash and Cash Equivalents'. They do not result in a net flow of cash."),
                    React.createElement("li", null, "C: Sale of machinery results in a cash inflow. The cash received would be Book Value - Loss = ₹78,000 - ₹9,000 = ₹69,000. This is a cash inflow from investing activities."),
                    React.createElement("li", null, "D: This is a non-cash financing transaction. Debentures are converted into shares without any cash changing hands.")
                )
            )
        },
        {
            id: '30',
            marks: 1,
            question: React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Assertion (A): Cash flow statement is prepared to ascertain the financial position of the firm."),
                React.createElement("p", { className: "mt-2 font-semibold" }, "Reason (R): Cash flow statement is based on cash basis of accounting."),
                React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
                    React.createElement("li", null, "A. Both A and R are correct and R is the correct explanation of A"),
                    React.createElement("li", null, "B. Both A and R are correct but R is not the correct explanation of A"),
                    React.createElement("li", null, "C. A is incorrect but R is correct"),
                    React.createElement("li", null, "D. Both A and R are incorrect")
                )
            ),
            solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. A is incorrect but R is correct"),
            explanation: React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
                React.createElement("p", { className: "mt-2" }, "Assertion (A) is incorrect. The primary statement prepared to ascertain the financial position of a firm is the Balance Sheet. The Cash Flow Statement is prepared to show the inflows and outflows of cash and cash equivalents during a period, not the overall financial position at a point in time."),
                React.createElement("p", { className: "mt-2" }, "Reason (R) is correct. The Cash Flow Statement exclusively deals with transactions that involve the movement of cash, which aligns with the cash basis of accounting, as opposed to the accrual basis used for the Income Statement and Balance Sheet.")
            )
        }
    ]
};


export default paper;

