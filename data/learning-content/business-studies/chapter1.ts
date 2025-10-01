import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Nature and Significance of Management",
  overview: "This chapter introduces the fundamental concepts of management. We'll explore what management is, why it's essential for any organization, and its characteristics. Think of management as the 'brain' of an organization, coordinating all parts to work towards a common goal effectively and efficiently.",
  keyConcepts: [
    {
      title: "Effectiveness vs. Efficiency",
      content: React.createElement('p', null, "These two terms are the cornerstones of management. Effectiveness means completing the task and achieving the goal (doing the right things). Efficiency means doing the task correctly with minimum cost and resources (doing things right). Good management strikes a balance between both."),
      examFocus: true,
      example: "If a company's target is to produce 1000 shirts, being effective means producing all 1000 shirts. Being efficient means producing them with the least amount of cloth, electricity, and labor cost."
    },
    {
      title: "Characteristics of Management",
      content: React.createElement('p', null, "Management has several key features that define its nature."),
      mnemonic: "Remember 'My Cute Dog Is So Goofy & Playful': Multidimensional, Continuous, Dynamic, Intangible, Group Activity, Goal-Oriented, Pervasive."
    },
    {
      title: "Objectives of Management",
      content: React.createElement('p', null, "Management strives to achieve three main types of objectives."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
        React.createElement('li', null, React.createElement('b', null, 'Organisational:'), ' Survival, Profit, and Growth for the company itself.'),
        React.createElement('li', null, React.createElement('b', null, 'Social:'), ' Creating benefits for society, like using eco-friendly methods or providing employment.'),
        React.createElement('li', null, React.createElement('b', null, 'Personal:'), ' Fulfilling the individual needs of employees, like fair salary, recognition, and growth opportunities.')
      )
    },
    {
      title: "Management: Art, Science, or Profession?",
      content: React.createElement('p', null, "This is a classic debate. Management is considered both an Art (due to personalized application of skills and creativity) and an inexact Science (as it has principles based on observation, but they are not universally rigid like physics). It is on the path to becoming a full-fledged Profession but currently lacks some key features like restricted entry."),
      examFocus: true
    },
    {
      title: "Coordination: The Essence of Management",
      content: React.createElement('p', null, "Coordination is not a separate function but the force that binds all other functions of management (Planning, Organising, Staffing, Directing, Controlling). It is the synchronization of group efforts to ensure unity of action."),
    }
  ],
  keywords: [
    { term: "Process", definition: "A series of interrelated functions performed to achieve a goal." },
    { term: "Effectiveness", definition: "Completing a task on time; achieving the end result." },
    { term: "Efficiency", definition: "Completing a task with minimum cost and optimal resource utilization." },
    { term: "Pervasive", definition: "Required in all organizations, at all levels, in all departments." },
    { term: "Coordination", definition: "The synchronization of efforts of all departments to achieve organizational goals." },
  ],
  caseStudies: [
    {
      title: "The E-Commerce Challenge",
      scenario: "‘QuickCart’, an e-commerce giant, set a goal to deliver all festive season orders within 24 hours. The marketing department ran a huge campaign, leading to a massive surge in orders. However, the operations department was not prepared for this volume. They ran out of packaging material and their delivery fleet was too small. As a result, many deliveries were delayed beyond 48 hours, leading to customer complaints and negative reviews.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Effectiveness vs. Efficiency:"), ' The company failed to be effective because it could not achieve its primary goal of 24-hour delivery.'),
          React.createElement('li', null, React.createElement('b', null, "Lack of Coordination:"), ' This is the core problem. The marketing department’s actions were not synchronized with the operations department’s capacity. This highlights the importance of coordination as the essence of management to ensure unity of action.'),
          React.createElement('li', null, React.createElement('b', null, "Management as a Group Activity:"), ' The failure shows that different departments working in isolation can lead to chaos. Management is needed to integrate the efforts of all groups.')
        ),
        React.createElement('p', { className: 'mt-4' }, "This case illustrates that simply setting goals (Planning) is not enough. Without proper Coordination between departments, even a well-intentioned plan can fail, harming the company's reputation.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 1 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Management = Process of achieving goals ", React.createElement('b', null, 'Effectively'), " (on time) & ", React.createElement('b', null, 'Efficiently'), " (low cost)."),
      React.createElement('li', null, "Characteristics (Mnemonic: My Cute Dog Is So Goofy & Playful)."),
      React.createElement('li', null, "Objectives: Organisational (Survival, Profit, Growth), Social, Personal."),
      React.createElement('li', null, "It's an Art, an inexact Science, and an emerging Profession."),
      React.createElement('li', null, "Levels: Top (Strategy), Middle (Link), Operational (Supervision)."),
      React.createElement('li', null, "Functions: Planning, Organising, Staffing, Directing, Controlling (POSDC)."),
      React.createElement('li', null, React.createElement('b', null, "Coordination"), " is the essence, not a separate function. It binds everything together.")
    )
  )
};
