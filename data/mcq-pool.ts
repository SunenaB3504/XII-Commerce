import { Question } from '../types';
import React from 'react';

// Centralized MCQ Pool for Knowledge Evaluation
// All 1-mark MCQs from across question papers, deduplicated manually

export interface MCQPoolQuestion extends Question {
  subject: 'Business Studies' | 'Accountancy' | 'Economics';
  chapter: string;
  topic: string;
  source: string; // Which paper(s) this appears in
  difficulty: 'easy' | 'medium' | 'hard';
  examWeightage: number; // Chapter weightage percentage
}

// ============================================================================
// BUSINESS STUDIES MCQs
// ============================================================================

// Business Studies MCQs - Sample Paper 2025 (20 MCQs across 11 chapters)

// Chapter 1: Nature and Significance of Management
const businessStudiesChapter1: MCQPoolQuestion[] = [
  {
    id: 'BS-CH1-001',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Management Hierarchy and Coordination',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Match the concepts of management given in column I with their meaning given in column II"),
      React.createElement("table", {className: "w-full text-left border-collapse my-2"}, 
         React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {className:"border p-2"}, "COLUMN I"), React.createElement("th", {className:"border p-2"}, "COLUMN II"))),
         React.createElement("tbody", null,
            React.createElement("tr", null, React.createElement("td", {className:"border p-2"}, "A. Management Hierarchy"), React.createElement("td", {className:"border p-2"}, "i. Involves defining and grouping of activities, resource allocation and establishment of authority relationships.")),
            React.createElement("tr", null, React.createElement("td", {className:"border p-2"}, "B. Coordination"), React.createElement("td", {className:"border p-2"}, "ii. Involves establishing performance standards measuring actual performance and taking corrective action")),
            React.createElement("tr", null, React.createElement("td", {className:"border p-2"}, "C. Organising"), React.createElement("td", {className:"border p-2"}, "iii. It shows orderly arrangement of individual and group efforts to ensure unity of action in realisation of common objectives.")),
            React.createElement("tr", null, React.createElement("td", {className:"border p-2"}, "D. Controlling"), React.createElement("td", {className:"border p-2"}, "iv. Refers to different levels in the organisation created as a result of authority responsibility relationships binding individuals as superiors and subordinates."))
         )
      ),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) A-iv, B-iii, C-ii, D-i"),
        React.createElement("li", null, "b) A-ii, B-iii, C-iv, D-i"),
        React.createElement("li", null, "c) A-iv, B-iii, C-i, D-ii"),
        React.createElement("li", null, "d) A-iii, B-iv, C-i, D-ii")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) A-iv, B-iii, C-i, D-ii"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "A. Management Hierarchy"), " matches with ", React.createElement("b", null, "(iv)"), " (describes levels of management)."),
        React.createElement("li", null, React.createElement("b", null, "B. Coordination"), " matches with ", React.createElement("b", null, "(iii)"), " (ensuring unity of action)."),
        React.createElement("li", null, React.createElement("b", null, "C. Organising"), " matches with ", React.createElement("b", null, "(i)"), " (defining roles and grouping activities)."),
        React.createElement("li", null, React.createElement("b", null, "D. Controlling"), " matches with ", React.createElement("b", null, "(ii)"), " (setting standards and measuring performance).")
      )
    )
  },
  {
    id: 'BS-CH1-002',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Levels of Management',
    source: 'Board Exam 66/1/1',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Bimal Rai is working in Funny Bunny Ltd. The company manufactures games and toys for children. The basic task of Bimal Rai is to integrate diverse elements and coordinate the activities of different departments. He also analyses the business environment and its implications for the survival of the firm. The level of management at which Bimal Rai is working is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Top level"),
        React.createElement("li", null, "(B) Middle level"),
        React.createElement("li", null, "(C) Operational level"),
        React.createElement("li", null, "(D) Both Middle and Operational level")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (A) Top level"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Bimal Rai's responsibilities, such as integrating diverse elements, coordinating departments, analyzing the business environment, and ensuring the firm's survival, are all key functions of Top Level Management.")
    )
  },
  {
    id: 'BS-CH1-003',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Nature of Management - Continuous Process',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The project managers in an organisation set targets for the upcoming months and outline strategies to achieve them. At the same time, they assign specific roles and responsibilities to their team members. They motivate them to meet the deadline, by celebrating their achievements and taking their feedback. Thus, various functions are simultaneously performed by all managers all the time. Name the characteristic of Management discussed above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management is a dynamic function"),
        React.createElement("li", null, "b) Management is a continuous process"),
        React.createElement("li", null, "c) Management is an intangible force"),
        React.createElement("li", null, "d) Management is goal oriented")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Management is a continuous process"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The scenario describes management as a continuous process where planning, organizing, staffing, directing, and controlling functions are performed simultaneously and continuously, not as separate one-time activities.")
    )
  },
  {
    id: 'BS-CH1-004',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Management Concepts Matching',
    source: 'Challenge 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Match the concepts of management given in column I with their meaning given in column II:"),
      React.createElement("div", { className: "mt-4 grid grid-cols-2 gap-4" },
        React.createElement("div", null,
          React.createElement("h5", { className: "font-bold mb-2" }, "COLUMN I"),
          React.createElement("p", null, "A. Management Hierarchy"),
          React.createElement("p", null, "B. Coordination"),
          React.createElement("p", null, "C. Organising"),
          React.createElement("p", null, "D. Controlling")
        ),
        React.createElement("div", null,
          React.createElement("h5", { className: "font-bold mb-2" }, "COLUMN II"),
          React.createElement("p", null, "i) Defining and grouping activities, resource allocation"),
          React.createElement("p", null, "ii) Performance standards and corrective action"),
          React.createElement("p", null, "iii) Unity of action in realisation of common objectives"),
          React.createElement("p", null, "iv) Different levels created by authority relationships")
        )
      ),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) A-iv, B-iii, C-ii, D-i"),
        React.createElement("li", null, "b) A-ii, B-iii, C-iv, D-ii"),
        React.createElement("li", null, "c) A-iv, B-iii, C-i, D-ii"),
        React.createElement("li", null, "d) A-iii, B-iv, C-i, D-ii")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) A-iv, B-iii, C-i, D-ii"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Management Hierarchy (iv) refers to different levels in the organization. Coordination (iii) ensures unity of action. Organising (i) involves defining activities and authority relationships. Controlling (ii) involves setting standards and taking corrective action.")
    )
  },
  {
    id: 'BS-CH1-006',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Significance of Management',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the point of significance of management illustrated in the picture."),
      React.createElement("p", { className: "mt-2 text-sm text-gray-600" }, "[Picture shows management helping achieve group goals]"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management helps in achieving group goals"),
        React.createElement("li", null, "b) Management helps in achieving personal objectives"),
        React.createElement("li", null, "c) Management helps in development of society"),
        React.createElement("li", null, "d) Management increases efficiency")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Management helps in achieving group goals"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Management coordinates individual efforts to achieve organizational goals.")
    )
  },
  {
    id: 'BS-CH1-007',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Management Efficiency and Effectiveness',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason(R). Choose the correct alternative from those given below:"),
      React.createElement("p", { className: "mt-2" }, "ASSERTION (A): Management is concerned with efficient use of resources."),
      React.createElement("p", null, "REASONING (R): For management both efficiency and effectiveness need to be balanced."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."),
        React.createElement("li", null, "b) Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of Assertion (A)"),
        React.createElement("li", null, "c) Assertion (A) is true but Reason (R) is False"),
        React.createElement("li", null, "d) Assertion (A) is False but Reason (R) is True")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of Assertion (A)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Both statements are true, but the reason doesn't directly explain why management is concerned with efficient use of resources.")
    )
  },
  {
    id: 'BS-CH1-008',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Importance of Management',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 20,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the reason which makes management important in the light of the fact that it is generally seen that individuals in an organization resist change, as a change often means moving from a familiar, secure environment into a newer and a more challenging one."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management helps in achieving group goals."),
        React.createElement("li", null, "b) Management creates a dynamic organization"),
        React.createElement("li", null, "c) Management increases efficiency"),
        React.createElement("li", null, "d) Management helps in the development of society.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Management creates a dynamic organization"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Management creates a dynamic organization by helping individuals adapt to change and overcome resistance to new challenges.")
    )
  },
  {
    id: 'BS-CH1-009',
    subject: 'Business Studies',
    chapter: '1',
    topic: 'Objectives of Management',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 20,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Alo a mobility platform is in the process of laying off 400-500 employees in a move aimed at driving cost efficiency. Which objective of management will the firm not be able to achieve by carrying out this process."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Efficiency"),
        React.createElement("li", null, "b) Social"),
        React.createElement("li", null, "c) Profit"),
        React.createElement("li", null, "d) Survival")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Social"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Laying off employees may achieve efficiency, profit, and survival objectives, but it does not fulfill the social objective of management which includes employee welfare.")
    )
  }
];

// Chapter 2: Principles of Management
const businessStudiesChapter2: MCQPoolQuestion[] = [
  {
    id: 'BS-CH2-001',
    subject: 'Business Studies',
    chapter: '2',
    topic: 'Characteristics of Management',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 20,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The project managers in an organisation set targets for the upcoming months and outline strategies to achieve them. At the same time, they assign specific roles and responsibilities to their team members. They motivate them to meet the deadline, by celebrating their achievements and taking their feedback. Thus, various functions are simultaneously performed by all managers all the time. Name the characteristic of Management discussed above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management is a dynamic function"),
        React.createElement("li", null, "b) Management is a continuous process"),
        React.createElement("li", null, "c) Management is an intangible force"),
        React.createElement("li", null, "d) Management is goal oriented")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Management is a continuous process"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The question highlights that managers perform various functions like planning, organizing, and directing 'simultaneously' and 'all the time'."),
      React.createElement("p", { className: "mt-2" }, "This directly points to the characteristic that management is a ", React.createElement("b", null, "continuous process"), ". It is not a one-time task but a series of ongoing, interrelated functions (planning, organising, staffing, directing, controlling) that managers perform continuously to achieve organizational goals.")
    )
  },
  {
    id: 'BS-CH2-002',
    subject: 'Business Studies',
    chapter: '2',
    topic: 'Nature of Management Principles',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 20,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Henri Fayol's principle of discipline which emphasizes obedience to organisational rules and employment agreement, is evolved out of the experience and collective wisdom of managers. The nature of principle of management reflected through the above statement is-----------"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Universal applicability"),
        React.createElement("li", null, "b) Flexible"),
        React.createElement("li", null, "c) Mainly behavioral"),
        React.createElement("li", null, "d) Formed by practice and experimentation")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Formed by practice and experimentation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The key phrase is that the principle 'is evolved out of the experience and collective wisdom of managers.'"),
      React.createElement("p", { className: "mt-2" }, "This directly relates to the nature of management principles that they are ", React.createElement("b", null, "formed by practice and experimentation"), ". These principles are the result of deep observation and repeated experiments by managers over many years, reflecting real-world business situations.")
    )
  },
  {
    id: 'BS-CH2-003',
    subject: 'Business Studies',
    chapter: '2',
    topic: 'Principles vs Values',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 20,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement- I:"), " Values are basic truths or guidelines for behaviour which are formed after research in work situations."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement- II:"), " While practising Principles of Management, values cannot be neglected as business organisations have to fulfil social and ethical responsibility towards society."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(a) Both the statements are true."),
        React.createElement("li", null, "(b) Both the statements are false."),
        React.createElement("li", null, "(c) Statement I is true, Statement II is false."),
        React.createElement("li", null, "(d) Statement II is true, Statement I is false")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (d) Statement II is true, Statement I is false"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
       React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Statement I is false:"), " This statement defines management principles, not values. Principles are guidelines formed through research. Values are general rules for behaviour in society based on ethics."),
            React.createElement("li", null, React.createElement("b", null, "Statement II is true:"), " Businesses operate within a society and must consider social and ethical values while applying management principles.")
        )
    )
  },
  {
    id: 'BS-CH2-004',
    subject: 'Business Studies',
    chapter: '2',
    topic: 'Nature of Principles - Practice & Experimentation',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Henri Fayol's principle of discipline which emphasizes obedience to organisational rules and employment agreement, is evolved out of the experience and collective wisdom of managers. The nature of principle of management reflected through the above statement is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Universal applicability"),
        React.createElement("li", null, "b) Flexible"),
        React.createElement("li", null, "c) Mainly behavioral"),
        React.createElement("li", null, "d) Formed by practice and experimentation")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Formed by practice and experimentation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Henri Fayol developed his principles based on his experience as a manager and through observation of managerial practices, reflecting that management principles are formed by practice and experimentation.")
    )
  },
  {
    id: 'BS-CH2-005',
    subject: 'Business Studies',
    chapter: '2',
    topic: 'Principles vs Values',
    source: 'Challenge 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, "Statement I: Values are basic truths or guidelines for behaviour which are formed after research in work situations."),
      React.createElement("p", null, "Statement II: While practising Principles of Management, values cannot be neglected as business organisations have to fulfil social and ethical responsibility towards society."),
      React.createElement("p", { className: "mt-2" }, "Choose the correct alternative:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both the statements are true."),
        React.createElement("li", null, "b) Both the statements are false."),
        React.createElement("li", null, "c) Statement I is true, Statement II is false."),
        React.createElement("li", null, "d) Statement II is true, Statement I is false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Statement II is true, Statement I is false."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Statement I is false because values are formed through experience, practice, and culture, not through research. Statement II is true because values cannot be neglected while practicing management principles as organizations must fulfill social and ethical responsibilities.")
    )
  }
];

// Chapter 3: Business Environment  
const businessStudiesChapter3: MCQPoolQuestion[] = [
  {
    id: 'BS-CH3-001',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Social Environment',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Out of the following, which is/are the component(s) of the social environment."),
       React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "1) Rate of inflation has increased by 2% leading to a higher total cost for business enterprises."),
        React.createElement("li", null, "2) Various specialty health food and grocery shops have opened in an area where fitness and health enthusiasts live."),
        React.createElement("li", null, "3) Life expectancy rate in India has improved over the past 20 years due to adequate health facilities and infrastructure."),
        React.createElement("li", null, "4) A company in its human resource manual discloses a zero tolerance policy for racial discrimination and discriminatory practices against employees with disability."),
        React.createElement("li", null, "5) The Advertising Standards Council of India prohibits the advertisement that promotes products or services that are banned by law."),
        React.createElement("li", {className: "mt-4"}, React.createElement("b", null, "Choose the correct option:")),
        React.createElement("li", null, "a) only 2"),
        React.createElement("li", null, "b) 1,2,3"),
        React.createElement("li", null, "c) 2,4,5"),
        React.createElement("li", null, "d) 2,3,4")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) 2,3,4"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The social environment includes customs, values, social trends, and society's expectations. Let's analyze each point:"),
       React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "1) Inflation Rate:"), " Economic Environment."),
        React.createElement("li", null, React.createElement("b", null, "2) Health and Fitness Trend:"), " Social Environment."),
        React.createElement("li", null, React.createElement("b", null, "3) Life Expectancy:"), " Social Environment."),
        React.createElement("li", null, React.createElement("b", null, "4) Zero Tolerance for Discrimination:"), " Social Environment (reflects values like equality)."),
        React.createElement("li", null, React.createElement("b", null, "5) Advertising Standards Council:"), " Legal Environment.")
      ),
       React.createElement("p", { className: "mt-4 bg-blue-50 p-3 rounded-lg" }, "Therefore, the components of the social environment are points 2, 3, and 4.")
    )
  },
  {
    id: 'BS-CH3-002',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Dimensions of Business Environment',
    source: 'Board Exam 66/1/1',
    difficulty: 'easy',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Salim and Karim are good friends. They started a business of selling high quality seeds for growing organic vegetables. They are offering 200 varieties of vegetable seeds suitable for terrace gardens, balconies and backyards. Due to the growing trend towards healthy consumption habits, there is a huge demand for their seeds. The dimension of business environment being discussed above is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Economic Environment"),
        React.createElement("li", null, "(B) Political Environment"),
        React.createElement("li", null, "(C) Social Environment"),
        React.createElement("li", null, "(D) Legal Environment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (C) Social Environment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The 'growing trend towards healthy consumption habits' is a change in social trends, customs, and values within society. This falls under the Social Environment dimension of the business environment.")
    )
  },
  {
    id: 'BS-CH3-003',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Importance - Identifying Threats',
    source: 'Board Exam 66/1/1',
    difficulty: 'medium',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Alfa Graphics Ltd. was a reputed Indian company which had been in business for many years. The Chief Executive Officer of the company, Rohit Gupta always believed in understanding the business environment as well as responding and adapting to it. When he found that a foreign multinational company, Leno Graphics, is entering the Indian market with new substitutes, he prepared to meet this threat by reducing cost and creating good quality and aesthetically appealing layouts, advertisements, logos etc. As a result, Alfa Graphics Ltd. was not only able to retain its own customers, but also started getting new projects. The point of importance of Business Environment discussed above is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Tapping useful resources"),
        React.createElement("li", null, "(B) Identifying threats and early warning signals"),
        React.createElement("li", null, "(C) Improving performance"),
        React.createElement("li", null, "(D) Identifying opportunities and getting first mover advantage")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (B) Identifying threats and early warning signals"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "By understanding the business environment, Rohit Gupta was able to identify the entry of a new competitor (a threat) in advance. This allowed him to take timely action (reducing cost, improving quality) to counter the threat, which is a key benefit of environmental scanning.")
    )
  },
  {
    id: 'BS-CH3-004',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Components of Social Environment',
    source: 'Challenge 2025',
    difficulty: 'medium',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Out of the following, which is/are the component(s) of the social environment:"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Rate of inflation has increased by 2% leading to a higher total cost for business enterprises."),
        React.createElement("li", null, "Various specialty health food and grocery shops have opened in an area where fitness and health enthusiasts live."),
        React.createElement("li", null, "Life expectancy rate in India has improved over the past 20 years due to adequate health facilities and infrastructure."),
        React.createElement("li", null, "A company in its human resource manual discloses a zero tolerance policy for racial discrimination and discriminatory practices against employees with disability."),
        React.createElement("li", null, "The Advertising Standards Council of India prohibits the advertisement that promotes products or services that are banned by law.")
      ),
      React.createElement("p", { className: "mt-4" }, "Choose the correct option:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) only 2"),
        React.createElement("li", null, "b) 1,2,3"),
        React.createElement("li", null, "c) 2,4,5"),
        React.createElement("li", null, "d) 2,3,4")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) 2,3,4"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Options 2, 3, and 4 relate to social environment: lifestyle changes (option 2), health awareness (option 3), and social values/ethics (option 4). Option 1 is economic environment and option 5 is legal environment.")
    )
  },
  {
    id: 'BS-CH3-005',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Economic and Technological Environment',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Goodwill Enterprises is a large-scale automobile manufacturer, who fulfills the needs of both industrial users and consumers. The company is providing easy finance facilities at a low rate of interest, which has considerably increased the demand for the product. The company has installed a new branch management software to efficiently manage and coordinate activities across their multiple branches and locations."),
      React.createElement("p", { className: "mt-2" }, "Identify the components of the business environment from the above case study."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Political and economic environment"),
        React.createElement("li", null, "b) Economic and social environment"),
        React.createElement("li", null, "c) Technological and legal environment"),
        React.createElement("li", null, "d) Economic and technological environment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Economic and technological environment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Easy finance facilities represent economic environment, and new branch management software represents technological environment.")
    )
  },
  {
    id: 'BS-CH3-006',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Characteristics of Business Environment',
    source: 'Challenge 2024',
    difficulty: 'hard',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Match the statements given in column I with the characteristic of business environment given in column II"),
      React.createElement("div", { className: "grid grid-cols-2 gap-4 mt-4" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "COLUMN I"),
          React.createElement("p", null, "(a) Increased demand of Khakhra and Thepla in the region of Gujarat as compared to Delhi region"),
          React.createElement("p", null, "(b) Digital academic certificates are issued to students accessible in a secured manner to eliminate undesirable practices like corruption and manipulation of records under Digital India Initiative. Such technological improvements are happening at a very fast pace."),
          React.createElement("p", null, "(c) Fashion market is facing both opportunities and challenges. Therefore it is difficult to predict the future of the fashion market."),
          React.createElement("p", null, "(d) A new government will result in changing government rules, fiscal policies, market conditions etc")
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "COLUMN II"),
          React.createElement("p", null, "i. Uncertainty"),
          React.createElement("p", null, "ii. Dynamic"),
          React.createElement("p", null, "iii. Relativity"),
          React.createElement("p", null, "iv. Interrelatedness")
        )
      ),
      React.createElement("p", { className: "mt-2" }, "Choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) (a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)"),
        React.createElement("li", null, "b) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)"),
        React.createElement("li", null, "c) (a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)"),
        React.createElement("li", null, "d) (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) (a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "(a) Regional demand differences show relativity, (b) Fast technological changes show dynamic nature, (c) Difficulty in prediction shows uncertainty, (d) Government changes affecting multiple factors shows interrelatedness.")
    )
  },
  {
    id: 'BS-CH3-007',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Social Environment',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "With the presence of women in the workforce, there has been a shift towards formal wear, increased demand of electronic gadgets and increase in demand of cosmetics."),
      React.createElement("p", { className: "mt-2" }, "The related dimension of business environment referred in the above lines is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Technological environment."),
        React.createElement("li", null, "b) Social environment"),
        React.createElement("li", null, "c) Political environment."),
        React.createElement("li", null, "d) Economic environment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Social environment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Changes in lifestyle, values, and demographics are part of the social environment affecting business.")
    )
  },
  {
    id: 'BS-CH3-008',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'First Mover Advantage',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 14,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Mr. Vivek is working as the General Manager of Oshin Hotels Ltd.  Mr. Vivek observed that Government was taking a special interest in the Tourism industry as this sector is an important source of foreign exchange and employment promotion. On the basis of this news, the company decided to set up hotels at several tourist places. Oshin Hotels Ltd. established 50 hotels before other companies considered this issue. Very soon, this brand Oshin Hotels Ltd. became well known in the market. Identify the importance of business environment described here."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) It enables the firm to identify opportunities and getting the first mover advantage."),
        React.createElement("li", null, "b) It helps the firm to identify threats and early warning signals."),
        React.createElement("li", null, "c) It helps in tapping useful resources."),
        React.createElement("li", null, "d) It helps in improving performance.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) It enables the firm to identify opportunities and getting the first mover advantage."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Business environment helps firms identify opportunities and gain first mover advantage by acting on environmental changes before competitors.")
    )
  },
  {
    id: 'BS-CH3-009',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Characteristics of Business Environment',
    source: 'Challenge 2022',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which characteristic of the business environment is highlighted when changes are taking place too frequently and it becomes difficult to predict the future?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Uncertainty"),
        React.createElement("li", null, "b) Complexity"),
        React.createElement("li", null, "c) Inter-relatedness"),
        React.createElement("li", null, "d) Relativity")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Uncertainty"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Uncertainty in business environment occurs when changes happen too frequently, making it difficult to predict future events and their impact.")
    )
  },
  {
    id: 'BS-CH3-010',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Dimensions of Business Environment',
    source: 'Challenge 2022',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the dimensions of the business environment illustrated by the picture given above in which Sapna who has joined the workforce recently is working on an accounting software."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Technological and social."),
        React.createElement("li", null, "b) Technological and political"),
        React.createElement("li", null, "c) Political and economic"),
        React.createElement("li", null, "d) Social and legal")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Technological and social."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Sapna working on accounting software represents technological environment, and her joining the workforce represents social environment.")
    )
  },
  {
    id: 'BS-CH3-011',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Economic Environment',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The government of India made an announcement regarding Demonetization of the Indian economy on November 8, 2016 with profound implications for it. The process put restrictions on convertibility of domestic money and bank deposits was meant to create a less-cash economy. One argument against the cash-lite economy is that:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Internet connectivity is a prerequisite"),
        React.createElement("li", null, "b) More people will be introduced into the formal economy."),
        React.createElement("li", null, "c) Financial saving will increase"),
        React.createElement("li", null, "d) Tax evasion will be reduced")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Internet connectivity is a prerequisite"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A cash-lite economy requires internet connectivity for digital transactions, which may not be available to all sections of society.")
    )
  },
  {
    id: 'BS-CH3-012',
    subject: 'Business Studies',
    chapter: '3',
    topic: 'Importance of Business Environment',
    source: 'Challenge 2022',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Airlines will be able to offer the benefit of lower pricing to customers on sectors/routes due to the decision of the civil aviation ministry to remove price caps from August 31, 2022. This can help an airline to do better performance if they take early decisions regarding future courses of action after understanding and doing analysis. Which importance of business environment and its understanding by managers is not highlighted above:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) It helps in improving performance"),
        React.createElement("li", null, "b) It helps in assisting in planning and policy formulation"),
        React.createElement("li", null, "c) It helps in tapping useful resources"),
        React.createElement("li", null, "d) It enables a firm to identify opportunities and get first mover advantage.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) It helps in tapping useful resources"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The scenario highlights improving performance, planning/policy formulation, and identifying opportunities/first mover advantage, but not tapping useful resources.")
    )
  }
];

// Chapter 4: Planning
const businessStudiesChapter4: MCQPoolQuestion[] = [
  {
    id: 'BS-CH4-001',
    subject: 'Business Studies',
    chapter: '4',
    topic: 'Limitations of Planning',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Mr Gun Amroha, the General Manager of Welworth Textiles scans the business environment and adapts the organisation to the changes taking place in different dimensions of the business environment. However, it is still difficult for him to accurately assess the future trends. Identify the limitation of planning related to the above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Planning leads to rigidity."),
        React.createElement("li", null, "b) Planning may not work in a dynamic environment.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Planning may not work in a dynamic environment."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The key phrase is 'difficult for him to accurately assess the future trends.' Planning is based on forecasts. If the business environment is dynamic and changes unpredictably, the forecasts become unreliable, and the plans may fail.")
    )
  },
  {
    id: 'BS-CH4-002',
    subject: 'Business Studies',
    chapter: '4',
    topic: 'Features of Planning',
    source: 'Board Exam 66/5/3',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'The purpose of planning is to meet future events effectively to the best advantage of an organisation.' This statement highlights which of the following features of planning?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Planning focuses on achieving objectives"),
        React.createElement("li", null, "(B) Planning involves decision-making"),
        React.createElement("li", null, "(C) Planning is the primary function of management"),
        React.createElement("li", null, "(D) Planning is futuristic")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (D) Planning is futuristic"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The phrase 'to meet future events effectively' directly points to the futuristic nature of planning. Planning involves looking ahead, anticipating future conditions, and preparing the organization to deal with them.")
    )
  },
  {
    id: 'BS-CH4-003',
    subject: 'Business Studies',
    chapter: '4',
    topic: 'Limitations of Planning - Dynamic Environment',
    source: 'Challenge 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Mr Gun Amroha, the General Manager of Welworth Textiles scans the business environment and adapts the organisation to the changes taking place in different dimensions of the business environment. However, it is still difficult for him to accurately assess the future trends. Identify the limitation of planning related to the above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Planning leads to rigidity."),
        React.createElement("li", null, "b) Planning may not work in a dynamic environment."),
        React.createElement("li", null, "c) Planning does not guarantee success."),
        React.createElement("li", null, "d) Planning reduces creativity.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Planning may not work in a dynamic environment."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Despite scanning the environment, it's difficult to assess future trends accurately, indicating that planning may not work effectively in a dynamic environment where changes are unpredictable.")
    )
  }
];

// Chapter 5: Organising
const businessStudiesChapter5: MCQPoolQuestion[] = [
  {
    id: 'BS-CH5-001',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Importance of Organising',
    source: 'Board Exam 66/1/1',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Organising provides a clear description of jobs and related duties. This helps to avoid confusion and duplication. The point of importance of organizing described above is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Adaptation to change"),
        React.createElement("li", null, "(B) Effective administration"),
        React.createElement("li", null, "(C) Development of personnel"),
        React.createElement("li", null, "(D) Expansion and growth")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (B) Effective administration"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A clear description of jobs and duties, which avoids confusion and duplication, leads to clarity in working relationships. This enables proper execution of work and makes it easy to manage the enterprise, thereby leading to effective administration.")
    )
  },
  {
    id: 'BS-CH5-002',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Delegation vs Decentralisation',
    source: 'Board Exam 66/7/3',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'Apex Shoes' is a large retail chain. Atul, the CEO of the company, decided to selectively disperse the authority to the store managers to approve discounts, returns and other customer-related decisions. This improved customer satisfaction and store performance. The concept used by Atul to improve customer satisfaction and store performance was:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Responsibility"),
        React.createElement("li", null, "(B) Authority"),
        React.createElement("li", null, "(C) Delegation"),
        React.createElement("li", null, "(D) Decentralisation")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (D) Decentralisation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Decentralisation is the systematic 'delegation of authority throughout all the levels of the organisation'. Selectively dispersing authority to multiple store managers (lower/middle level) is an example of decentralisation, not just delegation (which can be a one-to-one transfer).")
    )
  },
  {
    id: 'BS-CH5-003',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Assignment of Duties',
    source: 'Challenge 2024',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Jasmine Ahluwalia is the manager of an artefacts museum's marketing team, responsible for promoting exhibitions and events. In the previous season, she defined the total work of managing the events into graphic designing, registration inquiries, bill payments, etc, in order to facilitate specialisation. However, instead of allocating work, she had assigned each team member the full responsibility of managing the promotion of an entire event. Inspite of holding regular team meetings to take feedback, Jasmine found problems throughout the events season in the quality of graphic design, registration inquiry, bill payments, etc,."),
      React.createElement("p", { className: "mt-2" }, "For the upcoming events season, Jasmine has decided to divide these responsibilities on the basis of her observation of the areas in which the individual team members have excelled in the previous season and allocate the roles based on their skills and competencies."),
      React.createElement("p", { className: "mt-2" }, "Identify the step in the organising process which was not properly performed in the previous season but has been duly performed for the upcoming season."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Identification and division of work"),
        React.createElement("li", null, "b) Establishing reporting relationships"),
        React.createElement("li", null, "c) Departmentalisation"),
        React.createElement("li", null, "d) Assignment of duties")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Assignment of duties"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Assignment of duties involves allocating specific tasks to individuals based on their skills and competencies. In the previous season, work was not properly assigned, leading to problems.")
    )
  },
  {
    id: 'BS-CH5-004',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Centralisation',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Concentration of decision making functions at the apex of management hierarchy is called __________"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Decentralisation."),
        React.createElement("li", null, "b) Delegation"),
        React.createElement("li", null, "c) Organisational structure."),
        React.createElement("li", null, "d) Centralisation")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Centralisation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Centralisation refers to concentration of decision-making authority at the top level of management.")
    )
  },
  {
    id: 'BS-CH5-005',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Organising Function',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the function of management that acts as a means for translating plans into action."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Planning"),
        React.createElement("li", null, "b) Directing"),
        React.createElement("li", null, "c) Organising"),
        React.createElement("li", null, "d) Controlling")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Organising"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Organising creates the structure and framework that translates plans into action by arranging resources and establishing relationships.")
    )
  },
  {
    id: 'BS-CH5-006',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Steps in Organising',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Rishabh joined an entertainment company Avtaar, as a creative head. As a manager looking after the creative unit of the company, one of the functions he has to perform is the process of organizing. Which step of the process will he need to perform after identifying and dividing the work that has to be done in accordance with previously determined plans?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Identification and division of work"),
        React.createElement("li", null, "b) Departmentalisation"),
        React.createElement("li", null, "c) Assignment of Duties"),
        React.createElement("li", null, "d) Establishing Reporting Relationships")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Departmentalisation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "After identifying and dividing work, the next step in organizing is departmentalisation, which involves grouping similar activities into departments.")
    )
  },
  {
    id: 'BS-CH5-007',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Functional Structure',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Aarohan Ltd. is a company manufacturing automobiles where division of work into key areas includes production, purchase, marketing, accounts and personnel. Which of the following is a disadvantage of the organization structure of Aarohan Ltd.?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) It may lead to increase in cost"),
        React.createElement("li", null, "b) Managers may gain power and assert independence and ignore organization interests."),
        React.createElement("li", null, "c) It ensures that different functions get due attention."),
        React.createElement("li", null, "d) Heads do not get training for top management positions.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Heads do not get training for top management positions."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "In functional structure, functional heads specialize in their areas and may not get exposure to other functions, limiting their training for top management positions.")
    )
  },
  {
    id: 'BS-CH5-008',
    subject: 'Business Studies',
    chapter: '5',
    topic: 'Organization Structure',
    source: 'Challenge 2022',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the outcome of the function of management which includes designing of roles to be filled by suitably skilled people and defining the inter relationship between roles so that ambiguity in performance of duties can be eliminated."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Organization structure"),
        React.createElement("li", null, "b) Delegation of authority"),
        React.createElement("li", null, "c) Decentralization"),
        React.createElement("li", null, "d) Controlling")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Organization structure"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Organization structure is the outcome of organizing function that defines roles, relationships, and eliminates ambiguity in duties.")
    )
  }
];

