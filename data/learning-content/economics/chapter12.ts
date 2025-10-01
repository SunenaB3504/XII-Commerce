import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter12Module: LearningModule = {
  chapter: "12",
  title: "Employment: Growth, Informalisation and Other Issues",
  overview: "This chapter provides a detailed look at the employment scenario in India. We will define key terms like 'worker' and 'workforce', analyze the participation of people in employment across different sectors and regions, and discuss critical issues such as the informalisation of the workforce and the phenomenon of 'jobless growth'.",
  keyConcepts: [
    {
      title: "Worker and Worker-Population Ratio",
      content: React.createElement('p', null, "A worker is an individual engaged in any economic activity. The Worker-Population Ratio is the percentage of the total population that is actively working. This ratio helps in understanding the employment situation in the country."),
    },
    {
      title: "Types of Workers",
      content: React.createElement('p', null, "Workers can be broadly classified into three categories based on their employment status."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Self-Employed:'), ' Those who own and operate an enterprise to earn their livelihood (e.g., a shop owner, a farmer). This is the largest category in India.'),
        React.createElement('li', null, React.createElement('b', null, 'Regular Salaried Employees:'), ' Workers engaged by someone and paid wages on a regular basis (e.g., a school teacher, a factory worker).'),
        React.createElement('li', null, React.createElement('b', null, 'Casual Wage Labourers:'), " Workers casually engaged in others' farms or firms and, in return, get a remuneration for the work done. They are the most vulnerable group.")
      )
    },
    {
      title: "Formal vs. Informal Sector (Organised vs. Unorganised)",
      content: React.createElement('p', null, "The workforce is also divided into formal and informal sectors. The formal sector includes all public sector establishments and private establishments with 10 or more hired workers. All other enterprises and workers form the informal sector. A vast majority of India's workforce is in the informal sector, which lacks job security, social benefits, and legal protection."),
      examFocus: true,
    },
    {
      title: "Unemployment",
      content: React.createElement('p', null, "Unemployment is a situation where a person is able and willing to work at the prevailing wage rate but does not get work. Key types in India include:"),
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Disguised Unemployment:'), ' A situation where more people are employed than are actually needed. It is common in agriculture.'),
        React.createElement('li', null, React.createElement('b', null, 'Seasonal Unemployment:'), ' Unemployment that occurs during certain seasons of the year, also common in agriculture.')
      )
    },
    {
      title: "Jobless Growth",
      content: React.createElement('p', null, "This is a situation where the economy grows (GDP increases) but without a proportionate increase in employment opportunities. This has been a significant concern in India's development story."),
    }
  ],
  keywords: [
    { term: "Worker-Population Ratio", definition: "The percentage of the population that is employed." },
    { term: "Formal Sector", definition: "Also known as the organised sector, it includes government establishments and private establishments with 10 or more employees, offering social security benefits." },
    { term: "Informal Sector", definition: "Also known as the unorganised sector, it comprises all other enterprises and workers not in the formal sector, typically without job security or social benefits." },
    { term: "Informalisation", definition: "The process of a growing proportion of the workforce being employed in the informal sector." },
    { term: "Jobless Growth", definition: "A situation where an economy experiences GDP growth without a corresponding increase in employment." },
    { term: "Disguised Unemployment", definition: "A type of unemployment where marginal productivity of a worker is zero." }
  ],
  caseStudies: [
    {
      title: "The Shift to the Gig Economy",
      scenario: "In recent years, many young people in urban India have started working as delivery partners for food aggregators or as drivers for ride-hailing apps. They have flexibility in their working hours and can earn a decent income. However, they are not considered employees of the company. They do not get benefits like provident fund, health insurance, or paid leave. Their income can also be highly variable.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Informalisation of the Workforce"),
        React.createElement('p', null, "This case highlights the modern form of informalisation. While these jobs provide employment, they fall within the informal sector. The workers lack the job security and social safety nets that are characteristic of formal sector employment. This reflects a broader trend in the economy where new types of jobs are being created, but many of them are informal in nature, posing new challenges for policymakers.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 12 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Majority of Indian workers are ", React.createElement('b', null, "Self-Employed"), "."),
      React.createElement('li', null, "Workforce is divided into ", React.createElement('b', null, "Formal (Organised)"), " and ", React.createElement('b', null, "Informal (Unorganised)"), " sectors. Over 90% of the workforce is in the informal sector."),
      React.createElement('li', null, React.createElement('b', null, "Informalisation:"), " The trend of moving from formal to informal employment."),
      React.createElement('li', null, React.createElement('b', null, "Jobless Growth:"), " GDP grows, but employment doesn't grow as fast."),
      React.createElement('li', null, "Key types of unemployment in India are ", React.createElement('b', null, "Disguised"), " and ", React.createElement('b', null, "Seasonal"), ", especially in agriculture.")
    )
  )
};
