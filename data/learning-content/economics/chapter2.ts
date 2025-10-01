import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "National Income Accounting",
  overview: "This chapter focuses on how we measure the economic performance of a country. We'll learn about the circular flow of income, which shows how money moves through the economy. The central concept is Gross Domestic Product (GDP), and we'll explore the three different methods to calculate it, along with other important related concepts like GNP, depreciation, and the difference between real and nominal income.",
  keyConcepts: [
    {
      title: "Circular Flow of Income",
      content: React.createElement('p', null, "In a simple economy, households provide factor services (labour, capital) to firms and earn income. They then spend this income on goods and services produced by the firms. This continuous flow of production, income, and expenditure is known as the circular flow of income."),
      examFocus: true,
    },
    {
      title: "Stocks vs. Flows",
      content: React.createElement('p', null, "It's crucial to distinguish between these two. A stock variable is measured at a particular point in time (e.g., wealth, capital). A flow variable is measured over a period of time (e.g., income, investment)."),
      example: "The amount of water in a tank at 9 AM is a stock. The amount of water flowing into the tank per minute is a flow."
    },
    {
      title: "Final Goods vs. Intermediate Goods",
      content: React.createElement('p', null, "Final goods are meant for final use and will not pass through any more stages of production. Intermediate goods are used as raw materials for producing other goods. Only the value of final goods is included in national income to avoid the problem of 'double counting'."),
      examFocus: true,
      example: "Flour used by a bakery is an intermediate good. Bread sold to a consumer is a final good."
    },
    {
      title: "Three Methods of Calculating GDP",
      content: React.createElement('p', null, "GDP, the market value of all final goods and services produced within a country in a year, can be calculated in three ways, all of which should yield the same result."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Product (Value Added) Method:'), ' Sum of Gross Value Added by all producing units in the economy. (GVA = Value of Output - Intermediate Consumption).'),
        React.createElement('li', null, React.createElement('b', null, 'Income Method:'), ' Sum of all factor incomes (Wages, Rent, Interest, Profit) generated within the domestic territory.'),
        React.createElement('li', null, React.createElement('b', null, 'Expenditure Method:'), ' Sum of final expenditure on goods and services (Consumption (C) + Investment (I) + Government (G) + Net Exports (X-M)).')
      )
    },
    {
        title: "Key National Income Aggregates",
        content: React.createElement('p', null, "Understanding the relationship between different aggregates is essential."),
        example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, "Gross - Depreciation = Net"),
          React.createElement('li', null, "Market Price - Net Indirect Taxes = Factor Cost"),
          React.createElement('li', null, "Domestic + Net Factor Income from Abroad (NFIA) = National")
        )
    },
    {
        title: "Real vs. Nominal GDP & GDP and Welfare",
        content: React.createElement('p', null, "Nominal GDP is valued at current prices, while Real GDP is valued at constant (base year) prices and is a true indicator of economic growth. However, GDP is not a perfect measure of welfare; it doesn't account for income distribution, non-monetary exchanges, or externalities (like pollution)."),
    }
  ],
  keywords: [
    { term: "GDP (Gross Domestic Product)", definition: "The market value of all final goods and services produced within the domestic territory of a country during a year." },
    { term: "Depreciation", definition: "The consumption of fixed capital; the wear and tear of capital goods." },
    { term: "Circular Flow of Income", definition: "The flow of payments and receipts for goods, services, and factor services between different sectors of the economy." },
    { term: "Double Counting", definition: "The error of counting the value of a good more than once when calculating national income." },
    { term: "National Income", definition: "Net National Product at Factor Cost (NNP at FC). It is the sum of all factor incomes earned by normal residents of a country." },
    { term: "Externalities", definition: "The benefits or harms a firm or individual causes to another for which they are not paid or penalised." }
  ],
  caseStudies: [
    {
      title: "The Farmer and the Baker",
      scenario: "In a simple economy, a farmer produces wheat worth ₹100. He sells ₹50 worth of wheat to a baker and the remaining ₹50 directly to consumers. The baker uses the wheat to produce bread worth ₹200, which he sells to consumers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculating GDP using all three methods:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Value Added Method:"), ' GVA of Farmer = ₹100 (no intermediate cost). GVA of Baker = ₹200 (Output) - ₹50 (Intermediate cost) = ₹150. Total GDP = ₹100 + ₹150 = ₹250.'),
          React.createElement('li', null, React.createElement('b', null, "Expenditure Method:"), ' Final expenditure is on goods bought by consumers. Final Wheat = ₹50. Final Bread = ₹200. Total GDP = ₹50 + ₹200 = ₹250.'),
          React.createElement('li', null, React.createElement('b', null, "Income Method:"), " The total value added (₹250) is distributed as factor incomes (wages, rent, interest, profit) by the farmer and the baker. The sum of these incomes will be ₹250. Total GDP = ₹250.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 2 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Circular flow: Production -> Income -> Expenditure."),
      React.createElement('li', null, "To avoid double counting, use either value of ", React.createElement('b', null, "Final Goods"), " or the ", React.createElement('b', null, "Value Added"), " method."),
      React.createElement('li', null, "Three methods to calculate GDP: Product, Income, Expenditure. All give the same result."),
      React.createElement('li', null, "Key conversions: Gross <-> Net (Depreciation), Domestic <-> National (NFIA), MP <-> FC (NIT)."),
      React.createElement('li', null, React.createElement('b', null, "Real GDP"), " is a better measure of growth than ", React.createElement('b', null, "Nominal GDP"), "."),
      React.createElement('li', null, "GDP is not a perfect measure of ", React.createElement('b', null, "welfare"), " due to externalities, distribution, etc.")
    )
  )
};
