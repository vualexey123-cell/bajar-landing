import { dictionaries, jobsDictionaries, pagePath, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { ProductBand } from "@/components/product-band";
import { JobsHero } from "@/components/jobs/jobs-hero";
import { WorkerBenefits } from "@/components/jobs/worker-benefits";
import { GigBoard } from "@/components/jobs/gig-board";
import { Audiences } from "@/components/jobs/audiences";

// Bajar Gigs for one language: /jobs/, /uz/jobs/, /en/jobs/. Contractor side, warm palette.
export function JobsHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const j = jobsDictionaries[locale];
  return (
    <>
      <SiteHeader t={t} locale={locale} page="jobs" cta={{ label: j.hero.primary, href: "#gigs" }} />
      <main className="theme-worker bg-bg text-ink">
        <JobsHero t={t} j={j} hireHref={pagePath(locale, "hire")} />
        {/* Companies that land here are sent to Bajar Hire */}
        <ProductBand {...j.teaser} href={pagePath(locale, "hire")} theme="theme-brand" />
        <WorkerBenefits t={t} j={j} />
        <GigBoard t={t} j={j} locale={locale} />
        <HowItWorks steps={j.steps} />
        <Audiences data={j.audiences} />
        <ProductBand {...j.band} href={pagePath(locale, "getpaid")} />
        <Faq faq={j.faq} />
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  );
}
