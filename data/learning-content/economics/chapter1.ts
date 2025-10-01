import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Introduction to Macroeconomics",
  overview: "This chapter introduces the broad field of macroeconomics. Unlike microeconomics which studies individual economic agents, macroeconomics looks at the economy as a whole. We will explore why this branch of economics emerged, particularly after the Great Depression, and understand the major sectors and players that shape a country's economic health.",
  keyConcepts: [
    {
      title: "Microeconomics vs. Macroeconomics",
      content: React.createElement('p', null, "The core difference lies in the scale of study. Microeconomics focuses on individual units like a single consumer's choice or a single firm's output. Macroeconomics studies aggregates for the entire economy, such as national income, inflation, and unemployment."),
      examFocus: true,
      example: "Studying the price of a specific company's stock is a microeconomic concern. Studying the overall stock market index (like the Nifty 50) is a macroeconomic concern."
    },
    {
      title: "Emergence of Macroeconomics",
      content: React.createElement('p', null, "Macroeconomics as a separate branch gained prominence after the work of John Maynard Keynes, following the Great Depression of 1929. The classical school of thought could not explain the prolonged unemployment and fall in output. Keynes's book, 'The General Theory of Employment, Interest and Money' (1936), offered a new approach to understanding the economy in its entirety."),
    },
    {
      title: "Four Sectors of the Economy",
      content: React.createElement('p', null, "Macroeconomics views the economy as a combination of four major sectors whose interactions determine the economic outcomes."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, React.createElement('b', null, 'Households:'), ' Individuals or groups who consume goods and services and supply factors of production (labour, capital).'),
        React.createElement('li', null, React.createElement('b', null, 'Firms:'), ' The production units that hire factors of production and produce goods and services.'),
        React.createElement('li', null, React.createElement('b', null, 'Government:'), ' The state which performs functions like imposing taxes, providing public services, and regulating the economy.'),
        React.createElement('li', null, React.createElement('b', null, 'External Sector:'), ' Refers to the economic transactions of the domestic country with the rest of the world (exports, imports, capital flows).')
      )
    }
  ],
  keywords: [
    { term: "Macroeconomics", definition: "The branch of economics that studies the economy as a whole, focusing on aggregate variables like national income, unemployment, and inflation." },
    { term: "Microeconomics", definition: "The branch of economics that studies the behavior of individual economic agents like households, firms, and their interaction in markets." },
    { term: "Economic Agents", definition: "Individuals or institutions that take economic decisions (e.g., consumers, producers, government)." },
    { term: "Great Depression", definition: "A severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States." },
    { term: "John Maynard Keynes", definition: "A British economist whose ideas fundamentally changed the theory and practice of macroeconomics and the economic policies of governments." },
    { term: "Capitalist Economy", definition: "An economy where means of production are privately owned and production takes place for selling the output in the market to earn profits." }
  ],
  caseStudies: [
    {
      title: "The Paradox of Thrift",
      scenario: "An economic advisor explains a peculiar situation. 'If one person in a town decides to save more money by cutting down on their spending, they become wealthier. This is a rational microeconomic decision. However, if everyone in the town starts saving more and spending less, the local cafe, shop, and cinema will lose customers. They will fire employees, and the overall income of the town will fall, ultimately leaving everyone with less money to save.'",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved:"),
        React.createElement('p', null, "This case illustrates the fundamental difference between microeconomics and macroeconomics. What is logical and beneficial for an individual (micro level) can be detrimental if adopted by everyone (macro level). This 'paradox of thrift' shows that the whole economy behaves differently from the sum of its individual parts, which is the core reason for studying macroeconomics as a separate discipline.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 1 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, React.createElement('b', null, "Micro"), " studies individuals/firms; ", React.createElement('b', null, "Macro"), " studies the whole economy."),
      React.createElement('li', null, "Macroeconomics emerged after the ", React.createElement('b', null, "Great Depression (1929)"), ", thanks to ", React.createElement('b', null, "John Maynard Keynes"), "."),
      React.createElement('li', null, "Four sectors: Households, Firms, Government, External Sector."),
      React.createElement('li', null, "Economic decisions are made by ", React.createElement('b', null, "Economic Agents"), " (consumers, producers, etc.).")
    )
  )
};