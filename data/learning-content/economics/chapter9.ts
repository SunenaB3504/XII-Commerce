import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter9Module: LearningModule = {
  chapter: "9",
  title: "Liberalisation, Privatisation and Globalisation: An Appraisal",
  overview: "This chapter marks a turning point in India's economic history. We will examine the circumstances that led to the severe economic crisis of 1991 and the subsequent New Economic Policy (NEP). This policy was built on the three pillars of Liberalisation, Privatisation, and Globalisation (LPG), which fundamentally changed the direction of the Indian economy from a state-controlled model to a more market-oriented one.",
  keyConcepts: [
    {
      title: "Background of the 1991 Economic Crisis",
      content: React.createElement('p', null, "The reforms were not a choice but a necessity. The crisis was triggered by inefficient management of the economy in the 1980s, leading to high government expenditure, rising prices, and a severe Balance of Payments (BoP) crisis. Foreign exchange reserves dropped to levels that were not sufficient to finance imports for even a fortnight."),
      examFocus: true,
    },
    {
      title: "Liberalisation",
      content: React.createElement('p', null, "Liberalisation involved freeing the business and industry from the shackles of the 'licence-permit-quota raj'. Key reforms included deregulation of the industrial sector, financial sector reforms (reducing RBI's role from regulator to facilitator), tax reforms, and foreign exchange reforms."),
      examFocus: true,
    },
    {
      title: "Privatisation",
      content: React.createElement('p', null, "This involved reducing the role of the public sector and giving a greater role to the private sector. The main method used was disinvestment, which is the sale of a part of the equity of Public Sector Enterprises (PSEs) to the public."),
    },
    {
      title: "Globalisation",
      content: React.createElement('p', null, "Globalisation is the integration of a country's economy with the world economy. It is an outcome of the policies of liberalisation and privatisation. Key aspects include outsourcing (hiring business services from external sources, often overseas) and the establishment of the World Trade Organisation (WTO) in 1995 to facilitate international trade."),
      examFocus: true,
    },
    {
      title: "An Appraisal of LPG Policies",
      content: React.createElement('p', null, "The reforms have had both positive and negative outcomes. Positives include rapid GDP growth, a surge in foreign direct investment (FDI), and control over inflation. Criticisms include the failure to generate sufficient employment ('jobless growth'), neglect of agriculture, and increased income disparities."),
    }
  ],
  keywords: [
    { term: "Liberalisation", definition: "The process of freeing business and industry from unnecessary controls and restrictions." },
    { term: "Privatisation", definition: "The process of involving the private sector in the ownership or operation of state-owned enterprises." },
    { term: "Globalisation", definition: "The integration of the economy of the country with the world economy." },
    { term: "Disinvestment", definition: "The sale of a part of the equity of Public Sector Undertakings (PSUs) by the government." },
    { term: "Outsourcing", definition: "A business practice in which a company hires another company or an individual to perform tasks, handle operations or provide services that are traditionally performed by the company's own employees." },
    { term: "World Trade Organisation (WTO)", definition: "An international organization designed to supervise and liberalize international trade." }
  ],
  caseStudies: [
    {
      title: "The Rise of India's BPO Industry",
      scenario: "After the 1991 reforms, many multinational companies in the USA and Europe realized that tasks like customer support, billing services, and data entry could be done at a much lower cost in India. This was due to India's large pool of English-speaking, educated youth and lower wage rates. The development of telecommunication and the internet made it possible to transfer these services seamlessly across the globe. This led to the boom of the Business Process Outsourcing (BPO) industry in cities like Bengaluru, Gurugram, and Pune, creating millions of jobs.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Globalisation and Outsourcing"),
        React.createElement('p', null, "This is a prime example of globalisation in action. The liberalisation of the telecom sector and trade policies allowed foreign companies to invest and operate in India. Outsourcing became a major outcome, where India leveraged its human resources to become a global hub for IT-enabled services. This showcases a major positive impact of the 1991 economic reforms.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 9 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "1991 reforms were a response to a severe economic crisis (BoP crisis)."),
      React.createElement('li', null, React.createElement('b', null, "Liberalisation:"), " Ended the License Raj."),
      React.createElement('li', null, React.createElement('b', null, "Privatisation:"), " Increased role for the private sector, mainly through disinvestment of PSUs."),
      React.createElement('li', null, React.createElement('b', null, "Globalisation:"), " Integrated India with the world economy. Key outcomes include outsourcing and joining the WTO."),
      React.createElement('li', null, React.createElement('b', null, "Appraisal:"), " Led to high GDP growth but also criticized for jobless growth and negative impact on agriculture.")
    )
  )
};
