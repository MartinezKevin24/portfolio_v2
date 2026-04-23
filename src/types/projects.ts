type ProjectPreview = {
  name: string;
  description: { es: string; en: string };
  image_desktop: string;
  image_mobile: string;
  tech_stack: string[];
  icons: string[];
  url: string;
};

type ProjectDetail = {
  name: string;
  description: { es: string; en: string };
  image_desktop: string;
  image_mobile: string;
  tech_stack: string[];
  url: string;
  role: { es: string; en: string };
  images: string[];
  highlights: { es: string[]; en: string[] };
};

export type { ProjectPreview, ProjectDetail };
