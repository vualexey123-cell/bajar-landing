import "@/app/globals.css";
import { geist, geistMono } from "@/lib/fonts";
import { htmlLang, type Locale } from "@/lib/i18n";
import { MotionProvider } from "@/components/motion-provider";

// Each language has its own root layout so <html lang> is right in the static HTML.
// data-scroll-behavior makes Next.js switch off the CSS smooth scroll while it
// moves to the top of a new page, so links between pages always open at the top.
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={htmlLang[locale]}
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-bg text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
