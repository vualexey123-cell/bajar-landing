"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, MapPin, TelegramLogo } from "@phosphor-icons/react";
import { numberLocale, type Dict, type JobsDict, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Category = keyof JobsDict["board"]["categories"];

// A filterable sample of gigs, the way they look in the contractor app.
export function GigBoard({ t, j, locale }: { t: Dict; j: JobsDict; locale: Locale }) {
  const b = j.board;
  const [day, setDay] = useState(0);
  const [cat, setCat] = useState<Category>("all");
  const fmt = useMemo(() => new Intl.NumberFormat(numberLocale[locale]), [locale]);
  const gigs = b.gigs.filter((g) => g.day === day && (cat === "all" || g.cat === cat));
  const categories = Object.keys(b.categories) as Category[];

  return (
    <section id="gigs" aria-labelledby="gigs-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="gigs-title">{b.title}</span>
          </SectionTitle>
          <p className="mt-5 max-w-[56ch] text-[18px] leading-relaxed text-ink-2">{b.text}</p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label={b.daysLabel}
            className="-mx-5 flex gap-1 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0"
          >
            <div className="flex shrink-0 gap-1 rounded-full bg-surface p-1">
              {b.days.map((d, i) => (
                <button
                  key={d}
                  type="button"
                  aria-pressed={i === day}
                  onClick={() => setDay(i)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 ${
                    i === day ? "bg-ink text-bg" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div
            role="group"
            aria-label={b.categoriesLabel}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === cat}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 ${
                  c === cat ? "bg-accent text-on-accent" : "bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {b.categories[c]}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${day}-${cat}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-live="polite"
            className="mt-6"
          >
            {gigs.length ? (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {gigs.map((g) => (
                  <li key={g.title + g.place} className="flex flex-col rounded-tile bg-surface p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.02em]">{g.title}</h3>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[12px] font-medium ${
                          g.shift === "night" ? "bg-deep text-on-deep" : "bg-surface-2 text-ink-2"
                        }`}
                      >
                        {b.shifts[g.shift as keyof typeof b.shifts]}
                      </span>
                    </div>
                    <p className="mt-3 flex items-center gap-2 text-[14px] text-ink-2">
                      <MapPin size={16} aria-hidden className="shrink-0" />
                      {g.place}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-[14px] text-ink-2">
                      <Clock size={16} aria-hidden className="shrink-0" />
                      {g.time} · {g.hours} {b.hours}
                    </p>
                    <div className="mt-6 flex items-baseline justify-between gap-3 border-t border-line pt-4">
                      <span className="text-[24px] font-semibold tracking-[-0.03em] tabular-nums">
                        {fmt.format(g.pay)} {t.ui.currency}
                      </span>
                      <span className="text-[13px] text-ink-2">{b.perShift}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-tile bg-surface p-6 text-[16px] text-ink-2">{b.empty}</p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center">
          <a
            href={site.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-ink px-7 text-base font-medium text-bg transition-transform active:scale-[0.98]"
          >
            <TelegramLogo size={20} weight="fill" aria-hidden />
            {b.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