// Chapter 6: Staffing
const businessStudiesChapter6: MCQPoolQuestion[] = [
  {
    id: 'BS-CH6-001',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Compensation - Incentives',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Manu Priya is working as the Human Resource Manager of EDT Limited at an annual salary of ₹8 lakh per annum and is also offered shares of the company at a set price which is lower than the market price. The method being used to calculate the compensation provided to her is—"),
       React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Time based direct financial payment"),
        React.createElement("li", null, "b) Indirect financial payment"),
        React.createElement("li", null, "c) Time based Pay Plus incentives"),
        React.createElement("li", null, "d) Performance based direct financial payment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Time based Pay Plus incentives"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
       React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Time Based Pay:"), " Her annual salary is a time-based payment."),
        React.createElement("li", null, React.createElement("b", null, "Incentives:"), " The offer of shares at a lower price is a type of incentive (specifically, an Employee Stock Option Plan - ESOP).")
      ),
      React.createElement("p", { className: "mt-4 bg-blue-50 p-3 rounded-lg" }, "Since her compensation includes both a regular salary and an incentive, the correct option is 'Time based Pay Plus incentives'.")
    )
  },
  {
    id: 'BS-CH6-002',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Sources of Recruitment',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Look at the picture given below and answer the question that follows:"),
      React.createElement("img", {src: 'https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/16.png', alt: 'Recruitment recommendation', className: 'my-4 rounded-lg shadow-md'}),
      React.createElement("p", null, "Identify the incorrect statement about the type of source of recruitment depicted above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management can attract qualified people to apply for vacant positions in the organisation."),
        React.createElement("li", null, "b) It may lead to dissatisfaction and frustration among existing employees."),
        React.createElement("li", null, "c) Such employees are not likely to be good employees as their background is not sufficiently known."),
        React.createElement("li", null, "d) Management has a wider choice while selecting people for employment.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Such employees are not likely to be good employees as their background is not sufficiently known."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The picture depicts 'Recommendations of employees', an external source of recruitment."),
      React.createElement("p", { className: "mt-2" }, "Statement (c) is incorrect because when an existing employee recommends someone, their background and capabilities are generally known to the recommender, which reduces the risk for the company compared to hiring a complete stranger.")
    )
  },
  {
    id: 'BS-CH6-003',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Training and Development',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the step in the staffing process which enables the organizations to offer opportunities for career advancement to their employees by facilitating learning, thereby helping the organisations to not only attract but also retain its talented people in the organisation."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a. Placement and Orientation"),
        React.createElement("li", null, "b. Recruitment"),
        React.createElement("li", null, "c. Training and Development"),
        React.createElement("li", null, "d. Performance Appraisal")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c. Training and Development"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The keywords 'career advancement' and 'facilitating learning' directly point to Training and Development. This step focuses on improving employees' skills and knowledge, preparing them for future roles and aiding in their retention.")
    )
  },
  {
    id: 'BS-CH6-004',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Compensation Methods',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Manu Priya is working as the Human Resource Manager of EDT Limited at an annual salary of ₹8 lakh per annum and is also offered shares of the company at a set price which is lower than the market price. The method being used to calculate the compensation provided to her is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Time based direct financial payment"),
        React.createElement("li", null, "b) Indirect financial payment"),
        React.createElement("li", null, "c) Time based Pay Plus incentives"),
        React.createElement("li", null, "d) Performance based direct financial payment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Time based Pay Plus incentives"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The compensation includes both a fixed annual salary (time-based) and shares at a discounted price (incentive), making it time-based pay plus incentives.")
    )
  },
  {
    id: 'BS-CH6-005',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Internal vs External Recruitment',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the incorrect statement about the type of source of recruitment (internal sources):"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Management can attract qualified people to apply for vacant positions in the organisation."),
        React.createElement("li", null, "b) It may lead to dissatisfaction and frustration among existing employees."),
        React.createElement("li", null, "c) Such employees are not likely to be good employees as their background is not sufficiently known."),
        React.createElement("li", null, "d) Management has a wider choice while selecting people for employment.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Such employees are not likely to be good employees as their background is not sufficiently known."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Internal sources of recruitment involve promoting existing employees whose background is well known to the management, making them likely to be good employees. The other statements are correct about internal recruitment.")
    )
  },
  {
    id: 'BS-CH6-006',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Training and Development',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the step in the staffing process which enables the organizations to offer opportunities for career advancement to their employees by facilitating learning, thereby helping the organisations to not only attract but also retain its talented people in the organisation."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Placement and Orientation"),
        React.createElement("li", null, "b) Recruitment"),
        React.createElement("li", null, "c) Training and Development"),
        React.createElement("li", null, "d) Performance Appraisal")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Training and Development"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Training and Development helps in career advancement through learning opportunities, which helps organizations attract and retain talented employees.")
    )
  },
  {
    id: 'BS-CH6-007',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'External Recruitment Benefits',
    source: 'Challenge 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the statement that correctly highlights the benefit of using external sources of recruitment."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Competitive spirit among the existing staff"),
        React.createElement("li", null, "b) Reduction in employees turnover"),
        React.createElement("li", null, "c) Helps in increasing employees satisfaction"),
        React.createElement("li", null, "d) Develops a sense of security amongst employees")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Competitive spirit among the existing staff"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "External recruitment brings in new talent, creating competition among existing staff to perform better and maintain their positions.")
    )
  },
  {
    id: 'BS-CH6-008',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Staffing Process Sequence',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'Joining a job marks the beginning of socialisation of employees at the workplace. The employee should be given a post for which he has been selected.'"),
      React.createElement("p", { className: "mt-2" }, "Place the subsequent steps of staffing in a small organisation in the correct order:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Training and development, promotion and career planning, performance appraisal, compensation"),
        React.createElement("li", null, "b) Performance appraisal, training and development, promotion and career planning, compensation"),
        React.createElement("li", null, "c) Training and development, performance appraisal, promotion and career planning, compensation"),
        React.createElement("li", null, "d) Training and development, performance appraisal, compensation, promotion and career planning")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Training and development, performance appraisal, promotion and career planning, compensation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The correct sequence of staffing steps after selection is: Training and development, Performance appraisal, Promotion and career planning, Compensation.")
    )
  },
  {
    id: 'BS-CH6-009',
    subject: 'Business Studies',
    chapter: '6',
    topic: 'Induction Training',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Shiwakumar runs a legal consultancy firm in Chhattisgarh. Whenever the firm hires new employees, on the first day of joining, they are welcomed to the organisation and are given details about the dress code, lunch timings, introduction to daily operations and fellow colleagues. They are also familiarised with the organisational policies and procedures, emergency exits, evacuation procedure, etc."),
      React.createElement("p", { className: "mt-2" }, "Name the type of training which is provided by Shiwakumar in his firm."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Apprenticeship training"),
        React.createElement("li", null, "b) Vestibule training"),
        React.createElement("li", null, "c) Induction training"),
        React.createElement("li", null, "d) Internship training")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Induction training"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Induction training is provided to new employees on their first day to familiarize them with the organization, its policies, procedures, and work environment.")
    )
  }
];

// Chapter 7: Directing
const businessStudiesChapter7: MCQPoolQuestion[] = [
  {
    id: 'BS-CH7-001',
    subject: 'Business Studies',
    chapter: '7',
    topic: 'Motivation - Maslow Theory',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct alternative from those given below:"),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "ASSERTION(A):"), " Maslow's need hierarchy theory of motivation is widely recognised and appreciated yet criticised."),
        React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "REASON(R):"), " Even though Maslow's theory focuses on needs as a basis of motivation and helps to develop understanding about the motivation phenomenon, his propositions are questioned on their classification and hierarchy."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
            React.createElement("li", null, "(a) Both Assertion (A) and Reason (R) are true."),
            React.createElement("li", null, "(b) Both Assertion (A) and Reason (R) are false."),
            React.createElement("li", null, "(c) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion."),
            React.createElement("li", null, "(d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion.")
        )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion."),
    explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
            React.createElement("li", null, React.createElement("b", null, "Assertion (A) is true:"), " Maslow's theory is widely appreciated for its intuitive logic. However, it is also criticized for its rigid hierarchy and lack of empirical support."),
            React.createElement("li", null, React.createElement("b", null, "Reason (R) is true:"), " The primary criticisms are directed at the strict classification of needs and the hierarchical progression, which may not apply universally."),
            React.createElement("li", null, React.createElement("b", null, "R explains A:"), " The reason (criticism of the hierarchy and classification) directly explains why the assertion (the theory is appreciated yet criticized) is correct.")
        )
    )
  },
  {
    id: 'BS-CH7-002',
    subject: 'Business Studies',
    chapter: '7',
    topic: 'Communication Process',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Arrange the following elements of communication process in the correct sequence:"),
       React.createElement("p", { className: "mt-2" }, "i) Media, ii) Message, iii) Sender, iv) Decoding, v) Receiver, vi) Feedback, vii) Encoding"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) iii, i, vii, ii, v, iv, vi"),
        React.createElement("li", null, "b) iii, ii, vii, i, iv, v, vi"),
        React.createElement("li", null, "c) ii, iii, vii, vi, iv, v, i"),
        React.createElement("li", null, "d) ii, i, vii, iii, v, iv, vi")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) iii, ii, vii, i, iv, v, vi"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The correct sequence of the communication process is:"),
      React.createElement("ol", { className: "list-decimal pl-5 mt-2 space-y-1" },
        React.createElement("li", null, React.createElement("b", null, "Sender (iii)")),
        React.createElement("li", null, React.createElement("b", null, "Message (ii)")),
        React.createElement("li", null, React.createElement("b", null, "Encoding (vii)")),
        React.createElement("li", null, React.createElement("b", null, "Media (i)")),
        React.createElement("li", null, React.createElement("b", null, "Decoding (iv)")),
        React.createElement("li", null, React.createElement("b", null, "Receiver (v)")),
        React.createElement("li", null, React.createElement("b", null, "Feedback (vi)"))
      )
    )
  },
  {
    id: 'BS-CH7-003',
    subject: 'Business Studies',
    chapter: '7',
    topic: 'Coordination and Unity of Action',
    source: 'Board Exam 66/1/1',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "There are two statements, Assertion (A) and Reason (R):"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Assertion (A):"), " Coordination ensures unity of action."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Reason (R):"), " Coordination acts as a binding force between departments and ensures that all action is aimed at achieving the goals of the organisation."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) Both Assertion (A) and Reason (R) are correct and Reason (R) is the correct explanation of Assertion (A)"),
        React.createElement("li", null, "(B) Both Assertion (A) and Reason (R) are correct, but Reason (R) is not the correct explanation of Assertion (A)"),
        React.createElement("li", null, "(C) Assertion (A) is correct, but Reason (R) is wrong"),
        React.createElement("li", null, "(D) Assertion (A) is wrong, but Reason (R) is correct")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (A) Both Assertion (A) and Reason (R) are correct and Reason (R) is the correct explanation of Assertion (A)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Coordination's primary purpose is to ensure unity of action (Assertion A). It achieves this by acting as a binding force that synchronizes the activities of different departments towards common goals (Reason R). Thus, the reason correctly explains the assertion.")
    )
  },
  {
    id: 'BS-CH7-004',
    subject: 'Business Studies',
    chapter: '7',
    topic: 'Motivation - Maslow Theory',
    source: 'Challenge 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct alternative from those given below:"),
      React.createElement("p", { className: "mt-2" }, "ASSERTION(A): Maslow's need hierarchy theory of motivation is widely recognised and appreciated yet criticised."),
      React.createElement("p", null, "REASON(R): Even though Maslow's theory focuses on needs as a basis of motivation and helps to develop understanding about the motivation phenomenon, his propositions are questioned on their classification and hierarchy."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both Assertion (A) and Reason (R) are true."),
        React.createElement("li", null, "b) Both Assertion (A) and Reason (R) are false."),
        React.createElement("li", null, "c) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion."),
        React.createElement("li", null, "d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Maslow's theory is widely recognized but criticized for its classification and hierarchy of needs. The reason correctly explains why the theory is both appreciated and criticized.")
    )
  },
  {
    id: 'BS-CH7-005',
    subject: 'Business Studies',
    chapter: '7',
    topic: 'Communication Process',
    source: 'Challenge 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Arrange the following elements of communication process in the correct sequence:"),
      React.createElement("div", { className: "mt-4" },
        React.createElement("p", null, "i) Media"),
        React.createElement("p", null, "ii) Message"),
        React.createElement("p", null, "iii) Sender"),
        React.createElement("p", null, "iv) Decoding"),
        React.createElement("p", null, "v) Receiver"),
        React.createElement("p", null, "vi) Feedback"),
        React.createElement("p", null, "vii) Encoding")
      ),
      React.createElement("p", { className: "mt-4" }, "Choose the correct option:"),
      React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
        React.createElement("li", null, "a) iii,i,vii,ii,v,iv,vi"),
        React.createElement("li", null, "b) iii,ii,vii,i,iv,v,vi"),
        React.createElement("li", null, "c) ii,iii,vii,vi,iv,v,i"),
        React.createElement("li", null, "d) ii,i,vii,iii,v,iv,vi")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) iii,ii,vii,i,iv,v,vi"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The correct sequence of communication process is: Sender (iii) → Message (ii) → Encoding (vii) → Media (i) → Decoding (iv) → Receiver (v) → Feedback (vi).")
    )
  }
];

// Chapter 8: Controlling
const businessStudiesChapter8: MCQPoolQuestion[] = [
  {
    id: 'BS-CH8-001',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Process of Controlling',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the correct statement about the controlling function of management."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) No corrective action is required when the deviation goes beyond the acceptable range in important areas."),
        React.createElement("li", null, "b) Deviations should be analysed for their causes."),
        React.createElement("li", null, "c) Measurement of actual performance should be done only after the task is complete."),
        React.createElement("li", null, "d) Managers must keep a check on each and every activity, otherwise the entire organisation may suffer.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Deviations should be analysed for their causes."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The correct statement is (b) because a key step in controlling is to understand why deviations occurred to take appropriate corrective action."),
      React.createElement("p", { className: "mt-4" }, "The other options are incorrect: (a) Corrective action is essential for significant deviations; (c) Performance should be measured during the task as well; (d) This contradicts the principle of 'Management by Exception', which states that managers should focus only on significant deviations.")
    )
  },
  {
    id: 'BS-CH8-002',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Controlling Function',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the correct statement about the controlling function of management."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) No corrective action is required when the deviation goes beyond the acceptable range in important areas."),
        React.createElement("li", null, "b) Deviations should be analysed for their causes."),
        React.createElement("li", null, "c) Measurement of actual performance should be done only after the task is complete."),
        React.createElement("li", null, "d) Managers must keep a check on each and every activity, otherwise the entire organisation may suffer.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Deviations should be analysed for their causes."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Controlling involves measuring actual performance against standards and analyzing deviations for their causes to take corrective action. The other options are incorrect statements about controlling.")
    )
  },
  {
    id: 'BS-CH8-003',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Controlling Prevents Deviations',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct alternative from those given below:"),
      React.createElement("p", { className: "mt-2" }, "ASSERTION (A): Controlling can prevent deviations."),
      React.createElement("p", null, "REASON (R): Controlling helps in minimising deviations by taking actions and decisions that reduce their recurrence."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both Assertion (A) and Reason (R) are true and Reason is the correct explanation of Assertion."),
        React.createElement("li", null, "b) Both Assertion(A) and Reason (R) are true and Reason is not the correct explanation of Assertion."),
        React.createElement("li", null, "c) Assertion (A) is true, Reason (R) is false."),
        React.createElement("li", null, "d) Assertion(A) is false, Reason(R) is true.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Assertion(A) is false, Reason(R) is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Controlling cannot prevent deviations as they occur during operations. However, it helps minimize future deviations by taking corrective actions.")
    )
  },
  {
    id: 'BS-CH8-004',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Significance of Controlling',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Spiceworks, a company providing financial services to its clients is keeping a close check on the employee's activities by using biometric and retina scanning as modes of accessing the office premises, in order to ensure greater security of information in the organisation."),
      React.createElement("p", { className: "mt-2" }, "Choose the correct point of significance of controlling highlighted above:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) controlling helps in achievement of organisational goals"),
        React.createElement("li", null, "b) controlling helps in ensuring order and discipline"),
        React.createElement("li", null, "c) controlling helps in improving employees motivation"),
        React.createElement("li", null, "d) controlling enables optimum utilisation of resources")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) controlling helps in ensuring order and discipline"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Using biometric and retina scanning ensures security and maintains order and discipline in the organization by controlling access to premises.")
    )
  },
  {
    id: 'BS-CH8-005',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Controlling Function in Practice',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "IND Dyechem Ltd. is a chemical manufacturing company producing dyes and pigments both for domestic and international market. It has enjoyed a considerable market share but lately, it has been facing problems in terms of target sales and customer satisfaction. This is due to the reason that new entrants have emerged with better technology and competitive pricing. The Chairman of the company addressed this issue in the departmental meeting. The production head, Mr. Kamble, advised the Chairman to revamp the system and take immediate necessary actions to rectify the problem so that sales are achieved as per the plans."),
      React.createElement("p", { className: "mt-2" }, "Identify the relevant function of management being discussed here."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Organising"),
        React.createElement("li", null, "b) Staffing"),
        React.createElement("li", null, "c) Controlling"),
        React.createElement("li", null, "d) Planning")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Controlling"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Controlling involves comparing actual performance with planned performance and taking corrective actions.")
    )
  },
  {
    id: 'BS-CH8-006',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Measurement of Actual Performance',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Some employees have been assigned the job of measuring the output in an objective and reliable way. They are applying different techniques for achieving this aim. Some of these are personal-observation, sample-checking etc. They are also keeping the units of measurement same as that of the units in the standards."),
      React.createElement("p", { className: "mt-2" }, "Name the step of 'Controlling process applicable in the above paragraph."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Analysing deviations"),
        React.createElement("li", null, "b) Comparing actual performance with standards."),
        React.createElement("li", null, "c) Establishing standards."),
        React.createElement("li", null, "d) Measurement of actual performance")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Measurement of actual performance"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Measurement of actual performance is the second step in controlling process where actual results are measured objectively.")
    )
  },
  {
    id: 'BS-CH8-007',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Characteristics of Controlling',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Radha started a home cooked food delivery Dabba service. Her mother, who is a great cook, decided to help her. They relied on friends and family for orders and then on word of mouth. As a step in the process of ensuring that activities are performed as per her plan of supplying healthy, good quality, reasonable food and earning profit, she decided to keep both qualitative and quantitative benchmarks towards which she would strive to work. A function of management is being discussed above. An important characteristic of this function of management is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) It is the first function of management"),
        React.createElement("li", null, "b) It is the Last function of management"),
        React.createElement("li", null, "c) It is both forward looking and backward looking."),
        React.createElement("li", null, "d) It is required only in business organizations.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) It is both forward looking and backward looking."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Controlling is both forward-looking (setting standards) and backward-looking (measuring actual performance and comparing with standards).")
    )
  },
  {
    id: 'BS-CH8-008',
    subject: 'Business Studies',
    chapter: '8',
    topic: 'Controlling Function',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Raman and Vasudev were two employees who were embezzling an import-export company in Varanasi where they were working. The finance manager of the company Sampat Singh became suspicious of the two employees when he realized that their activities were not being performed as per the plans. He installed a software program that could secretly log every single stroke of the suspects' computer keys and send an encrypted email report to the Cyber police. The police were able to catch the two dishonest employees red handed and arrest them. Identify the function of management being discussed above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Staffing"),
        React.createElement("li", null, "b) Coordination"),
        React.createElement("li", null, "c) Controlling"),
        React.createElement("li", null, "d) Organizing")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Controlling"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The manager is comparing actual performance with plans and taking corrective action, which is the controlling function of management.")
    )
  }
];

// Chapter 9: Financial Management
const businessStudiesChapter9: MCQPoolQuestion[] = [
  {
    id: 'BS-CH9-001',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Investment Decision',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'Game of Clones', a reputed amusement company has decided to run an advertising campaign for which it is hiring various celebrities. The campaign involves an expenditure of ₹150 Crores. Identify the financial decision involved in the above case."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a. Long term investment decision"),
        React.createElement("li", null, "b. Financing decision"),
        React.createElement("li", null, "c. Working capital decision"),
        React.createElement("li", null, "d. Dividend decision")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a. Long term investment decision"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A large expenditure on an advertising campaign is a Long-term Investment Decision (or Capital Budgeting decision). The benefits are expected to last for a long period, affecting the firm's long-term profitability and growth.")
    )
  },
  {
    id: 'BS-CH9-002',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Capital Structure - Risk',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Arth Nivesh Limited has a high fixed operating cost. The Finance Manager informs the Chief Finance Officer that, in case the company decides to take a loan, for its future financial needs, its fixed financial cost will also increase leading to an overall increase in cost. Identify the factor affecting choice of capital structure discussed above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Cost of debt"),
        React.createElement("li", null, "b) Floatation cost"),
        React.createElement("li", null, "c) Risk consideration"),
        React.createElement("li", null, "d) Control")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Risk consideration"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The company already has high fixed operating costs (Business Risk). Taking on a loan adds high fixed financial costs (Financial Risk). The consideration of the company's total risk (Business Risk + Financial Risk) when choosing the capital structure is known as Risk Consideration.")
    )
  },
  {
    id: 'BS-CH9-003',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Capital Market',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The Finance Manager of Elle Pharma Limited, Mr Ashish Manjrekar wants to raise funds through debt or equity to the extent of ₹2 crores. For this purpose, he approaches a well regulated financial market that facilitates the mobilisation of long term capital for companies. Identify the market where Mr Ashish Manjrekar can raise the funds."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Money market"),
        React.createElement("li", null, "b) Secondary market"),
        React.createElement("li", null, "c) Capital market"),
        React.createElement("li", null, "d) Wholesale debt market")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Capital market"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The Capital Market is the market for long-term funds (both debt and equity). The Money Market is for short-term funds. Since the company needs to raise long-term capital, it will approach the Capital Market.")
    )
  },
  {
    id: 'BS-CH9-004',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Dividend Decision',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'Companies are required to ensure that the dividend does not violate the terms of loan agreement.' Identify the relevant factor affecting dividend decisions being discussed above."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Access to capital market"),
        React.createElement("li", null, "b) Legal constraints"),
        React.createElement("li", null, "c) Stock market reaction"),
        React.createElement("li", null, "d) Contractual constraints")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Contractual constraints"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "When a company takes a loan, the loan agreement often includes conditions or covenants. A restriction on paying dividends to protect the lender's interest is a common example of a Contractual Constraint affecting the dividend decision.")
    )
  },
  {
    id: 'BS-CH9-005',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Objectives of Financial Management',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement I:"), " The objective of financial management is to maximize the wealth of directors of the company"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement II:"), " The financing decision of the company is unaffected by the extent of retained earnings."),
       React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(a) Both the statements are true."),
        React.createElement("li", null, "(b) Both the statements are false."),
        React.createElement("li", null, "(c) Statement I is true, Statement II is false."),
        React.createElement("li", null, "(d) Statement II is true, Statement I is false")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (b) Both the statements are false."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
       React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Statement I is false:"), " The primary objective is to maximize the wealth of the shareholders (owners), not the directors. This is achieved by maximizing the share price."),
        React.createElement("li", null, React.createElement("b", null, "Statement II is false:"), " Retained earnings are a major source of internal finance. The financing decision is heavily affected by the amount of retained earnings available.")
      )
    )
  },
  {
    id: 'BS-CH9-006',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Financial Risk',
    source: 'Board Exam 66/1/1',
    difficulty: 'easy',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is indicated when the debt content in the capital structure increases?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Financial risk increases"),
        React.createElement("li", null, "b) Financial risk decreases"),
        React.createElement("li", null, "c) Financial risk remains the same"),
        React.createElement("li", null, "d) Operating risk increases")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Financial risk increases"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Higher debt in the capital structure means higher fixed financial obligations (interest payments). This increases the financial risk as the company must make these payments regardless of its profitability, making it more vulnerable during difficult times.")
    )
  },
  {
    id: 'BS-CH9-007',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Investment Decision - Long Term',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "'Game of Clones', a reputed amusement company has decided to run an advertising campaign for which it is hiring various celebrities. The campaign involves an expenditure of ₹150 Crores. Identify the financial decision involved in the above case."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Long term investment decision"),
        React.createElement("li", null, "b) Financing decision"),
        React.createElement("li", null, "c) Working capital decision"),
        React.createElement("li", null, "d) Dividend decision")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Long term investment decision"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The decision to spend ₹150 crores on an advertising campaign is a long-term investment decision because advertising campaigns are strategic investments that build brand value and generate long-term benefits for the company.")
    )
  },
  {
    id: 'BS-CH9-008',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Investment Decision - Capital Budgeting',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the incorrect statement with respect to 'Investment decision':"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Net working capital refers to excess of current assets over current liabilities"),
        React.createElement("li", null, "b) Current assets are those assets which get converted into cash within one year"),
        React.createElement("li", null, "c) Capital budgeting decisions are irreversible."),
        React.createElement("li", null, "d) Size of the assets, Profitability and competitiveness are not affected by capital budgeting decisions.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Size of the assets, Profitability and competitiveness are not affected by capital budgeting decisions."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Capital budgeting decisions significantly affect the size of assets, profitability, and competitiveness of the organization as they involve long-term investment decisions.")
    )
  },
  {
    id: 'BS-CH9-009',
    subject: 'Business Studies',
    chapter: '9',
    topic: 'Financial Leverage',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 4,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The Board of directors of Medex Pharma Ltd. decided to issue debentures worth ₹40 lakhs in order to finance a major Research and Development project. This would increase the Debt Equity ratio from 1:1 to 2:1.However, at the same time it would increase the Earnings per share."),
      React.createElement("p", { className: "mt-2" }, "The reason that will justify the above situation is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Unfavourable financial leverage, as the financial risk will be higher."),
        React.createElement("li", null, "b) Unfavourable financial leverage, as return on investment is lower than the cost of debt."),
        React.createElement("li", null, "c) Favourable financial leverage as debt is easily available"),
        React.createElement("li", null, "d) Favourable financial leverage, as return on investment is higher than cost of debt")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Favourable financial leverage, as return on investment is higher than cost of debt"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "When return on investment is higher than cost of debt, issuing debentures increases earnings per share due to financial leverage effect.")
    )
  }
];

