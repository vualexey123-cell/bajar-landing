import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

// Card that sends the reader to a neighbouring Bajar product, in the page's palette:
// "accent" is the bright brand colour, "deep" the near-black one.
export function ProductBand({
  title,
  text,
  cta,
  href,
  tone = "accent",
}: {
  title: string;
  text: string;
  cta: string;
  href: string;
  tone?: "accent" | "deep";
}) {
  const deep = tone === "deep";
  return (
    <section className="pb-24 md:pb-36">
      <Container>
        <Reveal
          className={`flex flex-col gap-8 rounded-card p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14 ${
            deep ? "bg-deep text-on-deep" : "bg-accent text-on-accent"
          }`}
        >
          <div className="max-w-[640px]">
            <h2 className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
              {title}
            </h2>
            <p className={`mt-4 max-w-[56ch] text-[17px] leading-relaxed ${deep ? "text-on-deep-2" : "text-on-accent/85"}`}>
              {text}
            </p>
          </div>
          <Button href={href} size="lg" variant={deep ? "primary" : "light"} className="w-full sm:w-auto">
            {cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
