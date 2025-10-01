import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter14Module: LearningModule = {
  chapter: "14",
  title: "Comparative Development Experiences of India and its Neighbours",
  overview: "This chapter provides a comparative analysis of the development strategies and outcomes of India and its two major neighbours, Pakistan and China. We'll look at how these three countries, which started their development paths at a similar time, have fared differently on various demographic, economic, and human development indicators, offering valuable lessons from their experiences.",
  keyConcepts: [
    {
      title: "Developmental Paths: A Snapshot",
      content: React.createElement('p', null, "All three nations started their development around the same time (India and Pakistan in 1947, China in 1949) and followed a planned, state-led, mixed-economy model until the 1980s. However, their political systems and specific strategies differed significantly."),
      examFocus: true,
    },
    {
      title: "China's Unique Path",
      content: React.createElement('p', null, "China's development was marked by radical state-led initiatives. The 'Great Leap Forward' (GLF) campaign aimed for massive industrialization, while the 'Commune System' collectivized agriculture. China introduced economic reforms much earlier than India, in 1978, which led to its rapid industrial growth."),
    },
    {
      title: "Comparative Indicators",
      content: React.createElement('p', null, "Comparing the three countries on various indicators reveals different stories."),
      examFocus: true,
      example: React.createElement('ul', { className: 'list-disc pl-5 mt-2 space-y-2' },
        React.createElement('li', null, React.createElement('b', null, 'Demographic:'), " China succeeded in lowering its population growth rate due to the one-child policy, but this also skewed the sex ratio. Pakistan has the highest population growth."),
        React.createElement('li', null, React.createElement('b', null, 'GDP and Sectoral Growth:'), " China's GDP growth has been consistently the highest, driven by its manufacturing sector. India's growth has been moderate, largely driven by the service sector. Pakistan's growth has been inconsistent."),
        React.createElement('li', null, React.createElement('b', null, 'Human Development Index (HDI):'), " China is significantly ahead of both India and Pakistan in most human development indicators like life expectancy, infant mortality, and literacy.")
      )
    },
    {
      title: "Appraisal of Strategies",
      content: React.createElement('p', null, "China's success is attributed to its early and phased reforms, and prior investment in health and education. India and Pakistan's development has been hampered by political instability (in Pakistan's case) and slower reforms. A key difference in structural transformation is that India and Pakistan shifted directly from agriculture to the service sector, while China followed the traditional path via a strong manufacturing sector."),
      examFocus: true,
    }
  ],
  keywords: [
    { term: "Great Leap Forward (GLF)", definition: "An economic and social campaign by the Communist Party of China from 1958 to 1962, which aimed to rapidly transform the country into a socialist society through rapid industrialization and collectivization." },
    { term: "Commune System", definition: "A system in rural China under which people collectively cultivated lands." },
    { term: "One-Child Norm", definition: "A population planning policy of China implemented between 1980 and 2015 to control the country's population growth." },
    { term: "Human Development Index (HDI)", definition: "A composite statistic of life expectancy, education, and per capita income indicators, used to rank countries into four tiers of human development." }
  ],
  caseStudies: [
    {
      title: "The Manufacturing vs. Service Sector Debate",
      scenario: "Economists observe that in the last few decades, China has become the 'factory of the world', with its manufacturing sector contributing a massive share to its GDP and employment. In contrast, India has seen a boom in its service sector (IT, finance, etc.), which contributes over 50% to its GDP, while its manufacturing sector's growth has been relatively slow. This is often described as India 'leapfrogging' the manufacturing stage of development.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold' }, "Concept Involved: Comparative Sectoral Development"),
        React.createElement('p', null, "This comparison highlights a fundamental difference in the development paths of India and China. China followed a classic path where the workforce moved from agriculture to industry, creating mass employment. India's shift has been largely from agriculture to services. While the service sector provides high-value jobs, it has not been able to absorb the vast unskilled and semi-skilled labor force from agriculture in the way a robust manufacturing sector could have. This is a key reason behind India's persistent employment challenges compared to China.")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 14 at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "India, Pakistan, and China started their development around the same time but followed different strategies."),
      React.createElement('li', null, "China's radical policies like ", React.createElement('b', null, "GLF"), " and early reforms (1978) propelled its growth."),
      React.createElement('li', null, "On most indicators (GDP, HDI), China is ahead, followed by India, and then Pakistan."),
      React.createElement('li', null, "China's growth is led by ", React.createElement('b', null, "manufacturing"), "; India's growth is led by ", React.createElement('b', null, "services"), "."),
      React.createElement('li', null, "India and Pakistan were compelled to introduce reforms due to economic crises, while China did so on its own initiative.")
    )
  )
};
