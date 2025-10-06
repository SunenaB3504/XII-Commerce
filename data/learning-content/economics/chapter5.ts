import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter5Module: LearningModule = {
  chapter: "5",
  title: "Government Budget and the Economy",
  overview: "Master government budget essentials for CBSE Board Exams 2026. This chapter covers budgetary objectives, components, deficits, and fiscal policy - crucial for understanding government economic role. Frequently tested with 12-15 marks covering budget analysis, deficit calculations, and policy implications. Learn with exam-focused explanations, numerical problems, and real-world case studies from Indian Union Budget.",
  keyConcepts: [
    {
      title: "Objectives of Government Budget",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The government budget serves multiple economic and social objectives beyond mere revenue collection and expenditure management."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🎯 Allocation Function:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Public Goods Provision:"), " Defense, law and order, infrastructure"),
            React.createElement('li', null, React.createElement('b', null, "Merit Goods:"), " Education, healthcare, sanitation"),
            React.createElement('li', null, React.createElement('b', null, "Market Failure Correction:"), " Externalities, public goods problems"),
            React.createElement('li', null, React.createElement('b', null, "Economic Development:"), " Investment in human capital and infrastructure")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "⚖️ Redistribution Function:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Progressive Taxation:"), " Higher tax rates for higher income groups"),
            React.createElement('li', null, React.createElement('b', null, "Subsidies and Transfers:"), " Direct benefit transfers, food security programs"),
            React.createElement('li', null, React.createElement('b', null, "Social Welfare Schemes:"), " MGNREGA, Ayushman Bharat, PM-KISAN"),
            React.createElement('li', null, React.createElement('b', null, "Inequality Reduction:"), " Narrowing income and wealth gaps")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "📊 Stabilization Function:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Demand Management:"), " Counter-cyclical fiscal policy"),
            React.createElement('li', null, React.createElement('b', null, "Inflation Control:"), " Reducing aggregate demand during overheating"),
            React.createElement('li', null, React.createElement('b', null, "Employment Generation:"), " Increasing spending during recessions"),
            React.createElement('li', null, React.createElement('b', null, "Price Stability:"), " Managing inflationary/deflationary pressures")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Budget serves three main functions: Allocation (what market can't provide), Redistribution (reduce inequality), Stabilization (economic stability)!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ All three functions are interconnected - allocation affects distribution, stabilization affects both!"
        )
      ),
      examFocus: true,
      example: "Government provides free education (allocation), funds it through progressive taxes (redistribution), and increases spending during recession (stabilization).",
      mnemonic: "Allocation (public goods), Redistribution (equality), Stabilization (stability) - A R S!"
    },
    {
      title: "Components of Government Budget",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The budget is classified into revenue and capital accounts, each with receipts and expenditures, following a systematic classification."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💰 Revenue Receipts:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Tax Revenue:"), " Direct taxes (income, corporate) + Indirect taxes (GST, excise)"),
            React.createElement('li', null, React.createElement('b', null, "Non-Tax Revenue:"), " Fees, fines, licenses, dividends from PSUs"),
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Recurring, don't create liability or reduce assets"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Income tax, GST collections, railway fares")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🏗️ Capital Receipts:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Borrowings:"), " Internal debt (market loans) + External debt"),
            React.createElement('li', null, React.createElement('b', null, "Other Receipts:"), " Disinvestment, recoveries of loans"),
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Non-recurring, create liability or reduce assets"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Treasury bills, sovereign gold bonds, PSU stake sales")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "💸 Revenue Expenditure:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Recurring Items:"), " Salaries, pensions, interest payments"),
            React.createElement('li', null, React.createElement('b', null, "Subsidies:"), " Food, fertilizer, petroleum subsidies"),
            React.createElement('li', null, React.createElement('b', null, "Grants:"), " To states, UTs, and other entities"),
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Day-to-day expenses, don't create assets")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🏗️ Capital Expenditure:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Asset Creation:"), " Roads, railways, dams, buildings"),
            React.createElement('li', null, React.createElement('b', null, "Loans to States/PSUs:"), " For development projects"),
            React.createElement('li', null, React.createElement('b', null, "Debt Repayment:"), " Principal repayment on past borrowings"),
            React.createElement('li', null, React.createElement('b', null, "Nature:"), " Long-term investments, create productive assets")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Revenue items are recurring and don't affect balance sheet; Capital items are non-recurring and do affect balance sheet!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Revenue receipts + capital receipts = total receipts; Revenue expenditure + capital expenditure = total expenditure!"
        )
      ),
      examFocus: true,
      example: "Revenue receipts: ₹20 lakh (taxes + fees); Capital receipts: ₹5 lakh (borrowings); Revenue expenditure: ₹18 lakh (salaries); Capital expenditure: ₹10 lakh (roads).",
      mnemonic: "Revenue (recurring, no asset change), Capital (non-recurring, asset/liability change) - R C!"
    },
    {
      title: "Measures of Government Deficit",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Deficits occur when expenditures exceed receipts. Different deficit measures serve different analytical purposes and policy implications."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📉 Revenue Deficit:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Revenue Expenditure - Revenue Receipts"),
            React.createElement('li', null, React.createElement('b', null, "Meaning:"), " Government borrowing for current consumption"),
            React.createElement('li', null, React.createElement('b', null, "Implication:"), " Unsustainable, indicates fiscal indiscipline"),
            React.createElement('li', null, React.createElement('b', null, "Example:"), " Salaries ₹100, taxes ₹80 → Revenue deficit ₹20")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "💰 Fiscal Deficit:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Total Expenditure - Total Receipts (excluding borrowings)"),
            React.createElement('li', null, React.createElement('b', null, "Meaning:"), " Total borrowing requirement of government"),
            React.createElement('li', null, React.createElement('b', null, "Components:"), " Revenue deficit + capital expenditure - non-debt capital receipts"),
            React.createElement('li', null, React.createElement('b', null, "Example:"), " Total exp ₹200, receipts ₹160 → Fiscal deficit ₹40")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🎯 Primary Deficit:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Formula:"), " Fiscal Deficit - Interest Payments"),
            React.createElement('li', null, React.createElement('b', null, "Meaning:"), " Borrowing for current year's expenses excluding past debt interest"),
            React.createElement('li', null, React.createElement('b', null, "Significance:"), " Better indicator of fiscal health than fiscal deficit"),
            React.createElement('li', null, React.createElement('b', null, "Example:"), " Fiscal deficit ₹40, interest ₹10 → Primary deficit ₹30")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "📊 Deficit Relationships:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Revenue Deficit:"), " Always ≤ Fiscal Deficit"),
            React.createElement('li', null, React.createElement('b', null, "Primary Deficit:"), " Fiscal Deficit - Interest (can be surplus)"),
            React.createElement('li', null, React.createElement('b', null, "Zero Primary Deficit:"), " Government borrowing only for interest payments"),
            React.createElement('li', null, React.createElement('b', null, "Deficit Financing:"), " Printing money or borrowing to cover deficits")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Revenue deficit shows borrowing for consumption; Fiscal deficit shows total borrowing; Primary deficit excludes interest on past debt!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Higher deficits increase public debt burden and crowd out private investment!"
        )
      ),
      examFocus: true,
      example: "Revenue receipts ₹100, capital receipts ₹50 (₹30 borrowing + ₹20 disinvestment), revenue exp ₹120, capital exp ₹60, interest ₹10. Revenue deficit = ₹20, Fiscal deficit = ₹40, Primary deficit = ₹30.",
      mnemonic: "Revenue (consumption borrowing), Fiscal (total borrowing), Primary (excluding interest) - R F P!"
    },
    {
      title: "Balanced Budget and Fiscal Policy",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Fiscal policy uses government spending and taxation to influence economic activity. The balanced budget multiplier shows the impact of simultaneous tax-spending changes."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "⚖️ Balanced Budget Multiplier:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Concept:"), " Equal increase in government spending and taxes"),
            React.createElement('li', null, React.createElement('b', null, "Multiplier Value:"), " Always equals 1"),
            React.createElement('li', null, React.createElement('b', null, "Reason:"), " ΔG increases income by k×ΔG, ΔT reduces income by k×ΔT"),
            React.createElement('li', null, React.createElement('b', null, "Net Effect:"), " k×ΔG - k×ΔT = k(ΔG - ΔT) = 0 if ΔG = ΔT")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📈 Expansionary Fiscal Policy:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "During Recession:"), " Increase G, decrease T, increase deficit"),
            React.createElement('li', null, React.createElement('b', null, "Objectives:"), " Increase AD, reduce unemployment"),
            React.createElement('li', null, React.createElement('b', null, "Tools:"), " Tax cuts, increased public expenditure"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Infrastructure spending, stimulus packages")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "📉 Contractionary Fiscal Policy:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "During Inflation:"), " Decrease G, increase T, reduce deficit"),
            React.createElement('li', null, React.createElement('b', null, "Objectives:"), " Reduce AD, control inflation"),
            React.createElement('li', null, React.createElement('b', null, "Tools:"), " Tax increases, expenditure cuts"),
            React.createElement('li', null, React.createElement('b', null, "Examples:"), " Reducing subsidies, increasing excise duties")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Automatic Stabilizers:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Progressive Taxation:"), " Higher incomes pay higher tax rates automatically"),
            React.createElement('li', null, React.createElement('b', null, "Unemployment Benefits:"), " Automatic spending increase during recessions"),
            React.createElement('li', null, React.createElement('b', null, "Corporate Profits Tax:"), " Falls during recessions, rises during booms"),
            React.createElement('li', null, React.createElement('b', null, "Advantage:"), " Work without discretionary policy changes")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Balanced budget multiplier is 1 because expansionary effect of spending equals contractionary effect of taxation!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Fiscal policy effectiveness depends on MPC and crowding-out effects!"
        )
      ),
      examFocus: true,
      example: "Government increases spending by ₹100 and taxes by ₹100. Income increases by ₹100 (multiplier = 1), but disposable income remains same - no net stimulus.",
      mnemonic: "Balanced Budget Multiplier = 1, Expansionary (spend more), Contractionary (spend less) - B B M 1 E C!"
    },
    {
      title: "Public Debt Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Public debt represents accumulated borrowing by government. Effective debt management is crucial for fiscal sustainability and economic stability."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💹 Internal vs External Debt:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Internal Debt:"), " Borrowings within country (treasury bills, bonds)"),
            React.createElement('li', null, React.createElement('b', null, "External Debt:"), " Borrowings from foreign governments/organizations"),
            React.createElement('li', null, React.createElement('b', null, "Management Issues:"), " Currency risk, repayment capacity"),
            React.createElement('li', null, React.createElement('b', null, "India's Position:"), " ~70% internal, ~30% external debt")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Debt Sustainability:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Debt-GDP Ratio:"), " Total debt as % of GDP (India target: <60%)"),
            React.createElement('li', null, React.createElement('b', null, "Debt Servicing:"), " Interest payments + principal repayments"),
            React.createElement('li', null, React.createElement('b', null, "FRBM Act 2003:"), " Fiscal Responsibility and Budget Management Act"),
            React.createElement('li', null, React.createElement('b', null, "FRBM Targets:"), " Revenue deficit elimination, fiscal deficit <3% of GDP")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Methods of Debt Redemption:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Refunding:"), " Replacing old debt with new debt"),
            React.createElement('li', null, React.createElement('b', null, "Conversion:"), " Converting debt into equity or other forms"),
            React.createElement('li', null, React.createElement('b', null, "Sinking Fund:"), " Setting aside funds for debt repayment"),
            React.createElement('li', null, React.createElement('b', null, "Surplus Budgets:"), " Using budget surpluses for debt reduction")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Public debt is both a burden (interest payments) and a blessing (finances development)!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ High debt-GDP ratio increases vulnerability to economic shocks!"
        )
      ),
      examFocus: true,
      example: "India's public debt is ~₹150 lakh crore (~60% of GDP). Annual interest payments ~₹8-10 lakh crore, crowding out development spending.",
      mnemonic: "Internal (domestic borrowing), External (foreign borrowing), FRBM (fiscal responsibility) - I E F!"
    },
    {
      title: "Union Budget Process in India",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The Union Budget is presented annually by the Finance Minister, following a constitutional and procedural framework with specific timelines."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📅 Budget Timeline:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Pre-Budget Consultations:"), " January-February with stakeholders"),
            React.createElement('li', null, React.createElement('b', null, "Budget Presentation:"), " Last working day of February"),
            React.createElement('li', null, React.createElement('b', null, "Railway Budget Merger:"), " Since 2017, combined with general budget"),
            React.createElement('li', null, React.createElement('b', null, "Financial Year:"), " April 1 to March 31")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Budget Documents:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Annual Financial Statement:"), " Main budget document"),
            React.createElement('li', null, React.createElement('b', null, "Demands for Grants:"), " Ministry-wise expenditure demands"),
            React.createElement('li', null, React.createElement('b', null, "Finance Bill:"), " Tax proposals requiring legislative approval"),
            React.createElement('li', null, React.createElement('b', null, "Economic Survey:"), " Annual economic analysis and outlook")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "🎯 Budget Types:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Vote on Account:"), " Interim budget for first 2 months"),
            React.createElement('li', null, React.createElement('b', null, "Interim Budget:"), " When elections due, no new taxes"),
            React.createElement('li', null, React.createElement('b', null, "Regular Budget:"), " Complete budget with new proposals"),
            React.createElement('li', null, React.createElement('b', null, "Supplementary Budget:"), " Additional funds for unexpected expenses")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Budget is presented in Parliament, Finance Bill needs approval, other documents are for information!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Finance Bill lapses if not passed within 75 days of presentation!"
        )
      ),
      examFocus: true,
      example: "Union Budget 2024-25 presented on February 1, 2024 by FM Nirmala Sitharaman, with total expenditure of ₹48 lakh crore and fiscal deficit target of 5.1% of GDP.",
      mnemonic: "Budget (annual statement), Vote-on-account (interim), Finance Bill (tax changes) - B V F!"
    }
  ],
  keywords: [
    { term: "Government Budget", definition: "An annual statement of the government's estimated receipts and expenditures for a financial year." },
    { term: "Allocation Function", definition: "The function of budget to provide public goods and services that markets cannot efficiently provide." },
    { term: "Redistribution Function", definition: "The function of budget to reduce income and wealth inequalities through taxation and subsidies." },
    { term: "Stabilization Function", definition: "The function of budget to maintain economic stability by controlling inflation and unemployment." },
    { term: "Revenue Receipts", definition: "Government receipts that do not create a liability or reduce an asset, including tax and non-tax revenue." },
    { term: "Capital Receipts", definition: "Government receipts that either create a liability or reduce an asset, including borrowings and disinvestment." },
    { term: "Revenue Expenditure", definition: "Government expenditure that does not create an asset or reduce a liability, including salaries and subsidies." },
    { term: "Capital Expenditure", definition: "Government expenditure that creates an asset or reduces a liability, including infrastructure development." },
    { term: "Revenue Deficit", definition: "The excess of government's revenue expenditure over its revenue receipts." },
    { term: "Fiscal Deficit", definition: "The excess of total government expenditure over total receipts, excluding borrowings." },
    { term: "Primary Deficit", definition: "Fiscal deficit minus interest payments on previous borrowings." },
    { term: "Balanced Budget Multiplier", definition: "The multiplier effect when government increases spending and taxes by equal amounts (value = 1)." },
    { term: "Expansionary Fiscal Policy", definition: "Government policy of increasing spending or reducing taxes to stimulate economic growth." },
    { term: "Contractionary Fiscal Policy", definition: "Government policy of reducing spending or increasing taxes to control inflation." },
    { term: "Automatic Stabilizers", definition: "Built-in mechanisms in the budget that automatically stabilize the economy without policy changes." },
    { term: "Public Debt", definition: "The total outstanding borrowings of the government from various sources." },
    { term: "FRBM Act", definition: "Fiscal Responsibility and Budget Management Act, 2003, which sets targets for fiscal and revenue deficits." },
    { term: "Union Budget", definition: "The annual financial statement presented by the Finance Minister in Parliament." },
    { term: "Finance Bill", definition: "The bill containing tax proposals that require parliamentary approval to become law." },
    { term: "Economic Survey", definition: "An annual document that provides an analysis of the Indian economy and future outlook." }
  ],
  caseStudies: [
    {
      title: "Union Budget 2024-25 Analysis",
      scenario: "Union Budget 2024-25 presented with total expenditure ₹48 lakh crore, revenue receipts ₹38 lakh crore, capital receipts ₹12 lakh crore (including ₹11.5 lakh crore borrowings), and fiscal deficit target 5.1% of GDP.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Budget Components Breakdown:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Revenue Receipts:"), " ₹38 lakh crore (tax + non-tax revenue)"),
          React.createElement('li', null, React.createElement('b', null, "Capital Receipts:"), " ₹12 lakh crore (₹11.5 lakh crore borrowings + ₹0.5 lakh crore disinvestment)"),
          React.createElement('li', null, React.createElement('b', null, "Fiscal Deficit:"), " ₹48L - (₹38L + ₹0.5L) = ₹9.5 lakh crore (5.1% of GDP)"),
          React.createElement('li', null, React.createElement('b', null, "Policy Focus:"), " Infrastructure development, digital economy, green energy")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how budget balances growth objectives with fiscal prudence!")
      )
    },
    {
      title: "COVID-19 Fiscal Response",
      scenario: "During COVID-19, Indian government announced ₹27 lakh crore stimulus package including direct cash transfers, food security measures, and economic support to businesses.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Fiscal Policy in Crisis:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Expansionary Policy:"), " Increased spending to boost aggregate demand"),
          React.createElement('li', null, React.createElement('b', null, "Deficit Financing:"), " Higher fiscal deficit (9.5% of GDP in 2020-21)"),
          React.createElement('li', null, React.createElement('b', null, "Automatic Stabilizers:"), " Progressive taxation and unemployment benefits"),
          React.createElement('li', null, React.createElement('b', null, "Multiplier Effect:"), " Government spending created income through successive rounds")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates fiscal policy's role in crisis management!")
      )
    },
    {
      title: "FRBM Act Implementation",
      scenario: "FRBM Act 2003 mandated elimination of revenue deficit by 2008-09 and reduction of fiscal deficit to 3% of GDP by 2008-09. However, targets were missed due to global financial crisis and subsequent amendments.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Fiscal Responsibility Framework:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Original Targets:"), " Zero revenue deficit, 3% fiscal deficit by 2008-09"),
          React.createElement('li', null, React.createElement('b', null, "Challenges Faced:"), " Global crisis, UPA government's expansionary policies"),
          React.createElement('li', null, React.createElement('b', null, "Amendments Made:"), " Extended deadlines, escape clauses for crises"),
          React.createElement('li', null, React.createElement('b', null, "Current Status:"), " Revenue deficit eliminated, fiscal deficit target 4.5% for 2024-25")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This shows tension between fiscal discipline and counter-cyclical policy needs!")
      )
    },
    {
      title: "Public Debt Burden Analysis",
      scenario: "India's public debt stands at ~₹150 lakh crore (~60% of GDP). Annual interest payments consume ~20-25% of revenue receipts, limiting funds for development expenditure.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Debt Sustainability Issues:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Interest Burden:"), " ₹8-10 lakh crore annually on debt servicing"),
          React.createElement('li', null, React.createElement('b', null, "Crowding Out:"), " High borrowing increases interest rates for private sector"),
          React.createElement('li', null, React.createElement('b', null, "Debt Trap Risk:"), " Borrowing to pay interest on past debt"),
          React.createElement('li', null, React.createElement('b', null, "Management Strategy:"), " Mix of domestic and external borrowing, prudent deficit targets")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This illustrates the trade-off between debt-financed growth and fiscal sustainability!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-blue-800 mb-2' }, 'CBSE Board Exam Pattern:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1' },
        React.createElement('li', null, React.createElement('b', null, '1 Mark Questions:'), ' Definition of budget, objectives, components'),
        React.createElement('li', null, React.createElement('b', null, '3-4 Mark Questions:'), ' Calculation of deficits, fiscal policy tools'),
        React.createElement('li', null, React.createElement('b', null, '6 Mark Questions:'), ' Case studies, budget analysis, policy implications'),
        React.createElement('li', null, React.createElement('b', null, 'Numerical Problems:'), ' Deficit calculations, multiplier effect')
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-red-800 mb-2' }, 'Critical Rules & Formulas:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Revenue Deficit:'), ' Revenue Expenditure - Revenue Receipts'),
        React.createElement('li', null, React.createElement('b', null, 'Fiscal Deficit:'), ' Total Expenditure - Total Receipts (excluding borrowings)'),
        React.createElement('li', null, React.createElement('b', null, 'Primary Deficit:'), ' Fiscal Deficit - Interest Payments'),
        React.createElement('li', null, React.createElement('b', null, 'Budget Balance:'), ' Revenue Receipts + Capital Receipts = Revenue Expenditure + Capital Expenditure'),
        React.createElement('li', null, React.createElement('b', null, 'Deficit Financing:'), ' Fiscal Deficit = Borrowings + Other Liabilities')
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-4' },
      React.createElement('h4', { className: 'font-bold text-green-800 mb-2' }, 'Memory Aids & Mnemonics:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Budget Objectives:'), ' "ARS" - Allocation, Redistribution, Stabilization'),
        React.createElement('li', null, React.createElement('b', null, 'Deficit Types:'), ' "RFP" - Revenue, Fiscal, Primary'),
        React.createElement('li', null, React.createElement('b', null, 'Fiscal Policy:'), ' "DEFICIT" - During Expansion Fiscal policy Is Contractionary, In recession Expansionary & Tight'),
        React.createElement('li', null, React.createElement('b', null, 'Budget Process:'), ' "RED" - Railway Budget, Economic Survey, Discussion'),
        React.createElement('li', null, React.createElement('b', null, 'FRBM Act:'), ' "Fiscal Responsibility & Budget Management" - Zero revenue deficit, 3% fiscal deficit')
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg' },
      React.createElement('h4', { className: 'font-bold text-purple-800 mb-2' }, 'Exam Strategy & Tips:'),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Numerical Questions:'), ' Practice deficit calculations with real budget data'),
        React.createElement('li', null, React.createElement('b', null, 'Case Studies:'), ' Link theory to current economic events and budget announcements'),
        React.createElement('li', null, React.createElement('b', null, 'Policy Analysis:'), ' Understand how fiscal policy affects inflation, growth, and inequality'),
        React.createElement('li', null, React.createElement('b', null, 'Current Affairs:'), ' Connect with latest budget, FRBM amendments, and economic surveys'),
        React.createElement('li', null, React.createElement('b', null, 'Common Mistakes:'), ' Don\'t confuse revenue vs capital, receipts vs expenditure')
      )
    )
  )
};
