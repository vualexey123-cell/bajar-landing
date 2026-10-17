import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { alternatives } from "@/lib/content";
import { Container, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Cell = { text: string; ok: boolean };

function Mark({ ok, onDeep = false, strong = false }: { ok: boolean; onDeep?: boolean; strong?: boolean }) {
  // The 20px icon is centred on the first text line (24px, or 28px in the totals row).
  const offset = strong ? "mt-1" : "mt-0.5";
  return ok ? (
    <CheckCircle
      size={20}
      weight="fill"
      className={`${offset} shrink-0 ${onDeep ? "text-[#8fa6ff]" : "text-accent-text"}`}
      aria-hidden
    />
  ) : (
    <XCircle size={20} className={`${offset} shrink-0 opacity-55`} aria-hidden />
  );
}

// Manual transfers vs. Bajar: answers "why pay a fee if transfers are cheap".
export function Alternatives() {
  const { rows, columns } = alternatives;
  const last = rows.length - 1;
  const bajarCol = columns.length - 1;

  return (
    <section id="why" aria-labelledby="why-title" className="pb-24 md:pb-36">
      <Container>
        <Reveal className="max-w-[860px]">
          <SectionTitle>
            <span id="why-title">{alternatives.title}</span>
          </SectionTitle>
          {alternatives.text && (
            <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink-2">{alternatives.text}</p>
          )}
        </Reveal>

        {/* Desktop: one row per task, every cell in a row shares the same top edge and line height */}
        <Reveal className="mt-14 hidden lg:block">
          <div
            className="grid gap-x-3"
            style={{
              gridTemplateColumns: `220px repeat(${columns.length}, minmax(0, 1fr))`,
              gridTemplateRows: `auto repeat(${rows.length}, auto) 16px`,
            }}
          >
            {columns.map((c, i) => (
              <div
                key={`panel-${c}`}
                aria-hidden
                className={`rounded-card ${i === bajarCol ? "bg-deep dark:bg-accent-soft" : "bg-surface-2"}`}
                style={{ gridColumn: i + 2, gridRow: "1 / -1" }}
              />
            ))}

            {columns.map((c, i) => (
              <p
                key={c}
                className={`row-start-1 px-7 pt-7 pb-2 text-[15px] font-semibold ${i === bajarCol ? "text-on-deep" : "text-ink"}`}
                style={{ gridColumn: i + 2 }}
              >
                {c}
              </p>
            ))}

            {rows.map((r, ri) => {
              const strong = ri === last;
              const rowPad = strong ? "pt-5 pb-4" : "py-4";
              return (
                <div key={r.topic} className="contents">
                  <p
                    className={`col-start-1 ${rowPad} pr-4 font-semibold tracking-[-0.01em] ${
                      strong ? "text-[17px] leading-7" : "text-[16px] leading-6"
                    }`}
                    style={{ gridRow: ri + 2 }}
                  >
                    {r.topic}
                  </p>
                  {r.cells.map((cell: Cell, ci) => {
                    const bajar = ci === bajarCol;
                    return (
                      <p
                        key={ci}
                        className={`flex gap-3 px-7 ${rowPad} ${
                          strong
                            ? "border-t text-[19px] leading-7 font-semibold tracking-[-0.01em]"
                            : "text-[15px] leading-6"
                        } ${bajar ? "border-on-deep/15 text-on-deep" : "border-line text-ink-2"}`}
                        style={{ gridRow: ri + 2, gridColumn: ci + 2 }}
                      >
                        <Mark ok={cell.ok} onDeep={bajar} strong={strong} />
                        <span>
                          <span className="sr-only">{columns[ci]}: </span>
                          {cell.text}
                        </span>
                      </p>
                    );
                  })}
                </div>
              );
            })}
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
                    className={`flex gap-3 text-[15px] leading-6 ${ci === bajarCol ? "font-medium text-ink" : "text-ink-2"}`}
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
