import type { ProjectDetail } from "../types/projects";

export const projects: ProjectDetail[] = [
  {
    slug: "vintagestock",
    name: "Vintage Stock",
    url: "https://vintagestock.com",
    icon: "/images/projects/vintagestock/vintage_icon.png",
    role: {
      es: "Desarrollador Fullstack",
      en: "Fullstack Developer",
    },
    description: {
      es: "Plataforma e-commerce de entretenimiento retro y moderno — videojuegos, películas, música, coleccionables y más. Responsable del desarrollo completo de la nueva plataforma desktop con Next.js, mientras se daba mantenimiento a la plataforma anterior en React. Ambas plataformas compartían una librería de componentes privada desarrollada con Webpack y publicada en GitLab Package Registry.",
      en: "E-commerce platform for retro and modern entertainment — video games, movies, music, collectibles, and more. Responsible for the full development of the new desktop platform with Next.js, while maintaining the legacy React platform. Both platforms shared a private component library built with Webpack and published to GitLab Package Registry.",
    },
    highlights: {
      es: [
        {
          title: "Nueva plataforma Next.js",
          description: "Construida desde cero con App Router, Server Components y Server Actions para máximo rendimiento.",
        },
        {
          title: "SEO Técnico Avanzado",
          description: "SSR/ISR, metatags dinámicos, sitemap automatizado y datos estructurados JSON-LD.",
        },
        {
          title: "Core Web Vitals",
          description: "Optimización de LCP, CLS e INP con lazy loading, next/image y code splitting.",
        },
        {
          title: "Librería de Componentes",
          description: "Librería React privada con Webpack en la plataforma legacy, publicada en GitLab Package Registry y compartida entre desktop y mobile.",
        },
        {
          title: "Mantenimiento Legacy",
          description: "Mantenimiento y mejoras a la plataforma anterior en React puro durante la transición a Next.js.",
        },
        {
          title: "Caché con Redis",
          description: "Reducción de tiempos de carga del catálogo mediante caché Redis y estado global con Jotai.",
        },
        {
          title: "Accesibilidad WCAG 2",
          description: "Monitoreo y corrección de todos los errores de accesibilidad garantizando cumplimiento en ambas plataformas.",
        },
        {
          title: "SCRUM & GitFlow",
          description: "Desarrollo ágil con metodología SCRUM, GitFlow y revisiones de código continuas en equipo.",
        },
      ],
      en: [
        {
          title: "Next.js Platform",
          description: "Built from scratch with App Router, Server Components, and Server Actions for maximum performance.",
        },
        {
          title: "Advanced Technical SEO",
          description: "SSR/ISR, dynamic metatags, automated sitemap, and JSON-LD structured data.",
        },
        {
          title: "Core Web Vitals",
          description: "LCP, CLS, and INP optimization via lazy loading, next/image, and code splitting.",
        },
        {
          title: "Component Library",
          description: "Private React library with Webpack on the legacy platform, published to GitLab Package Registry and shared across desktop and mobile.",
        },
        {
          title: "Legacy Maintenance",
          description: "Maintained and improved the previous pure React platform during the transition to Next.js.",
        },
        {
          title: "Redis Caching",
          description: "Reduced catalog load times through Redis caching and global state management with Jotai.",
        },
        {
          title: "WCAG 2 Accessibility",
          description: "Monitored and resolved all accessibility issues ensuring compliance across both platforms.",
        },
        {
          title: "SCRUM & GitFlow",
          description: "Agile development with SCRUM methodology, GitFlow, and continuous code reviews.",
        },
      ],
    },
    tech: [
      { name: "Next.js", cssClass: "tech-nextjs" },
      { name: "React", cssClass: "tech-react" },
      { name: "TypeScript", cssClass: "tech-typescript" },
      { name: "Tailwind CSS", cssClass: "tech-tailwind" },
      { name: "Redis", cssClass: "tech-redis" },
      { name: "Jotai", cssClass: "tech-jotai" },
      { name: "Node.js", cssClass: "tech-node" },
      { name: "Webpack", cssClass: "tech-default" },
    ],
    images: [
      {
        src: "/images/projects/vintagestock/mobile_screen_complete.png",
        alt: "Vintage Stock mobile complete page",
        isMobile: true,
      },
      {
        src: "/images/projects/vintagestock/desktop_preview.png",
        alt: "Vintage Stock desktop",
        isMobile: false,
      },
    ],
    galleryText: {
      es: "Responsable del frontend, alineando diseño y tecnología mediante decisiones técnicas estratégicas. Implementé soluciones escalables con arquitectura limpia, optimizando rendimiento y SEO para soportar el crecimiento del producto.",
      en: "Responsible for the frontend, aligning design and technology through strategic technical decisions. Implemented scalable solutions with clean architecture, optimizing performance and SEO to support product growth.",
    },
    gallery: [
      {
        src: "/images/projects/vintagestock/products_list.png",
        alt: "Vintage Stock product list page",
        caption: {
          es: "Catálogo optimizado para exploración rápida: filtros en tiempo real, búsqueda integrada y scroll infinito que reduce fricción y mejora la navegación en grandes volúmenes de productos.",
          en: "Catalog optimized for fast exploration: real-time filters, integrated search, and infinite scroll that reduces friction and improves navigation across large product volumes.",
        },
      },
      {
        src: "/images/projects/vintagestock/product_detail.png",
        alt: "Vintage Stock product detail page",
        caption: {
          es: "Página de producto diseñada para convertir y posicionar: SSR + datos estructurados para SEO, junto con disponibilidad en tiendas, geolocalización y compra directa, creando una experiencia rápida, completa y orientada al usuario.",
          en: "Product page designed to convert and rank: SSR + structured data for SEO, alongside store availability, geolocation, and direct purchase — creating a fast, complete, user-oriented experience.",
        },
      },
      {
        src: "/images/projects/vintagestock/shopping_cart.png",
        alt: "Vintage Stock shopping cart page",
        caption: {
          es: "Carrito diseñado para facilitar el proceso de compra: edición en tiempo real, wishlist integrada y cálculo automático de totales, impuestos y descuentos, ofreciendo transparencia y control al usuario antes del flujo de pago.",
          en: "Cart designed to streamline the purchase process: real-time editing, integrated wishlist, and automatic calculation of totals, taxes, and discounts — giving users full transparency and control before checkout.",
        },
      },
      {
        src: "/images/projects/vintagestock/locations.png",
        alt: "Vintage Stock locations list page",
        caption: {
          es: "Exploración de tiendas simplificada: mapa interactivo con todas las sucursales y listado con búsqueda, acceso a direcciones y contacto inmediato, mejorando la accesibilidad del usuario.",
          en: "Simplified store exploration: interactive map with all locations and a searchable list, with instant access to directions and contact — improving user accessibility.",
        },
      },
      {
        src: "/images/projects/vintagestock/store_detail.png",
        alt: "Vintage Stock store detail page",
        caption: {
          es: "Toda la información de la tienda en un solo lugar: ubicación, horarios, contacto e inventario disponible, con accesos directos para navegar, comunicarse o explorar productos.",
          en: "All store information in one place: location, hours, contact, and available inventory — with quick access to navigate, get in touch, or browse products.",
        },
      },
    ],
  },
  {
    slug: "lacardio",
    name: "La Cardio",
    icon: "/images/projects/lacardio/lacardio_icon.png",
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
        {
          title: "Dashboard en Tiempo Real",
          description: "MQTT sobre WebSockets para monitoreo continuo de la posición del paciente en cama.",
        },
        {
          title: "Sistema de Alarmas",
          description: "Alarmas automáticas con tres niveles de peligrosidad según la posición del paciente en camilla.",
        },
        {
          title: "Registro y Parámetros",
          description: "Módulo para registrar pacientes, dispositivos y configurar umbrales de alerta personalizados.",
        },
        {
          title: "Reportes Médicos",
          description: "Generación de reportes detallados de pacientes, dispositivos y comportamientos registrados.",
        },
        {
          title: "Animaciones de Estado",
          description: "Animaciones y transiciones CSS para visualización clara y en tiempo real del estado del paciente.",
        },
        {
          title: "Estado Reactivo RxJS",
          description: "Gestión de estado reactiva con RxJS en Angular para manejo eficiente de datos en tiempo real.",
        },
        {
          title: "Diseño UI Completo",
          description: "Responsable del diseño completo, desde wireframes hasta la implementación final de la interfaz.",
        },
      ],
      en: [
        {
          title: "Real-Time Dashboard",
          description: "MQTT over WebSockets for continuous patient position monitoring on the bed.",
        },
        {
          title: "Alarm System",
          description: "Automatic alarms with three danger levels based on the patient's bed position.",
        },
        {
          title: "Registration & Parameters",
          description: "Module for patient and device registration and custom alert threshold configuration.",
        },
        {
          title: "Medical Reports",
          description: "Detailed report generation for patients, devices, and recorded behaviors.",
        },
        {
          title: "Status Animations",
          description: "CSS animations and transitions for clear real-time visualization of patient status.",
        },
        {
          title: "Reactive State RxJS",
          description: "Reactive state management with RxJS in Angular for efficient real-time data handling.",
        },
        {
          title: "Full UI Design",
          description: "Full design ownership — from wireframes to final interface implementation.",
        },
      ],
    },
    tech: [
      { name: "Angular", cssClass: "tech-angular" },
      { name: "TypeScript", cssClass: "tech-typescript" },
      { name: "RxJS", cssClass: "tech-rxjs" },
      { name: "MQTT", cssClass: "tech-default" },
      { name: "Tailwind CSS", cssClass: "tech-tailwind" },
      { name: "CSS", cssClass: "tech-css" },
    ],
    images: [
      {
        src: "/images/projects/lacardio/desktop_preview.jpg",
        alt: "La Cardio dashboard",
        isMobile: false,
      },
      {
        src: "/images/projects/lacardio/desktop_preview.jpg",
        alt: "La Cardio monitoring view",
        isMobile: false,
      },
    ],
    galleryText: {
      es: "Responsable del frontend, tomando decisiones técnicas para construir interfaces escalables, performantes y centradas en la visualización de datos críticos en tiempo real.",
      en: "Responsible for the frontend, taking technical decisions to build scalable, performant interfaces centered on the visualization of critical real-time data.",
    },
    gallery: [
      {
        src: "/images/projects/lacardio/desktop_preview.jpg",
        alt: "La Cardio login page",
        caption: {
          es: "Pantalla de inicio enfocada en autenticación, alineada con el manual de marca para ofrecer una experiencia coherente y consistente desde el primer contacto con la plataforma.",
          en: "Login page designed to provide a consistent and coherent experience from the first contact with the platform.",
        },
      },
      {
        src: "/images/projects/lacardio/dashboard_page.jpg",
        alt: "La Cardio dashboard page",
        caption: {
          es: "Vista crítica del sistema que concentra la información clave de cada paciente en tiempo real: ubicación, estado del dispositivo y alertas de riesgo. Diseñada para que el personal de cuidado actúe con rapidez y tome decisiones informadas en situaciones sensibles.",
          en: "Critical system view that concentrates the key information of each patient in real time: location, device status, and risk alerts. Designed to allow caregivers to act quickly and make informed decisions in sensitive situations.", 
        },
      },
      {
        src: "/images/projects/lacardio/dispositivos_page.jpg",
        alt: "La Cardio devices page",
        caption: {
          es: "Módulo de administración para la parametrización de datos críticos del sistema, con capacidades completas de gestión. Permite adaptar dinámicamente el comportamiento de la plataforma sin necesidad de despliegues, optimizando la mantenibilidad y escalabilidad.",
          en: "Administration module for critical system data parameterization, with full management capabilities. Allows dynamically adapting the platform behavior without need for deployments, optimizing maintainability and scalability.",
        },
      },
      {
        src: "/images/projects/lacardio/reporte_page.png",
        alt: "La Cardio report page",
        caption: {
          es: "Vista de reportes que transforma datos en insights: información depurada, filtros en tiempo real y exportación a CSV para analizar el comportamiento del sistema de forma clara.",
          en: "Report page designed to transform data into insights: refined information, real-time filters, and CSV export for clear system behavior analysis.",
        },
      },
    ],
  },
  {
    slug: "monitoreo-hidrico",
    name: "Monitoreo Hídrico",
    icon: "/images/projects/monitoreo_hidrico/monitoreo_icon.png",
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
        {
          title: "IoT en Tiempo Real",
          description: "Conexión en tiempo real con dispositivos hídricos IoT mediante protocolo MQTT.",
        },
        {
          title: "Métricas Ambientales",
          description: "Visualización de métricas ambientales de cuerpos de agua en el departamento de Bolívar.",
        },
        {
          title: "SEO Técnico",
          description: "Sitemap automatizado, metatags dinámicos y datos estructurados para visibilidad pública.",
        },
        {
          title: "Estado con Recoil",
          description: "Gestión eficiente de estado con Recoil para datos IoT en tiempo real.",
        },
        {
          title: "API Routes Node.js",
          description: "API routes con Node.js integradas en Next.js para comunicación directa con dispositivos IoT.",
        },
        {
          title: "UI Responsive",
          description: "Interfaz responsive con Tailwind CSS y animaciones personalizadas para datos ambientales.",
        },
      ],
      en: [
        {
          title: "Real-Time IoT",
          description: "Real-time connection to water IoT devices via MQTT protocol.",
        },
        {
          title: "Environmental Metrics",
          description: "Visualization of environmental metrics for water bodies in the Bolívar department.",
        },
        {
          title: "Technical SEO",
          description: "Automated sitemap, dynamic metatags, and structured data for public visibility.",
        },
        {
          title: "Recoil State",
          description: "Efficient state management with Recoil for real-time IoT data handling.",
        },
        {
          title: "Node.js API Routes",
          description: "Node.js API routes integrated in Next.js for direct IoT device communication.",
        },
        {
          title: "Responsive UI",
          description: "Responsive interface with Tailwind CSS and custom animations for environmental data.",
        },
      ],
    },
    tech: [
      { name: "Next.js", cssClass: "tech-nextjs" },
      { name: "Node.js", cssClass: "tech-node" },
      { name: "Recoil", cssClass: "tech-recoil" },
      { name: "MQTT", cssClass: "tech-default" },
      { name: "Tailwind CSS", cssClass: "tech-tailwind" },
      { name: "CSS", cssClass: "tech-css" },
    ],
    images: [
      {
        src: "/images/projects/monitoreo_hidrico/mobile_preview.png",
        alt: "Monitoreo Hídrico mobile",
        isMobile: true,
      },
      {
        src: "/images/projects/monitoreo_hidrico/desktop_preview.png",
        alt: "Monitoreo Hídrico desktop",
        isMobile: false,
      },
    ],
    galleryText: {
      es: "Diseñé y desarrollé el frontend de extremo a extremo, creando una experiencia responsive y optimizada para SEO, asegurando buen rendimiento y usabilidad en cualquier dispositivo.",
      en: "Designed and developed the end-to-end frontend, creating a responsive and optimized experience for SEO, ensuring good performance and usability on any device.",
    },
    gallery: [
      {
        src: "/images/projects/monitoreo_hidrico/home.png",
        alt: "Monitoreo Hídrico mobile",
        caption: {
          es: "Vista geoespacial con mapa interactivo y múltiples capas de información en Bolívar, integrando estaciones con datos de sensores en tiempo real. Incluye funcionalidades de predicción de variables mediante modelos de machine learning para análisis prospectivo.",
          en: "Geospatial view with interactive map and multiple informative layers in Bolívar, integrating stations with real-time sensor data. Includes prediction of variables using machine learning models for prospective analysis.",
        },
      },
      {
        src: "/images/projects/monitoreo_hidrico/graficas.png",
        alt: "Monitoreo Hídrico desktop",
        caption: {
          es: "Herramienta de análisis que transforma datos en insights: gráficas de autocorrelación, distribución y correlación que permiten entender el comportamiento histórico de las estaciones y apoyar la toma de decisiones.",
          en: "Analysis tool that transforms data into insights: autocorrelation, distribution, and correlation charts that allow understanding the historical behavior of stations and supporting decision-making.",
        },
      },
      {
        src: "/images/projects/monitoreo_hidrico/datos_historicos.png",
        alt: "Monitoreo Hídrico desktop",
        caption: {
          es: "Módulo de visualización de datos de sensores, con soporte para filtrado por variable y comparación entre múltiples estaciones, permitiendo analizar tendencias y comportamientos a lo largo del tiempo.",
          en: "Data visualization module, with support for filtering by variable and comparison between multiple stations, allowing to analyze trends and behaviors over time.",
        },
      },
      {
        src: "/images/projects/monitoreo_hidrico/tabla_datos.png",
        alt: "Monitoreo Hídrico desktop",
        caption: {
          es: "Módulo de visualización tabular que presenta variables recolectadas por las estaciones, con filtrado dinámico por rangos de tiempo y exportación a CSV.",
          en: "Table visualization module that presents variables collected by stations, with dynamic filtering by time ranges and CSV export.",
        },
      }
    ],
  },
];
