import Image from "next/image";
import { CreditCard, FileText, Receipt, Signature } from "@phosphor-icons/react/dist/ssr";
import { contractors } from "@/lib/content";
import { asset } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const icons = {
  signature: Signature,
  card: CreditCard,
  receipt: Receipt,
  document: FileText,
} as const;

export function Contractors() {
  return (
    <section id="contractors" aria-labelledby="contractors-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-card bg-surface ring-1 ring-line ring-inset lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <SectionTitle className="max-w-[20ch]">
              <span id="contractors-title">{contractors.title}</span>
            </SectionTitle>
            <p className="mt-5 max-w-[48ch] text-[18px] leading-relaxed text-ink-2">{contractors.text}</p>

            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-12">
              {contractors.points.map((p) => {
                const Icon = icons[p.icon];
                return (
                  <li key={p.title}>
                    <span className="grid size-11 place-items-center rounded-chip bg-accent-soft text-accent-text">
                      <Icon size={22} weight="bold" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-ink-2">{p.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* The phone rises from the bottom edge of the card and is cut off by it */}
          <div className="relative flex h-[460px] justify-center overflow-hidden bg-accent-soft px-6 pt-12 sm:h-[540px] lg:h-auto lg:min-h-[600px] lg:p-0">
            <div className="w-[270px] shrink-0 sm:w-[300px] lg:absolute lg:top-16 lg:left-1/2 lg:w-[340px] lg:-translate-x-1/2">
              <div className="rounded-[50px] bg-[#0b0e16] p-[9px] shadow-float">
                <div className="relative overflow-hidden rounded-[41px]">
                  <Image
                    src={asset(contractors.image.src)}
                    width={786}
                    height={1704}
                    alt={contractors.image.alt}
                    sizes="(min-width: 1024px) 340px, 300px"
                    className="block h-auto w-full"
                  />
                  <span
                    aria-hidden
                    className="absolute top-[9px] left-1/2 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-[#0b0e16]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
