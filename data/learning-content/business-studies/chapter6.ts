import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter6Module: LearningModule = {
  chapter: "6",
  title: "Staffing",
  overview: "Staffing is the crucial management function of finding the right person for the right job and ensuring they remain the right person. It involves the entire employment cycle, from manpower planning to recruitment, selection, training, and development. Think of it as building and maintaining a skilled and motivated team, which is the most valuable asset of any organization.",
  keyConcepts: [
    {
      title: "Importance and Process of Staffing",
      content: React.createElement('p', null, "Effective staffing ensures the continuous survival and growth of the enterprise by placing competent people in various jobs. The process is a logical sequence of steps to manage human resources effectively."),
      examFocus: true,
      mnemonic: "Staffing Process Mnemonic: 'Every Recruiter Selects People To Promote & Compensate' - Estimating Manpower, Recruitment, Selection, Placement & Orientation, Training & Development, Performance Appraisal, Promotion & Career Planning, Compensation."
    },
    {
      title: "Recruitment: Internal vs. External Sources",
      content: React.createElement('p', null, "Recruitment is the process of searching for prospective employees and stimulating them to apply for jobs. Sources can be broadly categorized into two types."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Internal Sources:'), " Filling vacancies from within the organization (e.g., transfers, promotions). It's cheaper and motivates existing employees, but limits the entry of fresh talent."),
        React.createElement('li', null, React.createElement('b', null, 'External Sources:'), " Searching for candidates from outside the organization (e.g., advertisements, campus recruitment, web publishing). It provides a wider choice and brings in new ideas, but can be costly and time-consuming.")
      )
    },
    {
      title: "Selection Process",
      content: React.createElement('p', null, "Selection is a negative process of eliminating unqualified candidates to identify the most suitable ones. It involves a series of hurdles or steps."),
      examFocus: true,
      example: React.createElement('p', null, "The key steps include Preliminary Screening, Selection Tests, Employment Interview, Reference Checks, Selection Decision, Medical Examination, Job Offer, and finally, the Contract of Employment.")
    },
    {
      title: "Training and Development",
      content: React.createElement('p', null, "This is a vital part of staffing aimed at enhancing the skills and potential of employees."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Training:'), " Job-oriented process to improve current skills. Methods include On-the-Job (e.g., apprenticeship, internship) and Off-the-Job (e.g., classroom lectures, vestibule training)."),
        React.createElement('li', null, React.createElement('b', null, 'Development:'), " Career-oriented process for the overall growth of an employee, preparing them for future challenges.")
      )
    }
  ],
  keywords: [
    { term: "Staffing", definition: "The management function of filling and keeping filled the positions in the organisation structure." },
    { term: "Recruitment", definition: "The process of searching for prospective employees and stimulating them to apply for jobs." },
    { term: "Selection", definition: "The process of identifying and choosing the best person out of a number of prospective candidates for a job." },
    { term: "Training", definition: "The act of increasing the knowledge and skills of an employee for doing a particular job." },
    { term: "Development", definition: "The growth of an individual in all respects; it is a broader, career-oriented concept." },
    { term: "Vestibule Training", definition: "An off-the-job training method where employees learn on equipment they will be using, but the training is conducted away from the actual work floor." }
  ],
  caseStudies: [
    {
      title: "Hiring for a Tech Startup",
      scenario: "‘Innovate AI’, a fast-growing tech startup, needed to hire 10 new software developers. They first advertised the positions on various job portals and their company website. They received over 500 applications. The HR manager first shortlisted 50 candidates based on their resumes (preliminary screening). These 50 candidates were then asked to take a coding test (selection test). The top 20 performers were called for a technical and HR interview. After checking the references of the final 12 candidates, the company made job offers to the best 10.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
          React.createElement('li', null, React.createElement('b', null, "External Recruitment:"), " The company used external sources (web publishing/advertisement) to attract a wide pool of applicants."),
          React.createElement('li', null, React.createElement('b', null, "Selection Process:"), " The case clearly demonstrates the filtering nature of the selection process. It follows the standard steps: Preliminary Screening (resumes), Selection Tests (coding test), Employment Interview, and Reference Checks, culminating in a Job Offer.")
        ),
        React.createElement('p', { className: 'mt-4' }, "This illustrates a systematic staffing approach. By using a multi-step selection process, 'Innovate AI' increases the probability of hiring candidates who are not only skilled but also a good fit for the company.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 6 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Staffing = Right Person for the Right Job."),
      React.createElement('li', null, React.createElement('b', null, "Recruitment is positive"), " (attracting candidates); ", React.createElement('b', null, "Selection is negative"), " (eliminating candidates)."),
      React.createElement('li', null, "Sources: ", React.createElement('b', null, 'Internal'), " (Transfers, Promotions) vs. ", React.createElement('b', null, 'External'), " (Ads, Campus)."),
      React.createElement('li', null, React.createElement('b', null, "Training is job-oriented"), " (for current job); ", React.createElement('b', null, "Development is career-oriented"), " (for future growth)."),
      React.createElement('li', null, "On-the-job training (learning while doing) vs. Off-the-job training (learning before doing).")
    )
  )
};
