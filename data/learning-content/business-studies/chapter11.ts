import type { LearningModule } from '../../../types';
import React from 'react';

export const chapter11Module: LearningModule = {
  chapter: "11",
  title: "Marketing",
  overview: "Master marketing fundamentals essential for CBSE Board Exams 2026. This chapter covers marketing concepts, functions, and strategies - frequently tested topics worth 12-15 marks. Learn with exam-focused explanations, market analysis, and practical marketing case studies modeled on CBSE Sample Papers.",
  keyConcepts: [
    {
      title: "Marketing - Meaning and Concept",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Marketing is a social and managerial process by which individuals and groups obtain what they need and want through creating, offering, and exchanging products of value with others."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "✓ Key Aspects of Marketing:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Needs, Wants, and Demands:"), " Understanding customer requirements and converting them into demands"),
            React.createElement('li', null, React.createElement('b', null, "Products and Services:"), " Creating offerings that satisfy customer needs"),
            React.createElement('li', null, React.createElement('b', null, "Value and Satisfaction:"), " Providing superior value to build customer loyalty"),
            React.createElement('li', null, React.createElement('b', null, "Exchange and Transactions:"), " Trading value for mutual satisfaction"),
            React.createElement('li', null, React.createElement('b', null, "Relationships and Networks:"), " Building long-term customer relationships")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Traditional vs Modern Marketing:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "Traditional Concept:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Selling existing products"),
                React.createElement('li', null, "Profit maximization"),
                React.createElement('li', null, "Product-oriented"),
                React.createElement('li', null, "Short-term focus")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "Modern Concept:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Customer satisfaction"),
                React.createElement('li', null, "Integrated approach"),
                React.createElement('li', null, "Market-oriented"),
                React.createElement('li', null, "Long-term relationships")
              )
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Marketing is not just selling - it's understanding customer needs and fulfilling them profitably!"
        )
      ),
      examFocus: true,
      mnemonic: "Needs, Wants, Products, Value, Exchange, Relationships - NW P V E R!"
    },
    {
      title: "Functions of Marketing",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Marketing performs various functions that facilitate the flow of goods from producers to consumers. These functions can be classified into primary and secondary functions."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Primary Functions (Exchange Functions):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Buying and Assembling:"), " Purchasing raw materials and assembling them"),
            React.createElement('li', null, React.createElement('b', null, "Selling:"), " Transfer of ownership from seller to buyer"),
            React.createElement('li', null, React.createElement('b', null, "Transportation:"), " Movement of goods from production to consumption centers"),
            React.createElement('li', null, React.createElement('b', null, "Storage/Warehousing:"), " Holding goods until demanded by customers")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Secondary Functions (Facilitating Functions):"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Standardization and Grading:"), " Ensuring quality consistency and classification"),
            React.createElement('li', null, React.createElement('b', null, "Packaging and Labelling:"), " Protection and information provision"),
            React.createElement('li', null, React.createElement('b', null, "Branding:"), " Creating unique identity for products"),
            React.createElement('li', null, React.createElement('b', null, "Financing:"), " Providing credit facilities to producers and consumers"),
            React.createElement('li', null, React.createElement('b', null, "Risk Bearing:"), " Assuming risks in marketing process"),
            React.createElement('li', null, React.createElement('b', null, "Market Information:"), " Gathering and providing market intelligence")
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-purple-900' },
          "⚠️ Marketing functions ensure smooth flow of goods and services from producers to consumers!"
        )
      ),
      examFocus: true,
      mnemonic: "Primary: Buying, Selling, Transportation, Storage - BST S; Secondary: Standard, Package, Brand, Finance, Risk, Information - SP B F R I!"
    },
    {
      title: "Marketing Mix (4Ps)",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Marketing Mix refers to the set of controllable marketing tools that a firm uses to produce the desired response from its target market. The 4Ps framework helps marketers make strategic decisions."
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 The 4Ps of Marketing Mix:"),
          React.createElement('div', { className: 'space-y-4' },
            React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-blue-500' },
              React.createElement('p', { className: 'font-bold text-blue-900 mb-2 text-lg' }, "Product"),
              React.createElement('p', { className: 'text-sm mb-2' }, "What the company offers to satisfy customer needs"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Product variety, quality, design, features, branding"),
                React.createElement('li', null, "Packaging, sizes, services, warranties"),
                React.createElement('li', null, "Product line and product mix decisions")
              )
            ),
            React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-green-500' },
              React.createElement('p', { className: 'font-bold text-green-900 mb-2 text-lg' }, "Price"),
              React.createElement('p', { className: 'text-sm mb-2' }, "Amount customers pay for the product"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Pricing strategy, discounts, allowances"),
                React.createElement('li', null, "Payment terms, credit terms"),
                React.createElement('li', null, "Price discrimination and bundling")
              )
            ),
            React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-red-500' },
              React.createElement('p', { className: 'font-bold text-red-900 mb-2 text-lg' }, "Place (Distribution)"),
              React.createElement('p', { className: 'text-sm mb-2' }, "Making products available where and when customers want them"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Distribution channels, market coverage"),
                React.createElement('li', null, "Locations, transportation, warehousing"),
                React.createElement('li', null, "Inventory management, order processing")
              )
            ),
            React.createElement('div', { className: 'bg-white p-4 rounded-lg border-l-4 border-yellow-500' },
              React.createElement('p', { className: 'font-bold text-yellow-900 mb-2 text-lg' }, "Promotion"),
              React.createElement('p', { className: 'text-sm mb-2' }, "Communication with customers about the product"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "Advertising, personal selling, sales promotion"),
                React.createElement('li', null, "Public relations, direct marketing"),
                React.createElement('li', null, "Brand building and customer engagement")
              )
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Marketing Mix is controllable - marketers can adjust these elements to achieve marketing objectives!"
        )
      ),
      examFocus: true,
      mnemonic: "Product, Price, Place, Promotion - 4Ps!"
    },
    {
      title: "Product - Meaning and Classification",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Product is anything that can be offered to a market for attention, acquisition, use, or consumption that might satisfy a want or need. Products can be classified based on durability and tangibility."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Classification of Products:"),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-blue-500' },
              React.createElement('p', { className: 'font-semibold text-blue-800 mb-2' }, "Based on Durability and Tangibility:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "Consumer Products:"), " Bought by final consumers"),
                React.createElement('li', null, React.createElement('b', null, "Industrial Products:"), " Bought for further processing"),
                React.createElement('li', null, React.createElement('b', null, "Services:"), " Intangible, perishable, variable")
              )
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded border-l-4 border-green-500' },
              React.createElement('p', { className: 'font-semibold text-green-800 mb-2' }, "Based on Consumer Buying Behavior:"),
              React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, React.createElement('b', null, "Convenience Products:"), " Frequently purchased, low price"),
                React.createElement('li', null, React.createElement('b', null, "Shopping Products:"), " Comparison shopping, higher price"),
                React.createElement('li', null, React.createElement('b', null, "Specialty Products:"), " Unique characteristics, brand loyalty"),
                React.createElement('li', null, React.createElement('b', null, "Unsought Products:"), " Consumers don't know about or avoid")
              )
            )
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Product Levels (Kotler's 5 Levels):"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Core Product"),
              React.createElement('p', { className: 'text-sm' }, "Basic benefit or service that the customer is really buying")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Generic Product"),
              React.createElement('p', { className: 'text-sm' }, "Basic version of the product without any additions")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Expected Product"),
              React.createElement('p', { className: 'text-sm' }, "Set of attributes and conditions buyers normally expect")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Augmented Product"),
              React.createElement('p', { className: 'text-sm' }, "Product with additional features and benefits")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Potential Product"),
              React.createElement('p', { className: 'text-sm' }, "All possible augmentations and transformations")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Product decisions are crucial as they determine the success of other marketing mix elements!"
        )
      ),
      examFocus: true,
      mnemonic: "Consumer, Industrial, Services - Convenience, Shopping, Specialty, Unsought - C I S - C S S U!"
    },
    {
      title: "Branding, Labelling and Packaging",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Branding, labelling, and packaging are important marketing tools that help in product identification, protection, and communication with customers."
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Branding:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Brand Name:"), " Part of brand that can be spoken (Coca-Cola)"),
            React.createElement('li', null, React.createElement('b', null, "Brand Mark:"), " Part that cannot be spoken (Nike swoosh)"),
            React.createElement('li', null, React.createElement('b', null, "Trademark:"), " Brand that is legally protected"),
            React.createElement('li', null, React.createElement('b', null, "Brand Equity:"), " Value added by brand name"),
            React.createElement('li', null, React.createElement('b', null, "Brand Loyalty:"), " Customer preference for a particular brand")
          )
        ),
        React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-green-900 mb-2' }, "📊 Labelling:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Descriptive Function:"), " Describes product, its contents, usage"),
            React.createElement('li', null, React.createElement('b', null, "Identification Function:"), " Identifies product and brand"),
            React.createElement('li', null, React.createElement('b', null, "Grading Function:"), " Indicates quality grade"),
            React.createElement('li', null, React.createElement('b', null, "Legal Requirements:"), " Mandatory information like ingredients, expiry date")
          )
        ),
        React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg mb-3 border-2 border-purple-300' },
          React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 Functions of Packaging:"),
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Protection"),
              React.createElement('p', { className: 'text-sm' }, "Protects product from damage, spoilage, and contamination")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Convenience"),
              React.createElement('p', { className: 'text-sm' }, "Easy to store, transport, and use")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Promotion"),
              React.createElement('p', { className: 'text-sm' }, "Attractive design attracts customers and acts as silent salesman")
            ),
            React.createElement('div', { className: 'bg-white p-3 rounded' },
              React.createElement('p', { className: 'font-semibold text-purple-800 mb-1' }, "Information"),
              React.createElement('p', { className: 'text-sm' }, "Provides product information and usage instructions")
            )
          )
        ),
        React.createElement('p', { className: 'text-sm font-semibold mt-2 text-red-900' },
          "⚠️ Good packaging can make an ordinary product extraordinary and increase its market value!"
        )
      ),
      examFocus: true,
      mnemonic: "Branding: Name, Mark, Trademark, Equity, Loyalty - N M T E L; Packaging: Protection, Convenience, Promotion, Information - P C P I!"
    },
    {
      title: "Price - Meaning and Factors Affecting Pricing",
      content: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'mb-3' },
          "Price is the amount of money customers pay for a product or service. It is the only element in marketing mix that generates revenue, while others incur costs."
        ),
        React.createElement('div', { className: 'bg-red-50 p-4 rounded-lg mb-3 border-2 border-red-300' },
          React.createElement('p', { className: 'font-bold text-red-900 mb-3 text-lg' }, "🎯 Factors Affecting Pricing Decisions:"),
          React.createElement('ol', { className: 'list-decimal pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Cost of Production:"), " Fixed and variable costs determine minimum price"),
            React.createElement('li', null, React.createElement('b', null, "Competition:"), " Prices of similar products in market"),
            React.createElement('li', null, React.createElement('b', null, "Customer Demand:"), " Price elasticity and purchasing power"),
            React.createElement('li', null, React.createElement('b', null, "Government Regulations:"), " Price controls, taxes, subsidies"),
            React.createElement('li', null, React.createElement('b', null, "Marketing Objectives:"), " Profit maximization, market share, survival"),
            React.createElement('li', null, React.createElement('b', null, "Product Life Cycle Stage:"), " Introduction, growth, maturity, decline"),
            React.createElement('li', null, React.createElement('b', null, "Distribution Channels:"), " Number of intermediaries affects pricing"),
            React.createElement('li', null, React.createElement('b', null, "Psychological Factors:"), " Reference prices, odd-even pricing")
          )
        ),
        React.createElement('div', { className: 'bg-blue-50 p-4 rounded-lg mb-3' },
          React.createElement('p', { className: 'font-semibold text-blue-900 mb-2' }, "📊 Pricing Strategies:"),
          React.createElement('ul', { className: 'list-disc pl-5 space-y-2 text-sm' },
            React.createElement('li', null, React.createElement('b', null, "Cost-Plus Pricing:"), " Cost + markup"),
            React.createElement('li', null, React.createElement('b', null, "Competition-Based Pricing:"), " Match or beat competitors"),
            React.createElement('li', null, React.createElement('b', null, "Value-Based Pricing:"), " Based on perceived value"),
            React.createElement('li', null, React.createElement('b', null, "Penetration Pricing:"), " Low price to enter market"),
            React.createElement('li', null, React.createElement('b', null, "Skimming Pricing:"), " High price initially, then reduce")
          )
        ),
        React.createElement('p', { className: 'text-sm italic mt-2' },
          "💡 Price should reflect the value customers perceive, not just the cost incurred!"
        )
      ),
      examFocus: true,
      mnemonic: "Cost, Competition, Customer, Government, Marketing, Life cycle, Distribution, Psychological - C3 G M L D P!"
    }
  ],
  keywords: [
    { term: "Marketing", definition: "Social and managerial process of creating, offering, and exchanging products of value to satisfy needs and wants." },
    { term: "Marketing Mix", definition: "Set of controllable marketing tools (4Ps) used to achieve desired response from target market." },
    { term: "Product", definition: "Anything offered to market that might satisfy a want or need, including physical goods, services, and ideas." },
    { term: "Branding", definition: "Process of creating a unique name, symbol, or design that identifies and differentiates a product." },
    { term: "Packaging", definition: "Container or wrapper that holds the product and serves multiple functions like protection and promotion." },
    { term: "Labelling", definition: "Display of information on product package including brand name, contents, and usage instructions." },
    { term: "Price", definition: "Amount of money customers pay for product or service; only revenue-generating element in marketing mix." },
    { term: "Promotion", definition: "Communication activities that inform, persuade, and remind customers about products." },
    { term: "Place", definition: "Making products available where and when customers want them through distribution channels." },
    { term: "Consumer Products", definition: "Products purchased by final consumers for personal or household use." },
    { term: "Industrial Products", definition: "Products purchased by businesses for further processing or use in operations." },
    { term: "Convenience Products", definition: "Products frequently purchased with minimum shopping effort." },
    { term: "Shopping Products", definition: "Products consumers compare before purchase based on price, quality, and style." },
    { term: "Specialty Products", definition: "Unique products with special appeal that consumers seek specifically." },
    { term: "Brand Equity", definition: "Value added to product by its brand name and associated perceptions." },
    { term: "Cost-Plus Pricing", definition: "Pricing method where selling price is determined by adding markup to total cost." },
    { term: "Value-Based Pricing", definition: "Pricing based on customer's perceived value rather than seller's cost." },
    { term: "Penetration Pricing", definition: "Setting low initial price to quickly gain market share and customer base." },
    { term: "Skimming Pricing", definition: "Setting high initial price to recover costs quickly from early adopters." }
  ],
  caseStudies: [
    {
      title: "Coca-Cola's Branding Excellence",
      scenario: "Coca-Cola has built one of the world's most valuable brands worth over $80 billion. The company maintains consistent branding across 200+ countries with the same red color, script font, and contour bottle design since 1886. This strong brand equity allows Coca-Cola to charge premium prices and maintain customer loyalty.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Branding Strategy:"), ' Coca-Cola created a unique brand identity with distinctive visual elements that are instantly recognizable worldwide.'),
          React.createElement('li', null, React.createElement('b', null, "Brand Equity:"), ' The brand name adds significant value, allowing premium pricing and customer loyalty despite higher prices than local competitors.'),
          React.createElement('li', null, React.createElement('b', null, "Marketing Mix Integration:"), ' Consistent branding supports product, pricing, promotion, and distribution strategies globally.'),
          React.createElement('li', null, React.createElement('b', null, "Customer Loyalty:"), ' Strong brand equity creates emotional connection leading to repeat purchases and positive word-of-mouth.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-green-700' }, "This demonstrates how powerful branding can create sustainable competitive advantage!")
      )
    },
    {
      title: "Amul's Cooperative Marketing Model",
      scenario: "Amul revolutionized dairy marketing in India through its cooperative model. Started in 1946 with 2 village cooperatives, it now has 18,000+ cooperatives serving 3.6 million farmers. Amul's marketing strategy focuses on quality products, competitive pricing, and strong distribution network, making it the largest food brand in India.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Marketing Functions:"), ' Amul performs buying (milk collection), transportation, storage, and selling functions efficiently.'),
          React.createElement('li', null, React.createElement('b', null, "Marketing Mix (4Ps):"), ' Quality products, competitive pricing, extensive distribution network, and effective promotion through advertising campaigns.'),
          React.createElement('li', null, React.createElement('b', null, "Branding and Packaging:"), ' Strong brand identity with consistent packaging and labelling across product range.'),
          React.createElement('li', null, React.createElement('b', null, "Distribution Strategy:"), ' Extensive network of 5,000+ retail outlets ensures product availability nationwide.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-blue-700' }, "This shows how integrated marketing functions can create successful business models!")
      )
    },
    {
      title: "Patanjali's Value-Based Marketing",
      scenario: "Patanjali Ayurved disrupted the FMCG market by offering ayurvedic products at affordable prices. Despite being a new entrant, it captured significant market share by emphasizing natural ingredients, traditional values, and competitive pricing. The company's marketing focuses on authenticity and value for money rather than heavy advertising.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Value-Based Pricing:"), ' Competitive pricing based on perceived value of natural, ayurvedic products rather than premium positioning.'),
          React.createElement('li', null, React.createElement('b', null, "Product Differentiation:"), ' Unique selling proposition based on traditional ayurvedic formulations and natural ingredients.'),
          React.createElement('li', null, React.createElement('b', null, "Marketing Mix Balance:"), ' Strong product quality, affordable pricing, wide distribution, and word-of-mouth promotion.'),
          React.createElement('li', null, React.createElement('b', null, "Customer Trust:"), ' Emphasis on authenticity and traditional values built customer loyalty quickly.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-purple-900' }, "This illustrates how value-based marketing can challenge established brands!")
      )
    },
    {
      title: "Flipkart's Dynamic Pricing Strategy",
      scenario: "Flipkart uses dynamic pricing algorithms that adjust product prices multiple times a day based on demand, competition, and inventory levels. During festivals, prices may change every few hours. This pricing strategy helped Flipkart compete with Amazon and capture market share in e-commerce.",
      analysis: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-semibold mb-3' }, "Concepts Involved:"),
        React.createElement('ol', { className: 'list-decimal pl-5 mt-2 space-y-2' },
          React.createElement('li', null, React.createElement('b', null, "Dynamic Pricing:"), ' Prices change based on real-time market conditions, demand, and competition.'),
          React.createElement('li', null, React.createElement('b', null, "Competition-Based Pricing:"), ' Constant monitoring of competitor prices to remain competitive.'),
          React.createElement('li', null, React.createElement('b', null, "Customer Demand Factors:"), ' Higher demand during festivals allows premium pricing, while excess inventory leads to discounts.'),
          React.createElement('li', null, React.createElement('b', null, "Technology Integration:"), ' Use of algorithms and data analytics for optimal pricing decisions.')
        ),
        React.createElement('p', { className: 'mt-4 font-semibold text-red-700' }, "This demonstrates how modern technology enables sophisticated pricing strategies!")
      )
    }
  ],
  quickRevision: React.createElement(React.Fragment, null,
    React.createElement('h4', { className: 'text-lg font-semibold mb-2' }, "Chapter 11: Marketing at a Glance"),
    React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
      React.createElement('li', null, "Marketing: Social process of creating, offering, exchanging products of value"),
      React.createElement('li', null, "Functions: Primary (Buying, Selling, Transportation, Storage) + Secondary (Standardization, Packaging, Branding, etc.)"),
      React.createElement('li', null, "Marketing Mix (4Ps): Product, Price, Place, Promotion"),
      React.createElement('li', null, "Product Classification: Consumer/Industrial/Services; Convenience/Shopping/Specialty/Unsought"),
      React.createElement('li', null, "Branding: Creates unique identity; includes name, mark, trademark, equity"),
      React.createElement('li', null, "Packaging: Protection, Convenience, Promotion, Information functions"),
      React.createElement('li', null, "Price Factors: Cost, Competition, Customer, Government, Marketing objectives, Life cycle, Distribution, Psychological"),
      React.createElement('li', null, "Remember: Marketing satisfies customer needs profitably!")
    ),
    React.createElement('div', { className: 'bg-orange-50 p-4 rounded-lg border-2 border-orange-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-orange-900 mb-3 text-lg' }, "🎯 EXAM PATTERN ANALYSIS:"),
      React.createElement('div', { className: 'text-sm space-y-2' },
        React.createElement('p', null, React.createElement('b', null, "1-Mark MCQs:"), " Meaning, functions, 4Ps, product classification"),
        React.createElement('p', null, React.createElement('b', null, "3-Mark Questions:"), " Explain marketing mix, branding, pricing factors"),
        React.createElement('p', null, React.createElement('b', null, "4-Mark Questions:"), " Functions of marketing, product levels"),
        React.createElement('p', null, React.createElement('b', null, "6-Mark Questions:"), " Case studies on marketing strategies and mix")
      )
    ),
    React.createElement('div', { className: 'bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4' },
      React.createElement('p', { className: 'font-bold text-red-900 mb-1' }, "🚨 CRITICAL RULES:"),
      React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
        React.createElement('li', null, "Marketing is customer-oriented, not just selling"),
        React.createElement('li', null, "4Ps are controllable marketing tools"),
        React.createElement('li', null, "Product decisions affect other marketing mix elements"),
        React.createElement('li', null, "Price should reflect perceived value, not just cost"),
        React.createElement('li', null, "Branding creates differentiation and loyalty"),
        React.createElement('li', null, "Packaging serves multiple functions beyond protection")
      )
    ),
    React.createElement('div', { className: 'bg-green-50 p-4 rounded-lg border-2 border-green-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-green-900 mb-3 text-lg' }, "🧠 MEMORY AIDS & MNEMONICS:"),
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('p', { className: 'font-semibold' }, "Marketing Functions: Primary - Buying, Selling, Transportation, Storage - BST S"),
        React.createElement('p', { className: 'font-semibold' }, "Secondary Functions: Standard, Package, Brand, Finance, Risk, Information - SP B F R I"),
        React.createElement('p', { className: 'font-semibold' }, "4Ps: Product, Price, Place, Promotion"),
        React.createElement('p', { className: 'font-semibold' }, "Product Classification: Consumer, Industrial, Services - Convenience, Shopping, Specialty, Unsought - C I S - C S S U"),
        React.createElement('p', { className: 'font-semibold' }, "Branding Elements: Name, Mark, Trademark, Equity, Loyalty - N M T E L"),
        React.createElement('p', { className: 'font-semibold' }, "Packaging Functions: Protection, Convenience, Promotion, Information - P C P I"),
        React.createElement('p', { className: 'font-semibold' }, "Pricing Factors: Cost, Competition, Customer, Government, Marketing, Life cycle, Distribution, Psychological - C3 G M L D P")
      )
    ),
    React.createElement('div', { className: 'bg-purple-50 p-4 rounded-lg border-2 border-purple-300 mt-4' },
      React.createElement('p', { className: 'font-bold text-purple-900 mb-3 text-lg' }, "🎯 EXAM STRATEGY & COMMON MISTAKES:"),
      React.createElement('div', { className: 'space-y-2 text-sm' },
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain marketing as a social process that satisfies needs through exchange"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Confuse marketing with selling - marketing starts with customer needs"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Give examples for each element of marketing mix (4Ps)"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Forget that price is the only revenue-generating element in marketing mix"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Explain branding as creating unique identity and differentiation"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Say packaging is only for protection - it serves promotion and information too"),
        React.createElement('p', null, React.createElement('b', null, "✅ DO:"), " Mention multiple factors affecting pricing decisions"),
        React.createElement('p', null, React.createElement('b', null, "❌ DON'T:"), " Think marketing functions are only performed by marketers - producers and consumers also perform them")
      )
    )
  )
};