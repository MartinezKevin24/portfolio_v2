import type { ProjectPreview } from "../types/projects";

export const projectsPreviews: ProjectPreview[] = [
  {
    name: "Vintage Stock",
    description: {
      es: "Plataforma e-commerce de entretenimiento retro y moderno — videojuegos, películas, música y coleccionables. Desarrollada con Next.js App Router usando SSR/ISR, Server Components y Server Actions. SEO técnico, optimización de Core Web Vitals y estado global con Jotai.",
      en: "E-commerce platform for retro and modern entertainment — video games, movies, music, and collectibles. Built with Next.js App Router using SSR/ISR, Server Components, and Server Actions. Technical SEO, Core Web Vitals optimization, and global state management with Jotai.",
    },
    image_desktop: "/images/projects/vintagestock/desktop_preview.png",
    image_mobile: "/images/projects/vintagestock/mobile_preview.png",
    icons: ["next-dot-js", "react", "typescript", "tailwindcss", "jotai", "redis"],
    tech_stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Jotai", "Redis"],
    url: "https://vintagestock.com",
  },
  {
    name: "",
    description: { es: "", en: "" },
    image_desktop: "",
    image_mobile: "",
    icons: [],
    tech_stack: [],
    url: "",
  },
  {
    name: "",
    description: { es: "", en: "" },
    image_desktop: "",
    image_mobile: "",
    tech_stack: [],
    icons: [],
    url: "",
  },
];
