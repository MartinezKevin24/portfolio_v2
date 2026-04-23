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
      es: "Desarrollador Fullstack",
      en: "Fullstack Developer",
    },
    description: {
      es: "Plataforma e-commerce de entretenimiento retro y moderno — videojuegos, películas, música, coleccionables y más. Responsable del desarrollo completo de la nueva plataforma desktop con Next.js 14, mientras se daba mantenimiento a la plataforma anterior en React. Ambas plataformas compartían una librería de componentes privada desarrollada con Webpack y publicada en GitLab Package Registry.",
      en: "E-commerce platform for retro and modern entertainment — video games, movies, music, collectibles, and more. Responsible for the full development of the new desktop platform with Next.js 14, while maintaining the legacy React platform. Both platforms shared a private component library built with Webpack and published to GitLab Package Registry.",
    },
    highlights: {
      es: [
        "Construí la nueva plataforma desde cero con Next.js 14 App Router, Server Components y Server Actions",
        "Implementé SEO técnico avanzado: SSR/ISR, metatags dinámicos por producto, sitemap automatizado y datos estructurados JSON-LD (Product, BreadcrumbList)",
        "Optimización de Core Web Vitals (LCP, CLS, INP) con lazy loading, next/image y code splitting",
        "Desarrollé una librería de componentes React privada con Webpack, publicada en GitLab Package Registry y compartida entre plataformas desktop y mobile",
        "Mantuve y mejoré la plataforma legacy en React puro durante la transición",
        "Integré Redis para caché de catálogo y gestión de estado global con Jotai",
        "Trabajo bajo metodología SCRUM con GitFlow y revisiones de código continuas",
      ],
      en: [
        "Built the new platform from scratch with Next.js 14 App Router, Server Components, and Server Actions",
        "Implemented advanced technical SEO: SSR/ISR, per-product dynamic metatags, automated sitemap, and JSON-LD structured data (Product, BreadcrumbList)",
        "Core Web Vitals optimization (LCP, CLS, INP) via lazy loading, next/image, and code splitting",
        "Built a private React component library with Webpack, published to GitLab Package Registry and shared across desktop and mobile platforms",
        "Maintained and improved the legacy pure React platform during the transition",
        "Integrated Redis for catalog caching and global state management with Jotai",
        "Worked under SCRUM methodology with GitFlow and continuous code reviews",
      ],
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redis", "Jotai", "Node.js", "Webpack"],
    images: [
      {
        src: "/images/projects/vintagestock/desktop_preview.png",
        alt: "Vintage Stock desktop",
      },
      {
        src: "/images/projects/vintagestock/mobile_preview.png",
        alt: "Vintage Stock mobile",
      },
    ],
  },
  {
    slug: "lacardio",
    name: "La Cardio",
    url: "",
    role: {
      es: "Desarrollador Front-End",
      en: "Front-End Developer",
    },
    description: {
      es: "Sistema de monitoreo IoT en tiempo real para una clínica médica. Permite registrar pacientes y dispositivos, parametrizar umbrales de alerta, generar reportes y visualizar en tiempo real el comportamiento del paciente en camilla, con un sistema de alarmas automáticas según el nivel de peligrosidad de su posición.",
      en: "Real-time IoT monitoring system for a medical clinic. Supports patient and device registration, alert threshold parameterization, report generation, and live visualization of patient behavior on the bed, with an automatic alarm system triggered by position risk level.",
    },
    highlights: {
      es: [
        "Dashboard en tiempo real con MQTT sobre WebSockets para monitoreo continuo de posición del paciente",
        "Sistema de alarmas automáticas con tres niveles de peligrosidad según la posición en camilla",
        "Módulo de registro y parametrización de pacientes, dispositivos y umbrales de alerta",
        "Generación de reportes médicos de pacientes, dispositivos y comportamientos registrados",
        "Animaciones y transiciones CSS para visualización clara del estado del paciente",
        "Gestión de estado reactiva con RxJS (Angular)",
        "Diseño completo de la interfaz — desde wireframes hasta implementación final",
      ],
      en: [
        "Real-time dashboard with MQTT over WebSockets for continuous patient position monitoring",
        "Automatic alarm system with three danger levels based on bed position",
        "Module for patient, device, and alert threshold registration and parameterization",
        "Medical report generation for patients, devices, and recorded behaviors",
        "CSS animations and transitions for clear patient status visualization",
        "Reactive state management with RxJS (Angular)",
        "Full UI design ownership — from wireframes to final implementation",
      ],
    },
    tech: ["Angular", "TypeScript", "RxJS", "MQTT", "Tailwind CSS", "CSS"],
    images: [
      {
        src: "/images/projects/lacardio/desktop_preview.jpg",
        alt: "La Cardio dashboard",
      },
      {
        src: "/images/projects/lacardio/preview_2.jpg",
        alt: "La Cardio monitoring view",
      },
    ],
  },
  {
    slug: "monitoreo-hidrico",
    name: "Monitoreo Hídrico",
    url: "https://m-hidrico.unicartagena.edu.co/",
    role: {
      es: "Desarrollador Front-End",
      en: "Front-End Developer",
    },
    description: {
      es: "Sistema de monitoreo ambiental de cuerpos de agua en el departamento de Bolívar, Colombia. Conecta dispositivos hídricos IoT en tiempo real vía MQTT y visualiza métricas ambientales. Entregado con SEO técnico completo para garantizar visibilidad y acceso público al proyecto.",
      en: "Environmental monitoring system for water bodies in the Bolívar department, Colombia. Connects water IoT devices in real time via MQTT and visualizes environmental metrics. Delivered with full technical SEO to ensure public visibility and access.",
    },
    highlights: {
      es: [
        "Conexión en tiempo real con dispositivos hídricos IoT vía MQTT",
        "Visualización de métricas ambientales de cuerpos de agua del departamento de Bolívar",
        "SEO técnico completo: sitemap automatizado, metatags dinámicos y datos estructurados",
        "Gestión de estado con Recoil para manejo eficiente de datos en tiempo real",
        "API routes con Node.js integradas en Next.js para comunicación con dispositivos",
        "Interfaz responsive con Tailwind CSS y animaciones CSS personalizadas",
      ],
      en: [
        "Real-time connection to water IoT devices via MQTT",
        "Environmental metrics visualization for water bodies in the Bolívar department",
        "Full technical SEO: automated sitemap, dynamic metatags, and structured data",
        "State management with Recoil for efficient real-time data handling",
        "Node.js API routes integrated in Next.js for device communication",
        "Responsive UI with Tailwind CSS and custom CSS animations",
      ],
    },
    tech: ["Next.js", "Node.js", "Recoil", "MQTT", "Tailwind CSS", "CSS"],
    images: [
      {
        src: "/images/projects/monitoreo_hidrico/desktop_preview.png",
        alt: "Monitoreo Hídrico desktop",
      },
      {
        src: "/images/projects/monitoreo_hidrico/mobile_preview.png",
        alt: "Monitoreo Hídrico mobile",
      },
    ],
  },
];
