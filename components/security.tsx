import { Bank, HardDrives, LockKey, Signature } from "@phosphor-icons/react/dist/ssr";
import { security } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const icons = {
  server: HardDrives,
  bank: Bank,
  signature: Signature,
  lock: LockKey,
} as const;

export function Security() {
  return (
    <section aria-labelledby="security-title" className="pb-24 md:pb-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal>
          <SectionTitle className="lg:sticky lg:top-28">
            <span id="security-title">{security.title}</span>
          </SectionTitle>
        </Reveal>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {security.items.map((s, i) => {
            const Icon = icons[s.icon];
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
