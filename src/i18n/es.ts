import { esCta } from "./es/cta";
import { esMeta } from "./es/meta";
import { esPresentation } from "./es/presentation";
import { esProject } from "./es/project";
import { esResume } from "./es/resume";

export const es = {
  ...esMeta,
  ...esPresentation,
  ...esCta,
  ...esResume,
  ...esProject,
} as const;
