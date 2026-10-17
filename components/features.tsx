import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Files,
  Headset,
  LinkSimple,
  ListChecks,
  TelegramLogo,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { Dict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PayoutFeed } from "@/components/payout-feed";

function CellHead({
  icon: Icon,
  title,
  text,
  tone = "default",
}: {
  icon: React.ComponentType<{ size?: number; weight?: "bold"; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
  tone?: "default" | "accent" | "deep";
}) {
  const muted = tone === "accent" ? "text-on-accent/80" : tone === "deep" ? "text-on-deep-2" : "text-ink-2";
  const badge =
    tone === "accent"
      ? "bg-on-accent/15 text-on-accent"
      : tone === "deep"
        ? "bg-deep-2 text-on-deep"
        : "bg-accent-soft text-accent-text";
  return (
    <div>
      <span className={`grid size-11 place-items-center rounded-chip ${badge}`}>
        <Icon size={22} weight="bold" aria-hidden />
      </span>
      <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.025em]">{title}</h3>
      <p className={`mt-2 max-w-[42ch] text-[15px] leading-relaxed ${muted}`}>{text}</p>
    </div>
  );
}

const avatars = ["/img/courier.webp", "/img/retail.webp", "/img/it.webp", "/img/tutor.webp"];

// Status pill gets stronger as the task moves from review to paid.
const statusStyle: Record<string, string> = {
  review: "bg-surface-2 text-ink-2",
  accepted: "bg-accent-soft text-accent-text",
  paid: "bg-accent text-on-accent",
};

export function Features({ t }: { t: Dict }) {
  const f = t.features;
  const tasks = f.tasks;

  return (
    <section id="features" aria-labelledby="features-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="features-title">{f.title}</span>
          </SectionTitle>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink-2">{f.text}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Tasks: assign, accept, pay */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7">
            <CellHead icon={ListChecks} title={tasks.title} text={tasks.text} />
            <div className="rounded-tile bg-bg p-2">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 px-3 pt-2 pb-3 text-[13px] font-medium text-ink-2">
                {tasks.flow.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    {i > 0 && <ArrowRight size={13} weight="bold" aria-hidden />}
                    {step}
                  </li>
                ))}
              </ol>
              <ul className="flex flex-col gap-1.5">
                {tasks.items.map((it) => (
                  <li key={it.title} className="flex items-center gap-3 rounded-chip bg-surface px-3 py-3 sm:px-4">
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] leading-snug font-medium sm:truncate">{it.title}</span>
                      <span className="mt-0.5 block text-[13px] text-ink-2 sm:truncate">
                        {it.who} · <span className="whitespace-nowrap">{it.amount} {t.ui.currency}</span>
                      </span>
                    </span>
                    {it.status === "review" && (
                      <span
                        aria-hidden
                        className="hidden shrink-0 rounded-full bg-accent px-3 py-1 text-[13px] font-medium text-on-accent sm:inline-block"
                      >
                        {tasks.accept}
                      </span>
                    )}
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-medium ${statusStyle[it.status]}`}
                    >
                      {it.status === "paid" && <CheckCircle size={15} weight="fill" aria-hidden />}
                      {tasks.statuses[it.status as keyof typeof tasks.statuses]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Documents */}
          <Reveal
            delay={0.05}
            className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-card bg-accent p-6 text-on-accent sm:p-8 sm:pb-11 lg:col-span-5"
          >
            <CellHead icon={Files} title={f.docs.title} text={f.docs.text} tone="accent" />
            {/* A plain list on phones, a fanned row of sheets from sm up. */}
            <div aria-hidden className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              {f.docs.items.map((d, i) => (
                <div
                  key={d}
                  className="flex min-w-0 flex-1 items-center justify-between gap-4 rounded-tile bg-on-accent/12 p-4 ring-1 ring-on-accent/20 ring-inset sm:h-[104px] sm:translate-y-[calc(var(--i)*10px)] sm:flex-col sm:items-stretch sm:gap-0"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="truncate text-[15px] font-medium">{d}</span>
                  <span className="flex w-2/5 shrink-0 flex-col gap-1.5 sm:w-auto">
                    <span className="h-1.5 w-4/5 rounded-full bg-on-accent/30" />
                    <span className="h-1.5 w-3/5 rounded-full bg-on-accent/20" />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Payouts: tall cell with the live registry */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7 lg:row-span-2">
            <CellHead icon={Wallet} title={f.payouts.title} text={f.payouts.text} />
            <PayoutFeed payouts={f.payouts} currency={t.ui.currency} />
          </Reveal>

          {/* Onboarding */}
          <Reveal delay={0.05} className="rounded-card bg-surface p-6 sm:p-8 lg:col-span-5">
            <CellHead icon={LinkSimple} title={f.onboarding.title} text={f.onboarding.text} />
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-tile bg-bg p-3 pr-5">
              <div className="flex -space-x-3">
                {avatars.map((src) => (
                  <span key={src} className="relative size-11 overflow-hidden rounded-full bg-[#4563a6] ring-[3px] ring-bg">
                    <Image src={asset(src)} alt="" fill sizes="44px" className="object-cover object-[50%_15%]" />
                  </span>
                ))}
              </div>
              <p className="text-[14px] leading-snug text-ink-2">
                <span className="block font-mono text-[13px] text-ink">bajar.uz/join/k7f2</span>
                {f.onboarding.joined}
              </p>
            </div>
          </Reveal>

          {/* Dedicated manager: text left, portrait right */}
          <Reveal
            delay={0.1}
            className="grid grid-cols-1 overflow-hidden rounded-card bg-surface sm:grid-cols-[minmax(0,1fr)_200px] lg:col-span-5"
          >
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
              <CellHead icon={Headset} title={f.manager.title} text={f.manager.text} />
              <p className="inline-flex items-center gap-2 text-[14px] font-medium text-accent-text">
                <TelegramLogo size={18} weight="fill" aria-hidden />
                {f.manager.status}
              </p>
            </div>
            <div className="relative order-first min-h-[280px] bg-[#4563a6] sm:order-none sm:min-h-0">
              <Image
                src={asset(f.manager.image)}
                alt={f.manager.alt}
                fill
                sizes="(min-width: 640px) 200px, 92vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
          </Reveal>

          {/* API: full-width row, text left and request sample right */}
          <Reveal className="grid grid-cols-1 items-center gap-8 rounded-card bg-deep p-6 text-on-deep sm:p-8 lg:col-span-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-10">
            <CellHead icon={Code} title={f.api.title} text={f.api.text} tone="deep" />
            <pre className="overflow-x-auto rounded-tile bg-deep-2 p-5 font-mono text-[13px] leading-[1.7] text-on-deep-2">
              <code>
                <span className="text-[#8fa6ff]">POST</span> /v1/payouts{"\n"}
                {"{"}
                {"\n"}
                {"  "}&quot;contractor_id&quot;: &quot;ctr_8Ks2&quot;,{"\n"}
                {"  "}&quot;amount&quot;: <span className="text-on-deep">1500000</span>,{"\n"}
                {"  "}&quot;currency&quot;: &quot;UZS&quot;{"\n"}
                {"}"}
              </code>
            </pre>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
