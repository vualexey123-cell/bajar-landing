import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { cta, hero } from "@/lib/content";
import { asset } from "@/lib/site";
import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section id="top" className="relative pt-[104px] pb-20 md:pt-[120px] md:pb-28">
      <Container>
        <div className="max-w-[1180px]">
          <p className="rise inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-[14px] font-medium text-accent-text">
            <SealCheck size={17} weight="fill" aria-hidden />
            {hero.chip}
          </p>
          <h1
            className="rise mt-6 text-[clamp(2.4rem,4.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-balance"
            style={{ animationDelay: "80ms" }}
          >
            {hero.title}
          </h1>
          <p
            className="rise mt-6 max-w-[48ch] text-[18px] leading-relaxed text-ink-2 md:text-[20px]"
            style={{ animationDelay: "160ms" }}
          >
            {hero.text}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Button href="#lead" size="lg" className="w-full sm:w-auto">
              {cta.primary}
            </Button>
            <Button href="#pricing" size="lg" variant="ghost" className="w-full sm:w-auto">
              {cta.soft}
            </Button>
          </div>
        </div>

        {/* Product shot: the company cabinet on a brand-blue stage, cut off at the bottom edge */}
        <div
          className="rise mt-14 overflow-hidden rounded-[2rem] bg-accent px-3 pt-3 sm:px-8 sm:pt-8 lg:mt-16 lg:px-12 lg:pt-12"
          style={{ animationDelay: "320ms" }}
        >
          <picture>
            <source media="(max-width: 639px)" srcSet={asset("/img/dashboard-mobile.webp")} width={1552} height={1072} />
            <img
              src={asset("/img/dashboard.webp")}
              width={2880}
              height={1520}
              alt="Кабинет компании в Bajar: баланс, выплаты по дням, документы на подпись и последние выплаты"
              fetchPriority="high"
              className="block h-auto w-full rounded-t-[14px] shadow-[0_-1px_0_rgb(255_255_255/0.25),0_24px_60px_-20px_rgb(8_14_40/0.55)] sm:rounded-t-[20px]"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}
