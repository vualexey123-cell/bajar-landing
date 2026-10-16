import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { comparison } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Comparison() {
  const { rows } = comparison;

  return (
    <section aria-labelledby="comparison-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionTitle>
            <span id="comparison-title">{comparison.title}</span>
          </SectionTitle>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink-2">{comparison.text}</p>
        </Reveal>

        {/* Desktop: aligned three-column board */}
        <Reveal className="mt-14 hidden lg:block">
          <div
            className="grid grid-cols-[200px_1fr_1fr] gap-x-4"
            style={{ gridTemplateRows: `auto repeat(${rows.length}, auto) 24px` }}
          >
            <div aria-hidden className="col-start-2 rounded-card bg-surface-2" style={{ gridRow: "1 / -1" }} />
            <div aria-hidden className="col-start-3 rounded-card bg-deep dark:bg-accent-soft" style={{ gridRow: "1 / -1" }} />

            <p className="col-start-2 row-start-1 px-8 pt-8 pb-4 text-[15px] font-medium text-ink-2">
              {comparison.before}
            </p>
            <p className="col-start-3 row-start-1 px-8 pt-8 pb-4 text-[15px] font-medium text-on-deep-2">
              {comparison.after}
            </p>

            {rows.map((r, i) => (
              <div key={r.topic} className="contents">
                <p
                  className="col-start-1 pt-6 text-[20px] font-semibold tracking-[-0.02em]"
                  style={{ gridRow: i + 2 }}
                >
                  {r.topic}
                </p>
                <p
                  className="col-start-2 flex gap-3 px-8 py-5 text-[16px] leading-relaxed text-ink-2"
                  style={{ gridRow: i + 2 }}
                >
                  <XCircle size={22} className="mt-0.5 shrink-0 opacity-60" aria-hidden />
                  {r.before}
                </p>
                <p
                  className="col-start-3 flex gap-3 px-8 py-5 text-[16px] leading-relaxed text-on-deep"
                  style={{ gridRow: i + 2 }}
                >
                  <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-[#8fa6ff]" aria-hidden />
                  {r.after}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile and tablet: one card per topic */}
        <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
          {rows.map((r) => (
            <li key={r.topic} className="rounded-card bg-surface p-6">
              <p className="text-[19px] font-semibold tracking-[-0.02em]">{r.topic}</p>
              <p className="mt-4 flex gap-3 text-[15px] leading-relaxed text-ink-2">
                <XCircle size={20} className="mt-0.5 shrink-0 opacity-60" aria-hidden />
                <span>
                  <span className="sr-only">{comparison.before}: </span>
                  {r.before}
                </span>
              </p>
              <p className="mt-3 flex gap-3 text-[15px] leading-relaxed">
                <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
                <span>
                  <span className="sr-only">{comparison.after}: </span>
                  {r.after}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
