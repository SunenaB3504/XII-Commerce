import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter6Module: LearningModule = {
  chapter: "6",
  title: "Open Economy Macroeconomics",
  overview: "This chapter expands our view from a closed economy to an open economy, which interacts with other countries through trade and finance. We will explore two key components: the Balance of Payments (BoP), which is a systematic record of all economic transactions between a country and the rest of the world, and the Foreign Exchange Market, where currencies are traded and exchange rates are determined.",
  keyConcepts: [
    {
      title: "Balance of Payments (BoP)",
      content: React.createElement('p', null, "The BoP account records a country's international transactions for a given period. It is broadly divided into two main accounts."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Current Account:'), ' Records transactions related to exports and imports of goods and services, and unilateral transfers (like gifts and remittances).'),
        React.createElement('li', null, React.createElement('b', null, 'Capital Account:'), " Records all international transactions of assets. It includes foreign investment (FDI, FII) and loans (borrowings).")
      )
    },
    {
      title: "Autonomous vs. Accommodating Transactions",
      content: React.createElement('p', null, "Autonomous transactions are done for economic motives like profit, regardless of the BoP situation. Accommodating transactions are undertaken by the central bank to cover a deficit or surplus in the BoP (e.g., use of foreign exchange reserves)."),
      examFocus: true,
    },
    {
      title: "Foreign Exchange Market",
      content: React.createElement('p', null, "This is the market where national currencies are traded for one another. The price of one currency in terms of another is called the Foreign Exchange Rate."),
      example: "If $1 = ₹80, the exchange rate is 80 rupees per dollar."
    },
    {
      title: "Exchange Rate Systems",
      content: React.createElement('p', null, "There are different ways to determine the exchange rate."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Flexible (Floating) Exchange Rate:'), ' The exchange rate is determined by the market forces of demand and supply for foreign exchange.'),
        React.createElement('li', null, React.createElement('b', null, 'Fixed Exchange Rate:'), ' The government or central bank fixes the exchange rate at a particular level.'),
        React.createElement('li', null, React.createElement('b', null, 'Managed Floating:'), ' A hybrid system where the rate is market-determined but the central bank intervenes to manage excessive fluctuations.')
      )
    },
    {
        title: "Appreciation/Depreciation vs. Revaluation/Devaluation",
        content: React.createElement('p', null, "These terms describe changes in the value of a currency."),
        examFocus: true,
        example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Depreciation/Appreciation:'), ' A decrease/increase in the value of a domestic currency in terms of a foreign currency, caused by market forces in a flexible exchange rate system.'),
          React.createElement('li', null, React.createElement('b', null, 'Devaluation/Revaluation:'), ' A deliberate decrease/increase in the value of a domestic currency by the government in a fixed exchange rate system.')
        )
    }
  ],
  keywords: [
    { term: "Open Economy", definition: "An economy that has economic relations with the rest of the world." },
    { term: "Balance of Payments (BoP)", definition: "A systematic record of all economic transactions between residents of a country and the rest of the world in a given period." },
    { term: "Current Account Deficit", definition: "A situation where a country's imports of goods, services, and transfers are greater than its exports." },
    { term: "Foreign Exchange Rate", definition: "The price of one currency stated in terms of another currency." },
    { term: "Currency Depreciation", definition: "A fall in the value of a currency in a floating exchange rate system." },
    { term: "Currency Devaluation", definition: "A deliberate reduction in the value of a currency by the government in a fixed exchange rate system." }
  ],
  caseStudies: [
    {
      title: "The Smartphone Boom",
      scenario: "Suppose there is a massive increase in the import of Chinese smartphones into India. Indian consumers need to pay for these phones in Chinese Yuan. In a flexible exchange rate system, what impact will this have on the Indian Rupee/Chinese Yuan exchange rate?",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Analysis:"),
        React.createElement('p', null, "The increased import of smartphones will lead to a higher demand for Chinese Yuan from Indians. In the foreign exchange market, this will cause the demand curve for Yuan to shift to the right. With the supply of Yuan remaining the same, the price of Yuan in terms of Rupees will increase. This means one would have to pay more Rupees to buy one Yuan. This is known as the depreciation of the Indian Rupee against the Chinese Yuan.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 6 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, React.createElement('b', null, "Balance of Payments (BoP)"), " has two main parts: ", React.createElement('b', null, "Current Account"), " (for flows of goods, services, transfers) and ", React.createElement('b', null, "Capital Account"), " (for flows of assets)."),
      React.createElement('li', null, "In a ", React.createElement('b', null, "Flexible Exchange Rate"), " system, market forces (Demand & Supply) determine the rate."),
      React.createElement('li', null, "In a ", React.createElement('b', null, "Fixed Exchange Rate"), " system, the government sets the rate."),
      React.createElement('li', null, React.createElement('b', null, "Depreciation"), " (market-driven fall in currency value) and ", React.createElement('b', null, "Devaluation"), " (government-driven fall) both make exports cheaper and imports costlier."),
      React.createElement('li', null, React.createElement('b', null, "Appreciation"), " (market-driven rise) and ", React.createElement('b', null, "Revaluation"), " (government-driven rise) have the opposite effect.")
    )
  )
};
