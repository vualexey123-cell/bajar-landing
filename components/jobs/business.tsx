import Image from "next/image";
import { AddressBook, CheckCircle, Files, NotePencil, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { JobsDict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CellHead } from "@/components/features";

const poolPhotos = ["/img/courier.webp", "/img/retail.webp", "/img/it.webp", "/img/tutor.webp", "/img/builder.webp"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

// A brand-coloured card inside the warm section that sends companies to their block.
export function BusinessTeaser({ j }: { j: JobsDict }) {
  const { teaser } = j;
  return (
    <section aria-labelledby="teaser-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="theme-brand flex flex-col gap-8 rounded-card bg-accent p-6 text-on-accent sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14">
          <div className="max-w-[640px]">
            <h2
              id="teaser-title"
              className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance"
            >
              {teaser.title}
            </h2>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-on-accent/85">{teaser.text}</p>
          </div>
          <Button href="#business" size="lg" variant="light" className="w-full sm:w-auto">
            {teaser.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

// The company side in the brand palette, built like the features grid on the payouts page.
export function JobsBusiness({ j }: { j: JobsDict }) {
  const { business: b, cta } = j;
  return (
    <section id="business" aria-labelledby="business-title" className="pt-24 pb-24 md:pt-36 md:pb-36">
      <Container>
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <SectionTitle>
              <span id="business-title">{b.title}</span>
            </SectionTitle>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink-2">{b.text}</p>
          </div>
          <Button href="#lead" size="lg">
            {cta.primary}
          </Button>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Posting a shift */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7">
            <CellHead icon={NotePencil} title={b.post.title} text={b.post.text} />
            <div aria-hidden className="rounded-tile bg-bg p-2">
              <dl className="flex flex-col gap-1.5">
                {b.post.fields.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 rounded-chip bg-surface px-4 py-3">
                    <dt className="text-[14px] text-ink-2">{f.label}</dt>
                    <dd className="text-right text-[15px] font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-2 flex h-11 items-center justify-center rounded-full bg-accent text-[15px] font-medium text-on-accent">
                {b.post.publish}
              </span>
            </div>
          </Reveal>

          {/* Applicants */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-accent p-6 text-on-accent sm:p-8 lg:col-span-5">
            <CellHead icon={UsersThree} title={b.applicants.title} text={b.applicants.text} tone="accent" />
            <ul aria-hidden className="flex flex-col gap-2">
              {b.applicants.items.map((a) => (
                <li key={a.name} className="flex items-center gap-3 rounded-tile bg-on-accent/12 p-3 ring-1 ring-on-accent/20 ring-inset">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-on-accent/20 text-[13px] font-semibold">
                    {initials(a.name)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-medium">{a.name}</span>
                    <span className="block text-[13px] text-on-accent/75">{a.meta}</span>
                  </span>
                  {a.accepted ? (
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium">
                      <CheckCircle size={16} weight="fill" />
                      {b.applicants.accepted}
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-on-accent px-3.5 py-1.5 text-[13px] font-semibold text-accent">
                      {b.applicants.accept}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Own pool */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-5">
            <CellHead icon={AddressBook} title={b.pool.title} text={b.pool.text} />
            <div aria-hidden className="flex flex-wrap items-center gap-4 rounded-tile bg-bg p-3 pr-4">
              <div className="flex -space-x-3">
                {poolPhotos.map((src) => (
                  <span key={src} className="relative size-11 overflow-hidden rounded-full bg-[#4563a6] ring-[3px] ring-bg">
                    <Image src={asset(src)} alt="" fill sizes="44px" className="object-cover object-[50%_15%]" />
                  </span>
                ))}
              </div>
              <span className="rounded-full bg-surface px-4 py-2 text-[14px] font-medium">{b.pool.invite}</span>
            </div>
          </Reveal>

          {/* Documents and payout */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-deep p-6 text-on-deep sm:p-8 lg:col-span-7">
            <CellHead icon={Files} title={b.docs.title} text={b.docs.text} tone="deep" />
            <div aria-hidden className="rounded-tile bg-deep-2 p-5">
              <p className="text-[13px] text-on-deep-2">{b.docs.registry}</p>
              <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {b.docs.rows.map((r) => (
                  <div key={r.label}>
                    <dt className="text-[13px] text-on-deep-2">{r.label}</dt>
                    <dd className="mt-0.5 text-[17px] font-semibold tabular-nums">{r.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-5 flex h-11 items-center justify-center rounded-full bg-accent text-[15px] font-medium text-on-accent sm:inline-flex sm:px-6">
                {b.docs.pay}
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
