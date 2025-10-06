import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter4Module: LearningModule = {
  chapter: "4",
  title: "Determination of Income and Employment",
  overview: "Master income-employment determination essential for CBSE Board Exams 2026. This chapter covers Keynesian theory, aggregate demand-supply equilibrium, consumption function, and multiplier effect - frequently tested topics worth 15-18 marks. Learn with exam-focused explanations, practical examples, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Aggregate Demand and Aggregate Supply",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The Keynesian model explains how the equilibrium level of income and employment is determined by the interaction of aggregate demand and aggregate supply in the short run."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📉 Aggregate Demand (AD):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Total planned expenditure on all final goods and services in the economy"),
            React.createElement('li', null, React.createElement('b', null, "Two-Sector Model:"), " AD = C + I (Consumption + Investment)"),
            React.createElement('li', null, React.createElement('b', null, "Three-Sector Model:"), " AD = C + I + G (adding Government spending)"),
            React.createElement('li', null, React.createElement('b', null, "Four-Sector Model:"), " AD = C + I + G + (X - M) (adding Net exports)")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📈 Aggregate Supply (AS):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " Total value of all final goods and services that firms plan to produce"),
            React.createElement('li', null, React.createElement('b', null, "Assumption:"), " In short run, AS is perfectly elastic (horizontal) up to full employment"),
            React.createElement('li', null, React.createElement('b', null, "Keynesian View:"), " AS = Y (National Income) - output is determined by demand"),
            React.createElement('li', null, React.createElement('b', null, "Equilibrium Condition:"), " AD = AS (or Y)")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "In Keynesian model, equilibrium is demand-determined - supply adjusts to demand!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ AD determines the level of output and employment in the short run!"
        )
      ),
      examFocus: true,
      example: "If households consume ₹800 and invest ₹200, AD = ₹1000. If firms produce goods worth ₹1000, equilibrium is reached.",
      mnemonic: "AD (demand), AS (supply), Equilibrium when equal - A D A S E E!"
    },
    {
      title: "Consumption Function and Saving Function",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The consumption function shows how consumption changes with income, while the saving function shows the complementary relationship between saving and income."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🍽️ Consumption Function:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " C = C̄ + cY (C̄ = autonomous consumption, c = MPC, Y = income)"),
            React.createElement('li', null, React.createElement('b', null, "Autonomous Consumption (C̄):"), " Consumption independent of income (basic needs)"),
            React.createElement('li', null, React.createElement('b', null, "Induced Consumption (cY):"), " Consumption that varies with income"),
            React.createElement('li', null, React.createElement('b', null, "Marginal Propensity to Consume (MPC):"), " ΔC/ΔY (additional consumption per additional rupee)")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "💰 Saving Function:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " S = -C̄ + sY (s = MPS, Marginal Propensity to Save)"),
            React.createElement('li', null, React.createElement('b', null, "Relationship:"), " S = Y - C (saving equals income minus consumption)"),
            React.createElement('li', null, React.createElement('b', null, "Break-even Point:"), " Income level where S = 0 (C = Y)"),
            React.createElement('li', null, React.createElement('b', null, "Key Identity:"), " MPC + MPS = 1 (s + c = 1)")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "📊 Average vs Marginal Propensities:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Average Propensity to Consume (APC):"), " C/Y (total consumption as % of income)"),
            React.createElement('li', null, React.createElement('b', null, "Average Propensity to Save (APS):"), " S/Y (total saving as % of income)"),
            React.createElement('li', null, React.createElement('b', null, "Relationship:"), " APC + APS = 1"),
            React.createElement('li', null, React.createElement('b', null, "Keynes' Psychological Law:"), " APC falls as income rises, but MPC remains constant")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "MPC is constant (slope of consumption function), APC varies with income level!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ As income increases, APC decreases but MPC remains constant (between 0 and 1)!"
        )
      ),
      examFocus: true,
      example: "If C = ₹200 + 0.8Y, then MPC = 0.8, MPS = 0.2. At Y = ₹1000, C = ₹1000, S = ₹0 (break-even). At Y = ₹2000, C = ₹1800, S = ₹200.",
      mnemonic: "Consumption (C = C̄ + cY), Saving (S = -C̄ + sY), MPC + MPS = 1 - C C C S S M M!"
    },
    {
      title: "Equilibrium Level of Income",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The equilibrium level of income is reached when aggregate demand equals aggregate supply. There are two equivalent approaches to determine this equilibrium."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔄 Aggregate Demand-Aggregate Supply Approach:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Equilibrium Condition:"), " AD = AS (or Y)"),
            React.createElement('li', null, React.createElement('b', null, "Two-Sector Formula:"), " Y = C + I = (C̄ + cY) + I"),
            React.createElement('li', null, React.createElement('b', null, "Solution:"), " Y - cY = C̄ + I → Y(1-c) = C̄ + I → Y = (C̄ + I)/(1-c)"),
            React.createElement('li', null, React.createElement('b', null, "Intuition:"), " Equilibrium when planned spending equals planned output")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "⚖️ Saving-Investment Approach:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Equilibrium Condition:"), " S = I (Saving = Investment)"),
            React.createElement('li', null, React.createElement('b', null, "Logic:"), " For income to be constant, leakages must equal injections"),
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " -C̄ + sY = I (from saving function S = -C̄ + sY)"),
            React.createElement('li', null, React.createElement('b', null, "Solution:"), " sY = C̄ + I → Y = (C̄ + I)/s")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "📈 Changes in Equilibrium:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Increase in Investment:"), " AD curve shifts right → higher equilibrium income"),
            React.createElement('li', null, React.createElement('b', null, "Increase in Autonomous Consumption:"), " AD curve shifts right → higher equilibrium income"),
            React.createElement('li', null, React.createElement('b', null, "Decrease in MPC:"), " AD curve becomes flatter → lower equilibrium income")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Both AD-AS and S-I approaches give identical equilibrium - they are two sides of the same coin!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Equilibrium income is demand-determined in Keynesian model - supply adjusts passively!"
        )
      ),
      examFocus: true,
      example: "If C̄ = ₹200, c = 0.8, I = ₹300, then Y = (200 + 300)/(1-0.8) = ₹2500. Using S-I: s = 0.2, Y = (200 + 300)/0.2 = ₹2500.",
      mnemonic: "AD = AS (Y = C + I), S = I (equilibrium) - A A Y C I S I E!"
    },
    {
      title: "Investment Multiplier",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The multiplier effect shows how a small change in autonomous expenditure can cause a large change in national income through successive rounds of spending."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔢 Multiplier Mechanism:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " k = 1/(1-MPC) = 1/MPS"),
            React.createElement('li', null, React.createElement('b', null, "Working:"), " Initial spending → income → further spending → more income"),
            React.createElement('li', null, React.createElement('b', null, "Assumptions:"), " No time lags, constant MPC, no imports, no taxes"),
            React.createElement('li', null, React.createElement('b', null, "Magnitude:"), " Higher MPC → higher multiplier (more spending rounds)")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Multiplier Process:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Round 1:"), " Initial investment ₹100 → recipient gets ₹100 income"),
            React.createElement('li', null, React.createElement('b', null, "Round 2:"), " Recipient spends ₹80 (MPC=0.8) → next person gets ₹80"),
            React.createElement('li', null, React.createElement('b', null, "Round 3:"), " Second person spends ₹64 → third person gets ₹64"),
            React.createElement('li', null, React.createElement('b', null, "Total Effect:"), " ₹100 + ₹80 + ₹64 + ... = ₹100 × (1/(1-0.8)) = ₹500")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Types of Multipliers:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Investment Multiplier:"), " Change in investment → change in income"),
            React.createElement('li', null, React.createElement('b', null, "Government Spending Multiplier:"), " Change in G → change in income"),
            React.createElement('li', null, React.createElement('b', null, "Tax Multiplier:"), " Change in taxes → change in income (negative)"),
            React.createElement('li', null, React.createElement('b', null, "Balanced Budget Multiplier:"), " Equal ΔG and ΔT → ΔY = ΔG")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Multiplier shows why small policy changes can have large economic effects!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Higher MPC means stronger multiplier effect - more spending rounds!"
        )
      ),
      examFocus: true,
      example: "MPC = 0.8, multiplier = 5. ₹100 increase in investment → ₹500 increase in income. MPC = 0.6, multiplier = 2.5, same ₹100 → ₹250 increase.",
      mnemonic: "Multiplier (k = 1/MPS), Higher MPC higher k - M K M H M H K!"
    },
    {
      title: "Deficient and Excess Demand",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "These situations occur when aggregate demand does not match aggregate supply at the full employment level, leading to macroeconomic imbalances."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📉 Deficient Demand:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " AD < AS at full employment level"),
            React.createElement('li', null, React.createElement('b', null, "Causes:"), " Low investment, high saving, pessimistic expectations"),
            React.createElement('li', null, React.createElement('b', null, "Effects:"), " Unemployment, deflation, recession"),
            React.createElement('li', null, React.createElement('b', null, "Remedies:"), " Increase AD through fiscal/monetary expansion")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "📈 Excess Demand:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Definition:"), " AD > AS at full employment level"),
            React.createElement('li', null, React.createElement('b', null, "Causes:"), " High investment, low saving, expansionary policies"),
            React.createElement('li', null, React.createElement('b', null, "Effects:"), " Inflation, over-employment, overheating"),
            React.createElement('li', null, React.createElement('b', null, "Remedies:"), " Decrease AD through fiscal/monetary contraction")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Measuring Gaps:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Deflationary Gap:"), " Full employment output - Actual equilibrium output"),
            React.createElement('li', null, React.createElement('b', null, "Inflationary Gap:"), " Actual equilibrium output - Full employment output"),
            React.createElement('li', null, React.createElement('b', null, "Policy Response:"), " Close gaps through appropriate demand management")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Deficient demand causes unemployment, excess demand causes inflation - policy must target the gap!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Full employment equilibrium may not be the actual equilibrium due to demand deficiencies!"
        )
      ),
      examFocus: true,
      example: "Full employment output = ₹2000, but AD = C + I = ₹1800. Deflationary gap = ₹200. Need to increase AD by ₹200 to reach full employment.",
      mnemonic: "Deficient (AD < AS, unemployment), Excess (AD > AS, inflation) - D A A U E A A I!"
    },
    {
      title: "Paradox of Thrift",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The paradox of thrift illustrates how individual attempts to save more can lead to lower aggregate savings and economic contraction."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🤔 The Paradox:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Individual Level:"), " Saving more is rational and beneficial"),
            React.createElement('li', null, React.createElement('b', null, "Macro Level:"), " Everyone saving more reduces consumption and income"),
            React.createElement('li', null, React.createElement('b', null, "Result:"), " Aggregate saving may actually decrease"),
            React.createElement('li', null, React.createElement('b', null, "Keynes' Insight:"), " What is virtuous for individual may be vicious for society")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📉 Mechanism:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Initial Effect:"), " Higher saving reduces consumption (C↓)"),
            React.createElement('li', null, React.createElement('b', null, "AD Decrease:"), " AD = C + I decreases, causing output and income to fall"),
            React.createElement('li', null, React.createElement('b', null, "Further Saving Decrease:"), " Lower income forces people to save less"),
            React.createElement('li', null, React.createElement('b', null, "Equilibrium:"), " New equilibrium with lower income and possibly lower saving")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "💡 Policy Implications:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "During Recession:"), " Encourage spending, not saving"),
            React.createElement('li', null, React.createElement('b', null, "Government Role:"), " Increase spending to compensate for private saving"),
            React.createElement('li', null, React.createElement('b', null, "Investment Importance:"), " Investment (I) must equal saving (S) for equilibrium"),
            React.createElement('li', null, React.createElement('b', null, "Long-run View:"), " Saving is essential for growth, but timing matters")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Paradox shows why macroeconomics differs from microeconomics - aggregate behavior ≠ individual behavior!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ In recession, increased saving worsens the problem; decreased saving helps recovery!"
        )
      ),
      examFocus: true,
      example: "Everyone saves 20% more during recession. Consumption falls, AD decreases, income falls, forcing people to save less than before - aggregate saving decreases.",
      mnemonic: "Paradox: Individual saving good, Aggregate saving bad - P I S G A S B!"
    }
  ],
  keywords: [
    { term: "Aggregate Demand (AD)", definition: "The total planned expenditure on all final goods and services in an economy during a given period." },
    { term: "Aggregate Supply (AS)", definition: "The total value of all final goods and services that all firms in an economy are willing to supply during a given period." },
    { term: "Consumption Function", definition: "The functional relationship between consumption expenditure and income, expressed as C = C̄ + cY." },
    { term: "Saving Function", definition: "The functional relationship between saving and income, expressed as S = -C̄ + sY." },
    { term: "Marginal Propensity to Consume (MPC)", definition: "The ratio of change in consumption to the change in income (ΔC/ΔY)." },
    { term: "Marginal Propensity to Save (MPS)", definition: "The ratio of change in saving to the change in income (ΔS/ΔY)." },
    { term: "Average Propensity to Consume (APC)", definition: "The ratio of total consumption to total income (C/Y)." },
    { term: "Average Propensity to Save (APS)", definition: "The ratio of total saving to total income (S/Y)." },
    { term: "Equilibrium Level of Income", definition: "The level of income where aggregate demand equals aggregate supply (AD = AS)." },
    { term: "Investment Multiplier", definition: "The ratio of change in national income to the change in investment (k = 1/MPS)." },
    { term: "Deficient Demand", definition: "A situation where aggregate demand is less than aggregate supply at the full employment level." },
    { term: "Excess Demand", definition: "A situation where aggregate demand is greater than aggregate supply at the full employment level." },
    { term: "Deflationary Gap", definition: "The difference between full employment output and actual equilibrium output due to deficient demand." },
    { term: "Inflationary Gap", definition: "The difference between actual equilibrium output and full employment output due to excess demand." },
    { term: "Paradox of Thrift", definition: "The phenomenon where individual attempts to save more lead to lower aggregate saving and economic contraction." },
    { term: "Autonomous Consumption", definition: "The minimum level of consumption that is independent of income level." },
    { term: "Induced Consumption", definition: "The part of consumption that varies with the level of income." },
    { term: "Keynes' Psychological Law", definition: "The law stating that as income increases, the average propensity to consume decreases but remains positive." },
    { term: "Leakages", definition: "Withdrawals from the circular flow of income such as saving, taxes, and imports." },
    { term: "Injections", definition: "Additions to the circular flow of income such as investment, government spending, and exports." },
    { term: "Full Employment", definition: "A situation where all those who are willing and able to work at the prevailing wage rate are employed." },
    { term: "Effective Demand", definition: "The level of aggregate demand that determines the actual level of employment in the economy." }
  ],
  caseStudies: [
    {
      title: "COVID-19 Economic Contraction",
      scenario: "During COVID-19, India's GDP contracted by 7.3% in 2020-21. Lockdowns reduced consumption and investment, creating a massive deflationary gap. The government responded with ₹27 lakh crore stimulus package.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Deficient Demand:"), " AD fell sharply due to lockdown restrictions"),
          React.createElement('li', null, React.createElement('b', null, "Multiplier Effect:"), " Initial shock multiplied through reduced spending rounds"),
          React.createElement('li', null, React.createElement('b', null, "Equilibrium Shift:"), " New equilibrium at lower income and employment level"),
          React.createElement('li', null, React.createElement('b', null, "Policy Response:"), " Government spending injection to close deflationary gap")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how external shocks create deficient demand requiring policy intervention!")
      )
    },
    {
      title: "The Multiplier Effect in Action",
      scenario: "The government invests ₹1,00,000 crore in infrastructure. With MPC = 0.75, economists predict this will increase national income by ₹4,00,000 crore. A critic argues this is unrealistic.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Multiplier Calculation:"), " k = 1/(1-0.75) = 1/0.25 = 4"),
          React.createElement('li', null, React.createElement('b', null, "Total Income Increase:"), " ΔY = k × ΔI = 4 × ₹1,00,000 = ₹4,00,000 crore"),
          React.createElement('li', null, React.createElement('b', null, "Spending Rounds:"), " Initial ₹1 lakh → ₹75,000 → ₹56,250 → ₹42,188 → ..."),
          React.createElement('li', null, React.createElement('b', null, "Leakage Point:"), " 25% of additional income is saved, stopping further rounds")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates how investment creates income through successive spending rounds!")
      )
    },
    {
      title: "Paradox of Thrift During Recession",
      scenario: "During 2008 global financial crisis, many households increased saving rates from 15% to 25% to prepare for uncertain times. However, this led to reduced consumption, business failures, and higher unemployment.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Paradox of Thrift:"), " Individual saving increase reduces aggregate demand"),
          React.createElement('li', null, React.createElement('b', null, "Consumption Function Shift:"), " Higher saving means lower consumption at each income level"),
          React.createElement('li', null, React.createElement('b', null, "AD Curve Shift Left:"), " Lower AD leads to lower equilibrium income"),
          React.createElement('li', null, React.createElement('b', null, "Vicious Cycle:"), " Lower income forces even higher saving rates")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This shows why increased saving during recession worsens economic downturn!")
      )
    },
    {
      title: "Excess Demand and Inflation",
      scenario: "In 2021-22, India's economy overheated with GDP growth of 8.7%. High government spending, private investment, and export demand created excess demand, pushing inflation to 6.7%. RBI responded by increasing repo rate.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Excess Demand:"), " AD > AS at full employment level"),
          React.createElement('li', null, React.createElement('b', null, "Inflationary Gap:"), " Difference between actual and full employment output"),
          React.createElement('li', null, React.createElement('b', null, "Demand-Pull Inflation:"), " Too much spending chasing limited goods"),
          React.createElement('li', null, React.createElement('b', null, "Monetary Tightening:"), " Higher interest rates to reduce AD and close the gap")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This illustrates how excess demand creates inflationary pressures requiring contractionary policy!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 4: Determination of Income and Employment at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "AD = C + I (two-sector), AD = C + I + G + (X-M) (four-sector); Equilibrium: AD = AS = Y"),
      React.createElement('li', null, "Consumption function: C = C̄ + cY (c = MPC); Saving function: S = -C̄ + sY (s = MPS); MPC + MPS = 1"),
      React.createElement('li', null, "Equilibrium income: Y = (C̄ + I)/(1-c) from AD-AS; Y = (C̄ + I)/s from S-I approach"),
      React.createElement('li', null, "Investment multiplier: k = 1/MPS = 1/(1-MPC); shows magnified income effect of investment change"),
      React.createElement('li', null, "Deficient demand (AD < AS at full employment): causes unemployment; Excess demand (AD > AS): causes inflation"),
      React.createElement('li', null, "Paradox of thrift: individual saving increase can reduce aggregate saving and worsen recession")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning of AD, MPC, multiplier, deficient demand"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain consumption function, equilibrium determination"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Distinguish AD-AS vs S-I approach, deficient vs excess demand"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on multiplier effect, paradox of thrift, policy implications")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Equilibrium income is demand-determined in short run"),
        React.createElement('li', null, "MPC is constant but APC decreases as income rises"),
        React.createElement('li', null, "Higher MPC means higher multiplier effect"),
        React.createElement('li', null, "Deficient demand creates deflationary gap, excess demand creates inflationary gap"),
        React.createElement('li', null, "Paradox of thrift shows macro differs from micro behavior")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "AD Components: Consumption, Investment, Government, Net exports - C I G N"),
        React.createElement('p', { className: 'font-semibold' }, "Consumption Function: C = Autonomous + Marginal × Income - C A M I"),
        React.createElement('p', { className: 'font-semibold' }, "Propensities: MPC + MPS = 1, APC + APS = 1 - M M A A"),
        React.createElement('p', { className: 'font-semibold' }, "Multiplier: k = 1/MPS, Higher MPC higher k - K M H M H K"),
        React.createElement('p', { className: 'font-semibold' }, "Demand Situations: Deficient (unemployment), Excess (inflation) - D U E I"),
        React.createElement('p', { className: 'font-semibold' }, "Paradox: Individual saving good, Aggregate saving bad - P I S G A S B")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Show equilibrium with both AD-AS and S-I approaches for full marks"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse MPC (marginal, constant) with APC (average, variable)"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Use numerical examples to explain multiplier calculations"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that multiplier works in both directions (expansion and contraction)"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain paradox of thrift with cause-effect chain"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say deficient demand causes inflation (it causes deflation/unemployment)")
      )
    )
  )
};
