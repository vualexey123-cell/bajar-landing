"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { numberLocale, type Dict, type Locale } from "@/lib/i18n";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

function fillTemplate(tpl: string, values: Record<string, string>) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
}

function AnimatedSum({ value, fmt, currency }: { value: number; fmt: Intl.NumberFormat; currency: string }) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, { stiffness: 140, damping: 26 });
  const text = useTransform(spring, (v) => `${fmt.format(Math.round(v / 1000) * 1000)} ${currency}`);

  useEffect(() => {
    if (reduce) spring.jump(value);
    else spring.set(value);
  }, [value, reduce, spring]);

  return <motion.span className="tabular-nums">{text}</motion.span>;
}

export function Pricing({ t, locale }: { t: Dict; locale: Locale }) {
  const pricing = t.pricing;
  const currency = t.ui.currency;
  const fmt = useMemo(() => new Intl.NumberFormat(numberLocale[locale]), [locale]);
  const plural = useMemo(() => new Intl.PluralRules(locale), [locale]);
  const maxTier = pricing.tiers[pricing.tiers.length - 1].upTo;
  const formatVolume = (mln: number) =>
    mln >= 1000
      ? fillTemplate(pricing.volumeBln, { n: fmt.format(mln / 1000) })
      : fillTemplate(pricing.volumeMln, { n: fmt.format(mln) });
  // The money line wraps an animated amount, so split the template around {sum}.
  const [moneyBefore, moneyAfter] = pricing.moneyLine.split("{sum}");
  const sliderId = useId();
  const payoutsId = useId();
  const [stop, setStop] = useState<number>(pricing.defaultStop);
  const [payoutStop, setPayoutStop] = useState<number>(pricing.defaultPayoutStop);
  const payouts = pricing.payoutStops[payoutStop];
  const hours = Math.round((payouts * pricing.minutesPerPayout) / 60);
  const saved = Math.round((payouts * pricing.minutesPerPayout * pricing.hourlyCost) / 60);
  const payoutsFill = `${(payoutStop / (pricing.payoutStops.length - 1)) * 100}%`;
  const volume = pricing.stops[stop];
  const tierIndex = pricing.tiers.findIndex((tier) => volume <= tier.upTo);
  const custom = volume > maxTier;
  const rate = custom ? null : pricing.tiers[tierIndex].rate;
  const fee = rate === null ? 0 : (volume * 1_000_000 * rate) / 100;
  const fill = `${(stop / (pricing.stops.length - 1)) * 100}%`;

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 rounded-card bg-deep p-6 text-on-deep sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-14">
          <div className="flex flex-col">
            <h2
              id="pricing-title"
              className="text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance"
            >
              {pricing.title}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-on-deep-2">{pricing.text}</p>

            <div className="mt-12 lg:mt-auto lg:pt-12">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <label htmlFor={sliderId} className="text-[15px] text-on-deep-2">
                  {pricing.sliderLabel}
                </label>
                <output htmlFor={sliderId} className="text-[24px] font-semibold tracking-[-0.02em] tabular-nums">
                  {formatVolume(volume)}
                </output>
              </div>
              <input
                id={sliderId}
                type="range"
                min={0}
                max={pricing.stops.length - 1}
                step={1}
                value={stop}
                onChange={(e) => setStop(Number(e.target.value))}
                aria-valuetext={formatVolume(volume)}
                className="range mt-4"
                style={{ "--fill": fill } as React.CSSProperties}
              />

              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <label htmlFor={payoutsId} className="text-[15px] text-on-deep-2">
                  {pricing.payoutsLabel}
                </label>
                <output htmlFor={payoutsId} className="text-[24px] font-semibold tracking-[-0.02em] tabular-nums">
                  {fmt.format(payouts)}
                </output>
              </div>
              <input
                id={payoutsId}
                type="range"
                min={0}
                max={pricing.payoutStops.length - 1}
                step={1}
                value={payoutStop}
                onChange={(e) => setPayoutStop(Number(e.target.value))}
                aria-valuetext={`${fmt.format(payouts)} ${pricing.payoutsUnit}`}
                className="range mt-4"
                style={{ "--fill": payoutsFill } as React.CSSProperties}
              />

              <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label={pricing.tiersLabel}>
                {pricing.tiers.map((tier, i) => {
                  const on = !custom && i === tierIndex;
                  return (
                    <li
                      key={tier.label}
                      className={`rounded-chip px-3 py-2.5 transition-colors duration-300 ${
                        on ? "bg-accent text-on-accent" : "bg-deep-2 text-on-deep-2"
                      }`}
                    >
                      <span className="block text-[17px] font-semibold tabular-nums">{fmt.format(tier.rate)}%</span>
                      <span className="block text-[12px] opacity-85">{tier.label}</span>
                    </li>
                  );
                })}
                <li
                  className={`rounded-chip px-3 py-2.5 transition-colors duration-300 ${
                    custom ? "bg-accent text-on-accent" : "bg-deep-2 text-on-deep-2"
                  }`}
                >
                  <span className="block text-[17px] font-semibold">{pricing.customShort}</span>
                  <span className="block text-[12px] opacity-85">{pricing.customLabel}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-tile bg-deep-2 p-6 sm:p-8" aria-live="polite">
            {custom ? (
              <p className="text-[22px] leading-snug font-medium tracking-[-0.02em] text-balance">{pricing.customNote}</p>
            ) : (
              <dl className="grid gap-7">
                <div>
                  <dt className="text-[14px] text-on-deep-2">{pricing.rateLabel}</dt>
                  <dd className="mt-1 text-[22px] font-semibold tabular-nums">{fmt.format(rate ?? 0)}%</dd>
                </div>
                <div>
                  <dt className="text-[14px] text-on-deep-2">{pricing.feeLabel}</dt>
                  <dd className="mt-1 text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-semibold tracking-[-0.035em]">
                    <AnimatedSum value={fee} fmt={fmt} currency={currency} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[14px] text-on-deep-2">{pricing.totalLabel}</dt>
                  <dd className="mt-1 text-[22px] font-semibold tracking-[-0.02em]">
                    <AnimatedSum value={volume * 1_000_000 + fee} fmt={fmt} currency={currency} />
                  </dd>
                </div>
              </dl>
            )}
            <div className="border-t border-on-deep/15 pt-6">
              <p className="text-[14px] text-on-deep-2">{pricing.timeLabel}</p>
              <p className="mt-1 text-[22px] font-semibold tracking-[-0.02em] tabular-nums">
                {fillTemplate(pricing.hoursLine, {
                  n: fmt.format(hours),
                  unit: plural.select(hours) === "one" ? pricing.hourOne : pricing.hourMany,
                })}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-on-deep-2">{pricing.timeNote}</p>
              <p className="mt-5 text-[14px] text-on-deep-2">{pricing.moneyLabel}</p>
              <p className="mt-1 text-[22px] font-semibold tracking-[-0.02em]">
                {moneyBefore}
                <AnimatedSum value={saved} fmt={fmt} currency={currency} />
                {moneyAfter}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-on-deep-2">{pricing.moneyNote}</p>
            </div>
            <Button href="#lead" variant="light" size="lg" className="w-full sm:w-auto sm:self-start">
              {pricing.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