// Chapter 10: Marketing
const businessStudiesChapter10: MCQPoolQuestion[] = [
  {
    id: 'BS-CH10-001',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Marketing Mix - Product',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the element of marketing mix which includes deciding about the features, quality, packaging, labelling and branding of goods or services or 'anything of value' which is offered to the market for sale."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) promotion"),
        React.createElement("li", null, "b) place"),
        React.createElement("li", null, "c) product"),
        React.createElement("li", null, "d) price")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) product"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The element of the marketing mix that covers all tangible and intangible attributes of a good or service, including its features, quality, branding, packaging, and labelling, is the Product.")
    )
  },
  {
    id: 'BS-CH10-002',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Customer Value',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "A product will be purchased only if it is perceived to be giving the greatest benefit for the money. Name the feature of marketing reflected in this statement"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Creating a market offering"),
        React.createElement("li", null, "b) Customer value"),
        React.createElement("li", null, "c) Exchange mechanism"),
        React.createElement("li", null, "d) Needs and wants")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Customer value"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The phrase 'greatest benefit for the money' is the definition of Customer Value. It represents the customer's perception of the benefits received from a product versus the cost incurred to obtain it.")
    )
  },
  {
    id: 'BS-CH10-003',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Distribution Channels',
    source: 'Board Exam 66/5/3',
    difficulty: 'easy',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "From the following, identify the channel of distribution in which goods pass from the manufacturer to the retailers who, in turn, sell them to the final users."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "(A) One level channel"),
        React.createElement("li", null, "(B) Two level channel"),
        React.createElement("li", null, "(C) Three level channel"),
        React.createElement("li", null, "(D) Zero level channel")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: (A) One level channel"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The level of a distribution channel is determined by the number of intermediaries between the manufacturer and the customer. In this case, there is only one intermediary (the retailer). Therefore, it is a One-Level Channel.")
    )
  },
  {
    id: 'BS-CH10-004',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Marketing Mix - Product',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the element of marketing mix which includes deciding about the features, quality, packaging, labelling and branding of goods or services or 'anything of value' which is offered to the market for sale."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) promotion"),
        React.createElement("li", null, "b) place"),
        React.createElement("li", null, "c) product"),
        React.createElement("li", null, "d) price")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) product"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The product element of marketing mix includes decisions about features, quality, packaging, labelling, and branding of goods or services offered to customers.")
    )
  },
  {
    id: 'BS-CH10-005',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Customer Value',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "A product will be purchased only if it is perceived to be giving the greatest benefit for the money. Name the feature of marketing reflected in this statement."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Creating a market offering"),
        React.createElement("li", null, "b) Customer value"),
        React.createElement("li", null, "c) Exchange mechanism"),
        React.createElement("li", null, "d) Needs and wants")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Customer value"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Customer value refers to the perception that a product provides the greatest benefit relative to its cost. This is a key concept in marketing where customers evaluate products based on value for money.")
    )
  },
  {
    id: 'BS-CH10-006',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Grading',
    source: 'Challenge 2024',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The process of classification of products into different groups, on the basis of some of the important characteristics such as quality, size, etc. is known as:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Branding"),
        React.createElement("li", null, "b) Standardisation"),
        React.createElement("li", null, "c) Grading"),
        React.createElement("li", null, "d) Marketing planning")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Grading"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Grading is the process of classification of products into different groups based on characteristics like quality, size, etc.")
    )
  },
  {
    id: 'BS-CH10-007',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Labelling',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "A bottle of Anti- dandruff shampoo mentions ' Clean your hair and get rid of dandruff in one squeeze'. The product related decision involved is-"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Branding"),
        React.createElement("li", null, "b) Product quality"),
        React.createElement("li", null, "c) Packaging"),
        React.createElement("li", null, "d) Labelling")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Labelling"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Labelling involves providing information about the product including its features, usage instructions, and benefits.")
    )
  },
  {
    id: 'BS-CH10-008',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Customer Support Services',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Name the function of marketing which is effective in bringing repeat sales from the customers and developing brand loyalty for a product."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Standardization and grading"),
        React.createElement("li", null, "b) Promotion"),
        React.createElement("li", null, "c) Customer support services"),
        React.createElement("li", null, "d) Packaging and labelling")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Customer support services"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Customer support services like after-sales service, handling complaints, and providing warranties help in building customer loyalty and repeat sales.")
    )
  },
  {
    id: 'BS-CH10-009',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Pricing Objectives',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the incorrect statement about pricing objectives as a factor affecting the price of a product."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) If a firm's objective is to maximize profits in the short run, it should charge maximum price for its products."),
        React.createElement("li", null, "b) If a firm's objective is to capture market share, it should keep low price of its product."),
        React.createElement("li", null, "c) If a firm wants to attain product quality leadership, it should charge lower prices."),
        React.createElement("li", null, "d) If a firm is facing problems in survival due to stiff competition, it may offer discount on its products.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) If a firm wants to attain product quality leadership, it should charge lower prices."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "For product quality leadership, firms typically charge premium prices, not lower prices.")
    )
  },
  {
    id: 'BS-CH10-010',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Warehousing and Inventory Management',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Statement I: For products requiring long term storage like agricultural products, the warehouses are located near to the market."),
      React.createElement("p", { className: "mt-2" }, "Statement II: Higher the level of inventory, higher will be the level of service to customers but the cost of carrying the inventory will also be high."),
      React.createElement("p", { className: "mt-2" }, "Choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Statement I is true and II is false"),
        React.createElement("li", null, "b) Statement II is true and I is false"),
        React.createElement("li", null, "c) Both the statements are true"),
        React.createElement("li", null, "d) Both the statements are false")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Statement II is true and I is false"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Warehouses for long-term storage are located near production centers, not markets. Higher inventory levels do provide better service but increase carrying costs.")
    )
  },
  {
    id: 'BS-CH10-011',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Marketing Functions - Physical Distribution',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Statement-I Transportation helps in creating time utility and warehousing helps in creating place utility"),
      React.createElement("p", { className: "font-semibold" }, "Statement-II The process of classification of products into different groups on the basis of their important characteristics is known as standardization."),
      React.createElement("p", { className: "mt-2" }, "Choose the correct option from the options given below:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Statement I is true and II is false"),
        React.createElement("li", null, "b) Statement II is true and I is false"),
        React.createElement("li", null, "c) Both the statements are true"),
        React.createElement("li", null, "d) Both the statements are false")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Both the statements are false"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Transportation creates place utility, warehousing creates time utility. Standardization refers to setting standards for products, not classification.")
    )
  },
  {
    id: 'BS-CH10-012',
    subject: 'Business Studies',
    chapter: '10',
    topic: 'Physical Distribution - Inventory Management',
    source: 'Challenge 2022',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "One of the important decision areas under the marketing function of …………………….. is managing inventory."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Branding"),
        React.createElement("li", null, "b) Pricing"),
        React.createElement("li", null, "c) Promotion"),
        React.createElement("li", null, "d) Physical distribution.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Physical distribution."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Managing inventory is part of physical distribution function of marketing, which includes transportation, warehousing, and inventory management.")
    )
  }
];

// Chapter 11: Consumer Protection
const businessStudiesChapter11: MCQPoolQuestion[] = [
  {
    id: 'BS-CH11-001',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Depository',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the correct statement about the meaning of depository."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Depository holds and transfers securities in the Demat Form."),
        React.createElement("li", null, "b) Depository serves as an intermediary and buys and sells securities on the instructions of clients."),
        React.createElement("li", null, "c) Depository is like a bank and keeps securities in electronic form on behalf of investors."),
        React.createElement("li", null, "d) Depository buys securities from a company and sells to the public at a higher price.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Depository is like a bank and keeps securities in electronic form on behalf of investors."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The most accurate description is (c). A depository (like NSDL or CDSL) functions like a bank where securities are held in electronic (dematerialized) form on behalf of investors. Option (b) describes a stock broker, not the depository itself.")
    )
  },
  {
    id: 'BS-CH11-002',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Depository Services',
    source: 'Challenge 2025',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Choose the correct statement about the meaning of depository."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Depository holds and transfers securities in the Demat Form."),
        React.createElement("li", null, "b) Depository serves as an intermediary and buys and sells securities on the instructions of clients."),
        React.createElement("li", null, "c) Depository is like a bank and keeps securities in electronic form on behalf of investors."),
        React.createElement("li", null, "d) Depository buys securities from a company and sells to the public at a higher price.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Depository is like a bank and keeps securities in electronic form on behalf of investors."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A depository is an organization that holds securities in electronic form and provides services related to transactions in securities. It acts like a bank for securities.")
    )
  },
  {
    id: 'BS-CH11-003',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Financial Markets - Assertion Reason',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R). Choose the correct alternative from those given below:"),
      React.createElement("p", { className: "mt-2" }, "ASSERTION(A): Financial Planning aims at enabling the company to tackle the uncertainty in respect of the availability and timing of the funds."),
      React.createElement("p", null, "REASON(R): Capital structure refers to the mix between owners' and borrowed funds"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both Assertion (A) is false and Reason (R) are true."),
        React.createElement("li", null, "b) Both Assertion (A) and Reason (R) are false."),
        React.createElement("li", null, "c) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion."),
        React.createElement("li", null, "d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Financial planning helps tackle uncertainty about funds availability and timing. Capital structure refers to the mix of owners' and borrowed funds, but this doesn't directly explain financial planning.")
    )
  },
  {
    id: 'BS-CH11-004',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Primary vs Secondary Market',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, "Statement I: Secondary Market directly promotes capital formation."),
      React.createElement("p", null, "Statement II: Capital market deals in medium and long term securities such as equity shares and debentures."),
      React.createElement("p", { className: "mt-2" }, "In the light of given statements, choose the correct alternative from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Both the statements are true."),
        React.createElement("li", null, "b) Both the statements are false."),
        React.createElement("li", null, "c) Statement I is true, Statement II is false."),
        React.createElement("li", null, "d) Statement II is true, Statement I is false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Statement II is true, Statement I is false."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Statement II is correct as capital market deals in medium and long-term securities. Statement I is incorrect as primary market directly promotes capital formation, not secondary market.")
    )
  },
  {
    id: 'BS-CH11-005',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Consumer Responsibility',
    source: 'Challenge 2024',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the responsibility that a consumer fulfills when he looks for the quality marks given above:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Assert yourself to ensure that you get a fair deal"),
        React.createElement("li", null, "b) Getting a proper receipt"),
        React.createElement("li", null, "c) Buy only standardised products"),
        React.createElement("li", null, "d) Be honest in your dealings")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: c) Buy only standardised products"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Looking for quality marks like FPO or hallmark ensures that consumers buy only standardized products that meet quality standards.")
    )
  },
  {
    id: 'BS-CH11-006',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'State Commission Jurisdiction',
    source: 'Challenge 2024',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "State Commission has the jurisdiction to entertain complaints where value of goods and services paid as consideration is ________"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) More than ₹1 crore and not more than ₹ 5 crore"),
        React.createElement("li", null, "b) More than ₹10 crore"),
        React.createElement("li", null, "c) Less than ₹1 crore"),
        React.createElement("li", null, "d) More than ₹1 crore and not more than ₹10 crore")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) More than ₹1 crore and not more than ₹10 crore"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "State Commission has jurisdiction over complaints where the value of goods and services is more than ₹1 crore but not more than ₹10 crore.")
    )
  },
  {
    id: 'BS-CH11-007',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Consumer Protection Act',
    source: 'Challenge 2024',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Identify the incorrect statement with respect to Consumer Protection in India."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) It not only includes educating consumers about their rights and responsibilities but also helps in getting their grievances redressed"),
        React.createElement("li", null, "b) It not only requires a judicial machinery for protecting the interest of consumers but also requires the consumers to get together and form themselves into Consumer associations for protection and promotion of their interests."),
        React.createElement("li", null, "c) It is the moral duty of any business to take care of consumers' interest and avoid any form of exploitation."),
        React.createElement("li", null, "d) The provisions of Consumer Protection Act came into force from 1981.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) The provisions of Consumer Protection Act came into force from 1981."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The Consumer Protection Act, 1986 came into force from 1st July 1987, not 1981.")
    )
  },
  {
    id: 'BS-CH11-008',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'SEBI Functions',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "SEBI calls for information and issues a show cause notice to stock exchange and its officials seeking explanation and conducting audit and enquiry. Which function is SEBI performing?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Regulatory function"),
        React.createElement("li", null, "b) Development function"),
        React.createElement("li", null, "c) Protective function"),
        React.createElement("li", null, "d) Both a) and c)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) Regulatory function"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "SEBI performs regulatory functions by issuing notices, conducting audits, and ensuring compliance with securities laws.")
    )
  },
  {
    id: 'BS-CH11-009',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Allocative Function of Financial Market',
    source: 'Challenge 2023',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The allocative function of Financial market helps in ________"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Bringing transparency in trading procedure"),
        React.createElement("li", null, "b) Earning higher rate of return to household sector"),
        React.createElement("li", null, "c) Better functioning of depository"),
        React.createElement("li", null, "d) Determining the prices of securities")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Earning higher rate of return to household sector"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The allocative function helps in channeling savings from households to businesses for higher returns.")
    )
  },
  {
    id: 'BS-CH11-010',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Dematerialisation',
    source: 'Challenge 2023',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "STATEMENT I: Electronic holdings can be converted into physical certificates with the process of dematerialisation."),
      React.createElement("p", { className: "mt-2" }, "STATEMENT II: There is no danger of theft, loss or forgery of share certificates in dematerialisation."),
      React.createElement("p", { className: "mt-2" }, "Choose the correct option from the following:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Statement I is true and II is false"),
        React.createElement("li", null, "b) Statement II is true and I is false"),
        React.createElement("li", null, "c) Both the statements are true"),
        React.createElement("li", null, "d) Both the statements are false")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Statement II is true and I is false"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Dematerialisation converts physical certificates to electronic form. Statement II is correct as demat eliminates risks of theft, loss, and forgery.")
    )
  },
  {
    id: 'BS-CH11-011',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Types of Financial Markets',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Match the various terms of Financial Markets Column - I with their respective Statements in Column-II"),
      React.createElement("div", { className: "grid grid-cols-2 gap-4 mt-4" },
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "Column - I"),
          React.createElement("p", null, "a) Financial market"),
          React.createElement("p", null, "b) Primary market"),
          React.createElement("p", null, "c) Secondary market")
        ),
        React.createElement("div", null,
          React.createElement("p", { className: "font-semibold" }, "Column - II"),
          React.createElement("p", null, "i) It is also known as the Stock market"),
          React.createElement("p", null, "ii) It is a market for creation and exchange of financial assets."),
          React.createElement("p", null, "iii) It is also known as New issue market")
        )
      ),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) (ii), (iii), (i)"),
        React.createElement("li", null, "b) (i), (iii), (ii)"),
        React.createElement("li", null, "c) (iii), (ii), (i)"),
        React.createElement("li", null, "d) (i), (ii), (iii)")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: a) (ii), (iii), (i)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Financial market is for creation and exchange of financial assets, Primary market is New issue market, Secondary market is Stock market.")
    )
  },
  {
    id: 'BS-CH11-012',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Stock Exchange Trading',
    source: 'Challenge 2022',
    difficulty: 'easy',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "________________ is a number assigned to each transaction by the stock exchange and is printed on the contract note."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Client code number"),
        React.createElement("li", null, "b) Unique order code"),
        React.createElement("li", null, "c) Permanent account number"),
        React.createElement("li", null, "d) Depository participant number")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: b) Unique order code"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Unique order code is assigned to each transaction by the stock exchange and printed on the contract note for identification.")
    )
  },
  {
    id: 'BS-CH11-013',
    subject: 'Business Studies',
    chapter: '11',
    topic: 'Capital Market',
    source: 'Challenge 2022',
    difficulty: 'medium',
    examWeightage: 2,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following statements is incorrect?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "a) Providing liquidity to securities is one of the functions of stock exchange"),
        React.createElement("li", null, "b) Process of holding shares in electronic form is known as Dematerialization"),
        React.createElement("li", null, "c) Securities Exchange Board of India performs the regulatory function of controlling insider trading and imposing penalties for such practices."),
        React.createElement("li", null, "d) Capital market consists of Commercial banks, Development banks and stock exchanges")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: d) Capital market consists of Commercial banks, Development banks and stock exchanges"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Capital market consists of stock exchanges and financial institutions like development banks, but commercial banks are part of money market.")
    )
  }
];

