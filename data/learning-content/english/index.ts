import { LearningModule } from "../../../types";
import { flamingoProseModules } from "./flamingo-prose";
import { flamingoPoetryModules } from "./flamingo-poetry";
import { vistasModules } from "./vistas";

export const englishLearningModules: LearningModule[] = [
    ...flamingoProseModules,
    ...flamingoPoetryModules,
    ...vistasModules
];
