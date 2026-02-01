import { QuestionPaper } from "../../types";
import { physicalEducationSamplePaper2026Q1To10 } from "./sample-paper-2026-q1-10";
import { physicalEducationSamplePaper2026Q11To15 } from "./sample-paper-2026-q11-15";
import { physicalEducationSamplePaper2026Q16To20 } from "./sample-paper-2026-q16-20";
import { physicalEducationSamplePaper2026Q21To25 } from "./sample-paper-2026-q21-25";
import { physicalEducationSamplePaper2026Q26To30 } from "./sample-paper-2026-q26-30";
import { physicalEducationSamplePaper2026Q31To35 } from "./sample-paper-2026-q31-35";
import { physicalEducationSamplePaper2026Q36To37 } from "./sample-paper-2026-q36-37";

export const physicalEducationSQP2025: QuestionPaper = {
    id: "pe-sqp-2025-26",
    name: "CBSE Sample Paper 2025-26",
    year: "2025-26",
    subject: "physical-education",
    questions: [
        ...physicalEducationSamplePaper2026Q1To10,
        ...physicalEducationSamplePaper2026Q11To15,
        ...physicalEducationSamplePaper2026Q16To20,
        ...physicalEducationSamplePaper2026Q21To25,
        ...physicalEducationSamplePaper2026Q26To30,
        ...physicalEducationSamplePaper2026Q31To35,
        ...physicalEducationSamplePaper2026Q36To37
    ]
};





