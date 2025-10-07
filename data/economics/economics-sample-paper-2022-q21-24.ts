import { Question } from '../../types';
import React from 'react';

export const questions21to24: Question[] = [
  {
    id: '21',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the concept of 'Deflationary Gap' with the help of a diagram."),
      React.createElement("p", { className: "mt-2 text-sm text-gray-600" }, "[3 marks]")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Deflationary gap occurs when aggregate demand is less than aggregate supply at full employment level."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Definition"),
      React.createElement("p", { className: "mt-2" }, "Deflationary gap is the difference between the actual aggregate demand and the aggregate demand required to establish full employment equilibrium."),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Diagram Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "In the diagram, AD represents aggregate demand curve"),
        React.createElement("li", null, "AS represents aggregate supply curve (45° line)"),
        React.createElement("li", null, "Full employment level is shown at point E where AD = AS"),
        React.createElement("li", null, "If AD is at AD1, there is deflationary gap equal to distance between E and E1")
      ),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Causes"),
      React.createElement("p", { className: "mt-2" }, "Excessive saving, decrease in investment, fall in exports, etc.")
    )
  },
  {
    id: '22',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Distinguish between 'Revenue Expenditure' and 'Capital Expenditure'."),
      React.createElement("p", { className: "mt-2 text-sm text-gray-600" }, "[3 marks]")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Revenue expenditure is recurring in nature and does not create assets, while capital expenditure is non-recurring and creates assets."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Revenue Expenditure"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Spent on day-to-day running of government"),
        React.createElement("li", null, "Recurring in nature"),
        React.createElement("li", null, "Does not create assets or reduce liabilities"),
        React.createElement("li", null, "Examples: salaries, pensions, interest payments, subsidies")
      ),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Capital Expenditure"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Spent on creation of assets or reduction of liabilities"),
        React.createElement("li", null, "Non-recurring in nature"),
        React.createElement("li", null, "Creates assets or reduces liabilities"),
        React.createElement("li", null, "Examples: construction of roads, purchase of machinery, repayment of loans")
      )
    )
  },
  {
    id: '23',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the meaning of 'Balance of Payments'."),
      React.createElement("p", { className: "mt-2 text-sm text-gray-600" }, "[3 marks]")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Balance of Payments is a systematic record of all economic transactions between residents of a country and the rest of the world during a given period."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Components"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Current Account:"), " Records transactions in goods, services, income and current transfers"),
        React.createElement("li", null, React.createElement("b", null, "Capital Account:"), " Records transactions in financial assets and liabilities"),
        React.createElement("li", null, React.createElement("b", null, "Errors and Omissions:"), " Accounting difference between the two accounts")
      ),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Significance"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Shows economic relations with other countries"),
        React.createElement("li", null, "Helps in formulating trade and exchange rate policies"),
        React.createElement("li", null, "Indicates economic health and competitiveness")
      )
    )
  },
  {
    id: '24',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the role of commercial banks in the economy."),
      React.createElement("p", { className: "mt-2 text-sm text-gray-600" }, "[3 marks]")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Commercial banks accept deposits, provide loans, and facilitate payments in the economy."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Primary Functions"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Accepting Deposits:"), " Current, savings, and fixed deposits from public"),
        React.createElement("li", null, React.createElement("b", null, "Granting Loans:"), " Provide credit to businesses and individuals"),
        React.createElement("li", null, React.createElement("b", null, "Overdraft Facilities:"), " Allow customers to overdraw their accounts")
      ),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Secondary Functions"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Agency Functions:"), " Collection of cheques, dividends, and interest"),
        React.createElement("li", null, React.createElement("b", null, "General Utility Functions:"), " Safe deposit lockers, foreign exchange services"),
        React.createElement("li", null, React.createElement("b", null, "Credit Creation:"), " Through deposit multiplier, expand money supply")
      )
    )
  }
];