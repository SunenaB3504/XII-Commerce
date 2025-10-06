import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter6Module: LearningModule = {
  chapter: "6",
  title: "Open Economy Macroeconomics",
  overview: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6' },
      React.createElement('h3', { className: 'text-xl font-bold text-blue-900 mb-3' }, '📊 Open Economy Macroeconomics: Global Economic Interactions'),
      React.createElement('p', { className: 'text-gray-800 mb-4' },
        "This chapter expands our macroeconomic analysis from closed economies to open economies that interact with the global economy through international trade, capital flows, and currency exchange. Understanding open economy macroeconomics is crucial for CBSE Board Exam 2026 as it explains how domestic economic policies are influenced by global events and how countries manage their external economic relations."
      ),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mt-4' },
        React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-blue-500' },
          React.createElement('h4', { className: 'font-semibold text-blue-800 mb-2' }, '🎯 Learning Objectives:'),
          React.createElement('ul', { className: 'text-sm space-y-1' },
            React.createElement('li', null, "• Understand Balance of Payments accounting"),
            React.createElement('li', null, "• Analyze foreign exchange market dynamics"),
            React.createElement('li', null, "• Examine exchange rate determination systems"),
            React.createElement('li', null, "• Evaluate India's external sector policies")
          )
        ),
        React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
          React.createElement('h4', { className: 'font-semibold text-green-800 mb-2' }, '📈 Key Topics:'),
          React.createElement('ul', { className: 'text-sm space-y-1' },
            React.createElement('li', null, "• Balance of Payments (Current & Capital)"),
            React.createElement('li', null, "• Foreign Exchange Market & Rates"),
            React.createElement('li', null, "• Exchange Rate Systems & Policies"),
            React.createElement('li', null, "• India's External Sector Management")
          )
        )
      ),
      React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg mt-4 border-l-4 border-yellow-500' },
        React.createElement('p', { className: 'font-semibold text-yellow-800' }, '💡 Exam Focus:'),
        React.createElement('p', { className: 'text-sm text-gray-700' }, 'High-weightage topic with numerical problems on BoP calculations and exchange rate determination. Connect with current events like rupee-dollar fluctuations and trade deficits.')
      )
    )
  ),
  keyConcepts: [
    {
      title: "Balance of Payments (BoP) Framework",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Balance of Payments is a comprehensive record of all economic transactions between residents of a country and the rest of the world during a specific period. It follows double-entry bookkeeping principles where every transaction has two sides."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '📊 BoP Components:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Current Account:"), " Trade in goods, services, income, and unilateral transfers"),
            React.createElement('li', null, React.createElement('b', null, "Capital Account:"), " Foreign investment, loans, and banking capital"),
            React.createElement('li', null, React.createElement('b', null, "Errors & Omissions:"), " Statistical discrepancies in recording"),
            React.createElement('li', null, React.createElement('b', null, "Official Reserves:"), " Changes in foreign exchange reserves")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '💰 Current Account Breakdown:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Trade Balance:"), " Exports minus imports of goods"),
            React.createElement('li', null, React.createElement('b', null, "Services Balance:"), " Tourism, software, transportation services"),
            React.createElement('li', null, React.createElement('b', null, "Income Balance:"), " Interest, dividends, profits from abroad"),
            React.createElement('li', null, React.createElement('b', null, "Transfers:"), " Remittances, foreign aid, gifts")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "BoP always balances! Current Account + Capital Account + Reserves = 0. Surplus/deficit in one account is offset by opposite movement in others.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ BoP deficit means country is borrowing from or selling assets to foreigners!"
        )
      ),
      examFocus: true,
      example: "India's BoP for 2023-24: Current Account deficit ~$78 billion, Capital Account surplus ~$110 billion, Reserves increased by ~$32 billion.",
      mnemonic: "BoP (Balance of Payments), Current (goods/services/transfers), Capital (investment/loans) - B C C!"
    },
    {
      title: "Foreign Exchange Market Dynamics",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Foreign Exchange Market is where currencies are bought and sold. Exchange rates are determined by the interaction of demand and supply for foreign currencies, influenced by trade, investment, and speculation."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '💱 Market Participants:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Exporters/Importers:"), " Firms engaged in international trade"),
            React.createElement('li', null, React.createElement('b', null, "Investors:"), " FDI, FII, portfolio investors"),
            React.createElement('li', null, React.createElement('b', null, "Speculators:"), " Traders betting on currency movements"),
            React.createElement('li', null, React.createElement('b', null, "Central Banks:"), " Intervene to stabilize exchange rates")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '📈 Demand & Supply Factors:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Demand for Foreign Currency:"), " Imports, foreign investment outflows, remittances"),
            React.createElement('li', null, React.createElement('b', null, "Supply of Foreign Currency:"), " Exports, foreign investment inflows, foreign aid"),
            React.createElement('li', null, React.createElement('b', null, "Exchange Rate:"), " Price of foreign currency in domestic currency terms")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Increase in exports shifts supply curve right → depreciation of domestic currency. Increase in imports shifts demand curve right → appreciation.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Exchange rate fluctuations affect domestic inflation and competitiveness!"
        )
      ),
      examFocus: true,
      example: "When Indian IT exports increase, more dollars flow in, increasing supply of dollars in forex market, causing rupee to appreciate against dollar.",
      mnemonic: "Forex Market: Demand (imports/investments), Supply (exports/remittances) - D S!"
    },
    {
      title: "Exchange Rate Systems & Determination",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Exchange rate systems determine how currency values are set. Each system has different implications for economic stability, policy autonomy, and market efficiency."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '🎯 Exchange Rate Systems:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Flexible/Floating:"), " Market forces determine rate, no government intervention"),
            React.createElement('li', null, React.createElement('b', null, "Fixed:"), " Government pegs rate at specific level, maintains through reserves"),
            React.createElement('li', null, React.createElement('b', null, "Managed Float:"), " Market determines rate but central bank intervenes when needed"),
            React.createElement('li', null, React.createElement('b', null, "Pegged/Crawling Peg:"), " Rate adjusted periodically based on economic indicators")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '⚖️ System Comparison:'),
          React.createElement('div', { className: 'overflow-x-auto' },
            React.createElement('table', { className: 'min-w-full text-xs border-collapse border border-gray-300' },
              React.createElement('thead', null,
                React.createElement('tr', { className: 'bg-gray-100' },
                  React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Aspect'),
                  React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Flexible'),
                  React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Fixed')
                )
              ),
              React.createElement('tbody', null,
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, 'Stability'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Fluctuates'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Stable')
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, 'Reserves'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Not needed'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Large reserves required')
                ),
                React.createElement('tr', null,
                  React.createElement('td', { className: 'border border-gray-300 p-2 font-semibold' }, 'Policy Autonomy'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'High'),
                  React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Low')
                )
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "India follows managed floating system. RBI intervenes to prevent excessive volatility but allows market determination.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Fixed rates provide stability but require strong reserves and limit monetary policy independence!"
        )
      ),
      examFocus: true,
      example: "India shifted from fixed exchange rate (pegged to dollar) in 1991 to managed floating in 1993 after Balance of Payments crisis.",
      mnemonic: "Exchange Systems: Flexible (market), Fixed (government), Managed (both) - F F M!"
    },
    {
      title: "Currency Appreciation & Depreciation",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Changes in currency values affect international competitiveness, inflation, and economic growth. Appreciation makes exports costlier and imports cheaper, while depreciation has opposite effects."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '📈 Appreciation vs Depreciation:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Appreciation:"), " Rise in domestic currency value (₹1 = more $), caused by market forces"),
            React.createElement('li', null, React.createElement('b', null, "Depreciation:"), " Fall in domestic currency value (₹1 = less $), caused by market forces"),
            React.createElement('li', null, React.createElement('b', null, "Revaluation:"), " Government-induced appreciation in fixed rate system"),
            React.createElement('li', null, React.createElement('b', null, "Devaluation:"), " Government-induced depreciation in fixed rate system")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '🎯 Economic Effects:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "On Exports:"), " Appreciation hurts, depreciation helps competitiveness"),
            React.createElement('li', null, React.createElement('b', null, "On Imports:"), " Appreciation helps (cheaper), depreciation hurts (costlier)"),
            React.createElement('li', null, React.createElement('b', null, "On Inflation:"), " Depreciation increases import prices, appreciation decreases"),
            React.createElement('li', null, React.createElement('b', null, "On BOP:"), " Depreciation improves current account, appreciation worsens it")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Depreciation/devaluation is expansionary for exports but contractionary for imports. Opposite for appreciation/revaluation.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Excessive depreciation can fuel inflation through higher import costs!"
        )
      ),
      examFocus: true,
      example: "Rupee depreciated from ₹68/$ in 2018 to ₹83/$ in 2022, making Indian exports cheaper but imports costlier, helping reduce trade deficit.",
      mnemonic: "Currency Changes: Appreciation (up, hurts exports), Depreciation (down, helps exports) - A D!"
    },
    {
      title: "India's Balance of Payments Trends",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "India's external sector has evolved significantly since liberalization in 1991. From chronic BoP crises to current account convertibility, the economy has become more resilient but faces new challenges."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '📊 India\'s BoP Evolution:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "1991 Crisis:"), " Current account deficit, foreign reserves crisis, IMF bailout"),
            React.createElement('li', null, React.createElement('b', null, "Post-1991 Reforms:"), " Devaluation, liberalization, current account convertibility (1994)"),
            React.createElement('li', null, React.createElement('b', null, "Capital Account:"), " Opened gradually, now almost fully convertible for non-residents"),
            React.createElement('li', null, React.createElement('b', null, "Foreign Reserves:"), " Built from $6 billion in 1991 to $578 billion in 2024")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '💹 Current Challenges:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Trade Deficit:"), " Imports exceed exports, oil and gold major contributors"),
            React.createElement('li', null, React.createElement('b', null, "Remittances:"), " Major current account support (~$110 billion annually)"),
            React.createElement('li', null, React.createElement('b', null, "FDI Inflows:"), " Stable at ~$50-60 billion annually"),
            React.createElement('li', null, React.createElement('b', null, "Exchange Rate Volatility:"), " Managed through RBI interventions")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "India's BoP is capital account surplus driven, unlike many developed countries with current account surpluses.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Remittances and software exports are India's external sector strengths!"
        )
      ),
      examFocus: true,
      example: "In 2022-23, India's current account deficit was 1.2% of GDP, financed by capital inflows of $110 billion, showing healthy external financing.",
      mnemonic: "India BoP: Trade deficit, Remittance surplus, FDI inflows - T R F!"
    },
    {
      title: "Foreign Exchange Reserves & Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Foreign exchange reserves are assets held by central banks in foreign currencies. They provide confidence, facilitate interventions, and serve as a buffer against external shocks."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '💰 Components of Reserves:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Foreign Currency Assets:"), " US dollars, euros, yen (major portion)"),
            React.createElement('li', { className: 'text-sm' }, React.createElement('b', null, "Gold Reserves:"), " Held as bullion or deposits with foreign banks"),
            React.createElement('li', null, React.createElement('b', null, "SDR Holdings:"), " Special Drawing Rights from IMF"),
            React.createElement('li', null, React.createElement('b', null, "Reserve Position in IMF:"), " India's quota-based position")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '🎯 Reserve Management:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Liquidity Management:"), " Maintain adequate reserves for 6-12 months imports"),
            React.createElement('li', null, React.createElement('b', null, "Currency Diversification:"), " Reduce dependence on single currency (US dollar)"),
            React.createElement('li', null, React.createElement('b', null, "Return Optimization:"), " Invest in safe, liquid assets with reasonable returns"),
            React.createElement('li', null, React.createElement('b', null, "RBI's Role:"), " Manages reserves, intervenes in forex market when needed")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "India's forex reserves include FCAs (75%), gold (6%), SDRs (1%), IMF position (1%). Total ~$578 billion (March 2024).")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Reserves provide confidence but opportunity cost of holding low-yield foreign assets!"
        )
      ),
      examFocus: true,
      example: "During COVID-19, RBI used $127 billion from reserves to stabilize rupee and provide dollar liquidity to banks.",
      mnemonic: "Forex Reserves: Foreign currency, Gold, SDR, IMF position - F G S I!"
    },
    {
      title: "RBI's Exchange Rate Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "RBI manages India's exchange rate through various interventions while maintaining the managed floating system. The goal is to prevent excessive volatility while allowing market forces to play their role."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '🏦 RBI\'s Tools:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Direct Intervention:"), " Buying/selling dollars in forex market"),
            React.createElement('li', null, React.createElement('b', null, "Interest Rate Policy:"), " Adjusting rates to influence capital flows"),
            React.createElement('li', null, React.createElement('b', null, "Capital Controls:"), " Regulating FPI, FDI flows when needed"),
            React.createElement('li', null, React.createElement('b', null, "Moral Suasion:"), " Persuading banks to manage currency risk")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '🎯 Intervention Strategies:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Lean Against Wind:"), " Intervene to prevent excessive movements"),
            React.createElement('li', null, React.createElement('b', null, "Sterilized Intervention:"), " Offset monetary impact of forex operations"),
            React.createElement('li', null, React.createElement('b', null, "Rules-Based Intervention:"), " Pre-announced intervention bands"),
            React.createElement('li', null, React.createElement('b', null, "Liquidity Management:"), " Ensure adequate rupee-dollar liquidity")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "RBI maintains rupee stability within a band. Intervenes when rate moves beyond 2-3% from reference rate.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Excessive intervention can deplete reserves or create monetary instability!"
        )
      ),
      examFocus: true,
      example: "In 2018, RBI spent $30 billion to defend rupee during US Fed rate hikes and trade war uncertainties.",
      mnemonic: "RBI Tools: Intervention, Interest rates, Controls, Suasion - I I C S!"
    }
  ],
  keywords: [
    { term: "Open Economy", definition: "An economy that engages in international trade and financial transactions with other countries." },
    { term: "Balance of Payments (BoP)", definition: "A systematic record of all economic transactions between residents of a country and the rest of the world." },
    { term: "Current Account", definition: "Records trade in goods and services, income flows, and unilateral transfers in the BoP." },
    { term: "Capital Account", definition: "Records international transactions involving assets like foreign investment and loans in the BoP." },
    { term: "Trade Balance", definition: "The difference between exports and imports of goods (visible trade balance)." },
    { term: "Foreign Exchange Market", definition: "A market where different national currencies are bought and sold for one another." },
    { term: "Exchange Rate", definition: "The price of one currency expressed in terms of another currency." },
    { term: "Flexible Exchange Rate", definition: "An exchange rate system where currency value is determined by market forces of demand and supply." },
    { term: "Fixed Exchange Rate", definition: "An exchange rate system where the government or central bank pegs the currency value at a specific level." },
    { term: "Managed Floating", definition: "A hybrid exchange rate system where market determines rate but central bank intervenes to prevent excessive fluctuations." },
    { term: "Currency Appreciation", definition: "An increase in the value of domestic currency relative to foreign currencies (market-driven)." },
    { term: "Currency Depreciation", definition: "A decrease in the value of domestic currency relative to foreign currencies (market-driven)." },
    { term: "Currency Devaluation", definition: "A deliberate reduction in currency value by the government in a fixed exchange rate system." },
    { term: "Currency Revaluation", definition: "A deliberate increase in currency value by the government in a fixed exchange rate system." },
    { term: "Foreign Exchange Reserves", definition: "Assets held by central banks in foreign currencies to facilitate international transactions." },
    { term: "Current Account Deficit", definition: "A situation where a country's imports of goods, services, and transfers exceed its exports." },
    { term: "Capital Account Surplus", definition: "When foreign investment inflows exceed outflows in the capital account." },
    { term: "Remittances", definition: "Money sent by nationals working abroad to their home country." },
    { term: "Foreign Direct Investment (FDI)", definition: "Investment made by foreign entities in domestic companies with management control." },
    { term: "Foreign Institutional Investors (FII)", definition: "Foreign investment funds that invest in domestic stock markets." }
  ],
  caseStudies: [
    {
      title: "India's Smartphone Import Boom & Rupee Depreciation",
      scenario: "Between 2014-2020, India's smartphone imports increased from $2 billion to $7 billion annually. Chinese manufacturers captured 70% market share, leading to massive yuan demand in forex markets.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Forex Market Impact Analysis:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Demand Shift:"), " Increased yuan demand shifted demand curve right, appreciating yuan"),
          React.createElement('li', null, React.createElement('b', null, "Rupee Depreciation:"), " Rupee depreciated from ₹60/¥ in 2014 to ₹10/¥ in 2020"),
          React.createElement('li', null, React.createElement('b', null, "BoP Effect:"), " Current account worsened, trade deficit increased by $50 billion"),
          React.createElement('li', null, React.createElement('b', null, "Policy Response:"), " RBI interventions, import restrictions on Chinese phones")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how import surges can pressure domestic currency and BoP!")
      )
    },
    {
      title: "COVID-19 & India's External Sector Resilience",
      scenario: "During COVID-19 (2020-2021), India's exports fell 20%, remittances dropped 10%, but FDI increased 15%. Current account deficit narrowed from 2.1% to 0.9% of GDP.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "External Sector Crisis Management:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Current Account Improvement:"), " Oil price crash reduced import bill by $30 billion"),
          React.createElement('li', null, React.createElement('b', null, "Capital Account Strength:"), " FDI inflows sustained, FIIs returned post-vaccine rollout"),
          React.createElement('li', null, React.createElement('b', null, "Reserve Utilization:"), " RBI used $127 billion reserves for market stabilization"),
          React.createElement('li', null, React.createElement('b', null, "Exchange Rate Stability:"), " Managed float prevented excessive volatility")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates India's improved external sector resilience compared to 1991 crisis!")
      )
    },
    {
      title: "Rupee-Dollar Volatility During US Fed Rate Hikes",
      scenario: "In 2018, US Federal Reserve hiked interest rates 4 times, attracting global capital. India's current account deficit was 2.3% of GDP, making rupee vulnerable to outflows.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Interest Rate Parity & Capital Flows:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Capital Outflow Pressure:"), " Higher US rates attracted $20 billion FPI outflows"),
          React.createElement('li', null, React.createElement('b', null, "Rupee Depreciation:"), " Fell from ₹63/$ to ₹74/$ within 6 months"),
          React.createElement('li', null, React.createElement('b', null, "RBI Intervention:"), " Spent $30 billion reserves to stabilize currency"),
          React.createElement('li', null, React.createElement('b', null, "Policy Coordination:"), " Raised domestic rates to retain capital")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This illustrates how global monetary policies affect emerging market currencies!")
      )
    },
    {
      title: "Software Exports & Rupee Appreciation Dilemma",
      scenario: "India's IT exports reached $150 billion in 2023, creating excess dollar supply. However, this led to rupee appreciation, hurting other export sectors like textiles and agriculture.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Dutch Disease in External Sector:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Export Success Story:"), " IT sector drives 40% of merchandise exports invisibly"),
          React.createElement('li', null, React.createElement('b', null, "Rupee Appreciation Effect:"), " Makes traditional exports uncompetitive"),
          React.createElement('li', null, React.createElement('b', null, "Sectoral Imbalance:"), " Textile exports fell 15% due to rupee strength"),
          React.createElement('li', null, React.createElement('b', null, "Policy Challenge:"), " Balance IT growth with overall export diversification")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This shows how export success in one sector can hurt others through currency appreciation!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-blue-800 mb-2' }, 'CBSE Board Exam Pattern:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1' },
        React.createElement('li', null, React.createElement('b', null, '1 Mark Questions:'), ' Definitions of BoP, exchange rate, appreciation/depreciation'),
        React.createElement('li', null, React.createElement('b', null, '3-4 Mark Questions:'), ' Differences between exchange rate systems, BoP components'),
        React.createElement('li', null, React.createElement('b', null, '6 Mark Questions:'), ' Case studies on exchange rate changes, BoP analysis, policy implications'),
        React.createElement('li', null, React.createElement('b', null, 'Numerical Problems:'), ' Exchange rate calculations, BoP accounting')
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-red-800 mb-2' }, 'Critical Rules & Formulas:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'BoP Identity:'), ' Current Account + Capital Account + Reserves = 0'),
        React.createElement('li', null, React.createElement('b', null, 'Exchange Rate Quote:'), ' Direct (units of domestic per foreign), Indirect (units of foreign per domestic)'),
        React.createElement('li', null, React.createElement('b', null, 'Appreciation/Depreciation:'), ' Change in domestic currency value in foreign currency terms'),
        React.createElement('li', null, React.createElement('b', null, 'Flexible Rate:'), ' Determined by market demand and supply forces'),
        React.createElement('li', null, React.createElement('b', null, 'Fixed Rate:'), ' Maintained by government intervention and reserves')
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-green-800 mb-2' }, 'Memory Aids & Mnemonics:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'BoP Components:'), ' "Current (trade/services/transfers), Capital (investment/loans)" - C C'),
        React.createElement('li', null, React.createElement('b', null, 'Exchange Systems:'), ' "Flexible (market), Fixed (government), Managed (both)" - F F M'),
        React.createElement('li', null, React.createElement('b', null, 'Currency Changes:'), ' "Appreciation (up, hurts exports), Depreciation (down, helps exports)" - A D'),
        React.createElement('li', null, React.createElement('b', null, 'Forex Market:'), ' "Demand (imports), Supply (exports)" - D S'),
        React.createElement('li', null, React.createElement('b', null, 'India\'s BoP:'), ' "Trade deficit, Remittance surplus, FDI inflows" - T R F')
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg' },
      React.createElement('h4', { className: 'font-bold text-purple-800 mb-2' }, 'Exam Strategy & Tips:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Case Studies:'), ' Practice real-world examples like rupee fluctuations, trade deficits'),
        React.createElement('li', null, React.createElement('b', null, 'Current Affairs:'), ' Link with latest exchange rates, BoP data, RBI interventions'),
        React.createElement('li', null, React.createElement('b', null, 'Numerical Problems:'), ' Master BoP accounting and exchange rate calculations'),
        React.createElement('li', null, React.createElement('b', null, 'Policy Analysis:'), ' Understand how exchange rate changes affect inflation, exports, imports'),
        React.createElement('li', null, React.createElement('b', null, 'Common Mistakes:'), ' Don\'t confuse current vs capital account, appreciation vs revaluation')
      )
    )
  )
};
