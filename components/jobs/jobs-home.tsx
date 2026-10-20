import { dictionaries, jobsDictionaries, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
import { JobsHero } from "@/components/jobs/jobs-hero";
import { JobsBusiness, JobsCategories, JobsWorkers } from "@/components/jobs/jobs-sections";

// The gig marketplace page for one language: /jobs/, /uz/jobs/, /en/jobs/.
export function JobsHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const j = jobsDictionaries[locale];
  // Same form as on the payouts page, with copy about posting gigs.
  const lead = {
    ...t.lead,
    title: j.lead.title,
    text: j.lead.text,
    benefits: j.lead.benefits,
    fields: { ...t.lead.fields, size: j.lead.size },
  };
  return (
    <>
      <SiteHeader t={t} locale={locale} page="jobs" nav={j.nav} ctaLabel={j.cta.primary} />
      <main>
        <JobsHero t={t} j={j} />
        <HowItWorks steps={j.steps} />
        <JobsBusiness j={j} />
        <JobsCategories j={j} />
        <JobsWorkers j={j} />
        <Faq faq={j.faq} />
        <LeadForm lead={lead} source="jobs" />
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  );
}
