import { ChallengePaper } from '../../types';
import React from 'react';
import { challengeQuestions17to22_2022 } from './business-studies-challenge-2022-q17-22.ts';
import { challengeQuestions23to26_2022 } from './business-studies-challenge-2022-q23-26.ts';
import { challengeQuestions27to34_2022 } from './business-studies-challenge-2022-q27-34.ts';

export const businessStudiesChallenge2022: ChallengePaper = {
  name: 'CBSE Business Studies Challenge 2022 (Main Exam)',
  challengeMode: true,
  timeLimit: 180, // 3 hours
  totalMarks: 80,
  year: 2022,
  paperType: 'main',
  questions: [
    // Questions 1-16: MCQs from official CBSE SQP 2022
    {
      id: '1',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Departmentalisation"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "After identifying and dividing work, the next step in organizing is departmentalisation, which involves grouping similar activities into departments.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Organising',
        bloomLevel: 'understanding',
        estimatedTime: 45
      }
    },
    {
      id: '2',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Uncertainty"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Uncertainty in business environment occurs when changes happen too frequently, making it difficult to predict future events and their impact.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Business Environment',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '3',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Heads do not get training for top management positions."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "In functional structure, functional heads specialize in their areas and may not get exposure to other functions, limiting their training for top management positions.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Organising',
        bloomLevel: 'analyzing',
        estimatedTime: 45
      }
    },
    {
      id: '4',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Technological and social."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Sapna working on accounting software represents technological environment, and her joining the workforce represents social environment.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Business Environment',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '5',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Management creates a dynamic organization"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Management creates a dynamic organization by helping individuals adapt to change and overcome resistance to new challenges.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Nature of Management',
        bloomLevel: 'analyzing',
        estimatedTime: 45
      }
    },
    {
      id: '6',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Internet connectivity is a prerequisite"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "A cash-lite economy requires internet connectivity for digital transactions, which may not be available to all sections of society.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Business Environment',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '7',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) It helps in tapping useful resources"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The scenario highlights improving performance, planning/policy formulation, and identifying opportunities/first mover advantage, but not tapping useful resources.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'hard',
        topic: 'Business Environment',
        bloomLevel: 'analyzing',
        estimatedTime: 55
      }
    },
    {
      id: '8',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Social"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Laying off employees may achieve efficiency, profit, and survival objectives, but it does not fulfill the social objective of management which includes employee welfare.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Nature of Management',
        bloomLevel: 'analyzing',
        estimatedTime: 45
      }
    },
    {
      id: '9',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) It is both forward looking and backward looking."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Controlling is both forward-looking (setting standards) and backward-looking (measuring actual performance and comparing with standards).")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Controlling',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '10',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Controlling"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The manager is comparing actual performance with plans and taking corrective action, which is the controlling function of management.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Controlling',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '11',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Organization structure"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Organization structure is the outcome of organizing function that defines roles, relationships, and eliminates ambiguity in duties.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Organising',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '12',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Both the statements are false"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Transportation creates place utility, warehousing creates time utility. Standardization refers to setting standards for products, not classification.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Marketing',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '13',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) (ii), (iii), (i)"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Financial market is for creation and exchange of financial assets, Primary market is New issue market, Secondary market is Stock market.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Financial Markets',
        bloomLevel: 'understanding',
        estimatedTime: 50
      }
    },
    {
      id: '14',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Unique order code"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Unique order code is assigned to each transaction by the stock exchange and printed on the contract note for identification.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Financial Markets',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '15',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Physical distribution."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Managing inventory is part of physical distribution function of marketing, which includes transportation, warehousing, and inventory management.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Marketing',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '16',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Capital market consists of Commercial banks, Development banks and stock exchanges"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Capital market consists of stock exchanges and financial institutions like development banks, but commercial banks are part of money market.")
      ),
      challengeData: {
        year: 2022,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Financial Markets',
        bloomLevel: 'analyzing',
        estimatedTime: 45
      }
    },

    // Spread questions from batch files
    ...challengeQuestions17to22_2022,
    ...challengeQuestions23to26_2022,
    ...challengeQuestions27to34_2022
  ]
};