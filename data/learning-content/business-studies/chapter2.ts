import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter2Module: LearningModule = {
  chapter: "2",
  title: "Principles of Management",
  overview: "Master management principles essential for CBSE Board Exams 2026. This chapter covers Henri Fayol's 14 principles and F.W. Taylor's scientific management - frequently tested topics worth 15-18 marks. Learn with exam-focused explanations, practical applications, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Nature of Management Principles",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management principles are fundamental guidelines that establish relationship between cause and effect in managerial actions. They are derived from observation and experimentation in real business situations."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Characteristics of Management Principles:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Universal Applicability:"), " Applicable to all types of organizations and situations"),
            React.createElement('li', null, React.createElement('b', null, "Flexible Guidelines:"), " Not rigid rules, can be modified according to circumstances"),
            React.createElement('li', null, React.createElement('b', null, "Cause and Effect Relationship:"), " Based on observation and establish predictable outcomes"),
            React.createElement('li', null, React.createElement('b', null, "Contingent Nature:"), " Effectiveness depends on situation and environment"),
            React.createElement('li', null, React.createElement('b', null, "Human Behavior Focus:"), " Influence human behavior for better organizational performance")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Management principles are like 'thumb rules' - useful guidelines, not absolute laws!"
        )
      ),
      examFocus: true,
      mnemonic: "Universal, Flexible, Cause-effect, Contingent, Human behavior - U F C C H!"
    },
    {
      title: "Significance of Management Principles",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management principles provide managers with scientific basis for decision-making and help in improving organizational efficiency."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Benefits of Management Principles:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Provide Useful Insights:"), " Help managers understand complex situations"),
            React.createElement('li', null, React.createElement('b', null, "Optimum Resource Utilization:"), " Guide efficient use of human and material resources"),
            React.createElement('li', null, React.createElement('b', null, "Scientific Decision Making:"), " Replace guesswork with systematic approach"),
            React.createElement('li', null, React.createElement('b', null, "Meeting Changing Environment:"), " Adapt to technological and market changes"),
            React.createElement('li', null, React.createElement('b', null, "Facilitate Training:"), " Help in training new managers"),
            React.createElement('li', null, React.createElement('b', null, "Help in Research and Development:"), " Basis for further management research")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Management principles increase efficiency but cannot replace managerial skill and judgment!"
        )
      ),
      examFocus: true,
      mnemonic: "Insights, Utilization, Decision-making, Environment, Training, Research - I U D E T R!"
    },
    {
      title: "Fayol's 14 Principles of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Henri Fayol, the father of general management, formulated 14 principles based on his experience as a mining engineer and manager. These principles are applicable to all managerial functions and levels."
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Fayol's 14 Principles:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "1. Division of Work"),
              React.createElement('p', { className: 'text-sm' }, "Specialization increases efficiency and improves quality of work.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "2. Authority and Responsibility"),
              React.createElement('p', { className: 'text-sm' }, "Authority gives right to command; responsibility is obligation to perform.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "3. Discipline"),
              React.createElement('p', { className: 'text-sm' }, "Obedience to rules, respect for agreements, and proper conduct.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "4. Unity of Command"),
              React.createElement('p', { className: 'text-sm' }, "Employee should receive orders from only one superior.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "5. Unity of Direction"),
              React.createElement('p', { className: 'text-sm' }, "One head and one plan for activities having same objective.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "6. Subordination of Individual Interest"),
              React.createElement('p', { className: 'text-sm' }, "General interest should prevail over individual interest.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "7. Remuneration"),
              React.createElement('p', { className: 'text-sm' }, "Fair wages motivate employees and sustain workforce.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "8. Centralization"),
              React.createElement('p', { className: 'text-sm' }, "Concentration of decision-making authority at top level.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "9. Scalar Chain"),
              React.createElement('p', { className: 'text-sm' }, "Formal line of authority from top to bottom (Gang Plank for emergencies).")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "10. Order"),
              React.createElement('p', { className: 'text-sm' }, "Right person at right place and right thing at right place.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "11. Equity"),
              React.createElement('p', { className: 'text-sm' }, "Fair and impartial treatment of employees.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "12. Stability of Personnel"),
              React.createElement('p', { className: 'text-sm' }, "Low employee turnover for organizational continuity.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "13. Initiative"),
              React.createElement('p', { className: 'text-sm' }, "Encouraging employees to develop and implement plans.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "14. Esprit de Corps"),
              React.createElement('p', { className: 'text-sm' }, "Promoting team spirit and unity among employees.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Fayol's principles provide general guidelines for all managerial activities!"
        )
      ),
      examFocus: true,
      mnemonic: "Division, Authority, Discipline, Unity Command, Unity Direction, Subordination, Remuneration, Centralization, Scalar, Order, Equity, Stability, Initiative, Esprit - D A D U C U S R C S O E S I E!"
    },
    {
      title: "Taylor's Scientific Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "F.W. Taylor, the father of scientific management, focused on improving efficiency at operational level through scientific study of work. His approach replaced 'rule of thumb' with scientific methods."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🎯 Taylor's Four Principles:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Science, Not Rule of Thumb:"), " Scientific investigation instead of traditional methods"),
            React.createElement('li', null, React.createElement('b', null, "Harmony, Not Discord:"), " Cooperation between management and workers"),
            React.createElement('li', null, React.createElement('b', null, "Cooperation, Not Individualism:"), " Team work rather than competition"),
            React.createElement('li', null, React.createElement('b', null, "Development of Each Person:"), " Training to reach maximum efficiency")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔧 Taylor's Techniques:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "Work Study Techniques:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Time Study: Measuring time for each operation"),
                React.createElement('li', null, "Motion Study: Eliminating wasteful movements"),
                React.createElement('li', null, "Fatigue Study: Determining rest periods"),
                React.createElement('li', null, "Method Study: Finding best way to do work")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "Other Techniques:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Functional Foremanship: 8 specialist supervisors"),
                React.createElement('li', null, "Standardization: Uniform methods and tools"),
                React.createElement('li', null, "Differential Piece Wage: Higher pay for efficient workers")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Mental Revolution is the key outcome - complete change in attitude of management and workers!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Taylor focused on operational efficiency, while Fayol focused on general administration!"
        )
      ),
      examFocus: true,
      mnemonic: "Principles: Science, Harmony, Cooperation, Development - S H C D; Techniques: Time, Motion, Fatigue, Method, Functional, Standardization, Differential - T M F M F S D!"
    },
    {
      title: "Fayol vs Taylor: Comparison",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "While both Fayol and Taylor contributed to management theory, their approaches differ in scope, focus, and applicability."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Key Differences:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Scope and Focus:"),
              React.createElement('p', { className: 'text-sm' }, "Fayol: General management principles for all levels; Taylor: Scientific techniques for shop floor")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Perspective:"),
              React.createElement('p', { className: 'text-sm' }, "Fayol: Top-down view from managerial position; Taylor: Bottom-up from worker's viewpoint")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Human Element:"),
              React.createElement('p', { className: 'text-sm' }, "Fayol: Emphasized human relations and equity; Taylor: Focused on economic incentives")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Applicability:"),
              React.createElement('p', { className: 'text-sm' }, "Fayol: Universal principles for all organizations; Taylor: Specific to manufacturing/production")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Basis:"),
              React.createElement('p', { className: 'text-sm' }, "Fayol: Personal experience and observation; Taylor: Scientific experiments and time studies")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Fayol and Taylor complement each other - Fayol for management, Taylor for operations!"
        )
      ),
      examFocus: true,
      mnemonic: "Fayol general, Taylor specific; Fayol human, Taylor scientific - F G T S F H T S!"
    }
  ],
  keywords: [
    { term: "Management Principles", definition: "Fundamental guidelines for managerial decision-making and behavior." },
    { term: "Division of Work", definition: "Specialization of work to increase efficiency and improve quality." },
    { term: "Unity of Command", definition: "Employee should receive orders from only one superior to avoid confusion." },
    { term: "Unity of Direction", definition: "One head and one plan for activities having the same objective." },
    { term: "Scalar Chain", definition: "Formal line of authority from highest to lowest ranks in organization." },
    { term: "Gang Plank", definition: "Short cut in scalar chain for direct communication in emergencies." },
    { term: "Esprit de Corps", definition: "Promotion of team spirit and unity among employees." },
    { term: "Scientific Management", definition: "Application of scientific methods to improve efficiency at operational level." },
    { term: "Mental Revolution", definition: "Complete change in mindset of management and workers from competition to cooperation." },
    { term: "Functional Foremanship", definition: "Worker supervised by eight specialist foremen for different aspects of work." },
    { term: "Time Study", definition: "Measurement of time required to complete each operation." },
    { term: "Motion Study", definition: "Analysis of body movements to eliminate wasteful motions." },
    { term: "Fatigue Study", definition: "Study to determine optimal work periods and rest intervals." },
    { term: "Differential Piece Wage", definition: "Higher wage rate for efficient workers, lower for inefficient ones." },
    { term: "Method Study", definition: "Systematic analysis to find the best way of doing a job." },
    { term: "Standardization", definition: "Establishing uniform methods, tools, and working conditions." },
    { term: "Henri Fayol", definition: "Father of general management, gave 14 principles of management." },
    { term: "F.W. Taylor", definition: "Father of scientific management, focused on shop floor efficiency." }
  ],
  caseStudies: [
    {
      title: "The Assembly Line Efficiency Challenge",
      scenario: "AutoCorp's assembly line was experiencing low productivity. Workers used different methods to assemble car doors, some efficient and some wasteful. Efficient workers earned same wages as inefficient ones. Workers often received conflicting instructions from multiple supervisors, leading to confusion and delays.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Division of Work (Fayol):"), ' Workers using different methods shows lack of specialization and standardization.'),
          React.createElement('li', null, React.createElement('b', null, "Unity of Command (Fayol):"), ' Multiple supervisors giving orders violates this principle, causing confusion.'),
          React.createElement('li', null, React.createElement('b', null, "Science, Not Rule of Thumb (Taylor):"), ' Different methods indicate reliance on traditional practices rather than scientific study.'),
          React.createElement('li', null, React.createElement('b', null, "Differential Piece Wage (Taylor):"), ' Same wages for different productivity levels demotivates efficient workers.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This case shows how violation of both Fayol and Taylor principles leads to inefficiency!")
      )
    },
    {
      title: "Retail Chain's Coordination Crisis",
      scenario: "ShopSmart, a retail chain, had separate purchasing, sales, and inventory departments working independently. Purchasing bought goods without considering sales trends, sales promised unavailable products, and inventory piled up with unsold items. This led to customer dissatisfaction and financial losses.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Unity of Direction (Fayol):"), ' Different departments following their own plans instead of coordinated approach.'),
          React.createElement('li', null, React.createElement('b', null, "Order (Fayol):"), ' Wrong goods at wrong places, mismatch between purchasing and sales needs.'),
          React.createElement('li', null, React.createElement('b', null, "Harmony, Not Discord (Taylor):"), ' Departments working against each other instead of cooperatively.'),
          React.createElement('li', null, React.createElement('b', null, "Mental Revolution (Taylor):"), ' Need for change in mindset from departmental competition to organizational cooperation.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This demonstrates how lack of coordination affects overall organizational performance!")
      )
    },
    {
      title: "Tech Startup's Growth Challenges",
      scenario: "CodeCraft, a software startup, grew rapidly but faced high employee turnover. New hires left within months due to unclear job roles, unfair compensation, and lack of growth opportunities. The company struggled to retain talent despite offering competitive salaries.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Stability of Personnel (Fayol):"), ' High turnover indicates violation of this principle, affecting continuity.'),
          React.createElement('li', null, React.createElement('b', null, "Remuneration (Fayol):"), ' Unfair compensation despite competitive salaries suggests inequitable pay structure.'),
          React.createElement('li', null, React.createElement('b', null, "Order (Fayol):"), ' Unclear job roles mean wrong persons at wrong positions.'),
          React.createElement('li', null, React.createElement('b', null, "Development of Each Person (Taylor):"), ' Lack of growth opportunities prevents reaching maximum efficiency.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This shows how human resource management principles are crucial for organizational stability!")
      )
    },
    {
      title: "Manufacturing Firm's Quality Issues",
      scenario: "SteelWorks faced declining quality and increasing defects. Workers followed outdated methods, received instructions from multiple supervisors, and had no standardized procedures. Management blamed workers, while workers complained about unfair treatment and lack of training.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Equity (Fayol):"), ' Unfair treatment and blame game violates principle of fair treatment.'),
          React.createElement('li', null, React.createElement('b', null, "Unity of Command (Fayol):"), ' Multiple supervisors giving conflicting instructions.'),
          React.createElement('li', null, React.createElement('b', null, "Science, Not Rule of Thumb (Taylor):"), ' Reliance on outdated methods instead of scientific study.'),
          React.createElement('li', null, React.createElement('b', null, "Method Study (Taylor):"), ' Need for systematic analysis to find best quality control methods.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This illustrates how violation of management principles affects product quality and industrial relations!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 2: Principles of Management at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Principles: Universal, flexible guidelines based on cause-effect relationship"),
      React.createElement('li', null, "Significance: Provide insights, optimum utilization, scientific decisions, adapt to changes"),
      React.createElement('li', null, "Fayol's 14 Principles: Division of work, Authority & responsibility, Discipline, Unity of command, Unity of direction, Subordination, Remuneration, Centralization, Scalar chain, Order, Equity, Stability, Initiative, Esprit de corps"),
      React.createElement('li', null, "Taylor's Principles: Science not rule of thumb, Harmony not discord, Cooperation not individualism, Development of each person"),
      React.createElement('li', null, "Taylor's Techniques: Time study, Motion study, Fatigue study, Method study, Functional foremanship, Standardization, Differential piece wage"),
      React.createElement('li', null, "Mental Revolution: Complete change in mindset from competition to cooperation"),
      React.createElement('li', null, "Fayol vs Taylor: Fayol general management, Taylor shop floor efficiency")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning, characteristics, significance, individual principles"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain principles, techniques, differences between Fayol and Taylor"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Fayol's principles, Taylor's techniques, nature and significance"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies applying principles, comparison of Fayol and Taylor")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Management principles are flexible guidelines, not rigid rules"),
        React.createElement('li', null, "Fayol's principles apply to all managerial levels, Taylor's focus on operations"),
        React.createElement('li', null, "Mental revolution is key outcome of scientific management"),
        React.createElement('li', null, "Unity of command prevents confusion from multiple superiors"),
        React.createElement('li', null, "Principles must be adapted to situational requirements")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Fayol's Principles: Division, Authority, Discipline, Unity Command, Unity Direction, Subordination, Remuneration, Centralization, Scalar, Order, Equity, Stability, Initiative, Esprit - D A D U C U S R C S O E S I E"),
        React.createElement('p', { className: 'font-semibold' }, "Taylor's Principles: Science, Harmony, Cooperation, Development - S H C D"),
        React.createElement('p', { className: 'font-semibold' }, "Taylor's Techniques: Time, Motion, Fatigue, Method, Functional, Standardization, Differential - T M F M F S D"),
        React.createElement('p', { className: 'font-semibold' }, "Nature: Universal, Flexible, Cause-effect, Contingent, Human behavior - U F C C H"),
        React.createElement('p', { className: 'font-semibold' }, "Significance: Insights, Utilization, Decision-making, Environment, Training, Research - I U D E T R")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain management principles as flexible guidelines based on practice and experimentation"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse management principles with physical laws - they are not universally rigid"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples when explaining Fayol's principles and Taylor's techniques"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that Fayol focused on general management while Taylor focused on shop floor"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Mention mental revolution as the key outcome of scientific management"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say Taylor ignored human element - he emphasized harmony and cooperation"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain how principles help in optimum utilization of resources"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Think principles can replace managerial skill and judgment")
      )
    )
  )
};
