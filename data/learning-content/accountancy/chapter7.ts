import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter7Module: LearningModule = {
  chapter: "7",
  title: "Issue and Redemption of Debentures",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 7 explores debentures, a crucial instrument for raising long-term debt capital for companies. This comprehensive topic covers the complete lifecycle of debentures from issue to redemption, including complex accounting treatments for premium/discount and various redemption methods."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master debenture types, issue procedures at par/premium/discount, redemption methods, and the critical concept of accounting for redemption terms at the time of issue. Understanding these concepts is essential for both theoretical questions and practical debenture accounting problems."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-indigo-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-indigo-700" },
        React.createElement("li", null, "• Issue of debentures at par/premium/discount (8-10 marks)"),
        React.createElement("li", null, "• Issue with terms of redemption (6-8 marks)"),
        React.createElement("li", null, "• Writing off discount/loss on issue (4-6 marks)"),
        React.createElement("li", null, "• Redemption methods and accounting (6-8 marks)"),
        React.createElement("li", null, "• Interest on debentures (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Nature and Types of Debentures",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "A debenture is a written instrument acknowledging a debt under the common seal of the company. Debenture holders are creditors, not owners, and receive fixed interest which is a charge against profits."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Classification of Debentures:"),
          React.createElement("div", { className: "space-y-3 text-indigo-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "By Security:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Secured/Naked (Mortgaged/Unsecured)"),
                React.createElement("li", null, "• First charge, second charge debentures")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "By Tenure:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Redeemable debentures (with maturity date)"),
                React.createElement("li", null, "• Irredeemable/Perpetual debentures (no maturity)")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "By Convertibility:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Convertible debentures (convertible to shares)"),
                React.createElement("li", null, "• Non-convertible debentures")
              )
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "By Registration:"),
              React.createElement("ul", { className: "mt-1 space-y-1" },
                React.createElement("li", null, "• Registered debentures"),
                React.createElement("li", null, "• Bearer debentures")
              )
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Characteristics:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Fixed rate of interest"),
            React.createElement("li", null, "• Interest is a charge against profits"),
            React.createElement("li", null, "• Debenture holders are creditors"),
            React.createElement("li", null, "• No voting rights (except in some cases)")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "DEBENTURE - Debt Instrument"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Debt instrument, Fixed interest, Charge against profits, Creditors not owners")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Debenture Types Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2" },
          React.createElement("p", null, "ABC Ltd. issues 10% Secured Redeemable Non-convertible Debentures of ₹100 each."),
          React.createElement("p", null, "• Secured: Backed by company assets"),
          React.createElement("p", null, "• Redeemable: Has maturity date"),
          React.createElement("p", null, "• Non-convertible: Cannot be converted to shares"),
          React.createElement("p", null, "• 10% interest: Fixed rate payable annually")
        )
      )
    },
    {
      title: "Issue of Debentures at Par",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When debentures are issued at their face value, the issue price equals the nominal value of the debentures."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Accounting Entries:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Bank/Cash Received:"),
              React.createElement("p", null, "Bank A/c Dr."),
              React.createElement("p", null, "To Debentures Application A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Transfer to Allotment:"),
              React.createElement("p", null, "Debentures Application A/c Dr."),
              React.createElement("p", null, "To Debentures A/c")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Interest on Debentures:"),
              React.createElement("p", null, "Interest on Debentures A/c Dr."),
              React.createElement("p", null, "To Bank A/c")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• No discount or premium account created"),
            React.createElement("li", null, "• Debentures account credited with face value"),
            React.createElement("li", null, "• Interest is a charge against profits")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "PAR ISSUE - Face Value"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Price equals Nominal value, No premium/discount, Direct to Debentures Account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Issue at Par Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "XYZ Ltd. issued 1,000 debentures of ₹100 each at par."),
          React.createElement("p", null, "Total amount received: 1,000 × ₹100 = ₹1,00,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Bank A/c Dr. ₹1,00,000"),
          React.createElement("p", null, "To 10% Debentures A/c ₹1,00,000")
        )
      )
    },
    {
      title: "Issue of Debentures at Premium",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When debentures are issued at a price higher than their face value, the excess amount is called Securities Premium."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Premium Accounting:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Issue Price = Face Value + Premium"),
            React.createElement("p", null, "• Premium amount credited to Securities Premium Account"),
            React.createElement("p", null, "• Securities Premium is a capital receipt")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entry:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "Bank A/c Dr. [Total Amount]"),
            React.createElement("p", null, "To Debentures A/c [Face Value]"),
            React.createElement("p", null, "To Securities Premium A/c [Premium Amount]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Uses of Securities Premium:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Writing off preliminary expenses"),
            React.createElement("li", null, "• Writing off discount on issue of shares/debentures"),
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
          React.createElement("p", null, "ABC Ltd. issued 500 debentures of ₹100 each at ₹110 per debenture."),
          React.createElement("p", null, "Total issue price: 500 × ₹110 = ₹55,000"),
          React.createElement("p", null, "Face value: 500 × ₹100 = ₹50,000"),
          React.createElement("p", null, "Securities premium: ₹55,000 - ₹50,000 = ₹5,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Bank A/c Dr. ₹55,000"),
          React.createElement("p", null, "To 10% Debentures A/c ₹50,000"),
          React.createElement("p", null, "To Securities Premium A/c ₹5,000")
        )
      )
    },
    {
      title: "Issue of Debentures at Discount",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When debentures are issued at a price lower than their face value, the difference is called discount on issue of debentures."
        ),
        React.createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4" },
          React.createElement("h4", { className: "font-bold text-red-800" }, "Discount Accounting:"),
          React.createElement("div", { className: "space-y-2 text-red-700 text-sm" },
            React.createElement("p", null, "• Issue Price = Face Value - Discount"),
            React.createElement("p", null, "• Discount is a capital loss"),
            React.createElement("p", null, "• Written off over the life of debentures")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-2" },
            React.createElement("p", null, "For issue:"),
            React.createElement("p", null, "Bank A/c Dr. [Issue Price]"),
            React.createElement("p", null, "Discount on Issue of Debentures A/c Dr. [Discount]"),
            React.createElement("p", null, "To Debentures A/c [Face Value]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For writing off discount:"),
            React.createElement("p", null, "P&L A/c Dr. [Amount]"),
            React.createElement("p", null, "To Discount on Issue of Debentures A/c [Amount]")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Writing Off Methods:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Straight line method (equal annual amounts)"),
            React.createElement("li", null, "• Written off against Securities Premium first"),
            React.createElement("li", null, "• Balance charged to Profit & Loss Account")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "DISCOUNT - Capital Loss"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Issue Price < Face Value, Difference is capital loss, Written off over debenture life")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Issue at Discount Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "PQR Ltd. issued 1,000 debentures of ₹100 each at ₹95 per debenture."),
          React.createElement("p", null, "Total issue price: 1,000 × ₹95 = ₹95,000"),
          React.createElement("p", null, "Face value: 1,000 × ₹100 = ₹1,00,000"),
          React.createElement("p", null, "Discount: ₹1,00,000 - ₹95,000 = ₹5,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Bank A/c Dr. ₹95,000"),
          React.createElement("p", null, "Discount on Issue of Debentures A/c Dr. ₹5,000"),
          React.createElement("p", null, "To 10% Debentures A/c ₹1,00,000")
        )
      )
    },
    {
      title: "Issue of Debentures with Terms of Redemption",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When debentures are redeemable at a premium, the premium payable on redemption is a liability that must be provided for at the time of issue itself."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Loss on Issue of Debentures:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Discount on issue + Premium on redemption"),
            React.createElement("p", null, "• Accounted as Loss on Issue of Debentures Account"),
            React.createElement("p", null, "• Written off over the life of debentures")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entry:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For issue with redemption terms:"),
            React.createElement("p", null, "Bank A/c Dr. [Issue Price]"),
            React.createElement("p", null, "Loss on Issue of Debentures A/c Dr. [Total Loss]"),
            React.createElement("p", null, "To Debentures A/c [Face Value]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For writing off loss:"),
            React.createElement("p", null, "P&L A/c Dr. [Amount]"),
            React.createElement("p", null, "To Loss on Issue of Debentures A/c [Amount]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Future redemption premium is a present liability"),
            React.createElement("li", null, "• Loss written off from Securities Premium first"),
            React.createElement("li", null, "• Balance charged to Profit & Loss Account")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "REDEMPTION TERMS - Future Loss"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Premium on redemption is liability, Accounted at issue time, Loss on Issue Account")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Redemption Terms Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹100 debentures issued at ₹95, redeemable at ₹110 after 5 years."),
          React.createElement("p", null, "Discount on issue: ₹100 - ₹95 = ₹5"),
          React.createElement("p", null, "Premium on redemption: ₹110 - ₹100 = ₹10"),
          React.createElement("p", null, "Total loss on issue: ₹5 + ₹10 = ₹15"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Bank A/c Dr. ₹95"),
          React.createElement("p", null, "Loss on Issue of Debentures A/c Dr. ₹15"),
          React.createElement("p", null, "To Debentures A/c ₹100"),
          React.createElement("p", null, "To Premium on Redemption of Debentures A/c ₹10")
        )
      )
    },
    {
      title: "Interest on Debentures",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Debenture interest is calculated on the face value of debentures and is a charge against profits. It must be paid even if the company incurs losses."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Interest Calculation:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, "Interest = Face Value × Rate × Time/12"),
            React.createElement("p", null, "• Calculated on face value, not issue price"),
            React.createElement("p", null, "• Time period in months for partial years"),
            React.createElement("p", null, "• Payable annually or as per terms")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For interest accrued:"),
            React.createElement("p", null, "Interest on Debentures A/c Dr."),
            React.createElement("p", null, "To Debenture Holders A/c"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For interest paid:"),
            React.createElement("p", null, "Debenture Holders A/c Dr."),
            React.createElement("p", null, "To Bank A/c")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-purple-800 mb-2" }, "Outstanding Interest:"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "• Shown as current liability in Balance Sheet"),
            React.createElement("p", null, "• Charged to Profit & Loss Account"),
            React.createElement("p", null, "• TDS deducted as per Income Tax Act")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-indigo-50 border-2 border-indigo-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-indigo-800 text-center" }, "INTEREST - Charge Against Profits"),
        React.createElement("p", { className: "text-indigo-700 text-center text-sm mt-1" }, "Face value × Rate × Time, Must pay even in loss, Current liability")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Interest Calculation Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "10% debentures of ₹1,00,000 outstanding for 6 months."),
          React.createElement("p", null, "Interest = ₹1,00,000 × 10% × 6/12 = ₹5,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entries:"),
          React.createElement("p", null, "Interest on Debentures A/c Dr. ₹5,000"),
          React.createElement("p", null, "To Debenture Holders A/c ₹5,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Debenture Holders A/c Dr. ₹5,000"),
          React.createElement("p", null, "To Bank A/c ₹5,000")
        )
      )
    },
    {
      title: "Redemption of Debentures",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Redemption is the repayment of debenture amount to holders. Companies can redeem debentures through various methods as specified in the debenture terms."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Redemption Methods:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Lump Sum Payment:"),
              React.createElement("p", null, "Full amount paid at maturity date")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Payment in Instalments:"),
              React.createElement("p", null, "Fixed amount paid each year (Draw of Lots)")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Purchase in Open Market:"),
              React.createElement("p", null, "Debentures bought back from market at prevailing prices")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "Conversion into Shares:"),
              React.createElement("p", null, "Debentures converted to equity shares")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-2" },
            React.createElement("p", null, "For redemption at par:"),
            React.createElement("p", null, "Debentures A/c Dr. [Face Value]"),
            React.createElement("p", null, "To Bank A/c [Face Value]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For redemption at premium:"),
            React.createElement("p", null, "Debentures A/c Dr. [Face Value]"),
            React.createElement("p", null, "Premium on Redemption A/c Dr. [Premium]"),
            React.createElement("p", null, "To Bank A/c [Total Amount]")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-emerald-800 text-center" }, "REDEEM - Repay Debt"),
        React.createElement("p", { className: "text-emerald-700 text-center text-sm mt-1" }, "Lump sum, Instalments, Purchase, Conversion - Four redemption methods")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Redemption Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹1,00,000 debentures redeemed at 10% premium."),
          React.createElement("p", null, "Face value: ₹1,00,000"),
          React.createElement("p", null, "Premium: ₹10,000"),
          React.createElement("p", null, "Total payment: ₹1,10,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Debentures A/c Dr. ₹1,00,000"),
          React.createElement("p", null, "Premium on Redemption A/c Dr. ₹10,000"),
          React.createElement("p", null, "To Bank A/c ₹1,10,000")
        )
      )
    },
    {
      title: "Debentures as Collateral Security",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Debentures can be issued as collateral security for loans. In this case, debentures are not issued for cash but held by lenders as security."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Collateral Security Accounting:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Debentures issued but not transferred to holders"),
            React.createElement("p", null, "• No cash received from debenture issue"),
            React.createElement("p", null, "• Debentures held by lender as security")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Journal Entries:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "For loan received:"),
            React.createElement("p", null, "Bank A/c Dr. [Loan Amount]"),
            React.createElement("p", null, "To Loan A/c [Loan Amount]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For debentures issued as security:"),
            React.createElement("p", null, "No entry (debentures not issued for cash)"),
            React.createElement("p", null, "OR"),
            React.createElement("p", null, "Debentures Suspense A/c Dr. [Face Value]"),
            React.createElement("p", null, "To Debentures A/c [Face Value]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Debentures are secondary security"),
            React.createElement("li", null, "• Primary security is usually mortgage"),
            React.createElement("li", null, "• Interest paid on debentures if loan is utilized")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-amber-50 border-2 border-amber-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-amber-800 text-center" }, "COLLATERAL - Secondary Security"),
        React.createElement("p", { className: "text-amber-700 text-center text-sm mt-1" }, "Debentures as security for loan, No cash received, Secondary to primary security")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Collateral Security Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹5,00,000 loan secured by ₹6,00,000 debentures as collateral."),
          React.createElement("p", null, "Loan received: ₹5,00,000"),
          React.createElement("p", null, "Debentures issued: ₹6,00,000 (held by lender)"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entries:"),
          React.createElement("p", null, "Bank A/c Dr. ₹5,00,000"),
          React.createElement("p", null, "To Loan A/c ₹5,00,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Debentures Suspense A/c Dr. ₹6,00,000"),
          React.createElement("p", null, "To 10% Debentures A/c ₹6,00,000")
        )
      )
    }
  ],
  keywords: [
    { term: "Debenture", definition: "A written instrument acknowledging a debt under the common seal of the company, representing long-term borrowing." },
    { term: "Securities Premium", definition: "The excess amount received over the face value when shares or debentures are issued at a premium, treated as a capital receipt." },
    { term: "Discount on Issue of Debentures", definition: "The excess of the nominal value of debentures over their issue price, treated as a capital loss." },
    { term: "Loss on Issue of Debentures", definition: "The total loss arising from discount on issue and premium on redemption of debentures, written off over the debenture period." },
    { term: "Premium on Redemption of Debentures", definition: "The excess amount paid to debenture holders over their nominal value at the time of redemption." },
    { term: "Redemption of Debentures", definition: "The process of repaying the debenture amount to holders at maturity or as per agreed terms." },
    { term: "Convertible Debentures", definition: "Debentures that can be converted into equity shares at the option of the holder or the company." },
    { term: "Non-convertible Debentures", definition: "Debentures that cannot be converted into equity shares and must be redeemed in cash." },
    { term: "Collateral Security", definition: "A secondary security provided for a loan, in addition to the primary security, such as debentures held by lenders." },
    { term: "Debenture Interest", definition: "Fixed rate interest paid on debentures, calculated on face value and charged against profits." },
    { term: "Draw of Lots", definition: "A method of redeeming debentures in instalments where specific debentures are selected randomly for redemption." },
    { term: "Debentures Suspense Account", definition: "An account used when debentures are issued as collateral security but not actually transferred to holders." },
    { term: "Secured Debentures", definition: "Debentures backed by a charge on the company's assets, providing security to debenture holders." },
    { term: "Unsecured Debentures", definition: "Debentures not backed by any specific assets, also known as naked debentures." },
    { term: "Redeemable Debentures", definition: "Debentures that have a fixed maturity date and must be repaid by the company." },
    { term: "Irredeemable Debentures", definition: "Debentures that have no fixed maturity date and are perpetual in nature." },
    { term: "Registered Debentures", definition: "Debentures where the names and addresses of holders are recorded in the company's books." },
    { term: "Bearer Debentures", definition: "Debentures that are transferable by mere delivery and do not require registration of transfer." }
  ],
  caseStudies: [
    {
      title: "Complete Debenture Issue and Redemption Cycle",
      scenario: "ABC Ltd. issued 1,000, 10% debentures of ₹100 each at 5% discount, redeemable at 10% premium after 5 years. Securities Premium available ₹20,000. Show accounting treatment for issue and redemption.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Issue of Debentures"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Face value: 1,000 × ₹100 = ₹1,00,000"),
            React.createElement("p", null, "Issue price: ₹95 per debenture = ₹95,000"),
            React.createElement("p", null, "Discount: ₹5,000"),
            React.createElement("p", null, "Premium on redemption: ₹10,000"),
            React.createElement("p", null, "Total loss on issue: ₹15,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Writing Off Loss"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Loss written off against Securities Premium: ₹15,000"),
            React.createElement("p", null, "Securities Premium balance: ₹20,000 - ₹15,000 = ₹5,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Redemption"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Redemption amount: ₹1,00,000 + ₹10,000 = ₹1,10,000"),
            React.createElement("p", null, "Premium on redemption charged to P&L: ₹10,000")
          )
        )
      )
    },
    {
      title: "Debentures Issued for Consideration Other than Cash",
      scenario: "XYZ Ltd. issued 2,000, 12% debentures of ₹100 each at a premium of ₹20 per debenture to acquire machinery from suppliers. Also issued 1,000 debentures of ₹100 each to promoters for services rendered, valued at ₹1,50,000. Show the accounting treatment.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Machinery Acquisition"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures issued: 2,000 × ₹100 = ₹2,00,000 face value"),
            React.createElement("p", null, "Premium: 2,000 × ₹20 = ₹40,000"),
            React.createElement("p", null, "Total value: ₹2,40,000"),
            React.createElement("p", null, "Machinery acquired at agreed value: ₹2,40,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Services to Promoters"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures issued: 1,000 × ₹100 = ₹1,00,000 face value"),
            React.createElement("p", null, "Services value: ₹1,50,000"),
            React.createElement("p", null, "Securities Premium: ₹50,000"),
            React.createElement("p", null, "Goodwill created: ₹1,50,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Journal Entries"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "For machinery:"),
            React.createElement("p", null, "Machinery A/c Dr. ₹2,40,000"),
            React.createElement("p", null, "To 12% Debentures A/c ₹2,00,000"),
            React.createElement("p", null, "To Securities Premium A/c ₹40,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For services:"),
            React.createElement("p", null, "Goodwill A/c Dr. ₹1,50,000"),
            React.createElement("p", null, "To 12% Debentures A/c ₹1,00,000"),
            React.createElement("p", null, "To Securities Premium A/c ₹50,000")
          )
        )
      )
    },
    {
      title: "Debentures with Instalment Redemption",
      scenario: "PQR Ltd. issued 10,000, 9% debentures of ₹100 each, redeemable in 5 equal annual instalments by draw of lots. The first instalment is due after 1 year. Show redemption accounting for the first instalment.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Instalment Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Total debentures: 10,000"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Annual instalment: 10,000 ÷ 5 = 2,000 debentures"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Amount per instalment: 2,000 × ₹100 = ₹2,00,000")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Redemption Account"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures Redeemed A/c Dr. ₹2,00,000"),
            React.createElement("p", null, "To Debentures A/c ₹2,00,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Debentures A/c Dr. ₹2,00,000"),
            React.createElement("p", null, "To Debentures Redeemed A/c ₹2,00,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Debentures Redeemed A/c Dr. ₹2,00,000"),
            React.createElement("p", null, "To Bank A/c ₹2,00,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Outstanding Debentures"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "After first redemption: 10,000 - 2,000 = 8,000 debentures"),
            React.createElement("p", null, "Future instalments: 4 × 2,000 = 8,000 debentures"),
            React.createElement("p", null, "Interest calculation: Based on outstanding debentures")
          )
        )
      )
    },
    {
      title: "Debentures as Collateral Security",
      scenario: "RST Ltd. obtained a loan of ₹10,00,000 from bank, secured by issue of ₹12,00,000, 11% debentures as collateral security. The loan was fully utilized. Show the accounting treatment for 1 year, assuming interest rate 12% on loan and debentures.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Loan and Security Issue"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Loan received: ₹10,00,000"),
            React.createElement("p", null, "Debentures issued as security: ₹12,00,000"),
            React.createElement("p", null, "Debentures held by bank as collateral")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Interest Accounting"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Loan interest: ₹10,00,000 × 12% = ₹1,20,000"),
            React.createElement("p", null, "Debenture interest: ₹12,00,000 × 11% = ₹1,32,000"),
            React.createElement("p", null, "Since loan is utilized, debenture interest is also charged")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Journal Entries"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "For loan:"),
            React.createElement("p", null, "Bank A/c Dr. ₹10,00,000"),
            React.createElement("p", null, "To Loan A/c ₹10,00,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For debentures:"),
            React.createElement("p", null, "Debentures Suspense A/c Dr. ₹12,00,000"),
            React.createElement("p", null, "To 11% Debentures A/c ₹12,00,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "For interest:"),
            React.createElement("p", null, "Interest on Loan A/c Dr. ₹1,20,000"),
            React.createElement("p", null, "Interest on Debentures A/c Dr. ₹1,32,000"),
            React.createElement("p", null, "To Bank A/c ₹2,52,000")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Debenture holders are creditors, not owners"),
        React.createElement("li", null, "• Interest is a charge against profits, paid even in loss"),
        React.createElement("li", null, "• Premium on redemption is a liability at issue time"),
        React.createElement("li", null, "• Loss on issue = Discount + Premium on redemption"),
        React.createElement("li", null, "• Loss written off from Securities Premium first, then P&L"),
        React.createElement("li", null, "• Interest calculated on face value, not issue price"),
        React.createElement("li", null, "• Redemption methods: Lump sum, Instalments, Purchase, Conversion")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Debenture Interest:"),
          React.createElement("p", { className: "text-green-700" }, "Face Value × Rate × Time/12")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Loss on Issue:"),
          React.createElement("p", { className: "text-green-700" }, "Discount + Premium on Redemption")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Securities Premium:"),
          React.createElement("p", { className: "text-green-700" }, "Issue Price - Face Value")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Redemption Amount:"),
          React.createElement("p", { className: "text-green-700" }, "Face Value + Premium")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Confusing debentures with shares"),
          React.createElement("li", null, "• Calculating interest on issue price instead of face value"),
          React.createElement("li", null, "• Forgetting to account for redemption premium at issue time"),
          React.createElement("li", null, "• Wrong order of writing off loss on issue"),
          React.createElement("li", null, "• Incorrect journal entries for redemption")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always calculate total loss on issue first"),
          React.createElement("li", null, "• Use face value for all interest calculations"),
          React.createElement("li", null, "• Remember premium goes to Securities Premium Account"),
          React.createElement("li", null, "• Check if redemption terms are given"),
          React.createElement("li", null, "• Double-check journal entries for premium/discount")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Issue of debentures at par/premium/discount (8-10 marks)"),
          React.createElement("li", null, "• Issue with terms of redemption (6-8 marks)"),
          React.createElement("li", null, "• Writing off discount/loss on issue (4-6 marks)"),
          React.createElement("li", null, "• Redemption methods and accounting (6-8 marks)"),
          React.createElement("li", null, "• Interest on debentures (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Journal entries for debenture transactions (4-6 marks)"),
          React.createElement("li", null, "• Complete issue and redemption cycle (8-10 marks)"),
          React.createElement("li", null, "• Interest calculations and accounting (4-6 marks)"),
          React.createElement("li", null, "• Loss on issue calculations (4-6 marks)"),
          React.createElement("li", null, "• Redemption method problems (4-6 marks)")
        )
      )
    )
  )
};