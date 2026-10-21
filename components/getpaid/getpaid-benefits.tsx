import {
  ArrowDownLeft,
  ChatCircleDots,
  CheckCircle,
  ClockCountdown,
  DownloadSimple,
  FilePdf,
  FileText,
  ShieldCheck,
  Signature,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { Dict, GetPaidDict } from "@/lib/i18n";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CellHead } from "@/components/features";

// Bento of the contractor app, built like the features grid on the payouts page.
export function GetPaidBenefits({ t, g }: { t: Dict; g: GetPaidDict }) {
  const b = g.benefits;
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
          {/* Payout history */}
          <Reveal className="flex flex-col gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-7 lg:row-span-2">
            <CellHead icon={Wallet} title={b.history.title} text={b.history.text} />
            <ul aria-hidden className="mt-auto flex flex-col gap-1.5 rounded-tile bg-bg p-2">
              {b.history.items.map((p) => {
                const paid = p.status === "paid";
                return (
                  <li key={p.what} className="flex items-center gap-3 rounded-chip bg-surface px-3 py-3 sm:px-4">
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full ${
                        paid ? "bg-accent-soft text-accent-text" : "bg-surface-2 text-ink-2"
                      }`}
                    >
                      {paid ? <ArrowDownLeft size={18} weight="bold" /> : <ClockCountdown size={18} />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px] font-medium">{p.from}</span>
                      <span className="block truncate text-[13px] text-ink-2">{p.what}</span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="block text-[15px] font-semibold tabular-nums">
                        {p.amount} {cur}
                      </span>
                      <span className="block text-[12px] text-ink-2">
                        {b.history.statuses[p.status as keyof typeof b.history.statuses]}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Act to sign */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-accent p-6 text-on-accent sm:p-8 lg:col-span-5">
            <CellHead icon={Signature} title={b.act.title} text={b.act.text} tone="accent" />
            <div aria-hidden className="flex items-center gap-3 rounded-tile bg-surface p-3.5 text-ink">
              <span className="grid size-10 shrink-0 place-items-center rounded-chip bg-accent-soft">
                <FileText size={20} weight="bold" className="text-accent-text" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium">{b.act.doc}</span>
                <span className="block truncate text-[13px] text-ink-2 tabular-nums">
                  {b.act.company} · {b.act.sum} {cur}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-bg">{b.act.sign}</span>
            </div>
          </Reveal>

          {/* Status check */}
          <Reveal delay={0.1} className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-5">
            <CellHead icon={ShieldCheck} title={b.status.title} text={b.status.text} />
            <p aria-hidden className="flex items-center gap-2.5 rounded-tile bg-bg px-4 py-3.5 text-[15px] font-medium">
              <CheckCircle size={20} weight="fill" className="shrink-0 text-accent-text" />
              {b.status.check}
            </p>
          </Reveal>

          {/* Income statements */}
          <Reveal className="flex flex-col justify-between gap-8 rounded-card bg-surface p-6 sm:p-8 lg:col-span-6">
            <CellHead icon={FilePdf} title={b.docs.title} text={b.docs.text} />
            <div aria-hidden className="flex flex-wrap items-center gap-3 rounded-tile bg-bg p-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-chip bg-surface">
                <FilePdf size={20} weight="bold" className="text-accent-text" />
              </span>
              <span className="min-w-0 flex-1 text-[15px] font-medium">{b.docs.file}</span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-surface px-3.5 py-2 text-[13px] font-medium">
                <DownloadSimple size={15} weight="bold" />
                {b.docs.download}
              </span>
            </div>
          </Reveal>

          {/* Own support */}
          <Reveal delay={0.05} className="flex flex-col justify-between gap-8 rounded-card bg-deep p-6 text-on-deep sm:p-8 lg:col-span-6">
            <CellHead icon={ChatCircleDots} title={b.support.title} text={b.support.text} tone="deep" />
            <div aria-hidden className="flex flex-col gap-2 rounded-tile bg-deep-2 p-4">
              {b.support.chat.map((m) => (
                <p
                  key={m.text}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${
                    m.from === "you" ? "self-end bg-accent text-on-accent" : "self-start bg-on-deep/10"
                  }`}
                >
                  {m.text}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
