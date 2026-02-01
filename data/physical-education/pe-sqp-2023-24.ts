import { QuestionPaper } from "../../types";
import { peSamplePaper2024Q1To10 } from "./pe-sample-paper-2023-24-q1-10";
import { peSamplePaper2024Q11To18 } from "./pe-sample-paper-2023-24-q11-18";
import { peSamplePaper2024Q19To24 } from "./pe-sample-paper-2023-24-q19-24";
import { peSamplePaper2024Q25To30 } from "./pe-sample-paper-2023-24-q25-30";
import { peSamplePaper2024Q31To33 } from "./pe-sample-paper-2023-24-q31-33";
import { peSamplePaper2024Q34To37 } from "./pe-sample-paper-2023-24-q34-37";

export const physicalEducationSQP2023: QuestionPaper = {
    id: "pe-sqp-2023-24",
    name: "CBSE Sample Paper 2023-24",
    year: "2023-24",
    subject: "physical-education",
    questions: [
        ...peSamplePaper2024Q1To10,
        ...peSamplePaper2024Q11To18,
        ...peSamplePaper2024Q19To24,
        ...peSamplePaper2024Q25To30,
        ...peSamplePaper2024Q31To33,
        ...peSamplePaper2024Q34To37
    ]
};
