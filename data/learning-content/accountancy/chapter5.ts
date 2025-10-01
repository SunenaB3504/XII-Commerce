import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter5Module: LearningModule = {
  chapter: "5",
  title: "Accounting for Share Capital",
  overview: "This chapter marks the beginning of Company Accounts, focusing on the primary source of finance for a company: its share capital. We will explore the different categories of share capital, the accounting procedures for issuing shares at par and premium, and the complex but important processes of forfeiture and re-issue of shares.",
  keyConcepts: [
    {
      title: "Categories of Share Capital",
      content: React.createElement('p', null, "The capital of a company is structured in a specific hierarchy, which is disclosed in the 'Notes to Accounts' of the Balance Sheet."),
      examFocus: true,
      mnemonic: "Remember 'A-I-S-C-P-U-R': Authorised, Issued, Subscribed, Called-up, Paid-up, Uncalled, and Reserve Capital."
    },
    {
      title: "Issue of Shares: Par and Premium",
      content: React.createElement('p', null, "Shares can be issued at their face value (par) or at a price higher than their face value (premium). The excess amount received on premium is transferred to a separate 'Securities Premium' account."),
      examFocus: true,
      example: "A share of ₹10 issued for ₹12 is an issue at a premium of ₹2. The ₹2 is credited to the Securities Premium account."
    },
    {
      title: "Calls-in-Arrears and Calls-in-Advance",
      content: React.createElement('p', null, "Calls-in-Arrears is the amount not paid by shareholders on allotment or calls. Calls-in-Advance is the amount paid by shareholders before the company has officially made the call. Interest can be charged on arrears and paid on advance as per the company's Articles of Association."),
    },
    {
      title: "Forfeiture and Re-issue of Shares",
      content: React.createElement('p', null, "Forfeiture means cancelling the shares of a shareholder for non-payment of calls. The amount already paid by the shareholder is forfeited by the company. These forfeited shares can then be re-issued to other individuals."),
      examFocus: true,
      example: React.createElement('p', null, "The balance in the Share Forfeiture account, after accounting for any discount on re-issue, is a capital profit and is transferred to the Capital Reserve.")
    }
  ],
  keywords: [
    { term: "Share Capital", definition: "The capital raised by a company through the issue of shares." },
    { term: "Authorised Capital", definition: "The maximum amount of share capital that a company is authorized by its Memorandum of Association to issue." },
    { term: "Securities Premium", definition: "The excess amount received over the face value of a share. It is a capital receipt." },
    { term: "Pro-rata Allotment", definition: "Allotting shares proportionately to applicants when the issue is oversubscribed." },
    { term: "Forfeiture of Shares", definition: "The cancellation of shares for non-payment of calls due." },
    { term: "Capital Reserve", definition: "A reserve created out of capital profits, such as the profit on the re-issue of forfeited shares." }
  ],
  caseStudies: [
    {
      title: "The Forfeiture and Re-issue Scenario",
      scenario: "A company forfeited 100 shares of ₹10 each, on which the shareholder had paid only the application money of ₹3 per share. Later, the company re-issued these 100 shares as fully paid for ₹8 per share.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculation of Capital Reserve:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Amount Forfeited:"), ' 100 shares × ₹3/share = ₹300.'),
          React.createElement('li', null, React.createElement('b', null, "Discount on Re-issue:"), " The shares are re-issued for ₹8 but are treated as fully paid (₹10). The discount is ₹10 - ₹8 = ₹2 per share. Total discount = 100 shares × ₹2 = ₹200."),
          React.createElement('li', null, React.createElement('b', null, "Transfer to Capital Reserve:"), " The profit on re-issue is transferred to the Capital Reserve. Profit = Amount Forfeited - Discount on Re-issue = ₹300 - ₹200 = ₹100.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 5 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Share capital structure: Authorised > Issued > Subscribed > Called-up > Paid-up."),
      React.createElement('li', null, React.createElement('b', null, 'Securities Premium'), " is a capital receipt and shown under 'Reserves and Surplus'."),
      React.createElement('li', null, React.createElement('b', null, 'Forfeiture:'), " Share Capital A/c is debited with the called-up amount."),
      React.createElement('li', null, React.createElement('b', null, 'Re-issue:'), " Discount on re-issue cannot exceed the amount forfeited on those shares."),
      React.createElement('li', null, "Profit on re-issue of forfeited shares is a capital profit and is transferred to ", React.createElement('b', null, 'Capital Reserve'), ".")
    )
  )
};