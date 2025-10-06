import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter11Module: LearningModule = {
  chapter: "11",
  title: "Rural Development",
  overview: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6' },
      React.createElement('h3', { className: 'text-xl font-bold text-green-800 mb-3' }, '🚜 Rural Development: Building Sustainable Village Economies'),
      React.createElement('p', { className: 'text-gray-700 mb-4' }, 'This chapter explores the critical challenges and solutions for rural development in India, where 65% of the population resides. We examine how credit accessibility, marketing inefficiencies, and agricultural dependency create poverty cycles, and discover government strategies to break these cycles through institutional reforms, diversification, and sustainable practices.'),
      React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
        React.createElement('h4', { className: 'font-semibold text-green-800 mb-2' }, '🎯 Learning Objectives'),
        React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
          React.createElement('li', null, 'Understand rural credit systems and institutional reforms'),
          React.createElement('li', null, 'Analyze agricultural marketing challenges and government interventions'),
          React.createElement('li', null, 'Explore diversification strategies for sustainable rural livelihoods'),
          React.createElement('li', null, 'Evaluate organic farming and sustainable development approaches'),
          React.createElement('li', null, 'Critically assess rural development policies and their effectiveness')
        )
      ),
      React.createElement('div', { className: 'mt-4 bg-yellow-50 p-3 rounded-lg' },
        React.createElement('p', { className: 'text-sm text-yellow-800' },
          React.createElement('b', null, 'CBSE Board Exam 2026 Focus:'), ' Questions often test understanding of NABARD, MSP, SHGs, and policy effectiveness. Expect case-based questions on rural credit and marketing reforms.'
        )
      )
    )
  ),
  keyConcepts: [
    {
      title: "🔄 Rural Credit System Evolution",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Rural credit is the backbone of agricultural investment and rural development. The journey from exploitative moneylenders to institutional credit has been transformative.'),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Historical Challenges:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Moneylenders charged 30-50% interest rates'),
            React.createElement('li', null, 'No formal credit appraisal or documentation'),
            React.createElement('li', null, 'Debt traps leading to land alienation')
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Institutional Framework:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Cooperative Banks:'), ' Started in 1904, now cover 95% villages'),
            React.createElement('li', null, React.createElement('b', null, 'Regional Rural Banks (1975):'), ' Joint venture of Government, RBI, and sponsor bank'),
            React.createElement('li', null, React.createElement('b', null, 'NABARD (1982):'), ' Apex institution for rural credit policy and refinancing'),
            React.createElement('li', null, React.createElement('b', null, 'Self-Help Groups (SHGs):'), ' Micro-credit through peer groups, 97% women members')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Example:'), ' A farmer needs ₹50,000 for tractor purchase. Through SHG linkage, he gets loan at 12% interest vs 36% from moneylender, saving ₹9,000 annually.'
        )
      )
    },
    {
      title: "🏪 Agricultural Marketing Challenges & Reforms",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Agricultural marketing involves all activities from farm to consumer. Farmers historically faced exploitation by intermediaries and poor infrastructure.'),
        React.createElement('div', { className: 'bg-orange-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-orange-800 mb-2' }, 'Key Problems:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Faulty weighing and price manipulation by traders'),
            React.createElement('li', null, 'Lack of storage facilities leading to distress sales'),
            React.createElement('li', null, 'Poor transportation infrastructure'),
            React.createElement('li', null, 'Information asymmetry about market prices')
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Government Interventions:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Regulated Markets:'), ' APMC Act provides orderly marketing'),
            React.createElement('li', null, React.createElement('b', null, 'Minimum Support Price (MSP):'), ' Guaranteed price for 23 crops'),
            React.createElement('li', null, React.createElement('b', null, 'e-NAM:'), ' Electronic trading platform connecting 1,000+ markets'),
            React.createElement('li', null, React.createElement('b', null, 'Model APMC Act 2017:'), ' Allows direct farmer-consumer sales')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'MSP Impact:'), ' Wheat MSP increased from ₹1,275/quintal (2014) to ₹2,125 (2023), benefiting 11 crore farmers.'
        )
      )
    },
    {
      title: "🌾 Agricultural Diversification Strategies",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Diversification reduces risk from mono-cropping and climate dependency, providing stable rural livelihoods through multiple income sources.'),
        React.createElement('div', { className: 'bg-purple-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-purple-800 mb-2' }, 'Two Dimensions:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Horizontal Diversification:'), ' Growing different crops in same season (rice + vegetables)'),
            React.createElement('li', null, React.createElement('b', null, 'Vertical Diversification:'), ' Adding value through processing (tomato → ketchup)')
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Allied Activities:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Animal Husbandry:'), ' Dairy, poultry, fisheries (40% agricultural GDP)'),
            React.createElement('li', null, React.createElement('b', null, 'Horticulture:'), ' Fruits, vegetables, flowers (30% agricultural growth)'),
            React.createElement('li', null, React.createElement('b', null, 'Agri-business:'), ' Seed production, organic farming, export')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Success Story:'), ' Punjab farmer diversified from wheat-rice to vegetables + dairy, increasing income from ₹2 lakh to ₹8 lakh annually.'
        )
      )
    },
    {
      title: "🌱 Organic Farming & Sustainable Agriculture",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Organic farming avoids chemical inputs, promoting ecological balance and sustainable food production. India has 2.3 million hectares under organic farming.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Key Principles:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'No chemical fertilizers, pesticides, or GMOs'),
            React.createElement('li', null, 'Use of organic manures, bio-pesticides, and crop rotation'),
            React.createElement('li', null, 'Maintenance of soil health and biodiversity')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Benefits & Challenges:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Benefits:'), ' Premium prices (20-30% higher), soil health, export potential'),
            React.createElement('li', null, React.createElement('b', null, 'Challenges:'), ' Lower yields initially, certification costs, marketing'),
            React.createElement('li', null, React.createElement('b', null, 'Government Support:'), ' Paramparagat Krishi Vikas Yojana, PGS certification')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Sikkim Success:'), ' First fully organic state (2016), exports organic products worth ₹300 crore annually.'
        )
      )
    },
    {
      title: "🏘️ Rural Infrastructure & Basic Amenities",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Rural development requires comprehensive infrastructure covering roads, electricity, water, sanitation, and healthcare. The BharatNet project aims to connect all villages digitally.'),
        React.createElement('div', { className: 'bg-indigo-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-indigo-800 mb-2' }, 'Key Infrastructure Areas:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Physical:'), ' Roads (PMGSY), electricity (Saubhagya), water (Jal Jeevan Mission)'),
            React.createElement('li', null, React.createElement('b', null, 'Social:'), ' Schools, healthcare centers, sanitation (Swachh Bharat)'),
            React.createElement('li', null, React.createElement('b', null, 'Digital:'), ' Internet connectivity, digital literacy, e-governance')
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Major Initiatives:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'PMAY-G:'), ' Housing for all rural poor by 2024'),
            React.createElement('li', null, React.createElement('b', null, 'MGNREGA:'), ' 100 days employment guarantee'),
            React.createElement('li', null, React.createElement('b', null, 'RURBAN:'), ' Integrated cluster development')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Impact:'), ' All villages electrified by 2022, 90% have tap water connections, 100% ODF status achieved.'
        )
      )
    },
    {
      title: "📊 Rural Development Policies & Evaluation",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'India has implemented multiple rural development programs. Success requires integrated approach combining credit, technology, markets, and infrastructure.'),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-yellow-800 mb-2' }, 'Policy Evolution:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Pre-1991:'), ' Focus on land reforms and cooperatives'),
            React.createElement('li', null, React.createElement('b', null, 'Post-1991:'), ' Market-oriented reforms, diversification emphasis'),
            React.createElement('li', null, React.createElement('b', null, 'Post-2014:'), ' Integrated development, digital inclusion')
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Critical Issues:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Regional disparities in development'),
            React.createElement('li', null, 'Climate change impact on agriculture'),
            React.createElement('li', null, 'Migration and labor shortages'),
            React.createElement('li', null, 'Sustainability of groundwater resources')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Evaluation:'), ' Rural poverty reduced from 50% (1993) to 25% (2019), but 41% still live on less than ₹32/day.'
        )
      )
    }
  ],
  keywords: [
    { term: "Rural Development", definition: "Comprehensive development of village economies focusing on agriculture, infrastructure, and livelihoods for rural population." },
    { term: "NABARD", definition: "National Bank for Agriculture and Rural Development (1982) - apex institution for rural credit policy and refinancing." },
    { term: "Self-Help Groups (SHGs)", definition: "Small informal groups (10-20 members) providing micro-credit, savings, and entrepreneurship training, 97% women-led." },
    { term: "Regional Rural Banks (RRBs)", definition: "Scheduled commercial banks established in 1975 for providing credit to rural and semi-urban areas." },
    { term: "Agricultural Marketing", definition: "Process involving assembling, storage, processing, transportation, packaging, grading, and distribution of farm produce." },
    { term: "Minimum Support Price (MSP)", definition: "Government-announced price floor for 23 crops to protect farmers from market price fluctuations." },
    { term: "e-NAM", definition: "Electronic National Agriculture Market - online trading platform connecting 1,000+ regulated markets across India." },
    { term: "Agricultural Diversification", definition: "Shifting from mono-cropping to multiple crops/activities to reduce risk and increase income stability." },
    { term: "Organic Farming", definition: "Chemical-free farming using organic manures, bio-pesticides, and natural methods to maintain soil health." },
    { term: "Paramparagat Krishi Vikas Yojana", definition: "Government scheme promoting organic farming through cluster approach and certification support." },
    { term: "Cooperative Marketing", definition: "Farmers collectively marketing produce through cooperatives to eliminate middlemen and get better prices." },
    { term: "MGNREGA", definition: "Mahatma Gandhi National Rural Employment Guarantee Act - provides 100 days guaranteed wage employment." },
    { term: "PMGSY", definition: "Pradhan Mantri Gram Sadak Yojana - all-weather road connectivity to unconnected villages." },
    { term: "Saubhagya", definition: "Government scheme providing free electricity connections to rural households (completed 2022)." },
    { term: "Jal Jeevan Mission", definition: "Har Ghar Jal program aiming to provide tap water connections to all rural households by 2024." },
    { term: "Swachh Bharat Mission", definition: "Clean India campaign making villages Open Defecation Free (ODF) with 100% sanitation coverage." },
    { term: "PMAY-G", definition: "Pradhan Mantri Awas Yojana (Gramin) - providing pucca houses to rural poor families." },
    { term: "RURBAN Mission", definition: "Shyama Prasad Mukherjee RURBAN Mission for integrated cluster-based rural development." },
    { term: "BharatNet", definition: "Project to provide broadband connectivity to all 2.5 lakh villages through optical fiber network." },
    { term: "Model APMC Act 2017", definition: "Reforms allowing direct farmer-consumer sales, contract farming, and private market yards." }
  ],
  caseStudies: [
    {
      title: "🥛 Operation Flood: White Revolution Success",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Launched in 1970, Operation Flood transformed India from milk-deficient to the world\'s largest milk producer. Gujarat\'s Amul cooperative became the model, with 3.6 crore farmers organized into 200,000 village cooperatives.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Key Achievements:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Milk production increased from 21 million tonnes (1970) to 230 million tonnes (2023)'),
            React.createElement('li', null, 'Per capita milk availability rose from 107 grams to 427 grams daily'),
            React.createElement('li', null, 'Farmers\' income increased through fair prices and value addition'),
            React.createElement('li', null, 'Created 10 million jobs in dairy sector')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Cooperative Marketing, Diversification, Rural Credit"),
        React.createElement('p', null, "This case demonstrates successful rural development through:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Cooperative Structure:'), ' Eliminated middlemen, ensured fair prices, and provided marketing support.'),
          React.createElement('li', null, React.createElement('b', null, 'Diversification:'), ' Provided year-round income through dairy alongside crop farming.'),
          React.createElement('li', null, React.createElement('b', null, 'Credit Access:'), ' Cooperatives provided timely credit for cattle purchase and feed.'),
          React.createElement('li', null, React.createElement('b', null, 'Sustainability:'), ' Created self-sustaining model replicable across regions.')
        )
      )
    },
    {
      title: "🌾 Telangana's Rythu Bandhu: Direct Income Support",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Launched in 2018, Rythu Bandhu provides ₹5,000 per acre annually to 58 lakh farmers. The scheme invests ₹12,000 crore yearly to support cultivation costs and reduce farmer distress.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Implementation Features:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Direct bank transfers to farmer accounts'),
            React.createElement('li', null, 'No restrictions on crop choice or irrigation type'),
            React.createElement('li', null, 'Technology-driven beneficiary identification'),
            React.createElement('li', null, 'Convergence with other schemes for maximum benefit')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Rural Credit, Agricultural Diversification, Policy Innovation"),
        React.createElement('p', null, "Key Learnings:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Direct Benefit Transfer:'), ' Eliminates leakages in subsidy delivery system.'),
          React.createElement('li', null, React.createElement('b', null, 'Risk Mitigation:'), ' Provides assured income support during crop failures or price crashes.'),
          React.createElement('li', null, React.createElement('b', null, 'Technology Integration:'), ' Aadhaar-linked payments ensure accurate targeting.'),
          React.createElement('li', null, React.createElement('b', null, 'Scalability:'), ' Model adopted by Andhra Pradesh, Jharkhand, and other states.')
        )
      )
    },
    {
      title: "🐟 Kerala Fisheries: Blue Revolution Success",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Kerala transformed its fisheries sector through cooperative societies and sustainable practices. With 600 km coastline and 44,000 hectares brackish water, fisheries contribute 3% to state GDP and employ 1.2 million people.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Transformation Strategies:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Formation of 2,200 fisheries cooperatives'),
            React.createElement('li', null, 'Motorization of traditional boats (1970s)'),
            React.createElement('li', null, 'Introduction of deep-sea fishing technology'),
            React.createElement('li', null, 'Export-oriented aquaculture development')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Diversification, Cooperative Marketing, Sustainable Development"),
        React.createElement('p', null, "Success Factors:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Diversification Impact:'), ' Reduced dependence on agriculture, provided alternative livelihoods.'),
          React.createElement('li', null, React.createElement('b', null, 'Cooperative Strength:'), ' Collective bargaining, input supply, and marketing support.'),
          React.createElement('li', null, React.createElement('b', null, 'Technology Adoption:'), ' Modern fishing methods increased productivity and safety.'),
          React.createElement('li', null, React.createElement('b', null, 'Sustainability Focus:'), ' Regulated fishing prevents over-exploitation of marine resources.')
        )
      )
    },
    {
      title: "🌱 Sikkim: Fully Organic State Achievement",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Sikkim became India\'s first fully organic state in 2016 through a decade-long transition. Farmers were trained in organic practices, and chemical pesticides were completely banned. Today, 75,000 hectares are organic certified.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Transition Process:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Phased elimination of chemical inputs (2003-2016)'),
            React.createElement('li', null, 'Farmer training and capacity building programs'),
            React.createElement('li', null, 'Development of organic input supply chains'),
            React.createElement('li', null, 'Premium pricing and export market linkages')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Organic Farming, Sustainable Development, Rural Marketing"),
        React.createElement('p', null, "Key Insights:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Health & Environment:'), ' Improved soil health, reduced chemical residues in food and water.'),
          React.createElement('li', null, React.createElement('b', null, 'Economic Benefits:'), ' Premium prices (20-30% higher), reduced input costs, export potential.'),
          React.createElement('li', null, React.createElement('b', null, 'Government Role:'), ' Policy support, training, certification assistance crucial for success.'),
          React.createElement('li', null, React.createElement('b', null, 'Challenges Overcome:'), ' Initial yield drops, certification costs, market linkages addressed through comprehensive support.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6' },
      React.createElement('h4', { className: 'text-xl font-bold text-green-800 mb-4' }, '🚀 Chapter 11: Rural Development - Quick Revision'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-green-800 mb-3' }, '📊 Exam Pattern & Weightage'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Question Types:'), ' 2-3 marks (short), 4-6 marks (long), Case-based (4 marks)'),
            React.createElement('li', null, React.createElement('b', null, 'Common Topics:'), ' NABARD, MSP, SHGs, Diversification, Organic farming'),
            React.createElement('li', null, React.createElement('b', null, 'Case Studies:'), ' Amul, Rythu Bandhu, Sikkim organic farming'),
            React.createElement('li', null, React.createElement('b', null, 'Numerical:'), ' Credit calculations, MSP impact analysis')
          )
        ),
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-blue-800 mb-3' }, '🎯 Critical Rules & Concepts'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Credit Evolution:'), ' Moneylenders → Cooperatives → RRBs → NABARD → SHGs'),
            React.createElement('li', null, React.createElement('b', null, 'MSP Formula:'), ' C2 + 50% (if C2 > C3) or C2 + 50% (if C3 > C2)'),
            React.createElement('li', null, React.createElement('b', null, 'Diversification:'), ' Horizontal (crops) + Vertical (value addition)'),
            React.createElement('li', null, React.createElement('b', null, 'Organic Premium:'), ' 20-30% higher prices, better health benefits')
          )
        )
      )
    ),

    React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-4' },
      React.createElement('h5', { className: 'font-bold text-yellow-800 mb-2' }, '🧠 Memory Aids & Mnemonics'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Rural Credit Sources:'),
          React.createElement('p', { className: 'text-lg font-bold text-green-600 mb-1' }, 'C R N S'),
          React.createElement('p', { className: 'text-xs' }, 'Cooperatives → RRBs → NABARD → SHGs')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Marketing Problems:'),
          React.createElement('p', { className: 'text-lg font-bold text-red-600 mb-1' }, 'F L I A'),
          React.createElement('p', { className: 'text-xs' }, 'Faulty weighing → Lack of storage → Information gap → Absence of regulation')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Diversification Types:'),
          React.createElement('p', { className: 'text-lg font-bold text-purple-600 mb-1' }, 'H V A'),
          React.createElement('p', { className: 'text-xs' }, 'Horizontal → Vertical → Allied activities')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Organic Benefits:'),
          React.createElement('p', { className: 'text-lg font-bold text-green-600 mb-1' }, 'P E S'),
          React.createElement('p', { className: 'text-xs' }, 'Premium prices → Environmental health → Soil fertility')
        )
      )
    ),

    React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
      React.createElement('h5', { className: 'font-bold text-green-800 mb-3' }, '📝 Chapter at a Glance'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Rural Credit:"), " Institutional sources (NABARD, RRBs, SHGs) vs moneylenders (30-50% interest)"),
          React.createElement('li', null, React.createElement('b', null, "Agricultural Marketing:"), " APMC regulation, MSP for 23 crops, e-NAM platform"),
          React.createElement('li', null, React.createElement('b', null, "Diversification:"), " Crop diversification + allied activities (dairy, fisheries, horticulture)"),
          React.createElement('li', null, React.createElement('b', null, "Organic Farming:"), " Chemical-free farming, premium pricing, soil health benefits")
        ),
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Infrastructure:"), " PMGSY roads, Saubhagya electricity, Jal Jeevan water"),
          React.createElement('li', null, React.createElement('b', null, "Key Schemes:"), " MGNREGA (100 days work), PMAY-G (housing), Swachh Bharat"),
          React.createElement('li', null, React.createElement('b', null, "Success Stories:"), " Amul dairy, Sikkim organic, Kerala fisheries"),
          React.createElement('li', null, React.createElement('b', null, "Current Status:"), " Rural poverty 25%, all villages electrified, 90% tap water coverage")
        )
      )
    ),

    React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg' },
      React.createElement('h5', { className: 'font-bold text-blue-800 mb-3' }, '🎯 Exam Strategy & Tips'),
      React.createElement('ul', { className: 'space-y-2 text-sm' },
        React.createElement('li', null, React.createElement('b', null, 'Case-based Questions:'), ' Focus on Amul cooperative model, Rythu Bandhu direct benefit, Sikkim organic transition'),
        React.createElement('li', null, React.createElement('b', null, 'Policy Analysis:'), ' Compare pre-1991 vs post-1991 rural development approaches'),
        React.createElement('li', null, React.createElement('b', null, 'Current Affairs:'), ' Link with recent schemes like PM-KISAN, Digital India in villages'),
        React.createElement('li', null, React.createElement('b', null, 'Numerical Problems:'), ' Calculate interest savings with institutional credit vs moneylenders'),
        React.createElement('li', null, React.createElement('b', null, 'Answer Structure:'), ' Define concept → Explain problem → Discuss government measures → Give examples → Conclude with impact')
      )
    )
  )
};
