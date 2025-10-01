import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter10Module: LearningModule = {
  chapter: "10",
  title: "Accounting Ratios",
  overview: React.createElement("div", { className: "space-y-4" },
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Chapter 10 explores accounting ratios, powerful analytical tools that establish quantitative relationships between financial statement items. This comprehensive topic covers four main categories of ratios: Liquidity, Solvency, Activity, and Profitability, enabling systematic analysis of a company's financial health and performance."
    ),
    React.createElement("p", { className: "text-lg leading-relaxed" },
      "Master ratio calculations, interpretations, and comparative analysis. Learn to assess short-term liquidity, long-term solvency, operational efficiency, and profitability through standardized financial metrics essential for investment and credit decisions."
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6" },
      React.createElement("p", { className: "font-semibold text-indigo-800" }, "\uD83D\udd25 Exam Focus Areas:"),
      React.createElement("ul", { className: "mt-2 space-y-1 text-indigo-700" },
        React.createElement("li", null, "• Liquidity ratios calculation and interpretation (6-8 marks)"),
        React.createElement("li", null, "• Solvency ratios analysis (6-8 marks)"),
        React.createElement("li", null, "• Activity/turnover ratios (6-8 marks)"),
        React.createElement("li", null, "• Profitability ratios (8-10 marks)"),
        React.createElement("li", null, "• Comparative ratio analysis (4-6 marks)")
      )
    )
  ),
  keyConcepts: [
    {
      title: "Liquidity Ratios",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Liquidity ratios measure a company's ability to meet its short-term obligations as they become due. They assess the adequacy of current assets to cover current liabilities."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Types of Liquidity Ratios:"),
          React.createElement("div", { className: "space-y-3 text-indigo-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Current Ratio:"),
              React.createElement("p", null, "Current Assets ÷ Current Liabilities"),
              React.createElement("p", null, "Ideal ratio: 2:1 (varies by industry)")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Quick/Acid-Test Ratio:"),
              React.createElement("p", null, "Quick Assets ÷ Current Liabilities"),
              React.createElement("p", null, "Quick Assets = Current Assets - Inventory - Prepaid Expenses"),
              React.createElement("p", null, "Ideal ratio: 1:1")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Absolute Liquid/Cash Ratio:"),
              React.createElement("p", null, "Absolute Liquid Assets ÷ Current Liabilities"),
              React.createElement("p", null, "Absolute Liquid Assets = Cash + Bank + Marketable Securities"),
              React.createElement("p", null, "Ideal ratio: 0.5:1 to 1:1")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Interpretation Guidelines:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Higher ratio indicates better liquidity"),
            React.createElement("li", null, "• Too high ratio may indicate idle funds"),
            React.createElement("li", null, "• Compare with industry standards"),
            React.createElement("li", null, "• Trend analysis over time is important")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-purple-50 border-2 border-purple-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-purple-800 text-center" }, "LIQUIDITY - Short-term Safety"),
        React.createElement("p", { className: "text-purple-700 text-center text-sm mt-1" }, "Current (2:1), Quick (1:1), Cash (0.5:1) - Meet short-term obligations")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Liquidity Ratios Calculation:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Current Assets: ₹8,00,000"),
          React.createElement("p", null, "Inventory: ₹2,00,000"),
          React.createElement("p", null, "Prepaid Expenses: ₹50,000"),
          React.createElement("p", null, "Current Liabilities: ₹4,00,000"),
          React.createElement("p", null, "Cash & Bank: ₹1,50,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Current Ratio: ₹8,00,000 ÷ ₹4,00,000 = 2:1 ✓"),
          React.createElement("p", null, "Quick Ratio: (₹8,00,000 - ₹2,00,000 - ₹50,000) ÷ ₹4,00,000 = 1.375:1"),
          React.createElement("p", null, "Cash Ratio: ₹1,50,000 ÷ ₹4,00,000 = 0.375:1")
        )
      )
    },
    {
      title: "Solvency Ratios",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Solvency ratios assess a company's ability to meet its long-term obligations and indicate the proportion of debt and equity in financing the assets."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Types of Solvency Ratios:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Debt-Equity Ratio:"),
              React.createElement("p", null, "Long-term Debt ÷ Shareholders' Funds"),
              React.createElement("p", null, "Ideal ratio: 2:1 or lower (industry dependent)")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Total Assets to Debt Ratio:"),
              React.createElement("p", null, "Total Assets ÷ Long-term Debt"),
              React.createElement("p", null, "Shows debt-paying capacity of assets")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Proprietary/Equity Ratio:"),
              React.createElement("p", null, "Shareholders' Funds ÷ Total Assets"),
              React.createElement("p", null, "Shows proportion of assets financed by owners")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Interest Coverage Ratio:"),
              React.createElement("p", null, "Profit before Interest and Tax ÷ Interest"),
              React.createElement("p", null, "Shows ability to pay interest on debt")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Interpretation Guidelines:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Lower debt-equity ratio indicates safer capital structure"),
            React.createElement("li", null, "• Higher proprietary ratio indicates stronger equity base"),
            React.createElement("li", null, "• Interest coverage > 2-3 times is considered safe"),
            React.createElement("li", null, "• Compare with industry averages and company history")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-teal-50 border-2 border-teal-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-teal-800 text-center" }, "SOLVENCY - Long-term Safety"),
        React.createElement("p", { className: "text-teal-700 text-center text-sm mt-1" }, "Debt-Equity (2:1), Proprietary (0.5+), Interest Coverage (2-3x) - Meet long-term obligations")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Solvency Ratios Calculation:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Long-term Debt: ₹10,00,000"),
          React.createElement("p", null, "Shareholders' Funds: ₹15,00,000"),
          React.createElement("p", null, "Total Assets: ₹25,00,000"),
          React.createElement("p", null, "Profit before Interest & Tax: ₹4,00,000"),
          React.createElement("p", null, "Interest: ₹1,00,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Debt-Equity Ratio: ₹10,00,000 ÷ ₹15,00,000 = 0.67:1 ✓"),
          React.createElement("p", null, "Proprietary Ratio: ₹15,00,000 ÷ ₹25,00,000 = 0.6:1"),
          React.createElement("p", null, "Interest Coverage: ₹4,00,000 ÷ ₹1,00,000 = 4 times ✓")
        )
      )
    },
    {
      title: "Activity/Turnover Ratios",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Activity ratios measure how efficiently a company utilizes its assets to generate sales. They indicate the speed with which various assets are converted into sales."
        ),
        React.createElement("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4" },
          React.createElement("h4", { className: "font-bold text-purple-800" }, "Types of Activity Ratios:"),
          React.createElement("div", { className: "space-y-3 text-purple-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Inventory Turnover Ratio:"),
              React.createElement("p", null, "Cost of Revenue from Operations ÷ Average Inventory"),
              React.createElement("p", null, "Shows how many times inventory is sold and replaced")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Trade Receivables Turnover Ratio:"),
              React.createElement("p", null, "Net Credit Revenue from Operations ÷ Average Trade Receivables"),
              React.createElement("p", null, "Shows efficiency in collecting receivables")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Trade Payables Turnover Ratio:"),
              React.createElement("p", null, "Net Credit Purchases ÷ Average Trade Payables"),
              React.createElement("p", null, "Shows how quickly company pays its suppliers")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Working Capital Turnover Ratio:"),
              React.createElement("p", null, "Revenue from Operations ÷ Working Capital"),
              React.createElement("p", null, "Shows efficiency in using working capital")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "5. Fixed Assets Turnover Ratio:"),
              React.createElement("p", null, "Revenue from Operations ÷ Fixed Assets"),
              React.createElement("p", null, "Shows efficiency in using fixed assets")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Interpretation Guidelines:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Higher turnover ratios generally indicate better efficiency"),
            React.createElement("li", null, "• Compare with industry standards"),
            React.createElement("li", null, "• Very high ratios may indicate under-investment in assets"),
            React.createElement("li", null, "• Very low ratios may indicate over-investment or inefficiency")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-pink-50 border-2 border-pink-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-pink-800 text-center" }, "ACTIVITY - Efficiency Measures"),
        React.createElement("p", { className: "text-pink-700 text-center text-sm mt-1" }, "Inventory, Receivables, Payables, Working Capital, Fixed Assets - Asset utilization speed")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Activity Ratios Calculation:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Revenue from Operations: ₹50,00,000"),
          React.createElement("p", null, "Cost of Revenue: ₹35,00,000"),
          React.createElement("p", null, "Average Inventory: ₹5,00,000"),
          React.createElement("p", null, "Average Trade Receivables: ₹8,00,000"),
          React.createElement("p", null, "Average Trade Payables: ₹6,00,000"),
          React.createElement("p", null, "Fixed Assets: ₹20,00,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Inventory Turnover: ₹35,00,000 ÷ ₹5,00,000 = 7 times"),
          React.createElement("p", null, "Receivables Turnover: ₹50,00,000 ÷ ₹8,00,000 = 6.25 times"),
          React.createElement("p", null, "Payables Turnover: ₹35,00,000 ÷ ₹6,00,000 = 5.83 times"),
          React.createElement("p", null, "Fixed Assets Turnover: ₹50,00,000 ÷ ₹20,00,000 = 2.5 times")
        )
      )
    },
    {
      title: "Profitability Ratios",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Profitability ratios measure the overall efficiency and performance of a business in terms of profits generated from sales, assets, and equity."
        ),
        React.createElement("div", { className: "bg-green-50 border-l-4 border-green-500 p-4" },
          React.createElement("h4", { className: "font-bold text-green-800" }, "Types of Profitability Ratios:"),
          React.createElement("div", { className: "space-y-3 text-green-700 text-sm" },
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "1. Gross Profit Ratio:"),
              React.createElement("p", null, "(Gross Profit ÷ Revenue from Operations) × 100"),
              React.createElement("p", null, "Shows manufacturing/trading efficiency")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "2. Operating Ratio:"),
              React.createElement("p", null, "(Operating Cost ÷ Revenue from Operations) × 100"),
              React.createElement("p", null, "Shows operational efficiency (lower is better)")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "3. Net Profit Ratio:"),
              React.createElement("p", null, "(Net Profit ÷ Revenue from Operations) × 100"),
              React.createElement("p", null, "Shows overall profitability")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "4. Return on Investment (ROI):"),
              React.createElement("p", null, "(Profit before Interest & Tax ÷ Capital Employed) × 100"),
              React.createElement("p", null, "Shows return on total capital invested")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "5. Return on Equity (ROE):"),
              React.createElement("p", null, "(Net Profit after Tax ÷ Shareholders' Funds) × 100"),
              React.createElement("p", null, "Shows return to equity shareholders")
            ),
            React.createElement("div", { className: "bg-white p-2 rounded" },
              React.createElement("p", { className: "font-semibold" }, "6. Earnings Per Share (EPS):"),
              React.createElement("p", null, "Net Profit available to Equity Shareholders ÷ Number of Equity Shares"),
              React.createElement("p", null, "Shows earnings per equity share")
            )
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Interpretation Guidelines:"),
          React.createElement("ul", { className: "space-y-1 text-blue-700 text-sm" },
            React.createElement("li", null, "• Higher ratios indicate better profitability"),
            React.createElement("li", null, "• Compare with industry standards and past performance"),
            React.createElement("li", null, "• Gross profit ratio varies by industry (manufacturing vs trading)"),
            React.createElement("li", null, "• Operating ratio + Net profit ratio = 100%")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-lime-50 border-2 border-lime-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-lime-800 text-center" }, "PROFITABILITY - Performance Measures"),
        React.createElement("p", { className: "text-lime-700 text-center text-sm mt-1" }, "Gross, Operating, Net, ROI, ROE, EPS - Profit generation efficiency")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Profitability Ratios Calculation:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Revenue from Operations: ₹50,00,000"),
          React.createElement("p", null, "Gross Profit: ₹15,00,000"),
          React.createElement("p", null, "Operating Expenses: ₹8,00,000"),
          React.createElement("p", null, "Net Profit: ₹5,00,000"),
          React.createElement("p", null, "Profit before Interest & Tax: ₹7,00,000"),
          React.createElement("p", null, "Capital Employed: ₹25,00,000"),
          React.createElement("p", null, "Shareholders' Funds: ₹15,00,000"),
          React.createElement("p", null, "Number of Equity Shares: ₹10,000"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Gross Profit Ratio: (₹15,00,000 ÷ ₹50,00,000) × 100 = 30%"),
          React.createElement("p", null, "Net Profit Ratio: (₹5,00,000 ÷ ₹50,00,000) × 100 = 10%"),
          React.createElement("p", null, "ROI: (₹7,00,000 ÷ ₹25,00,000) × 100 = 28%"),
          React.createElement("p", null, "ROE: (₹5,00,000 ÷ ₹15,00,000) × 100 = 33.33%"),
          React.createElement("p", null, "EPS: ₹5,00,000 ÷ 10,000 = ₹50")
        )
      )
    },
    {
      title: "Analysis and Interpretation of Ratios",
      content: React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: "leading-relaxed" },
          "Ratio analysis involves comparing ratios with industry standards, past performance, and competitors to draw meaningful conclusions about a company's financial health."
        ),
        React.createElement("div", { className: "bg-indigo-50 border-l-4 border-indigo-500 p-4" },
          React.createElement("h4", { className: "font-bold text-indigo-800" }, "Comparative Analysis Methods:"),
          React.createElement("div", { className: "space-y-2 text-indigo-700 text-sm" },
            React.createElement("p", null, "• Trend Analysis: Compare ratios over time"),
            React.createElement("p", null, "• Industry Comparison: Compare with industry averages"),
            React.createElement("p", null, "• Inter-firm Comparison: Compare with competitors"),
            React.createElement("p", null, "• Budgeted Ratios: Compare with planned targets")
          )
        ),
        React.createElement("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-green-800 mb-2" }, "Limitations of Ratio Analysis:"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "• Based on historical data"),
            React.createElement("p", null, "• Affected by accounting policies"),
            React.createElement("p", null, "• Window dressing possible"),
            React.createElement("p", null, "• Ignores qualitative factors"),
            React.createElement("p", null, "• Different accounting periods"),
            React.createElement("p", null, "• Inflation not considered")
          )
        ),
        React.createElement("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4" },
          React.createElement("h4", { className: "font-bold text-blue-800 mb-2" }, "Integrated Ratio Analysis:"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "• DuPont Analysis: ROE = Net Profit Margin × Asset Turnover × Equity Multiplier"),
            React.createElement("p", null, "• Pyramid of Ratios: Start from simple to complex ratios"),
            React.createElement("p", null, "• Ratio Interrelationships: How ratios affect each other")
          )
        )
      ),
      examFocus: true,
      mnemonic: React.createElement("div", { className: "bg-rose-50 border-2 border-rose-200 rounded-lg p-3 mt-3" },
        React.createElement("p", { className: "font-bold text-rose-800 text-center" }, "ANALYSIS - Meaningful Insights"),
        React.createElement("p", { className: "text-rose-700 text-center text-sm mt-1" }, "Compare trends, industry, competitors; Consider limitations; Use integrated approach")
      ),
      example: React.createElement("div", { className: "bg-white border border-gray-200 rounded-lg p-4" },
        React.createElement("p", { className: "font-semibold text-gray-800" }, "Comprehensive Ratio Analysis:"),
        React.createElement("div", { className: "bg-gray-50 p-3 rounded text-sm mt-2 space-y-2" },
          React.createElement("p", null, "Company Ratios vs Industry Averages:"),
          React.createElement("p", null, "Current Ratio: 2.5:1 vs Industry 2:1 → Strong liquidity"),
          React.createElement("p", null, "Debt-Equity: 0.8:1 vs Industry 1.2:1 → Conservative financing"),
          React.createElement("p", null, "Inventory Turnover: 8 times vs Industry 6 times → Efficient inventory management"),
          React.createElement("p", null, "Net Profit Ratio: 12% vs Industry 10% → Better profitability"),
          React.createElement("p", null, "ROE: 20% vs Industry 15% → Superior returns to shareholders"),
          React.createElement("p", null, ""),
          React.createElement("p", null, "Overall Assessment: Company shows strong financial health with efficient operations and conservative financing strategy.")
        )
      )
    }
  ],
  keywords: [
    { term: "Accounting Ratios", definition: "Quantitative relationships between two or more items in financial statements, used for analyzing financial performance and position." },
    { term: "Liquidity Ratios", definition: "Ratios that measure a company's ability to meet its short-term obligations as they become due." },
    { term: "Current Ratio", definition: "Ratio of current assets to current liabilities, ideal ratio is 2:1." },
    { term: "Quick Ratio", definition: "Ratio of quick assets (current assets minus inventory) to current liabilities, ideal ratio is 1:1." },
    { term: "Solvency Ratios", definition: "Ratios that assess a company's ability to meet its long-term obligations." },
    { term: "Debt-Equity Ratio", definition: "Ratio of long-term debt to shareholders' funds, lower ratio indicates safer capital structure." },
    { term: "Proprietary Ratio", definition: "Ratio of shareholders' funds to total assets, shows proportion of assets financed by owners." },
    { term: "Activity Ratios", definition: "Ratios that measure how efficiently a company utilizes its assets to generate sales." },
    { term: "Inventory Turnover Ratio", definition: "Ratio of cost of revenue from operations to average inventory, shows inventory management efficiency." },
    { term: "Trade Receivables Turnover Ratio", definition: "Ratio of net credit revenue to average trade receivables, shows efficiency in collecting dues." },
    { term: "Profitability Ratios", definition: "Ratios that measure the overall efficiency and performance of a business in terms of profits." },
    { term: "Gross Profit Ratio", definition: "Ratio of gross profit to revenue from operations, shows manufacturing or trading efficiency." },
    { term: "Net Profit Ratio", definition: "Ratio of net profit to revenue from operations, shows overall profitability." },
    { term: "Return on Investment (ROI)", definition: "Ratio of profit before interest and tax to capital employed, shows return on total capital." },
    { term: "Return on Equity (ROE)", definition: "Ratio of net profit after tax to shareholders' funds, shows return to equity shareholders." },
    { term: "Earnings Per Share (EPS)", definition: "Net profit available to equity shareholders divided by number of equity shares outstanding." },
    { term: "Operating Ratio", definition: "Ratio of operating cost to revenue from operations, lower ratio indicates better operational efficiency." },
    { term: "Interest Coverage Ratio", definition: "Ratio of profit before interest and tax to interest expense, shows ability to pay interest." },
    { term: "Working Capital Turnover Ratio", definition: "Ratio of revenue from operations to working capital, shows efficiency in using working capital." },
    { term: "Fixed Assets Turnover Ratio", definition: "Ratio of revenue from operations to fixed assets, shows efficiency in using fixed assets." },
    { term: "Trade Payables Turnover Ratio", definition: "Ratio of net credit purchases to average trade payables, shows payment period to suppliers." },
    { term: "DuPont Analysis", definition: "Method of breaking down ROE into three components: profitability, efficiency, and leverage." },
    { term: "Trend Analysis", definition: "Comparison of ratios over a period of time to identify patterns and changes." },
    { term: "Industry Comparison", definition: "Comparison of company's ratios with industry averages to assess relative performance." }
  ],
  caseStudies: [
    {
      title: "Comprehensive Ratio Analysis of XYZ Ltd.",
      scenario: "XYZ Ltd. has the following financial data for the year ended 31st March, 2024: Revenue from Operations ₹1,00,00,000, Gross Profit ₹30,00,000, Operating Expenses ₹15,00,000, Net Profit ₹10,00,000, Current Assets ₹40,00,000, Current Liabilities ₹20,00,000, Inventory ₹10,00,000, Long-term Debt ₹30,00,000, Shareholders' Funds ₹50,00,000, Fixed Assets ₹60,00,000. Calculate and analyze all major ratios.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 LIQUIDITY RATIOS"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Current Ratio: ₹40,00,000 ÷ ₹20,00,000 = 2:1 ✓ (Ideal)"),
            React.createElement("p", null, "Quick Ratio: (₹40,00,000 - ₹10,00,000) ÷ ₹20,00,000 = 1.5:1 ✓ (Good)"),
            React.createElement("p", null, "Analysis: Excellent liquidity position with comfortable margins")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 SOLVENCY RATIOS"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Debt-Equity Ratio: ₹30,00,000 ÷ ₹50,00,000 = 0.6:1 ✓ (Conservative)"),
            React.createElement("p", null, "Proprietary Ratio: ₹50,00,000 ÷ ₹90,00,000 = 55.6% ✓ (Strong equity base)"),
            React.createElement("p", null, "Analysis: Conservative financing with strong equity support")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 ACTIVITY RATIOS"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Inventory Turnover: ₹70,00,000 ÷ ₹10,00,000 = 7 times ✓ (Efficient)"),
            React.createElement("p", null, "Fixed Assets Turnover: ₹1,00,00,000 ÷ ₹60,00,000 = 1.67 times (Average)"),
            React.createElement("p", null, "Analysis: Good inventory management, moderate fixed asset utilization")
          )
        ),
        React.createElement("div", { className: "bg-red-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-red-900 mb-2" }, "📊 PROFITABILITY RATIOS"),
          React.createElement("div", { className: "text-red-700 text-sm space-y-1" },
            React.createElement("p", null, "Gross Profit Ratio: ₹30,00,000 ÷ ₹1,00,00,000 × 100 = 30% ✓ (Good)"),
            React.createElement("p", null, "Net Profit Ratio: ₹10,00,000 ÷ ₹1,00,00,000 × 100 = 10% ✓ (Satisfactory)"),
            React.createElement("p", null, "ROI: ₹15,00,000 ÷ ₹80,00,000 × 100 = 18.75% ✓ (Good return)"),
            React.createElement("p", null, "ROE: ₹10,00,000 ÷ ₹50,00,000 × 100 = 20% ✓ (Excellent)"),
            React.createElement("p", null, "Analysis: Strong profitability with excellent returns to shareholders")
          )
        )
      )
    },
    {
      title: "Inter-firm and Trend Analysis",
      scenario: "ABC Ltd. and XYZ Ltd. operate in the same industry. ABC Ltd.'s current ratio improved from 1.8:1 in 2022 to 2.2:1 in 2023, while debt-equity ratio decreased from 1.2:1 to 0.8:1. XYZ Ltd. has current ratio of 1.5:1 and debt-equity ratio of 1.5:1. Industry averages are current ratio 2:1 and debt-equity ratio 1:1. Analyze the performance.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 TREND ANALYSIS (ABC Ltd.)"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Current Ratio: 1.8:1 → 2.2:1 (+22% improvement)"),
            React.createElement("p", null, "Debt-Equity Ratio: 1.2:1 → 0.8:1 (-33% reduction)"),
            React.createElement("p", null, "Analysis: Improving liquidity and financial stability over time")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 INTER-FIRM COMPARISON"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "ABC Ltd. vs XYZ Ltd.:"),
            React.createElement("p", null, "Current Ratio: 2.2:1 vs 1.5:1 → ABC has better liquidity"),
            React.createElement("p", null, "Debt-Equity: 0.8:1 vs 1.5:1 → ABC has safer capital structure"),
            React.createElement("p", null, "Analysis: ABC Ltd. outperforms XYZ Ltd. in both liquidity and solvency")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 INDUSTRY COMPARISON"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "ABC Ltd. vs Industry:"),
            React.createElement("p", null, "Current Ratio: 2.2:1 vs 2:1 → Slightly above industry average"),
            React.createElement("p", null, "Debt-Equity: 0.8:1 vs 1:1 → Better than industry average"),
            React.createElement("p", null, "XYZ Ltd. vs Industry:"),
            React.createElement("p", null, "Current Ratio: 1.5:1 vs 2:1 → Below industry average"),
            React.createElement("p", null, "Debt-Equity: 1.5:1 vs 1:1 → Higher risk than industry"),
            React.createElement("p", null, "Analysis: ABC Ltd. shows superior performance compared to both competitor and industry")
          )
        )
      )
    },
    {
      title: "DuPont Analysis and Integrated Ratio Study",
      scenario: "PQR Ltd. has ROE of 24%, net profit margin of 12%, asset turnover ratio of 1.5 times, and equity multiplier of 1.33. Break down the ROE using DuPont analysis and identify areas for improvement.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 DUPONT ANALYSIS BREAKDOWN"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "ROE = Net Profit Margin × Asset Turnover × Equity Multiplier"),
            React.createElement("p", null, "24% = 12% × 1.5 × 1.33"),
            React.createElement("p", null, "Verification: 12% × 1.5 = 18%, 18% × 1.33 = 24% ✓"),
            React.createElement("p", null, "Analysis: All three components contribute to strong ROE")
          )
        ),
        React.createElement("div", { className: "bg-green-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-green-900 mb-2" }, "📊 COMPONENT ANALYSIS"),
          React.createElement("div", { className: "text-green-700 text-sm space-y-1" },
            React.createElement("p", null, "Net Profit Margin (12%): Good profitability from sales"),
            React.createElement("p", null, "Asset Turnover (1.5x): Efficient asset utilization"),
            React.createElement("p", null, "Equity Multiplier (1.33x): Moderate financial leverage"),
            React.createElement("p", null, "Analysis: Balanced performance across profitability, efficiency, and leverage")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 IMPROVEMENT AREAS"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "To increase ROE to 30%:"),
            React.createElement("p", null, "• Improve margin to 15%: +2.25% ROE"),
            React.createElement("p", null, "• Increase turnover to 1.8x: +3.6% ROE"),
            React.createElement("p", null, "• Higher leverage to 1.5x: +2.7% ROE"),
            React.createElement("p", null, "Analysis: Focus on profitability and efficiency rather than excessive leverage")
          )
        )
      )
    },
    {
      title: "Ratio Limitations and Qualitative Factors",
      scenario: "RST Ltd. shows excellent ratios: current ratio 3:1, debt-equity 0.5:1, net profit ratio 25%, ROE 30%. However, the company is facing management succession issues, key customer concentration, and regulatory investigations. Discuss how qualitative factors affect ratio analysis.",
      analysis: React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "bg-blue-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-blue-900 mb-2" }, "📊 QUANTITATIVE STRENGTHS"),
          React.createElement("div", { className: "text-blue-700 text-sm space-y-1" },
            React.createElement("p", null, "Current Ratio: 3:1 → Excellent liquidity"),
            React.createElement("p", null, "Debt-Equity: 0.5:1 → Very conservative financing"),
            React.createElement("p", null, "Net Profit Ratio: 25% → Superior profitability"),
            React.createElement("p", null, "ROE: 30% → Outstanding returns"),
            React.createElement("p", null, "Analysis: Numbers suggest very strong financial health")
          )
        ),
        React.createElement("div", { className: "bg-red-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-red-900 mb-2" }, "📊 QUALITATIVE RISKS"),
          React.createElement("div", { className: "text-red-700 text-sm space-y-1" },
            React.createElement("p", null, "Management Succession: Uncertain future leadership"),
            React.createElement("p", null, "Customer Concentration: High business risk"),
            React.createElement("p", null, "Regulatory Investigations: Potential legal/financial penalties"),
            React.createElement("p", null, "Analysis: Qualitative factors significantly impact investment risk")
          )
        ),
        React.createElement("div", { className: "bg-purple-50 p-4 rounded-lg" },
          React.createElement("h4", { className: "font-bold text-purple-900 mb-2" }, "📊 INTEGRATED ASSESSMENT"),
          React.createElement("div", { className: "text-purple-700 text-sm space-y-1" },
            React.createElement("p", null, "Ratio analysis alone is insufficient for investment decisions"),
            React.createElement("p", null, "Qualitative factors can make strong quantitative performance unsustainable"),
            React.createElement("p", null, "Comprehensive due diligence requires both quantitative and qualitative analysis"),
            React.createElement("p", null, "Risk assessment should consider management quality, competitive position, regulatory environment"),
            React.createElement("p", null, "Conclusion: Despite excellent ratios, qualitative risks make this a high-risk investment")
          )
        )
      )
    }
  ],
  quickRevision: React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4" },
      React.createElement("h3", { className: "font-bold text-red-800 mb-2" }, "⚡ Critical Rules to Remember:"),
      React.createElement("ul", { className: "space-y-1 text-red-700 text-sm" },
        React.createElement("li", null, "• Liquidity: Current (2:1), Quick (1:1), Cash (0.5:1)"),
        React.createElement("li", null, "• Solvency: Debt-Equity (2:1 or lower), Proprietary (0.5+), Interest Coverage (2-3x)"),
        React.createElement("li", null, "• Activity: Higher turnover ratios indicate better efficiency"),
        React.createElement("li", null, "• Profitability: Higher percentages indicate better performance"),
        React.createElement("li", null, "• Compare with industry standards and past performance"),
        React.createElement("li", null, "• Consider qualitative factors along with quantitative ratios")
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4" },
      React.createElement("h3", { className: "font-bold text-green-800 mb-2" }, "📊 Formula Quick Reference:"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-sm" },
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Liquidity Ratios:"),
          React.createElement("p", { className: "text-green-700" }, "Current: CA ÷ CL, Quick: (CA - Inv) ÷ CL")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Solvency Ratios:"),
          React.createElement("p", { className: "text-green-700" }, "D/E: LTD ÷ SF, Proprietary: SF ÷ TA")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Activity Ratios:"),
          React.createElement("p", { className: "text-green-700" }, "Inv TO: COGS ÷ Avg Inv, Rec TO: Credit Sales ÷ Avg Rec")
        ),
        React.createElement("div", { className: "bg-white p-3 rounded border" },
          React.createElement("p", { className: "font-semibold text-green-800" }, "Profitability Ratios:"),
          React.createElement("p", { className: "text-green-700" }, "GP%: GP ÷ Sales × 100, NP%: NP ÷ Sales × 100")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4" },
      React.createElement("h3", { className: "font-bold text-purple-800 mb-2" }, "🎯 Exam Strategy:"),
      React.createElement("div", { className: "space-y-2 text-purple-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "Common Mistakes to Avoid:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Wrong formula application"),
          React.createElement("li", null, "• Using wrong figures from financial statements"),
          React.createElement("li", null, "• Not considering industry standards"),
          React.createElement("li", null, "• Ignoring qualitative factors"),
          React.createElement("li", null, "• Wrong interpretation of ratio results")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Time-Saving Tips:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Calculate liquidity ratios first (easiest)"),
          React.createElement("p", null, "• Use consistent rounding (usually 2 decimal places)"),
          React.createElement("p", null, "• Remember ideal ratios as benchmarks"),
          React.createElement("p", null, "• Compare ratios logically (higher better for most ratios)"),
          React.createElement("p", null, "• Practice with complete financial statements")
        )
      )
    ),
    React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4" },
      React.createElement("h3", { className: "font-bold text-yellow-800 mb-2" }, "📈 Pattern Analysis:"),
      React.createElement("div", { className: "space-y-2 text-yellow-700 text-sm" },
        React.createElement("p", null, React.createElement("strong", null, "High-Weightage Topics:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Profitability ratios calculation (8-10 marks)"),
          React.createElement("li", null, "• Liquidity ratios analysis (6-8 marks)"),
          React.createElement("li", null, "• Activity ratios (6-8 marks)"),
          React.createElement("li", null, "• Solvency ratios (6-8 marks)"),
          React.createElement("li", null, "• Comparative analysis (4-6 marks)")
        ),
        React.createElement("p", null, React.createElement("strong", null, "Question Types:")),
        React.createElement("ul", { className: "space-y-1 ml-4" },
          React.createElement("li", null, "• Ratio calculations from financial statements (6-8 marks)"),
          React.createElement("li", null, "• Ratio interpretation and analysis (4-6 marks)"),
          React.createElement("li", null, "• Inter-firm and industry comparison (4-6 marks)"),
          React.createElement("li", null, "• Trend analysis (4-6 marks)"),
          React.createElement("li", null, "• DuPont analysis (4-6 marks)")
        )
      )
    )
  )
};