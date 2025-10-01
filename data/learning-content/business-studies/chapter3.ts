import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter3Module: LearningModule = {
  chapter: "3",
  title: "Business Environment",
  overview: "A business does not exist in a vacuum. It operates within a larger context of forces and institutions that are outside its control. This is the Business Environment. Think of it like a ship at sea; a manager must understand the winds, currents, and weather to navigate successfully. This chapter explores these external forces and why understanding them is critical for survival and growth.",
  keyConcepts: [
    {
      title: "Meaning and Features",
      content: React.createElement('p', null, "The business environment is the sum total of all external forces that affect a firm's performance. Its features are key to understanding its nature."),
      mnemonic: "Remember 'Dr. CUT IS G': Dynamic, Relativity, Complexity, Uncertainty, Totality, Inter-relatedness, Specific & General forces.",
    },
    {
      title: "Importance of Business Environment",
      content: React.createElement('p', null, "Scanning and understanding the business environment is vital for any manager. It helps an organization to:"),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, "Identify Opportunities and get the First-Mover Advantage."),
        React.createElement('li', null, "Identify Threats and Early Warning Signals."),
        React.createElement('li', null, "Tap useful resources from the environment (like finance, raw materials)."),
        React.createElement('li', null, "Cope with rapid changes and adapt successfully."),
        React.createElement('li', null, "Assist in planning and policy formulation.")
      )
    },
    {
      title: "Dimensions of Business Environment (PESTLE)",
      content: React.createElement('p', null, "The general environment is broken down into five key dimensions. Understanding each is crucial for business planning."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Economic:'), ' Includes factors like inflation, interest rates, GDP, and disposable income. E.g., a rise in interest rates makes borrowing more expensive for companies.'),
          React.createElement('li', null, React.createElement('b', null, 'Social:'), ' Includes social forces like customs, traditions, values, and trends. E.g., the growing health and fitness trend has created a huge market for organic food and gyms.'),
          React.createElement('li', null, React.createElement('b', null, 'Technological:'), ' Involves scientific improvements and innovations. E.g., the shift from physical stores to e-commerce has revolutionized the retail industry.'),
          React.createElement('li', null, React.createElement('b', null, 'Political:'), ' Relates to government affairs, political stability, and the attitude of the government towards business. E.g., a stable government encourages long-term investment.'),
          React.createElement('li', null, React.createElement('b', null, 'Legal:'), ' Consists of legislation, court judgments, and administrative orders. E.g., all food product companies must adhere to the regulations set by FSSAI.')
      )
    },
    {
      title: "Economic Environment in India: LPG Reforms (1991)",
      content: React.createElement('p', null, "In 1991, India faced a severe economic crisis, which led to the introduction of the New Economic Policy. This policy rested on three pillars, collectively known as LPG."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Liberalisation:'), " Ending the 'license-permit-quota raj' and freeing the business and industry from unnecessary restrictions."),
          React.createElement('li', null, React.createElement('b', null, 'Privatisation:'), ' Reducing the role of the public sector and giving a greater role to the private sector.'),
          React.createElement('li', null, React.createElement('b', null, 'Globalisation:'), ' Integrating the Indian economy with the world economy.')
      )
    },
    {
        title: "Demonetisation and GST",
        content: React.createElement('p', null, "Two major recent events have significantly impacted the Indian business environment."),
        example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Demonetisation (2016):'), ' Aimed to curb black money, fake currency, and terror funding. It led to a push towards a less-cash economy and increased formalization.'),
          React.createElement('li', null, React.createElement('b', null, 'Goods and Services Tax (GST - 2017):'), " Aimed to create 'One Nation, One Tax, One Market' by replacing multiple indirect taxes. It simplified the tax structure and improved the ease of doing business.")
        )
    }
  ],
  keywords: [
    { term: "Business Environment", definition: "The sum total of all external forces, factors, and institutions that are outside the control of a business but may affect its performance." },
    { term: "Environmental Scanning", definition: "The process of carefully monitoring an organization's internal and external environments for detecting early signs of opportunities and threats." },
    { term: "Liberalisation", definition: "The process of removing government-imposed restrictions on trade and business." },
    { term: "Privatisation", definition: "The transfer of a business, industry, or service from public to private ownership and control." },
    { term: "Globalisation", definition: "The process of interaction and integration among people, companies, and governments worldwide." },
    { term: "Demonetisation", definition: "The act of stripping a currency unit of its status as legal tender." }
  ],
  caseStudies: [
    {
      title: "The Rise of 'HealthFirst' Juices",
      scenario: "A decade ago, most Indians preferred sugary carbonated drinks. 'Fizz Drinks Ltd.' was the market leader. However, with increasing access to the internet and global health information, people became more health-conscious and started looking for healthier alternatives. At the same time, new food processing technologies made it easier to package fresh juices without preservatives. A new company, 'HealthFirst', identified this trend and launched a range of cold-pressed juices. They used digital marketing and social media influencers to promote their products, quickly gaining market share from 'Fizz Drinks Ltd.'",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Dimensions of Business Environment Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Social Environment:"), " The primary driver of change was the shift in consumer preferences towards a healthier lifestyle. This is a social trend."),
          React.createElement('li', null, React.createElement('b', null, "Technological Environment:"), " New food processing and digital marketing technologies enabled 'HealthFirst' to create a better product and reach its target audience effectively."),
          React.createElement('li', null, React.createElement('b', null, "Importance of Environment Scanning:"), ' \'HealthFirst\' succeeded because it identified an opportunity (health trend) and got the first-mover advantage. \'Fizz Drinks Ltd.\' failed to adapt to the rapid changes and suffered from the threat of new competition.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 3 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Business Environment is external, uncontrollable, and dynamic."),
      React.createElement('li', null, "Importance: Find Opportunities (First Mover) & Threats (Warning Signal)."),
      React.createElement('li', null, React.createElement('b', null, "Dimensions (PESTLE):"), ' Political, Economic, Social, Technological, Legal.'),
      React.createElement('li', null, React.createElement('b', null, "Economic Reforms 1991:"), ' Liberalisation (end of license raj), Privatisation (role of private sector up), Globalisation (integration with world).'),
      React.createElement('li', null, React.createElement('b', null, "Demonetisation:"), ' Aimed to reduce black money, pushed digital payments.'),
      React.createElement('li', null, React.createElement('b', null, "GST:"), " Simplified indirect taxes, creating 'One Nation, One Tax, One Market'.")
    )
  )
};
