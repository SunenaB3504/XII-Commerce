export const chapter7Content = {
  title: "Directing",
  concepts: {
    meaning: "Directing refers to the process of instructing, guiding, counselling, motivating and leading people in the organisation to achieve its objectives.",
    characteristics: [
      "Directing initiates action",
      "Directing takes place at every level of management",
      "Directing is a continuous process",
      "Directing flows from top to bottom"
    ],
    importance: [
      "Helps to initiate action",
      "Integrates employees' efforts",
      "Guides employees to fully realise their potential",
      "Facilitates introduction of needed changes",
      "Brings stability and balance in the organisation"
    ],
    elements: [
      {
        name: "Supervision",
        description: "The process of guiding the efforts of employees and other resources to accomplish the desired objectives. It means overseeing what is being done by subordinates."
      },
      {
        name: "Motivation",
        description: "The process of stimulating people to action to accomplish desired goals. It depends upon satisfying needs of people.",
        maslowsHierarchy: {
          title: "Maslow's Need Hierarchy Theory",
          needs: [
            "Basic Physiological Needs (e.g., food, shelter)",
            "Safety/Security Needs (e.g., job security, pension)",
            "Affiliation/Belonging Needs (e.g., friendship, acceptance)",
            "Esteem Needs (e.g., self-respect, recognition)",
            "Self Actualisation Needs (e.g., growth, achieving one's potential)"
          ],
          assumptions: ["People’s behaviour is based on their needs.", "Needs are in a hierarchical order.", "A satisfied need no longer motivates.", "A person moves to the next higher level only when the lower need is satisfied."]
        },
        incentives: {
          financial: ["Pay and allowances", "Productivity linked wage incentives", "Bonus", "Profit Sharing", "Co-partnership/Stock option"],
          nonFinancial: ["Status", "Organisational Climate", "Career Advancement Opportunity", "Job Enrichment", "Employee Recognition Programmes", "Job Security", "Employee Participation"]
        }
      },
      {
        name: "Leadership",
        description: "The process of influencing the behaviour of people by making them strive voluntarily towards achievement of organisational goals.",
        styles: [
          { name: "Autocratic or Authoritarian", description: "Leader gives orders and expects subordinates to obey. Communication is one-way." },
          { name: "Democratic or Participative", description: "Leader develops action plans and makes decisions in consultation with subordinates." },
          { name: "Laissez-faire or Free-rein", description: "Leader gives a high degree of independence to followers to formulate their own objectives and ways to achieve them." }
        ]
      },
      {
        name: "Communication",
        description: "The process of exchange of ideas, views, facts, feelings, etc., between or among people to create common understanding.",
        processElements: ["Sender", "Message", "Encoding", "Media", "Decoding", "Receiver", "Feedback", "Noise"],
        types: {
          formal: "Communication which flows through official channels designed in the organisation chart.",
          informal: "Communication that takes place without following the formal lines of communication, generally referred to as the 'grapevine'."
        },
        barriers: ["Semantic", "Psychological", "Organisational", "Personal"]
      }
    ]
  }
};
