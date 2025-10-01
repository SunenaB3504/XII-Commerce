import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter4Module: LearningModule = {
  chapter: "4",
  title: "Admission of a Partner",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 4 explores the process of admitting a new partner into an existing partnership firm. This critical topic involves complex calculations and journal entries that can earn you 15-20 marks in CBSE Board exams."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master the new profit sharing ratio calculations, goodwill valuation, capital adjustments, and revaluation procedures. Understanding these concepts is essential for both theoretical questions and practical problems involving partnership expansion."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-blue-800" }, "\uD83D\uDD25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
        React.createElement("li", null, "• New profit sharing ratio calculations (4-6 marks)"),
        React.createElement("li", null, "• Goodwill valuation and adjustment entries (4-6 marks)"),
        React.createElement("li", null, "• Revaluation Account preparation (6-8 marks)"),
        React.createElement("li", null, "• Capital adjustment calculations (4-6 marks)"),
        React.createElement("li", null, "• Journal entries for admission (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Modes of Partner Admission",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "A new partner can be admitted into the partnership firm through various methods, each with different accounting implications and legal requirements."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mt-4" },
          React.createElement("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "1. Admission by Purchase of Share"),
            React.createElement("p", { className: "text-green-700 text-sm" }, "New partner buys share from existing partners. Most common method requiring agreement on share value and terms.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "2. Admission by Investment"),
            React.createElement("p", { className: "text-blue-700 text-sm" }, "New partner brings fresh capital and acquires a share in the partnership. Requires valuation of goodwill and assets.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "3. Admission with Premium"),
            React.createElement("p", { className: "text-purple-700 text-sm" }, "New partner pays premium above their capital contribution for goodwill. Premium shared by existing partners.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "4. Admission by Guarantee"),
            React.createElement("p", { className: "text-orange-700 text-sm" }, "Existing partners guarantee minimum profit to new partner. Complex calculations involving profit distribution.")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "⚡ Key Point:"),
          React.createElement("p", { className: "text-yellow-700 mt-1" }, "Admission requires consent of all existing partners and must comply with partnership deed provisions.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "PIGS - Partner Admission Methods"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Purchase, Investment, Guarantee, Share acquisition")
      ),
      example: React.createElement("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700" }, "Ram and Shyam admit Mohan as partner. Mohan brings ₹50,000 capital and acquires 1/3 share. The firm continues as Ram-Shyam-Mohan partnership.")
      )
    },
    {
      title: "New Profit Sharing Ratio",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a new partner is admitted, the profit sharing ratio among all partners (including the new partner) must be determined. This ratio governs future profit distribution."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Key Principles:"),
          React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
            React.createElement("li", null, "• Specified in admission agreement or partnership deed"),
            React.createElement("li", null, "• If not specified, based on capital contributions"),
            React.createElement("li", null, "• Must be agreed upon by all partners")
          )
        ),
        React.createElement("div", { className: "mt-4" },
          React.createElement("h4", { className: "font-bold text-gray-800 mb-2" }, "Calculation Methods:"),
          React.createElement("div", { className: "space-y-3" },
            React.createElement("div", { className: "bg-gray-100 p-3 rounded font-mono text-sm" },
              "Method 1: Direct Specification - Given in problem"
            ),
            React.createElement("div", { className: "bg-gray-100 p-3 rounded font-mono text-sm" },
              "Method 2: Capital Proportion - Based on capital contributions"
            ),
            React.createElement("div", { className: "bg-gray-100 p-3 rounded font-mono text-sm" },
              "Method 3: Sacrificing Ratio - Existing partners sacrifice share"
            )
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-green-800 text-center" }, "NEWS - New Ratio Methods"),
        React.createElement("p", { className: "text-green-700 text-center text-sm mt-1" }, "New partner share, Equal if silent, Specified ratio, Sacrifice by old partners")
      ),
      example: React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 1: Specified Ratio"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "A and B share profits 3:2. C admitted for 1/4 share."),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "New ratio: A(3/8), B(2/8), C(3/8)"),
            React.createElement("p", null, "A sacrifices 3/6 - 3/8 = 1/24"),
            React.createElement("p", null, "B sacrifices 2/6 - 2/8 = 1/24")
          )
        ),
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 2: Capital Proportion"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "A: ₹1,00,000, B: ₹80,000, C brings ₹60,000"),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Total capital: ₹2,40,000"),
            React.createElement("p", null, "New ratio: A(5/12), B(4/12), C(3/12)")
          )
        )
      )
    },
    {
      title: "Sacrificing Ratio",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The ratio in which existing partners sacrifice their share of profits to accommodate the new partner is called the sacrificing ratio. This ratio is crucial for goodwill adjustments."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Calculation Methods:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-red-700 text-sm" },
            React.createElement("li", null, "• When specified: Use the ratio given in the problem"),
            React.createElement("li", null, "• When not specified: Assume equal sacrifice by existing partners"),
            React.createElement("li", null, "• From new ratio: Old Share - New Share = Sacrifice")
          )
        ),
        React.createElement("div", { className: "mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "Formula:"),
          React.createElement("p", { className: "text-yellow-700 font-mono text-center" }, "Sacrificing Ratio = Old Share - New Share")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-orange-800 text-center" }, "SACRIFICE - Sacrificing Ratio"),
        React.createElement("p", { className: "text-orange-700 text-center text-sm mt-1" }, "Specified ratio, All equal if silent, Calculated difference, Ratio for goodwill")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "P and Q share profits 3:2. R admitted for 1/4 share."),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "P's old share = 3/5, new share = 3/8"),
          React.createElement("p", null, "P's sacrifice = 3/5 - 3/8 = 9/40"),
          React.createElement("p", null, "Q's old share = 2/5, new share = 2/8"),
          React.createElement("p", null, "Q's sacrifice = 2/5 - 2/8 = 6/40"),
          React.createElement("p", null, "Sacrificing ratio = 9:6 or 3:2")
        )
      )
    },
    {
      title: "Goodwill Valuation and Adjustment",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The new partner compensates existing partners for their share of goodwill. The amount is credited to existing partners' capital accounts in the sacrificing ratio."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entry:"),
            React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Cash/Bank A/c Dr."),
              React.createElement("li", null, "• To Existing Partner A Capital A/c"),
              React.createElement("li", null, "• To Existing Partner B Capital A/c"),
              React.createElement("li", null, "• To New Partner's Capital A/c")
            )
          ),
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
            React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• Goodwill adjusted in sacrificing ratio"),
              React.createElement("li", null, "• No Goodwill Account is opened"),
              React.createElement("li", null, "• Adjustment made in capital accounts")
            )
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border-l-4 border-orange-400 p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800" }, "Valuation Methods:"),
          React.createElement("ul", { className: "space-y-1 text-orange-700 text-sm" },
            React.createElement("li", null, "• Average Profit Method"),
            React.createElement("li", null, "• Super Profit Method"),
            React.createElement("li", null, "• Capitalization Method"),
            React.createElement("li", null, "• Annuity Method")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "GAIN - Goodwill on Admission"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Goodwill valued, Adjusted in sacrificing ratio, Increase old partners' capital, No goodwill account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Journal Entries Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Goodwill valued at ₹60,000, new partner's share ₹15,000"),
          React.createElement("p", null, "Sacrificing ratio 2:1"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Cash/Bank A/c Dr. ₹15,000"),
          React.createElement("p", null, "To Partner A Capital A/c ₹10,000"),
          React.createElement("p", null, "To Partner B Capital A/c ₹5,000"),
          React.createElement("p", null, "(Goodwill adjustment in sacrificing ratio 2:1)")
        )
      )
    },
    {
      title: "Revaluation of Assets and Liabilities",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "At the time of admission, assets and liabilities are revalued to reflect current market values. A Revaluation Account is prepared to record these changes."
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
          React.createElement("p", null, "Furniture depreciated by ₹5,000: Revaluation A/c Dr. ₹5,000 To Furniture A/c ₹5,000"),
          React.createElement("p", null, "Net loss ₹5,000 distributed to old partners in old ratio")
        )
      )
    },
    {
      title: "Accumulated Profits and Reserves",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "All accumulated profits, reserves, and losses belong to existing partners. They are distributed among old partners in the old profit sharing ratio."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "For Accumulated Profits/Reserves:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "General Reserve A/c Dr."),
            React.createElement("p", null, "To Old Partners' Capital A/cs (in old ratio)")
          )
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "For Accumulated Losses:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Old Partners' Capital A/cs Dr. (in old ratio)"),
            React.createElement("p", null, "To Profit & Loss A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "OLD - Accumulated Adjustments"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Old partners only, Losses distributed, Distribution in old ratio")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "General Reserve ₹30,000, Old Partners A:B = 3:2"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "General Reserve A/c Dr. ₹30,000"),
          React.createElement("p", null, "To A's Capital A/c ₹18,000"),
          React.createElement("p", null, "To B's Capital A/c ₹12,000")
        )
      )
    },
    {
      title: "Capital Adjustment and Balance Sheet",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "After all adjustments, the new partner's capital account is credited with their agreed capital. The balance sheet is prepared showing the new partnership structure."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Capital Account Entries:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, "• New Partner's Capital A/c Dr. (Cash brought)"),
            React.createElement("p", null, "• To Cash/Bank A/c"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "• Cash/Bank A/c Dr. (Premium paid)"),
            React.createElement("p", null, "• To New Partner's Capital A/c")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Balance Sheet Changes:"),
          React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
            React.createElement("li", null, "• Assets: Revalued amounts"),
            React.createElement("li", null, "• Liabilities: Revalued amounts"),
            React.createElement("li", null, "• Capital: Adjusted for all partners"),
            React.createElement("li", null, "• Reserves: Distributed to old partners")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "CAPITAL - Final Adjustments"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Capital credited, Assets revalued, Partners adjusted, Increase in total capital")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Capital Adjustment Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "New partner brings ₹50,000 capital + ₹10,000 premium"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Cash/Bank A/c Dr. ₹60,000"),
          React.createElement("p", null, "To New Partner's Capital A/c ₹60,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Cash/Bank A/c Dr. ₹10,000"),
          React.createElement("p", null, "To Old Partner A Capital A/c ₹6,000"),
          React.createElement("p", null, "To Old Partner B Capital A/c ₹4,000")
        )
      )
    },
    {
      title: "Hidden Goodwill",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When goodwill is not specified but the new partner pays more than their capital contribution, the excess represents hidden goodwill. This is adjusted in the sacrificing ratio."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Calculation:"),
          React.createElement("div", { className: "bg-white p-3 rounded text-sm mt-2 space-y-1" },
            React.createElement("p", null, "Hidden Goodwill = Amount Paid by New Partner - Capital Brought"),
            React.createElement("p", null, "New Partner's Share of Goodwill = Hidden Goodwill × New Partner's Share")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Premium paid by new partner is treated as goodwill"),
            React.createElement("p", null, "Distributed to old partners in sacrificing ratio"),
            React.createElement("p", null, "No separate goodwill valuation required")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "HIDDEN - Hidden Goodwill"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Hidden in premium, Excess payment, Distributed in sacrificing ratio, No valuation needed")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Hidden Goodwill Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "New partner brings ₹40,000 capital but pays ₹50,000"),
          React.createElement("p", null, "Hidden goodwill = ₹10,000"),
          React.createElement("p", null, "New partner's share = 1/4"),
          React.createElement("p", null, "Goodwill value = ₹10,000 × 4 = ₹40,000"),
          React.createElement("p", null, "Old partners get ₹10,000 in sacrificing ratio")
        )
      )
    }
  ],
  keywords: [
    { term: "Admission of Partner", definition: "Process of including a new person as partner in an existing partnership firm with mutual consent of all existing partners" },
    { term: "New Profit Sharing Ratio", definition: "Ratio in which all partners (including new partner) will share future profits of the firm" },
    { term: "Sacrificing Ratio", definition: "Ratio in which existing partners sacrifice their share of profits to accommodate the new partner" },
    { term: "Hidden Goodwill", definition: "Goodwill inferred from the excess amount paid by new partner over their capital contribution" },
    { term: "Revaluation Account", definition: "Account prepared to record gains/losses on revaluation of assets and liabilities at the time of admission" },
    { term: "Premium for Goodwill", definition: "Additional amount paid by new partner for acquiring share in the firm's goodwill" },
    { term: "Capital Adjustment", definition: "Process of adjusting partners' capital accounts after admission adjustments" },
    { term: "Accumulated Profits", definition: "Reserves and undistributed profits belonging to existing partners before admission" },
    { term: "Partnership Deed", definition: "Legal document containing terms and conditions agreed upon by partners" },
    { term: "Goodwill Valuation", definition: "Process of determining the monetary value of firm's goodwill for admission purposes" }
  ],
  caseStudies: [
    {
      title: "Comprehensive Admission with Revaluation",
      scenario: "Ram and Shyam are partners sharing profits equally with capitals of ₹2,00,000 each. They admit Mohan as partner for 1/4 share. Mohan brings ₹1,00,000 as capital. Goodwill is valued at ₹1,50,000. At admission: Stock is valued at ₹1,50,000 (book value ₹1,40,000), Furniture at ₹60,000 (book value ₹70,000), and a provision for doubtful debts @5% is to be created on debtors of ₹2,00,000. General Reserve is ₹50,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Ram, Shyam, Mohan share profits 2:2:1"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sacrificing ratio = Old share - New share"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Ram's sacrifice = 1/2 - 2/5 = 1/10"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Shyam's sacrifice = 1/2 - 2/5 = 1/10"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sacrificing ratio = 1:1")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill Adjustment"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Mohan's share of goodwill = ₹1,50,000 × 1/4 = ₹37,500"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Ram gets = ₹37,500 × 1/2 = ₹18,750"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Shyam gets = ₹37,500 × 1/2 = ₹18,750")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Account"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹10,000: Stock A/c Dr. ₹10,000 To Revaluation A/c ₹10,000"),
            React.createElement("p", null, "Furniture depreciation ₹10,000: Revaluation A/c Dr. ₹10,000 To Furniture A/c ₹10,000"),
            React.createElement("p", null, "Provision for doubtful debts ₹10,000: Revaluation A/c Dr. ₹10,000 To Provision A/c ₹10,000"),
            React.createElement("p", null, "Net loss ₹10,000 distributed to Ram and Shyam equally")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Reserves Distribution"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve ₹50,000 to Ram and Shyam equally"),
            React.createElement("p", null, "Ram gets ₹25,000, Shyam gets ₹25,000")
          )
        )
      )
    },
    {
      title: "Admission with Hidden Goodwill",
      scenario: "P and Q are partners sharing profits 3:2 with capitals ₹1,50,000 each. They admit R for 1/5 share. R brings ₹80,000 capital but pays ₹1,00,000 in total. At admission, assets are revalued: Stock up by ₹20,000, Machinery down by ₹10,000. Workmen Compensation Reserve is ₹15,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Hidden Goodwill Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "R brings ₹80,000 capital but pays ₹1,00,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Hidden goodwill = ₹20,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Total goodwill = ₹20,000 × 5 = ₹1,00,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "R's share = ₹20,000 (already adjusted)")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: New Ratio and Sacrificing Ratio"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "New ratio: P(12/20), Q(8/20), R(5/20)"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "P's sacrifice = 3/5 - 12/20 = 0"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Q's sacrifice = 2/5 - 8/20 = 0"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Sacrificing ratio = 3:2 (equal sacrifice)")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Account"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹20,000: Stock A/c Dr. ₹20,000 To Revaluation A/c ₹20,000"),
            React.createElement("p", null, "Machinery depreciation ₹10,000: Revaluation A/c Dr. ₹10,000 To Machinery A/c ₹10,000"),
            React.createElement("p", null, "Net profit ₹10,000 distributed to P and Q in old ratio (3:2)")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Reserves Distribution"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Workmen Compensation Reserve ₹15,000 to P and Q in old ratio (3:2)"),
            React.createElement("p", null, "P gets ₹9,000, Q gets ₹6,000")
          )
        )
      )
    },
    {
      title: "Admission with Premium and Reserves",
      scenario: "X and Y share profits 2:1. They admit Z for 1/3 share. Z brings ₹50,000 capital and pays ₹20,000 premium for goodwill. At admission: Land is revalued up by ₹30,000, Creditors are found to be overstated by ₹5,000. Profit & Loss Account shows credit balance of ₹25,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Ratio and Sacrificing Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "New ratio: X(4/9), Y(2/9), Z(3/9)"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "X's sacrifice = 2/3 - 4/9 = 2/9"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Y's sacrifice = 1/3 - 2/9 = 1/9"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sacrificing ratio = 2:1")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Premium Treatment"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Premium ₹20,000 treated as goodwill"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "X gets ₹20,000 × 2/3 = ₹13,333"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Y gets ₹20,000 × 1/3 = ₹6,667")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Account"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Land appreciation ₹30,000: Land A/c Dr. ₹30,000 To Revaluation A/c ₹30,000"),
            React.createElement("p", null, "Creditors understated ₹5,000: Revaluation A/c Dr. ₹5,000 To Creditors A/c ₹5,000"),
            React.createElement("p", null, "Net profit ₹35,000 distributed to X and Y in old ratio (2:1)")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: P&L Account Distribution"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "P&L Account ₹25,000 to X and Y in old ratio (2:1)"),
            React.createElement("p", null, "X gets ₹16,667, Y gets ₹8,333")
          )
        )
      )
    },
    {
      title: "Admission with Capital Adjustments",
      scenario: "A and B are partners with capitals ₹2,00,000 and ₹1,50,000 sharing profits 3:2. They admit C with ₹1,00,000 capital for 1/4 share. Goodwill valued at ₹2,00,000. At admission, stock is revalued at ₹1,80,000 (book value ₹1,60,000).",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Ratio Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "New ratio: A(9/16), B(4/16), C(3/16)"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "A's sacrifice = 3/5 - 9/16 = 3/80"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "B's sacrifice = 2/5 - 4/16 = 6/80"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Sacrificing ratio = 3:6 or 1:2")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill Adjustment"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "C's share of goodwill = ₹2,00,000 × 3/16 = ₹37,500"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "A gets ₹37,500 × 1/3 = ₹12,500"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "B gets ₹37,500 × 2/3 = ₹25,000")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹20,000: Stock A/c Dr. ₹20,000 To Revaluation A/c ₹20,000"),
            React.createElement("p", null, "Profit ₹20,000 distributed to A and B in old ratio (3:2)"),
            React.createElement("p", null, "A gets ₹12,000, B gets ₹8,000")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Capital Accounts"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "C brings ₹1,00,000 capital"),
            React.createElement("p", null, "After all adjustments, final capital balances are calculated"),
            React.createElement("p", null, "Balance Sheet shows increased total capital")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4" },
      React.createElement("h3", { className: "font-bold text-blue-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
        React.createElement("li", null, "• Sacrificing ratio = Old share - New share"),
        React.createElement("li", null, "• Goodwill compensation in sacrificing ratio"),
        React.createElement("li", null, "• Revaluation and reserves to OLD partners in old ratio"),
        React.createElement("li", null, "• New partner brings capital + premium (if any)"),
        React.createElement("li", null, "• Hidden goodwill = Excess payment over capital")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Sacrificing Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "Old Share - New Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "New Partner's Goodwill:"),
          React.createElement("p", { className: "text-green-700" }, "Total Goodwill × New Partner's Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Hidden Goodwill:"),
          React.createElement("p", { className: "text-green-700" }, "Amount Paid - Capital Brought")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Total Goodwill Value:"),
          React.createElement("p", { className: "text-green-700" }, "Hidden Goodwill × Reciprocal of New Share")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing sacrificing ratio with new profit sharing ratio"),
          React.createElement("li", null, "• Forgetting to distribute revaluation/reserves to old partners only"),
          React.createElement("li", null, "• Wrong sacrificing ratio calculations"),
          React.createElement("li", null, "• Incorrect hidden goodwill calculations")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always calculate sacrificing ratio first"),
          React.createElement("li", null, "• Use old ratio for revaluation and reserves"),
          React.createElement("li", null, "• Follow sequence: Ratio → Goodwill → Revaluation → Reserves → Capital"),
          React.createElement("li", null, "• Double-check ratio calculations before journal entries")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Sacrificing ratio calculations (4-6 marks)"),
          React.createElement("li", null, "• Goodwill adjustment entries (4-6 marks)"),
          React.createElement("li", null, "• Revaluation account preparation (6-8 marks)"),
          React.createElement("li", null, "• Hidden goodwill problems (4-6 marks)"),
          React.createElement("li", null, "• Capital adjustment calculations (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Complete admission adjustment problems (12-16 marks)"),
          React.createElement("li", null, "• Journal entries only (6-8 marks)"),
          React.createElement("li", null, "• Ratio calculations (4-6 marks)"),
          React.createElement("li", null, "• Theory questions on sacrificing ratio (4-6 marks)")
        )
      )
    )
  )
};