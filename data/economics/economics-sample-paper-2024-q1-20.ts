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
      React.createElement("p", { className: "font-semibold block mb-4" }, "Based on the given diagram:"),
      React.createElement("div", { className: "flex justify-center mb-4" },
        React.createElement("img", {
          src: "/images/economics-2024-q10.png",
          alt: "Current Account Trade Data Jan 2023 vs Jan 2024",
          className: "max-w-full h-auto border rounded shadow-sm"
        })
      ),
      React.createElement("p", { className: "font-semibold" }, "The trade under current account during January 2024 reflects a ________ of USD ________ billion."),
      React.createElement("p", { className: "text-sm text-gray-600 mt-1" }, "[Data: Jan-2024 Exports = 69.72, Imports = 70.46]"),
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
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-4" }, "(A) On the basis of the given data, estimate the value of Domestic Income (NDPFC):"),
      React.createElement("div", { className: "flex justify-center mb-4" },
        React.createElement("img", {
          src: "/images/economics-2024-q11-data.png",
          alt: "Data for NDPfc Calculation",
          className: "max-w-full h-auto border rounded shadow-sm"
        })
      ),
      React.createElement("p", { className: "font-semibold block mb-4 mt-4" }, "OR"),
      React.createElement("p", { className: "font-semibold" }, "(B) State the steps pertaining to the estimation of National Income under the income method.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold underline" }, "Part (A): Domestic Income (NDPfc)"),
          React.createElement("p", null, "₹ 1,750 crore")
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold underline" }, "Part (B): Steps for Income Method"),
          React.createElement("ol", { className: "list-decimal pl-6 space-y-1" },
            React.createElement("li", null, "Identify and classify production units."),
            React.createElement("li", null, "Estimate Factor Incomes (COE + OS + MI)."),
            React.createElement("li", null, "Sum up to get NDPfc."),
            React.createElement("li", null, "Add NFIA to get National Income.")
          )
        )
      )
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 2: National Income Accounting | Topic: Expenditure Method"
        ),
        React.createElement("div", { className: "space-y-3" },
          React.createElement("p", { className: "font-medium" }, "Part (A) Calculation Logic:"),
          React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300 font-mono text-sm" },
            "GDPmp = C + G + I + (X-M)"
          ),
          React.createElement("ul", { className: "list-disc pl-5 text-gray-700 space-y-1" },
            React.createElement("li", null, "C (Household Consumption) = 800"),
            React.createElement("li", null, "G (Govt Consumption) = 170"),
            React.createElement("li", null, "I (Gross Investment) = Business(150) + Res(120) + Inv(140) + Public(500) = 910"),
            React.createElement("li", null, "(X-M): Excess of Imports(20) means Net Exports = -20")
          ),
          React.createElement("p", { className: "font-semibold mt-2" }, "Step 1: GDPmp = 800 + 170 + 910 + (-20) = 1860"),
          React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300 font-mono text-sm mt-2" },
            "NDPfc = GDPmp - Dep - NIT"
          ),
          React.createElement("p", null, "NDPfc = 1860 - 40 - 70 = 1750 crore.")
        )
      )
    ),
  },
  {
    id: '12',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Tax revenue collection of the government may be categorized under two heads.\" State and explain the two heads of tax revenue.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer: Direct Taxes and Indirect Taxes"),
      React.createElement("ul", { className: "list-disc pl-6 space-y-2" },
        React.createElement("li", null, React.createElement("span", { className: "font-semibold" }, "Direct Taxes:"), " Liability and burden fall on the same person (e.g., Income Tax)."),
        React.createElement("li", null, React.createElement("span", { className: "font-semibold" }, "Indirect Taxes:"), " Liability and burden can be shifted (e.g., GST).")
      )
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 5: Government Budget | Topic: Tax Revenue"
        ),
        React.createElement("ul", { className: "list-disc pl-5 text-gray-700 space-y-2" },
          React.createElement("li", null,
            React.createElement("span", { className: "font-semibold" }, "Direct Tax:"),
            " Progressive in nature. Examples: Corporate Tax, Income Tax."
          ),
          React.createElement("li", null,
            React.createElement("span", { className: "font-semibold" }, "Indirect Tax:"),
            " Regressive in nature. Examples: GST, Customs Duty."
          )
        )
      )
    ),
  },
  {
    id: '13',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-4" }, "(I) ‘Foreign Portfolio Investment (FPI) witnessed a sharp turnaround during 2023-24 with net FPI inflows of US$ 32.4 billion.’ In which sub-account and on which side of the Balance of Payments account the above transaction will be recorded? Give reasons in support of your answer."),
      React.createElement("p", { className: "font-semibold" }, "(II) State the meaning of ‘Balance of Payments Deficit’.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("ul", { className: "list-decimal pl-6 space-y-2" },
        React.createElement("li", null,
          React.createElement("span", { className: "font-semibold" }, "(I) Capital Account, Credit Side."),
          " Justification: FPI affects asset/liability status (Capital) and inflow of forex is recorded on Credit (+)."
        ),
        React.createElement("li", null,
          React.createElement("span", { className: "font-semibold" }, "(II) BOP Deficit:"),
          " When Autonomous Payments > Autonomous Receipts."
        )
      )
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 6: Balance of Payments | Topic: Capital Account & Deficit"
        ),
        React.createElement("p", { className: "text-gray-700" },
          "FPI represents foreign investment in financial assets (stocks/bonds). Since it creates a liability/asset change, it goes to Capital Account. 'Inflows' mean money coming in, hence Credit (+)."
        )
      )
    ),
  },
  {
    id: '14',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-4" }, "(A) “Saving curve can be derived from the consumption curve” Justify the statement, citing valid steps with the help of a well-labelled diagram."),
      React.createElement("p", { className: "block font-bold my-2" }, "OR"),
      React.createElement("p", { className: "mb-2" }, "(B) For two hypothetical economies A and B, the value of MPC stands at 0.6 and 0.8 respectively. Assuming Autonomous Consumption (c bar) to be ₹ 40 crore and Investment Expenditure (I) to be ₹ 100 crore, calculate:"),
      React.createElement("ul", { className: "list-none pl-6" },
        React.createElement("li", null, "(I) Break-even level of income for Economy A"),
        React.createElement("li", null, "(II) Equilibrium level of income for Economy B")
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("div", { className: "space-y-2" },
        React.createElement("p", null, React.createElement("span", { className: "font-semibold" }, "(A) Steps:"), " 1. Draw C-curve. 2. Draw 45-degree line. 3. At intersection (C=Y), S=0. 4. Derive S-curve starting from -C bar."),
        React.createElement("p", null, React.createElement("span", { className: "font-semibold" }, "(B) I:"), " Economy A (Y) = 100 crore."),
        React.createElement("p", null, React.createElement("span", { className: "font-semibold" }, "(B) II:"), " Economy B (Y) = 700 crore.")
      )
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 4: Income Determination | Topic: Consumption Function"
        ),
        React.createElement("div", { className: "space-y-2" },
          React.createElement("p", { className: "font-semibold" }, "Calculations For (B):"),
          React.createElement("div", null,
            React.createElement("p", { className: "font-semibold" }, "Economy A (Break-even C=Y):"),
            React.createElement("p", { className: "font-mono text-sm" }, "Y = 40 + 0.6Y => 0.4Y = 40 => Y = 100")
          ),
          React.createElement("div", null,
            React.createElement("p", { className: "font-semibold" }, "Economy B (Equilibrium Y=C+I):"),
            React.createElement("p", { className: "font-mono text-sm" }, "Y = 40 + 0.8Y + 100 => 0.2Y = 140 => Y = 700")
          )
        )
      )
    ),
  },
  {
    id: '15',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-4 italic" },
        "Read the following text carefully: “Union Finance Minister stated, that investments in infrastructure and productive capacity have a large multiplier impact on growth and employment and in view of this, capital investment outlay is being proposed to increase steeply in the Budget 2023-24 by 1,000 crore.”"
      ),
      React.createElement("p", { className: "font-semibold" }, "Based on the given text and common understanding, explain the working process of the increase in investment on the National Income, assuming the Marginal Propensity to Save (MPS) as 20%.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("p", null, "The investment multiplier mechanism shows a total increase in National Income of ₹ 5,000 crore.")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 4: Multiplier | Topic: Working of Multiplier"
        ),
        React.createElement("ul", { className: "list-disc pl-5 text-gray-700 space-y-2" },
          React.createElement("li", null, "Formula: K = 1/MPS = 1/0.2 = 5"),
          React.createElement("li", null, "Total ΔY = K × ΔI = 5 × 1,000 = 5,000 crore"),
          React.createElement("li", null, "Process: Initial Inv (1000) -> Generates Income (1000) -> Consumption (0.8*1000=800) -> New Income (800)... Process continues.")
        )
      )
    ),
  },
  {
    id: '16',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-4 italic text-sm text-gray-600 bg-gray-50 p-2 rounded" },
        "Read the following text carefully: As societies developed from hunters and gatherers... [Text on Barter, Coins, CBDC]... Source: RBI (adapted)."
      ),
      React.createElement("p", { className: "mb-2 font-semibold" }, "(I) “Over the centuries, money has evolved in various forms.” In the light of the given statement, state and discuss briefly any two forms of money."),
      React.createElement("p", { className: "font-semibold" }, "(II) “Various economists have formed a strong opinion that, in the modern times digital currency (like CBDC) is quite essential. However, it comes with its own benefits and potential risks.” Do you agree with the given statement, giving valid arguments in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("p", { className: "mb-2" }, React.createElement("span", { className: "font-bold" }, "(I) Forms:"), " Commodity Money (intrinsic value like shells) and Metallic/Paper Money (standardized value)."),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "(II) Yes, agreed."), " CBDC offers benefits like reduced cash cost and settlement risk, but carries risks like cyber-attacks.")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 3: Money & Banking | Topic: Evolution of Money"
        ),
        React.createElement("p", { className: "text-gray-700" },
          "Evolution traces from Barter -> Commodity Money -> Metallic Money -> Paper Money -> Digital Money (CBDC)."
        )
      )
    ),
  },
  {
    id: '17',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "(A)"),
      React.createElement("p", { className: "mb-2" }, "(I) On the basis of the following hypothetical data (refer attached image): Calculate the percentage change in Real Gross Domestic Product in the year 2023 using 2020 as the base year."),
      React.createElement("div", { className: "flex justify-center mb-4" },
        React.createElement("img", {
          src: "/images/economics-2024-q17-data.png",
          alt: "Real GDP Data Table",
          className: "max-w-full h-auto border rounded shadow-sm"
        })
      ),
      React.createElement("p", { className: "mb-4" }, "(II) “The public investment on the construction of a multi-lane flyover may reduce traffic congestion.” On the basis of the above statement, discuss its likely impact on Gross Domestic Product (GDP) and welfare in an economy."),
      React.createElement("p", { className: "font-bold block my-2" }, "OR"),
      React.createElement("p", { className: "font-semibold mb-2" }, "(B)"),
      React.createElement("p", { className: "mb-2" }, "(I) “Basis of classification of final goods into consumption and capital goods depend on the economic nature of its use.” Defend or refute the statement, with the help of a suitable example."),
      React.createElement("p", null, "(II) ‘Natural calamities in the hill states of India have led to massive destruction of capital assets.’ Identify the type of loss (depreciation or capital loss) indicated in the aforesaid statement. Give valid reasons in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Answer:"),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "A(I):"), " 12.5%"),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "A(II):"), " Positive impact on GDP (Investment) and Welfare (Well-being/Time saving)."),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "B(I):"), " Defended. End-use determines type (e.g., Car)."),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "B(II):"), " Capital Loss (Unforeseen).")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: Macro Chapter 2: National Income | Topic: Real GDP & Extenalies"
        ),
        React.createElement("div", { className: "space-y-2" },
          React.createElement("p", { className: "font-semibold" }, "Calculation A(I):"),
          React.createElement("p", { className: "font-mono text-sm" }, "Real GDP 2023 = 4,500"),
          React.createElement("p", { className: "font-mono text-sm" }, "Real GDP 2020 = 4,000"),
          React.createElement("p", { className: "font-mono text-sm" }, "% Change = (500 / 4000) * 100 = 12.5%")
        )
      )
    ),
  },
  {
    id: '18',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-4" }, "Read the given image carefully: Choose the correct option which indicates the combination of vital functions performed by the environment."),
      React.createElement("div", { className: "flex justify-center mb-4" },
        React.createElement("img", {
          src: "/images/economics-2024-q18-diagram.png",
          alt: "Functions of Environment Diagram",
          className: "max-w-full h-auto border rounded shadow-sm"
        })
      ),
      React.createElement("ul", { className: "list-none pl-6 space-y-1" },
        React.createElement("li", null, "i. Sustains life"),
        React.createElement("li", null, "ii. Provides aesthetic services"),
        React.createElement("li", null, "iii. Generates waste"),
        React.createElement("li", null, "iv. Provides only renewable resources"),
        React.createElement("br"),
        React.createElement("li", { className: "font-semibold" }, "Options:"),
        React.createElement("li", null, "A. (i) and (ii)"),
        React.createElement("li", null, "B. (ii) and (iii)"),
        React.createElement("li", null, "C. (i) and (iv)"),
        React.createElement("li", null, "D. (i) and (iii)")
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Correct Answer: A. (i) and (ii)")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: IED Chapter 9: Environment | Topic: Functions of Environment"
        ),
        React.createElement("ul", { className: "list-disc pl-5 text-gray-700 space-y-1" },
          React.createElement("li", null, "Environment Sustains life (Genetic diversity)."),
          React.createElement("li", null, "It Provides aesthetic services (Scenery)."),
          React.createElement("li", null, "It Assimilates waste (doesn't generate it)."),
          React.createElement("li", null, "It Provides both renewable and non-renewable resources.")
        )
      )
    ),
  },
  {
    id: '19',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "Statement 1:"), " The British policies led to the collapse of India’s world-famous handicraft industries."),
      React.createElement("p", { className: "mb-4" }, React.createElement("span", { className: "font-bold" }, "Statement 2:"), " During the colonial rule in India, the contribution of the industrial sector to Gross Value Added (GVA) increased significantly."),
      React.createElement("p", { className: "font-semibold mb-2" }, "In light of the given statements, choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 space-y-1" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false")
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Correct Answer: A. Statement 1 is true and Statement 2 is false.")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: IED Chapter 1: Eve of Independence | Topic: Industrial Sector"
        ),
        React.createElement("p", { className: "text-gray-700" },
          "British discriminatory tariff policies destroyed Indian handicrafts (Statement 1 True). The modern industrial sector's growth was very slow and contribution to GVA was low, not significant (Statement 2 False)."
        )
      )
    ),
  },
  {
    id: '20',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct option from those given below:"),
      React.createElement("p", { className: "mb-1" }, React.createElement("span", { className: "font-bold" }, "Assertion (A):"), " The Education Commission (1964–66) had recommended that at least 4 % of Gross Domestic Product (GDP) be spent on education."),
      React.createElement("p", { className: "mb-4" }, React.createElement("span", { className: "font-bold" }, "Reason (R):"), " The Union and State Governments, have been stepping up expenditures in the education sector over the years to fulfil the objective of attaining cent per cent literacy."),
      React.createElement("ul", { className: "list-none pl-6 space-y-1" },
        React.createElement("li", null, "A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."),
        React.createElement("li", null, "B. Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)."),
        React.createElement("li", null, "C. Assertion (A) is true, but Reason (R) is false."),
        React.createElement("li", null, "D. Assertion (A) is false, but Reason (R) is true.")
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Correct Answer: D. Assertion (A) is false, but Reason (R) is true.")
    ),
    explanation: React.createElement("div", { className: "mt-4 space-y-4" },
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
        React.createElement("p", { className: "text-blue-800 font-semibold mb-2" }, "How It Works:"),
        React.createElement("p", { className: "text-sm text-gray-700 font-medium mb-3" },
          "Ref: IED Chapter 5: Human Capital Formation | Topic: Education Expenditure"
        ),
        React.createElement("p", { className: "text-gray-700" },
          "The Education Commission (1964-66) recommended 6% of GDP, not 4% (Assertion False). Government expenditure has theoretically increased to achieve literacy goals (Reason True)."
        )
      )
    ),
  },
];