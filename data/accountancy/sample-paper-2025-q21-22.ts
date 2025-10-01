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
        React.createElement("p", { className: "ml-8" }, "(a) Share Capital (Note 1) ₹34,48,000"),
        React.createElement("p", { className: "font-semibold underline mt-4 mb-2" }, "Note 1: Share Capital"),
        React.createElement("div", { className: "ml-4 space-y-1" },
          React.createElement("p", null, "Authorised Capital:"),
          React.createElement("p", { className: "ml-4" }, "4,00,000 Equity Shares of ₹20 each: ₹80,00,000"),
          React.createElement("p", { className: "mt-2" }, "Issued Capital:"),
          React.createElement("p", { className: "ml-4" }, "1,50,000 Equity Shares of ₹20 each: ₹30,00,000"),
          React.createElement("p", { className: "mt-2" }, "Subscribed and Fully Paid:"),
          React.createElement("p", { className: "ml-4" }, "1,48,000 Equity Shares of ₹20 each: ₹29,60,000"),
          React.createElement("p", { className: "mt-2" }, "Subscribed but not Fully Paid:"),
          React.createElement("p", { className: "ml-4" }, "2,000 Equity Shares of ₹20 each: ₹40,000"),
          React.createElement("p", { className: "ml-4" }, "(₹5 per share called up, ₹5 per share paid up)"),
          React.createElement("p", { className: "ml-4" }, "Calls-in-Arrear (shown as deduction): (₹10,000)"),
          React.createElement("p", { className: "mt-2" }, "Add: Forfeited Shares A/c: ₹58,000"),
          React.createElement("p", { className: "font-bold mt-2" }, "Total: ₹34,48,000")
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Workings:"),
      React.createElement("div", { className: "mt-2 space-y-3" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "1. Share Application & Allotment Details:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Application: ₹7 (₹6 capital + ₹1 premium)"),
            React.createElement("li", null, "Allotment: ₹12 (₹10 capital + ₹2 premium)"),
            React.createElement("li", null, "First Call: ₹5 (₹4 capital + ₹1 premium)"),
            React.createElement("li", null, "Total = ₹24 per share (₹20 + ₹4 premium)")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "2. Rancho's Forfeiture:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Shares held: 10,000"),
            React.createElement("li", null, "Paid on application: ₹70,000"),
            React.createElement("li", null, "Amount forfeited: ₹70,000")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "3. Re-issue of 8,000 shares:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Re-issued at ₹22 per share (discount ₹2)"),
            React.createElement("li", null, "Discount = 8,000 × ₹2 = ₹16,000"),
            React.createElement("li", null, "Amount forfeited on 8,000 shares = ₹56,000"),
            React.createElement("li", null, "Transfer to Capital Reserve = ₹56,000 - ₹16,000 = ₹40,000")
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "4. Balance in Forfeited Shares A/c:"),
          React.createElement("p", { className: "ml-4" }, "Remaining 2,000 shares not re-issued: ₹14,000"),
          React.createElement("p", { className: "ml-4" }, "Sultan's calls in arrear (5,000 × ₹2): ₹10,000")
        )
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
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Adjustment Entry:"),
      React.createElement("pre", { className: "bg-gray-100 p-3 rounded mt-2 text-sm" },
        "Sumit's Capital A/c           Dr.    15,000\n" +
        "Pulkit's Capital A/c          Dr.    60,000\n" +
        "    To Amit's Capital A/c                  75,000\n" +
        "(Being adjustment for incorrect profit distribution)"
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Detailed Workings:"),
      React.createElement("div", { className: "mt-3 space-y-4" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold underline" }, "Step 1: Calculate correct distribution as per deed"),
          React.createElement("table", { className: "min-w-full border mt-2 text-sm" },
            React.createElement("thead", null,
              React.createElement("tr", { className: "bg-gray-100 text-gray-900" },
                React.createElement("th", { className: "border px-2 py-1" }, "Particulars"),
                React.createElement("th", { className: "border px-2 py-1" }, "Amit"),
                React.createElement("th", { className: "border px-2 py-1" }, "Sumit"),
                React.createElement("th", { className: "border px-2 py-1" }, "Pulkit"),
                React.createElement("th", { className: "border px-2 py-1" }, "Total")
              )
            ),
            React.createElement("tbody", null,
              React.createElement("tr", null,
                React.createElement("td", { className: "border px-2 py-1" }, "Interest @ 10%"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "80,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "70,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "50,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,00,000")
              ),
              React.createElement("tr", null,
                React.createElement("td", { className: "border px-2 py-1" }, "Salary"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,20,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "-"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "60,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,80,000")
              ),
              React.createElement("tr", null,
                React.createElement("td", { className: "border px-2 py-1" }, "Commission"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "-"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "70,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "-"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "70,000")
              ),
              React.createElement("tr", { className: "bg-gray-50" },
                React.createElement("td", { className: "border px-2 py-1 font-semibold" }, "Sub-total"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,00,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,40,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,10,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "4,50,000")
              ),
              React.createElement("tr", null,
                React.createElement("td", { className: "border px-2 py-1 font-semibold" }, "Divisible Profit"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "75,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "45,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "30,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,50,000")
              ),
              React.createElement("tr", { className: "bg-yellow-50 font-bold" },
                React.createElement("td", { className: "border px-2 py-1" }, "Total (Correct)"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,75,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,85,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "1,40,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "6,00,000")
              ),
              React.createElement("tr", { className: "bg-blue-50" },
                React.createElement("td", { className: "border px-2 py-1" }, "Actually Distributed"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,00,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,00,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "2,00,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "6,00,000")
              ),
              React.createElement("tr", { className: "bg-green-50 font-bold" },
                React.createElement("td", { className: "border px-2 py-1" }, "Adjustment (Cr-Dr)"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "+75,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "-15,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "-60,000"),
                React.createElement("td", { className: "border px-2 py-1 text-right" }, "0")
              )
            )
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold text-gray-900" }, "Notes:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1 space-y-1" },
            React.createElement("li", null, "Amit's salary = ₹10,000 × 12 = ₹1,20,000"),
            React.createElement("li", null, "Pulkit's salary = ₹15,000 × 4 quarters = ₹60,000"),
            React.createElement("li", null, "Divisible Profit = ₹6,00,000 - ₹4,50,000 = ₹1,50,000"),
            React.createElement("li", null, "Profit distribution in 5:3:2 = ₹75,000 : ₹45,000 : ₹30,000"),
            React.createElement("li", null, "Sumit's guarantee of ₹65,000 is already met (he gets ₹1,85,000)")
          )
        )
      )
    )
  }
];


