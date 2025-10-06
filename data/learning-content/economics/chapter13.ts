import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter13Module: LearningModule = {
  chapter: "13",
  title: "Environment and Sustainable Development",
  overview: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-6' },
      React.createElement('h3', { className: 'text-xl font-bold text-green-800 mb-3' }, '🌍 Environment & Sustainable Development: Balancing Growth & Planet'),
      React.createElement('p', { className: 'text-gray-700 mb-4' }, 'This chapter explores the intricate relationship between economic development and environmental sustainability. India\'s rapid growth has created environmental challenges while 25 crore people still live in poverty, demanding innovative solutions that balance development with ecological preservation.'),
      React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
        React.createElement('h4', { className: 'font-semibold text-green-800 mb-2' }, '🎯 Learning Objectives'),
        React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
          React.createElement('li', null, 'Understand environmental functions and carrying capacity concepts'),
          React.createElement('li', null, 'Analyze India\'s environmental challenges and degradation patterns'),
          React.createElement('li', null, 'Evaluate sustainable development principles and global commitments'),
          React.createElement('li', null, 'Critically assess government policies and sustainable strategies'),
          React.createElement('li', null, 'Examine the trade-offs between economic growth and environmental protection')
        )
      ),
      React.createElement('div', { className: 'mt-4 bg-yellow-50 p-3 rounded-lg' },
        React.createElement('p', { className: 'text-sm text-yellow-800' },
          React.createElement('b', null, 'CBSE Board Exam 2026 Focus:'), ' Questions often test sustainable development definition, environmental functions, and Indian case studies. Expect analysis of government schemes and global environmental issues.'
        )
      )
    )
  ),
  keyConcepts: [
    {
      title: "🌿 Environment: Functions & Economic Value",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Environment is humanity\'s life-support system providing essential services valued at $125 trillion annually (UNEP). Its functions are interconnected and critical for sustainable development.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Four Key Functions:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Supply Function:'), ' Provides renewable (forests, water) and non-renewable (minerals, fossil fuels) resources'),
            React.createElement('li', null, React.createElement('b', null, 'Waste Assimilation:'), ' Absorbs and neutralizes pollutants and waste through natural processes'),
            React.createElement('li', null, React.createElement('b', null, 'Life Support:'), ' Maintains biodiversity, genetic resources, and ecological balance'),
            React.createElement('li', null, React.createElement('b', null, 'Aesthetic Services:'), ' Provides recreational, cultural, and spiritual benefits')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Economic Valuation:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Provisioning services: Food, water, timber ($75 trillion/year)'),
            React.createElement('li', null, 'Regulating services: Climate control, water purification ($25 trillion/year)'),
            React.createElement('li', null, 'Cultural services: Recreation, spiritual values ($10 trillion/year)'),
            React.createElement('li', null, 'Supporting services: Soil formation, nutrient cycling ($15 trillion/year)')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Value Example:'), ' Amazon rainforest provides $8.2 billion/year in environmental services vs $600 million from timber extraction.'
        )
      )
    },
    {
      title: "⚠️ Environmental Crisis: Carrying Capacity & Limits",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Environmental crisis occurs when human demands exceed planetary boundaries. India faces multiple crises from population pressure, industrialization, and climate change.'),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Key Concepts:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Carrying Capacity:'), ' Maximum population environment can sustainably support'),
            React.createElement('li', null, React.createElement('b', null, 'Absorptive Capacity:'), ' Environment\'s ability to absorb waste and pollutants'),
            React.createElement('li', null, React.createElement('b', null, 'Ecological Footprint:'), ' Land area required to support consumption patterns'),
            React.createElement('li', null, React.createElement('b', null, 'Overshoot:'), ' When consumption exceeds regeneration capacity')
          )
        ),
        React.createElement('div', { className: 'bg-orange-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-orange-800 mb-2' }, 'Crisis Indicators:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Groundwater extraction exceeds recharge by 70%'),
            React.createElement('li', null, 'Forest cover declined from 33% to 21.7%'),
            React.createElement('li', null, 'Air pollution causes 1.2 million premature deaths annually'),
            React.createElement('li', null, 'Plastic waste generation: 3.4 million tonnes/year')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'India\'s Overshoot:'), ' Ecological footprint is 1.2 hectares/person vs 0.8 hectares available globally.'
        )
      )
    },
    {
      title: "🇮🇳 India\'s Environmental Challenges",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'India faces unique environmental challenges from poverty-induced degradation and industrial pollution. The country ranks 177th out of 180 in Environmental Performance Index 2022.'),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Poverty-Induced Degradation:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Deforestation:'), ' 1.6 crore people depend on forests for livelihood'),
            React.createElement('li', null, React.createElement('b', null, 'Overgrazing:'), ' 70% grasslands degraded due to livestock pressure'),
            React.createElement('li', null, React.createElement('b', null, 'Fuelwood Crisis:'), ' 80% rural households use traditional fuels')
          )
        ),
        React.createElement('div', { className: 'bg-orange-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-orange-800 mb-2' }, 'Industrial & Urban Pollution:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Air Pollution:'), ' 22 of world\'s 30 most polluted cities in India'),
            React.createElement('li', null, React.createElement('b', null, 'Water Crisis:'), ' 70% surface water contaminated, 200,000 cancer deaths annually'),
            React.createElement('li', null, React.createElement('b', null, 'Land Degradation:'), ' 30% land affected by erosion, salinity, waterlogging'),
            React.createElement('li', null, React.createElement('b', null, 'Biodiversity Loss:'), ' 10% species threatened, 3,000 endangered plants/animals')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Delhi Air Crisis:'), ' PM2.5 levels 50x WHO limit, causes 50,000 deaths annually, economic cost ₹2 lakh crore/year.'
        )
      )
    },
    {
      title: "🌱 Sustainable Development: Principles & Framework",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Sustainable development balances economic growth, social equity, and environmental protection. Defined by Brundtland Commission (1987) as meeting present needs without compromising future generations.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Core Principles:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Inter-generational Equity:'), ' Fair distribution across time'),
            React.createElement('li', null, React.createElement('b', null, 'Intra-generational Equity:'), ' Fair distribution within current generation'),
            React.createElement('li', null, React.createElement('b', null, 'Precautionary Principle:'), ' Prevent harm even without scientific certainty'),
            React.createElement('li', null, React.createElement('b', null, 'Polluter Pays:'), ' Those causing damage bear cleanup costs')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Three Pillars:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Economic Sustainability:'), ' Efficient resource use, green jobs'),
            React.createElement('li', null, React.createElement('b', null, 'Social Sustainability:'), ' Poverty reduction, education, health'),
            React.createElement('li', null, React.createElement('b', null, 'Environmental Sustainability:'), ' Biodiversity conservation, pollution control')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'SDG Framework:'), ' 17 Sustainable Development Goals adopted by 193 nations in 2015, India committed to achieve by 2030.'
        )
      )
    },
    {
      title: "🔄 Global Environmental Issues & India\'s Role",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Global environmental challenges require international cooperation. India, as a developing nation, balances growth needs with global commitments while being disproportionately affected by climate change.'),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Major Global Issues:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Climate Change:'), ' 1.1°C warming, India contributes 7% emissions but faces severe impacts'),
            React.createElement('li', null, React.createElement('b', null, 'Ozone Depletion:'), ' 98% reduction in ozone-destroying substances since 1987'),
            React.createElement('li', null, React.createElement('b', null, 'Biodiversity Loss:'), ' Species extinction rate 1,000x natural rate'),
            React.createElement('li', null, React.createElement('b', null, 'Plastic Pollution:'), ' 8 million tonnes enter oceans annually')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'India\'s Commitments:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Paris Agreement:'), ' 33-35% emission reduction by 2030 from 2005 levels'),
            React.createElement('li', null, React.createElement('b', null, 'Montreal Protocol:'), ' Phased out ozone-depleting substances'),
            React.createElement('li', null, React.createElement('b', null, 'CBD & UNFCCC:'), ' Active participation in biodiversity and climate conventions'),
            React.createElement('li', null, React.createElement('b', null, 'NAMASTE:'), ' India\'s climate action plan for sustainable development')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Climate Vulnerability:'), ' India ranks 7th most vulnerable to climate change, faces ₹2 lakh crore annual losses by 2030.'
        )
      )
    },
    {
      title: "⚡ Sustainable Development Strategies & Technologies",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'India has implemented various strategies to achieve sustainable development, focusing on renewable energy, waste management, and green technologies. The transition requires policy support and technological innovation.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Energy Strategies:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Renewable Energy:'), ' 40% capacity from solar, wind, hydro by 2030 target'),
            React.createElement('li', null, React.createElement('b', null, 'Clean Fuels:'), ' CNG for transport, LPG for cooking, ethanol blending'),
            React.createElement('li', null, React.createElement('b', null, 'Energy Efficiency:'), ' UJALA (LED bulbs), PAT scheme for industries')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Resource Management:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Water Conservation:'), ' Jal Jeevan Mission, watershed development'),
            React.createElement('li', null, React.createElement('b', null, 'Waste Management:'), ' Swachh Bharat Mission, plastic ban, composting'),
            React.createElement('li', null, React.createElement('b', null, 'Agriculture:'), ' Organic farming, precision irrigation, crop diversification'),
            React.createElement('li', null, React.createElement('b', null, 'Forestry:'), ' Green India Mission, afforestation, mangrove restoration')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Renewable Success:'), ' India added 10 GW solar capacity in 2022, now 4th largest renewable energy producer globally.'
        )
      )
    },
    {
      title: "📊 Government Policies & International Cooperation",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Government plays crucial role in sustainable development through policies, regulations, and international cooperation. India\'s approach balances development needs with environmental protection.'),
        React.createElement('div', { className: 'bg-indigo-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-indigo-800 mb-2' }, 'Key Policies:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Environment Protection Act 1986:'), ' Framework legislation for environmental protection'),
            React.createElement('li', null, React.createElement('b', null, 'National Green Tribunal:'), ' Fast-track environmental dispute resolution'),
            React.createElement('li', null, React.createElement('b', null, 'Biodiversity Act 2002:'), ' Conservation and sustainable use of biodiversity'),
            React.createElement('li', null, React.createElement('b', null, 'Forest Rights Act 2006:'), ' Rights of forest-dwelling communities')
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-purple-800 mb-2' }, 'International Cooperation:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'UNFCCC & Paris Agreement:'), ' Climate change mitigation commitments'),
            React.createElement('li', null, React.createElement('b', null, 'CBD & Cartagena Protocol:'), ' Biodiversity conservation and biosafety'),
            React.createElement('li', null, React.createElement('b', null, 'Basel Convention:'), ' Hazardous waste management'),
            React.createElement('li', null, React.createElement('b', null, 'International Solar Alliance:'), ' Clean energy cooperation with 121 countries')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'NGT Impact:'), ' Resolved 40,000+ environmental cases, imposed ₹20,000 crore penalties on polluters since 2010.'
        )
      )
    }
  ],
  keywords: [
    { term: "Environment", definition: "The total planetary inheritance including biotic and abiotic factors that support life and economic activities." },
    { term: "Carrying Capacity", definition: "Maximum population size an environment can sustainably support with available resources." },
    { term: "Absorptive Capacity", definition: "Environment's ability to absorb, neutralize, and recycle waste and pollutants without damage." },
    { term: "Ecological Footprint", definition: "Measure of human demand on Earth's ecosystems; India's footprint exceeds global biocapacity." },
    { term: "Sustainable Development", definition: "Development meeting present needs without compromising future generations' ability to meet theirs." },
    { term: "Inter-generational Equity", definition: "Fair distribution of resources and opportunities between current and future generations." },
    { term: "Intra-generational Equity", definition: "Fair distribution of resources within the current generation, especially between rich and poor." },
    { term: "Precautionary Principle", definition: "Taking preventive action against potential environmental harm even without scientific certainty." },
    { term: "Polluter Pays Principle", definition: "Those causing environmental damage must bear the costs of prevention and cleanup." },
    { term: "Global Warming", definition: "Gradual increase in Earth's average surface temperature due to greenhouse gas emissions." },
    { term: "Ozone Depletion", definition: "Reduction in stratospheric ozone layer caused by CFCs and other ozone-depleting substances." },
    { term: "Biodiversity", definition: "Variety of life forms including genetic diversity, species diversity, and ecosystem diversity." },
    { term: "Environmental Impact Assessment (EIA)", definition: "Systematic process to identify, predict, and evaluate environmental effects of proposed projects." },
    { term: "Carbon Footprint", definition: "Total greenhouse gas emissions caused by an individual, organization, or product." },
    { term: "Circular Economy", definition: "Economic system aimed at eliminating waste through recycling, reusing, and regenerating products." },
    { term: "Green GDP", definition: "GDP adjusted for environmental costs and benefits to reflect true economic welfare." },
    { term: "Environmental Kuznets Curve", definition: "Hypothesis that environmental degradation increases then decreases with economic growth." },
    { term: "Paris Agreement", definition: "International treaty on climate change adopted in 2015, India committed to 33-35% emission reduction." },
    { term: "Montreal Protocol", definition: "International treaty to protect ozone layer by phasing out ozone-depleting substances." },
    { term: "National Green Tribunal (NGT)", definition: "Specialized judicial body in India for effective and expeditious disposal of environmental cases." }
  ],
  caseStudies: [
    {
      title: "🚗 Delhi's CNG Revolution: Clean Air Success",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Delhi was the world\'s most polluted city in 1997 with RSPM levels at 1,200 µg/m³ (40x WHO limit). Supreme Court mandated conversion of 50,000 vehicles to CNG by 2001, creating Asia\'s largest CNG network.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Transformation Results:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'RSPM levels reduced by 70% within 3 years'),
            React.createElement('li', null, 'SO2 emissions decreased by 80%, NOx by 50%'),
            React.createElement('li', null, 'Public health improved, respiratory diseases reduced by 30%'),
            React.createElement('li', null, 'Economic cost of air pollution reduced from ₹2,000 crore to ₹500 crore annually')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Sustainable Development, Environmental Crisis, Policy Intervention"),
        React.createElement('p', null, "Key Learnings:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Judicial Activism:'), ' Supreme Court\'s intervention forced implementation of clean fuel policy.'),
          React.createElement('li', null, React.createElement('b', null, 'Technology Transition:'), ' Successful conversion of entire public transport fleet to cleaner fuel.'),
          React.createElement('li', null, React.createElement('b', null, 'Health-Economy Link:'), ' Environmental improvement led to productivity gains and healthcare savings.'),
          React.createElement('li', null, React.createElement('b', null, 'Scalability:'), ' Model replicated in Mumbai, Kolkata, and other Indian cities.')
        )
      )
    },
    {
      title: "🌳 Chipko Movement: Community Forest Conservation",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Started in 1973 in Uttarakhand\'s Chamoli district, local women hugged trees to prevent commercial logging by a sports goods company. The movement spread across India, saving millions of trees and influencing forest policy.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Movement Impact:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Prevented felling of 12,000 trees in initial protest'),
            React.createElement('li', null, 'Influenced 1980 Forest Conservation Act'),
            React.createElement('li', null, 'Led to Joint Forest Management approach'),
            React.createElement('li', null, 'Inspired similar movements worldwide (Appiko in Karnataka, Bishnoi in Rajasthan)')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Environmental Functions, Carrying Capacity, Community Participation"),
        React.createElement('p', null, "Critical Insights:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Grassroots Action:'), ' Local communities most effective in environmental protection when empowered.'),
          React.createElement('li', null, React.createElement('b', null, 'Economic vs Ecological Value:'), ' Short-term commercial gains vs long-term environmental services.'),
          React.createElement('li', null, React.createElement('b', null, 'Gender Role:'), ' Women\'s leadership in environmental movements due to direct dependence on forest resources.'),
          React.createElement('li', null, React.createElement('b', null, 'Policy Influence:'), ' Civil society movements can shape national environmental legislation.')
        )
      )
    },
    {
      title: "♻️ Kerala\'s Waste Management: From Crisis to Model",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Kerala faced severe waste crisis in 2018 with overflowing landfills and plastic pollution. State implemented comprehensive waste management through local bodies, achieving 70% waste processing and becoming plastic-free by 2020.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Transformation Strategy:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Decentralized waste processing at 1,200 local body levels'),
            React.createElement('li', null, 'Aerobic composting for organic waste, biomethanation plants'),
            React.createElement('li', null, 'Plastic ban with strict enforcement and alternatives'),
            React.createElement('li', null, 'Public awareness campaigns and community participation')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Absorptive Capacity, Sustainable Development, Circular Economy"),
        React.createElement('p', null, "Success Factors:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Decentralized Approach:'), ' Local solutions more effective than centralized systems for waste management.'),
          React.createElement('li', null, React.createElement('b', null, 'Circular Economy:'), ' Waste-to-resource conversion through composting and biomethanation.'),
          React.createElement('li', null, React.createElement('b', null, 'Behavioral Change:'), ' Community education crucial for sustainable waste practices.'),
          React.createElement('li', null, React.createElement('b', null, 'Economic Benefits:'), ' Created jobs in waste processing, reduced landfill costs, improved tourism.')
        )
      )
    },
    {
      title: "☀️ Gujarat Solar Revolution: Renewable Energy Leadership",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Gujarat became India\'s solar capital with 5 GW installed capacity by 2022. The state attracted ₹1 lakh crore investment, created 50,000 jobs, and reduced carbon emissions by 10 million tonnes annually.'),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Solar Policy Framework:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Solar Policy 2009 with feed-in tariffs and subsidies'),
            React.createElement('li', null, 'Charanka Solar Park (500 MW) - world\'s largest at inception'),
            React.createElement('li', null, 'Net metering for rooftop solar adoption'),
            React.createElement('li', null, 'Research partnerships with international companies')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Sustainable Development, Renewable Energy, Climate Action"),
        React.createElement('p', null, "Key Achievements:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Economic Growth:'), ' Solar industry created ₹70,000 crore GSDP contribution and export earnings.'),
          React.createElement('li', null, React.createElement('b', null, 'Employment Generation:'), ' Direct jobs for 50,000 people, indirect employment for 2 lakh.'),
          React.createElement('li', null, React.createElement('b', null, 'Environmental Impact:'), ' Avoided 10 million tonnes CO2 emissions, reduced fossil fuel imports.'),
          React.createElement('li', null, React.createElement('b', null, 'Technology Transfer:'), ' Became hub for solar manufacturing and innovation in India.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-6' },
      React.createElement('h4', { className: 'text-xl font-bold text-green-800 mb-4' }, '🌍 Environment & Sustainable Development - Quick Revision'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-green-800 mb-3' }, '📊 Exam Pattern & Weightage'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Question Types:'), ' 4-6 marks (long), Case-based (4 marks), Source-based (4 marks)'),
            React.createElement('li', null, React.createElement('b', null, 'Common Topics:'), ' Sustainable development definition, environmental functions, Indian case studies'),
            React.createElement('li', null, React.createElement('b', null, 'Case Studies:'), ' Delhi CNG, Chipko movement, Kerala waste management, Gujarat solar'),
            React.createElement('li', null, React.createElement('b', null, 'Current Affairs:'), ' Paris Agreement, SDG progress, NGT judgments, environmental policies')
          )
        ),
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-teal-800 mb-3' }, '🎯 Critical Rules & Concepts'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Environmental Functions:'), ' Supply → Waste absorption → Life support → Aesthetics'),
            React.createElement('li', null, React.createElement('b', null, 'Sustainable Development:'), ' Present needs without compromising future generations'),
            React.createElement('li', null, React.createElement('b', null, 'India\'s Challenges:'), ' Poverty degradation + Industrial pollution = Dual threat'),
            React.createElement('li', null, React.createElement('b', null, 'Three Pillars:'), ' Economic + Social + Environmental sustainability')
          )
        )
      )
    ),

    React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-4' },
      React.createElement('h5', { className: 'font-bold text-yellow-800 mb-2' }, '🧠 Memory Aids & Mnemonics'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Environmental Functions:'),
          React.createElement('p', { className: 'text-lg font-bold text-green-600 mb-1' }, 'S W L A'),
          React.createElement('p', { className: 'text-xs' }, 'Supply → Waste absorption → Life support → Aesthetics')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Sustainable Development Pillars:'),
          React.createElement('p', { className: 'text-lg font-bold text-blue-600 mb-1' }, 'E S E'),
          React.createElement('p', { className: 'text-xs' }, 'Economic → Social → Environmental')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'India\'s Environmental Issues:'),
          React.createElement('p', { className: 'text-lg font-bold text-red-600 mb-1' }, 'P A W L B'),
          React.createElement('p', { className: 'text-xs' }, 'Pollution → Air → Water → Land → Biodiversity')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Global Agreements:'),
          React.createElement('p', { className: 'text-lg font-bold text-purple-600 mb-1' }, 'P M C B'),
          React.createElement('p', { className: 'text-xs' }, 'Paris → Montreal → CBD → Basel')
        )
      )
    ),

    React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
      React.createElement('h5', { className: 'font-bold text-green-800 mb-3' }, '📝 Chapter at a Glance'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Environmental Functions:"), " Resource supply, waste assimilation, life support, aesthetic services"),
          React.createElement('li', null, React.createElement('b', null, "Environmental Crisis:"), " Overshoot when use exceeds carrying/absorptive capacity"),
          React.createElement('li', null, React.createElement('b', null, "India's Challenges:"), " Poverty-induced degradation + Industrial pollution dual threat"),
          React.createElement('li', null, React.createElement('b', null, "Sustainable Development:"), " Brundtland definition, inter/intra-generational equity")
        ),
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Global Issues:"), " Climate change, ozone depletion, biodiversity loss, plastic pollution"),
          React.createElement('li', null, React.createElement('b', null, "India's Commitments:"), " Paris Agreement (33-35% reduction), Montreal Protocol, CBD"),
          React.createElement('li', null, React.createElement('b', null, "Sustainable Strategies:"), " Renewable energy, clean fuels, organic farming, waste management"),
          React.createElement('li', null, React.createElement('b', null, "Success Stories:"), " Delhi CNG, Chipko movement, Kerala waste management, Gujarat solar")
        )
      )
    ),

    React.createElement('div', { className: 'bg-teal-50 p-4 rounded-lg' },
      React.createElement('h5', { className: 'font-bold text-teal-800 mb-3' }, '🎯 Exam Strategy & Tips'),
      React.createElement('ul', { className: 'space-y-2 text-sm' },
        React.createElement('li', null, React.createElement('b', null, 'Case-based Questions:'), ' Focus on Delhi CNG (policy success), Chipko (community action), Kerala waste (decentralized model)'),
        React.createElement('li', null, React.createElement('b', null, 'Definition Questions:'), ' Sustainable development, carrying capacity, precautionary principle - quote exact definitions'),
        React.createElement('li', null, React.createElement('b', null, 'Policy Analysis:'), ' Compare government schemes, evaluate environmental impact, suggest improvements'),
        React.createElement('li', null, React.createElement('b', null, 'Current Affairs Link:'), ' Connect with recent developments in climate action, renewable energy targets, environmental judgments'),
        React.createElement('li', null, React.createElement('b', null, 'Answer Structure:'), ' Define concept → Explain with Indian context → Discuss challenges → Suggest sustainable solutions → Use data/examples')
      )
    )
  )
};
