import type { ProjectPreview } from "../types/projects";

export const projectsPreviews: ProjectPreview[] = [
  {
    name: "Vintage Stock",
    description: {
      es: "Plataforma e-commerce de entretenimiento retro y moderno. Next.js 14 App Router, SEO técnico avanzado, optimización de Core Web Vitals y librería de componentes React privada compartida entre plataformas desktop y mobile.",
      en: "E-commerce platform for retro and modern entertainment. Next.js 14 App Router, advanced technical SEO, Core Web Vitals optimization, and a private React component library shared across desktop and mobile platforms.",
    },
    image_desktop: "/images/projects/vintagestock/desktop_preview.png",
    image_mobile: "/images/projects/vintagestock/mobile_preview.png",
    icons: [
      "next-dot-js",
      "react",
      "typescript",
      "tailwindcss",
      "jotai",
      "redis",
    ],
    tech_stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Jotai",
      "Redis",
      "Node.js",
    ],
    classes_images: ["screen_desktop", "screen_mobile"],
    colors: ["#2b55ff", "#c62bff"],
    url: "",
    external_url: "https://vintagestock.com",
  },
  {
    name: "La Cardio",
    description: {
      es: "Sistema de monitoreo IoT en tiempo real para clínica médica. Permite registrar pacientes y dispositivos, parametrizar umbrales, generar reportes y visualizar el comportamiento del paciente en camilla con un sistema de alarmas automáticas según el nivel de peligrosidad de su posición.",
      en: "Real-time IoT monitoring system for a medical clinic. Supports patient and device registration, threshold parameterization, report generation, and live visualization of patient behavior on the bed with an automatic alarm system triggered by position risk level.",
    },
    image_desktop: "/images/projects/lacardio/desktop_preview.jpg",
    image_mobile: "/images/projects/lacardio/preview_2.jpg",
    icons: ["angular", "typescript", "tailwindcss", "css3", "connection"],
    tech_stack: ["Angular", "TypeScript", "RxJS", "MQTT", "Tailwind CSS"],
    classes_images: ["screen_desktop", "section_desktop_preview"],
    colors: ["#dd0031", "#0ea5e9"],
    url: "",
    external_url: "",
  },
  {
    name: "Monitoreo Hídrico",
    description: {
      es: "Sistema de monitoreo ambiental de cuerpos de agua en el departamento de Bolívar. Conecta dispositivos hídricos en tiempo real vía MQTT, visualiza métricas ambientales y fue entregado con SEO técnico completo — sitemap, metatags dinámicos y datos estructurados — para garantizar visibilidad y acceso público al proyecto.",
      en: "Environmental monitoring system for water bodies in the Bolívar department. Connects water IoT devices in real time via MQTT, visualizes environmental metrics, and was delivered with full technical SEO — sitemap, dynamic metatags, and structured data — to ensure public visibility and access.",
    },
    image_desktop: "/images/projects/monitoreo_hidrico/desktop_preview.png",
    image_mobile: "/images/projects/monitoreo_hidrico/mobile_preview.png",
    tech_stack: ["Next.js", "Node.js", "Recoil", "MQTT", "Tailwind CSS", "CSS"],
    icons: ["next-dot-js", "tailwindcss", "css3", "connection"],
    external_url: "https://m-hidrico.unicartagena.edu.co/",
    classes_images: ["screen_desktop", "screen_mobile"],
    colors: ["#fcb103", "#4c9e53"],
    url: "",
  },
];
