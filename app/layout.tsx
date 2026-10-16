import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}: выплаты самозанятым в Узбекистане`,
  description:
    "Договоры, акты, чеки и выплаты исполнителям на Uzcard и Humo в одном кабинете. Платформа для компаний, которые работают с самозанятыми.",
  openGraph: {
    title: `${site.name}: выплаты самозанятым без бумажной рутины`,
    description:
      "Договоры, акты, чеки и выплаты исполнителям на Uzcard и Humo в одном кабинете.",
    locale: "ru_RU",
    type: "website",
    // Resolved against metadataBase, which already includes the base path.
    images: [{ url: "/img/og.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e16" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-[100dvh] bg-bg text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
