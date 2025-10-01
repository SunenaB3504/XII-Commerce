import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter7Module: LearningModule = {
  chapter: "7",
  title: "Indian Economy on the Eve of Independence",
  overview: "This chapter provides a snapshot of the Indian economy in 1947. We explore the state of various sectors like agriculture, industry, and foreign trade under British colonial rule. The central theme is understanding the roots of underdevelopment and stagnation that the newly independent India inherited.",
  keyConcepts: [
    {
      title: "State of the Agricultural Sector",
      content: React.createElement('p', null, "The agricultural sector was the backbone of the economy but suffered from stagnation and low productivity. This was mainly due to the exploitative land settlement systems (like the Zamindari system), lack of irrigation, and forced commercialisation of agriculture to serve British industries."),
      examFocus: true,
    },
    {
      title: "State of the Industrial Sector",
      content: React.createElement('p', null, "India underwent a process of 'de-industrialisation'. Its world-famous handicraft industries declined due to competition from machine-made British goods. The growth of modern industry was slow, limited, and skewed towards consumer goods rather than capital goods industries, which are crucial for further industrialisation."),
      examFocus: true,
    },
    {
      title: "Foreign Trade",
      content: React.createElement('p', null, "India's foreign trade was completely dominated by Britain. India became an exporter of primary products (raw materials like cotton, jute) and an importer of finished goods from Britain. While India often had a large export surplus, this did not result in wealth for India but led to a 'drain of Indian wealth' to pay for British administrative and war expenses."),
      examFocus: true,
    },
    {
      title: "Demographic Condition",
      content: React.createElement('p', null, "The demographic profile was that of a stagnant and backward economy. Key indicators were poor: high birth and death rates, extremely high infant mortality rate, low life expectancy (around 32 years), and a very low literacy rate (below 16%)."),
    },
    {
      title: "Occupational Structure and Infrastructure",
      content: React.createElement('p', null, "The majority of the workforce (around 70-75%) remained dependent on agriculture, showing a lack of structural change. Infrastructure like railways, ports, and telegraphs were developed, but the primary motive was to serve colonial interests—facilitating the transport of raw materials and maintaining administrative and military control."),
    }
  ],
  keywords: [
    { term: "De-industrialisation", definition: "The decline of traditional handicraft industries without the emergence of a modern industrial base." },
    { term: "Zamindari System", definition: "A land revenue system where zamindars were recognized as owners of the land and were responsible for collecting rent from cultivators, often leading to their exploitation." },
    { term: "Commercialisation of Agriculture", definition: "The production of crops for sale in the market rather than for self-consumption. During British rule, this was often forced to supply raw materials to British industries." },
    { term: "Drain of Wealth", definition: "A process by which India's export surplus was used to make payments for expenses incurred by the British government, leading to a net outflow of wealth from India." },
    { term: "Occupational Structure", definition: "The distribution of the workforce among different sectors of the economy (primary, secondary, and tertiary)." }
  ],
  caseStudies: [
    {
      title: "The Railways: A Double-Edged Sword",
      scenario: "The British introduced the railways in India in 1850, a significant infrastructural development. The railways connected distant parts of the country, enabling people to travel long distances and breaking some social barriers. They also facilitated the movement of food grains to famine-affected areas. However, the primary purpose was to transport raw cotton from the interiors to the ports for export to Britain and to move British manufactured cloth from the ports to the interiors, thus harming local textile producers.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Infrastructure for Colonial Interests"),
        React.createElement('p', null, "This case shows that while infrastructural development did occur, its motive was not public welfare but the consolidation of colonial rule and economic exploitation. The railways fostered the commercialisation of agriculture that benefited British industry and adversely affected the self-sufficiency of village economies. The social benefits gained by the Indian people were largely incidental and were outweighed by the huge economic loss to the country.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 7 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Economy in 1947 was stagnant, backward, and agrarian."),
      React.createElement('li', null, React.createElement('b', null, "Agriculture:"), " Stagnant due to land settlement systems."),
      React.createElement('li', null, React.createElement('b', null, "Industry:"), " De-industrialisation of handicrafts, slow modern industrial growth."),
      React.createElement('li', null, React.createElement('b', null, "Foreign Trade:"), " Became an exporter of raw materials and importer of finished goods for Britain, leading to a 'drain of wealth'."),
      React.createElement('li', null, React.createElement('b', null, "Infrastructure"), " (like railways) was developed primarily to serve British interests.")
    )
  )
};
