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
  }
];

const economicsChapter6: MCQPoolQuestion[] = [];

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
