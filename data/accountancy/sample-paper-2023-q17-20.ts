import { QuestionPaper } from '../../types';
import React from 'react';

// Placeholder for 3-mark questions (17-20)
const paper: QuestionPaper = {
  name: 'Sample Paper 2023 Questions 17-20',
  questions: [
    {
      id: '17',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Anshul, Babita and Chander were partners sharing profits in the ratio of 1/2 : 1/3 : 1/6 respectively. Babita retired and Anshul and Chander decided to share future profits in the ratio 3:2. The accountant passed a journal entry for Babita\'s share of goodwill but missed some information. Fill in missing figures and calculate the gaining ratio.'),
        React.createElement('p', null, 'Journal entry: Anshul’s Capital A/c Dr, Chander’s Capital A/c Dr, To Babita’s Capital A/c – amounts missing. (Provide missing figures and gaining ratio.)')
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (from MS): Debit Anshul and Chander by 9,000 and 21,000 respectively; Gaining ratio = 3:7'),
        React.createElement('p', null, 'Working: Calculate sacrifice and gain for continuing partners; allocate Babita\'s capital accordingly.')
      ),
      explanation: React.createElement('p', null, 'MS provides the journal figures and shows gaining ratio as 3:7.')
    },
    {
      id: '18',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'P, Q and R were partners with fixed capitals of ₹40,000, ₹32,000 and ₹24,000. After distributing profit of ₹48,000 in ratio 3:1:1 it was observed that interest on capital was provided at 10% instead of 8% and salary of ₹12,000 was credited to P instead of Q. Pass a single rectifying journal entry in the beginning of next year.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (summary): P’s Capital A/c Dr. ₹11,648; R’s Capital A/c Dr. ₹96; To Q’s Capital A/c ₹11,744 (rectifying entries as per MS).'),
        React.createElement('p', null, 'MS shows detailed calculation of interest adjustments and salary miscredit leading to the above single entry.')
      ),
      explanation: React.createElement('p', null, 'Follow MS: compute correct interest at 8% and revert excess; transfer salary from P to Q by adjustment.')
    },
    {
      id: '19',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Pioneer Fitness Ltd. took over the running business of Healthy World Ltd. having assets of ₹10,00,000 and liabilities of ₹1,70,000 by issuing 8,000 8% Debentures of ₹100 each at 5% premium redeemable after 6 years @ ₹110 and cheque for ₹50,000. Pass the journal entries in the books of Pioneer Fitness Ltd.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (summary from MS): Entries shown: Assets A/c Dr ₹10,00,000; Goodwill A/c Dr ₹60,000; To Liabilities A/c ₹1,70,000; To Healthy World Ltd. ₹8,90,000; Then Healthy World Ltd. Dr. etc. (see MS for full entries).'),
        React.createElement('p', null, 'Also include Loss on issue of debentures and related entries as per MS.')
      ),
      explanation: React.createElement('p', null, 'MS provides the complete set of journal entries for takeover and issue of debentures with premium and redemption premium.')
    },
    {
      id: '20',
      marks: 3,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Calculate goodwill of a firm on the basis of three years purchases of the Weighted Average Profits of the last four years. Profits: 2020 - 28,000; 2021 - 27,000; 2022 - 46,900; 2023 - 53,810. Adjustments: capitalise repair of 10,000 and apply depreciation at 10% on reducing balance; weights: 2020 & 2021 =1 each, 2022=2, 2023=3; period of purchase = 3 years.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Adjusted profits become 28,000; 36,000; 46,000; 53,000. Weighted total = 3,15,000; Weighted average = 45,000; Goodwill = 45,000 × 3 = ₹1,35,000.'),
      ),
      explanation: React.createElement('p', null, 'MS shows adjustment for capital expenditure and depreciation and weighted average calculation leading to goodwill ₹1,35,000.')
    }
  ],
};

export default paper;
