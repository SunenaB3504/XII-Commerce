import { Question } from '../../types';
import React from 'react';

export const questions1to20: Question[] = [
  {
    id: '1',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold content-start" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct option from those given below:"),
      React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "Assertion (A):"), " The government can reduce the deflationary gap by purchasing government securities in the open market."),
      React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "Reason (R):"), " The Central Bank purchases government securities in the open market to increase the lending capacity of commercial banks."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."),
        React.createElement("li", null, "B. Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)."),
        React.createElement("li", null, "C. Assertion (A) is true, but Reason (R) is false."),
        React.createElement("li", null, "D. Assertion (A) is false, but Reason (R) is true.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Assertion (A) is false, but Reason (R) is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 3: Money and Banking | Topic: Quantitative Instruments (OMO)"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "Open Market Operations (buying/selling securities) are conducted by the ", React.createElement("strong", null, "Central Bank (RBI)"), ", not the Government."),
          React.createElement("li", null, "When RBI buys securities, it increases cash reserves of banks, thus increasing their lending capacity to fight deflation.")
        )
      )
    )
  },
  {
    id: '2',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "“The Cabinet led by Prime Minister has decided that the Central Government will provide free food grains to 81.35 crore (approx.) beneficiaries under the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) for a period of five years with effect from 1st January, 2024.”"),
      React.createElement("p", { className: "mt-2" }, "Based on the aforesaid statement, identify the budgetary objective the government is trying to achieve and choose the correct option:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Reallocation of resources"),
        React.createElement("li", null, "B. Economic stability"),
        React.createElement("li", null, "C. Redistribution of income"),
        React.createElement("li", null, "D. Economic instability")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Redistribution of income"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 5: Government Budget and the Economy | Topic: Objectives of Government Budget"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("p", null, "By providing free food grains to the poor, the government is effectively transferring purchasing power to the lower-income group. This reduction of inequalities through welfare schemes is called ", React.createElement("strong", null, "Redistribution of Income"), ".")
      )
    )
  },
  {
    id: '3',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "To arrive at the value of Gross Value Added at Market Price (GVAMP) ________ must be added to Gross Value Added (GVA) at Basic Prices."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Product Taxes"),
        React.createElement("li", null, "B. Net Product Taxes"),
        React.createElement("li", null, "C. Production Taxes"),
        React.createElement("li", null, "D. Net Production Taxes")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Net Product Taxes"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 2: National Income Accounting | Topic: Basic Prices vs Market Prices"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300" },
          React.createElement("code", { className: "text-black font-semibold" }, "GVAMP = GVA at Basic Prices + Net Product Taxes")
        ),
        React.createElement("p", { className: "mt-2" }, "Product taxes (like GST) are added to move from Basic Price to Market Price.")
      )
    )
  },
  {
    id: '4',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Under the ________ exchange rate system, market forces automatically adjust the surplus and deficit in the Balance of Payments account."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. fixed"),
        React.createElement("li", null, "B. flexible"),
        React.createElement("li", null, "C. managed floating"),
        React.createElement("li", null, "D. dirty floating")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. flexible"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 6: Balance of Payments | Topic: Exchange Rate Systems"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("p", null, "In a ", React.createElement("strong", null, "Flexible Exchange Rate"), " system, the rate is determined by demand and supply forces. If BOP is in deficit, currency depreciates automatically to correct it.")
      )
    )
  },
  {
    id: '5',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "For Visually Impaired Candidates: Under the Keynesian theory, ‘Reference Line’ is a straight line passing through the origin drawn at an angle of ________."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 25°"),
        React.createElement("li", null, "B. 45°"),
        React.createElement("li", null, "C. 55°"),
        React.createElement("li", null, "D. 75°")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. 45°"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 4: Determination of Income and Employment | Topic: Aggregate Supply (AS) Line"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("p", null, "The AS line (Income line) is a 45-degree line passing through the origin. At every point on this line, AS = AD.")
      )
    )
  },
  {
    id: '6',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "As per the data presented in the Union Budget 2023-24, the total receipts of the government other than borrowings and the total expenditure are estimated at ₹ 27.2 lakh crore and ₹ 45 lakh crore respectively. The value of the ________ deficit would be ₹ 17.8 lakh crore."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. revenue"),
        React.createElement("li", null, "B. fiscal"),
        React.createElement("li", null, "C. budgetary"),
        React.createElement("li", null, "D. primary")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. fiscal"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 5: Government Budget and the Economy | Topic: Measures of Government Deficit"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300" },
          React.createElement("code", { className: "text-black font-semibold" }, "Fiscal Deficit = Total Exp - Total Receipts (excl. borrowing)")
        ),
        React.createElement("p", { className: "mt-2" }, "45 - 27.2 = 17.8. This defines Fiscal Deficit.")
      )
    )
  },
  {
    id: '7',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-1" }, React.createElement("strong", null, "Statement 1:"), " The maximum value of Marginal Propensity to Consume (MPC) can be unity."),
      React.createElement("p", { className: "mt-1" }, React.createElement("strong", null, "Statement 2:"), " As the income of an economy increases, the proportionate increase in the level of consumption is always more than the increase in the level of income."),
      React.createElement("p", { className: "mt-2" }, "In light of the given statements, choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Statement 1 is true and Statement 2 is false."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 4: Determination of Income and Employment | Topic: Propensity to Consume"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, React.createElement("strong", null, "Statement 1:"), " True. If all extra income is spent, MPC = 1."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 2:"), " False. Keynes says people typically save a part of increase income, so MPC < 1.")
        )
      )
    )
  },
  {
    id: '8',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "In a two-sector economy, Aggregate Demand can be determined by adding ________."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Autonomous Consumption, Induced Consumption and Induced Investment"),
        React.createElement("li", null, "B. Autonomous Consumption, Autonomous Investment and Induced Investment"),
        React.createElement("li", null, "C. Autonomous Consumption and Autonomous Investment"),
        React.createElement("li", null, "D. Autonomous Consumption, Induced Consumption and Autonomous Investment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Autonomous Consumption, Induced Consumption and Autonomous Investment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 4: Determination of Income and Employment | Topic: Components of AD"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("p", null, "AD = C + I. Consumption (C) has autonomous and induced parts. Investment (I) is assumed autonomous in simple model. So sum is Autonomous C + Induced C + Autonomous I.")
      )
    )
  },
  {
    id: '9',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-1" }, React.createElement("strong", null, "Statement 1:"), " Foreign grants-in-aid receipts do not lead to any claim on the government."),
      React.createElement("p", { className: "mt-1" }, React.createElement("strong", null, "Statement 2:"), " Disposal of equity by the Public Sector Undertakings in the market may lead to a decrease in the assets of the government."),
      React.createElement("p", { className: "mt-2" }, "In light of the given statements, choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Both Statements 1 and 2 are true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 5: Government Budget and the Economy | Topic: Budget Receipts"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, React.createElement("strong", null, "Statement 1:"), " True. Grants are Revenue Receipts (No liability)."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 2:"), " True. Disinvestment reduces government assets.")
        )
      )
    )
  },
  {
    id: '10',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Based on the given diagram: The trade under current account during January 2024 reflects a ________ of USD ________ billion. [Data: Jan-2024 Exports = 69.72, Imports = 70.46]"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. surplus, 0.74"),
        React.createElement("li", null, "B. surplus, 3.85"),
        React.createElement("li", null, "C. deficit, 0.74"),
        React.createElement("li", null, "D. deficit, 3.85")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. deficit, 0.74"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium" },
          "Ref: Macro Chapter 6: Balance of Payments | Topic: Current Account Balance"
        ),
        React.createElement("h4", { className: "font-bold text-gray-800" }, "How It Works:"),
        React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300" },
          React.createElement("code", { className: "text-black font-semibold" }, "Balance = Exports - Imports = 69.72 - 70.46 = -0.74")
        ),
        React.createElement("p", { className: "mt-2" }, "Negative sign indicates a Deficit.")
      )
    )
  },
  {
    id: '11',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a feature of a mixed economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Private ownership"),
        React.createElement("li", null, "B. Government intervention"),
        React.createElement("li", null, "C. Price mechanism"),
        React.createElement("li", null, "D. Central planning only")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Central planning only"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A mixed economy combines elements of both market and planned economies, not just central planning.")
    )
  },
  {
    id: '12',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main cause of inflation is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Increase in money supply"),
        React.createElement("li", null, "B. Decrease in money supply"),
        React.createElement("li", null, "C. Constant money supply"),
        React.createElement("li", null, "D. Zero money supply")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Increase in money supply"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Inflation occurs when there is too much money chasing too few goods, leading to a general increase in price levels.")
    )
  },
  {
    id: '13',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a quantitative credit control measure?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Bank rate"),
        React.createElement("li", null, "B. Open market operations"),
        React.createElement("li", null, "C. Cash Reserve Ratio"),
        React.createElement("li", null, "D. Moral suasion")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Cash Reserve Ratio"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Cash Reserve Ratio is a quantitative measure as it specifies the percentage of deposits that banks must keep as reserves.")
    )
  },
  {
    id: '14',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The concept of 'Demonetization' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Printing new currency"),
        React.createElement("li", null, "B. Withdrawing old currency from circulation"),
        React.createElement("li", null, "C. Increasing money supply"),
        React.createElement("li", null, "D. Decreasing interest rates")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Withdrawing old currency from circulation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Demonetization involves declaring certain currency notes invalid and withdrawing them from circulation.")
    )
  },
  {
    id: '15',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a source of government revenue?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Taxes"),
        React.createElement("li", null, "B. Fees"),
        React.createElement("li", null, "C. Fines"),
        React.createElement("li", null, "D. Subsidies")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Subsidies"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Subsidies are government expenditures, not sources of revenue. Taxes, fees, and fines are sources of government revenue.")
    )
  },
  {
    id: '16',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the Five Year Plans was:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Economic liberalization"),
        React.createElement("li", null, "B. Economic planning and development"),
        React.createElement("li", null, "C. Foreign trade promotion"),
        React.createElement("li", null, "D. Agricultural exports")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Economic planning and development"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Five Year Plans were introduced to achieve planned economic development and growth through systematic planning.")
    )
  },
  {
    id: '17',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a measure of economic welfare?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Gross Domestic Product"),
        React.createElement("li", null, "B. Human Development Index"),
        React.createElement("li", null, "C. Balance of Payments"),
        React.createElement("li", null, "D. Foreign Exchange Reserves")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Human Development Index"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Human Development Index (HDI) measures economic welfare by considering health, education, and income indicators.")
    )
  },
  {
    id: '18',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The term 'Fiscal Policy' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Monetary policy of RBI"),
        React.createElement("li", null, "B. Government's taxation and expenditure policy"),
        React.createElement("li", null, "C. Foreign trade policy"),
        React.createElement("li", null, "D. Agricultural policy")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Government's taxation and expenditure policy"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Fiscal policy involves government decisions regarding taxation, public expenditure, and borrowing to influence economic activity.")
    )
  },
  {
    id: '19',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a non-tax revenue receipt?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Income tax"),
        React.createElement("li", null, "B. Corporation tax"),
        React.createElement("li", null, "C. Dividends from public sector enterprises"),
        React.createElement("li", null, "D. Service tax")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Dividends from public sector enterprises"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Non-tax revenue includes interest, dividends, fees, and fines received by the government from various sources.")
    )
  },
  {
    id: '20',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the National Rural Employment Guarantee Act (NREGA) is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Industrial development"),
        React.createElement("li", null, "B. Rural employment generation"),
        React.createElement("li", null, "C. Urban development"),
        React.createElement("li", null, "D. Foreign investment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Rural employment generation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "NREGA aims to provide at least 100 days of guaranteed wage employment to rural households for livelihood security.")
    )
  }
];