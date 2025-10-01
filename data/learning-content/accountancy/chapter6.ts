import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter6Module: LearningModule = {
  chapter: "6",
  title: "Issue and Redemption of Debentures",
  overview: "This chapter deals with debentures, which are a major instrument for raising long-term debt capital. We will explore the types of debentures, the accounting for their issue (at par, premium, or discount), and the various methods for their redemption. A key focus is on the accounting entries that consider the terms of redemption at the time of issue itself.",
  keyConcepts: [
    {
      title: "Nature of Debentures",
      content: React.createElement('p', null, "A debenture is a written instrument acknowledging a debt under the common seal of the company. It is a part of the company's borrowed capital, and debenture holders are creditors, not owners. They receive a fixed rate of interest, which is a charge against profits."),
      examFocus: true,
    },
    {
      title: "Issue of Debentures",
      content: React.createElement('p', null, "Debentures can be issued in different ways:"),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'For Cash:'), ' At par, premium, or discount.'),
        React.createElement('li', null, React.createElement('b', null, 'For Consideration other than Cash:'), " Issued to vendors for the purchase of assets."),
        React.createElement('li', null, React.createElement('b', null, 'As a Collateral Security:'), " Issued to a lender as a secondary security against a loan.")
      )
    },
    {
      title: "Issue of Debentures with Terms of Redemption",
      content: React.createElement('p', null, "This is a crucial concept. When debentures are to be redeemed at a premium, the premium payable on redemption is a liability and should be provided for at the time of issue itself. This future loss is recorded in a 'Loss on Issue of Debentures Account'."),
      examFocus: true,
      example: "If a ₹100 debenture is issued at par but redeemable at ₹110, the ₹10 premium on redemption is a loss that is recorded at the time of issue."
    },
    {
      title: "Writing off Discount/Loss on Issue of Debentures",
      content: React.createElement('p', null, "The discount or loss on the issue of debentures is a capital loss. It should be written off in the year of issue, first against the Securities Premium account, and the balance against the Statement of Profit and Loss."),
    },
    {
      title: "Redemption of Debentures",
      content: React.createElement('p', null, "Redemption is the repayment of the debenture amount. Key methods include:"),
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, "Payment in Lump Sum at maturity."),
        React.createElement('li', null, "Payment in Instalments (Draw of Lots)."),
        React.createElement('li', null, "Purchase in the Open Market."),
        React.createElement('li', null, "Conversion into shares or new debentures.")
      )
    }
  ],
  keywords: [
    { term: "Debenture", definition: "A long-term debt instrument used by companies to borrow money at a fixed rate of interest." },
    { term: "Redemption", definition: "The process of repaying the debenture amount to the debenture holders." },
    { term: "Collateral Security", definition: "A secondary security provided for a loan, in addition to the primary security." },
    { term: "Premium on Redemption", definition: "The excess amount paid to debenture holders over their nominal value at the time of redemption." },
    { term: "Discount on Issue", definition: "The excess of the nominal value of a debenture over its issue price." },
  ],
  caseStudies: [
    {
      title: "The Redemption Premium Puzzle",
      scenario: "A company issues 1,000, 9% debentures of ₹100 each at a discount of 5%, redeemable at a premium of 5%.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculating the 'Loss on Issue':"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Discount on Issue:"), " 5% of (1000 x ₹100) = ₹5,000."),
          React.createElement('li', null, React.createElement('b', null, "Premium on Redemption:"), " 5% of (1000 x ₹100) = ₹5,000."),
          React.createElement('li', null, React.createElement('b', null, "Total Loss on Issue:"), " The total loss to be recognized at the time of issue is the sum of both the discount and the future premium on redemption. Total Loss = ₹5,000 + ₹5,000 = ₹10,000. This amount is debited to the 'Loss on Issue of Debentures Account'.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 6 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Debenture holders are ", React.createElement('b', null, 'creditors'), ", not owners."),
      React.createElement('li', null, "Interest on debentures is a ", React.createElement('b', null, 'charge against profit'), ", meaning it must be paid even if there is a loss."),
      React.createElement('li', null, "When debentures are redeemable at a premium, the future premium is a loss that must be accounted for at the time of issue itself in the ", React.createElement('b', null, "Loss on Issue of Debentures Account"), "."),
      React.createElement('li', null, "This 'Loss on Issue' should be written off in the year of issue, first from Securities Premium and then from the Statement of P&L.")
    )
  )
};