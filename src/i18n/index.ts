import { en } from "./en";
import { es } from "./es";

export const defaultLang = "es" as const;

export const ui = {
  es,
  en,
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return (key: TranslationKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
