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
        React.createElement('p', { className: 'mt-3' }, 'This summary replicates the key journal entries from MS. Key entries are shown above; full ledger narration and amounts are available in the MS extraction included in the project.'),
        React.createElement('h5', { className: 'font-bold mt-3' }, 'Full Journal Entries (as per MS)'),
        React.createElement('pre', { className: 'whitespace-pre-wrap bg-gray-50 border border-gray-200 p-3 text-sm text-gray-900' }, `23 Journal Entries in the Books of Rockstar Ltd.\n\ni)  Bank A/c Dr.\n    To Share Application A/c\n(Being Application money received)   16,00,000   16,00,000\nii)  Share Application A/c Dr.\n    To Share Capital A/c\n    To Share Allotment A/c\n    To Bank A/c\n(Being Application money utilised)   16,00,000   10,00,000  5,00,000  1,00,000\niii)  Share Allotment A/c Dr.\n    To Share Capital A/c\n    To Securities Premium A/c\n(Being allotment due with premium)   8,00,000   4,00,000  4,00,000\niv)  Bank A/c Dr.\n    Calls in Arrears A/c Dr.\n    To Share Allotment A/c\n(Being allotment received except of Simba)   2,85,000  15,000   3,00,000\nv)  Share First and Final Call A/c Dr.\n    To Share Capital A/c\n(Being call money due)   6,00,000  6,00,000\nvi)  Bank A/c Dr.\n    Calls in Arrears A/c Dr.\n    To Share First and Final Call A/c\n(Being call money received except of Simba)   5,70,000  30,000   6,00,000\nvii)  Share Capital A/c Dr.\n    Securities Premium A/c Dr.\n    To Share Forfeited A/c\n    To Calls in Arrears A/c\n(Being Simba\'s shares forfeited)   1,00,000  15,000   70,000 45,000\nviii)  Bank A/c Dr.\n    Share Forfeited A/c Dr.\n    To Share Capital A/c\n(Being forfeited shares re -issued)   48,000  12,000   60,000\nix)  Share Forfeited A/c Dr.\n    To Capital Reserve A/c\n(Being gain on re -issue transferred to Capital Reserve)   30,000  30,000\n\n(OR alternative entries for Shaktimaan Ltd. are also shown in MS.)`),
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
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, 'Journal Entries (as per MS)'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Journal Entry'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Revaluation A/c Dr. To Prov. for Doubtful Debts A/c To Outstanding Bill for Repairs A/c (Being increase in PDD and O/S bill accounted)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '52,000 / 2,000 / 50,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Accrued Interest A/c Dr. Stock A/c Dr. To Revaluation A/c (Being increase in Stock and Accrued Interest accounted)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '7,500 / 8,000 / 15,500')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Rajinder\'s Current A/c Dr. Vijay\'s Current A/c Dr. To Revaluation A/c (Being loss on revaluation transferred to partners\' current A/c)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '21,900 / 14,600 / 36,500')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. To Investment A/c (Being Investment sold at book value)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '40,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Rajinder\'s Current A/c Dr. To Stock A/c (Being stock taken over by Rajinder)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '42,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'General Reserve A/c Dr. To Rajinder\'s Current A/c To Vijay\'s Current A/c (Being General Reserve distributed)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '60,000 / 36,000 / 24,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Rajinder\'s Current A/c Dr. Vijay\'s Current A/c Dr. To Goodwill A/c (Being Goodwill written off)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '30,000 / 20,000 / 50,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Bank A/c Dr. To Ranvijay\'s Capital A/c To Premium for Goodwill A/c (Being new partner brings capital and share of goodwill)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,60,000 / 1,00,000 / 60,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Premium for Goodwill A/c Dr. To Rajinder\'s Current A/c To Vijay\'s Current A/c (Being premium distributed in sacrificing ratio)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '60,000 / 30,000 / 30,000')
            )
          )
        )
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
        React.createElement('h4', { className: 'font-bold text-lg mb-2' }, "Executors Account (as per MS)"),
        React.createElement('p', null, 'Total amount to be transferred to executors = 1,15,000 (capital) + 5,000 (interest) + 20,000 (share of profit) + 1,50,000 (goodwill share) + 20,000 (loan) – 20,000 (adjustment) = 1,80,000'),
        React.createElement('table', { className: 'border-collapse border border-gray-300 w-full mt-2 text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Date / Particulars'),
              React.createElement('th', { className: 'border border-gray-300 p-2 bg-gray-100 text-gray-900' }, 'Amount (₹)')
            )
          ),
          React.createElement('tbody', null,
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, 'Transferred to Executors (Capital + Interest + Profit share + Goodwill + Loan adjustments)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,80,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '31/03/2021 To Balance c/d'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '1,93,500')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '30/06/2021 Bank (I Instalment)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '78,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '31/03/2022 To Bank (II Instalment)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '72,000')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '31/03/2022 To Balance c/d'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '64,500')
            ),
            React.createElement('tr', null,
              React.createElement('td', { className: 'border border-gray-300 p-2' }, '30/06/2023 To Bank (III Instalment)'),
              React.createElement('td', { className: 'border border-gray-300 p-2 text-right' }, '66,000')
            )
          )
        ),
        React.createElement('h5', { className: 'font-bold mt-3' }, 'Executors Account (MS instalment schedule)'),
        React.createElement('pre', { className: 'whitespace-pre-wrap bg-gray-50 border border-gray-200 p-3 text-sm text-gray-900' }, `Maheep dues to be transferred to executors = 1,15,000 + 5,000 + 20,000 + 60,000 – 20,000 = 1,80,000\n\nMaheep's Executors Account\nDate  Particulars  LF  Amount (₹)  Date  Particulars  LF  Amount (₹)\n31/03/21  To Balance c/d   1,93,500  30/06/20  31/03/21  By Maheep's Cap. A/c Interest (9 months)   1,80,000 13,500  1,93,500     1,93,500\n30/06/21  31/03/22  To Bank (I Instalment) To Balance c/d   78,000  1,29,000\n01/04/21 30/06/21 31/03/22  By Balance b/d  By Interest (3 months)  By Interest (9 months)   1,93,500  4,500  9,000   2,07,000     2,07,000\n30/06/22 31/03/23  To Bank (II Instalment) To Balance c/d   72,000  64,500\n01/04/22 30/06/22 31/03/23  By Balance b/d By Interest (3 months) By Interest (9 months)   1,29,000  3,000  4,500   1,36,500     1,36,500\n30/06/23  To Bank (III Instalment)   66,000  01/04/23 30/06/23  By Balance b/d  By Interest (3 months)   64,500  1,500   66,000     66,000`),
        React.createElement('p', { className: 'mt-3' }, 'Working: MS shows instalment schedule with interest splits and running balances; render the full ledger in-app for exact parity.')
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
            React.createElement('tr', { className: 'font-bold bg-gray-50 text-gray-900' },
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

// Update subtotal/total rows styling in this file where bg-gray-50 is used
// (the file already contains rows with className 'font-bold bg-gray-50' — ensure they include text-gray-900)
// No structural change otherwise.
