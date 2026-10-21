import Image from "next/image";
import { Clock, CreditCard, MapPin, Money, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Dict, JobsDict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";

const chipIcons = [Money, Sparkle, Clock, CreditCard];

// Same layout as the payouts hero: copy on top, a wide stage with the product
// below, cut off by the stage's bottom edge.
export function JobsHero({ t, j }: { t: Dict; j: JobsDict }) {
  const { hero } = j;
  const { phone } = hero;
  return (
    <section id="top" className="relative pt-[156px] pb-16 md:pt-[184px] md:pb-24">
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
          <Button href="#business" size="lg" variant="ghost" className="w-full sm:w-auto">
            {hero.soft}
          </Button>
        </div>

        {/* Stage: the contractor app in the middle, people around it */}
        <div
          className="rise relative mt-14 h-[480px] overflow-hidden rounded-[2rem] bg-accent sm:h-[540px] lg:mt-16 lg:h-[560px]"
          style={{ animationDelay: "280ms" }}
        >
          <div className="absolute inset-y-0 left-0 hidden w-[calc(50%-200px)] lg:block">
            <Portrait photo={hero.photos[0]} className="absolute top-12 right-[46%] left-10" />
            <Portrait photo={hero.photos[1]} className="absolute top-36 right-6 left-[58%]" />
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-[calc(50%-200px)] lg:block">
            <Portrait photo={hero.photos[2]} className="absolute top-36 right-[58%] left-6" />
            <Portrait photo={hero.photos[3]} className="absolute top-12 right-10 left-[46%]" />
          </div>

          <div className="absolute top-10 left-1/2 w-[300px] -translate-x-1/2 sm:top-12 sm:w-[340px]">
            <div className="rounded-t-[48px] bg-[#0b0e16] p-[9px] pb-0 shadow-float">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Portrait({ photo, className }: { photo: { src: string; alt: string }; className: string }) {
  return (
    <div className={`aspect-[4/5] overflow-hidden rounded-tile bg-[#4563a6] shadow-soft ${className}`}>
      <div className="relative h-full w-full">
        <Image src={asset(photo.src)} alt={photo.alt} fill sizes="200px" className="object-cover object-[50%_20%]" />
      </div>
    </div>
  );
}
