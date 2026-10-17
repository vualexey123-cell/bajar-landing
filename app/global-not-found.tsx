import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { geist } from "@/lib/fonts";
import { Logo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Bajar: 404",
};

// Unmatched URLs on any language land here, so the text is in all three.
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={`${geist.variable} antialiased`}>
      <body className="grid min-h-[100dvh] place-items-center bg-bg px-4 text-ink">
        <main className="flex max-w-[440px] flex-col items-start gap-6">
          <Logo />
          <h1 className="text-[40px] font-semibold leading-none tracking-[-0.035em]">404</h1>
          <ul className="flex flex-col gap-2 text-[17px] text-ink-2">
            <li>
              Страница не найдена. <Link href="/" className="text-accent-text underline-offset-4 hover:underline">На главную</Link>
            </li>
            <li lang="uz-Latn">
              Sahifa topilmadi. <Link href="/uz/" className="text-accent-text underline-offset-4 hover:underline">Bosh sahifa</Link>
            </li>
            <li lang="en">
              Page not found. <Link href="/en/" className="text-accent-text underline-offset-4 hover:underline">Home</Link>
            </li>
          </ul>
        </main>
      </body>
    </html>
  );
}
