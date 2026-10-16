"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { steps } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

// The rail fills as the section scrolls through the viewport, so the reader
// sees how far along the flow they are.
export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <section id="how" aria-labelledby="how-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="how-title">{steps.title}</span>
          </SectionTitle>
        </Reveal>

        <ol ref={ref} className="relative mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
          {/* Horizontal rail (tablet and up) */}
          <span aria-hidden className="absolute top-6 right-0 left-0 hidden h-[2px] rounded-full bg-line md:block">
            <motion.span
              className="absolute inset-0 origin-left rounded-full bg-accent"
              style={{ scaleX: progress }}
            />
          </span>
          {/* Vertical rail (mobile) */}
          <span aria-hidden className="absolute top-0 bottom-0 left-6 w-[2px] rounded-full bg-line md:hidden">
            <motion.span
              className="absolute inset-0 origin-top rounded-full bg-accent"
              style={{ scaleY: progress }}
            />
          </span>

          {steps.items.map((s, i) => (
            <li key={s.title} className="relative pl-20 md:pl-0">
              <span className="absolute top-0 left-0 grid size-12 place-items-center rounded-full border-2 border-accent bg-bg text-[17px] font-semibold tabular-nums text-accent-text md:relative">
                {i + 1}
              </span>
              <h3 className="pt-2 text-[22px] font-semibold tracking-[-0.025em] md:mt-7 md:pt-0">{s.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[16px] leading-relaxed text-ink-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
