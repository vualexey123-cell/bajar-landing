import Link from "next/link";
import type { Dict } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Container, Logo } from "@/components/ui";

export function SiteFooter({ t }: { t: Dict }) {
  const { footer } = t;
  return (
    <footer className="pt-10 pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-12 border-t border-line pt-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-ink-2">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[14px] font-medium">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-ink-2 transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-[14px] font-medium">{footer.contacts}</p>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] text-ink-2">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.telegram} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                  Telegram {site.telegramHandle}
                </a>
              </li>
              <li>
                {t.ui.city}, {t.ui.country}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-[14px] text-ink-2">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
