import { LearningModule } from "../../../types";
import React from "react";

export const flamingoProseModules: LearningModule[] = [
    {
        chapter: "Prose 1",
        title: "The Last Lesson",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Franz arrives late to school expecting a scolding about participles, only to discover M. Hamel wearing formal clothes and villagers sitting in class—an unusual scene."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " M. Hamel announces this is the last French lesson because Berlin has ordered only German to be taught in Alsace-Lorraine schools, devastating Franz who suddenly realizes the value of his language."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " M. Hamel writes \"Vive La France!\" on the blackboard, choked with emotion, then dismisses the class with a silent gesture, unable to speak.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Set during the Franco-Prussian War (1870-1871) when France lost Alsace and Lorraine to Prussia (Germany). The story explores ", React.createElement("strong", null, "linguistic imperialism"), "—how conquering powers erase cultural identity by banning native languages, forcing assimilation through education systems.")
        ),
        keyConcepts: [
            {
                title: "Narrative Tone: Nostalgic and Mournful",
                description: "Franz regrets his lost opportunities: \"My last French lesson! Why, I hardly knew how to write!\""
            },
            {
                title: "Symbolism: 'Vive La France!'",
                description: "Defiant assertion of French cultural identity against German occupation."
            },
            {
                title: "Irony",
                description: "Franz suddenly values French lessons only when they're taken away; villagers attend class to honor education they neglected."
            },
            {
                title: "Metaphor: Key to Prison",
                description: "\"When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison\"—language = freedom's key."
            },
            {
                title: "Symbolism: M. Hamel's Outfit",
                description: "His \"beautiful green coat, frilled shirt, and little black silk cap\" symbolizes dignity in defeat—he honors French culture's last official moment."
            }
        ],
        keywords: [
            { term: "Linguistic imperialism", definition: "How conquering powers erase cultural identity by banning native languages." },
            { term: "Cultural identity", definition: "The sense of belonging to a group based on shared culture and language." },
            { term: "Linguistic chauvinism", definition: "Excessive pride in one's own language and prejudice against others." },
            { term: "Participles", definition: "Spelling Trap: not particapals—Franz forgets this grammar concept." },
            { term: "Alsace and Lorraine", definition: "Spelling Trap: not Alsas, Loraine—French territories." },
            { term: "Prussia", definition: "Spelling Trap: not Prusia—German state that conquered France." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "'The Last Lesson' critiques linguistic imperialism as a tool of cultural erasure.",
                question: "Extrapolation Point",
                answer: "Compare M. Hamel's linguistic pride to Bama's emphasis on education in 'Memories of Childhood'—both texts show how dominant powers suppress marginalized communities, but while M. Hamel mourns a lost language, Bama uses education as active resistance against untouchability."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think M. Hamel is German or that he voluntarily stops teaching French."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " M. Hamel is French. The Berlin order forces him to stop teaching. His formal attire honors French culture, not German authority.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"On the roof the pigeons cooed very low\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"Usually, when school began, there was a great bustle... lessons repeated in unison, very loud...\"")
                )
            )
        )
    },
    {
        chapter: "Prose 2",
        title: "Lost Spring",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The author encounters Saheb, a Bangladeshi ragpicker in Delhi's Seemapuri slum, who dreams of school but has no access."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Saheb gets a job at a tea stall earning 800 rupees, but his \"carefree look\" disappears—the steel canister he carries is heavier than his plastic bag because \"it belongs to the man who owns the shop\"; he's \"no longer his own master.\""),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " The narrative shifts to Firozabad's bangle-makers, where children like Mukesh work in illegal furnaces losing eyesight; Mukesh dreams of becoming a mechanic, but the \"vicious circle\" traps families.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Exposes ", React.createElement("strong", null, "child labor exploitation"), " in unorganized sectors where poverty, caste stigma, and lack of education create \"perpetual states of poverty\" with children robbed of childhood.")
        ),
        keyConcepts: [
            {
                title: "Tone: Empathetic yet Indignant",
                description: "\"Garbage to them is gold... But for a child it is even more.\""
            },
            {
                title: "Hyperbole",
                description: "\"Garbage to them is gold\"—exaggeration emphasizes desperate dependence."
            },
            {
                title: "Metaphor: Web of Poverty",
                description: "\"Vicious circle\" of middlemen and politicians traps them."
            },
            {
                title: "Juxtaposition",
                description: "Saheb's carefree plastic bag (freedom) vs. the heavy steel canister (servitude)."
            },
            {
                title: "Symbolism: Steel Canister",
                description: "Symbolizes loss of autonomy. \"Saheb is no longer his own master!\""
            }
        ],
        keywords: [
            { term: "Child labor exploitation", definition: "The illegal employment of children in hazardous industries." },
            { term: "Perpetual state of poverty", definition: "A cycle of poverty passed down through generations." },
            { term: "Stolen spring", definition: "Metaphor for lost childhood innocence." },
            { term: "Seemapuri", definition: "Spelling Trap: not Simapuri—Delhi slum settlement." },
            { term: "Firozabad", definition: "Spelling Trap: not Ferozeabad—bangle-making city." },
            { term: "Mukesh", definition: "Boy who dreams of being a mechanic." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Jung's 'Lost Spring' exposes how systemic poverty, caste discrimination, and illegal child labor create intergenerational traps.",
                question: "Extrapolation Point",
                answer: "Compare Saheb's loss of freedom to Sophie's economic entrapment in 'Going Places'—both working-class youth dream of escape but are 'earmarked' for predetermined futures, highlighting how class immobility crushes aspirations."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students write Saheb is happy working at the tea stall because he earns 800 rupees."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " The text states: \"His face, I see, has lost the carefree look.\" Economic necessity ≠ happiness.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Spirals of bangles—sunny gold, paddy green, royal blue... lie in mounds in unkempt yards.\""),
                    React.createElement("li", null, React.createElement("strong", null, "Olfactory:"), " \"We walk down stinking lanes choked with garbage.\"")
                )
            )
        )
    },
    {
        chapter: "Prose 3",
        title: "Deep Water",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " As a child, Douglas nearly drowns when a bully throws him into a YMCA pool; he experiences three terrifying descents."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Douglas hires an instructor who trains him methodically for months using a pulley system, teaching him to exhale underwater and kick."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " To ensure complete victory, Douglas swims across Lake Wentworth and Warm Lake, finally shouting: \"I had conquered my fear of water.\"")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Psychological narrative reflecting post-WWII anxieties. Douglas references FDR's quote: \"All we have to fear is fear itself,\" connecting personal trauma to national resilience.")
        ),
        keyConcepts: [
            {
                title: "Tone: Reflective and Triumphant",
                description: "\"The experience had a deep meaning for me... In death there is peace. There is terror only in the fear of death.\""
            },
            {
                title: "Repetition",
                description: "\"I went down, down, endlessly\"—emphasizes the endless horror."
            },
            {
                title: "Personification of Terror",
                description: "\"Terror that knows no understanding, terror that knows no control\"—fear becomes an autonomous force."
            },
            {
                title: "Symbolism: Pulley System",
                description: "Symbolizes systematic therapy and gradual healing—recovery is methodical."
            }
        ],
        keywords: [
            { term: "Hydrophobia", definition: "Extreme fear of water." },
            { term: "Systematic therapy", definition: "Methodical treatment of fear." },
            { term: "Y.M.C.A.", definition: "Spelling Trap: Young Men's Christian Association—use periods." },
            { term: "Yakima", definition: "Spelling Trap: not Yakama—Washington river/city." },
            { term: "Psychiatrist", definition: "Spelling Trap: not physchiatrist." },
            { term: "Conquering fear", definition: "The central theme of the chapter." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Douglas's narrative demonstrates that fear itself is the true enemy, and conquering trauma requires systematic desensitization.",
                question: "Extrapolation Point",
                answer: "Compare Douglas's methodical conquest of fear to Gandhi's strategic approach in 'Indigo'—both emphasize incremental progress (Douglas's pulley training vs. Gandhi's step-by-step civil disobedience), proving lasting change requires patience."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Douglas immediately overcomes fear after training."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He still has \"vestiges of the old terror\" in July. He swims lakes to finally conquer it. Recovery takes months.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"I opened my eyes and saw nothing but water—water that had a dirty yellow tinge to it.\""),
                    React.createElement("li", null, React.createElement("strong", null, "Tactile:"), " \"Those nine feet were more like ninety, and before I touched bottom my lungs were ready to burst.\"")
                )
            )
        )
    },
    {
        chapter: "Prose 4",
        title: "The Rattrap",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " A peddler philosophizes that \"the whole world is a big rattrap\" baiting people with riches, then steals 30 kronor from a crofter, becoming trapped himself."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " The ironmaster's daughter Edla insists the peddler stay for Christmas despite her father discovering the mistaken identity, treating him with dignity."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " The peddler returns the stolen money with a note signed \"Captain von Stahle\", explaining Edla's kindness \"raised him to captain\" and gave him power to clear himself.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Set in Sweden's mining region, this fairy-tale-style narrative explores themes of redemption and the transformative power of unconditional love.")
        ),
        keyConcepts: [
            {
                title: "Tone: Allegorical and Redemptive",
                description: "\"Since you have been so nice to me... I want to be nice to you, in return, as if I was a real captain.\""
            },
            {
                title: "Extended Metaphor",
                description: "The rattrap = the world's temptations and traps."
            },
            {
                title: "Irony",
                description: "The peddler lectures others about the \"world's rattrap\" while already trapped himself."
            },
            {
                title: "Symbolism: The Gift",
                description: "The rattrap left as a gift (containing the 30 kronor) symbolizes moral transformation."
            }
        ],
        keywords: [
            { term: "Redemption", definition: "Saving oneself from sin or error." },
            { term: "Ramsjö Ironworks", definition: "Spelling Trap: not Ramsjo." },
            { term: "Edla Willmansson", definition: "Spelling Trap: not Williamson." },
            { term: "Kronor", definition: "Spelling Trap: Swedish currency, not kroner." },
            { term: "Compassion", definition: "Sympathetic pity and concern for the sufferings of others." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Lagerlöf's allegorical tale argues that human compassion and unconditional respect can redeem even society's outcasts.",
                question: "Extrapolation Point",
                answer: "Compare Edla's redemptive kindness to Dr. Sadao's ethical dilemma in 'The Enemy'—both show compassion to 'undeserving', but Edla acts from pure empathy while Sadao struggles with conflicting duties."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think the peddler returns money because he fears arrest."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He returns it because Edla's kindness inspired moral transformation. He signs as \"Captain von Stahle\" because her respect elevated him.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"The big bellows groaned and the burning coal cracked.\""),
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"The fire boy... wore nothing but a long shirt... dripping with perspiration.\"")
                )
            )
        )
    },
    {
        chapter: "Prose 5",
        title: "Indigo",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Illiterate sharecropper Rajkumar Shukla persists in persuading Gandhi to visit Champaran to address the injustice of the indigo landlord system."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Thousands of peasants gather in support of Gandhi at court—\"the beginning of their liberation from fear\"—and the government is forced to drop charges."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Gandhi secures 25% compensation, but more importantly, landlords \"surrender part of their prestige,\" leading to the end of indigo sharecropping.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Documents Gandhi's ", React.createElement("strong", null, "first successful experiment with Satyagraha"), " in India (1917), proving non-violent civil disobedience could challenge colonial power.")
        ),
        keyConcepts: [
            {
                title: "Tone: Inspirational and Documentary",
                description: "\"The battle of Champaran is won,\" Gandhi exclaimed."
            },
            {
                title: "Repetition",
                description: "Shukla's persistence—\"Fix a date,\" he begged."
            },
            {
                title: "Symbolism: Peasant Gathering",
                description: "Peasants spontaneously gathering symbolizes collective awakening—liberation from fear."
            },
            {
                title: "Understatement",
                description: "Gandhi accepts 25% refund—strategic compromise, not weakness."
            }
        ],
        keywords: [
            { term: "Satyagraha", definition: "Truth force / Civil disobedience." },
            { term: "Champaran", definition: "Spelling Trap: Bihar district." },
            { term: "Rajkumar Shukla", definition: "Spelling Trap: not Raj Kumar." },
            { term: "Motihari", definition: "Spelling Trap: Champaran's capital city." },
            { term: "Self-reliance", definition: "Key theme of the chapter." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Gandhi's philosophy: 'freedom from fear is more important than legal justice for the poor.'",
                question: "Extrapolation Point",
                answer: "Compare Gandhi's self-reliance principle to Zitkala-Sa's forced assimilation—Gandhi chooses dignified resistance while Zitkala-Sa suffers cultural erasure."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Gandhi demanded only 25% refund from the start."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He asked for 50%. He accepted 25% to break the deadlock and make landlords surrender prestige.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"Morning found the town of Motihari black with peasants\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"The whole area throbbed with the activity of the investigators...\"")
                )
            )
        )
    },
    {
        chapter: "Prose 6",
        title: "Poets and Pancakes",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " The author works at Gemini Studios observing the makeup department and the office boy's frustration with Kothamangalam Subbu."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " English poet Stephen Spender visits, giving a baffling speech. Years later, the author discovers Spender was an ex-Communist."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " The author realizes Spender was welcomed because of his anti-Communist stance, matching the Boss's politics, not his poetry.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Satirizes the ideological confusion in 1950s Indian film studios, where Gandhian nationalism, anti-Communist paranoia, and Cold War politics coexisted.")
        ),
        keyConcepts: [
            {
                title: "Tone: Humorous and Satirical",
                description: "\"Truck-loads of pancake... hideous crimson hued monster.\""
            },
            {
                title: "Hyperbole",
                description: "\"Truck-loads of pancake\"—exaggerates makeup usage."
            },
            {
                title: "Irony",
                description: "Gemini Studios' \"national integration\" precedes government campaigns; they are clueless about Spender's politics."
            },
            {
                title: "Symbolism: The God That Failed",
                description: "The book symbolizes delayed enlightened—understanding Spender's visit years later."
            }
        ],
        keywords: [
            { term: "National integration", definition: "Unity in diversity." },
            { term: "Kothamangalam Subbu", definition: "Spelling Trap: No. 2 at Gemini." },
            { term: "Gemini Studios", definition: "Spelling Trap: not Gemeni." },
            { term: "Stephen Spender", definition: "Spelling Trap: English poet." },
            { term: "Anti-Communist paranoia", definition: "Fear of communism influencing the studio." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Asokamitran's satirical memoir exposes the ideological confusion and mediocrity of India's early film industry.",
                question: "Extrapolation Point",
                answer: "Compare Gemini Studios' superficial 'national integration' to the village unity in 'Indigo'—Gemini's is accidental, Gandhi's is purposeful."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Spender visited because he loved Gemini Studios' films."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He visited because of his anti-Communist politics, which aligned with the studio Boss.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"They were all incandescent lights, so you can imagine the fiery misery...\""),
                    React.createElement("li", null, React.createElement("strong", null, "Tactile:"), " \"The idea was to close every pore on the surface of the face...\"")
                )
            )
        )
    },
    {
        chapter: "Prose 7",
        title: "The Interview",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Silvester introduces the interview as a medium with polarized opinions—some see it as truth, others as intrusion."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Mukund Padmanabhan interviews Umberto Eco, who reveals he works in \"interstices\" (empty time spaces) and identifies as a professor first."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Eco explains the success of 'The Name of the Rose' as a mystery of timing and public appetite for difficult reading.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Explores the evolution of the interview and showcases Eco's intellect—bridging semiotics, medieval studies, and popular fiction.")
        ),
        keyConcepts: [
            {
                title: "Tone: Analytical (Part I) / Conversational (Part II)",
                description: "Silvester analyzes the medium; Eco chats wittily."
            },
            {
                title: "Metaphor: Thumbprints on his windpipe",
                description: "Saul Bellow's description of interviews as suffocating."
            },
            {
                title: "Symbolism: Interstices",
                description: "Empty spaces symbolize hidden productivity—Eco writes in elevator waits."
            }
        ],
        keywords: [
            { term: "Interstices", definition: "Empty time spaces." },
            { term: "Umberto Eco", definition: "Spelling Trap: not Echo." },
            { term: "Mukund Padmanabhan", definition: "Spelling Trap: Interviewer." },
            { term: "Semiotics", definition: "Spelling Trap: Study of signs." },
            { term: "Unwarranted intrusion", definition: "How some celebrities view interviews." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Interviews are simultaneously invasive and indispensable.",
                question: "Extrapolation Point",
                answer: "Compare Eco's identity struggle (novelist vs. academic) to the makeup artist's frustration in 'Poets and Pancakes'—both feel their primary work/identity is overshadowed."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Umberto Eco doesn't mind being called a novelist."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " He is bothered. He considers himself a university professor who writes novels on Sundays.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " Eco \"tells stories like a Chinese wise man\"."),
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " Mukund's written observation of Eco's intellectual presence.")
                )
            )
        )
    },
    {
        chapter: "Prose 8",
        title: "Going Places",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "3-Sentence Summary"),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Inciting Incident:"), " Sophie, a working-class teenager, fantasizes about opening a boutique or meeting Danny Casey, despite her friend Jansie's realism."),
                React.createElement("li", null, React.createElement("strong", null, "Climax:"), " Sophie tells her family she met Casey. She believes her own lie and waits for him at the canal."),
                React.createElement("li", null, React.createElement("strong", null, "Resolution:"), " Sophie waits alone; Danny never comes. She maintains the fantasy to cope with her reality.")
            ),
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Background Context"),
            React.createElement("p", { className: "mb-4" }, "Explores ", React.createElement("strong", null, "adolescent escapism"), " in working-class England. Sophie's fantasies reflect her desire to transcend her predetermined life of factory work.")
        ),
        keyConcepts: [
            {
                title: "Tone: Melancholic and Compassionate",
                description: "\"It is a hard burden to carry, this sadness...\""
            },
            {
                title: "Stream of Consciousness",
                description: "Sophie's internal monologue reveals her drift into fantasy."
            },
            {
                title: "Contrast",
                description: "Sophie's vibrant fantasies vs. her family's grimy reality."
            },
            {
                title: "Symbolism: Canal Bench",
                description: "The \"perfect place\" for lovers symbolizes romantic longing and isolation."
            }
        ],
        keywords: [
            { term: "Adolescent escapism", definition: "Retreating into fantasy to avoid reality." },
            { term: "Jansie", definition: "Spelling Trap: Sophie's realistic friend." },
            { term: "Geoff", definition: "Spelling Trap: Sophie's brother." },
            { term: "Danny Casey", definition: "Spelling Trap: Irish footballer." },
            { term: "Hero worship", definition: "Adoring a celebrity." }
        ],
        caseStudies: [
            {
                title: "Thematic Thesis",
                scenario: "Barton's narrative critiques adolescent escapism as both psychologically necessary and socially harmful.",
                question: "Extrapolation Point",
                answer: "Compare Sophie's fantasy to Charley's Third Level escapism—both flee unbearable presents, but Sophie's lies are transparently false while Charley's are ambiguous."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Misconception"),
                React.createElement("p", null, React.createElement("strong", null, "Misconception:"), " Students think Sophie actually met Danny Casey."),
                React.createElement("p", null, React.createElement("strong", null, "Clarification:"), " The encounter is pure fantasy. Geoff disbelieves it, and she waits alone. She constructs false memories to cope.")
            ),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Sensory Detail Hunt"),
                React.createElement("ul", { className: "list-disc pl-5" },
                    React.createElement("li", null, React.createElement("strong", null, "Visual:"), " \"The evening had already blacked in the windows... room was steamy.\""),
                    React.createElement("li", null, React.createElement("strong", null, "Auditory:"), " \"There was the sound of applause as the world rose to greet them.\"")
                )
            )
        )
    }
];
