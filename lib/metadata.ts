import type { Metadata, Viewport } from "next";
import { dictionaries, localeHome, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

// Per-language head tags. Relative URLs resolve against metadataBase,
// which already includes the base path on GitHub Pages.
export function localeMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localeHome[locale],
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localeHome[l]])),
        "x-default": localeHome.ru,
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      locale: meta.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => dictionaries[l].meta.ogLocale),
      url: localeHome[locale],
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
