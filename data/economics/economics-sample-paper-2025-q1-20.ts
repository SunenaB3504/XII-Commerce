import { Question } from '../../types';
import React from 'react';

export const questions1to20: Question[] = [
  {
    id: '1',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "With reference to the given diagram, which of the following is true at point B?"),
      React.createElement("img", { src: "/consumption-curve.png", alt: "Consumption Curve", className: "my-4 rounded-lg" }),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Slope of Consumption Curve = 0"),
        React.createElement("li", null, "B. Average Propensity to Consume = 0"),
        React.createElement("li", null, "C. Slope of Saving Curve = 1"),
        React.createElement("li", null, "D. Average Propensity to Consume = 1")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Average Propensity to Consume = 1"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium mb-2" },
          "Ref: Chapter 4: Determination of Income and Employment | Topic: Consumption Function"
        ),
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Concept:"), " The Break-even Point is the level of income where consumption equals income (C = Y)."),
          React.createElement("li", null, React.createElement("strong", null, "Graph Analysis:"), " Point B is the intersection of the Consumption Curve (CC') and the 45° Income Line. Here, the vertical distance (Consumption) equals the horizontal distance (Income)."),
          React.createElement("li", null, React.createElement("strong", null, "Calculation:"), " APC = C / Y. Since C = Y at point B, APC = 1.")
        ),
        React.createElement("p", { className: "text-sm text-gray-600 italic" }, "Note: Slope of Consumption Curve represents MPC, not necessarily 0 or 1.")
      )
    )
  },
  {
    id: '2',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Real Gross Domestic Product (GDP) is estimated to attain a level of ₹173.82 lakh crore in the year 2023-24. The corresponding Nominal GDP is estimated to stand at ₹295.36 lakh crore in the same year.\""),
      React.createElement("p", { className: "mt-2" }, "On the basis of the given data, the value of GDP deflator would be _____."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 295.36"),
        React.createElement("li", null, "B. 58.85"),
        React.createElement("li", null, "C. 169.92"),
        React.createElement("li", null, "D. 173.82")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. 169.92"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium mb-2" },
          "Ref: Chapter 2: National Income Accounting | Topic: Real and Nominal GDP"
        ),
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("p", null, "The GDP Deflator is a price index reflecting the overall price level of goods/services in GDP."),
        React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300" },
          React.createElement("p", { className: "font-mono text-sm text-black font-semibold" }, "Formula: GDP Deflator = (Nominal GDP / Real GDP) × 100")
        ),
        React.createElement("p", { className: "font-semibold" }, "Calculation:"),
        React.createElement("ul", { className: "list-disc pl-5" },
          React.createElement("li", null, "Nominal GDP = ₹295.36 lakh crore"),
          React.createElement("li", null, "Real GDP = ₹173.82 lakh crore"),
          React.createElement("li", null, "Deflator = (295.36 / 173.82) × 100 = 1.6992 × 100 = 169.92")
        )
      )
    )
  },
  {
    id: '3',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Money is non-perishable and is acceptable to anyone at any point of time.\""),
      React.createElement("p", { className: "mt-2" }, "Identify, the function of money indicated in the aforesaid statement and choose the correct option."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Store of Value"),
        React.createElement("li", null, "B. Medium of Exchange"),
        React.createElement("li", null, "C. Unit of Account"),
        React.createElement("li", null, "D. Standard of Deferred Payments")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Store of Value"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Concept (Store of Value):"), " Money facilitates the transfer of purchasing power from the present to the future. It allows individuals to save wealth."),
          React.createElement("li", null, React.createElement("strong", null, "Application:"), " The statement \"Money is non-perishable and is acceptable to anyone at any point of time\" highlights its durability and universal acceptability, which are key requirements for storing value effectively.")
        )
      )
    )
  },
  {
    id: '4',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, "Statement 1: Devaluation of currency is said to occur when the exchange rate is decreased under the Fixed Exchange Rate System."),
      React.createElement("p", { className: "mt-2" }, "Statement 2: Under the Floating Exchange Rate System, competent authorities do not maintain foreign exchange reserves."),
      React.createElement("p", { className: "mt-4 font-semibold" }, "In light of the given statements, choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Statement 1 is false and Statement 2 is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Statement 1 (False):"), " In a Fixed Exchange Rate System, when the government intentionally increases the exchange rate (making domestic currency cheaper), it is called Devaluation. The statement incorrectly says 'decreased'."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 2 (True):"), " In a Floating Exchange Rate System, exchange rates are determined by market forces (demand/supply). Competent authorities (Central Bank) do not maintain forex reserves to influence the rate.")
        )
      )
    )
  },
  {
    id: '5',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Refer to the given diagram carefully:"),
      React.createElement("img", { src: "/circular-flow-diagram.png", alt: "Circular Flow Diagram", className: "my-4 rounded-lg" }),
      React.createElement("p", { className: "mt-2" }, "The arrows C and D represent ______ Market."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Factor"),
        React.createElement("li", null, "B. Goods"),
        React.createElement("li", null, "C. Stock"),
        React.createElement("li", null, "D. Financial")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Factor"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("p", null, "The Circular Flow Model divides the economy into two main markets:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, React.createElement("strong", null, "Product Market (Top):"), " Flow of Goods/Services and Consumption Expenditure."),
          React.createElement("li", null, React.createElement("strong", null, "Factor Market (Bottom):"), " Flow of Factor Services (Arrow C: Households to Firms) and Factor Payments (Arrow D: Firms to Households).")
        ),
        React.createElement("p", null, "Since arrows C and D relate to the exchange of factor services for factor payments (Rent, Wages, Interest, Profit), they represent the Factor Market.")
      )
    )
  },
  {
    id: '6',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Deflationary Gap refers to the gap by which ___________ falls short of the Aggregate Demand required to establish full employment equilibrium."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ex-ante Aggregate Demand"),
        React.createElement("li", null, "B. ex-post Aggregate Demand"),
        React.createElement("li", null, "C. ex-ante Aggregate Supply"),
        React.createElement("li", null, "D. ex-post Aggregate Supply")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ex-post Aggregate Demand"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium mb-2" },
          "Ref: Chapter 2: National Income Accounting | Topic: Some Basic Concepts of Macroeconomics"
        ),
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Deflationary Gap:"), " This occurs when the actual Aggregate Demand in the economy falls short of the Aggregate Demand required to establish Full Employment Equilibrium."),
          React.createElement("li", null, React.createElement("strong", null, "Shortfall:"), " The gap represents the deficiency of the actual (ex-post) demand compared to the full potential demand.")
        )
      )
    )
  },
  {
    id: '7',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, "Statement 1: Final Goods do not undergo any further transformation at the hands of any producer."),
      React.createElement("p", { className: "mt-2" }, "Statement 2: Final goods may get transformed during their consumption by the ultimate purchaser."),
      React.createElement("p", { className: "mt-4 font-semibold" }, "In light of the given statements, choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Both Statements 1 and 2 are true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Concept (Final Goods):"), " Goods that have crossed the boundary line of production and are ready for use by final users."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 1 (True):"), " Final goods do not undergo further transformation by any producer in the production process."),
          React.createElement("li", null, React.createElement("strong", null, "Statement 2 (True):"), " Transformation can occur during consumption (e.g., cooking food). This is valid for final goods as it happens at the consumer's end, not as part of production.")
        )
      )
    )
  },
  {
    id: '8',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On the basis of the given information, Money Supply (M1) would be ₹ _____ crore."),
      React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
        React.createElement("thead", null,
          React.createElement("tr", null,
            React.createElement("th", { className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900" }, "S.No."),
            React.createElement("th", { className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900" }, "Components"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900" }, "Amount (in ₹ crore)")
          )
        ),
        React.createElement("tbody", null,
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(i)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Currency held by the Public"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "320")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(ii)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Net Demand Deposits with Commercial Banks"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "260")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(iii)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Net Time Deposits with Commercial Banks"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "200")
          )
        )
      ),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Options:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 580"),
        React.createElement("li", null, "B. 780"),
        React.createElement("li", null, "C. 675"),
        React.createElement("li", null, "D. 875")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. 580"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-2 text-sm font-medium mb-2" },
          "Ref: Chapter 3: Money and Banking | Topic: Supply of Money"
        ),
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("p", null, "M1 is the most liquid measure of Money Supply."),
        React.createElement("div", { className: "bg-gray-100 p-2 rounded border border-gray-300" },
          React.createElement("p", { className: "font-mono text-sm text-black font-semibold" }, "Formula: M1 = Currency with Public + Net Demand Deposits")
        ),
        React.createElement("p", { className: "font-semibold" }, "Calculation:"),
        React.createElement("ul", { className: "list-disc pl-5" },
          React.createElement("li", null, "Currency held by Public = ₹320 crore"),
          React.createElement("li", null, "Net Demand Deposits = ₹260 crore"),
          React.createElement("li", null, "M1 = 320 + 260 = ₹580 crore")
        ),
        React.createElement("p", { className: "text-sm italic" }, "Note: Net Time Deposits are not part of M1.")
      )
    )
  },
  {
    id: '9',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct option from those given below:"),
      React.createElement("p", { className: "mt-2" }, "Assertion (A): External Assistance is recorded in the Current Account of the Balance of Payments of a nation."),
      React.createElement("p", { className: "mt-2" }, "Reason (R): External Assistance includes bilateral and multilateral loans received/extended by a nation."),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Options:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."),
        React.createElement("li", null, "B. Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)."),
        React.createElement("li", null, "C. Assertion (A) is true, but Reason (R) is false."),
        React.createElement("li", null, "D. Assertion (A) is false, but Reason (R) is true.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Assertion (A) is false, but Reason (R) is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Assertion (False):"), " External Assistance (loans/grants) creates a liability or affects assets, so it is recorded in the Capital Account, not the Current Account."),
          React.createElement("li", null, React.createElement("strong", null, "Reason (True):"), " External Assistance correctly includes bilateral and multilateral loans received or extended by a nation.")
        )
      )
    )
  },
  {
    id: '10',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Reserve Bank of India (RBI) was established in the year _____."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 1934"),
        React.createElement("li", null, "B. 1935"),
        React.createElement("li", null, "C. 1936"),
        React.createElement("li", null, "D. 1937")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. 1935"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: "font-semibold" }, "How It Works:"),
        React.createElement("p", null, "The Reserve Bank of India (RBI) is India's central banking institution."),
        React.createElement("ul", { className: "list-disc pl-5" },
          React.createElement("li", null, "It was established on ", React.createElement("strong", null, "April 1, 1935"), " in accordance with the Reserve Bank of India Act, 1934.")
        )
      )
    )
  },
  {
    id: '11',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "For a hypothetical economy, assuming there are only two firms (A and B) with equal Gross Value Added (GVA)."),
      React.createElement("p", { className: "mt-2" }, "On the basis of the following data, estimate the value of Domestic Sales of Firm A:"),
      React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
        React.createElement("thead", null,
          React.createElement("tr", null,
            React.createElement("th", { className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900" }, "S. No."),
            React.createElement("th", { className: "border border-gray-300 p-2 text-left font-bold bg-gray-100 text-gray-900" }, "Items"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-right font-bold bg-gray-100 text-gray-900" }, "Amount (in ₹ crore)")
          )
        ),
        React.createElement("tbody", null,
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(i)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Value of Output of Firm B"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,000")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(ii)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Purchases by Firm A from Firm B"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "300")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(iii)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Exports by Firm A"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "200")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(iv)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Purchases by Firm B from Firm A"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "250")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2" }, "(v)"),
            React.createElement("td", { className: "border border-gray-300 p-2" }, "Additions to stock of Firm A"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "150")
          )
        )
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: ₹700 crore"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "GVA of Firm B = Value of Output of Firm B - Purchases by Firm B from Firm A = ₹1,000 - ₹250 = ₹750 crore"),
      React.createElement("p", { className: "mt-2" }, "Since both firms have equal GVA, GVA of Firm A = ₹750 crore"),
      React.createElement("p", { className: "mt-2" }, "Domestic Sales of Firm A = GVA of Firm A - Exports by Firm A - Additions to stock of Firm A + Purchases by Firm A from Firm B"),
      React.createElement("p", { className: "mt-2" }, "= ₹750 - ₹200 - ₹150 + ₹300 = ₹700 crore")
    )
  },
  {
    id: '12',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"The statutory requirement of the Reserve Ratio (RR) acts as a limit to the amount of credit that banks can create.\""),
      React.createElement("p", { className: "mt-2" }, "Justify the given statement with the valid explanation."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "\"The Reserve Bank of India (RBI) provides several banking services to the Government.\""),
      React.createElement("p", { className: "mt-2" }, "Do you agree with the given statement? Give valid explanation in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4" },
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (A)"),
          React.createElement("p", null, "Reserve Ratio is the percentage of deposits that every commercial bank must keep as reserves and rest of the deposits can be used to give loans. Reserve Ratio is fixed by the Central Bank to avoid 'over lending' by commercial banks. This is legally binding to all commercial banks."),
          React.createElement("p", { className: "mt-2" }, "Hence, the statutory requirement of the Reserve Ratio acts as a limit to the amount of credit that banks can create.")
        ),
        React.createElement("div", { className: "relative flex py-2 items-center" },
          React.createElement("div", { className: "flex-grow border-t border-gray-400" }),
          React.createElement("span", { className: "flex-shrink-0 mx-4 text-gray-400 font-bold" }, "OR"),
          React.createElement("div", { className: "flex-grow border-t border-gray-400" })
        ),
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (B)"),
          React.createElement("p", null, "Yes. The Reserve Bank of India (RBI) serves as the Government's banker, managing its accounts, receiving deposits, and processing payments. Exchanges, remittances and various banking operations are facilitated by the RBI on behalf of the government."),
          React.createElement("p", { className: "mt-2" }, "In addition to this, during any financial crisis, RBI provides credit to the government to ensure its smooth functioning and to support the state in managing its obligations effectively.")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-lg text-gray-800 mb-2" }, "Option A: Limitation on Credit Creation"),
          React.createElement("p", { className: "font-semibold mb-1" }, "Question:"),
          React.createElement("p", { className: "italic mb-2" }, "“The statutory requirement of the Reserve Ratio (RR) acts as a limit to the amount of credit that banks can create.” Justify the given statement with the valid explanation."),
          React.createElement("p", { className: "font-semibold mb-1" }, "Detailed Explanation:"),
          React.createElement("p", { className: "mb-2" }, "The statement is justified. The Reserve Ratio acts as a mathematical and legal limit on the money multiplier process for the following reasons:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, React.createElement("strong", null, "Definition of Reserve Ratio:"), " The Reserve Ratio refers to the specific percentage of deposits that every commercial bank is legally required to keep as reserves (either as cash with themselves or with the Central Bank)."),
            React.createElement("li", null, React.createElement("strong", null, "Constraint on Lending:"), " Commercial banks cannot lend the entirety of the deposits they receive. They must hold the required Reserve Ratio portion, and only the remaining rest of the deposits can be utilized to extend loans to the public."),
            React.createElement("li", null, React.createElement("strong", null, "Control Mechanism:"), " This ratio is fixed by the Central Bank (Reserve Bank of India) specifically to avoid the situation of ‘over lending’ by commercial banks. Since this is legally binding, it restricts the money multiplier (1/Reserve Ratio), effectively capping the total volume of credit the banking system can generate from a given initial deposit.")
          )
        ),
        React.createElement("div", { className: "border-t border-gray-300 pt-4" },
          React.createElement("h4", { className: "font-bold text-lg text-gray-800 mb-2" }, "Option B: RBI as Banker to the Government"),
          React.createElement("p", { className: "font-semibold mb-1" }, "Question:"),
          React.createElement("p", { className: "italic mb-2" }, "“The Reserve Bank of India (RBI) provides several banking services to the Government.” Do you agree with the given statement? Give valid explanation in support of your answer."),
          React.createElement("p", { className: "font-semibold mb-1" }, "Detailed Explanation:"),
          React.createElement("p", { className: "mb-2" }, "Yes, I agree with the statement. The Reserve Bank of India acts as the Banker to the Government, performing vital financial services similar to those a commercial bank performs for its customers:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, React.createElement("strong", null, "Managing Accounts:"), " The RBI manages the government's accounts, receives deposits, and processes payments on behalf of the government."),
            React.createElement("li", null, React.createElement("strong", null, "Banking Operations:"), " It facilitates various banking operations for the state, including exchanges and remittances."),
            React.createElement("li", null, React.createElement("strong", null, "Crisis Management:"), " Crucially, during financial crises, the RBI provides credit to the government. This ensures the smooth functioning of the government and supports the state in managing its financial obligations effectively when revenue streams might be stressed.")
          )
        )
      )
    )
  },
  {
    id: '13',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Ms. Sarika is a retired government employee. Every month, she earns rental income from a property she owns. She has also invested in fixed deposit, which provide her with interest income. Occasionally, she receives cash transfers from her family members abroad."),
      React.createElement("p", { className: "mt-2" }, "Classify, Ms. Sarika's income as factor income or transfer income, giving valid reasons in support of your answer."),
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "\"Under the Expenditure Method, the value of Gross Domestic Product (GDP) can be estimated by adding the final expenditure incurred by all the sectors of an economy.\""),
      React.createElement("p", { className: "mt-2" }, "In the light of the given statement, explain the expenditure incurred by any two sectors.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4" },
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (A)"),
          React.createElement("p", null, "The income earned by Ms. Sarika in the form of rent and interest can be classified as factor income, as it is the income earned by the factors of production for rendering their services."),
          React.createElement("p", { className: "mt-2 font-bold" }, "Whereas;"),
          React.createElement("p", { className: "mt-2" }, "Cash transfers received by Ms. Sarika from her family members abroad can be classified as transfer income as it is the income received without rendering any productive service in return.")
        ),
        React.createElement("div", { className: "relative flex py-2 items-center" },
          React.createElement("div", { className: "flex-grow border-t border-gray-400" }),
          React.createElement("span", { className: "flex-shrink-0 mx-4 text-gray-400 font-bold" }, "OR"),
          React.createElement("div", { className: "flex-grow border-t border-gray-400" })
        ),
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (B)"),
          React.createElement("p", null, "The final expenditure incurred by the sectors of an economy can be:"),
          React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("strong", null, "Private Final Consumption Expenditure:"), " It is the expenditure incurred by households and non-profit institutions serving households on final consumption of goods and services."),
            React.createElement("li", null, React.createElement("strong", null, "Net Exports:"), " It refers to the excess of value of exports of goods and services over the value of imports of goods and services, during an accounting year.")
          )
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("p", null, "Part A: Classification of Income (3 marks)."),
      React.createElement("p", null, "Part B: Explanation of any two components of expenditure (3 marks).")
    )
  },
  {
    id: '14',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Mr. Spector, a normal resident of XYZ country, took a $1 million loan from an overseas bank to expand his manufacturing business. During the same year, the Government of XYZ country borrowed $5 billion from an international financial institution to cover the Balance of Payments (BoP) deficit prevailing in the country.\""),
      React.createElement("p", { className: "mt-2" }, "Mishika, an economics student, read the above information and identified both the transactions cited, as autonomous transactions in the BoP account of XYZ country."),
      React.createElement("p", { className: "mt-2" }, "Do you agree with Mishka's identification of the underlying concept? Give valid arguments in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "No. The loan taken by Mr. Spector can be classified as an autonomous transaction. Such international economic transactions are independent of the state of Balance of Payments (BoP) and generally take place with an economic motive."),
        React.createElement("p", { className: "mt-2" }, "However, loan taken by the Government in this case can be classified as an accommodating transaction. Such transactions are those international economic transactions which are undertaken (by competent authorities) to cover the surplus or deficit in BoP and are independent of any economic motive.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Identification of Mr. Spector's loan as autonomous transaction: 1.5 marks"),
        React.createElement("li", null, "Identification of Government's loan as accommodating transaction: 1.5 marks")
      )
    )
  },
  {
    id: '15',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Refer to the given image carefully:"),
      React.createElement("img", { src: "/inflation-control-measures.png", alt: "Inflation Control Measures", className: "my-4 rounded-lg" }),
      React.createElement("p", { className: "mt-2" }, "Explain any two indicated measures taken by the Central Bank to control the highlighted macroeconomic issue.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "To deal with the situation of inflation, the Central Bank may use the following measures:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
          React.createElement("li", null, React.createElement("strong", null, "Repo Rate: "), "A rise in repo rate will force the commercial banks to increase the lending rates, making the credit dearer for the general public, discouraging the borrowings. Consequently, Aggregate Demand will fall thus correcting the problem of inflation in the economy."),
          React.createElement("li", null, React.createElement("strong", null, "Open Market Operations: "), "The Central Bank can sell government securities in the open market, thereby, reducing the availability of funds with the commercial banks for lending. Consequently, Aggregate Demand will fall thus correcting the problem of inflation in the economy.")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Explanation of any two measures: 2 marks (1 mark each)")
      )
    )
  },
  {
    id: '16',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(A)"),
      React.createElement("p", { className: "mt-2" }, "(I) Suppose in an economy, the Marginal Propensity to Consume (MPC) is 0.8. The government introduced an investment project of ₹1,000 crore which led to a manyfold increase in National Income (Y) and Consumption Expenditure (C). Estimate:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "(a) Value of Investment Multiplier (k)"),
        React.createElement("li", null, "(b) Missing Values of (i) and (ii)")
      ),
      React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4 text-sm" },
        React.createElement("thead", null,
          React.createElement("tr", null,
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Rounds"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "∆I"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "∆Y"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "∆C"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "∆S")
          )
        ),
        React.createElement("tbody", null,
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "I"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "1,000"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "1,000"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "800"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "200")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2 text-center font-bold bg-green-50 text-gray-900" }, "Total"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center font-bold bg-green-50 text-gray-900" }, "(i)"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center font-bold bg-green-50 text-gray-900" }, "1,000"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center font-bold bg-green-50 text-gray-900" }, "(ii)"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center font-bold bg-green-50 text-gray-900" }, "1,000")
          )
        )
      ),
      React.createElement("p", { className: "mt-4" }, "(II) \"Sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.\" Justify the given statement with the help of a suitable argument."),
      React.createElement("p", { className: "mt-4 font-bold text-center text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(B)"),
      React.createElement("p", { className: "mt-2" }, "(I) Suppose in a hypothetical economy, people save 20% of their additional income. Ex-Ante Investments equals ₹ 100 and the equilibrium level of income stands at ₹ 700. Calculate dissavings at zero level of income."),
      React.createElement("p", { className: "mt-2" }, "(II) Define Effective Demand. Explain the adjustment mechanism to attain the level of Effective Demand, if ex-ante Aggregate Demand is more than ex-ante Aggregate Supply.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4" },
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (A)"),
          React.createElement("p", null, React.createElement("strong", null, "(I) ")),
          React.createElement("p", null, "(a) Investment Multiplier (k) = 1/(1-MPC) = 1/(1-0.8) = 5"),
          React.createElement("p", null, "(b) (i) Change in Income (ΔY) = k × ΔI = 5 × 1,000 = ₹5,000 crore"),
          React.createElement("p", null, "(ii) Change in Consumption (ΔC) = MPC × ΔY = 0.8 × 5,000 = ₹4,000 crore"),
          React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "(II) ")), React.createElement("p", null, "Income is either consumed or saved, i.e.; Y = C + S"),
          React.createElement("p", null, "Dividing both sides of the equation by Y: Y/Y = C/Y + S/Y => 1 = APC + APS."),
          React.createElement("p", null, "Thus, sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.")
        ),
        React.createElement("div", { className: "relative flex py-2 items-center" },
          React.createElement("div", { className: "flex-grow border-t border-gray-400" }),
          React.createElement("span", { className: "flex-shrink-0 mx-4 text-gray-400 font-bold" }, "OR"),
          React.createElement("div", { className: "flex-grow border-t border-gray-400" })
        ),
        React.createElement("div", null,
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Answer (B)"),
          React.createElement("p", null, React.createElement("strong", null, "(I) ")), React.createElement("p", null, "Given: MPS = 20% = 0.2, MPC = 1 - MPS = 0.8. I = 100, Y = 700."),
          React.createElement("p", null, "At Equilibrium S = I => -Č + (MPS)Y = I"),
          React.createElement("p", null, "-Č + (0.2)700 = 100 => -Č = -40."),
          React.createElement("p", null, "Thus, dissavings at zero level of income = ₹40."),
          React.createElement("p", { className: "mt-2" }, React.createElement("strong", null, "(II) ")), React.createElement("p", null, "Effective Demand refers to that level of Aggregate Demand, which can be met by the corresponding Aggregate Supply in the economy."),
          React.createElement("p", { className: "mt-2" }, "If ex-ante Aggregate Demand is more than ex-ante Aggregate Supply, it means that the households and firms are planning to consume more than what the firms intend to produce. Thus, the inventories will fall below the desired level. To restore the desired level of inventories, producers may increase output and employment in the economy. This mechanism will continue till the equilibrium is reinstated and effective demand can be restored.")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("p", null, "(A) I: k calculation (1) + Values (2). II: Justification (3). Total 6 Marks."),
      React.createElement("p", null, "(B) I: Calculation (2). II: Definition (1) + Mechanism (3). Total 6 Marks.")
    )
  },
  {
    id: '17',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Refer to the given text carefully:"),
      React.createElement("p", { className: "mt-2" }, "Revenue receipts of the Union Government of India, consisting of tax revenue and non-tax revenue increased year-on-year by 14.5% in the financial year 2023-24, with robust growth in both tax and non-tax revenues. In spite of the global trend of widening fiscal deficit and increasing debt burden, India has remained on the course of fiscal consolidation. In the post-covid period, significant fiscal consolidation could be achieved largely due to buoyant government revenues. The fiscal deficit of the Union Government has been brought down from 6.4% of Gross Domestic Product (GDP) in the financial year 2022-23 to 5.6% of GDP in the financial year 2023-24, according to the data released by the Office of Controller General of Accounts (CGA)."),
      React.createElement("p", { className: "mt-2" }, "Strong growth in direct and indirect taxes on account of resilient economic activities and increased compliance meant that the tax revenues generated exceeded the budgetary estimates. Additionally, higher-than-budgeted non-tax revenue in the form of dividends from the Reserve Bank of India (RBI) has buffeted revenue receipts. In combination with restrained revenue expenditure, these buoyant revenues ensured lower deficits."),
      React.createElement("p", { className: "mt-2" }, "A decomposition of the fiscal deficit over the past few years reveals that with a narrowing revenue deficit, a larger share of the fiscal deficit is being accounted for by capital outlay. This suggests that the productivity of borrowed resources has improved."),
      React.createElement("p", { className: "mt-4 font-semibold" }, "On the basis of the given text and common understanding, answer the following questions:"),
      React.createElement("p", { className: "mt-2" }, "(I) Differentiate between the two types of revenue receipts as indicated in the above text."),
      React.createElement("p", { className: "mt-2" }, "(II) Elaborate the reasons behind reduction in fiscal deficit of India for the financial year 2023-24.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, React.createElement("strong", null, "(I) ")),
        React.createElement("p", null, "Tax revenue receipts refer to the receipts of the government through taxes. These are the compulsory transfer payments imposed by the government on individuals, corporations, and other entities."),
        React.createElement("p", { className: "mt-2 font-bold" }, "Whereas;"),
        React.createElement("p", { className: "mt-2" }, "Non-tax revenue receipts refers to those revenue receipts of the government from sources other than taxes. These mainly consist of interest, dividends, fees etc"),
        React.createElement("p", { className: "mt-4" }, React.createElement("strong", null, "(II) ")),
        React.createElement("p", null, "The fiscal deficit declined due to robust growth in direct and indirect taxes, driven by resilient economic activities and improved tax compliance. Furthermore, higher-than-anticipated non-tax revenue, particularly dividends from the RBI, boosted overall revenue receipts. In addition to this, controlled revenue expenditure also contributed to the reduction in the fiscal deficit.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "(I) Explanation of tax and non-tax revenue: 3 marks"),
        React.createElement("li", null, "(II) Reasons for fiscal deficit reduction: 3 marks")
      )
    )
  },
  {
    id: '18',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the given text carefully:"),
      React.createElement("p", { className: "mt-2" }, "\"The Government has now decided to further promote the development of mutual funds by throwing the field open to the private sector and joint sector mutual funds. In order to safeguard the interests of the investing public, and to encourage a healthy growth of the capital markets, a comprehensive set of guidelines is being evolved for the operation of all mutual funds.\""),
      React.createElement("p", { className: "mt-2" }, "Source: https://www.indiabudget.gov.in/doc/bspeech/bs199192.pdf (Budget 1991-92 Speech of Shri Manmohan Singh Minister of Finance)"),
      React.createElement("p", { className: "mt-2" }, "Identify the sector under which the aforesaid reform was introduced and choose the correct option."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Industrial"),
        React.createElement("li", null, "B. Financial"),
        React.createElement("li", null, "C. Tax"),
        React.createElement("li", null, "D. Foreign Trade")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Financial"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The text refers to reforms in the mutual funds sector, which falls under the financial sector. The government decided to open mutual funds to private and joint sectors with regulatory guidelines.")
    )
  },
  {
    id: '19',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "_________ maintained a monopoly control over India's exports and imports, while the rest was allowed with a few other countries."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. China"),
        React.createElement("li", null, "B. Ceylon (Sri Lanka)"),
        React.createElement("li", null, "C. Britain"),
        React.createElement("li", null, "D. Persia (Iran)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Britain"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "During the colonial period, Britain maintained monopoly control over India's foreign trade through various mechanisms like the East India Company and trade regulations.")
    )
  },
  {
    id: '20',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Human capital is _________."),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "(i) intangible in nature"),
        React.createElement("li", null, "(ii) imperfectly mobile"),
        React.createElement("li", null, "(iii) inseparable from its owner")
      ),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Options:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. (i) and (ii)"),
        React.createElement("li", null, "B. (i) and (iii)"),
        React.createElement("li", null, "C. (ii) and (iii)"),
        React.createElement("li", null, "D. (i), (ii) and (iii)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. (i), (ii) and (iii)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Human capital refers to the stock of knowledge, skills, and abilities possessed by individuals. It is intangible (cannot be touched), imperfectly mobile (people may not migrate easily), and inseparable from its owner (cannot be transferred like physical capital).")
    )
  }
];