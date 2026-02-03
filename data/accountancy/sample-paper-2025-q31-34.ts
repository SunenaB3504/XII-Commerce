import React from 'react';
import { Question } from '../../types';

export const questions31to34: Question[] = [
    {
        id: 'accountancy-2025-31',
        marks: 3,
        chapter: 'Analysis of Financial Statements',
        name: 'Schedule III',
        topic: 'Heads and Sub-heads',
        question: React.createElement('div', null,
            'Find the heads and sub-heads under which the following items will appear in the ',
            React.createElement('br'),
            'balance sheet of a company as per Schedule III, Part I of Companies Act, 2013?',
            React.createElement('ul', { className: 'list-none pl-6 mt-2' },
                React.createElement('li', null, 'a) Furniture and Fixture'),
                React.createElement('li', null, 'b) Advance paid to contractor for building under construction'),
                React.createElement('li', null, 'c) Accrued Income'),
                React.createElement('li', null, 'd) Loans repayable on demand to Bank'),
                React.createElement('li', null, 'e) Employees earned leaves payable on retirement'),
                React.createElement('li', null, 'f) Employees earned leaves encashable')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                React.createElement('thead', null,
                    React.createElement('tr', { className: 'bg-gray-100' },
                        React.createElement('th', { className: 'border p-2' }, 'Item'),
                        React.createElement('th', { className: 'border p-2' }, 'Major Head'),
                        React.createElement('th', { className: 'border p-2' }, 'Sub Head')
                    )
                ),
                React.createElement('tbody', null,
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'a) Furniture and Fixture'),
                        React.createElement('td', { className: 'border p-2' }, 'Non-Current Assets'),
                        React.createElement('td', { className: 'border p-2' }, 'Property, Plant and Equipment and Intangible Assets - PPE')
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'b) Advance for Building'),
                        React.createElement('td', { className: 'border p-2' }, 'Non-Current Assets'),
                        React.createElement('td', { className: 'border p-2' }, 'Long term loans and advances (Capital Advances)')
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'c) Accrued Income'),
                        React.createElement('td', { className: 'border p-2' }, 'Current Assets'),
                        React.createElement('td', { className: 'border p-2' }, 'Other Current Assets')
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'd) Loans repayable on demand'),
                        React.createElement('td', { className: 'border p-2' }, 'Current Liabilities'),
                        React.createElement('td', { className: 'border p-2' }, 'Short term borrowings')
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'e) Leave payable on retirement'),
                        React.createElement('td', { className: 'border p-2' }, 'Non-Current Liabilities'),
                        React.createElement('td', { className: 'border p-2' }, 'Long term provisions')
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', { className: 'border p-2' }, 'f) Leave encashable'),
                        React.createElement('td', { className: 'border p-2' }, 'Current Liabilities'),
                        React.createElement('td', { className: 'border p-2' }, 'Short term provisions (If payable within 12 months)')
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            'Standard Schedule III Classification.'
        )
    },
    {
        id: 'accountancy-2025-32',
        marks: 3,
        chapter: 'Analysis of Financial Statements',
        name: 'Comparative Statement',
        topic: 'Comparative Statement of Profit and Loss',
        question: React.createElement('div', null,
            'Complete the Comparative Statement of Profit and Loss:',
            React.createElement('div', { className: 'overflow-x-auto mt-2' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-1' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-1' }, '2022-23 (₹)'),
                            React.createElement('th', { className: 'border p-1' }, '2023-24 (₹)'),
                            React.createElement('th', { className: 'border p-1' }, 'Absolute Change'),
                            React.createElement('th', { className: 'border p-1' }, '% Change')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Revenue from Operations'),
                            React.createElement('td', { className: 'border p-1' }, '16,00,000'),
                            React.createElement('td', { className: 'border p-1' }, '20,00,000'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '?')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Less: Emp Benefit Exp'),
                            React.createElement('td', { className: 'border p-1' }, '8,00,000'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '25%')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Less: Other Expenses'),
                            React.createElement('td', { className: 'border p-1' }, '2,00,000'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '(1,00,000)'),
                            React.createElement('td', { className: 'border p-1' }, '?')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Profit before tax'),
                            React.createElement('td', { className: 'border p-1' }, '6,00,000'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '50%')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Tax @30%'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '90,000'),
                            React.createElement('td', { className: 'border p-1' }, '?')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-1' }, 'Profit after tax'),
                            React.createElement('td', { className: 'border p-1' }, '4,20,000'),
                            React.createElement('td', { className: 'border p-1' }, '?'),
                            React.createElement('td', { className: 'border p-1' }, '2,10,000'),
                            React.createElement('td', { className: 'border p-1' }, '?')
                        )
                    )
                )
            )
        ),
        solution: React.createElement('div', null,
            React.createElement("p", { className: "font-semibold mb-2" }, "32. Comparative Income Statement"),
            React.createElement("div", { className: "overflow-x-auto mb-6" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "2022-23"),
                            React.createElement("th", { className: "border p-2" }, "2023-24"),
                            React.createElement("th", { className: "border p-2" }, "Absolute change"),
                            React.createElement("th", { className: "border p-2" }, "% change")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Revenue from Operations"),
                            React.createElement("td", { className: "border p-2 text-right" }, "16,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "20,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "25%")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Less: Employees Benefit Expenses"),
                            React.createElement("td", { className: "border p-2 text-right" }, "8,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "25%")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Less: Other Expenses"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "(1,00,000)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "(50%)")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Profit before tax"),
                            React.createElement("td", { className: "border p-2 text-right" }, "6,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "9,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "3,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "50%")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Tax @30%"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,80,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,70,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "90,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "50%")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Profit after tax"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,20,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "6,30,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,10,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "50%")
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            'Calculations verified from percentage changes and absolute differences.'
        )
    },
    {
        id: 'accountancy-2025-33',
        marks: 4,
        chapter: 'Accounting Ratios',
        name: 'Gross Profit Ratio',
        topic: 'Calculation of GP Ratio',
        question: React.createElement('div', null,
            'Calculate Gross Profit Ratio from the following information:',
            React.createElement('br'),
            'Revenue from Operations ₹ 10,00,000; Purchases ₹ 3,60,000; Carriage Inwards ₹ ',
            React.createElement('br'),
            '50,000; Employee benefit Expenses ₹ 1,00,000 (including Wages of ₹ 60,000); Opening ',
            React.createElement('br'),
            'Inventory ₹ 60,000 and Average Inventory ₹ 80,000.'
        ),
        solution: React.createElement('div', null,
            'Gross Profit Ratio = (Gross Profit / Revenue from Operations) × 100',
            React.createElement('br'),
            'Cost of Revenue from Operations (COGS) = Opening Inv + Net Purchases + Direct Exp - Closing Inv',
            React.createElement('br'),
            'Closing Inv: Avg Inv = (Op + Cl)/2 => 80k = (60k + Cl)/2 => 160k = 60k + Cl => Cl = 1,00,000.',
            React.createElement('br'),
            'Direct Expenses: Carriage Inwards 50,000 + Wages 60,000 = 1,10,000.',
            React.createElement('br'),
            'Available Info: Purchases 3,60,000.',
            React.createElement('br'),
            'COGS = 60,000 + 3,60,000 + 1,10,000 - 1,00,000 = 4,30,000.',
            React.createElement('br'),
            'Gross Profit = Revenue 10,00,000 - COGS 4,30,000 = 5,70,000.',
            React.createElement('br'),
            'GP Ratio = (5,70,000 / 10,00,000) × 100 = 57%.'
        ),
        explanation: React.createElement('div', null,
            'Wages are direct expenses included in Emp Benefit Exp, so extracted for COGS.'
        )
    },
    {
        id: 'accountancy-2025-33-OR',
        marks: 4,
        chapter: 'Accounting Ratios',
        name: 'Interest Coverage Ratio',
        topic: 'Rate of Interest',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold' }, 'OR'),
            'Profit after tax amounted to ₹ 6,00,000, and tax rate was 20%. If earnings before ',
            React.createElement('br'),
            'interest and tax was ₹ 10,00,000 and Nominal Value of Debentures amounted to ₹ ',
            React.createElement('br'),
            '25,00,000 (assuming the only debt of the company), determine the rate of interest on ',
            React.createElement('br'),
            'debentures'
        ),
        solution: React.createElement('div', null,
            'Rate of Interest = 10%',
            React.createElement('br'),
            'Calculation:',
            React.createElement('br'),
            'PAT = 6,00,000 (80% of PBT).',
            React.createElement('br'),
            'PBT = 6,00,000 / 0.8 = 7,50,000.',
            React.createElement('br'),
            'EBIT = 10,00,000.',
            React.createElement('br'),
            'Interest = EBIT - PBT = 10,00,000 - 7,50,000 = 2,50,000.',
            React.createElement('br'),
            'Debentures = 25,00,000.',
            React.createElement('br'),
            'Rate = (Interest / Debt) × 100 = (2,50,000 / 25,00,000) × 100 = 10%.'
        ),
        explanation: React.createElement('div', null,
            'Interest is the difference between Earnings Before Interest & Tax and Earnings Before Tax.'
        )
    },
    {
        id: 'accountancy-2025-34',
        marks: 6,
        chapter: 'Cash Flow Statement',
        name: 'Cash Flow',
        topic: 'Operating and Investing Activities',
        question: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "font-semibold mb-2" }, "(a) From the following information, calculate Cash flow from Operating Activities."),
            React.createElement("div", { className: "overflow-x-auto mb-4" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "31 March 2023"),
                            React.createElement("th", { className: "border p-2" }, "31 March 2024")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Surplus i.e Balance in Statement of Profit and Loss"),
                            React.createElement("td", { className: "border p-2 text-right" }, "6,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "5,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Provision for Tax"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,20,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Trade Receivables"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,40,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Trade Payables"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,50,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Goodwill"),
                            React.createElement("td", { className: "border p-2 text-right" }, "2,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,50,000")
                        )
                    )
                )
            ),
            React.createElement("p", { className: "mb-4" }, React.createElement("b", null, "Additional Information:-"), " Proposed Dividend for the year ended March 31, 2023 and March 31, 2024 was ₹ 1,50,000 and ₹ 1,80,000 respectively."),
            React.createElement("p", { className: "font-semibold mb-2" }, "(b) From the following information calculate the Cash from Investing Activities"),
            React.createElement("div", { className: "overflow-x-auto mb-4" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "31 March 2023"),
                            React.createElement("th", { className: "border p-2" }, "31 March 2024")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Machinery (Cost)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "20,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "28,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Accumulated Depreciation"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,00,000"),
                            React.createElement("td", { className: "border p-2 text-right" }, "6,50,000")
                        )
                    )
                )
            ),
            React.createElement("p", { className: "font-bold" }, "Additional Information:-"),
            React.createElement("ul", { className: "list-none space-y-1" },
                React.createElement("li", null, "(i) Machinery costing ₹ 50,000 (Book Value ₹ 40,000) was lost by fire and insurance claim of ₹ 32,000 was received."),
                React.createElement("li", null, "(ii) Depreciation charged during the year was ₹ 3,50,000."),
                React.createElement("li", null, "(iii) A part of Machinery costing ₹ 2,50,000 was sold at a loss of ₹ 20,000.")
            )
        ),
        solution: React.createElement('div', null,
            React.createElement("p", { className: "font-bold mb-2" }, "34. (a) CASH FLOW FROM OPERATING ACTIVITIES"),
            React.createElement("div", { className: "overflow-x-auto mb-6" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Details"),
                            React.createElement("th", { className: "border p-2" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Profit Earned during the year"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "(1,00,000)")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, React.createElement("span", { className: "font-bold" }, "Add:"), " Proposed dividend of previous year"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,50,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 pl-8" }, "Provision for tax for current year"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,20,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Profit before tax and extraordinary items"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "1,70,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Non-operating and Non Cash Items:"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, React.createElement("span", { className: "font-bold" }, "Add:"), " Goodwill amortised"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "50,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Operating profit before tax and changes in working capital"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "2,20,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, React.createElement("span", { className: "font-bold" }, "Add:"), " Increase in trade payable"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "50,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, React.createElement("span", { className: "font-bold" }, "Less:"), " increase in trade receivables"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "(40,000)")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Cash generated from operations"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "________")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "2,30,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, React.createElement("span", { className: "font-bold" }, "Less:"), " Income tax paid"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "_______")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Cash flow from operating activities"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "1,30,000")
                        )
                    )
                )
            ),
            React.createElement("p", { className: "font-bold mb-2 text-center" }, "Dr Accumulated Depreciation A/c Cr"),
            React.createElement("div", { className: "overflow-x-auto mb-6" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount"),
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Machinery A/c (prev. dep on machine damaged)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,000"),
                            React.createElement("td", { className: "border p-2" }, "By Balance b/d"),
                            React.createElement("td", { className: "border p-2 text-right" }, "4,00,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Machinery A/c (prev. dep on machine sold)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "90,000"),
                            React.createElement("td", { className: "border p-2" }, "By Depreciation A/c (Charged during the year)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "3,50,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Balance c/d"),
                            React.createElement("td", { className: "border p-2 text-right" }, "6,50,000"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "")
                        ),
                        React.createElement("tr", { className: "font-bold" },
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "7,50,000"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "7,50,000")
                        )
                    )
                )
            ),
            React.createElement("p", { className: "font-bold mb-2 text-center" }, "Dr Machinery A/c Cr"),
            React.createElement("div", { className: "overflow-x-auto mb-6" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount"),
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Balance b/d"),
                            React.createElement("td", { className: "border p-2 text-right" }, "20,00,000"),
                            React.createElement("td", { className: "border p-2" }, "By Accumulated Depreciation A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "10,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "To Bank A/c (Balancing figure)"),
                            React.createElement("td", { className: "border p-2 text-right" }, "11,00,000"),
                            React.createElement("td", { className: "border p-2" }, "By Insurance Company A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "32,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "By loss by fire A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "8,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "By Bank A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,40,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "By Loss on Sale A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "20,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "BY Accumulated Depreciation A/c"),
                            React.createElement("td", { className: "border p-2 text-right" }, "90,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2" }, "By Balance c/d"),
                            React.createElement("td", { className: "border p-2 text-right" }, "28,00,000")
                        ),
                        React.createElement("tr", { className: "font-bold" },
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "31,00,000"),
                            React.createElement("td", { className: "border p-2" }, ""),
                            React.createElement("td", { className: "border p-2 text-right" }, "31,00,000")
                        )
                    )
                )
            ),
            React.createElement("p", { className: "font-bold mb-2" }, "Investing Activities"),
            React.createElement("div", { className: "overflow-x-auto" },
                React.createElement("table", { className: "min-w-full border border-gray-300 text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-100" },
                            React.createElement("th", { className: "border p-2" }, "Particulars"),
                            React.createElement("th", { className: "border p-2" }, "Amount")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Sale of Machinery"),
                            React.createElement("td", { className: "border p-2 text-right" }, "1,40,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Claim received from Insurance Company"),
                            React.createElement("td", { className: "border p-2 text-right" }, "32,000")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2" }, "Machinery Purchased"),
                            React.createElement("td", { className: "border p-2 text-right" }, "(11,00,000)")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border p-2 font-bold" }, "Cash Outflow from Investing Activities"),
                            React.createElement("td", { className: "border p-2 text-right font-bold" }, "(9,28,000)")
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold' }, 'Working Notes for (b):'),
            React.createElement('p', { className: 'font-semibold mt-1' }, '1. Accumulated Depreciation A/c:'),
            React.createElement('ul', { className: 'list-disc ml-5' },
                React.createElement('li', null, 'Op Bal 4,00,000 + Dep Charged 3,50,000 = 7,50,000.'),
                React.createElement('li', null, 'Less Closing Bal 6,50,000 = 1,00,000 (Dep on Assets Sold/Lost).'),
                React.createElement('li', null, 'Breakdown: Fire Asset (50k Cost - 40k BV) = 10k Dep. Sold Asset (Balancing) = 90k Dep.')
            ),
            React.createElement('p', { className: 'font-semibold mt-1' }, '2. Machinery A/c:'),
            React.createElement('ul', { className: 'list-disc ml-5' },
                React.createElement('li', null, 'Credit Side: Fire Loss BV 40k (Claim 32 + Loss 8). Breakdown: By Acc Dep 10k, By Bank (Claim) 32k, By P&L (Loss) 8k.'),
                React.createElement('li', null, 'Credit Side cont.: Sale Cost 2.5L. (By Acc Dep 90k, By Bank Sale 1.4L, By P&L Loss 20k). BV = 2.5L - 90k = 1.6L. Sale Price = 1.6L - 20k = 1.4L.'),
                React.createElement('li', null, 'Total Cr items related to Cost: 50,000 (Fire) + 2,50,000 (Sale) = 3,00,000.'),
                React.createElement('li', null, 'Op Bal 20,00,000. Cl Bal 28,00,000.'),
                React.createElement('li', null, 'Equation: Op + Purchase - Cost of Sold/Lost = Cl.'),
                React.createElement('li', null, '20L + Purchase - 3L = 28L.'),
                React.createElement('li', null, 'Purchase = 11,00,000.')
            ),
            React.createElement('p', { className: 'mt-2 italic' }, 'Note: Loss by fire (8,000) and Loss on sale (20,000) are added back to Operating, but here only Investing is asked.')
        )
    }
];
