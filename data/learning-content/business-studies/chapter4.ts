import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter4Module: LearningModule = {
  chapter: "4",
  title: "Planning",
  overview: "Planning is the primary function of management. It's like creating a roadmap before starting a journey. It involves deciding in advance what to do, how to do it, when to do it, and who is to do it. Planning bridges the gap between where we are today and where we want to be in the future, providing a clear path to achieve our goals.",
  keyConcepts: [
    {
      title: "Meaning, Features & Importance",
      content: React.createElement('p', null, "Planning is a forward-looking process that sets the foundation for all other managerial functions. It is both a fundamental and critical activity."),
      examFocus: true,
      mnemonic: "Features Mnemonic: 'P Is For Continuous Decision Making & Focus' - Pervasive, Primary, Futuristic, Continuous, involves Decision Making, Mental Exercise, Focuses on objectives."
    },
    {
      title: "Limitations of Planning",
      content: React.createElement('p', null, "While crucial, planning has its limitations. It can lead to rigidity, may not work in a dynamic environment, reduces creativity, involves huge costs, is time-consuming, and does not guarantee success. Managers must be aware of these drawbacks."),
      examFocus: true,
    },
    {
      title: "The Planning Process",
      content: React.createElement('p', null, "Planning is a systematic process that involves a series of logical steps to formulate a plan."),
      examFocus: true,
      mnemonic: "Process Mnemonic: 'Some Dogs In England See Innocent Ferrets' - Setting objectives, Developing premises, Identifying alternatives, Evaluating alternatives, Selecting an alternative, Implementing the plan, Follow-up action.",
       example: React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-1' },
          React.createElement('li', null, React.createElement('b', null, 'Setting Objectives:'), ' Define the end goal (e.g., increase sales by 20%).'),
          React.createElement('li', null, React.createElement('b', null, 'Developing Premises:'), ' Make assumptions about the future (e.g., forecast economic conditions, competitor actions).'),
          React.createElement('li', null, React.createElement('b', null, 'Identifying Alternatives:'), ' List all possible ways to achieve the objective (e.g., offer discounts, increase advertising, launch a new product).'),
          React.createElement('li', null, React.createElement('b', null, 'Evaluating Alternatives:'), ' Analyse the pros and cons of each alternative.'),
          React.createElement('li', null, React.createElement('b', null, 'Selecting an Alternative:'), ' Choose the best and most feasible course of action.'),
          React.createElement('li', null, React.createElement('b', null, 'Implementing the Plan:'), ' Put the plan into action by allocating resources.'),
          React.createElement('li', null, React.createElement('b', null, 'Follow-up Action:'), ' Monitor progress and make adjustments as necessary to ensure goals are met.')
      )
    },
    {
      title: "Types of Plans",
      content: React.createElement('p', null, "Plans can be classified based on their use and frequency. The two main categories are Single-Use Plans (for one-time events like a specific project or budget) and Standing Plans (for activities that occur regularly, like policies or rules)."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Objective:'), ' The desired end result (e.g., becoming the market leader).'),
        React.createElement('li', null, React.createElement('b', null, 'Strategy:'), ' A comprehensive plan to achieve the objective, considering the business environment.'),
        React.createElement('li', null, React.createElement('b', null, 'Policy:'), " A general guideline for decision-making (e.g., 'We sell goods on a cash basis only')."),
        React.createElement('li', null, React.createElement('b', null, 'Procedure:'), ' A chronological sequence of steps to be followed (e.g., the admission procedure for a school).'),
        React.createElement('li', null, React.createElement('b', null, 'Method:'), ' The prescribed way a specific task within a procedure is performed (e.g., the method of training for a specific job).'),
        React.createElement('li', null, React.createElement('b', null, 'Rule:'), " A specific statement of what must or must not be done (e.g., 'No Smoking')."),
        React.createElement('li', null, React.createElement('b', null, 'Programme:'), ' A detailed plan for a specific project, combining objectives, policies, procedures, rules, tasks, resources and budget.'),
        React.createElement('li', null, React.createElement('b', null, 'Budget:'), ' A statement of expected results expressed in numerical terms (e.g., a sales budget or a cash budget).')
      )
    }
  ],
  keywords: [
    { term: "Planning", definition: "Deciding in advance what to do, how to do it, when to do it, and who is to do it. It bridges the gap from where we are to where we want to go." },
    { term: "Premises", definition: "Assumptions about the future conditions upon which plans are based." },
    { term: "Objective", definition: "The end result which an organization strives to achieve through its existence and operations." },
    { term: "Strategy", definition: "A comprehensive plan for accomplishing an organization's objectives, which takes into account environmental factors." },
    { term: "Policy", definition: "A general statement or guideline which directs managerial thinking and action." },
    { term: "Budget", definition: "A quantitative plan that states expected results in numerical terms for a specific period." }
  ],
  caseStudies: [
    {
      title: "The Cafe Expansion",
      scenario: "‘BeanBrew Cafe’, a popular coffee shop, wants to open a new branch. The owner's main objective is to make the new branch profitable within the first year. He forecasts that the local economy will remain stable and a new office complex will open nearby, increasing footfall (developing premises). He considers two options: a small kiosk in a mall or a full-sized cafe on a high street (identifying alternatives). After analyzing the costs and potential returns of both, he decides the high-street location is better despite higher rent (evaluating and selecting). He then hires staff, procures equipment, and launches the cafe (implementing the plan). Every month, he reviews the sales figures against his initial projections to see if the cafe is on track to meet its profitability goal (follow-up).",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Application of the Planning Process:"),
        React.createElement('p', null, "This case is a perfect real-world example of the entire planning process in action. The owner systematically follows each step:"),
        React.createElement('ul', { className: 'list-disc pl-5 mt-2' },
          React.createElement('li', null, "He starts with a clear goal (Setting Objective)."),
          React.createElement('li', null, "He makes educated guesses about the future (Developing Premises)."),
          React.createElement('li', null, "He doesn't just jump at the first idea; he explores different paths (Identifying & Evaluating Alternatives)."),
          React.createElement('li', null, "He makes a firm choice (Selecting an Alternative)."),
          React.createElement('li', null, "He translates the plan into action (Implementation)."),
          React.createElement('li', null, "Crucially, he monitors the results to stay on course (Follow-up)."),
        ),
        React.createElement('p', { className: 'mt-4' }, "This structured approach reduces the risk of failure and provides a clear framework for decision-making.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 4 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Planning is the ", React.createElement('b', null, 'primary'), " and ", React.createElement('b', null, 'futuristic'), " function of management."),
      React.createElement('li', null, "It establishes standards for ", React.createElement('b', null, 'Controlling'), "."),
      React.createElement('li', null, React.createElement('b', null, "The Planning Process is a 7-step sequence:"), " Setting Objectives -> Developing Premises -> Identifying -> Evaluating -> Selecting Alternatives -> Implementation -> Follow-up."),
      React.createElement('li', null, React.createElement('b', null, 'Single-Use Plans:'), " For one-time projects (Budgets, Programmes)."),
      React.createElement('li', null, React.createElement('b', null, 'Standing Plans:'), " For recurring activities (Policies, Procedures, Rules, Methods)."),
      React.createElement('li', null, "A ", React.createElement('b', null, 'Rule'), " is specific ('No Smoking'), while a ", React.createElement('b', null, 'Policy'), " is a general guideline ('Promotion will be based on seniority').")
    )
  )
};
