import { LearningModule } from "../../../types";
import React from "react";

export const vistasModules: LearningModule[] = [
    {
        chapter: "Vistas 1",
        title: "The Third Level",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Charley, a modern man seeking escape from the insecurities of the post-war world, hallucinates a 'third level' at Grand Central Station leading to the peaceful year of 1894. The story blurs the line between reality and fantasy/wish-fulfillment."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Charley discovers a mysterious third level at Grand Central Station that transports him to 1894."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " He tries to buy tickets to Galesburg but fails due to currency; he later buys old currency but never finds the level again."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Charley finds a letter from Sam, his psychiatrist, confirming Sam found the third level and escaped to 1894.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Reflects Cold War anxieties—\"the modern world is full of insecurity, fear, war, worry\"—driving people to seek psychological escapism.")
        ),
        keyConcepts: [
            {
                title: "Tone: Nostalgic with Surreal Undertones",
                content: "\"In 1894, summer evenings were twice as long... peaceful world.\""
            },
            {
                title: "Symbolism: The Third Level",
                content: "Escapism from modernity's anxieties."
            },
            {
                title: "Irony",
                content: "Sam, the psychiatrist diagnosing \"waking-dream wish fulfillment,\" escapes to 1894 himself."
            },
            {
                title: "Symbolism: First-Day Cover",
                content: "Postmarked July 18, 1894—symbolizes proof that the past can be accessed."
            }
        ],
        keywords: [
            { term: "Escapism", definition: "Seeking distraction from unpleasant reality." },
            { term: "Waking-dream wish fulfillment", definition: "Sam's diagnosis of Charley's experience." },
            { term: "Psychiatrist", definition: "Spelling Trap: not physchiatrist." },
            { term: "Gabardine", definition: "Spelling Trap: Type of fabric." },
            { term: "Temporal displacement", definition: "Moving between different times." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Explores escapism as a psychological response to post-war anxieties.",
                analysis: "Extrapolation Point: Compare Charley's escapism to Douglas's confrontation of fear in 'Deep Water'—Charley avoids reality, Douglas actively overcomes trauma."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students often write that Charley actually travels to 1894."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " It is ambiguous. Sam's letter might be a delusion. The diagnosis suggests psychological escapism.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Open-flame gaslights... dim and sort of flickering\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"The empty sound of my own footsteps\"")
                )
            )
        )
    },
    {
        chapter: "Vistas 2",
        title: "The Tiger King",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "A satire on the conceit of those in power. The Maharaja of Pratibandapuram spends his life killing 99 tigers to disprove a prophecy, only to be killed by a wooden toy tiger, proving that destiny—and nature—cannot be arrogantly conquered."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Astrologers predict the Maharaja will be killed by the 100th tiger, prompting him to hunt tigers obsessively."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " He kills 99 tigers. He shoots the 100th, but it faints; hunters kill it. He thinks he succeeded."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " He dies from infection from a wooden toy tiger's splinter. The prophecy is fulfilled ironically.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Satirizes autocratic power and British colonial rule, mocking the ruthless exploitation of nature by royalty.")
        ),
        keyConcepts: [
            {
                title: "Tone: Satirical and Ironic",
                content: "\"The operation was successful. The Maharaja is dead.\""
            },
            {
                title: "Dramatic Irony",
                content: "The 100th tiger doesn't kill him; a toy tiger does."
            },
            {
                title: "Hyperbole",
                content: "Exaggerated titles: \"His Highness Jamedar-General... Sir Jilani Jung Jung Bahadur\"."
            },
            {
                title: "Symbolism: Wooden Toy Tiger",
                content: "Symbolizes fate's inevitability—human arrogance cannot outwit destiny."
            }
        ],
        keywords: [
            { term: "Dramatic irony", definition: "When the audience knows something the characters don't." },
            { term: "Hubris", definition: "Excessive pride." },
            { term: "Pratibandapuram", definition: "Spelling Trap: Fictional state." },
            { term: "Harakiri", definition: "Spelling Trap: Ritual suicide." },
            { term: "Ecological callousness", definition: "Disregard for nature." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Satirizes autocratic power and man's futile attempts to control destiny.",
                analysis: "Extrapolation Point: Compare the Maharaja's hubris to Edla's compassion in 'The Rattrap'—pride destroys him, while kindness redeems the rattrap seller."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the 100th tiger killed the Maharaja directly."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " The 100th tiger fainted. The Maharaja died from a toy tiger's splinter.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Tiny slivers of wood stood up like quills\""),
                    React.createElement("li", null, React.createElement("strong", null, "Tactile:"), " \"One of those slivers pierced the Maharaja's right hand\"")
                )
            )
        )
    },
    {
        chapter: "Vistas 3",
        title: "Journey to the End of the Earth",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "A travelogue detailing an expedition to Antarctica. The author reflects on the continent's pristine environment, its geological history as part of Gondwana, and its crucial role in understanding clear danger signals of global warming like melting ice shelves."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The author joins 'Students on Ice' expedition to Antarctica."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Walking on a meter-thick ice pack over 180 meters of ocean, experiencing an epiphany about interconnectedness."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Inspired by teenage idealists, she realizes \"what a difference a day makes\" in human consciousness.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Emphasizes Antarctica's role as Earth's climatic archive and the urgency of understanding global warming.")
        ),
        keyConcepts: [
            {
                title: "Tone: Reflective and Urgent",
                content: "\"Human civilisations have been around for a paltry 12,000 years... we've managed to create quite a ruckus.\""
            },
            {
                title: "Metaphor: Ping-Pong Ball",
                content: "Antarctica's disorienting whiteness."
            },
            {
                title: "Juxtaposition",
                content: "Scale ranges from microscopic (midges) to mighty (whales)."
            },
            {
                title: "Symbolism: Walking on Ocean",
                content: "Symbolizes humanity's fragile relationship with nature."
            }
        ],
        keywords: [
            { term: "Geological time scale", definition: "Earth's history." },
            { term: "Akademik Shokalskiy", definition: "Spelling Trap: Russian vessel." },
            { term: "Phytoplankton", definition: "Spelling Trap: Microscopic marine plants." },
            { term: "Austral", definition: "Spelling Trap: Southern Hemisphere summer." },
            { term: "Interconnectedness", definition: "Everything is connected." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Doshi's travelogue emphasizes understanding Earth's climatic history through Antarctica.",
                analysis: "Extrapolation Point: Compare Doshi's environmental awakening to Anees Jung's depiction of child laborers—both address intergenerational responsibility (ecological vs. socio-economic)."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students write that Antarctica was \"always\" frozen."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " It was once part of Gondwana with a warmer climate.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Ubiquitous silence, interrupted only by the occasional avalanche\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"Crabeater seals were stretching and sunning themselves\"")
                )
            )
        )
    },
    {
        chapter: "Vistas 4",
        title: "The Enemy",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Set during WWII, Dr. Sadao Hoki finds a wounded American POW on his doorstep. The story explores the conflict between his duty as a doctor to save a life and his patriotism as a Japanese citizen. Humanity prevails as he saves the soldier and helps him escape."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Dr. Sadao discovers a wounded American POW. A moral dilemma: duty as doctor vs. loyalty to Japan."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " After the General fails to send assassins, Sadao operates and saves the soldier."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Sadao helps the prisoner escape. The General admits he \"forgot\" due to self-absorption.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Set during WWII, exploring humanitarianism vs. nationalism.")
        ),
        keyConcepts: [
            {
                title: "Tone: Tense and Morally Ambiguous",
                content: "\"This man... there is no reason under heaven why he should live.\""
            },
            {
                title: "Internal Conflict",
                content: "Sadao's ethics (save a life) vs. patriotism (enemy)."
            },
            {
                title: "Symbolism: Open Gate",
                content: "Sadao's house openness = openness to humanity."
            },
            {
                title: "Symbolism: Scars",
                content: "The white man's scars symbolize universal suffering and torture."
            }
        ],
        keywords: [
            { term: "Moral dilemma", definition: "A difficult choice between two options." },
            { term: "Sadao Hoki", definition: "Spelling Trap: Japanese surname." },
            { term: "Stupor", definition: "Spelling Trap: state of near-unconsciousness." },
            { term: "Tokonoma", definition: "Spelling Trap: Japanese alcove." },
            { term: "Humanitarianism", definition: "Concern for human welfare." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Examines the conflict between universal humanitarian duty and nationalist loyalty.",
                analysis: "Extrapolation Point: Compare Sadao's dilemma with the peddler's transformation in 'The Rattrap'—both confront ethical choices, but Sadao faces life-threatening consequences."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students believe Dr. Sadao wanted to help the American because he liked Americans."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He helped because of professional ethics. He disliked Americans generally.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"The sand... stain of red soaking through\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"The fearful bleeding\" (Hana retching)")
                )
            )
        )
    },
    {
        chapter: "Vistas 5",
        title: "On the Face of It",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "A play exploring the bond between Derry, a boy with a scarred face, and Mr. Lamb, an old man with a tin leg. Both are social outcasts, but while Derry is bitter and withdrawn, Mr. Lamb is accepting and open. Mr. Lamb's philosophy transforms Derry's perspective before a tragic end."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Derry, a boy with a burned face, trespasses into Mr. Lamb's garden and meets the elderly man with a tin leg."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Mr. Lamb challenges Derry's self-isolation. Derry decides to return to him."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Derry rushes back to find Mr. Lamb dead from falling off a ladder. He weeps.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Explores disability, social alienation, and psychological trauma. Mr. Lamb models acceptance.")
        ),
        keyConcepts: [
            {
                title: "Tone: Compassionate yet Melancholic",
                content: "\"Derry begins to weep. 'I came back. Lamey-Lamb. I did... come back.'\""
            },
            {
                title: "Metaphor: Weeds and Flowers",
                content: "\"It's all life... growing. Same as you and me\"—challenges social hierarchies."
            },
            {
                title: "Symbolism: Crab Apples",
                content: "Life's bittersweet nature; \"ugly\" but make \"magic\" jelly."
            },
            {
                title: "Symbolism: Tin Leg",
                content: "Visible vs. invisible disabilities. Can be covered, unlike Derry's face."
            }
        ],
        keywords: [
            { term: "Social alienation", definition: "Feeling isolated from society." },
            { term: "Lamey-Lamb", definition: "Spelling Trap: Hyphenated nickname." },
            { term: "Peculiar", definition: "Spelling Trap: Strange." },
            { term: "Signify", definition: "Spelling Trap: To mean or matter." },
            { term: "Acceptance", definition: "Embracing differences." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Illustrates how physical disabilities cause alienation, but connection enables healing.",
                analysis: "Extrapolation Point: Compare Derry's struggle to Zitkala-Sa's cultural trauma—both experience marginalization, but Derry internalizes shame while Zitkala-Sa resists."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Mr. Lamb dies because Derry left."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " His death is an accident (fell from ladder). The tragedy is Derry returning too late.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"Bees humm... and hum means 'sing'\""),
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Crab apples... orange and golden. That's magic fruit\"")
                )
            )
        )
    },
    {
        chapter: "Vistas 6",
        title: "Memories of Childhood",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Two autobiographical extracts highlighting social marginalization. Zitkala-Sa recounts the trauma of her hair being shorn at a Native American boarding school (cultural erasure), while Bama describes her awakening to the indignity of caste untouchability in India and her resolve to overcome it through education."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Part I: The Cutting of My Long Hair (Zitkala-Sa)"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, "Zitkala-Sa is forcibly taken to a missionary school."),
                React.createElement("li", null, "She hides to resist hair cutting but is dragged out and shorn."),
                React.createElement("li", null, "She mourns the loss of identity and spirit.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Part II: We Too are Human Beings (Bama)"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, "Bama witnesses untouchability (elder carrying snacks by string)."),
                React.createElement("li", null, "Her brother Annan explains caste discrimination and urges education."),
                React.createElement("li", null, "She studies hard and gains respect.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Autobiographical accounts of marginalization—Native American forced assimilation and Indian caste discrimination.")
        ),
        keyConcepts: [
            {
                title: "Tone (Part I): Anguished and Defiant",
                content: "\"I was only one of many little animals driven by a herder.\""
            },
            {
                title: "Symbolism (Part I): Long Hair",
                content: "Cultural identity and honor. Cutting it symbolizes defeat."
            },
            {
                title: "Tone (Part II): Indignant yet Hopeful",
                content: "\"But we too are human beings.\""
            },
            {
                title: "Symbolism (Part II): Vadai Package",
                content: "Symbolizes untouchability's absurdity."
            }
        ],
        keywords: [
            { term: "Cultural assimilation", definition: "Forcing a group to adopt another culture." },
            { term: "Untouchability", definition: "Caste-based discrimination." },
            { term: "Zitkala-Sa", definition: "Spelling Trap: Hyphenated pen name." },
            { term: "Bama", definition: "Tamil Dalit writer." },
            { term: "Karukku", definition: "Spelling Trap: Palmyra leaves (Tamil)." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Two accounts of systemic oppression and the struggle for identity/dignity.",
                analysis: "Extrapolation Point: Compare Zitkala-Sa's forced erasure to Bama's caste humiliation. Compare Bama's empowerment to Saheb's trapped existence."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception (Part I)"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Zitkala-Sa voluntarily went to school."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " It was coercion/forced assimilation.")
            ),
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception (Part II)"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the elder carried the package by string because it was hot."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " It was to avoid 'polluting' the landlord by touch.")
            )
        )
    }
];