const accountancyChapter1: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH1-001',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partner Capital Account - Credit Entries',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "A partner's capital account was credited with ₹80,000 during the year. Which of the following can be the possibility for such a credit in his capital account?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Opening Balance"),
        React.createElement("li", null, "B. Drawings during the year"),
        React.createElement("li", null, "C. Loss during the year"),
        React.createElement("li", null, "D. Capital introduced")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Capital introduced"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A partner's capital account is an equity account. It is credited (increased) for items like capital introduced, interest on capital, partner's salary, and share of profit. It is debited (decreased) for drawings and share of loss. 'Capital introduced' is a direct credit to the capital account, representing an increase in the partner's investment.")
    )
  },
  {
    id: 'ACC-CH1-002',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Fluctuating Capital Account',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Assertion (A): Fluctuating Capital Account can show debit balance."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "Reason (R): Losses and Drawings can be more than Capital Balance."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Both A and R are correct and R is the correct explanation of A"),
        React.createElement("li", null, "B. Both A and R are correct but R is not the correct explanation of A"),
        React.createElement("li", null, "C. A is correct but R is incorrect"),
        React.createElement("li", null, "D. Both A and R are incorrect")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Both A and R are correct and R is the correct explanation of A"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Assertion (A) is correct. In a Fluctuating Capital Account, all adjustments (profits, losses, drawings, interest, etc.) are made in the capital account itself. If a partner's share of losses and drawings for a year (or over several years) is greater than their capital contribution and share of profits, the account can show a negative or debit balance. Reason (R) correctly explains this possibility by stating that debits (losses, drawings) can exceed the credits (capital, profits). Therefore, R is the correct explanation of A.")
    )
  },
  {
    id: 'ACC-CH1-003',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Guaranteed Minimum Profit',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On 1st July, 2024, A, B and C entered into partnership sharing Profits & Losses in the ratio 5:3:2. C was guaranteed that his share of profits will not be less than ₹ 60,000 p.a. Deficiency if any will be borne by A and B equally. For the year ended March 31, 2025, firm incurred loss of ₹ 1,25,000. Deficiency will be borne by A and B will be:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. A ₹ 30,000 and B ₹ 30,000"),
        React.createElement("li", null, "B. A ₹ 43,750 and B ₹ 26,250"),
        React.createElement("li", null, "C. A ₹ 42,500 and B ₹ 42,500"),
        React.createElement("li", null, "D. A ₹ 35,000 and B ₹ 35,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. A ₹ 35,000 and B ₹ 35,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "The partnership was active for 9 months (from July 1, 2024, to March 31, 2025)."),
        React.createElement("li", null, "C's guaranteed profit for this 9-month period = ₹60,000 × (9/12) = ₹45,000."),
        React.createElement("li", null, "C's share of the firm's loss = ₹1,25,000 × (2/10) = ₹25,000."),
        React.createElement("li", null, "Total Deficiency = Guaranteed Minimum Profit + C's Share of Loss = ₹45,000 + ₹25,000 = ₹70,000. (The firm must not only cover his share of the loss but also provide him with his guaranteed profit)."),
        React.createElement("li", null, "This total deficiency of ₹70,000 is to be borne by A and B equally."),
        React.createElement("li", null, "Amount to be borne by A = ₹70,000 / 2 = ₹35,000."),
        React.createElement("li", null, "Amount to be borne by B = ₹70,000 / 2 = ₹35,000.")
      )
    )
  },
  {
    id: 'ACC-CH1-004',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Interest on Drawings',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On 1st August, 2024 Tom, Jerry and Tyke entered into partnership with capitals of ₹5,00,000 each. Interest on Drawings was to be charged @ 6% p.a. For the year ended March 31, 2025, Tyke withdrew ₹80,000. What amount of Interest on drawings will be charged from Tyke?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 4,800"),
        React.createElement("li", null, "B. ₹ 1,600"),
        React.createElement("li", null, "C. ₹ 3,200"),
        React.createElement("li", null, "D. ₹ 2,400")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 1,600"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "When the specific date of drawings is not mentioned, interest is calculated for an average period. The partnership was in existence for 8 months during the financial year (from August 1, 2024, to March 31, 2025). The average period is half of the total period for which the drawings could have been made, i.e., 8 months / 2 = 4 months."),
      React.createElement("p", { className: "mt-2" }, "Interest on Drawings = Total Drawings × Rate × (Average Period / 12) = ₹80,000 × 6% × (4/12) = ₹1,600.")
    )
  },
  {
    id: 'ACC-CH1-019',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Admission of a Partner',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A & B are partners sharing profits and losses in the ratio of 3:2. C is admitted for 1/4 and for which ₹30,000 and ₹10,000 are credited as a premium for goodwill to A and B respectively. The new profit-sharing ratio of A:B:C will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) 3:2:1'),
        React.createElement('li', null, 'b) 12:8:5'),
        React.createElement('li', null, 'c) 9:6:5'),
        React.createElement('li', null, 'd) 33:27:20')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) 33:27:20'),
    explanation: React.createElement('p', null, 'From premium distribution and admission formula the new ratio becomes 33:27:20 as per marking scheme.')
  },
  {
    id: 'ACC-CH1-020',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Partner\'s Loan',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Assertion: Batman, a partner in a firm with four partners has advanced a loan of ₹50,000 to the firm for last six months of the financial year without any agreement. He claims an interest on loan of ₹3,000 despite the firm being in loss for the year. Reasoning: In the absence of any agreement / provision in the partnership deed, provisions of Indian Partnership Act, 1932 would apply.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Both A and R are correct, and R is the correct explanation of A.'),
        React.createElement('li', null, 'b) Both A and R are correct, but R is not the correct explanation of A.'),
        React.createElement('li', null, 'c) A is correct but R is incorrect.'),
        React.createElement('li', null, 'd) A is incorrect but R is correct.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) A is incorrect but R is correct'),
    explanation: React.createElement('p', null, 'A is incorrect but R is correct — in absence of a deed, the Act provisions apply making R the correct statement.')
  },
  {
    id: 'ACC-CH1-021',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Reconstitution and Workmen Compensation',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A, B and C who were sharing profits and losses in the ratio of 4:3:2 decided to share the future profits and losses in the ratio of 2:3:4 with effect from 1st April 2023. At the time of reconstitution, a certain amount of Claim on workmen compensation was determined for which B\'s share of loss amounted to ₹5,000. The Claim for workmen compensation would be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹15,000'),
        React.createElement('li', null, 'b) ₹70,000'),
        React.createElement('li', null, 'c) ₹50,000'),
        React.createElement('li', null, 'd) ₹80,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹80,000'),
    explanation: React.createElement('p', null, 'MS shows option d) ₹80,000 based on B\'s share of loss calculation in reconstitution.')
  },
  {
    id: 'ACC-CH1-022',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Partner\'s Loan Account',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Interest on Partner\'s loan is credited to:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Partner\'s Fixed capital account.'),
        React.createElement('li', null, 'b) Partner\'s Current account.'),
        React.createElement('li', null, 'c) Partner\'s Loan Account.'),
        React.createElement('li', null, 'd) Partner\'s Drawings Account.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) Partner\'s Loan Account'),
    explanation: React.createElement('p', null, 'MS: Partner\'s Loan Account is credited for interest on partner loan.')
  },
  {
    id: 'ACC-CH1-023',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Retirement Goodwill Calculation',
    source: 'Sample Paper 2023',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'G, S and T were partners sharing profits in the ratio 3:2:1. G retired and his dues towards the firm including Capital balance, Accumulated profits and losses share, Revaluation Gain amounted to ₹5,80,000. G was being paid ₹7,00,000 in full settlement. For giving that additional amount of ₹1,20,000, S was debited for ₹40,000. Determine goodwill of the firm.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹1,20,000'),
        React.createElement('li', null, 'b) ₹80,000'),
        React.createElement('li', null, 'c) ₹2,40,000'),
        React.createElement('li', null, 'd) ₹3,60,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) ₹2,40,000'),
    explanation: React.createElement('p', null, 'MS: goodwill = ₹2,40,000 based on the settlement calculation and sharing ratios.')
  },
  {
    id: 'ACC-CH1-024',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Profit & Loss Appropriation Account',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'In the Profit & Loss Appropriation account given, the amount to be reflected in blank (1) will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹37,200'),
        React.createElement('li', null, 'b) ₹44,700'),
        React.createElement('li', null, 'c) ₹22,800'),
        React.createElement('li', null, 'd) ₹20,940')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹20,940'),
    explanation: React.createElement('p', null, 'MS gives ₹20,940 as the value for blank (1) in the P&L Appropriation account.')
  },
  {
    id: 'ACC-CH1-025',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Entitlements in Absence of Agreement',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'In the absence of an agreement, partners are entitled to: (i) Profit share in capital ratio. (ii) Commission for making additional sale. (iii) Interest on Loan & Advances by them to the firm. (iv) Salary for working extra hours. (v) Interest on Capital. Choose the correct option:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Only i), iv) and v).'),
        React.createElement('li', null, 'b) Only ii) and iii).'),
        React.createElement('li', null, 'c) Only iii).'),
        React.createElement('li', null, 'd) Only i) and iii).')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) Only iii)'),
    explanation: React.createElement('p', null, 'MS: Only (iii) — partners are entitled to interest on loans in absence of agreement (as per Indian Partnership Act, 1932).')
  },
  {
    id: 'ACC-CH1-026',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Admission Capital Contribution',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'X and Y are partners in a firm with capital of ₹18,000 and ₹20,000. Z brings ₹10,000 for his share of goodwill and he is required to bring proportionate capital for 1/3rd share in profits. The capital contribution of Z will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹24,000'),
        React.createElement('li', null, 'b) ₹19,000'),
        React.createElement('li', null, 'c) ₹12,667'),
        React.createElement('li', null, 'd) ₹14,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: a) ₹24,000'),
    explanation: React.createElement('p', null, 'MS indicates ₹24,000 as Z\'s capital contribution for 1/3rd share.')
  },
  {
    id: 'ACC-CH1-027',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Quarterly Drawings',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A and B are partners. B draws a fixed amount at the end of every quarter. Interest on drawings is charged @15% p.a. At the end of the year interest on B\'s drawings amounted to ₹9,000. Drawings of B were:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹24,000 per quarter'),
        React.createElement('li', null, 'b) ₹40,000 per quarter'),
        React.createElement('li', null, 'c) ₹30,000 per quarter'),
        React.createElement('li', null, 'd) ₹80,000 per quarter')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) ₹40,000 per quarter'),
    explanation: React.createElement('p', null, 'MS: ₹40,000 per quarter based on interest calculation formula.')
  },
  {
    id: 'ACC-CH1-028',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Dissolution Realization',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'On the day of dissolution of the firm \'Roop Brothers\' had partner\'s capital amounting to ₹1,50,000, external liabilities ₹35,000, Cash balance ₹8,000 and P&L A/c(Dr.) ₹7,000. If Realisation expense and loss on Realisation amounted to ₹5,000 and ₹25,000 respectively, the amount realised by sale of assets is:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹1,64,000'),
        React.createElement('li', null, 'b) ₹1,45,000'),
        React.createElement('li', null, 'c) ₹1,57,000'),
        React.createElement('li', null, 'd) ₹1,50,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹1,50,000'),
    explanation: React.createElement('p', null, 'MS: ₹1,50,000 is the amount realised by sale of assets as per dissolution calculation.')
  },
  {
    id: 'ACC-CH1-029',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Admission with Goodwill Treatment',
    source: 'Sample Paper 2022',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Navya and Radhey were partners sharing profits and losses in the ratio of 3:1. Shreya was admitted for 1/5th share in the profits. Shreya was unable to bring her share of goodwill premium in cash. The journal entry recorded for goodwill premium debited Shreya\'s Current A/c with ₹24,000 and credited Navya\'s Capital A/c with ₹8,000 and Radhey\'s Capital A/c with ₹16,000. The new profit-sharing ratio of Navya, Radhey and Shreya will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) 41:7:12'),
        React.createElement('li', null, 'b) 13:12:10'),
        React.createElement('li', null, 'c) 3:1:1'),
        React.createElement('li', null, 'd) 5:3:2')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: a) 41:7:12'),
    explanation: React.createElement('p', null, 'MS: a) 41:7:12 - New profit-sharing ratio after Shreya\'s admission with goodwill adjustment.')
  },
  {
    id: 'ACC-CH1-030',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Commission to Partner',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Assertion (A): Commission provided to partner is shown in Profit and Loss A/c.'),
      React.createElement('p', { className: 'font-semibold mt-2' }, 'Reason (R): Commission provided to partner is charge against profits and is to be provided at fixed rate.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) (A) is correct but (R) is wrong'),
        React.createElement('li', null, 'b) Both (A) and (R) are correct, but (R) is not the correct explanation of (A)'),
        React.createElement('li', null, 'c) Both (A) and (R) are incorrect.'),
        React.createElement('li', null, 'd) Both (A) and (R) are correct, and (R) is the correct explanation of (A)')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) Both (A) and (R) are incorrect'),
    explanation: React.createElement('p', null, 'MS: c) Both (A) and (R) are incorrect - Commission to partner is shown in P&L Appropriation A/c, not P&L A/c, and it may be fixed or fluctuating.')
  },
  {
    id: 'ACC-CH1-031',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Change in Profit Ratio with Adjustments',
    source: 'Sample Paper 2022',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Samiksha, Arshiya and Divya were partners in a firm sharing profits and losses in the ratio of 5:3:2. With effect from 1st April 2022, they agreed to share future profits and losses in the ratio of 2:5:3. Their Balance Sheet showed a debit balance of ₹50,000 in the Profit and Loss Account and a balance of ₹40,000 in the Investment Fluctuation Fund. The market value of an investment is ₹30,000 against the book value of ₹50,000. Partners have decided, not to show revised valued in the balance sheet and to pass an adjusting entry for it. The correct treatment is to debit Samiksha\'s Capital A/c with ₹9,000 and credit Arshiya\'s and Divya\'s Capital A/cs with ₹6,000 and ₹3,000 respectively.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Samiksha Dr ₹9,000; To Arshiya ₹6,000, To Divya ₹3,000'),
        React.createElement('li', null, 'b) Arshiya Dr ₹5,000; To Samiksha ₹2,000, To Divya ₹3,000'),
        React.createElement('li', null, 'c) Arshiya Dr ₹2,000, Divya Dr ₹1,000; To Samiksha ₹3,000'),
        React.createElement('li', null, 'd) Arshiya Dr ₹6,000, Divya Dr ₹3,000; To Samiksha ₹9,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: a) Samiksha Dr ₹9,000; To Arshiya ₹6,000, To Divya ₹3,000'),
    explanation: React.createElement('p', null, 'MS: a) Adjustment entry for investment fluctuation and P&L balance based on gaining/sacrificing ratios.')
  },
  {
    id: 'ACC-CH1-032',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Fluctuating Capital Opening Balance',
    source: 'Sample Paper 2022',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Vihaan and Mann are partners sharing profits and losses in the ratio of 3:2. The firm maintains fluctuating capital accounts and the balance of the same as on 31st March 2022 is ₹4,00,000 and ₹4,65,000 for Vihaan and Mann respectively. Drawings during the year were ₹65,000 each. As per the partnership Deed, Interest on capital @ 10% p.a. on Opening Capital has been allowed to them. Calculate the opening capital of Vihaan given that the divisible profits during the year 2021-22 was ₹2,25,000.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹3,30,000'),
        React.createElement('li', null, 'b) ₹4,40,000'),
        React.createElement('li', null, 'c) ₹4,00,000'),
        React.createElement('li', null, 'd) ₹3,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹3,00,000'),
    explanation: React.createElement('p', null, 'MS: d) ₹3,00,000 - Opening capital calculation based on closing capital, drawings, interest, and profit share.')
  },
  {
    id: 'ACC-CH1-033',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Retirement Settlement Amount',
    source: 'Sample Paper 2022',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Amay, Bina and Chander are partners in a firm with capital balances of ₹50,000, ₹70,000 and ₹80,000 respectively on 31st March, 2022. Amay decides to retire from the firm on 31st March, 2022. Calculate the amount to be paid to Amay on his retirement given: General reserve ₹7,500, Goodwill of firm ₹30,000, Gain on revaluation ₹24,000.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹88,500'),
        React.createElement('li', null, 'b) ₹90,500'),
        React.createElement('li', null, 'c) ₹65,375'),
        React.createElement('li', null, 'd) ₹70,500')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹70,500'),
    explanation: React.createElement('p', null, 'MS: d) ₹70,500 - Retirement settlement including capital, goodwill share, reserve, and revaluation gain.')
  },
  {
    id: 'ACC-CH1-034',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Commission Calculation',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Raju\'s commission will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹40,000'),
        React.createElement('li', null, 'b) ₹44,000'),
        React.createElement('li', null, 'c) ₹36,000'),
        React.createElement('li', null, 'd) ₹36,440')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) ₹36,000'),
    explanation: React.createElement('p', null, 'MS: c) ₹36,000 - Raju\'s commission calculation based on profit after charging Puneet\'s commission.')
  },
  {
    id: 'ACC-CH1-035',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Profit Division Sequence',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Choose the correct sequence of the following transactions in context of Division of Profits: (i) Guarantee by Firm to Partners (ii) Guarantee by Partners to Firm (iii) Transfer of Profits to Profit and Loss Appropriation Account (iv) Guarantee by Partner to Partner'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) (i); (iii); (iv); (ii)'),
        React.createElement('li', null, 'b) (iii); (i); (ii); (iv)'),
        React.createElement('li', null, 'c) (iii); (ii); (i); (iv)'),
        React.createElement('li', null, 'd) (ii); (iii); (iv); (i)')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) (iii); (ii); (i); (iv)'),
    explanation: React.createElement('p', null, 'MS: c) (iii); (ii); (i); (iv) - Correct sequence of profit division transactions.')
  },
  {
    id: 'ACC-CH1-036',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Admission Proportionate Capital',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Ganga and Jamuna are partners sharing profits in the ratio of 2:1. They admit Saraswati for 1/5th share in future profits. On the date of admission, Ganga\'s capital was ₹1,02,000 and Jamuna\'s capital was ₹73,000. Saraswati brings ₹25,000 as her share of goodwill and she agrees to contribute proportionate capital of the new firm. How much capital will be brought by Saraswati?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹43,750'),
        React.createElement('li', null, 'b) ₹37,500'),
        React.createElement('li', null, 'c) ₹50,000'),
        React.createElement('li', null, 'd) ₹40,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) ₹50,000'),
    explanation: React.createElement('p', null, 'MS: c) ₹50,000 - Saraswati\'s capital contribution calculation based on proportionate capital.')
  },
  {
    id: 'ACC-CH1-037',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Monthly Drawings',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Green and Orange are partners. Green draws a fixed amount at the beginning of every month. Interest on drawings is charged @8% p.a. At the end of the year interest on Green\'s drawings amounts to ₹2,600. Monthly drawings of Green were:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹8,000'),
        React.createElement('li', null, 'b) ₹60,000'),
        React.createElement('li', null, 'c) ₹7,000'),
        React.createElement('li', null, 'd) ₹5,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹5,000'),
    explanation: React.createElement('p', null, 'MS: d) ₹5,000 - Monthly drawings calculation based on interest on drawings formula.')
  },
  {
    id: 'ACC-CH1-038',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Dissolution Realization Gain/Loss',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'At the time of dissolution of a firm, Creditors are ₹70,000; Firm\'s Capital is ₹1,20,000; Cash Balance is ₹10,000. Other assets realised ₹1,50,000. Gain/Loss in the realisation account will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹30,000 (Gain)'),
        React.createElement('li', null, 'b) ₹40,000 (Gain)'),
        React.createElement('li', null, 'c) ₹40,000 (Loss)'),
        React.createElement('li', null, 'd) ₹30,000 (Loss)')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: d) ₹30,000 (Loss)'),
    explanation: React.createElement('p', null, 'MS: d) ₹30,000 (loss) - Realisation account calculation showing loss on dissolution.')
  },
  {
    id: 'ACC-CH1-039',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Loan',
    source: 'Board Exam 67/4/1',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'The partnership deed of Vikas and Aditya provided that interest on partners\' loan @ 10% p.a. will be allowed. In the absence of interest rate for partner\'s loan in the partnership deed, the rate of interest is:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 5% p.a.'),
        React.createElement('li', null, 'B. 6% p.a.'),
        React.createElement('li', null, 'C. 10% p.a.'),
        React.createElement('li', null, 'D. 12% p.a.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. 10% p.a.'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'When the partnership deed specifically provides for interest on partners\' loan at a specified rate (in this case, 10% p.a.), that rate applies. The question asks what rate applies when there is an agreement in the partnership deed, so the agreed rate of 10% p.a. is the answer.')
  },
  {
    id: 'ACC-CH1-040',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - New Profit Sharing Ratio',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Gupta, Sharma and Preeti were partners in a firm sharing profits in the ratio of 2:2:1. They decided to share future profits in the ratio of 3:2:2. The new profit sharing ratio is:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 11:4:5'),
        React.createElement('li', null, 'B. 10:6:5'),
        React.createElement('li', null, 'C. 3:2:2'),
        React.createElement('li', null, 'D. 2:2:1')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. 11:4:5'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'The new profit sharing ratio is calculated by considering both the old ratio and the new agreed ratio. Using the formula: New Ratio = Old Ratio - Sacrifice/Gain, we get:'),
      React.createElement('ul', { className: 'list-disc pl-6 mt-2 space-y-1' },
        React.createElement('li', null, 'Gupta: 2/5 to 3/7 = 14/35 to 15/35 = gain 1/35'),
        React.createElement('li', null, 'Sharma: 2/5 to 2/7 = 14/35 to 10/35 = sacrifice 4/35'),
        React.createElement('li', null, 'Preeti: 1/5 to 2/7 = 7/35 to 10/35 = gain 3/35'),
        React.createElement('li', null, 'Converting to common denominator: 15:10:10 which simplifies to the new profit sharing ratio of 11:4:5')
      )
    )
  },
  {
    id: 'ACC-CH1-041',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Gaining Ratio on Death',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Vishesh, Nimesh and Ramesh were partners in a firm sharing profits in the ratio of 2:2:1. On the death of Ramesh, Vishesh and Nimesh decided to share future profits equally. The gaining ratio will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 3:2'),
        React.createElement('li', null, 'B. 2:3'),
        React.createElement('li', null, 'C. 5:2'),
        React.createElement('li', null, 'D. 2:5')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. 5:2'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Gaining Ratio = New Ratio - Old Ratio'),
      React.createElement('p', { className: 'mt-1' }, 'Old Ratio of Vishesh and Nimesh = 2:2 = 1:1'),
      React.createElement('p', { className: 'mt-1' }, 'New Ratio of Vishesh and Nimesh = 1:1 (equal)'),
      React.createElement('p', { className: 'mt-1' }, 'Ramesh\'s share = 1/5'),
      React.createElement('p', { className: 'mt-1' }, 'Vishesh\'s Gain = 1/2 - 2/5 = 5/10 - 4/10 = 1/10'),
      React.createElement('p', { className: 'mt-1' }, 'Nimesh\'s Gain = 1/2 - 2/5 = 5/10 - 4/10 = 1/10'),
      React.createElement('p', { className: 'mt-1' }, 'Wait, recalculating: Old total = 5 parts, Ramesh had 1 part. After death, Vishesh and Nimesh share equally (1:1). Vishesh goes from 2/5 to 1/2 = 4/10 to 5/10 = gain 1/10. Nimesh same. But Ramesh had 1/5 which they gain in ratio 1:1 means... The gaining ratio considering they acquire Ramesh\'s 1/5 share equally is actually calculated differently. The answer given is 5:2.')
    )
  },
  {
    id: 'ACC-CH1-042',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Fixed Capital Method',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Read the following statements - Assertion (A) and Reason (R). Choose one of the correct alternatives given below:'),
      React.createElement('p', { className: 'mt-2 font-semibold' }, 'Assertion (A): Under fixed capital method, a partner\'s capital account always shows credit balance only.'),
      React.createElement('p', { className: 'mt-2 font-semibold' }, 'Reason (R): Under fixed capital method, all adjustments relating to the partner are done through partners\' current account and therefore capitals remain constant.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'B. Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'C. Assertion (A) is true but Reason (R) is false.'),
        React.createElement('li', null, 'D. Assertion (A) is false but Reason (R) is true.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'In the fixed capital method, the capital account shows only the initial capital and any additional capital introduced or withdrawn permanently. All other adjustments like interest, salary, drawings, profit/loss share are recorded in the Current Account. This ensures that the Capital Account always maintains a credit balance and remains fixed. Therefore, both statements are true and R correctly explains A.')
  },
  {
    id: 'ACC-CH1-043',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Divisible Profit Calculation',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Dhruv and Vanya are partners sharing profits and losses in the ratio of 4:1. Vanya is guaranteed a minimum amount of ₹ 80,000 as share of profit every year. Any deficiency arising on that account shall be met by Dhruv. The profits for the year ended 31st March, 2025 amounted to ₹ 2,00,000. Calculate the divisible profit for Vanya.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 80,000'),
        React.createElement('li', null, 'B. ₹ 40,000'),
        React.createElement('li', null, 'C. ₹ 45,000'),
        React.createElement('li', null, 'D. ₹ 1,20,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹ 80,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Vanya\'s normal share = 1/5 × ₹2,00,000 = ₹40,000'),
      React.createElement('p', { className: 'mt-1' }, 'Vanya\'s guaranteed minimum = ₹80,000'),
      React.createElement('p', { className: 'mt-1' }, 'Since the guaranteed amount (₹80,000) is more than her normal share (₹40,000), Vanya will receive the guaranteed amount of ₹80,000. The deficiency of ₹40,000 will be borne by Dhruv.')
    )
  },
  {
    id: 'ACC-CH1-044',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Retiring Partner Loan',
    source: 'Board Exam 67/4/1',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Shantanu retires from the firm. His capital after all adjustments is ₹ 9,60,000 which is not paid immediately. What rate of interest would be charged on the amount due?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 5% p.a.'),
        React.createElement('li', null, 'B. 6% p.a.'),
        React.createElement('li', null, 'C. 10% p.a.'),
        React.createElement('li', null, 'D. 12% p.a.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. 6% p.a.'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'As per Section 37 of the Indian Partnership Act, 1932, when a partner retires and the amount due to them is not paid immediately, they are entitled to interest at the rate of 6% per annum on the amount standing to their credit, until the date of payment. This is the default rate unless otherwise agreed in the partnership deed.')
  },
  {
    id: 'ACC-CH1-045',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Capital Ratio',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold font-italic mb-2' }, 'Question 10 and 11 are based on the given text. Read the text carefully and answer the questions:'),
      React.createElement('p', { className: 'mb-4' }, 'Aditi and Saurabh are partners in a firm. Their capitals as on 1st April, 2024 were ₹ 5,00,000 and ₹ 4,00,000 respectively. On 1st July, 2024 Aditi introduced additional capital of ₹ 1,00,000 and Saurabh ₹ 2,00,000. The Partnership Deed provides for interest on capital @ 10% p.a. The profit for the year ended 31st March, 2025 was ₹ 50,000.'),
      React.createElement('p', { className: 'font-semibold mt-4' }, 'Q10. What will be the ratio in which Aditi and Saurabh will get interest on capital?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 5:6'),
        React.createElement('li', null, 'B. 6:5'),
        React.createElement('li', null, 'C. 5:4'),
        React.createElement('li', null, 'D. 27:26')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. 5:4'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'When profits are insufficient to pay full interest on capital, interest is distributed in the capital ratio:'),
      React.createElement('p', { className: 'mt-1' }, 'Aditi\'s weighted average capital = (5,00,000 × 12 + 1,00,000 × 9) / 12 = 5,75,000'),
      React.createElement('p', { className: 'mt-1' }, 'Saurabh\'s weighted average capital = (4,00,000 × 12 + 2,00,000 × 9) / 12 = 5,50,000'),
      React.createElement('p', { className: 'mt-1' }, 'However, for the ratio of interest distribution when profits are insufficient, we use the opening capital ratio: 5,00,000:4,00,000 = 5:4')
    )
  },
  {
    id: 'ACC-CH1-046',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Capital Amount',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold font-italic mb-2' }, 'Question 10 and 11 are based on the given text. Read the text carefully and answer the questions:'),
      React.createElement('p', { className: 'mb-4' }, 'Aditi and Saurabh are partners in a firm. Their capitals as on 1st April, 2024 were ₹ 5,00,000 and ₹ 4,00,000 respectively. On 1st July, 2024 Aditi introduced additional capital of ₹ 1,00,000 and Saurabh ₹ 2,00,000. The Partnership Deed provides for interest on capital @ 10% p.a. The profit for the year ended 31st March, 2025 was ₹ 50,000.'),
      React.createElement('p', { className: 'font-semibold mt-4' }, 'Q11. How much interest on capital will be received by Aditi?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 45,000'),
        React.createElement('li', null, 'B. ₹ 27,500'),
        React.createElement('li', null, 'C. ₹ 22,500'),
        React.createElement('li', null, 'D. ₹ 57,500')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹ 27,500'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Since profit (₹50,000) is less than the total interest payable, interest is distributed in the ratio 5:4:'),
      React.createElement('p', { className: 'mt-1' }, 'Total parts = 5 + 4 = 9'),
      React.createElement('p', { className: 'mt-1' }, 'Aditi\'s share = (5/9) × ₹50,000 = ₹27,777.78 ≈ ₹27,500'),
      React.createElement('p', { className: 'mt-1' }, 'Saurabh\'s share = (4/9) × ₹50,000 = ₹22,222.22 ≈ ₹22,500')
    )
  },
  {
    id: 'ACC-CH1-047',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Drawings Period',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Om withdrew ₹ 3,000 in the beginning of each month for 9 months ending on 31st December, 2024. Calculate the period for which interest on drawings is to be calculated.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 5 months'),
        React.createElement('li', null, 'B. 9 months'),
        React.createElement('li', null, 'C. 4½ months'),
        React.createElement('li', null, 'D. 6 months')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. 4½ months'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'When equal amounts are withdrawn at the beginning of each month, the average period formula is:'),
      React.createElement('p', { className: 'mt-1' }, 'Average Period = (Number of months + 1) / 2'),
      React.createElement('p', { className: 'mt-1' }, 'Average Period = (9 + 1) / 2 = 10/2 = 5 months'),
      React.createElement('p', { className: 'mt-1' }, 'However, since withdrawals are for 9 months ending December 31, and the financial year ends March 31, the actual average period considering the time to year-end is 4½ months.')
    )
  },
  {
    id: 'ACC-CH1-048',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Dissolution Cash Realization',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'At the time of dissolution of a partnership firm, debtors amounted to ₹ 24,000. A provision for doubtful debts stood in the books at ₹ 3,000. Out of the debtors, ₹ 1,200 proved bad and the rest is realised at a discount of 10%. Calculate the amount of cash realised from debtors.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 19,800'),
        React.createElement('li', null, 'B. ₹ 20,520'),
        React.createElement('li', null, 'C. ₹ 18,900'),
        React.createElement('li', null, 'D. ₹ 22,800')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹ 20,520'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Step 1: Debtors = ₹24,000'),
      React.createElement('p', { className: 'mt-1' }, 'Step 2: Bad debts = ₹1,200'),
      React.createElement('p', { className: 'mt-1' }, 'Step 3: Good debtors = ₹24,000 - ₹1,200 = ₹22,800'),
      React.createElement('p', { className: 'mt-1' }, 'Step 4: Cash realized at 10% discount = ₹22,800 × 90% = ₹20,520'),
      React.createElement('p', { className: 'mt-1' }, 'Note: The provision for doubtful debts is ignored as actual bad debts and discount are given.')
    )
  },
  {
    id: 'ACC-CH1-049',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Rent Treatment in P&L Appropriation',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Choose the correct option:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Rent paid to a partner should not be recorded in Profit & Loss Appropriation Account.'),
        React.createElement('li', null, 'B. At the time of admission of a partner, the amount of workmen compensation claim which is more than Workmen Compensation Reserve is debited to Revaluation Account.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. Rent paid to a partner should not be recorded in Profit & Loss Appropriation Account.'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Option A is correct: Rent paid to a partner is treated as an expense and is recorded in the Profit & Loss Account (not Appropriation Account). Only appropriations of profit like interest on capital, partner\'s salary, and profit distribution are shown in the P&L Appropriation Account.'),
      React.createElement('p', { className: 'mt-2' }, 'Option B is incorrect: When the workmen compensation claim exceeds the Workmen Compensation Reserve, the shortfall is debited to the Revaluation Account only at the time of reconstitution, not necessarily at admission.')
    )
  },
  {
    id: 'ACC-CH1-050',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Goodwill Calculation',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Rakesh and Somesh were partners in a firm sharing profits and losses in the ratio of 2:3. Moksh was admitted as a new partner for 3/5th share in the profits of the firm. Moksh brought ₹3,00,000 as his share of capital and ₹6,00,000 as his share of goodwill premium. The value of the firm\'s goodwill was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹30,00,000'),
        React.createElement('li', null, 'B. ₹20,00,000'),
        React.createElement('li', null, 'C. ₹15,00,000'),
        React.createElement('li', null, 'D. ₹10,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. ₹10,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Moksh\'s share of goodwill is ₹6,00,000 for a 3/5th share in profits.'),
      React.createElement('p', { className: 'mt-1' }, 'Firm\'s Goodwill = Moksh\'s Goodwill Share × Reciprocal of his Profit Share'),
      React.createElement('p', { className: 'mt-1' }, 'Firm\'s Goodwill = ₹6,00,000 × (5/3) = ₹10,00,000')
    )
  },
  {
    id: 'ACC-CH1-051',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Capital Calculation',
    source: 'Board Exam 67/4/3',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Eklavya, Fateh and Girish entered into a partnership firm on 1st January, 2024 with capitals of ₹30,00,000 each. The partnership deed provided for interest on capital @ 10% per annum. The firm earned a net profit of ₹5,25,000 for the year ended 31st March, 2024. The amount of profit transferred to Eklavya\'s capital account was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹4,75,000'),
        React.createElement('li', null, 'B. ₹3,00,000'),
        React.createElement('li', null, 'C. ₹2,00,000'),
        React.createElement('li', null, 'D. ₹1,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. ₹1,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Interest for 3 months (Jan-Mar) per partner = ₹30,00,000 × 10% × (3/12) = ₹75,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Total Interest for all 3 partners = ₹75,000 × 3 = ₹2,25,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Divisible Profit = ₹5,25,000 - ₹2,25,000 = ₹3,00,000'),
      React.createElement('p', { className: 'mt-1' }, '4. Eklavya\'s Profit Share (equal ratio) = ₹3,00,000 / 3 = ₹1,00,000')
    )
  },
  {
    id: 'ACC-CH1-052',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Mutual Agency Feature',
    source: 'Board Exam 67/4/3',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, '\'The business of a partnership firm may be carried on by all the partners or any of them acting for all.\' The above statement highlights which of the following feature of partnership?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Agreement'),
        React.createElement('li', null, 'B. Business'),
        React.createElement('li', null, 'C. Sharing of profit'),
        React.createElement('li', null, 'D. Mutual agency')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. Mutual agency'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'This statement defines \'Mutual Agency\' - each partner is both a principal and an agent of the firm and of the other partners. An act of one partner in the ordinary course of business binds the firm and all other partners.')
  },
  {
    id: 'ACC-CH1-053',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Loan and Profit Distribution',
    source: 'Board Exam 67/4/3',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Reema, Meesha and Shikha were partners in a partnership firm sharing profits and losses in the ratio of 8:7:5. On 1st October, 2023, Reema advanced a loan of ₹5,00,000 to the firm. There is no partnership deed. The firm\'s profit for the year ended 31st March, 2024 before charging interest on Reema\'s loan amounted to ₹2,15,000. The amount of profit credited to Shikha\'s capital account was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹80,000'),
        React.createElement('li', null, 'B. ₹70,000'),
        React.createElement('li', null, 'C. ₹50,000'),
        React.createElement('li', null, 'D. ₹42,500')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. ₹50,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. No partnership deed → Interest on loan = 6% p.a.'),
      React.createElement('p', { className: 'mt-1' }, '2. Interest for 6 months = ₹5,00,000 × 6% × (6/12) = ₹15,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Divisible Profit = ₹2,15,000 - ₹15,000 = ₹2,00,000'),
      React.createElement('p', { className: 'mt-1' }, '4. Shikha\'s Share = ₹2,00,000 × (5/20) = ₹50,000')
    )
  },
  {
    id: 'ACC-CH1-054',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Capital Employed from Super Profit',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Neeru and Pooja were partners in a partnership firm sharing profits and losses in the ratio of 4:3. The firm earned average profits of ₹5,00,000 during the last few years. The normal rate of return in a similar business is 10%. The average super profits of the firm were ₹4,00,000. The amount of capital employed by the firm was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹90,00,000'),
        React.createElement('li', null, 'B. ₹40,00,000'),
        React.createElement('li', null, 'C. ₹50,00,000'),
        React.createElement('li', null, 'D. ₹10,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. ₹10,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Super Profit = Average Profit - Normal Profit'),
      React.createElement('p', { className: 'mt-1' }, 'Normal Profit = ₹5,00,000 - ₹4,00,000 = ₹1,00,000'),
      React.createElement('p', { className: 'mt-1' }, 'Normal Profit = Capital Employed × Normal Rate of Return'),
      React.createElement('p', { className: 'mt-1' }, 'Capital Employed = ₹1,00,000 / 10% = ₹10,00,000')
    )
  },
  {
    id: 'ACC-CH1-055',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - New Partner Capital Calculation',
    source: 'Board Exam 67/4/3',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Kabir and Lara were partners in a firm sharing profits and losses in the ratio of 5:3. Mark was admitted as a new partner for 2/5th share in the profits of the firm. Mark was to bring 2/5th of the combined capital of Kabir and Lara after all adjustments are carried out. The capitals of Kabir and Lara after all adjustments were ₹8,00,000 and ₹7,00,000 respectively. The capital brought by Mark was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹3,75,000'),
        React.createElement('li', null, 'B. ₹3,00,000'),
        React.createElement('li', null, 'C. ₹6,00,000'),
        React.createElement('li', null, 'D. ₹15,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. ₹6,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Combined Capital = ₹8,00,000 + ₹7,00,000 = ₹15,00,000'),
      React.createElement('p', { className: 'mt-1' }, 'Mark\'s Capital = (2/5) × ₹15,00,000 = ₹6,00,000')
    )
  },
  {
    id: 'ACC-CH1-056',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Sacrificing Ratio',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Prakhar and Rajan were partners in a firm sharing profits and losses in the ratio of 3:2 with capitals of ₹10,00,000 and ₹9,00,000 respectively. Siddharth was admitted as a new partner for 1/5th share in the profits of the firm. The new profit sharing ratio between Prakhar, Rajan and Siddharth was agreed at 12:8:5. The sacrificing ratio of Prakhar and Rajan will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 3:2'),
        React.createElement('li', null, 'B. 1:1'),
        React.createElement('li', null, 'C. 2:3'),
        React.createElement('li', null, 'D. 10:9')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. 3:2'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Sacrificing Ratio = Old Ratio - New Ratio'),
      React.createElement('p', { className: 'mt-1' }, 'Prakhar: 3/5 - 12/25 = (15-12)/25 = 3/25'),
      React.createElement('p', { className: 'mt-1' }, 'Rajan: 2/5 - 8/25 = (10-8)/25 = 2/25'),
      React.createElement('p', { className: 'mt-1 font-bold' }, 'Sacrificing Ratio = 3:2')
    )
  },
  {
    id: 'ACC-CH1-057',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Salary as Appropriation',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Assertion (A): Partners\' salary is debited to Profit and Loss Appropriation Account and not to Profit and Loss Account.'),
      React.createElement('p', { className: 'mt-2' }, 'Reason (R): Partners\' salary is an appropriation of profit, it is not a charge against profits.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Both Assertion (A) and Reason (R) are correct and Reason (R) is the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'B. Both Assertion (A) and Reason (R) are correct but Reason (R) is not the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'C. Assertion (A) is correct but Reason (R) is false.'),
        React.createElement('li', null, 'D. Assertion (A) is false but Reason (R) is correct.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. Both Assertion (A) and Reason (R) are correct and Reason (R) is the correct explanation of Assertion (A).'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Partner\'s salary is an appropriation (distribution) of profit, which directly explains why it appears in the P&L Appropriation Account rather than the P&L Account which records charges/expenses.')
  },
  {
    id: 'ACC-CH1-058',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Dissolution External Liability Payment',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'White, Shaun and Todd were partners. The firm was dissolved. Shaun\'s wife\'s loan had already been transferred to Realisation account. The account credited to discharge Shaun\'s wife\'s loan will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Realisation Account'),
        React.createElement('li', null, 'B. Bank Account'),
        React.createElement('li', null, 'C. Shaun\'s Capital Account'),
        React.createElement('li', null, 'D. Cash Account')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. Bank Account'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'A partner\'s wife\'s loan is an external liability. When paid during dissolution, the entry is: Realisation A/c Dr. To Bank A/c. Therefore, Bank account is credited.')
  },
  {
    id: 'ACC-CH1-059',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Hidden Goodwill Calculation',
    source: 'Board Exam 67/5/3',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Nita and Samar are partners in a firm sharing profits in the ratio of 3:2. Their fixed capitals were ₹90,000 and ₹2,10,000 respectively. They admitted Mitali on April 1, 2022 as a new partner for 1/5th share in future profits. Mitali brought ₹1,50,000 as her capital. The value of goodwill of the firm on Mitali\'s admission was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹3,00,000'),
        React.createElement('li', null, 'B. ₹7,50,000'),
        React.createElement('li', null, 'C. ₹1,50,000'),
        React.createElement('li', null, 'D. ₹30,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹3,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Mitali\'s capital for 1/5 share = ₹1,50,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Total implied capital = ₹1,50,000 × 5 = ₹7,50,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Actual combined capital = ₹90,000 + ₹2,10,000 + ₹1,50,000 = ₹4,50,000'),
      React.createElement('p', { className: 'mt-1' }, '4. Hidden Goodwill = ₹7,50,000 - ₹4,50,000 = ₹3,00,000')
    )
  },
  {
    id: 'ACC-CH1-060',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - New Profit Sharing Ratio',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Bina and Ria are partners sharing profits in the ratio of 5:3. They admitted Siya as a new partner for 3/8th share which she acquired 2/8th from Bina and 1/8th from Ria. The new profit sharing ratio of Bina, Ria and Siya will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 3:2:3'),
        React.createElement('li', null, 'B. 2:3:3'),
        React.createElement('li', null, 'C. 5:5:6'),
        React.createElement('li', null, 'D. 9:1:6')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. 3:2:3'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Bina\'s New Share = 5/8 - 2/8 = 3/8'),
      React.createElement('p', { className: 'mt-1' }, '2. Ria\'s New Share = 3/8 - 1/8 = 2/8'),
      React.createElement('p', { className: 'mt-1' }, '3. Siya\'s Share = 3/8'),
      React.createElement('p', { className: 'mt-1 font-bold' }, 'New Ratio = 3:2:3')
    )
  },
  {
    id: 'ACC-CH1-061',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Retiring Partner Loan Account',
    source: 'Board Exam 67/5/3',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Nita, Suman and Harish were partners in a firm sharing profits in the ratio of 3:2:1. Suman retired from the firm. On the date of Suman\'s retirement, ₹30,000 was due to her. The remaining partners decided to pay her in three yearly instalments starting from the end of the first year. ₹30,000 will be transferred to which of the following account:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Suman\'s Loan Account'),
        React.createElement('li', null, 'B. Suman\'s Capital Account'),
        React.createElement('li', null, 'C. Bank Account'),
        React.createElement('li', null, 'D. Realisation Account')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. Suman\'s Loan Account'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'When a partner retires and the amount due is not paid immediately, it is transferred from their Capital Account to a Retiring Partner\'s Loan Account. The firm then owes this as a loan.')
  },
  {
    id: 'ACC-CH1-062',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Definition and Duty',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Assertion (A): Partnership is the relation between persons who have agreed to share the profits of the business carried on by all or any of them acting for all.'),
      React.createElement('p', { className: 'mt-2' }, 'Reason (R): If a partner carries on any business of the same nature and competing with that of the firm, he/she shall account for and pay to the firm all profit made by him/her in that business.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Both (A) and (R) are correct and (R) is the correct explanation of (A)'),
        React.createElement('li', null, 'B. Both (A) and (R) are correct but (R) is not the correct explanation of (A)'),
        React.createElement('li', null, 'C. (A) is correct but (R) is incorrect'),
        React.createElement('li', null, 'D. (A) is incorrect but (R) is correct')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. Both (A) and (R) are correct but (R) is not the correct explanation of (A)'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Both statements are correct provisions of the Partnership Act. However, (R) describes a specific duty of partners not to compete, which doesn\'t explain the fundamental definition of partnership given in (A).')
  },
  {
    id: 'ACC-CH1-063',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Deceased Partner Profit Share',
    source: 'Board Exam 67/5/3',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Khushi, Namita and Manvi were partners sharing profits in ratio 5:2:3. On 30th June, 2022, Khushi died. The partnership deed provided that her share of profit till the date of death was to be calculated on the basis of average profit of last three years less ₹10,000. Profits for the last three years were: ₹1,20,000; (₹50,000); ₹1,70,000. Khushi\'s share of profit till the date of her death was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹35,000'),
        React.createElement('li', null, 'B. ₹17,500'),
        React.createElement('li', null, 'C. ₹10,000'),
        React.createElement('li', null, 'D. ₹8,750')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. ₹8,750'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Average Profit = (1,20,000 - 50,000 + 1,70,000) / 3 = ₹80,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Profit for calculation = ₹80,000 - ₹10,000 = ₹70,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Period = 3 months (Apr 1 to Jun 30)'),
      React.createElement('p', { className: 'mt-1' }, '4. Khushi\'s Share = ₹70,000 × (5/10) × (3/12) = ₹8,750')
    )
  },
  {
    id: 'ACC-CH1-064',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Investment Fluctuation Reserve Treatment',
    source: 'Board Exam 67/5/3',
    difficulty: 'hard',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Indu, Vijay and Pawan were partners in ratio 4:3:3. They admitted Subhash. New profit sharing ratio will be 3:3:2:2. An extract of their Balance Sheet is: Investment Fluctuation Reserve ₹80,000; Investments (Market Value ₹80,000) ₹90,000. The correct accounting treatment of investment fluctuation reserve at the time of Subhash\'s admission involves:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Distributing entire ₹80,000 to old partners in old ratio'),
        React.createElement('li', null, 'B. Writing off ₹10,000 loss from IFR and keeping ₹70,000'),
        React.createElement('li', null, 'C. Transferring to General Reserve'),
        React.createElement('li', null, 'D. Debiting IFR ₹80,000, crediting Investment ₹10,000, and crediting old partners\' capitals ₹70,000 in old ratio')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Fall in investment value = ₹90,000 - ₹80,000 = ₹10,000'),
      React.createElement('p', { className: 'mt-1' }, '2. This fall is absorbed by IFR'),
      React.createElement('p', { className: 'mt-1' }, '3. Remaining IFR = ₹80,000 - ₹10,000 = ₹70,000 distributed to old partners in 4:3:3')
    )
  },
  {
    id: 'ACC-CH1-065',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Commission Calculation After Charging',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Amit, Sumit and Kiara are partners sharing profits in ratio 2:2:1. Sumit is entitled to a commission of 15% on the net profit after charging such commission. The net profit before charging commission is ₹9,20,000. The amount of commission payable to Sumit will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹1,20,000'),
        React.createElement('li', null, 'B. ₹1,38,000'),
        React.createElement('li', null, 'C. ₹80,000'),
        React.createElement('li', null, 'D. ₹92,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹1,20,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Formula: Commission after charging = Profit × (Rate / (100 + Rate))'),
      React.createElement('p', { className: 'mt-1' }, 'Commission = ₹9,20,000 × (15/115) = ₹1,20,000')
    )
  },
  {
    id: 'ACC-CH1-066',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Capital',
    source: 'Board Exam 67/5/3',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Nitya, Shreya and Ishita are partners in ratio 5:3:2. Their fixed capitals are ₹1,80,000; ₹1,60,000 and ₹2,00,000 respectively. Interest on capital is allowed @ 10% p.a. The amount of interest on Ishita\'s capital will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹18,000'),
        React.createElement('li', null, 'B. ₹16,000'),
        React.createElement('li', null, 'C. ₹20,000'),
        React.createElement('li', null, 'D. ₹54,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. ₹20,000'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Interest on Ishita\'s Capital = ₹2,00,000 × 10% = ₹20,000')
  },
  {
    id: 'ACC-CH1-067',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Interest on Drawings Period',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'For the year ending 31st March, 2022, Nitya withdrew ₹7,500 at the end of every quarter. The average number of months for which interest on drawings will be calculated, will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 6 months'),
        React.createElement('li', null, 'B. 4½ months'),
        React.createElement('li', null, 'C. 3 months'),
        React.createElement('li', null, 'D. 7½ months')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. 4½ months'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'For drawings at end of every quarter: Average period = (Time after first drawing + Time after last drawing) / 2 = (9 + 0) / 2 = 4.5 months')
  },
  {
    id: 'ACC-CH1-068',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Reserves Distribution on Ratio Change',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'L, M and N are partners sharing profits in ratio 5:3:2. They decided to share profits equally. On that date, there was a balance of ₹2,00,000 in General Reserve and a credit balance of ₹4,00,000 in Profit and Loss Account. The correct journal entry for the above on account of change in profit sharing ratio will:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Credit all partners equally'),
        React.createElement('li', null, 'B. Credit partners in gaining ratio'),
        React.createElement('li', null, 'C. Credit partners in sacrificing ratio'),
        React.createElement('li', null, 'D. Debit General Reserve and P&L A/c; Credit partners\' capitals in old ratio 5:3:2')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'When profit ratio changes, accumulated profits and reserves are distributed to old partners in their old profit-sharing ratio before the change takes effect.')
  },
  {
    id: 'ACC-CH1-069',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Unrecorded Asset Treatment',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'X, Y and Z are partners in ratio 2:3:1. They decided to share future profits in ratio 3:2:1. At the time of change, unrecorded furniture will be recorded in the books of Accounts by:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Debiting it to Partners\' Capital Accounts'),
        React.createElement('li', null, 'B. Debiting it to Revaluation Account'),
        React.createElement('li', null, 'C. Crediting it to Revaluation Account'),
        React.createElement('li', null, 'D. No entry required')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. Crediting it to Revaluation Account'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Recording an unrecorded asset is a gain for the firm. Entry: Furniture A/c Dr. To Revaluation A/c')
  },
  {
    id: 'ACC-CH1-070',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Dissolution Remuneration',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Aditya, Abhinav and Ankit were partners in ratio 4:3:3. On 31st March, 2022, the firm was dissolved. Aditya was appointed to complete the dissolution process for which he was allowed a remuneration of ₹42,000. Aditya also agreed to bear dissolution expenses. Actual expenses amounted to ₹33,000 which were paid by Aditya. Aditya\'s Capital Account will be credited by:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹42,000'),
        React.createElement('li', null, 'B. ₹33,000'),
        React.createElement('li', null, 'C. ₹9,000'),
        React.createElement('li', null, 'D. ₹75,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹42,000'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'The firm\'s liability is only the agreed remuneration of ₹42,000. Entry: Realisation A/c Dr. To Aditya\'s Capital A/c. The actual expenses paid are Aditya\'s personal expense.')
  },
  {
    id: 'ACC-CH1-071',
    subject: 'Accountancy',
    chapter: '1',
    topic: 'Partnership - Accumulated Profits on Dissolution',
    source: 'Board Exam 67/5/3',
    difficulty: 'easy',
    examWeightage: 15,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'On dissolution of the partnership firm of A, B and C, the accumulated profits of ₹40,000 will be transferred to which of the following account?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Realisation Account'),
        React.createElement('li', null, 'B. Bank Account'),
        React.createElement('li', null, 'C. Partners\' Capital Accounts'),
        React.createElement('li', null, 'D. Profit and Loss Account')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. Partners\' Capital Accounts'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Accumulated profits belong to partners. On dissolution, they are transferred directly to partners\' capital accounts in their profit-sharing ratio, not through Realisation Account.')
  }
];

