export interface Project {
  slug: string;
  name: string;
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
    es: string[];
    en: string[];
  };
  tech: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "vintagestock",
    name: "Vintage Stock",
    url: "https://vintagestock.com",
    role: {
      es: "Desarrollador Front-End",
      en: "Front-End Developer",
    },
    description: {
      es: "Plataforma e-commerce de entretenimiento retro y moderno — videojuegos, películas, música, coleccionables y más. Responsable del desarrollo de nuevas features, mantenimiento del sitio y mejoras de rendimiento y accesibilidad.",
      en: "E-commerce platform for retro and modern entertainment — video games, movies, music, collectibles, and more. Responsible for new feature development, site maintenance, and performance and accessibility improvements.",
    },
    highlights: {
      es: [
        "Desarrollo con Next.js, optimización de renderizado SSR/SSG por tipo de página",
        "Implementación de estándares de accesibilidad WCAG 2.1 (AA): navegación por teclado, ARIA labels, contraste de color",
        "Integración de Redis para caché de datos de catálogo y reducción de carga en APIs",
        "Gestión de estado global con átomos (Jotai) para carrito, filtros y preferencias de usuario",
        "Migración y mantenimiento del sistema de estilos con Tailwind CSS",
        "Desarrollo de nuevas secciones: Trading Cards, Posters, búsqueda avanzada",
        "Optimización de performance: lazy loading, code splitting, mejoras en Core Web Vitals",
      ],
      en: [
        "Built with Next.js, optimizing SSR/SSG rendering per page type",
        "Implemented WCAG 2.1 (AA) accessibility standards: keyboard navigation, ARIA labels, color contrast",
        "Redis integration for catalog data caching, reducing API load",
        "Global state management with atoms (Jotai) for cart, filters, and user preferences",
        "Migration and maintenance of the styling system with Tailwind CSS",
        "Developed new sections: Trading Cards, Posters, advanced search",
        "Performance optimization: lazy loading, code splitting, Core Web Vitals improvements",
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redis",
      "Jotai",
      "WCAG 2.1",
    ],
    images: [
      {
        src: "/images/projects/vintagestock-home.png",
        alt: "Vintage Stock homepage",
      },
      {
        src: "/images/projects/vintagestock-catalog.png",
        alt: "Vintage Stock product catalog",
      },
      {
        src: "/images/projects/vintagestock-mobile.png",
        alt: "Vintage Stock mobile view",
      },
    ],
  },
];
