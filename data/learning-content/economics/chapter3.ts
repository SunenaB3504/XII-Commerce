import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter3Module: LearningModule = {
  chapter: "3",
  title: "Money and Banking",
  overview: "This chapter explains the crucial role of money in a modern economy, moving beyond the inefficient barter system. We'll explore the functions of money, how it's measured, and how the banking system, led by the central bank (RBI), creates and manages the money supply, which is fundamental to the economy's functioning.",
  keyConcepts: [
    {
      title: "Barter System and its Drawbacks",
      content: React.createElement('p', null, "The barter system is the direct exchange of goods for goods. Its biggest drawback is the lack of a 'double coincidence of wants', which makes trade difficult. Money solves this problem."),
      examFocus: true,
    },
    {
      title: "Functions of Money",
      content: React.createElement('p', null, "Money performs four key functions in an economy."),
      mnemonic: "Remember the 4 key functions: Medium of Exchange, Measure of Value (Unit of Account), Store of Value, and Standard of Deferred Payments.",
      examFocus: true,
    },
    {
      title: "Money Supply",
      content: React.createElement('p', null, "Money supply refers to the total stock of money in circulation among the public at a particular point in time. In India, the RBI publishes four measures: M1, M2, M3, and M4, in decreasing order of liquidity."),
      example: React.createElement('p', null, React.createElement('b', null, 'M1 = CU + DD'), ' (Currency with Public + Net Demand Deposits). M1 is the most liquid measure.')
    },
    {
      title: "Money Creation by Commercial Banks",
      content: React.createElement('p', null, "Commercial banks can create credit, which is a form of money, many times more than their initial deposits. This process is based on the assumption that not all depositors will withdraw their money at the same time."),
      examFocus: true,
      example: React.createElement('p', null, "The amount of credit created is determined by the Money Multiplier, which is calculated as 1 / LRR (Legal Reserve Ratio). If LRR is 20% (0.2), the multiplier is 1/0.2 = 5. An initial deposit of ₹1000 can lead to a total money supply of ₹5000.")
    },
    {
        title: "The Central Bank (RBI) and Monetary Policy",
        content: React.createElement('p', null, "The RBI is the apex bank that controls the entire banking system. Its key function is to control the money supply and credit through its monetary policy."),
        examFocus: true,
        example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Repo Rate:'), ' The rate at which RBI lends to commercial banks. Raising it makes loans expensive and reduces money supply.'),
          React.createElement('li', null, React.createElement('b', null, 'Cash Reserve Ratio (CRR):'), ' The fraction of deposits banks must keep with RBI. Raising it reduces the banks\' lending capacity.'),
          React.createElement('li', null, React.createElement('b', null, 'Open Market Operations (OMO):'), ' Buying or selling government securities to inject or absorb liquidity from the system.')
        )
    }
  ],
  keywords: [
    { term: "Barter System", definition: "A system of exchange where goods are directly exchanged for other goods without using money." },
    { term: "Double Coincidence of Wants", definition: "A situation where two people each have a good that the other wants, a necessary condition for barter trade." },
    { term: "Money Supply", definition: "The total stock of money (currency and deposits) in circulation in an economy at a point in time." },
    { term: "Legal Reserve Ratio (LRR)", definition: "The minimum fraction of deposits that commercial banks are legally required to keep as reserves." },
    { term: "Money Multiplier", definition: "The amount by which an initial deposit can lead to a larger total money supply. It is the reciprocal of the LRR." },
    { term: "Central Bank", definition: "An apex institution that controls and regulates the entire banking and monetary structure of a country (RBI in India)." },
    { term: "Monetary Policy", definition: "The policy of the central bank to control the supply of money and credit in the economy." }
  ],
  caseStudies: [
    {
      title: "Controlling Inflation",
      scenario: "The Indian economy is experiencing high inflation, meaning prices are rising too fast. To tackle this, the Reserve Bank of India's Monetary Policy Committee decides to increase the Repo Rate by 50 basis points (0.5%). Following this, major commercial banks like SBI and HDFC increase the interest rates on their home loans and car loans.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Monetary Policy in Action"),
        React.createElement('p', null, "This is a classic example of contractionary monetary policy. By increasing the Repo Rate, the RBI makes it more expensive for commercial banks to borrow money. The commercial banks pass on this higher cost to their customers. This makes borrowing less attractive for the public, which reduces spending and overall demand in the economy. A decrease in aggregate demand helps to bring down the rate of inflation. This demonstrates the RBI's role as the controller of money supply and credit.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 3 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Money solves the problem of ", React.createElement('b', null, 'Double Coincidence of Wants'), " found in barter."),
      React.createElement('li', null, "Four functions: Medium of Exchange, Measure of Value, Store of Value, Standard for Deferred Payments."),
      React.createElement('li', null, "Money Supply (M1) = Currency + Demand Deposits."),
      React.createElement('li', null, "Banks create money via the ", React.createElement('b', null, "Money Multiplier (1/LRR)"), "."),
      React.createElement('li', null, "The RBI (Central Bank) controls money supply using tools like ", React.createElement('b', null, "Repo Rate, CRR, and OMOs"), ".")
    )
  )
};
