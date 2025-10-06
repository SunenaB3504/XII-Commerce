import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter9Module: LearningModule = {
  chapter: "9",
  title: "Financial Management",
  overview: "Master financial management fundamentals essential for CBSE Board Exams 2026. This chapter covers financial decisions, objectives, and planning - frequently tested topics worth 15-18 marks. Learn with exam-focused explanations, step-by-step financial analysis, and practical case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Meaning and Concept of Financial Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Financial Management is concerned with optimal procurement and usage of finance to achieve organizational goals. It involves planning, organizing, directing, and controlling financial activities."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Key Aspects of Financial Management:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Procurement of Finance:"), " Identifying and acquiring funds from various sources at minimum cost."),
            React.createElement('li', null, React.createElement('b', null, "Effective Utilization:"), " Investing funds in profitable avenues to maximize returns."),
            React.createElement('li', null, React.createElement('b', null, "Risk Management:"), " Balancing risk and return in financial decisions."),
            React.createElement('li', null, React.createElement('b', null, "Cash Management:"), " Ensuring adequate liquidity for smooth operations."),
            React.createElement('li', null, React.createElement('b', null, "Profit Maximization:"), " Achieving optimal balance between profitability and liquidity.")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Financial Management is the lifeline of business - it ensures funds are available when needed and invested wisely!"
        )
      ),
      examFocus: true,
      mnemonic: "PER CR P - Procurement, Effective utilization, Risk management, Cash management, Profit maximization"
    },
    {
      title: "Objectives of Financial Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The primary objective of financial management is to maximize shareholder wealth, which is achieved through efficient financial decision-making."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🎯 Primary Objective: Wealth Maximization"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Shareholder Wealth:"), " Maximizing the market value of equity shares."),
            React.createElement('li', null, React.createElement('b', null, "Long-term Focus:"), " Sustainable growth rather than short-term profits."),
            React.createElement('li', null, React.createElement('b', null, "Risk-Return Trade-off:"), " Balancing higher returns with acceptable risk levels."),
            React.createElement('li', null, React.createElement('b', null, "Value Creation:"), " Ensuring benefits exceed costs in all financial decisions.")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-yellow-900 mb-2' }, "📊 Secondary Objectives:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Profit Maximization:"), " Earning maximum profits (traditional view, but limited)."),
            React.createElement('li', null, React.createElement('b', null, "Ensuring Liquidity:"), " Maintaining sufficient cash for operations."),
            React.createElement('li', null, React.createElement('b', null, "Maximizing EPS:"), " Increasing earnings per share."),
            React.createElement('li', null, React.createElement('b', null, "Optimal Capital Structure:"), " Balancing debt and equity for minimum cost of capital.")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Wealth maximization considers time value of money and risk, unlike simple profit maximization!"
        )
      ),
      examFocus: true,
      example: "Company A earns ₹100 lakh profit but has high debt risk, share price ₹50. Company B earns ₹80 lakh profit with low risk, share price ₹80. Company B has higher shareholder wealth due to lower risk.",
      mnemonic: "Wealth maximization is the king, profit maximization is just a ring!"
    },
    {
      title: "Financial Decisions - Investment Decision (Capital Budgeting)",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Investment decisions involve allocating funds to long-term assets that will generate future benefits. This is also called capital budgeting decisions."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Types of Investment Decisions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Expansion Decisions:"), " Investing in additional capacity or new products."),
            React.createElement('li', null, React.createElement('b', null, "Replacement Decisions:"), " Replacing old, worn-out assets with new ones."),
            React.createElement('li', null, React.createElement('b', null, "Diversification Decisions:"), " Entering new business areas or markets."),
            React.createElement('li', null, React.createElement('b', null, "Research & Development:"), " Investing in innovation and technological advancement.")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Factors Affecting Investment Decisions:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Cash Flows of the Project"),
              React.createElement('p', { className: 'text-sm' }, "Expected future cash inflows and outflows over the project's life.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Rate of Return"),
              React.createElement('p', { className: 'text-sm' }, "Expected profitability compared to the cost of capital.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Investment Criteria Involved"),
              React.createElement('p', { className: 'text-sm' }, "Techniques like Net Present Value (NPV), Internal Rate of Return (IRR), Payback Period.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Risk Assessment"),
              React.createElement('p', { className: 'text-sm' }, "Evaluating business risk, financial risk, and market risk.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Investment decisions are irreversible and affect the company's long-term profitability and competitiveness!"
        )
      ),
      examFocus: true,
      mnemonic: "Cash flows, Rate of return, Investment criteria - CRI factors!"
    },
    {
      title: "Financial Decisions - Financing Decision (Capital Structure)",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Financing decisions determine the quantum and proportion of funds to be raised from various long-term sources. This involves deciding the mix of debt and equity."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Sources of Long-term Finance:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Owners' Funds (Equity):"), " Ordinary shares, preference shares, retained earnings."),
            React.createElement('li', null, React.createElement('b', null, "Borrowed Funds (Debt):"), " Debentures, term loans, bonds."),
            React.createElement('li', null, React.createElement('b', null, "Hybrid Securities:"), " Convertible debentures, preference shares.")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-2' }, "⚠️ Factors Affecting Financing Decisions:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Cost:"), " Cost of equity vs cost of debt (debt is cheaper but riskier)."),
            React.createElement('li', null, React.createElement('b', null, "Risk:"), " Higher debt increases financial risk and bankruptcy risk."),
            React.createElement('li', null, React.createElement('b', null, "Floatation Costs:"), " Expenses incurred in raising funds."),
            React.createElement('li', null, React.createElement('b', null, "Cash Flow Position:"), " Ability to service debt through regular interest payments."),
            React.createElement('li', null, React.createElement('b', null, "Control Considerations:"), " Debt doesn't dilute ownership control like equity."),
            React.createElement('li', null, React.createElement('b', null, "State of Capital Market:"), " Easy availability and favorable market conditions.")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Optimal capital structure balances low cost (more debt) with acceptable risk (not too much debt)!")
        )
      ),
      examFocus: true,
      mnemonic: "Cost, Risk, Floatation costs, Cash flow, Control, Capital market - CRFC3!"
    },
    {
      title: "Financial Decisions - Dividend Decision",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Dividend decisions relate to the distribution of profits to shareholders. Management must decide how much to pay as dividends and how much to retain for future growth."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "💰 Types of Dividend Decisions:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Dividend Payout Ratio:"), " Percentage of profits distributed as dividends."),
            React.createElement('li', null, React.createElement('b', null, "Stable Dividend Policy:"), " Consistent dividend payments regardless of profit fluctuations."),
            React.createElement('li', null, React.createElement('b', null, "Irregular Dividend Policy:"), " Dividends based on available profits."),
            React.createElement('li', null, React.createElement('b', null, "No Dividend Policy:"), " Retaining all profits for reinvestment.")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Factors Affecting Dividend Decisions:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Amount of Earnings"),
              React.createElement('p', { className: 'text-sm' }, "Higher profits allow higher dividends.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Stability of Earnings"),
              React.createElement('p', { className: 'text-sm' }, "Stable profits support stable dividends.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Stability of Dividends"),
              React.createElement('p', { className: 'text-sm' }, "Once set, dividends should be maintained.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Growth Opportunities"),
              React.createElement('p', { className: 'text-sm' }, "High growth needs require more retention.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Cash Flow Position"),
              React.createElement('p', { className: 'text-sm' }, "Adequate cash needed for dividend payments.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Shareholders' Preference"),
              React.createElement('p', { className: 'text-sm' }, "Some prefer current dividends, others capital gains.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Taxation Policy"),
              React.createElement('p', { className: 'text-sm' }, "Tax rates on dividends vs capital gains.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Stock Market Reaction"),
              React.createElement('p', { className: 'text-sm' }, "Market response to dividend announcements.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Access to Capital Market"),
              React.createElement('p', { className: 'text-sm' }, "Easy access to funds reduces need for retention.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Legal Constraints"),
              React.createElement('p', { className: 'text-sm' }, "Company law requirements for dividend distribution.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Dividend decision involves trade-off between current dividends and future growth through retained earnings!"
        )
      ),
      examFocus: true,
      mnemonic: "Amount, Stability, Growth, Cash flow, Shareholders, Taxation, Stock market, Access, Legal - ASGCS STAL!"
    },
    {
      title: "Financial Planning and Its Importance",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Financial planning is the preparation of a financial blueprint of an organization's future operations. It involves estimating future financial needs and determining the sources to meet those needs."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Objectives of Financial Planning:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Ensuring Availability of Funds:"), " Adequate funds whenever required."),
            React.createElement('li', null, React.createElement('b', null, "Avoiding Surplus/Shortage:"), " Neither idle funds nor financial crisis."),
            React.createElement('li', null, React.createElement('b', null, "Optimum Use of Funds:"), " Maximum returns with minimum risk."),
            React.createElement('li', null, React.createElement('b', null, "Coordination:"), " Integrating various business activities."),
            React.createElement('li', null, React.createElement('b', null, "Future Preparedness:"), " Anticipating and preparing for future needs.")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Importance of Financial Planning:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Helps in Forecasting:"), " Anticipates future financial requirements."),
            React.createElement('li', null, React.createElement('b', null, "Avoids Business Shocks:"), " Prevents financial crises and surprises."),
            React.createElement('li', null, React.createElement('b', null, "Helps in Co-ordinating:"), " Integrates various business functions."),
            React.createElement('li', null, React.createElement('b', null, "Ensures Liquidity:"), " Maintains adequate cash flow."),
            React.createElement('li', null, React.createElement('b', null, "Provides Growth Direction:"), " Guides expansion and diversification plans.")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Financial planning is essential for business survival - without it, even profitable businesses can fail due to cash shortages!"
        )
      ),
      examFocus: true,
      mnemonic: "Forecasting, Avoiding shocks, Co-ordinating, Ensuring liquidity, Growth direction - FACE G!"
    }
  ],
  keywords: [
    { term: "Financial Management", definition: "Optimal procurement and usage of finance to achieve organizational goals with minimum cost and risk." },
    { term: "Wealth Maximization", definition: "Primary objective of financial management to maximize shareholder wealth through increased share prices." },
    { term: "Investment Decision", definition: "Capital budgeting decisions involving allocation of funds to long-term assets for future benefits." },
    { term: "Financing Decision", definition: "Decisions about quantum and proportion of funds to be raised from various long-term sources." },
    { term: "Dividend Decision", definition: "Decisions regarding distribution of profits to shareholders and retention for future growth." },
    { term: "Capital Structure", definition: "Composition of long-term funds in terms of debt and equity proportions." },
    { term: "Cost of Capital", definition: "Minimum rate of return required by investors for providing funds to the company." },
    { term: "Financial Risk", definition: "Risk of default on payment of interest and principal amount to lenders." },
    { term: "Working Capital", definition: "Excess of current assets over current liabilities required for day-to-day operations." },
    { term: "Fixed Capital", definition: "Long-term funds invested in fixed assets like land, building, machinery, etc." },
    { term: "Financial Planning", definition: "Preparation of financial blueprint estimating future financial needs and sources." },
    { term: "Capital Budgeting", definition: "Process of planning and evaluating long-term investments in fixed assets." },
    { term: "Net Present Value (NPV)", definition: "Difference between present value of cash inflows and outflows of an investment project." },
    { term: "Internal Rate of Return (IRR)", definition: "Discount rate that makes NPV of an investment project zero." },
    { term: "Payback Period", definition: "Time required to recover the initial investment in a project." },
    { term: "Dividend Payout Ratio", definition: "Percentage of profits distributed as dividends to shareholders." },
    { term: "Retained Earnings", definition: "Portion of profits kept in business for future growth and expansion." },
    { term: "Floatation Costs", definition: "Expenses incurred in raising funds from various sources like underwriting fees, legal charges." },
    { term: "Trading on Equity", definition: "Use of borrowed funds to increase earnings per share through financial leverage." }
  ],
  caseStudies: [
    {
      title: "Tata Steel's Corus Acquisition - Financial Decision Making",
      scenario: "Tata Steel acquired Corus, a Dutch steel company, for $12 billion in 2007. Tata Steel raised $8 billion through debt and invested $1 billion each from Tata Sons and internal accruals. This acquisition created Tata Steel Europe and significantly impacted the company's capital structure and financial health.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Investment Decision:"), ' Tata Steel evaluated the acquisition as a long-term investment in European markets, considering cash flows, returns, and strategic benefits.'),
          React.createElement('li', null, React.createElement('b', null, "Financing Decision:"), ' The company chose a mix of debt ($8B) and equity ($2B) to optimize capital structure and minimize cost of capital.'),
          React.createElement('li', null, React.createElement('b', null, "Capital Structure Impact:"), ' High debt component increased financial risk but provided tax benefits and maintained control through majority equity holding.'),
          React.createElement('li', null, React.createElement('b', null, "Financial Planning:"), ' The acquisition required comprehensive financial planning to arrange ₹36,500 crores and manage post-acquisition integration costs.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This case demonstrates how major financial decisions affect a company's long-term growth and capital structure!")
      )
    },
    {
      title: "Dividend Dilemma at TechCorp",
      scenario: "TechCorp earned ₹100 crores profit in the current year. The company has ₹200 crores retained earnings from previous years and plans major R&D investments worth ₹150 crores. The board must decide between paying dividends or retaining profits for growth. Shareholders expect 20% dividend payout while analysts recommend reinvestment for future growth.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Dividend Decision Factors:"), ' Amount of earnings (₹100 crores available), growth opportunities (₹150 crores R&D), and shareholder preferences must be balanced.'),
          React.createElement('li', null, React.createElement('b', null, "Stability of Earnings:"), ' TechCorp has consistent profits, supporting stable dividend policy.'),
          React.createElement('li', null, React.createElement('b', null, "Cash Flow Position:"), ' With ₹200 crores retained earnings, the company has strong liquidity for dividends.'),
          React.createElement('li', null, React.createElement('b', null, "Wealth Maximization:"), ' Retaining profits for R&D may increase future share value more than current dividends.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This illustrates the trade-off between current dividends and future growth in dividend decisions!")
      )
    },
    {
      title: "Capital Structure Optimization at AutoMotive Ltd",
      scenario: "AutoMotive Ltd. requires ₹500 crores for expansion. The company can raise funds through equity (cost of equity 15%) or debt (cost of debt 10%). Current capital structure is 60% equity and 40% debt. Raising more debt would increase the cost of debt to 12% due to higher risk. The finance manager must decide the optimal mix.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Cost Factor:"), ' Debt is cheaper (10-12%) than equity (15%), but cost increases with more debt.'),
          React.createElement('li', null, React.createElement('b', null, "Risk Factor:"), ' Higher debt increases financial risk and bankruptcy probability.'),
          React.createElement('li', null, React.createElement('b', null, "Control Considerations:"), ' More equity dilutes existing shareholders\' control.'),
          React.createElement('li', null, React.createElement('b', null, "Cash Flow Position:"), ' Company must ensure ability to service increased debt obligations.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This case shows how financing decisions balance cost minimization with risk management!")
      )
    },
    {
      title: "Working Capital Crisis at RetailChain",
      scenario: "RetailChain experienced a severe cash crunch during festival season despite having ₹50 crores inventory and ₹30 crores debtors. The company couldn't pay suppliers on time, leading to disrupted supplies. Analysis revealed poor working capital management with excessive inventory holding and lenient credit terms to customers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Working Capital Management:"), ' Despite having current assets worth ₹80 crores, liquidity crisis occurred due to poor cash management.'),
          React.createElement('li', null, React.createElement('b', null, "Inventory Management:"), ' Excessive inventory blocked funds that could have been used for operations.'),
          React.createElement('li', null, React.createElement('b', null, "Receivables Management:"), ' Lenient credit terms delayed cash inflows during peak season.'),
          React.createElement('li', null, React.createElement('b', null, "Financial Planning Failure:"), ' Lack of contingency planning for seasonal cash flow fluctuations.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This demonstrates how poor financial management can lead to business failure despite having assets!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 9: Financial Management at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Financial Management = Optimal procurement + Effective usage of finance"),
      React.createElement('li', null, "Primary Objective: Wealth Maximization (increase share price)"),
      React.createElement('li', null, "Three Financial Decisions: Investment (Capital Budgeting), Financing (Capital Structure), Dividend"),
      React.createElement('li', null, "Investment Factors: Cash flows, Rate of return, Investment criteria"),
      React.createElement('li', null, "Financing Factors: Cost, Risk, Floatation costs, Cash flow, Control, Capital market"),
      React.createElement('li', null, "Dividend Factors: Amount, Stability, Growth, Cash flow, Shareholders, Taxation, Stock market, Access, Legal"),
      React.createElement('li', null, "Financial Planning: Ensures fund availability, avoids shocks, coordinates activities"),
      React.createElement('li', null, "Remember: Wealth maximization considers risk & time value, unlike profit maximization!")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning, objectives, factors affecting decisions"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain financial decisions, importance of planning"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Factors affecting capital structure, dividend decisions"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on financial decision making")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Wealth maximization is the primary objective, not profit maximization"),
        React.createElement('li', null, "Investment decisions affect long-term profitability and competitiveness"),
        React.createElement('li', null, "Financing decisions balance cost and risk in capital structure"),
        React.createElement('li', null, "Dividend decisions involve trade-off between current payouts and future growth"),
        React.createElement('li', null, "Financial planning prevents cash flow crises and ensures liquidity")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Financial Decisions: Investment, Financing, Dividend - IFD"),
        React.createElement('p', { className: 'font-semibold' }, "Investment Factors: Cash flows, Rate of return, Investment criteria - CRI"),
        React.createElement('p', { className: 'font-semibold' }, "Financing Factors: Cost, Risk, Floatation costs, Cash flow, Control, Capital market - CRFC3"),
        React.createElement('p', { className: 'font-semibold' }, "Dividend Factors: Amount, Stability, Growth, Cash flow, Shareholders, Taxation, Stock market, Access, Legal - ASGCS STAL"),
        React.createElement('p', { className: 'font-semibold' }, "Financial Planning Importance: Forecasting, Avoiding shocks, Co-ordinating, Ensuring liquidity, Growth direction - FACE G")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain wealth maximization as increasing share price through efficient decisions"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse profit maximization with wealth maximization - profit maximization ignores risk and time value"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples of factors affecting each financial decision"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that all three decisions are interconnected and affect shareholder wealth"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Mention how financial planning prevents business shocks and ensures coordination"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say financial management is only about raising funds - it includes optimal utilization too")
      )
    )
  )
};