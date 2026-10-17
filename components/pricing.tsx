"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  HardHat,
  Laptop,
  Storefront,
  Truck,
  VideoCamera,
} from "@phosphor-icons/react";
import { numberLocale, type Dict, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const industryIcons = {
  delivery: Truck,
  retail: Storefront,
  it: Laptop,
  education: GraduationCap,
  repair: HardHat,
  media: VideoCamera,
  other: Briefcase,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;

function fillTemplate(tpl: string, values: Record<string, string>) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
}

function AnimatedSum({
  value,
  fmt,
  currency,
  prefix = "",
}: {
  value: number;
  fmt: Intl.NumberFormat;
  currency: string;
  prefix?: string;
}) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, { stiffness: 140, damping: 26 });
  const text = useTransform(spring, (v) => `${prefix}${fmt.format(Math.round(v / 1000) * 1000)} ${currency}`);

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
  const sliderId = useId();
  const payoutsId = useId();
  const bankId = useId();
  const industryName = useId();
  const industries = t.industries;
  // The industry sets the picture and the example task; the sliders stay the visitor's own numbers.
  const [industry, setIndustry] = useState(0);
  const item = industries.items[industry];
  const [stop, setStop] = useState<number>(pricing.defaultStop);
  const [payoutStop, setPayoutStop] = useState<number>(pricing.defaultPayoutStop);
  const payouts = pricing.payoutStops[payoutStop];
  const hours = Math.round((payouts * pricing.minutesPerPayout) / 60);
  // What payouts cost the company today: the bank's transfer fee plus accounting hours.
  const [bankStop, setBankStop] = useState<number>(pricing.defaultBankStop);
  const bankRate = pricing.bankStops[bankStop];
  const bankFill = `${(bankStop / (pricing.bankStops.length - 1)) * 100}%`;
  const workCost = Math.round((payouts * pricing.minutesPerPayout * pricing.hourlyCost) / 60);
  const payoutsFill = `${(payoutStop / (pricing.payoutStops.length - 1)) * 100}%`;
  const volume = pricing.stops[stop];
  const tierIndex = pricing.tiers.findIndex((tier) => volume <= tier.upTo);
  const custom = volume > maxTier;
  const rate = custom ? null : pricing.tiers[tierIndex].rate;
  const fee = rate === null ? 0 : (volume * 1_000_000 * rate) / 100;
  const fill = `${(stop / (pricing.stops.length - 1)) * 100}%`;
  const bankFee = (volume * 1_000_000 * bankRate) / 100;
  // Bajar's commission replaces the card transfer fees, so the saving is today's costs minus it.
  const savings = bankFee + workCost - fee;
  const hoursText = (tpl: string) =>
    fillTemplate(tpl, {
      n: fmt.format(hours),
      unit: plural.select(hours) === "one" ? pricing.hourOne : pricing.hourMany,
    });

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="rounded-card bg-deep p-6 text-on-deep sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
            <h2
              id="pricing-title"
              className="text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance"
            >
              {pricing.title}
            </h2>
            <p className="max-w-[46ch] text-[17px] leading-relaxed text-on-deep-2">{pricing.text}</p>
          </div>

          <fieldset className="mt-10 min-w-0">
            <legend className="text-[15px] text-on-deep-2">{pricing.industryLabel}</legend>
            <div className="-mx-6 mt-3 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {industries.items.map((it, i) => {
                const Icon = industryIcons[it.id as keyof typeof industryIcons];
                const selected = i === industry;
                return (
                  <label
                    key={it.id}
                    className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-3.5 py-2.5 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-on-deep ${
                      selected ? "bg-on-deep text-deep" : "bg-deep-2 text-on-deep-2 hover:text-on-deep"
                    }`}
                  >
                    <input
                      type="radio"
                      name={industryName}
                      value={it.id}
                      checked={selected}
                      onChange={() => setIndustry(i)}
                      className="sr-only"
                    />
                    <Icon size={18} weight={selected ? "fill" : "regular"} aria-hidden />
                    {it.name}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[0.85fr_1.1fr_1fr]">
            {/* Industry photo with an example task on top */}
            <div className="relative aspect-square overflow-hidden rounded-tile bg-[#4563a6] sm:aspect-[16/10] md:aspect-auto md:min-h-[440px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={item.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <Image
                    src={asset(item.image)}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 92vw"
                    className="object-cover object-[50%_15%]"
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute inset-x-3 bottom-3 rounded-chip bg-deep/80 p-4 backdrop-blur-md"
                >
                  <p className="text-[12px] text-on-deep-2">{industries.taskLabel}</p>
                  <p className="mt-1 text-[16px] font-medium tracking-[-0.01em]">{item.task.title}</p>
                  <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="text-[13px] text-on-deep-2">
                      {item.task.qty} · {item.task.rate}
                    </span>
                    <span className="text-[16px] font-semibold tabular-nums">{item.task.total}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Industry context and the two sliders */}
            <div className="flex flex-col justify-between gap-10 py-2 md:px-2 xl:px-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.025em]">{item.name}</h3>
                  <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-on-deep-2">{item.text}</p>
                </motion.div>
              </AnimatePresence>

              <div>
                <div className="flex flex-col gap-1">
                  <label htmlFor={sliderId} className="text-[15px] text-on-deep-2">
                    {pricing.sliderLabel}
                  </label>
                  <output htmlFor={sliderId} className="text-[22px] font-semibold tracking-[-0.02em] tabular-nums">
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

                <div className="mt-8 flex flex-col gap-1">
                  <label htmlFor={payoutsId} className="text-[15px] text-on-deep-2">
                    {pricing.payoutsLabel}
                  </label>
                  <output htmlFor={payoutsId} className="text-[22px] font-semibold tracking-[-0.02em] tabular-nums">
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

                <div className="mt-8 flex flex-col gap-1">
                  <label htmlFor={bankId} className="text-[15px] text-on-deep-2">
                    {pricing.bankLabel}
                  </label>
                  <output htmlFor={bankId} className="text-[22px] font-semibold tracking-[-0.02em] tabular-nums">
                    {fmt.format(bankRate)}%
                  </output>
                </div>
                <input
                  id={bankId}
                  type="range"
                  min={0}
                  max={pricing.bankStops.length - 1}
                  step={1}
                  value={bankStop}
                  onChange={(e) => setBankStop(Number(e.target.value))}
                  aria-valuetext={`${fmt.format(bankRate)}%`}
                  className="range mt-4"
                  style={{ "--fill": bankFill } as React.CSSProperties}
                />

                <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2" aria-label={pricing.tiersLabel}>
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

            {/* Result: the saving leads; the breakdown shows how it adds up */}
            <div
              className="grid grid-cols-1 gap-8 rounded-tile bg-deep-2 p-6 sm:p-8 md:col-span-2 md:grid-cols-2 md:gap-x-10 xl:col-span-1 xl:grid-cols-1"
              aria-live="polite"
            >
              <div>
                {custom ? (
                  <p className="text-[22px] leading-snug font-medium tracking-[-0.02em] text-balance">{pricing.customNote}</p>
                ) : savings > 0 ? (
                  <>
                    <p className="text-[15px] text-on-deep-2">{pricing.savingsLabel}</p>
                    <p className="mt-2 text-[28px] leading-none font-semibold tracking-[-0.035em] sm:text-[36px] md:text-[32px] lg:text-[40px] xl:text-[clamp(2rem,2.4vw,2.6rem)]">
                      <AnimatedSum value={savings} fmt={fmt} currency={currency} />
                    </p>
                    <p className="mt-3 text-[16px] leading-snug text-on-deep">{hoursText(pricing.hoursExtra)}</p>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] text-on-deep-2">{pricing.timeLabel}</p>
                    <p className="mt-2 text-[28px] leading-tight font-semibold tracking-[-0.03em]">
                      {hoursText(pricing.hoursLine)}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-on-deep-2">{pricing.lowSavingsNote}</p>
                  </>
                )}
              </div>

              <div className="border-t border-on-deep/15 pt-6 md:row-span-2 md:border-t-0 md:border-l md:pt-0 md:pl-10 xl:row-span-1 xl:border-t xl:border-l-0 xl:pt-6 xl:pl-0">
                <dl className="grid gap-3 text-[14px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-on-deep-2">
                      {pricing.nowBankLabel} · {fmt.format(bankRate)}%
                    </dt>
                    <dd className="shrink-0 font-medium">
                      <AnimatedSum value={bankFee} fmt={fmt} currency={currency} />
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-on-deep-2">
                      {pricing.nowWorkLabel} · {fmt.format(hours)} {pricing.hourShort}
                    </dt>
                    <dd className="shrink-0 font-medium">
                      <AnimatedSum value={workCost} fmt={fmt} currency={currency} />
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-on-deep-2">
                      {pricing.feeLabel}
                      {!custom && <> · {fmt.format(rate ?? 0)}%</>}
                    </dt>
                    <dd className="shrink-0 font-medium">
                      {custom ? pricing.customShort : <AnimatedSum value={fee} fmt={fmt} currency={currency} prefix="−" />}
                    </dd>
                  </div>
                  {!custom && (
                    <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-on-deep/15 pt-4">
                      <dt className="text-on-deep-2">{pricing.totalLabel}</dt>
                      <dd className="shrink-0 font-medium">
                        <AnimatedSum value={volume * 1_000_000 + fee} fmt={fmt} currency={currency} />
                      </dd>
                    </div>
                  )}
                </dl>
                <p className="mt-5 text-[13px] leading-relaxed text-on-deep-2">
                  {pricing.timeNote} {pricing.moneyNote}
                </p>
              </div>

              <Button href="#lead" variant="light" size="lg" className="w-full self-end sm:w-auto sm:justify-self-start">
                {pricing.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
