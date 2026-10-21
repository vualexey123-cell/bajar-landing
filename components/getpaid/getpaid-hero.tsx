import Image from "next/image";
import { CreditCard, HandCoins, Headset, Receipt } from "@phosphor-icons/react/dist/ssr";
import type { GetPaidDict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";
import { PortraitStage } from "@/components/jobs/portrait-stage";

const chipIcons = [HandCoins, CreditCard, Receipt, Headset];

// Same layout as the gig page hero, with the real contractor app screen in the phone.
export function GetPaidHero({ g, jobsHref }: { g: GetPaidDict; jobsHref: string }) {
  const { hero } = g;
  return (
    <section id="top" className="relative pt-[120px] pb-16 md:pt-[148px] md:pb-24">
      <Container>
        <h1 className="rise max-w-[22ch] text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
          {hero.title}
        </h1>
        <p
          className="rise mt-6 max-w-[52ch] text-[18px] leading-relaxed text-ink-2 md:text-[20px]"
          style={{ animationDelay: "80ms" }}
        >
          {hero.text}
        </p>
        <ul className="rise mt-7 flex flex-wrap gap-2" style={{ animationDelay: "140ms" }}>
          {hero.chips.map((c, i) => {
            const Icon = chipIcons[i % chipIcons.length];
            return (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium sm:px-3.5 sm:py-2 sm:text-[14px]"
              >
                <Icon size={17} weight="bold" className="text-accent-text" aria-hidden />
                {c}
              </li>
            );
          })}
        </ul>
        <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <Button href="#how" size="lg" className="w-full sm:w-auto">
            {hero.primary}
          </Button>
          <Button href={jobsHref} size="lg" variant="ghost" className="w-full sm:w-auto">
            {hero.soft}
          </Button>
        </div>

        <PortraitStage photos={hero.photos}>
          <div className="relative overflow-hidden rounded-t-[39px]">
            <Image
              src={asset("/img/contractor-app.webp")}
              width={786}
              height={1704}
              alt={hero.phoneAlt}
              priority
              sizes="340px"
              className="block h-auto w-full"
            />
            <span aria-hidden className="absolute top-[9px] left-1/2 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-[#0b0e16]" />
          </div>
        </PortraitStage>
      </Container>
    </section>
  );
}
