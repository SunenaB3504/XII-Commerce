import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter10Module: LearningModule = {
  chapter: "10",
  title: "Financial Markets",
  overview: "Master financial markets fundamentals essential for CBSE Board Exams 2026. This chapter covers money market, capital market, stock exchange, and investment options - frequently tested topics worth 12-15 marks. Learn with exam-focused explanations, market analysis, and practical investment case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Meaning and Types of Financial Markets",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Financial markets are marketplaces where buying and selling of financial assets like shares, bonds, debentures, currencies, etc. takes place. They facilitate transfer of resources from savers to investors."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Classification of Financial Markets:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-blue-500' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "On the Basis of Maturity Period:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "Money Market:"), " Short-term securities (up to 1 year)"),
                React.createElement('li', null, React.createElement('b', null, "Capital Market:"), " Long-term securities (more than 1 year)")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-green-500' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "On the Basis of Nature of Claim:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "Primary Market:"), " New securities issued for the first time"),
                React.createElement('li', null, React.createElement('b', null, "Secondary Market:"), " Trading of existing securities")
              )
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Financial markets act as a bridge between savers and investors, ensuring efficient capital allocation!"
        )
      ),
      examFocus: true,
      mnemonic: "Money market short-term, Capital market long-term - Primary new, Secondary old!"
    },
    {
      title: "Money Market and Its Instruments",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Money market deals with short-term financial assets that are highly liquid and have maturity period of up to one year. It provides liquidity and helps in managing short-term surpluses and deficits."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Functions of Money Market:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Provide Short-term Funds:"), " Meeting working capital requirements"),
            React.createElement('li', null, React.createElement('b', null, "Provide Liquidity:"), " Converting short-term assets into cash"),
            React.createElement('li', null, React.createElement('b', null, "Help in Investment:"), " Safe parking of surplus funds"),
            React.createElement('li', null, React.createElement('b', null, "Facilitate Trade:"), " Financing domestic and international trade"),
            React.createElement('li', null, React.createElement('b', null, "Help Central Bank:"), " Implementing monetary policy")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Money Market Instruments:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Treasury Bills (T-Bills)"),
              React.createElement('p', { className: 'text-sm' }, "Short-term debt instruments issued by RBI on behalf of Government. Maturity: 91 days, 182 days, 364 days.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Commercial Paper (CP)"),
              React.createElement('p', { className: 'text-sm' }, "Unsecured promissory notes issued by corporates with high credit rating. Maturity: 15 days to 1 year.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Certificate of Deposit (CD)"),
              React.createElement('p', { className: 'text-sm' }, "Negotiable money market instrument issued by banks. Maturity: 91 days to 1 year.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Call Money"),
              React.createElement('p', { className: 'text-sm' }, "Money borrowed/lent for 1 day. Used by banks to meet CRR/SLR requirements.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Notice Money"),
              React.createElement('p', { className: 'text-sm' }, "Money lent for 2-14 days with prior notice.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-1' }, "Term Money"),
              React.createElement('p', { className: 'text-sm' }, "Money lent for 15 days to 1 year.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Money market instruments are highly liquid but offer lower returns compared to capital market instruments!"
        )
      ),
      examFocus: true,
      mnemonic: "T-Bills, CP, CD, Call money, Notice, Term - TCCP CNT!"
    },
    {
      title: "Capital Market and Its Segments",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Capital market deals with long-term securities that have maturity period of more than one year. It consists of primary and secondary markets and provides long-term funds for industrial development."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Segments of Capital Market:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-blue-500' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "Primary Market (New Issues Market):"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Issue of new securities"),
                React.createElement('li', null, "Direct sale to investors"),
                React.createElement('li', null, "Through intermediaries"),
                React.createElement('li', null, "No trading of existing securities")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-green-500' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "Secondary Market (Stock Exchange):"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Trading of existing securities"),
                React.createElement('li', null, "Provides liquidity"),
                React.createElement('li', null, "Price discovery mechanism"),
                React.createElement('li', null, "Continuous market")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Methods of Floatation in Primary Market:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Public Issue through Prospectus"),
              React.createElement('p', { className: 'text-sm' }, "Direct invitation to public through detailed prospectus. Most transparent method.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Offer for Sale"),
              React.createElement('p', { className: 'text-sm' }, "Existing shareholders offer shares to public through intermediaries.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Private Placement"),
              React.createElement('p', { className: 'text-sm' }, "Direct sale to institutional investors without public offer.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Rights Issue"),
              React.createElement('p', { className: 'text-sm' }, "Offer to existing shareholders in proportion to their holdings.")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Bonus Issue"),
              React.createElement('p', { className: 'text-sm' }, "Free shares distributed to existing shareholders from accumulated reserves.")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Primary market creates new capital, secondary market provides liquidity to existing investments!"
        )
      ),
      examFocus: true,
      mnemonic: "Public, Offer, Private, Rights, Bonus - POP RB!"
    },
    {
      title: "Stock Exchange - Meaning and Functions",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Stock exchange is an organized marketplace where securities are bought and sold. It provides a platform for trading of existing securities and performs various functions for economic development."
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Functions of Stock Exchange:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Providing Liquidity:"), " Easy buying/selling of securities"),
            React.createElement('li', null, React.createElement('b', null, "Price Discovery:"), " Fair price determination through demand/supply"),
            React.createElement('li', null, React.createElement('b', null, "Safety of Transactions:"), " Regulated trading with settlement guarantee"),
            React.createElement('li', null, React.createElement('b', null, "Spreading Equity Culture:"), " Encouraging investment in corporate securities"),
            React.createElement('li', null, React.createElement('b', null, "Capital Formation:"), " Mobilizing savings for productive investment"),
            React.createElement('li', null, React.createElement('b', null, "Barometer of Economy:"), " Reflecting economic health through indices"),
            React.createElement('li', null, React.createElement('b', null, "Better Allocation of Resources:"), " Funds directed to efficient companies"),
            React.createElement('li', null, React.createElement('b', null, "Facilitating Corporate Growth:"), " Raising capital for expansion/diversification")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Types of Stock Exchanges:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "National Stock Exchange (NSE):"), " Largest stock exchange in India, located in Mumbai"),
            React.createElement('li', null, React.createElement('b', null, "Bombay Stock Exchange (BSE):"), " Oldest stock exchange in Asia, Sensex index"),
            React.createElement('li', null, React.createElement('b', null, "Regional Stock Exchanges:"), " Ahmedabad, Delhi, Hyderabad, etc."),
            React.createElement('li', null, React.createElement('b', null, "Commodity Exchanges:"), " MCX, NCDEX for commodity trading"),
            React.createElement('li', null, React.createElement('b', null, "Depository Exchanges:"), " NSDL, CDSL for dematerialized securities")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Stock exchanges are regulated by SEBI and provide a transparent and efficient platform for securities trading!"
        )
      ),
      examFocus: true,
      mnemonic: "Liquidity, Price, Safety, Equity, Capital, Barometer, Allocation, Growth - LPS E C B A G!"
    },
    {
      title: "Securities and Exchange Board of India (SEBI)",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "SEBI is the regulatory body for securities market in India. Established in 1988 and given statutory powers in 1992, it protects investors and promotes development of securities market."
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🎯 Objectives of SEBI:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Protecting Investors:"), " Safeguarding interests of investors"),
            React.createElement('li', null, React.createElement('b', null, "Promoting Market Development:"), " Facilitating growth of securities market"),
            React.createElement('li', null, React.createElement('b', null, "Regulating Market Intermediaries:"), " Controlling brokers, underwriters, etc."),
            React.createElement('li', null, React.createElement('b', null, "Preventing Malpractices:"), " Prohibiting insider trading, price rigging")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Functions of SEBI:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "Regulatory Functions:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Registration of intermediaries"),
                React.createElement('li', null, "Regulation of stock exchanges"),
                React.createElement('li', null, "Approval of prospectuses"),
                React.createElement('li', null, "Surveillance of markets")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "Development Functions:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Training of intermediaries"),
                React.createElement('li', null, "Promotion of fair practices"),
                React.createElement('li', null, "Investor education"),
                React.createElement('li', null, "Introduction of new products")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-500' },
          React.createElement('p', { className: 'font-bold mb-2' }, "📝 Exam Tip:"),
          React.createElement('p', { className: 'text-sm' }, "SEBI acts as a watchdog of Indian securities market, ensuring fair and transparent trading!")
        )
      ),
      examFocus: true,
      mnemonic: "Protect, Promote, Regulate, Prevent - PPRP!"
    },
    {
      title: "Depository System and Dematerialization",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Depository system provides electronic holding of securities in dematerialized form. It eliminates risks associated with physical certificates and enables faster, cheaper, and efficient settlement."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Depository Participants:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "National Securities Depository Ltd (NSDL):"), " First depository in India, promoted by IDBI and UTI"),
            React.createElement('li', null, React.createElement('b', null, "Central Depository Services Ltd (CDSL):"), " Second depository, promoted by BSE"),
            React.createElement('li', null, React.createElement('b', null, "Depository Participants (DPs):"), " Banks and financial institutions providing depository services")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "✅ Benefits of Dematerialization:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Elimination of Risk:"), " No loss/theft/forgery of certificates"),
            React.createElement('li', null, React.createElement('b', null, "Faster Transactions:"), " Instant transfer of securities"),
            React.createElement('li', null, React.createElement('b', null, "Lower Transaction Cost:"), " Reduced stamp duty and handling charges"),
            React.createElement('li', null, React.createElement('b', null, "Easy Nomination Facility:"), " Simple process for nomination"),
            React.createElement('li', null, React.createElement('b', null, "Change in Address:"), " Electronic updation without physical certificates"),
            React.createElement('li', null, React.createElement('b', null, "Pledge/ Hypothecation:"), " Easy pledging of securities as collateral"),
            React.createElement('li', null, React.createElement('b', null, "Automatic Credit to Demat Account:"), " Direct credit of bonus/right shares")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Dematerialization has revolutionized securities trading by making it paperless, faster, and more secure!"
        )
      ),
      examFocus: true,
      mnemonic: "NSDL first, CDSL second, DPs serve - NCD!"
    }
  ],
  keywords: [
    { term: "Financial Markets", definition: "Marketplaces where buying and selling of financial assets like shares, bonds, currencies takes place." },
    { term: "Money Market", definition: "Market for short-term financial assets with maturity up to one year, providing liquidity." },
    { term: "Capital Market", definition: "Market for long-term securities with maturity more than one year, facilitating capital formation." },
    { term: "Primary Market", definition: "Market where new securities are issued for the first time to raise fresh capital." },
    { term: "Secondary Market", definition: "Market where existing securities are traded among investors, providing liquidity." },
    { term: "Stock Exchange", definition: "Organized marketplace for trading securities with rules and regulations." },
    { term: "Treasury Bills", definition: "Short-term debt instruments issued by government through RBI, zero risk investment." },
    { term: "Commercial Paper", definition: "Unsecured promissory notes issued by corporates with high credit rating." },
    { term: "Certificate of Deposit", definition: "Negotiable money market instrument issued by banks and financial institutions." },
    { term: "Public Issue", definition: "Direct invitation to public to subscribe to securities through detailed prospectus." },
    { term: "Rights Issue", definition: "Offer of new shares to existing shareholders in proportion to their current holdings." },
    { term: "Bonus Issue", definition: "Free distribution of additional shares to existing shareholders from company's reserves." },
    { term: "SEBI", definition: "Securities and Exchange Board of India, regulatory body for Indian securities market." },
    { term: "Dematerialization", definition: "Process of converting physical share certificates into electronic form." },
    { term: "Depository", definition: "Institution that holds securities in electronic form and facilitates transfer." },
    { term: "NSDL", definition: "National Securities Depository Limited, India's first and largest depository." },
    { term: "CDSL", definition: "Central Depository Services Limited, second depository in India promoted by BSE." },
    { term: "Depository Participant", definition: "Agent of depository who provides dematerialization services to investors." },
    { term: "Price Discovery", definition: "Process of determining fair market price through interaction of buyers and sellers." }
  ],
  caseStudies: [
    {
      title: "Reliance Industries IPO - Primary Market Success",
      scenario: "In 1977, Reliance Industries made India's largest public issue of ₹1.60 crores through prospectus. The issue was oversubscribed 7 times, demonstrating investor confidence in the company's business model. This successful IPO helped Reliance raise capital for polyester plant expansion.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Primary Market Function:"), ' Reliance raised fresh capital through new share issue, not trading existing shares.'),
          React.createElement('li', null, React.createElement('b', null, "Public Issue Method:"), ' Used prospectus to invite public subscription, ensuring transparency and disclosure.'),
          React.createElement('li', null, React.createElement('b', null, "Capital Formation:"), ' Funds raised were used for productive investment in manufacturing capacity.'),
          React.createElement('li', null, React.createElement('b', null, "Investor Confidence:"), "Oversubscription indicated market trust in company's fundamentals and future prospects.")
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This case shows how primary market enables companies to raise capital for growth!")
      )
    },
    {
      title: "TCS Rights Issue - Capital Raising Strategy",
      scenario: "Tata Consultancy Services (TCS) announced a rights issue in 2019 to raise ₹16,000 crores. Existing shareholders were offered shares at ₹1,950 each in the ratio of 1:15. The issue was fully subscribed, helping TCS fund acquisitions and technology investments.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Rights Issue Method:"), ' Existing shareholders got preferential right to buy new shares in proportion to holdings.'),
          React.createElement('li', null, React.createElement('b', null, "Primary Market Activity:"), ' Fresh capital raised for business expansion and acquisitions.'),
          React.createElement('li', null, React.createElement('b', null, "Shareholder Benefits:"), ' Existing shareholders could maintain their ownership percentage.'),
          React.createElement('li', null, React.createElement('b', null, "Capital Structure Impact:"), ' Increased equity base strengthened balance sheet for future growth.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This demonstrates rights issue as a shareholder-friendly method of raising capital!")
      )
    },
    {
      title: "Paytm Dematerialization Drive",
      scenario: "Paytm partnered with CDSL to offer free dematerialization services to its users. Over 10 lakh investors converted their physical shares to demat form, reducing transaction costs and enabling seamless trading through Paytm Money app.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Dematerialization Benefits:"), ' Eliminated risks of physical certificate handling and reduced transaction costs.'),
          React.createElement('li', null, React.createElement('b', null, "Depository Services:"), ' CDSL provided the dematerialization infrastructure and technology.'),
          React.createElement('li', null, React.createElement('b', null, "Digital Transformation:"), ' Enabled paperless trading and faster settlement through mobile app.'),
          React.createElement('li', null, React.createElement('b', null, "Financial Inclusion:"), ' Made securities market accessible to retail investors through technology.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This shows how dematerialization and technology are democratizing securities market access!")
      )
    },
    {
      title: "SEBI's Regulatory Actions - Market Integrity",
      scenario: "SEBI imposed penalties totaling ₹1,200 crores on 5 banks for violating KYC norms and money laundering regulations. The action strengthened market integrity and protected investor interests by ensuring compliance with regulatory standards.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "SEBI's Regulatory Role:"), ' Protected investors by enforcing compliance and penalizing violations.'),
          React.createElement('li', null, React.createElement('b', null, "Market Surveillance:"), ' Monitored market activities to prevent malpractices and ensure fair trading.'),
          React.createElement('li', null, React.createElement('b', null, "Investor Protection:"), ' Actions deterred potential violations and maintained market confidence.'),
          React.createElement('li', null, React.createElement('b', null, "Regulatory Functions:"), ' Registration, surveillance, and enforcement of market intermediaries.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This demonstrates SEBI's crucial role in maintaining market integrity and investor trust!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 10: Financial Markets at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Financial Markets: Bridge between savers and investors"),
      React.createElement('li', null, "Money Market: Short-term (≤1 year) - T-Bills, CP, CD, Call/Notice/Term money"),
      React.createElement('li', null, "Capital Market: Long-term (>1 year) - Primary (new issues) + Secondary (trading)"),
      React.createElement('li', null, "Primary Market Methods: Public issue, Offer for sale, Private placement, Rights, Bonus"),
      React.createElement('li', null, "Stock Exchange Functions: Liquidity, Price discovery, Safety, Equity culture, Capital formation"),
      React.createElement('li', null, "SEBI Objectives: Protect investors, Promote development, Regulate intermediaries, Prevent malpractices"),
      React.createElement('li', null, "Depositories: NSDL (first), CDSL (second) - Provide dematerialization services"),
      React.createElement('li', null, "Remember: Primary creates capital, Secondary provides liquidity!")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning, instruments, functions, SEBI"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain money market, capital market, stock exchange"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Functions of SEBI, benefits of dematerialization"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on market operations and regulations")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Money market deals with short-term, capital market with long-term securities"),
        React.createElement('li', null, "Primary market creates new capital, secondary market provides liquidity"),
        React.createElement('li', null, "Stock exchanges perform multiple functions for economic development"),
        React.createElement('li', null, "SEBI regulates and develops securities market for investor protection"),
        React.createElement('li', null, "Dematerialization eliminates risks and reduces transaction costs")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Market Classification: Money short-term, Capital long-term - Primary new, Secondary old"),
        React.createElement('p', { className: 'font-semibold' }, "Money Market Instruments: T-Bills, CP, CD, Call money, Notice, Term - TCCP CNT"),
        React.createElement('p', { className: 'font-semibold' }, "Primary Market Methods: Public, Offer, Private, Rights, Bonus - POP RB"),
        React.createElement('p', { className: 'font-semibold' }, "Stock Exchange Functions: Liquidity, Price, Safety, Equity, Capital, Barometer, Allocation, Growth - LPS E C B A G"),
        React.createElement('p', { className: 'font-semibold' }, "SEBI Objectives: Protect, Promote, Regulate, Prevent - PPRP"),
        React.createElement('p', { className: 'font-semibold' }, "Depositories: NSDL first, CDSL second, DPs serve - NCD")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Distinguish between money market (short-term) and capital market (long-term)"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse primary market (new issues) with secondary market (trading)"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain SEBI's dual role of regulation and development"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that dematerialization eliminates physical certificate risks"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples of money market and capital market instruments"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say stock exchange only provides liquidity - it performs 8 major functions")
      )
    )
  )
};