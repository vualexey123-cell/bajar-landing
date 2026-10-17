"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { localeHome, localeLabel, locales, htmlLang, type Dict, type Locale } from "@/lib/i18n";
import { Button, Container, Logo } from "@/components/ui";

function LanguageSwitch({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <nav aria-label={t.ui.language}>
      <ul className="flex items-center rounded-full bg-surface-2 p-1">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localeHome[l]}
              hrefLang={htmlLang[l]}
              lang={htmlLang[l]}
              aria-current={l === locale ? "page" : undefined}
              className={`block rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
                l === locale ? "bg-bg text-ink shadow-sm" : "text-ink-2 hover:text-ink"
              }`}
            >
              {localeLabel[l]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteHeader({ t, locale }: { t: Dict; locale: Locale }) {
  const { cta, nav } = t;
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    if (next !== scrolled) setScrolled(next);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out-expo ${
          scrolled || open
            ? "border-line bg-bg/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <Link href="#top" aria-label={t.ui.home} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label={t.ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-[15px] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitch t={t} locale={locale} />
            <div className="hidden sm:block">
              <Button href="#lead">{cta.primary}</Button>
            </div>
            <button
              type="button"
              aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full bg-surface-2 text-ink transition-transform active:scale-[0.96] lg:hidden"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[28px] font-semibold tracking-[-0.03em]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6" onClick={() => setOpen(false)}>
                <Button href="#lead" size="lg" className="w-full">
                  {cta.primary}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
