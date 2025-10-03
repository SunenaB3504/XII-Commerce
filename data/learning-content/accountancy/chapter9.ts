import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter9Module: LearningModule = {
  chapter: "9",
  title: "Financial Statements of a Company",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 9 explores the preparation and presentation of a company's final accounts as mandated by the Companies Act, 2013. This crucial topic covers the format and content of the Balance Sheet and Statement of Profit and Loss as per Schedule III, including proper classification of assets and liabilities."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master the vertical format requirements, understand the major and sub-heads classification, and learn the key accounting treatments for various items. This foundation is essential for both theoretical understanding and practical preparation of company financial statements."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-indigo-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-indigo-700" },
        React.createElement("li", null, "• Balance Sheet format and classification (8-10 marks)"),
        React.createElement("li", null, "• Statement of P&L format and items (6-8 marks)"),
        React.createElement("li", null, "• Notes to accounts and disclosures (4-6 marks)"),
        React.createElement("li", null, "• Accounting treatments for specific items (6-8 marks)"),
        React.createElement("li", null, "• Schedule III compliance (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Balance Sheet as per Schedule III",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The Balance Sheet must be prepared in a vertical format with two main parts: I. Equity and Liabilities and II. Assets. Each part has major heads and sub-heads as prescribed by Schedule III of the Companies Act, 2013."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Part I: Equity and Liabilities"),
          React.createElement("div", { className: "space-y-3 text-indigo-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Shareholders' Funds:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Share Capital (Equity & Preference)"),
                React.createElement("li", null, "• Reserves and Surplus"),
                React.createElement("li", null, "• Money received against share warrants")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Share Application Money Pending Allotment:"),
              React.createElement("p", null, "• Advances received for shares not yet allotted")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Non-Current Liabilities:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Long-term borrowings"),
                React.createElement("li", null, "• Deferred tax liabilities"),
                React.createElement("li", null, "• Other long-term liabilities")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Current Liabilities:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Short-term borrowings"),
                React.createElement("li", null, "• Trade payables"),
                React.createElement("li", null, "• Other current liabilities")
              )
            )
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Part II: Assets"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", { className: "font-semibold" }, "1. Non-Current Assets:"),
            React.createElement("ul", { className: "space-y-1" },
              React.createElement("li", null, "• Fixed Assets (Tangible & Intangible)"),
              React.createElement("li", null, "• Non-current investments"),
              React.createElement("li", null, "• Deferred tax assets"),
              React.createElement("li", null, "• Long-term loans and advances")
            ),
            React.createElement("p", { className: "font-semibold mt-2" }, "2. Current Assets:"),
            React.createElement("ul", { className: "space-y-1" },
              React.createElement("li", null, "• Current investments"),
              React.createElement("li", null, "• Inventories"),
              React.createElement("li", null, "• Trade receivables"),
              React.createElement("li", null, "• Cash and cash equivalents"),
              React.createElement("li", null, "• Short-term loans and advances")
            )
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "BALANCE SHEET - Vertical Format"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Equity & Liabilities | Assets - Major heads with sub-heads as per Schedule III")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "Balance Sheet Classification Example:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2" },
          React.createElement("p", null, "Classify the following items:"),
          React.createElement("p", null, "• Building: Non-current Assets - Fixed Assets (Tangible)"),
          React.createElement("p", null, "• 10% Debentures: Non-current Liabilities - Long-term Borrowings"),
          React.createElement("p", null, "• Cash at Bank: Current Assets - Cash and Cash Equivalents"),
          React.createElement("p", null, "• Trade Payables: Current Liabilities - Trade Payables"),
          React.createElement("p", null, "• Retained Earnings: Equity and Liabilities - Reserves and Surplus")
        )
      )
    },
    {
      title: "Statement of Profit and Loss as per Schedule III",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The Statement of Profit and Loss is also prepared in vertical format and shows the company's revenue, expenses, and resulting profit or loss for the accounting period."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Structure of P&L Statement:"),
          React.createElement("div", { className: "space-y-3 text-blue-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "I. Revenue from Operations:"),
              React.createElement("p", null, "• Sale of products and services")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "II. Other Income:"),
              React.createElement("p", null, "• Interest, dividend, profit on sale of assets")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "III. Total Revenue:"),
              React.createElement("p", null, "• Revenue from operations + Other income")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "IV. Expenses:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Cost of materials consumed"),
                React.createElement("li", null, "• Purchases of stock-in-trade"),
                React.createElement("li", null, "• Changes in inventories"),
                React.createElement("li", null, "• Employee benefit expenses"),
                React.createElement("li", null, "• Finance costs"),
                React.createElement("li", null, "• Depreciation and amortisation"),
                React.createElement("li", null, "• Other expenses")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "V. Profit before Tax:"),
              React.createElement("p", null, "• Total revenue - Total expenses")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "VI. Tax Expense:"),
              React.createElement("p", null, "• Current tax and deferred tax")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "VII. Profit/(Loss) for the Period:"),
              React.createElement("p", null, "• Profit before tax - Tax expense")
            )
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-green-700 text-sm" },
            React.createElement("li", null, "• All items of income and expense shown gross"),
            React.createElement("li", null, "• Exceptional items disclosed separately"),
            React.createElement("li", null, "• Prior period items shown separately")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "P&L STATEMENT - Revenue to Profit"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Revenue from Operations → Other Income → Expenses → Profit before Tax → Tax → Net Profit")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "P&L Statement Items Classification:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Classify the following:"),
          React.createElement("p", null, "• Sales: I. Revenue from Operations"),
          React.createElement("p", null, "• Interest Received: II. Other Income"),
          React.createElement("p", null, "• Salary Paid: IV. Expenses - Employee Benefit Expenses"),
          React.createElement("p", null, "• Bank Interest: IV. Expenses - Finance Costs"),
          React.createElement("p", null, "• Depreciation: IV. Expenses - Depreciation and Amortisation"),
          React.createElement("p", null, "• Income Tax: VI. Tax Expense")
        )
      )
    },
    {
      title: "Notes to Accounts and Disclosures",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Notes to accounts provide additional information about the items shown in the financial statements and ensure compliance with disclosure requirements."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Mandatory Disclosures:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Share capital: Authorised, issued, subscribed, paid-up"),
            React.createElement("p", null, "• Reserves and surplus: Details of each reserve"),
            React.createElement("p", null, "• Long-term borrowings: Terms of repayment"),
            React.createElement("p", null, "• Trade payables: Amounts due to micro and small enterprises"),
            React.createElement("p", null, "• Provisions: Nature and amount")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Accounting Policies:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-1" },
            React.createElement("p", null, "• Basis of preparation of financial statements"),
            React.createElement("p", null, "• Use of estimates and judgments"),
            React.createElement("p", null, "• Depreciation methods"),
            React.createElement("p", null, "• Inventory valuation methods"),
            React.createElement("p", null, "• Revenue recognition policies")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Contingent Liabilities:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• Claims against the company not acknowledged"),
            React.createElement("p", null, "• Guarantees given by the company"),
            React.createElement("p", null, "• Other possible obligations")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "NOTES - Additional Information"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Accounting policies, Contingent liabilities, Mandatory disclosures, Additional details")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "Notes to Accounts Example:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Note 1: Accounting Policies"),
          React.createElement("p", null, "• Fixed assets are stated at cost less accumulated depreciation"),
          React.createElement("p", null, "• Depreciation is provided on straight-line method"),
          React.createElement("p", null, "• Inventories are valued at lower of cost or net realisable value"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Note 2: Contingent Liabilities"),
          React.createElement("p", null, "• Claims not acknowledged: ₹50,000"),
          React.createElement("p", null, "• Bank guarantees: ₹2,00,000")
        )
      )
    },
    {
      title: "Key Accounting Treatments",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Certain items require specific accounting treatment in the preparation of financial statements as per Schedule III requirements."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Important Treatments:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Calls-in-Arrears:"),
              React.createElement("p", null, "Deducted from Share Capital")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Calls-in-Advance:"),
              React.createElement("p", null, "Shown as current liability")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Interest on Calls-in-Advance:"),
              React.createElement("p", null, "Treated as revenue income")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Preliminary Expenses:"),
              React.createElement("p", null, "Shown as deferred revenue expenditure")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "5. Discount on Issue of Shares:"),
              React.createElement("p", null, "Shown as deferred revenue expenditure")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "6. Profit on Reissue of Forfeited Shares:"),
              React.createElement("p", null, "Transferred to Capital Reserve")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Revaluation Reserve:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• Created on revaluation of fixed assets"),
            React.createElement("p", null, "• Shown under Reserves and Surplus"),
            React.createElement("p", null, "• Can be used for bonus issue or writing off losses")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "General Reserve:"),
          React.createElement("div", { className: "text-yellow-700 text-sm space-y-1" },
            React.createElement("p", null, "• Created out of profits"),
            React.createElement("p", null, "• Used for strengthening financial position"),
            React.createElement("p", null, "• Can be used for dividend declaration")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "TREATMENTS - Special Items"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Calls-in-arrears deduct, Calls-in-advance liability, Preliminary expenses deferred")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "Accounting Treatments Example:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Company has:"),
          React.createElement("p", null, "• Calls-in-arrears: ₹10,000 → Deduct from Share Capital"),
          React.createElement("p", null, "• Calls-in-advance: ₹5,000 → Current Liability"),
          React.createElement("p", null, "• Preliminary expenses: ₹20,000 → Deferred Revenue Expenditure"),
          React.createElement("p", null, "• Profit on reissue of forfeited shares: ₹8,000 → Capital Reserve"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Balance Sheet Impact:"),
          React.createElement("p", null, "Share Capital = Issued Capital - Calls-in-Arrears + Calls-in-Advance")
        )
      )
    },
    {
      title: "Operating Cycle and Current/Non-Current Classification",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "The operating cycle is the time taken by a company to acquire assets for processing and convert them into cash. It determines the classification of assets and liabilities as current or non-current."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Operating Cycle Concept:"),
          React.createElement("div", { className: "space-y-2 text-indigo-700 text-sm" },
            React.createElement("p", null, "• Time from cash investment to cash recovery"),
            React.createElement("p", null, "• Includes inventory holding period"),
            React.createElement("p", null, "• Includes receivables collection period")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Current Assets:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "• Expected to be realised within operating cycle or 12 months"),
            React.createElement("p", null, "• Examples: Inventory, Trade Receivables, Cash, Short-term Investments")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Current Liabilities:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• Expected to be settled within operating cycle or 12 months"),
            React.createElement("p", null, "• Examples: Trade Payables, Short-term Borrowings, Outstanding Expenses")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Non-Current Classification:"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "• Assets/Liabilities not meeting current criteria"),
            React.createElement("p", null, "• Held for long-term use or settlement")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "OPERATING CYCLE - Time Period"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Cash → Inventory → Receivables → Cash. Determines current/non-current classification")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "Operating Cycle Classification:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Manufacturing company with 15-month operating cycle:"),
          React.createElement("p", null, "• Raw Materials Inventory: Current Asset (within cycle)"),
          React.createElement("p", null, "• Trade Receivables (due in 14 months): Current Asset"),
          React.createElement("p", null, "• Trade Payables (due in 16 months): Current Liability"),
          React.createElement("p", null, "• 10-year Bank Loan: Non-current Liability"),
          React.createElement("p", null, "• Building: Non-current Asset"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Note: Operating cycle (15 months) > 12 months, so 15 months is the criterion")
        )
      )
    },
    {
      title: "Schedule III Compliance and Legal Requirements",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Schedule III of the Companies Act, 2013 prescribes the format for preparation and presentation of financial statements. Compliance with these requirements is mandatory for all companies."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Key Compliance Requirements:"),
          React.createElement("div", { className: "space-y-2 text-green-700 text-sm" },
            React.createElement("p", null, "• Vertical format for both Balance Sheet and P&L"),
            React.createElement("p", null, "• Specific major heads and sub-heads"),
            React.createElement("p", null, "• Rounding off figures to nearest lakh/rupee"),
            React.createElement("p", null, "• Previous year figures for comparison"),
            React.createElement("p", null, "• Notes to accounts and significant accounting policies")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Director's Responsibility Statement:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• Going concern assumption"),
            React.createElement("p", null, "• Prudent accounting policies"),
            React.createElement("p", null, "• True and fair view presentation"),
            React.createElement("p", null, "• Compliance with accounting standards")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Auditor's Report:"),
          React.createElement("div", { className: "text-yellow-700 text-sm space-y-1" },
            React.createElement("p", null, "• Opinion on true and fair view"),
            React.createElement("p", null, "• Compliance with accounting standards"),
            React.createElement("p", null, "• Adequacy of disclosures"),
            React.createElement("p", null, "• Internal controls evaluation")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-emerald-800 text-center" }, "SCHEDULE III - Mandatory Format"),
        React.createElement("p", { className: "text-emerald-700 text-center text-sm mt-1" }, "Vertical format, Specific heads, Notes required, Legal compliance essential")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
  React.createElement("p", { className: "font-semibold text-gray-800" }, "Schedule III Compliance Example:"),
  React.createElement("div", { className: "bg-gray-50 text-gray-900 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Required elements in financial statements:"),
          React.createElement("p", null, "• Balance Sheet: Vertical format with prescribed heads"),
          React.createElement("p", null, "• P&L Statement: Revenue to profit flow"),
          React.createElement("p", null, "• Notes: Accounting policies, contingent liabilities"),
          React.createElement("p", null, "• Director's Report: Management discussion and analysis"),
          React.createElement("p", null, "• Auditor's Report: Independent assurance"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Non-compliance may lead to penalties under Companies Act")
        )
      )
    }
  ],
  keywords: [
    { term: "Schedule III", definition: "Part of the Companies Act, 2013 that prescribes the format for preparation of Balance Sheet and Statement of Profit and Loss." },
    { term: "Balance Sheet", definition: "A statement showing the financial position of a company as at a particular date, with assets on one side and equity and liabilities on the other." },
    { term: "Statement of Profit and Loss", definition: "A statement showing the revenue, expenses, and resulting profit or loss of a company for a specific accounting period." },
    { term: "Shareholders' Funds", definition: "The equity portion of a company's capital, consisting of share capital and reserves and surplus." },
    { term: "Reserves and Surplus", definition: "Accumulated profits and other surpluses that are not distributed as dividends but retained for future use." },
    { term: "Non-Current Assets", definition: "Assets held for long-term use in business operations, not expected to be converted into cash within one year or operating cycle." },
    { term: "Current Assets", definition: "Assets expected to be converted into cash or consumed in operations within one year or operating cycle, whichever is longer." },
    { term: "Non-Current Liabilities", definition: "Obligations not expected to be settled within one year or operating cycle from the balance sheet date." },
    { term: "Current Liabilities", definition: "Obligations expected to be settled within one year or operating cycle from the balance sheet date." },
    { term: "Operating Cycle", definition: "The average time taken by a company to convert its investment in inventory into cash through sales." },
    { term: "Notes to Accounts", definition: "Additional information provided in financial statements to explain accounting policies, contingent liabilities, and other disclosures." },
    { term: "Contingent Liabilities", definition: "Possible obligations that may arise depending on the outcome of uncertain future events." },
    { term: "Accounting Policies", definition: "Specific accounting principles and methods adopted by a company for preparation of its financial statements." },
    { term: "Calls-in-Arrears", definition: "Amount of share capital called up but not paid by shareholders, deducted from share capital in the balance sheet." },
    { term: "Calls-in-Advance", definition: "Amount received from shareholders in excess of calls made, shown as current liability in the balance sheet." },
    { term: "Deferred Revenue Expenditure", definition: "Expenditure incurred for acquiring future benefits, carried forward and written off over a period of years." },
    { term: "Capital Reserve", definition: "Reserve created from capital profits, cannot be distributed as dividend but can be used for bonus issue." },
    { term: "Revaluation Reserve", definition: "Reserve created when fixed assets are revalued, represents unrealised gain on revaluation." },
    { term: "Director's Responsibility Statement", definition: "A statement by directors confirming that financial statements present true and fair view and are prepared as per applicable accounting standards." },
    { term: "Auditor's Report", definition: "An independent opinion by chartered accountants on whether financial statements present true and fair view." }
  ],
  caseStudies: [
    {
      title: "Complete Balance Sheet Preparation",
      scenario: "ABC Ltd. has the following balances as at 31st March, 2024: Share Capital ₹10,00,000, General Reserve ₹2,00,000, 10% Debentures ₹5,00,000, Building ₹8,00,000, Machinery ₹4,00,000, Inventory ₹3,00,000, Trade Receivables ₹2,00,000, Cash ₹1,00,000, Trade Payables ₹1,50,000, Outstanding Expenses ₹50,000. Prepare the Balance Sheet as per Schedule III.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Classify Equity and Liabilities"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Shareholders' Funds:"),
            React.createElement("p", null, "• Share Capital: ₹10,00,000"),
            React.createElement("p", null, "• Reserves and Surplus: ₹2,00,000"),
            React.createElement("p", null, "Non-Current Liabilities:"),
            React.createElement("p", null, "• Long-term Borrowings: ₹5,00,000"),
            React.createElement("p", null, "Current Liabilities:"),
            React.createElement("p", null, "• Trade Payables: ₹1,50,000"),
            React.createElement("p", null, "• Other Current Liabilities: ₹50,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Classify Assets"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Non-Current Assets:"),
            React.createElement("p", null, "• Fixed Assets: ₹12,00,000 (8,00,000 + 4,00,000)"),
            React.createElement("p", null, "Current Assets:"),
            React.createElement("p", null, "• Inventories: ₹3,00,000"),
            React.createElement("p", null, "• Trade Receivables: ₹2,00,000"),
            React.createElement("p", null, "• Cash and Cash Equivalents: ₹1,00,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Balance Sheet Structure"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "EQUITY AND LIABILITIES: ₹19,00,000"),
            React.createElement("p", null, "ASSETS: ₹19,00,000"),
            React.createElement("p", null, "Format follows Schedule III vertical structure"),
            React.createElement("p", null, "Previous year figures would be shown for comparison")
          )
        )
      )
    },
    {
      title: "Statement of Profit and Loss Preparation",
      scenario: "From the following information, prepare Statement of Profit and Loss for the year ended 31st March, 2024: Revenue from Operations ₹50,00,000, Cost of Materials Consumed ₹25,00,000, Employee Benefit Expenses ₹8,00,000, Finance Costs ₹2,00,000, Depreciation ₹3,00,000, Other Expenses ₹4,00,000, Interest Received ₹1,00,000, Tax Rate 25%.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Calculate Revenue and Expenses"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Revenue from Operations: ₹50,00,000"),
            React.createElement("p", null, "Other Income: ₹1,00,000"),
            React.createElement("p", null, "Total Revenue: ₹51,00,000"),
            React.createElement("p", null, "Total Expenses: ₹42,00,000"),
            React.createElement("p", null, "• Cost of Materials: ₹25,00,000"),
            React.createElement("p", null, "• Employee Benefits: ₹8,00,000"),
            React.createElement("p", null, "• Finance Costs: ₹2,00,000"),
            React.createElement("p", null, "• Depreciation: ₹3,00,000"),
            React.createElement("p", null, "• Other Expenses: ₹4,00,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Calculate Profit"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Profit before Tax: ₹51,00,000 - ₹42,00,000 = ₹9,00,000"),
            React.createElement("p", null, "Tax Expense (25%): ₹2,25,000"),
            React.createElement("p", null, "Profit for the Period: ₹6,75,000"),
            React.createElement("p", null, "Statement follows Schedule III vertical format")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Key Points"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "• All items shown gross (no netting)"),
            React.createElement("p", null, "• Finance costs separate from other expenses"),
            React.createElement("p", null, "• Depreciation shown separately"),
            React.createElement("p", null, "• Tax calculated on profit before tax")
          )
        )
      )
    },
    {
      title: "Operating Cycle and Classification Impact",
      scenario: "A manufacturing company has an operating cycle of 18 months. Classify the following items as current or non-current: (a) Raw Materials Inventory ₹5,00,000 (b) Trade Receivables due in 16 months ₹3,00,000 (c) Trade Payables due in 20 months ₹2,00,000 (d) 15-year Bank Loan ₹10,00,000 (e) Building ₹15,00,000.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Operating Cycle Criterion"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Operating cycle is 18 months, which exceeds 12 months. Therefore, 18 months is used as the criterion for current/non-current classification.")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Asset Classification"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Current Assets:"),
            React.createElement("p", null, "• Raw Materials Inventory: ₹5,00,000 (within 18 months)"),
            React.createElement("p", null, "• Trade Receivables: ₹3,00,000 (due in 16 months < 18 months)"),
            React.createElement("p", null, "Non-Current Assets:"),
            React.createElement("p", null, "• Building: ₹15,00,000 (held for long-term use)")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Liability Classification"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Current Liabilities:"),
            React.createElement("p", null, "• Trade Payables: ₹2,00,000 (due in 20 months > 18 months)"),
            React.createElement("p", null, "Non-Current Liabilities:"),
            React.createElement("p", null, "• 15-year Bank Loan: ₹10,00,000 (long-term obligation)"),
            React.createElement("p", null, "Note: Trade Payables due in 20 months are current because 20 > 18 months")
          )
        )
      )
    },
    {
      title: "Notes to Accounts and Accounting Treatments",
      scenario: "PQR Ltd. has Calls-in-Arrears ₹20,000, Calls-in-Advance ₹15,000, Preliminary Expenses ₹50,000 (to be written off over 5 years), Profit on Reissue of Forfeited Shares ₹25,000. The company has contingent liabilities of ₹1,00,000 for outstanding legal cases. Prepare relevant notes and show balance sheet impact.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Share Capital Adjustments"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Calls-in-Arrears ₹20,000: Deducted from Share Capital"),
            React.createElement("p", null, "Calls-in-Advance ₹15,000: Shown as Current Liability"),
            React.createElement("p", null, "Net effect on Share Capital: -₹5,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Reserves and Special Items"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Preliminary Expenses: ₹50,000 → Deferred Revenue Expenditure"),
            React.createElement("p", null, "Profit on Reissue: ₹25,000 → Capital Reserve"),
            React.createElement("p", null, "These appear under Reserves and Surplus")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Notes to Accounts"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Note 1: Share Capital Reconciliation"),
            React.createElement("p", null, "Note 2: Deferred Revenue Expenditure"),
            React.createElement("p", null, "Note 3: Capital Reserve"),
            React.createElement("p", null, "Note 4: Contingent Liabilities - Outstanding legal cases ₹1,00,000"),
            React.createElement("p", null, "Note 5: Accounting Policies")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Balance Sheet: Vertical format, Equity & Liabilities vs Assets"),
        React.createElement("li", null, "• P&L: Revenue from operations → Other income → Expenses → Profit"),
        React.createElement("li", null, "• Current/Non-current: Based on operating cycle or 12 months"),
        React.createElement("li", null, "• Calls-in-arrears: Deduct from share capital"),
        React.createElement("li", null, "• Calls-in-advance: Current liability"),
        React.createElement("li", null, "• Preliminary expenses: Deferred revenue expenditure"),
        React.createElement("li", null, "• Notes to accounts: Mandatory for disclosures")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Major Heads Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Equity and Liabilities:"),
          React.createElement("p", { className: "text-green-700" }, "Shareholders' Funds, Non-current Liabilities, Current Liabilities")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Assets:"),
          React.createElement("p", { className: "text-green-700" }, "Non-current Assets, Current Assets")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "P&L Revenue:"),
          React.createElement("p", { className: "text-green-700" }, "Revenue from Operations + Other Income")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "P&L Expenses:"),
          React.createElement("p", { className: "text-green-700" }, "Cost of Materials, Employee Benefits, Finance Costs, Depreciation, Other Expenses")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Wrong classification of current/non-current items"),
          React.createElement("li", null, "• Incorrect treatment of calls-in-arrears/advance"),
          React.createElement("li", null, "• Missing notes to accounts"),
          React.createElement("li", null, "• Wrong order in P&L statement"),
          React.createElement("li", null, "• Forgetting operating cycle for classification")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("p", null, "• Always check operating cycle first for classification"),
          React.createElement("p", null, "• Remember vertical format for both statements"),
          React.createElement("p", null, "• Use major heads and sub-heads from Schedule III"),
          React.createElement("p", null, "• Show all items gross, no netting"),
          React.createElement("p", null, "• Include previous year figures for comparison")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Balance Sheet format and classification (8-10 marks)"),
          React.createElement("li", null, "• Statement of P&L format (6-8 marks)"),
          React.createElement("li", null, "• Current/non-current classification (4-6 marks)"),
          React.createElement("li", null, "• Notes to accounts (4-6 marks)"),
          React.createElement("li", null, "• Accounting treatments (6-8 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Classification of items (4-6 marks)"),
          React.createElement("li", null, "• Preparation of Balance Sheet (8-10 marks)"),
          React.createElement("li", null, "• Preparation of P&L Statement (6-8 marks)"),
          React.createElement("li", null, "• Operating cycle problems (4-6 marks)"),
          React.createElement("li", null, "• Notes and disclosures (4-6 marks)")
        )
      )
    )
  )
};