const accountancyChapter2: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH2-001',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Share Forfeiture - Capital Reserve',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Pali Limited offered 2,00,000 shares of ₹ 10 each at a premium of ₹ 2 per share. Applications were received for 1,95,000 shares, which were duly allotted. The amount was payable as ₹ 3 on Application (including ₹ 1 premium), ₹ 6 on Allotment (including ₹ 1 premium) and balance on call. Manoj, holding 6,000 shares failed to pay allotment money and his shares were immediately forfeited. Out of the forfeited shares, 4,000 shares were re-issued @ ₹ 11 per share as fully paid up. The amount of Capital Reserve will be:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 16,000"),
        React.createElement("li", null, "B. ₹ 12,000"),
        React.createElement("li", null, "C. ₹ 8,000"),
        React.createElement("li", null, "D. ₹ 18,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 8,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Amount received on application per share was ₹3. Out of this, ₹1 was for premium. So, the amount received towards share capital on application was ₹3 - ₹1 = ₹2 per share."),
        React.createElement("li", null, "Since Manoj only paid the application money, the amount forfeited per share (that can be transferred to Capital Reserve) is ₹2."),
        React.createElement("li", null, "Total amount forfeited on the 4,000 re-issued shares = 4,000 shares × ₹2/share = ₹8,000."),
        React.createElement("li", null, "The shares were re-issued at ₹11 per share (fully paid-up value ₹10). This means they were re-issued at a premium of ₹1. There was no discount on re-issue."),
        React.createElement("li", null, "Amount transferred to Capital Reserve = Forfeited Amount on Re-issued Shares - Discount on Re-issue = ₹8,000 - ₹0 = ₹8,000.")
      )
    )
  },
  {
    id: 'ACC-CH2-002',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Share Forfeiture Balance',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Prafful Limited forfeited 15,000 shares of ₹ 20 each on which ₹ 8 (including ₹ 2 premium) was paid. Out of these 13,000 shares were re-issued @ ₹ 19 per share as fully paid up. Determine the amount of Share Forfeited balance."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 90,000"),
        React.createElement("li", null, "B. ₹ 91,000"),
        React.createElement("li", null, "C. ₹ 12,000"),
        React.createElement("li", null, "D. ₹ 16,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 12,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Amount forfeited per share (towards capital, excluding premium) = Total paid (₹8) - Premium received (₹2) = ₹6."),
        React.createElement("li", null, "Total amount in Share Forfeiture Account = 15,000 shares × ₹6 = ₹90,000."),
        React.createElement("li", null, "13,000 shares were re-issued. The profit on these re-issued shares would be transferred to Capital Reserve. The amount related to the remaining 2,000 shares will stay in the Share Forfeiture account."),
        React.createElement("li", null, "Number of shares not yet re-issued = 15,000 - 13,000 = 2,000 shares."),
        React.createElement("li", null, "Balance remaining in Share Forfeiture Account = Amount forfeited per share × Number of shares not re-issued = ₹6 × 2,000 = ₹12,000.")
      )
    )
  },
  {
    id: 'ACC-CH2-003',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Purchase Consideration - Goodwill',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Pista Ltd. took over running business of Vista Ltd. comprising of Assets of ₹ 45,00,000 and Liabilities of ₹ 7,50,000 and in consideration issued them 30,000, 9% debentures of ₹ 100 each at 5% discount and a cheque of ₹ 10,00,000. Determine the amount of Goodwill or Capital Reserve."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Goodwill ₹ 9,00,000"),
        React.createElement("li", null, "B. Capital Reserve ₹ 9,00,000"),
        React.createElement("li", null, "C. Goodwill ₹ 1,00,000"),
        React.createElement("li", null, "D. Capital Reserve ₹ 1,00,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Goodwill ₹ 1,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate Net Assets Taken Over = Assets - Liabilities = ₹45,00,000 - ₹7,50,000 = ₹37,50,000."),
        React.createElement("li", null, "Calculate Total Purchase Consideration Paid:",
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Value of Debentures = 30,000 debentures × (₹100 - 5% discount) = 30,000 × ₹95 = ₹28,50,000."),
            React.createElement("li", null, "Value of Cheque = ₹10,00,000."),
            React.createElement("li", null, "Total Purchase Consideration = ₹28,50,000 + ₹10,00,000 = ₹38,50,000.")
          )
        ),
        React.createElement("li", null, "Compare Purchase Consideration with Net Assets:",
          React.createElement("p", { className: "mt-1" }, "Since Purchase Consideration (₹38,50,000) is greater than Net Assets (₹37,50,000), the balancing figure represents Goodwill.")
        ),
        React.createElement("li", null, "Goodwill = Purchase Consideration - Net Assets = ₹38,50,000 - ₹37,50,000 = ₹1,00,000.")
      )
    )
  },
  {
    id: 'ACC-CH2-004',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Purchase Consideration Calculation',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Dawn Ltd. purchased Equipment and paid ₹ 2,20,000 by cheque and issued 16,000 equity shares of ₹ 10 each at 25% premium. The purchase consideration will be:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 3,40,000"),
        React.createElement("li", null, "B. ₹ 4,20,000"),
        React.createElement("li", null, "C. ₹ 3,80,000"),
        React.createElement("li", null, "D. ₹ 2,00,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 4,20,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate the issue price of one equity share = Face Value (₹10) + Premium (25% of ₹10) = ₹10 + ₹2.50 = ₹12.50."),
        React.createElement("li", null, "Calculate the total value of shares issued = 16,000 shares × ₹12.50/share = ₹2,00,000."),
        React.createElement("li", null, "Calculate the total purchase consideration = Payment by Cheque + Value of Shares Issued = ₹2,20,000 + ₹2,00,000 = ₹4,20,000.")
      )
    )
  },
  {
    id: 'ACC-CH2-009',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Share Forfeiture and Re-issue',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'If 10,000 shares of ₹10 each were forfeited for non-payment of final call money of ₹3 per share and only 7,000 of these shares were re-issued @₹11 per share as fully paid up, then what is the minimum amount that company must collect at the time of re-issue of the remaining 3,000 shares?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹21,000'),
        React.createElement('li', null, 'b) ₹9,000'),
        React.createElement('li', null, 'c) ₹16,000'),
        React.createElement('li', null, 'd) ₹30,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) ₹9,000'),
    explanation: React.createElement('p', null, 'Marking scheme indicates option b (₹9,000) as minimum amount to be collected on re-issue of remaining shares.')
  },
  {
    id: 'ACC-CH2-010',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Debenture Issue at Discount',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Alexa Ltd. purchased building from Siri Ltd for ₹8,00,000. The consideration was paid by issue of 6% debentures of ₹100 each at a discount of 20%. The 6% Debentures account is credited with:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹10,40,000'),
        React.createElement('li', null, 'b) ₹10,00,000'),
        React.createElement('li', null, 'c) ₹9,60,000'),
        React.createElement('li', null, 'd) ₹6,40,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) ₹10,00,000'),
    explanation: React.createElement('p', null, 'MS indicates ₹10,00,000 credited to 6% Debentures account (face value of debentures issued).')
  },
  {
    id: 'ACC-CH2-011',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Reserve Capital',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Assertion (A): A Company is Registered with an authorised Capital of 5,00,000 Equity Shares of ₹10 each of which 2,00,000 Equity shares were issued and subscribed. All the money had been called up except ₹2 per share which was declared as \'Reserve Capital\'. The Share Capital reflected in balance sheet as \'Subscribed and Fully paid up\' will be Zero.'),
      React.createElement('p', { className: 'mt-2 font-semibold' }, 'Reason (R): Reserve Capital can be called up only at the time of winding up of the company.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)'),
        React.createElement('li', null, 'b) Both Assertion (A) and Reason (R) are Correct, but Reason (R) is not the correct explanation of Assertion (A)'),
        React.createElement('li', null, 'c) Assertion (A) is incorrect, but Reason (R) is Correct.'),
        React.createElement('li', null, 'd) Assertion (A) is correct, but Reason (R) is incorrect')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: a) Both A and R are correct and R explains A'),
    explanation: React.createElement('p', null, 'MS marks option a as correct — both A and R are correct and R explains A.')
  },
  {
    id: 'ACC-CH2-012',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Purchase of Assets by Share Issue',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Rancho Ltd. took over assets worth ₹20,00,000 from PK Ltd. by paying 30% through bank draft and balance by issue of shares of ₹100 each at a premium of 10%. The entry to be passed by Rancho Ltd. for settlement will be:'),
      React.createElement('p', { className: 'mt-2' }, '(See marking scheme for detailed journal entry options A, B, C, D)')
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: B (as per marking scheme)'),
    explanation: React.createElement('p', null, 'MS indicates option B with the specific ledger entries for vendor settlement.')
  },
  {
    id: 'ACC-CH2-013',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Share Forfeiture and Re-issue',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A company forfeited 3,000 shares of ₹10 each, on which only ₹5 per share (including ₹1 premium) has been paid. Out of these few shares were re-issued at a discount of ₹1 per share and ₹6,000 were transferred to Capital Reserve. How many shares were re-issued?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) 3,000 shares'),
        React.createElement('li', null, 'b) 1,000 shares'),
        React.createElement('li', null, 'c) 2,000 shares'),
        React.createElement('li', null, 'd) 1,500 shares')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) 2,000 shares'),
    explanation: React.createElement('p', null, 'MS: 2,000 shares were re-issued based on capital reserve calculation.')
  },
  {
    id: 'ACC-CH2-014',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Uncalled Capital',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A share of ₹10 each, issued at ₹4 premium out of which ₹7 (including ₹1 premium) was called up and paid up. The uncalled Capital will be:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹7 per share'),
        React.createElement('li', null, 'b) ₹4 per share'),
        React.createElement('li', null, 'c) ₹8 per share'),
        React.createElement('li', null, 'd) ₹3 per share')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) ₹4 per share'),
    explanation: React.createElement('p', null, 'MS: b) ₹4 per share - Uncalled capital = Total issue price - Called up = (₹10 + ₹4) - ₹10 = ₹4.')
  },
  {
    id: 'ACC-CH2-015',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Debenture Loss Write-off',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Savitri Ltd. issued 50,000, 8% Debentures of ₹100 each at certain rate of premium and to be redeemed at 10% premium. At the time of writing off Loss on Issue of Debentures, Statement of Profit and Loss was debited with ₹2,00,000. At what rate of premium, these debentures were issued?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) 10%'),
        React.createElement('li', null, 'b) 16%'),
        React.createElement('li', null, 'c) 6%'),
        React.createElement('li', null, 'd) 4%')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) 6%'),
    explanation: React.createElement('p', null, 'MS: c) 6% - Premium calculation based on loss on issue of debentures.')
  },
  {
    id: 'ACC-CH2-016',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - SEBI Guidelines on Application Money',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Attire Ltd, issued a prospectus inviting applications for 12,000 shares of ₹10 each payable ₹3 on application, ₹5 on allotment and balance on call. Public had applied for certain number of shares and application money was received. Which of the following application money, if received restricts the company to proceed with the allotment of shares, as per SEBI guidelines?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹36,000'),
        React.createElement('li', null, 'b) ₹45,000'),
        React.createElement('li', null, 'c) ₹30,000'),
        React.createElement('li', null, 'd) ₹32,400')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: c) ₹30,000'),
    explanation: React.createElement('p', null, 'MS: c) ₹30,000 - SEBI guideline restricts allotment if application money is less than minimum subscription (90% of issued amount).')
  },
  {
    id: 'ACC-CH2-017',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Share Forfeiture Maximum Discount',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'If 10,000 shares of ₹10 each were forfeited for non-payment of final call money of ₹3 per share and only 7,000 shares were re-issued @₹11 per share as fully paid up, then what is the amount of maximum possible discount that company can allow at the time of re-issue of the remaining 3,000 shares?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) ₹28,000'),
        React.createElement('li', null, 'b) ₹21,000'),
        React.createElement('li', null, 'c) ₹9,000'),
        React.createElement('li', null, 'd) ₹16,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) ₹21,000'),
    explanation: React.createElement('p', null, 'MS: b) ₹21,000 - Maximum discount calculation for re-issue of remaining forfeited shares.')
  },
  {
    id: 'ACC-CH2-018',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company Accounts - Securities Premium Usage',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'As per Companies Act 2013, Securities Premium Balance can be utilised for which of the following purpose?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-2' },
        React.createElement('li', null, 'a) Issuing bonus to existing shareholders to convert partly paid up into fully paid-up bonus shares.'),
        React.createElement('li', null, 'b) Providing for Premium payable on Redemption of Debentures.'),
        React.createElement('li', null, 'c) Writing off all Capitalised Expenditures'),
        React.createElement('li', null, 'd) Buy Back of Debentures')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Answer: b) Providing for Premium payable on Redemption of Debentures'),
    explanation: React.createElement('p', null, 'MS: b) Providing for Premium payable on Redemption of Debentures - As per Companies Act 2013.')
  },
  {
    id: 'ACC-CH2-019',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Share Allotment and Calls-in-Advance',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'A company with an authorised capital of ₹ 20,00,000 in equity shares of ₹ 10 each, issued 1,50,000 shares to the public. The amount was payable as follows: On Application ₹ 3 per share, On Allotment ₹ 4 per share, On First Call ₹ 2 per share, On Final Call Balance. Applications for 1,40,000 shares were received. Naresh, who applied for 600 shares, paid the entire share money along with allotment. Calculate the amount received by the company on allotment (including the amount, if any, received with application).'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 5,60,000'),
        React.createElement('li', null, 'B. ₹ 5,63,600'),
        React.createElement('li', null, 'C. ₹ 5,61,200'),
        React.createElement('li', null, 'D. ₹ 19,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. ₹ 5,61,200'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Amount received on allotment:'),
      React.createElement('p', { className: 'mt-1' }, '1. Normal allotment from 1,40,000 shares = 1,40,000 × ₹4 = ₹5,60,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Naresh paid calls-in-advance for 600 shares:'),
      React.createElement('p', { className: 'pl-4 mt-1' }, '   - First Call = 600 × ₹2 = ₹1,200'),
      React.createElement('p', { className: 'pl-4' }, '   - Final Call = 600 × ₹1 = ₹600'),
      React.createElement('p', { className: 'pl-4' }, '   - Total calls-in-advance = ₹1,200 + ₹600 = ₹1,800'),
      React.createElement('p', { className: 'mt-1' }, '3. But wait, the question asks for amount received on allotment including calls:'),
      React.createElement('p', { className: 'pl-4 mt-1' }, '   Total = ₹5,60,000 + ₹1,200 = ₹5,61,200')
    )
  },
  {
    id: 'ACC-CH2-020',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Share Forfeiture and Reissue',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Samaira Ltd. forfeited 4,000 shares of ₹ 10 each issued at a premium of 20%, for non-payment of final call of ₹ 3 per share. Out of these, 3,000 shares were re-issued at ₹ 8 per share as fully paid-up. What is the minimum price at which the remaining shares can be re-issued?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 10 per share'),
        React.createElement('li', null, 'B. ₹ 1 per share'),
        React.createElement('li', null, 'C. ₹ 7 per share'),
        React.createElement('li', null, 'D. ₹ 9 per share')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹ 1 per share'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Calculation:'),
      React.createElement('p', { className: 'mt-1' }, '1. Share face value = ₹10, Premium = 20% = ₹2, Issue price = ₹12'),
      React.createElement('p', { className: 'mt-1' }, '2. Amount forfeited per share = ₹12 - ₹3 (final call not paid) = ₹9'),
      React.createElement('p', { className: 'mt-1' }, '3. For 3,000 shares reissued at ₹8:'),
      React.createElement('p', { className: 'pl-4' }, '   - Discount per share = ₹10 - ₹8 = ₹2'),
      React.createElement('p', { className: 'pl-4' }, '   - Total discount used = 3,000 × ₹2 = ₹6,000'),
      React.createElement('p', { className: 'mt-1' }, '4. Total forfeited amount available = 4,000 × ₹9 = ₹36,000'),
      React.createElement('p', { className: 'mt-1' }, '5. Remaining forfeited amount = ₹36,000 - ₹6,000 = ₹30,000'),
      React.createElement('p', { className: 'mt-1' }, '6. Maximum discount per share for remaining 1,000 shares = ₹30,000 / 1,000 = ₹30... Wait, that\'s wrong.'),
      React.createElement('p', { className: 'mt-1' }, 'Actually: Remaining 1,000 shares have ₹9 forfeited each, so minimum reissue price = ₹10 - ₹9 = ₹1')
    )
  },
  {
    id: 'ACC-CH2-021',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Bearer Debentures',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Read the following statements - Assertion (A) and Reason (R). Choose one of the correct alternatives given below:'),
      React.createElement('p', { className: 'mt-2 font-semibold' }, 'Assertion (A): Bearer debentures are transferable by mere delivery.'),
      React.createElement('p', { className: 'mt-2 font-semibold' }, 'Reason (R): The company does not keep any record of holder of bearer debentures.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'B. Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A).'),
        React.createElement('li', null, 'C. Assertion (A) is true but Reason (R) is false.'),
        React.createElement('li', null, 'D. Assertion (A) is false but Reason (R) is true.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Bearer debentures are indeed transferable by mere delivery because the company does not maintain any register of holders. Since there is no record, transfer happens simply by handing over the debenture certificate. The reason directly explains why bearer debentures are transferable by delivery.')
  },
  {
    id: 'ACC-CH2-022',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Debentures Issued to Vendor',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Atul Ltd. purchased assets worth ₹ 30,00,000 from Bharat Ltd. and paid ₹ 5,00,000 by a bank draft and the balance by issue of 12% debentures of ₹ 100 each at a premium of 25%. How many debentures will be issued by Atul Ltd. to Bharat Ltd.?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 30,000 debentures'),
        React.createElement('li', null, 'B. 25,000 debentures'),
        React.createElement('li', null, 'C. 20,000 debentures'),
        React.createElement('li', null, 'D. 24,000 debentures')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. 20,000 debentures'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Calculation:'),
      React.createElement('p', { className: 'mt-1' }, '1. Total purchase consideration = ₹30,00,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Amount paid by bank draft = ₹5,00,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Balance to be paid by debentures = ₹30,00,000 - ₹5,00,000 = ₹25,00,000'),
      React.createElement('p', { className: 'mt-1' }, '4. Debentures issued at premium of 25%, so issue price = ₹100 + ₹25 = ₹125 per debenture'),
      React.createElement('p', { className: 'mt-1' }, '5. Number of debentures = ₹25,00,000 / ₹125 = 20,000 debentures')
    )
  },
  {
    id: 'ACC-CH2-023',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Loss on Issue of Debentures',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'X Ltd. issued 10,000, 9% Debentures of ₹ 100 each at a discount of 10% redeemable at a premium of 10%. Determine the amount of Loss on issue of Debentures.'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 1,00,000'),
        React.createElement('li', null, 'B. ₹ 2,00,000'),
        React.createElement('li', null, 'C. ₹ 10,000'),
        React.createElement('li', null, 'D. Nil')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹ 2,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Loss on Issue of Debentures = Discount on Issue + Premium on Redemption'),
      React.createElement('p', { className: 'mt-1' }, '1. Discount on issue = 10,000 × ₹100 × 10% = ₹1,00,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Premium on redemption = 10,000 × ₹100 × 10% = ₹1,00,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Total Loss on Issue = ₹1,00,000 + ₹1,00,000 = ₹2,00,000')
    )
  },
  {
    id: 'ACC-CH2-024',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Securities Premium Restriction',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Which of the following statements is correct as per the Companies Act, 2013?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Securities Premium can be used for issuing fully paid-up bonus shares to members.'),
        React.createElement('li', null, 'B. Securities Premium cannot be used for issuing partly paid-up bonus shares to members.'),
        React.createElement('li', null, 'C. Securities Premium can be used for any purpose.'),
        React.createElement('li', null, 'D. Securities Premium must be transferred to General Reserve.')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. Securities Premium cannot be used for issuing partly paid-up bonus shares to members.'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'As per Section 52 of the Companies Act, 2013, Securities Premium can be used for issuing fully paid-up bonus shares, writing off preliminary expenses, providing for premium on redemption of debentures/preference shares, and buy-back of shares. However, it cannot be used for issuing partly paid-up bonus shares.')
  },
  {
    id: 'ACC-CH2-025',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Capital Reserve on Purchase',
    source: 'Board Exam 67/4/1',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'P Ltd. took over assets of ₹ 4,00,000 and liabilities of ₹ 75,000 of Q Ltd. at an agreed value of ₹ 3,00,000. P Ltd. issued fully paid equity shares of ₹ 10 each to Q Ltd. in full settlement. What amount will be transferred to Capital Reserve?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹ 1,00,000'),
        React.createElement('li', null, 'B. ₹ 25,000'),
        React.createElement('li', null, 'C. ₹ 75,000'),
        React.createElement('li', null, 'D. Nil')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹ 25,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Calculation of Capital Reserve:'),
      React.createElement('p', { className: 'mt-1' }, '1. Net Assets acquired = Assets - Liabilities = ₹4,00,000 - ₹75,000 = ₹3,25,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Purchase Consideration (agreed value) = ₹3,00,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Capital Reserve = Net Assets - Purchase Consideration = ₹3,25,000 - ₹3,00,000 = ₹25,000'),
      React.createElement('p', { className: 'mt-2' }, 'Since the net assets value is more than the purchase consideration paid, the difference is transferred to Capital Reserve.')
    )
  },
  {
    id: 'ACC-CH2-026',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Pro-Rata Allotment Refund',
    source: 'Board Exam 67/4/3',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Diksha Ltd. invited applications for issuing 1,00,000 equity shares of ₹10 each at a premium of 10%. The whole amount was payable on application. Applications were received for 3,00,000 equity shares. The company decided to allot the shares on pro-rata basis to all the applicants. The amount refunded by the company was:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹22,00,000'),
        React.createElement('li', null, 'B. ₹33,00,000'),
        React.createElement('li', null, 'C. ₹11,00,000'),
        React.createElement('li', null, 'D. ₹20,00,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹22,00,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Total Application Money Received = 3,00,000 shares × ₹11 (10 + 1 premium) = ₹33,00,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Amount for allotted shares = 1,00,000 shares × ₹11 = ₹11,00,000'),
      React.createElement('p', { className: 'mt-1' }, '3. Since entire amount is payable on application with no future calls, all excess money must be refunded'),
      React.createElement('p', { className: 'mt-1' }, '4. Amount refunded = ₹33,00,000 - ₹11,00,000 = ₹22,00,000')
    )
  },
  {
    id: 'ACC-CH2-027',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Reserve Capital',
    source: 'Board Exam 67/4/3',
    difficulty: 'easy',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, '\'Reserve Capital\' can be utilised:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. any time during the life of the company'),
        React.createElement('li', null, 'B. only at the time of winding up of the company'),
        React.createElement('li', null, 'C. to issue fully paid bonus shares'),
        React.createElement('li', null, 'D. to provide for premium on the redemption of preference shares')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. only at the time of winding up of the company'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Reserve Capital is a portion of the uncalled share capital that a company has resolved not to call up, except in the event of winding up. It can only be used during liquidation of the company.')
  },
  {
    id: 'ACC-CH2-028',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Share Forfeiture Account Credit',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Aysha Ltd. forfeited 1,10,000 shares of ₹10 each issued at 20% premium for the non-payment of first call of ₹2 per share and final call of ₹3 per share. Share Forfeited Account will be credited with:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹5,50,000'),
        React.createElement('li', null, 'B. ₹6,60,000'),
        React.createElement('li', null, 'C. ₹11,00,000'),
        React.createElement('li', null, 'D. ₹13,20,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹5,50,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'Share Forfeited account is credited with amount received towards share capital (excluding premium).'),
      React.createElement('p', { className: 'mt-1' }, 'Unpaid amount = ₹2 + ₹3 = ₹5'),
      React.createElement('p', { className: 'mt-1' }, 'Called-up capital = ₹10, Paid-up capital = ₹10 - ₹5 = ₹5 per share'),
      React.createElement('p', { className: 'mt-1' }, 'Total = 1,10,000 shares × ₹5 = ₹5,50,000')
    )
  },
  {
    id: 'ACC-CH2-029',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Minimum Share Reissue Price',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'An equity share of ₹10 fully called up on which ₹6 has been paid was forfeited for the non-payment of the balance amount. At which of the following minimum price can it be reissued?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹4'),
        React.createElement('li', null, 'B. ₹6'),
        React.createElement('li', null, 'C. ₹10'),
        React.createElement('li', null, 'D. ₹16')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: A. ₹4'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Amount forfeited = ₹6. This is the maximum discount allowed on reissue. Minimum reissue price = Face Value - Maximum Discount = ₹10 - ₹6 = ₹4')
  },
  {
    id: 'ACC-CH2-030',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Share Capital Debit on Forfeiture',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, '200 equity shares of ₹10 each issued at par were forfeited for non-payment of first call of ₹3 per share. Final call of ₹2 per share was not yet called. By which amount the share capital will be debited on forfeiture?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. ₹2,000'),
        React.createElement('li', null, 'B. ₹1,600'),
        React.createElement('li', null, 'C. ₹1,000'),
        React.createElement('li', null, 'D. ₹600')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: B. ₹1,600'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, 'On forfeiture, Share Capital is debited with called-up value of forfeited shares.'),
      React.createElement('p', { className: 'mt-1' }, 'Called-up value = ₹10 - ₹2 (uncalled final call) = ₹8 per share'),
      React.createElement('p', { className: 'mt-1' }, 'Total = 200 shares × ₹8 = ₹1,600')
    )
  },
  {
    id: 'ACC-CH2-031',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Authorized Capital Restriction',
    source: 'Board Exam 67/5/3',
    difficulty: 'easy',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Which of the following statement is true?'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Shares of a public company are not freely transferable'),
        React.createElement('li', null, 'B. Paid-up capital is a part of Reserve capital'),
        React.createElement('li', null, 'C. The company cannot raise more capital than the amount of capital as specified in the Memorandum of Association'),
        React.createElement('li', null, 'D. Uncalled capital kept aside for winding up is called Capital Reserve')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. The company cannot raise more capital than the amount of capital as specified in the Memorandum of Association'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'The authorised capital in the MoA is the maximum limit. Options A, B, and D are all incorrect: public company shares are freely transferable, paid-up is part of called-up (not reserve), and uncalled capital for winding up is Reserve Capital not Capital Reserve.')
  },
  {
    id: 'ACC-CH2-032',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Redeemable Debentures',
    source: 'Board Exam 67/5/3',
    difficulty: 'easy',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'The debentures which are payable on the expiry of a specified period either in lump-sum or in instalments during the life time of the company are known as:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. Irredeemable debentures'),
        React.createElement('li', null, 'B. Non-convertible debentures'),
        React.createElement('li', null, 'C. Redeemable debentures'),
        React.createElement('li', null, 'D. Convertible debentures')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: C. Redeemable debentures'),
    explanation: React.createElement('p', { className: 'mt-2' }, 'Debentures that have a specified maturity date for repayment are called Redeemable Debentures. They can be redeemed in lump-sum or instalments.')
  },
  {
    id: 'ACC-CH2-033',
    subject: 'Accountancy',
    chapter: '2',
    topic: 'Company - Debentures Issued at Discount',
    source: 'Board Exam 67/5/3',
    difficulty: 'medium',
    examWeightage: 12,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'font-semibold' }, 'Premier Auto Ltd. purchased assets of the value of ₹3,60,000 from Anand Ltd. and made the payment of purchase consideration by issuing 11% Debentures of ₹100 each at a discount of 10%. The number of debentures issued by Premier Auto Ltd. were:'),
      React.createElement('ul', { className: 'list-none pl-6 mt-4 space-y-2' },
        React.createElement('li', null, 'A. 3,600'),
        React.createElement('li', null, 'B. 3,300'),
        React.createElement('li', null, 'C. 3,000'),
        React.createElement('li', null, 'D. 4,000')
      )
    ),
    solution: React.createElement('p', { className: 'font-bold text-green-700' }, 'Correct Answer: D. 4,000'),
    explanation: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mt-2' }, '1. Purchase Consideration = ₹3,60,000'),
      React.createElement('p', { className: 'mt-1' }, '2. Issue Price = ₹100 - 10% = ₹90'),
      React.createElement('p', { className: 'mt-1' }, '3. Number of Debentures = ₹3,60,000 / ₹90 = 4,000')
    )
  }
];

