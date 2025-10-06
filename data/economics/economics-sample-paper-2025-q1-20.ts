import { Question } from '../../types';
import React from 'react';

export const questions1to20: Question[] = [
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-4" }, "The formula for the GDP Deflator is:"),
      React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "GDP Deflator = (Nominal GDP / Real GDP) x 100"),
      React.createElement("p", { className: "mt-4" }, "Calculation:"),
      React.createElement("p", { className: "ml-4" }, "= (₹295.36 / ₹173.82) x 100 = 169.92")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The statement describes the 'Store of Value' function of money, where money can be kept for future use without losing its value and is universally acceptable.")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Statement 1 is false because devaluation occurs when the exchange rate is increased (currency becomes cheaper) under Fixed Exchange Rate System."),
        React.createElement("li", null, "Statement 2 is true because under Floating Exchange Rate System, exchange rates are determined by market forces and authorities do not maintain reserves to influence rates.")
      )
    )
  },
  {
    id: '5',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Refer to the given diagram carefully:"),
      React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/18.png", alt: "Circular Flow Diagram", className: "my-4 rounded-lg" }),
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "In the circular flow diagram, arrows C and D represent the flow of factor services from Households to Firms and factor payments from Firms to Households, which constitutes the Factor Market.")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Deflationary Gap occurs when ex-post Aggregate Demand (actual demand) falls short of the Aggregate Demand required for full employment equilibrium.")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Statement 1 is true because final goods are meant for final consumption and do not undergo further processing by producers."),
        React.createElement("li", null, "Statement 2 is true because final goods may be transformed during consumption (e.g., food is transformed by digestion).")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Money Supply (M1) = Currency held by the Public + Net Demand Deposits with Commercial Banks"),
      React.createElement("p", { className: "mt-2" }, "= ₹320 crore + ₹260 crore = ₹580 crore")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "Assertion (A) is false because external assistance (loans/grants) is recorded in the Capital Account, not Current Account."),
        React.createElement("li", null, "Reason (R) is true because external assistance includes bilateral and multilateral loans.")
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
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The Reserve Bank of India (RBI) was established on April 1, 1935, under the Reserve Bank of India Act, 1934.")
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
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "Reserve Ratio is the percentage of deposits that every commercial bank must keep as reserves and rest of the deposits can be used to give loans. RR is fixed by the Central Bank to avoid 'over lending' by commercial banks. This is legally binding to all commercial banks."),
        React.createElement("p", { className: "mt-2" }, "Hence, the statutory requirement of the Reserve Ratio acts as a limit to the amount of credit that banks can create.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Explanation of Reserve Ratio: 1 mark"),
        React.createElement("li", null, "How it limits credit creation: 1 mark"),
        React.createElement("li", null, "Legal binding nature: 1 mark")
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
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer"),
        React.createElement("p", null, "The income earned by Ms. Sarika in the form of rent and interest can be classified as factor income, as it is the income earned by the factors of production for rendering their services."),
        React.createElement("p", { className: "mt-2" }, "Whereas;"),
        React.createElement("p", { className: "mt-2" }, "Cash transfers received by Ms. Sarika from her family members abroad can be classified as transfer income as it is the income received without rendering any productive service in return.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Classification of rental and interest income: 1 mark"),
        React.createElement("li", null, "Classification of cash transfers: 1 mark")
      )
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
        React.createElement("li", null, "Classification of private loan: 1 mark"),
        React.createElement("li", null, "Classification of government loan: 1 mark")
      )
    )
  },
  {
    id: '15',
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Refer to the given image carefully:"),
      React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/19.png", alt: "Inflation Control Measures", className: "my-4 rounded-lg" }),
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
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) Suppose in an economy, the Marginal Propensity to Consume (MPC) is 0.8. The government introduced an investment project of ₹1,000 crore which led to a manyfold increase in National Income (Y) and Consumption Expenditure (C)."),
      React.createElement("p", { className: "mt-2" }, "Estimate:"),
      React.createElement("p", { className: "ml-4" }, "(a) Value of Investment Multiplier (k)"),
      React.createElement("p", { className: "ml-4" }, "(b) Missing Values of (i) and (ii)"),
      React.createElement("table", { className: "border-collapse border border-gray-300 w-full mt-4" },
        React.createElement("thead", null,
          React.createElement("tr", null,
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Rounds"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Change in Investment (∆I)"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Change in Income (∆Y)"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Change in Consumption (∆C)"),
            React.createElement("th", { className: "border border-gray-300 p-2 text-center font-bold bg-gray-100 text-gray-900" }, "Change in Savings (∆S)")
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
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "II"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "800"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "640"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "160")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…"),
            React.createElement("td", { className: "border border-gray-300 p-2 text-center" }, "…")
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
      React.createElement("p", { className: "mt-4 text-sm text-gray-600" }, "OR"),
      React.createElement("p", { className: "mt-2" }, "(II) \"Sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.\""),
      React.createElement("p", { className: "mt-2" }, "Justify the given statement with the help of a suitable argument.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500" },
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer (I)"),
        React.createElement("p", null, "(a) Investment Multiplier (k) = 1/(1-MPC) = 1/(1-0.8) = 5"),
        React.createElement("p", { className: "mt-2" }, "(b) (i) Change in Income (∆Y) = k × ∆I = 5 × 1,000 = ₹5,000 crore"),
        React.createElement("p", { className: "mt-2" }, "(ii) Change in Consumption (∆C) = MPC × ∆Y = 0.8 × 5,000 = ₹4,000 crore")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Investment Multiplier calculation: ½ mark"),
        React.createElement("li", null, "Change in Income: ½ mark"),
        React.createElement("li", null, "Change in Consumption: ½ mark")
      )
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
        React.createElement("h4", { className: "font-bold text-blue-800 mb-3" }, "Answer (I)"),
        React.createElement("p", null, "Tax revenue receipts refer to the receipts of the government through taxes. These are the compulsory transfer payments imposed by the government on individuals, corporations, and other entities."),
        React.createElement("p", { className: "mt-2" }, "Whereas;"),
        React.createElement("p", { className: "mt-2" }, "Non-tax revenue receipts refers to those revenue receipts of the government from sources other than taxes. These mainly consist of interest, dividends, fees etc.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Marking Scheme"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-1" },
        React.createElement("li", null, "Explanation of tax revenue: 1 mark"),
        React.createElement("li", null, "Explanation of non-tax revenue: 1 mark"),
        React.createElement("li", null, "Reasons for fiscal deficit reduction: 1 mark")
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