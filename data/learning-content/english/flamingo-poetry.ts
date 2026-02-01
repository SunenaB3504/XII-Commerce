import { LearningModule } from "../../../types";
import React from "react";

export const flamingoPoetryModules: LearningModule[] = [
    {
        chapter: "Poem 1",
        title: "My Mother at Sixty-Six",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "A poignant poem capturing the complex emotions of a daughter noticing her mother's aging face during a car ride. It juxtaposes the fear of separation and death inside the car with the energetic, youthful life outside, ending with a smile that masks the poet's inner ache."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The poet is driving to Cochin airport with her elderly mother beside her and notices her \"ashen\" face, realizing she is aging and nearing death."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Disturbed by the thought, she looks outside at \"young trees sprinting\" and merry children to distract herself with life and vitality."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " At the airport security check, she looks at her mother again—pale as a \"late winter's moon\"—but hides her fear behind a smile, saying \"See you soon, Amma.\"")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Written by Kamala Das, known for capturing complex human relationships. Explores the poignant fear of losing a parent and the inevitability of aging.")
        ),
        keyConcepts: [
            {
                title: "Tone: Melancholic and Confessional",
                content: "Captures the ache of separation and fear of loss."
            },
            {
                title: "Simile",
                content: "\"Her face was ashen like that of a corpse\" / \"Pale as a late winter's moon\"—emphasizes decay/death."
            },
            {
                title: "Personification",
                content: "\"Trees sprinting\"—time passing quickly/energy of youth vs. mother's stillness."
            },
            {
                title: "Contrast",
                content: "Mother's aging/corpse-like appearance vs. Young trees/Merry children (Life vs. Death)."
            }
        ],
        keywords: [
            { term: "Ashen", definition: "Pale grey color of ash (deathly)." },
            { term: "Wan, pale", definition: "Weak and colorless." },
            { term: "Late winter's moon", definition: "Symbol of old age (dim, cold, ending)." },
            { term: "Sprinting", definition: "Running fast (Time flying)." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "The poem deals with the universal fear of losing a parent and the ache of separation.",
                analysis: "Extrapolation Point: Compare the poet's suppression of emotion (\"smile and smile and smile\") to Aunt Jennifer's silent suffering—both women hide inner turmoil, but Das does it to reassure her mother."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the poet is happy because she smiles."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " The smile is a mask to hide her fear and pain, and to give her mother hope.")
            )
        )
    },
    {
        chapter: "Poem 2",
        title: "Keeping Quiet",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Neruda advocates for a moment of universal stillness and introspection. By counting to twelve and suspending all activity—including work and war—humans can break their cycle of destruction and misunderstanding, fostering a sense of brotherhood and renewal similar to nature's quiet rebirth."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The poet urges everyone to count to twelve and keep still, stopping all activity and speech."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " He envisions a \"strange moment\" of exotic brotherhood where fishermen harm no whales and warmongers put on clean clothes, suspending destruction."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " He clarifies that stillness is not death/inactivity, but a way for Earth to teach us how life exists under apparent silence.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "By Pablo Neruda. An appeal for introspection and universal brotherhood to stop the mindless rush of modern life and war.")
        ),
        keyConcepts: [
            {
                title: "Tone: Calm and Persuasive",
                content: "Urges reflection without anger."
            },
            {
                title: "Symbolism: 'Twelve'",
                content: "Hours of the day or months of the year—a full cycle."
            },
            {
                title: "Metaphor: Clean Clothes",
                content: "A change of soul/mindset; ending clear enmities."
            },
            {
                title: "Personification: Earth",
                content: "\"Earth can teach us\"—nature is alive even when dormant (winter)."
            }
        ],
        keywords: [
            { term: "Introspection", definition: "Examining one's own thoughts." },
            { term: "Exotic moment", definition: "A rare, unusual moment of silence." },
            { term: "Green wars", definition: "Wars against nature (pollution)." },
            { term: "Truck with death", definition: "Association or deal with death." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Necessity of quiet introspection to understand ourselves and stop mutual destruction.",
                analysis: "Extrapolation Point: Compare Neruda's call for silence to the 'ubiquitous silence' in 'Journey to the End of the Earth'—both offer a space for realization, but Neruda's is an active choice for humans."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students confuse 'stillness' with total inactivity or death."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " Neruda explicitly says \"I want no truck with death\". He wants conscious suspension of harmful activity, not passivity.")
            )
        )
    },
    {
        chapter: "Poem 3",
        title: "A Thing of Beauty",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Keats celebrates the eternal power of beauty to heal the human spirit. He suggests that despite suffering, gloom, and 'inhuman dearth', beautiful things like nature, art, and heroic tales provide a 'bower' of peace and an endless source of inspiration that binds us to the earth."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The poet asserts that a thing of beauty is a joy forever; its loveliness increases and never fades."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " He lists beautiful things (sun, moon, daffodils, streams) and 'grandeur of dooms' (heroic tales) that remove the 'pall' of despondence."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Beauty is an 'endless fountain of immortal drink' pouring unto us from heaven, binding us to earth despite suffering.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "By John Keats (Romantic poet). Excerpt from 'Endymion'. Celebrates nature and art as eternal sources of healing for the human spirit.")
        ),
        keyConcepts: [
            {
                title: "Tone: Awe-inspiring and Serene",
                content: "Celebrates the eternal power of beauty."
            },
            {
                title: "Metaphor: Bower",
                content: "A pleasant shady place—beauty provides shelter/peace."
            },
            {
                title: "Imagery",
                content: "Flowery bands, daffodies, clear rills, musk-rose blooms."
            },
            {
                title: "Oxymoron: Mighty Dead",
                content: "Those who are dead but powerful/inspiring in memory."
            }
        ],
        keywords: [
            { term: "Bower", definition: "A pleasant shady place under trees." },
            { term: "Morrow", definition: "Morning/Tomorrow." },
            { term: "Pall", definition: "A dark cloud or covering (sadness)." },
            { term: "Immortal drink", definition: "Nectar of gods (beauty)." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Beauty has the power to heal the soul and lift the veil of gloom.",
                analysis: "Extrapolation Point: Compare the healing power of beauty here to the description of Antarctica's beauty in 'Journey to the End of the Earth'—both evoke awe and perspective."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think 'grandeur of the dooms' refers to something bad."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " It refers to the magnificent legacy of mighty heroes/ancestors which is a form of intellectual beauty.")
            )
        )
    },
    {
        chapter: "Poem 4",
        title: "A Roadside Stand",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Frost juxtaposes the lives of struggling rural folk who run a roadside stand with the indifferent, wealthy city dwellers who speed past. The poem critiques the hollow promises of politicians and the selfish charitable acts of the 'greedy good-doers', expressing the poet's deep pain at the rural people's dashed hopes."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Rural folk put up a roadside stand to sell produce (berries, squash) to city passersby, hoping for some city money."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " City cars just speed past or complain about the scenery/signs; the poet criticizes the 'greedy good-doers' who promise help but exploit them."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " The poet feels the 'childish longing in vain' and admits he can't bear their pain, wishing for a solution to put them out of their misery.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "By Robert Frost. Highlights the economic disparity between city and country and the apathy of the rich towards the rural poor.")
        ),
        keyConcepts: [
            {
                title: "Tone: Critical and Sympathetic",
                content: "Critical of city apathy; sympathetic to rural struggle."
            },
            {
                title: "Personification",
                content: "\"The little old house was out with a little new shed\"."
            },
            {
                title: "Oxymoron: Greedy Good-doers",
                content: "Benefactors who actually exploit (politicians, developers)."
            },
            {
                title: "Transferred Epithet",
                content: "\"Polished traffic\"—the traffic isn't polished, the cars/people are."
            }
        ],
        keywords: [
            { term: "Polished traffic", definition: "Wealthy city people in cars." },
            { term: "Greedy good-doers", definition: "Exploitative benefactors." },
            { term: "Childish longing", definition: "The rural folk's naive hope for customers." },
            { term: "City money", definition: "Cash flow needed for progress." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "The gap between rural hardship and urban apathy.",
                analysis: "Extrapolation Point: Compare the rural poverty here to the Ragpickers in 'Lost Spring'—both are marginalized, but the roadside stand owners have land yet struggle for cash, whereas ragpickers are landless and urban."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the 'greedy good-doers' are genuinely helping."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " Frost calls them 'beasts of prey' who swarm over their lives to destroy their peace for self-gain.")
            )
        )
    },
    {
        chapter: "Poem 5",
        title: "Aunt Jennifer’s Tigers",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Chapter Snapshot"),
            React.createElement("p", { className: "mb-4" }, "Through the character of Aunt Jennifer, Rich explores the constraints of patriarchal marriage. Jennifer creates a tapestry of fearless, prancing tigers that contrast sharply with her own terrified, submissive life, weighed down by the 'massive weight' of her wedding band."),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Aunt Jennifer creates a tapestry of fearless, prancing tigers, contrasting with her own weak, terrified state."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Her fingers flutter with the weight of \"Uncle's wedding band,\" symbolizing her oppressive marriage."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Even after death, her hands will be \"ringed with ordeals,\" but the tigers she created will go on prancing, proud and unafraid.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "By Adrienne Rich (Feminist poet). Critiques the patriarchal institution of marriage and how it crushes women's artistic expression/freedom.")
        ),
        keyConcepts: [
            {
                title: "Tone: Somber and Critical",
                content: "Highlights the oppression of women."
            },
            {
                title: "Symbolism: Tigers",
                content: "Freedom, strength, and fearlessness—what Aunt Jennifer desires to be."
            },
            {
                title: "Symbolism: Wedding Band",
                content: "The heavy weight of patriarchal oppression and marital constraints."
            },
            {
                title: "Contrast",
                content: "Aunt Jennifer (weak, terrified) vs. Tigers (bold, chivalric)."
            }
        ],
        keywords: [
            { term: "Prancing", definition: "Moving with high steps (joy/confidence)." },
            { term: "Topaz", definition: "Bright yellow gem (color of tigers)." },
            { term: "Denizens", definition: "Inhabitants." },
            { term: "Ringed with ordeals", definition: "Trapped/surrounded by hardships." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Art as a medium of escape and expression for oppressed women.",
                analysis: "Extrapolation Point: Compare Aunt Jennifer to Sophie in 'Going Places'—both use imagination (art/fantasy) to escape reality, but Jennifer's art is permanent (\"will go on prancing\") while Sophie's fantasy is fleeting."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the tigers are real animals she owns."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " They are embroidered images on a screen/panel.")
            )
        )
    }
];
