import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter5Module: LearningModule = {
  chapter: "5",
  title: "Organising",
  overview: "Organising is the function of management that follows planning. It's the process of defining and grouping activities, and establishing authority relationships among them. Think of it as creating the organizational skeleton that gives shape to the company's plans, ensuring all resources work together smoothly to achieve the objectives.",
  keyConcepts: [
    {
      title: "Organising Process",
      content: React.createElement('p', null, "Organising involves a series of logical steps to create a solid organisational structure."),
      examFocus: true,
      mnemonic: "Remember 'I Don't Assign Everything': Identification & Division of work, Departmentalisation, Assignment of duties, Establishing reporting relationships.",
      example: React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-1' },
          React.createElement('li', null, React.createElement('b', null, 'Identification & Division of Work:'), ' Breaking down the total work into specific jobs.'),
          React.createElement('li', null, React.createElement('b', null, 'Departmentalisation:'), ' Grouping similar jobs into larger units called departments (e.g., Marketing, Finance).'),
          React.createElement('li', null, React.createElement('b', null, 'Assignment of Duties:'), ' Allocating the work to individuals based on their skills and competencies.'),
          React.createElement('li', null, React.createElement('b', null, 'Establishing Reporting Relationships:'), ' Specifying who reports to whom, creating a clear chain of command.')
      )
    },
    {
      title: "Importance of Organising",
      content: React.createElement('p', null, "A good organisational structure is essential for business success. It leads to benefits of specialisation, clarity in working relationships, optimum utilisation of resources, adaptation to change, and facilitates effective administration and growth."),
      examFocus: true,
    },
    {
      title: "Organisational Structure: Functional vs. Divisional",
      content: React.createElement('p', null, "This is a key concept. The structure defines the framework of relationships among various positions."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Functional Structure:'), " Grouping of jobs of similar nature under major functions (e.g., all marketing jobs under a Marketing Department). Suitable for single-product companies."),
        React.createElement('li', null, React.createElement('b', null, 'Divisional Structure:'), " Grouping activities on the basis of different products manufactured (e.g., a Cosmetics division, a Garments division). Each division has functional departments within it. Suitable for multi-product companies.")
      )
    },
    {
      title: "Delegation and Decentralisation",
      content: React.createElement('p', null, "These two concepts relate to the downward transfer of authority."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Delegation:'), " The entrustment of responsibility and authority to another, and the creation of accountability for performance. It is a necessary act for any manager. Its elements are Authority, Responsibility, and Accountability."),
        React.createElement('li', null, React.createElement('b', null, 'Decentralisation:'), " Refers to the systematic delegation of authority at all levels of management. It is an optional policy decision that expands on delegation. A high degree of decentralisation empowers lower levels of management.")
      )
    },
     {
      title: "Formal vs. Informal Organisation",
      content: React.createElement('p', null, "Within the official structure, a social structure also emerges."),
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Formal Organisation:'), " The structure of authority relationships created by the management. It is deliberately designed to achieve organizational objectives."),
        React.createElement('li', null, React.createElement('b', null, 'Informal Organisation:'), " The network of social relationships among employees that emerges spontaneously due to interaction at work. It is not deliberately created by management.")
      )
    }
  ],
  keywords: [
    { term: "Organising", definition: "The process of identifying and grouping work, defining authority and responsibility, and establishing relationships to achieve objectives." },
    { term: "Organisational Structure", definition: "The framework within which managerial and operating tasks are performed." },
    { term: "Functional Structure", definition: "An organisational structure formed by grouping jobs of a similar nature." },
    { term: "Divisional Structure", definition: "An organisational structure which comprises separate business units or divisions, based on products or territories." },
    { term: "Delegation", definition: "The downward transfer of authority from a superior to a subordinate." },
    { term: "Accountability", definition: "Being answerable for the final outcome of the assigned task. It cannot be delegated." },
    { term: "Decentralisation", definition: "The systematic dispersal of authority to the lower levels of an organisation." }
  ],
  caseStudies: [
    {
      title: "The Multi-Product Giant",
      scenario: "‘Global Tech Inc.’ manufactures a wide range of products, including laptops, smartphones, and home appliances. Each of these product lines operates as a separate unit, headed by a manager who has full responsibility for the unit's profits and losses. Within the smartphone unit, there are separate departments for production, marketing, and finance.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "Divisional Structure:"), " The primary structure of 'Global Tech Inc.' is divisional, as the company is organised around its different product lines (laptops, smartphones, etc.)."),
          React.createElement('li', null, React.createElement('b', null, "Functional Structure within Divisions:"), " Within each division (like the smartphone unit), a functional structure is used, with departments for production, marketing, etc. This is a common practice in large, diversified companies."),
          React.createElement('li', null, React.createElement('b', null, "Accountability:"), " The divisional manager being responsible for profits and losses demonstrates a high degree of accountability, which is a key feature of the divisional structure.")
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 5 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Organising process: Identify & Divide -> Departmentalise -> Assign -> Establish Reporting."),
      React.createElement('li', null, React.createElement('b', null, "Functional Structure:"), " Based on functions (Marketing, HR). Good for single-product firms."),
      React.createElement('li', null, React.createElement('b', null, "Divisional Structure:"), " Based on products (Cosmetics, Garments). Good for multi-product firms."),
      React.createElement('li', null, React.createElement('b', null, "Delegation:"), " Downward transfer of Authority from superior to ONE subordinate. It is compulsory."),
      React.createElement('li', null, React.createElement('b', null, "Decentralisation:"), " Systematic delegation to all levels. It is optional."),
      React.createElement('li', null, "Elements of Delegation: ", React.createElement('b', null, "Authority"), " (downward), ", React.createElement('b', null, "Responsibility"), " (upward), ", React.createElement('b', null, "Accountability"), " (upward, cannot be delegated).")
    )
  )
};
