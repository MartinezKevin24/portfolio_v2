import type { es } from "./es";
import { enCta } from "./en/cta";
import { enMeta } from "./en/meta";
import { enPresentation } from "./en/presentation";
import { enProject } from "./en/project";
import { enResume } from "./en/resume";

export const en = {
  ...enMeta,
  ...enPresentation,
  ...enCta,
  ...enResume,
  ...enProject,
} satisfies Record<keyof typeof es, string>;