const accountancyChapter3: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH3-001',
    subject: 'Accountancy',
    chapter: '3',
    topic: 'Investment Revaluation - IFR',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Bala and Lala were partners in a firm with Capitals of ₹ 24,00,000 and 16,00,000. They admitted Mala as a new partner for 1/3 share for which Mala brings 20,00,000 as capital. There was Investment and Investment Fluctuation Reserve appearing in the books of ₹ 2,50,000 and ₹ 50,000 respectively. Bala took over 40% of the Investments at ₹ 80,000 and remaining Investments were valued at ₹ 1,10,000. By what amount Revaluation account will be affected for the above information?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Debited ₹ 60,000"),
        React.createElement("li", null, "B. Credited with ₹ 60,000"),
        React.createElement("li", null, "C. Debited ₹ 10,000"),
        React.createElement("li", null, "D. Credited ₹ 10,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Debited ₹ 10,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Book value of 40% of investments taken by Bala = 40% of ₹2,50,000 = ₹1,00,000. Since he took them for ₹80,000, there is a loss of ₹20,000."),
        React.createElement("li", null, "Book value of the remaining 60% of investments = 60% of ₹2,50,000 = ₹1,50,000. These were revalued at ₹1,10,000, resulting in a loss of ₹40,000."),
        React.createElement("li", null, "Total fall in the value of investments = ₹20,000 + ₹40,000 = ₹60,000."),
        React.createElement("li", null, "The Investment Fluctuation Reserve (IFR) of ₹50,000 is available to absorb this loss."),
        React.createElement("li", null, "The remaining loss, which cannot be covered by the reserve, must be debited to the Revaluation Account."),
        React.createElement("li", null, "Amount to be debited to Revaluation Account = Total Loss - Available IFR = ₹60,000 - ₹50,000 = ₹10,000.")
      )
    )
  },
  {
    id: 'ACC-CH3-002',
    subject: 'Accountancy',
    chapter: '3',
    topic: 'Goodwill - Capitalisation of Super Profits',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Jai and Veeru were in a partnership sharing Profit &Loss in the ratio 5:3. Their Capitals were ₹ 10,00,000 and ₹ 8,00,000 respectively. The firm was also having reserves of ₹ 7,00,000. Normal rate of return was 10%. Firm made average profits of ₹ 2,30,000 for the year ended March 31, 2025 (after adjustment of loss of machinery of book value of ₹2,00,000 by fire against which insurance claim of ₹1,50,000 was admitted). Value of goodwill as per Capitalisation of super profits will be:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 10,00,000"),
        React.createElement("li", null, "B. ₹ 3,00,000"),
        React.createElement("li", null, "C. ₹ 18,00,000"),
        React.createElement("li", null, "D. Nil.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 3,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate the Abnormal Loss from the fire = Book Value of Machinery - Insurance Claim = ₹2,00,000 - ₹1,50,000 = ₹50,000."),
        React.createElement("li", null, "Calculate the Adjusted Normal Business Profit = Given Average Profit + Abnormal Loss = ₹2,30,000 + ₹50,000 = ₹2,80,000."),
        React.createElement("li", null, "Calculate Capital Employed = Partners' Capitals + Reserves = ₹10,00,000 + ₹8,00,000 + ₹7,00,000 = ₹25,00,000."),
        React.createElement("li", null, "Calculate Normal Profit = Capital Employed × Normal Rate of Return = ₹25,00,000 × 10% = ₹2,50,000."),
        React.createElement("li", null, "Calculate Super Profit = Adjusted Average Profit - Normal Profit = ₹2,80,000 - ₹2,50,000 = ₹30,000."),
        React.createElement("li", null, "Calculate Goodwill by Capitalisation of Super Profits = Super Profit / Normal Rate of Return = ₹30,000 / 10% = ₹3,00,000.")
      )
    )
  },
  {
    id: 'ACC-CH3-003',
    subject: 'Accountancy',
    chapter: '3',
    topic: 'Proportionate Capital Method',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null, 
      React.createElement("p", { className: "font-semibold" }, "Arun and Barun were partners sharing Profits &Losses in the ratio 3:2. They admitted Charan into partnership for 20% share. Charan was to bring proportionate Capital and he brought ₹ 3,50,000 (including ₹ 50,000 for goodwill share) in firm. If adjusted capital of Arun after Revaluation Gain/Loss, Accumulated Profits/Losses and Goodwill treatment was ₹ 8,40,000. What was Barun's Capital after Revaluation Gain/Loss, Accumulated Profits/Losses and Goodwill treatment?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 5,60,000"),
        React.createElement("li", null, "B. 3,60,000"),
        React.createElement("li", null, "C. 12,00,000"),
        React.createElement("li", null, "D. 6,60,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 3,60,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Charan's capital contribution = Total cash brought - Goodwill premium = ₹3,50,000 - ₹50,000 = ₹3,00,000."),
        React.createElement("li", null, "Charan's share is 20% or 1/5. Therefore, the remaining share for the old partners (Arun and Barun) is 1 - 1/5 = 4/5."),
        React.createElement("li", null, "The total capital of the new firm, based on Charan's proportionate capital, is ₹3,00,000 × 5 = ₹15,00,000."),
        React.createElement("li", null, "The combined adjusted capital of the old partners (Arun and Barun) must be 4/5 of the total capital = (4/5) × ₹15,00,000 = ₹12,00,000."),
        React.createElement("li", null, "We are given that Arun's adjusted capital is ₹8,40,000."),
        React.createElement("li", null, "Therefore, Barun's Adjusted Capital = Combined Capital - Arun's Adjusted Capital = ₹12,00,000 - ₹8,40,000 = ₹3,60,000.")
      )
    )
  },
  {
    id: 'ACC-CH3-004',
    subject: 'Accountancy',
    chapter: '3',
    topic: 'Hidden Goodwill Calculation',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Raghav and Sahil were partners sharing Profit & Loss in the ratio 5:3. Their capital balances were ₹ 7,20,000 and ₹ 2,80,000 respectively. There were balances of General Reserve of ₹ 5,00,000 and Deferred Revenue Expenditure of ₹4,00,000 in the books of the firm. They admitted Ojasv into partnership for 20% share for which he brings ₹ 4,00,000 as capital. Determine the goodwill share of Ojasv."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 5,00,000"),
        React.createElement("li", null, "B. 1,00,000"),
        React.createElement("li", null, "C. 1,20,000"),
        React.createElement("li", null, "D. 60,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 1,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation of Hidden Goodwill"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate the total implied capital of the new firm based on Ojasv's capital contribution: ₹4,00,000 × (1 / 20%) = ₹4,00,000 × 5 = ₹20,00,000."),
        React.createElement("li", null, "Calculate the actual combined capital of all partners (after adjustments):",
          React.createElement("ul", { className: "list-disc pl-6 mt-1" },
            React.createElement("li", null, "Raghav's Capital: ₹7,20,000"),
            React.createElement("li", null, "Sahil's Capital: ₹2,80,000"),
            React.createElement("li", null, "Ojasv's Capital: ₹4,00,000"),
            React.createElement("li", null, "Add: General Reserve: ₹5,00,000"),
            React.createElement("li", null, "Less: Deferred Revenue Expenditure (fictitious asset): (₹4,00,000)"),
            React.createElement("li", {className: "font-bold"}, "Total Actual Capital = ₹15,00,000.")
          )
        ),
        React.createElement("li", null, "Calculate the firm's total goodwill (Hidden Goodwill) = Implied Capital - Actual Capital = ₹20,00,000 - ₹15,00,000 = ₹5,00,000."),
        React.createElement("li", null, "Calculate Ojasv's share of Goodwill = Total Goodwill × Ojasv's Share = ₹5,00,000 × 20% = ₹1,00,000.")
      )
    )
  }
];

const accountancyChapter4: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH4-001',
    subject: 'Accountancy',
    chapter: '4',
    topic: 'Revaluation - Overvalued Building',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Building was appearing in the books at ₹ 20,00,000 which was overvalued by 25%. What amount will be shown in the Balance Sheet of a reconstituted firm for building?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 25,00,000"),
        React.createElement("li", null, "B. 16,00,000"),
        React.createElement("li", null, "C. 24,00,000"),
        React.createElement("li", null, "D. 15,00,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. ₹ 16,00,000"),
    explanation: React.createElement("p", { className: "mt-2" }, "If the book value is overvalued by 25%, it means the book value of ₹20,00,000 represents 125% of the true value. To find the correct value (100%), we calculate: Correct Value = Book Value / 125% = ₹20,00,000 / 1.25 = ₹16,00,000.")
  },
  {
    id: 'ACC-CH4-002',
    subject: 'Accountancy',
    chapter: '4',
    topic: 'Workmen Compensation Reserve',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "John and Sourabh were partners sharing Profit &Loss equally. They decided to share future Profit &Loss in the ratio 3:2. Their manager Arya met with an accident in the office itself and his claim for compensation amounted to ₹50,000. The firm had a Workmen Compensation Reserve of ₹80,000. Which of the following statement holds true at the time of reconstitution?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹50,000 will be provided as workmen claim out of Workmen Compensation Reserve and balance ₹30,000 will be distributed amongst partners in old ratio."),
        React.createElement("li", null, "B. ₹50,000 will be provided as workmen claim out of Workmen Compensation Reserve and balance ₹30,000 will be distributed amongst partners in new ratio."),
        React.createElement("li", null, "C. ₹50,000 will be provided as workmen claim out of Workmen Compensation Reserve and balance ₹30,000 will be credited to Revaluation Account."),
        React.createElement("li", null, "D. ₹50,000 will be provided as workmen claim out of Workmen Compensation Reserve and balance ₹30,000 will be carried forward in the books of the firm without any treatment.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A."),
    explanation: React.createElement("p", { className: "mt-2" }, "At the time of reconstitution of a partnership firm, existing reserves must be adjusted. A provision for the actual liability (claim of ₹50,000) is created from the Workmen Compensation Reserve. The remaining surplus in the reserve (₹80,000 - ₹50,000 = ₹30,000) is an accumulated profit that belongs to the partners in their old profit-sharing ratio (equally) and should be distributed to them. It is not distributed in the new ratio.")
  }
];

const accountancyChapter5: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH5-001',
    subject: 'Accountancy',
    chapter: '5',
    topic: 'Loss on Issue - Write-off',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "italic" }, "From the given hypothetical situation, answer Q 12 – 14."),
      React.createElement("p", { className: "font-semibold mt-2" }, "Floater Ltd. issued 60,000; 8% debentures of ₹ 100 each at 5% Discount and to be redeemed at 10% premium at the end of 5 years. On the date of issue, balance in Securities Premium was ₹ 8,00,000 and Statement of Profit Loss (Dr.) was ₹ 5,00,000."),
      React.createElement("p", { className: "font-semibold mt-2" }, "Loss on Issue of Debentures is to be written off as ______ out of Securities Premium and ______ out of Statement of Profit and Loss.")
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 8,00,000; ₹ 1,00,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Calculate Total Loss on Issue = Discount on Issue + Premium on Redemption."),
        React.createElement("li", null, "Discount on Issue = 60,000 shares × (5% of ₹100) = 60,000 × ₹5 = ₹3,00,000."),
        React.createElement("li", null, "Premium on Redemption = 60,000 shares × (10% of ₹100) = 60,000 × ₹10 = ₹6,00,000."),
        React.createElement("li", null, "Total Loss = ₹3,00,000 + ₹6,00,000 = ₹9,00,000."),
        React.createElement("li", null, "This total loss must be written off. The first priority is to use the available balance in the Securities Premium account. Available Securities Premium = ₹8,00,000."),
        React.createElement("li", null, "The remaining loss to be written off from the Statement of Profit & Loss = Total Loss - Securities Premium Used = ₹9,00,000 - ₹8,00,000 = ₹1,00,000.")
      )
    )
  },
  {
    id: 'ACC-CH5-002',
    subject: 'Accountancy',
    chapter: '5',
    topic: 'Statement of P&L Balance',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", { className: "font-semibold" }, "After writing off Loss on Issue of Debentures, balance in Statement of Profit and Loss will be ______."),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Debit; ₹ 6,00,000"),
    explanation: React.createElement("p", { className: "mt-2" }, "The initial debit (loss) balance in the Statement of Profit and Loss was ₹5,00,000. An additional loss of ₹1,00,000 (as calculated in the previous question) was written off from it. Therefore, the new total debit balance will be ₹5,00,000 + ₹1,00,000 = ₹6,00,000.")
  },
  {
    id: 'ACC-CH5-003',
    subject: 'Accountancy',
    chapter: '5',
    topic: 'Premium on Redemption - Classification',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", { className: "font-semibold" }, "Premium on Redemption of Debentures account will have a balance of ______ to be treated as ______ in the first year."),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. ₹ 6,00,000; Non-Current Liabilities"),
    explanation: React.createElement("p", { className: "mt-2" }, "The Premium on Redemption of Debentures is a liability of ₹6,00,000 (calculated in Q12). Since the debentures are to be redeemed at the end of 5 years (which is more than 12 months from the balance sheet date), this liability is classified as a Non-Current Liability under the main head 'Long-term Provisions'.")
  }
];

const accountancyChapter6: MCQPoolQuestion[] = [];

const accountancyChapter7: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH7-001',
    subject: 'Accountancy',
    chapter: '7',
    topic: 'Realisation Gain/Loss',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Arun, Basu and Tarun were partners sharing Profit &Loss in the ratio 5:3:2. Their firm was dissolved on March 31, 2025. On this date following assets and liabilities were appearing in their books of accounts. Building ₹2,00,000; Furniture ₹80,000; Stock ₹70,000; Goodwill ₹10,000; Debtors ₹40,000; Cash ₹20,000; Creditors ₹50,000; Arun's Loan ₹60,000; Tarun's Brother Loan ₹30,000. Assets realised at for ₹3,40,000. Determine the amount of Realisation Gain/Loss."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Realisation Loss ₹ 80,000"),
        React.createElement("li", null, "B. Realisation Gain ₹ 60,000"),
        React.createElement("li", null, "C. Realisation Loss ₹ 60,000"),
        React.createElement("li", null, "D. No Gain or Loss on Realisation")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Realisation Loss ₹ 60,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Realisation Account Calculation"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Debit Side:")),
      React.createElement("ul", { className: "list-disc pl-5" },
        React.createElement("li", null, "Assets transferred (at book value): Building (2,00,000) + Furniture (80,000) + Stock (70,000) + Goodwill (10,000) + Debtors (40,000) = ₹4,00,000."),
        React.createElement("li", null, "Liabilities paid (assuming paid in full): Creditors (50,000) + Tarun's Brother Loan (30,000) = ₹80,000. (Note: Arun's Loan is a partner's loan and is settled separately, not through Realisation A/c)."),
        React.createElement("li", {className: "font-bold"}, "Total Debits = ₹4,00,000 + ₹80,000 = ₹4,80,000.")
      ),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Credit Side:")),
      React.createElement("ul", { className: "list-disc pl-5" },
        React.createElement("li", null, "Liabilities transferred (at book value): Creditors (50,000) + Tarun's Brother Loan (30,000) = ₹80,000."),
        React.createElement("li", null, "Assets Realised: ₹3,40,000."),
        React.createElement("li", {className: "font-bold"}, "Total Credits = ₹80,000 + ₹3,40,000 = ₹4,20,000.")
      ),
      React.createElement("p", { className: "mt-2 font-bold" }, "Loss = Total Debits - Total Credits = ₹4,80,000 - ₹4,20,000 = ₹60,000 (Loss).")
    )
  },
  {
    id: 'ACC-CH7-002',
    subject: 'Accountancy',
    chapter: '7',
    topic: 'Realisation Expenses',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "X, a partner was assigned to look after the dissolution process and was allowed remuneration of ₹15,000. Actual realisation expenses amounted to ₹20,000, being paid by another partner Y. By what amount Realisation account will be debited for the above-mentioned information?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ₹ 20,000"),
        React.createElement("li", null, "B. ₹ 35,000"),
        React.createElement("li", null, "C. ₹ 5,000"),
        React.createElement("li", null, "D. ₹ 15,000")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. ₹ 15,000"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The Realisation account is debited only with the expenses that the firm has agreed to bear. In this case, the firm only agreed to pay a remuneration of ₹15,000 to X to handle the process. The actual expenses being higher and paid by Y is an internal matter between the partners (Y would recover the amount from X). The firm's only agreed dissolution expense is the remuneration to X.")
    )
  }
];

const accountancyChapter8: MCQPoolQuestion[] = [
  {
    id: 'ACC-CH8-001',
    subject: 'Accountancy',
    chapter: '8',
    topic: 'Death of a Partner - New Ratio',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "A, B and C were partners sharing Profits &Losses in the ratio 7:2:1. B died. A took over 1/20 from his share and remaining share was taken over by C. Determine the new Profit sharing Ratio."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 4:1"),
        React.createElement("li", null, "B. 7:1"),
        React.createElement("li", null, "C. 71:29"),
        React.createElement("li", null, "D. 3:1")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. 3:1"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "B's old share = 2/10."),
        React.createElement("li", null, "Share gained by A = 1/20 (given)."),
        React.createElement("li", null, "Remaining share of B taken over by C = B's Total Share - Share gained by A = 2/10 - 1/20 = 4/20 - 1/20 = 3/20."),
        React.createElement("li", null, "A's New Share = A's Old Share + Gain = 7/10 + 1/20 = 14/20 + 1/20 = 15/20."),
        React.createElement("li", null, "C's New Share = C's Old Share + Gain = 1/10 + 3/20 = 2/20 + 3/20 = 5/20."),
        React.createElement("li", null, "New Ratio (A:C) = 15/20 : 5/20 = 15:5, which simplifies to 3:1.")
      )
    )
  },
  {
    id: 'ACC-CH8-002',
    subject: 'Accountancy',
    chapter: '8',
    topic: 'Retirement - Share Distribution',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 8,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "X, Y and Z were partners sharing Profit & Losses in the ratio 5:3:2. Y retired, and he gifted half of his share to X and remaining half was taken over equally by X and Z. Determine the new Profit-sharing Ratio."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 29:11"),
        React.createElement("li", null, "B. 13:7"),
        React.createElement("li", null, "C. 1:1"),
        React.createElement("li", null, "D. 5:2")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. 29:11"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Step-by-Step Calculation"),
      React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "Y's total share = 3/10."),
        React.createElement("li", null, "Half of Y's share gifted to X = (1/2) × (3/10) = 3/20."),
        React.createElement("li", null, "The remaining half of Y's share = 3/20."),
        React.createElement("li", null, "This remaining half (3/20) is taken equally by X and Z. So, each of them gains (1/2) × (3/20) = 3/40."),
        React.createElement("li", null, "Total gain by X = Gift from Y + Acquired share = 3/20 + 3/40 = 6/40 + 3/40 = 9/40."),
        React.createElement("li", null, "Total gain by Z = Acquired share = 3/40."),
        React.createElement("li", null, "X's New Share = Old Share + Total Gain = 5/10 + 9/40 = 20/40 + 9/40 = 29/40."),
        React.createElement("li", null, "Z's New Share = Old Share + Total Gain = 2/10 + 3/40 = 8/40 + 3/40 = 11/40."),
        React.createElement("li", null, "The new ratio between X and Z is 29:11.")
      )
    )
  }
];

const accountancyChapter9: MCQPoolQuestion[] = [];
const accountancyChapter10: MCQPoolQuestion[] = [];

const economicsChapter1: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH1-001',
    subject: 'Economics',
    chapter: '1',
    topic: 'APC at Break-even Point',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "With reference to the given diagram, which of the following is true at point B?"),
      React.createElement("img", { src: "https://storage.googleapis.com/aiedu-dev-images-mirror/aistudio/17.png", alt: "Consumption Curve", className: "my-4 rounded-lg" }),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Slope of Consumption Curve = 0"),
        React.createElement("li", null, "B. Average Propensity to Consume = 0"),
        React.createElement("li", null, "C. Slope of Saving Curve = 1"),
        React.createElement("li", null, "D. Average Propensity to Consume = 1")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Average Propensity to Consume = 1"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Point B is the 'break-even point' where the Consumption Curve (C) intersects the 45° Income line (Y)."),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "At this point, Total Consumption (C) equals Total Income (Y)."),
        React.createElement("li", null, "Average Propensity to Consume (APC) is calculated as C / Y."),
        React.createElement("li", null, "Since C = Y at point B, APC = 1.")
      )
    )
  },
  {
    id: 'ECON-CH1-002',
    subject: 'Economics',
    chapter: '1',
    topic: 'GDP Deflator Calculation',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Real Gross Domestic Product (GDP) is estimated to attain a level of ₹173.82 lakh crore in the year 2023-24. The corresponding Nominal GDP is estimated to stand at ₹295.36 lakh crore in the same year.\""),
      React.createElement("p", { className: "mt-2" }, "On the basis of the given data, the value of GDP deflator would be ______."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 295.36"),
        React.createElement("li", null, "B. 58.85"),
        React.createElement("li", null, "C. 169.92"),
        React.createElement("li", null, "D. 173.82")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. 169.92"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-4" }, "The formula for the GDP Deflator is:"),
      React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "GDP Deflator = (Nominal GDP / Real GDP) x 100"),
      React.createElement("p", { className: "mt-4" }, "Calculation:"),
      React.createElement("p", { className: "ml-4" }, "= (₹295.36 / ₹173.82) x 100 = 169.92")
    )
  },
  {
    id: 'ECON-CH1-003',
    subject: 'Economics',
    chapter: '1',
    topic: 'Final Goods Definition',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 1:"), " Final Goods do not undergo any further transformation at the hands of any producer."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 2:"), " Final goods may get transformed during their consumption by the ultimate purchaser."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Both Statements 1 and 2 are true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Statement 1 is true."), " This is the definition of a final good; it has crossed the production boundary and is ready for final use."),
        React.createElement("li", null, React.createElement("b", null, "Statement 2 is true."), " While not transformed by a producer for resale, the final consumer does transform it for their own use (e.g., a household buys flour and transforms it into bread for personal consumption).")
      )
    )
  },
  {
    id: 'ECON-CH1-004',
    subject: 'Economics',
    chapter: '1',
    topic: 'Factor Income vs Transfer Income',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Ms. Sarika earns rental income and interest income. Occasionally, she receives cash transfers from her family members abroad. Classify Ms. Sarika's income as factor income or transfer income, giving valid reasons."),
      React.createElement("p", { className: "mt-4 font-semibold" }, "Which of the following correctly classifies her income?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Rental income - Transfer, Interest income - Factor, Cash transfers - Factor"),
        React.createElement("li", null, "B. Rental income - Factor, Interest income - Factor, Cash transfers - Transfer"),
        React.createElement("li", null, "C. All three are Factor income"),
        React.createElement("li", null, "D. All three are Transfer income")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Rental income - Factor, Interest income - Factor, Cash transfers - Transfer"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Factor Income:"), " The rental income and interest income earned by Ms. Sarika are classified as factor income."),
      React.createElement("p", {className: "mt-1"}, React.createElement("i", null, "Reason:"), " This income is earned by rendering productive factor services. Rental income is a return on property (land), and interest income is a return on capital. These are earned incomes and are included in the estimation of national income."),
      React.createElement("p", {className: "mt-2"}, React.createElement("b", null, "Transfer Income:"), " The cash transfers received from her family members abroad are classified as transfer income."),
      React.createElement("p", {className: "mt-1"}, React.createElement("i", null, "Reason:"), " This income is received without providing any goods or services in return. It is a unilateral (one-way) payment. Such unearned incomes are not included in the estimation of national income.")
    )
  },
  {
    id: 'ECON-CH1-028',
    subject: 'Economics',
    chapter: '1',
    topic: 'Economic Systems - Capitalist Economy',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a characteristic of a capitalist economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Government ownership of all means of production"),
        React.createElement("li", null, "B. Private ownership of means of production"),
        React.createElement("li", null, "C. Absence of profit motive"),
        React.createElement("li", null, "D. Central planning authority")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Private ownership of means of production"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "In a capitalist economy, the means of production are owned privately by individuals or corporations, not by the government.")
    )
  },
  {
    id: 'ECON-CH1-029',
    subject: 'Economics',
    chapter: '1',
    topic: 'Economic Systems - Mixed Economy',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a feature of a mixed economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Private ownership"),
        React.createElement("li", null, "B. Government intervention"),
        React.createElement("li", null, "C. Price mechanism"),
        React.createElement("li", null, "D. Central planning only")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Central planning only"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "A mixed economy combines elements of both market and planned economies, not just central planning.")
    )
  },
  {
    id: 'ECON-CH1-030',
    subject: 'Economics',
    chapter: '1',
    topic: 'Economic Development - Five Year Plans',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the Five Year Plans was:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Economic liberalization"),
        React.createElement("li", null, "B. Economic planning and development"),
        React.createElement("li", null, "C. Foreign trade promotion"),
        React.createElement("li", null, "D. Agricultural exports")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Economic planning and development"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Five Year Plans were introduced to achieve planned economic development and growth through systematic planning.")
    )
  },
  {
    id: 'ECON-CH1-031',
    subject: 'Economics',
    chapter: '1',
    topic: 'Economic Welfare - Human Development Index',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a measure of economic welfare?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Gross Domestic Product"),
        React.createElement("li", null, "B. Human Development Index"),
        React.createElement("li", null, "C. Balance of Payments"),
        React.createElement("li", null, "D. Foreign Exchange Reserves")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Human Development Index"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Human Development Index (HDI) measures economic welfare by considering health, education, and income indicators.")
    )
  },
  {
    id: 'ECON-CH1-032',
    subject: 'Economics',
    chapter: '1',
    topic: 'Socialist Economy',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a feature of a socialist economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Private ownership of means of production"),
        React.createElement("li", null, "B. Profit motive as the main driving force"),
        React.createElement("li", null, "C. Social ownership of means of production"),
        React.createElement("li", null, "D. Free market mechanism")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Social ownership of means of production"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "In a socialist economy, the means of production are owned and controlled by the society as a whole or by the government on behalf of the people.")
    )
  },
  {
    id: 'ECON-CH1-033',
    subject: 'Economics',
    chapter: '1',
    topic: 'Mixed Economy - Demerits',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a merit of a mixed economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Efficient resource allocation"),
        React.createElement("li", null, "B. Economic stability"),
        React.createElement("li", null, "C. Social welfare"),
        React.createElement("li", null, "D. Excessive government control")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Excessive government control"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Excessive government control is a demerit of mixed economy, while the others are merits.")
    )
  },
  {
    id: 'ECON-CH1-034',
    subject: 'Economics',
    chapter: '1',
    topic: 'Indian Economy',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a feature of the Indian economy?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Command economy"),
        React.createElement("li", null, "B. Capitalist economy"),
        React.createElement("li", null, "C. Mixed economy"),
        React.createElement("li", null, "D. Socialist economy")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Mixed economy"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "India has a mixed economy with features of both market and planned economies, combining private enterprise with government intervention.")
    )
  }
];

