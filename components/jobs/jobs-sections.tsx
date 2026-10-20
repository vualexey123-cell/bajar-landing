import Image from "next/image";
import {
  Broom,
  CheckCircle,
  Files,
  ForkKnife,
  Hammer,
  Headset,
  Laptop,
  Lightning,
  Package,
  Star,
  Storefront,
  TelegramLogo,
  Truck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { JobsDict } from "@/lib/i18n";
import { asset, site } from "@/lib/site";
import { Button, Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const businessIcons = { lightning: Lightning, star: Star, users: UsersThree, files: Files } as const;

const categoryIcons = {
  truck: Truck,
  package: Package,
  storefront: Storefront,
  event: ForkKnife,
  cleaning: Broom,
  repair: Hammer,
  calls: Headset,
  online: Laptop,
} as const;

export function JobsBusiness({ j }: { j: JobsDict }) {
  const { business, cta } = j;
  return (
    <section id="business" aria-labelledby="business-title" className="pb-24 md:pb-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="flex flex-col items-start">
          <SectionTitle>
            <span id="business-title">{business.title}</span>
          </SectionTitle>
          <p className="mt-5 max-w-[44ch] text-[18px] leading-relaxed text-ink-2">{business.text}</p>
          <Button href="#lead" size="lg" className="mt-8">
            {cta.primary}
          </Button>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {business.points.map((p, i) => {
            const Icon = businessIcons[p.icon as keyof typeof businessIcons];
            return (
              <Reveal as="li" key={p.title} delay={0.05 * i} className="rounded-card bg-surface p-6 sm:p-8">
                <span className="grid size-11 place-items-center rounded-chip bg-accent-soft text-accent-text">
                  <Icon size={22} weight="bold" aria-hidden />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.025em]">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function JobsCategories({ j }: { j: JobsDict }) {
  const { categories } = j;
  return (
    <section aria-labelledby="categories-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="categories-title">{categories.title}</span>
          </SectionTitle>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.items.map((c, i) => {
            const Icon = categoryIcons[c.icon as keyof typeof categoryIcons];
            return (
              <Reveal
                as="li"
                key={c.name}
                delay={0.03 * i}
                className="flex items-start gap-4 rounded-tile bg-surface p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-chip bg-accent-soft text-accent-text">
                  <Icon size={22} weight="bold" aria-hidden />
                </span>
                <span>
                  <span className="block text-[17px] font-semibold tracking-[-0.015em]">{c.name}</span>
                  <span className="mt-1 block text-[14px] leading-snug text-ink-2">{c.text}</span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function JobsWorkers({ j }: { j: JobsDict }) {
  const { workers } = j;
  return (
    <section id="workers" aria-labelledby="workers-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-card bg-deep text-on-deep lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <h2
              id="workers-title"
              className="max-w-[18ch] text-[clamp(2rem,3.6vw,3rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance"
            >
              {workers.title}
            </h2>
            <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-on-deep-2">{workers.text}</p>
            <ul className="mt-8 grid gap-3">
              {workers.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] leading-snug">
                  <CheckCircle size={22} weight="fill" className="mt-px shrink-0 text-[#8fa6ff]" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-on-deep px-7 text-base font-medium text-deep transition-[filter,transform] duration-300 hover:brightness-105 active:scale-[0.98]"
            >
              <TelegramLogo size={20} weight="fill" aria-hidden />
              {workers.cta}
            </a>
          </div>

          {/* The phone rises from the bottom edge of the card, as on the payouts page */}
          <div className="relative flex h-[440px] justify-center overflow-hidden bg-deep-2 px-6 pt-12 sm:h-[520px] lg:h-auto lg:min-h-[560px] lg:p-0">
            <div className="w-[260px] shrink-0 sm:w-[290px] lg:absolute lg:top-14 lg:left-1/2 lg:w-[320px] lg:-translate-x-1/2">
              <div className="rounded-[48px] bg-[#05070c] p-[9px] shadow-float">
                <div className="relative overflow-hidden rounded-[39px]">
                  <Image
                    src={asset("/img/contractor-app.webp")}
                    width={786}
                    height={1704}
                    alt={workers.imageAlt}
                    sizes="(min-width: 1024px) 320px, 290px"
                    className="block h-auto w-full"
                  />
                  <span
                    aria-hidden
                    className="absolute top-[9px] left-1/2 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-[#05070c]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
