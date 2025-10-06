import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter12Module: LearningModule = {
  chapter: "12",
  title: "Employment: Growth, Informalisation and Other Issues",
  overview: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6' },
      React.createElement('h3', { className: 'text-xl font-bold text-blue-800 mb-3' }, '💼 Employment Dynamics: Growth, Informalisation & Challenges'),
      React.createElement('p', { className: 'text-gray-700 mb-4' }, 'This chapter examines India\'s complex employment landscape, where 47 crore workers navigate formal-informal divides, face jobless growth, and grapple with informalisation trends. We analyze workforce participation, sectoral distribution, and policy responses to create sustainable employment opportunities.'),
      React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-blue-500' },
        React.createElement('h4', { className: 'font-semibold text-blue-800 mb-2' }, '🎯 Learning Objectives'),
        React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
          React.createElement('li', null, 'Understand employment concepts and workforce participation patterns'),
          React.createElement('li', null, 'Analyze formal vs informal sector dynamics and informalisation trends'),
          React.createElement('li', null, 'Evaluate unemployment types and measurement challenges'),
          React.createElement('li', null, 'Critically assess jobless growth phenomenon and policy responses'),
          React.createElement('li', null, 'Examine government employment generation schemes and their effectiveness')
        )
      ),
      React.createElement('div', { className: 'mt-4 bg-yellow-50 p-3 rounded-lg' },
        React.createElement('p', { className: 'text-sm text-yellow-800' },
          React.createElement('b', null, 'CBSE Board Exam 2026 Focus:'), ' Questions often test worker classification, unemployment types, and informal sector analysis. Expect calculations of worker-population ratio and case-based questions on gig economy.'
        )
      )
    )
  ),
  keyConcepts: [
    {
      title: "👥 Worker Classification & Participation Rates",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Understanding employment requires clear definitions and measurement. India\'s workforce of 47 crore includes diverse categories with varying security and benefits.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Worker Definitions:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Worker:'), ' Person engaged in any economic activity for ≥1 hour in reference week'),
            React.createElement('li', null, React.createElement('b', null, 'Workforce:'), ' All persons employed + unemployed seeking work'),
            React.createElement('li', null, React.createElement('b', null, 'Worker-Population Ratio:'), ' (Total Workers ÷ Total Population) × 100 = 37.4% (2022)')
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Employment Categories:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Self-Employed (52%):'), ' Own-account workers, employers (street vendors, farmers)'),
            React.createElement('li', null, React.createElement('b', null, 'Regular Salaried (24%):'), ' Formal employees with social security benefits'),
            React.createElement('li', null, React.createElement('b', null, 'Casual Wage Labourers (24%):'), ' Daily wage workers, most vulnerable group')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Calculation Example:'), ' If population is 100 crore and workers are 37.4 crore, Worker-Population Ratio = 37.4%. Female ratio (18.2%) is half of male ratio (55.8%).'
        )
      )
    },
    {
      title: "🏢 Formal vs Informal Sector Dichotomy",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'India\'s employment structure reveals a stark divide between secure formal jobs and precarious informal work, with 93% of workers in the informal sector lacking basic protections.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Formal Sector (Organised):'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Government establishments + private firms with ≥10 workers'),
            React.createElement('li', null, 'Job security, EPF, ESI, gratuity, paid leave'),
            React.createElement('li', null, 'Only 7% of workforce (3.3 crore workers)'),
            React.createElement('li', null, 'Higher productivity and wages')
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Informal Sector (Unorganised):'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'All other enterprises and workers'),
            React.createElement('li', null, 'No social security, irregular wages, no legal protection'),
            React.createElement('li', null, '93% of workforce (43.7 crore workers)'),
            React.createElement('li', null, 'Street vendors, construction workers, domestic help')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Formal Sector Benefits:'), ' A formal worker gets ₹15,000/month + ₹3,000 EPF contribution, while informal worker gets ₹8,000/month with no benefits.'
        )
      )
    },
    {
      title: "📉 Informalisation Trends & Causes",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Informalisation refers to the growing proportion of workforce in informal employment. This trend accelerated post-1991 economic reforms, creating a dual labour market.'),
        React.createElement('div', { className: 'bg-orange-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-orange-800 mb-2' }, 'Key Drivers:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Globalisation:'), ' Increased competition, outsourcing to informal units'),
            React.createElement('li', null, React.createElement('b', null, 'Contract Labour:'), ' Formal firms hire through contractors to avoid regulations'),
            React.createElement('li', null, React.createElement('b', null, 'Technology Changes:'), ' Automation displaces formal workers to informal jobs'),
            React.createElement('li', null, React.createElement('b', null, 'Gig Economy:'), ' Platform-based work (Uber, Swiggy) classified as self-employment')
          )
        ),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Consequences:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'No social security coverage for 43 crore workers'),
            React.createElement('li', null, 'Irregular income and job insecurity'),
            React.createElement('li', null, 'Limited access to credit and healthcare'),
            React.createElement('li', null, 'Widening income inequality')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Trend:'), ' Formal sector employment grew 1.2% annually (1999-2011) vs 7.9% informal growth, leading to informalisation.'
        )
      )
    },
    {
      title: "📊 Unemployment: Types & Measurement",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Unemployment occurs when people willing and able to work cannot find employment. India measures unemployment through periodic labour force surveys with different approaches.'),
        React.createElement('div', { className: 'bg-purple-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-purple-800 mb-2' }, 'Major Types:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Open Unemployment:'), ' Completely unemployed, actively seeking work (6.6% in 2022)'),
            React.createElement('li', null, React.createElement('b', null, 'Disguised Unemployment:'), ' Employed but productivity is zero (common in agriculture)'),
            React.createElement('li', null, React.createElement('b', null, 'Seasonal Unemployment:'), ' Work available only during certain seasons'),
            React.createElement('li', null, React.createElement('b', null, 'Frictional Unemployment:'), ' Temporary unemployment while changing jobs')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Measurement Methods:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Usual Status:'), ' Employment status over past year'),
            React.createElement('li', null, React.createElement('b', null, 'Current Weekly Status:'), ' Employment in reference week'),
            React.createElement('li', null, React.createElement('b', null, 'Current Daily Status:'), ' Employment on each day of reference week')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Youth Unemployment:'), ' 17.3% for 15-29 age group vs 3.3% overall, highest among educated youth.'
        )
      )
    },
    {
      title: "📈 Jobless Growth Phenomenon",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Jobless growth occurs when GDP grows rapidly but employment generation lags behind. India experienced this during 1999-2011 when GDP grew 7% annually but employment grew only 1.2%.'),
        React.createElement('div', { className: 'bg-red-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-red-800 mb-2' }, 'Causes:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Capital-Intensive Growth:'), ' Investment in machines rather than labour'),
            React.createElement('li', null, React.createElement('b', null, 'Service Sector Dominance:'), ' IT, finance create few jobs compared to manufacturing'),
            React.createElement('li', null, React.createElement('b', null, 'Agricultural Stagnation:'), ' Farm sector employment declined from 60% to 45%'),
            React.createElement('li', null, React.createElement('b', null, 'Skill Mismatch:'), ' Education system not aligned with job market needs')
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-yellow-800 mb-2' }, 'Recent Trends:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Employment growth accelerated to 4.1% (2011-2022)'),
            React.createElement('li', null, 'Manufacturing employment increased from 12% to 14%'),
            React.createElement('li', null, 'Construction sector became largest employer (14%)'),
            React.createElement('li', null, 'Gig economy created 7.7 crore platform workers')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Impact:'), ' During 2004-2011, GDP grew 8.1% annually but employment grew only 0.5%, creating jobless growth.'
        )
      )
    },
    {
      title: "🚀 Government Employment Initiatives",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Government launched multiple programs to address employment challenges, focusing on skill development, entrepreneurship, and wage employment guarantee.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-green-800 mb-2' }, 'Major Schemes:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'MGNREGA (2005):'), ' 100 days guaranteed wage employment, ₹211/day'),
            React.createElement('li', null, React.createElement('b', null, 'PMKVY (2015):'), ' Skill development for 10 crore youth by 2022'),
            React.createElement('li', null, React.createElement('b', null, 'Start-Up India (2016):'), ' Entrepreneurship promotion with tax benefits'),
            React.createElement('li', null, React.createElement('b', null, 'Mudra Yojana (2015):'), ' Micro-credit up to ₹10 lakh for small businesses')
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-blue-800 mb-2' }, 'Impact Assessment:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'MGNREGA provided employment to 7.9 crore households annually'),
            React.createElement('li', null, 'PMKVY trained 1.4 crore youth, 60% got jobs'),
            React.createElement('li', null, 'Mudra loans disbursed ₹18 lakh crore to 30 crore beneficiaries'),
            React.createElement('li', null, 'Start-Up India created 70,000+ start-ups')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'MGNREGA Success:'), ' Created 29,000 crore person-days of employment, reduced rural poverty by 10-15%.'
        )
      )
    },
    {
      title: "🌍 Sectoral Employment Distribution",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Employment distribution across sectors reveals structural transformation challenges. Agriculture still employs 45% workers but contributes only 18% to GDP.'),
        React.createElement('div', { className: 'bg-indigo-50 p-3 rounded-lg mb-3' },
          React.createElement('h5', { className: 'font-semibold text-indigo-800 mb-2' }, 'Current Distribution:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Agriculture (45%):'), ' 21 crore workers, declining due to mechanization'),
            React.createElement('li', null, React.createElement('b', null, 'Industry (24%):'), ' 11 crore workers, growing in manufacturing'),
            React.createElement('li', null, React.createElement('b', null, 'Services (31%):'), ' 14 crore workers, fastest growing sector')
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded-lg' },
          React.createElement('h5', { className: 'font-semibold text-yellow-800 mb-2' }, 'Structural Issues:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Productivity gap: Services (₹8 lakh/year) vs Agriculture (₹1 lakh/year)'),
            React.createElement('li', null, 'Under-employment in agriculture despite disguised unemployment'),
            React.createElement('li', null, 'Skill gap in industry and services sectors'),
            React.createElement('li', null, 'Urban-rural migration creating informal urban employment')
          )
        )
      ),
      examFocus: true,
      example: React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg mt-3' },
        React.createElement('p', { className: 'text-sm' },
          React.createElement('b', null, 'Migration Impact:'), ' 9 crore internal migrants, 60% work in informal urban jobs with low wages and no benefits.'
        )
      )
    }
  ],
  keywords: [
    { term: "Worker-Population Ratio", definition: "Percentage of total population engaged in economic activities; India's ratio is 37.4% (2022), with significant gender gap." },
    { term: "Self-Employed Workers", definition: "Workers who own and operate enterprises; largest category (52% of workforce) including farmers, shopkeepers, artisans." },
    { term: "Regular Salaried Employees", definition: "Workers with fixed employer-employee relationship; 24% of workforce with social security benefits." },
    { term: "Casual Wage Labourers", definition: "Workers engaged on daily/periodic basis; 24% of workforce, most vulnerable to exploitation." },
    { term: "Formal Sector", definition: "Organised sector with ≥10 workers; provides EPF, ESI, gratuity; only 7% of workforce (3.3 crore workers)." },
    { term: "Informal Sector", definition: "Unorganised sector without legal protections; 93% of workforce (43.7 crore workers) without social security." },
    { term: "Informalisation", definition: "Growing proportion of workforce in informal employment; accelerated post-1991 due to globalisation and contract labour." },
    { term: "Open Unemployment", definition: "Completely unemployed persons actively seeking work; India's rate is 6.6% (2022)." },
    { term: "Disguised Unemployment", definition: "More workers employed than needed; marginal productivity is zero; common in agriculture." },
    { term: "Seasonal Unemployment", definition: "Unemployment during specific seasons; affects agriculture, tourism, and construction sectors." },
    { term: "Jobless Growth", definition: "GDP growth without proportional employment increase; India experienced this during 1999-2011." },
    { term: "MGNREGA", definition: "Mahatma Gandhi National Rural Employment Guarantee Act (2005); guarantees 100 days wage employment at ₹211/day." },
    { term: "PMKVY", definition: "Pradhan Mantri Kaushal Vikas Yojana (2015); aims to skill 10 crore youth by 2022." },
    { term: "Mudra Yojana", definition: "Micro Units Development and Refinance Agency (2015); provides micro-credit up to ₹10 lakh for small businesses." },
    { term: "Start-Up India", definition: "Government initiative (2016) to promote entrepreneurship with tax benefits and incubation support." },
    { term: "Gig Economy", definition: "Platform-based work (Uber, Swiggy, Zomato); creates flexible jobs but often informal with no benefits." },
    { term: "Frictional Unemployment", definition: "Temporary unemployment while transitioning between jobs; considered healthy in dynamic economies." },
    { term: "Usual Status Approach", definition: "Unemployment measurement based on employment status over past year; used by NSSO." },
    { term: "Current Weekly Status", definition: "Unemployment measurement based on employment in reference week; captures underemployment." },
    { term: "Current Daily Status", definition: "Most comprehensive unemployment measure; considers employment status each day of reference week." }
  ],
  caseStudies: [
    {
      title: "🚴 Gig Economy: Uber & Urban Employment",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Uber entered India in 2014, creating employment for 5 lakh drivers. Drivers earn ₹20,000-40,000/month through flexible hours but lack formal employment benefits. The model expanded to food delivery (Swiggy, Zomato) employing 20 lakh workers.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Employment Features:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Flexible working hours and income potential'),
            React.createElement('li', null, 'Low entry barriers (smartphone + vehicle)'),
            React.createElement('li', null, 'Performance-based earnings with incentives'),
            React.createElement('li', null, 'Created opportunities for educated unemployed youth')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Informalisation, Gig Economy, Jobless Growth"),
        React.createElement('p', null, "Key Insights:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Informalisation:'), ' Workers classified as independent contractors, no EPF/ESI benefits despite platform control.'),
          React.createElement('li', null, React.createElement('b', null, 'Income Variability:'), ' Earnings fluctuate with demand, no guaranteed minimum wage or paid leave.'),
          React.createElement('li', null, React.createElement('b', null, 'Skill Development:'), ' Platform provides training but workers bear costs; no formal certification.'),
          React.createElement('li', null, React.createElement('b', null, 'Policy Challenge:'), ' Need new regulations balancing flexibility with worker protection.')
        )
      )
    },
    {
      title: "🏭 Contract Labour in Manufacturing",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Maruti Suzuki employs 4,000 permanent workers but uses 20,000 contract workers through agencies. Contract workers perform same tasks but earn ₹12,000/month vs permanent workers\' ₹25,000/month, with no benefits.'),
        React.createElement('div', { className: 'bg-orange-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Contract Labour System:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Agencies recruit and manage workers'),
            React.createElement('li', null, 'Companies avoid direct employment responsibilities'),
            React.createElement('li', null, 'Workers lack job security and benefits'),
            React.createElement('li', null, 'Prevalent in automobile, textile, and IT sectors')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Formal vs Informal, Informalisation, Labour Market Dualism"),
        React.createElement('p', null, "Critical Analysis:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Cost Reduction:'), ' Companies save 40-50% on labour costs through contract system.'),
          React.createElement('li', null, React.createElement('b', null, 'Worker Vulnerability:'), ' Easy termination, no grievance redressal, health risks in manufacturing.'),
          React.createElement('li', null, React.createElement('b', null, 'Legal Framework:'), ' Contract Labour Act 1970 requires equal wages but poorly enforced.'),
          React.createElement('li', null, React.createElement('b', null, 'Social Impact:'), ' Widens inequality between permanent and contract workers in same workplace.')
        )
      )
    },
    {
      title: "🌾 Agricultural Disguised Unemployment",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'A Punjab farm family owns 5 acres and employs 8 workers for wheat harvesting. If 4 workers can complete the task efficiently, the additional 4 represent disguised unemployment with zero marginal productivity.'),
        React.createElement('div', { className: 'bg-green-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Farm Employment Dynamics:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Family farms employ relatives to maintain social ties'),
            React.createElement('li', null, 'Mechanization could reduce workforce by 60%'),
            React.createElement('li', null, 'Workers accept low wages due to lack of alternatives'),
            React.createElement('li', null, 'Common in labour-surplus regions like UP, Bihar')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Disguised Unemployment, Agricultural Employment, Underemployment"),
        React.createElement('p', null, "Economic Implications:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Productivity Loss:'), ' Same output with fewer workers possible through mechanization.'),
          React.createElement('li', null, React.createElement('b', null, 'Policy Dilemma:'), ' Removing surplus labour causes unemployment elsewhere.'),
          React.createElement('li', null, React.createElement('b', null, 'Rural Poverty:'), ' Disguised unemployed accept any work, perpetuating low wages.'),
          React.createElement('li', null, React.createElement('b', null, 'Solution Approach:'), ' Diversification to non-farm employment and skill development.')
        )
      )
    },
    {
      title: "💼 MGNREGA: Employment Guarantee Success",
      scenario: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' }, 'Since 2005, MGNREGA provided 29,000 crore person-days of employment to 7.9 crore rural households annually. In drought-hit Bundelkhand region, it became lifeline during agricultural distress.'),
        React.createElement('div', { className: 'bg-blue-50 p-3 rounded-lg' },
          React.createElement('p', { className: 'text-sm font-semibold mb-2' }, 'Program Features:'),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
            React.createElement('li', null, 'Legal right to 100 days employment at ₹211/day'),
            React.createElement('li', null, 'Works within 5 km of village, equal wage for men/women'),
            React.createElement('li', null, 'Focus on water conservation, afforestation, rural connectivity'),
            React.createElement('li', null, 'Direct benefit transfer to worker accounts')
          )
        )
      ),
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-2' }, "Concepts Involved: Employment Generation, Rural Development, Social Security"),
        React.createElement('p', null, "Impact Assessment:"),
         React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, 'Employment Creation:'), ' Provided work during crises, reduced distress migration by 20%.'),
          React.createElement('li', null, React.createElement('b', null, 'Women Empowerment:'), ' 55% beneficiaries are women, increased financial independence.'),
          React.createElement('li', null, React.createElement('b', null, 'Asset Creation:'), ' Built 3 crore water bodies, 2.5 crore hectares afforested, 60 lakh km roads.'),
          React.createElement('li', null, React.createElement('b', null, 'Challenges:'), ' Delayed payments, corruption, need for better monitoring and convergence.')
        )
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6' },
      React.createElement('h4', { className: 'text-xl font-bold text-blue-800 mb-4' }, '💼 Chapter 12: Employment Dynamics - Quick Revision'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-blue-800 mb-3' }, '📊 Exam Pattern & Weightage'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Question Types:'), ' 2-4 marks (definitions), 4-6 marks (analysis), Case-based (4 marks)'),
            React.createElement('li', null, React.createElement('b', null, 'Common Topics:'), ' Worker classification, formal/informal sectors, unemployment types'),
            React.createElement('li', null, React.createElement('b', null, 'Case Studies:'), ' Gig economy, contract labour, MGNREGA, disguised unemployment'),
            React.createElement('li', null, React.createElement('b', null, 'Numerical:'), ' Worker-population ratio calculations, unemployment rate analysis')
          )
        ),
        React.createElement('div', { className: 'bg-white p-4 rounded-lg shadow-sm' },
          React.createElement('h5', { className: 'font-bold text-purple-800 mb-3' }, '🎯 Critical Rules & Concepts'),
          React.createElement('ul', { className: 'space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, 'Worker Categories:'), ' Self-employed (52%) > Casual (24%) > Regular salaried (24%)'),
            React.createElement('li', null, React.createElement('b', null, 'Sector Division:'), ' Formal (7%) vs Informal (93%) - 10+ workers = formal'),
            React.createElement('li', null, React.createElement('b', null, 'Unemployment Types:'), ' Open (6.6%) > Disguised (agriculture) > Seasonal > Frictional'),
            React.createElement('li', null, React.createElement('b', null, 'Jobless Growth:'), ' GDP growth without employment growth (1999-2011)')
          )
        )
      )
    ),

    React.createElement('div', { className: 'bg-yellow-50 p-4 rounded-lg mb-4' },
      React.createElement('h5', { className: 'font-bold text-yellow-800 mb-2' }, '🧠 Memory Aids & Mnemonics'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Worker Categories:'),
          React.createElement('p', { className: 'text-lg font-bold text-blue-600 mb-1' }, 'S C R'),
          React.createElement('p', { className: 'text-xs' }, 'Self-employed → Casual → Regular salaried')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Unemployment Types:'),
          React.createElement('p', { className: 'text-lg font-bold text-red-600 mb-1' }, 'O D S F'),
          React.createElement('p', { className: 'text-xs' }, 'Open → Disguised → Seasonal → Frictional')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Employment Schemes:'),
          React.createElement('p', { className: 'text-lg font-bold text-green-600 mb-1' }, 'M P M S'),
          React.createElement('p', { className: 'text-xs' }, 'MGNREGA → PMKVY → Mudra → Start-Up India')
        ),
        React.createElement('div', { className: 'bg-white p-3 rounded' },
          React.createElement('p', { className: 'font-semibold text-sm mb-1' }, 'Sector Distribution:'),
          React.createElement('p', { className: 'text-lg font-bold text-indigo-600 mb-1' }, 'A I S'),
          React.createElement('p', { className: 'text-xs' }, 'Agriculture (45%) → Industry (24%) → Services (31%)')
        )
      )
    ),

    React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-blue-500' },
      React.createElement('h5', { className: 'font-bold text-blue-800 mb-3' }, '📝 Chapter at a Glance'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Worker-Population Ratio:"), " 37.4% (2022) - Male: 55.8%, Female: 18.2%"),
          React.createElement('li', null, React.createElement('b', null, "Employment Categories:"), " Self-employed (52%), Casual (24%), Regular salaried (24%)"),
          React.createElement('li', null, React.createElement('b', null, "Formal vs Informal:"), " Formal (7% workers, with benefits) vs Informal (93% workers, vulnerable)"),
          React.createElement('li', null, React.createElement('b', null, "Informalisation:"), " Growing informal employment post-1991 reforms")
        ),
        React.createElement('ul', { className: 'space-y-2 text-sm' },
          React.createElement('li', null, React.createElement('b', null, "Unemployment:"), " Open (6.6%), Disguised (agriculture), Seasonal (farm sector)"),
          React.createElement('li', null, React.createElement('b', null, "Jobless Growth:"), " GDP grew 7% annually (1999-2011) but employment only 1.2%"),
          React.createElement('li', null, React.createElement('b', null, "Key Schemes:"), " MGNREGA (100 days), PMKVY (skill 10 crore), Mudra (micro-credit)"),
          React.createElement('li', null, React.createElement('b', null, "Sectoral Shift:"), " Agriculture (45%) declining, Services (31%) growing fastest")
        )
      )
    ),

    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg' },
      React.createElement('h5', { className: 'font-bold text-purple-800 mb-3' }, '🎯 Exam Strategy & Tips'),
      React.createElement('ul', { className: 'space-y-2 text-sm' },
        React.createElement('li', null, React.createElement('b', null, 'Case-based Questions:'), ' Focus on gig economy informalisation, contract labour exploitation, MGNREGA impact analysis'),
        React.createElement('li', null, React.createElement('b', null, 'Policy Analysis:'), ' Compare formal vs informal sector benefits, evaluate government employment schemes'),
        React.createElement('li', null, React.createElement('b', null, 'Current Affairs:'), ' Link with recent data from PLFS 2022, EPFO reforms, gig worker social security code'),
        React.createElement('li', null, React.createElement('b', null, 'Numerical Problems:'), ' Calculate worker-population ratio, compare unemployment rates across methods'),
        React.createElement('li', null, React.createElement('b', null, 'Answer Structure:'), ' Define concept → Explain with data → Discuss causes/impacts → Suggest solutions → Use diagrams for sector distribution')
      )
    )
  )
};
