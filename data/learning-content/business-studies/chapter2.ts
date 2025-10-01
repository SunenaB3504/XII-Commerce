import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "Principles of Management",
  overview: "This chapter dives into the fundamental guidelines that help managers make decisions and take actions. We'll explore the two major contributors: Henri Fayol, who gave general principles of administration, and F.W. Taylor, who focused on scientific principles for shop-floor management. These principles are not rigid rules but flexible guidelines that improve managerial efficiency.",
  keyConcepts: [
    {
      title: "Nature of Management Principles",
      content: React.createElement('p', null, "Management principles are universal, flexible, and are formed by practice and experimentation. They establish a cause-and-effect relationship and are contingent on the situation. Their main aim is to influence human behavior for the better."),
      example: "The principle of 'Division of Work' is universal, but the degree to which it is applied depends on the size and nature of the organization."
    },
    {
      title: "Significance of Management Principles",
      content: React.createElement('p', null, "These principles are crucial as they provide managers with useful insights into reality, help in optimum utilization of resources, facilitate scientific decision-making, and help in adapting to a changing environment."),
      examFocus: true,
    },
    {
      title: "Fayol's 14 Principles of Management",
      content: React.createElement('p', null, "Henri Fayol, known as the father of general management, provided 14 principles that serve as guidelines for all managerial functions."),
      examFocus: true,
      mnemonic: "Remember 'DAD U CSR, SO I SEE': Division of Work, Authority & Resp., Discipline, Unity of Command, Unity of Direction, Subordination of Ind. Interest, Remuneration, Centralisation, Scalar Chain, Order, Initiative, Stability of Personnel, Equity, Esprit de Corps."
    },
    {
      title: "Taylor's Scientific Management",
      content: React.createElement('p', null, "F.W. Taylor focused on improving efficiency at the shop-floor level. His approach was scientific, based on observation and measurement, rather than 'rule of thumb'.",
        React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, 'Principles:'), ' Science not Rule of Thumb; Harmony, Not Discord; Cooperation, Not Individualism; Development of Each Person to their Greatest Efficiency.'),
          React.createElement('li', null, React.createElement('b', null, 'Techniques:'), ' Functional Foremanship, Standardisation & Simplification, Method Study, Motion Study, Time Study, Fatigue Study, and Differential Piece Wage System.')
        )
      ),
      examFocus: true
    }
  ],
  keywords: [
    { term: "Principle of Management", definition: "A broad and general guideline for managerial decision-making and behavior." },
    { term: "Unity of Command", definition: "An employee should receive orders from only one superior." },
    { term: "Scalar Chain", definition: "The formal line of authority from the highest to the lowest ranks." },
    { term: "Gang Plank", definition: "A shortcut in the scalar chain for direct communication between employees at the same level in emergencies." },
    { term: "Mental Revolution", definition: "A complete change in the mindset of both management and workers, from competition to cooperation." },
    { term: "Functional Foremanship", definition: "A technique where a worker is supervised by eight specialist foremen to improve efficiency." }
  ],
  caseStudies: [
    {
      title: "The Assembly Line Problem",
      scenario: "A car factory was facing issues with low productivity. The new manager, an expert in scientific management, observed the workers on the assembly line. She noticed that workers were using different techniques to fit a particular part, and many were making unnecessary movements, which led to them getting tired quickly. She also noted that efficient workers were paid the same as inefficient ones.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Taylor's Techniques Applicable:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Method Study:"), " The manager should use this to find the 'one best way' of fitting the car part to standardize the process for all workers."),
          React.createElement('li', null, React.createElement('b', null, "Motion Study:"), ' By analyzing the workers\' movements, she can eliminate the wasteful ones, which will reduce the time taken and physical effort.'),
          React.createElement('li', null, React.createElement('b', null, "Fatigue Study:"), ' The observation that workers get tired quickly suggests a need for a fatigue study to determine the optimal frequency and duration of rest intervals.'),
          React.createElement('li', null, React.createElement('b', null, "Differential Piece Wage System:"), ' To address the pay issue, this system can be implemented to reward more efficient workers with a higher wage rate, motivating everyone to improve performance.')
        ),
        React.createElement('p', { className: 'mt-4' }, "By applying these scientific techniques, the manager can address the root causes of inefficiency and increase overall factory productivity.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 2 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Principles are flexible guidelines, not rigid rules."),
      React.createElement('li', null, React.createElement('b', null, "Fayol (General Administration):"), ' Gave 14 principles for top-level management. Remember ', React.createElement('i', null, 'DAD U CSR, SO I SEE'), '.'),
      React.createElement('li', null, React.createElement('b', null, "Taylor (Scientific Management):"), ' Focused on the shop floor. Gave 4 principles and 7 techniques (like Time, Motion, Fatigue studies).'),
      React.createElement('li', null, "Key concept: ", React.createElement('b', null, "Mental Revolution"), " - cooperation between management and workers."),
      React.createElement('li', null, "Distinction: Fayol's principles have broader applicability, while Taylor's are more specialized for production.")
    )
  )
};
