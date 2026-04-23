import type { es } from "./es";
import { enCta } from "./en/cta";
import { enMeta } from "./en/meta";
import { enPresentation } from "./en/presentation";
import { enProject } from "./en/project";
import { enResume } from "./en/resume";
import { enNav } from "./en/nav";
export const en = {
  ...enMeta,
  ...enPresentation,
  ...enCta,
  ...enResume,
  ...enProject,
  ...enNav,
} satisfies Record<keyof typeof es, string>;
