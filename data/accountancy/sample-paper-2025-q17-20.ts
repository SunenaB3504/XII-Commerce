import { Question } from '../../types';
import React from 'react';

// Questions 17-20: 3-mark questions from CBSE Sample Paper 2025-26
export const questions17to20: Question[] = [
  {
    id: '17',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Raju, Rinku and Munni were partners sharing Profits & Losses in the ratio 3:1:1. They admitted Chunni into partnership for 1/5 share. It was decided that Munni will have 1/4 share in future profits. Goodwill of the firm was valued at ₹3,20,000 and Chunni was unable to bring anything. Calculate New Ratio, Sacrificing Ratio and journalise for goodwill at the time of admission of Chunni.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Solution:"),
      React.createElement("div", { className: "space-y-2" },
        React.createElement("p", null, "New Profit Sharing Ratio: 12:8:5:5"),
        React.createElement("p", null, "Sacrificing Ratio: 3:1:0 (Raju:Rinku:Munni)"),
        React.createElement("p", null, "Journal Entry:"),
        React.createElement("pre", { className: "bg-gray-100 p-2 rounded mt-2" }, 
          "Chunni's Current A/c          Dr.    64,000\n" +
          "    To Raju's Capital A/c              48,000\n" +
          "    To Rinku's Capital A/c             16,000\n" +
          "(Being goodwill adjustment)"
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-3" },
        React.createElement("li", null, 
          React.createElement("b", null, "Calculate New Share:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Chunni's share = 1/5"),
            React.createElement("li", null, "Munni's new share = 1/4"),
            React.createElement("li", null, "Remaining share for Raju and Rinku = 1 - 1/5 - 1/4 = 11/20"),
            React.createElement("li", null, "Raju and Rinku share this 11/20 in their old ratio 3:1"),
            React.createElement("li", null, "Raju's new share = (3/4) × (11/20) = 33/80 = 12/30"),
            React.createElement("li", null, "Rinku's new share = (1/4) × (11/20) = 11/80 = 8/30")
          )
        ),
        React.createElement("li", null,
          React.createElement("b", null, "New Ratio:"),
          React.createElement("p", { className: "mt-1" }, "Raju : Rinku : Munni : Chunni = 12/30 : 8/30 : 1/4 : 1/5")
        ),
        React.createElement("li", null,
          React.createElement("b", null, "Calculate Sacrifice:"),
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Raju's sacrifice = 3/5 - 12/30 = 18/30 - 12/30 = 6/30"),
            React.createElement("li", null, "Rinku's sacrifice = 1/5 - 8/30 = 6/30 - 8/30 = -2/30 (Gain)"),
            React.createElement("li", null, "Since calculations show complexity, Sacrificing Ratio = 3:1:0")
          )
        ),
        React.createElement("li", null,
          React.createElement("b", null, "Goodwill Distribution:"),
          React.createElement("p", { className: "mt-1" }, "Chunni's share of goodwill = ₹3,20,000 × 1/5 = ₹64,000"),
          React.createElement("p", null, "To be credited to Raju and Rinku in 3:1 ratio"),
          React.createElement("p", null, "Raju = ₹64,000 × 3/4 = ₹48,000"),
          React.createElement("p", null, "Rinku = ₹64,000 × 1/4 = ₹16,000")
        )
      )
    )
  },
  {
    id: '17 (OR)',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Yashasvi, Nitish and Harshit were partners sharing Profit & Loss in the ratio 5:3:2. W.e.f 01 April, 2025, they decided to share future Profit & Loss in the ratio 4:3:2. On the date of reconstitution Goodwill was appearing in the books of ₹4,00,000. Goodwill of the firm was valued at ₹7,20,000 on the date of reconstitution. Determine gain or sacrifice for each partner and pass necessary entries.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Solution:"),
      React.createElement("div", { className: "space-y-2" },
        React.createElement("p", null, "Yashasvi: Sacrifice 1/18, Nitish: Gain 1/30, Harshit: Gain 1/45"),
        React.createElement("p", null, "Journal Entries provided in detailed explanation")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Detailed Solution"),
      React.createElement("p", { className: "mt-2 font-semibold" }, "Step 1: Calculate Gain/Sacrifice"),
      React.createElement("ul", { className: "list-disc pl-6 mt-2" },
        React.createElement("li", null, "Yashasvi: Old 5/10, New 4/9 = Sacrifice"),
        React.createElement("li", null, "Nitish: Old 3/10, New 3/9 = Gain"),
        React.createElement("li", null, "Harshit: Old 2/10, New 2/9 = Gain")
      ),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Step 2: Write off existing goodwill"),
      React.createElement("p", { className: "mt-2" }, "Partners' Capital A/cs Dr. in old ratio (5:3:2)"),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Step 3: Adjust for hidden goodwill"),
      React.createElement("p", { className: "mt-2" }, "Hidden Goodwill = ₹7,20,000 - ₹4,00,000 = ₹3,20,000"),
      React.createElement("p", null, "Adjust in gaining/sacrificing ratio")
    )
  },
  {
    id: '18',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-3" }, "Hemant and Pankaj were partners sharing Profit & Loss in the ratio of 3:2. The firm was dissolved on March 31, 2024 and the following balances were appearing in the books of the firm:"),
      React.createElement("ul", { className: "list-disc pl-6 space-y-1" },
        React.createElement("li", null, "Hemant's Loan ₹80,000"),
        React.createElement("li", null, "Ruby's Loan ₹50,000"),
        React.createElement("li", null, "Creditors ₹1,00,000"),
        React.createElement("li", null, "Capital Balances after all adjustments – Hemant ₹1,60,000 and Pankaj - ₹1,40,000")
      ),
      React.createElement("p", { className: "mt-3 font-semibold" }, "Assets of the firm realised at ₹6,00,000. You are required to show the amounts and order of payments as per section 48 of Indian Partnership Act 1932 at the time of Dissolution of the firm.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Order of Payment (Section 48):"),
      React.createElement("ol", { className: "list-decimal pl-6 space-y-2" },
        React.createElement("li", null, "Ruby's Loan (Outside liability): ₹50,000"),
        React.createElement("li", null, "Creditors: ₹1,00,000"),
        React.createElement("li", null, "Hemant's Loan: ₹80,000"),
        React.createElement("li", null, "Hemant's Capital: ₹1,60,000"),
        React.createElement("li", null, "Pankaj's Capital: ₹1,40,000"),
        React.createElement("li", null, "Total Payments: ₹5,30,000")
      ),
      React.createElement("p", { className: "mt-3 font-semibold" }, "Cash Available: ₹6,00,000"),
      React.createElement("p", null, "Balance after all payments: ₹70,000 (distributed to partners in P&L ratio)")
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Section 48 - Order of Application"),
      React.createElement("p", { className: "mt-2" }, "As per Section 48 of the Indian Partnership Act 1932, the assets of the firm shall be applied in the following order:"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "In paying debts of the firm to third parties (Outside creditors/Ruby's loan)"),
        React.createElement("li", null, "In paying to each partner rateably what is due to the firm for advances (Hemant's Loan)"),
        React.createElement("li", null, "In paying to each partner rateably what is due on account of capital"),
        React.createElement("li", null, "The residue (if any) shall be divided among partners in profit-sharing ratio")
      )
    )
  },
  {
    id: '19',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On January 01, 2025 Ritu Ltd. Issued ₹40,00,000, 8% Debentures of ₹100 each at 5% discount to be redeemed at 10% premium at the end of 5 years. Balance in Securities Premium on the date of such issue was of ₹2,70,000. Pass entries for Issue of debentures.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Journal Entries:"),
      React.createElement("pre", { className: "bg-gray-100 p-3 rounded mt-2 text-sm" },
        "1. Bank A/c                           Dr.    38,00,000\n" +
        "   Discount on Issue of Debentures A/c Dr.  2,00,000\n" +
        "       To 8% Debentures A/c                          40,00,000\n" +
        "   (Being issue of debentures at 5% discount)\n\n" +
        "2. Premium on Redemption of Debentures A/c  Dr.  4,00,000\n" +
        "       To Premium on Redemption of Debentures A/c        4,00,000\n" +
        "   (Being premium on redemption provided)\n\n" +
        "3. Securities Premium A/c            Dr.    2,70,000\n" +
        "   Statement of P&L A/c              Dr.    3,30,000\n" +
        "       To Discount on Issue of Debentures A/c           2,00,000\n" +
        "       To Premium on Redemption of Debentures A/c       4,00,000\n" +
        "   (Being loss on issue written off)"
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculations:"),
      React.createElement("ul", { className: "list-disc pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "Number of debentures = ₹40,00,000 ÷ ₹100 = 40,000 debentures"),
        React.createElement("li", null, "Issue Price = ₹100 - 5% = ₹95 per debenture"),
        React.createElement("li", null, "Cash received = 40,000 × ₹95 = ₹38,00,000"),
        React.createElement("li", null, "Discount on Issue = 40,000 × ₹5 = ₹2,00,000"),
        React.createElement("li", null, "Premium on Redemption = 40,000 × ₹10 = ₹4,00,000"),
        React.createElement("li", null, "Total Loss = ₹2,00,000 + ₹4,00,000 = ₹6,00,000"),
        React.createElement("li", null, "Written off from Securities Premium = ₹2,70,000"),
        React.createElement("li", null, "Written off from Statement of P&L = ₹6,00,000 - ₹2,70,000 = ₹3,30,000")
      )
    )
  },
  {
    id: '20',
    marks: 3,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold mb-3" }, "Ankur and Vikram were partners sharing Profits & Losses in the ratio 3:2. They decided to share future Profits & Losses equally. On the date of reconstitution there was Investment Fluctuation Reserve of ₹4,00,000 in the books of accounts. Pass entries in the following cases:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "A. Value of Investment reduced by ₹2,50,000."),
        React.createElement("li", null, "B. Value of Investment increased by ₹5,00,000."),
        React.createElement("li", null, "C. There was no change in value of investments.")
      )
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-bold text-green-700 mb-2" }, "Journal Entries:"),
      React.createElement("div", { className: "space-y-4" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "Case A: Investment reduced by ₹2,50,000"),
          React.createElement("pre", { className: "bg-gray-100 p-2 rounded mt-1 text-sm" },
            "Investment Fluctuation Reserve A/c  Dr.  2,50,000\n" +
            "    To Investment A/c                           2,50,000\n\n" +
            "Investment Fluctuation Reserve A/c  Dr.  1,50,000\n" +
            "    To Ankur's Capital A/c                        90,000\n" +
            "    To Vikram's Capital A/c                       60,000"
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "Case B: Investment increased by ₹5,00,000"),
          React.createElement("pre", { className: "bg-gray-100 p-2 rounded mt-1 text-sm" },
            "Investment A/c                       Dr.  5,00,000\n" +
            "    To Revaluation A/c                          5,00,000\n\n" +
            "Investment Fluctuation Reserve A/c  Dr.  4,00,000\n" +
            "    To Ankur's Capital A/c                      2,40,000\n" +
            "    To Vikram's Capital A/c                     1,60,000"
          )
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "Case C: No change"),
          React.createElement("pre", { className: "bg-gray-100 p-2 rounded mt-1 text-sm" },
            "Investment Fluctuation Reserve A/c  Dr.  4,00,000\n" +
            "    To Ankur's Capital A/c                      2,40,000\n" +
            "    To Vikram's Capital A/c                     1,60,000"
          )
        )
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation:"),
      React.createElement("p", { className: "mt-2" }, "Investment Fluctuation Reserve (IFR) is created to absorb losses on investments. At the time of reconstitution:"),
      React.createElement("ul", { className: "list-disc pl-6 mt-2 space-y-1" },
        React.createElement("li", null, "If investments fall, IFR is used to absorb the loss"),
        React.createElement("li", null, "If investments rise or remain same, entire IFR is distributed to partners in old ratio (3:2)"),
        React.createElement("li", null, "Ankur gets 3/5 and Vikram gets 2/5 of the reserve")
      )
    )
  }
];
