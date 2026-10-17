import type { Dict } from "@/lib/i18n";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

// Mid-page ask right after the feature grid, for readers convinced before the pricing.
export function DemoCta({ t }: { t: Dict }) {
  const { cta, demoCta } = t;
  return (
    <section aria-labelledby="demo-cta-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-card bg-accent-soft p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14">
          <div className="max-w-[640px]">
            <h2
              id="demo-cta-title"
              className="text-[clamp(1.75rem,2.8vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance"
            >
              {demoCta.title}
            </h2>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-ink-2">{demoCta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#lead" size="lg" className="w-full sm:w-auto">
              {cta.primary}
            </Button>
            <Button href="#pricing" size="lg" variant="light" className="w-full sm:w-auto">
              {cta.soft}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
