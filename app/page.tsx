import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Facts } from "@/components/facts";
import { Comparison } from "@/components/comparison";
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
        <Facts />
        <Comparison />
        <Features />
        <HowItWorks />
        <Contractors />
        <Industries />
        <Pricing />
        <Security />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </>
  );
}
