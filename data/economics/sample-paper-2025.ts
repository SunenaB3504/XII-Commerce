import { QuestionPaper } from '../../types';
import React from 'react';

export const economicsSamplePaper2025: QuestionPaper = {
  name: 'CBSE Sample Paper 2025-26',
  questions: [
  {
    id: '1',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "With reference to the given diagram, which of the following is true at point B?"),
      React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/17.png", alt: "Consumption Curve", className: "my-4 rounded-lg" }),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Slope of Consumption Curve = 0"),
        React.createElement("li", null, "B. Average Propensity to Consume = 0"),
        React.createElement("li", null, "C. Slope of Saving Curve = 1"),
        React.createElement("li", null, "D. Average Propensity to Consume = 1")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Average Propensity to Consume = 1"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Point B is the 'break-even point' where the Consumption Curve (C) intersects the 45° Income line (Y)."),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "At this point, Total Consumption (C) equals Total Income (Y)."),
        React.createElement("li", null, "Average Propensity to Consume (APC) is calculated as C / Y."),
        React.createElement("li", null, "Since C = Y at point B, APC = 1.")
      )
    )
  },
  {
    id: '2',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Real Gross Domestic Product (GDP) is estimated to attain a level of \u20B9173.82 lakh crore in the year 2023-24. The corresponding Nominal GDP is estimated to stand at \u20B9295.36 lakh crore in the same year.\""),
      React.createElement("p", { className: "mt-2" }, "On the basis of the given data, the value of GDP deflator would be ______."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 295.36"),
        React.createElement("li", null, "B. 58.85"),
        React.createElement("li", null, "C. 169.92"),
        React.createElement("li", null, "D. 173.82")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. 169.92"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-4" }, "The formula for the GDP Deflator is:"),
      React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "GDP Deflator = (Nominal GDP / Real GDP) x 100"),
      React.createElement("p", { className: "mt-4" }, "Calculation:"),
      React.createElement("p", { className: "ml-4" }, "= (\u20B9295.36 / \u20B9173.82) x 100 = 169.92")
    )
  },
  {
    id: '3',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Money is non-perishable and is acceptable to anyone at any point of time.\" Identify the function of money indicated."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Store of Value"),
        React.createElement("li", null, "B. Medium of Exchange"),
        React.createElement("li", null, "C. Unit of Account"),
        React.createElement("li", null, "D. Standard of Deferred Payments")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Store of Value"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The key words 'non-perishable' and holding value 'at any point of time' refer to the Store of Value function. This means money can be saved and used for future purchases without losing significant value.")
    )
  },
  {
    id: '4',
    marks: 1,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 1:"), " Devaluation of currency is said to occur when the exchange rate is decreased under the Fixed Exchange Rate System."),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 2:"), " Under the Floating Exchange Rate System, competent authorities do not maintain foreign exchange reserves."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
            React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
            React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
            React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
            React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
        )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Statement 1 is false and Statement 2 is true."),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Statement 1 is false."), " Devaluation is when the government increases the exchange rate (e.g., from $1 = \u20B970 to \u20B975), making domestic currency cheaper. A decrease in the exchange rate (e.g., from \u20B975 to \u20B970) is revaluation."),
            React.createElement("li", null, React.createElement("b", null, "Statement 2 is true."), " In a pure floating (or flexible) exchange rate system, the rate is determined entirely by market forces of demand and supply, so the central bank does not need to intervene or maintain reserves for this purpose.")
        )
    )
  },
  {
    id: '5',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "In a simplified economy, the flow of Factor Services from Households to Firms and Factor Payments from Firms to Households represents ______ Market."),
       React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Factor"),
        React.createElement("li", null, "B. Goods"),
        React.createElement("li", null, "C. Stock"),
        React.createElement("li", null, "D. Financial")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Factor"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
       React.createElement("p", { className: "mt-2" }, "The market where factors of production (Land, Labour, Capital, Entrepreneurship) are bought and sold is the Factor Market. Households supply these services, and firms pay for them.")
    )
  },
  {
    id: '6',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Deflationary Gap refers to the gap by which ______ falls short of the Aggregate Demand required to establish full employment equilibrium."),
       React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ex-ante Aggregate Demand"),
        React.createElement("li", null, "B. ex-post Aggregate Demand"),
        React.createElement("li", null, "C. ex-ante Aggregate Supply"),
        React.createElement("li", null, "D. ex-post Aggregate Supply")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. ex-ante Aggregate Demand"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A deflationary gap occurs when planned aggregate spending is less than the full-employment level of output. The term for planned aggregate demand is 'ex-ante Aggregate Demand'. It is the gap between what people plan to spend and what is required to be spent to achieve full employment.")
    )
  },
  {
    id: '7',
    marks: 1,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 1:"), " Final Goods do not undergo any further transformation at the hands of any producer."),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 2:"), " Final goods may get transformed during their consumption by the ultimate purchaser."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
            React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
            React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
            React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
            React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
        )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Both Statements 1 and 2 are true."),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Statement 1 is true."), " This is the definition of a final good; it has crossed the production boundary and is ready for final use."),
            React.createElement("li", null, React.createElement("b", null, "Statement 2 is true."), " While not transformed by a producer for resale, the final consumer does transform it for their own use (e.g., a household buys flour and transforms it into bread for personal consumption).")
        )
    )
  },
  {
    id: '8',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On the basis of the given information, Money Supply (M1) would be _______ crore."),
      React.createElement("table", {className: "w-full text-left border-collapse my-2"},
        React.createElement("tbody", null,
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Currency held by the Public"), React.createElement("td", {className: "border p-2"}, "320")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Net Demand Deposits with Commercial Banks"), React.createElement("td", {className: "border p-2"}, "260")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Net Time Deposits with Commercial Banks"), React.createElement("td", {className: "border p-2"}, "200"))
        )
      ),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 580"),
        React.createElement("li", null, "B. 780"),
        React.createElement("li", null, "C. 675"),
        React.createElement("li", null, "D. 875")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. 580"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", {className:"mt-2"}, "The formula for the M1 measure of money supply is:"),
      React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "M1 = Currency with Public + Net Demand Deposits"),
      React.createElement("p", { className: "mt-2" }, "M1 = 320 crore + 260 crore = 580 crore."),
      React.createElement("p", { className: "mt-2 italic" }, "Note: Net Time Deposits are a component of broader measures like M3, but not M1.")
    )
  },
  {
    id: '9',
    marks: 1,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R)."),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Assertion (A):"), " External Assistance is recorded in the Current Account of the Balance of Payments of a nation."),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Reason (R):"), " External Assistance includes bilateral and multilateral loans received/extended by a nation."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
            React.createElement("li", null, "A. Both (A) and (R) are true and (R) is the correct explanation of (A)."),
            React.createElement("li", null, "B. Both (A) and (R) are true but (R) is not the correct explanation of (A)."),
            React.createElement("li", null, "C. (A) is true, but (R) is false."),
            React.createElement("li", null, "D. (A) is false, but (R) is true.")
        )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. (A) is false, but (R) is true."),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Assertion (A) is false."), " External assistance (loans) involves a change in the country's assets or liabilities with the rest of the world. Therefore, it is recorded in the Capital Account, not the Current Account."),
            React.createElement("li", null, React.createElement("b", null, "Reason (R) is true."), " This correctly defines what external assistance consists of.")
        )
    )
  },
  {
    id: '10',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Reserve Bank of India (RBI) was established in the year ______."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 1934"),
        React.createElement("li", null, "B. 1935"),
        React.createElement("li", null, "C. 1947"),
        React.createElement("li", null, "D. 1949")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. 1935"),
    explanation: React.createElement("p", { className: "mt-2" }, "The Reserve Bank of India was established on April 1, 1935, in accordance with the provisions of the Reserve Bank of India Act, 1934.")
  },
  {
    id: '11',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "For a hypothetical economy with two firms (A and B) and equal Gross Value Added (GVA), estimate the value of Domestic Sales of Firm A from the following data:"),
      React.createElement("table", {className: "w-full text-left border-collapse my-2"},
        React.createElement("tbody", null,
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "(i) Value of Output of Firm B"), React.createElement("td", {className: "border p-2"}, "\u20B91,000 crore")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "(ii) Purchases by Firm A from Firm B"), React.createElement("td", {className: "border p-2"}, "\u20B9300 crore")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "(iii) Exports by Firm A"), React.createElement("td", {className: "border p-2"}, "\u20B9200 crore")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "(iv) Purchases by Firm B from Firm A"), React.createElement("td", {className: "border p-2"}, "\u20B9250 crore")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "(v) Additions to stock of Firm A"), React.createElement("td", {className: "border p-2"}, "\u20B9150 crore"))
        )
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Domestic Sales of Firm A = \u20B9700 crore"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Calculate GVA of Firm B:"), " GVA = Value of Output - Intermediate Consumption. GVA of B = \u20B91,000 crore (Output) - \u20B9250 crore (Purchases from A) = \u20B9750 crore."),
        React.createElement("li", null, React.createElement("b", null, "Determine GVA of Firm A:"), " Given GVA of Firm A = GVA of Firm B, so GVA of A = \u20B9750 crore."),
        React.createElement("li", null, React.createElement("b", null, "Use GVA of Firm A to find Domestic Sales:"), " GVA of A = Value of Output of A - Purchases by A."),
        React.createElement("li", null, "GVA of A = (Sales of A + Change in Stock of A) - Purchases of A."),
        React.createElement("li", null, "\u20B9750 = (Domestic Sales of A + Exports of A + Additions to Stock of A) - Purchases by A from B."),
        React.createElement("li", null, "\u20B9750 = (Domestic Sales of A + \u20B9200 + \u20B9150) - \u20B9300."),
        React.createElement("li", null, "\u20B9750 = Domestic Sales of A + \u20B950."),
        React.createElement("li", null, "Domestic Sales of A = \u20B9750 - \u20B950 = \u20B9700 crore.")
      )
    )
  },
  {
    id: '12',
    marks: 3,
    question: React.createElement("p", { className: "font-semibold" }, "\"The statutory requirement of the Reserve Ratio (RR) acts as a limit to the amount of credit that banks can create.\" Justify the given statement."),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", null, "The statement is justified. The Reserve Ratio (or Legal Reserve Ratio - LRR) is the fraction of total deposits that commercial banks are legally required to hold as reserves with the Central Bank and with themselves."),
      React.createElement("p", {className: "mt-2"}, "The total amount of credit that can be created in the economy is determined by the Credit Multiplier, which is the reciprocal of the LRR (Multiplier = 1 / LRR)."),
      React.createElement("p", {className: "mt-2"}, "A higher LRR means banks must keep a larger portion of deposits as reserves, leaving less available for lending. This leads to a smaller credit multiplier and thus limits the total credit creation. Conversely, a lower LRR increases the multiplier and expands the capacity for credit creation. Hence, the LRR acts as a direct and powerful tool for the Central Bank to limit and control the credit-creating power of commercial banks.")
    ),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "The Reserve Ratio acts as a 'leakage' from the credit creation process. For every deposit, a certain percentage is held back and cannot be lent out. This limits the size of subsequent loans and deposits in the chain, thereby controlling the total volume of credit created in the economy.")
    )
  },
  {
    id: '13',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Ms. Sarika earns rental income and interest income. Occasionally, she receives cash transfers from her family members abroad. Classify Ms. Sarika's income as factor income or transfer income, giving valid reasons."),
      React.createElement("p", { className: "mt-4 font-bold" }, "OR"),
      React.createElement("p", { className: "mt-2 font-semibold" }, "\"Under the Expenditure Method, the value of Gross Domestic Product (GDP) can be estimated by adding the final expenditure incurred by all the sectors of an economy.\" In light of the given statement, explain the expenditure incurred by any two sectors.")
    ),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, React.createElement("b", null, "Factor Income:"), " The rental income and interest income earned by Ms. Sarika are classified as factor income."),
        React.createElement("p", {className: "mt-1"}, React.createElement("i", null, "Reason:"), " This income is earned by rendering productive factor services. Rental income is a return on property (land), and interest income is a return on capital. These are earned incomes and are included in the estimation of national income."),
        React.createElement("p", {className: "mt-2"}, React.createElement("b", null, "Transfer Income:"), " The cash transfers received from her family members abroad are classified as transfer income."),
        React.createElement("p", {className: "mt-1"}, React.createElement("i", null, "Reason:"), " This income is received without providing any goods or services in return. It is a unilateral (one-way) payment. Such unearned incomes are not included in the estimation of national income.")
    ),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "The key distinction is whether the income is 'earned' through productive activity. Rent and interest are earned by providing factors of production. Gifts and remittances are received without any corresponding production, hence they are 'transfers'.")
    )
  },
  {
    id: '14',
    marks: 4,
    question: React.createElement("p", { className: "font-semibold" }, "Mr. Spector, a normal resident of XYZ country, took a $1 million loan from an overseas bank. During the same year, the Government of XYZ country borrowed $5 billion from an international financial institution to cover the Balance of Payments (BoP) deficit. Do you agree that both transactions are autonomous transactions in the BoP account? Give valid arguments."),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "No, I do not agree with the statement. The two transactions are different in nature."),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Mr. Spector's Loan (Autonomous Transaction):"), " The loan taken by Mr. Spector is an autonomous transaction. This is because it is undertaken for an independent economic motive (to expand his business) and is not related to the state of the country's BoP. Such transactions are often called 'above the line' items in the BoP account."),
            React.createElement("li", null, React.createElement("b", null, "Government's Loan (Accommodating Transaction):"), " The loan taken by the Government is an accommodating transaction. This is because it is undertaken specifically to cover the deficit in the BoP, not for an independent profit or economic motive. These transactions are meant to balance the BoP account and are often called 'below the line' items.")
        )
    ),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "The key difference is the motive. Autonomous transactions happen regardless of the BoP situation and are driven by business or personal reasons. Accommodating transactions are a direct response to the BoP situation, undertaken by the monetary authorities to settle the final balance.")
    )
  },
  {
    id: '15',
    marks: 4,
    question: React.createElement("p", { className: "font-semibold" }, "Explain any two indicated measures taken by the Central Bank to control the highlighted macroeconomic issue (Inflation)."),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", {className:"font-bold"}, "Two monetary policy measures to control inflation are:"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Increase in Repo Rate (Quantitative Measure):"), " The repo rate is the interest rate at which the central bank lends to commercial banks. To curb inflation, the central bank increases the repo rate. This makes borrowing by commercial banks more expensive, forcing them to increase their own lending rates. Higher interest rates discourage the general public and businesses from taking loans, thus reducing spending and aggregate demand in the economy."),
            React.createElement("li", null, React.createElement("b", null, "Open Market Operations - Selling Securities (Quantitative Measure):"), " To control inflation, the Central Bank can sell government securities in the open market. This absorbs excess money supply from the economy. When commercial banks buy these securities, their reserves decrease, which reduces their capacity to lend. This contraction of credit availability leads to a fall in aggregate demand, helping to control inflation.")
        )
    ),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "Inflation is typically caused by 'too much money chasing too few goods' (excess demand). The central bank's strategy is to use its monetary policy tools to reduce the money supply and credit in the economy. Both increasing the policy rate (Repo Rate) and selling securities are contractionary measures designed to make money 'tighter' and more expensive, thereby reducing overall spending.")
    )
  },
  {
    id: '16',
    marks: 3,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "(I) Suppose in an economy, the Marginal Propensity to Consume (MPC) is 0.8. The government introduced an investment project of \u20B91,000 crore. Estimate the total increase in Income."),
        React.createElement("p", { className: "mt-4 font-bold" }, "OR"),
        React.createElement("p", { className: "mt-2 font-semibold" }, "(II) \"Sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.\" Justify the statement.")
    ),
    solution: React.createElement("p", {className:"font-bold"}, "(I) The total increase in Income (\u0394Y) will be \u20B95,000 crore."),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation for Part (I)"),
        React.createElement("ol", { className: "list-decimal pl-5 mt-2 space-y-2" },
            React.createElement("li", null, "First, we calculate the Investment Multiplier (k)."),
            React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "k = 1 / (1 - MPC)"),
            React.createElement("p", { className: "ml-4" }, "= 1 / (1 - 0.8) = 1 / 0.2 = 5."),
            React.createElement("li", null, "Next, we find the total change in income (\u0394Y)."),
            React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "\u0394Y = k \u00D7 Initial Change in Investment (\u0394I)"),
            React.createElement("p", { className: "ml-4" }, "= 5 \u00D7 \u20B91,000 crore = \u20B95,000 crore.")
        ),
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Justification for Part (II)"),
        React.createElement("p", { className: "mt-2" }, "We know that for any given level of income, Income (Y) is either Consumed (C) or Saved (S)."),
        React.createElement("p", { className: "mt-2 ml-4 font-mono bg-gray-100 p-2 rounded" }, "Y = C + S"),
        React.createElement("p", { className: "mt-2" }, "Dividing the entire equation by Y, we get:"),
        React.createElement("p", { className: "mt-2 ml-4 font-mono bg-gray-100 p-2 rounded" }, "Y/Y = C/Y + S/Y"),
        React.createElement("p", { className: "mt-2" }, "This simplifies to:", React.createElement("b", null, " 1 = APC + APS.")),
        React.createElement("p", { className: "mt-2" }, "Hence, the sum of APC and APS is always equal to one.")
    )
  },
  {
    id: '17',
    marks: 4,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "On the basis of the given text, differentiate between the two types of revenue receipts and elaborate the reasons behind the reduction in the fiscal deficit of India for FY 2023-24."),
        React.createElement("p", { className: "mt-2 italic text-sm" }, "(Text refers to a passage about India's fiscal consolidation due to buoyant tax and non-tax revenues, and restrained expenditure).")
    ),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", {className: "font-semibold"}, "Difference between Revenue Receipts:"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2" },
            React.createElement("li", null, React.createElement("b", null, "Tax Revenue:"), " These are compulsory payments imposed by the government on individuals and corporations (e.g., income tax, GST). They are unilateral payments, meaning the government does not promise any direct service or benefit in return."),
            React.createElement("li", null, React.createElement("b", null, "Non-Tax Revenue:"), " These are receipts of the government from sources other than taxes. They include dividends from public sector undertakings, interest received on loans given by the government, fees, fines, and grants.")
        ),
        React.createElement("p", {className: "mt-4 font-semibold"}, "Reasons for Fiscal Deficit Reduction in FY 2023-24:"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2" },
            React.createElement("li", null, React.createElement("b", null, "Buoyant Tax Revenues:"), " Strong growth in both direct and indirect tax collections, driven by resilient economic activity and improved tax compliance, exceeded budgetary estimates."),
            React.createElement("li", null, React.createElement("b", null, "Higher Non-Tax Revenue:"), " The government received higher-than-budgeted non-tax revenue, particularly in the form of dividends from the Reserve Bank of India (RBI)."),
            React.createElement("li", null, React.createElement("b", null, "Restrained Expenditure:"), " The buoyant revenues were combined with controlled or restrained revenue expenditure, which helped in narrowing the deficit.")
        )
    ),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("p", { className: "mt-2" }, "The fiscal deficit is the gap between the government's total expenditure and its total receipts excluding borrowings. The deficit shrank because the government's income (both from taxes and other sources like RBI's profits) increased significantly, while its spending was kept under control. This combination of rising income and managed spending is key to fiscal consolidation.")
    )
  },
  { id: '18', marks: 1, question: React.createElement("p", {className: "font-semibold"},"The Government decided to promote the development of mutual funds by opening the field to private and joint sectors. Identify the sector under which this reform was introduced."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. Financial"), explanation: React.createElement("p", {className:"mt-2"}, "Mutual funds are a key part of the financial markets. Reforms related to their operation, regulation, and ownership structure fall under the category of Financial Sector reforms.") },
  { id: '19', marks: 1, question: React.createElement("p", {className: "font-semibold"},"Which country maintained a monopoly control over India's exports and imports during the colonial period?"), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: C. Britain"), explanation: React.createElement("p", {className:"mt-2"}, "During the colonial era, Britain implemented restrictive trade policies that gave it monopoly control over India's foreign trade. India became an exporter of raw materials to Britain and an importer of finished goods from British industries.") },
  { id: '20', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "Human capital is (i) intangible in nature, (ii) imperfectly mobile, (iii) inseparable from its owner. Choose the correct option."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: D. (i), (ii) and (iii)"), explanation: React.createElement("p", {className:"mt-2"}, "All three statements correctly describe human capital. It's intangible (knowledge), imperfectly mobile (a person's skills can't be sold without the person), and inseparable from its owner.") },
  { id: '21', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "Assertion (A): Indian rural credit system was significantly transformed with technological reforms in agriculture. Reason (R): Green Revolution led to diversification of rural credit towards production-oriented lending."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."), explanation: React.createElement("p", {className:"mt-2"}, "The Green Revolution (Reason) required farmers to purchase modern inputs like high-yielding seeds, fertilizers, and machinery, which diversified the need for credit from consumption to production purposes. This shift in demand for credit was a significant transformation of the rural credit system (Assertion). Thus, R correctly explains A.") },
  { id: '22', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "Owing to the efforts of the ______, the Indian government initiated modernisation of informal sector enterprises."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. International Labour Organisation"), explanation: React.createElement("p", {className:"mt-2"}, "The International Labour Organisation (ILO) has been a key global agency advocating for and assisting governments in the formalization and modernization of the informal sector to improve working conditions and productivity.") },
  { id: '23', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "In the light of the given text classifying economic activities, the primary sector includes (i) Agriculture and (ii) Mining and Quarrying. Choose the correct option."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. (i) and (ii)"), explanation: React.createElement("p", {className:"mt-2"}, "The primary sector of the economy involves the extraction and harvesting of natural resources. This includes both Agriculture (i) and Mining & Quarrying (ii).") },
  { id: '24', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "The population explosion and advent of Industrial Revolution led to the ______."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. reversal of supply-demand relationship of environmental resources"), explanation: React.createElement("p", {className:"mt-2"}, "Before these events, environmental resources were abundant relative to demand (supply > demand). Afterwards, rapid population growth and industrial consumption made these resources scarce (demand > supply), reversing the relationship.") },
  { id: '25', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "From the set of terms given in Column I and corresponding facts given in Column II, choose the correct pair of statements."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: C. (c)-iii"), explanation: React.createElement("p", {className:"mt-2"}, "The correct match is (c) Horticulture with (iii) India is the second-largest producer of fruits and vegetables in the world. This period is often referred to as the 'Golden Revolution'.") },
  { id: '26', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "______ is the measure being taken to create orderly and transparent marketing conditions."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: D. Regulation of markets"), explanation: React.createElement("p", {className:"mt-2"}, "The government measure of establishing regulated markets is specifically designed to protect farmers from exploitation by intermediaries and to ensure transparent pricing and fair practices.") },
  { id: '27', marks: 1, question: React.createElement("p", {className: "font-semibold"}, "Read the following statements carefully: Statement 1: Great Leap Forward (GLF) campaign met with many problems like severe drought, conflict with Russia etc. Statement 2: Under agricultural reforms, commune lands were allocated to individual households for ownership..."), solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. Statement 1 is true and Statement 2 is false."), explanation: React.createElement("p", {className:"mt-2"}, "Statement 1 is true; the GLF campaign in China did face severe disruptions. Statement 2 is false; while commune lands were allocated for cultivation, the ownership of land remained with the state/collective.") },
  { id: '28', marks: 3, question: React.createElement("p", {className:"font-semibold"},"\"Pakistan was maintaining a healthy economic growth momentum of 6.3% till 1990s, however it lost its track...\" Do you agree with the given statement? Justify your answer with valid arguments."), solution: React.createElement("p", null,"Yes, the statement is correct."), explanation: React.createElement("p", {className:"mt-2"}, "Pakistan's growth did slow down after the 1990s. The reasons include: over-reliance on foreign remittances and aid rather than building a strong domestic economic base, political instability which deterred investment, and a lack of sustained technological advancement, particularly in agriculture which remained dependent on favorable harvests.") },
  { id: '29', marks: 3, question: React.createElement("p", {className:"font-semibold"},"“Edward Barbier defined Sustainable Development as a strategy which is directly concerned with increasing the material standard of living of the poor at the grass root level.” Elaborate the given statement."), solution: React.createElement("p", null, "This definition emphasizes that sustainable development must prioritize the well-being of the poorest sections of society."), explanation: React.createElement("p", {className:"mt-2"}, "According to this view, true sustainable development isn't just about environmental conservation in the abstract. It must actively work to reduce absolute poverty by creating secure livelihoods and improving access to essential services like income, education, and health for the poor. This should be achieved while minimizing resource depletion, environmental damage, and social instability, ensuring that development is both equitable and lasting.") },
  { id: '30', marks: 4, question: React.createElement("p", {className:"font-semibold"},"\"The introduction of Railways affected the structure of the Indian economy in two important ways.\" Justify the given statement, with valid explanation."), solution: React.createElement("p", null, "The introduction of railways had two major impacts on the Indian economy's structure:"), explanation: React.createElement("ul", {className: "list-disc pl-5 mt-2 space-y-2"}, React.createElement("li", null, React.createElement("b",null, "Fostered Commercialisation of Agriculture:"), " Railways enabled the cheap and quick transport of agricultural goods from farming areas to ports for export. This encouraged farmers to shift from subsistence farming (growing for self-consumption) to commercial farming (growing cash crops for the market), primarily to serve British industries. This adversely affected the food security and self-sufficiency of village economies."), React.createElement("li", null, React.createElement("b",null,"Broke Geographical and Cultural Barriers:"), " By enabling people to undertake long-distance travel, railways connected different parts of the vast country. This facilitated interaction between people from various regions, contributing to a sense of national unity and breaking down some geographical and cultural barriers.")) },
  { id: '31', marks: 4, question: React.createElement("p", {className:"font-semibold"},"(I) Explain the importance of regional and global economic groupings. (II) Define 'Special Economic Zone'."), solution: React.createElement(React.Fragment, null, React.createElement("p", {className:"font-semibold"}, "(I) Importance of Economic Groupings:"), React.createElement("p", {className:"mt-1"}, "Regional and global economic groupings like G-20, SAARC, and BRICS are vital for developing nations like India. They provide a platform to understand the development strategies of other nations, both neighboring and global. This allows a country to better assess its own strengths and weaknesses, learn from others' successes and failures, and negotiate trade and economic policies with a stronger, collective voice."), React.createElement("p", {className:"font-semibold mt-4"}, "(II) Special Economic Zone (SEZ):"), React.createElement("p", {className:"mt-1"}, "A Special Economic Zone is a geographical region within a country that has economic laws that are more liberal than the country's typical economic laws. SEZs are created to attract foreign investment, boost exports, and create employment by offering incentives such as tax breaks, duty-free imports, and simplified regulatory procedures.")), explanation: null},
  { id: '32', marks: 4, question: React.createElement("p", {className:"font-semibold"},"Refer to the given image carefully: (I) Identify the type of farming in Panel A and Panel B. (II) Explain any one advantage and disadvantage of the type of farming in Panel B over Panel A."), solution: React.createElement(React.Fragment, null, React.createElement("p", {className:"font-semibold"}, "(I) Identification of Farming Types:"), React.createElement("p", null, "Panel A depicts Conventional Farming, characterized by mechanization and monoculture. Panel B depicts Organic Farming, which focuses on ecological balance and avoids synthetic inputs."), React.createElement("p", {className:"font-semibold mt-4"}, "(II) Advantage and Disadvantage of Organic Farming:"), React.createElement("ul", {className: "list-disc pl-5 mt-2 space-y-2"}, React.createElement("li", null, React.createElement("b", null, "Advantage:"), " It enhances ecological balance. By relying on organic manures and composts and avoiding chemical fertilizers and pesticides, it helps in maintaining and improving soil health and fertility in the long run."), React.createElement("li", null, React.createElement("b", null, "Disadvantage:"), " Yields from organic farming are often lower than from conventional farming, especially in the initial years. This can make it financially difficult for small and marginal farmers to adopt, as it may lead to a decrease in income."))), explanation: null},
  {
    id: '33',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) “Government made a fresh statement of policy on the 30th April, 1956 which will help speeding up industrialisation and, in particular, to develop heavy industries and machine making industries, to expand the public sector, and to build up a large and growing co-operative sector\". Comment upon the classification of industries under the revised policy."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(II) \"The implementation of land ceiling legislation in India encountered several challenges that hindered its effectiveness.” Do you agree with the given statement? Give valid reasons in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", {className: "font-semibold"}, "(I) Industrial Policy Resolution (IPR) 1956 Classification:"),
        React.createElement("p", {className: "mt-1"}, "The IPR 1956 classified industries into three schedules to expand the role of the public sector:"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Schedule A:"), " Comprised 17 industries that were to be exclusively owned and established by the state (public sector). Examples include arms and ammunition, atomic energy, and railways."),
            React.createElement("li", null, React.createElement("b", null, "Schedule B:"), " Comprised 12 industries where the state would take the lead, and the private sector could supplement public efforts. The state would be primarily responsible for starting new units."),
            React.createElement("li", null, React.createElement("b", null, "Schedule C:"), " Consisted of all the remaining industries, which were left to the initiative and enterprise of the private sector.")
        ),
        React.createElement("p", {className: "font-semibold mt-4"}, "(II) Challenges to Land Ceiling Legislation:"),
        React.createElement("p", {className: "mt-1"}, "Yes, the statement is correct. The implementation of land ceiling legislation was hindered by several challenges:"),
         React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Delays and Loopholes:"), " Big landlords challenged the legislation in courts, causing significant delays. This gave them time to exploit legal loopholes, such as registering their excess land in the names of relatives to evade the ceiling limits."),
            React.createElement("li", null, React.createElement("b", null, "Lack of Political Will:"), " In many regions, the implementation lacked strong political backing, as large farmers often held considerable political influence, leading to poor enforcement of the law.")
        )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The IPR 1956 was a cornerstone of India's early industrial strategy, emphasizing a socialist pattern with a dominant public sector. Land ceiling, a key agrarian reform, aimed to promote equity in agriculture by redistributing surplus land. However, its noble intentions were largely defeated by powerful vested interests who successfully delayed and evaded the law.")
    )
  },
  {
    id: '34',
    marks: 6,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) “Education is considered fundamental for achieving full human potential\". Justify the given statement with valid arguments."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(II) Discuss the importance of increasing public expenditure in education."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(III) State any two main initiatives that may be implemented to tackle school dropouts and avert additional students from leaving school.")
    ),
    solution: React.createElement(React.Fragment, null,
        React.createElement("p", {className: "font-semibold"}, "(I) Justification for Education being Fundamental:"),
        React.createElement("p", {className: "mt-1"}, "Education is fundamental as it is the bedrock for developing a person's full potential. It imparts knowledge, develops skills and values, and enables rational thinking. An educated individual has better economic and social prospects, is a more aware citizen, and can contribute more effectively to national development. It fosters innovation and provides a skilled workforce, which is essential for economic growth."),
        React.createElement("p", {className: "font-semibold mt-4"}, "(II) Importance of Public Expenditure in Education:"),
        React.createElement("p", {className: "mt-1"}, "Increasing public expenditure is crucial because a large section of the population cannot afford private education. Public spending ensures more equitable access for all, including the poor and marginalized. It is essential for building infrastructure (schools, colleges), funding quality teacher training, and ensuring education remains affordable. A substantial public investment is vital for creating a high-quality and equitable public education system."),
        React.createElement("p", {className: "font-semibold mt-4"}, "(III) Two Initiatives to Tackle School Dropouts:"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Provide Effective and Sufficient Infrastructure:"), " Ensuring all students have access to safe, engaging, and well-equipped schools removes physical barriers to attendance."),
            React.createElement("li", null, React.createElement("b", null, "Ensure Regular Trained Teachers:"), " Having qualified and trained teachers at every stage improves the quality of education, making learning more effective and increasing student motivation to stay in school.")
        )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "This question covers the core philosophy of education policy. Part I is about the 'why'—why education matters for individuals and society. Part II is about the 'how'—how we fund a robust system, emphasizing the government's role in ensuring fairness and quality. Part III focuses on practical solutions to a key problem—school dropouts, linking it to the need for good schools and good teachers.")
    )
  }
]
};
