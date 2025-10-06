import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter1Module: LearningModule = {
  chapter: "1",
  title: "Nature and Significance of Management",
  overview: "Master management fundamentals essential for CBSE Board Exams 2026. This chapter covers core management concepts, characteristics, and functions - frequently tested topics worth 12-15 marks. Learn with exam-focused explanations, practical examples, and case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Meaning and Definition of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management is the process of planning, organizing, staffing, directing, and controlling human and material resources to achieve organizational goals effectively and efficiently."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Key Aspects of Management:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Process:"), " Series of interrelated functions performed systematically"),
            React.createElement('li', null, React.createElement('b', null, "Goal-Oriented:"), " All activities directed towards achieving predetermined objectives"),
            React.createElement('li', null, React.createElement('b', null, "Cooperative Effort:"), " Involves working with and through people"),
            React.createElement('li', null, React.createElement('b', null, "Dynamic Function:"), " Adapts to changing business environment"),
            React.createElement('li', null, React.createElement('b', null, "Intangible Force:"), " Cannot be seen but its presence is felt in order of organization")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Management is the art of getting things done through and with people in formally organized groups!"
        )
      ),
      examFocus: true,
      mnemonic: "Process, Goal-oriented, Cooperative, Dynamic, Intangible - P G C D I!"
    },
    {
      title: "Effectiveness vs. Efficiency",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "These twin concepts form the foundation of management. Effectiveness focuses on achieving goals, while efficiency focuses on optimal resource utilization."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🎯 Effectiveness (Doing the Right Things):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Completing tasks on time and achieving targets"),
            React.createElement('li', null, "Focus on end results and goal accomplishment"),
            React.createElement('li', null, "Concerned with output quality and quantity"),
            React.createElement('li', null, "Measures success by goal achievement")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "⚡ Efficiency (Doing Things Right):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Accomplishing tasks with minimum resources"),
            React.createElement('li', null, "Focus on input-output ratio and cost control"),
            React.createElement('li', null, "Concerned with resource optimization"),
            React.createElement('li', null, "Measures success by resource utilization")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Good management requires BOTH effectiveness AND efficiency - you can't achieve goals without resources, and efficient use of wrong resources won't achieve goals!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Effectiveness without efficiency leads to high costs; efficiency without effectiveness leads to wasted effort!"
        )
      ),
      examFocus: true,
      example: "Company A produces 1000 shirts but uses ₹2 lakh worth of materials (inefficient but effective). Company B produces 800 shirts using ₹1 lakh materials (efficient but ineffective). Company C produces 1000 shirts using ₹1.2 lakh materials (both effective and efficient).",
      mnemonic: "Effectiveness = Right things; Efficiency = Things right!"
    },
    {
      title: "Characteristics of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management possesses distinct characteristics that differentiate it from other activities and highlight its unique nature."
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Key Characteristics of Management:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Goal-Oriented Process"),
              React.createElement('p', { className: 'text-sm' }, "All managerial activities are directed towards achieving predetermined objectives.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Pervasive Function"),
              React.createElement('p', { className: 'text-sm' }, "Management is required in all types of organizations, at all levels and in all departments.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Multidimensional Activity"),
              React.createElement('p', { className: 'text-sm' }, "Management involves managing work, people, and operations simultaneously.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Continuous Process"),
              React.createElement('p', { className: 'text-sm' }, "Management is an ongoing process that continues as long as the organization exists.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Group Activity"),
              React.createElement('p', { className: 'text-sm' }, "Management involves working with and through people in groups.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Dynamic Function"),
              React.createElement('p', { className: 'text-sm' }, "Management adapts to changing business environment and technological advancements.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Intangible Force"),
              React.createElement('p', { className: 'text-sm' }, "Management cannot be seen but its presence is felt in the order and coordination of the organization.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 These characteristics make management a distinct and essential function for organizational success!"
        )
      ),
      examFocus: true,
      mnemonic: "Goal-oriented, Pervasive, Multidimensional, Continuous, Group activity, Dynamic, Intangible - G P M C G D I!"
    },
    {
      title: "Objectives of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management strives to achieve multiple objectives that benefit various stakeholders while ensuring organizational success."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🎯 Organizational Objectives:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Survival:"), " Ensuring continued existence and stability"),
            React.createElement('li', null, React.createElement('b', null, "Profit:"), " Earning adequate returns on investment"),
            React.createElement('li', null, React.createElement('b', null, "Growth:"), " Expansion in terms of sales, assets, and market share")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🌍 Social Objectives:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Quality Products:"), " Providing goods and services of good quality"),
            React.createElement('li', null, React.createElement('b', null, "Fair Practices:"), " Avoiding exploitation of consumers and workers"),
            React.createElement('li', null, React.createElement('b', null, "Environmental Protection:"), " Using eco-friendly methods and sustainable practices"),
            React.createElement('li', null, React.createElement('b', null, "Employment Generation:"), " Creating job opportunities for society")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "👥 Personal Objectives:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Fair Compensation:"), " Providing adequate salary and benefits"),
            React.createElement('li', null, React.createElement('b', null, "Growth Opportunities:"), " Career advancement and skill development"),
            React.createElement('li', null, React.createElement('b', null, "Work Satisfaction:"), " Creating conducive work environment"),
            React.createElement('li', null, React.createElement('b', null, "Recognition:"), " Acknowledging employee contributions")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Management must balance all three objectives - neglecting any one can lead to organizational failure!"
        )
      ),
      examFocus: true,
      mnemonic: "Organizational, Social, Personal - O S P!"
    },
    {
      title: "Management as Art, Science, and Profession",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management is a blend of art, science, and profession. Understanding this nature helps in appreciating its complexity and application."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🎨 Management as an Art:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Personalized application of knowledge and skills"),
            React.createElement('li', null, "Requires creativity and practical application"),
            React.createElement('li', null, "Based on practice and experience"),
            React.createElement('li', null, "Results vary with different situations")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔬 Management as a Science:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Based on systematic body of knowledge"),
            React.createElement('li', null, "Principles derived from observation and experimentation"),
            React.createElement('li', null, "Universal application with situational modifications"),
            React.createElement('li', null, "Predictable outcomes under similar conditions")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "⚖️ Management as a Profession:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, "Specialized body of knowledge and skills"),
            React.createElement('li', null, "Formal education and training required"),
            React.createElement('li', null, "Code of conduct and ethical standards"),
            React.createElement('li', null, "Service motive rather than profit motive"),
            React.createElement('li', null, "Restricted entry through professional bodies")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Management is an 'inexact science' because principles are flexible and must be adapted to situations!")
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Management is emerging as a profession but lacks some characteristics like mandatory membership!"
        )
      ),
      examFocus: true,
      mnemonic: "Art (creativity), Science (principles), Profession (ethics) - A S P!"
    },
    {
      title: "Levels of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management operates at three distinct levels, each with different responsibilities, authority, and focus areas."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🏢 Top Level Management:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Position:"), " Board of Directors, CEO, Managing Director"),
            React.createElement('li', null, React.createElement('b', null, "Functions:"), " Strategic planning, policy formulation, organization goal setting"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Long-term survival and growth of the organization"),
            React.createElement('li', null, React.createElement('b', null, "Authority:"), " Maximum authority and responsibility"),
            React.createElement('li', null, React.createElement('b', null, "Skills:"), " Conceptual and decision-making skills")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🔗 Middle Level Management:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Position:"), " Departmental Heads, Branch Managers, Plant Superintendents"),
            React.createElement('li', null, React.createElement('b', null, "Functions:"), " Implementation of policies, coordination between top and operational levels"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Interpretation and execution of plans"),
            React.createElement('li', null, React.createElement('b', null, "Authority:"), " Moderate authority with accountability to top management"),
            React.createElement('li', null, React.createElement('b', null, "Skills:"), " Managerial and communication skills")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "👷 Operational Level Management:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Position:"), " Supervisors, Foremen, Section Officers"),
            React.createElement('li', null, React.createElement('b', null, "Functions:"), " Direct supervision, day-to-day operations, worker guidance"),
            React.createElement('li', null, React.createElement('b', null, "Focus:"), " Ensuring smooth workflow and productivity"),
            React.createElement('li', null, React.createElement('b', null, "Authority:"), " Limited authority focused on operational control"),
            React.createElement('li', null, React.createElement('b', null, "Skills:"), " Technical and leadership skills")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ All three levels are interdependent - top provides direction, middle coordinates, operational executes!"
        )
      ),
      examFocus: true,
      mnemonic: "Top (strategy), Middle (coordination), Operational (supervision) - T M O!"
    },
    {
      title: "Functions of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Management performs five interrelated functions that are essential for achieving organizational goals."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📋 Planning:"),
          React.createElement('p', { className: 'text-sm mb-2' }, "Setting objectives and deciding the course of action"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, "Defining goals and objectives"),
            React.createElement('li', null, "Developing strategies and policies"),
            React.createElement('li', null, "Forecasting future conditions")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "🏗️ Organizing:"),
          React.createElement('p', { className: 'text-sm mb-2' }, "Establishing formal structure of authority and responsibility"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, "Identifying and classifying activities"),
            React.createElement('li', null, "Grouping activities into departments"),
            React.createElement('li', null, "Delegating authority and establishing relationships")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-purple-900 mb-2' }, "👥 Staffing:"),
          React.createElement('p', { className: 'text-sm mb-2' }, "Recruiting and placing right people at right positions"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, "Manpower planning and recruitment"),
            React.createElement('li', null, "Selection and training of employees"),
            React.createElement('li', null, "Performance appraisal and development")
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-red-900 mb-2' }, "🎯 Directing:"),
          React.createElement('p', { className: 'text-sm mb-2' }, "Guiding and motivating employees to achieve goals"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, "Leadership and communication"),
            React.createElement('li', null, "Motivation and supervision"),
            React.createElement('li', null, "Creating work environment")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-yellow-900 mb-2' }, "📊 Controlling:"),
          React.createElement('p', { className: 'text-sm mb-2' }, "Monitoring performance and taking corrective actions"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, "Establishing standards and measuring performance"),
            React.createElement('li', null, "Comparing actual with standards"),
            React.createElement('li', null, "Taking corrective actions")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 These functions are interrelated and performed simultaneously, not sequentially!"
        )
      ),
      examFocus: true,
      mnemonic: "Planning, Organizing, Staffing, Directing, Controlling - P O S D C!"
    },
    {
      title: "Coordination: The Essence of Management",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Coordination is the force that binds all managerial functions together and ensures unity of action towards organizational goals."
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🎯 Importance of Coordination:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Unity of Action:"), " Brings together different activities and integrates efforts"),
            React.createElement('li', null, React.createElement('b', null, "Functional Differentiation:"), " Specializes work but coordinates for common goals"),
            React.createElement('li', null, React.createElement('b', null, "Growth in Size:"), " Larger organizations need more coordination"),
            React.createElement('li', null, React.createElement('b', null, "Complexity of Operations:"), " Complex operations require better coordination"),
            React.createElement('li', null, React.createElement('b', null, "Specialization of Work:"), " Division of labor needs integration")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "🔧 Techniques of Coordination:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Clear Communication:"), " Ensuring information flows smoothly"),
            React.createElement('li', null, React.createElement('b', null, "Proper Planning:"), " Setting clear objectives and strategies"),
            React.createElement('li', null, React.createElement('b', null, "Sound Organization Structure:"), " Defining authority-responsibility relationships"),
            React.createElement('li', null, React.createElement('b', null, "Effective Leadership:"), " Guiding and motivating employees"),
            React.createElement('li', null, React.createElement('b', null, "Chain of Command:"), " Establishing scalar chain for orders and instructions")
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "Coordination is not a separate function but the essence that binds all functions together!")
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Without coordination, all other functions become ineffective - it's the 'cement' that holds management together!"
        )
      ),
      examFocus: true,
      mnemonic: "Unity, Functional, Growth, Complexity, Specialization - U F G C S!"
    }
  ],
  keywords: [
    { term: "Management", definition: "Process of planning, organizing, staffing, directing, and controlling to achieve goals effectively and efficiently." },
    { term: "Effectiveness", definition: "Completing tasks on time and achieving predetermined goals (doing the right things)." },
    { term: "Efficiency", definition: "Accomplishing tasks with minimum resources and optimal cost control (doing things right)." },
    { term: "Goal-Oriented", definition: "All managerial activities directed towards achieving predetermined objectives." },
    { term: "Pervasive", definition: "Management required in all organizations, at all levels, and in all departments." },
    { term: "Multidimensional", definition: "Management involves managing work, people, and operations simultaneously." },
    { term: "Continuous Process", definition: "Management continues as long as the organization exists." },
    { term: "Group Activity", definition: "Management involves working with and through people in formally organized groups." },
    { term: "Dynamic Function", definition: "Management adapts to changing business environment and technological advancements." },
    { term: "Intangible Force", definition: "Management cannot be seen but its presence is felt in organizational order and coordination." },
    { term: "Organizational Objectives", definition: "Survival, profit, and growth objectives that benefit the company itself." },
    { term: "Social Objectives", definition: "Benefits provided to society like quality products, fair practices, and employment generation." },
    { term: "Personal Objectives", definition: "Fulfilling individual employee needs like fair compensation, growth opportunities, and recognition." },
    { term: "Top Level Management", definition: "Highest level management responsible for strategic planning and policy formulation." },
    { term: "Middle Level Management", definition: "Intermediate level that coordinates between top and operational management." },
    { term: "Operational Level Management", definition: "Lowest level management responsible for day-to-day supervision and operations." },
    { term: "Planning", definition: "Setting objectives and deciding the course of action to achieve them." },
    { term: "Organizing", definition: "Establishing formal structure of authority and responsibility relationships." },
    { term: "Staffing", definition: "Recruiting, selecting, training, and placing right people at right positions." },
    { term: "Directing", definition: "Guiding, motivating, and leading employees to achieve organizational goals." },
    { term: "Controlling", definition: "Monitoring performance, comparing with standards, and taking corrective actions." },
    { term: "Coordination", definition: "Synchronization of efforts of all departments to achieve unity of action." }
  ],
  caseStudies: [
    {
      title: "The E-Commerce Delivery Crisis",
      scenario: "QuickCart, an e-commerce company, launched a massive festive season campaign promising 24-hour delivery. The marketing team generated huge demand, but operations couldn't cope. They lacked packaging materials, delivery vehicles were insufficient, and many orders were delayed beyond 48 hours, resulting in customer complaints and reputational damage.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Effectiveness vs. Efficiency:"), ' Company was ineffective (failed to deliver on time) despite marketing efficiency in generating demand.'),
          React.createElement('li', null, React.createElement('b', null, "Lack of Coordination:"), ' Marketing and operations worked in isolation - core problem of poor inter-departmental coordination.'),
          React.createElement('li', null, React.createElement('b', null, "Management as Group Activity:"), ' Failure shows different departments working independently leads to chaos; management needed to integrate efforts.'),
          React.createElement('li', null, React.createElement('b', null, "Planning Function:"), ' Company failed to plan for increased demand and resource requirements.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates how lack of coordination can turn marketing success into operational failure!")
      )
    },
    {
      title: "TCS's Management Excellence",
      scenario: "Tata Consultancy Services (TCS) grew from a small IT firm to India's largest IT company through effective management practices. The company maintained clear organizational objectives, coordinated functions across global operations, and achieved consistent growth while fulfilling social responsibilities.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Organizational Objectives:"), ' TCS focused on survival, profit maximization, and sustainable growth through effective management.'),
          React.createElement('li', null, React.createElement('b', null, "Social Objectives:"), ' Company contributed to society through employment generation, skill development, and community initiatives.'),
          React.createElement('li', null, React.createElement('b', null, "Coordination Across Levels:"), ' Top management set strategic direction, middle management coordinated implementation, operational level executed efficiently.'),
          React.createElement('li', null, React.createElement('b', null, "Management Functions:"), ' Integrated planning, organizing, staffing, directing, and controlling led to consistent performance.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how balanced management objectives and coordinated functions drive organizational success!")
      )
    },
    {
      title: "Startup Failure Due to Poor Management",
      scenario: "TechStart, a promising startup, raised ₹50 crores but failed within 2 years. The founder focused only on product development, neglected marketing and operations. There was no clear organizational structure, poor coordination between teams, and no performance monitoring, leading to inefficient resource utilization and eventual collapse.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Management Functions Missing:"), ' Lack of organizing (no structure), staffing (no proper team), directing (no leadership), controlling (no monitoring).'),
          React.createElement('li', null, React.createElement('b', null, "Inefficiency:"), ' Resources were available but not utilized optimally due to poor management.'),
          React.createElement('li', null, React.createElement('b', null, "Coordination Failure:"), ' Different functions operated independently without integration.'),
          React.createElement('li', null, React.createElement('b', null, "Management Characteristics Ignored:"), ' Treated as individual activity rather than group activity, lacked goal orientation.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This illustrates how even with resources, poor management leads to business failure!")
      )
    },
    {
      title: "Amul's Cooperative Management Model",
      scenario: "Amul revolutionized India's dairy industry through effective management. The cooperative structure ensured coordination between 3.6 million farmers and processing units. Clear objectives, proper organization structure, and coordinated functions led to consistent quality and fair pricing for both producers and consumers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Management Objectives Balance:"), ' Achieved organizational profits while fulfilling social objectives (fair prices, quality products) and personal objectives (farmer welfare).'),
          React.createElement('li', null, React.createElement('b', null, "Coordination Excellence:"), ' Integrated efforts of millions of farmers through cooperative structure.'),
          React.createElement('li', null, React.createElement('b', null, "Management Levels:"), ' Village cooperatives (operational), district unions (middle), state federation (top) ensured smooth functioning.'),
          React.createElement('li', null, React.createElement('b', null, "Pervasive Nature:"), ' Management principles applied across diverse geographical areas and farmer groups.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This demonstrates how effective management can transform traditional industries!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 1: Nature and Significance of Management at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Management = Process of achieving goals effectively (right things) & efficiently (things right)"),
      React.createElement('li', null, "Characteristics: Goal-oriented, Pervasive, Multidimensional, Continuous, Group activity, Dynamic, Intangible"),
      React.createElement('li', null, "Objectives: Organizational (Survival, Profit, Growth), Social (Quality, Fair practices), Personal (Compensation, Growth)"),
      React.createElement('li', null, "Nature: Art (creativity), Science (principles), Profession (ethics) - inexact science"),
      React.createElement('li', null, "Levels: Top (Strategy), Middle (Coordination), Operational (Supervision)"),
      React.createElement('li', null, "Functions: Planning, Organizing, Staffing, Directing, Controlling (POSDC)"),
      React.createElement('li', null, "Coordination is the essence - binds all functions for unity of action")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning, characteristics, objectives, levels, functions"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain effectiveness vs efficiency, management as art/science/profession"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Characteristics, objectives, levels, functions of management"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on management concepts and coordination")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Effectiveness focuses on goal achievement, efficiency on resource optimization"),
        React.createElement('li', null, "Management is pervasive, multidimensional, and a continuous process"),
        React.createElement('li', null, "All three objectives (organizational, social, personal) must be balanced"),
        React.createElement('li', null, "Management is an inexact science with flexible principles"),
        React.createElement('li', null, "Coordination is not a separate function but the essence of management")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Characteristics: Goal-oriented, Pervasive, Multidimensional, Continuous, Group, Dynamic, Intangible - G P M C G D I"),
        React.createElement('p', { className: 'font-semibold' }, "Objectives: Organizational, Social, Personal - O S P"),
        React.createElement('p', { className: 'font-semibold' }, "Nature: Art, Science, Profession - A S P"),
        React.createElement('p', { className: 'font-semibold' }, "Levels: Top, Middle, Operational - T M O"),
        React.createElement('p', { className: 'font-semibold' }, "Functions: Planning, Organizing, Staffing, Directing, Controlling - P O S D C"),
        React.createElement('p', { className: 'font-semibold' }, "Coordination Importance: Unity, Functional, Growth, Complexity, Specialization - U F G C S")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain management as both art and science, emphasizing 'inexact science' nature"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse effectiveness with efficiency - effectiveness is about goals, efficiency about resources"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples for each characteristic and objective of management"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say coordination is a separate function - it's the essence that binds all functions"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Mention all three levels of management with their specific roles"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that management is pervasive - required at all levels and in all organizations")
      )
    )
  )
};