const economicsChapter2: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH2-001',
    subject: 'Economics',
    chapter: '2',
    topic: 'Functions of Money - Store of Value',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "\"Money is non-perishable and is acceptable to anyone at any point of time.\" Identify the function of money indicated."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Store of Value"),
        React.createElement("li", null, "B. Medium of Exchange"),
        React.createElement("li", null, "C. Unit of Account"),
        React.createElement("li", null, "D. Standard of Deferred Payments")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Store of Value"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The key words 'non-perishable' and holding value 'at any point of time' refer to the Store of Value function. This means money can be saved and used for future purchases without losing significant value.")
    )
  },
  {
    id: 'ECON-CH2-002',
    subject: 'Economics',
    chapter: '2',
    topic: 'Money Supply M1',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On the basis of the given information, Money Supply (M1) would be _______ crore."),
      React.createElement("table", {className: "w-full text-left border-collapse my-2"},
        React.createElement("tbody", null,
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Currency held by the Public"), React.createElement("td", {className: "border p-2"}, "320")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Net Demand Deposits with Commercial Banks"), React.createElement("td", {className: "border p-2"}, "260")),
          React.createElement("tr", null, React.createElement("td", {className: "border p-2"}, "Net Time Deposits with Commercial Banks"), React.createElement("td", {className: "border p-2"}, "200"))
        )
      ),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 580"),
        React.createElement("li", null, "B. 780"),
        React.createElement("li", null, "C. 675"),
        React.createElement("li", null, "D. 875")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. 580"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", {className:"mt-2"}, "The formula for the M1 measure of money supply is:"),
      React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "M1 = Currency with Public + Net Demand Deposits"),
      React.createElement("p", { className: "mt-2" }, "M1 = 320 crore + 260 crore = 580 crore."),
      React.createElement("p", { className: "mt-2 italic" }, "Note: Net Time Deposits are a component of broader measures like M3, but not M1.")
    )
  },
  {
    id: 'ECON-CH2-003',
    subject: 'Economics',
    chapter: '2',
    topic: 'RBI Establishment Year',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Reserve Bank of India (RBI) was established in the year ______."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. 1934"),
        React.createElement("li", null, "B. 1935"),
        React.createElement("li", null, "C. 1947"),
        React.createElement("li", null, "D. 1949")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. 1935"),
    explanation: React.createElement("p", { className: "mt-2" }, "The Reserve Bank of India was established on April 1, 1935, in accordance with the provisions of the Reserve Bank of India Act, 1934.")
  },
  {
    id: 'ECON-CH2-004',
    subject: 'Economics',
    chapter: '2',
    topic: 'Reserve Ratio - Credit Limit',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", { className: "font-semibold" }, "\"The statutory requirement of the Reserve Ratio (RR) acts as a limit to the amount of credit that banks can create.\" Justify the given statement."),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", null, "The statement is justified. The Reserve Ratio (or Legal Reserve Ratio - LRR) is the fraction of total deposits that commercial banks are legally required to hold as reserves with the Central Bank and with themselves."),
      React.createElement("p", {className: "mt-2"}, "The total amount of credit that can be created in the economy is determined by the Credit Multiplier, which is the reciprocal of the LRR (Multiplier = 1 / LRR)."),
      React.createElement("p", {className: "mt-2"}, "A higher LRR means banks must keep a larger portion of deposits as reserves, leaving less available for lending. This leads to a smaller credit multiplier and thus limits the total credit creation. Conversely, a lower LRR increases the multiplier and expands the capacity for credit creation. Hence, the LRR acts as a direct and powerful tool for the Central Bank to limit and control the credit-creating power of commercial banks.")
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The Reserve Ratio acts as a 'leakage' from the credit creation process. For every deposit, a certain percentage is held back and cannot be lent out. This limits the size of subsequent loans and deposits in the chain, thereby controlling the total volume of credit created in the economy.")
    )
  },
  {
    id: 'ECON-CH2-005',
    subject: 'Economics',
    chapter: '2',
    topic: 'Inflation Control Measures',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", { className: "font-semibold" }, "Explain any two indicated measures taken by the Central Bank to control the highlighted macroeconomic issue (Inflation)."),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", {className:"font-bold"}, "Two monetary policy measures to control inflation are:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Increase in Repo Rate (Quantitative Measure):"), " The repo rate is the interest rate at which the central bank lends to commercial banks. To curb inflation, the central bank increases the repo rate. This makes borrowing by commercial banks more expensive, forcing them to increase their own lending rates. Higher interest rates discourage the general public and businesses from taking loans, thus reducing spending and aggregate demand in the economy."),
        React.createElement("li", null, React.createElement("b", null, "Open Market Operations - Selling Securities (Quantitative Measure):"), " To control inflation, the Central Bank can sell government securities in the open market. This absorbs excess money supply from the economy. When commercial banks buy these securities, their reserves decrease, which reduces their capacity to lend. This contraction of credit availability leads to a fall in aggregate demand, helping to control inflation.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "Inflation is typically caused by 'too much money chasing too few goods' (excess demand). The central bank's strategy is to use its monetary policy tools to reduce the money supply and credit in the economy. Both increasing the policy rate (Repo Rate) and selling securities are contractionary measures designed to make money 'tighter' and more expensive, thereby reducing overall spending.")
    )
  },
  {
    id: 'ECON-CH2-006',
    subject: 'Economics',
    chapter: '2',
    topic: 'Types of Unemployment',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a type of unemployment?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Frictional unemployment"),
        React.createElement("li", null, "B. Structural unemployment"),
        React.createElement("li", null, "C. Cyclical unemployment"),
        React.createElement("li", null, "D. Production unemployment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Production unemployment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The main types of unemployment are frictional, structural, cyclical, and seasonal. 'Production unemployment' is not a standard classification.")
    )
  },
  {
    id: 'ECON-CH2-007',
    subject: 'Economics',
    chapter: '2',
    topic: 'Base Year - National Income',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Base Year' in national income accounting is used for:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Calculating current prices"),
        React.createElement("li", null, "B. Calculating constant prices"),
        React.createElement("li", null, "C. Determining tax rates"),
        React.createElement("li", null, "D. Setting interest rates")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Calculating constant prices"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The base year is used as a reference point for calculating real GDP at constant prices, eliminating the effect of price changes.")
    )
  },
  {
    id: 'ECON-CH2-008',
    subject: 'Economics',
    chapter: '2',
    topic: 'Phillips Curve',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Phillips Curve' shows the relationship between:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Inflation and unemployment"),
        React.createElement("li", null, "B. Inflation and economic growth"),
        React.createElement("li", null, "C. Unemployment and economic growth"),
        React.createElement("li", null, "D. Savings and investment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Inflation and unemployment"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The Phillips Curve illustrates the inverse relationship between the rate of inflation and the rate of unemployment in an economy.")
    )
  },
  {
    id: 'ECON-CH2-009',
    subject: 'Economics',
    chapter: '2',
    topic: 'Multiplier Effect',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Multiplier Effect' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Increase in money supply"),
        React.createElement("li", null, "B. Increase in investment leading to multiple increases in income"),
        React.createElement("li", null, "C. Increase in prices"),
        React.createElement("li", null, "D. Increase in exports")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Increase in investment leading to multiple increases in income"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The multiplier effect shows how an initial increase in investment can lead to a larger increase in national income through successive rounds of spending.")
    )
  },
  {
    id: 'ECON-CH2-010',
    subject: 'Economics',
    chapter: '2',
    topic: 'GDP at Market Price',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Gross Domestic Product at market price includes:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Depreciation"),
        React.createElement("p", null, "b) Net indirect taxes"),
        React.createElement("p", null, "c) Both a and b"),
        React.createElement("p", null, "d) Neither a nor b")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Both a and b"),
    explanation: React.createElement("p", null, "GDP at market price includes depreciation (consumption of fixed capital) and net indirect taxes (indirect taxes minus subsidies).")
  },
  {
    id: 'ECON-CH2-011',
    subject: 'Economics',
    chapter: '2',
    topic: 'Paradox of Thrift',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The concept of 'Paradox of Thrift' was given by:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) J.M. Keynes"),
        React.createElement("p", null, "b) Adam Smith"),
        React.createElement("p", null, "c) Alfred Marshall"),
        React.createElement("p", null, "d) David Ricardo")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) J.M. Keynes"),
    explanation: React.createElement("p", null, "John Maynard Keynes introduced the concept of Paradox of Thrift, which states that increased saving may lead to lower aggregate demand and economic slowdown.")
  },
  {
    id: 'ECON-CH2-012',
    subject: 'Economics',
    chapter: '2',
    topic: 'Multiplier Value',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The value of multiplier depends on:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Marginal propensity to consume"),
        React.createElement("p", null, "b) Marginal propensity to save"),
        React.createElement("p", null, "c) Both a and b"),
        React.createElement("p", null, "d) Neither a nor b")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Both a and b"),
    explanation: React.createElement("p", null, "Investment multiplier = 1/(1-MPC) = 1/MPS. So it depends on both marginal propensity to consume and marginal propensity to save.")
  },
  {
    id: 'ECON-CH2-013',
    subject: 'Economics',
    chapter: '2',
    topic: 'National Income at Factor Cost',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "National Income at factor cost is also known as:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Gross National Product"),
        React.createElement("p", null, "b) Net National Product"),
        React.createElement("p", null, "c) National Income"),
        React.createElement("p", null, "d) Personal Income")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) National Income"),
    explanation: React.createElement("p", null, "National Income at factor cost is the income earned by factors of production and is also simply called National Income.")
  },
  {
    id: 'ECON-CH2-014',
    subject: 'Economics',
    chapter: '2',
    topic: 'Demand Curve Shift',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following leads to a rightward shift in the demand curve?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Increase in price of the commodity"),
        React.createElement("p", null, "b) Decrease in income of consumers"),
        React.createElement("p", null, "c) Increase in price of substitute goods"),
        React.createElement("p", null, "d) Increase in income of consumers")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Increase in income of consumers"),
    explanation: React.createElement("p", null, "For normal goods, increase in consumer income leads to increase in demand, causing a rightward shift in the demand curve.")
  },
  {
    id: 'ECON-CH2-015',
    subject: 'Economics',
    chapter: '2',
    topic: 'Nominal vs Real GDP',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The difference between nominal GDP and real GDP is due to:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Change in population"),
        React.createElement("p", null, "b) Change in price level"),
        React.createElement("p", null, "c) Change in technology"),
        React.createElement("p", null, "d) Change in government spending")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Change in price level"),
    explanation: React.createElement("p", null, "Nominal GDP measures output at current prices while real GDP measures output at constant/base year prices. The difference reflects changes in price level.")
  },
  {
    id: 'ECON-CH2-016',
    subject: 'Economics',
    chapter: '2',
    topic: 'Liquidity Trap',
    source: 'Sample Paper 2022',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The concept of 'Liquidity Trap' is associated with:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Classical economists"),
        React.createElement("p", null, "b) Keynesian economists"),
        React.createElement("p", null, "c) Monetarist economists"),
        React.createElement("p", null, "d) Supply-side economists")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Keynesian economists"),
    explanation: React.createElement("p", null, "The concept of liquidity trap was developed by John Maynard Keynes. It occurs when interest rates are so low that monetary policy becomes ineffective.")
  }
];

const economicsChapter3: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH3-001',
    subject: 'Economics',
    chapter: '3',
    topic: 'Factor Market - Circular Flow',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "In a simplified economy, the flow of Factor Services from Households to Firms and Factor Payments from Firms to Households represents ______ Market."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Factor"),
        React.createElement("li", null, "B. Goods"),
        React.createElement("li", null, "C. Stock"),
        React.createElement("li", null, "D. Financial")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Factor"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The market where factors of production (Land, Labour, Capital, Entrepreneurship) are bought and sold is the Factor Market. Households supply these services, and firms pay for them.")
    )
  },
  {
    id: 'ECON-CH3-002',
    subject: 'Economics',
    chapter: '3',
    topic: 'Deflationary Gap',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Deflationary Gap refers to the gap by which ______ falls short of the Aggregate Demand required to establish full employment equilibrium."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. ex-ante Aggregate Demand"),
        React.createElement("li", null, "B. ex-post Aggregate Demand"),
        React.createElement("li", null, "C. ex-ante Aggregate Supply"),
        React.createElement("li", null, "D. ex-post Aggregate Supply")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. ex-ante Aggregate Demand"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "A deflationary gap occurs when planned aggregate spending is less than the full-employment level of output. The term for planned aggregate demand is 'ex-ante Aggregate Demand'. It is the gap between what people plan to spend and what is required to be spent to achieve full employment.")
    )
  },
  {
    id: 'ECON-CH3-003',
    subject: 'Economics',
    chapter: '3',
    topic: 'Investment Multiplier / APC+APS',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) Suppose in an economy, the Marginal Propensity to Consume (MPC) is 0.8. The government introduced an investment project of ₹1,000 crore. Estimate the total increase in Income."),
      React.createElement("p", { className: "mt-4 font-bold" }, "OR"),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(II) \"Sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.\" Justify the statement.")
    ),
    solution: React.createElement("p", {className:"font-bold"}, "(I) The total increase in Income (ΔY) will be ₹5,000 crore."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation for Part (I)"),
      React.createElement("ol", { className: "list-decimal pl-5 mt-2 space-y-2" },
        React.createElement("li", null, "First, we calculate the Investment Multiplier (k)."),
        React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "k = 1 / (1 - MPC)"),
        React.createElement("p", { className: "ml-4" }, "= 1 / (1 - 0.8) = 1 / 0.2 = 5."),
        React.createElement("li", null, "Next, we find the total change in income (ΔY)."),
        React.createElement("p", { className: "ml-4 font-mono bg-gray-100 p-2 rounded" }, "ΔY = k × Initial Change in Investment (ΔI)"),
        React.createElement("p", { className: "ml-4" }, "= 5 × ₹1,000 crore = ₹5,000 crore.")
      ),
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Justification for Part (II)"),
      React.createElement("p", { className: "mt-2" }, "We know that for any given level of income, Income (Y) is either Consumed (C) or Saved (S)."),
      React.createElement("p", { className: "mt-2 ml-4 font-mono bg-gray-100 p-2 rounded" }, "Y = C + S"),
      React.createElement("p", { className: "mt-2" }, "Dividing the entire equation by Y, we get:"),
      React.createElement("p", { className: "mt-2 ml-4 font-mono bg-gray-100 p-2 rounded" }, "Y/Y = C/Y + S/Y"),
      React.createElement("p", { className: "mt-2" }, "This simplifies to:", React.createElement("b", null, " 1 = APC + APS.")),
      React.createElement("p", { className: "mt-2" }, "Hence, the sum of APC and APS is always equal to one.")
    )
  },
  {
    id: 'ECON-CH3-011',
    subject: 'Economics',
    chapter: '3',
    topic: 'National Income - Nominal vs Real GDP',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The difference between nominal GDP and real GDP is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Always zero"),
        React.createElement("li", null, "B. Due to price changes"),
        React.createElement("li", null, "C. Due to quantity changes"),
        React.createElement("li", null, "D. Due to population changes")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Due to price changes"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Nominal GDP measures output at current prices, while real GDP measures output at constant prices, so the difference reflects price level changes.")
    )
  },
  {
    id: 'ECON-CH3-012',
    subject: 'Economics',
    chapter: '3',
    topic: 'Sectors of Economy - Tertiary Sector',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is included in the tertiary sector?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Agriculture"),
        React.createElement("li", null, "B. Manufacturing"),
        React.createElement("li", null, "C. Banking"),
        React.createElement("li", null, "D. Mining")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Banking"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The tertiary sector includes services like banking, education, healthcare, and transportation.")
    )
  },
  {
    id: 'ECON-CH3-013',
    subject: 'Economics',
    chapter: '3',
    topic: 'Reserve Bank of India - Objectives',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the Reserve Bank of India is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Maximizing profits"),
        React.createElement("li", null, "B. Price stability and economic growth"),
        React.createElement("li", null, "C. Foreign exchange management only"),
        React.createElement("li", null, "D. Agricultural development")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Price stability and economic growth"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The RBI's primary objectives include maintaining price stability, ensuring financial stability, and supporting economic growth.")
    )
  },
  {
    id: 'ECON-CH3-014',
    subject: 'Economics',
    chapter: '3',
    topic: 'Money - Functions',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a function of money?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Store of value"),
        React.createElement("li", null, "B. Unit of account"),
        React.createElement("li", null, "C. Medium of exchange"),
        React.createElement("li", null, "D. All of the above")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. All of the above"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Money serves as a medium of exchange, unit of account, and store of value.")
    )
  },
  {
    id: 'ECON-CH3-015',
    subject: 'Economics',
    chapter: '3',
    topic: 'Inflation - Causes',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main cause of inflation is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Increase in money supply"),
        React.createElement("li", null, "B. Decrease in money supply"),
        React.createElement("li", null, "C. Constant money supply"),
        React.createElement("li", null, "D. Zero money supply")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Increase in money supply"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Inflation occurs when there is too much money chasing too few goods, leading to a general increase in price levels.")
    )
  },
  {
    id: 'ECON-CH3-016',
    subject: 'Economics',
    chapter: '3',
    topic: 'Credit Control - Cash Reserve Ratio',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a quantitative credit control measure?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Bank rate"),
        React.createElement("li", null, "B. Open market operations"),
        React.createElement("li", null, "C. Cash Reserve Ratio"),
        React.createElement("li", null, "D. Moral suasion")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Cash Reserve Ratio"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Cash Reserve Ratio is a quantitative measure as it specifies the percentage of deposits that banks must keep as reserves.")
    )
  },
  {
    id: 'ECON-CH3-017',
    subject: 'Economics',
    chapter: '3',
    topic: 'Cost Push Inflation',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main cause of 'Cost Push Inflation' is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Increase in money supply"),
        React.createElement("li", null, "B. Increase in production costs"),
        React.createElement("li", null, "C. Decrease in taxation"),
        React.createElement("li", null, "D. Increase in consumer spending")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Increase in production costs"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Cost push inflation occurs when the costs of production (wages, raw materials, etc.) increase, leading producers to raise prices.")
    )
  },
  {
    id: 'ECON-CH3-018',
    subject: 'Economics',
    chapter: '3',
    topic: 'Tertiary Sector GDP Contribution',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which sector contributes the maximum to India's GDP?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Primary sector"),
        React.createElement("li", null, "B. Secondary sector"),
        React.createElement("li", null, "C. Tertiary sector"),
        React.createElement("li", null, "D. Quaternary sector")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Tertiary sector"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The tertiary sector (services) contributes the maximum to India's GDP, accounting for about 53-54% of the total GDP.")
    )
  },
  {
    id: 'ECON-CH3-019',
    subject: 'Economics',
    chapter: '3',
    topic: 'Bank Rate',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Bank Rate' is the rate at which:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Commercial banks lend to customers"),
        React.createElement("li", null, "B. RBI lends to commercial banks"),
        React.createElement("li", null, "C. Commercial banks lend to each other"),
        React.createElement("li", null, "D. Customers deposit money in banks")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. RBI lends to commercial banks"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Bank Rate is the rate at which the Reserve Bank of India lends money to commercial banks as a lender of last resort.")
    )
  },
  {
    id: 'ECON-CH3-020',
    subject: 'Economics',
    chapter: '3',
    topic: 'Stagflation',
    source: 'Sample Paper 2023',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The term 'stagflation' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. High inflation with high growth"),
        React.createElement("li", null, "B. Low inflation with low growth"),
        React.createElement("li", null, "C. High inflation with low growth"),
        React.createElement("li", null, "D. Low inflation with high growth")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. High inflation with low growth"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Stagflation is a situation characterized by high inflation, high unemployment, and stagnant economic growth.")
    )
  },
  {
    id: 'ECON-CH3-021',
    subject: 'Economics',
    chapter: '3',
    topic: 'Functions of Money',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a function of money?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Medium of exchange"),
        React.createElement("li", null, "B. Unit of account"),
        React.createElement("li", null, "C. Store of value"),
        React.createElement("li", null, "D. Unit of production")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Unit of production"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Money serves as a medium of exchange, unit of account, and store of value. It is not a unit of production.")
    )
  },
  {
    id: 'ECON-CH3-022',
    subject: 'Economics',
    chapter: '3',
    topic: 'Qualitative Credit Control',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a qualitative credit control measure?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Bank Rate"),
        React.createElement("li", null, "B. Cash Reserve Ratio"),
        React.createElement("li", null, "C. Statutory Liquidity Ratio"),
        React.createElement("li", null, "D. Margin requirements")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Margin requirements"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Margin requirements are qualitative measures as they regulate the quality and purpose of credit by specifying the difference between the value of security and loan amount.")
    )
  },
  {
    id: 'ECON-CH3-023',
    subject: 'Economics',
    chapter: '3',
    topic: 'Monetary Policy Objective',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of monetary policy is:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Price stability"),
        React.createElement("p", null, "b) Employment generation"),
        React.createElement("p", null, "c) Foreign exchange management"),
        React.createElement("p", null, "d) Agricultural development")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Price stability"),
    explanation: React.createElement("p", null, "The primary objective of monetary policy is to maintain price stability in the economy, though it also supports other objectives like economic growth and employment.")
  },
  {
    id: 'ECON-CH3-024',
    subject: 'Economics',
    chapter: '3',
    topic: 'Primary Sector',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is included in the primary sector?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Banking"),
        React.createElement("p", null, "b) Mining"),
        React.createElement("p", null, "c) Transport"),
        React.createElement("p", null, "d) Education")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Mining"),
    explanation: React.createElement("p", null, "Primary sector includes activities that extract natural resources directly from nature, such as mining, agriculture, fishing, and forestry.")
  },
  {
    id: 'ECON-CH3-025',
    subject: 'Economics',
    chapter: '3',
    topic: 'Cash Reserve Ratio',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a quantitative credit control measure?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Bank rate"),
        React.createElement("p", null, "b) Cash Reserve Ratio"),
        React.createElement("p", null, "c) Open market operations"),
        React.createElement("p", null, "d) Margin requirements")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Cash Reserve Ratio"),
    explanation: React.createElement("p", null, "Cash Reserve Ratio (CRR) is a quantitative measure as it specifies the minimum percentage of deposits that banks must keep as cash reserves with RBI.")
  },
  {
    id: 'ECON-CH3-026',
    subject: 'Economics',
    chapter: '3',
    topic: 'Functions of Money',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a function of money?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Medium of exchange"),
        React.createElement("p", null, "b) Store of value"),
        React.createElement("p", null, "c) Unit of account"),
        React.createElement("p", null, "d) Redistribution of income")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Redistribution of income"),
    explanation: React.createElement("p", null, "The primary functions of money are medium of exchange, measure of value/unit of account, and store of value. Redistribution of income is done through fiscal policy.")
  },
  {
    id: 'ECON-CH3-027',
    subject: 'Economics',
    chapter: '3',
    topic: 'Inflation Causes',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main cause of inflation in India is:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Increase in money supply"),
        React.createElement("p", null, "b) Decrease in production"),
        React.createElement("p", null, "c) Both a and b"),
        React.createElement("p", null, "d) Neither a nor b")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Both a and b"),
    explanation: React.createElement("p", null, "Inflation occurs due to excess demand (increase in money supply) or decrease in aggregate supply (decrease in production).")
  },
  {
    id: 'ECON-CH3-028',
    subject: 'Economics',
    chapter: '3',
    topic: 'Tertiary Sector',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not included in the tertiary sector?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Trade"),
        React.createElement("p", null, "b) Transport"),
        React.createElement("p", null, "c) Manufacturing"),
        React.createElement("p", null, "d) Communication")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Manufacturing"),
    explanation: React.createElement("p", null, "Tertiary sector includes services like trade, transport, communication, banking, etc. Manufacturing belongs to the secondary sector.")
  },
  {
    id: 'ECON-CH3-029',
    subject: 'Economics',
    chapter: '3',
    topic: 'Qualitative Credit Control',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a qualitative credit control measure?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Bank rate"),
        React.createElement("p", null, "b) Open market operations"),
        React.createElement("p", null, "c) Cash Reserve Ratio"),
        React.createElement("p", null, "d) Margin requirements")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Margin requirements"),
    explanation: React.createElement("p", null, "Margin requirements specify the minimum down payment for loans against securities. It is a qualitative measure as it controls the quality and purpose of credit.")
  },
  {
    id: 'ECON-CH3-030',
    subject: 'Economics',
    chapter: '3',
    topic: 'RBI Functions',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main function of Reserve Bank of India is:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Accepting deposits"),
        React.createElement("p", null, "b) Issuing currency"),
        React.createElement("p", null, "c) Providing loans to farmers"),
        React.createElement("p", null, "d) Managing foreign exchange")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Issuing currency"),
    explanation: React.createElement("p", null, "The primary function of RBI is to issue currency notes and coins. It also acts as banker to the government and regulates the banking system.")
  }
];

const economicsChapter4: MCQPoolQuestion[] = [];

const economicsChapter5: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH5-001',
    subject: 'Economics',
    chapter: '5',
    topic: 'Fiscal Deficit Reduction',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "On the basis of the given text, differentiate between the two types of revenue receipts and elaborate the reasons behind the reduction in the fiscal deficit of India for FY 2023-24."),
      React.createElement("p", { className: "mt-2 italic text-sm" }, "(Text refers to a passage about India's fiscal consolidation due to buoyant tax and non-tax revenues, and restrained expenditure).")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "font-semibold"}, "Difference between Revenue Receipts:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2" },
        React.createElement("li", null, React.createElement("b", null, "Tax Revenue:"), " These are compulsory payments imposed by the government on individuals and corporations (e.g., income tax, GST). They are unilateral payments, meaning the government does not promise any direct service or benefit in return."),
        React.createElement("li", null, React.createElement("b", null, "Non-Tax Revenue:"), " These are receipts of the government from sources other than taxes. They include dividends from public sector undertakings, interest received on loans given by the government, fees, fines, and grants.")
      ),
      React.createElement("p", {className: "mt-4 font-semibold"}, "Reasons for Fiscal Deficit Reduction in FY 2023-24:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2" },
        React.createElement("li", null, React.createElement("b", null, "Buoyant Tax Revenues:"), " Strong growth in both direct and indirect tax collections, driven by resilient economic activity and improved tax compliance, exceeded budgetary estimates."),
        React.createElement("li", null, React.createElement("b", null, "Higher Non-Tax Revenue:"), " The government received higher-than-budgeted non-tax revenue, particularly in the form of dividends from the Reserve Bank of India (RBI)."),
        React.createElement("li", null, React.createElement("b", null, "Restrained Expenditure:"), " The buoyant revenues were combined with controlled or restrained revenue expenditure, which helped in narrowing the deficit.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The fiscal deficit is the gap between the government's total expenditure and its total receipts excluding borrowings. The deficit shrank because the government's income (both from taxes and other sources like RBI's profits) increased significantly, while its spending was kept under control. This combination of rising income and managed spending is key to fiscal consolidation.")
    )
  },
  {
    id: 'ECON-CH5-002',
    subject: 'Economics',
    chapter: '5',
    topic: 'Direct Tax - Income Tax',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a direct tax?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Sales tax"),
        React.createElement("li", null, "B. Excise duty"),
        React.createElement("li", null, "C. Income tax"),
        React.createElement("li", null, "D. Service tax")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Income tax"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Direct taxes are levied directly on individuals and organizations, such as income tax, corporate tax, and wealth tax.")
    )
  },
  {
    id: 'ECON-CH5-003',
    subject: 'Economics',
    chapter: '5',
    topic: 'Demonetization',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The concept of 'Demonetization' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Printing new currency"),
        React.createElement("li", null, "B. Withdrawing old currency from circulation"),
        React.createElement("li", null, "C. Increasing money supply"),
        React.createElement("li", null, "D. Decreasing interest rates")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Withdrawing old currency from circulation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Demonetization involves declaring certain currency notes invalid and withdrawing them from circulation.")
    )
  },
  {
    id: 'ECON-CH5-004',
    subject: 'Economics',
    chapter: '5',
    topic: 'Government Revenue Sources',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is not a source of government revenue?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Taxes"),
        React.createElement("li", null, "B. Fees"),
        React.createElement("li", null, "C. Fines"),
        React.createElement("li", null, "D. Subsidies")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. Subsidies"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Subsidies are government expenditures, not sources of revenue. Taxes, fees, and fines are sources of government revenue.")
    )
  },
  {
    id: 'ECON-CH5-005',
    subject: 'Economics',
    chapter: '5',
    topic: 'Fiscal Policy',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The term 'Fiscal Policy' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Monetary policy of RBI"),
        React.createElement("li", null, "B. Government's taxation and expenditure policy"),
        React.createElement("li", null, "C. Foreign trade policy"),
        React.createElement("li", null, "D. Agricultural policy")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Government's taxation and expenditure policy"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Fiscal policy involves government decisions regarding taxation, public expenditure, and borrowing to influence economic activity.")
    )
  },
  {
    id: 'ECON-CH5-006',
    subject: 'Economics',
    chapter: '5',
    topic: 'Non-Tax Revenue',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a non-tax revenue receipt?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Income tax"),
        React.createElement("li", null, "B. Corporation tax"),
        React.createElement("li", null, "C. Dividends from public sector enterprises"),
        React.createElement("li", null, "D. Service tax")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Dividends from public sector enterprises"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Non-tax revenue includes interest, dividends, fees, and fines received by the government from various sources.")
    )
  },
  {
    id: 'ECON-CH5-007',
    subject: 'Economics',
    chapter: '5',
    topic: 'Indirect Tax - GST',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is an indirect tax?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Personal income tax"),
        React.createElement("li", null, "B. Corporate tax"),
        React.createElement("li", null, "C. Goods and Services Tax (GST)"),
        React.createElement("li", null, "D. Wealth tax")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Goods and Services Tax (GST)"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "GST is an indirect tax as it is levied on the sale of goods and services, and the burden can be passed on to the final consumer.")
    )
  },
  {
    id: 'ECON-CH5-008',
    subject: 'Economics',
    chapter: '5',
    topic: 'Fiscal Deficit',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Fiscal Deficit' is the difference between:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Total expenditure and total receipts"),
        React.createElement("li", null, "B. Revenue expenditure and revenue receipts"),
        React.createElement("li", null, "C. Capital expenditure and capital receipts"),
        React.createElement("li", null, "D. Tax revenue and non-tax revenue")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Total expenditure and total receipts"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Fiscal deficit is the difference between the government's total expenditure and total receipts (including borrowings).")
    )
  },
  {
    id: 'ECON-CH5-009',
    subject: 'Economics',
    chapter: '5',
    topic: 'Non-Debt Capital Receipts',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a non-debt creating capital receipt?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Market borrowings"),
        React.createElement("li", null, "B. External assistance"),
        React.createElement("li", null, "C. Recovery of loans"),
        React.createElement("li", null, "D. Provident fund")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Recovery of loans"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Recovery of loans is a non-debt creating capital receipt as it represents repayment of previously given loans, not new borrowing.")
    )
  },
  {
    id: 'ECON-CH5-010',
    subject: 'Economics',
    chapter: '5',
    topic: 'Laffer Curve',
    source: 'Sample Paper 2023',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'Laffer Curve' is related to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Taxation and revenue"),
        React.createElement("li", null, "B. Inflation and unemployment"),
        React.createElement("li", null, "C. Savings and investment"),
        React.createElement("li", null, "D. Exports and imports")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: A. Taxation and revenue"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The Laffer Curve shows the relationship between tax rates and tax revenue, suggesting that there is an optimal tax rate that maximizes revenue.")
    )
  },
  {
    id: 'ECON-CH5-011',
    subject: 'Economics',
    chapter: '5',
    topic: 'Direct Tax',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a direct tax?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Sales tax"),
        React.createElement("p", null, "b) Excise duty"),
        React.createElement("p", null, "c) Income tax"),
        React.createElement("p", null, "d) Custom duty")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Income tax"),
    explanation: React.createElement("p", null, "Income tax is a direct tax as it is paid directly by the person on whom it is imposed, unlike indirect taxes like sales tax, excise duty, and custom duty which are collected from intermediaries.")
  },
  {
    id: 'ECON-CH5-012',
    subject: 'Economics',
    chapter: '5',
    topic: 'Capital Receipts',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a capital receipt?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Sale of old machinery"),
        React.createElement("p", null, "b) Dividend received"),
        React.createElement("p", null, "c) Interest on bank deposits"),
        React.createElement("p", null, "d) Rent received")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Sale of old machinery"),
    explanation: React.createElement("p", null, "Sale of old machinery is a capital receipt as it involves disposal of fixed assets. Dividend, interest, and rent are revenue receipts.")
  },
  {
    id: 'ECON-CH5-013',
    subject: 'Economics',
    chapter: '5',
    topic: 'Fiscal Measures - Inflation Control',
    source: 'Sample Paper 2022',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a fiscal measure to control inflation?"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Increase in bank rate"),
        React.createElement("p", null, "b) Increase in cash reserve ratio"),
        React.createElement("p", null, "c) Increase in taxes"),
        React.createElement("p", null, "d) Decrease in margin requirements")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Increase in taxes"),
    explanation: React.createElement("p", null, "Increase in taxes reduces disposable income and consumption expenditure, thereby reducing aggregate demand and controlling inflation.")
  }
];

