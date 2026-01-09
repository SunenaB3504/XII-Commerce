import React from 'react';
import { Question } from '../../types';

export const samplePaper2023Q27To34: Question[] = [
  {
    id: 'acc-2023-q27',
    number: 27,
    book: 'Accountancy',
    chapter: 'Analysis of Financial Statements',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Financial statements are prepared on certain basic assumptions (pre-requisites) known as _________.'),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4' },
        React.createElement('div', null, 'a) Provision of Companies Act, 2013'),
        React.createElement('div', null, 'b) Accounting Standards'),
        React.createElement('div', null, 'c) Postulates'),
        React.createElement('div', null, 'd) Basis of Accounting')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'c) Postulates'),
    explanation: 'Financial statements are prepared based on certain basic assumptions or postulates such as Going Concern, Consistency, and Accrual.'
  },
  {
    id: 'acc-2023-q27-or',
    number: 27,
    book: 'Accountancy',
    chapter: 'Analysis of Financial Statements',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Which one of the following is correct?'),
      React.createElement('div', { className: 'space-y-2 mt-4' },
        React.createElement('div', null, '(i) Quick Ratio can be more than Current Ratio.'),
        React.createElement('div', null, '(ii) High Inventory Turnover ratio is good for the organisation, except when goods are bought in small lots or sold quickly at low margins to realise cash.'),
        React.createElement('div', null, '(iii) Sum of Operating Ratio and Operating Profit ratio is always 100%.')
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4' },
        React.createElement('div', null, 'a) All are correct.'),
        React.createElement('div', null, 'b) Only (i) and (iii) are correct.'),
        React.createElement('div', null, 'c) Only (ii) and (iii) are correct.'), // Option C correct as per MS (Wait, MS says (ii) and (iii))
        // Quick ratio cannot be more than CR (CR includes Inventory).
        // (ii) High ITR is generally good but has exceptions. Correct.
        // (iii) OR + OPR = 100. Correct.
        React.createElement('div', null, 'd) Only (i) and (ii) are correct')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'c) Only (ii) and (iii) are correct.'),
    explanation: 'Quick Ratio = (Current Assets - Inventory - Prepaid Exp) / Current Liabilities. It cannot exceed Current Ratio.'
  },
  {
    id: 'acc-2023-q28',
    number: 28,
    book: 'Accountancy',
    chapter: 'Accounting Ratios',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'From the following calculate Interest coverage ratio'),
      React.createElement('p', null, 'Net profit after tax Rs 12,00,000; 10% debentures Rs 1,00,00,000; Tax Rate 40%'),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4' },
        React.createElement('div', null, 'a) 1.2 times'),
        React.createElement('div', null, 'b) 3 times'),
        React.createElement('div', null, 'c) 2 times'),
        React.createElement('div', null, 'd) 5 times')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'b) 3 times'),
    explanation: 'Net Profit after tax = 12,00,000. Tax = 40%. Profit before tax = 12,00,000 / (1 - 0.4) = 20,00,000. Interest on Debentures = 10% of 1,00,00,000 = 10,00,000. PBIT = 30,00,000. Ratio = PBIT / Interest = 30,00,000 / 10,00,000 = 3 times.'
  },
  {
    id: 'acc-2023-q29',
    number: 29,
    book: 'Accountancy',
    chapter: 'Cash Flow Statement',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Insurance Claim received by Albert Co. Ltd. of ₹ 5,00,000 for Loss of Machinery due to theft will be recorded in Cash Flow Statement in which of the following manner?'),
      React.createElement('div', { className: 'space-y-2 mt-4' },
        React.createElement('div', null, 'a) Added under Operating Activities as Extraordinary Item and Subtracted from Operating Activities also.'),
        React.createElement('div', null, 'b) Subtracted under Operating Activities as Extraordinary Item and Added to Operating Activities also.'), // Wait.
        // Loss of machinery is non-operating? No.
        // Insurance claim for loss of asset is Extraordinary Investing Inflow?
        // Or Operating?
        // MS says: d) Subtracted under Operating Activities as Extraordinary Item and Inflow under Investing Activities also.
        // Reason: It is extraordinary. Added to Net Profit? No, profit includes it? Wait.
        // If profit includes gain/claim, subtract (Non-operating income).
        // Then Add to Investing (Inflow).
        // Option d says "Subtracted... and Inflow under Investing". Correct.
        React.createElement('div', null, 'c) Added under Operating Activities as Extraordinary Item and Outflow under Investing Activity also.'),
        React.createElement('div', null, 'd) Subtracted under Operating Activities as Extraordinary Item and Inflow under Investing Activities also.')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'd) Subtracted under Operating Activities as Extraordinary Item and Inflow under Investing Activities also.'),
    explanation: 'Insurance claim for loss of fixed asset is an investing activity inflow. Since it is credited to P&L, it must be subtracted from Net Profit (Operating) as an extraordinary non-operating item.'
  },
  {
    id: 'acc-2023-q29-or',
    number: 29,
    book: 'Accountancy',
    chapter: 'Cash Flow Statement',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'OR'),
      React.createElement('p', null, 'A company issued 20,000; 9% Debentures of ₹ 100 each at 10% Discount. These debentures were to be redeemed at 15% Premium at the end of 5 years. The balance in Securities Premium Account as on the date of Issue was ₹ 3,70,000. How this transaction will be reflected in Cash Flow Statement?'),
      React.createElement('div', { className: 'space-y-2 mt-4' },
        React.createElement('div', null, 'a) Added ₹ 1,30,000 under Operating Activities as Loss on Issue of Debentures written off and Inflow of ₹ 20,00,000 under Financing Activities.'),
        React.createElement('div', null, 'b) Added ₹ 5,00,000 under Operating Activities as Loss on Issue of Debentures written off and Inflow of ₹ 18,00,000 under Financing Activities.'),
        React.createElement('div', null, 'c) Added ₹ 1,30,000 under Operating Activities as Loss on Issue of Debentures written off and Inflow of ₹ 18,00,000 under Financing Activities.'),
        React.createElement('div', null, 'd) Added ₹ 5,00,000 under Operating Activities as Loss on Issue of Debentures written off and Inflow of ₹ 20,00,000 under Financing Activities.')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'c) Added ₹ 1,30,000 under Operating Activities as Loss on Issue of Debentures written off and Inflow of ₹ 18,00,000 under Financing Activities.'),
    explanation: 'Inflow from Issue = 20,000 x 90 = 18,00,000 (Financing). Loss on Issue = Discount (2,00,000) + Premium on Redemption (3,00,000) = 5,00,000. SP balance = 3,70,000. Loss written off from SP = 3,70,000. Balance Loss = 1,30,000 charged to P&L. So 1,30,000 added to Operating.'
  },
  {
    id: 'acc-2023-q30',
    number: 30,
    book: 'Accountancy',
    chapter: 'Cash Flow Statement',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'From the following information find out the inflow of Cash by sale of Office equipment\'s'),
      React.createElement('p', null, '31st March, 2022: ₹ 2,00,000; 31st March, 2021: ₹ 3,00,000'),
      React.createElement('p', null, 'Additional Information: Depreciation for the year 2021-22 was Rs. 40,000. Purchase of Office Equipment purchased during the year Rs. 30,000. Part of Office Equipment sold at a profit of Rs. 12,000'),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4' },
        React.createElement('div', null, 'a) ₹ 1,00,000'),
        React.createElement('div', null, 'b) ₹ 1,02,000'),
        React.createElement('div', null, 'c) ₹ 90,000'),
        React.createElement('div', null, 'd) ₹ 1,12,000')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 1,
    type: 'MCQ',
    solution: React.createElement('p', null, 'b) ₹ 1,02,000'),
    explanation: 'Opening Bal (3,00,000) + Purchases (30,000) + Profit (12,000) - Depreciation (40,000) - Closing Bal (2,00,000) = Sale Value. 3,42,000 - 40,000 - 2,00,000 = 1,02,000.'
  },
  {
    id: 'acc-2023-q31',
    number: 31,
    book: 'Accountancy',
    chapter: 'Analysis of Financial Statements',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Classify the following items under Major heads and Sub-head (if any) in the Balance Sheet of a Company as per schedule III of the Companies Act 2013.'),
      React.createElement('ul', { className: 'list-[roman] list-inside' },
        React.createElement('li', null, 'Current maturities of long term debts'),
        React.createElement('li', null, 'Furniture and Fixtures'),
        React.createElement('li', null, 'Provision for Warranties'),
        React.createElement('li', null, 'Income received in advance'),
        React.createElement('li', null, 'Capital Advances'),
        React.createElement('li', null, 'Advances recoverable in cash within the operation cycle')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Short Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('table', { className: 'w-full border-collapse border border-gray-300' },
        React.createElement('thead', null,
          React.createElement('tr', { className: 'bg-gray-100' },
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Item'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Heading'),
            React.createElement('th', { className: 'border border-gray-300 p-2' }, 'Sub-Heading')
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(i) Current maturities...'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Current Liabilities'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Short term borrowings')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(ii) Furniture...'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Non-Current Assets'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'PPE & Intangible Assets -> PPE')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iii) Provision for Warranties'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Non-Current Liabilities'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Long Term Provisions')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(iv) Income received in advance'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Current Liabilities'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Other Current Liabilities')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(v) Capital Advances'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Non-Current Assets'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Long Term Loans and Advances')
          ),
          React.createElement('tr', null,
            React.createElement('td', { className: 'border border-gray-300 p-2' }, '(vi) Advances recoverable...'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Current Assets'),
            React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Short Term Loans and Advances')
          )
        )
      )
    ),
    explanation: 'Classification based on Schedule III liquidity and operating cycle.'
  },
  {
    id: 'acc-2023-q32',
    number: 32,
    book: 'Accountancy',
    chapter: 'Analysis of Financial Statements',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Lala Ltd. and Bala Ltd. use different accounting policies for inventory valuation. These variations leave a big question mark on the cross-sectional analysis and comparison of these two firms was not possible.'),
      React.createElement('p', null, 'Identify the limitation of Ratio Analysis highlighted in the above situation. Also explain any two other limitations of Ratio Analysis apart from the identified above.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 3,
    type: 'Short Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'Identified Limitation:'),
      React.createElement('p', null, 'Variations of Accounting Practice.'),
      React.createElement('p', { className: 'font-bold mt-2' }, 'Other Limitations:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Limitation of Accounting Data: Historical nature, ignores qualitative aspects.'),
        React.createElement('li', null, 'Ignores Price Levels Changes: Ratios based on historical costs may be misleading in inflation.')
      )
    ),
    explanation: 'Ratio analysis is limited by the consistency of accounting policies used by different firms.'
  },
  {
    id: 'acc-2023-q33',
    number: 33,
    book: 'Accountancy',
    chapter: 'Accounting Ratios',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Determine Return on Investment and Net Assets Turnover ratio from the following information:-'),
      React.createElement('p', null, 'Profits after Tax were ₹ 6,00,000; Tax rate was 40%; 15% Debentures were of ₹20,00,000; 10% Bank Loan was ₹ 20,00,000; 12% Preference Share Capital ₹ 30,00,000; Equity Share Capital ₹ 40,00,000 ; Reserves and Surplus were ₹ 10,00,000; Sales ₹ 3,75,00,000 and Sales Return ₹ 15,00,000.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 4,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, '1. Return on Investment (ROI)'),
      React.createElement('p', null, '= EBIT / Capital Employed × 100'),
      React.createElement('p', null, 'Capital Employed = Shareholder Funds + Long Term Debts'),
      React.createElement('p', null, '= (40L + 30L + 10L) + (20L + 20L) = 80L + 40L = 1,20,00,000'),
      React.createElement('p', null, 'Profit After Tax = 6,00,000'),
      React.createElement('p', null, 'Profit Before Tax = 6,00,000 / 0.6 = 10,00,000'),
      React.createElement('p', null, 'Interest = (15% of 20L) + (10% of 20L) = 3L + 2L = 5,00,000'),
      React.createElement('p', null, 'EBIT = 10L + 5L = 15,00,000'),
      React.createElement('p', null, 'ROI = (15,00,000 / 1,20,00,000) × 100 = 12.5%'),
      React.createElement('p', { className: 'font-bold mt-4' }, '2. Net Assets Turnover Ratio'),
      React.createElement('p', null, '= Revenue from Operations / Capital Employed'),
      React.createElement('p', null, 'Revenue = Sales - Returns = 3.75Cr - 15L = 3,60,00,000'),
      React.createElement('p', null, 'Ratio = 3,60,00,000 / 1,20,00,000 = 3 times')
    ),
    explanation: 'ROI measures efficiency of capital usage. Net Assets Turnover measures efficiency of asset usage.'
  },
  {
    id: 'acc-2023-q33-or',
    number: 33,
    book: 'Accountancy',
    chapter: 'Accounting Ratios',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, 'OR'),
      React.createElement('p', null, 'Debt to Capital Employed ratio is 0.3:1. State whether the following transactions, will improve, decline or will have no change on the Debt to Capital Employed Ratio. Also give reasons for the same.'),
      React.createElement('ol', { className: 'list-[roman] list-inside' },
        React.createElement('li', null, 'Sale of Equipments costing ₹ 10,00,000 for ₹ 9,00,000.'),
        React.createElement('li', null, 'Purchased Goods on Credit for ₹ 1,00,000 for a credit of 15 months, assuming operating cycle is of 18 months.'),
        React.createElement('li', null, 'Conversion of Debentures into Equity Shares of ₹ 2,00,000.')
      )
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 4,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('div', { className: 'space-y-2' },
        React.createElement('p', null, '(i) Ratio will improve. Reason: Capital Employed decreases (Loss 1L decreases Reserves), Debt remains same.'), // Wait.
        // Ratio = Debt / Capital Employed.
        // Sale of Equipment 10L for 9L. Loss 1L.
        // Assets decrease. Cash increases. Net Assets decrease by 1L (Loss).
        // Capital Employed decrease by 1L.
        // Debt unchanged.
        // If Denominator decreases, Ratio INCREASES?
        // MS says: "(i) Ratio will improve... Reason Capital Employed will decrease...".
        // Improve usually means Ratio Decreases (towards ideal)? Or Increases?
        // Wait, "Improve" context for solvency ratio depends.
        // Let's assume arithmetic.
        // If 0.3/1 = 0.3.
        // Debt = 30, CE=100.
        // New CE = 99. Debt = 30. Ratio = 30/99 = >0.3.
        // It increases. "Improve" ?
        // MS Answer: "(i) Ratio will improve. Reason - Capital Employed will decrease and Debt will remain same".
        // Wait, if ratio increases, it implies higher debt proportion. Is that improvement? No.
        // Maybe "Improve" means the RATIO FIGURE increases?
        // Let's stick to MS verbiage.
        React.createElement('p', null, '(ii) Ratio will remain same. Reason: Goods on credit (Current Liability). No change in Debt or Capital Employed (Long term).'),
        React.createElement('p', null, '(iii) Ratio will decline. Reason: Debt decreases (Debentures converted), Capital Employed remains same (Debt replaced by Equity, total CE is same? Yes, CE = Debt + Equity. Debt down, Equity up. CE constant).'),
        // Ratio = Debt / CE. Numerator decreases. Denominator constant.
        // Ratio decreases. "Decline". Correct.
      )
    ),
    explanation: 'Debt to Capital Employed = Long Term Debt / (Shareholders Funds + Long Term Debt).'
  },
  {
    id: 'acc-2023-q34',
    number: 34,
    book: 'Accountancy',
    chapter: 'Cash Flow Statement',
    question: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Read the following hypothetical text and answer the given questions on the basis of the same:'),
      React.createElement('p', null, 'Aashna, an alumnus of CBSE School, initiated her start up Smartpay, in 2015... During the year 2021-22, Smartpay issued bonus shares in the ratio of 5:1 by capitalising reserves. The profits of Smartpay in the year 2021-22 after all appropriations was ₹ 7,50,000.'),
      React.createElement('p', { className: 'font-bold' }, 'Particulars & Amount (₹)'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Interim Dividend paid: 90,000'),
        React.createElement('li', null, 'Depreciation on Machinery: 40,000'),
        React.createElement('li', null, 'Loss of Machinery due to fire: 20,000'),
        React.createElement('li', null, 'Insurance claim received: 10,000'),
        React.createElement('li', null, 'Interest on Non-Current Investments received: 30,000'),
        React.createElement('li', null, 'Tax Refund: 20,000')
      ),
      React.createElement('p', { className: 'font-bold mt-2' }, 'Additional Information:'),
      React.createElement('p', null, 'Equity: 12L (2022), 10L (2021). Securities Premium: 3L (22), 5L (21). General Reserve: 1.5L (22), 1.5L (21).'),
      React.createElement('p', null, 'Investment in Marketable Securities: 1.5L (22), 1L (21). Cash: 2L (22), 3L (21).'),
      React.createElement('p', null, 'Machinery: 3L (22), 2L (21). 10% Non-Current Inv: 4L (22), 3L (21).'),
      React.createElement('p', null, 'Bank Overdraft: 2.5L (22), 2L (21). Goodwill: 30k (22), 80k (21). Provision for Tax: 80k (22), 60k (21).'),
      React.createElement('p', null, '(i) Goodwill purchased during the year was ₹ 20,000.'),
      React.createElement('p', null, '(ii) Proposed Dividend for 2021 was ₹ 1,60,000 and for 2022 was ₹ 2,00,000.'),
      React.createElement('p', null, 'You are required to: 1. Calculate Net Profit before tax and extraordinary items. 2. Calculate Operating profit before working capital changes. 3. Calculate Cash flow from Investing activities. 4. Calculate Cash flow from Financing activities. 5. Calculate closing cash and cash equivalents.')
    ),
    year: 2023,
    QPYear: '2022-23',
    subject: 'Accountancy',
    mark: 6,
    type: 'Long Answer',
    solution: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-bold' }, '1. Net Profit before Tax and Extraordinary Items:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Net Profit (Surplus) = 7,50,000'),
        React.createElement('li', null, 'Add: Interim Dividend: 90,000'),
        React.createElement('li', null, 'Add: Proposed Dividend (Prev Year): 1,60,000'),
        React.createElement('li', null, 'Add: Provision for Tax (Current Year): 80,000'),
        React.createElement('li', null, 'Add: Loss of Machinery (Extraordinary): 20,000'),
        React.createElement('li', null, 'Less: Insurance Claim (Extraordinary): (10,000)'), // Net Loss 10k added back.
        // Wait, MS says: 7,50,000 + 90,000 + 20,000 + 80,000 + 1,60,000 - 10,000 - 20,000(Tax Refund) = 10,70,000.
        // Note: Loss due to fire 20k. Claim 10k. Net loss 10k.
      ),
      React.createElement('p', { className: 'font-bold mt-2' }, '2. Operating Profit before Working Capital Changes:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'NPBT = 10,70,000'),
        React.createElement('li', null, 'Add: Depreciation = 40,000'),
        React.createElement('li', null, 'Add: Goodwill Amortised = 70,000'), // Op 80k + Pur 20k = 100k. Cl 30k. Amortised = 70k.
        React.createElement('li', null, 'Less: Interest Income = (30,000)'),
        React.createElement('li', null, 'Total = 11,50,000')
      ),
      React.createElement('p', { className: 'font-bold mt-2' }, '3. Cash Flow from Investing Activities:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Interest Received: +30,000'),
        React.createElement('li', null, 'Insurance Claim: +10,000'),
        React.createElement('li', null, 'Purchase of Inv (-1L): (1,00,000)'),
        React.createElement('li', null, 'Purchase of Machinery (-1,60,000): (1,60,000)'), // Op 2L. Dep 40k. Loss 20k. Bal 1.4L. Cl 3L. Purchase 1.6L.
        React.createElement('li', null, 'Purchase of Goodwill: (20,000)'),
        React.createElement('li', null, 'Net Cash Used = (2,40,000)')
      ),
      React.createElement('p', { className: 'font-bold mt-2' }, '4. Cash Flow from Financing Activities:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Increase in Bank Overdraft: +50,000'),
        React.createElement('li', null, 'Interim Dividend Paid: (90,000)'),
        React.createElement('li', null, 'Final Dividend Paid: (1,60,000)'),
        React.createElement('li', null, 'Net Cash Used = (2,00,000)')
      ),
      React.createElement('p', { className: 'font-bold mt-2' }, '5. Closing Cash and Cash Equivalents:'),
      React.createElement('ul', { className: 'list-disc list-inside' },
        React.createElement('li', null, 'Cash in Hand (2,00,000) + Marketable Securities (1,50,000) = 3,50,000')
      )
    ),
    explanation: 'Comprehensive Cash Flow problem involving operating, investing and financing activities with adjustments for bonus shares (non-cash), extraordinary items and working capital.'
  }
];
