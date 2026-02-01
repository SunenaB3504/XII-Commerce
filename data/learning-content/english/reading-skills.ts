import { LearningModule } from "../../../types";
import React from "react";

export const readingSkillsModules: LearningModule[] = [
    {
        chapter: "Reading Skill 1",
        title: "Comprehension Strategies",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Mastering the Unseen Passage"),
            React.createElement("p", { className: "mb-4" }, "The Reading Section (22 Marks) tests your ability to understand, interpret, and analyze unknown texts. It usually consists of two passages: one Discursive/Literary and one Case-Based."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Skimming:"), " Read quickly to get the main idea/gist."),
                React.createElement("li", null, React.createElement("strong", null, "Scanning:"), " Look for specific keywords (dates, names, capitalized words) to answer direct questions."),
                React.createElement("li", null, React.createElement("strong", null, "Close Reading:"), " Read complex sentences slowly to understand nuances/inference.")
            )
        ),
        keyConcepts: [
            {
                title: "Types of Questions",
                content: "1. Factual (Directly in text) \n2. Inference (Read between lines) \n3. Vocabulary (Synonyms/Antonyms) \n4. Analysis (Tone, Title, Purpose)."
            },
            {
                title: "Handling MCQ's",
                content: "Use the process of elimination. If two options are very similar, check for a subtle difference (e.g., 'always' vs 'often')."
            }
        ],
        keywords: [
            { term: "Inference", definition: "A conclusion reached on the basis of evidence and reasoning, not explicitly stated." },
            { term: "Gist", definition: "The essential meaning or substance of the text." }
        ],
        caseStudies: [],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("p", null, "Always read the questions *before* the passage (or at least skim them). This gives you a purpose for reading.")
            )
        )
    },
    {
        chapter: "Reading Skill 2",
        title: "Literary Devices & Tone",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Identifying nuances"),
            React.createElement("p", { className: "mb-4" }, "Passage 1 often tests literary appreciation. You must identify the author's tone and literary devices used."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Irony:"), " When the opposite of what is expected happens (e.g., 'Technology connects us but we feel isolated')."),
                React.createElement("li", null, React.createElement("strong", null, "Metaphor:"), " Direct comparison (e.g., 'The world is a stage')."),
                React.createElement("li", null, React.createElement("strong", null, "Sarcasm:"), " Mocking tone."),
                React.createElement("li", null, React.createElement("strong", null, "Hyperbole:"), " Exaggeration for effect.")
            )
        ),
        keyConcepts: [
            {
                title: "Common Tones",
                content: "Critical, Satirical, Humorous, Nostalgic, Ironic, informative, Analytical, Optimistic, Pessimistic."
            },
            {
                title: "Identifying Tone",
                content: "Look at the adjectives and verbs. Are they positive ('vibrant', 'soar') or negative ('gloomy', 'plummet')?"
            }
        ],
        keywords: [
            { term: "Dissonance", definition: "Lack of harmony; clash." },
            { term: "Juxtaposition", definition: "Placing two things together to show contrast." }
        ],
        caseStudies: [
            {
                title: "SQP Example",
                scenario: "Passage: 'For all our efforts to stay connected, we find ourselves increasingly isolated.'",
                analysis: "Device: Irony (Connected yet isolated)."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("p", null, "If the author asks a question and answers it immediately, it's a 'Rhetorical Question' used for effect.")
            )
        )
    },
    {
        chapter: "Reading Skill 3",
        title: "Case-Based Passages",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Data Interpretation"),
            React.createElement("p", { className: "mb-4" }, "Passage 2 is factual and often includes a chart, graph, or table. It tests your ability to interpret data."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Analyze the Data:"), " Look at the highest/lowest values, trends (increasing/decreasing)."),
                React.createElement("li", null, React.createElement("strong", null, "Compare:"), " Compare the text with the visual data."),
                React.createElement("li", null, React.createElement("strong", null, "Objective Questions:"), " These are usually specific and data-driven.")
            )
        ),
        keyConcepts: [
            {
                title: "Visual Aids",
                content: "Bar graphs, Pie charts, Line graphs. Understand the X and Y axes."
            }
        ],
        keywords: [
            { term: "Trend", definition: "A general direction in which something is developing or changing." },
            { term: "Demographic", definition: "Statistical data relating to the population/groups." }
        ],
        caseStudies: [],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("p", null, "Don't ignore the keys/legends in charts. They tell you what each bar/slice represents.")
            )
        )
    }
];
