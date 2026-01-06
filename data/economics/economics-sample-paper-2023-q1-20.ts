import { Question } from '../../types';
import React from 'react';

export const questions1to20: Question[] = [
  {
    id: '1',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-2" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mb-1" }, "Statement 1: Consumption function assumes that, consumption changes at a constant rate as income changes."),
      React.createElement("p", { className: "mb-4" }, "Statement 2: Autonomous consumption is the ratio of total consumption (C) to total income (Y)."),
      React.createElement("p", { className: "font-semibold" }, "In light of the given statements, choose the correct alternative from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "b) Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "c) Both Statements 1 and 2 are true."),
        React.createElement("li", null, "d) Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Statement 1 is true and Statement 2 is false."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination | Topic: Consumption Function"),
        React.createElement("ul", { className: "list-disc pl-5 mt-1" },
          React.createElement("li", null, React.createElement("strong", null, "Statement 1 is True:"), " The consumption function (C = c̄ + bY) assumes a linear relationship where 'b' (MPC) represents the constant rate at which consumption changes with income."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 2 is False:"), " Autonomous consumption is the level of consumption when income is zero. The ratio of Total Consumption to Total Income (C/Y) is called Average Propensity to Consume (APC).")
        )
      )
    )
  },
  {
    id: '2',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "For a closed economy (with no foreign trade), which one of the following is correct?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) GDP = GNP"),
        React.createElement("li", null, "b) GDP > GNP"),
        React.createElement("li", null, "c) GDP < GNP"),
        React.createElement("li", null, "d) GDP + GNP=0")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) GDP = GNP"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 2: National Income Accounting | Topic: Aggregates"),
        React.createElement("p", null, "In a closed economy, there are no economic transactions with the rest of the world. Therefore, Net Factor Income from Abroad (NFIA) is zero. Since GNP = GDP + NFIA, if NFIA = 0, then GDP = GNP.")
      )
    )
  },
  {
    id: '3',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The value of ________ can be greater than one."),
      React.createElement("p", { className: "mb-2" }, "(Choose the correct alternative to fill up the blank)"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) Marginal Propensity to Consume"),
        React.createElement("li", null, "b) Average Propensity to Consume"),
        React.createElement("li", null, "c) Marginal Propensity to Save"),
        React.createElement("li", null, "d) Average Propensity to Save")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Average Propensity to Consume"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination | Topic: Consumption Function"),
        React.createElement("p", null, "Average Propensity to Consume (APC) = C/Y. At very low levels of income, consumption (C) can exceed income (Y) due to autonomous consumption (dissaving). When C > Y, the ratio C/Y becomes greater than 1.")
      )
    )
  },
  {
    id: '4',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "As per the Reserve Bank of India (RBI) press report, dated 29th December, 2022:"),
      React.createElement("p", { className: "italic my-2 border-l-4 border-gray-300 pl-2" }, "\"Net external commercial borrowings to India recorded an outflow of US$ 0.4 billion in the second quarter (2022-23)\""),
      React.createElement("p", { className: "font-semibold" }, "The above transaction will be recorded in the ________ account on ________ side of Balance of payments account of India. (Choose the correct alternative to fill up the blanks)"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) current, credit"),
        React.createElement("li", null, "b) current, debit"),
        React.createElement("li", null, "c) capital, credit"),
        React.createElement("li", null, "d) capital, debit")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) capital, debit"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 6: Balance of Payments | Topic: Capital Account"),
        React.createElement("ul", { className: "list-disc pl-5 mt-1" },
          React.createElement("li", null, React.createElement("strong", null, "Account:"), " External Commercial Borrowings (loans) impact assets/liabilities, so they are part of the Capital Account."),
          React.createElement("li", null, React.createElement("strong", null, "Side:"), " An 'outflow' of funds (repayment or lending abroad) means foreign exchange is leaving the country, which is recorded on the Debit (negative) side.")
        )
      )
    )
  },
  {
    id: '5',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "italic mb-2" }, "“The value of all goods and services can be expressed in monetary units.”"),
      React.createElement("p", { className: "font-semibold" }, "On the basis of the given statement, identify the function performed by money:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Medium of exchange"),
        React.createElement("li", null, "b) Store of Value"),
        React.createElement("li", null, "c) Unit of account"),
        React.createElement("li", null, "d) Means of standard of deferred payments")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Unit of account"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 3: Money & Banking | Topic: Functions of Money"),
        React.createElement("p", null, "The 'Unit of account' function implies that money measures the value of all goods and services. It provides a common denomination (like Rupee) to express the value, making comparisons and accounting possible.")
      )
    )
  },
  {
    id: '6',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-2" }, "Find the missing figures and choose the correct alternative:"),
      React.createElement("div", { className: "overflow-x-auto my-4" },
        React.createElement("table", { className: "min-w-full border-collapse border border-gray-400 text-sm text-center" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100 font-bold" },
              React.createElement("th", { className: "border border-gray-400 px-4 py-2" }, "Round"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2" }, "Deposits"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2" }, "Loans (80%)"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2" }, "Reserve Ratio (20%)")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "I"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "1,000"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "800"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "200")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "II"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "800"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "....(i)...."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "160")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ""),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ".."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ".."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "..")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ""),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ".."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, ".."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "..")
            ),
            React.createElement("tr", { className: "font-bold" },
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Total"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "...(ii)..."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "...(iii)..."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "...(iv)...")
            )
          )
        )
      ),
      React.createElement("p", { className: "font-semibold block mb-2" }, "Alternatives:"),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2" },
        React.createElement("p", null, "a) 640,1000,4000,5000"),
        React.createElement("p", null, "b) 960,5000,4000,1000"),
        React.createElement("p", null, "c) 640,4000,1000,5000"),
        React.createElement("p", null, "d) 640,5000,4000,1000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) 640,5000,4000,1000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 3: Money and Banking | Topic: Money Creation"),
        React.createElement("ul", { className: "list-disc pl-5 mt-1" },
          React.createElement("li", null, "(i) Loans in Round II = 80% of Deposits (800) = 640."),
          React.createElement("li", null, "Total Money Creation = Initial Deposits × (1/LRR). Here LRR = 20% = 0.2."),
          React.createElement("li", null, "(ii) Total Deposits = 1000 × (1/0.2) = 1000 × 5 = 5000."),
          React.createElement("li", null, "(iii) Total Loans = 800 × 5 = 4000 (or 80% of 5000)."),
          React.createElement("li", null, "(iv) Total Reserves = 200 × 5 = 1000 (or 20% of 5000).")
        )
      )
    )
  },
  {
    id: '7',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Graphically, Aggregate Demand function can be obtained by vertically adding the ______ and ______ function."),
      React.createElement("p", { className: "mb-2" }, "(Choose the correct alternative to fill up the blanks)"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) consumption, saving"),
        React.createElement("li", null, "b) consumption, investment"),
        React.createElement("li", null, "c) investment, saving"),
        React.createElement("li", null, "d) aggregate supply, consumption")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) consumption, investment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination | Topic: Aggregate Demand"),
        React.createElement("p", null, "Aggregate Demand (AD) in a two-sector economy is the sum of Consumption expenditure (C) and Investment expenditure (I). Graphically, the AD curve is the vertical summation of the C curve and the I curve.")
      )
    )
  },
  {
    id: '8',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the correct reason(s) that may affect the demand for foreign exchange in an economy."),
      React.createElement("ol", { className: "list-roman pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "I. Imports of visibles"),
        React.createElement("li", null, "II. Exports of invisibles"),
        React.createElement("li", null, "III. Remittances by residents working abroad"),
        React.createElement("li", null, "IV. Purchase of assets abroad")
      ),
      React.createElement("p", { className: "font-semibold mt-4" }, "Alternatives:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) I and II"),
        React.createElement("li", null, "b) II and III"),
        React.createElement("li", null, "c) III and IV"),
        React.createElement("li", null, "d) I and IV")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) I and IV"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 6: Foreign Exchange Rate | Topic: Demand for Foreign Exchange"),
        React.createElement("ul", { className: "list-disc pl-5 mt-1" },
          React.createElement("li", null, "Demand for foreign exchange arises when we need to make payments to the rest of the world."),
          React.createElement("li", null, "I. Imports of visibles (goods) requires payment in foreign currency -> Creates Demand."),
          React.createElement("li", null, "IV. Purchase of assets abroad (financial or physical) requires foreign currency -> Creates Demand."),
          React.createElement("li", null, "Exports (II) and Remittances from abroad (III) are sources of Supply, not Demand.")
        )
      )
    )
  },
  {
    id: '9',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Suppose for a given economy,"),
      React.createElement("p", { className: "ml-4" }, "S = -60 + 0.1Y"),
      React.createElement("p", { className: "ml-4" }, "I = Rs. 4,000 crore"),
      React.createElement("p", { className: "font-semibold mt-2" }, "(Where S = Saving Function, Y = National Income and I = Investment Expenditure)"),
      React.createElement("p", { className: "font-semibold mt-4" }, "Equilibrium level of Income would be:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) Rs. 4,000 crore"),
        React.createElement("li", null, "b) Rs. 40,000 crore"),
        React.createElement("li", null, "c) Rs. 40,600 crore"),
        React.createElement("li", null, "d) Rs. 60,000 crore")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Rs. 40,600 crore"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination | Topic: Equilibrium Income"),
        React.createElement("p", null, "At equilibrium, Saving (S) = Investment (I)."),
        React.createElement("p", null, "-60 + 0.1Y = 4000"),
        React.createElement("p", null, "0.1Y = 4000 + 60"),
        React.createElement("p", null, "0.1Y = 4060"),
        React.createElement("p", null, "Y = 4060 / 0.1 = 40,600 crore.")
      )
    )
  },
  {
    id: '10',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-4" }, "Read the following chart carefully and choose the correct alternative for the missing part (i):"),
      React.createElement("div", { className: "border p-4 bg-gray-50 flex flex-col items-center gap-4 text-sm" },
        React.createElement("div", { className: "border border-black p-2 bg-white font-bold" }, "Components of Capital Account"),
        React.createElement("div", { className: "flex gap-2 text-center" },
          React.createElement("div", { className: "flex flex-col items-center" },
            React.createElement("div", { className: "h-4 w-px bg-black" }),
            React.createElement("div", { className: "border border-black p-2 bg-white w-24" }, "Investments"),
            React.createElement("div", { className: "h-4 w-px bg-black" }),
            React.createElement("div", { className: "flex gap-2" },
              React.createElement("div", { className: "border border-black p-2 bg-white text-xs w-20" }, "Foreign Direct Investment"),
              React.createElement("div", { className: "border border-dashed border-black p-2 bg-white text-xs w-20 font-bold" }, "? (i)")
            )
          ),
          React.createElement("div", { className: "flex flex-col items-center" },
            React.createElement("div", { className: "h-4 w-px bg-black" }),
            React.createElement("div", { className: "border border-black p-2 bg-white w-24" }, "Borrowings (External)")
          ),
          React.createElement("div", { className: "flex flex-col items-center" },
            React.createElement("div", { className: "h-4 w-px bg-black" }),
            React.createElement("div", { className: "border border-black p-2 bg-white w-24" }, "External Assistance")
          )
        )
      ),
      React.createElement("p", { className: "font-semibold mt-4" }, "Alternatives:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) Export Receipt"),
        React.createElement("li", null, "b) Import Expenditure"),
        React.createElement("li", null, "c) Portfolio Investment"),
        React.createElement("li", null, "d) Unilateral Transfers")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Portfolio Investment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 6: Balance of Payments | Topic: Capital Account"),
        React.createElement("p", null, "Under Capital Account, 'Investments' are classified into two main categories: Foreign Direct Investment (FDI) and Portfolio Investment (FII). Therefore, the missing component is Portfolio Investment.")
      )
    )
  },
  {
    id: '11',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold italic mb-2" }, "‘Current account deficit in an economy must be financed by a corresponding capital account surplus’."),
      React.createElement("p", { className: "mb-2" }, "Do you agree with the given statement? Give valid reason(s) in support of your answer.")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, "Yes, the statement can be agreed upon."),
      React.createElement("p", null, "Since, in accounting sense; Current Account + Capital Account ≡ 0"),
      React.createElement("p", null, "If an economy is facing the situation of current account deficit (CAD), the same must be financed through surplus in capital account."),
      React.createElement("p", null, "CAD may be setoff through net capital inflows. Transactions like selling off assets or borrowing from abroad, may be instrumental in balancing CAD in Balance of Payments account.")
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 6: Balance of Payments | Topic: BOP Equilibrium"),
        React.createElement("p", null, "The BOP account must always balance in the accounting sense. A deficit in one account (Current) implies a net outflow of funds, which must be financed by a net inflow of funds in the other account (Capital), creating a surplus there.")
      )
    )
  },
  {
    id: '12',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-4" }, "(A) On the basis of the given data, estimate the value of Domestic Income:"),
      React.createElement("div", { className: "overflow-x-auto my-4" },
        React.createElement("table", { className: "min-w-full border-collapse border border-gray-400 text-sm" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100 font-bold" },
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-left" }, "S. No."),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-left" }, "Items"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-right" }, "Amount (₹ in crore)")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "i."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Household Consumption Expenditure"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "600")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "ii."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Gross Fixed Capital Formation"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "200")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "iii."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Change in stock"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "40")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "iv."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Government Final Consumption Expenditure"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "200")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "v."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Net Exports"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "(-) 40")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "vi."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Net Indirect Taxes"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "120")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "vii."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Net Factor Income From Abroad"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "20")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "viii."),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Consumption of Fixed Capital"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "40")
            )
          )
        )
      ),
      React.createElement("p", { className: "font-bold text-center my-4" }, "OR"),
      React.createElement("p", { className: "font-semibold block mb-2" }, "(B) State the meanings of the following:"),
      React.createElement("ul", { className: "list-none pl-6 space-y-2" },
        React.createElement("li", null, "(i) Externalities"),
        React.createElement("li", null, "(ii) Operating Surplus"),
        React.createElement("li", null, "(iii) Consumption Goods")
      )
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "(A)"),
        React.createElement("p", null, "Domestic Income (NDP at FC) = (i) + (iv) + (ii) + (iii) + (v) – (viii) – (vi)"),
        React.createElement("p", null, "= 600 + 200 + 200 + 40 + (-40) – 40 – 120"),
        React.createElement("p", null, "= ₹ 840 crore")
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "(B)"),
        React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "(i) Externalities –"), " Externalities refer to benefits (positive externalities)/ harms (negative externalities) which are caused by one entity to another without being paid/ penalised for it."),
        React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "(ii) Operating Surplus –"), " Operating Surplus is the sum total of rent, royalties, interest and profits. It is also known as non-wage income."),
        React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "(iii) Consumption goods –"), " Goods which are consumed by the ultimate consumers or households to satisfy their wants directly are called consumption goods.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 2: National Income Accounting | Topic: Expenditure Method"),
        React.createElement("p", null, "For Part A: GDPmp = C + G + I + (X-M). Here, I (Gross Investment) = GFCF + Change in Stock. So, GDPmp = 600 + 200 + (200+40) - 40 = 1000. NDPfc = GDPmp - Depreciation - NIT = 1000 - 40 - 120 = 840.")
      )
    )
  },
  {
    id: '13',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "For a hypothetical economy, the government incurs an investment expenditure of ₹ 1,000 crore. If the value of Marginal Propensity to Save (MPS) falls from 0.25 to 0.10."),
      React.createElement("p", { className: "mb-2" }, "Calculate the value of increase in income due to change in the value of Marginal Propensity to Save (MPS).")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, "Given, Change in Investment (ΔI) = ₹ 1,000 crore"),
      React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "min-w-full border-collapse border border-gray-400 text-sm md:text-base" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100 font-bold" },
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-center" }, "MPS"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-center" }, "Investment Multiplier (K = 1/MPS)"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-center" }, "Change in Income (ΔY = K x ΔI) (₹ in crore)")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "0.25"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "1/0.25 = 4"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "4 x 1,000 = 4,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "0.10"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "1/0.10 = 10"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-center" }, "10 x 1,000 = 10,000")
            )
          )
        )
      ),
      React.createElement("p", { className: "font-bold" }, "Increase in Income (ΔY) = 10,000 – 4,000 = ₹ 6,000 crore")
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination | Topic: Investment Multiplier"),
        React.createElement("p", null, "A decrease in MPS (from 0.25 to 0.10) increases the multiplier value (from 4 to 10), leading to a larger increase in National Income for the same initial investment.")
      )
    )
  },
  {
    id: '14',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold block mb-2" }, "(A) \"In an economy, ex-ante Aggregate Demand is more than ex-ante Aggregate Supply.\""),
      React.createElement("p", { className: "mb-2" }, "Elaborate the possible impact of the same, on the level of output, income and employment."),
      React.createElement("p", { className: "font-bold text-center my-4" }, "OR"),
      React.createElement("p", { className: "font-semibold block mb-2" }, "(B) \"With an objective to reduce inflation, Reserve Bank of India may promote the commercial banks to park their surplus funds with it.\""),
      React.createElement("p", { className: "mb-2" }, "Discuss the rationale behind the step taken by the Reserve Bank of India.")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "(A)"),
        React.createElement("p", null, "When ex-ante Aggregate Demand is more than ex-ante Aggregate Supply, it means that households are planning to consume more than what the firms expect them to. This will lead to unintended fall in inventories."),
        React.createElement("p", null, "To restore the desired /intended level of inventories, producers may expand production. As a result, there may be an increase in the level of output, employment and income in the economy.")
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "(B)"),
        React.createElement("p", null, "The given statement refers to the **Reverse Repo Rate**."),
        React.createElement("p", null, "Rationale: To reduce inflation, RBI needs to reduce the money supply. By increasing the Reverse Repo Rate, RBI encourages commercial banks to park their surplus funds with RBI to earn higher interest. This reduces the lending capacity of commercial banks, thereby reducing money supply in the economy and curbing inflation.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 4: Income Determination (Part A) / Macro Chapter 3: Money & Banking (Part B)"),
        React.createElement("p", null, "Part A describes the adjustment mechanism when AD > AS. Part B describes the use of Reverse Repo Rate as a tool for credit control.")
      )
    )
  },
  {
    id: '15',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "Elaborate the ‘Banker’s Bank and Supervisor’ function performed by the Reserve Bank of India.")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, "Central bank accepts the deposits from commercial banks and also advances loans to them as and when required. It maintains reserves of all commercial banks and utilizes it to settle inter-bank claims."),
      React.createElement("p", null, "Being the supreme authority of the banking system, it acts as the financier of last recourse to the commercial banks. It forwards short-term credit to the commercial banks against approved securities."),
      React.createElement("p", null, "The Central Bank supervises, regulates and controls the commercial banks. The regulation of banks includes their licensing, branch expansion, liquidity of assets, amalgamation, winding up etc.")
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 3: Money and Banking | Topic: Central Bank Functions"),
        React.createElement("p", null, "The RBI acts as a banker to banks by holding their reserves (CRR) and lending to them (Lender of Last Resort). As a supervisor, it ensures banks follow regulations regarding liquidity (SLR) and other prudential norms to ensure the stability of the banking system.")
      )
    )
  },
  {
    id: '16',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "(A) On the basis of given information, calculate the value of:"),
      React.createElement("p", { className: "mb-2" }, "(i) Fiscal deficit"),
      React.createElement("p", { className: "mb-2" }, "(ii) Primary deficit"),
      React.createElement("div", { className: "overflow-x-auto my-4" },
        React.createElement("table", { className: "min-w-full border-collapse border border-gray-400 text-sm" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100 font-bold" },
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-left" }, "S. No."),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-left" }, "Particulars"),
              React.createElement("th", { className: "border border-gray-400 px-4 py-2 text-right" }, "Amount (₹ in crore)")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "(i)"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Revenue Receipts"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "20")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "(ii)"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Capital Expenditure"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "15")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "(iii)"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Revenue Deficit"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "10")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "(iv)"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Non-debt creating capital receipts"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "50% of revenue receipts")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "(v)"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2" }, "Interest Payments"),
              React.createElement("td", { className: "border border-gray-400 px-4 py-2 text-right" }, "4")
            )
          )
        )
      ),
      React.createElement("p", { className: "font-semibold mb-2" }, "(B) State any two features of public goods."),
      React.createElement("p", { className: "font-bold text-center my-4" }, "OR"),
      React.createElement("p", { className: "font-semibold mb-2" }, "(C) Explain the economic stability objective of Government Budget."),
      React.createElement("p", { className: "font-semibold mb-2" }, "(D) ‘Under the Ayushmaan Bharat Scheme, the Government provides free medicines to the economically backward section of the society’. Identify and discuss the nature of the government expenditure indicated in the given statement.")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (A)"),
        React.createElement("p", null, "(i) Fiscal Deficit = Revenue Deficit + (Capital Expenditure - Non-debt creating capital receipts)"),
        React.createElement("p", null, "Wait, alternate formula: Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings)."),
        React.createElement("p", null, "Given: Revenue Deficit = 10. Revenue Receipts = 20. So, Revenue Expenditure = Revenue Receipts + Revenue Deficit = 20 + 10 = 30."),
        React.createElement("p", null, "Capital Expenditure = 15."),
        React.createElement("p", null, "Total Expenditure = 30 + 15 = 45."),
        React.createElement("p", null, "Non-debt creating capital receipts = 50% of 20 = 10."),
        React.createElement("p", null, "Total Receipts (non-debt) = Revenue Receipts + Non-debt capital receipts = 20 + 10 = 30."),
        React.createElement("p", null, "Fiscal Deficit = 45 - 30 = 15 crore."),
        React.createElement("p", null, "Alternatively via MS: Fiscal Deficit = (Revenue Deficit) + (Capital Expenditure) - (Non-debt Capital Receipts)? No, MS says: (iii) + (ii) - (iv) = 10 + 15 - (50/100 * 20) = 15. This implies Fiscal Deficit = Revenue Deficit + Capital Expenditure - Non-debt Capital Reciepts... Let's verify formula: FD = (Rev Exp + Cap Exp) - (Rev Rec + Non-debt Cap Rec). Rev Def = Rev Exp - Rev Rec => Rev Exp = Rev Def + Rev Rec. So FD = (Rev Def + Rev Rec + Cap Exp) - Rev Rec - Non-debt Cap Rec = Rev Def + Cap Exp - Non-debt Cap Rec. Yes, formula holds."),
        React.createElement("p", null, "(i) Fiscal Deficit = 10 + 15 - 10 = ₹ 15 crore."),
        React.createElement("p", null, "(ii) Primary Deficit = Fiscal Deficit - Interest Payments = 15 - 4 = ₹ 11 crore.")
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (B)"),
        React.createElement("p", null, "Two features of public goods are:"),
        React.createElement("ul", { className: "list-disc pl-6" },
          React.createElement("li", null, "Non-excludable"),
          React.createElement("li", null, "Non-rivalrous")
        )
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (C)"),
        React.createElement("p", null, "The government may need to correct the fluctuations (income, employment and prices) in the economy. These may depend upon the level of Aggregate Demand, which in turn depends upon the spending decision of households and firms. To stabilize the economy, under the state of inflation/deflation, Government may alter taxes/expenditure, accordingly.")
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (D)"),
        React.createElement("p", null, "Expenditure incurred by the government under Ayushmaan Bharat Scheme is **Revenue Expenditure**."),
        React.createElement("p", null, "Reason: It neither creates any asset nor reduces any liability of the government.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 5: Government Budget | Topic: Deficits & Objectives"),
        React.createElement("p", null, "Part A uses standard deficit formulas. Part B defines public goods (available to all, consumption by one doesn't reduce for others). Part C explains the stabilization function (fiscal policy). Part D identifies Revenue Expenditure used for social welfare which doesn't impact balance sheet assets/liabilities.")
      )
    )
  },
  {
    id: '17',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-2" }, "(a) Giving valid reasons, explain how the following would be treated while estimating domestic income?"),
      React.createElement("p", { className: "mb-2" }, "(i) Payment made by American tourist for goods purchased in India."),
      React.createElement("p", { className: "mb-2" }, "(ii) Tomatoes grown by Ms. Puja in her kitchen garden."),
      React.createElement("p", { className: "font-semibold mb-2" }, "(b) “Machine purchased by a firm is always a capital good.” Do you agree with the given statement? Give valid reasons for your answer.")
    ),
    solution: React.createElement("div", { className: "space-y-4" },
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (a)"),
        React.createElement("p", null, "(i) **Yes, it will be included** in domestic income as it is a part of the domestic territory of India. It corresponds to consumption expenditure within the domestic territory."),
        React.createElement("p", null, "(ii) **No, it will not be included** in domestic income as it is difficult to ascertain the market value of production for self-consumption (non-monetary transaction).")
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "font-semibold underline" }, "Part (b)"),
        React.createElement("p", null, "**No**, I do not agree with the given statement. A machine purchased by a firm is a capital good only if it is used for production purposes (investment). If it is purchased for resale, it is treated as an intermediate good.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: Macro Chapter 2: National Income Accounting | Topic: Domestic Income & Capital Goods"),
        React.createElement("p", null, "Domestic income includes all production within domestic territory. Non-monetary exchanges like kitchen gardening are usually excluded due to data difficulties. Capital goods are defined by end-use.")
      )
    )
  },
  {
    id: '18',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold text-center mb-2" }, "SECTION B - INDIAN ECONOMIC DEVELOPMENT"),
      React.createElement("p", { className: "font-semibold" }, "Identify the correct combination of the 'Goals of Indian Five Year Plans':"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Growth, Equality, Modernisation, Self-Reliance"),
        React.createElement("li", null, "b) Development, Equality, Modernisation, Sustainability"),
        React.createElement("li", null, "c) Good Health, Education, Modernisation, Sustainability"),
        React.createElement("li", null, "d) Growth, Equity, Modernisation, Self-Reliance")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Growth, Equity, Modernisation, Self-Reliance"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: IED Chapter 2: Indian Economy 1950-1990 | Topic: Goals of Planning"),
        React.createElement("p", null, "The four long-term goals of Five Year Plans in India were Growth, Modernisation, Self-Reliance, and Equity.")
      )
    )
  },
  {
    id: '19',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold italic mb-2" }, "‘China has performed exceedingly well in various health and economic indicators’."),
      React.createElement("p", { className: "mb-2" }, "Identify which of the following is not a health indicator?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Infant Mortality Rate (per 1000 live births)"),
        React.createElement("li", null, "b) Life Expectancy at Birth (years)"),
        React.createElement("li", null, "c) Percentage of people below poverty line (National)"),
        React.createElement("li", null, "d) Maternal Mortality Rate (per 1 lakh births)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Percentage of people below poverty line (National)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: IED Chapter 10: Comparative Development | Topic: Indicators"),
        React.createElement("p", null, "Infant Mortality Rate, Life Expectancy, and Maternal Mortality Rate are direct health indicators. Percentage of population below poverty line is an economic indicator, though it influences health.")
      )
    )
  },
  {
    id: '20',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The shackles of agriculture during the colonial rule were permanently broken by the Green Revolution that resulted from the application of ________."),
      React.createElement("p", { className: "mb-2" }, "I. High Yielding Varieties (HYV)"),
      React.createElement("p", { className: "mb-2" }, "II. Mechanization of Agriculture"),
      React.createElement("p", { className: "mb-2" }, "III. Chemical Fertilizers and Pesticides"),
      React.createElement("p", { className: "mb-2" }, "IV. Organic Fertilizers and Pesticides"),
      React.createElement("p", { className: "font-semibold mt-4" }, "Alternatives:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) I, II, IV"),
        React.createElement("li", null, "b) I, II, III"),
        React.createElement("li", null, "c) II, III, IV"),
        React.createElement("li", null, "d) I, III, IV")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) I, II, III"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("div", { className: "mt-2" },
        React.createElement("p", { className: "font-semibold text-sm mb-2" }, "Ref: IED Chapter 2: Indian Economy 1950-1990 | Topic: Green Revolution"),
        React.createElement("p", null, "Green Revolution was characterized by the use of HYV seeds, chemical fertilizers, pesticides, and mechanization. Organic fertilizers (IV) were not a primary component of the initial Green Revolution.")
      )
    )
  }
];