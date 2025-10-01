import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter6Module: LearningModule = {
  chapter: "6",
  title: "Issue and Forfeiture of Shares",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 6 introduces Company Accounts by exploring the primary source of long-term finance for companies: share capital. This crucial topic covers the complete process of issuing shares, from authorization to allotment, and includes complex procedures like forfeiture and re-issue of shares."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master share capital structure, issue of shares at par/premium/discount, calls on shares, forfeiture procedures, and re-issue accounting. Understanding these concepts is essential for both theoretical questions and practical company account problems."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-blue-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-blue-700" },
        React.createElement("li", null, "• Share capital structure and types (6-8 marks)"),
        React.createElement("li", null, "• Issue of shares at par/premium/discount (8-10 marks)"),
        React.createElement("li", null, "• Forfeiture and re-issue of shares (6-8 marks)"),
        React.createElement("li", null, "• Calls on shares and arrears/advance (4-6 marks)"),
        React.createElement("li", null, "• Journal entries for share transactions (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Share Capital Structure",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Share capital is the capital raised by a company through the issue of shares. It has a hierarchical structure that must be properly disclosed in the Balance Sheet."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Capital Hierarchy:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, React.createElement("strong", null, "1. Authorised Capital:")),
            React.createElement("p", null, "Maximum amount of share capital a company can issue as per Memorandum of Association."),
            React.createElement("p", null, ""),
            React.createElement("p", null, React.createElement("strong", null, "2. Issued Capital:")),
            React.createElement("p", null, "Part of authorised capital that the company has decided to issue to the public."),
            React.createElement("p", null, ""),
            React.createElement("p", null, React.createElement("strong", null, "3. Subscribed Capital:")),
            React.createElement("p", null, "Part of issued capital that has been subscribed by the public."),
            React.createElement("p", null, ""),
            React.createElement("p", null, React.createElement("strong", null, "4. Called-up Capital:")),
            React.createElement("p", null, "Part of subscribed capital that has been called up by the company."),
            React.createElement("p", null, ""),
            React.createElement("p", null, React.createElement("strong", null, "5. Paid-up Capital:")),
            React.createElement("p", null, "Part of called-up capital that has actually been paid by shareholders.")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Types of Share Capital:"),
          React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-green-700 text-sm" },
            React.createElement("div", null,
              React.createElement("p", { className: "font-semibold" }, "Equity Share Capital"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Owners of the company"),
                React.createElement("li", null, "• Variable dividend"),
                React.createElement("li", null, "• Voting rights"),
                React.createElement("li", null, "• No fixed rate of return")
              )
            ),
            React.createElement("div", null,
              React.createElement("p", { className: "font-semibold" }, "Preference Share Capital"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Fixed dividend"),
                React.createElement("li", null, "• Preference in dividend payment"),
                React.createElement("li", null, "• Preference in repayment of capital"),
                React.createElement("li", null, "• Limited/no voting rights")
              )
            )
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "A-I-S-C-P - Capital Structure"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Authorised, Issued, Subscribed, Called-up, Paid-up")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Balance Sheet Disclosure:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2" },
          React.createElement("p", null, "SHARE CAPITAL"),
          React.createElement("p", null, "Authorised Capital: 10,00,000 Equity Shares of ₹10 each - ₹1,00,00,000"),
          React.createElement("p", null, "Issued Capital: 8,00,000 Equity Shares of ₹10 each - ₹80,00,000"),
          React.createElement("p", null, "Subscribed Capital: 7,50,000 Equity Shares of ₹10 each - ₹75,00,000"),
          React.createElement("p", null, "Called-up Capital: 7,50,000 Equity Shares of ₹10 each - ₹75,00,000"),
          React.createElement("p", null, "Paid-up Capital: 7,50,000 Equity Shares of ₹10 each - ₹75,00,000")
        )
      )
    },
    {
      title: "Issue of Shares at Par",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When shares are issued at their face value, the issue price equals the nominal value of the shares."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Accounting Entries:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Application Money Received:"),
              React.createElement("p", null, "Bank A/c Dr."),
              React.createElement("p", null, "To Share Application A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Application Money Transferred to Allotment:"),
              React.createElement("p", null, "Share Application A/c Dr."),
              React.createElement("p", null, "To Share Allotment A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Allotment Money Received:"),
              React.createElement("p", null, "Bank A/c Dr."),
              React.createElement("p", null, "To Share Allotment A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Allotment of Shares:"),
              React.createElement("p", null, "Share Allotment A/c Dr."),
              React.createElement("p", null, "To Share Capital A/c")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• No Securities Premium account created"),
            React.createElement("li", null, "• Share Capital account credited with face value"),
            React.createElement("li", null, "• All money received goes to Share Capital")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "PAR - Face Value Issue"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Price equals Nominal value, No premium, Direct to Share Capital")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Issue at Par Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "ABC Ltd. issued 10,000 shares of ₹10 each at par."),
          React.createElement("p", null, "Application: ₹3 per share → ₹30,000"),
          React.createElement("p", null, "Allotment: ₹7 per share → ₹70,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entries:"),
          React.createElement("p", null, "Bank A/c Dr. ₹30,000"),
          React.createElement("p", null, "To Share Application A/c ₹30,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Share Application A/c Dr. ₹30,000"),
          React.createElement("p", null, "To Share Allotment A/c ₹30,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Bank A/c Dr. ₹70,000"),
          React.createElement("p", null, "To Share Allotment A/c ₹70,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Share Allotment A/c Dr. ₹1,00,000"),
          React.createElement("p", null, "To Share Capital A/c ₹1,00,000")
        )
      )
    },
    {
      title: "Issue of Shares at Premium",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When shares are issued at a price higher than their face value, the excess amount is called Securities Premium."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Premium Accounting:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Issue Price = Face Value + Premium"),
            React.createElement("p", null, "• Premium amount credited to Securities Premium Account"),
            React.createElement("p", null, "• Securities Premium is a capital receipt, not revenue")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For allotment of shares at premium:"),
            React.createElement("p", null, "Bank A/c Dr. [Total Amount]"),
            React.createElement("p", null, "To Share Allotment A/c [Face Value]"),
            React.createElement("p", null, "To Securities Premium A/c [Premium Amount]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Uses of Securities Premium:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Writing off preliminary expenses"),
            React.createElement("li", null, "• Writing off discount on issue of debentures"),
            React.createElement("li", null, "• Premium on redemption of preference shares"),
            React.createElement("li", null, "• Cannot be used for dividend payment")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "PREMIUM - Excess Amount"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Issue Price > Face Value, Excess to Securities Premium, Capital receipt")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Issue at Premium Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "XYZ Ltd. issued 5,000 shares of ₹10 each at ₹12 per share."),
          React.createElement("p", null, "Total Issue Price: 5,000 × ₹12 = ₹60,000"),
          React.createElement("p", null, "Face Value: 5,000 × ₹10 = ₹50,000"),
          React.createElement("p", null, "Securities Premium: ₹60,000 - ₹50,000 = ₹10,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Bank A/c Dr. ₹60,000"),
          React.createElement("p", null, "To Share Capital A/c ₹50,000"),
          React.createElement("p", null, "To Securities Premium A/c ₹10,000")
        )
      )
    },
    {
      title: "Calls on Shares",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "After allotment, companies may make further calls on shares to collect the remaining amount due from shareholders."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Types of Calls:"),
          React.createElement("div", { className: "space-y-3 text-blue-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "First Call:"),
              React.createElement("p", null, "Made after allotment, usually for the remaining amount")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Second/Final Call:"),
              React.createElement("p", null, "Made when first call is not sufficient")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Calls-in-Arrears:"),
              React.createElement("p", null, "Amount not paid on due date, treated as liability")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Calls-in-Advance:"),
              React.createElement("p", null, "Amount paid before due date, treated as liability")
            )
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For making a call:"),
            React.createElement("p", null, "Share Call A/c Dr."),
            React.createElement("p", null, "To Share Capital A/c"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For call money received:"),
            React.createElement("p", null, "Bank A/c Dr."),
            React.createElement("p", null, "To Share Call A/c")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-cyan-800 text-center" }, "CALLS - Share Demands"),
        React.createElement("p", { className: "text-cyan-700 text-center text-sm mt-1" }, "First call after allotment, Second call if needed, Arrears liability, Advance liability")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Calls Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "10,000 shares of ₹10 each, allotted at ₹5."),
          React.createElement("p", null, "First Call: ₹3 per share"),
          React.createElement("p", null, "Second Call: ₹2 per share"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entries:"),
          React.createElement("p", null, "First Call A/c Dr. ₹30,000"),
          React.createElement("p", null, "To Share Capital A/c ₹30,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Bank A/c Dr. ₹25,000"),
          React.createElement("p", null, "Calls-in-Arrears A/c Dr. ₹5,000"),
          React.createElement("p", null, "To First Call A/c ₹30,000")
        )
      )
    },
    {
      title: "Forfeiture of Shares",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Forfeiture is the cancellation of shares due to non-payment of calls. The amount already paid is forfeited by the company."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Forfeiture Process:"),
          React.createElement("div", { className: "space-y-2 text-red-700 text-sm" },
            React.createElement("p", null, "• Shareholder fails to pay call money"),
            React.createElement("p", null, "• Company passes forfeiture resolution"),
            React.createElement("p", null, "• Amount paid debited to Share Capital"),
            React.createElement("p", null, "• Amount paid credited to Share Forfeiture Account")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Journal Entry:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-2" },
            React.createElement("p", null, "Share Capital A/c Dr. [Amount Paid]"),
            React.createElement("p", null, "To Share Forfeiture A/c [Amount Paid]"),
            React.createElement("p", null, "To Calls-in-Arrears A/c [Amount Due]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Share Capital reduced by amount paid"),
            React.createElement("li", null, "• Share Forfeiture Account shows profit on re-issue"),
            React.createElement("li", null, "• Calls-in-Arrears account closed")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "FORFEIT - Cancel Shares"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Non-payment of calls, Share Capital debit, Forfeiture Account credit")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Forfeiture Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "100 shares of ₹10 each forfeited."),
          React.createElement("p", null, "Amount paid: Application ₹3, Allotment ₹5 = ₹8 per share"),
          React.createElement("p", null, "Total paid: 100 × ₹8 = ₹800"),
          React.createElement("p", null, "Calls-in-Arrears: ₹2 per share = ₹200"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Share Capital A/c Dr. ₹800"),
          React.createElement("p", null, "To Share Forfeiture A/c ₹800"),
          React.createElement("p", null, "To Calls-in-Arrears A/c ₹200")
        )
      )
    },
    {
      title: "Re-issue of Forfeited Shares",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Forfeited shares can be re-issued to new applicants. The re-issue price cannot be less than the amount unpaid on forfeited shares."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Re-issue Accounting:"),
          React.createElement("div", { className: "space-y-2 text-green-700 text-sm" },
            React.createElement("p", null, "• Re-issue at face value or premium"),
            React.createElement("p", null, "• Discount allowed up to forfeiture amount"),
            React.createElement("p", null, "• Profit on re-issue transferred to Capital Reserve")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-2" },
            React.createElement("p", null, "For re-issue:"),
            React.createElement("p", null, "Bank A/c Dr. [Re-issue Price]"),
            React.createElement("p", null, "Share Forfeiture A/c Dr. [Discount]"),
            React.createElement("p", null, "To Share Capital A/c [Face Value]"),
            React.createElement("p", null, "To Securities Premium A/c [Premium]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Transfer profit to Capital Reserve:"),
            React.createElement("p", null, "Share Forfeiture A/c Dr. [Profit]"),
            React.createElement("p", null, "To Capital Reserve A/c [Profit]")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Profit Calculation:"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Profit on Re-issue = Amount Forfeited - Discount Allowed"),
            React.createElement("p", null, "OR"),
            React.createElement("p", null, "Profit = Re-issue Price - (Face Value - Discount)")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "RE-ISSUE - Sell Again"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Re-issue forfeited shares, Discount ≤ forfeiture amount, Profit to Capital Reserve")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Re-issue Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "100 shares of ₹10 each re-issued at ₹8 per share."),
          React.createElement("p", null, "Amount forfeited: ₹800"),
          React.createElement("p", null, "Re-issue price: ₹800"),
          React.createElement("p", null, "Discount allowed: ₹2 per share = ₹200"),
          React.createElement("p", null, "Profit on re-issue: ₹800 - ₹200 = ₹600"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entries:"),
          React.createElement("p", null, "Bank A/c Dr. ₹800"),
          React.createElement("p", null, "Share Forfeiture A/c Dr. ₹200"),
          React.createElement("p", null, "To Share Capital A/c ₹1,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Share Forfeiture A/c Dr. ₹600"),
          React.createElement("p", null, "To Capital Reserve A/c ₹600")
        )
      )
    },
    {
      title: "Issue of Shares for Consideration Other than Cash",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Shares can be issued in exchange for assets or services other than cash. The value is determined by independent valuation."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Common Scenarios:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, "• Purchase of assets (machinery, buildings)"),
            React.createElement("p", null, "• Acquisition of business"),
            React.createElement("p", null, "• Services rendered by promoters"),
            React.createElement("p", null, "• Conversion of loans/debentures")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For assets acquired:"),
            React.createElement("p", null, "Assets A/c Dr. [Agreed Value]"),
            React.createElement("p", null, "To Share Capital A/c [Face Value]"),
            React.createElement("p", null, "To Securities Premium A/c [Premium]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For services:"),
            React.createElement("p", null, "Goodwill A/c Dr. [Value]"),
            React.createElement("p", null, "To Share Capital A/c [Face Value]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Value determined by independent valuer"),
            React.createElement("li", null, "• Minimum subscription rules apply"),
            React.createElement("li", null, "• Stamp duty payable on share certificates")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-indigo-50 border-2 border-indigo-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-indigo-800 text-center" }, "NON-CASH - Asset Exchange"),
        React.createElement("p", { className: "text-indigo-700 text-center text-sm mt-1" }, "Shares for assets/services, Independent valuation, Agreed value basis")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Non-Cash Issue Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "ABC Ltd. issued 1,000 shares of ₹10 each for machinery valued at ₹15,000."),
          React.createElement("p", null, "Face Value: 1,000 × ₹10 = ₹10,000"),
          React.createElement("p", null, "Securities Premium: ₹15,000 - ₹10,000 = ₹5,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Machinery A/c Dr. ₹15,000"),
          React.createElement("p", null, "To Share Capital A/c ₹10,000"),
          React.createElement("p", null, "To Securities Premium A/c ₹5,000")
        )
      )
    },
    {
      title: "Oversubscription and Pro-rata Allotment",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When applications received exceed shares offered, the issue is oversubscribed. Excess applications are refunded and allotment is made on pro-rata basis."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Pro-rata Calculation:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "Allotment Ratio = Shares Offered ÷ Total Applications"),
            React.createElement("p", null, "OR"),
            React.createElement("p", null, "Allotment Ratio = Total Applications ÷ Shares Offered")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For excess application money:"),
            React.createElement("p", null, "Share Application A/c Dr. [Excess Amount]"),
            React.createElement("p", null, "To Share Allotment A/c [Transferred to Allotment]"),
            React.createElement("p", null, "To Bank A/c [Refunded]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For pro-rata allotment:"),
            React.createElement("p", null, "Share Allotment A/c Dr. [Allotted Amount]"),
            React.createElement("p", null, "To Share Capital A/c [Face Value]")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Minimum subscription must be received"),
            React.createElement("li", null, "• Excess money refunded after allotment"),
            React.createElement("li", null, "• Pro-rata allotment ensures fair distribution")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-emerald-800 text-center" }, "OVERSUB - Excess Applications"),
        React.createElement("p", { className: "text-emerald-700 text-center text-sm mt-1" }, "Applications > Shares offered, Pro-rata allotment, Excess refunded")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Oversubscription Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "10,000 shares offered, 15,000 applications received."),
          React.createElement("p", null, "Application money: ₹3 per share"),
          React.createElement("p", null, "Allotment ratio: 10,000:15,000 = 2:3"),
          React.createElement("p", null, "Each applicant gets 2 shares for every 3 applied."),
          React.createElement("p", null, ""),
          React.createElement("p", null, "For applicant applying for 300 shares:"),
          React.createElement("p", null, "Allotted: 300 × 2/3 = 200 shares"),
          React.createElement("p", null, "Excess application money: (300-200) × ₹3 = ₹300 refunded")
        )
      )
    },
    {
      title: "Minimum Subscription",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Companies Act requires minimum subscription to be received before allotment. If not received, issue fails and all money refunded."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Minimum Subscription Rules:"),
          React.createElement("div", { className: "space-y-2 text-red-700 text-sm" },
            React.createElement("p", null, "• At least 90% of issued capital must be subscribed"),
            React.createElement("p", null, "• Entire application money must be received"),
            React.createElement("p", null, "• If not received, issue cancelled"),
            React.createElement("p", null, "• All money refunded with interest")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "If minimum subscription not received:"),
            React.createElement("p", null, "Share Application A/c Dr. [Total Received]"),
            React.createElement("p", null, "To Bank A/c [Refund Amount]"),
            React.createElement("p", null, "To Interest A/c [Interest Paid]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Important Notes:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Minimum subscription is a statutory requirement"),
            React.createElement("li", null, "• Protects investors from company failure"),
            React.createElement("li", null, "• Interest paid on refunds if delay occurs")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-amber-50 border-2 border-amber-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-amber-800 text-center" }, "MINIMUM - 90% Rule"),
        React.createElement("p", { className: "text-amber-700 text-center text-sm mt-1" }, "90% of issued capital must be subscribed, Application money received, Else issue fails")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Minimum Subscription Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Issued Capital: ₹10,00,000"),
          React.createElement("p", null, "Minimum Subscription Required: 90% = ₹9,00,000"),
          React.createElement("p", null, "Application Money Received: ₹8,00,000"),
          React.createElement("p", null, "Result: Issue fails, all money refunded"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Share Application A/c Dr. ₹8,00,000"),
          React.createElement("p", null, "To Bank A/c ₹8,00,000")
        )
      )
    }
  ],
  keywords: [
    { term: "Share Capital", definition: "The capital raised by a company through the issue of shares, representing ownership in the company." },
    { term: "Authorised Capital", definition: "The maximum amount of share capital that a company is authorised to issue as per its Memorandum of Association." },
    { term: "Issued Capital", definition: "The portion of authorised capital that the company has decided to issue to the public for subscription." },
    { term: "Subscribed Capital", definition: "The portion of issued capital that has actually been subscribed by the public." },
    { term: "Called-up Capital", definition: "The portion of subscribed capital that the company has called up from shareholders." },
    { term: "Paid-up Capital", definition: "The portion of called-up capital that has actually been paid by the shareholders." },
    { term: "Securities Premium", definition: "The excess amount received over the face value of shares when issued at a premium, treated as a capital receipt." },
    { term: "Calls-in-Arrears", definition: "The amount due from shareholders on calls that remains unpaid on the due date." },
    { term: "Calls-in-Advance", definition: "The amount paid by shareholders before the company has made the official call for payment." },
    { term: "Forfeiture of Shares", definition: "The cancellation of shares due to non-payment of calls, where the amount already paid is forfeited by the company." },
    { term: "Re-issue of Shares", definition: "The process of issuing previously forfeited shares to new applicants, usually at a discount." },
    { term: "Capital Reserve", definition: "A reserve created out of capital profits, such as profit on re-issue of forfeited shares." },
    { term: "Pro-rata Allotment", definition: "Allotment of shares proportionately to applicants when the issue is oversubscribed." },
    { term: "Minimum Subscription", definition: "The minimum amount that must be subscribed (90% of issued capital) before shares can be allotted." },
    { term: "Oversubscription", definition: "A situation where the number of shares applied for exceeds the number of shares offered for subscription." },
    { term: "Equity Share Capital", definition: "Shares that represent ownership in the company with voting rights and variable dividend payments." },
    { term: "Preference Share Capital", definition: "Shares that have preference over equity shares in dividend payment and capital repayment." },
    { term: "Share Application Account", definition: "An account used to record money received on share application before allotment." },
    { term: "Share Allotment Account", definition: "An account used to record money received on share allotment and transferred from application." }
  ],
  caseStudies: [
    {
      title: "Complete Share Issue with Premium and Forfeiture",
      scenario: "ABC Ltd. issued 10,000 equity shares of ₹10 each at a premium of ₹2 per share. Application money ₹3 per share. Allotment money ₹7 per share (including ₹2 premium). First call ₹2 per share. Second call ₹1 per share. One shareholder holding 100 shares failed to pay first call. These shares were forfeited and later re-issued at ₹9 per share.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Issue of Shares"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Application: 10,000 × ₹3 = ₹30,000"),
            React.createElement("p", null, "Allotment: 10,000 × ₹7 = ₹70,000 (₹50,000 capital + ₹20,000 premium)"),
            React.createElement("p", null, "Securities Premium: ₹20,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Calls and Forfeiture"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "First Call: 9,900 × ₹2 = ₹19,800 received"),
            React.createElement("p", null, "Forfeiture: 100 shares, amount paid ₹10 per share (₹3+₹7)"),
            React.createElement("p", null, "Share Forfeiture Account: ₹1,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Re-issue of Shares"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Re-issue at ₹9 per share: ₹900 received"),
            React.createElement("p", null, "Discount allowed: ₹1 per share = ₹100"),
            React.createElement("p", null, "Profit on re-issue: ₹1,000 - ₹100 = ₹900"),
            React.createElement("p", null, "Capital Reserve: ₹900")
          )
        )
      )
    },
    {
      title: "Oversubscription and Pro-rata Allotment",
      scenario: "XYZ Ltd. offered 50,000 equity shares of ₹10 each at par. Applications received for 75,000 shares. Application money ₹3 per share. Allotment money ₹7 per share. Calculate pro-rata allotment and excess refund.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Pro-rata Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Allotment Ratio = 50,000 : 75,000 = 2:3"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Each applicant gets 2 shares for every 3 applied")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: For an Applicant"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Applied for 1,500 shares"),
            React.createElement("p", null, "Allotted: 1,500 × 2/3 = 1,000 shares"),
            React.createElement("p", null, "Application money for allotted shares: 1,000 × ₹3 = ₹3,000"),
            React.createElement("p", null, "Excess application money: (1,500-1,000) × ₹3 = ₹1,500 refunded")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Accounting Treatment"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Total application money received: 75,000 × ₹3 = ₹2,25,000"),
            React.createElement("p", null, "Transferred to allotment: 50,000 × ₹3 = ₹1,50,000"),
            React.createElement("p", null, "Refunded: ₹75,000"),
            React.createElement("p", null, "Allotment money received: 50,000 × ₹7 = ₹3,50,000")
          )
        )
      )
    },
    {
      title: "Issue for Consideration Other than Cash",
      scenario: "PQR Ltd. issued 2,000 equity shares of ₹10 each at a premium of ₹5 per share to acquire machinery valued at ₹30,000. Also issued 500 shares of ₹10 each to promoters for services rendered, valued at ₹7,500.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Machinery Acquisition"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Shares issued: 2,000 shares at ₹15 each (₹10 + ₹5 premium)"),
            React.createElement("p", null, "Total value: ₹30,000"),
            React.createElement("p", null, "Share Capital: 2,000 × ₹10 = ₹20,000"),
            React.createElement("p", null, "Securities Premium: 2,000 × ₹5 = ₹10,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Services to Promoters"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Shares issued: 500 shares at ₹10 each"),
            React.createElement("p", null, "Value of services: ₹7,500"),
            React.createElement("p", null, "Goodwill created: ₹7,500"),
            React.createElement("p", null, "Share Capital: 500 × ₹10 = ₹5,000"),
            React.createElement("p", null, "Securities Premium: ₹2,500")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Journal Entries"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "For machinery:"),
            React.createElement("p", null, "Machinery A/c Dr. ₹30,000"),
            React.createElement("p", null, "To Share Capital A/c ₹20,000"),
            React.createElement("p", null, "To Securities Premium A/c ₹10,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For services:"),
            React.createElement("p", null, "Goodwill A/c Dr. ₹7,500"),
            React.createElement("p", null, "To Share Capital A/c ₹5,000"),
            React.createElement("p", null, "To Securities Premium A/c ₹2,500")
          )
        )
      )
    },
    {
      title: "Complex Forfeiture and Re-issue Scenario",
      scenario: "RST Ltd. issued 5,000 shares of ₹10 each at par. Application ₹3, Allotment ₹4, First Call ₹3. 200 shares forfeited for non-payment of first call. Later re-issued at ₹8 per share. Calculate profit on re-issue and final balances.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Forfeiture Calculation"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Amount paid per share: ₹3 + ₹4 = ₹7"),
            React.createElement("p", null, "Total forfeited: 200 × ₹7 = ₹1,400"),
            React.createElement("p", null, "Calls-in-Arrears: 200 × ₹3 = ₹600"),
            React.createElement("p", null, "Share Forfeiture Account: ₹1,400")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Re-issue Accounting"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Re-issue price: 200 × ₹8 = ₹1,600"),
            React.createElement("p", null, "Discount allowed: ₹2 per share = ₹400"),
            React.createElement("p", null, "Profit on re-issue: ₹1,400 - ₹400 = ₹1,000"),
            React.createElement("p", null, "Capital Reserve: ₹1,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Final Balances"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Share Capital: 5,000 × ₹10 = ₹50,000"),
            React.createElement("p", null, "Paid-up Capital: ₹50,000 - ₹1,400 + ₹1,600 = ₹49,200"),
            React.createElement("p", null, "Securities Premium: Nil"),
            React.createElement("p", null, "Capital Reserve: ₹1,000")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Share Capital hierarchy: Authorised > Issued > Subscribed > Called-up > Paid-up"),
        React.createElement("li", null, "• Securities Premium is capital receipt, cannot be used for dividend"),
        React.createElement("li", null, "• Minimum subscription: 90% of issued capital must be received"),
        React.createElement("li", null, "• Forfeiture: Share Capital debited with amount paid, Forfeiture Account credited"),
        React.createElement("li", null, "• Re-issue discount cannot exceed forfeiture amount"),
        React.createElement("li", null, "• Profit on re-issue of forfeited shares goes to Capital Reserve")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Securities Premium:"),
          React.createElement("p", { className: "text-green-700" }, "Issue Price - Face Value")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Pro-rata Ratio:"),
          React.createElement("p", { className: "text-green-700" }, "Shares Offered : Applications Received")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Profit on Re-issue:"),
          React.createElement("p", { className: "text-green-700" }, "Amount Forfeited - Discount Allowed")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Minimum Subscription:"),
          React.createElement("p", { className: "text-green-700" }, "90% of Issued Capital")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing share capital hierarchy levels"),
          React.createElement("li", null, "• Incorrect Securities Premium calculation"),
          React.createElement("li", null, "• Wrong forfeiture journal entries"),
          React.createElement("li", null, "• Forgetting to transfer re-issue profit to Capital Reserve"),
          React.createElement("li", null, "• Incorrect pro-rata allotment calculations")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always calculate total amounts first"),
          React.createElement("li", null, "• Use T-accounts for complex scenarios"),
          React.createElement("li", null, "• Remember premium goes to Securities Premium Account"),
          React.createElement("li", null, "• Check minimum subscription before proceeding"),
          React.createElement("li", null, "• Double-check forfeiture and re-issue calculations")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Issue of shares at par/premium (8-10 marks)"),
          React.createElement("li", null, "• Forfeiture and re-issue of shares (6-8 marks)"),
          React.createElement("li", null, "• Share capital structure (4-6 marks)"),
          React.createElement("li", null, "• Oversubscription and pro-rata allotment (4-6 marks)"),
          React.createElement("li", null, "• Calls on shares (3-4 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Journal entries for share transactions (4-6 marks)"),
          React.createElement("li", null, "• Complete share issue problems (8-10 marks)"),
          React.createElement("li", null, "• Forfeiture and re-issue calculations (6-8 marks)"),
          React.createElement("li", null, "• Pro-rata allotment problems (4-6 marks)"),
          React.createElement("li", null, "• Theory questions on share capital (3-4 marks)")
        )
      )
    )
  )
};