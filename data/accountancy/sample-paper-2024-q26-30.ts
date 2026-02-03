import React from 'react';
import { Question } from '../../types';

export const questions26to30: Question[] = [
    {
        id: 'accountancy-2024-26',
        marks: 6,
        chapter: 'Issue of Debentures',
        name: 'Writing off Loss',
        topic: 'Loss on Issue Account',
        question: React.createElement('div', null,
            'On July 01, 2022, Panther Ltd. issued 20,000, 9% Debentures of ₹ 100 each at 8% premium and redeemable at a premium of 15% in four equal instalments starting from the end of the third year. The balance in Securities Premium on the date of issue of debentures was ₹ 80,000. Interest on debentures was to be paid on March 31 every year.',
            React.createElement('p', { className: 'mt-2' }, 'Pass Journal entries for the financial year 2022-23. Also prepare Loss on Issue of Debentures account.')
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Journal Entries in the Books of Panther Ltd.'),
            React.createElement('div', { className: 'overflow-x-auto mb-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'L.F'),
                            React.createElement('th', { className: 'border p-2' }, 'Dr (₹)'),
                            React.createElement('th', { className: 'border p-2' }, 'Cr (₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        // Entry 1
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, '2022 July 1'),
                            React.createElement('td', { className: 'border p-2' }, 'Bank A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '21,60,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Debenture Application and Allotment A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '21,60,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, React.createElement('i', null, '(Being Application money received: 20k * 108)')),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        // Entry 2
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, 'July 1'),
                            React.createElement('td', { className: 'border p-2' }, 'Debenture Application and Allotment A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '21,60,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Loss on Issue of Debentures A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To 9% Debentures A/c (20k * 100)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '20,00,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Securities Premium A/c (20k * 8)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,60,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Premium on Redemption of Debentures A/c (20k * 15)'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000')
                        ),
                        // Entry 3 (Interest)
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, '2023 Mar 31'),
                            React.createElement('td', { className: 'border p-2' }, 'Debenture Interest A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Debenture holders A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, React.createElement('i', null, '(Interest on 20L @ 9% for 9 months)')),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        // Entry 4 (Payment)
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Debenture holders A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Bank A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000')
                        ),
                        // Entry 5 (Transfer Interest to P&L)
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Statement of Profit and Loss ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Debenture Interest A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '1,35,000')
                        ),
                        // Entry 6 (Write off Loss)
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Securities Premium A/c ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '2,40,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, 'Statement of Profit and Loss ... Dr'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '60,000'),
                            React.createElement('td', { className: 'border p-2' }, '')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2 pl-8' }, 'To Loss on Issue of Debentures A/c'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000')
                        ),
                    )
                )
            ),
            React.createElement('p', { className: 'font-bold mb-2' }, 'Loss on Issue of Debentures Account'),
            React.createElement('div', { className: 'overflow-x-auto' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'Amount'),
                            React.createElement('th', { className: 'border p-2' }, 'Date'),
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, 'Amount')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, '2022 July 1'),
                            React.createElement('td', { className: 'border p-2' }, 'To Prem on Redemp A/c'),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000'),
                            React.createElement('td', { className: 'border p-2' }, '2023 Mar 31'),
                            React.createElement('td', { className: 'border p-2' }, 'By Sec Premium A/c'),
                            React.createElement('td', { className: 'border p-2' }, '2,40,000')
                        ),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '2023 Mar 31'),
                            React.createElement('td', { className: 'border p-2' }, 'By Statement of P&L'),
                            React.createElement('td', { className: 'border p-2' }, '60,000')
                        ),
                        React.createElement('tr', { className: 'bg-gray-50 font-bold' },
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000'),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, ''),
                            React.createElement('td', { className: 'border p-2' }, '3,00,000')
                        )
                    )
                )
            )
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 9: Issue of Debentures - Loss on Issue'),
            'Loss on Issue = 15% Premium on Redemption of 20,00,000 = 3,00,000.',
            React.createElement('br'),
            'Securities Premium Balance = 80,000 (Existing) + 1,60,000 (New Issue) = 2,40,000.',
            React.createElement('br'),
            'Loss Written off: 2,40,000 from SP and balance 60,000 from Statement of P&L.',
            React.createElement('br'),
            'Interest for 9 months (July to March) = 20,00,000 * 9% * 9/12 = 1,35,000.'
        )
    },
    {
        id: 'accountancy-2024-27',
        marks: 1,
        chapter: 'Analysis of Financial Statements',
        name: 'Limitations',
        topic: 'Limitations of FS Analysis',
        question: React.createElement('div', null,
            '‘Freedom to Choose of method of depreciation’ refers to which limitation of financial statement analysis.',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Historical analysis.'),
                React.createElement('li', null, 'b) Qualitative aspect ignored.'),
                React.createElement('li', null, 'c) Not free from bias.'),
                React.createElement('li', null, 'd) Ignore Price level Changes.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) Not free from bias.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Analysis of Financial Statements - Limitations of Financial Statement Analysis'),
            'Financial statements are not free from personal bias as the management has the freedom to choose accounting methods (e.g. Depreciation method, Inventory valuation) which affects the results.'
        )
    },
    {
        id: 'accountancy-2024-27-OR',
        marks: 1,
        chapter: 'Analysis of Financial Statements',
        name: 'Schedule III',
        topic: 'Current Assets Exclusions',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            '............ is included in current assets while preparing balance sheet as per revised Schedule III but excluded from current assets while calculating Current Ratio',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Debtors.'),
                React.createElement('li', null, 'b) Cash and Cash Equivalent.'),
                React.createElement('li', null, 'c) Loose tools and Stores and spares.'),
                React.createElement('li', null, 'd) Prepaid Expense.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'c) Loose tools and Stores and spares.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 1: Analysis of Financial Statements - Balance Sheet / Schedule III'),
            'Loose Tools and Stores & Spares are inventory but are not considered liquid enough or meant for sale in the ordinary course for paying current liabilities, hence excluded from Current Ratio calculation.'
        )
    },
    {
        id: 'accountancy-2024-28',
        marks: 1,
        chapter: 'Accounting Ratios',
        name: 'Debt-Equity Ratio',
        topic: 'Effect of Transactions',
        question: React.createElement('div', null,
            'Debt-Equity Ratio of Dhamaka Ltd is 3 : 1. Which of the following will result in decrease in this ratio?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'a) Issue of Debentures for Cash of ₹2,00,000.'),
                React.createElement('li', null, 'b) Issue of Debentures of ₹3,00,000 to Vendors from whom Machinery was purchased.'),
                React.createElement('li', null, 'c) Goods purchased on Credit of ₹1,00,000.'),
                React.createElement('li', null, 'd) Issue of Equity Shares of ₹2,00,000.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) Issue of Equity Shares of ₹2,00,000.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 5: Accounting Ratios - Solvency Ratios (Debt-Equity Ratio)'),
            'Debt/Equity = 3/1. To decrease, either Numerator (Debt) decrease or Denominator (Equity) increase.',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'a) Debt increases. Ratio Increases.'),
                React.createElement('li', null, 'b) Debt increases. Ratio Increases.'),
                React.createElement('li', null, 'c) No change in Debt or Equity (Current Liability increases).'),
                React.createElement('li', null, 'd) Equity increases. Denominator increases. Ratio decreases.')
            )
        )
    },
    {
        id: 'accountancy-2024-29',
        marks: 1,
        chapter: 'Cash Flow Statement',
        name: 'Classificaton of Activities',
        topic: 'Inflow/Outflow/No Flow',
        question: React.createElement('div', null,
            'Statement I:- Sale of Marketable Securities will result in no flow of Cash.',
            React.createElement('br'),
            'Statement II:- Debentures issued as collateral security will result in inflow of cash.',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'A. Both Statements are correct.'),
                React.createElement('li', null, 'B. Both Statements are incorrect.'),
                React.createElement('li', null, 'C. Statement I is correct and Statement II is incorrect.'),
                React.createElement('li', null, 'D. Statement I is incorrect and Statement II is correct.')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'C. Statement I is correct and Statement II is incorrect.')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 6: Cash Flow Statement - Classification of Activities'),
            'Statement I: Marketable Securities are Cash Equivalents. Sale means movement between Cash and Cash Equivalents, so No Flow.',
            React.createElement('br'),
            'Statement II: Debentures issued as collateral security implies no cash received. It is just a security. No Flow.'
        )
    },
    {
        id: 'accountancy-2024-29-OR',
        marks: 1,
        chapter: 'Cash Flow Statement',
        name: 'Bonus Shares',
        topic: 'Effect on Cash Flow',
        question: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'OR'),
            'What will be the effect of issue of Bonus shares on Cash Flow Statement?',
            React.createElement('ul', { className: 'list-none pl-5 mt-2' },
                React.createElement('li', null, 'A. No effect'),
                React.createElement('li', null, 'B. Inflow in Financing Activity'),
                React.createElement('li', null, 'C. Inflow in Operating activity'),
                React.createElement('li', null, 'D. Inflow in Investing Activity')
            )
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'A. No effect')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 6: Cash Flow Statement - Non-Cash Transactions'),
            'Bonus shares are issued by capitalization of reserves (e.g. from Reserves to Share Capital). No cash is received or paid. Hence, No Effect.'
        )
    },
    {
        id: 'accountancy-2024-30',
        marks: 1,
        chapter: 'Cash Flow Statement',
        name: 'Financing Activity',
        topic: 'Calculation of Cash Flow',
        question: React.createElement('div', null,
            'Aditya Sunrise Ltd. provides you the following information:',
            React.createElement('div', { className: 'overflow-x-auto my-4' },
                React.createElement('table', { className: 'min-w-full border border-gray-300 text-sm' },
                    React.createElement('thead', null,
                        React.createElement('tr', { className: 'bg-gray-100' },
                            React.createElement('th', { className: 'border p-2' }, 'Particulars'),
                            React.createElement('th', { className: 'border p-2' }, '31.3.2023(₹)'),
                            React.createElement('th', { className: 'border p-2' }, '31.3.2022(₹)')
                        )
                    ),
                    React.createElement('tbody', null,
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'border p-2' }, '10% Bank Loan'),
                            React.createElement('td', { className: 'border p-2' }, 'Nil'),
                            React.createElement('td', { className: 'border p-2' }, '1,00,000')
                        )
                    )
                )
            ),
            'Additional Information:',
            React.createElement('ul', { className: 'list-decimal pl-5 mt-2' },
                React.createElement('li', null, 'Equity Share Capital raised during the year ₹3,00,000;'),
                React.createElement('li', null, '10% Bank Loan was repaid on 01.04.2022.'),
                React.createElement('li', null, 'Dividend received during the year was ₹20,000.'),
                React.createElement('li', null, 'Dividend Proposed for the year 2021-22 was ₹50,000 but only ₹20,000 was approved by the Shareholders.')
            ),
            React.createElement('p', { className: 'mt-2' }, 'Find out the cash flow from Financing Activities.')
        ),
        solution: React.createElement('div', null,
            React.createElement('p', { className: 'font-semibold' }, 'd) ₹ 1,80,000')
        ),
        explanation: React.createElement('div', null,
            React.createElement('p', { className: 'font-bold mb-2' }, 'Chapter 6: Cash Flow Statement - Financing Activities'),
            'Inflows:',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'Issue of Share Capital = +3,00,000')
            ),
            'Outflows:',
            React.createElement('ul', { className: 'list-disc pl-5' },
                React.createElement('li', null, 'Repayment of Bank Loan = -1,00,000'),
                React.createElement('li', null, 'Dividend Paid (Previous Year Proposed Approved) = -20,000'),
                React.createElement('li', null, 'Interest on Bank Loan: Loan repaid on 01.04.2022 (Start of year). Hence, no interest is paid for the current year.')
            ),
            'Total Financing Cash Flow = 3,00,000 - 1,00,000 - 20,000 = +1,80,000.',
            React.createElement('br'),
            'Note: Dividend Received (20,000) is Investing Activity.'
        )
    }
];
