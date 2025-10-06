import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter8Module: LearningModule = {
  chapter: "8",
  title: "Controlling",
  overview: "Master the controlling function of management essential for CBSE Board Exams 2026. This chapter covers control process, techniques, and importance - frequently tested topics worth 12-15 marks. Learn with exam-focused explanations, step-by-step control processes, and practical case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Meaning and Nature of Controlling",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Controlling is defined as the management function that measures actual performance against established standards, identifies deviations, and takes corrective actions to ensure organizational goals are achieved."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Key Characteristics of Controlling:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Goal-Oriented:"), " Ensures activities conform to predetermined goals and standards."),
            React.createElement('li', null, React.createElement('b', null, "Continuous Process:"), " An ongoing function performed throughout the organization."),
            React.createElement('li', null, React.createElement('b', null, "Pervasive Function:"), " Required at all levels and in all departments of the organization."),
            React.createElement('li', null, React.createElement('b', null, "Forward-Looking:"), " Helps in future planning by providing feedback on current performance."),
            React.createElement('li', null, React.createElement('b', null, "Action-Oriented:"), " Involves taking corrective actions when deviations are found.")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Controlling is not just checking work - it's ensuring that everything happens according to plan and taking steps to correct any deviations!"
        )
      ),
      examFocus: true,
      mnemonic: "GO CPA - Goal-Oriented, Continuous, Pervasive, Action-oriented"
    },
    {
      title: "Importance of Controlling",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Controlling is crucial for organizational success as it ensures that all activities are directed towards achieving predetermined goals efficiently and effectively."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Key Benefits of Controlling:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Accomplishes Organizational Goals:"), " Keeps the organization on track towards its objectives."),
            React.createElement('li', null, React.createElement('b', null, "Judges Accuracy of Standards:"), " Helps verify if set standards are realistic and achievable."),
            React.createElement('li', null, React.createElement('b', null, "Makes Efficient Use of Resources:"), " Reduces wastage and ensures optimal resource utilization."),
            React.createElement('li', null, React.createElement('b', null, "Improves Employee Motivation:"), " Provides clear performance standards and feedback."),
            React.createElement('li', null, React.createElement('b', null, "Ensures Order and Discipline:"), " Creates a structured work environment and minimizes irregularities."),
            React.createElement('li', null, React.createElement('b', null, "Facilitates Coordination:"), " Ensures all departments work in harmony towards common goals.")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Without controlling, even the best plans can fail - it's the bridge between planning and achievement!"
        )
      ),
      examFocus: true,
      example: "A company sets a sales target of ₹1 crore for the quarter. Through controlling, they monitor weekly sales, identify if they're behind target, and take corrective actions like additional marketing or incentives for salespeople.",
      mnemonic: "AJE IME F - Accomplishes goals, Judges standards, Efficient resources, Improves motivation, Ensures discipline, Facilitates coordination"
    },
    {
      title: "Relationship Between Planning and Controlling",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Planning and controlling are inseparable twins in the management process. Planning sets the standards, while controlling measures performance against those standards."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔗 Interdependence Between Planning and Controlling:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded border-2 border-blue-400' },
              React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "Planning → Controlling"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Planning sets performance standards"),
                React.createElement('li', null, "Planning provides basis for measurement"),
                React.createElement('li', null, "Planning establishes criteria for evaluation")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded border-2 border-green-400' },
              React.createElement('p', { className: 'font-bold text-green-900 mb-2' }, "Controlling → Planning"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Controlling provides feedback for future plans"),
                React.createElement('li', null, "Controlling helps revise unrealistic standards"),
                React.createElement('li', null, "Controlling improves future planning accuracy")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Controlling completes the management cycle by bringing it back to planning. Without controlling, planning becomes meaningless!")
        )
      ),
      examFocus: true,
      example: "A restaurant plans to serve 200 customers daily. Controlling measures actual customers served (180), identifies the gap (20), and suggests corrective actions. This feedback helps improve future planning.",
      mnemonic: "Planning sets the course, Controlling keeps you on track!"
    },
    {
      title: "Steps in the Controlling Process",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "The controlling process is a systematic approach involving four key steps that ensure organizational activities align with established standards."
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Four Steps in Controlling Process:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Step 1: Setting Performance Standards"),
              React.createElement('p', { className: 'text-sm' }, "Establish clear, measurable standards based on organizational goals. Standards can be quantitative (production targets) or qualitative (customer satisfaction)."),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, "Example: Sales target of ₹50,000 per month, or 95% customer satisfaction rating.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Step 2: Measurement of Actual Performance"),
              React.createElement('p', { className: 'text-sm' }, "Continuously monitor and record actual performance using various techniques like personal observation, sample checking, or performance reports."),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, "Example: Daily sales reports, quality inspection reports, or employee performance metrics.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Step 3: Comparing Actual Performance with Standards"),
              React.createElement('p', { className: 'text-sm' }, "Compare measured performance against established standards to identify deviations. This step reveals gaps between planned and actual performance."),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, "Example: If actual sales are ₹45,000 vs target ₹50,000, there's a ₹5,000 deviation.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Step 4: Taking Corrective Action"),
              React.createElement('p', { className: 'text-sm' }, "Analyze causes of deviations and implement appropriate corrective measures. This may involve training, process changes, or resource allocation."),
              React.createElement('p', { className: 'text-xs mt-1 italic' }, "Example: Additional training for salespeople, revised marketing strategy, or hiring more staff.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-green-700' },
          "✅ Remember: Controlling is a cycle - after corrective action, the process begins again with setting new standards!"
        )
      ),
      examFocus: true,
      mnemonic: "SMCT - Set standards, Measure performance, Compare results, Take action"
    },
    {
      title: "Techniques of Controlling",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Various techniques are used to measure and control organizational performance. These techniques help managers monitor activities and ensure standards are met."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Traditional Techniques:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Personal Observation:"), " Manager directly observes employee performance and work conditions."),
            React.createElement('li', null, React.createElement('b', null, "Statistical Reports:"), " Regular reports on production, sales, costs, and other quantitative data."),
            React.createElement('li', null, React.createElement('b', null, "Break-even Analysis:"), " Determines the point where total revenue equals total costs."),
            React.createElement('li', null, React.createElement('b', null, "Budgetary Control:"), " Comparison of actual performance against budgeted figures.")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔧 Modern Techniques:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Return on Investment (ROI):"), " Measures efficiency of capital investment."),
            React.createElement('li', null, React.createElement('b', null, "Ratio Analysis:"), " Financial ratios to assess liquidity, profitability, and efficiency."),
            React.createElement('li', null, React.createElement('b', null, "Management Information System (MIS):"), " Computerized system providing timely information to managers."),
            React.createElement('li', null, React.createElement('b', null, "Management Audit:"), " Comprehensive review of all management functions and policies."),
            React.createElement('li', null, React.createElement('b', null, "PERT/CPM:"), " Network techniques for project planning and control."),
            React.createElement('li', null, React.createElement('b', null, "Benchmarking:"), " Comparing performance against industry leaders.")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Modern techniques provide more accurate and timely information, enabling better decision-making!"
        )
      ),
      examFocus: true,
      example: "A manufacturing company uses budgetary control to compare actual production costs (₹8,00,000) against budgeted costs (₹7,50,000), identifying a ₹50,000 variance requiring investigation.",
      mnemonic: "Personal observation, Statistical reports, Break-even analysis, Budgetary control - Traditional quartet!"
    },
    {
      title: "Limitations of Controlling",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "While controlling is essential, it has certain limitations that managers must be aware of to implement effective control systems."
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, "⚠️ Key Limitations:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Difficulty in Setting Quantitative Standards:"), " Some activities like employee morale or creativity cannot be measured quantitatively."),
            React.createElement('li', null, React.createElement('b', null, "Control on External Factors:"), " External factors like government policies, competition, or economic conditions cannot be controlled."),
            React.createElement('li', null, React.createElement('b', null, "Resistance from Employees:"), " Employees may resist control measures feeling it restricts their freedom or creativity."),
            React.createElement('li', null, React.createElement('b', null, "Costly Affair:"), " Installing and maintaining control systems can be expensive, especially for small organizations.")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Management Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Balance the benefits of controlling against its costs. The control system should be cost-effective and not create more problems than it solves!")
        )
      ),
      examFocus: true,
      mnemonic: "QD RE C - Quantitative standards difficult, Resistance from employees, External factors, Costly affair"
    }
  ],
  keywords: [
    { term: "Controlling", definition: "Management function that measures performance against standards and takes corrective actions to ensure goal achievement." },
    { term: "Performance Standards", definition: "Predetermined criteria or benchmarks against which actual performance is measured." },
    { term: "Deviation", definition: "Difference between actual performance and established standards." },
    { term: "Corrective Action", definition: "Steps taken to bring actual performance in line with established standards." },
    { term: "Budgetary Control", definition: "Control technique that compares actual performance against budgeted figures to identify variances." },
    { term: "Break-even Analysis", definition: "Technique to determine the point where total revenue equals total costs." },
    { term: "Management Information System (MIS)", definition: "Computerized system that provides timely and accurate information to managers for decision-making." },
    { term: "Return on Investment (ROI)", definition: "Ratio that measures the efficiency of capital investment and profitability." },
    { term: "Ratio Analysis", definition: "Technique using financial ratios to assess liquidity, profitability, and operational efficiency." },
    { term: "Benchmarking", definition: "Process of comparing organizational performance against industry leaders or best practices." },
    { term: "PERT", definition: "Program Evaluation and Review Technique - network analysis for project planning and control." },
    { term: "CPM", definition: "Critical Path Method - technique to identify the longest path in a project network." },
    { term: "Management Audit", definition: "Comprehensive review of all management functions, policies, and procedures." },
    { term: "Personal Observation", definition: "Direct monitoring of employee performance and work activities by managers." },
    { term: "Statistical Reports", definition: "Regular reports containing quantitative data on production, sales, costs, etc." },
    { term: "Control Process", definition: "Systematic steps: setting standards, measuring performance, comparing, and taking corrective action." },
    { term: "Feedforward Control", definition: "Preventive control that anticipates problems before they occur." },
    { term: "Concurrent Control", definition: "Control exercised while activities are in progress." },
    { term: "Feedback Control", definition: "Control based on past performance to prevent future deviations." }
  ],
  caseStudies: [
    {
      title: "Quality Control Crisis at TechSolutions",
      scenario: "TechSolutions Ltd. manufactures smartphones with a quality standard of 98% defect-free units. In the last quarter, they produced 10,000 units but found 5% defective products. The production manager identified that the defect rate increased due to a new batch of low-quality components from a supplier. The company faced customer complaints, returns, and potential loss of market share.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-blue-900 mb-2' }, "📊 STEP 1: Setting Standards"),
          React.createElement('p', { className: 'text-sm' }, "The company had established a clear quality standard of 98% defect-free units, which is a measurable performance standard.")
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-green-900 mb-2' }, "📊 STEP 2: Measuring Performance"),
          React.createElement('p', { className: 'text-sm' }, "Quality control team measured actual performance through statistical quality control charts and found 5% defective units (950 defective out of 10,000).")
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-yellow-900 mb-2' }, "📊 STEP 3: Comparing with Standards"),
          React.createElement('p', { className: 'text-sm' }, "Comparison revealed a deviation: Expected 2% defects (200 units), but actual defects were 5% (500 units) - a negative deviation of 3%.")
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-2' }, "📊 STEP 4: Taking Corrective Action"),
          React.createElement('p', { className: 'text-sm' }, "Root cause analysis identified poor quality components. Corrective actions included: changing suppliers, implementing stricter incoming material inspection, and retraining production staff.")
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded mt-3 border-l-4 border-green-500' },
          React.createElement('p', { className: 'font-bold mb-1' }, "✅ Learning Outcome:"),
          React.createElement('p', { className: 'text-sm' }, "Effective controlling not only identifies problems but also provides solutions. The systematic control process helped TechSolutions improve quality and regain customer trust.")
        )
      )
    },
    {
      title: "Budget Variance Analysis at RetailMart",
      scenario: "RetailMart set a monthly sales budget of ₹50 lakh for its electronics division. Actual sales for the month were ₹42 lakh, showing an unfavorable variance of ₹8 lakh. The finance manager analyzed the causes: increased competition from online retailers, delayed product launches, and inadequate marketing spend. The management decided to increase digital marketing budget by 30% and launch promotional campaigns.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Budgetary Control:"), ' The company used budgetary control to compare actual sales (₹42 lakh) against budgeted sales (₹50 lakh), identifying an unfavorable variance of ₹8 lakh.'),
          React.createElement('li', null, React.createElement('b', null, "Deviation Analysis:"), ' Management went beyond identifying the variance to analyze root causes: market competition, product delays, and insufficient marketing.'),
          React.createElement('li', null, React.createElement('b', null, "Corrective Action:"), ' Instead of just noting the problem, management took proactive steps: increased marketing budget and launched promotions to improve future performance.'),
          React.createElement('li', null, React.createElement('b', null, "Planning-Controlling Link:"), ' The control process provided feedback that helped revise the next month\'s sales strategy and budget allocation.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This case demonstrates how controlling provides valuable feedback for future planning and decision-making!")
      )
    },
    {
      title: "Employee Performance Monitoring at GlobalTech",
      scenario: "GlobalTech implemented a performance monitoring system for its software developers. Each developer had clear KPIs: code quality score (>85%), project delivery on time (95%), and client satisfaction rating (>4.5/5). However, developers complained that the constant monitoring created stress and reduced creativity. The HR manager had to balance control needs with employee motivation.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Performance Standards:"), ' Clear, measurable KPIs were set for each developer, making expectations transparent.'),
          React.createElement('li', null, React.createElement('b', null, "Employee Resistance:"), ' The case highlights a key limitation of controlling - employees may resist strict monitoring, feeling it restricts their freedom and creativity.'),
          React.createElement('li', null, React.createElement('b', null, "Balance Between Control and Motivation:"), ' Effective controlling should motivate employees, not demotivate them. The HR manager needed to find a balance between necessary control and employee satisfaction.'),
          React.createElement('li', null, React.createElement('b', null, "Modern Control Techniques:"), ' Using KPIs and performance metrics represents modern controlling techniques that provide objective, data-driven feedback.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This illustrates that controlling must be implemented thoughtfully to maintain employee motivation while ensuring organizational goals!")
      )
    },
    {
      title: "Supply Chain Control at FreshFoods",
      scenario: "FreshFoods operates a chain of supermarkets with a standard that 95% of perishable items must be sold within their expiry dates. During a summer heatwave, their actual performance dropped to 85% due to inadequate cold storage facilities. The operations manager implemented corrective actions: upgraded refrigeration systems, improved inventory rotation, and enhanced supplier quality checks.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "External Factors Limitation:"), ' The heatwave represents an external factor that affected performance but couldn\'t be fully controlled by the company.'),
          React.createElement('li', null, React.createElement('b', null, "Systematic Control Process:"), ' The manager followed all four steps: identified standards (95%), measured performance (85%), compared to find deviation (10%), and took corrective actions.'),
          React.createElement('li', null, React.createElement('b', null, "Resource Efficiency:"), ' Upgrading refrigeration systems represents efficient use of resources to prevent future wastage and improve performance.'),
          React.createElement('li', null, React.createElement('b', null, "Continuous Improvement:"), ' The corrective actions not only fixed the current problem but also improved the overall supply chain reliability.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This case shows how controlling helps organizations adapt to external challenges and improve operational efficiency!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 8: Controlling at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Controlling = Measuring performance against standards + Taking corrective action"),
      React.createElement('li', null, "Importance: Accomplishes goals, Judges standards, Efficient resources, Improves motivation, Ensures discipline, Facilitates coordination"),
      React.createElement('li', null, "Planning ↔ Controlling: Planning sets standards, Controlling provides feedback"),
      React.createElement('li', null, "Control Process: Set standards → Measure performance → Compare → Take action (SMCT)"),
      React.createElement('li', null, "Techniques: Traditional (Personal observation, Statistical reports, Break-even, Budgetary control) + Modern (ROI, Ratio analysis, MIS, PERT/CPM)"),
      React.createElement('li', null, React.createElement('b', null, "Limitations:"), " Quantitative standards difficult, External factors, Employee resistance, Costly affair"),
      React.createElement('li', null, "Remember: Controlling completes the management cycle and improves future planning!")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning of controlling, importance, relationship with planning"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Steps in control process, techniques of controlling"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Importance of controlling, limitations"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on control process application")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Controlling is forward-looking, not just checking past performance"),
        React.createElement('li', null, "Always compare actual performance against predetermined standards"),
        React.createElement('li', null, "Corrective action must address root causes, not just symptoms"),
        React.createElement('li', null, "Control systems should be cost-effective and not demotivate employees")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Control Process: SMCT (Set standards, Measure, Compare, Take action)"),
        React.createElement('p', { className: 'font-semibold' }, "Importance: AJE IME F (Accomplishes goals, Judges standards, Efficient resources, Improves motivation, Ensures discipline, Facilitates coordination)"),
        React.createElement('p', { className: 'font-semibold' }, "Limitations: QD RE C (Quantitative difficult, Resistance from Employees, External factors, Costly)")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain control as a continuous, pervasive function that ensures goal achievement"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse controlling with planning - controlling measures performance, planning sets standards"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples of control techniques (budgetary control, break-even analysis)"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that controlling provides feedback for future planning"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Mention limitations but emphasize that benefits outweigh costs"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say controlling is only about punishment - it's about correction and improvement")
      )
    )
  )
};