import Image from "next/image";
import { asset } from "@/lib/site";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type AudiencesData = {
  title: string;
  items: { label: string; image: string; alt: string }[];
  tagsLabel: string;
  tags: string[];
};

// Studio portraits with a caption, then quick tags. Used for who the gigs suit
// (contractor page) and for who can be hired (Bajar Hire).
export function Audiences({ data: a }: { data: AudiencesData }) {
  return (
    <section aria-labelledby="audiences-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="audiences-title">{a.title}</span>
          </SectionTitle>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {a.items.map((it, i) => (
            <Reveal
              as="li"
              key={it.label}
              delay={0.05 * i}
              className="relative aspect-[4/5] overflow-hidden rounded-card bg-[#4563a6]"
            >
              <Image
                src={asset(it.image)}
                alt={it.alt}
                fill
                sizes="(min-width: 1024px) 300px, 46vw"
                className="object-cover object-[50%_20%]"
              />
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0e16]/70 to-transparent" />
              <span className="absolute right-4 bottom-4 left-4 text-[17px] leading-tight font-semibold tracking-[-0.02em] text-white sm:right-5 sm:bottom-5 sm:left-5 sm:text-[20px]">
                {it.label}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[15px] text-ink-2">{a.tagsLabel}</span>
          {a.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-surface px-3.5 py-2 text-[14px] font-medium">
              {tag}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
