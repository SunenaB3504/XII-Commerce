import { Question } from '../../types';
import React from 'react';

export const questions25to30: Question[] = [
  {
    id: '25',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Circular Flow of Income' in a two-sector economy with the help of a suitable diagram."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Circular Flow of Income' in a three-sector economy with the help of a suitable diagram.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "The circular flow of income refers to the flow of money and goods/services between different sectors of the economy. In a two-sector economy, there are only two sectors: households and firms."),
        React.createElement("p", { className: "mt-2" }, "Households provide factor services (land, labour, capital, and entrepreneurship) to firms and receive factor payments (rent, wages, interest, and profit) in return. This constitutes the factor market."),
        React.createElement("p", { className: "mt-2" }, "Firms produce goods and services using the factor services provided by households and sell them to households in the goods market. Households spend their income on the purchase of goods and services from firms."),
        React.createElement("p", { className: "mt-2" }, "Thus, the money flows from households to firms as consumption expenditure and flows back from firms to households as factor payments, completing the circular flow."),
        React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/21.png", alt: "Circular Flow in Two-Sector Economy", className: "my-4 rounded-lg" })
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Explanation of flow from households to firms: 1 mark"),
        React.createElement("li", null, "Explanation of flow from firms to households: 1 mark"),
        React.createElement("li", null, "Explanation of real flow: 1 mark"),
        React.createElement("li", null, "Diagram: 1 mark")
      )
    )
  },
  {
    id: '26',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Investment Multiplier' with the help of a numerical example."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Consumption Function' with the help of a numerical example.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "The investment multiplier explains how an initial increase in investment leads to a larger increase in national income. It shows the relationship between investment and the resulting change in income."),
        React.createElement("p", { className: "mt-2" }, "The formula for investment multiplier (k) is:"),
        React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "k = 1 / (1 - MPC)"),
        React.createElement("p", { className: "mt-2" }, "Where MPC is Marginal Propensity to Consume."),
        React.createElement("p", { className: "mt-2" }, "Numerical Example: Suppose MPC = 0.8 and there is an increase in investment by ₹100 crore."),
        React.createElement("p", { className: "mt-2" }, "Investment Multiplier (k) = 1 / (1 - 0.8) = 1 / 0.2 = 5"),
        React.createElement("p", { className: "mt-2" }, "Total increase in income = k × Increase in investment = 5 × ₹100 crore = ₹500 crore"),
        React.createElement("p", { className: "mt-2" }, "The process works through successive rounds of spending:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "Round 1: Increase in investment = ₹100 crore → Increase in income = ₹100 crore"),
          React.createElement("li", null, "Round 2: Consumption from additional income = 0.8 × ₹100 = ₹80 crore → Increase in income = ₹80 crore"),
          React.createElement("li", null, "Round 3: Consumption from additional income = 0.8 × ₹80 = ₹64 crore → Increase in income = ₹64 crore"),
          React.createElement("li", null, "And so on..."),
          React.createElement("li", null, "Total increase in income = ₹100 + ₹80 + ₹64 + ... = ₹500 crore")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Definition of Investment Multiplier: 1 mark"),
        React.createElement("li", null, "Formula: 1 mark"),
        React.createElement("li", null, "Numerical example with calculation: 2 marks")
      )
    )
  },
  {
    id: '27',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Revenue Expenditure' and 'Capital Expenditure' with suitable examples."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Revenue Receipts' and 'Capital Receipts' with suitable examples.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "Revenue Expenditure refers to those expenditures of the government which neither create assets nor reduce liabilities. These expenditures are recurring in nature and are incurred for the normal functioning of the government."),
        React.createElement("p", { className: "mt-2" }, "Examples of Revenue Expenditure:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "Payment of salaries to government employees"),
          React.createElement("li", null, "Payment of interest on loans"),
          React.createElement("li", null, "Expenditure on maintenance of public buildings"),
          React.createElement("li", null, "Expenditure on subsidies")
        ),
        React.createElement("p", { className: "mt-2" }, "Capital Expenditure refers to those expenditures of the government which either create assets or reduce liabilities. These expenditures are non-recurring in nature and are incurred for the development and expansion of the economy."),
        React.createElement("p", { className: "mt-2" }, "Examples of Capital Expenditure:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "Expenditure on construction of roads and bridges"),
          React.createElement("li", null, "Expenditure on purchase of machinery and equipment"),
          React.createElement("li", null, "Expenditure on repayment of loans"),
          React.createElement("li", null, "Expenditure on investment in public enterprises")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Definition of Revenue Expenditure: 1 mark"),
        React.createElement("li", null, "Examples of Revenue Expenditure: 1 mark"),
        React.createElement("li", null, "Definition of Capital Expenditure: 1 mark"),
        React.createElement("li", null, "Examples of Capital Expenditure: 1 mark")
      )
    )
  },
  {
    id: '28',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Primary Functions' of money."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Secondary Functions' of money.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "The primary functions of money are the basic functions that money must perform to serve as money. These functions are:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Medium of Exchange: "), "Money acts as a medium of exchange, facilitating the exchange of goods and services. It eliminates the need for barter system and makes transactions easier."),
          React.createElement("li", null, React.createElement("strong", null, "Unit of Account: "), "Money serves as a unit of account or measure of value. It provides a common measure for expressing the value of goods and services in terms of money."),
          React.createElement("li", null, React.createElement("strong", null, "Store of Value: "), "Money serves as a store of value, allowing people to store purchasing power for future use. It can be kept for future transactions without losing its value.")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Medium of Exchange: 1 mark"),
        React.createElement("li", null, "Unit of Account: 1 mark"),
        React.createElement("li", null, "Store of Value: 2 marks")
      )
    )
  },
  {
    id: '29',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Current Account' of the Balance of Payments with its components."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Capital Account' of the Balance of Payments with its components.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "The Current Account of the Balance of Payments records all those international economic transactions of a country that occur within a given period of time, usually a year, and involve a change in the ownership of goods, services, and income transfers."),
        React.createElement("p", { className: "mt-2" }, "The components of Current Account are:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Balance of Trade: "), "It records the value of exports and imports of visible items (goods) of a country."),
          React.createElement("li", null, React.createElement("strong", null, "Balance of Services: "), "It records the value of exports and imports of invisible items (services) like tourism, shipping, insurance, etc."),
          React.createElement("li", null, React.createElement("strong", null, "Balance of Income: "), "It records the income received from abroad (like interest, dividends, profits) and payments made abroad."),
          React.createElement("li", null, React.createElement("strong", null, "Balance of Transfers: "), "It records unilateral transfers like gifts, remittances, foreign aid, etc., received from or paid to abroad.")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Definition of Current Account: 1 mark"),
        React.createElement("li", null, "Components (any four): 3 marks (½ mark each)")
      )
    )
  },
  {
    id: '30',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Explain the 'Demand-Pull Inflation' with the help of a suitable diagram."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "Explain the 'Cost-Push Inflation' with the help of a suitable diagram.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "Demand-pull inflation occurs when the Aggregate Demand (AD) increases at a faster rate than the Aggregate Supply (AS), leading to a rise in the general price level."),
        React.createElement("p", { className: "mt-2" }, "In the given diagram, initially the economy is in equilibrium at point E where AD intersects AS at the full employment level of output (Yf)."),
        React.createElement("p", { className: "mt-2" }, "When AD increases from AD to AD1, it intersects AS at point E1, resulting in a higher level of output (Y1) and higher price level (P1). This leads to demand-pull inflation."),
        React.createElement("p", { className: "mt-2" }, "The causes of demand-pull inflation include:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "Increase in consumption expenditure"),
          React.createElement("li", null, "Increase in investment expenditure"),
          React.createElement("li", null, "Increase in government expenditure"),
          React.createElement("li", null, "Increase in export earnings")
        ),
        React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/22.png", alt: "Demand-Pull Inflation Diagram", className: "my-4 rounded-lg" })
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Definition of Demand-pull inflation: 1 mark"),
        React.createElement("li", null, "Explanation with diagram: 2 marks"),
        React.createElement("li", null, "Causes: 1 mark")
      )
    )
  }
];