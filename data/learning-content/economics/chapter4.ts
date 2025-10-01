import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter4Module: LearningModule = {
  chapter: "4",
  title: "Determination of Income and Employment",
  overview: "This chapter delves into the Keynesian theory of how the equilibrium level of income and employment is determined in an economy in the short-run. We will focus on the relationship between Aggregate Demand (AD) and Aggregate Supply (AS). Key concepts like the consumption function, the saving function, and the investment multiplier will be explained to understand how changes in spending can have a magnified impact on the economy.",
  keyConcepts: [
    {
      title: "Aggregate Demand (AD) and its Components",
      content: React.createElement('p', null, "Aggregate Demand is the total planned spending on final goods and services in an economy. In a simple two-sector model, its components are Consumption (C) and Investment (I). So, AD = C + I."),
      examFocus: true,
    },
    {
      title: "Consumption and Saving Functions",
      content: React.createElement('p', null, "The consumption function shows the relationship between consumption and income. The saving function shows the relationship between saving and income."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Consumption Function (C = C̄ + cY):'), " It has two parts: Autonomous Consumption (C̄), which is independent of income, and Induced Consumption (cY), which depends on income. 'c' is the Marginal Propensity to Consume (MPC)."),
        React.createElement('li', null, React.createElement('b', null, 'Marginal Propensity to Consume (MPC):'), ' The proportion of additional income that is consumed (ΔC/ΔY).'),
        React.createElement('li', null, React.createElement('b', null, 'Marginal Propensity to Save (MPS):'), ' The proportion of additional income that is saved (ΔS/ΔY).'),
        React.createElement('li', null, React.createElement('b', null, 'Key Relationship:'), ' MPC + MPS = 1.')
      )
    },
    {
      title: "Equilibrium Level of Income",
      content: React.createElement('p', null, "The equilibrium level of income is determined where Aggregate Demand (AD) equals Aggregate Supply (AS or National Income, Y). At this point, what producers plan to produce is exactly equal to what households and firms plan to buy."),
      examFocus: true,
      example: "Equilibrium is reached when Y = AD, or Y = C + I. An alternative approach is the Saving-Investment approach, where equilibrium is at S = I."
    },
    {
      title: "Investment Multiplier",
      content: React.createElement('p', null, "The investment multiplier shows that an initial change in investment leads to a much larger final change in income. The multiplier's value depends on the MPC."),
      examFocus: true,
      example: React.createElement('p', null, "Multiplier (k) = 1 / (1 - MPC) or 1 / MPS. If MPC = 0.8, the multiplier is k = 1 / (1 - 0.8) = 5. An initial investment of ₹100 crore will lead to a total increase in income of ₹500 crore.")
    },
    {
        title: "Deficient and Excess Demand",
        content: React.createElement('p', null, "These concepts describe situations where the economy is not at full employment equilibrium."),
        example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Deficient Demand:'), ' When AD is less than AS at the full employment level. This creates a deflationary gap, leading to unemployment.'),
          React.createElement('li', null, React.createElement('b', null, 'Excess Demand:'), ' When AD is more than AS at the full employment level. This creates an inflationary gap, leading to a rise in prices.')
        )
    }
  ],
  keywords: [
    { term: "Aggregate Demand (AD)", definition: "The total planned expenditure on all final goods and services in an economy during a given period." },
    { term: "Aggregate Supply (AS)", definition: "The total value of all final goods and services that all firms in an economy are willing to supply during a given period. It is conceptually equal to National Income (Y)." },
    { term: "Marginal Propensity to Consume (MPC)", definition: "The ratio of change in consumption to the change in income." },
    { term: "Investment Multiplier (k)", definition: "The ratio of the change in national income to the change in investment." },
    { term: "Deficient Demand", definition: "A situation where Aggregate Demand is less than Aggregate Supply at the full employment level of output." },
    { term: "Excess Demand", definition: "A situation where Aggregate Demand is greater than Aggregate Supply at the full employment level of output." }
  ],
  caseStudies: [
    {
      title: "The Government's Infrastructure Push",
      scenario: "To boost economic growth, the government announces a new investment of ₹50,000 crore in building highways. Economists estimate that the Marginal Propensity to Consume (MPC) in the country is 0.75. A journalist asks how a ₹50,000 crore investment can solve an income gap of ₹2,00,000 crore in the economy.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: The Investment Multiplier"),
        React.createElement('p', null, "The journalist's doubt can be cleared using the multiplier concept. The initial investment is not the final impact on the economy."),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, "First, calculate the multiplier (k): k = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4."),
          React.createElement('li', null, "Next, calculate the total increase in income (ΔY): ΔY = k × ΔI = 4 × ₹50,000 crore = ₹2,00,000 crore."),
        ),
        React.createElement('p', {className:'mt-2'}, "This shows that the initial investment will trigger a chain reaction of spending and income generation, leading to a total increase in national income of ₹2,00,000 crore, exactly filling the income gap.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 4 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Short-run equilibrium is where planned spending equals planned output: ", React.createElement('b', null, "AD = AS (or Y)"), "."),
      React.createElement('li', null, "AD = C + I (in a two-sector economy)."),
      React.createElement('li', null, "Consumption Function: C = C̄ + cY, where 'c' is MPC."),
      React.createElement('li', null, React.createElement('b', null, "MPC + MPS = 1"), "."),
      React.createElement('li', null, React.createElement('b', null, "Investment Multiplier (k) = 1/MPS = 1/(1-MPC)"), ". A small change in investment causes a larger change in income."),
      React.createElement('li', null, React.createElement('b', null, "Deficient Demand"), " leads to deflation and unemployment. ", React.createElement('b', null, "Excess Demand"), " leads to inflation.")
    )
  )
};
