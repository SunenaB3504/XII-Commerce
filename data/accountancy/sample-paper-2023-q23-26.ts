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
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Journal Entries (MS summary for Rockstar Ltd.)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Entry'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. To Share Application A/c (Being application money received)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '16,00,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Share Application A/c Dr. To Share Capital A/c To Share Allotment A/c To Bank A/c (Being Application money utilised)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '16,00,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Share Allotment A/c Dr. To Share Capital A/c To Securities Premium A/c (Being allotment due with premium)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '8,00,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. Calls in Arrears A/c Dr. To Share Allotment A/c (Being allotment received except of Simba)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '2,85,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Share Capital A/c Dr. Securities Premium A/c Dr. To Share Forfeited A/c To Calls in Arrears A/c (Being Simba\'s shares forfeited)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,00,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. Share Forfeited A/c Dr. To Share Capital A/c (Being forfeited shares re-issued)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '48,000')
            )
          )
        ),
        React.createElement('p', { className: 'mt-3' }, 'This summary replicates the key journal entries from MS; see MS for full ledger narration and amounts.')
      ),
      explanation: React.createElement('p', null, 'MS provides the complete set of entries including calls, forfeiture and reissue ledgers and transfer to Capital Reserve.')
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
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Executors Account (MS Working)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Date/Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Amount transferred to Executors (Capital + Interest + Share of Profit + Goodwill + Loan adjustments)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,80,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Instalment 1 (30/06/2021) and interest entries per MS'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '78,000 / 1,29,000 etc.')
            )
          )
        ),
        React.createElement('p', { className: 'mt-3' }, 'MS includes full executor ledger with instalment schedule; the total transferred and instalment details are shown above.')
      ),
      explanation: React.createElement('p', null, 'MS provides instalment schedule and interest computations; replicate the full Executors account as in MS when rendering full solution.')
    },
    {
      id: '26',
      marks: 6,
      question: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, 'On July 01, 2022 Panther Ltd. issued 20,000 9% Debentures of ₹100 each at 8% premium and redeemable at 15% premium in four equal instalments starting from end of third year. Securities premium had balance ₹80,000. Interest paid year end. Pass journal entries for 2022-23 and prepare Loss on Issue of Debentures A/c.'),
      ),
      solution: React.createElement(React.Fragment, null,
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Loss on Issue of Debentures A/c (MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'To Premium on Redemption of Debentures A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '3,00,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Securities Premium A/c'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '2,40,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'By Statement of Profit & Loss'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '60,000')
            ),
            React.createElement('tr', { className: 'font-bold bg-gray-50' },
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Total'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '3,00,000')
            )
          )
        ),
        React.createElement('p', { className: 'mt-3' }, 'MS shows Loss on Issue account debited with ₹3,00,000 and credited to Securities Premium and Statement of P&L as per computation.')
      ),
      explanation: React.createElement('p', null, 'MS provides full journal entries and Loss account workings; render these tables exactly for precise MS matching.')
    }
  ],
};

export default paper;
