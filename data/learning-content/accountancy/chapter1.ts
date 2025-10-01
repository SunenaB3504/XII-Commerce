import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Accounting for Partnership: Basic Concepts",
  overview: "Master the fundamentals of partnership accounting essential for CBSE Board Exams 2026. This chapter covers partnership formation, capital account maintenance, profit distribution, interest calculations, and adjustments - all frequently tested topics worth 15-20 marks in your exam. Learn with exam-focused explanations, step-by-step solutions, and practice problems modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Partnership Definition & Essential Features",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 
          "Partnership is the ", 
          React.createElement('b', null, "relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all"),
          " (Section 4, Indian Partnership Act 1932)."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Six Essential Features (EXAM IMPORTANT):"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, 
              React.createElement('b', null, "Two or More Persons: "), 
              "Minimum 2, Maximum 50 partners (Companies Act 2013)"
            ),
            React.createElement('li', null, 
              React.createElement('b', null, "Agreement: "), 
              "Oral or written agreement to form partnership (written deed recommended)"
            ),
            React.createElement('li', null, 
              React.createElement('b', null, "Business: "), 
              "Must carry on lawful business for profit (not just co-ownership of property)"
            ),
            React.createElement('li', null, 
              React.createElement('b', null, "Mutual Agency: "), 
              "Each partner is both principal and agent for others"
            ),
            React.createElement('li', null, 
              React.createElement('b', null, "Sharing of Profits & Losses: "), 
              "Must agree to share both profits and losses"
            ),
            React.createElement('li', null, 
              React.createElement('b', null, "Unlimited Liability: "), 
              "Partners' personal assets can be used to pay firm's debts"
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' }, 
          "💡 Remember: No separate legal entity - the firm and partners are one and the same in law!"
        )
      ),
      examFocus: true,
      mnemonic: "TAB MUS - Two persons, Agreement, Business, Mutual agency, Unlimited liability, Sharing profits"
    },
    {
      title: "Partnership Deed & Provisions When Deed is Silent",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 
          React.createElement('b', null, "Partnership Deed"), 
          " is the written agreement containing terms of partnership. It includes profit-sharing ratio, interest rates, salaries, admission/retirement rules, etc."
        ),
        React.createElement('div', { className: 'bg-red-50 border-2 border-red-300 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-2' }, "🎯 EXAM ALERT: When Partnership Deed is SILENT:"),
          React.createElement('table', { className: 'border-collapse border border-red-300 w-full mt-2 text-sm' },
            React.createElement('thead', null,
              React.createElement('tr', { className: 'bg-red-100' },
                React.createElement('th', { className: 'border border-red-300 p-2 text-left font-bold text-gray-900' }, "Item"),
                React.createElement('th', { className: 'border border-red-300 p-2 text-left font-bold text-gray-900' }, "Treatment (Indian Partnership Act 1932)")
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-red-300 p-2' }, "Profit Sharing Ratio"),
                React.createElement('td', { className: 'border border-red-300 p-2 font-semibold' }, "Equal (irrespective of capital)")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-red-300 p-2' }, "Interest on Capital"),
                React.createElement('td', { className: 'border border-red-300 p-2 font-semibold' }, "Nil (No interest allowed)")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-red-300 p-2' }, "Interest on Drawings"),
                React.createElement('td', { className: 'border border-red-300 p-2 font-semibold' }, "Nil (No interest charged)")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-red-300 p-2' }, "Partner's Salary/Remuneration"),
                React.createElement('td', { className: 'border border-red-300 p-2 font-semibold' }, "Nil (Not allowed)")
              ),
              React.createElement('tr', { className: 'bg-yellow-50' },
                React.createElement('td', { className: 'border border-red-300 p-2' }, "Interest on Partner's Loan"),
                React.createElement('td', { className: 'border border-red-300 p-2 font-bold text-green-700' }, "6% per annum (Compulsory)")
              )
            )
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' }, 
          "⚠️ This topic appears in MCQs worth 1 mark - memorize these rules!"
        )
      ),
      examFocus: true,
      example: "If A and B start partnership with capitals ₹5,00,000 and ₹3,00,000 respectively, but there's no partnership deed, they will share profits EQUALLY (1:1), NOT in capital ratio (5:3)!",
      mnemonic: "Deed Silent? Remember: Equal Profits, No Interest on Capital/Drawings, No Salary, BUT 6% on Loan"
    },
    {
      title: "Fixed Capital vs Fluctuating Capital Methods",
      content: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 HIGH-SCORING TOPIC (4-6 Marks Guaranteed!)"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded border-2 border-blue-400' },
              React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "FIXED CAPITAL METHOD"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "2 Accounts: "), "Capital A/c + Current A/c"),
                React.createElement('li', null, "Capital A/c: ", React.createElement('span', { className: 'text-green-700 font-semibold' }, "Always CREDIT balance")),
                React.createElement('li', null, "Capital remains ", React.createElement('b', null, "FIXED"), " (unchanged)"),
                React.createElement('li', null, "All adjustments in ", React.createElement('b', null, "Current A/c")),
                React.createElement('li', null, "Current A/c: Can be Dr. or Cr. balance")
              ),
              React.createElement('div', { className: 'bg-blue-50 p-2 mt-2 rounded text-xs' },
                React.createElement('p', { className: 'font-semibold mb-1' }, "Current A/c Debits:"),
                React.createElement('p', null, "Drawings, Interest on Drawings, Share of Loss"),
                React.createElement('p', { className: 'font-semibold mt-1 mb-1' }, "Current A/c Credits:"),
                React.createElement('p', null, "Salary, Commission, Interest on Capital, Share of Profit")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded border-2 border-green-400' },
              React.createElement('p', { className: 'font-bold text-green-900 mb-2' }, "FLUCTUATING CAPITAL METHOD"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "1 Account: "), "Only Capital A/c"),
                React.createElement('li', null, "Capital A/c: ", React.createElement('span', { className: 'text-red-700 font-semibold' }, "Can be Dr. or Cr.")),
                React.createElement('li', null, "Balance ", React.createElement('b', null, "FLUCTUATES"), " year to year"),
                React.createElement('li', null, "All adjustments in ", React.createElement('b', null, "Capital A/c")),
                React.createElement('li', null, "Default method if not specified")
              ),
              React.createElement('div', { className: 'bg-green-50 p-2 mt-2 rounded text-xs' },
                React.createElement('p', { className: 'font-semibold mb-1' }, "Capital A/c Debits:"),
                React.createElement('p', null, "Drawings, Interest on Drawings, Share of Loss, Capital Withdrawn"),
                React.createElement('p', { className: 'font-semibold mt-1 mb-1' }, "Capital A/c Credits:"),
                React.createElement('p', null, "Capital Introduced, Salary, Interest on Capital, Share of Profit")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "In the absence of instructions, always prepare accounts using ", React.createElement('b', null, "FLUCTUATING CAPITAL METHOD"), ". Questions worth 4-6 marks test your ability to prepare both formats correctly!")
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'text-sm mt-2' },
        React.createElement('p', { className: 'font-semibold mb-1' }, "Example: Partner A's Capital = ₹5,00,000"),
        React.createElement('p', null, "Interest on Capital = ₹25,000 | Drawings = ₹60,000 | Profit Share = ₹80,000"),
        React.createElement('p', { className: 'mt-2' }, 
          React.createElement('b', null, "Fixed Method: "), 
          "Capital A/c remains ₹5,00,000 (unchanged). Current A/c = ₹25,000 + ₹80,000 - ₹60,000 = ₹45,000 (Cr)"
        ),
        React.createElement('p', { className: 'mt-1' }, 
          React.createElement('b', null, "Fluctuating Method: "), 
          "Capital A/c = ₹5,00,000 + ₹25,000 + ₹80,000 - ₹60,000 = ₹5,45,000"
        )
      ),
      mnemonic: "FIXED = 2 accounts (F-TWO), FLUCTUATING = 1 account (F-ONE)"
    },
    {
      title: "Profit & Loss Appropriation Account",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 
          React.createElement('b', null, "P&L Appropriation Account"), 
          " is an extension of P&L Account showing how net profit is distributed among partners. It's prepared ", 
          React.createElement('span', { className: 'font-bold text-red-600' }, "AFTER"), 
          " the Profit & Loss Account."
        ),
        React.createElement('div', { className: 'bg-white border-2 border-gray-400 rounded-lg p-4 mb-3' },
          React.createElement('p', { className: 'font-bold text-center mb-3 text-lg' }, "Profit & Loss Appropriation Account Format"),
          React.createElement('table', { className: 'border-collapse border border-gray-300 w-full text-sm' },
            React.createElement('thead', null,
              React.createElement('tr', { className: 'bg-gray-100' },
                React.createElement('th', { className: 'border border-gray-300 p-2 text-left font-bold text-gray-900' }, "Dr. (Uses of Profit)"),
                React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold text-gray-900' }, "₹"),
                React.createElement('th', { className: 'border border-gray-300 p-2 text-left font-bold text-gray-900' }, "Cr. (Sources)"),
                React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold text-gray-900' }, "₹")
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2' }, "Interest on Capital"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, "Net Profit (from P&L A/c)"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2' }, "Partner's Salary"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, "Interest on Drawings"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2' }, "Partner's Commission"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2' }, "Reserve Fund"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "")
              ),
              React.createElement('tr', { className: 'bg-green-50' },
                React.createElement('td', { className: 'border border-gray-300 p-2 font-bold' }, "Profit transferred to Capital/Current A/c:"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2 pl-6' }, "Partner A"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: 'border border-gray-300 p-2 pl-6' }, "Partner B"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2' }, ""),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "")
              ),
              React.createElement('tr', { className: 'bg-gray-50 font-bold' },
                React.createElement('td', { className: 'border border-gray-300 p-2 text-gray-900' }, "Total"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right text-gray-900' }, "xxx"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-gray-900' }, "Total"),
                React.createElement('td', { className: 'border border-gray-300 p-2 text-right text-gray-900' }, "xxx")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "⚠️ CRITICAL RULE:"),
          React.createElement('p', { className: 'text-sm' }, "If firm has NET LOSS, NO interest on capital, salary, or commission is allowed to partners. Only the loss is distributed in profit-sharing ratio!")
        )
      ),
      examFocus: true,
      example: "Net Profit = ₹1,00,000 | Interest on Capital: A ₹20,000, B ₹15,000 | Salary to B = ₹10,000 | Interest on Drawings: A ₹2,000, B ₹1,500 | Profit Ratio 3:2 → Divisible Profit = ₹1,00,000 + ₹3,500 - ₹20,000 - ₹15,000 - ₹10,000 = ₹58,500 (A gets ₹35,100, B gets ₹23,400)"
    },
    {
      title: "Interest on Capital - Calculation Methods",
      content: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3 border-2 border-blue-400' },
          React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "📐 Formula & Rules:"),
          React.createElement('div', { className: 'bg-white p-3 rounded mb-2' },
            React.createElement('p', { className: 'text-center font-mono text-lg mb-2' }, 
              "Interest on Capital = ",
              React.createElement('span', { className: 'font-bold text-blue-700' }, "Capital × Rate × Time/12")
            ),
            React.createElement('p', { className: 'text-sm text-center italic' }, "(Time is in months)")
          ),
          React.createElement('div', { className: 'space-y-2 text-sm' },
            React.createElement('p', null, 
              React.createElement('b', null, "✓ Only if provided in Partnership Deed"), 
              " - No interest if deed is silent"
            ),
            React.createElement('p', null, 
              React.createElement('b', null, "✓ Only in Profit situation"), 
              " - Not allowed if firm has loss"
            ),
            React.createElement('p', null, 
              React.createElement('b', null, "✓ If Profit < Total Interest"), 
              " - Profit distributed in ratio of interest on capital"
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400' },
          React.createElement('p', { className: 'font-bold mb-2' }, "🎯 THREE COMMON EXAM SCENARIOS:"),
          React.createElement('div', { className: 'space-y-3 text-sm' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-1' }, "Scenario 1: Capital unchanged all year"),
              React.createElement('p', { className: 'font-mono' }, "Interest = Capital × Rate × 12/12"),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, "Example: ₹5,00,000 @ 8% = ₹5,00,000 × 8% × 1 = ₹40,000")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-orange-800 mb-1' }, "Scenario 2: Additional capital introduced during year"),
              React.createElement('p', { className: 'font-mono text-xs' }, 
                "Interest = (Opening Capital × 12/12) + (Additional Capital × Months remaining/12)"
              ),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, 
                "Example: Opening ₹2,00,000 + ₹1,00,000 on Oct 1 @ 6%",
                React.createElement('br', null),
                "= (₹2,00,000 × 6% × 12/12) + (₹1,00,000 × 6% × 6/12) = ₹12,000 + ₹3,000 = ₹15,000"
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-red-800 mb-1' }, "Scenario 3: Capital withdrawn during year"),
              React.createElement('p', { className: 'font-mono text-xs' }, 
                "Interest = (Opening Capital × Months till withdrawal/12) + (Reduced Capital × Remaining months/12)"
              ),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, 
                "Example: ₹3,00,000, withdrew ₹50,000 on July 1 @ 10%",
                React.createElement('br', null),
                "= (₹3,00,000 × 10% × 3/12) + (₹2,50,000 × 10% × 9/12) = ₹7,500 + ₹18,750 = ₹26,250"
              )
            )
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'text-sm' },
        React.createElement('p', { className: 'font-bold mb-1' }, "Sample Paper Type Question:"),
        React.createElement('p', null, "Partners' capitals: A = ₹8,00,000, B = ₹7,00,000, C = ₹5,00,000"),
        React.createElement('p', null, "Interest @ 10% p.a. | Net Profit = ₹50,000 (before interest)"),
        React.createElement('p', { className: 'mt-2 font-semibold' }, "Solution:"),
        React.createElement('p', null, "Total Interest Due = ₹80,000 + ₹70,000 + ₹50,000 = ₹2,00,000"),
        React.createElement('p', null, "But Profit available = only ₹50,000"),
        React.createElement('p', { className: 'mt-1 text-green-700 font-semibold' }, 
          "∴ Interest distributed in ratio 80:70:50 = 16:14:10"
        ),
        React.createElement('p', null, "A = ₹50,000 × 16/40 = ₹20,000 | B = ₹17,500 | C = ₹12,500")
      ),
      mnemonic: "Capital changes? Calculate in TWO parts - Before change + After change"
    },
    {
      title: "Interest on Drawings - All Calculation Methods",
      content: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mb-3 border-2 border-orange-400' },
          React.createElement('p', { className: 'font-bold text-orange-900 mb-2 text-lg' }, "💰 HIGH-FREQUENCY EXAM TOPIC (MCQs + 3-Mark Questions)"),
          React.createElement('div', { className: 'bg-white p-3 rounded mb-2' },
            React.createElement('p', { className: 'text-center font-mono text-lg mb-2' }, 
              "Interest on Drawings = ",
              React.createElement('span', { className: 'font-bold text-red-700' }, "Drawings × Rate × Time/12")
            )
          )
        ),
        React.createElement('div', { className: 'space-y-3' },
          React.createElement('div', { className: 'bg-blue-50 p-3 rounded border-l-4 border-blue-600' },
            React.createElement('p', { className: 'font-bold mb-2' }, "METHOD 1: Fixed Amount Withdrawn Monthly"),
            React.createElement('table', { className: 'border-collapse border border-blue-300 w-full text-sm mt-2' },
              React.createElement('thead', null,
                React.createElement('tr', { className: 'bg-blue-100' },
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-left font-bold text-gray-900' }, "Withdrawal Timing"),
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-center font-bold text-gray-900' }, "Average Period"),
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-left font-bold text-gray-900' }, "Formula")
                )
              ),
              React.createElement('tbody', null,
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-semibold' }, "Beginning of each month"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-center font-bold text-green-700' }, "6.5 months"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-mono text-xs' }, "(12+1)/2")
                ),
                React.createElement('tr', { className: 'bg-yellow-50' },
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-semibold' }, "Middle of each month"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-center font-bold text-green-700' }, "6 months"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-mono text-xs' }, "(11.5+0.5)/2")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-semibold' }, "End of each month"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-center font-bold text-green-700' }, "5.5 months"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-mono text-xs' }, "(11+0)/2")
                )
              )
            ),
            React.createElement('p', { className: 'text-xs mt-2 italic' }, 
              "Example: ₹10,000 per month (beginning) @ 6% = ₹1,20,000 × 6% × 6.5/12 = ₹3,900"
            )
          ),
          React.createElement('div', { className: 'bg-green-50 p-3 rounded border-l-4 border-green-600' },
            React.createElement('p', { className: 'font-bold mb-2' }, "METHOD 2: Fixed Amount Withdrawn Quarterly"),
            React.createElement('div', { className: 'bg-white p-2 rounded mb-2' },
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "At beginning of quarter: "), 
                "7.5 months average ",
                React.createElement('span', { className: 'font-mono text-xs' }, "[(12+9+6+3)/4]")
              ),
              React.createElement('p', { className: 'text-sm mt-1' }, 
                React.createElement('b', null, "At end of quarter: "), 
                "4.5 months average ",
                React.createElement('span', { className: 'font-mono text-xs' }, "[(9+6+3+0)/4]")
              )
            ),
            React.createElement('p', { className: 'text-xs italic' }, 
              "Example: ₹20,000 per quarter (beginning) @ 8% = ₹80,000 × 8% × 7.5/12 = ₹4,000"
            )
          ),
          React.createElement('div', { className: 'bg-purple-50 p-3 rounded border-l-4 border-purple-600' },
            React.createElement('p', { className: 'font-bold mb-2' }, "METHOD 3: Varying Amounts (Product Method)"),
            React.createElement('div', { className: 'bg-white p-2 rounded mb-2' },
              React.createElement('p', { className: 'text-sm font-mono' }, 
                "Interest = Σ(Amount × Months) × Rate × 1/12"
              ),
              React.createElement('p', { className: 'text-xs mt-2' }, "Calculate product of each withdrawal × months remaining till year-end, then sum all products")
            ),
            React.createElement('div', { className: 'text-xs bg-gray-50 p-2 rounded mt-2' },
              React.createElement('p', { className: 'font-semibold mb-1' }, "Example:"),
              React.createElement('p', null, "June 1: ₹15,000 (10 months) = Product 1,50,000"),
              React.createElement('p', null, "Sept 30: ₹10,000 (6 months) = Product 60,000"),
              React.createElement('p', null, "Dec 31: ₹12,000 (3 months) = Product 36,000"),
              React.createElement('p', { className: 'font-semibold mt-1' }, "Total Product = 2,46,000"),
              React.createElement('p', { className: 'mt-1 text-green-700 font-semibold' }, 
                "Interest @ 6% = 2,46,000 × 6% × 1/12 = ₹1,230"
              )
            )
          ),
          React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-600' },
            React.createElement('p', { className: 'font-bold mb-2' }, "METHOD 4: Amount & Date Not Specified"),
            React.createElement('p', { className: 'text-sm' }, 
              "When only total drawings given without dates, assume ",
              React.createElement('b', null, "withdrawn evenly throughout year"),
              " → Use ",
              React.createElement('span', { className: 'font-bold text-red-700' }, "6 months average period")
            ),
            React.createElement('p', { className: 'text-xs mt-2 italic' }, 
              "Example: Total drawings ₹60,000 @ 8% = ₹60,000 × 8% × 6/12 = ₹2,400"
            )
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3' },
        React.createElement('p', { className: 'font-bold mb-2' }, "🎯 CBSE Sample Paper Question Type:"),
        React.createElement('p', { className: 'text-sm' }, "Partnership started Aug 1, 2024. Partner withdrew ₹80,000 during year ending March 31, 2025. Interest @ 6% p.a."),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-green-800' }, "Solution:"),
        React.createElement('p', { className: 'text-sm' }, "Partnership ran for 8 months (Aug to March)"),
        React.createElement('p', { className: 'text-sm' }, "Average period = 8/2 = 4 months"),
        React.createElement('p', { className: 'text-sm font-bold text-blue-700' }, "Interest = ₹80,000 × 6% × 4/12 = ₹1,600 ✓")
      ),
      mnemonic: "Remember 6.5-6-5.5 for Monthly (Beginning-Middle-End) & 7.5-4.5 for Quarterly"
    },
    {
      title: "Guarantee of Minimum Profit to Partner",
      content: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg mb-3 border-2 border-pink-400' },
          React.createElement('p', { className: 'font-bold text-pink-900 mb-2 text-lg' }, "🎯 PREMIUM EXAM TOPIC (3-4 Marks, Often in Part B)"),
          React.createElement('p', { className: 'text-sm mb-3' }, 
            "When a partner (usually new/retiring) is guaranteed a ",
            React.createElement('b', null, "minimum amount of profit"),
            ", and actual share falls short, the ",
            React.createElement('span', { className: 'font-bold text-red-700' }, "deficiency is borne by guaranteeing partners"),
            "."
          )
        ),
        React.createElement('div', { className: 'bg-white border-2 border-purple-400 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-center mb-3 text-purple-900' }, "STEP-BY-STEP SOLUTION METHOD"),
          React.createElement('div', { className: 'space-y-2' },
            React.createElement('div', { className: 'flex items-start' },
              React.createElement('div', { className: 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0' }, "1"),
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "Calculate actual profit share"), 
                " of guaranteed partner as per profit-sharing ratio"
              )
            ),
            React.createElement('div', { className: 'flex items-start' },
              React.createElement('div', { className: 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0' }, "2"),
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "Calculate deficiency: "), 
                "Guaranteed Amount - Actual Share"
              )
            ),
            React.createElement('div', { className: 'flex items-start' },
              React.createElement('div', { className: 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0' }, "3"),
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "Identify who bears deficiency: "), 
                "All partners (in their ratio) OR Only specific partner(s)"
              )
            ),
            React.createElement('div', { className: 'flex items-start' },
              React.createElement('div', { className: 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0' }, "4"),
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "Distribute deficiency"), 
                " among guaranteeing partners in specified ratio"
              )
            ),
            React.createElement('div', { className: 'flex items-start' },
              React.createElement('div', { className: 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0' }, "5"),
              React.createElement('p', { className: 'text-sm' }, 
                React.createElement('b', null, "Adjust shares: "), 
                "Deduct from guaranteeing partners, Add to guaranteed partner"
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📋 COMPREHENSIVE EXAMPLE (CBSE Pattern):"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm space-y-1' },
            React.createElement('p', null, 
              React.createElement('b', null, "Given: "), 
              "A, B, C share profits 2:1:1. C guaranteed minimum ₹25,000. Profit = ₹76,000. Guarantee by A & B equally."
            ),
            React.createElement('p', { className: 'mt-2 font-semibold text-purple-900' }, "Step-by-Step Solution:"),
            React.createElement('p', null, 
              React.createElement('b', null, "Step 1: "), 
              "Calculate shares in 2:1:1 ratio"
            ),
            React.createElement('p', { className: 'ml-4' }, "A = ₹76,000 × 2/4 = ₹38,000"),
            React.createElement('p', { className: 'ml-4' }, "B = ₹76,000 × 1/4 = ₹19,000"),
            React.createElement('p', { className: 'ml-4' }, "C = ₹76,000 × 1/4 = ₹19,000"),
            React.createElement('p', { className: 'mt-1' }, 
              React.createElement('b', null, "Step 2: "), 
              "Deficiency = ₹25,000 - ₹19,000 = ₹6,000"
            ),
            React.createElement('p', null, 
              React.createElement('b', null, "Step 3: "), 
              "Borne by A & B equally (1:1)"
            ),
            React.createElement('p', { className: 'ml-4' }, "A bears = ₹6,000 × 1/2 = ₹3,000"),
            React.createElement('p', { className: 'ml-4' }, "B bears = ₹6,000 × 1/2 = ₹3,000"),
            React.createElement('p', { className: 'mt-1 font-bold text-green-700' }, "Final Distribution:"),
            React.createElement('p', { className: 'ml-4 font-semibold' }, "A = ₹38,000 - ₹3,000 = ₹35,000"),
            React.createElement('p', { className: 'ml-4 font-semibold' }, "B = ₹19,000 - ₹3,000 = ₹16,000"),
            React.createElement('p', { className: 'ml-4 font-semibold text-green-700' }, "C = ₹19,000 + ₹6,000 = ₹25,000 ✓")
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'text-sm bg-red-50 p-2 rounded mt-2' },
        React.createElement('p', { className: 'font-bold mb-1' }, "⚠️ Special Case - When Firm Has Loss:"),
        React.createElement('p', null, "If firm has loss but partner is guaranteed minimum profit, the FULL guaranteed amount becomes the deficiency (since actual share is negative/loss). Example: Loss ₹1,00,000, Guaranteed ₹50,000 → Deficiency = ₹50,000 + Partner's loss share!")
      ),
      mnemonic: "GADS - Guarantee, Actual share, Deficiency, Split among guarantors"
    },
    {
      title: "Past Adjustments & Error Rectification",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 
          "When errors/omissions (like interest on capital not provided) are discovered ",
          React.createElement('b', null, "AFTER closing accounts"),
          ", rectify through a ",
          React.createElement('span', { className: 'font-bold text-blue-700' }, "single adjustment entry"),
          " instead of reopening all accounts."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3 border-2 border-green-400' },
          React.createElement('p', { className: 'font-bold text-green-900 mb-3' }, "NET EFFECT METHOD (Preferred in Exams):"),
          React.createElement('div', { className: 'bg-white p-3 rounded' },
            React.createElement('p', { className: 'font-semibold mb-2' }, "Steps to Calculate Net Effect:"),
            React.createElement('ol', { className: 'list-decimal pl-5 space-y-1 text-sm' },
              React.createElement('li', null, "Calculate what ", React.createElement('b', null, "SHOULD"), " have been credited/debited (correct amount)"),
              React.createElement('li', null, "Calculate what ", React.createElement('b', null, "WAS"), " actually credited/debited (wrong amount)"),
              React.createElement('li', null, "Find difference = Net Effect (Dr. if excess, Cr. if short)"),
              React.createElement('li', null, "Pass single entry to balance the effect")
            )
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 TYPICAL EXAM QUESTION:"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', { className: 'font-semibold mb-2' }, "Question: Interest on capital @ 10% was omitted"),
            React.createElement('p', null, "A's Capital = ₹5,00,000 | B's Capital = ₹3,00,000 | Profit Ratio 3:2 | Profit ₹1,60,000 was already distributed"),
            React.createElement('p', { className: 'mt-2 font-semibold text-purple-900' }, "Solution:"),
            React.createElement('table', { className: 'border-collapse border border-blue-300 w-full mt-2' },
              React.createElement('thead', null,
                React.createElement('tr', { className: 'bg-blue-100' },
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-left font-bold text-gray-900' }, "Particulars"),
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-right font-bold text-gray-900' }, "A (₹)"),
                  React.createElement('th', { className: 'border border-blue-300 p-2 text-right font-bold text-gray-900' }, "B (₹)")
                )
              ),
              React.createElement('tbody', null,
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-blue-300 p-2' }, "Interest should have been (Cr)"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "50,000"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "30,000")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-blue-300 p-2' }, "Profit share actually given (Cr)"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "96,000"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "64,000")
                ),
                React.createElement('tr', { className: 'bg-yellow-50' },
                  React.createElement('td', { className: 'border border-blue-300 p-2 font-semibold' }, "Correct profit (₹1,60,000 - ₹80,000) in 3:2"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "48,000"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right' }, "32,000")
                ),
                React.createElement('tr', { className: 'bg-green-50 font-bold' },
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-gray-900' }, "Net Effect"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right text-red-700' }, "2,000 (Dr)"),
                  React.createElement('td', { className: 'border border-blue-300 p-2 text-right text-green-700' }, "2,000 (Cr)")
                )
              )
            ),
            React.createElement('div', { className: 'mt-3 bg-gray-50 p-2 rounded' },
              React.createElement('p', { className: 'font-bold mb-1' }, "Adjustment Entry:"),
              React.createElement('p', { className: 'font-mono text-xs' }, "A's Capital A/c Dr. ... 2,000"),
              React.createElement('p', { className: 'font-mono text-xs ml-4' }, "To B's Capital A/c ... 2,000"),
              React.createElement('p', { className: 'text-xs italic mt-1' }, "(Adjustment for interest on capital omitted)")
            )
          )
        )
      ),
      examFocus: true,
      example: "Common errors: Interest on capital/drawings not provided, Salary not given, Wrong profit ratio used. Always use Net Effect Method for quick solution!"
    }
  ],
  keywords: [
    { 
      term: "Partnership", 
      definition: "Relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all (Indian Partnership Act 1932, Section 4)." 
    },
    { 
      term: "Partnership Deed", 
      definition: "Written agreement among partners containing all terms and conditions like profit-sharing ratio, interest rates, salaries, admission/retirement rules, etc." 
    },
    { 
      term: "Fixed Capital Account", 
      definition: "A capital account whose balance remains unchanged. All adjustments (salary, interest, drawings, profit/loss) are made in a separate Current Account." 
    },
    { 
      term: "Fluctuating Capital Account", 
      definition: "A capital account where all adjustments (salary, interest, drawings, profit/loss) are directly recorded, causing the balance to change (fluctuate) every year." 
    },
    { 
      term: "Current Account", 
      definition: "Used in Fixed Capital method to record all adjustments like interest on capital, salary, commission, drawings, interest on drawings, and share of profit/loss." 
    },
    { 
      term: "Profit & Loss Appropriation Account", 
      definition: "An account prepared after P&L Account to show how net profit is distributed among partners through interest on capital, salaries, and profit-sharing." 
    },
    { 
      term: "Interest on Capital", 
      definition: "Amount credited to partners' capital based on their capital contribution at an agreed rate. Only allowed if provided in partnership deed and firm has profit." 
    },
    { 
      term: "Interest on Drawings", 
      definition: "Amount charged from partners on money withdrawn for personal use. Calculated for average period when dates not specified." 
    },
    { 
      term: "Guarantee of Profit", 
      definition: "Assurance given to a partner that they will receive a minimum amount of profit. Any deficiency is borne by guaranteeing partners." 
    },
    { 
      term: "Mutual Agency", 
      definition: "Every partner is both principal and agent for other partners - can bind the firm by their acts and are bound by acts of other partners." 
    },
    { 
      term: "Past Adjustments", 
      definition: "Corrections for errors/omissions (like interest not provided) discovered after closing accounts, done through single adjustment entry using Net Effect Method." 
    },
    { 
      term: "Appropriation", 
      definition: "Distribution of profit among partners. Distinguished from 'allocation' (of expenses). Appropriations include interest on capital, salary, profit share." 
    },
    { 
      term: "Unlimited Liability", 
      definition: "Partners' personal assets can be used to satisfy firm's debts. Unlike companies, partners have no limitation on liability for business obligations." 
    },
    { 
      term: "Profit Sharing Ratio", 
      definition: "The agreed ratio in which partners share profits and losses. If not specified in deed, profits are shared equally as per Indian Partnership Act 1932." 
    },
    { 
      term: "Drawings", 
      definition: "Money or goods withdrawn by partners for personal use during the accounting period. Reduces partner's capital or current account balance." 
    },
    { 
      term: "Partner's Salary", 
      definition: "Remuneration paid to working partners for services rendered to the firm. Only allowed if specified in partnership deed. It's an appropriation, not an expense." 
    },
    { 
      term: "Reserve Fund", 
      definition: "Amount set aside from profits before distribution among partners to meet future contingencies or expansion. Shown on liabilities side of Balance Sheet." 
    },
    { 
      term: "Net Effect Method", 
      definition: "Method used for past adjustments where only the net difference in each partner's share is adjusted, avoiding reopening of all accounts." 
    }
  ],
  caseStudies: [
    {
      title: "Fixed vs Fluctuating Capital - Complete Account Preparation",
      scenario: "Amar and Akbar started partnership on April 1, 2024 with capitals ₹6,00,000 and ₹4,00,000 respectively. During the year: Amar introduced additional capital ₹1,00,000 on Oct 1. Akbar withdrew ₹50,000 on Jan 1, 2025. Both partners drew ₹10,000 monthly (beginning of month). Net Profit for year = ₹2,40,000. Interest on Capital @ 8% p.a., Interest on Drawings @ 6% p.a. Profit Ratio 3:2. Prepare Capital and Current Accounts under both methods.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "📊 STEP 1: Calculate Interest on Capital"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', { className: 'font-semibold mb-1' }, "Amar:"),
            React.createElement('p', null, "Original capital: ₹6,00,000 × 8% × 12/12 = ₹48,000"),
            React.createElement('p', null, "Additional: ₹1,00,000 × 8% × 6/12 = ₹4,000"),
            React.createElement('p', { className: 'font-bold text-green-700 mt-1' }, "Total Interest on Capital = ₹52,000"),
            React.createElement('p', { className: 'font-semibold mt-2 mb-1' }, "Akbar:"),
            React.createElement('p', null, "Original capital: ₹4,00,000 × 8% × 9/12 = ₹24,000"),
            React.createElement('p', null, "Reduced capital: ₹3,50,000 × 8% × 3/12 = ₹7,000"),
            React.createElement('p', { className: 'font-bold text-green-700 mt-1' }, "Total Interest on Capital = ₹31,000")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-green-900 mb-2' }, "📊 STEP 2: Calculate Interest on Drawings"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', null, "Both partners: ₹10,000 per month (beginning)"),
            React.createElement('p', null, "Total drawings = ₹10,000 × 12 = ₹1,20,000 each"),
            React.createElement('p', null, "Average period (beginning of month) = 6.5 months"),
            React.createElement('p', { className: 'font-bold text-red-700 mt-1' }, "Interest on Drawings = ₹1,20,000 × 6% × 6.5/12 = ₹3,900 each")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-2' }, "📊 STEP 3: P&L Appropriation Account"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', null, "Net Profit = ₹2,40,000"),
            React.createElement('p', null, "Add: Interest on Drawings = ₹7,800 (₹3,900 × 2)"),
            React.createElement('p', null, "Less: Interest on Capital = ₹83,000 (₹52,000 + ₹31,000)"),
            React.createElement('p', { className: 'font-bold mt-1' }, "Divisible Profit = ₹1,64,800"),
            React.createElement('p', { className: 'mt-1' }, "Amar's Share = ₹1,64,800 × 3/5 = ₹98,880"),
            React.createElement('p', null, "Akbar's Share = ₹1,64,800 × 2/5 = ₹65,920")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg' },
          React.createElement('p', { className: 'font-bold text-yellow-900 mb-2' }, "📊 STEP 4: Final Answer - Two Methods"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-3' },
            React.createElement('div', { className: 'bg-white p-2 rounded text-xs border-2 border-blue-400' },
              React.createElement('p', { className: 'font-bold mb-1 text-blue-800' }, "FIXED CAPITAL METHOD:"),
              React.createElement('p', { className: 'font-semibold' }, "Capital A/c (unchanged):"),
              React.createElement('p', null, "Amar: ₹7,00,000 | Akbar: ₹3,50,000"),
              React.createElement('p', { className: 'font-semibold mt-2' }, "Current A/c (Cr. Balance):"),
              React.createElement('p', null, "Amar = 52,000 + 98,880 - 1,20,000 - 3,900 = ₹26,980"),
              React.createElement('p', null, "Akbar = 31,000 + 65,920 - 1,20,000 - 3,900 = (₹26,980) Dr.")
            ),
            React.createElement('div', { className: 'bg-white p-2 rounded text-xs border-2 border-green-400' },
              React.createElement('p', { className: 'font-bold mb-1 text-green-800' }, "FLUCTUATING CAPITAL METHOD:"),
              React.createElement('p', { className: 'font-semibold' }, "Capital A/c (Final Balance):"),
              React.createElement('p', null, "Amar = 6,00,000 + 1,00,000 + 52,000 + 98,880 - 1,20,000 - 3,900 = ₹7,26,980"),
              React.createElement('p', { className: 'mt-1' }, "Akbar = 4,00,000 - 50,000 + 31,000 + 65,920 - 1,20,000 - 3,900 = ₹3,23,020")
            )
          )
        )
      )
    },
    {
      title: "Guarantee of Profit - Complex Scenario",
      scenario: "Mohit and Rohan are partners sharing profits 2:1. They admit Rahul for a 1/4th share with a guaranteed profit of at least ₹50,000. The total profit for the year is ₹1,60,000. The new profit sharing ratio among Mohit, Rohan, and Rahul is 2:1:1. Show distribution of profit when: (a) Guarantee by all existing partners in their old ratio, (b) Guarantee by Mohit alone.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-2' }, "Case (a): Guarantee by all existing partners in old ratio (2:1)"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', { className: 'font-semibold mb-1' }, "Step 1: Calculate shares in 2:1:1 ratio"),
            React.createElement('p', null, "Mohit = ₹1,60,000 × 2/4 = ₹80,000"),
            React.createElement('p', null, "Rohan = ₹1,60,000 × 1/4 = ₹40,000"),
            React.createElement('p', null, "Rahul = ₹1,60,000 × 1/4 = ₹40,000"),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "Step 2: Calculate deficiency"),
            React.createElement('p', null, "Rahul's guarantee = ₹50,000 | Actual share = ₹40,000"),
            React.createElement('p', { className: 'font-bold text-red-700' }, "Deficiency = ₹10,000"),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "Step 3: Distribute deficiency in old ratio 2:1"),
            React.createElement('p', null, "Mohit bears = ₹10,000 × 2/3 = ₹6,667"),
            React.createElement('p', null, "Rohan bears = ₹10,000 × 1/3 = ₹3,333"),
            React.createElement('p', { className: 'mt-2 font-bold text-green-700' }, "Final Distribution:"),
            React.createElement('p', null, "Mohit = ₹80,000 - ₹6,667 = ₹73,333"),
            React.createElement('p', null, "Rohan = ₹40,000 - ₹3,333 = ₹36,667"),
            React.createElement('p', { className: 'font-semibold' }, "Rahul = ₹40,000 + ₹10,000 = ₹50,000 ✓")
          )
        ),
        React.createElement('div', { className: 'bg-pink-50 p-4 rounded-lg' },
          React.createElement('p', { className: 'font-bold text-pink-900 mb-2' }, "Case (b): Guarantee by Mohit alone"),
          React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
            React.createElement('p', { className: 'font-semibold mb-1' }, "Shares remain same initially"),
            React.createElement('p', null, "Mohit = ₹80,000 | Rohan = ₹40,000 | Rahul = ₹40,000"),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "Deficiency = ₹10,000 (same as before)"),
            React.createElement('p', { className: 'mt-1 font-bold text-red-700' }, "But ENTIRE deficiency borne by Mohit only!"),
            React.createElement('p', { className: 'mt-2 font-bold text-green-700' }, "Final Distribution:"),
            React.createElement('p', null, "Mohit = ₹80,000 - ₹10,000 = ₹70,000"),
            React.createElement('p', null, "Rohan = ₹40,000 (unchanged)"),
            React.createElement('p', { className: 'font-semibold' }, "Rahul = ₹50,000 ✓")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-1' }, "⚠️ Key Learning:"),
          React.createElement('p', { className: 'text-sm' }, "Always read the question carefully to identify WHO gives the guarantee - all partners or specific partner(s). The distribution of deficiency changes accordingly!")
        )
      )
    },
    {
      title: "Interest on Drawings - Multiple Withdrawal Patterns",
      scenario: "Three partners A, B, and C have different drawing patterns in the year ending March 31, 2025: Partner A withdrew ₹8,000 at the beginning of each month. Partner B withdrew ₹15,000 on June 30, ₹20,000 on Sept 30, and ₹18,000 on Dec 31. Partner C withdrew total ₹72,000 during the year (no dates given). Interest on drawings @ 9% p.a. Calculate interest on drawings for each partner.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg' },
            React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "Partner A: Fixed Monthly (Beginning of Month)"),
            React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
              React.createElement('p', null, "Total drawings = ₹8,000 × 12 = ₹96,000"),
              React.createElement('p', null, "Average period (beginning) = 6.5 months"),
              React.createElement('p', { className: 'font-mono mt-1' }, "Interest = ₹96,000 × 9% × 6.5/12"),
              React.createElement('p', { className: 'font-bold text-green-700 mt-1' }, "= ₹4,680")
            )
          ),
          React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg' },
            React.createElement('p', { className: 'font-bold text-green-900 mb-2' }, "Partner B: Varying Amounts (Product Method)"),
            React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
              React.createElement('table', { className: 'border-collapse border border-green-300 w-full mt-2' },
                React.createElement('thead', null,
                  React.createElement('tr', { className: 'bg-green-100' },
                    React.createElement('th', { className: 'border border-green-300 p-2 text-left font-bold text-gray-900' }, "Date"),
                    React.createElement('th', { className: 'border border-green-300 p-2 text-right font-bold text-gray-900' }, "Amount (₹)"),
                    React.createElement('th', { className: 'border border-green-300 p-2 text-right font-bold text-gray-900' }, "Months"),
                    React.createElement('th', { className: 'border border-green-300 p-2 text-right font-bold text-gray-900' }, "Product")
                  )
                ),
                React.createElement('tbody', null,
                  React.createElement('tr', null,
                    React.createElement('td', { className: 'border border-green-300 p-2' }, "June 30"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "15,000"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "9"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "1,35,000")
                  ),
                  React.createElement('tr', null,
                    React.createElement('td', { className: 'border border-green-300 p-2' }, "Sept 30"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "20,000"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "6"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "1,20,000")
                  ),
                  React.createElement('tr', null,
                    React.createElement('td', { className: 'border border-green-300 p-2' }, "Dec 31"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "18,000"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "3"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right' }, "54,000")
                  ),
                  React.createElement('tr', { className: 'bg-green-50 font-bold' },
                    React.createElement('td', { className: 'border border-green-300 p-2 text-gray-900', colSpan: 3 }, "Total Product"),
                    React.createElement('td', { className: 'border border-green-300 p-2 text-right text-gray-900' }, "3,09,000")
                  )
                )
              ),
              React.createElement('p', { className: 'font-mono mt-2' }, "Interest = 3,09,000 × 9% × 1/12"),
              React.createElement('p', { className: 'font-bold text-green-700 mt-1' }, "= ₹2,318 (rounded to ₹2,318)")
            )
          ),
          React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg' },
            React.createElement('p', { className: 'font-bold text-purple-900 mb-2' }, "Partner C: Dates Not Specified"),
            React.createElement('div', { className: 'bg-white p-3 rounded text-sm' },
              React.createElement('p', null, "Total drawings = ₹72,000"),
              React.createElement('p', null, "Average period (when unspecified) = 6 months"),
              React.createElement('p', { className: 'font-mono mt-1' }, "Interest = ₹72,000 × 9% × 6/12"),
              React.createElement('p', { className: 'font-bold text-green-700 mt-1' }, "= ₹3,240")
            )
          ),
          React.createElement('div', { className: 'bg-yellow-50 p-3 rounded border-l-4 border-yellow-500' },
            React.createElement('p', { className: 'font-bold mb-2' }, "📌 Summary of All Three Methods:"),
            React.createElement('div', { className: 'text-sm space-y-1' },
              React.createElement('p', null, "Partner A (Fixed Monthly): ₹4,680"),
              React.createElement('p', null, "Partner B (Product Method): ₹2,318"),
              React.createElement('p', null, "Partner C (No Dates): ₹3,240"),
              React.createElement('p', { className: 'font-bold mt-2' }, "Total Interest on Drawings = ₹10,238")
            )
          )
        )
      )
    },
    {
      title: "Past Adjustments - Comprehensive Rectification",
      scenario: "Ram and Shyam are partners sharing profits equally. Their capitals on April 1, 2023 were Ram ₹8,00,000 and Shyam ₹6,00,000. The profit for year 2023-24 was ₹3,00,000 which was distributed equally (₹1,50,000 each) and accounts were closed. Later it was discovered that: (a) Interest on capital @ 10% p.a. was not provided, (b) Ram's salary of ₹30,000 p.a. was not recorded, (c) Interest on drawings (Ram ₹4,000, Shyam ₹3,000) was not charged. Pass necessary adjustment entry.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg mb-3 border-2 border-blue-400' },
          React.createElement('p', { className: 'font-bold text-blue-900 mb-3 text-lg' }, "NET EFFECT METHOD - Complete Solution"),
          React.createElement('div', { className: 'bg-white p-4 rounded' },
            React.createElement('table', { className: 'border-collapse border border-gray-300 w-full text-sm' },
              React.createElement('thead', null,
                React.createElement('tr', { className: 'bg-gray-100' },
                  React.createElement('th', { className: 'border border-gray-300 p-2 text-left font-bold text-gray-900' }, "Particulars"),
                  React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold text-gray-900' }, "Ram (₹)"),
                  React.createElement('th', { className: 'border border-gray-300 p-2 text-right font-bold text-gray-900' }, "Shyam (₹)")
                )
              ),
              React.createElement('tbody', null,
                React.createElement('tr', { className: 'bg-green-50' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold', colSpan: 3 }, "CREDIT ITEMS (Should have been given):")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 pl-4' }, "Interest on Capital @ 10%"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "80,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "60,000")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 pl-4' }, "Salary to Ram"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "30,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "-")
                ),
                React.createElement('tr', { className: 'bg-blue-50' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, "Total Credits"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right font-bold' }, "1,10,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right font-bold' }, "60,000")
                ),
                React.createElement('tr', { className: 'bg-red-50' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold', colSpan: 3 }, "DEBIT ITEMS (Should have been charged):")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 pl-4' }, "Interest on Drawings"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "4,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "3,000")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 pl-4' }, "Profit actually distributed (Cr)"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "1,50,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "1,50,000")
                ),
                React.createElement('tr', { className: 'bg-yellow-50' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, "Correct Profit Distribution:"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right', colSpan: 2 }, "")
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 pl-4 text-xs' }, "Divisible = 3,00,000 + 7,000 - 80,000 - 60,000 - 30,000 = ₹1,37,000"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "68,500"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, "68,500")
                ),
                React.createElement('tr', { className: 'bg-blue-50' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, "Total Debits"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right font-bold' }, "72,500"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right font-bold' }, "71,500")
                ),
                React.createElement('tr', { className: 'bg-green-100 font-bold' },
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-gray-900' }, "NET EFFECT"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right text-green-700' }, "37,500 (Cr)"),
                  React.createElement('td', { className: 'border border-gray-300 p-2 text-right text-red-700' }, "11,500 (Dr)")
                )
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mt-3 border-2 border-purple-400' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-2' }, "✅ FINAL ADJUSTMENT ENTRY:"),
          React.createElement('div', { className: 'bg-white p-3 rounded font-mono text-sm' },
            React.createElement('p', null, "Shyam's Capital A/c Dr. ........................ 11,500"),
            React.createElement('p', { className: 'ml-6' }, "To Ram's Capital A/c ..................... 11,500"),
            React.createElement('p', { className: 'mt-2 italic font-sans text-xs' }, "(Being adjustment for interest on capital, salary, and interest on drawings omitted in previous year)")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-1' }, "🎯 Exam Strategy:"),
          React.createElement('p', { className: 'text-sm' }, "Always use tabular format for Net Effect Method. Show Credits on one side, Debits on other, then find difference. This method saves time and reduces calculation errors in exams!")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-400 mb-4' },
      React.createElement('h4', { className: 'text-xl font-bold mb-3 text-blue-900' }, "📚 Chapter 1: Partnership - Complete Quick Revision"),
      React.createElement('p', { className: 'text-sm italic mb-3' }, "Master these concepts for guaranteed 15-20 marks in CBSE Board Exams 2026!")
    ),
    
    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-4' },
      React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg border-2 border-red-300' },
        React.createElement('p', { className: 'font-bold text-red-900 mb-2' }, "🚨 WHEN PARTNERSHIP DEED IS SILENT:"),
        React.createElement('ul', { className: 'list-disc pl-5 text-sm space-y-1' },
          React.createElement('li', null, "Profit Sharing: ", React.createElement('b', null, "EQUAL"), " (not capital ratio)"),
          React.createElement('li', null, "Interest on Capital: ", React.createElement('b', null, "NIL")),
          React.createElement('li', null, "Interest on Drawings: ", React.createElement('b', null, "NIL")),
          React.createElement('li', null, "Partner's Salary: ", React.createElement('b', null, "NIL")),
          React.createElement('li', null, "Interest on Partner's Loan: ", React.createElement('b', { className: 'text-green-700' }, "6% p.a. (Compulsory)"))
        )
      ),
      React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg border-2 border-yellow-300' },
        React.createElement('p', { className: 'font-bold text-yellow-900 mb-2' }, "⚡ KEY DIFFERENCES:"),
        React.createElement('table', { className: 'text-xs w-full border-collapse border border-yellow-300' },
          React.createElement('tr', { className: 'bg-yellow-100' },
            React.createElement('th', { className: 'border border-yellow-300 p-1 font-bold text-gray-900' }, "Feature"),
            React.createElement('th', { className: 'border border-yellow-300 p-1 font-bold text-gray-900' }, "Fixed"),
            React.createElement('th', { className: 'border border-yellow-300 p-1 font-bold text-gray-900' }, "Fluctuating")
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-yellow-300 p-1' }, "Accounts"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center font-semibold' }, "2"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center font-semibold' }, "1")
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-yellow-300 p-1' }, "Capital Balance"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center' }, "Fixed"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center' }, "Changes")
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-yellow-300 p-1' }, "Adjustments"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center' }, "Current A/c"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center' }, "Capital A/c")
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-yellow-300 p-1' }, "Default?"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center' }, "No"),
            React.createElement('td', { className: 'border border-yellow-300 p-1 text-center font-bold text-green-700' }, "Yes")
          )
        )
      )
    ),

    React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg border-2 border-blue-300 mb-4' },
      React.createElement('p', { className: 'font-bold text-blue-900 mb-3 text-lg' }, "📐 ALL IMPORTANT FORMULAS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "1. Interest on Capital:"),
          React.createElement('p', { className: 'font-mono text-sm bg-gray-100 p-2 rounded' }, "Interest = Capital × Rate × Time/12"),
          React.createElement('p', { className: 'text-xs mt-1 italic' }, "⚠️ Only if Deed provides AND firm has profit. If Profit < Total Interest, distribute in ratio of interest amounts.")
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "2. Interest on Drawings:"),
          React.createElement('p', { className: 'font-mono text-sm bg-gray-100 p-2 rounded mb-2' }, "Interest = Drawings × Rate × Time/12"),
          React.createElement('div', { className: 'text-xs space-y-1' },
            React.createElement('p', null, "• Monthly (Beginning): ", React.createElement('b', null, "6.5 months"), " = (12+1)/2"),
            React.createElement('p', null, "• Monthly (Middle): ", React.createElement('b', null, "6 months"), " = (11.5+0.5)/2"),
            React.createElement('p', null, "• Monthly (End): ", React.createElement('b', null, "5.5 months"), " = (11+0)/2"),
            React.createElement('p', null, "• Quarterly (Beginning): ", React.createElement('b', null, "7.5 months"), " = (12+9+6+3)/4"),
            React.createElement('p', null, "• Quarterly (End): ", React.createElement('b', null, "4.5 months"), " = (9+6+3+0)/4"),
            React.createElement('p', null, "• No dates given: ", React.createElement('b', null, "6 months"), " (assumed evenly)"),
            React.createElement('p', null, "• Varying amounts: ", React.createElement('b', null, "Product Method"), " = Σ(Amount × Months) × Rate × 1/12")
          )
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "3. P&L Appropriation Formula:"),
          React.createElement('p', { className: 'text-sm' }, "Divisible Profit = Net Profit + Interest on Drawings - Interest on Capital - Salaries - Commissions - Reserve")
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-bold mb-2' }, "4. Guarantee of Profit:"),
          React.createElement('p', { className: 'text-sm' }, "Deficiency = Guaranteed Amount - Actual Share (as per profit ratio)"),
          React.createElement('p', { className: 'text-xs mt-1 italic' }, "Deficiency borne by guaranteeing partners in specified ratio")
        )
      )
    ),

    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mb-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "TAB MUS:"), " Essential features - Two persons, Agreement, Business, Mutual agency, Unlimited liability, Sharing"),
        React.createElement('p', null, React.createElement('b', null, "FIXED = F-TWO:"), " Fixed capital needs TWO accounts"),
        React.createElement('p', null, React.createElement('b', null, "FLUCTUATING = F-ONE:"), " Fluctuating capital needs ONE account"),
        React.createElement('p', null, React.createElement('b', null, "6.5-6-5.5:"), " Average months for monthly drawings (Beginning-Middle-End)"),
        React.createElement('p', null, React.createElement('b', null, "7.5-4.5:"), " Average months for quarterly drawings (Beginning-End)"),
        React.createElement('p', null, React.createElement('b', null, "GADS:"), " Guarantee process - Guarantee, Actual share, Deficiency, Split"),
        React.createElement('p', null, React.createElement('b', null, "PAGES:"), " Current Account Credits - Profit, Additional capital, Goodwill, Equity, Salary/Interest")
      )
    ),

    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mb-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('div', { className: 'bg-white p-2 rounded' },
          React.createElement('p', { className: 'font-semibold text-red-700' }, "❌ NEVER do this:"),
          React.createElement('ul', { className: 'list-disc pl-5 mt-1 space-y-1' },
            React.createElement('li', null, "Share profits in capital ratio when deed is silent (It's EQUAL!)"),
            React.createElement('li', null, "Provide interest/salary when deed doesn't mention it"),
            React.createElement('li', null, "Allow interest on capital when firm has loss"),
            React.createElement('li', null, "Forget to add interest on drawings to credit side of P&L Appropriation A/c"),
            React.createElement('li', null, "Use wrong average period for interest on drawings")
          )
        ),
        React.createElement('div', { className: 'bg-white p-2 rounded mt-2' },
          React.createElement('p', { className: 'font-semibold text-green-700' }, "✅ ALWAYS do this:"),
          React.createElement('ul', { className: 'list-disc pl-5 mt-1 space-y-1' },
            React.createElement('li', null, "Read question carefully - Fixed or Fluctuating? If not mentioned, use FLUCTUATING"),
            React.createElement('li', null, "Check partnership deed terms before calculating anything"),
            React.createElement('li', null, "Calculate interest on capital in parts if capital changes during year"),
            React.createElement('li', null, "Use Product Method for varying withdrawal amounts"),
            React.createElement('li', null, "Show all workings step-by-step for full marks"),
            React.createElement('li', null, "For past adjustments, use Net Effect Method (saves time)")
          )
        )
      )
    ),

    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "📊 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Partnership definition, Silent deed provisions, Capital account features"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Interest on capital/drawings calculations, Simple capital account"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " P&L Appropriation Account, Capital accounts (one method)"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Complete capital accounts (both methods), Guarantee problems, Past adjustments"),
        React.createElement('div', { className: 'bg-white p-3 rounded mt-2' },
          React.createElement('p', { className: 'font-bold mb-2 text-purple-900' }, "💡 Score Maximization Tips:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1' },
            React.createElement('li', null, "Practice account formats until you can draw them in sleep!"),
            React.createElement('li', null, "Memorize all average period formulas (6.5, 6, 5.5, 7.5, 4.5)"),
            React.createElement('li', null, "Master Net Effect Method for past adjustments (saves 5-10 minutes)"),
            React.createElement('li', null, "Always show P&L Appropriation account working"),
            React.createElement('li', null, "Double-check: Does answer make logical sense? (e.g., capital can't be negative in fixed method)")
          )
        )
      )
    )
  )
};