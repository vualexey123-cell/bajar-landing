import Image from "next/image";
import { CalendarBlank, MapPin, Plus } from "@phosphor-icons/react/dist/ssr";
import type { HireDict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";

const faces = ["/img/courier.webp", "/img/retail.webp", "/img/it.webp", "/img/builder.webp"];

// Same layout as the payouts hero, with a coded company cabinet on the stage:
// the week's shifts, how full each one is and whether recruiting is still on.
export function HireHero({ h }: { h: HireDict }) {
  const { hero, cta } = h;
  const { board } = hero;
  return (
    <section id="top" className="relative pt-[120px] pb-20 md:pt-[148px] md:pb-28">
      <Container>
        <div className="max-w-[1180px]">
          <h1 className="rise max-w-[22ch] text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            {hero.title}
          </h1>
          <p
            className="rise mt-6 max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:text-[20px]"
            style={{ animationDelay: "80ms" }}
          >
            {hero.text}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
            <Button href="#lead" size="lg" className="w-full sm:w-auto">
              {cta.primary}
            </Button>
            <Button href="#how" size="lg" variant="ghost" className="w-full sm:w-auto">
              {cta.soft}
            </Button>
          </div>
        </div>

        <div
          aria-hidden
          className="rise mt-14 overflow-hidden rounded-[2rem] bg-accent px-3 pt-3 sm:px-8 sm:pt-8 lg:mt-16 lg:px-12 lg:pt-12"
          style={{ animationDelay: "240ms" }}
        >
          <div className="rounded-t-[14px] bg-surface p-4 shadow-[0_-1px_0_rgb(255_255_255/0.25),0_24px_60px_-20px_rgb(8_14_40/0.55)] sm:rounded-t-[20px] sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-[20px] font-semibold tracking-[-0.02em] sm:text-[24px]">{board.title}</p>
                <span className="flex rounded-full bg-surface-2 p-1 text-[13px] font-medium">
                  {board.tabs.map((tab, i) => (
                    <span key={tab} className={`rounded-full px-3 py-1.5 ${i === 0 ? "bg-bg text-ink shadow-sm" : "text-ink-2"}`}>
                      {tab}
                    </span>
                  ))}
                </span>
              </div>
              <span className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-[14px] font-medium text-on-accent">
                <Plus size={16} weight="bold" />
                {board.add}
              </span>
            </div>

            <ul className="mt-6 flex flex-col gap-2">
              {board.items.map((s) => {
                const full = s.filled >= s.total;
                return (
                  <li
                    key={s.title}
                    className="grid grid-cols-1 items-center gap-3 rounded-tile bg-bg p-4 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_10.5rem] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.2fr)_10.5rem] lg:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[16px] font-semibold">{s.title}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 truncate text-[13px] text-ink-2">
                        <MapPin size={14} className="shrink-0" />
                        {s.place}
                      </p>
                    </div>
                    <p className="flex items-center gap-1.5 text-[14px] text-ink-2">
                      <CalendarBlank size={16} className="shrink-0" />
                      {s.when}
                    </p>
                    <div className="hidden items-center gap-3 lg:flex">
                      <span className="flex -space-x-2">
                        {faces.slice(0, Math.min(3, s.filled)).map((src) => (
                          <span key={src} className="relative size-8 overflow-hidden rounded-full bg-[#4563a6] ring-2 ring-bg">
                            <Image src={asset(src)} alt="" fill sizes="32px" className="object-cover object-[50%_15%]" />
                          </span>
                        ))}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-medium tabular-nums">
                          {board.filled.replace("{n}", String(s.filled)).replace("{total}", String(s.total))}
                        </span>
                        <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-surface-2">
                          <span
                            className="block h-full rounded-full bg-accent"
                            style={{ width: `${(s.filled / s.total) * 100}%` }}
                          />
                        </span>
                      </span>
                    </div>
                    <span
                      className={`hidden justify-self-end rounded-full px-3 py-1 text-[13px] font-medium sm:inline-block ${
                        full ? "bg-accent-soft text-accent-text" : "bg-surface-2 text-ink-2"
                      }`}
                    >
                      {full ? board.statuses.full : board.statuses.open}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
