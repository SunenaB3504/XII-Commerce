import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Introduction to Macroeconomics",
  overview: "Master macroeconomic fundamentals essential for CBSE Board Exams 2026. This chapter covers core macro concepts, micro-macro distinction, and economic sectors - frequently tested topics worth 10-12 marks. Learn with exam-focused explanations, practical examples, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Microeconomics vs. Macroeconomics",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The fundamental distinction between micro and macro economics forms the foundation of economic analysis. Understanding this difference is crucial for CBSE exams."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔬 Microeconomics (Individual Level):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Scope:"), " Studies individual economic units like households, firms, and markets"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Price determination, consumer behavior, producer decisions"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " How a consumer chooses between tea and coffee, pricing of a single product"),
            React.createElement('li', null, React.createElement('b', null, "Tools:"), " Demand and supply analysis, marginal analysis, market structures")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🌍 Macroeconomics (Aggregate Level):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Scope:"), " Studies the economy as a whole and its major aggregates"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " National income, inflation, unemployment, economic growth"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Why unemployment rises during recession, causes of inflation"),
            React.createElement('li', null, React.createElement('b', null, "Tools:"), " Aggregate demand and supply, fiscal and monetary policies")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Micro studies trees, Macro studies the forest. Both are essential for complete economic understanding!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ The whole economy behaves differently from the sum of individual parts - this is the core reason for macroeconomics!"
        )
      ),
      examFocus: true,
      example: "Micro: Why does the price of onions increase? Macro: Why does the general price level (inflation) increase?",
      mnemonic: "Micro (individual), Macro (aggregate) - M I M A!"
    },
    {
      title: "Why Study Macroeconomics?",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Macroeconomics emerged as a distinct field due to limitations of microeconomic analysis in explaining aggregate economic phenomena."
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🎯 Key Reasons for Macroeconomics:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Aggregate Variables:"), " Studies economy-wide totals like GDP, inflation, unemployment"),
            React.createElement('li', null, React.createElement('b', null, "Interdependence:"), " Economic variables are interconnected at macro level"),
            React.createElement('li', null, React.createElement('b', null, "Policy Making:"), " Helps governments formulate fiscal and monetary policies"),
            React.createElement('li', null, React.createElement('b', null, "Economic Stability:"), " Analyzes business cycles, inflation, and unemployment"),
            React.createElement('li', null, React.createElement('b', null, "Global Context:"), " Studies international trade, balance of payments, exchange rates")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Macroeconomics helps us understand why the economy sometimes behaves in ways that seem counterintuitive!"
        )
      ),
      examFocus: true,
      mnemonic: "Aggregate, Interdependence, Policy, Stability, Global - A I P S G!"
    },
    {
      title: "Emergence of Macroeconomics",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Macroeconomics gained prominence after the Great Depression, challenging classical economic thought and leading to Keynesian revolution."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📉 The Great Depression (1929-1939):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Worldwide economic downturn with massive unemployment"),
            React.createElement('li', null, "Classical economics failed to explain prolonged recession"),
            React.createElement('li', null, "GDP fell by 30%, unemployment reached 25% in USA"),
            React.createElement('li', null, "Demonstrated limitations of laissez-faire policies")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📖 Keynesian Revolution:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "John Maynard Keynes:"), " Published 'General Theory' in 1936"),
            React.createElement('li', null, React.createElement('b', null, "Key Insight:"), " Aggregate demand determines economic output"),
            React.createElement('li', null, React.createElement('b', null, "Policy Prescription:"), " Government intervention during recessions"),
            React.createElement('li', null, React.createElement('b', null, "Impact:"), " Shifted focus from micro to macro analysis")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "The Great Depression showed that markets don't always self-correct - government intervention was needed!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Before Keynes, economists believed in 'invisible hand' - after Keynes, they recognized need for 'visible hand' of government!"
        )
      ),
      examFocus: true,
      example: "Classical economists believed wages would fall to clear labor markets. Keynes showed that falling wages might worsen depression by reducing demand.",
      mnemonic: "Great Depression led to Keynesian Revolution - G D K R!"
    },
    {
      title: "Four Sectors of the Economy",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Macroeconomics views the economy through four interconnected sectors whose interactions determine economic outcomes and policy effectiveness."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🏠 Households Sector:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Role:"), " Ultimate consumers and resource owners"),
            React.createElement('li', null, React.createElement('b', null, "Supplies:"), " Labor, capital, entrepreneurship to firms"),
            React.createElement('li', null, React.createElement('b', null, "Demands:"), " Goods, services, income from firms and government"),
            React.createElement('li', null, React.createElement('b', null, "Economic Decisions:"), " Consumption, saving, labor supply")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🏭 Firms Sector:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Role:"), " Production units that transform inputs into outputs"),
            React.createElement('li', null, React.createElement('b', null, "Demands:"), " Labor, capital, raw materials from households and abroad"),
            React.createElement('li', null, React.createElement('b', null, "Supplies:"), " Goods, services, income to households and government"),
            React.createElement('li', null, React.createElement('b', null, "Economic Decisions:"), " Production, pricing, investment")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🏛️ Government Sector:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Role:"), " Regulator, stabilizer, and provider of public goods"),
            React.createElement('li', null, React.createElement('b', null, "Functions:"), " Taxation, public expenditure, regulation"),
            React.createElement('li', null, React.createElement('b', null, "Economic Impact:"), " Fiscal policy affects aggregate demand"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Building roads, defense, welfare programs")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, "🌐 External Sector (Rest of the World):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Role:"), " Trading partner and capital flow source"),
            React.createElement('li', null, React.createElement('b', null, "Transactions:"), " Exports, imports, foreign investment"),
            React.createElement('li', null, React.createElement('b', null, "Economic Impact:"), " Exchange rates, balance of payments"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Foreign direct investment, remittances, tourism")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 These sectors are interdependent - a change in one affects all others!"
        )
      ),
      examFocus: true,
      example: "During COVID-19, government increased spending (government sector) to support households and firms, while external sector was affected by reduced global trade.",
      mnemonic: "Households, Firms, Government, External - H F G E!"
    },
    {
      title: "Circular Flow of Income",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The circular flow model shows how income and expenditure flow between different sectors, illustrating the interdependence of economic activities."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔄 Two-Sector Model (Households + Firms):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Real Flow:"), " Households supply factors → Firms produce goods → Households consume"),
            React.createElement('li', null, React.createElement('b', null, "Money Flow:"), " Firms pay wages → Households spend on goods → Firms receive revenue"),
            React.createElement('li', null, React.createElement('b', null, "Equilibrium:"), " Income = Expenditure = Output")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔄 Three-Sector Model (Adding Government):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Government Injection:"), " Taxes collected, government spending"),
            React.createElement('li', null, React.createElement('b', null, "Leakages:"), " Taxes reduce household spending power"),
            React.createElement('li', null, React.createElement('b', null, "Fiscal Policy:"), " Government can influence circular flow")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🔄 Four-Sector Model (Adding External Sector):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Exports:"), " Injections that increase domestic income"),
            React.createElement('li', null, React.createElement('b', null, "Imports:"), " Leakages that reduce domestic spending"),
            React.createElement('li', null, React.createElement('b', null, "Net Exports:"), " (X - M) affects aggregate demand")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Circular flow shows how sectors are interdependent - a disruption in one sector affects the entire economy!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Equilibrium occurs when injections equal leakages in the circular flow!"
        )
      ),
      examFocus: true,
      mnemonic: "Real flow (goods), Money flow (payments) - R M!"
    },
    {
      title: "Stock vs Flow Variables",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Understanding the difference between stock and flow variables is crucial for macroeconomic analysis and measurement."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Stock Variables:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Measured at a point in time"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Wealth, capital stock, money supply, population"),
            React.createElement('li', null, React.createElement('b', null, "Units:"), " Absolute quantities (rupees, tons, people)"),
            React.createElement('li', null, React.createElement('b', null, "Time Dimension:"), " No time dimension")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🌊 Flow Variables:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Measured over a period of time"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Income, investment, savings, exports"),
            React.createElement('li', null, React.createElement('b', null, "Units:"), " Per unit time (rupees per month, tons per year)"),
            React.createElement('li', null, React.createElement('b', null, "Time Dimension:"), " Has time dimension")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Stock is a photograph (point in time), Flow is a video (over time)!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Confusing stock and flow leads to incorrect economic analysis!"
        )
      ),
      examFocus: true,
      example: "Stock: Your bank balance on 1st January (₹50,000). Flow: Your monthly salary (₹25,000 per month).",
      mnemonic: "Stock (point), Flow (period) - S P F P!"
    },
    {
      title: "Positive vs Normative Economics",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Economics can be studied from two perspectives - what is (positive) and what ought to be (normative)."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✅ Positive Economics:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Factual, objective, scientific"),
            React.createElement('li', null, React.createElement('b', null, "Questions:"), " What is? What was? What will be?"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " 'Unemployment rate is 7%'; 'GDP grew by 5%'"),
            React.createElement('li', null, React.createElement('b', null, "Testability:"), " Can be tested and verified")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🎯 Normative Economics:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Opinion-based, subjective, value judgments"),
            React.createElement('li', null, React.createElement('b', null, "Questions:"), " What ought to be? What should be done?"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " 'Government should increase minimum wage'; 'Inflation target should be 4%'"),
            React.createElement('li', null, React.createElement('b', null, "Testability:"), " Cannot be tested scientifically")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Positive economics describes 'what is', normative economics prescribes 'what ought to be'!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Policy making involves both - positive analysis for understanding, normative for recommendations!"
        )
      ),
      examFocus: true,
      mnemonic: "Positive (facts), Normative (values) - P F N V!"
    }
  ],
  keywords: [
    { term: "Macroeconomics", definition: "The branch of economics that studies the economy as a whole, focusing on aggregate variables like national income, unemployment, and inflation." },
    { term: "Microeconomics", definition: "The branch of economics that studies the behavior of individual economic agents like households, firms, and their interaction in markets." },
    { term: "Great Depression", definition: "A severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States, leading to the emergence of macroeconomics." },
    { term: "John Maynard Keynes", definition: "A British economist whose ideas fundamentally changed macroeconomics and advocated government intervention during economic downturns." },
    { term: "Households Sector", definition: "The sector consisting of individuals who consume goods and services and supply factors of production (labor, capital)." },
    { term: "Firms Sector", definition: "The sector consisting of production units that hire factors of production and produce goods and services for sale." },
    { term: "Government Sector", definition: "The sector that performs functions like taxation, public expenditure, and regulation to influence economic activity." },
    { term: "External Sector", definition: "The sector representing economic transactions of the domestic economy with the rest of the world (exports, imports, capital flows)." },
    { term: "Circular Flow of Income", definition: "A model showing the flow of income and expenditure between different sectors of the economy." },
    { term: "Stock Variables", definition: "Economic variables measured at a specific point in time (e.g., wealth, capital stock, money supply)." },
    { term: "Flow Variables", definition: "Economic variables measured over a period of time (e.g., income, investment, savings)." },
    { term: "Positive Economics", definition: "The study of economics based on facts and objective analysis (what is, what was, what will be)." },
    { term: "Normative Economics", definition: "The study of economics based on value judgments and opinions (what ought to be, what should be done)." },
    { term: "Aggregate Demand", definition: "Total demand for goods and services in the economy at a given price level." },
    { term: "Aggregate Supply", definition: "Total supply of goods and services that firms in the economy are willing to produce at a given price level." },
    { term: "Fiscal Policy", definition: "Government policy regarding taxation and public expenditure to influence aggregate demand." },
    { term: "Monetary Policy", definition: "Central bank policy regarding money supply and interest rates to influence economic activity." },
    { term: "Business Cycle", definition: "The fluctuations in economic activity characterized by periods of expansion and contraction." },
    { term: "Inflation", definition: "A sustained increase in the general price level of goods and services in an economy." },
    { term: "Unemployment", definition: "The state of being without work but available for and seeking employment." },
    { term: "Economic Growth", definition: "An increase in the capacity of an economy to produce goods and services over time." }
  ],
  caseStudies: [
    {
      title: "The Paradox of Thrift",
      scenario: "An economics teacher explains to students: 'If one person in a village decides to save more money by cutting down on spending, they become wealthier. This is rational microeconomic behavior. However, if everyone in the village starts saving more and spending less, the local shops will lose customers. Shop owners will fire workers, and the overall income of the village will fall, leaving everyone with less money to save.'",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Micro vs Macro Distinction:"), " What is beneficial at individual level (micro) can be harmful at aggregate level (macro)."),
          React.createElement('li', null, React.createElement('b', null, "Interdependence of Sectors:"), " Households' saving decision affects firms' production and employment."),
          React.createElement('li', null, React.createElement('b', null, "Circular Flow Disruption:"), " Reduced consumption (leakage) leads to reduced income and further reduction in spending."),
          React.createElement('li', null, React.createElement('b', null, "Policy Implication:"), " During recessions, encouraging spending rather than saving may be better for the economy.")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This illustrates why macroeconomics studies aggregates - the whole behaves differently from individual parts!")
      )
    },
    {
      title: "COVID-19 and Sectoral Interdependence",
      scenario: "During the COVID-19 pandemic, lockdowns severely impacted the Indian economy. Households lost jobs, firms faced production halts, government increased spending on relief, and external sector saw reduced exports. The RBI cut interest rates while government announced stimulus packages worth ₹20 lakh crores.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Four Sectors Interaction:"), " Health crisis affected all sectors simultaneously."),
          React.createElement('li', null, React.createElement('b', null, "Government Intervention:"), " Fiscal policy (increased spending) and monetary policy (rate cuts) to stabilize economy."),
          React.createElement('li', null, React.createElement('b', null, "Circular Flow Disruption:"), " Lockdowns broke the normal flow between sectors."),
          React.createElement('li', null, React.createElement('b', null, "Macro Policy Response:"), " Coordinated action by government and central bank to restore economic equilibrium.")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how macroeconomic policies coordinate across sectors during crises!")
      )
    },
    {
      title: "Stock vs Flow in Personal Finance",
      scenario: "Rahul checks his bank account and sees ₹2 lakh balance (stock). He earns ₹50,000 monthly salary (flow) but spends ₹45,000 on expenses (flow). His wealth increases by ₹5,000 per month (flow) through saving.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Stock Variables:"), " Bank balance measured at a point in time."),
          React.createElement('li', null, React.createElement('b', null, "Flow Variables:"), " Salary, expenses, and savings measured over time."),
          React.createElement('li', null, React.createElement('b', null, "Relationship:"), " Change in stock equals flow (bank balance increases by savings flow)."),
          React.createElement('li', null, React.createElement('b', null, "Economic Application:"), " National wealth (stock) grows through savings and investment (flows).")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This demonstrates how stock and flow concepts apply to both personal and national economics!")
      )
    },
    {
      title: "Positive vs Normative in GST Debate",
      scenario: "During GST implementation, some economists said 'GST will increase tax collection by 20%' (positive statement). Others argued 'GST should be simpler with fewer rates' (normative statement).",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Positive Economics:"), " Factual claim about tax collection increase (can be tested)."),
          React.createElement('li', null, React.createElement('b', null, "Normative Economics:"), " Value judgment about tax structure (cannot be scientifically tested)."),
          React.createElement('li', null, React.createElement('b', null, "Policy Making:"), " Positive analysis informs, normative analysis guides decisions."),
          React.createElement('li', null, React.createElement('b', null, "Economic Debate:"), " Both perspectives needed for comprehensive policy evaluation.")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This shows how positive and normative economics complement each other in policy discussions!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 1: Introduction to Macroeconomics at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Micro studies individuals/firms/markets; Macro studies aggregates like GDP, inflation, unemployment"),
      React.createElement('li', null, "Macroeconomics emerged after Great Depression (1929) due to Keynes' General Theory (1936)"),
      React.createElement('li', null, "Four sectors: Households (consumers/suppliers), Firms (producers), Government (regulator), External (world trade)"),
      React.createElement('li', null, "Circular flow: Real flow (goods/services) and money flow (payments) between sectors"),
      React.createElement('li', null, "Stock variables (point in time): wealth, money supply; Flow variables (over time): income, investment"),
      React.createElement('li', null, "Positive economics (facts): 'Unemployment is 7%'; Normative economics (values): 'Minimum wage should increase'")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning of macro/micro, sectors, stock/flow, positive/normative"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain micro vs macro with examples, emergence of macroeconomics"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Four sectors of economy, circular flow of income"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on sectoral interdependence, paradox of thrift")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Macro studies aggregates, not individuals - whole ≠ sum of parts"),
        React.createElement('li', null, "Great Depression proved limitations of laissez-faire economics"),
        React.createElement('li', null, "All four sectors are interdependent - change in one affects others"),
        React.createElement('li', null, "Stock measured at point in time, flow over period of time"),
        React.createElement('li', null, "Positive statements are testable facts, normative are value judgments")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Micro vs Macro: Micro (individual trees), Macro (whole forest) - M T M F"),
        React.createElement('p', { className: 'font-semibold' }, "Four Sectors: Households, Firms, Government, External - H F G E"),
        React.createElement('p', { className: 'font-semibold' }, "Circular Flow: Real flow (goods), Money flow (payments) - R G M P"),
        React.createElement('p', { className: 'font-semibold' }, "Stock vs Flow: Stock (photograph/point), Flow (video/period) - S P F P"),
        React.createElement('p', { className: 'font-semibold' }, "Positive vs Normative: Positive (facts/what is), Normative (values/what ought) - P W N W"),
        React.createElement('p', { className: 'font-semibold' }, "Keynes Contribution: Great Depression → General Theory → Government Intervention - G D G T G I")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Always give real-world examples when explaining concepts"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse micro and macro - micro is individual, macro is aggregate"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain why macroeconomics emerged (Great Depression limitation)"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that all four sectors interact in circular flow"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Use diagrams for circular flow and sectoral interactions"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Mix stock and flow - stock is at a point, flow is over time")
      )
    )
  )
};