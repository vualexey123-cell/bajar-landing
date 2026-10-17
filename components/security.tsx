import { Bank, HardDrives, LockKey, Signature } from "@phosphor-icons/react/dist/ssr";
import type { Dict } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const icons = {
  server: HardDrives,
  bank: Bank,
  signature: Signature,
  lock: LockKey,
} as const;

export function Security({ t }: { t: Dict }) {
  const { security } = t;
  const fields = security.companyFields;
  const c = site.company;
  const hasCompany = Boolean(c.legalName);
  const companyRows = [
    [fields.stir, c.stir],
    [fields.address, c.address],
    [fields.bank, c.bank],
    [c.founderRole || fields.founder, c.founder],
  ].filter(([, v]) => v);

  return (
    <section aria-labelledby="security-title" className="pb-24 md:pb-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionTitle>
              <span id="security-title">{hasCompany ? security.titleWithCompany : security.title}</span>
            </SectionTitle>
            <p className="mt-5 max-w-[42ch] text-[18px] leading-relaxed text-ink-2">{security.text}</p>
            {hasCompany && (
              <dl className="mt-8 rounded-card bg-surface p-6 ring-1 ring-line ring-inset">
                <dt className="text-[13px] text-ink-2">{security.companyLabel}</dt>
                <dd className="mt-1 text-[18px] font-semibold tracking-[-0.02em]">{c.legalName}</dd>
                {companyRows.map(([k, v]) => (
                  <div key={k} className="mt-3 flex justify-between gap-4 text-[14px]">
                    <dt className="text-ink-2">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {security.items.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <li key={s.title}>
                <Reveal delay={i * 0.05} className="h-full rounded-card bg-surface p-6 sm:p-8">
                  <Icon size={30} weight="duotone" className="text-accent-text" aria-hidden />
                  <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
