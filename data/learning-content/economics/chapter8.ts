import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter8Module: LearningModule = {
  chapter: "8",
  title: "Indian Economy (1950-1990)",
  overview: "This chapter covers the first four decades of India's economic development after independence. We'll explore the path of planned development through Five-Year Plans, the adoption of a mixed economy model, and the key policies implemented in agriculture and industry. This period laid the foundation for India's economic structure, with a strong emphasis on self-reliance and a dominant public sector.",
  keyConcepts: [
    {
      title: "The Goals of Five-Year Plans",
      content: React.createElement('p', null, "The central objective of planning was to raise living standards. This was pursued through four main goals, though their emphasis varied across different plans."),
      examFocus: true,
      mnemonic: "Remember 'GEMS': Growth, Equity, Modernisation, Self-reliance."
    },
    {
      title: "Agriculture: Land Reforms and Green Revolution",
      content: React.createElement('p', null, "To address the stagnation in agriculture, two major policy initiatives were undertaken."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Land Reforms:'), " Aimed to bring equity. This included the abolition of intermediaries (zamindars) and implementing land ceilings (fixing the maximum size of land an individual could own)."),
        React.createElement('li', null, React.createElement('b', null, 'Green Revolution:'), " Refers to the large increase in production of food grains resulting from the use of High Yielding Variety (HYV) seeds, fertilizers, and irrigation. It made India self-sufficient in food grains.")
      )
    },
    {
      title: "Industry and Trade Policy",
      content: React.createElement('p', null, "India focused on building a strong industrial base with a leading role for the public sector. Trade policy was designed to protect domestic industries."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Industrial Policy Resolution 1956 (IPR 1956):'), " This resolution formed the basis of the Second Five-Year Plan. It classified industries into three categories, giving the public sector a strategic role."),
        React.createElement('li', null, React.createElement('b', null, 'Small-Scale Industry (SSI):'), " Promoted for rural development and employment generation, and protected from large firms through reservation of products."),
        React.createElement('li', null, React.createElement('b', null, 'Trade Policy - Import Substitution:'), " An inward-looking strategy that aimed at replacing or substituting imports with domestic production. This was achieved through high tariffs and quotas on imports.")
      )
    }
  ],
  keywords: [
    { term: "Mixed Economy", definition: "An economic system with a strong public sector but also with private property and democracy." },
    { term: "Five-Year Plans", definition: "A formal plan of development where goals are set to be achieved over a period of five years." },
    { term: "Green Revolution", definition: "The significant increase in agricultural production, especially wheat and rice, resulting from the introduction of High Yielding Variety (HYV) seeds." },
    { term: "Land Ceiling", definition: "A policy to fix the maximum size of land which could be owned by an individual or family." },
    { term: "Import Substitution", definition: "A trade policy that aims to replace foreign imports with domestic production." },
    { term: "Permit License Raj", definition: "Refers to the system of extensive licensing and regulations that were required to set up and run businesses in India between 1947 and 1990." }
  ],
  caseStudies: [
    {
      title: "The Double-Edged Sword of Import Substitution",
      scenario: "During the 1950-1990 period, to build its own automobile industry, India heavily restricted the import of foreign cars. This protection allowed domestic companies like Hindustan Motors (Ambassador) and Premier Automobiles (Fiat) to grow without facing competition. As a result, an indigenous car industry developed. However, for decades, Indian consumers had very limited choice and had to buy cars that were often considered outdated and of poor quality by global standards.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Effects of Import Substitution Policy"),
        React.createElement('p', null, "This case shows both the successes and failures of the import substitution strategy. The policy was successful in creating a domestic industrial base and fostering self-reliance. However, the lack of foreign competition also led to inefficiency and a lack of innovation among domestic producers, ultimately offering poor value to consumers. It highlights the critical debate on 'protection vs. competition' that led to the 1991 reforms.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 8 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "India adopted a ", React.createElement('b', null, "Mixed Economy"), " with ", React.createElement('b', null, "Five-Year Plans"), "."),
      React.createElement('li', null, "Planning Goals (GEMS): ", React.createElement('b', null, "G"), "rowth, ", React.createElement('b', null, "E"), "quity, ", React.createElement('b', null, "M"), "odernisation, ", React.createElement('b', null, "S"), "elf-reliance."),
      React.createElement('li', null, React.createElement('b', null, "Agriculture:"), " Land Reforms and Green Revolution made India self-sufficient in food."),
      React.createElement('li', null, React.createElement('b', null, "Industry:"), " IPR 1956 gave a dominant role to the public sector."),
      React.createElement('li', null, React.createElement('b', null, "Trade:"), " Followed an inward-looking 'Import Substitution' policy using tariffs and quotas.")
    )
  )
};
