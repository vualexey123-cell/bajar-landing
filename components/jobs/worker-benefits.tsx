import {
  ArrowDownLeft,
  CheckCircle,
  Circle,
  FileText,
  IdentificationCard,
  MapTrifold,
  Signature,
  Star,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { Dict, JobsDict } from "@/lib/i18n";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CellHead } from "@/components/features";

// Where the pay pins sit on the stylised map, in percent of the map box.
const pinSpots = [
  { left: "18%", top: "26%" },
  { left: "58%", top: "18%" },
  { left: "40%", top: "52%" },
  { left: "70%", top: "60%" },
  { left: "14%", top: "70%" },
];

// Bento of what the contractor app does, built like the features grid on the payouts page.
export function WorkerBenefits({ t, j }: { t: Dict; j: JobsDict }) {
  const b = j.benefits;
  const cur = t.ui.currency;
  return (
    <section aria-labelledby="benefits-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="benefits-title">{b.title}</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Gigs on a map */}
          <Reveal className="flex flex-col gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7 lg:row-span-2">
            <CellHead icon={MapTrifold} title={b.map.title} text={b.map.text} />
            <div aria-hidden className="relative min-h-[300px] flex-1 overflow-hidden rounded-tile bg-surface-2 sm:min-h-[340px]">
              <svg className="absolute inset-0 h-full w-full text-line" preserveAspectRatio="none" viewBox="0 0 400 300">
                <g fill="none" stroke="currentColor" strokeLinecap="round">
                  <path d="M-10 90 C 80 70, 160 120, 410 80" strokeWidth="14" />
                  <path d="M120 -10 C 140 90, 90 200, 130 310" strokeWidth="10" />
                  <path d="M-10 220 C 120 200, 260 250, 410 210" strokeWidth="10" />
                  <path d="M290 -10 C 270 100, 330 180, 300 310" strokeWidth="12" />
                  <path d="M-10 160 L 410 150" strokeWidth="5" />
                  <path d="M210 -10 L 220 310" strokeWidth="5" />
                </g>
              </svg>
              {b.map.pins.map((pin, i) => (
                <span
                  key={pin + i}
                  className={`absolute inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold tabular-nums shadow-soft ${
                    i === 2 ? "bg-ink text-bg" : "bg-surface text-ink"
                  }`}
                  style={pinSpots[i % pinSpots.length]}
                >
                  <Wallet size={14} weight="fill" className={i === 2 ? "" : "text-accent-text"} />
                  {pin}
                </span>
              ))}
              {/* You are here */}
              <span className="absolute top-[40%] left-[30%] grid size-5 place-items-center rounded-full bg-accent/30">
                <span className="size-2.5 rounded-full bg-accent ring-2 ring-surface" />
              </span>
            </div>
          </Reveal>

          {/* Payouts to the card */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-accent p-6 text-on-accent sm:p-8 lg:col-span-5">
            <CellHead icon={Wallet} title={b.payout.title} text={b.payout.text} tone="accent" />
            <ul aria-hidden className="flex flex-col gap-2">
              {b.payout.items.map((p) => (
                <li key={p.card} className="flex items-center gap-3 rounded-tile bg-surface p-3.5 text-ink">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-text">
                    <ArrowDownLeft size={18} weight="bold" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold tabular-nums">
                      {p.amount} {cur}
                    </span>
                    <span className="block truncate text-[13px] text-ink-2">{p.from}</span>
                  </span>
                  <span className="shrink-0 text-[13px] text-ink-2">{p.card}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Act signed on the phone */}
          <Reveal delay={0.1} className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-5">
            <CellHead icon={Signature} title={b.docs.title} text={b.docs.text} />
            <div aria-hidden className="flex items-center gap-3 rounded-tile bg-bg p-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-chip bg-surface">
                <FileText size={20} weight="bold" className="text-accent-text" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium">{b.docs.act}</span>
                <span className="block text-[13px] text-ink-2 tabular-nums">
                  {b.docs.sum} {cur}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-on-accent">
                {b.docs.sign}
              </span>
            </div>
          </Reveal>

          {/* Self-employed status */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-6">
            <CellHead icon={IdentificationCard} title={b.status.title} text={b.status.text} />
            <ol aria-hidden className="flex flex-col gap-1.5 rounded-tile bg-bg p-2">
              {b.status.steps.map((s, i) => {
                const done = i < b.status.steps.length - 1;
                return (
                  <li key={s} className="flex items-center gap-3 rounded-chip bg-surface px-4 py-3 text-[15px]">
                    {done ? (
                      <CheckCircle size={20} weight="fill" className="shrink-0 text-accent-text" />
                    ) : (
                      <Circle size={20} className="shrink-0 text-ink-2" />
                    )}
                    <span className={done ? "font-medium" : "text-ink-2"}>{s}</span>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Rating */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-deep p-6 text-on-deep sm:p-8 lg:col-span-6">
            <CellHead icon={Star} title={b.rating.title} text={b.rating.text} tone="deep" />
            <div aria-hidden className="flex flex-wrap items-end justify-between gap-4 rounded-tile bg-deep-2 p-5">
              <div>
                <span className="block text-[44px] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                  {b.rating.score}
                </span>
                <span className="mt-2 flex gap-0.5 text-accent">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={18} weight="fill" />
                  ))}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {b.rating.stats.map((s) => (
                  <span key={s} className="rounded-full bg-on-deep/10 px-3 py-1.5 text-[13px] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
