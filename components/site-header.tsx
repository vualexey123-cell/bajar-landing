"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Briefcase, CaretDown, HandCoins, List, MapPin, Wallet, X } from "@phosphor-icons/react";
import {
  audienceOf,
  htmlLang,
  localeLabel,
  locales,
  pagePath,
  type Audience,
  type Dict,
  type Locale,
  type Page,
} from "@/lib/i18n";
import { Button, Container, Logo } from "@/components/ui";

const groups: { audience: Audience; pages: Page[] }[] = [
  { audience: "business", pages: ["home", "hire"] },
  { audience: "workers", pages: ["jobs", "getpaid"] },
];

const productIcons = { home: Wallet, hire: Briefcase, jobs: MapPin, getpaid: HandCoins } as const;

type Cta = { label: string; href: string };

function productOf(t: Dict, page: Page) {
  const items = t.products[audienceOf[page]].items as Record<string, { name: string; text: string }>;
  return items[page];
}

function ProductLink({
  t,
  locale,
  page,
  current,
  onNavigate,
}: {
  t: Dict;
  locale: Locale;
  page: Page;
  current: Page;
  onNavigate: () => void;
}) {
  const item = productOf(t, page);
  const Icon = productIcons[page];
  const active = page === current;
  return (
    <Link
      href={pagePath(locale, page)}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={`flex items-start gap-3 rounded-chip p-3 transition-colors hover:bg-surface-2 ${active ? "bg-surface-2" : ""}`}
    >
      {/* Contractor products carry the warm palette, business ones the brand one */}
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-chip bg-accent-soft text-accent-text ${
          audienceOf[page] === "workers" ? "theme-worker" : ""
        }`}
      >
        <Icon size={20} weight="bold" aria-hidden />
      </span>
      <span>
        <span className="block text-[15px] font-semibold tracking-[-0.01em]">{item.name}</span>
        <span className="mt-0.5 block text-[14px] leading-snug text-ink-2">{item.text}</span>
      </span>
    </Link>
  );
}

function LanguageSwitch({ t, locale, page }: { t: Dict; locale: Locale; page: Page }) {
  return (
    <nav aria-label={t.ui.language}>
      <ul className="flex items-center rounded-full bg-surface-2 p-1">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={pagePath(l, page)}
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

export function SiteHeader({
  t,
  locale,
  page = "home",
  cta = { label: t.cta.primary, href: "#lead" },
}: {
  t: Dict;
  locale: Locale;
  page?: Page;
  cta?: Cta;
}) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<Audience | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const uid = useId();
  // Contractor pages get their own palette for the main button.
  const ctaTheme = audienceOf[page] === "workers" ? "theme-worker" : "";

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    if (next !== scrolled) setScrolled(next);
  });

  // Mobile menu: lock the page and close on Escape.
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

  // Desktop dropdowns: close on Escape or a click outside the header.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onDown = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out-expo ${
          scrolled || open || menu
            ? "border-line bg-bg/90 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link href={pagePath(locale, "home")} aria-label={t.ui.home} onClick={() => setOpen(false)}>
              <Logo />
            </Link>

            <nav aria-label={t.ui.mainNav} className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {groups.map((g) => {
                  const isOpen = menu === g.audience;
                  const id = `${uid}-${g.audience}`;
                  return (
                    <li
                      key={g.audience}
                      className="relative"
                      onPointerEnter={(e) => e.pointerType === "mouse" && setMenu(g.audience)}
                      onPointerLeave={(e) => e.pointerType === "mouse" && setMenu(null)}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={id}
                        onClick={() => setMenu(isOpen ? null : g.audience)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] transition-colors hover:bg-surface-2 hover:text-ink ${
                          audienceOf[page] === g.audience ? "font-medium text-ink" : "text-ink-2"
                        }`}
                      >
                        {t.products[g.audience].label}
                        <CaretDown
                          size={13}
                          weight="bold"
                          aria-hidden
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={id}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 pt-2"
                          >
                            <div className="flex w-[400px] flex-col gap-1 rounded-tile bg-surface p-2 shadow-float ring-1 ring-line">
                              {g.pages.map((p) => (
                                <ProductLink
                                  key={p}
                                  t={t}
                                  locale={locale}
                                  page={p}
                                  current={page}
                                  onNavigate={() => setMenu(null)}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitch t={t} locale={locale} page={page} />
            <div className={`hidden sm:block ${ctaTheme}`}>
              <Button href={cta.href}>{cta.label}</Button>
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
            <Container className="flex flex-col gap-8 py-6">
              {groups.map((g, i) => (
                <motion.div
                  key={g.audience}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="px-3 text-[14px] font-medium text-ink-2">{t.products[g.audience].label}</p>
                  <div className="mt-2 flex flex-col gap-1">
                    {g.pages.map((p) => (
                      <ProductLink key={p} t={t} locale={locale} page={p} current={page} onNavigate={() => setOpen(false)} />
                    ))}
                  </div>
                </motion.div>
              ))}
              <div className={ctaTheme} onClick={() => setOpen(false)}>
                <Button href={cta.href} size="lg" className="w-full">
                  {cta.label}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
