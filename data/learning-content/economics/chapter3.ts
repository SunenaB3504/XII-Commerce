import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter3Module: LearningModule = {
  chapter: "3",
  title: "Money and Banking",
  overview: "Master money and banking fundamentals essential for CBSE Board Exams 2026. This chapter covers money functions, supply measurement, banking system, and RBI's monetary policy - frequently tested topics worth 15-18 marks. Learn with exam-focused explanations, practical examples, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Evolution of Money",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Money has evolved from primitive barter to modern digital currencies, solving the inefficiencies of direct exchange."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📈 Stages of Money Evolution:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Barter System:"), " Direct exchange of goods without money"),
            React.createElement('li', null, React.createElement('b', null, "Commodity Money:"), " Goods like cattle, grains used as money"),
            React.createElement('li', null, React.createElement('b', null, "Metallic Money:"), " Coins and bullion made of gold, silver"),
            React.createElement('li', null, React.createElement('b', null, "Paper Money:"), " Currency notes issued by government"),
            React.createElement('li', null, React.createElement('b', null, "Credit Money:"), " Bank deposits, cheques, digital money"),
            React.createElement('li', null, React.createElement('b', null, "Plastic Money:"), " Credit/debit cards, e-wallets")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🚨 Barter System Drawbacks:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Double Coincidence of Wants:"), " Both parties must want each other's goods"),
            React.createElement('li', null, React.createElement('b', null, "Lack of Common Measure:"), " Difficult to compare values of different goods"),
            React.createElement('li', null, React.createElement('b', null, "Indivisibility:"), " Cannot divide goods for small transactions"),
            React.createElement('li', null, React.createElement('b', null, "Storage Problems:"), " Perishable goods cannot be stored as wealth"),
            React.createElement('li', null, React.createElement('b', null, "No Deferred Payments:"), " Cannot buy now, pay later")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Money evolved to overcome barter's inefficiencies - each stage solved previous limitations!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Modern money is 'fiat money' - it has value because government declares it legal tender!"
        )
      ),
      examFocus: true,
      example: "In ancient times, Romans used salt as money (salary comes from salarium). In India, rupees evolved from Sanskrit 'rupya' meaning silver.",
      mnemonic: "Barter, Commodity, Metallic, Paper, Credit, Plastic - B C M P C P!"
    },
    {
      title: "Functions of Money",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Money performs multiple functions that make it indispensable in a modern economy. These functions are interconnected and essential for economic activity."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💱 Primary Functions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Medium of Exchange:"), " Accepted means of payment for goods and services"),
            React.createElement('li', null, React.createElement('b', null, "Measure of Value/Unit of Account:"), " Common standard to measure and compare values of goods")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "💰 Secondary Functions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Store of Value:"), " Can be saved and used for future transactions"),
            React.createElement('li', null, React.createElement('b', null, "Standard of Deferred Payments:"), " Can be used for credit transactions (buy now, pay later)")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🌍 Contingent Functions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Basis of Credit:"), " Foundation for credit system and banking"),
            React.createElement('li', null, React.createElement('b', null, "Liquidity:"), " Most liquid asset, easily convertible to other assets"),
            React.createElement('li', null, React.createElement('b', null, "Maximizer of Satisfaction:"), " Enables specialization and efficient resource allocation")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Primary functions are essential for exchange; secondary functions enable time-value transactions!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Good money must perform all functions efficiently - that's why gold was replaced by paper!"
        )
      ),
      examFocus: true,
      example: "₹100 note functions as: Medium of exchange (buy coffee), Measure of value (coffee costs ₹100), Store of value (save for later), Standard of deferred payment (credit card).",
      mnemonic: "Primary: Medium of Exchange, Measure of Value. Secondary: Store of Value, Standard of Deferred Payments - P M M V S S S D P!"
    },
    {
      title: "Money Supply Measurement",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Money supply is measured using different definitions based on liquidity. RBI uses four measures: M1, M2, M3, and M4, each including progressively less liquid assets."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💵 M1 (Narrow Money - Most Liquid):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Components:"), " Currency with public + Demand deposits with banks"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " M1 = CU + DD"),
            React.createElement('li', null, React.createElement('b', null, "Use:"), " Transactions motive, immediate payments"),
            React.createElement('li', null, React.createElement('b', null, "Liquidity:"), " 100% liquid")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "💳 M2 (M1 + Savings Deposits):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Components:"), " M1 + Savings deposits with post offices"),
            React.createElement('li', null, React.createElement('b', null, "Use:"), " Short-term savings and transactions"),
            React.createElement('li', null, React.createElement('b', null, "Liquidity:"), " High but less than M1")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🏦 M3 (Broad Money - Most Important):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Components:"), " M2 + Term deposits with banks"),
            React.createElement('li', null, React.createElement('b', null, "Use:"), " RBI's key monetary policy measure"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " M3 = CU + DD + Savings deposits + Term deposits")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, "📈 M4 (Broadest Money):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Components:"), " M3 + Total post office deposits"),
            React.createElement('li', null, React.createElement('b', null, "Use:"), " Comprehensive measure of money supply"),
            React.createElement('li', null, React.createElement('b', null, "Liquidity:"), " Least liquid among the four")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "M1 is most liquid, M4 is broadest - RBI focuses on M3 for monetary policy!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Higher M number = broader measure = less liquid assets included!"
        )
      ),
      examFocus: true,
      example: "In India (as of 2023): M1 ≈ ₹40 lakh crores, M3 ≈ ₹250 lakh crores. M3 is 6 times larger than M1 due to deposits.",
      mnemonic: "M1 (narrow), M2 (savings), M3 (term deposits), M4 (post office) - M N M S M T M P!"
    },
    {
      title: "Credit Creation by Commercial Banks",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Commercial banks create credit through the deposit multiplier process, expanding the money supply beyond initial deposits."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🏦 Credit Creation Process:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Primary Deposit:"), " Customer deposits ₹1000 in bank"),
            React.createElement('li', null, React.createElement('b', null, "Legal Reserves:"), " Bank keeps 20% (₹200) as CRR/SLR"),
            React.createElement('li', null, React.createElement('b', null, "Lending Capacity:"), " Bank can lend ₹800"),
            React.createElement('li', null, React.createElement('b', null, "Secondary Deposit:"), " Borrower deposits ₹800 in another bank"),
            React.createElement('li', null, React.createElement('b', null, "Multiplication Continues:"), " Process repeats with diminishing amounts")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Money Multiplier:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Money Multiplier = 1 / LRR"),
            React.createElement('li', null, React.createElement('b', null, "LRR (Legal Reserve Ratio):"), " CRR + SLR (minimum 20% in India)"),
            React.createElement('li', null, React.createElement('b', null, "Maximum Credit Creation:"), " Initial Deposit × (1/LRR - 1)"),
            React.createElement('li', null, React.createElement('b', null, "Total Money Supply:"), " Initial Deposit × (1/LRR)")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "⚠️ Assumptions for Credit Creation:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "No Leakages:"), " All loans are redeposited in banking system"),
            React.createElement('li', null, React.createElement('b', null, "Full Lending:"), " Banks lend entire excess reserves"),
            React.createElement('li', null, React.createElement('b', null, "No Cash Drain:"), " Public doesn't hold additional currency"),
            React.createElement('li', null, React.createElement('b', null, "Fixed LRR:"), " Reserve ratio remains constant")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Banks create money by lending - every loan creates deposit, every deposit creates lending capacity!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ In reality, credit creation is less than theoretical maximum due to leakages!"
        )
      ),
      examFocus: true,
      example: "With LRR = 20%, ₹1000 deposit creates maximum ₹4000 total money supply (₹1000 × 1/0.2 = ₹5000, but initial deposit is part of money supply).",
      mnemonic: "Deposit, Keep reserves, Lend excess, Redeposit, Repeat - D K L E R R!"
    },
    {
      title: "Central Bank and Monetary Policy",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The central bank (RBI in India) controls money supply and credit through various quantitative and qualitative instruments to achieve economic objectives."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🏛️ RBI's Functions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Banker's Bank:"), " Provides banking services to commercial banks"),
            React.createElement('li', null, React.createElement('b', null, "Banker's Government:"), " Manages government's banking transactions"),
            React.createElement('li', null, React.createElement('b', null, "Controller of Credit:"), " Regulates money supply through monetary policy"),
            React.createElement('li', null, React.createElement('b', null, "Issuer of Currency:"), " Issues and manages currency circulation"),
            React.createElement('li', null, React.createElement('b', null, "Supervisor of Banks:"), " Regulates and supervises banking system")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🛠️ Quantitative Instruments:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Bank Rate:"), " Rate at which RBI lends to banks (emergency lending)"),
            React.createElement('li', null, React.createElement('b', null, "Repo Rate:"), " Rate for short-term lending to banks (6.5% as of 2023)"),
            React.createElement('li', null, React.createElement('b', null, "Reverse Repo Rate:"), " Rate at which RBI borrows from banks (6.25% as of 2023)"),
            React.createElement('li', null, React.createElement('b', null, "CRR:"), " Cash Reserve Ratio (minimum 4%, maximum 15%)"),
            React.createElement('li', null, React.createElement('b', null, "SLR:"), " Statutory Liquidity Ratio (18% of deposits)"),
            React.createElement('li', null, React.createElement('b', null, "Open Market Operations:"), " Buying/selling government securities")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Qualitative Instruments:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Margin Requirements:"), " Minimum down payment for loans"),
            React.createElement('li', null, React.createElement('b', null, "Moral Suasion:"), " Persuading banks through speeches and meetings"),
            React.createElement('li', null, React.createElement('b', null, "Credit Rationing:"), " Limiting credit to specific sectors"),
            React.createElement('li', null, React.createElement('b', null, "Direct Action:"), " Penalties for non-compliance")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Quantitative tools affect money supply directly; qualitative tools affect credit allocation!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ RBI uses expansionary policy (low rates) during recession, contractionary policy (high rates) during inflation!"
        )
      ),
      examFocus: true,
      example: "During COVID-19, RBI reduced repo rate from 5.15% to 4.0% and CRR from 4% to 3% to increase money supply and boost economic activity.",
      mnemonic: "Quantitative: Bank rate, Repo, Reverse repo, CRR, SLR, OMO. Qualitative: Margin, Moral suasion, Rationing, Direct action - Q B R R C S O Q M M R D!"
    },
    {
      title: "Monetary Policy vs Fiscal Policy",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "While monetary policy is controlled by RBI, fiscal policy is managed by government. Both aim to achieve economic stability but through different instruments."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💰 Monetary Policy (RBI):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Authority:"), " Central Bank (RBI)"),
            React.createElement('li', null, React.createElement('b', null, "Instruments:"), " Interest rates, reserve ratios, open market operations"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Money supply and credit control"),
            React.createElement('li', null, React.createElement('b', null, "Speed:"), " Quick implementation, immediate effects"),
            React.createElement('li', null, React.createElement('b', null, "Limitations:"), " Ineffective when interest rates are already low (liquidity trap)")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🏛️ Fiscal Policy (Government):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Authority:"), " Ministry of Finance"),
            React.createElement('li', null, React.createElement('b', null, "Instruments:"), " Taxation, government spending, public borrowing"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Government revenue and expenditure"),
            React.createElement('li', null, React.createElement('b', null, "Speed:"), " Slower due to parliamentary approval"),
            React.createElement('li', null, React.createElement('b', null, "Limitations:"), " Political constraints, time lags")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Policy Coordination:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Complementary Role:"), " Both policies work together for economic stability"),
            React.createElement('li', null, React.createElement('b', null, "During Recession:"), " Expansionary monetary + expansionary fiscal policy"),
            React.createElement('li', null, React.createElement('b', null, "During Inflation:"), " Contractionary monetary + contractionary fiscal policy"),
            React.createElement('li', null, React.createElement('b', null, "Crowding Out Effect:"), " Government borrowing can increase interest rates")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Monetary policy affects interest rates, fiscal policy affects government spending and taxes!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ In developing countries like India, fiscal policy is more effective than monetary policy!"
        )
      ),
      examFocus: true,
      mnemonic: "Monetary (RBI, money supply), Fiscal (Government, spending/taxes) - M R M S F G S T!"
    }
  ],
  keywords: [
    { term: "Barter System", definition: "A system of exchange where goods are directly exchanged for other goods without using money." },
    { term: "Double Coincidence of Wants", definition: "A situation where two people each have a good that the other wants, a necessary condition for barter trade." },
    { term: "Commodity Money", definition: "Goods like cattle, grains, or precious metals that serve as money." },
    { term: "Fiat Money", definition: "Currency that has value because the government declares it legal tender, not because of intrinsic value." },
    { term: "Medium of Exchange", definition: "The primary function of money that allows goods and services to be bought and sold." },
    { term: "Measure of Value", definition: "The function of money that provides a common standard to measure and compare the values of different goods." },
    { term: "Store of Value", definition: "The function of money that allows wealth to be stored and retrieved in the future." },
    { term: "Standard of Deferred Payments", definition: "The function of money that allows credit transactions and future payments." },
    { term: "Money Supply", definition: "The total stock of money (currency and deposits) in circulation in an economy at a point in time." },
    { term: "M1", definition: "The narrowest measure of money supply including currency with public and demand deposits." },
    { term: "M3", definition: "The broad measure of money supply including M1 plus term deposits, used by RBI for monetary policy." },
    { term: "Credit Creation", definition: "The process by which commercial banks create deposits by lending money." },
    { term: "Money Multiplier", definition: "The amount by which an initial deposit can lead to a larger total money supply, calculated as 1/LRR." },
    { term: "Legal Reserve Ratio (LRR)", definition: "The minimum fraction of deposits that commercial banks must keep as reserves (CRR + SLR)." },
    { term: "Central Bank", definition: "An apex institution that controls and regulates the entire banking and monetary structure of a country (RBI in India)." },
    { term: "Monetary Policy", definition: "The policy of the central bank to control the supply of money and credit in the economy." },
    { term: "Repo Rate", definition: "The rate at which the central bank lends money to commercial banks for short periods." },
    { term: "Reverse Repo Rate", definition: "The rate at which the central bank borrows money from commercial banks." },
    { term: "Cash Reserve Ratio (CRR)", definition: "The minimum percentage of deposits that banks must keep with the central bank." },
    { term: "Statutory Liquidity Ratio (SLR)", definition: "The minimum percentage of deposits that banks must maintain in liquid assets." },
    { term: "Open Market Operations", definition: "Buying or selling of government securities by the central bank to control money supply." },
    { term: "Fiscal Policy", definition: "The policy of the government regarding taxation and public expenditure to influence economic activity." },
    { term: "Bank Rate", definition: "The rate at which the central bank lends to commercial banks for long-term purposes." },
    { term: "Liquidity Trap", definition: "A situation where monetary policy becomes ineffective because interest rates are already very low." }
  ],
  caseStudies: [
    {
      title: "Controlling Inflation Through Monetary Policy",
      scenario: "In 2022, India's retail inflation reached 7.8%, well above RBI's target of 4%. The Monetary Policy Committee increased the repo rate by 50 basis points to 6.25%. Commercial banks raised their lending rates, making loans more expensive for businesses and consumers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Contractionary Monetary Policy:"), " Higher interest rates reduce aggregate demand"),
          React.createElement('li', null, React.createElement('b', null, "Transmission Mechanism:"), " Repo rate increase → higher bank lending rates → reduced borrowing → lower spending"),
          React.createElement('li', null, React.createElement('b', null, "RBI's Role:"), " As controller of money supply and credit"),
          React.createElement('li', null, React.createElement('b', null, "Trade-off:"), " Controlling inflation may slow economic growth")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how RBI uses interest rates to control inflation!")
      )
    },
    {
      title: "COVID-19 Credit Creation",
      scenario: "During COVID-19 lockdown, many businesses faced cash flow problems. Banks created credit by converting working capital loans into emergency credit lines. A ₹10 crore initial deposit with 20% LRR could theoretically create ₹40 crore additional money supply through the multiplier effect.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Credit Creation Process:"), " Banks lending creates deposits, which create more lending capacity"),
          React.createElement('li', null, React.createElement('b', null, "Money Multiplier:"), " 1/LRR = 1/0.2 = 5 times multiplication"),
          React.createElement('li', null, React.createElement('b', null, "Emergency Credit:"), " Converting existing loans to provide liquidity during crisis"),
          React.createElement('li', null, React.createElement('b', null, "Banking System Role:"), " Providing credit to support economic activity")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates how banks create money to support economic recovery!")
      )
    },
    {
      title: "Digital Money Evolution",
      scenario: "A village farmer uses UPI to receive payment for crops, transfers money to his son's education account, and pays household bills through BHIM app. He no longer needs to travel to bank or carry cash, and transactions are instant and secure.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Evolution of Money:"), " From barter to commodity to paper to digital money"),
          React.createElement('li', null, React.createElement('b', null, "Money Functions:"), " UPI serves as medium of exchange, measure of value, store of value"),
          React.createElement('li', null, React.createElement('b', null, "Financial Inclusion:"), " Digital money reaches remote areas without physical bank branches"),
          React.createElement('li', null, React.createElement('b', null, "Money Supply Measurement:"), " Digital deposits are part of M1 and M3")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This shows how technology is transforming money and banking!")
      )
    },
    {
      title: "Monetary vs Fiscal Policy Coordination",
      scenario: "During 2020-21, RBI reduced repo rate to 4% and CRR to 3% (monetary expansion), while government announced ₹27 lakh crore stimulus package (fiscal expansion) to combat COVID-19 economic slowdown.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Policy Mix:"), " Coordinated monetary and fiscal expansion during crisis"),
          React.createElement('li', null, React.createElement('b', null, "Monetary Policy Tools:"), " Low interest rates and reserve ratios to increase money supply"),
          React.createElement('li', null, React.createElement('b', null, "Fiscal Policy Tools:"), " Increased government spending and tax relief"),
          React.createElement('li', null, React.createElement('b', null, "Complementary Effect:"), " Both policies work together to boost aggregate demand")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This illustrates the importance of coordinated macroeconomic policies!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 3: Money and Banking at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Money evolved from barter to solve double coincidence of wants problem"),
      React.createElement('li', null, "Four functions: Medium of exchange, Measure of value, Store of value, Standard of deferred payments"),
      React.createElement('li', null, "Money supply: M1 (narrowest, most liquid), M3 (broadest, RBI focus)"),
      React.createElement('li', null, "Banks create credit through money multiplier (1/LRR) based on fractional reserve system"),
      React.createElement('li', null, "RBI controls money supply using repo rate, CRR, SLR, open market operations"),
      React.createElement('li', null, "Monetary policy (RBI) vs Fiscal policy (Government) - both aim for economic stability")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Functions of money, money supply measures, RBI tools"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain money functions, credit creation process"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Distinguish barter vs money, monetary vs fiscal policy"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on monetary policy, money evolution and functions")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Money solves barter's double coincidence of wants problem"),
        React.createElement('li', null, "All four money functions are essential for efficient economic exchange"),
        React.createElement('li', null, "Banks create money through credit creation, not just lending existing money"),
        React.createElement('li', null, "RBI uses M3 as the key measure for monetary policy formulation"),
        React.createElement('li', null, "Monetary policy affects interest rates, fiscal policy affects government spending")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Money Evolution: Barter, Commodity, Metallic, Paper, Credit, Plastic - B C M P C P"),
        React.createElement('p', { className: 'font-semibold' }, "Money Functions: Medium of Exchange, Measure of Value, Store of Value, Standard of Deferred Payments - M E M V S V S D P"),
        React.createElement('p', { className: 'font-semibold' }, "Money Supply: M1 (narrow), M2 (savings), M3 (term deposits), M4 (post office) - M N M S M T M P"),
        React.createElement('p', { className: 'font-semibold' }, "Credit Creation: Deposit, Keep reserves, Lend excess, Redeposit, Repeat - D K L E R R"),
        React.createElement('p', { className: 'font-semibold' }, "RBI Tools: Repo, Reverse repo, CRR, SLR, Bank rate, OMO - R R C S B O"),
        React.createElement('p', { className: 'font-semibold' }, "Policy Difference: Monetary (RBI, interest rates), Fiscal (Government, spending/taxes) - M R I F G S T")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain how money solves each barter drawback with examples"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse money supply measures - M1 is most liquid, M3 is RBI's focus"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Show credit creation with numerical examples using money multiplier"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that banks create money through lending, not just intermediation"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Differentiate quantitative (affect supply) vs qualitative (affect allocation) instruments"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Mix monetary and fiscal policy - monetary changes interest rates, fiscal changes spending/taxes")
      )
    )
  )
};
