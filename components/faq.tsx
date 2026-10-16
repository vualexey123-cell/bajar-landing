import { Plus } from "@phosphor-icons/react/dist/ssr";
import { faq } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pb-24 md:pb-36">
      <Container className="max-w-[880px]">
        <Reveal>
          <SectionTitle className="text-center">
            <span id="faq-title">{faq.title}</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-12 flex flex-col gap-2.5">
          {faq.items.map((item, i) => (
            <details key={item.q} name="faq" className="faq group rounded-tile bg-surface" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[17px] font-medium tracking-[-0.01em] sm:px-7 sm:py-6 sm:text-[18px]">
                {item.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 transition-transform duration-500 ease-out-expo group-open:rotate-45">
                  <Plus size={16} weight="bold" aria-hidden />
                </span>
              </summary>
              <p className="max-w-[64ch] px-6 pb-6 text-[16px] leading-relaxed text-ink-2 sm:px-7 sm:pb-7">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
