import { ChallengePaper } from '../../types';
import React from 'react';
import { challengeQuestions17to22 } from './business-studies-challenge-2025-q17-22.ts';
import { challengeQuestions23to26 } from './business-studies-challenge-2025-q23-26.ts';
import { challengeQuestions27to34 } from './business-studies-challenge-2025-q27-34.ts';

export const businessStudiesChallenge2025: ChallengePaper = {
  name: 'CBSE Business Studies Challenge 2025 (Main Exam)',
  challengeMode: true,
  timeLimit: 180, // 3 hours
  totalMarks: 80,
  year: 2025,
  paperType: 'main',
  questions: [
    // Questions 1-16: 1-mark MCQs (inline in main file for simplicity)
    {
      id: '1',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Management is a continuous process"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The scenario describes management as a continuous process where planning, organizing, staffing, directing, and controlling functions are performed simultaneously and continuously, not as separate one-time activities.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Nature of Management',
        bloomLevel: 'understanding',
        estimatedTime: 45
      }
    },
    {
      id: '2',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Henri Fayol's principle of discipline which emphasizes obedience to organisational rules and employment agreement, is evolved out of the experience and collective wisdom of managers. The nature of principle of management reflected through the above statement is ——————"),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Universal applicability"),
          React.createElement("li", null, "b) Flexible"),
          React.createElement("li", null, "c) Mainly behavioral"),
          React.createElement("li", null, "d) Formed by practice and experimentation")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Formed by practice and experimentation"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Henri Fayol developed his principles based on his experience as a manager and through observation of managerial practices, reflecting that management principles are formed by practice and experimentation.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Principles of Management',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    // Add more questions 3-16 here...
    // For brevity, I'll add a few more and then spread from batch files
    {
      id: '3',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of the Assertion."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Maslow's theory is widely recognized but criticized for its classification and hierarchy of needs. The reason correctly explains why the theory is both appreciated and criticized.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Motivation',
        bloomLevel: 'analyzing',
        estimatedTime: 60
      }
    },
    {
      id: '4',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Read the following statements carefully:"),
        React.createElement("p", { className: "mt-2" }, "Statement - I Values are basic truths or guidelines for behaviour which are formed after research in work situations."),
        React.createElement("p", null, "Statement - II While practising Principles of Management, values cannot be neglected as business organisations have to fulfil social and ethical responsibility towards society."),
        React.createElement("p", { className: "mt-2" }, "In the light of given statements, choose the correct alternative from the following:"),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Both the statements are true."),
          React.createElement("li", null, "b) Both the statements are false."),
          React.createElement("li", null, "c) Statement I is true, Statement II is false."),
          React.createElement("li", null, "d) Statement II is true, Statement I is false.")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Statement II is true, Statement I is false."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Statement I is false because values are formed through experience, practice, and culture, not through research in work situations. Statement II is true because values cannot be neglected while practicing management principles as organizations must fulfill social and ethical responsibilities.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Principles of Management',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '5',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Manu Priya is working as the Human Resource Manager of EDT Limited at an annual salary of ₹8 lakh per annum and is also offered shares of the company at a set price which is lower than the market price. The method being used to calculate the compensation provided to her is —————."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Time based direct financial payment"),
          React.createElement("li", null, "b) Indirect financial payment"),
          React.createElement("li", null, "c) Time based Pay Plus incentives"),
          React.createElement("li", null, "d) Performance based direct financial payment")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Time based Pay Plus incentives"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The compensation includes both a fixed annual salary (time-based) and shares at a discounted price (incentive), making it time-based pay plus incentives.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Staffing',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '6',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Out of the following, which is/are the component(s) of the social environment."),
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) 2,3,4"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Options 2, 3, and 4 relate to social environment: lifestyle changes (option 2), health awareness (option 3), and social values/ethics (option 4). Options 1 and 5 are economic and legal environments respectively.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Business Environment',
        bloomLevel: 'analyzing',
        estimatedTime: 60
      }
    },
    {
      id: '7',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) product"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The product element of marketing mix includes decisions about features, quality, packaging, labelling, and branding of goods or services offered to customers.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Marketing',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },
    {
      id: '8',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Deviations should be analysed for their causes."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Controlling involves measuring actual performance against standards and analyzing deviations for their causes to take corrective action. The other options are incorrect statements about controlling.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Controlling',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '9',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Look at the picture given below and answer the question that follows:"),
        React.createElement("p", { className: "mt-2 italic" }, "[Image: Internal source of recruitment - existing employees]"),
        React.createElement("p", { className: "mt-4" }, "Identify the incorrect statement about the type of source of recruitment depicted above."),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Management can attract qualified people to apply for vacant positions in the organisation."),
          React.createElement("li", null, "b) It may lead to dissatisfaction and frustration among existing employees."),
          React.createElement("li", null, "c) Such employees are not likely to be good employees as their background is not sufficiently known."),
          React.createElement("li", null, "d) Management has a wider choice while selecting people for employment.")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Such employees are not likely to be good employees as their background is not sufficiently known."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Internal sources of recruitment (promoting existing employees) have the advantage that the background of employees is well known to the management, making them likely to be good employees. The other statements are correct about internal recruitment.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Staffing',
        bloomLevel: 'analyzing',
        estimatedTime: 45
      }
    },
    {
      id: '10',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) iii,ii,vii,i,iv,v,vi"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The correct sequence of communication process is: Sender (iii) → Message (ii) → Encoding (vii) → Media (i) → Decoding (iv) → Receiver (v) → Feedback (vi).")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Directing',
        bloomLevel: 'analyzing',
        estimatedTime: 55
      }
    },
    {
      id: '11',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Depository is like a bank and keeps securities in electronic form on behalf of investors."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "A depository is an organization that holds securities in electronic form and provides services related to transactions in securities. It acts like a bank for securities.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Financial Markets',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '12',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "A product will be purchased only if it is perceived to be giving the greatest benefit for the money."),
        React.createElement("p", { className: "mt-2" }, "Name the feature of marketing reflected in this statement"),
        React.createElement("ul", { className: "list-none pl-6 mt-4 space-y-2" },
          React.createElement("li", null, "a) Creating a market offering"),
          React.createElement("li", null, "b) Customer value"),
          React.createElement("li", null, "c) Exchange mechanism"),
          React.createElement("li", null, "d) Needs and wants")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Customer value"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Customer value refers to the perception that a product provides the greatest benefit relative to its cost. This is a key concept in marketing where customers evaluate products based on value for money.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Marketing',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },
    {
      id: '13',
      marks: 1,
      question: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-semibold" }, "Match the concepts of management given in column I with their meaning given in column II"),
        React.createElement("div", { className: "mt-4 bg-gray-50 p-4 rounded" },
          React.createElement("div", { className: "grid grid-cols-2 gap-4" },
            React.createElement("div", null,
              React.createElement("h5", { className: "font-bold mb-2" }, "COLUMN I"),
              React.createElement("p", null, "A Management Hierarchy"),
              React.createElement("p", null, "B Coordination"),
              React.createElement("p", null, "C Organising"),
              React.createElement("p", null, "D Controlling")
            ),
            React.createElement("div", null,
              React.createElement("h5", { className: "font-bold mb-2" }, "COLUMN II"),
              React.createElement("p", null, "i Involves defining and grouping of activities, resource allocation and establishment of authority relationships."),
              React.createElement("p", null, "ii Involves establishing performance standards measuring actual performance and taking corrective action"),
              React.createElement("p", null, "iii It shows orderly arrangement of individual and group efforts to ensure unity of action in realisation of common objectives."),
              React.createElement("p", null, "iv Refers to different levels in the organisation created as a result of authority responsibility relationships binding individuals as superiors and subordinates.")
            )
          )
        ),
        React.createElement("p", { className: "mt-4" }, "Choose the correct option from the following:"),
        React.createElement("ul", { className: "list-none pl-6 mt-2 space-y-2" },
          React.createElement("li", null, "a) A-iv, B-iii, C-ii, D-i"),
          React.createElement("li", null, "b) A-ii, B-iii, C-iv, D-ii"),
          React.createElement("li", null, "c) A-iv, B-iii, C-i, D-ii"),
          React.createElement("li", null, "d) A-iii, B-iv, C-i, D-ii")
        )
      ),
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) A-iv, B-iii, C-i, D-ii"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Correct matching: A Management Hierarchy (iv) - different levels in organization, B Coordination (iii) - unity of action, C Organising (i) - defining activities and authority, D Controlling (ii) - measuring performance and corrective action.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'hard',
        topic: 'Nature of Management',
        bloomLevel: 'analyzing',
        estimatedTime: 70
      }
    },
    {
      id: '14',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Planning may not work in a dynamic environment."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The case shows that despite scanning the environment, it's difficult to assess future trends accurately, indicating that planning may not work effectively in a dynamic environment where changes are unpredictable.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Planning',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '15',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Training and Development"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Training and Development helps in career advancement through learning opportunities, which helps organizations attract and retain talented employees.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Staffing',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '16',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Long term investment decision"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The decision to spend ₹150 crores on an advertising campaign is a long-term investment decision because advertising campaigns are strategic investments that build brand value and generate long-term benefits for the company.")
      ),
      challengeData: {
        year: 2025,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Financial Management',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },

    // Spread questions from batch files
    ...challengeQuestions17to22,
    ...challengeQuestions23to26,
    ...challengeQuestions27to34
  ]
};