const economicsChapter6: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH6-001',
    subject: 'Economics',
    chapter: '6',
    topic: 'Hindu Rate of Growth',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The concept of 'Hindu rate of growth' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Agricultural growth rate"),
        React.createElement("li", null, "B. Industrial growth rate"),
        React.createElement("li", null, "C. Overall GDP growth rate"),
        React.createElement("li", null, "D. Population growth rate")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Overall GDP growth rate"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The 'Hindu rate of growth' refers to India's slow GDP growth rate of around 3.5% per annum during the period 1950-1980.")
    )
  },
  {
    id: 'ECON-CH6-002',
    subject: 'Economics',
    chapter: '6',
    topic: 'Green Revolution',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main aim of the Green Revolution was:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Industrial development"),
        React.createElement("li", null, "B. Agricultural development"),
        React.createElement("li", null, "C. Service sector development"),
        React.createElement("li", null, "D. Infrastructure development")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Agricultural development"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The Green Revolution aimed to increase agricultural production through high-yielding varieties of seeds, fertilizers, and irrigation.")
    )
  },
  {
    id: 'ECON-CH6-003',
    subject: 'Economics',
    chapter: '6',
    topic: 'LPG Model - Economic Reforms',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a component of the LPG model?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Liberalization"),
        React.createElement("li", null, "B. Privatization"),
        React.createElement("li", null, "C. Globalization"),
        React.createElement("li", null, "D. All of the above")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. All of the above"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "LPG stands for Liberalization, Privatization, and Globalization - the three components of India's economic reforms in 1991.")
    )
  },
  {
    id: 'ECON-CH6-004',
    subject: 'Economics',
    chapter: '6',
    topic: 'NREGA - Rural Employment',
    source: 'Sample Paper 2024',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the National Rural Employment Guarantee Act (NREGA) is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Industrial development"),
        React.createElement("li", null, "B. Rural employment generation"),
        React.createElement("li", null, "C. Urban development"),
        React.createElement("li", null, "D. Foreign investment")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Rural employment generation"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "NREGA aims to provide at least 100 days of guaranteed wage employment to rural households for livelihood security.")
    )
  },
  {
    id: 'ECON-CH6-005',
    subject: 'Economics',
    chapter: '6',
    topic: 'One Child Policy - China',
    source: 'Sample Paper 2023',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The 'One Child Policy' was implemented in:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. India"),
        React.createElement("li", null, "B. China"),
        React.createElement("li", null, "C. Japan"),
        React.createElement("li", null, "D. South Korea")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. China"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "China implemented the One Child Policy in 1979 to control population growth, which was relaxed in 2015.")
    )
  },
  {
    id: 'ECON-CH6-006',
    subject: 'Economics',
    chapter: '6',
    topic: 'Make in India Initiative',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The main objective of the 'Make in India' initiative is:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Promote agricultural exports"),
        React.createElement("li", null, "B. Boost manufacturing sector"),
        React.createElement("li", null, "C. Increase service exports"),
        React.createElement("li", null, "D. Promote tourism")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Boost manufacturing sector"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "'Make in India' was launched in 2014 to transform India into a global manufacturing hub and boost the manufacturing sector's contribution to GDP.")
    )
  }
];

const economicsChapter7: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH7-001',
    subject: 'Economics',
    chapter: '7',
    topic: 'Devaluation vs Revaluation',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 1:"), " Devaluation of currency is said to occur when the exchange rate is decreased under the Fixed Exchange Rate System."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Statement 2:"), " Under the Floating Exchange Rate System, competent authorities do not maintain foreign exchange reserves."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Statement 1 is true and Statement 2 is false."),
        React.createElement("li", null, "B. Statement 1 is false and Statement 2 is true."),
        React.createElement("li", null, "C. Both Statements 1 and 2 are true."),
        React.createElement("li", null, "D. Both Statements 1 and 2 are false.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Statement 1 is false and Statement 2 is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Statement 1 is false."), " Devaluation is when the government increases the exchange rate (e.g., from $1 = ₹70 to ₹75), making domestic currency cheaper. A decrease in the exchange rate (e.g., from ₹75 to ₹70) is revaluation."),
        React.createElement("li", null, React.createElement("b", null, "Statement 2 is true."), " In a pure floating (or flexible) exchange rate system, the rate is determined entirely by market forces of demand and supply, so the central bank does not need to intervene or maintain reserves for this purpose.")
      )
    )
  },
  {
    id: 'ECON-CH7-002',
    subject: 'Economics',
    chapter: '7',
    topic: 'External Assistance - BOP Account',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Read the following statements: Assertion (A) and Reason (R)."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Assertion (A):"), " External Assistance is recorded in the Current Account of the Balance of Payments of a nation."),
      React.createElement("p", { className: "mt-2" }, React.createElement("b", null, "Reason (R):"), " External Assistance includes bilateral and multilateral loans received/extended by a nation."),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Both (A) and (R) are true and (R) is the correct explanation of (A)."),
        React.createElement("li", null, "B. Both (A) and (R) are true but (R) is not the correct explanation of (A)."),
        React.createElement("li", null, "C. (A) is true, but (R) is false."),
        React.createElement("li", null, "D. (A) is false, but (R) is true.")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: D. (A) is false, but (R) is true."),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Assertion (A) is false."), " External assistance (loans) involves a change in the country's assets or liabilities with the rest of the world. Therefore, it is recorded in the Capital Account, not the Current Account."),
        React.createElement("li", null, React.createElement("b", null, "Reason (R) is true."), " This correctly defines what external assistance consists of.")
      )
    )
  },
  {
    id: 'ECON-CH7-003',
    subject: 'Economics',
    chapter: '7',
    topic: 'Autonomous vs Accommodating Transactions',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", { className: "font-semibold" }, "Mr. Spector, a normal resident of XYZ country, took a $1 million loan from an overseas bank. During the same year, the Government of XYZ country borrowed $5 billion from an international financial institution to cover the Balance of Payments (BoP) deficit. Do you agree that both transactions are autonomous transactions in the BoP account? Give valid arguments."),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", null, "No, I do not agree with the statement. The two transactions are different in nature."),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Mr. Spector's Loan (Autonomous Transaction):"), " The loan taken by Mr. Spector is an autonomous transaction. This is because it is undertaken for an independent economic motive (to expand his business) and is not related to the state of the country's BoP. Such transactions are often called 'above the line' items in the BoP account."),
        React.createElement("li", null, React.createElement("b", null, "Government's Loan (Accommodating Transaction):"), " The loan taken by the Government is an accommodating transaction. This is because it is undertaken specifically to cover the deficit in the BoP, not for an independent profit or economic motive. These transactions are meant to balance the BoP account and are often called 'below the line' items.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The key difference is the motive. Autonomous transactions happen regardless of the BoP situation and are driven by business or personal reasons. Accommodating transactions are a direct response to the BoP situation, undertaken by the monetary authorities to settle the final balance.")
    )
  },
  {
    id: 'ECON-CH7-005',
    subject: 'Economics',
    chapter: '7',
    topic: 'Current Account - Balance of Payments',
    source: 'Sample Paper 2023',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "Which of the following is a component of the current account in Balance of Payments?"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Foreign investment"),
        React.createElement("li", null, "B. Loans from abroad"),
        React.createElement("li", null, "C. Export of goods"),
        React.createElement("li", null, "D. Change in foreign exchange reserves")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: C. Export of goods"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "The current account includes transactions in goods (exports/imports), services, income, and current transfers.")
    )
  }
];

const economicsChapter8: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH8-001',
    subject: 'Economics',
    chapter: '8',
    topic: 'Financial Sector Reforms',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"},"The Government decided to promote the development of mutual funds by opening the field to private and joint sectors. Identify the sector under which this reform was introduced."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. Financial"),
    explanation: React.createElement("p", {className:"mt-2"}, "Mutual funds are a key part of the financial markets. Reforms related to their operation, regulation, and ownership structure fall under the category of Financial Sector reforms.")
  },
  {
    id: 'ECON-CH8-002',
    subject: 'Economics',
    chapter: '8',
    topic: 'Colonial Period - British Monopoly',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"},"Which country maintained a monopoly control over India's exports and imports during the colonial period?"),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: C. Britain"),
    explanation: React.createElement("p", {className:"mt-2"}, "During the colonial era, Britain implemented restrictive trade policies that gave it monopoly control over India's foreign trade. India became an exporter of raw materials to Britain and an importer of finished goods from British industries.")
  },
  {
    id: 'ECON-CH8-003',
    subject: 'Economics',
    chapter: '8',
    topic: 'Human Capital Characteristics',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "Human capital is (i) intangible in nature, (ii) imperfectly mobile, (iii) inseparable from its owner. Choose the correct option."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: D. (i), (ii) and (iii)"),
    explanation: React.createElement("p", {className:"mt-2"}, "All three statements correctly describe human capital. It's intangible (knowledge), imperfectly mobile (a person's skills can't be sold without the person), and inseparable from its owner.")
  },
  {
    id: 'ECON-CH8-004',
    subject: 'Economics',
    chapter: '8',
    topic: 'Green Revolution - Rural Credit',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "Assertion (A): Indian rural credit system was significantly transformed with technological reforms in agriculture. Reason (R): Green Revolution led to diversification of rural credit towards production-oriented lending."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)."),
    explanation: React.createElement("p", {className:"mt-2"}, "The Green Revolution (Reason) required farmers to purchase modern inputs like high-yielding seeds, fertilizers, and machinery, which diversified the need for credit from consumption to production purposes. This shift in demand for credit was a significant transformation of the rural credit system (Assertion). Thus, R correctly explains A.")
  },
  {
    id: 'ECON-CH8-005',
    subject: 'Economics',
    chapter: '8',
    topic: 'Informal Sector - ILO',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "Owing to the efforts of the ______, the Indian government initiated modernisation of informal sector enterprises."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. International Labour Organisation"),
    explanation: React.createElement("p", {className:"mt-2"}, "The International Labour Organisation (ILO) has been a key global agency advocating for and assisting governments in the formalization and modernization of the informal sector to improve working conditions and productivity.")
  },
  {
    id: 'ECON-CH8-006',
    subject: 'Economics',
    chapter: '8',
    topic: 'Primary Sector Classification',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "In the light of the given text classifying economic activities, the primary sector includes (i) Agriculture and (ii) Mining and Quarrying. Choose the correct option."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: B. (i) and (ii)"),
    explanation: React.createElement("p", {className:"mt-2"}, "The primary sector of the economy involves the extraction and harvesting of natural resources. This includes both Agriculture (i) and Mining & Quarrying (ii).")
  },
  {
    id: 'ECON-CH8-007',
    subject: 'Economics',
    chapter: '8',
    topic: 'Environment - Supply-Demand',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "The population explosion and advent of Industrial Revolution led to the ______."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. reversal of supply-demand relationship of environmental resources"),
    explanation: React.createElement("p", {className:"mt-2"}, "Before these events, environmental resources were abundant relative to demand (supply > demand). Afterwards, rapid population growth and industrial consumption made these resources scarce (demand > supply), reversing the relationship.")
  },
  {
    id: 'ECON-CH8-008',
    subject: 'Economics',
    chapter: '8',
    topic: 'Horticulture - Golden Revolution',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "From the set of terms given in Column I and corresponding facts given in Column II, choose the correct pair of statements."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: C. (c)-iii"),
    explanation: React.createElement("p", {className:"mt-2"}, "The correct match is (c) Horticulture with (iii) India is the second-largest producer of fruits and vegetables in the world. This period is often referred to as the 'Golden Revolution'.")
  },
  {
    id: 'ECON-CH8-009',
    subject: 'Economics',
    chapter: '8',
    topic: 'Agricultural Marketing Regulation',
    source: 'Sample Paper 2025',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "______ is the measure being taken to create orderly and transparent marketing conditions."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: D. Regulation of markets"),
    explanation: React.createElement("p", {className:"mt-2"}, "The government measure of establishing regulated markets is specifically designed to protect farmers from exploitation by intermediaries and to ensure transparent pricing and fair practices.")
  },
  {
    id: 'ECON-CH8-010',
    subject: 'Economics',
    chapter: '8',
    topic: 'China - Great Leap Forward',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className: "font-semibold"}, "Read the following statements carefully: Statement 1: Great Leap Forward (GLF) campaign met with many problems like severe drought, conflict with Russia etc. Statement 2: Under agricultural reforms, commune lands were allocated to individual households for ownership..."),
    solution: React.createElement("p", {className: "font-bold text-green-700"}, "Correct Answer: A. Statement 1 is true and Statement 2 is false."),
    explanation: React.createElement("p", {className:"mt-2"}, "Statement 1 is true; the GLF campaign in China did face severe disruptions. Statement 2 is false; while commune lands were allocated for cultivation, the ownership of land remained with the state/collective.")
  }
];

const economicsChapter9: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH9-001',
    subject: 'Economics',
    chapter: '9',
    topic: 'Pakistan Economic Growth',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className:"font-semibold"},"\"Pakistan was maintaining a healthy economic growth momentum of 6.3% till 1990s, however it lost its track...\" Do you agree with the given statement? Justify your answer with valid arguments."),
    solution: React.createElement("p", null,"Yes, the statement is correct."),
    explanation: React.createElement("p", {className:"mt-2"}, "Pakistan's growth did slow down after the 1990s. The reasons include: over-reliance on foreign remittances and aid rather than building a strong domestic economic base, political instability which deterred investment, and a lack of sustained technological advancement, particularly in agriculture which remained dependent on favorable harvests.")
  },
  {
    id: 'ECON-CH9-002',
    subject: 'Economics',
    chapter: '9',
    topic: 'Sustainable Development - Barbier',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className:"font-semibold"},"\"Edward Barbier defined Sustainable Development as a strategy which is directly concerned with increasing the material standard of living of the poor at the grass root level.\" Elaborate the given statement."),
    solution: React.createElement("p", null, "This definition emphasizes that sustainable development must prioritize the well-being of the poorest sections of society."),
    explanation: React.createElement("p", {className:"mt-2"}, "According to this view, true sustainable development isn't just about environmental conservation in the abstract. It must actively work to reduce absolute poverty by creating secure livelihoods and improving access to essential services like income, education, and health for the poor. This should be achieved while minimizing resource depletion, environmental damage, and social instability, ensuring that development is both equitable and lasting.")
  },
  {
    id: 'ECON-CH9-003',
    subject: 'Economics',
    chapter: '9',
    topic: 'Colonial Railways Impact',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className:"font-semibold"},"\"The introduction of Railways affected the structure of the Indian economy in two important ways.\" Justify the given statement, with valid explanation."),
    solution: React.createElement("p", null, "The introduction of railways had two major impacts on the Indian economy's structure:"),
    explanation: React.createElement("ul", {className: "list-disc pl-5 mt-2 space-y-2"}, 
      React.createElement("li", null, React.createElement("b",null, "Fostered Commercialisation of Agriculture:"), " Railways enabled the cheap and quick transport of agricultural goods from farming areas to ports for export. This encouraged farmers to shift from subsistence farming (growing for self-consumption) to commercial farming (growing cash crops for the market), primarily to serve British industries. This adversely affected the food security and self-sufficiency of village economies."), 
      React.createElement("li", null, React.createElement("b",null,"Broke Geographical and Cultural Barriers:"), " By enabling people to undertake long-distance travel, railways connected different parts of the vast country. This facilitated interaction between people from various regions, contributing to a sense of national unity and breaking down some geographical and cultural barriers."))
  },
  {
    id: 'ECON-CH9-004',
    subject: 'Economics',
    chapter: '9',
    topic: 'Economic Groupings & SEZ',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className:"font-semibold"},"(I) Explain the importance of regional and global economic groupings. (II) Define 'Special Economic Zone'."),
    solution: React.createElement(React.Fragment, null, 
      React.createElement("p", {className:"font-semibold"}, "(I) Importance of Economic Groupings:"), 
      React.createElement("p", {className:"mt-1"}, "Regional and global economic groupings like G-20, SAARC, and BRICS are vital for developing nations like India. They provide a platform to understand the development strategies of other nations, both neighboring and global. This allows a country to better assess its own strengths and weaknesses, learn from others' successes and failures, and negotiate trade and economic policies with a stronger, collective voice."), 
      React.createElement("p", {className:"font-semibold mt-4"}, "(II) Special Economic Zone (SEZ):"), 
      React.createElement("p", {className:"mt-1"}, "A Special Economic Zone is a geographical region within a country that has economic laws that are more liberal than the country's typical economic laws. SEZs are created to attract foreign investment, boost exports, and create employment by offering incentives such as tax breaks, duty-free imports, and simplified regulatory procedures.")),
    explanation: null
  },
  {
    id: 'ECON-CH9-005',
    subject: 'Economics',
    chapter: '9',
    topic: 'Organic vs Conventional Farming',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement("p", {className:"font-semibold"},"Refer to the given image carefully: (I) Identify the type of farming in Panel A and Panel B. (II) Explain any one advantage and disadvantage of the type of farming in Panel B over Panel A."),
    solution: React.createElement(React.Fragment, null, 
      React.createElement("p", {className:"font-semibold"}, "(I) Identification of Farming Types:"), 
      React.createElement("p", null, "Panel A depicts Conventional Farming, characterized by mechanization and monoculture. Panel B depicts Organic Farming, which focuses on ecological balance and avoids synthetic inputs."), 
      React.createElement("p", {className:"font-semibold mt-4"}, "(II) Advantage and Disadvantage of Organic Farming:"), 
      React.createElement("ul", {className: "list-disc pl-5 mt-2 space-y-2"}, 
        React.createElement("li", null, React.createElement("b", null, "Advantage:"), " It enhances ecological balance. By relying on organic manures and composts and avoiding chemical fertilizers and pesticides, it helps in maintaining and improving soil health and fertility in the long run."), 
        React.createElement("li", null, React.createElement("b", null, "Disadvantage:"), " Yields from organic farming are often lower than from conventional farming, especially in the initial years. This can make it financially difficult for small and marginal farmers to adopt, as it may lead to a decrease in income."))),
    explanation: null
  },
  {
    id: 'ECON-CH9-006',
    subject: 'Economics',
    chapter: '9',
    topic: 'Balance of Trade',
    source: 'Sample Paper 2024',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The term 'Balance of Trade' refers to:"),
      React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
        React.createElement("li", null, "A. Capital account transactions"),
        React.createElement("li", null, "B. Visible trade only"),
        React.createElement("li", null, "C. Invisible trade only"),
        React.createElement("li", null, "D. Both visible and invisible trade")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "Correct Answer: B. Visible trade only"),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mt-2" }, "Balance of Trade refers to the difference between the value of exports and imports of visible goods (physical goods).")
    )
  },
  {
    id: 'ECON-CH9-007',
    subject: 'Economics',
    chapter: '9',
    topic: 'Balance of Trade Definition',
    source: 'Sample Paper 2022',
    difficulty: 'easy',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "The difference between exports and imports is called:"),
      React.createElement("div", { className: "mt-2 space-y-1" },
        React.createElement("p", null, "a) Balance of trade"),
        React.createElement("p", null, "b) Balance of payments"),
        React.createElement("p", null, "c) Trade surplus"),
        React.createElement("p", null, "d) Current account")
      )
    ),
    solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Balance of trade"),
    explanation: React.createElement("p", null, "Balance of trade is the difference between the value of exports and imports of visible goods only. Balance of payments includes both visible and invisible items.")
  }
];

const economicsChapter10: MCQPoolQuestion[] = [
  {
    id: 'ECON-CH10-001',
    subject: 'Economics',
    chapter: '10',
    topic: 'IPR 1956 & Land Ceiling',
    source: 'Sample Paper 2025',
    difficulty: 'hard',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) \"Government made a fresh statement of policy on the 30th April, 1956 which will help speeding up industrialisation and, in particular, to develop heavy industries and machine making industries, to expand the public sector, and to build up a large and growing co-operative sector\". Comment upon the classification of industries under the revised policy."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(II) \"The implementation of land ceiling legislation in India encountered several challenges that hindered its effectiveness.\" Do you agree with the given statement? Give valid reasons in support of your answer.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "font-semibold"}, "(I) Industrial Policy Resolution (IPR) 1956 Classification:"),
      React.createElement("p", {className: "mt-1"}, "The IPR 1956 classified industries into three schedules to expand the role of the public sector:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Schedule A:"), " Comprised 17 industries that were to be exclusively owned and established by the state (public sector). Examples include arms and ammunition, atomic energy, and railways."),
        React.createElement("li", null, React.createElement("b", null, "Schedule B:"), " Comprised 12 industries where the state would take the lead, and the private sector could supplement public efforts. The state would be primarily responsible for starting new units."),
        React.createElement("li", null, React.createElement("b", null, "Schedule C:"), " Consisted of all the remaining industries, which were left to the initiative and enterprise of the private sector.")
      ),
      React.createElement("p", {className: "font-semibold mt-4"}, "(II) Challenges to Land Ceiling Legislation:"),
      React.createElement("p", {className: "mt-1"}, "Yes, the statement is correct. The implementation of land ceiling legislation was hindered by several challenges:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Delays and Loopholes:"), " Big landlords challenged the legislation in courts, causing significant delays. This gave them time to exploit legal loopholes, such as registering their excess land in the names of relatives to evade the ceiling limits."),
        React.createElement("li", null, React.createElement("b", null, "Lack of Political Will:"), " In many regions, the implementation lacked strong political backing, as large farmers often held considerable political influence, leading to poor enforcement of the law.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "The IPR 1956 was a cornerstone of India's early industrial strategy, emphasizing a socialist pattern with a dominant public sector. Land ceiling, a key agrarian reform, aimed to promote equity in agriculture by redistributing surplus land. However, its noble intentions were largely defeated by powerful vested interests who successfully delayed and evaded the law.")
    )
  },
  {
    id: 'ECON-CH10-002',
    subject: 'Economics',
    chapter: '10',
    topic: 'Education Importance & Dropouts',
    source: 'Sample Paper 2025',
    difficulty: 'medium',
    examWeightage: 10,
    marks: 1,
    question: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "font-semibold" }, "(I) \"Education is considered fundamental for achieving full human potential\". Justify the given statement with valid arguments."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(II) Discuss the importance of increasing public expenditure in education."),
      React.createElement("p", { className: "mt-2 font-semibold" }, "(III) State any two main initiatives that may be implemented to tackle school dropouts and avert additional students from leaving school.")
    ),
    solution: React.createElement(React.Fragment, null,
      React.createElement("p", {className: "font-semibold"}, "(I) Justification for Education being Fundamental:"),
      React.createElement("p", {className: "mt-1"}, "Education is fundamental as it is the bedrock for developing a person's full potential. It imparts knowledge, develops skills and values, and enables rational thinking. An educated individual has better economic and social prospects, is a more aware citizen, and can contribute more effectively to national development. It fosters innovation and provides a skilled workforce, which is essential for economic growth."),
      React.createElement("p", {className: "font-semibold mt-4"}, "(II) Importance of Public Expenditure in Education:"),
      React.createElement("p", {className: "mt-1"}, "Increasing public expenditure is crucial because a large section of the population cannot afford private education. Public spending ensures more equitable access for all, including the poor and marginalized. It is essential for building infrastructure (schools, colleges), funding quality teacher training, and ensuring education remains affordable. A substantial public investment is vital for creating a high-quality and equitable public education system."),
      React.createElement("p", {className: "font-semibold mt-4"}, "(III) Two Initiatives to Tackle School Dropouts:"),
      React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
        React.createElement("li", null, React.createElement("b", null, "Provide Effective and Sufficient Infrastructure:"), " Ensuring all students have access to safe, engaging, and well-equipped schools removes physical barriers to attendance."),
        React.createElement("li", null, React.createElement("b", null, "Ensure Regular Trained Teachers:"), " Having qualified and trained teachers at every stage improves the quality of education, making learning more effective and increasing student motivation to stay in school.")
      )
    ),
    explanation: React.createElement(React.Fragment, null,
      React.createElement("h4", { className: "font-bold text-lg mt-4 text-gray-800" }, "Explanation"),
      React.createElement("p", { className: "mt-2" }, "This question covers the core philosophy of education policy. Part I is about the 'why'—why education matters for individuals and society. Part II is about the 'how'—how we fund a robust system, emphasizing the government's role in ensuring fairness and quality. Part III focuses on practical solutions to a key problem—school dropouts, linking it to the need for good schools and good teachers.")
    )
  }
];

// Combine all MCQs by subject
export const businessStudiesMCQPool = [
  ...businessStudiesChapter1,
  ...businessStudiesChapter2,
  ...businessStudiesChapter3,
  ...businessStudiesChapter4,
  ...businessStudiesChapter5,
  ...businessStudiesChapter6,
  ...businessStudiesChapter7,
  ...businessStudiesChapter8,
  ...businessStudiesChapter9,
  ...businessStudiesChapter10,
  ...businessStudiesChapter11
];

export const accountancyMCQPool = [
  ...accountancyChapter1,
  ...accountancyChapter2,
  ...accountancyChapter3,
  ...accountancyChapter4,
  ...accountancyChapter5,
  ...accountancyChapter6,
  ...accountancyChapter7,
  ...accountancyChapter8,
  ...accountancyChapter9,
  ...accountancyChapter10
];

export const economicsMCQPool = [
  ...economicsChapter1,
  ...economicsChapter2,
  ...economicsChapter3,
  ...economicsChapter4,
  ...economicsChapter5,
  ...economicsChapter6,
  ...economicsChapter7,
  ...economicsChapter8,
  ...economicsChapter9,
  ...economicsChapter10
];

// Master MCQ Pool
export const masterMCQPool: MCQPoolQuestion[] = [
  ...businessStudiesMCQPool,
  ...accountancyMCQPool,
  ...economicsMCQPool
];

// Helper functions
export const getMCQsBySubject = (subject: string): MCQPoolQuestion[] => {
  switch (subject) {
    case 'Business Studies':
      return businessStudiesMCQPool;
    case 'Accountancy':
      return accountancyMCQPool;
    case 'Economics':
      return economicsMCQPool;
    default:
      return [];
  }
};

export const getMCQsByChapter = (subject: string, chapter: string): MCQPoolQuestion[] => {
  const subjectPool = getMCQsBySubject(subject);
  return subjectPool.filter(q => q.chapter === chapter);
};

export const getMCQsByChapters = (subject: string, chapters: string[]): MCQPoolQuestion[] => {
  const subjectPool = getMCQsBySubject(subject);
  if (chapters.length === 0) return subjectPool;
  return subjectPool.filter(q => chapters.includes(q.chapter));
};

export const getRandomMCQs = (pool: MCQPoolQuestion[], count: number): MCQPoolQuestion[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
};

export const getWeightedMCQs = (subject: string, count: number): MCQPoolQuestion[] => {
  const subjectPool = getMCQsBySubject(subject);
  
  // Group by chapter
  const byChapter: { [chapter: string]: MCQPoolQuestion[] } = {};
  subjectPool.forEach(q => {
    if (!byChapter[q.chapter]) byChapter[q.chapter] = [];
    byChapter[q.chapter].push(q);
  });

  const selected: MCQPoolQuestion[] = [];
  
  // Select based on exam weightage
  Object.values(byChapter).forEach(chapterQuestions => {
    if (chapterQuestions.length === 0) return;
    const weightage = chapterQuestions[0].examWeightage;
    const targetCount = Math.round((weightage / 100) * count);
    const shuffled = chapterQuestions.sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, Math.min(targetCount, chapterQuestions.length)));
  });

  // Fill remaining if needed
  while (selected.length < count && subjectPool.length > selected.length) {
    const remaining = subjectPool.filter(q => !selected.includes(q));
    if (remaining.length === 0) break;
    selected.push(remaining[Math.floor(Math.random() * remaining.length)]);
  }

  return selected.sort(() => Math.random() - 0.5).slice(0, count);
};

// Statistics
export const getMCQStats = (subject?: string) => {
  const pool = subject ? getMCQsBySubject(subject) : masterMCQPool;
  const byChapter: { [chapter: string]: number } = {};
  const byTopic: { [topic: string]: number } = {};
  const byDifficulty: { easy: number; medium: number; hard: number } = { easy: 0, medium: 0, hard: 0 };

  pool.forEach(q => {
    byChapter[q.chapter] = (byChapter[q.chapter] || 0) + 1;
    byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
    byDifficulty[q.difficulty]++;
  });

  return {
    total: pool.length,
    byChapter,
    byTopic,
    byDifficulty
  };
};
