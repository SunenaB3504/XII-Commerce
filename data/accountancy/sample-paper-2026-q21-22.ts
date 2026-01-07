import { Question } from '../../types';
import React from 'react';

// Questions 21-22: 4-mark questions from CBSE Sample Paper 2025-26
export const questions21to22: Question[] = [
  {
    id: '21',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-3" }, "Sapphire Ltd. was registered with an authorised capital of ₹80,00,000 divided into 4,00,000 shares of ₹20 each. Company offered and issued 1,50,000 shares at a premium of ₹4 per share payable as ₹7 on application (including ₹1 premium), ₹12 on allotment (including ₹2 premium) and balance on first call."),
      React.createElement("p", { className: "mt-2" }, "Rancho, holding 10,000 shares failed to pay allotment and call money. Another shareholder Sultan holding 5,000 shares failed to pay the call money. All the shares held by Rancho were forfeited and of these 8,000 were reissued at ₹22 per share as fully paid."),
      React.createElement("p", { className: "mt-3 font-semibold" }, "Show Share Capital sub head as it would in the Balance Sheet of Sapphire Ltd. along with notes to Account as per the Companies Act 2013.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-3" }, "Balance Sheet Extract:"),
      React.createElement("div", { className: "bg-gray-50 p-4 rounded" },
        React.createElement("p", { className: "font-semibold underline mb-2" }, "EQUITY AND LIABILITIES"),
        React.createElement("p", { className: "ml-4" }, "1. Shareholders' Funds"),
        React.createElement("p", { className: "ml-8" }, "(a) Share Capital (Note 1) ₹29,52,000"),
        React.createElement("p", { className: "font-semibold underline mt-4 mb-2" }, "Note 1: Share Capital"),
        React.createElement("div", { className: "ml-4 space-y-1" },
          React.createElement("p", null, "Authorised Capital:"),
          React.createElement("p", { className: "ml-4" }, "4,00,000 Equity Shares of ₹20 each: ₹80,00,000"),
          React.createElement("p", { className: "mt-2" }, "Issued Capital:"),
          React.createElement("p", { className: "ml-4" }, "1,50,000 Equity Shares of ₹20 each: ₹30,00,000"),
          React.createElement("p", { className: "mt-2" }, "Subscribed Capital:"),
          React.createElement("p", { className: "font-medium mt-1" }, "Subscribed and Fully Paid-up:"),
          React.createElement("p", { className: "ml-4" }, "1,43,000 Equity Shares of ₹20 each: ₹28,60,000"),
          React.createElement("p", { className: "font-medium mt-1" }, "Subscribed but not Fully Paid-up:"),
          React.createElement("p", { className: "ml-4" }, "5,000 Equity Shares of ₹20 each: ₹1,00,000"),
          React.createElement("p", { className: "ml-4" }, "Less: Calls-in-Arrears (5,000 × 4): (₹20,000)"),
          React.createElement("p", { className: "ml-8 font-medium" }, "₹80,000"),
          React.createElement("p", { className: "mt-2" }, "Add: Forfeited Shares A/c (2,000 × 6): ₹12,000"),
          React.createElement("p", { className: "font-bold mt-2" }, "Total: ₹29,52,000")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings:"),
      React.createElement("div", { className: "mt-2 space-y-3" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "1. Share Details:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Face Value: ₹20. Premium: ₹4. Total Issue Price: ₹24."),
            React.createElement("li", null, "Application: ₹7 (6+1), Allotment: ₹12 (10+2), First Call: ₹5 (4+1)."),
            React.createElement("li", null, "Rancho (10,000 shares): Paid Application (₹7). Failed Allotment & Call."),
            React.createElement("li", null, "Sultan (5,000 shares): Paid App & Allot. Failed Call (₹5).")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "2. Forfeiture Amount (Rancho):"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Received: Application only."),
            React.createElement("li", null, "Capital portion received: ₹6 per share."),
            React.createElement("li", null, "Total Forfeited Amount = 10,000 × ₹6 = ₹60,000."),
            React.createElement("li", null, "Premium received (₹1) is not reversed or forfeited.")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "3. Re-issue:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "8,000 shares re-issued @ ₹22 (fully paid)."),
            React.createElement("li", null, "Fully Paid Value = ₹20. Issue Price = ₹22."),
            React.createElement("li", null, "Since reissue price > paid up value, there is no discount."),
            React.createElement("li", null, "Gain on Reissue = Amount forfeited on 8,000 shares = 8,000 × ₹6 = ₹48,000."),
            React.createElement("li", null, "Capital Reserve = ₹48,000.")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "4. Closing Balances:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Subscribed Fully Paid: 1,35,000 (others) + 8,000 (reissued) = 1,43,000 shares."),
            React.createElement("li", null, "Subscribed Not Fully Paid: Sultan's 5,000 shares (Arrears of ₹20,000)."),
            React.createElement("li", null, "Forfeited Shares A/c: Balance on 2,000 unreissued shares = 2,000 × ₹6 = ₹12,000.")
          )
        )
      ),
      React.createElement("div", { className: "mt-4 p-4 bg-gray-50 rounded-md" },
        React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Chapter: Accounting for Share Capital"),
        React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Name: Accounting for Companies"),
        React.createElement("p", { className: "font-semibold text-sm text-gray-700" }, "Topic: Disclosure of Share Capital in Balance Sheet")
      )
    )
  },
  {
    id: '22',
    marks: 4,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-3" }, "Amit, Sumit and Pulkit were partners sharing Profit & Loss in the ratio 5:3:2. Their Capitals were ₹8,00,000; ₹7,00,000 and ₹5,00,000 respectively. According to Partnership Deed:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "(a) Interest on Capital @ 10% p.a."),
        React.createElement("li", null, "(b) Salary to Amit ₹10,000 p.m and Pulkit ₹15,000 per quarter."),
        React.createElement("li", null, "(c) Commission to Sumit ₹70,000."),
        React.createElement("li", null, "(d) Sumit was being guaranteed that his share of profits will not be less than ₹65,000. Deficiency if any will be borne by Amit and Pulkit equally.")
      ),
      React.createElement("p", { className: "mt-3" }, "Ignoring the above terms the profits of ₹6,00,000, for the year ended March 31, 2025 were divided equally between partners. You are required to pass necessary adjustment entry. Show your workings clearly.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "22. Journal"),
      React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "w-full border-collapse border border-gray-300 text-sm" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100" },
              React.createElement("th", { className: "border border-gray-300 p-2 text-left" }, "Date"),
              React.createElement("th", { className: "border border-gray-300 p-2 text-left" }, "Particulars"),
              React.createElement("th", { className: "border border-gray-300 p-2 text-center" }, "L.F."),
              React.createElement("th", { className: "border border-gray-300 p-2 text-right" }, "Debit (₹)"),
              React.createElement("th", { className: "border border-gray-300 p-2 text-right" }, "Credit (₹)")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-2 align-top" }, "Mar. 31, 2025"),
              React.createElement("td", { className: "border border-gray-300 p-2" },
                React.createElement("p", { className: "font-semibold" }, "Pulkit’s Capital A/c ... Dr."),
                React.createElement("p", { className: "pl-8" }, "To Amit’s Capital A/c"),
                React.createElement("p", { className: "pl-8" }, "To Sumit’s Capital A/c"),
                React.createElement("p", { className: "italic mt-1 text-gray-600" }, "(Being adjustment entry passed for omission)")
              ),
              React.createElement("td", { className: "border border-gray-300 p-2" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right align-top" }, "70,000"),
              React.createElement("td", { className: "border border-gray-300 p-2 text-right align-top" },
                React.createElement("div", null, "65,000"),
                React.createElement("div", null, "5,000")
              )
            )
          )
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Working Notes"),
      React.createElement("div", { className: "overflow-x-auto mt-2" },
        React.createElement("table", { className: "w-full border-collapse border border-gray-300 text-xs sm:text-sm" },
          React.createElement("thead", null,
            React.createElement("tr", { className: "bg-gray-100" },
              React.createElement("th", { className: "border border-gray-300 p-1", rowSpan: 2 }, "Particulars"),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "Amit"),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "Sumit"),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "Pulkit"),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "Firm")
            ),
            React.createElement("tr", { className: "bg-gray-50" },
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Dr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Cr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Dr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Cr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Dr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Cr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Dr."),
              React.createElement("th", { className: "border border-gray-300 p-1 text-center" }, "Cr.")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Profits wrongly shared"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "6,00,000")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-1" }, "IOC omitted"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "80,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "70,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "50,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Salary omitted"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "1,20,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "60,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "1,80,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Profits to be shared"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "75,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "45,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "30,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "1,50,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Guarantee effect"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "10,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "20,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "10,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, ""),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "")
            ),
            React.createElement("tr", { className: "font-semibold bg-gray-50" },
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Total"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,10,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,75,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "1,95,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "2,10,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "80,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "6,00,000"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-right" }, "6,00,000")
            ),
            React.createElement("tr", { className: "font-bold bg-yellow-50" },
              React.createElement("td", { className: "border border-gray-300 p-1" }, "Net Effect"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "65,000 (Cr.)"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "5,000 (Cr.)"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "70,000 (Dr.)"),
              React.createElement("td", { className: "border border-gray-300 p-1 text-center", colSpan: 2 }, "")
            )
          )
        )
      )
    )
  }
];


