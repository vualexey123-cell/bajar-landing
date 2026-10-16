import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Alternatives } from "@/components/alternatives";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Contractors } from "@/components/contractors";
import { Industries } from "@/components/industries";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Alternatives />
        <HowItWorks />
        <Features />
        <Industries />
        <Contractors />
        <Security />
        <Pricing />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </>
  );
}
