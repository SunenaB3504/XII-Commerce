import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter7Module: LearningModule = {
  chapter: "7",
  title: "Directing",
  overview: "Directing is the 'heart' of management. After plans are made and the organization is structured, directing is the function that initiates action. It involves instructing, guiding, motivating, and leading people to achieve organizational objectives. This chapter explores the four key elements of directing: Supervision, Motivation, Leadership, and Communication.",
  keyConcepts: [
    {
      title: "Meaning, Importance, and Characteristics of Directing",
      content: React.createElement('p', null, "Directing is the function that gets things done through people. It's a continuous process that flows from top to bottom and is performed at every level of management. Its importance lies in initiating action, integrating employee efforts, and facilitating change."),
      examFocus: true,
    },
    {
      title: "Element 1: Supervision",
      content: React.createElement('p', null, "Supervision involves overseeing subordinates at work to ensure they are working as per plans and helping them solve their problems. A supervisor is the immediate link between workers and middle management."),
    },
    {
      title: "Element 2: Motivation",
      content: React.createElement('p', null, "Motivation is the psychological process of stimulating people to action to accomplish desired goals. It's about inspiring people to give their best. A key theory here is Maslow's Need Hierarchy Theory."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, "Maslow's Hierarchy:"), " A theory that states human needs are hierarchical, starting from Basic Physiological needs, moving to Safety, Social, Esteem, and finally Self-Actualisation needs. A higher-level need only motivates a person after their lower-level needs are satisfied."),
        React.createElement('li', null, React.createElement('b', null, "Incentives:"), " Motivation can be provided through Financial incentives (e.g., bonus, profit sharing) and Non-Financial incentives (e.g., status, job security, employee empowerment).")
      )
    },
    {
      title: "Element 3: Leadership",
      content: React.createElement('p', null, "Leadership is the process of influencing the behavior of people to make them strive voluntarily towards the achievement of organizational goals. It's about creating a vision and inspiring others to follow."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Autocratic:'), ' The leader gives orders and expects obedience (dictatorial).'),
        React.createElement('li', null, React.createElement('b', null, 'Democratic:'), ' The leader consults with subordinates before making decisions (participative).'),
        React.createElement('li', null, React.createElement('b', null, 'Laissez-faire (Free-rein):'), ' The leader gives subordinates a high degree of independence.')
      )
    },
    {
      title: "Element 4: Communication",
      content: React.createElement('p', null, "Communication is the process of exchange of ideas, views, and facts between people to create a common understanding. Effective communication is vital for management."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Formal Communication:'), ' Follows the official scalar chain (e.g., official emails, notices).'),
        React.createElement('li', null, React.createElement('b', null, 'Informal Communication:'), " Does not follow the official chain, often called the 'grapevine'.")
      )
    }
  ],
  keywords: [
    { term: "Directing", definition: "The management function of instructing, guiding, motivating, and leading people to achieve organizational goals." },
    { term: "Motivation", definition: "The process of stimulating people to action to accomplish desired goals." },
    { term: "Leadership", definition: "The activity of influencing people to strive willingly for group objectives." },
    { term: "Communication", definition: "The process of passing information and understanding from one person to another." },
    { term: "Grapevine", definition: "The informal communication network within an organization." },
    { term: "Incentive", definition: "A reward, financial or non-financial, offered to an employee for better performance." }
  ],
  caseStudies: [
    {
      title: "The Unmotivated Sales Team",
      scenario: "Rohan, a new sales manager, noticed that his team was underperforming. He held a meeting where he simply told them to 'work harder'. This didn't work. He then decided to talk to each member individually. He found out that one junior member felt insecure about his temporary contract (Safety Need). A senior member felt her good work was never praised (Esteem Need). Another felt bored with the repetitive tasks (Self-Actualisation Need). Rohan then made the junior member's job permanent, started a 'Salesperson of the Month' award, and involved the senior member in strategy planning for a new product.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Motivation & Maslow's Theory:"), " Rohan's initial autocratic approach failed. He succeeded when he applied Maslow's theory by identifying and addressing the specific, unmet needs of each employee at their respective levels."),
          React.createElement('li', null, React.createElement('b', null, "Leadership:"), " Rohan transitioned from an autocratic style ('work harder') to a more democratic and employee-oriented style by listening to his team's problems."),
          React.createElement('li', null, React.createElement('b', null, "Communication:"), ' The one-way communication failed, but the two-way communication (listening to individuals) was effective in identifying the real issues.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 7 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Directing = The 'Action' function of management."),
      React.createElement('li', null, React.createElement('b', null, "Four Elements (SM-LC):"), " Supervision, Motivation, Leadership, Communication."),
      React.createElement('li', null, React.createElement('b', null, "Motivation:"), " Understand Maslow's Hierarchy (Basic -> Safety -> Social -> Esteem -> Self-Actualisation)."),
      React.createElement('li', null, React.createElement('b', null, "Leadership Styles:"), " Autocratic (I decide), Democratic (We decide), Laissez-faire (You decide)."),
      React.createElement('li', null, React.createElement('b', null, "Communication:"), " Formal (Official Chain) vs. Informal (Grapevine).")
    )
  )
};
