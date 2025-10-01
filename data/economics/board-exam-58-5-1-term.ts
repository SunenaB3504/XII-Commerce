import { QuestionPaper } from '../../types';
import React from 'react';

export const economicsBoardExam58_5_1_term: QuestionPaper = {
  name: 'CBSE Board Exam (58/5/1 - Term)',
  questions: [
    {
      id: '1',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(a) Distinguish between Factor Income and Transfer Income."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("table", { className: "w-full text-left border-collapse" },
          React.createElement("thead", null, React.createElement("tr", null,
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "Basis"),
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "Factor Income"),
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "Transfer Income")
          )),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "Meaning")),
              React.createElement("td", { className: "border p-2" }, "Income received for rendering factor services (land, labor, capital, enterprise)."),
              React.createElement("td", { className: "border p-2" }, "Income received without rendering any productive service in return.")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "Nature")),
              React.createElement("td", { className: "border p-2" }, "It is an earned income."),
              React.createElement("td", { className: "border p-2" }, "It is an unearned income.")
            ),
             React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "In National Income")),
              React.createElement("td", { className: "border p-2" }, "Included in the estimation of National Income."),
              React.createElement("td", { className: "border p-2" }, "Not included in the estimation of National Income.")
            )
          )
        )
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "The key difference is that factor income is a 'bilateral' payment (money for services), while transfer income is a 'unilateral' payment (one-way, like a gift or scholarship).")
      )
    },
    {
      id: '1 (OR)',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(b) Distinguish between Domestic Income and National Income."),
      solution: React.createElement(React.Fragment, null,
         React.createElement("table", { className: "w-full text-left border-collapse" },
          React.createElement("thead", null, React.createElement("tr", null,
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "Basis"),
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "Domestic Income (NDPfc)"),
            React.createElement("th", { className: "border p-2 bg-gray-100" }, "National Income (NNPfc)")
          )),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "Territory")),
              React.createElement("td", { className: "border p-2" }, "Sum of factor incomes generated within the domestic territory of a country."),
              React.createElement("td", { className: "border p-2" }, "Sum of factor incomes earned by normal residents of a country, both within and outside the country.")
            ),
            React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "Scope")),
              React.createElement("td", { className: "border p-2" }, "It is a territorial concept."),
              React.createElement("td", { className: "border p-2" }, "It is a national concept.")
            ),
             React.createElement("tr", null,
              React.createElement("td", { className: "border p-2" }, React.createElement("b", null, "Formula")),
              React.createElement("td", { className: "border p-2" }, "NDPfc = Domestic Product"),
              React.createElement("td", { className: "border p-2" }, "NNPfc = Domestic Income + Net Factor Income from Abroad (NFIA).")
            )
          )
        )
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "Domestic income is about 'where' the income is generated (within India's borders), while national income is about 'who' generated the income (by residents of India, wherever they are).")
      )
    },
    {
      id: '2',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(a) \"In an economy, the autonomous consumption is ₹ 100 and Marginal Propensity to Consume (MPC) is 0.6. If the equilibrium level of Income is 2,000, then the autonomous investment is ₹ 300.\" Justify the statement with valid calculation."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "The statement is incorrect."),
        React.createElement("p", {className:"mt-2 font-bold"}, "Justification:"),
        React.createElement("p", null, "At equilibrium, Y = C + I."),
        React.createElement("p", null, "We know C = C̄ + bY, where C̄ is autonomous consumption and b is MPC."),
        React.createElement("p", null, "So, Y = C̄ + bY + I."),
        React.createElement("p", null, "2,000 = 100 + (0.6 * 2,000) + I"),
        React.createElement("p", null, "2,000 = 100 + 1,200 + I"),
        React.createElement("p", null, "2,000 = 1,300 + I"),
        React.createElement("p", null, "I = 2,000 - 1,300 = ₹700."),
        React.createElement("p", null, "Thus, the autonomous investment should be ₹700, not ₹300.")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "This problem requires plugging the given values into the equilibrium equation (Y = C + I) to solve for the unknown variable (Investment). The calculation shows that for the economy to be in equilibrium at an income of ₹2,000, the investment must be ₹700.")
      )
    },
    {
      id: '2 (OR)',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(b) An Economy is in equilibrium, calculate the Marginal Propensity to Save (MPS) from the following : (i) National Income (Y) = ₹ 4,400 (ii) Autonomous Consumption (C̄) = ₹ 1,000 (iii) Investment Expenditure (I) = ₹ 70"),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "At equilibrium, Savings (S) = Investment (I)."),
        React.createElement("p", null, "The saving function is S = -C̄ + (1-b)Y, where (1-b) is MPS."),
        React.createElement("p", null, "So, I = -C̄ + MPS * Y."),
        React.createElement("p", null, "70 = -1,000 + MPS * 4,400"),
        React.createElement("p", null, "1,070 = MPS * 4,400"),
        React.createElement("p", null, "MPS = 1,070 / 4,400 = 0.243 (approx.)")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "The equilibrium condition can be stated in two ways: Y = C + I or S = I. Using the S = I approach is more direct here. We construct the saving function using the given autonomous consumption and national income, set it equal to the given investment, and solve for MPS.")
      )
    },
    {
      id: '3',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "'Consumption function curve of an involuntary unemployed workers start from some positive level on Y-axis even at zero level of Income.' Justify the given statement."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "The statement is correct."),
        React.createElement("p", {className:"mt-2"}, "Even at a zero level of income, a person needs to consume a minimum amount for survival. This is known as autonomous consumption. An involuntarily unemployed worker, having no income, will finance this consumption by using past savings or by borrowing. Therefore, the consumption curve does not start from the origin (0,0) but from a positive intercept on the Y-axis, which represents this autonomous consumption.")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "This question tests the understanding of the concept of autonomous consumption. It's the level of consumption that is independent of income, representing the bare minimum needed for survival. Since this consumption exists even at zero income, the consumption curve starts above the origin.")
      )
    },
    {
      id: '4',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "'Health is a yardstick of human well-being.' Justify the given statement with valid explanation."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "The statement is justified."),
        React.createElement("p", {className:"mt-2"}, "Health is a crucial indicator of human well-being as it directly impacts a person's quality of life. A healthy person can work productively, participate fully in society, and enjoy life without the suffering caused by illness. Poor health, on the other hand, reduces work capacity, increases financial burden due to medical expenses, and diminishes overall happiness. Therefore, indicators like life expectancy and mortality rates are key measures of a nation's development and the well-being of its people.")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "This question connects to the concept of Human Development. It goes beyond purely economic measures like GDP to include social indicators. Health is a fundamental component of human development because a long and healthy life is a primary goal of human existence.")
      )
    },
    {
      id: '5',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(a) Compare and analyse the sector-wise trends in employment, based on following information :"),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", {className:"font-bold"}, "Analysis of Trends:"),
        React.createElement("ul", {className:"list-disc pl-5 mt-2 space-y-2"},
            React.createElement("li", null, React.createElement("b", null, "Primary Sector:"), " The share of employment in the primary sector has significantly decreased from 60.4% in 1999-2000 to 48.9% in 2011-12. This indicates a structural shift in the economy, with a lower dependence on agriculture for employment."),
            React.createElement("li", null, React.createElement("b", null, "Secondary and Tertiary Sectors:"), " Both sectors have shown an increase in their share of employment. The secondary sector's share rose from 15.8% to 24.3%, and the tertiary (service) sector's share rose from 23.8% to 26.8%. This shows that the workforce is moving from agriculture to industry and services, which is a typical sign of economic development.")
        )
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "The data shows a classic structural transformation where the importance of the primary sector as an employer declines, while that of the secondary and tertiary sectors increases. This shift is a key indicator of economic development and diversification.")
      )
    },
    {
      id: '5 (OR)',
      marks: 2,
      question: React.createElement("p", { className: "font-semibold" }, "(b) Ram is an owner of a salon. He is temporarily absent from work due to injury. Can he be considered as worker ? Explain."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "Yes, Ram can be considered a worker."),
        React.createElement("p", {className:"mt-2"}, "A worker is defined as any person engaged in an economic activity that contributes to the Gross National Product. This includes self-employed individuals like Ram. The definition also specifies that even if a person is temporarily absent from work due to illness, injury, or other reasons, they are still considered a worker. Since Ram's absence is temporary and he is the owner of the salon (a productive enterprise), he remains a part of the workforce.")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "This question tests the formal definition of a 'worker'. The key points are that it includes self-employed individuals and allows for temporary absence. Ram fits both these criteria.")
      )
    },
     {
      id: '6',
      marks: 3,
      question: React.createElement("p", { className: "font-semibold" }, "(a) Giving valid reasons, explain how the following would be treated while estimating domestic income ? (i) Payment made by a Japanese tourist for goods purchased in India. (ii) Broker's commission on the sale of second hand goods."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("ul", { className: "list-disc pl-5 mt-2 space-y-2" },
          React.createElement("li", null, React.createElement("b", null, "(i) Payment by Japanese tourist:"), " This will be included in the estimation of domestic income. Reason: The goods are produced within the domestic territory of India, and this represents expenditure on those goods. It is considered as 'exports' of goods from India."),
          React.createElement("li", null, React.createElement("b", null, "(ii) Broker's commission:"), " This will be included in the estimation of domestic income. Reason: The broker has provided a productive service (facilitating the sale) during the current year, and the commission is the payment for that service. (Note: The value of the second-hand good itself is not included as it was already counted in the year of its production).")
        )
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "Domestic income measures the value of all goods and services produced within a country's borders. The tourist's purchase is an export, produced in India. The broker's commission is payment for a service rendered in India in the current year.")
      )
    },
    {
      id: '6 (OR)',
      marks: 3,
      question: React.createElement("p", { className: "font-semibold" }, "(b) \"Gross Domestic Product (GDP) as an indicator of welfare loses its significance if the distribution of income turns unequal.\" Justify the given statement with valid reason."),
      solution: React.createElement(React.Fragment, null,
        React.createElement("p", null, "The statement is justified."),
        React.createElement("p", {className:"mt-2"}, "GDP is the total value of goods and services produced, but it does not reflect how this income is distributed among the population. If the rise in GDP is concentrated in the hands of a few rich individuals, while the majority of the population remains poor or becomes poorer, then the overall welfare of the society may not increase, and could even decrease. A higher GDP with high inequality means that the benefits of economic growth are not reaching everyone. Therefore, for GDP to be a true indicator of welfare, its distribution must also be equitable.")
      ),
      explanation: React.createElement(React.Fragment, null,
        React.createElement("p", { className: "mt-2" }, "This question addresses one of the key limitations of GDP as a measure of welfare. While a rising GDP indicates a growing economic pie, it says nothing about how the slices are shared. High inequality can lead to social unrest and undermine the overall well-being of a nation, even if its GDP is high.")
      )
    }
  ]
};