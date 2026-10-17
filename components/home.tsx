import { dictionaries, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Alternatives } from "@/components/alternatives";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Industries } from "@/components/industries";
import { Contractors } from "@/components/contractors";
import { Security } from "@/components/security";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";

// The whole landing page for one language. Each route (/, /uz/, /en/) renders this.
export function Home({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <>
      <SiteHeader t={t} locale={locale} />
      <main>
        <Hero t={t} />
        <Alternatives t={t} />
        <HowItWorks t={t} />
        <Features t={t} />
        <Industries t={t} />
        <Contractors t={t} />
        <Security t={t} />
        <Pricing t={t} locale={locale} />
        <Faq t={t} />
        <LeadForm t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
