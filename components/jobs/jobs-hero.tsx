import Image from "next/image";
import { CheckCircle, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import type { Dict, JobsDict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";

export function JobsHero({ t, j }: { t: Dict; j: JobsDict }) {
  const { hero, cta } = j;
  return (
    <section id="top" className="relative pt-[156px] pb-20 md:pt-[184px] md:pb-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div>
          <h1 className="rise text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            {hero.title}
          </h1>
          <p
            className="rise mt-6 max-w-[46ch] text-[18px] leading-relaxed text-ink-2 md:text-[20px]"
            style={{ animationDelay: "80ms" }}
          >
            {hero.text}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
            <Button href="#lead" size="lg" className="w-full sm:w-auto">
              {cta.primary}
            </Button>
            <Button href="#workers" size="lg" variant="ghost" className="w-full sm:w-auto">
              {cta.soft}
            </Button>
          </div>
        </div>

        {/* Stage: a contractor portrait with a sample gig feed and a payout toast on top */}
        <div
          className="rise relative h-[540px] overflow-hidden rounded-[2rem] bg-[#4563a6] sm:h-[600px]"
          style={{ animationDelay: "240ms" }}
        >
          <Image
            src={asset("/img/retail.webp")}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-[50%_15%]"
          />

          <p className="absolute top-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-surface/95 px-4 py-2.5 text-[14px] font-medium text-ink shadow-float backdrop-blur sm:top-6 sm:left-6">
            <CheckCircle size={18} weight="fill" className="shrink-0 text-accent-text" aria-hidden />
            {hero.toast}
          </p>

          <div className="absolute inset-x-3 bottom-3 rounded-tile bg-surface p-2 text-ink shadow-float sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[430px]">
            <p className="px-3 pt-2 pb-3 text-[13px] text-ink-2">{hero.feedLabel}</p>
            <ul className="flex flex-col gap-1.5">
              {hero.items.map((it, i) => (
                <li
                  key={it.title}
                  className={`rounded-chip px-4 py-3 ${i === 0 ? "bg-bg ring-1 ring-accent/30 ring-inset" : "bg-bg"}`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="min-w-0 truncate text-[15px] font-medium">{it.title}</span>
                    <span className="shrink-0 text-[15px] font-semibold tabular-nums">
                      {it.pay} {t.ui.currency}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3 text-[13px] text-ink-2">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <MapPin size={14} aria-hidden className="shrink-0" />
                      <span className="truncate">{it.place}</span>
                      <Clock size={14} aria-hidden className="ml-1 hidden shrink-0 sm:block" />
                      <span className="hidden truncate sm:inline">{it.time}</span>
                    </span>
                    <span className="shrink-0">{hero.perShift}</span>
                  </div>
                  {i === 0 && (
                    <span
                      aria-hidden
                      className="mt-2.5 flex h-8 items-center justify-center rounded-full bg-accent text-[13px] font-medium text-on-accent"
                    >
                      {hero.apply}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
