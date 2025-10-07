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
  }
];

// Chapter 5: Organising
const businessStudiesChapter5: MCQPoolQuestion[] = [];

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
  }
];

const accountancyChapter1: MCQPoolQuestion[] = [];
const accountancyChapter2: MCQPoolQuestion[] = [];
const accountancyChapter3: MCQPoolQuestion[] = [];
const accountancyChapter4: MCQPoolQuestion[] = [];
const accountancyChapter5: MCQPoolQuestion[] = [];
const accountancyChapter6: MCQPoolQuestion[] = [];
const accountancyChapter7: MCQPoolQuestion[] = [];
const accountancyChapter8: MCQPoolQuestion[] = [];
const accountancyChapter9: MCQPoolQuestion[] = [];
const accountancyChapter10: MCQPoolQuestion[] = [];

const economicsChapter1: MCQPoolQuestion[] = [];
const economicsChapter2: MCQPoolQuestion[] = [];
const economicsChapter3: MCQPoolQuestion[] = [];
const economicsChapter4: MCQPoolQuestion[] = [];
const economicsChapter5: MCQPoolQuestion[] = [];
const economicsChapter6: MCQPoolQuestion[] = [];
const economicsChapter7: MCQPoolQuestion[] = [];
const economicsChapter8: MCQPoolQuestion[] = [];
const economicsChapter9: MCQPoolQuestion[] = [];
const economicsChapter10: MCQPoolQuestion[] = [];

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
