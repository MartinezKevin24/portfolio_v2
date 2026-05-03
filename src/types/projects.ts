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

export interface ProjectDetail {
  slug: string;
  name: string;
  icon: string;
  url: string;
  role: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: Highlight[];
    en: Highlight[];
  };
  tech: { name: string; cssClass: string }[];
  images: {
    src: string;
    alt: string;
    isMobile?: boolean;
  }[];
  galleryText?: {
    es: string;
    en: string;
  };
  gallery?: {
    src: string;
    alt: string;
    caption?: {
      es: string;
      en: string;
    };
  }[];
}

export type { ProjectPreview, ProjectDetail };
