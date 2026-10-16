import { facts } from "@/lib/content";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Facts() {
  return (
    <section aria-label="Bajar в цифрах" className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0">
            {facts.map((f, i) => (
              <li key={f.value} className={`lg:px-8 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"}`}>
                <p className="text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                  {f.value}
                </p>
                <p className="mt-4 max-w-[28ch] text-[15px] leading-relaxed text-ink-2">{f.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
