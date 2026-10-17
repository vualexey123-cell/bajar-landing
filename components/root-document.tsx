import "@/app/globals.css";
import { geist, geistMono } from "@/lib/fonts";
import { htmlLang, type Locale } from "@/lib/i18n";
import { MotionProvider } from "@/components/motion-provider";

// Each language has its own root layout so <html lang> is right in the static HTML.
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={htmlLang[locale]} className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-[100dvh] bg-bg text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
