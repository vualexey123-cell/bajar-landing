import { dictionaries, getPaidDictionaries, pagePath, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { ProductBand } from "@/components/product-band";
import { GetPaidHero } from "@/components/getpaid/getpaid-hero";
import { GetPaidBenefits } from "@/components/getpaid/getpaid-benefits";

// "Get paid" for one language: /get-paid/, /uz/get-paid/, /en/get-paid/.
// Contractor side of Bajar Payouts, in the warm palette.
export function GetPaidHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const g = getPaidDictionaries[locale];
  return (
    <>
      <SiteHeader t={t} locale={locale} page="getpaid" cta={{ label: g.hero.primary, href: "#how" }} />
      <main className="theme-worker bg-bg text-ink">
        <GetPaidHero g={g} jobsHref={pagePath(locale, "jobs")} />
        <GetPaidBenefits t={t} g={g} />
        <HowItWorks steps={g.steps} />
        <ProductBand {...g.band} href={pagePath(locale, "jobs")} />
        <Faq faq={g.faq} />
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  );
}
