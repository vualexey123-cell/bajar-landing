import { dictionaries, hireDictionaries, pagePath, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
import { ProductBand } from "@/components/product-band";
import { Audiences } from "@/components/jobs/audiences";
import { HireHero } from "@/components/hire/hire-hero";
import { HireFeatures } from "@/components/hire/hire-features";

// Bajar Hire for one language: /hire/, /uz/hire/, /en/hire/. Company side, brand palette.
export function HireHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const h = hireDictionaries[locale];
  // Same form as on the payouts page, with copy about posting gigs.
  const lead = {
    ...t.lead,
    title: h.lead.title,
    text: h.lead.text,
    benefits: h.lead.benefits,
    fields: { ...t.lead.fields, size: h.lead.size },
  };
  return (
    <>
      <SiteHeader t={t} locale={locale} page="hire" cta={{ label: h.cta.primary, href: "#lead" }} />
      <main>
        <HireHero h={h} />
        <HowItWorks steps={h.steps} />
        <HireFeatures h={h} />
        <Audiences data={h.roles} />
        <ProductBand {...h.band} href={pagePath(locale, "home")} />
        <Faq faq={h.faq} />
        <LeadForm lead={lead} source="hire" />
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  );
}
