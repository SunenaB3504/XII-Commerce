import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter8Module: LearningModule = {
  chapter: "8",
  title: "Redemption of Debentures",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 8 delves deep into the redemption of debentures, exploring various methods companies use to repay their long-term debt obligations. This critical topic covers redemption at par and premium, different redemption approaches, and the complex accounting treatments involved."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master the four main redemption methods, understand the creation of Debenture Redemption Reserve, and learn the detailed accounting procedures for each redemption scenario. This topic is essential for understanding how companies manage their debt obligations and the financial implications of redemption decisions."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-indigo-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-indigo-700" },
        React.createElement("li", null, "• Redemption at par and premium (8-10 marks)"),
        React.createElement("li", null, "• Redemption by draw of lots (6-8 marks)"),
        React.createElement("li", null, "• Purchase in open market (4-6 marks)"),
        React.createElement("li", null, "• Conversion into shares (6-8 marks)"),
        React.createElement("li", null, "• Debenture Redemption Reserve (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Meaning and Methods of Redemption",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Redemption is the process of repaying debenture holders the amount due to them at maturity. Companies can redeem debentures using various methods as specified in the debenture trust deed."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Four Main Methods:"),
          React.createElement("div", { className: "space-y-3 text-indigo-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Lump Sum Payment:"),
              React.createElement("p", null, "Full redemption amount paid at maturity date")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Draw of Lots:"),
              React.createElement("p", null, "Redemption in instalments by random selection")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Purchase in Open Market:"),
              React.createElement("p", null, "Buying back debentures from market at prevailing prices")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Conversion into Shares:"),
              React.createElement("p", null, "Converting debentures into equity shares")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Requirements:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Redemption must be as per terms of issue"),
            React.createElement("li", null, "• Companies Act, 2013 provisions must be followed"),
            React.createElement("li", null, "• Debenture Redemption Reserve (DRR) for listed companies"),
            React.createElement("li", null, "• Sources of redemption: Profits, fresh issue of shares/debentures")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "REDEEM - Four Methods"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Lump sum, Draw of lots, Purchase in market, Convert to shares")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Redemption Methods Overview:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2" },
          React.createElement("p", null, "ABC Ltd. has 10,000 debentures of ₹100 each redeemable at 110%."),
          React.createElement("p", null, "• Lump Sum: Pay ₹11,00,000 at maturity"),
          React.createElement("p", null, "• Draw of Lots: Pay ₹2,20,000 annually for 5 years"),
          React.createElement("p", null, "• Purchase: Buy back from market at current prices"),
          React.createElement("p", null, "• Conversion: Convert to equity shares at agreed ratio")
        )
      )
    },
    {
      title: "Redemption at Par and Premium",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Redemption at par means repayment at face value, while redemption at premium means repayment above face value. Premium on redemption is a liability that must be provided for."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Redemption at Par:"),
          React.createElement("div", { className: "space-y-2 text-green-700 text-sm" },
            React.createElement("p", null, "• Redemption amount = Face value"),
            React.createElement("p", null, "• No premium liability"),
            React.createElement("p", null, "• Simple journal entries")
          )
        ),
        React.createElement("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "Redemption at Premium:"),
          React.createElement("div", { className: "text-red-700 text-sm space-y-2" },
            React.createElement("p", null, "• Redemption amount = Face value + Premium"),
            React.createElement("p", null, "• Premium is a charge against profits"),
            React.createElement("p", null, "• Must be provided for in advance if terms specify")
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
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "PAR vs PREMIUM"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Par: Face value only, Premium: Face + Extra amount")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Redemption at Premium Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹1,00,000 debentures redeemable at 10% premium."),
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
      title: "Redemption by Draw of Lots",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "When debentures are redeemable in instalments, specific debentures are selected randomly through draw of lots for redemption each year."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Process:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Equal annual instalments over specified period"),
            React.createElement("p", null, "• Random selection by draw of lots"),
            React.createElement("p", null, "• Notice to selected debenture holders"),
            React.createElement("p", null, "• Payment within specified time")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "Debentures Redeemed A/c Dr. [Amount]"),
            React.createElement("p", null, "To Debentures A/c [Amount]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Debentures A/c Dr. [Amount]"),
            React.createElement("p", null, "To Debentures Redeemed A/c [Amount]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Debentures Redeemed A/c Dr. [Amount]"),
            React.createElement("p", null, "To Bank A/c [Amount]")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-yellow-700 text-sm" },
            React.createElement("li", null, "• Reduces redemption burden on company"),
            React.createElement("li", null, "• Interest continues on outstanding debentures"),
            React.createElement("li", null, "• Outstanding debentures decrease each year")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "DRAW OF LOTS - Random Selection"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Equal instalments, Random draw, Notice to holders, Pay selected amount")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Draw of Lots Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "10,000 debentures of ₹100 each, redeemable in 5 equal instalments."),
          React.createElement("p", null, "Annual instalment: 2,000 debentures × ₹100 = ₹2,00,000"),
          React.createElement("p", null, "Year 1: Draw lots, select 2,000 debentures, pay ₹2,00,000"),
          React.createElement("p", null, "Outstanding: 8,000 debentures"),
          React.createElement("p", null, "Interest calculation: Based on outstanding debentures only")
        )
      )
    },
    {
      title: "Purchase in Open Market",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Companies can buy back their own debentures from the open market at prevailing market prices, which may be different from face value."
        ),
        React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4" },
          React.createElement("h4", { className: "font-bold text-blue-800" }, "Advantages:"),
          React.createElement("div", { className: "space-y-2 text-blue-700 text-sm" },
            React.createElement("p", null, "• Buy when market price is favorable"),
            React.createElement("p", null, "• Reduce outstanding debentures gradually"),
            React.createElement("p", null, "• No fixed redemption schedule")
          )
        ),
        React.createElement("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-orange-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-orange-700 text-sm space-y-2" },
            React.createElement("p", null, "When purchased at par:"),
            React.createElement("p", null, "Debentures A/c Dr. [Face Value]"),
            React.createElement("p", null, "To Bank A/c [Face Value]"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "When purchased at premium:"),
            React.createElement("p", null, "Debentures A/c Dr. [Face Value]"),
            React.createElement("p", null, "To Bank A/c [Market Price]"),
            React.createElement("p", null, "To Capital Reserve A/c [Profit on Purchase]")
          )
        ),
        React.createElement("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-red-800 mb-2" }, "Profit/Loss on Purchase:"),
          React.createElement("div", { className: "text-red-700 text-sm space-y-1" },
            React.createElement("p", null, "• Profit = Market Price < Face Value"),
            React.createElement("p", null, "• Loss = Market Price > Face Value"),
            React.createElement("p", null, "• Profit credited to Capital Reserve"),
            React.createElement("p", null, "• Loss charged to Profit & Loss Account")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "MARKET PURCHASE - Buy Back"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Buy at market price, May get profit/loss, Reduce outstanding debt")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Purchase in Market Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹100 debentures purchased in market at ₹95 each."),
          React.createElement("p", null, "Face value: ₹100"),
          React.createElement("p", null, "Market price: ₹95"),
          React.createElement("p", null, "Profit on purchase: ₹5 per debenture"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Debentures A/c Dr. ₹100"),
          React.createElement("p", null, "To Bank A/c ₹95"),
          React.createElement("p", null, "To Capital Reserve A/c ₹5")
        )
      )
    },
    {
      title: "Conversion into Shares",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Convertible debentures can be converted into equity shares at the option of the holder or the company, as per the terms of issue."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Types of Conversion:"),
          React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
            React.createElement("p", null, "• Compulsory conversion (automatic)"),
            React.createElement("p", null, "• Optional conversion (holder's choice)"),
            React.createElement("p", null, "• Partial conversion (part converted, part redeemed)")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Accounting Treatment:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-2" },
            React.createElement("p", null, "Debentures A/c Dr. [Face Value]"),
            React.createElement("p", null, "To Equity Share Capital A/c [Share Value]"),
            React.createElement("p", null, "To Securities Premium A/c [Excess over Face]")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Conversion ratio specified in terms"),
            React.createElement("li", null, "• No cash outflow for company"),
            React.createElement("li", null, "• Increases equity, reduces debt")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "CONVERSION - Debt to Equity"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Debentures become shares, No cash payment, Balance sheet restructuring")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Conversion Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "₹100 debentures converted to ₹10 shares at premium of ₹5."),
          React.createElement("p", null, "Conversion ratio: ₹100 debenture = 10 shares"),
          React.createElement("p", null, "Share value: 10 × ₹10 = ₹100"),
          React.createElement("p", null, "Securities premium: 10 × ₹5 = ₹50"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Journal Entry:"),
          React.createElement("p", null, "Debentures A/c Dr. ₹100"),
          React.createElement("p", null, "To Equity Share Capital A/c ₹100"),
          React.createElement("p", null, "To Securities Premium A/c ₹50")
        )
      )
    },
    {
      title: "Debenture Redemption Reserve (DRR)",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "As per Companies Act, 2013, certain companies must create DRR before redeeming debentures to protect investors and ensure financial stability."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Applicability:"),
          React.createElement("div", { className: "space-y-2 text-indigo-700 text-sm" },
            React.createElement("p", null, "• All listed companies"),
            React.createElement("p", null, "• Public companies with net worth ≥ ₹500 crore"),
            React.createElement("p", null, "• Public companies with turnover ≥ ₹500 crore")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "DRR Requirements:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "• 25% of debentures to be redeemed"),
            React.createElement("p", null, "• Created out of profits"),
            React.createElement("p", null, "• Cannot be used for dividend payment"),
            React.createElement("p", null, "• Can be used only for debenture redemption")
          )
        ),
        React.createElement("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-yellow-800 mb-2" }, "Journal Entry:"),
          React.createElement("div", { className: "text-yellow-700 text-sm space-y-2" },
            React.createElement("p", null, "Profit & Loss A/c Dr. [Amount]"),
            React.createElement("p", null, "To Debenture Redemption Reserve A/c [Amount]")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-emerald-800 text-center" }, "DRR - Safety Net"),
        React.createElement("p", { className: "text-emerald-700 text-center text-sm mt-1" }, "25% reserve, From profits, For redemption, Protects investors")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "DRR Example:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Listed company has ₹10,00,000 debentures to redeem."),
          React.createElement("p", null, "DRR required: 25% of ₹10,00,000 = ₹2,50,000"),
          React.createElement("p", null, "Created over 5 years: ₹50,000 per year"),
          React.createElement("p", null, "Cannot be used for dividends"),
          React.createElement("p", null, "Used only for debenture redemption")
        )
      )
    }
  ],
  keywords: [
    { term: "Redemption of Debentures", definition: "The process of repaying debenture holders the amount due to them at maturity or as per agreed terms." },
    { term: "Lump Sum Redemption", definition: "Redemption of all debentures at once on the maturity date." },
    { term: "Draw of Lots", definition: "A method of redeeming debentures in instalments where specific debentures are selected randomly for redemption." },
    { term: "Purchase in Open Market", definition: "Buying back company's own debentures from the stock market at prevailing prices." },
    { term: "Conversion of Debentures", definition: "Converting debentures into equity shares as per the terms of issue." },
    { term: "Debenture Redemption Reserve", definition: "A statutory reserve created by certain companies before redeeming debentures to ensure financial stability." },
    { term: "Premium on Redemption", definition: "The excess amount paid to debenture holders over their nominal value at the time of redemption." },
    { term: "Debentures Redeemed Account", definition: "An account used to record debentures selected for redemption in instalment method." },
    { term: "Capital Reserve", definition: "Reserve created when debentures are purchased in market at a price below face value." },
    { term: "Convertible Debentures", definition: "Debentures that can be converted into equity shares at the option of the holder or the company." },
    { term: "Debenture Trust Deed", definition: "A legal document that specifies the terms and conditions of debenture issue and redemption." },
    { term: "Redemption at Par", definition: "Redemption of debentures at their face value without any premium." },
    { term: "Redemption at Premium", definition: "Redemption of debentures at a value higher than their face value." },
    { term: "Instalment Redemption", definition: "Redemption of debentures in periodic instalments over a period of time." },
    { term: "Debenture Holders", definition: "The creditors who have lent money to the company by subscribing to debentures." },
    { term: "Redemption Terms", definition: "The conditions specified in the debenture trust deed regarding how and when debentures will be redeemed." },
    { term: "Market Price", definition: "The price at which debentures are traded in the open market." },
    { term: "Face Value", definition: "The nominal value of debentures as stated on the debenture certificate." },
    { term: "Maturity Date", definition: "The date on which debentures become due for redemption." }
  ],
  caseStudies: [
    {
      title: "Complete Redemption Cycle with DRR",
      scenario: "ABC Ltd., a listed company, has 20,000, 10% debentures of ₹100 each redeemable at 10% premium after 5 years. The company has adequate profits. Show the redemption process including DRR creation.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: DRR Creation"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Total debentures: 20,000 × ₹100 = ₹20,00,000"),
            React.createElement("p", null, "DRR required: 25% of ₹20,00,000 = ₹5,00,000"),
            React.createElement("p", null, "Annual transfer: ₹5,00,000 ÷ 5 = ₹1,00,000 per year"),
            React.createElement("p", null, "Entry: P&L A/c Dr. ₹1,00,000 → DRR A/c ₹1,00,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Redemption Calculation"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Face value: ₹20,00,000"),
            React.createElement("p", null, "Premium: 10% of ₹20,00,000 = ₹2,00,000"),
            React.createElement("p", null, "Total redemption: ₹22,00,000"),
            React.createElement("p", null, "DRR utilized: ₹5,00,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Redemption Entries"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures A/c Dr. ₹20,00,000"),
            React.createElement("p", null, "Premium on Redemption A/c Dr. ₹2,00,000"),
            React.createElement("p", null, "DRR A/c Dr. ₹5,00,000"),
            React.createElement("p", null, "To Bank A/c ₹22,00,000"),
            React.createElement("p", null, "To P&L A/c ₹5,00,000")
          )
        )
      )
    },
    {
      title: "Instalment Redemption with Interest",
      scenario: "XYZ Ltd. issued 10,000, 12% debentures of ₹100 each redeemable in 5 equal annual instalments by draw of lots. Show redemption accounting for first two years, assuming interest is paid annually.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Instalment Calculation"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Annual instalment: 10,000 ÷ 5 = 2,000 debentures"),
          React.createElement("p", { className: "text-blue-700 text-sm" }, "Amount per instalment: 2,000 × ₹100 = ₹2,00,000")
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Year 1 Redemption"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Interest for year 1: 10,000 × ₹100 × 12% = ₹1,20,000"),
            React.createElement("p", null, "Redemption: ₹2,00,000"),
            React.createElement("p", null, "Outstanding after redemption: 8,000 debentures")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Year 2 Accounting"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Interest for year 2: 8,000 × ₹100 × 12% = ₹96,000"),
            React.createElement("p", null, "Redemption: ₹2,00,000"),
            React.createElement("p", null, "Outstanding after redemption: 6,000 debentures"),
            React.createElement("p", null, "Pattern continues until all debentures redeemed")
          )
        )
      )
    },
    {
      title: "Purchase in Open Market with Profit/Loss",
      scenario: "PQR Ltd. has outstanding 5,000, 10% debentures of ₹100 each. During the year, the company purchased 1,000 debentures in the open market at ₹95 per debenture. Show the accounting treatment and impact on financial statements.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Purchase Transaction"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Face value of purchased debentures: 1,000 × ₹100 = ₹1,00,000"),
            React.createElement("p", null, "Market price paid: 1,000 × ₹95 = ₹95,000"),
            React.createElement("p", null, "Profit on purchase: ₹1,00,000 - ₹95,000 = ₹5,000"),
            React.createElement("p", null, "Profit credited to Capital Reserve")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Journal Entries"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures A/c Dr. ₹1,00,000"),
            React.createElement("p", null, "To Bank A/c ₹95,000"),
            React.createElement("p", null, "To Capital Reserve A/c ₹5,000"),
            React.createElement("p", null, ""),
            React.createElement("p", null, "Outstanding debentures reduced to 4,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Balance Sheet Impact"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Non-current liabilities decrease by ₹1,00,000"),
            React.createElement("p", null, "Reserves & Surplus increase by ₹5,000"),
            React.createElement("p", null, "Cash/Bank decreases by ₹95,000"),
            React.createElement("p", null, "Overall equity improves due to capital reserve")
          )
        )
      )
    },
    {
      title: "Conversion of Debentures into Shares",
      scenario: "RST Ltd. has 2,000, 12% convertible debentures of ₹100 each. As per terms, each debenture is convertible into 10 equity shares of ₹10 each at a premium of ₹5 per share. All debentures are converted. Show the accounting treatment and balance sheet changes.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 STEP 1: Conversion Calculation"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures to convert: 2,000 × ₹100 = ₹2,00,000"),
            React.createElement("p", null, "Shares per debenture: 10 shares"),
            React.createElement("p", null, "Total shares: 2,000 × 10 = 20,000 shares"),
            React.createElement("p", null, "Share capital: 20,000 × ₹10 = ₹2,00,000"),
            React.createElement("p", null, "Securities premium: 20,000 × ₹5 = ₹1,00,000")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 STEP 2: Journal Entry"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Debentures A/c Dr. ₹2,00,000"),
            React.createElement("p", null, "To Equity Share Capital A/c ₹2,00,000"),
            React.createElement("p", null, "To Securities Premium A/c ₹1,00,000")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 STEP 3: Balance Sheet Changes"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Non-current liabilities decrease by ₹2,00,000"),
            React.createElement("p", null, "Shareholders' funds increase by ₹3,00,000"),
            React.createElement("p", null, "Debt-equity ratio improves"),
            React.createElement("p", null, "No cash outflow for the company"),
            React.createElement("p", null, "Interest liability eliminated")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Redemption methods: Lump sum, Draw of lots, Purchase, Conversion"),
        React.createElement("li", null, "• Premium on redemption is a liability, provided for at issue"),
        React.createElement("li", null, "• DRR required for listed companies: 25% of debentures to redeem"),
        React.createElement("li", null, "• Purchase in market: Profit goes to Capital Reserve"),
        React.createElement("li", null, "• Conversion: Debt becomes equity, no cash payment"),
        React.createElement("li", null, "• Interest calculated on outstanding debentures only"),
        React.createElement("li", null, "• Draw of lots: Random selection, equal instalments")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "DRR Amount:"),
          React.createElement("p", { className: "text-green-700" }, "25% of Debentures to Redeem")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Redemption Amount:"),
          React.createElement("p", { className: "text-green-700" }, "Face Value + Premium")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Annual Instalment:"),
          React.createElement("p", { className: "text-green-700" }, "Total Debentures ÷ Number of Years")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Profit on Purchase:"),
          React.createElement("p", { className: "text-green-700" }, "Face Value - Market Price")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Forgetting DRR for listed companies"),
          React.createElement("li", null, "• Wrong journal entries for premium redemption"),
          React.createElement("li", null, "• Calculating interest on redeemed debentures"),
          React.createElement("li", null, "• Incorrect treatment of purchase profit/loss"),
          React.createElement("li", null, "• Missing conversion accounting entries")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Always check if company is listed (DRR requirement)"),
          React.createElement("li", null, "• Calculate total redemption amount first"),
          React.createElement("li", null, "• Use Debentures Redeemed A/c for instalment method"),
          React.createElement("li", null, "• Remember profit on purchase goes to Capital Reserve"),
          React.createElement("li", null, "• Conversion: Face value becomes share capital + premium")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Redemption at par and premium (8-10 marks)"),
          React.createElement("li", null, "• Draw of lots method (6-8 marks)"),
          React.createElement("li", null, "• Purchase in open market (4-6 marks)"),
          React.createElement("li", null, "• Conversion into shares (6-8 marks)"),
          React.createElement("li", null, "• DRR creation and utilization (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Journal entries for redemption (4-6 marks)"),
          React.createElement("li", null, "• Complete redemption cycle (8-10 marks)"),
          React.createElement("li", null, "• DRR calculations and accounting (4-6 marks)"),
          React.createElement("li", null, "• Instalment redemption problems (6-8 marks)"),
          React.createElement("li", null, "• Conversion accounting (4-6 marks)")
        )
      )
    )
  )
};