import { Clock, CreditCard, MapPin, Money, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Dict, JobsDict } from "@/lib/i18n";
import { Button, Container } from "@/components/ui";
import { PortraitStage } from "@/components/jobs/portrait-stage";

const chipIcons = [Money, Sparkle, Clock, CreditCard];

// Same layout as the payouts hero: copy on top, a wide stage with the product
// below, cut off by the stage's bottom edge.
export function JobsHero({ t, j, hireHref }: { t: Dict; j: JobsDict; hireHref: string }) {
  const { hero } = j;
  const { phone } = hero;
  return (
    <section id="top" className="relative pt-[120px] pb-16 md:pt-[148px] md:pb-24">
      <Container>
        <h1 className="rise max-w-[20ch] text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
          {hero.title}
        </h1>
        <p
          className="rise mt-6 max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:text-[20px]"
          style={{ animationDelay: "80ms" }}
        >
          {hero.text}
        </p>
        <ul className="rise mt-7 flex flex-wrap gap-2" style={{ animationDelay: "140ms" }}>
          {hero.chips.map((c, i) => {
            const Icon = chipIcons[i % chipIcons.length];
            return (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium sm:px-3.5 sm:py-2 sm:text-[14px]"
              >
                <Icon size={17} weight="bold" className="text-accent-text" aria-hidden />
                {c}
              </li>
            );
          })}
        </ul>
        <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <Button href="#gigs" size="lg" className="w-full sm:w-auto">
            {hero.primary}
          </Button>
          <Button href={hireHref} size="lg" variant="ghost" className="w-full sm:w-auto">
            {hero.soft}
          </Button>
        </div>

        <PortraitStage photos={hero.photos}>
          <div className="relative h-[620px] overflow-hidden rounded-t-[39px] bg-bg px-4 pt-12">
            <span aria-hidden className="absolute top-[9px] left-1/2 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-[#0b0e16]" />
            <span aria-hidden className="absolute top-3.5 left-7 text-[12px] font-semibold">9:41</span>

            <div className="flex items-center justify-between gap-3">
              <p className="text-[19px] font-semibold tracking-[-0.02em]">{phone.title}</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-[12px] font-medium">
                <MapPin size={13} weight="fill" className="text-accent-text" aria-hidden />
                {phone.location}
              </span>
            </div>
            <div className="mt-3 flex gap-1.5">
              {phone.filters.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full px-3 py-1.5 text-[12px] font-medium ${
                    i === 0 ? "bg-ink text-bg" : "bg-surface text-ink-2"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {phone.items.map((it) => (
                <li key={it.title} className="rounded-[14px] bg-surface p-3.5">
                  <span className="block truncate text-[14px] font-semibold">{it.title}</span>
                  <span className="mt-0.5 block truncate text-[12px] text-ink-2">{it.meta}</span>
                  <span className="mt-2 flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-semibold tabular-nums">
                      {it.pay} {t.ui.currency}
                    </span>
                    <span className="text-[12px] text-ink-2">{phone.perShift}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </PortraitStage>
      </Container>
    </section>
  );
}

