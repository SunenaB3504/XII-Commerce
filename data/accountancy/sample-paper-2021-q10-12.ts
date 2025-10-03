import { Question } from '../../types';
import React from 'react';

// Questions 10-12: Part B - Analysis of Financial Statements
export const questions10to12: Question[] = [
  {
    id: '10',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Arun, Basu and Tarun were partners sharing Profit &Loss in the ratio 3:2:1. They admitted Charan into partnership for 20% share. Charan was to bring proportionate Capital and he brought ₹ 3,50,000 (including ₹ 50,000 for goodwill share) in firm. If adjusted capital of Arun after Revaluation Gain/Loss, Accumulated Profits/Losses and Goodwill treatment was ₹ 8,40,000. What was Barun's Capital after Revaluation Gain/Loss, Accumulated Profits/Losses and Goodwill treatment?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 5,60,000"),
        React.createElement("li", null, "B. 3,60,000"),
        React.createElement("li", null, "C. 12,00,000"),
        React.createElement("li", null, "D. 6,60,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 3,60,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Charan's capital contribution = Total cash brought - Goodwill premium = ₹3,50,000 - ₹50,000 = ₹3,00,000."),
        React.createElement("li", null, "Charan's share is 20% or 1/5. Therefore, the remaining share for the old partners (Arun and Barun) is 1 - 1/5 = 4/5."),
        React.createElement("li", null, "The total capital of the new firm, based on Charan's proportionate capital, is ₹3,00,000 × 5 = ₹15,00,000."),
        React.createElement("li", null, "The combined adjusted capital of the old partners (Arun and Barun) must be 4/5 of the total capital = (4/5) × ₹15,00,000 = ₹12,00,000."),
        React.createElement("li", null, "We are given that Arun's adjusted capital is ₹8,40,000."),
        React.createElement("li", null, "Therefore, Barun's Adjusted Capital = Combined Capital - Arun's Adjusted Capital = ₹12,00,000 - ₹8,40,000 = ₹3,60,000.")
      )
    )
  },
  {
    id: '10 (OR)',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Raghav and Sahil were partners sharing Profit & Loss in the ratio 5:3. Their capital balances were ₹ 7,20,000 and ₹ 2,80,000 respectively. There were balances of General Reserve of ₹ 5,00,000 and Deferred Revenue Expenditure of ₹4,00,000 in the books of the firm. They admitted Ojasv into partnership for 20% share for which he brings ₹ 4,00,000 as capital. Determine the goodwill share of Ojasv."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 5,00,000"),
        React.createElement("li", null, "B. 1,00,000"),
        React.createElement("li", null, "C. 1,20,000"),
        React.createElement("li", null, "D. 60,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 1,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation of Hidden Goodwill"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate the total implied capital of the new firm based on Ojasv's capital contribution: ₹4,00,000 × (1 / 20%) = ₹4,00,000 × 5 = ₹20,00,000."),
        React.createElement("li", null, "Calculate the actual combined capital of all partners (after adjustments):",
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Raghav's Capital: ₹7,20,000"),
            React.createElement("li", null, "Sahil's Capital: ₹2,80,000"),
            React.createElement("li", null, "Ojasv's Capital: ₹4,00,000"),
            React.createElement("li", null, "Add: General Reserve: ₹5,00,000"),
            React.createElement("li", null, "Less: Deferred Revenue Expenditure (fictitious asset): (₹4,00,000)"),
            React.createElement("li", {className: "font-bold"}, "Total Actual Capital = ₹15,00,000.")
          )
        ),
        React.createElement("li", null, "Calculate the firm's total goodwill (Hidden Goodwill) = Implied Capital - Actual Capital = ₹20,00,000 - ₹15,00,000 = ₹5,00,000."),
        React.createElement("li", null, "Calculate Ojasv's share of Goodwill = Total Goodwill × Ojasv's Share = ₹5,00,000 × 20% = ₹1,00,000.")
      )
    )
  },
  {
    id: '11',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Building was appearing in the books at ₹ 20,00,000 which was overvalued by 25%. What amount will be shown in the Balance Sheet of a reconstituted firm for building?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 25,00,000"),
        React.createElement("li", null, "B. 16,00,000"),
        React.createElement("li", null, "C. 24,00,000"),
        React.createElement("li", null, "D. 15,00,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 16,00,000"),
    explanation: React.createElement("p", { className: "mt-2" }, "If the book value is overvalued by 25%, it means the book value of ₹20,00,000 represents 125% of the true value. To find the correct value (100%), we calculate: Correct Value = Book Value / 125% = ₹20,00,000 / 1.25 = ₹16,00,000.")
  },
  {
    id: '11 (OR)',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "From the following information, prepare Income and Expenditure Account for the year ended 31st March, 2021:"),
      React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded" },
        React.createElement("table", { className: "w-full border-collapse border border-gray-300" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100" },
              React.createElement("th", { className: "border border-gray-300 p-2 text-left" }, "Particulars"),
              React.createElement("th", { className: "border border-gray-300 p-2 text-right" }, "₹")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Subscription received during the year"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "95,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Donations for Building"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "25,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Entrance Fee"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,56,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Locker Rent"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "50,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Interest on 8% Govt. Securities"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "5,400")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Revenue from Refreshment"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "52,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Sale of old Newspapers"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "4,600")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Profit on Sale of Furniture"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Salary and Wages"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,03,200")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Sundry Expenses"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "47,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Refreshment Expense"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "60,400")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Telephone Bill"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "5,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Rent and Rates"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "24,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "Honorarium to Secretary"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "5,000")
            )
          )
        )
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Income & Expenditure Account"),
      React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "w-full border-collapse border border-gray-300 text-sm" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100" },
              React.createElement("th", { className: "border border-gray-300 p-2 text-left" }, "Dr. Income & Expenditure Account for the year ended March 31, 2021 Cr."),
              React.createElement("th", { className: "border border-gray-300 p-2 text-right" }, "₹"),
              React.createElement("th", { className: "border border-gray-300 p-2 text-right" }, "₹")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Salary and Wages"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,03,200"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Sundry Expenses"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "47,000"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Refreshment Expense"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "60,400"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Telephone Bill"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "5,000"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Rent and Rates"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "24,000"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Honorarium to Secretary"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "5,000"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "To Surplus (Excess of Income over Expenditure)"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "96,800"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2 font-bold" }, "Total"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right font-bold" }, "3,40,000"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Subscription"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "70,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Entrance Fee"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,56,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Locker Rent"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "50,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Interest on 8% Govt. Securities"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "6,400")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Revenue from Refreshment"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "52,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Sale of old Newspapers"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "4,600")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2" }, "By Profit on Sale of Furniture"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right" }, "1,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2 font-bold" }, "Total"),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right font-bold" }, "3,40,000")
            )
          )
        )
      )
    ),
    explanation: React.createElement("p", { className: "mt-2" }, "The Income & Expenditure Account shows the revenue items on the credit side and expenditure items on the debit side. The surplus of ₹96,800 represents excess of income over expenditure.")
  },
  {
    id: '12',
    marks: 5,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "italic" }, "From the given hypothetical situation, answer Q 12 – 14."),
      React.createElement("p", { className: "font-semibold mt-2" }, "Floater Ltd. issued 60,000; 8% debentures of ₹ 100 each at 5% Discount and to be redeemed at 10% premium at the end of 5 years. On the date of issue, balance in Securities Premium was ₹ 8,00,000 and Statement of Profit Loss (Dr.) was ₹ 5,00,000."),
      React.createElement("p", { className: "font-semibold mt-2" }, "Loss on Issue of Debentures is to be written off as ______ out of Securities Premium and ______ out of Statement of Profit and Loss.")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 8,00,000; ₹ 1,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate Total Loss on Issue = Discount on Issue + Premium on Redemption."),
        React.createElement("li", null, "Discount on Issue = 60,000 shares × (5% of ₹100) = 60,000 × ₹5 = ₹3,00,000."),
        React.createElement("li", null, "Premium on Redemption = 60,000 shares × (10% of ₹100) = 60,000 × ₹10 = ₹6,00,000."),
        React.createElement("li", null, "Total Loss = ₹3,00,000 + ₹6,00,000 = ₹9,00,000."),
        React.createElement("li", null, "This total loss must be written off. The first priority is to use the available balance in the Securities Premium account. Available Securities Premium = ₹8,00,000."),
        React.createElement("li", null, "The remaining loss to be written off from the Statement of Profit & Loss = Total Loss - Securities Premium Used = ₹9,00,000 - ₹8,00,000 = ₹1,00,000.")
      )
    )
  },
  {
    id: '13',
    marks: 3,
    question: React.createElement("p", { className: "font-semibold" }, "After writing off Loss on Issue of Debentures, balance in Statement of Profit and Loss will be ______."),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Debit; ₹ 6,00,000"),
    explanation: React.createElement("p", { className: "mt-2" }, "The initial debit (loss) balance in the Statement of Profit and Loss was ₹5,00,000. An additional loss of ₹1,00,000 (as calculated in the previous question) was written off from it. Therefore, the new total debit balance will be ₹5,00,000 + ₹1,00,000 = ₹6,00,000.")
  },
  {
    id: '14',
    marks: 3,
    question: React.createElement("p", { className: "font-semibold" }, "Premium on Redemption of Debentures account will have a balance of ______ to be treated as ______ in the first year."),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 6,00,000; Non-Current Liabilities"),
    explanation: React.createElement("p", { className: "mt-2" }, "The Premium on Redemption of Debentures is a liability of ₹6,00,000 (calculated in Q12). Since the debentures are to be redeemed at the end of 5 years (which is more than 12 months from the balance sheet date), this liability is classified as a Non-Current Liability under the main head 'Long-term Provisions'.")
  }
];