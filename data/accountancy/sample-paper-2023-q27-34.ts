import { QuestionPaper } from '../../types';
import React from 'react';

// Placeholder for Part B questions (27-34)
const paper: QuestionPaper = {
  name: 'Sample Paper 2023 Questions 27-34',
  questions: [
    {
      id: '27',
      marks: 1,
      question: React.createElement('p', { className: 'font-semibold' }, "'Freedom to Choose of method of depreciation' refers to which limitation of financial statement analysis?"),
      solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c'),
      explanation: React.createElement('p', null, 'MS: Not Free from Bias — choice of depreciation method introduces bias in comparability.')
    },
    {
      id: '28',
      marks: 1,
      question: React.createElement('p', { className: 'font-semibold' }, 'Debt-Equity Ratio of Dhamaka Ltd is 3 : 1. Which of the following will result in decrease in this ratio?'),
      solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d'),
      explanation: React.createElement('p', null, 'MS: Issue of Equity Shares decreases Debt-Equity ratio.')
    },
    {
      id: '29',
      marks: 1,
      question: React.createElement('p', { className: 'font-semibold' }, 'Statement I: Sale of Marketable Securities will result in no flow of Cash. Statement II: Debentures issued as collateral security will result in inflow of cash. Choose correct option.'),
      solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c'),
      explanation: React.createElement('p', null, 'MS: Statement I correct, Statement II incorrect.')
    },
    {
      id: '30',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Aditya Sunrise Ltd. provides information including loan and equity movements. Find out the cash flow from Financing Activities.'),
      ),
      solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d'),
      explanation: React.createElement('p', null, 'MS calculates financing activities to be ₹1,80,000 as per given movements.')
    },
    {
      id: '31',
      marks: 3,
      question: React.createElement('p', { className: 'font-semibold' }, 'Classify the following items under major heads and sub heads in the balance sheet as per Schedule III: i) Loose Tools ii) Loan repayable on demand iii) Provision for retirement benefits iv) Pre-paid Insurance v) Capital advances vi) Shares in Listed Companies.'),
      solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): i) Current Assets - Inventories; ii) Current Liabilities - Short Term Borrowings; iii) Non-Current Liabilities - Long Term Provisions; iv) Current Assets - Other Current Assets (Prepaid); v) Non-Current Assets - Long Term Loans & Advances; vi) Non-Current Assets - Non-Current Investments.'),
      explanation: React.createElement('p', null, 'MS provides the headings and subheadings as per Schedule III.')
    },
    {
      id: '32',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'a) Given liquid ratio, current ratio and inventory turnover, find annual sales. b) Calculate debt to capital employed ratio from given data.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS Summary): a) Revenue from operations = ₹15,00,000. b) Debt to capital employed = 0.33 : 1.'),
      ),
      explanation: React.createElement('p', null, 'MS includes step-by-step computations: find current liabilities, liquid assets, inventory then cost and sales; debt to capital = debt/(debt+equity).')
    },
    {
      id: '33',
      marks: 4,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'From the information extracted from the statement of Profit & Loss of Zee Ltd prepare a common size statement of Profit & Loss OR prepare comparative statement of Profit & Loss from given data.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Common size and comparative statements prepared with percentages and absolute/proportionate changes as per MS working.'),
      ),
      explanation: React.createElement('p', null, 'MS shows percentage computations and comparative line items as final answers.')
    },
    {
      id: '34',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Prepare a Cash Flow Statement from the given Balance Sheets of Arya Ltd and additional information.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS summary): Cash from Operating Activities (A)=₹2,07,000; Investing (B)= (4,35,000); Financing (C)=2,40,000; Net Cash Flow = closing balance ₹45,000 with working notes as per MS.'),
      ),
      explanation: React.createElement('p', null, 'MS provides full cash flow computations including adjustments, depreciation and gains on sale of investments.')
    }
  ],
};

export default paper;
