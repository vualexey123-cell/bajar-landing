import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { alternatives } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Cell = { text: string; ok: boolean };

function Mark({ ok, onDeep = false }: { ok: boolean; onDeep?: boolean }) {
  return ok ? (
    <CheckCircle
      size={20}
      weight="fill"
      className={`mt-0.5 shrink-0 ${onDeep ? "text-[#8fa6ff]" : "text-accent-text"}`}
      aria-hidden
    />
  ) : (
    <XCircle size={20} className="mt-0.5 shrink-0 opacity-55" aria-hidden />
  );
}

// Manual transfers vs. bank mass payouts vs. Bajar: answers "why pay a fee if transfers are cheap".
export function Alternatives() {
  const { rows, columns } = alternatives;
  const last = rows.length - 1;

  return (
    <section id="why" aria-labelledby="why-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[860px]">
          <SectionTitle>
            <span id="why-title">{alternatives.title}</span>
          </SectionTitle>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink-2">{alternatives.text}</p>
        </Reveal>

        {/* Desktop: one row per task, Bajar column highlighted */}
        <Reveal className="mt-14 hidden lg:block">
          <div
            className="grid grid-cols-[190px_1fr_1fr_1fr] gap-x-3"
            style={{ gridTemplateRows: `auto repeat(${rows.length}, auto) 20px` }}
          >
            <div aria-hidden className="col-start-2 rounded-card bg-surface-2" style={{ gridRow: "1 / -1" }} />
            <div aria-hidden className="col-start-3 rounded-card bg-surface-2" style={{ gridRow: "1 / -1" }} />
            <div
              aria-hidden
              className="col-start-4 rounded-card bg-deep dark:bg-accent-soft"
              style={{ gridRow: "1 / -1" }}
            />

            {columns.map((c, i) => (
              <p
                key={c}
                className={`row-start-1 px-6 pt-7 pb-3 text-[15px] font-semibold ${i === 2 ? "text-on-deep" : "text-ink"}`}
                style={{ gridColumn: i + 2 }}
              >
                {c}
              </p>
            ))}

            {rows.map((r, ri) => (
              <div key={r.topic} className="contents">
                <p
                  className={`col-start-1 pt-5 text-[17px] font-semibold tracking-[-0.01em] ${ri === last ? "pt-6" : ""}`}
                  style={{ gridRow: ri + 2 }}
                >
                  {r.topic}
                </p>
                {r.cells.map((cell: Cell, ci) => {
                  const bajar = ci === 2;
                  const strong = ri === last;
                  return (
                    <p
                      key={ci}
                      className={`flex gap-3 px-6 py-4 leading-relaxed ${
                        strong ? "border-t pt-5 text-[19px] font-semibold tracking-[-0.01em]" : "text-[15px]"
                      } ${bajar ? "border-on-deep/15 text-on-deep" : "border-line text-ink-2"}`}
                      style={{ gridRow: ri + 2, gridColumn: ci + 2 }}
                    >
                      <Mark ok={cell.ok} onDeep={bajar} />
                      <span>
                        <span className="sr-only">{columns[ci]}: </span>
                        {cell.text}
                      </span>
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile and tablet: one card per task */}
        <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
          {rows.map((r) => (
            <li key={r.topic} className="rounded-card bg-surface p-6">
              <p className="text-[18px] font-semibold tracking-[-0.02em]">{r.topic}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {r.cells.map((cell: Cell, ci) => (
                  <li
                    key={ci}
                    className={`flex gap-3 text-[15px] leading-relaxed ${ci === 2 ? "font-medium text-ink" : "text-ink-2"}`}
                  >
                    <Mark ok={cell.ok} />
                    <span>
                      <span className="block text-[13px] text-ink-2">{columns[ci]}</span>
                      {cell.text}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[80ch] text-[13px] leading-relaxed text-ink-2">{alternatives.note}</p>
      </Container>
    </section>
  );
}
