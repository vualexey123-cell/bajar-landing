import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

// Accent card that sends the reader to a neighbouring Bajar product.
// `theme` switches the palette, e.g. "theme-brand" for a business card on a warm page.
export function ProductBand({
  title,
  text,
  cta,
  href,
  theme = "",
}: {
  title: string;
  text: string;
  cta: string;
  href: string;
  theme?: string;
}) {
  return (
    <section className="pb-24 md:pb-36">
      <Container>
        <Reveal
          className={`${theme} flex flex-col gap-8 rounded-card bg-accent p-6 text-on-accent sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14`}
        >
          <div className="max-w-[640px]">
            <h2 className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-on-accent/85">{text}</p>
          </div>
          <Button href={href} size="lg" variant="light" className="w-full sm:w-auto">
            {cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
