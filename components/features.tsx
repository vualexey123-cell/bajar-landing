import Image from "next/image";
import { Code, Files, LinkSimple, Wallet } from "@phosphor-icons/react/dist/ssr";
import { features } from "@/lib/content";
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

const avatars = [
  { src: "/img/courier.webp", alt: "" },
  { src: "/img/retail.webp", alt: "" },
  { src: "/img/it.webp", alt: "" },
  { src: "/img/tutor.webp", alt: "" },
];

export function Features() {
  const f = features;

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
          {/* Payouts: the hero cell */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7 lg:row-span-2">
            <CellHead icon={Wallet} title={f.payouts.title} text={f.payouts.text} />
            <PayoutFeed />
          </Reveal>

          {/* Documents */}
          <Reveal
            delay={0.05}
            className="relative overflow-hidden rounded-card bg-accent p-6 text-on-accent sm:p-8 lg:col-span-5"
          >
            <CellHead icon={Files} title={f.docs.title} text={f.docs.text} tone="accent" />
            <div aria-hidden className="mt-8 flex gap-3">
              {f.docs.items.map((d, i) => (
                <div
                  key={d}
                  className="flex h-[104px] flex-1 flex-col justify-between rounded-tile bg-on-accent/12 p-4 ring-1 ring-on-accent/20 ring-inset"
                  style={{ transform: `translateY(${i * 10}px)` }}
                >
                  <span className="text-[15px] font-medium">{d}</span>
                  <span className="flex flex-col gap-1.5">
                    <span className="h-1.5 w-4/5 rounded-full bg-on-accent/30" />
                    <span className="h-1.5 w-3/5 rounded-full bg-on-accent/20" />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Onboarding */}
          <Reveal delay={0.1} className="rounded-card bg-surface p-6 sm:p-8 lg:col-span-5">
            <CellHead icon={LinkSimple} title={f.onboarding.title} text={f.onboarding.text} />
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-tile bg-bg p-3 pr-5">
              <div className="flex -space-x-3">
                {avatars.map((a) => (
                  <span
                    key={a.src}
                    className="relative size-11 overflow-hidden rounded-full bg-[#4563a6] ring-[3px] ring-bg"
                  >
                    <Image src={asset(a.src)} alt={a.alt} fill sizes="44px" className="object-cover object-[50%_15%]" />
                  </span>
                ))}
              </div>
              <p className="text-[14px] leading-snug text-ink-2">
                <span className="block font-mono text-[13px] text-ink">bajar.uz/join/k7f2</span>
                38 исполнителей подключились по ссылке
              </p>
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
