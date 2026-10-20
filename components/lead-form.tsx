"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle, PaperPlaneTilt, TelegramLogo, EnvelopeSimple } from "@phosphor-icons/react";
import type { Dict } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "company" | "phone", string>>;

// Formats any input as +998 XX XXX XX XX.
function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("998")) d = d.slice(3);
  d = d.slice(0, 9);
  const parts = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  return parts.length ? `+998 ${parts.join(" ")}` : "";
}

const inputBase =
  "h-13 w-full rounded-chip border bg-bg px-4 text-[16px] text-ink transition-colors duration-200 placeholder:text-ink-2 focus:border-accent focus:outline-none focus-visible:outline-none";

// `source` tells the sales team which page the request came from.
export function LeadForm({ lead, source = "landing" }: { lead: Dict["lead"]; source?: string }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState<string>(lead.sizes[1]);

  const id = (k: string) => `${uid}-${k}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const digits = phone.replace(/\D/g, "");

    const next: Errors = {};
    if (name.length < 2) next.name = lead.errors.name;
    if (company.length < 2) next.company = lead.errors.company;
    if (digits.length !== 12) next.phone = lead.errors.phone;
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(id(first))?.focus();
      return;
    }

    setStatus("submitting");
    const payload = { name, company, phone: `+${digits}`, contractors: size, source };
    try {
      if (site.leadEndpoint) {
        const res = await fetch(site.leadEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        // Demo mode: no endpoint configured yet, so nothing leaves the browser.
        console.info("[lead form demo mode]", payload);
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const field = (key: keyof Errors) => ({
    id: id(key),
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? id(`${key}-error`) : undefined,
    className: `${inputBase} ${errors[key] ? "border-[#d64545]" : "border-line"}`,
  });

  const errorText = (key: keyof Errors) =>
    errors[key] ? (
      <p id={id(`${key}-error`)} className="mt-2 text-[14px] text-[#c93a3a] dark:text-[#ff8a8a]">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="lead" aria-labelledby="lead-title" className="pb-16 md:pb-24">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 overflow-hidden rounded-card bg-accent p-6 text-on-accent sm:p-10 lg:grid-cols-[1fr_minmax(0,540px)] lg:gap-16 lg:p-14">
          <div className="flex flex-col">
            <h2
              id="lead-title"
              className="max-w-[14ch] text-[clamp(2.25rem,4.4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
            >
              {lead.title}
            </h2>
            <p className="mt-5 max-w-[40ch] text-[18px] leading-relaxed text-on-accent/85">{lead.text}</p>

            <ul className="mt-8 grid gap-3">
              {lead.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16px] leading-snug">
                  <CheckCircle size={22} weight="fill" className="mt-px shrink-0 text-on-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-on-accent/12 px-4 text-[15px] font-medium transition-colors hover:bg-on-accent/20"
              >
                <TelegramLogo size={19} weight="fill" aria-hidden />
                {site.telegramHandle}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-on-accent/12 px-4 text-[15px] font-medium transition-colors hover:bg-on-accent/20"
              >
                <EnvelopeSimple size={19} weight="bold" aria-hidden />
                {site.email}
              </a>
            </div>
          </div>

          <div className="rounded-tile bg-surface p-6 text-ink shadow-float sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[420px] flex-col items-start justify-center"
                  role="status"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent-text">
                    <CheckCircle size={30} weight="fill" aria-hidden />
                  </span>
                  <p className="mt-6 text-[26px] font-semibold tracking-[-0.03em]">{lead.success.title}</p>
                  <p className="mt-2 max-w-[36ch] text-[16px] leading-relaxed text-ink-2">{lead.success.text}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[15px] font-medium text-accent-text underline-offset-4 hover:underline"
                  >
                    {lead.success.again}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <label htmlFor={id("name")} className="mb-2 block text-[14px] font-medium">
                      {lead.fields.name}
                    </label>
                    <input name="name" autoComplete="name" {...field("name")} />
                    {errorText("name")}
                  </div>
                  <div>
                    <label htmlFor={id("company")} className="mb-2 block text-[14px] font-medium">
                      {lead.fields.company}
                    </label>
                    <input name="company" autoComplete="organization" {...field("company")} />
                    {errorText("company")}
                  </div>
                  <div>
                    <label htmlFor={id("phone")} className="mb-2 block text-[14px] font-medium">
                      {lead.fields.phone}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+998 90 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      {...field("phone")}
                    />
                    {errorText("phone")}
                  </div>
                  <fieldset>
                    <legend className="mb-2 block text-[14px] font-medium">{lead.fields.size}</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {lead.sizes.map((s) => (
                        <label
                          key={s}
                          className={`flex h-11 cursor-pointer items-center justify-center rounded-chip border text-[14px] font-medium transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                            size === s
                              ? "border-accent bg-accent-soft text-accent-text"
                              : "border-line text-ink-2 hover:text-ink"
                          }`}
                        >
                          <input
                            type="radio"
                            name="size"
                            value={s}
                            checked={size === s}
                            onChange={() => setSize(s)}
                            className="sr-only"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {status === "error" && (
                    <p role="alert" className="rounded-chip bg-[#fdecec] px-4 py-3 text-[14px] text-[#9b2c2c] dark:bg-[#3a1d22] dark:text-[#ffb4b4]">
                      {lead.errors.network}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[16px] font-medium whitespace-nowrap text-on-accent transition-[background-color,transform,opacity] duration-300 ease-out-expo hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        {lead.submitting}
                        <span className="inline-flex gap-1" aria-hidden>
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="size-1.5 rounded-full bg-on-accent"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </span>
                      </>
                    ) : (
                      <>
                        {lead.submit}
                        <PaperPlaneTilt size={18} weight="bold" aria-hidden />
                      </>
                    )}
                  </button>
                  <p className="text-[13px] leading-relaxed text-ink-2">{lead.consent}</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
