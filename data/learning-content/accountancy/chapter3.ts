import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter3Module: LearningModule = {
  chapter: "3",
  title: "Reconstitution of a Partnership Firm – Retirement/Death of a Partner",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 3 explores the accounting procedures when a partner leaves the firm through retirement or death. This critical topic involves complex calculations and journal entries that can earn you 15-20 marks in CBSE Board exams."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master the gaining ratio calculations, goodwill adjustments, revaluation procedures, and settlement of accounts. Understanding these concepts is essential for both theoretical questions and practical problems involving partner exits."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-blue-800" }, "\uD83D\uDD25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
        React.createElement("li", null, "• Gaining Ratio calculations (4-6 marks)"),
        React.createElement("li", null, "• Goodwill adjustment entries (4-6 marks)"),
        React.createElement("li", null, "• Revaluation Account preparation (6-8 marks)"),
        React.createElement("li", null, "• Profit/Loss Suspense Account (3-4 marks)"),
        React.createElement("li", null, "• Final settlement calculations (4-6 marks)"),
        React.createElement("li", null, "• Journal entries for retirement/death (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Modes of Partner Exit from Firm",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "A partner can leave the partnership firm through various methods, each with different accounting implications and legal requirements."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mt-4" },
          React.createElement("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "1. Retirement by Mutual Agreement"),
            React.createElement("p", { className: "text-green-700 text-sm" }, "Partner voluntarily leaves with consent of all partners. Most common method requiring partnership deed compliance.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "2. Compulsory Retirement"),
            React.createElement("p", { className: "text-blue-700 text-sm" }, "Partner forced to retire due to breach of agreement, insolvency, or court order.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "3. Death of Partner"),
            React.createElement("p", { className: "text-red-700 text-sm" }, "Partner passes away, legal representatives (executors) handle settlement of their account.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "4. Expulsion of Partner"),
            React.createElement("p", { className: "text-orange-700 text-sm" }, "Partner expelled by majority vote or court order for misconduct or breach of duty.")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "⚡ Key Point:"),
          React.createElement("p", { className: "text-yellow-700 mt-1" }, "In all cases except dissolution, the firm continues with remaining partners, requiring reconstitution of partnership agreement.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "RECD - Partner Exit Modes"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Retirement, Expulsion, Compulsory retirement, Death")
      ),
      example: React.createElement("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700" }, "Ram retires from Ram-Shyam-Mohan partnership. The firm continues as Shyam-Mohan partnership, requiring new profit sharing ratio and goodwill adjustments.")
      )
    },
    {
      title: "New Profit Sharing Ratio After Retirement",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a partner retires, the remaining partners acquire the retiring partner's share. The new profit sharing ratio among continuing partners must be determined."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Key Principles:"),
          React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
            React.createElement("li", null, "• Specified in retirement agreement or partnership deed"),
            React.createElement("li", null, "• If not specified, remaining partners share equally"),
            React.createElement("li", null, "• Must be agreed upon by all continuing partners")
          )
        ),
        React.createElement("div", { className: "mt-4" },
          React.createElement("h4", { className: "font-bold text-gray-800 mb-2" }, "Calculation Method:"),
          React.createElement("div", { className: "bg-gray-100 p-3 rounded font-mono text-sm" },
            "New Share of Continuing Partner = Old Share + Share Acquired from Retiring Partner"
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-green-800 text-center" }, "NEWS - New Ratio After Retirement"),
        React.createElement("p", { className: "text-green-700 text-center text-sm mt-1" }, "New agreement, Equal if silent, Specified ratio, Share acquired")
      ),
      example: React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 1: Equal Sharing"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "A, B, C share profits 4:3:2. C retires. A and B will share future profits equally."),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "New ratio: A(1/2), B(1/2), C(0)"),
            React.createElement("p", null, "A acquires 1/2 - 4/9 = 1/18 of C's share"),
            React.createElement("p", null, "B acquires 1/2 - 3/9 = 3/18 of C's share")
          )
        ),
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 2: Specified Ratio"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "P, Q, R share 3:2:1. R retires. P and Q decide to share 3:1."),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "New ratio: P(3/4), Q(1/4), R(0)"),
            React.createElement("p", null, "P acquires 3/4 - 3/6 = 3/4 of R's share"),
            React.createElement("p", null, "Q acquires 1/4 - 2/6 = 1/12 of R's share")
          )
        )
      )
    },
    {
      title: "Gaining Ratio",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The ratio in which the continuing partners acquire the share of the retiring/deceased partner is called the gaining ratio. This ratio is crucial for goodwill adjustments."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Calculation Methods:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-red-700 text-sm" },
            React.createElement("li", null, "• When specified: Use the ratio given in the problem"),
            React.createElement("li", null, "• When not specified: Assume equal sharing among continuing partners"),
            React.createElement("li", null, "• From new ratio: New Share - Old Share = Gain")
          )
        ),
        React.createElement("div", { className: "mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "Formula:"),
          React.createElement("p", { className: "text-yellow-700 font-mono text-center" }, "Gaining Ratio = New Share - Old Share")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-orange-800 text-center" }, "GAIN - Gaining Ratio"),
        React.createElement("p", { className: "text-orange-700 text-center text-sm mt-1" }, "Given ratio, All equal if silent, Increase in share, New minus old")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "X, Y, Z share profits 4:3:2. Z retires. X and Y will share equally."),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "X's old share = 4/9, new share = 1/2"),
          React.createElement("p", null, "X's gain = 1/2 - 4/9 = (9-8)/18 = 1/18"),
          React.createElement("p", null, "Y's old share = 3/9, new share = 1/2"),
          React.createElement("p", null, "Y's gain = 1/2 - 3/9 = (9-6)/18 = 3/18"),
          React.createElement("p", null, "Gaining ratio = 1:3")
        )
      )
    },
    {
      title: "Goodwill Treatment on Retirement/Death",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The retiring/deceased partner is entitled to their share of goodwill. The continuing partners compensate them by writing up their capital accounts."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entry:"),
            React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Gaining Partner A Capital A/c Dr."),
              React.createElement("li", null, "• Gaining Partner B Capital A/c Dr."),
              React.createElement("li", null, "• To Retiring Partner Capital A/c")
            )
          ),
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
            React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• No Goodwill Account is opened"),
              React.createElement("li", null, "• Adjustment made in gaining ratio"),
              React.createElement("li", null, "• Same treatment for retirement and death")
            )
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border-l-4 border-orange-400 p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800" }, "When Goodwill Exists in Books:"),
          React.createElement("p", { className: "text-orange-700 text-sm mt-1" }, "Existing goodwill is written off by debiting continuing partners' capital accounts in gaining ratio and crediting goodwill account.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "GAIN - Goodwill on Exit"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Gaining partners debit, Adjust in gaining ratio, Increase retiring partner's capital, No goodwill account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Journal Entries Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Goodwill valued at ₹60,000, retiring partner's share ₹20,000"),
          React.createElement("p", null, "Gaining ratio 2:3"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Partner A Capital A/c Dr. ₹8,000"),
          React.createElement("p", null, "Partner B Capital A/c Dr. ₹12,000"),
          React.createElement("p", null, "To Retiring Partner Capital A/c ₹20,000"),
          React.createElement("p", null, "(Goodwill adjustment in gaining ratio 2:3)")
        )
      )
    },
    {
      title: "Revaluation of Assets and Liabilities",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "At retirement/death, assets and liabilities are revalued to reflect current market values. A Revaluation Account is prepared to record these changes."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-3" },
            React.createElement("h4", { className: "font-bold text-green-800" }, "Asset Appreciation:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Asset A/c Dr."),
              React.createElement("li", null, "• To Revaluation A/c (Gain)")
            )
          ),
          React.createElement("div", { className: "bg-red-50 border border-red-200 rounded-lg p-3" },
            React.createElement("h4", { className: "font-bold text-red-800" }, "Asset Depreciation:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-red-700 text-sm" },
              React.createElement("li", null, "• Revaluation A/c Dr."),
              React.createElement("li", null, "• To Asset A/c (Loss)")
            )
          ),
          React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3" },
            React.createElement("h4", { className: "font-bold text-blue-800" }, "Liability Increase:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• Revaluation A/c Dr."),
              React.createElement("li", null, "• To Liability A/c (Loss)")
            )
          ),
          React.createElement("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-3" },
            React.createElement("h4", { className: "font-bold text-purple-800" }, "Liability Decrease:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-purple-700 text-sm" },
              React.createElement("li", null, "• Liability A/c Dr."),
              React.createElement("li", null, "• To Revaluation A/c (Gain)")
            )
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "Final Step:"),
          React.createElement("p", { className: "text-yellow-700" }, "Transfer revaluation profit/loss to ALL partners' capital accounts in OLD profit sharing ratio.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-cyan-800 text-center" }, "REAL - Revaluation Rules"),
        React.createElement("p", { className: "text-cyan-700 text-center text-sm mt-1" }, "Rise in assets credit Revaluation, Loss debit Revaluation, Assets increase gain, Liabilities decrease gain")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Revaluation Account Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2" },
          React.createElement("p", null, "Stock appreciated by ₹10,000: Stock A/c Dr. ₹10,000 To Revaluation A/c ₹10,000"),
          React.createElement("p", null, "Provision for doubtful debts increased ₹5,000: Revaluation A/c Dr. ₹5,000 To Provision A/c ₹5,000"),
          React.createElement("p", null, "Net loss ₹5,000 distributed to all partners in old ratio")
        )
      )
    },
    {
      title: "Accumulated Profits and Reserves",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "All accumulated profits, reserves, and losses belong to all partners including the retiring/deceased partner. They are distributed in the old profit sharing ratio."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "For Accumulated Profits/Reserves:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "General Reserve A/c Dr."),
            React.createElement("p", null, "To All Partners' Capital A/cs (including retiring)")
          )
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "For Accumulated Losses:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "All Partners' Capital A/cs Dr. (including retiring)"),
            React.createElement("p", null, "To Profit & Loss A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "ALL - Accumulated Adjustments"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "All partners including retiring, Losses from all partners, Legacy of old ratio")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "General Reserve ₹30,000, Partners A:B:C = 3:2:1, C retires"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "General Reserve A/c Dr. ₹30,000"),
          React.createElement("p", null, "To A's Capital A/c ₹15,000"),
          React.createElement("p", null, "To B's Capital A/c ₹10,000"),
          React.createElement("p", null, "To C's Capital A/c ₹5,000")
        )
      )
    },
    {
      title: "Profit/Loss up to Date of Retirement/Death",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When retirement/death occurs during the accounting year, the retiring/deceased partner's share of profit/loss from the last balance sheet date to the date of exit must be calculated."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Calculation Methods:"),
          React.createElement("ol", { className: "mt-2 space-y-2 text-blue-700 text-sm" },
            React.createElement("li", null, "1. Time Basis: Profit × (Number of days from last BS to retirement/death ÷ 365)"),
            React.createElement("li", null, "2. Turnover Basis: If sales figures are given"),
            React.createElement("li", null, "3. Equal Monthly Basis: If monthly profits are equal")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-yellow-700 text-sm space-y-1" },
            React.createElement("p", null, "Profit & Loss Suspense A/c Dr. (Share of profit)"),
            React.createElement("p", null, "To Retiring Partner's Capital A/c"),
            React.createElement("p", null, "OR"),
            React.createElement("p", null, "Retiring Partner's Capital A/c Dr. (Share of loss)"),
            React.createElement("p", null, "To Profit & Loss Suspense A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "TIME - Interim Profit/Loss"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Time proportion, Interim period, Exact calculation, Suspense account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "Annual profit ₹60,000, partner retires after 9 months, share 1/3"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "Share of profit = ₹60,000 × 9/12 × 1/3 = ₹15,000"),
          React.createElement("p", null, "P&L Suspense A/c Dr. ₹15,000"),
          React.createElement("p", null, "To Retiring Partner's Capital A/c ₹15,000")
        )
      )
    },
    {
      title: "Settlement of Amount Due",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The final amount due to the retiring/deceased partner is the balance in their capital account after all adjustments. This amount can be settled in various ways."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "For Retirement:"),
            React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Immediate cash payment"),
              React.createElement("li", null, "• Transfer to Loan Account (with interest)"),
              React.createElement("li", null, "• Installments (as per agreement)")
            )
          ),
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "For Death:"),
            React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• Transfer to Executor's Account"),
              React.createElement("li", null, "• Joint Life Policy proceeds"),
              React.createElement("li", null, "• Payment to legal representatives")
            )
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border-l-4 border-orange-400 p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800" }, "Journal Entries:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Retiring Partner's Capital A/c Dr."),
            React.createElement("p", null, "To Bank A/c (immediate payment)"),
            React.createElement("p", null, "OR"),
            React.createElement("p", null, "To Retiring Partner's Loan A/c (deferred payment)")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "SETTLE - Settlement Methods"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Settlement options, Executor for death, Transfer to loan, Loan with interest, Executor account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Settlement Examples:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Retirement - Immediate payment:"),
          React.createElement("p", null, "Retiring Partner's Capital A/c Dr. ₹1,00,000"),
          React.createElement("p", null, "To Bank A/c ₹1,00,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Death - Transfer to Executor:"),
          React.createElement("p", null, "Deceased Partner's Capital A/c Dr. ₹1,00,000"),
          React.createElement("p", null, "To Executor's Account ₹1,00,000")
        )
      )
    }
  ],
  keywords: [
    { term: "Retirement of Partner", definition: "Voluntary withdrawal of a partner from the firm with mutual consent of remaining partners" },
    { term: "Death of Partner", definition: "Termination of partnership due to death of a partner, requiring settlement with legal representatives" },
    { term: "Gaining Ratio", definition: "Ratio in which continuing partners acquire the share of profit relinquished by retiring/deceased partner" },
    { term: "New Profit Sharing Ratio", definition: "Ratio agreed upon by continuing partners for sharing future profits after retirement/death" },
    { term: "Revaluation Account", definition: "Account prepared to record gains/losses on revaluation of assets and liabilities at retirement/death" },
    { term: "Profit & Loss Suspense Account", definition: "Temporary account recording retiring/deceased partner's share of profit/loss for interim period" },
    { term: "Executor's Account", definition: "Account representing amount due to legal representatives of a deceased partner" },
    { term: "Joint Life Policy", definition: "Insurance policy taken by firm on joint lives of partners to provide funds on death of any partner" },
    { term: "Accumulated Profits", definition: "Reserves and undistributed profits belonging to all partners including retiring/deceased partner" },
    { term: "Capital Adjustment", definition: "Process of adjusting partners' capital accounts after retirement/death adjustments" }
  ],
  caseStudies: [
    {
      title: "Comprehensive Retirement with Revaluation",
      scenario: "Amit, Sumit, and Raj share profits in the ratio of 3:2:1 with capitals of ₹1,50,000, ₹1,00,000, and ₹50,000 respectively. Amit retires on March 31, 2025. The firm's books show General Reserve ₹30,000 and Profit & Loss Account ₹20,000 (credit). Goodwill is valued at ₹90,000. At retirement: Stock is valued at ₹80,000 (book value ₹75,000), Furniture at ₹40,000 (book value ₹45,000), and a provision for doubtful debts @5% is to be created on debtors of ₹1,00,000. The continuing partners agree to share profits equally. Amit's share of profit up to retirement is ₹5,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sumit and Raj will share equally: 1:1"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Gaining ratio = New share - Old share"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sumit's gain = 1/2 - 2/6 = 1/2 - 1/3 = 1/6"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Raj's gain = 1/2 - 1/6 = 1/2 - 1/6 = 1/3"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Gaining ratio = 1:2")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill Adjustment"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Amit's share of goodwill = ₹90,000 × 3/6 = ₹45,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Sumit compensates = ₹45,000 × 1/3 = ₹15,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Raj compensates = ₹45,000 × 2/3 = ₹30,000")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Account"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹5,000: Stock A/c Dr. ₹5,000 To Revaluation A/c ₹5,000"),
            React.createElement("p", null, "Furniture depreciation ₹5,000: Revaluation A/c Dr. ₹5,000 To Furniture A/c ₹5,000"),
            React.createElement("p", null, "Provision for doubtful debts ₹5,000: Revaluation A/c Dr. ₹5,000 To Provision A/c ₹5,000"),
            React.createElement("p", null, "Net loss ₹5,000 distributed to all partners in old ratio (3:2:1)")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Reserves and Interim Profit"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve ₹30,000 to all partners in old ratio (3:2:1)"),
            React.createElement("p", null, "P&L Account ₹20,000 to all partners in old ratio (3:2:1)"),
            React.createElement("p", null, "Interim profit ₹5,000: P&L Suspense A/c Dr. ₹5,000 To Amit's Capital A/c ₹5,000")
          )
        )
      )
    },
    {
      title: "Death of Partner with Joint Life Policy",
      scenario: "P, Q, and R are partners sharing profits equally. Their capitals are ₹2,00,000 each. R dies on June 30, 2025. At the time of death, the firm has General Reserve ₹60,000 and Undistributed Profits ₹40,000. Goodwill is valued at ₹1,20,000. A joint life policy of ₹1,50,000 matures on R's death. The executors of R are paid ₹50,000 immediately and the balance is transferred to R's Executor's Loan Account @10% interest.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Ratio and Gaining Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "P and Q continue sharing equally: 1:1"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Gaining ratio = 1:1 (equal sharing)")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill and Joint Life Policy"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "R's share of goodwill = ₹1,20,000 × 1/3 = ₹40,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Joint life policy ₹1,50,000 received"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "P and Q compensate R equally: ₹20,000 each")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Reserves Distribution"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve ₹60,000 to all partners equally"),
            React.createElement("p", null, "Undistributed Profits ₹40,000 to all partners equally"),
            React.createElement("p", null, "R's share: General Reserve ₹20,000 + Profits ₹13,333 = ₹33,333")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Final Settlement"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Calculate total due to R's executors"),
            React.createElement("p", null, "R's capital ₹2,00,000 + Goodwill ₹40,000 + Reserves ₹33,333 + JLP ₹1,50,000 = ₹4,23,333"),
            React.createElement("p", null, "Immediate payment ₹50,000 + Loan account ₹3,73,333")
          )
        )
      )
    },
    {
      title: "Retirement with Interim Profits and Losses",
      scenario: "X, Y, and Z share profits 2:2:1. Z retires on September 30, 2025. The firm's profit for the year is ₹1,20,000. Z's share of profit up to retirement is ₹15,000. At retirement, there is a loss on revaluation of ₹12,000. General Reserve is ₹48,000. Goodwill is valued at ₹60,000. The continuing partners share future profits in the ratio 3:2.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Ratio and Gaining Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "X and Y new ratio 3:2"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "X's gain = 3/5 - 2/5 = 1/5"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Y's gain = 2/5 - 2/5 = 0"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Gaining ratio = 1:0 (only X gains)")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill and Adjustments"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Z's share of goodwill = ₹60,000 × 1/5 = ₹12,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "X compensates Z: ₹12,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Revaluation loss ₹12,000 to all partners (2:2:1)")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Reserves and Interim Profit"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve ₹48,000 to all partners (2:2:1)"),
            React.createElement("p", null, "Z's share: ₹48,000 × 1/5 = ₹9,600"),
            React.createElement("p", null, "Interim profit ₹15,000: P&L Suspense A/c Dr. ₹15,000 To Z's Capital A/c ₹15,000")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Final Calculation"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Z's capital balance after all adjustments"),
            React.createElement("p", null, "Includes goodwill compensation, reserve share, interim profit, revaluation loss share")
          )
        )
      )
    },
    {
      title: "Death with Existing Goodwill in Books",
      scenario: "M, N, and O are equal partners with capitals of ₹1,00,000 each. The books show goodwill at ₹45,000. O dies on April 30, 2025. At death, stock is revalued at ₹60,000 (book value ₹55,000). A provision for doubtful debts of ₹3,000 exists, to be increased to ₹5,000. General Reserve is ₹30,000. Goodwill is valued at ₹75,000. O's executors are paid in full immediately.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Goodwill Adjustments"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Existing goodwill ₹45,000 written off equally: ₹15,000 each"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "New goodwill ₹75,000, O's share = ₹25,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "M and N compensate O equally: ₹12,500 each")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Revaluation Account"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹5,000: Stock A/c Dr. ₹5,000 To Revaluation A/c ₹5,000"),
            React.createElement("p", null, "Provision increase ₹2,000: Revaluation A/c Dr. ₹2,000 To Provision A/c ₹2,000"),
            React.createElement("p", null, "Net loss ₹3,000 to all partners equally")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Reserves Distribution"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "General Reserve ₹30,000 to all partners equally"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "O's share = ₹10,000")
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Final Settlement"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "O's capital ₹1,00,000 + Goodwill adjustments + Reserve share + Revaluation share"),
            React.createElement("p", null, "Total amount transferred to Executor's Account")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4" },
      React.createElement("h3", { className: "font-bold text-blue-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
        React.createElement("li", null, "• Gaining ratio = New share - Old share"),
        React.createElement("li", null, "• Goodwill compensation in gaining ratio"),
        React.createElement("li", null, "• Revaluation and reserves to ALL partners in old ratio"),
        React.createElement("li", null, "• Interim profits through P&L Suspense Account"),
        React.createElement("li", null, "• Final settlement: Loan Account (retirement) or Executor's Account (death)")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Gaining Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "New Share - Old Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Interim Profit Share:"),
          React.createElement("p", { className: "text-green-700" }, "Annual Profit × Time Period × Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Goodwill Share:"),
          React.createElement("p", { className: "text-green-700" }, "Total Goodwill × Retiring Partner's Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Settlement Amount:"),
          React.createElement("p", { className: "text-green-700" }, "Adjusted Capital Balance")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing gaining ratio with new profit sharing ratio"),
          React.createElement("li", null, "• Forgetting to distribute revaluation/reserves to retiring partner"),
          React.createElement("li", null, "• Wrong ratio for goodwill adjustments"),
          React.createElement("li", null, "• Incorrect interim profit calculations")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always calculate gaining ratio first"),
          React.createElement("li", null, "• Use old ratio for revaluation and reserves"),
          React.createElement("li", null, "• Follow sequence: Goodwill → Revaluation → Reserves → Interim Profit → Settlement"),
          React.createElement("li", null, "• Double-check ratios before journal entries")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Gaining ratio calculations (4-6 marks)"),
          React.createElement("li", null, "• Goodwill adjustment entries (4-6 marks)"),
          React.createElement("li", null, "• Revaluation account preparation (6-8 marks)"),
          React.createElement("li", null, "• Final settlement calculations (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Complete retirement/death adjustment problems (12-16 marks)"),
          React.createElement("li", null, "• Journal entries only (6-8 marks)"),
          React.createElement("li", null, "• Ratio calculations (4-6 marks)"),
          React.createElement("li", null, "• Theory questions on gaining ratio (4-6 marks)")
        )
      )
    )
  )
};