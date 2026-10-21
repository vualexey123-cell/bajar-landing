import type { Metadata, Viewport } from "next";
import {
  dictionaries,
  getPaidDictionaries,
  hireDictionaries,
  jobsDictionaries,
  locales,
  pagePath,
  type Locale,
  type Page,
} from "@/lib/i18n";
import { site } from "@/lib/site";

// Per-language, per-page head tags. Relative URLs resolve against metadataBase,
// which already includes the base path on GitHub Pages.
export function pageMetadata(locale: Locale, page: Page = "home"): Metadata {
  const metaOf = (l: Locale) =>
    ({
      home: dictionaries[l].meta,
      hire: hireDictionaries[l].meta,
      jobs: jobsDictionaries[l].meta,
      getpaid: getPaidDictionaries[l].meta,
    })[page];
  const meta = metaOf(locale);
  const ogLocale = (l: Locale) => dictionaries[l].meta.ogLocale;
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pagePath(locale, page),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, pagePath(l, page)])),
        "x-default": pagePath("ru", page),
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      locale: ogLocale(locale),
      alternateLocale: locales.filter((l) => l !== locale).map(ogLocale),
      url: pagePath(locale, page),
      type: "website",
      images: [{ url: "/img/og.jpg", width: 1200, height: 630 }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e16" },
  ],
};
