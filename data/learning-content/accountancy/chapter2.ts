import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "Reconstitution of a Partnership Firm – Admission of a Partner",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 2 dives deep into the accounting implications when a new partner joins an existing partnership firm. This is a crucial topic for CBSE Board exams as it involves complex calculations and journal entries that can fetch you 15-20 marks in your final examination."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "The chapter covers the complete process of admitting a new partner, including profit sharing ratio adjustments, goodwill valuation and treatment, asset revaluation, and capital adjustments. Master these concepts and you'll be well-prepared for both theoretical and numerical questions."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-blue-800" }, "\uD83D\uDD25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
        React.createElement("li", null, "• New Profit Sharing Ratio calculations (4-6 marks)"),
        React.createElement("li", null, "• Sacrificing Ratio determination (2-4 marks)"),
        React.createElement("li", null, "• Goodwill valuation methods (6-8 marks)"),
        React.createElement("li", null, "• Journal entries for admission (4-6 marks)"),
        React.createElement("li", null, "• Revaluation Account preparation (6-8 marks)"),
        React.createElement("li", null, "• Capital adjustment entries (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Modes of Reconstitution of Partnership Firm",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Reconstitution of a partnership firm occurs when there's a change in the existing partnership agreement, leading to a new agreement among the partners. This can happen in several ways:"
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mt-4" },
          React.createElement("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "1. Admission of New Partner"),
            React.createElement("p", { className: "text-green-700 text-sm" }, "Brings additional capital and expertise. Requires unanimous consent of existing partners.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "2. Change in Profit Sharing Ratio"),
            React.createElement("p", { className: "text-blue-700 text-sm" }, "Existing partners may change their profit sharing ratio due to changed roles or capital contributions.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "3. Retirement of Partner"),
            React.createElement("p", { className: "text-orange-700 text-sm" }, "Partner withdraws from business due to age, health, or other reasons.")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "4. Death of Partner"),
            React.createElement("p", { className: "text-red-700 text-sm" }, "Remaining partners continue business, deceased partner's share is settled.")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "⚡ Key Point:"),
          React.createElement("p", { className: "text-yellow-700 mt-1" }, "In all cases of reconstitution, the firm continues to exist, but with changed relationships among partners.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "ACRE - Modes of Reconstitution"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Admission, Change in ratio, Retirement, Exit (Death)")
      ),
      example: React.createElement("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700" }, "Hari and Haqque are partners sharing profits 3:2. They admit John for 1/6 share. This admission reconstitutes the firm with new profit sharing arrangements.")
      )
    },
    {
      title: "New Profit Sharing Ratio",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a new partner is admitted, the existing profit sharing ratio changes. The new partner acquires his share from the old partners, who sacrifice a portion of their existing shares."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Key Principles:"),
          React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
            React.createElement("li", null, "• New partner's share is specified in the agreement"),
            React.createElement("li", null, "• Remaining share goes to old partners in old ratio (unless specified otherwise)"),
            React.createElement("li", null, "• Old partners sacrifice their shares in favor of new partner")
          )
        ),
        React.createElement("div", { className: "mt-4" },
          React.createElement("h4", { className: "font-bold text-gray-800 mb-2" }, "Calculation Method:"),
          React.createElement("div", { className: "bg-gray-100 p-3 rounded font-mono text-sm" },
            "New Share of Old Partner = Old Share - Share Sacrificed to New Partner"
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-green-800 text-center" }, "SONS - New Ratio Steps"),
        React.createElement("p", { className: "text-green-700 text-center text-sm mt-1" }, "Specified new share, Old ratio for remaining, Subtract sacrificed, New ratio complete")
      ),
      example: React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 1: Equal Sacrifice"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "A and B share profits 3:2. Admit C for 1/5 share equally from A and B."),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "C's share = 1/5"),
            React.createElement("p", null, "A sacrifices = 1/5 × 1/2 = 1/10"),
            React.createElement("p", null, "B sacrifices = 1/5 × 1/2 = 1/10"),
            React.createElement("p", null, "New ratio: A(3/5-1/10)=5/10, B(2/5-1/10)=3/10, C=2/10 → 5:3:2")
          )
        ),
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Example 2: Specified Sacrifice"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "Ram and Shyam share 3:2. Ram sacrifices 1/4 of his share, Shyam 1/3 of his share to Ghanshyam."),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Ram's sacrifice = 3/5 × 1/4 = 3/20"),
            React.createElement("p", null, "Shyam's sacrifice = 2/5 × 1/3 = 2/15"),
            React.createElement("p", null, "Ghanshyam's share = 3/20 + 2/15 = 17/60"),
            React.createElement("p", null, "New ratio: Ram(9/20), Shyam(4/15), Ghanshyam(17/60) → 27:16:17")
          )
        )
      )
    },
    {
      title: "Sacrificing Ratio",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The ratio in which old partners sacrifice their share of profits in favor of the new partner is called sacrificing ratio. This ratio determines how goodwill brought by the new partner is distributed among old partners."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Calculation Methods:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-red-700" },
            React.createElement("li", null, "• When specified: Use the ratio given in the problem"),
            React.createElement("li", null, "• When not specified: Assume old profit sharing ratio"),
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
        React.createElement("p", { className: "font-bold text-orange-800 text-center" }, "SOLD - Sacrificing Ratio"),
        React.createElement("p", { className: "text-orange-700 text-center text-sm mt-1" }, "Specified, Old ratio, Lose share, Divide goodwill")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "Rohit and Mohit share profits 5:3. Admit Bijoy for 1/7 share. New ratio becomes 4:2:1."),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "Rohit's old share = 5/8, new share = 4/7"),
          React.createElement("p", null, "Rohit's sacrifice = 5/8 - 4/7 = (35-32)/56 = 3/56"),
          React.createElement("p", null, "Mohit's old share = 3/8, new share = 2/7"),
          React.createElement("p", null, "Mohit's sacrifice = 3/8 - 2/7 = (21-16)/56 = 5/56"),
          React.createElement("p", null, "Sacrificing ratio = 3:5")
        )
      )
    },
    {
      title: "Goodwill: Meaning and Factors",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Goodwill is the monetary value of the advantage or reputation that a business has acquired over its competitors. It represents the present value of expected future super profits."
        ),
        React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Definition:"),
          React.createElement("p", { className: "text-purple-700 italic" }, "\"The present value of a firm's anticipated excess earnings\" or \"The capitalized value attached to the differential profit capacity of a business\"")
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mt-4" },
          React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-3" },
            React.createElement("h5", { className: "font-bold text-green-800" }, "Factors Increasing Goodwill:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Quality products/services"),
              React.createElement("li", null, "• Efficient management"),
              React.createElement("li", null, "• Good location"),
              React.createElement("li", null, "• Monopoly position"),
              React.createElement("li", null, "• Special advantages")
            )
          ),
          React.createElement("div", { className: "bg-red-50 border border-red-200 rounded-lg p-3" },
            React.createElement("h5", { className: "font-bold text-red-800" }, "When Goodwill Exists:"),
            React.createElement("ul", { className: "mt-2 space-y-1 text-red-700 text-sm" },
              React.createElement("li", null, "• Firm earns super profits"),
              React.createElement("li", null, "• Above normal returns"),
              React.createElement("li", null, "• Competitive advantage")
            )
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-indigo-50 border-2 border-indigo-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-indigo-800 text-center" }, "SUPER - Goodwill Factors"),
        React.createElement("p", { className: "text-indigo-700 text-center text-sm mt-1" }, "Special advantages, Unique products, Efficient management, Prime location, Reputation")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "A firm earns ₹50,000 profit on ₹5,00,000 capital. Normal return is 10% (₹50,000). Since actual profit equals normal profit, goodwill is zero.")
      )
    },
    {
      title: "Methods of Goodwill Valuation",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "grid md:grid-cols-3 gap-4" },
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 text-center mb-2" }, "1. Average Profits Method"),
            React.createElement("p", { className: "text-blue-700 text-sm" }, "Goodwill = Average Profit × Number of Years' Purchase"),
            React.createElement("p", { className: "text-blue-600 text-xs mt-2" }, "Simple/Weighted average of past profits")
          ),
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 text-center mb-2" }, "2. Super Profits Method"),
            React.createElement("p", { className: "text-green-700 text-sm" }, "Goodwill = Super Profit × Years' Purchase"),
            React.createElement("p", { className: "text-green-600 text-xs mt-2" }, "Super Profit = Average Profit - Normal Profit")
          ),
          React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-purple-800 text-center mb-2" }, "3. Capitalisation Method"),
            React.createElement("p", { className: "text-purple-700 text-sm" }, "Goodwill = Capitalised Value - Net Assets"),
            React.createElement("p", { className: "text-purple-600 text-xs mt-2" }, "Or Goodwill = Super Profit × 100/Normal Rate")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "⚡ Key Points:"),
          React.createElement("ul", { className: "mt-2 space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Method chosen affects goodwill value"),
            React.createElement("li", null, "• Must be agreed upon by all partners"),
            React.createElement("li", null, "• Capitalisation method gives same result as super profits method")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "ASC - Goodwill Methods"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Average profits, Super profits, Capitalisation")
      ),
      example: React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Average Profits Method:"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "Profits: Year 1 ₹40,000, Year 2 ₹50,000, Year 3 ₹55,000, Year 4 ₹70,000, Year 5 ₹85,000"),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Average Profit = ₹3,00,000 ÷ 5 = ₹60,000"),
            React.createElement("p", null, "Goodwill = ₹60,000 × 3 years = ₹1,80,000")
          )
        ),
        React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
          React.createElement("p", { className: "font-semibold text-gray-800" }, "Super Profits Method:"),
          React.createElement("p", { className: "text-gray-700 text-sm" }, "Capital ₹5,00,000, Normal rate 10%, Average profit ₹60,000"),
          React.createElement("div", { className: "bg-gray-50 p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Normal Profit = ₹5,00,000 × 10% = ₹50,000"),
            React.createElement("p", null, "Super Profit = ₹60,000 - ₹50,000 = ₹10,000"),
            React.createElement("p", null, "Goodwill = ₹10,000 × 3 = ₹30,000")
          )
        )
      )
    },
    {
      title: "Treatment of Goodwill on Admission",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a new partner is admitted, goodwill is treated differently based on whether it exists in books and whether the new partner brings goodwill in cash."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "New Partner Brings Goodwill:"),
            React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• Debit Cash/Bank Account"),
              React.createElement("li", null, "• Credit New Partner's Capital"),
              React.createElement("li", null, "• Debit Premium for Goodwill"),
              React.createElement("li", null, "• Credit Old Partners' Capital (sacrificing ratio)")
            )
          ),
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "New Partner Doesn't Bring Goodwill:"),
            React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• Debit New Partner's Current Account"),
              React.createElement("li", null, "• Credit Old Partners' Capital (sacrificing ratio)")
            )
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border-l-4 border-orange-400 p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800" }, "When Goodwill Exists in Books:"),
          React.createElement("p", { className: "text-orange-700 text-sm mt-1" }, "Existing goodwill is written off by debiting old partners' capital accounts in old ratio and crediting goodwill account.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "BRING - Goodwill Treatment"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Brought in cash, Recorded in books, In sacrificing ratio, Goodwill distributed")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Journal Entries Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Bank A/c Dr. ₹24,000"),
          React.createElement("p", null, "To Sachin's Capital A/c ₹20,000"),
          React.createElement("p", null, "To Premium for Goodwill A/c ₹4,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Premium for Goodwill A/c Dr. ₹4,000"),
          React.createElement("p", null, "To Sunil's Capital A/c ₹2,500"),
          React.createElement("p", null, "To Dalip's Capital A/c ₹1,500"),
          React.createElement("p", null, "(Goodwill distributed in sacrificing ratio 5:3)")
        )
      )
    },
    {
      title: "Revaluation of Assets and Reassessment of Liabilities",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "At the time of admission, assets and liabilities are revalued to reflect their current market values. This ensures fair distribution of gains/losses among partners."
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
          React.createElement("p", { className: "text-yellow-700" }, "Transfer revaluation profit/loss to old partners' capital accounts in old profit sharing ratio.")
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
          React.createElement("p", null, "Stock reduced by 10%: Revaluation A/c Dr. ₹1,500 To Stock A/c ₹1,500"),
          React.createElement("p", null, "Plant & Machinery appreciated by 10%: P&M A/c Dr. ₹3,000 To Revaluation A/c ₹3,000"),
          React.createElement("p", null, "Provision for doubtful debts created: Revaluation A/c Dr. ₹600 To Provision A/c ₹600"),
          React.createElement("p", null, "Net profit ₹1,900 transferred to old partners in old ratio")
        )
      )
    },
    {
      title: "Adjustment for Accumulated Profits and Losses",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Accumulated profits (reserves, general reserve) and losses (debit balance in P&L account) are distributed to old partners in their old profit sharing ratio, as the new partner is not entitled to them."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "For Accumulated Profits:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "General Reserve A/c Dr."),
            React.createElement("p", null, "To Old Partner A Capital A/c"),
            React.createElement("p", null, "To Old Partner B Capital A/c")
          )
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "For Accumulated Losses:"),
          React.createElement("div", { className: "bg-white p-2 rounded text-sm mt-2" },
            React.createElement("p", null, "Old Partner A Capital A/c Dr."),
            React.createElement("p", null, "Old Partner B Capital A/c Dr."),
            React.createElement("p", null, "To Profit & Loss A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "PAL - Accumulated Adjustments"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Profits to all old partners, Accumulated in old ratio, Losses from old partners")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "General Reserve ₹20,000, P&L debit balance ₹10,000, Partners A:B = 4:1"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "General Reserve A/c Dr. ₹20,000"),
          React.createElement("p", null, "To A's Capital A/c ₹16,000"),
          React.createElement("p", null, "To B's Capital A/c ₹4,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "A's Capital A/c Dr. ₹8,000"),
          React.createElement("p", null, "B's Capital A/c Dr. ₹2,000"),
          React.createElement("p", null, "To P&L A/c ₹10,000")
        )
      )
    },
    {
      title: "Adjustment of Partners' Capitals",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Sometimes partners agree that their capitals should be proportionate to the new profit sharing ratio. Excess capital is withdrawn, deficiency is brought in by partners."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Steps for Capital Adjustment:"),
          React.createElement("ol", { className: "mt-2 space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "1. Calculate total capital of firm (New partner's capital × Reciprocal of share)"),
            React.createElement("li", null, "2. Calculate each partner's required capital (Total capital × Share)"),
            React.createElement("li", null, "3. Compare with adjusted capital after all other adjustments"),
            React.createElement("li", null, "4. Partner with excess withdraws, partner with deficiency brings in capital")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "Journal Entries:"),
          React.createElement("div", { className: "text-yellow-700 text-sm space-y-1" },
            React.createElement("p", null, "For excess capital: Partner's Capital A/c Dr. To Cash/Bank A/c"),
            React.createElement("p", null, "For deficiency: Cash/Bank A/c Dr. To Partner's Capital A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "CALC - Capital Adjustment"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Calculate total capital, Adjust to new ratio, Look at differences, Cash flows accordingly")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "A, B, C share profits 2:1:1. C brings ₹20,000 capital. Adjusted capitals: A ₹45,000, B ₹15,000."),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "Total capital = ₹20,000 × 4 = ₹80,000"),
          React.createElement("p", null, "Required: A ₹40,000, B ₹20,000, C ₹20,000"),
          React.createElement("p", null, "A withdraws ₹5,000, B brings in ₹5,000")
        )
      )
    }
  ],
  keywords: [
    { term: "Reconstitution", definition: "Change in partnership agreement leading to new relationship among partners" },
    { term: "New Profit Sharing Ratio", definition: "Ratio in which profits are shared after admission of new partner" },
    { term: "Sacrificing Ratio", definition: "Ratio in which old partners sacrifice their share in favor of new partner" },
    { term: "Goodwill", definition: "Monetary value of business reputation and expected future super profits" },
    { term: "Super Profits", definition: "Excess of actual profits over normal profits" },
    { term: "Revaluation Account", definition: "Account prepared to record gains/losses on revaluation of assets and liabilities" },
    { term: "Hidden Goodwill", definition: "Goodwill inferred from capital brought by new partner" },
    { term: "Premium for Goodwill", definition: "Amount paid by new partner for acquiring share in firm's goodwill" },
    { term: "Accumulated Profits", definition: "Reserves and undistributed profits not entitled to new partner" },
    { term: "Capital Adjustment", definition: "Process of making partners' capitals proportionate to new profit sharing ratio" }
  ],
  caseStudies: [
    {
      title: "Admission with Goodwill and Revaluation",
      scenario: "A and B are partners sharing profits in the ratio of 3:2 with capitals of ₹1,00,000 and ₹80,000 respectively. They admit C as a new partner for 1/5 share in profits. C brings ₹50,000 as capital and ₹20,000 as goodwill. At the time of admission, stock is valued at ₹40,000 (book value ₹45,000) and furniture is valued at ₹30,000 (book value ₹25,000). A provision for doubtful debts @5% is to be created on debtors of ₹1,00,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "C's share = 1/5, Remaining share = 4/5"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "A's new share = 3/5 × 4/5 = 12/25"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "B's new share = 2/5 × 4/5 = 8/25"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "New ratio = 12:8:5 or 12:8:5")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Sacrificing Ratio"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Assuming sacrifice in old ratio (3:2)"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "A sacrifices = 3/5 × 1/5 = 3/25"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "B sacrifices = 2/5 × 1/5 = 2/25"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Sacrificing ratio = 3:2")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Account"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock reduced by ₹5,000: Revaluation A/c Dr. ₹5,000 To Stock A/c ₹5,000"),
            React.createElement("p", null, "Furniture increased by ₹5,000: Furniture A/c Dr. ₹5,000 To Revaluation A/c ₹5,000"),
            React.createElement("p", null, "Provision for doubtful debts ₹5,000: Revaluation A/c Dr. ₹5,000 To Provision A/c ₹5,000"),
            React.createElement("p", null, "Net loss ₹5,000 distributed to A and B in 3:2 ratio")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Journal Entries"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Bank A/c Dr. ₹70,000"),
            React.createElement("p", null, "To C's Capital A/c ₹50,000"),
            React.createElement("p", null, "To Premium for Goodwill A/c ₹20,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Premium for Goodwill A/c Dr. ₹20,000"),
            React.createElement("p", null, "To A's Capital A/c ₹12,000"),
            React.createElement("p", null, "To B's Capital A/c ₹8,000")
          )
        )
      )
    },
    {
      title: "Hidden Goodwill and Capital Adjustment",
      scenario: "P and Q are partners sharing profits equally with capitals of ₹1,00,000 each. They admit R for 1/3 share. R brings ₹80,000 as capital. At the time of admission, goodwill is to be valued at 3 years' purchase of super profits. Average profits are ₹40,000 and normal rate of return is 10%. Partners agree to adjust their capitals in the new profit sharing ratio.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Hidden Goodwill Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "R's share = 1/3, Capital brought = ₹80,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Total capital implied = ₹80,000 × 3 = ₹2,40,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Actual total capital = ₹1,00,000 + ₹1,00,000 + ₹80,000 = ₹2,80,000"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Hidden goodwill = ₹2,80,000 - ₹2,40,000 = ₹40,000"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "R's share of goodwill = ₹40,000 × 1/3 = ₹13,333")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Assuming equal sacrifice: P and Q each sacrifice 1/6"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "New ratio: P(1/2 - 1/6) = 1/3, Q(1/2 - 1/6) = 1/3, R = 1/3"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "New ratio = 1:1:1")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Capital Adjustment"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Total capital = ₹2,40,000 (based on R's capital)"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Each partner's capital should be ₹80,000"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "P and Q already have ₹1,00,000 each - excess ₹20,000 each to be withdrawn")
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Journal Entries"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Bank A/c Dr. ₹80,000"),
            React.createElement("p", null, "To R's Capital A/c ₹80,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "R's Current A/c Dr. ₹13,333"),
            React.createElement("p", null, "To P's Capital A/c ₹6,667"),
            React.createElement("p", null, "To Q's Capital A/c ₹6,667"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "P's Capital A/c Dr. ₹20,000"),
            React.createElement("p", null, "Q's Capital A/c Dr. ₹20,000"),
            React.createElement("p", null, "To Bank A/c ₹40,000")
          )
        )
      )
    },
    {
      title: "Comprehensive Admission with Reserves",
      scenario: "X and Y are partners sharing profits in the ratio of 2:1 with capitals of ₹2,00,000 and ₹1,50,000. They have a general reserve of ₹50,000. Z is admitted for 1/4 share. Z brings ₹1,00,000 as capital. Goodwill is valued at ₹1,20,000. Stock is revalued at ₹80,000 (book value ₹75,000) and creditors are found to be overvalued by ₹5,000. Partners agree to adjust capitals in new profit sharing ratio.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Z's share = 1/4, Remaining = 3/4"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "X's new share = 2/3 × 3/4 = 1/2"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Y's new share = 1/3 × 3/4 = 1/4"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "New ratio = 2:1:1")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Goodwill Treatment"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Z's share of goodwill = ₹1,20,000 × 1/4 = ₹30,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Sacrificing ratio (old ratio) = 2:1"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "X gets = ₹30,000 × 2/3 = ₹20,000"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "Y gets = ₹30,000 × 1/3 = ₹10,000")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation and Reserves"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Stock appreciation ₹5,000: Stock A/c Dr. ₹5,000 To Revaluation A/c ₹5,000"),
            React.createElement("p", null, "Creditors overvalued ₹5,000: Revaluation A/c Dr. ₹5,000 To Creditors A/c ₹5,000"),
            React.createElement("p", null, "Net gain ₹10,000 to X and Y in 2:1 ratio"),
            React.createElement("p", null, "General reserve ₹50,000 to X and Y in 2:1 ratio")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Capital Adjustment"),
          React.createElement("p", { className: "text-orange-700 text-sm" }, "Total capital = ₹1,00,000 × 4 = ₹4,00,000"),
          React.createElement("p", { className: "text-orange-700 text-sm" }, "Required capitals: X ₹2,00,000, Y ₹1,00,000, Z ₹1,00,000"),
          React.createElement("p", { className: "text-orange-700 text-sm" }, "Calculate adjusted capitals after all entries and adjust accordingly")
        )
      )
    },
    {
      title: "Admission with Existing Goodwill",
      scenario: "M and N are partners sharing profits in the ratio of 3:2. Their balance sheet shows goodwill at ₹40,000. They admit O for 1/6 share. O brings ₹30,000 as capital and ₹8,000 as goodwill. The goodwill is to be valued at ₹48,000. Stock is revalued at ₹25,000 (book value ₹30,000).",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Goodwill Adjustment"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Existing goodwill ₹40,000 written off in old ratio (3:2)"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "M's share = ₹40,000 × 3/5 = ₹24,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "N's share = ₹40,000 × 2/5 = ₹16,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "New goodwill ₹48,000, O's share = ₹48,000 × 1/6 = ₹8,000")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: New Profit Sharing Ratio"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "O's share = 1/6, Remaining = 5/6"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "M's new share = 3/5 × 5/6 = 1/2"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "N's new share = 2/5 × 5/6 = 1/3"),
          React.createElement("p", { className: "text-green-700 text-sm" }, "New ratio = 3:2:1")
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Revaluation Loss"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Stock reduced by ₹5,000: Revaluation A/c Dr. ₹5,000 To Stock A/c ₹5,000"),
          React.createElement("p", { className: "text-purple-700 text-sm" }, "Loss ₹5,000 to M and N in old ratio (3:2)")
        ),
        React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Step 4: Journal Entries"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "Bank A/c Dr. ₹38,000"),
            React.createElement("p", null, "To O's Capital A/c ₹30,000"),
            React.createElement("p", null, "To Premium for Goodwill A/c ₹8,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "M's Capital A/c Dr. ₹24,000"),
            React.createElement("p", null, "N's Capital A/c Dr. ₹16,000"),
            React.createElement("p", null, "To Goodwill A/c ₹40,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Premium for Goodwill A/c Dr. ₹8,000"),
            React.createElement("p", null, "To M's Capital A/c ₹4,800"),
            React.createElement("p", null, "To N's Capital A/c ₹3,200")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4" },
      React.createElement("h3", { className: "font-bold text-blue-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
        React.createElement("li", null, "• New partner acquires share from old partners in sacrificing ratio"),
        React.createElement("li", null, "• Goodwill is distributed to old partners in sacrificing ratio"),
        React.createElement("li", null, "• Revaluation gains/losses go to old partners in old ratio"),
        React.createElement("li", null, "• Accumulated profits/losses distributed in old ratio"),
        React.createElement("li", null, "• Capital adjustments made to achieve proportionate capitals")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "New Profit Sharing Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "Old Partner's New Share = Old Share - Sacrificed Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Sacrificing Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "Sacrifice = Old Share - New Share")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Goodwill by Average Profits:"),
          React.createElement("p", { className: "text-green-700" }, "Goodwill = Average Profit × Years' Purchase")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Super Profits:"),
          React.createElement("p", { className: "text-green-700" }, "Super Profit = Average Profit - Normal Profit")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing sacrificing ratio with new profit sharing ratio"),
          React.createElement("li", null, "• Forgetting to write off existing goodwill"),
          React.createElement("li", null, "• Incorrect journal entries for goodwill treatment"),
          React.createElement("li", null, "• Wrong ratio for revaluation and reserve distribution")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always calculate new ratio first"),
          React.createElement("li", null, "• Use old ratio when sacrificing ratio not specified"),
          React.createElement("li", null, "• Follow sequence: Goodwill → Revaluation → Reserves → Capitals"),
          React.createElement("li", null, "• Double-check ratios before journal entries")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Goodwill valuation methods (8-10 marks)"),
          React.createElement("li", null, "• Journal entries for admission (6-8 marks)"),
          React.createElement("li", null, "• Revaluation account preparation (6-8 marks)"),
          React.createElement("li", null, "• New profit sharing ratio calculations (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Numerical problems with complete solution (12-16 marks)"),
          React.createElement("li", null, "• Journal entries only (6-8 marks)"),
          React.createElement("li", null, "• Ratio calculations (4-6 marks)"),
          React.createElement("li", null, "• Theory questions on goodwill (4-6 marks)")
        )
      )
    )
  )
};