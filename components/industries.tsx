"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  GraduationCap,
  HardHat,
  Laptop,
  Storefront,
  Truck,
  VideoCamera,
} from "@phosphor-icons/react";
import { industries } from "@/lib/content";
import { asset } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const icons = {
  delivery: Truck,
  retail: Storefront,
  it: Laptop,
  education: GraduationCap,
  repair: HardHat,
  media: VideoCamera,
} as const;

export function Industries() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = industries.items;
  const item = items[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + items.length) % items.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = items.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="industries" aria-labelledby="industries-title" className="pb-24 md:pb-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <SectionTitle>
              <span id="industries-title">{industries.title}</span>
            </SectionTitle>
            <p className="mt-5 max-w-[44ch] text-[18px] leading-relaxed text-ink-2">{industries.text}</p>
          </Reveal>

          <div
            role="tablist"
            aria-label="Отрасли"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-5 mt-8 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:mt-10 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {items.map((it, i) => {
              const Icon = icons[it.id];
              const selected = i === active;
              return (
                <button
                  key={it.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${it.id}`}
                  aria-selected={selected}
                  aria-controls="industry-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 snap-start items-center gap-3 rounded-full px-4 py-2.5 text-left text-[15px] font-medium whitespace-nowrap transition-colors duration-300 lg:rounded-tile lg:px-5 lg:py-4 lg:text-[19px] lg:tracking-[-0.02em] ${
                    selected ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="industry-pill"
                      className="absolute inset-0 rounded-full bg-surface shadow-soft lg:rounded-tile"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  <Icon size={22} weight={selected ? "fill" : "regular"} className="relative" aria-hidden />
                  <span className="relative">{it.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="industry-panel"
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          className="grid grid-cols-1 gap-3 rounded-card bg-surface p-3 sm:grid-cols-2 lg:self-end"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-tile bg-[#4563a6]">
            <AnimatePresence initial={false}>
              <motion.div
                key={item.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={asset(item.image)}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between gap-8 p-4 sm:p-5"
            >
              <div>
                <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.03em]">{item.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{item.text}</p>
              </div>

              <div className="rounded-tile bg-bg p-5">
                <p className="text-[13px] text-ink-2">{industries.taskLabel}</p>
                <p className="mt-2 text-[18px] font-medium tracking-[-0.01em]">{item.task.title}</p>
                <p className="mt-1 text-[14px] text-ink-2">
                  {item.task.qty} · {item.task.rate}
                </p>
                <p className="mt-5 text-[28px] font-semibold tracking-[-0.03em] tabular-nums">{item.task.total}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
