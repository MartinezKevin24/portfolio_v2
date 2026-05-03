// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kmartinez.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !/\/projects\/[^/]+\/?$/.test(page),
    }),
  ],
});
