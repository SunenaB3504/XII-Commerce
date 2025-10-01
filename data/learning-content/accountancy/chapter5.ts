import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter5Module: LearningModule = {
  chapter: "5",
  title: "Dissolution of Partnership Firm",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 5 explores the complete winding up of a partnership firm, where the business ceases to exist entirely. This critical topic involves systematic closure of all accounts through the Realisation Account, settlement of liabilities, and distribution of remaining assets among partners."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master the Realisation Account preparation, partner capital account settlements, Section 48 rules for asset distribution, and journal entries for dissolution. Understanding these procedures is essential for both theoretical questions and practical dissolution scenarios."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-red-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-red-700" },
        React.createElement("li", null, "• Realisation Account preparation (8-10 marks)"),
        React.createElement("li", null, "• Partner capital account settlements (6-8 marks)"),
        React.createElement("li", null, "• Section 48 asset distribution rules (4-6 marks)"),
        React.createElement("li", null, "• Journal entries for dissolution (4-6 marks)"),
        React.createElement("li", null, "• Loss distribution and deficiency accounts (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Dissolution vs. Reconstitution",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Understanding the fundamental difference between dissolution of firm and dissolution of partnership is crucial for correct accounting treatment."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mt-4" },
          React.createElement("div", { className: "bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "Dissolution of Firm"),
            React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
              React.createElement("li", null, "• Business ceases to exist completely"),
              React.createElement("li", null, "• All assets sold, liabilities paid"),
              React.createElement("li", null, "• Partners' accounts settled finally"),
              React.createElement("li", null, "• Realisation Account prepared")
            )
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Dissolution of Partnership"),
            React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
              React.createElement("li", null, "• Business continues with remaining partners"),
              React.createElement("li", null, "• Only partner's share is settled"),
              React.createElement("li", null, "• Revaluation Account prepared"),
              React.createElement("li", null, "• Goodwill adjustments made")
            )
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4" },
          React.createElement("p", { className: "font-semibold text-yellow-800" }, "⚡ Key Distinction:"),
          React.createElement("p", { className: "text-yellow-700 mt-1" }, "Dissolution of firm = Business ENDS. Dissolution of partnership = Business CONTINUES.")
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "FIRM vs PARTNERSHIP"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Firm dissolution: Business ends, Realisation Account. Partnership dissolution: Business continues, Revaluation Account")
      ),
      example: React.createElement("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700" }, "A, B, C partnership dissolves. If only C retires, it's dissolution of partnership. If A, B, C all leave and business ends, it's dissolution of firm.")
      )
    },
    {
      title: "Modes of Dissolution",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "A partnership firm can be dissolved through various methods as specified in the Partnership Act, 1932."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "By Mutual Agreement (Section 40)"),
            React.createElement("p", { className: "text-green-700 text-sm" }, "All partners agree to dissolve the firm. Most common method requiring consent of all partners.")
          ),
          React.createElement("div", { className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Compulsory Dissolution (Section 41)"),
            React.createElement("p", { className: "text-blue-700 text-sm" }, "Court orders dissolution when business becomes illegal, partners become insolvent, or other specified conditions.")
          ),
          React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "On Happening of Event (Section 42)"),
            React.createElement("p", { className: "text-purple-700 text-sm" }, "Automatic dissolution when partnership is for fixed term/undertaking and term expires or undertaking completed.")
          ),
          React.createElement("div", { className: "bg-orange-50 border-2 border-orange-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "By Notice (Section 43)"),
            React.createElement("p", { className: "text-orange-700 text-sm" }, "Partner gives notice to dissolve partnership at will. Requires notice period as per agreement.")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "M-C-H-N - Dissolution Modes"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Mutual agreement, Compulsory by court, Happening of event, Notice by partner")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Example:"),
        React.createElement("p", { className: "text-gray-700 text-sm" }, "A, B, C partnership for 5 years. When 5 years complete, firm dissolves automatically under Section 42.")
      )
    },
    {
      title: "Realisation Account",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The Realisation Account is prepared to record the sale of assets and payment of liabilities during dissolution. It determines the profit or loss on dissolution."
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" },
          React.createElement("div", { className: "bg-red-50 border-2 border-red-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "Debit Side:"),
            React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
              React.createElement("li", null, "• All assets (except cash/bank/fictitious)"),
              React.createElement("li", null, "• Payment of liabilities"),
              React.createElement("li", null, "• Realisation expenses"),
              React.createElement("li", null, "• Loss on dissolution")
            )
          ),
          React.createElement("div", { className: "bg-green-50 border-2 border-green-200 rounded-lg p-4" },
            React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Credit Side:"),
            React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
              React.createElement("li", null, "• All external liabilities"),
              React.createElement("li", null, "• Cash received from asset sales"),
              React.createElement("li", null, "• Profit on dissolution")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Key Points:"),
          React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Assets transferred at book value"),
            React.createElement("li", null, "• Liabilities transferred at book value"),
            React.createElement("li", null, "• Final P/L distributed to partners' capital accounts")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "REALISE - Realisation Account"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Record assets debit, External liabilities credit, Sale proceeds credit, Expenses debit")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Journal Entries Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "1. Transfer assets to Realisation Account:"),
          React.createElement("p", null, "Realisation A/c Dr. ₹50,000"),
          React.createElement("p", null, "To Sundry Assets A/c ₹50,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "2. Transfer liabilities to Realisation Account:"),
          React.createElement("p", null, "Sundry Creditors A/c Dr. ₹20,000"),
          React.createElement("p", null, "To Realisation A/c ₹20,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "3. Sale of assets:"),
          React.createElement("p", null, "Bank A/c Dr. ₹45,000"),
          React.createElement("p", null, "To Realisation A/c ₹45,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "4. Payment of liabilities:"),
          React.createElement("p", null, "Realisation A/c Dr. ₹20,000"),
          React.createElement("p", null, "To Bank A/c ₹20,000")
        )
      )
    },
    {
      title: "Partner Capital Accounts",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "During dissolution, partners' capital accounts are adjusted for all accumulated profits, losses, and final settlements."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Adjustments Made:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-green-700 text-sm" },
            React.createElement("li", null, "• Transfer accumulated profits/reserves"),
            React.createElement("li", null, "• Transfer realisation profit/loss"),
            React.createElement("li", null, "• Settle partner loans (if any)"),
            React.createElement("li", null, "• Final cash distribution to partners")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Types of Capital Accounts:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, React.createElement("strong", null, "Fixed Capital Method:")),
            React.createElement("p", null, "• Separate Current Account maintained"),
            React.createElement("p", null, "• Capital Account shows fixed amount"),
            React.createElement("p", null, "• Current Account shows periodic adjustments"),
            React.createElement("p", null, ""),
            React.createElement("p", null, React.createElement("strong", null, "Fluctuating Capital Method:")),
            React.createElement("p", null, "• Single account for all transactions"),
            React.createElement("p", null, "• Capital balance fluctuates with profits/losses")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-cyan-800 text-center" }, "CAPITAL - Partner Accounts"),
        React.createElement("p", { className: "text-cyan-700 text-center text-sm mt-1" }, "Current account for fluctuating, Fixed capital separate, Accumulated profits transferred, Loans settled first")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Capital Account Settlement:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Partner A Capital Account:"),
          React.createElement("p", null, "Opening Balance: ₹50,000"),
          React.createElement("p", null, "Add: Share of General Reserve: ₹10,000"),
          React.createElement("p", null, "Add: Share of Realisation Profit: ₹5,000"),
          React.createElement("p", null, "Less: Final Payment: ₹65,000"),
          React.createElement("p", null, "Balance: Nil (settled)")
        )
      )
    },
    {
      title: "Section 48 - Order of Payment",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The Partnership Act, 1932 specifies the order in which assets must be applied for payment of liabilities upon dissolution."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Priority Order:"),
          React.createElement("ol", { className: "mt-2 space-y-2 text-red-700 text-sm" },
            React.createElement("li", null, React.createElement("strong", null, "First:"), " Payment of dissolution expenses including remuneration to partners"),
            React.createElement("li", null, React.createElement("strong", null, "Second:"), " All debts and liabilities to external parties"),
            React.createElement("li", null, React.createElement("strong", null, "Third:"), " Repayment of loans given by partners to the firm"),
            React.createElement("li", null, React.createElement("strong", null, "Fourth:"), " Repayment of capital contributed by partners"),
            React.createElement("li", null, React.createElement("strong", null, "Fifth:"), " Distribution of remaining surplus among partners")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Important Notes:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• External liabilities paid before partner claims"),
            React.createElement("li", null, "• Partner loans treated as external liabilities"),
            React.createElement("li", null, "• Capital repayment only after all external claims")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-orange-800 text-center" }, "48 RULE - Section 48 Order"),
        React.createElement("p", { className: "text-orange-700 text-center text-sm mt-1" }, "Expenses first, External debts second, Partner loans third, Capital fourth, Surplus last")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Section 48 Application:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-1" },
          React.createElement("p", null, "Available Assets: ₹2,00,000"),
          React.createElement("p", null, "1. Dissolution expenses: ₹10,000 → Paid"),
          React.createElement("p", null, "2. External creditors: ₹80,000 → Paid"),
          React.createElement("p", null, "3. Partner loans: ₹40,000 → Paid"),
          React.createElement("p", null, "4. Partner capital: ₹50,000 → Paid"),
          React.createElement("p", null, "5. Surplus: ₹20,000 → Distributed to partners")
        )
      )
    },
    {
      title: "Deficiency Account",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a partner's capital account shows a debit balance after all adjustments, a Deficiency Account is prepared to determine the amount each solvent partner must contribute."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "When Created:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-purple-700 text-sm" },
            React.createElement("li", null, "• Partner's capital account has debit balance"),
            React.createElement("li", null, "• Partner is insolvent (cannot pay deficiency)"),
            React.createElement("li", null, "• Deficiency shared by solvent partners")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• Insolvent partner's deficiency debited to Deficiency Account"),
            React.createElement("p", null, "• Solvent partners' share of deficiency credited to Deficiency Account"),
            React.createElement("p", null, "• Final balance transferred to solvent partners' capital accounts")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "DEFICIENCY - Insolvent Partner"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Debit balance in capital, Insolvent partner, Deficiency shared by solvent partners")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Deficiency Account Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Partner C (insolvent) deficiency: ₹30,000"),
          React.createElement("p", null, "Partners A and B share equally"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Deficiency Account:"),
          React.createElement("p", null, "To C's Capital A/c ₹30,000"),
          React.createElement("p", null, "By A's Capital A/c ₹15,000"),
          React.createElement("p", null, "By B's Capital A/c ₹15,000")
        )
      )
    },
    {
      title: "Garner vs. Murray Rule",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When a partner becomes insolvent, the deficiency is shared by solvent partners in the ratio of their capital balances after all adjustments."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Rule Application:"),
          React.createElement("ul", { className: "mt-2 space-y-2 text-green-700 text-sm" },
            React.createElement("li", null, "• Calculate final capital balances after all adjustments"),
            React.createElement("li", null, "• Insolvent partner's deficiency shared by solvent partners"),
            React.createElement("li", null, "• Sharing ratio = Final capital balances of solvent partners")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Key Difference from Profit Sharing Ratio:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "• Profit sharing ratio is agreed ratio for profit distribution"),
            React.createElement("p", null, "• Garner vs. Murray ratio is based on final capital balances"),
            React.createElement("p", null, "• Used only when partner becomes insolvent during dissolution")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "GARNER - Deficiency Sharing"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Garner vs Murray rule, Applied when insolvent, Ratio of final capital balances")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Garner vs. Murray Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Final capital balances: A ₹50,000, B ₹30,000, C ₹(10,000)"),
          React.createElement("p", null, "C's deficiency ₹10,000 shared by A and B"),
          React.createElement("p", null, "Sharing ratio = 50,000 : 30,000 = 5:3"),
          React.createElement("p", null, "A bears ₹10,000 × 5/8 = ₹6,250"),
          React.createElement("p", null, "B bears ₹10,000 × 3/8 = ₹3,750")
        )
      )
    },
    {
      title: "Dissolution Journal Entries",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Systematic journal entries are required for all dissolution transactions to properly record the winding up process."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Key Journal Entries:"),
          React.createElement("div", { className: "space-y-3 text-blue-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Transfer Assets to Realisation Account:"),
              React.createElement("p", null, "Realisation A/c Dr."),
              React.createElement("p", null, "To Assets A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Transfer Liabilities to Realisation Account:"),
              React.createElement("p", null, "Liabilities A/c Dr."),
              React.createElement("p", null, "To Realisation A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Sale of Assets:"),
              React.createElement("p", null, "Bank/Cash A/c Dr."),
              React.createElement("p", null, "To Realisation A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Payment of Liabilities:"),
              React.createElement("p", null, "Realisation A/c Dr."),
              React.createElement("p", null, "To Bank/Cash A/c")
            )
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-indigo-50 border-2 border-indigo-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-indigo-800 text-center" }, "T-T-S-P - Dissolution Entries"),
        React.createElement("p", { className: "text-indigo-700 text-center text-sm mt-1" }, "Transfer assets, Transfer liabilities, Sale of assets, Payment of liabilities")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Complete Dissolution Entries:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "5. Transfer Reserves to Partners:"),
          React.createElement("p", null, "General Reserve A/c Dr."),
          React.createElement("p", null, "To Partners' Capital A/cs"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "6. Close Realisation Account:"),
          React.createElement("p", null, "Realisation A/c Dr. (if loss)"),
          React.createElement("p", null, "To Partners' Capital A/cs"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "7. Final Settlement:"),
          React.createElement("p", null, "Partners' Capital A/cs Dr."),
          React.createElement("p", null, "To Bank/Cash A/c")
        )
      )
    }
  ],
  keywords: [
    { term: "Dissolution of Firm", definition: "Complete closure of partnership business where all assets are sold, liabilities paid, and accounts settled finally" },
    { term: "Realisation Account", definition: "Account prepared during dissolution to record sale of assets and payment of liabilities, determining profit or loss on dissolution" },
    { term: "Section 48", definition: "Partnership Act provision specifying order of payment of liabilities upon dissolution" },
    { term: "Deficiency Account", definition: "Account prepared when insolvent partner cannot pay deficiency, shared by solvent partners" },
    { term: "Garner vs. Murray Rule", definition: "Rule for sharing insolvent partner's deficiency in ratio of final capital balances of solvent partners" },
    { term: "Partner Loans", definition: "Loans given by partners to firm, treated as external liabilities under Section 48" },
    { term: "Dissolution Expenses", definition: "Costs incurred during winding up process, paid first under Section 48" },
    { term: "Insolvent Partner", definition: "Partner whose capital account shows debit balance and cannot contribute deficiency amount" },
    { term: "Solvent Partners", definition: "Partners who can contribute their share of insolvent partner's deficiency" },
    { term: "Final Settlement", definition: "Last step in dissolution where remaining cash is distributed to partners according to Section 48" }
  ],
  caseStudies: [
    {
      title: "Complete Firm Dissolution with Loss",
      scenario: "A, B, C partners sharing profits 3:2:1 decide to dissolve their firm. Balance Sheet shows: Cash ₹10,000, Stock ₹50,000, Debtors ₹30,000, Furniture ₹20,000, Creditors ₹25,000, General Reserve ₹15,000. Stock sold for ₹45,000, Debtors realised ₹28,000, Furniture sold for ₹15,000, Creditors paid ₹24,000. Dissolution expenses ₹2,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Realisation Account"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Debit Side: Stock ₹50,000, Debtors ₹30,000, Furniture ₹20,000, Creditors ₹25,000, Expenses ₹2,000"),
            React.createElement("p", null, "Credit Side: Cash from stock ₹45,000, Debtors ₹28,000, Furniture ₹15,000"),
            React.createElement("p", null, "Total Debit: ₹1,27,000 | Total Credit: ₹88,000"),
            React.createElement("p", null, "Loss on Realisation: ₹39,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Capital Accounts"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve distributed: A ₹9,000, B ₹6,000, C ₹0 (3:2:1)"),
            React.createElement("p", null, "Realisation Loss: A ₹23,400, B ₹15,600, C ₹0 (3:2:1)"),
            React.createElement("p", null, "Final balances: A ₹(14,400), B ₹(9,600), C ₹0")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Final Settlement"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Cash available: ₹10,000 + ₹45,000 + ₹28,000 + ₹15,000 - ₹24,000 - ₹2,000 = ₹72,000"),
            React.createElement("p", null, "Section 48: Pay dissolution expenses (already paid), external creditors (already paid)"),
            React.createElement("p", null, "Remaining ₹72,000 distributed to partners in 3:2:1 ratio")
          )
        )
      )
    },
    {
      title: "Dissolution with Insolvent Partner",
      scenario: "P, Q, R partners sharing profits equally. Firm dissolved. After all adjustments: P's capital ₹40,000, Q's capital ₹30,000, R's capital ₹(20,000). R is insolvent and cannot contribute. Apply Garner vs. Murray rule.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Deficiency Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "R's deficiency = ₹20,000 (debit balance)"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Solvent partners: P and Q with final capitals ₹40,000 and ₹30,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Garner vs. Murray ratio = 40,000 : 30,000 = 4:3")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Deficiency Account"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Deficiency Account:"),
            React.createElement("p", null, "To R's Capital A/c ₹20,000"),
            React.createElement("p", null, "By P's Capital A/c ₹20,000 × 4/7 = ₹11,429"),
            React.createElement("p", null, "By Q's Capital A/c ₹20,000 × 3/7 = ₹8,571")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Final Capital Balances"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "P's final balance: ₹40,000 - ₹11,429 = ₹28,571"),
            React.createElement("p", null, "Q's final balance: ₹30,000 - ₹8,571 = ₹21,429"),
            React.createElement("p", null, "R's final balance: ₹0 (insolvent)")
          )
        )
      )
    },
    {
      title: "Dissolution with Partner Loans",
      scenario: "X, Y, Z partners sharing profits 2:2:1. Firm dissolved. Assets realised ₹1,50,000, liabilities paid ₹50,000. X had given loan of ₹20,000 to firm. General Reserve ₹30,000. Dissolution expenses ₹5,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Section 48 Application"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Available assets: ₹1,50,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "1. Dissolution expenses: ₹5,000 → Paid"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "2. External liabilities: ₹50,000 → Paid"),
          React.createElement("p", null, "3. Partner loans: ₹20,000 → Paid to X"),
          React.createElement("p", null, "Remaining: ₹1,50,000 - ₹5,000 - ₹50,000 - ₹20,000 = ₹75,000")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Capital Adjustments"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve distributed: X ₹15,000, Y ₹15,000, Z ₹0 (2:2:1)"),
            React.createElement("p", null, "X's loan repayment: ₹20,000 (additional to capital)"),
            React.createElement("p", null, "Remaining ₹75,000 distributed as capital repayment")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Final Distribution"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Capital repayment ratio: 2:2:1"),
            React.createElement("p", null, "X receives: ₹15,000 (reserve) + ₹20,000 (loan) + ₹30,000 (capital) = ₹65,000"),
            React.createElement("p", null, "Y receives: ₹15,000 (reserve) + ₹30,000 (capital) = ₹45,000"),
            React.createElement("p", null, "Z receives: ₹15,000 (capital) = ₹15,000")
          )
        )
      )
    },
    {
      title: "Complex Dissolution with Profit",
      scenario: "M, N, O partners sharing profits 3:2:1. Firm dissolved. Assets realised ₹2,00,000 at book value ₹1,80,000. All liabilities paid. General Reserve ₹40,000, P&L Account (credit) ₹20,000. Dissolution expenses ₹8,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Step 1: Realisation Account"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Assets realised at profit: ₹20,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Dissolution expenses: ₹8,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Net Realisation Profit: ₹12,000 (₹20,000 - ₹8,000)")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Step 2: Reserves Distribution"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "General Reserve: M ₹24,000, N ₹16,000, O ₹0 (3:2:1)"),
            React.createElement("p", null, "P&L Account: M ₹12,000, N ₹8,000, O ₹0 (3:2:1)"),
            React.createElement("p", null, "Realisation Profit: M ₹7,200, N ₹4,800, O ₹0 (3:2:1)")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Step 3: Final Settlement"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Cash available: ₹2,00,000 - ₹8,000 (expenses) = ₹1,92,000"),
            React.createElement("p", null, "All external liabilities assumed paid"),
            React.createElement("p", null, "Total distributable amount: ₹1,92,000"),
            React.createElement("p", null, "Partners receive their capital + accumulated profits")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Dissolution of firm = Business ENDS (Realisation Account)"),
        React.createElement("li", null, "• Section 48: Expenses → External debts → Partner loans → Capital → Surplus"),
        React.createElement("li", null, "• Insolvent partner deficiency shared by solvent partners"),
        React.createElement("li", null, "• Garner vs. Murray ratio = Final capital balances of solvent partners"),
        React.createElement("li", null, "• Realisation P/L distributed in profit sharing ratio")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Realisation Profit/Loss:"),
          React.createElement("p", { className: "text-green-700" }, "Credit Side - Debit Side")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Garner vs. Murray Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "Final Capital Balances of Solvent Partners")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Deficiency Share:"),
          React.createElement("p", { className: "text-green-700" }, "Insolvent Deficiency × Partner's Ratio")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Final Settlement:"),
          React.createElement("p", { className: "text-green-700" }, "Capital + Reserves + P/L Share")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing dissolution of firm vs. dissolution of partnership"),
          React.createElement("li", null, "• Wrong Section 48 priority order"),
          React.createElement("li", null, "• Incorrect Garner vs. Murray ratio application"),
          React.createElement("li", null, "• Forgetting to transfer reserves before final settlement")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always prepare Realisation Account first"),
          React.createElement("li", null, "• Follow Section 48 order strictly"),
          React.createElement("li", null, "• Calculate final capital balances before deficiency sharing"),
          React.createElement("li", null, "• Double-check profit sharing ratio for all distributions")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Realisation Account preparation (8-10 marks)"),
          React.createElement("li", null, "• Section 48 application (6-8 marks)"),
          React.createElement("li", null, "• Partner capital account settlements (6-8 marks)"),
          React.createElement("li", null, "• Insolvent partner problems (4-6 marks)"),
          React.createElement("li", null, "• Garner vs. Murray rule (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Complete dissolution problems (12-16 marks)"),
          React.createElement("li", null, "• Realisation Account only (6-8 marks)"),
          React.createElement("li", null, "• Section 48 priority problems (4-6 marks)"),
          React.createElement("li", null, "• Deficiency account problems (4-6 marks)"),
          React.createElement("li", null, "• Theory questions on dissolution modes (4-6 marks)")
        )
      )
    )
  )
};