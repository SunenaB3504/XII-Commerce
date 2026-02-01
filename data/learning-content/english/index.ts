import { LearningModule } from "../../../types";
import { flamingoProseModules } from "./flamingo-prose";
import { flamingoPoetryModules } from "./flamingo-poetry";
import { vistasModules } from "./vistas";
import { writingSkillsModules } from "./writing-skills";
import { readingSkillsModules } from "./reading-skills";

export const englishLearningModules: LearningModule[] = [
    ...readingSkillsModules,
    ...writingSkillsModules,
    ...flamingoProseModules,
    ...flamingoPoetryModules,
    ...vistasModules
];
