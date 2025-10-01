import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter13Module: LearningModule = {
  chapter: "13",
  title: "Environment and Sustainable Development",
  overview: "This chapter addresses the critical link between economic development and the environment. We'll examine the functions of the environment, the challenges posed by environmental degradation and resource depletion in India, and explore the concept of Sustainable Development as a path to achieve economic growth without compromising the environmental quality for future generations.",
  keyConcepts: [
    {
      title: "Functions of the Environment",
      content: React.createElement('p', null, "The environment performs four crucial functions:"),
      example: React.createElement('ol', { className: 'list-decimal pl-5 mt-2' },
        React.createElement('li', null, "It supplies resources (renewable and non-renewable)."),
        React.createElement('li', null, "It assimilates waste."),
        React.createElement('li', null, "It sustains life by providing genetic and biodiversity."),
        React.createElement('li', null, "It provides aesthetic services.")
      ),
      examFocus: true
    },
    {
      title: "Environmental Crisis",
      content: React.createElement('p', null, "An environmental crisis occurs when resource extraction is faster than regeneration, or when waste generation exceeds the 'absorptive capacity' of the environment. This leads to problems like pollution and resource depletion."),
    },
    {
      title: "State of India's Environment",
      content: React.createElement('p', null, "India faces a dual threat: poverty-induced environmental degradation (e.g., deforestation for fuelwood) and pollution from affluence and rapid industrialization (e.g., air and water pollution). Key issues include land degradation, biodiversity loss, and waste management."),
    },
    {
      title: "Sustainable Development",
      content: React.createElement('p', null, "Defined by the Brundtland Commission as: 'Development that meets the needs of the present generation without compromising the ability of the future generation to meet their own needs.' It emphasizes inter-generational equity."),
      examFocus: true,
    },
    {
      title: "Strategies for Sustainable Development",
      content: React.createElement('p', null, "To achieve sustainability, various strategies can be adopted."),
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, "Use of non-conventional sources of energy (solar, wind)."),
        React.createElement('li', null, "LPG and Gobar Gas in rural areas."),
        React.createElement('li', null, "CNG in urban areas."),
        React.createElement('li', null, "Organic Farming and Biopest Control."),
        React.createElement('li', null, "Mini-hydel plants.")
      )
    }
  ],
  keywords: [
    { term: "Environment", definition: "The total planetary inheritance and the totality of all resources. It includes all biotic and abiotic factors." },
    { term: "Carrying Capacity", definition: "The ability of the environment to support life and regenerate resources." },
    { term: "Absorptive Capacity", definition: "The ability of the environment to absorb degradation and waste." },
    { term: "Sustainable Development", definition: "A process of development that meets the needs of the present without compromising the ability of future generations to meet their own needs." },
    { term: "Global Warming", definition: "A gradual increase in the average temperature of the Earth's lower atmosphere." },
    { term: "Ozone Depletion", definition: "The reduction in the amount of ozone in the stratosphere, caused by chemicals like CFCs." }
  ],
  caseStudies: [
    {
      title: "The CNG Revolution in Delhi",
      scenario: "In the late 1990s, Delhi was one of the most polluted cities in the world, largely due to vehicular emissions. Following a Supreme Court directive, the entire public transport fleet (buses, autos) was mandated to switch from diesel/petrol to Compressed Natural Gas (CNG).",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Strategy for Sustainable Development"),
        React.createElement('p', null, "This is a prominent example of a successful strategy for sustainable development. By shifting to a cleaner fuel (CNG), the city was able to significantly reduce air pollution and improve the quality of life for its citizens without halting economic activity. It demonstrates how policy intervention and technological solutions can be used to mitigate the negative environmental impacts of development.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 13 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Environment provides resources, absorbs waste, and sustains life."),
      React.createElement('li', null, "Crisis occurs when use exceeds ", React.createElement('b', null, "carrying capacity"), " and ", React.createElement('b', null, "absorptive capacity"), "."),
      React.createElement('li', null, React.createElement('b', null, "Sustainable Development:"), " Meet present needs without harming future generations."),
      React.createElement('li', null, "Key global issues: ", React.createElement('b', null, "Global Warming"), " and ", React.createElement('b', null, "Ozone Depletion"), "."),
      React.createElement('li', null, "Strategies for sustainability include using clean energy (Solar, Wind, CNG) and organic farming.")
    )
  )
};
