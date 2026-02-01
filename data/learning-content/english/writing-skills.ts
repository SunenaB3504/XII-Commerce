import { LearningModule } from "../../../types";
import React from "react";

export const writingSkillsModules: LearningModule[] = [
    {
        chapter: "Writing Skill 1",
        title: "Notice Writing",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Format & Purpose"),
            React.createElement("p", { className: "mb-4" }, "A Notice is a formal means of communication used to announce something to a specific group of people. It must be brief, precise, and enclosed in a box."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Word Limit:"), " 50 words"),
                React.createElement("li", null, React.createElement("strong", null, "Marks:"), " 4 Marks (1 Format + 2 Content + 1 Accuracy)"),
                React.createElement("li", null, React.createElement("strong", null, "Mandatory:"), " Must be drawn inside a BOX.")
            )
        ),
        keyConcepts: [
            {
                title: "Format Checklist",
                content: "1. Name of Issuing Organization (Center) \n2. The word 'NOTICE' (Center, Caps) \n3. Date (Left Aligned) \n4. Heading/Title (Center, Catchy) \n5. Body (What, When, Where, Whom, Whom to contact) \n6. Signature, Name, Designation (Left)."
            },
            {
                title: "The 5 W's",
                content: "What (Event), Where (Venue), When (Date & Time), Who (Target Audience), Whom (Contact Person)."
            }
        ],
        keywords: [
            { term: "Issuing Authority", definition: "The organization/school releasing the notice." },
            { term: "Pseudo-name", definition: "Use names like ABC School if none is given." }
        ],
        caseStudies: [
            {
                title: "Example Prompt",
                scenario: "You are the Secretary of the Science Club. Draft a notice for a Science Fair.",
                analysis: "Key Inclusion: Include Date, Time, Venue of the fair, and deadline for project submission."
            }
        ],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Common Mistakes"),
                React.createElement("p", null, "1. Forgetting the BOX. \n2. Using first person ('I'). Always use third person ('This is to inform...'). \n3. Exceeding 50 words.")
            )
        )
    },
    {
        chapter: "Writing Skill 2",
        title: "Invitations & Replies",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Types of Invitations"),
            React.createElement("p", { className: "mb-4" }, "Invitations can be Formal (Card or Letter) or Informal. Replies follow the same tone."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Formal Card:"), " For mass gatherings (Weddings, Annual Days). Third Person. Standard phrases."),
                React.createElement("li", null, React.createElement("strong", null, "Formal Letter:"), " For VIPs/Judges. Standard letter format."),
                React.createElement("li", null, React.createElement("strong", null, "Informal:"), " To friends/family. First Person ('I'). Warm tone.")
            )
        ),
        keyConcepts: [
            {
                title: "Formal Card Format",
                content: "Center Aligned. Host Name -> Standard Expression (request the pleasure...) -> Event -> Date/Time/Venue -> RSVP."
            },
            {
                title: "Replies",
                content: "Formal Reply: Third person ('Mr. X thanks Mr. Y...'), No signature. \nInformal Reply: First person ('I am happy to...')."
            }
        ],
        keywords: [
            { term: "RSVP", definition: "Repondez s'il vous plait (Please Respond) - contact details." },
            { term: "Solicit", definition: "To ask for or request (e.g., 'solicit your benign presence')." }
        ],
        caseStudies: [],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Tip"),
                React.createElement("p", null, "Never use signatures in a Formal Card Invitation.")
            )
        )
    },
    {
        chapter: "Writing Skill 3",
        title: "Letters (Job App & Editor)",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Formal Letters"),
            React.createElement("p", { className: "mb-4" }, "In Class 12, mainly Job Applications (with Bio-Data) and Letters to the Editor are tested."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Format:"), " Sender's Add -> Date -> Receiver's Rank/Add -> Subject -> Salutation -> Body -> Subscription."),
                React.createElement("li", null, React.createElement("strong", null, "Bio-Data:"), " Essential for Job Application. Includes Name, DOB, Quals, Exp, References.")
            )
        ),
        keyConcepts: [
            {
                title: "Job Application Body",
                content: "Para 1: Source of info (seen in newspaper). \nPara 2: Offer candidature, brief skills. \nPara 3: Closing & enclosure of Bio-data."
            },
            {
                title: "Letter to Editor Body",
                content: "Para 1: 'Through the columns of your esteemed daily...' \nPara 2: Problem/Issue details. \nPara 3: Suggestions/Hope for authority action."
            }
        ],
        keywords: [
            { term: "Curriculum Vitae (CV)", definition: "Summary of qualifications and experience." },
            { term: "Encl.", definition: "Enclosures (stated at the end)." }
        ],
        caseStudies: [],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Bio-Data Checklist"),
                React.createElement("p", null, "Name, Father's Name, DOB, Address, Phone, Email, Educational Qualifications (Table), Experience, References (2).")
            )
        )
    },
    {
        chapter: "Writing Skill 4",
        title: "Article & Report Writing",
        overview: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-lg font-bold mb-2" }, "Long Composition"),
            React.createElement("p", { className: "mb-4" }, "5 Marks. 120-150 words."),
            React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
                React.createElement("li", null, React.createElement("strong", null, "Article:"), " Expresses opinion/analysis. Title + Byline. Intro -> Causes/Effects -> Solutions -> Conclusion."),
                React.createElement("li", null, React.createElement("strong", null, "Report:"), " Factual account of an event. Headline + Byline. What/Where/When -> Sequence of events -> Participant reaction -> Conclusion.")
            )
        ),
        keyConcepts: [
            {
                title: "Article Structure",
                content: "Catchy Title -> By [Name] -> Para 1 (Intro/Hook) -> Para 2 (Analysis/Pros/Cons) -> Para 3 (Suggestions/Conclusion)."
            },
            {
                title: "Report Structure",
                content: "Title -> By [Name], [Designation] -> [Place], [Date] -> Para 1 (Summary of event) -> Para 2 (Details) -> Para 3 (Vote of thanks/impact)."
            }
        ],
        keywords: [
            { term: "Byline", definition: "Line stating who wrote the article/report." },
            { term: "Coherence", definition: "Logical flow of ideas." }
        ],
        caseStudies: [],
        quickRevision: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "mb-4" },
                React.createElement("h4", { className: "font-bold text-teal-600 mb-2" }, "Difference"),
                React.createElement("p", null, "Reports are Past Tense (usually). Articles can be Present/Future Tense.")
            )
        )
    }
];
