import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "National Income Accounting",
  overview: "Master national income measurement essential for CBSE Board Exams 2026. This chapter covers GDP calculation methods, circular flow, and key aggregates - frequently tested topics worth 15-18 marks. Learn with exam-focused explanations, practical examples, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Circular Flow of Income",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The circular flow model illustrates how income and expenditure continuously circulate between different sectors of the economy, creating a self-sustaining system."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔄 Two-Sector Model (Households + Firms):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Real Flow:"), " Households supply factors of production (labor, capital, land) to firms"),
            React.createElement('li', null, React.createElement('b', null, "Money Flow:"), " Firms pay wages, rent, interest, and profits to households"),
            React.createElement('li', null, React.createElement('b', null, "Expenditure Flow:"), " Households spend income on goods and services produced by firms"),
            React.createElement('li', null, React.createElement('b', null, "Equilibrium:"), " Total income = Total expenditure = Total output")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔄 Three-Sector Model (Adding Government):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Government Injections:"), " Government spending (G) and taxation"),
            React.createElement('li', null, React.createElement('b', null, "Leakages:"), " Taxes reduce household disposable income"),
            React.createElement('li', null, React.createElement('b', null, "Fiscal Policy:"), " Government can influence circular flow through budget")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Circular flow shows the interdependence of sectors - a change in one sector affects the entire flow!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Equilibrium occurs when injections equal leakages in the circular flow!"
        )
      ),
      examFocus: true,
      example: "If households suddenly save more, consumption decreases, firms produce less, employment falls, and household income decreases further.",
      mnemonic: "Real flow (factors), Money flow (payments), Expenditure flow (spending) - R F M P E S!"
    },
    {
      title: "Stock vs Flow Variables",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Understanding the distinction between stock and flow variables is crucial for national income accounting and economic analysis."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Stock Variables (Point in Time):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Measured at a specific point in time"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Capital stock, money supply, foreign exchange reserves"),
            React.createElement('li', null, React.createElement('b', null, "National Income Examples:"), " Wealth, debt outstanding, inventory levels"),
            React.createElement('li', null, React.createElement('b', null, "Units:"), " Absolute quantities (rupees, tons, people)")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🌊 Flow Variables (Over Time):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Measured over a period of time"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Investment, savings, exports, government spending"),
            React.createElement('li', null, React.createElement('b', null, "National Income Examples:"), " GDP, consumption, depreciation, net exports"),
            React.createElement('li', null, React.createElement('b', null, "Units:"), " Per unit time (rupees per year, tons per month)")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Stock is like a photograph (captures a moment), Flow is like a video (shows movement over time)!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Confusing stock and flow leads to incorrect economic measurement and analysis!"
        )
      ),
      examFocus: true,
      example: "Stock: India's foreign exchange reserves on 31st March 2024 (₹57,000 crores). Flow: India's exports during 2023-24 (₹40,00,000 crores).",
      mnemonic: "Stock (point/photo), Flow (period/video) - S P F P!"
    },
    {
      title: "Final Goods vs Intermediate Goods",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The distinction between final and intermediate goods is fundamental to avoid double counting in national income estimation."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🎯 Final Goods:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Goods that are ready for final use by consumers"),
            React.createElement('li', null, React.createElement('b', null, "Purpose:"), " Meant for final consumption or investment"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Bread bought by consumer, car bought by household, machinery bought by firm"),
            React.createElement('li', null, React.createElement('b', null, "Inclusion in GDP:"), " Fully included in national income")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔧 Intermediate Goods:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Goods used as inputs in production of other goods"),
            React.createElement('li', null, React.createElement('b', null, "Purpose:"), " Will undergo further processing or transformation"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Flour used by bakery, steel used by car manufacturer"),
            React.createElement('li', null, React.createElement('b', null, "Inclusion in GDP:"), " Not included directly (value added method avoids double counting)")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🚨 Double Counting Problem:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "What happens:"), " If intermediate goods are included, same value gets counted multiple times"),
            React.createElement('li', null, React.createElement('b', null, "Example:"), " Wheat → Flour → Bread: Including all would count wheat value thrice"),
            React.createElement('li', null, React.createElement('b', null, "Solution:"), " Only final goods or value added at each stage")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Final goods are the end of the production chain; intermediate goods are steps along the way!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Same physical good can be final for one user and intermediate for another!"
        )
      ),
      examFocus: true,
      example: "Cotton is intermediate when bought by textile mill, but final when bought by consumer for stuffing pillows.",
      mnemonic: "Final (end use), Intermediate (further processing) - F E I F!"
    },
    {
      title: "Three Methods of Calculating GDP",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "GDP can be calculated using three different approaches, each providing a different perspective on economic activity. All methods should yield identical results."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🏭 Product Method (Value Added Method):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Approach:"), " Sum of Gross Value Added (GVA) by all producing sectors"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " GVA = Value of Output - Intermediate Consumption"),
            React.createElement('li', null, React.createElement('b', null, "Sectors:"), " Agriculture, Industry, Services (Primary, Secondary, Tertiary)"),
            React.createElement('li', null, React.createElement('b', null, "Advantage:"), " Shows contribution of different sectors to GDP")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "💰 Income Method:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Approach:"), " Sum of all factor incomes generated in the economy"),
            React.createElement('li', null, React.createElement('b', null, "Components:"), " Compensation of employees + Operating surplus + Mixed income"),
            React.createElement('li', null, React.createElement('b', null, "Factor Incomes:"), " Wages, salaries, rent, interest, profits"),
            React.createElement('li', null, React.createElement('b', null, "Advantage:"), " Shows income distribution in the economy")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🛒 Expenditure Method:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Approach:"), " Sum of final expenditures on goods and services"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " GDP = C + I + G + (X - M)"),
            React.createElement('li', null, React.createElement('b', null, "Components:"), " Consumption + Investment + Government spending + Net exports"),
            React.createElement('li', null, React.createElement('b', null, "Advantage:"), " Shows demand-side contribution to GDP")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "All three methods measure the same GDP - they just approach it from different angles!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ The three methods are complementary, not contradictory - they check each other's accuracy!"
        )
      ),
      examFocus: true,
      example: "Product Method: Sum of value added by Tata Steel, Tata Motors, Tata Consultancy. Income Method: Salaries of Tata employees + profits of Tata companies. Expenditure Method: Money spent by consumers on Tata products + Tata's investment + Tata's exports.",
      mnemonic: "Product (output), Income (earnings), Expenditure (spending) - P O I E E S!"
    },
    {
      title: "Key National Income Aggregates",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "National income accounting uses various aggregates to measure economic performance. Understanding their relationships is crucial for CBSE exams."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💰 Gross vs Net Concepts:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Gross Domestic Product (GDP):"), " Total value of goods and services produced within the country"),
            React.createElement('li', null, React.createElement('b', null, "Net Domestic Product (NDP):"), " GDP minus depreciation (consumption of fixed capital)"),
            React.createElement('li', null, React.createElement('b', null, "Depreciation:"), " Wear and tear of capital goods during production process")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🏠 Domestic vs National Concepts:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Gross National Product (GNP):"), " GDP plus net factor income from abroad (NFIA)"),
            React.createElement('li', null, React.createElement('b', null, "Net National Product (NNP):"), " GNP minus depreciation"),
            React.createElement('li', null, React.createElement('b', null, "NFIA:"), " Income earned by residents abroad minus income earned by foreigners in domestic territory")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🏷️ Market Price vs Factor Cost:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "At Market Price:"), " Includes indirect taxes, excludes subsidies"),
            React.createElement('li', null, React.createElement('b', null, "At Factor Cost:"), " Excludes indirect taxes, includes subsidies"),
            React.createElement('li', null, React.createElement('b', null, "Net Indirect Taxes (NIT):"), " Indirect taxes minus subsidies")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🔄 Key Relationships:"),
          React.createElement('div', { className: 'space-y-2 text-sm' },
            React.createElement('p', null, React.createElement('b', null, "GDP(MP) - Depreciation = NDP(MP)")),
            React.createElement('p', null, React.createElement('b', null, "NDP(MP) + NFIA = NNP(MP)")),
            React.createElement('p', null, React.createElement('b', null, "NNP(MP) - NIT = NNP(FC)")),
            React.createElement('p', null, React.createElement('b', null, "NNP(FC) = National Income"))
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "National Income (NNP at FC) is the most comprehensive measure of economic welfare!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Always specify whether aggregates are at market price or factor cost!"
        )
      ),
      examFocus: true,
      mnemonic: "Gross-Net (depreciation), Domestic-National (NFIA), Market-Factor (NIT) - G N D N M F!"
    },
    {
      title: "Real vs Nominal GDP",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Distinguishing between real and nominal GDP is essential for measuring true economic growth and comparing economic performance over time."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💵 Nominal GDP:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " GDP measured at current market prices"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Sum of (Quantity × Current Price) for all goods and services"),
            React.createElement('li', null, React.createElement('b', null, "Includes:"), " Changes in both quantities and prices"),
            React.createElement('li', null, React.createElement('b', null, "Limitation:"), " Cannot distinguish between real growth and price changes")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Real GDP:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " GDP measured at constant (base year) prices"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Sum of (Quantity × Base Year Price) for all goods and services"),
            React.createElement('li', null, React.createElement('b', null, "Measures:"), " Actual change in physical output over time"),
            React.createElement('li', null, React.createElement('b', null, "Advantage:"), " True measure of economic growth")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "📈 GDP Deflator:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " (Nominal GDP ÷ Real GDP) × 100"),
            React.createElement('li', null, React.createElement('b', null, "Purpose:"), " Measures the level of prices in the economy"),
            React.createElement('li', null, React.createElement('b', null, "Use:"), " Compare inflation rates across countries and time")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Real GDP adjusts for inflation; Nominal GDP includes price changes - use Real GDP for growth comparison!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ If prices rise, Nominal GDP increases even if output stays same - Real GDP corrects this!"
        )
      ),
      examFocus: true,
      example: "If India's Nominal GDP grows from ₹100 lakh to ₹120 lakh, but prices doubled, Real GDP shows no growth (₹100 lakh at constant prices).",
      mnemonic: "Nominal (current prices), Real (constant prices), Deflator (price level) - N C R C D P!"
    },
    {
      title: "GDP and Economic Welfare",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "While GDP is a comprehensive measure of economic activity, it has limitations as a measure of economic welfare and human well-being."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✅ What GDP Measures Well:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Market Transactions:"), " All legal market exchanges"),
            React.createElement('li', null, React.createElement('b', null, "Economic Growth:"), " Changes in production capacity over time"),
            React.createElement('li', null, React.createElement('b', null, "Sector Contributions:"), " Relative importance of different sectors"),
            React.createElement('li', null, React.createElement('b', null, "International Comparisons:"), " Economic size and performance across countries")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "❌ Limitations of GDP as Welfare Measure:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Non-Market Activities:"), " Household work, volunteer services not included"),
            React.createElement('li', null, React.createElement('b', null, "Underground Economy:"), " Illegal activities, black market transactions excluded"),
            React.createElement('li', null, React.createElement('b', null, "Externalities:"), " Pollution, environmental damage not accounted for"),
            React.createElement('li', null, React.createElement('b', null, "Income Distribution:"), " Doesn't show how income is distributed"),
            React.createElement('li', null, React.createElement('b', null, "Quality of Life:"), " Health, education, leisure not directly measured"),
            React.createElement('li', null, React.createElement('b', null, "Sustainability:"), " Depletion of natural resources not deducted")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🎯 Alternative Measures:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Human Development Index (HDI):"), " Life expectancy, education, income"),
            React.createElement('li', null, React.createElement('b', null, "Green GDP:"), " GDP minus environmental costs"),
            React.createElement('li', null, React.createElement('b', null, "Genuine Progress Indicator (GPI):"), " Includes volunteer work, deducts crime costs")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "GDP measures economic activity, not economic welfare - it's a means, not the end!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ High GDP doesn't guarantee high welfare - consider Norway vs. India comparison!"
        )
      ),
      examFocus: true,
      example: "Bhutan measures Gross National Happiness instead of GDP, recognizing that economic growth alone doesn't ensure well-being.",
      mnemonic: "GDP measures growth, not welfare - includes market activities, excludes non-market benefits and costs!"
    }
  ],
  keywords: [
    { term: "GDP (Gross Domestic Product)", definition: "The market value of all final goods and services produced within the domestic territory of a country during a year." },
    { term: "Circular Flow of Income", definition: "The continuous flow of payments and receipts for goods, services, and factor services between different sectors of the economy." },
    { term: "Stock Variables", definition: "Economic variables measured at a specific point in time (e.g., capital stock, money supply, foreign exchange reserves)." },
    { term: "Flow Variables", definition: "Economic variables measured over a period of time (e.g., income, investment, savings, exports)." },
    { term: "Final Goods", definition: "Goods that are ready for final use by consumers and will not pass through any more stages of production." },
    { term: "Intermediate Goods", definition: "Goods used as inputs in the production of other goods and services." },
    { term: "Double Counting", definition: "The error of counting the value of a good more than once when calculating national income." },
    { term: "Value Added", definition: "The difference between the value of output and the value of intermediate inputs used in production." },
    { term: "Product Method", definition: "Method of calculating GDP by summing up the gross value added by all producing sectors." },
    { term: "Income Method", definition: "Method of calculating GDP by summing up all factor incomes generated in the economy." },
    { term: "Expenditure Method", definition: "Method of calculating GDP by summing up final expenditures on goods and services (C + I + G + (X-M))." },
    { term: "Depreciation", definition: "The consumption of fixed capital; the wear and tear of capital goods during the production process." },
    { term: "Net Factor Income from Abroad (NFIA)", definition: "The difference between income earned by domestic residents from abroad and income earned by foreign residents domestically." },
    { term: "Nominal GDP", definition: "GDP measured at current market prices, which includes the effect of price changes." },
    { term: "Real GDP", definition: "GDP measured at constant (base year) prices, which shows actual changes in physical output." },
    { term: "GDP Deflator", definition: "A measure of the level of prices in the economy calculated as (Nominal GDP ÷ Real GDP) × 100." },
    { term: "National Income", definition: "Net National Product at Factor Cost (NNP at FC), the sum of all factor incomes earned by normal residents of a country." },
    { term: "Externalities", definition: "The benefits or harms that a firm or individual causes to another party for which they are not paid or penalized." },
    { term: "Human Development Index (HDI)", definition: "A composite index measuring average achievement in three basic dimensions of human development: health, education, and income." },
    { term: "Consumption (C)", definition: "Expenditure by households on goods and services for final consumption." },
    { term: "Investment (I)", definition: "Expenditure on creation of new capital goods, inventories, and construction." },
    { term: "Government Spending (G)", definition: "Expenditure by government on final goods and services." },
    { term: "Net Exports (X-M)", definition: "The difference between exports and imports of goods and services." }
  ],
  caseStudies: [
    {
      title: "The Farmer and the Baker",
      scenario: "In a simple economy, a farmer produces wheat worth ₹100. He sells ₹50 worth of wheat to a baker and the remaining ₹50 directly to consumers. The baker uses the wheat to produce bread worth ₹200, which he sells entirely to consumers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Calculating GDP using all three methods:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Product Method:"), ' GVA of Farmer = ₹100 (no intermediate cost). GVA of Baker = ₹200 (Output) - ₹50 (Intermediate cost) = ₹150. Total GDP = ₹100 + ₹150 = ₹250.'),
          React.createElement('li', null, React.createElement('b', null, "Expenditure Method:"), ' Final expenditure: Wheat by consumers = ₹50, Bread by consumers = ₹200. Total GDP = ₹50 + ₹200 = ₹250.'),
          React.createElement('li', null, React.createElement('b', null, "Income Method:"), " The total value added (₹250) is distributed as factor incomes. Sum of wages, rent, interest, profit = ₹250. Total GDP = ₹250.")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This shows how all three methods give identical results when properly applied!")
      )
    },
    {
      title: "COVID-19 Impact on GDP Measurement",
      scenario: "During COVID-19, India's GDP contracted by 7.3% in 2020-21. While economic activity fell, household services like cooking and childcare increased. Environmental pollution decreased significantly due to lockdowns.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "GDP Contraction:"), " Fall in market transactions led to negative growth"),
          React.createElement('li', null, React.createElement('b', null, "Non-Market Activities:"), " Increased household work not captured in GDP"),
          React.createElement('li', null, React.createElement('b', null, "Externalities:"), " Environmental improvement (positive externality) not added to GDP"),
          React.createElement('li', null, React.createElement('b', null, "GDP Limitations:"), " GDP fell but some aspects of welfare (cleaner air) improved")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This illustrates why GDP is not a perfect welfare measure!")
      )
    },
    {
      title: "Real vs Nominal GDP in India",
      scenario: "In 2022-23, India's Nominal GDP was ₹272.77 lakh crores while Real GDP was ₹169.55 lakh crores (at 2011-12 prices). The GDP deflator was 160.8, indicating prices were 60.8% higher than the base year.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Nominal GDP:"), " Includes both volume increase and price inflation"),
          React.createElement('li', null, React.createElement('b', null, "Real GDP:"), " Measures actual output growth at constant prices"),
          React.createElement('li', null, React.createElement('b', null, "GDP Deflator:"), " Shows inflation rate since base year"),
          React.createElement('li', null, React.createElement('b', null, "Economic Growth:"), " Real GDP shows true expansion in economic activity")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This demonstrates why Real GDP is preferred for growth comparisons!")
      )
    },
    {
      title: "Underground Economy in National Income",
      scenario: "A street vendor earns ₹500 daily selling vegetables but doesn't report income to avoid taxes. A corporate executive earns ₹2,000 daily through salary but claims only ₹1,500 to reduce tax liability.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Underground Economy:"), " Unreported economic activities not captured in GDP"),
          React.createElement('li', null, React.createElement('b', null, "Tax Evasion:"), " Underreporting reduces measured national income"),
          React.createElement('li', null, React.createElement('b', null, "GDP Underestimation:"), " Actual economic activity is higher than official figures"),
          React.createElement('li', null, React.createElement('b', null, "Policy Implication:"), " Need for better tax compliance and formalization")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This shows how informal sector activities distort national income estimates!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 2: National Income Accounting at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Circular flow: Households supply factors → Firms pay income → Households spend → Firms produce"),
      React.createElement('li', null, "Stock (point in time): wealth, capital; Flow (over time): income, investment"),
      React.createElement('li', null, "Final goods: ready for consumption; Intermediate goods: used in production (avoid double counting)"),
      React.createElement('li', null, "Three GDP methods: Product (value added), Income (factor payments), Expenditure (C+I+G+(X-M))"),
      React.createElement('li', null, "Key aggregates: GDP → NDP (minus depreciation), GNP (plus NFIA), NNP (minus depreciation)"),
      React.createElement('li', null, "Nominal GDP (current prices) vs Real GDP (constant prices) - use Real for true growth"),
      React.createElement('li', null, "GDP measures market activity, not welfare - excludes non-market work, externalities, inequality")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning of GDP, stock/flow, final/intermediate goods"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain circular flow, three methods of GDP calculation"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Distinguish between real and nominal GDP, GDP and welfare"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on GDP methods, limitations of GDP as welfare measure")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Only final goods included in GDP to avoid double counting"),
        React.createElement('li', null, "All three methods of GDP calculation give identical results"),
        React.createElement('li', null, "Real GDP adjusts for inflation; Nominal GDP includes price changes"),
        React.createElement('li', null, "National Income = NNP at factor cost (most comprehensive measure)"),
        React.createElement('li', null, "GDP measures economic activity, not economic welfare")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Circular Flow: Households (supply factors) → Firms (pay income) → Households (spend) → Firms (produce) - H S F P H S F P"),
        React.createElement('p', { className: 'font-semibold' }, "Stock vs Flow: Stock (point/photo), Flow (period/video) - S P F P"),
        React.createElement('p', { className: 'font-semibold' }, "Final vs Intermediate: Final (end use), Intermediate (further processing) - F E I F"),
        React.createElement('p', { className: 'font-semibold' }, "GDP Methods: Product (value added), Income (factor incomes), Expenditure (C+I+G+(X-M)) - P V I F E C"),
        React.createElement('p', { className: 'font-semibold' }, "GDP Conversions: Gross-Net (depreciation), Domestic-National (NFIA), Market-Factor (NIT) - G N D N M F"),
        React.createElement('p', { className: 'font-semibold' }, "Nominal vs Real: Nominal (current prices), Real (constant prices) - N C R C")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Use examples to explain stock vs flow and final vs intermediate goods"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse stock and flow variables - stock is at a point, flow is over time"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Show calculations for all three GDP methods in numerical problems"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that all three GDP methods give the same result"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain why Real GDP is better than Nominal GDP for growth comparison"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say GDP measures welfare perfectly - discuss its limitations")
      )
    )
  )
};
