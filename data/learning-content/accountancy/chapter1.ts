import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Accounting for Partnership: Basic Concepts",
  overview: "This chapter introduces the essentials of partnership accounting. A partnership is formed when two or more people join to run a business and share profits. We'll explore the legal framework of the Indian Partnership Act, 1932, and the critical accounting procedures for maintaining partners' capital accounts, distributing profits, and making necessary adjustments.",
  keyConcepts: [
    {
      title: "Nature of Partnership & The Partnership Deed",
      content: React.createElement('p', null, "A partnership is defined by an agreement between partners. While an oral agreement is valid, a written agreement, known as the Partnership Deed, is highly recommended to avoid disputes. It outlines all the terms and conditions, such as profit-sharing ratios, salaries, interest on capital, etc."),
      examFocus: true,
      example: "If the Partnership Deed is silent on profit sharing, the Indian Partnership Act, 1932, mandates that profits must be shared equally, regardless of capital contribution."
    },
    {
      title: "Capital Accounts: Fixed vs. Fluctuating",
      content: React.createElement('p', null, "There are two methods to maintain partners' capital accounts. This is a very common topic in exams."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Fixed Capital Method:'), ' Two accounts are maintained for each partner: a Capital Account (which remains fixed) and a Current Account (where all adjustments like salary, drawings, profit/loss are made).'),
        React.createElement('li', null, React.createElement('b', null, 'Fluctuating Capital Method:'), " Only one account, the Capital Account, is maintained for each partner. All adjustments are made directly in this account, causing its balance to fluctuate.")
      )
    },
    {
      title: "Profit & Loss Appropriation Account",
      content: React.createElement('p', null, "This account is an extension of the Profit and Loss Account. It is prepared to show how the net profit is distributed or 'appropriated' among the partners. It is credited with Net Profit and Interest on Drawings, and debited with Interest on Capital, Partners' Salaries/Commissions, and transfers to reserves."),
      examFocus: true,
    },
    {
      title: "Interest on Drawings",
      content: React.createElement('p', null, "If the partnership deed provides for it, interest is charged on the money withdrawn by partners for personal use. The calculation method depends on the pattern of withdrawal."),
      example: "If a partner withdraws a fixed amount every month, interest is calculated on the total drawings for an average period (e.g., 6.5 months for withdrawals at the beginning of each month)."
    },
    {
      title: "Guarantee of Profit to a Partner",
      content: React.createElement('p', null, "Sometimes, a new or existing partner is guaranteed a minimum amount of profit. If their actual share of profit is less than the guaranteed amount, the deficiency is borne by the guaranteeing partner(s) in their agreed ratio."),
      examFocus: true
    },
    {
      title: "Past Adjustments",
      content: React.createElement('p', null, "If certain errors or omissions (like interest on capital not being provided) are discovered after closing the accounts, they can be rectified by passing a single adjustment entry instead of reopening all the accounts. This involves calculating the net effect of the error on each partner's capital account."),
    }
  ],
  keywords: [
    { term: "Partnership Deed", definition: "A written agreement among partners that outlines the terms and conditions of the partnership." },
    { term: "Fixed Capital Account", definition: "A partner's capital account whose balance generally remains unchanged, with all adjustments made through a separate Current Account." },
    { term: "Fluctuating Capital Account", definition: "A partner's capital account where all adjustments like profits, losses, and drawings are recorded, causing the balance to change over time." },
    { term: "Profit & Loss Appropriation Account", definition: "An account prepared after the P&L Account to show the distribution of profits among partners." },
    { term: "Guarantee of Profit", definition: "An assurance given to a partner that they will receive a minimum amount of profit." },
  ],
  caseStudies: [
    {
      title: "The Guaranteed Profit Dilemma",
      scenario: "Mohit and Rohan are partners sharing profits 2:1. They admit Rahul for a 1/4th share with a guaranteed profit of at least ₹50,000. The total profit for the year is ₹1,60,000. The new profit sharing ratio among Mohit, Rohan, and Rahul is 2:1:1.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Calculation of Deficiency:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Rahul's Actual Share:"), " Rahul's share in profit as per the new ratio is 1/4 of ₹1,60,000 = ₹40,000."),
          React.createElement('li', null, React.createElement('b', null, "Calculate Deficiency:"), " Rahul's guaranteed profit is ₹50,000, but his actual share is only ₹40,000. The deficiency is ₹50,000 - ₹40,000 = ₹10,000."),
          React.createElement('li', null, React.createElement('b', null, "Bear Deficiency:"), " This deficiency of ₹10,000 will be borne by the guaranteeing partners, Mohit and Rohan, in their old profit-sharing ratio of 2:1."),
          React.createElement('p', {className: "ml-4"}, "Mohit's contribution = 2/3 of ₹10,000 = ₹6,667."),
          React.createElement('p', {className: "ml-4"}, "Rohan's contribution = 1/3 of ₹10,000 = ₹3,333.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 1 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "A ", React.createElement('b', null, 'Partnership Deed'), " is crucial. In its absence, profits are shared equally, and no interest/salary is paid (except 6% p.a. on partner's loan)."),
      React.createElement('li', null, React.createElement('b', null, 'Fixed Capital:'), " Two accounts (Capital + Current). ", React.createElement('b', null, 'Fluctuating Capital:'), " One account (Capital)."),
      React.createElement('li', null, React.createElement('b', null, 'P&L Appropriation A/c'), " is for distributing profit among partners."),
      React.createElement('li', null, "Interest on drawings is calculated for an average period (usually 6 months) if dates are not given."),
      React.createElement('li', null, "For guaranteed profit, first calculate the deficiency, then deduct it from the guaranteeing partners' shares.")
    )
  )
};