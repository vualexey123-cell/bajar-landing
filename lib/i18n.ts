import { ru, type Dict } from "@/lib/content/ru";
import { uz } from "@/lib/content/uz";
import { en } from "@/lib/content/en";

export const locales = ["ru", "uz", "en"] as const;
export type Locale = (typeof locales)[number];
export type { Dict };

export const dictionaries: Record<Locale, Dict> = { ru, uz, en };

// Russian lives at the site root, the others in their own folder.
export const localeHome: Record<Locale, string> = { ru: "/", uz: "/uz/", en: "/en/" };
export const localeLabel: Record<Locale, string> = { ru: "RU", uz: "UZ", en: "EN" };
export const htmlLang: Record<Locale, string> = { ru: "ru", uz: "uz-Latn", en: "en" };

// Number grouping: spaces for ru and uz (1 500 000), commas for en (1,500,000).
export const numberLocale: Record<Locale, string> = { ru: "ru-RU", uz: "ru-RU", en: "en-US" };
