import { ru, type Dict } from "@/lib/content/ru";
import { uz } from "@/lib/content/uz";
import { en } from "@/lib/content/en";
import { jobsRu, type JobsDict } from "@/lib/content/jobs/ru";
import { jobsUz } from "@/lib/content/jobs/uz";
import { jobsEn } from "@/lib/content/jobs/en";
import { hireRu, type HireDict } from "@/lib/content/hire/ru";
import { hireUz } from "@/lib/content/hire/uz";
import { hireEn } from "@/lib/content/hire/en";
import { getPaidRu, type GetPaidDict } from "@/lib/content/getpaid/ru";
import { getPaidUz } from "@/lib/content/getpaid/uz";
import { getPaidEn } from "@/lib/content/getpaid/en";

export const locales = ["ru", "uz", "en"] as const;
export type Locale = (typeof locales)[number];
export type { Dict, JobsDict, HireDict, GetPaidDict };

export const dictionaries: Record<Locale, Dict> = { ru, uz, en };
export const jobsDictionaries: Record<Locale, JobsDict> = { ru: jobsRu, uz: jobsUz, en: jobsEn };
export const hireDictionaries: Record<Locale, HireDict> = { ru: hireRu, uz: hireUz, en: hireEn };
export const getPaidDictionaries: Record<Locale, GetPaidDict> = { ru: getPaidRu, uz: getPaidUz, en: getPaidEn };

// Russian lives at the site root, the others in their own folder.
export const localeHome: Record<Locale, string> = { ru: "/", uz: "/uz/", en: "/en/" };
export const localeLabel: Record<Locale, string> = { ru: "RU", uz: "UZ", en: "EN" };
export const htmlLang: Record<Locale, string> = { ru: "ru", uz: "uz-Latn", en: "en" };

// Four products, two for each audience. Every product has its own page in every language.
export const pages = ["home", "hire", "jobs", "getpaid"] as const;
export type Page = (typeof pages)[number];
export type Audience = "business" | "workers";
export const audienceOf: Record<Page, Audience> = {
  home: "business",
  hire: "business",
  jobs: "workers",
  getpaid: "workers",
};
const slug: Record<Page, string> = { home: "", hire: "hire/", jobs: "jobs/", getpaid: "get-paid/" };
export function pagePath(locale: Locale, page: Page) {
  return `${localeHome[locale]}${slug[page]}`;
}

// Number grouping: spaces for ru and uz (1 500 000), commas for en (1,500,000).
export const numberLocale: Record<Locale, string> = { ru: "ru-RU", uz: "ru-RU", en: "en-US" };
