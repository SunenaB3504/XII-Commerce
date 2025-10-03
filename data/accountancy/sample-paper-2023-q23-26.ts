import { QuestionPaper } from '../../types';
import React from 'react';

// Placeholder for 6-mark questions (23-26)
const paper: QuestionPaper = {
  name: 'Sample Paper 2023 Questions 23-26',
  questions: [
    {
      id: '23',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'The Directors of Rockstar Ltd. invited applications for 2,00,000 Shares of ₹10 each, issued at 20% premium. Share was payable as ₹5 on application, ₹4 (including premium) on allotment and balance on call. Public had applied for 3,20,000 shares out of which applications for 20,000 shares were rejected and remaining were allotted on pro-rata basis. Simba, an applicant of 15,000 shares failed to pay allotment and call money. His shares were forfeited and out of these 6,000 shares were reissued at a discount of ₹2 per share. Journalise.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Full journal entries including Application A/c, Allotment, Calls in Arrears, Forfeiture and Re-issue entries with amounts as per marking scheme.'),
      ),
      explanation: React.createElement('p', null, 'MS contains detailed breakdown: application receipts, allotment computations, forfeiture entries and treatment of re-issue profit to capital reserve.')
    },
    {
      id: '24',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Rajinder and Vijay were partners sharing profits in ratio 3:2. On 31st March 2023 their balance sheet (given). Ranvijay is admitted on 1st April 2023 with terms including provision adjustments, outstanding repairs, unaccounted interest, stock taken by Rajinder etc. Pass necessary journal entries. OR alternative reconstitution question.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Entries covering provision for doubtful debts, outstanding repairs, accrued interest, stock revaluation, distribution of reserves and goodwill entries; see MS for amounts and partner capital adjustments.'),
      ),
      explanation: React.createElement('p', null, 'MS provides the numeric entries and the final capital/ balance sheet after admission or retirement for the OR question.')
    },
    {
      id: '25',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'Sandeep, Maheep and Amandeep were partners sharing profits in the ratio 2:2:1. Maheep died on 30th June 2020. Deed provides executors entitlements: capital balance ₹1,15,000, interest on capital ₹5,000, share in profits till death ₹20,000, share in goodwill (value ₹1,50,000), loan to Maheep ₹20,000. Amount to be paid to executor in three equal instalments with interest @10% p.a. Prepare the executor\'s account till final settlement.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Transfer total dues ₹1,80,000 to Executors A/c and prepare instalment schedule and interest computations as per MS.'),
      ),
      explanation: React.createElement('p', null, 'Detailed executor account with instalments, interest and balances is provided in MS; follow prescribed schedule.')
    },
    {
      id: '26',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'On July 01, 2022 Panther Ltd. issued 20,000 9% Debentures of ₹100 each at 8% premium and redeemable at 15% premium in four equal instalments starting from end of third year. Securities premium had balance ₹80,000. Interest paid year end. Pass journal entries for 2022-23 and prepare Loss on Issue of Debentures A/c.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer (MS): Journal entries include receipt of debenture money, allocation to Loss on Issue, interest accrual and payment and transfer entries for securities premium. Loss on Issue of Debentures account shows ₹3,00,000 written off as per MS.'),
      ),
      explanation: React.createElement('p', null, 'MS includes full ledger entries and working notes for loss computation and entries; use given figures in MS.')
    }
  ],
};

export default paper;
