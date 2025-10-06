import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter8Module: LearningModule = {
  chapter: "8",
  title: "Indian Economy (1950-1990)",
  overview: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500' },
      React.createElement('h3', { className: 'text-xl font-bold text-blue-800 mb-3' }, '📚 Chapter 8: Indian Economy (1950-1990)'),
      React.createElement('p', { className: 'text-gray-700 mb-4' },
        "This chapter covers India's economic journey from independence to liberalization. We'll explore the socialist planning era, the mixed economy model, and the challenges of building a self-reliant economy. This period transformed India from an agrarian colonial economy to a developing industrial nation."
      ),
      React.createElement('div', { className: 'bg-white p-4 rounded-lg' },
        React.createElement('h4', { className: 'font-semibold text-blue-700 mb-2' }, '🎯 Learning Objectives:'),
        React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
          React.createElement('li', null, "Understand the rationale and goals of Five-Year Plans"),
          React.createElement('li', null, "Analyze land reforms and Green Revolution impact"),
          React.createElement('li', null, "Evaluate industrial policy and public sector role"),
          React.createElement('li', null, "Critically assess import substitution strategy"),
          React.createElement('li', null, "Connect 1950-1990 policies to current economic challenges")
        )
      )
    ),
    React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500' },
      React.createElement('h4', { className: 'font-bold text-yellow-800 mb-2' }, '📝 CBSE Board Exam 2026 Focus:'),
      React.createElement('p', { className: 'text-sm text-gray-700' },
        "Questions often test the balance between achievements and limitations of planned development. Expect critical analysis of why India needed 1991 reforms despite four decades of planning."
      )
    )
  ),
  keyConcepts: [
    {
      title: "Five-Year Plans: India's Development Blueprint",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "India adopted planned economic development through Five-Year Plans, inspired by Soviet Union. The Planning Commission (1950) formulated these plans to achieve rapid economic growth and social justice."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '🎯 Plan Objectives (GEMS Framework):'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Growth:"), " Increase national income and per capita income"),
            React.createElement('li', null, React.createElement('b', null, "Equity:"), " Reduce income inequalities and regional disparities"),
            React.createElement('li', null, React.createElement('b', null, "Modernisation:"), " Adopt modern technology and techniques"),
            React.createElement('li', null, React.createElement('b', null, "Self-reliance:"), " Reduce dependence on foreign countries")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '📊 Plan Performance (1951-1990):'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "First Plan (1951-56):"), " Agriculture focus, 3.6% growth"),
            React.createElement('li', null, React.createElement('b', null, "Second Plan (1956-61):"), " Industry heavy, 4.3% growth"),
            React.createElement('li', null, React.createElement('b', null, "Third Plan (1961-66):"), " Self-sufficiency, affected by wars"),
            React.createElement('li', null, React.createElement('b', null, "Annual Plans (1966-69):"), " Drought recovery period")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "GEMS is a must-remember acronym. Questions often ask why planning was needed and its achievements vs limitations.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-blue-900' },
          "⚠️ Planning Commission was dissolved in 2014, replaced by NITI Aayog!"
        )
      ),
      examFocus: true,
      example: "First Five-Year Plan focused on agriculture because 70% population was dependent on farming. This shows how planning addressed immediate needs.",
      mnemonic: "GEMS: Growth, Equity, Modernisation, Self-reliance - India's planning goals!"
    },
    {
      title: "Land Reforms: Equity in Agriculture",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Land reforms were crucial to address agrarian inequality. The colonial zamindari system concentrated land ownership, leading to exploitation of tenants and low productivity."
        ),
        React.createElement('div', { className: 'bg-amber-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-amber-900 mb-2' }, '🏛️ Three Pillars of Land Reforms:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Abolition of Intermediaries:"), " Zamindars, jagirdars eliminated; land rights to tillers"),
            React.createElement('li', null, React.createElement('b', null, "Land Ceiling:"), " Maximum land holding fixed (varies by state)"),
            React.createElement('li', null, React.createElement('b', null, "Tenancy Reforms:"), " Security to tenants, fair rent, ownership rights")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, '❌ Implementation Challenges:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Political Resistance:"), " Landowners had political power"),
            React.createElement('li', null, React.createElement('b', null, "Legal Loopholes:"), " Benami transfers, fake registrations"),
            React.createElement('li', null, React.createElement('b', null, "Regional Variations:"), " Success varied by state (Kerala vs Bihar)")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Land reforms aimed at equity but faced implementation issues. Questions test both objectives and limitations.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Land reforms were more successful in southern states than northern states!"
        )
      ),
      examFocus: true,
      example: "In West Bengal, Operation Barga (1978) registered 1.5 million sharecroppers, giving them security and higher income share.",
      mnemonic: "Land Reforms: Abolish intermediaries, Fix ceilings, Secure tenants - A F S!"
    },
    {
      title: "Green Revolution: Agricultural Transformation",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Launched in late 1960s, Green Revolution transformed Indian agriculture through modern technology. It made India self-sufficient in food grains, averting famines."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '🌾 Key Components:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "HYV Seeds:"), " High-yielding varieties of wheat, rice, maize"),
            React.createElement('li', null, React.createElement('b', null, "Chemical Fertilizers:"), " Urea, DAP, potash application"),
            React.createElement('li', null, React.createElement('b', null, "Irrigation:"), " Tube wells, canals, rainwater harvesting"),
            React.createElement('li', null, React.createElement('b', null, "Pesticides:"), " Protection against pests and diseases")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, '📈 Impact on Production:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Wheat Production:"), " 11 million tonnes (1960) → 55 million tonnes (1990)"),
            React.createElement('li', null, React.createElement('b', null, "Rice Production:"), " 35 million tonnes (1960) → 74 million tonnes (1990)"),
            React.createElement('li', null, React.createElement('b', null, "Food Security:"), " India became self-sufficient, ended PL-480 dependence")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Green Revolution was successful in Punjab, Haryana, UP but created regional disparities. Questions test both achievements and limitations.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Green Revolution increased inequalities - benefited rich farmers more than small farmers!"
        )
      ),
      examFocus: true,
      example: "Punjab's wheat yield increased from 1.5 tonnes/hectare (1960) to 4.5 tonnes/hectare (1990) due to Green Revolution technology.",
      mnemonic: "Green Revolution: HYV seeds, Fertilizers, Irrigation, Pesticides - H F I P!"
    },
    {
      title: "Industrial Policy Resolution 1956",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "IPR 1956 laid the foundation for India's industrial development. It classified industries into three categories and gave commanding heights to public sector."
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, '🏭 Industry Classification:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Schedule A (17 industries):"), " State monopoly - railways, atomic energy, arms"),
            React.createElement('li', null, React.createElement('b', null, "Schedule B (12 industries):"), " State and private partnership - steel, heavy machinery"),
            React.createElement('li', null, React.createElement('b', null, "Schedule C:"), " Private sector - remaining industries")
          )
        ),
        React.createElement('div', { className: 'bg-indigo-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-indigo-900 mb-2' }, '🎯 Policy Objectives:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Self-reliance:"), " Reduce dependence on foreign technology"),
            React.createElement('li', null, React.createElement('b', null, "Balanced Regional Growth:"), " Industries in backward areas"),
            React.createElement('li', null, React.createElement('b', null, "Employment Generation:"), " Labor-intensive industries"),
            React.createElement('li', null, React.createElement('b', null, "Defense Capability:"), " Strategic industries under state control")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "IPR 1956 was the basis of Second Five-Year Plan. Questions test why public sector was given dominant role.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-blue-900' },
          "⚠️ Public sector created 'navratnas' but also led to inefficiency and losses!"
        )
      ),
      examFocus: true,
      example: "Steel Authority of India (SAIL) was established under IPR 1956, becoming one of India's largest steel producers.",
      mnemonic: "IPR 1956: Schedule A (state monopoly), B (partnership), C (private) - A B C!"
    },
    {
      title: "Import Substitution Industrialization (ISI)",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "ISI was an inward-looking trade strategy to protect domestic industries. It aimed to replace imports with domestic production through tariffs and quotas."
        ),
        React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-orange-900 mb-2' }, '🛡️ Protection Measures:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "High Tariffs:"), " Up to 300-400% on imported goods"),
            React.createElement('li', null, React.createElement('b', null, "Import Quotas:"), " Quantitative restrictions on imports"),
            React.createElement('li', null, React.createElement('b', null, "Licensing:"), " Industrial licenses for capacity expansion"),
            React.createElement('li', null, React.createElement('b', null, "Foreign Exchange Controls:"), " Rationing of foreign currency")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, '⚠️ Limitations of ISI:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "High Costs:"), " Inefficient domestic production"),
            React.createElement('li', null, React.createElement('b', null, "Poor Quality:"), " Lack of competition led to inferior products"),
            React.createElement('li', null, React.createElement('b', null, "Limited Exports:"), " Focus on domestic market only"),
            React.createElement('li', null, React.createElement('b', null, "Foreign Exchange Shortage:"), " Imports still needed for machinery")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "ISI created industrial base but led to 1991 crisis. Questions test both protection benefits and costs.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ ISI strategy was abandoned in 1991 due to balance of payments crisis!"
        )
      ),
      examFocus: true,
      example: "Hindustan Motors produced Ambassador cars under ISI protection, but couldn't compete globally when protection was removed.",
      mnemonic: "ISI: Tariffs, Quotas, Licenses, Controls - T Q L C!"
    },
    {
      title: "Small-Scale Industries (SSI) Promotion",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "SSI sector was promoted for employment generation and balanced regional development. Products were reserved for exclusive SSI production."
        ),
        React.createElement('div', { className: 'bg-teal-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-teal-900 mb-2' }, '🏢 SSI Policy Framework:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Product Reservation:"), " 873 items reserved for SSI (1977)"),
            React.createElement('li', null, React.createElement('b', null, "Credit Facilities:"), " Priority sector lending by banks"),
            React.createElement('li', null, React.createElement('b', null, "Marketing Support:"), " Khadi & Village Industries Commission (KVIC)"),
            React.createElement('li', null, React.createElement('b', null, "Infrastructure:"), " Industrial estates and common facility centers")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '📊 SSI Contribution:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Employment:"), " 60% of industrial employment"),
            React.createElement('li', null, React.createElement('b', null, "Production:"), " 40% of industrial output"),
            React.createElement('li', null, React.createElement('b', null, "Exports:"), " 35% of total exports"),
            React.createElement('li', null, React.createElement('b', null, "Regional Balance:"), " Industries in rural and backward areas")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "SSI policy was successful in employment but criticized for low productivity. Questions test dual objectives.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-blue-900' },
          "⚠️ SSI reservation was reduced to 20 items in 2007 as part of liberalization!"
        )
      ),
      examFocus: true,
      example: "Amul dairy cooperative model shows how SSI can be successful with proper organization and marketing support.",
      mnemonic: "SSI: Reservation, Credit, Marketing, Infrastructure - R C M I!"
    },
    {
      title: "Achievements and Limitations of 1950-1990 Period",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The 1950-1990 period achieved significant progress but also had major limitations. India transformed from food-deficit to self-sufficient nation."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, '✅ Major Achievements:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Food Security:"), " Green Revolution ended famines"),
            React.createElement('li', null, React.createElement('b', null, "Industrial Base:"), " Heavy industries established (steel, machinery)"),
            React.createElement('li', null, React.createElement('b', null, "Infrastructure:"), " Railways, roads, power generation expanded"),
            React.createElement('li', null, React.createElement('b', null, "Human Development:"), " Literacy increased, health facilities expanded"),
            React.createElement('li', null, React.createElement('b', null, "Self-reliance:"), " Reduced dependence on foreign aid")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, '❌ Major Limitations:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Slow Growth:"), " Hindu rate of growth (3.5% annually)"),
            React.createElement('li', null, React.createElement('b', null, "Inequality:"), " Benefits concentrated among rich farmers"),
            React.createElement('li', null, React.createElement('b', null, "Public Sector Inefficiency:"), " Losses, overstaffing, poor management"),
            React.createElement('li', null, React.createElement('b', null, "Balance of Payments Crisis:"), " Foreign exchange shortage in 1991"),
            React.createElement('li', null, React.createElement('b', null, "Unemployment:"), " Jobless growth despite planning")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Questions require balanced analysis. Don't glorify or criticize completely - show both sides.")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ The 1991 reforms were necessitated by the failures of this period!"
        )
      ),
      examFocus: true,
      example: "India's per capita income grew from ₹247 (1950) to ₹1,172 (1990), but still lagged behind East Asian countries.",
      mnemonic: "Achievements vs Limitations: Food security, Industrial base, Infrastructure vs Slow growth, Inequality, Crisis - F I I vs S I C!"
    }
  ],
  keywords: [
    { term: "Five-Year Plans", definition: "Systematic economic planning introduced in 1951 to achieve growth, equity, modernization, and self-reliance through targeted development programs." },
    { term: "Planning Commission", definition: "Constitutional body established in 1950 to formulate Five-Year Plans and advise on economic policy (dissolved in 2014)." },
    { term: "Mixed Economy", definition: "Economic system combining public sector dominance in key industries with private enterprise in others." },
    { term: "GEMS Framework", definition: "Goals of Five-Year Plans: Growth, Equity, Modernisation, Self-reliance." },
    { term: "Land Reforms", definition: "Policy measures to redistribute land ownership, abolish intermediaries, and ensure tenant security." },
    { term: "Land Ceiling", definition: "Maximum limit on land holdings to prevent concentration of land ownership." },
    { term: "Zamindari Abolition", definition: "Elimination of zamindars and jagirdars to transfer land rights directly to tillers." },
    { term: "Green Revolution", definition: "Agricultural transformation through HYV seeds, fertilizers, and irrigation, making India food self-sufficient." },
    { term: "HYV Seeds", definition: "High-Yielding Variety seeds that dramatically increased crop productivity in Green Revolution." },
    { term: "Industrial Policy Resolution 1956", definition: "Policy classifying industries into three schedules, giving public sector commanding heights." },
    { term: "Schedule A Industries", definition: "17 industries reserved exclusively for state monopoly (railways, atomic energy, arms)." },
    { term: "Schedule B Industries", definition: "12 industries for joint public-private sector operation (steel, heavy machinery)." },
    { term: "Import Substitution", definition: "Trade policy protecting domestic industries through tariffs and quotas to replace imports." },
    { term: "Permit License Raj", definition: "System of extensive industrial licensing and regulations (1947-1990)." },
    { term: "Small-Scale Industries", definition: "Industries with investment up to ₹1 crore, promoted for employment and regional balance." },
    { term: "Product Reservation", definition: "Policy reserving certain products exclusively for small-scale sector production." },
    { term: "Khadi & Village Industries Commission", definition: "Organization promoting rural industries and traditional handicrafts." },
    { term: "Hindu Rate of Growth", definition: "India's slow economic growth rate of 3.5% annually during 1950-1980." },
    { term: "Balance of Payments Crisis", definition: "Foreign exchange shortage in 1991 that necessitated economic liberalization." },
    { term: "Public Sector Enterprises", definition: "State-owned companies in strategic industries (navratnas like SAIL, BHEL)." }
  ],
  caseStudies: [
    {
      title: "Green Revolution: Punjab's Agricultural Miracle",
      scenario: "Punjab adopted Green Revolution technologies in the late 1960s. By 1990, wheat production increased from 3 million tonnes to 16 million tonnes, making Punjab India's breadbasket. However, this success came with environmental costs and increased inequality.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Green Revolution Impact Analysis:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Productivity Gains:"), " Wheat yield increased from 1.5 to 4.5 tonnes/hectare"),
          React.createElement('li', null, React.createElement('b', null, "Food Security:"), " India became self-sufficient, ended PL-480 imports"),
          React.createElement('li', null, React.createElement('b', null, "Economic Inequality:"), " Rich farmers benefited more than small farmers"),
          React.createElement('li', null, React.createElement('b', null, "Environmental Costs:"), " Groundwater depletion, soil degradation, chemical pollution")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This shows how technology can transform agriculture but also create new challenges!")
      )
    },
    {
      title: "Bhilai Steel Plant: Public Sector Success Story",
      scenario: "Established in 1959 with Soviet collaboration, Bhilai Steel Plant became India's largest steel producer. It created employment, reduced import dependence, and contributed to industrial development, but also faced efficiency challenges.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Public Sector Industrialization:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Strategic Importance:"), " Steel production reduced import dependence"),
          React.createElement('li', null, React.createElement('b', null, "Employment Generation:"), " Direct employment for 40,000+ workers"),
          React.createElement('li', null, React.createElement('b', null, "Regional Development:"), " Industrial town created in backward Chhattisgarh"),
          React.createElement('li', null, React.createElement('b', null, "Efficiency Issues:"), " Overstaffing and losses in later years")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This demonstrates how public sector built India's industrial foundation!")
      )
    },
    {
      title: "Amul: Cooperative Success in Dairy Sector",
      scenario: "Started in 1946 as Kaira District Cooperative Milk Producers' Union, Amul became a model for cooperative development. By 1990, it processed 6 lakh litres of milk daily and created a successful marketing network.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Cooperative Model in Agriculture:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Farmer Empowerment:"), " Direct marketing eliminated middlemen exploitation"),
          React.createElement('li', null, React.createElement('b', null, "Value Addition:"), " Processing milk into butter, cheese, and other products"),
          React.createElement('li', null, React.createElement('b', null, "Marketing Network:"), " 'Operation Flood' created national milk grid"),
          React.createElement('li', null, React.createElement('b', null, "Economic Impact:"), " Increased farmer income and created employment")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-700' }, "This shows how cooperatives can succeed where individual farmers struggle!")
      )
    },
    {
      title: "1991 Balance of Payments Crisis",
      scenario: "By 1991, India's foreign exchange reserves fell to $1.1 billion, barely enough for two weeks of imports. This crisis was the culmination of 40 years of inward-looking policies and forced India to liberalize its economy.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Causes of the Crisis:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "High Import Intensity:"), " Industrialization required machinery imports"),
          React.createElement('li', null, React.createElement('b', null, "Oil Price Shock:"), " 1973 and 1979 oil crises increased import bills"),
          React.createElement('li', null, React.createElement('b', null, "Gulf War Impact:"), " Remittance inflows from Gulf countries stopped"),
          React.createElement('li', null, React.createElement('b', null, "Policy Failures:"), " Inefficient public sector and lack of export orientation")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This crisis ended the era of planning and ushered in liberalization!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-blue-800 mb-2' }, "CBSE Board Exam Pattern (2026):"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1' },
        React.createElement('li', null, React.createElement('b', null, "1 Mark:"), " Definition of Five-Year Plans, Green Revolution"),
        React.createElement('li', null, React.createElement('b', null, "3 Marks:"), " Explain IPR 1956 or land reforms"),
        React.createElement('li', null, React.createElement('b', null, "4 Marks:"), " Analyze achievements/limitations of planning"),
        React.createElement('li', null, React.createElement('b', null, "6 Marks:"), " Discuss why India needed 1991 reforms")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-red-800 mb-2' }, "Critical Rules for High Scores:"),
      React.createElement('ol', { className: 'list-decimal pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, "Balanced Analysis:"), " Always discuss both achievements and limitations"),
        React.createElement('li', null, React.createElement('b', null, "Connect to Present:"), " Link 1950-90 policies to current economic challenges"),
        React.createElement('li', null, React.createElement('b', null, "Use Statistics:"), " Support arguments with data (growth rates, production figures)"),
        React.createElement('li', null, React.createElement('b', null, "Structure Answers:"), " Introduction → Body (points with examples) → Conclusion")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-purple-800 mb-2' }, "Memory Aids & Mnemonics:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', null,
          React.createElement('p', { className: 'font-semibold' }, "Five-Year Plan Goals:"),
          React.createElement('p', { className: 'text-lg font-mono bg-white p-2 rounded' }, "GEMS (Growth, Equity, Modernisation, Self-reliance)")
        ),
        React.createElement('div', null,
          React.createElement('p', { className: 'font-semibold' }, "Land Reforms:"),
          React.createElement('p', { className: 'text-lg font-mono bg-white p-2 rounded' }, "A F S (Abolish intermediaries, Fix ceilings, Secure tenants)")
        ),
        React.createElement('div', null,
          React.createElement('p', { className: 'font-semibold' }, "IPR 1956 Schedules:"),
          React.createElement('p', { className: 'text-lg font-mono bg-white p-2 rounded' }, "A B C (A: State monopoly, B: Partnership, C: Private)")
        ),
        React.createElement('div', null,
          React.createElement('p', { className: 'font-semibold' }, "Key Statistics to Remember:"),
          React.createElement('ul', { className: 'list-disc pl-5' },
            React.createElement('li', null, "Green Revolution: Wheat 11M → 55M tonnes (1960-90)"),
            React.createElement('li', null, "Steel production: 1M → 15M tonnes (1950-90)"),
            React.createElement('li', null, "GDP growth: 3.5% (Hindu rate of growth)"),
            React.createElement('li', null, "Foreign reserves 1991: $1.1 billion")
          )
        )
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg' },
      React.createElement('h4', { className: 'font-bold text-green-800 mb-2' }, "Exam Strategy & Tips:"),
      React.createElement('div', { className: 'space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "For 4-mark questions:"), " Structure as: 1 mark definition + 2 marks explanation + 1 mark impact/criticism"),
        React.createElement('p', null, React.createElement('b', null, "For 6-mark questions:"), " Use PEEL structure (Point, Evidence, Explanation, Link to present)"),
        React.createElement('p', null, React.createElement('b', null, "Common Mistakes to Avoid:"), " Don't glorify planning era completely; show why reforms were needed"),
        React.createElement('p', null, React.createElement('b', null, "Time Management:"), " 6-mark questions need 8-10 minutes with balanced analysis"),
        React.createElement('p', null, React.createElement('b', null, "Scoring Points:"), " Use transition words, underline key terms, provide specific examples and statistics")
      )
    )
  )
};
