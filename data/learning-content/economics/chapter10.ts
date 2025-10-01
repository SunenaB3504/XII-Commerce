import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter10Module: LearningModule = {
  chapter: "10",
  title: "Human Capital Formation in India",
  overview: "This chapter explores the concept of 'human capital' – the stock of skill and expertise of a nation at a point of time. We will learn how investments in education and health can be seen as investments in capital, similar to investing in machinery. We'll examine the sources of human capital, its crucial role in economic growth, and the state of the education sector in India.",
  keyConcepts: [
    {
      title: "Human Capital vs. Physical Capital",
      content: React.createElement('p', null, "Physical capital (like machines) is tangible and can be sold in the market. Human capital (knowledge, skills) is intangible, built into the mind and body of its owner, and cannot be sold; only its services can be."),
      examFocus: true,
    },
    {
      title: "Sources of Human Capital Formation",
      content: React.createElement('p', null, "Human capital is formed through various types of investments in people."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, "Investment in ", React.createElement('b', null, 'Education')),
        React.createElement('li', null, "Investment in ", React.createElement('b', null, 'Health')),
        React.createElement('li', null, React.createElement('b', null, 'On-the-job Training')),
        React.createElement('li', null, React.createElement('b', null, 'Migration')),
        React.createElement('li', null, "Expenditure on ", React.createElement('b', null, 'Information'))
      )
    },
    {
      title: "Human Capital and Economic Growth",
      content: React.createElement('p', null, "There is a strong positive relationship between human capital and economic growth. An educated and healthy population is more productive, innovative, and adapts to new technologies more easily, which accelerates development. The causality flows in both directions: higher income facilitates investment in human capital, and higher human capital leads to higher income."),
    },
    {
      title: "Human Capital vs. Human Development",
      content: React.createElement('p', null, "These are related but distinct concepts. Human capital treats humans as a means to an end (increased productivity). Human development treats humans as an end in themselves, arguing that education and health are basic rights and essential for human well-being, irrespective of their impact on productivity."),
      examFocus: true,
    },
    {
      title: "Education Sector in India",
      content: React.createElement('p', null, "The government plays a crucial role in providing education and health services as they have large social benefits. In India, regulatory bodies like UGC, AICTE, and NCERT oversee the education sector. Despite progress, challenges like high dropout rates, gender inequality, and low quality of education persist."),
    }
  ],
  keywords: [
    { term: "Human Capital", definition: "The stock of skill, ability, expertise, education, and knowledge embodied in the people of a nation." },
    { term: "Human Capital Formation", definition: "The process of adding to the stock of human capital over time." },
    { term: "Physical Capital", definition: "All those inputs which are required for further production, like machines, tools, buildings etc." },
    { term: "Human Development", definition: "A broader concept that considers education and health as integral to human well-being, not just as means for increasing productivity." }
  ],
  caseStudies: [
    {
      title: "The IT Revolution in India",
      scenario: "India's success in the global Information Technology (IT) sector is not due to abundant physical capital or natural resources. It is largely attributed to its vast pool of skilled and English-speaking software engineers. For decades, India invested in higher technical education through institutions like the IITs and other engineering colleges. This created a large stock of human capital with the specific skills needed by the global IT industry.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Human Capital as a Driver of Growth"),
        React.createElement('p', null, "This case is a powerful example of how human capital formation can lead to economic growth. The investment in education created a skilled workforce that became the foundation for a multi-billion dollar industry. It shows that human capital can be a more important determinant of a country's comparative advantage than physical capital.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 10 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Human Capital = Skills & expertise of people."),
      React.createElement('li', null, React.createElement('b', null, "Sources:"), " Investment in Education, Health, On-the-job training, Migration, Information."),
      React.createElement('li', null, "Human Capital is intangible; Physical Capital is tangible."),
      React.createElement('li', null, React.createElement('b', null, "Human Capital"), " sees people as a means to increase productivity."),
      React.createElement('li', null, React.createElement('b', null, "Human Development"), " sees people as an end in themselves."),
      React.createElement('li', null, "Government plays a key role in the education sector through bodies like UGC and NCERT.")
    )
  )
};
