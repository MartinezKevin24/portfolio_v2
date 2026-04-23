type ProjectPreview = {
  name: string;
  slug?: string;
  description: { es: string; en: string };
  image_desktop: string;
  image_mobile: string;
  tech_stack: string[];
  icons: string[];
  url?: string;
  classes_images: string[];
  colors: [string, string];
  external_url?: string;
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
