import { ChallengePaper } from '../../types';
import React from 'react';
import { challengeQuestions17to22_2023 } from './business-studies-challenge-2023-q17-22.ts';
import { challengeQuestions23to26_2023 } from './business-studies-challenge-2023-q23-26.ts';
import { challengeQuestions27to34_2023 } from './business-studies-challenge-2023-q27-34.ts';

export const businessStudiesChallenge2023: ChallengePaper = {
  name: 'CBSE Sample Paper 2022-23',
  challengeMode: true,
  timeLimit: 180, // 3 hours
  totalMarks: 80,
  year: 2023,
  paperType: 'main',
  questions: [
    // Questions 1-16: 1-mark MCQs (inline in main file for simplicity)
    {
      id: '1',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Favourable financial leverage, as return on investment is higher than cost of debt"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "When return on investment is higher than cost of debt, issuing debentures increases earnings per share due to financial leverage effect.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Financial Management',
        bloomLevel: 'analyzing',
        estimatedTime: 60
      }
    },
    {
      id: '2',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Labelling"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Labelling involves providing information about the product including its features, usage instructions, and benefits.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Marketing',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '3',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Social environment"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Changes in lifestyle, values, and demographics are part of the social environment affecting business.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Business Environment',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '4',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Customer support services"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Customer support services like after-sales service, handling complaints, and providing warranties help in building customer loyalty and repeat sales.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Marketing',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '5',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Regulatory function"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "SEBI performs regulatory functions by issuing notices, conducting audits, and ensuring compliance with securities laws.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Financial Markets',
        bloomLevel: 'understanding',
        estimatedTime: 45
      }
    },
    {
      id: '6',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) Management helps in achieving group goals"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Management coordinates individual efforts to achieve organizational goals.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Nature of Management',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },
    {
      id: '7',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Earning higher rate of return to household sector"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "The allocative function helps in channeling savings from households to businesses for higher returns.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Financial Markets',
        bloomLevel: 'understanding',
        estimatedTime: 40
      }
    },
    {
      id: '8',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Controlling"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Controlling involves comparing actual performance with planned performance and taking corrective actions.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Controlling',
        bloomLevel: 'analyzing',
        estimatedTime: 60
      }
    },
    {
      id: '9',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) If a firm wants to attain product quality leadership, it should charge lower prices."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "For product quality leadership, firms typically charge premium prices, not lower prices.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Marketing',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '10',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of Assertion (A)"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Both statements are true, but the reason doesn't directly explain why management is concerned with efficient use of resources.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Nature of Management',
        bloomLevel: 'analyzing',
        estimatedTime: 55
      }
    },
    {
      id: '11',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Centralisation"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Centralisation refers to concentration of decision-making authority at the top level of management.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Organising',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },
    {
      id: '12',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "d) Measurement of actual performance"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Measurement of actual performance is the second step in controlling process where actual results are measured objectively.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Controlling',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '13',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Statement II is true and I is false"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Warehouses for long-term storage are located near production centers, not markets. Higher inventory levels do provide better service but increase carrying costs.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Marketing',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },
    {
      id: '14',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "a) It enables the firm to identify opportunities and getting the first mover advantage."),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Business environment helps firms identify opportunities and gain first mover advantage by acting on environmental changes before competitors.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Business Environment',
        bloomLevel: 'analyzing',
        estimatedTime: 60
      }
    },
    {
      id: '15',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "c) Organising"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Organising creates the structure and framework that translates plans into action by arranging resources and establishing relationships.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'easy',
        topic: 'Organising',
        bloomLevel: 'understanding',
        estimatedTime: 35
      }
    },
    {
      id: '16',
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
      solution: React.createElement("p", { className: "font-bold text-green-700" }, "b) Statement II is true and I is false"),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("h4", { className: "font-bold text-lg mt-4" }, "Explanation"),
        React.createElement("p", null, "Dematerialisation converts physical certificates to electronic form. Statement II is correct as demat eliminates risks of theft, loss, and forgery.")
      ),
      challengeData: {
        year: 2023,
        paperType: 'main',
        difficulty: 'medium',
        topic: 'Financial Markets',
        bloomLevel: 'analyzing',
        estimatedTime: 50
      }
    },

    // Spread questions from batch files
    ...challengeQuestions17to22_2023,
    ...challengeQuestions23to26_2023,
    ...challengeQuestions27to34_2023
  ]
};