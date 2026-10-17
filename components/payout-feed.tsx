"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle, ClockCountdown } from "@phosphor-icons/react";
import type { Dict } from "@/lib/i18n";

const STEP_MS = 1100;
const HOLD_MS = 2400;

// Rows flip from "processing" to "paid" one by one, then the registry resets.
export function PayoutFeed({ payouts, currency }: { payouts: Dict["features"]["payouts"]; currency: string }) {
  const { rows, pending, done } = payouts;
  const reduce = useReducedMotion();
  const [paid, setPaid] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const delay = paid >= rows.length ? HOLD_MS : STEP_MS;
    const t = setTimeout(() => setPaid((p) => (p >= rows.length ? 0 : p + 1)), delay);
    return () => clearTimeout(t);
  }, [paid, reduce, rows.length]);

  const count = reduce ? rows.length : paid;

  return (
    <div className="rounded-tile bg-bg p-2">
      <div className="flex items-center justify-between px-3 pt-2 pb-3 text-[13px] text-ink-2">
        <span>{payouts.registry}</span>
        <span className="tabular-nums" aria-live="polite">
          {payouts.sent.replace("{count}", String(count)).replace("{total}", String(rows.length))}
        </span>
      </div>
      <ul className="flex flex-col gap-1.5">
        {rows.map((r, i) => {
          const isPaid = i < count;
          return (
            <li key={r.name} className="flex items-center gap-3 rounded-chip bg-surface px-3 py-3 sm:px-4">
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 text-[13px] font-semibold text-ink-2"
              >
                {r.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-medium">{r.name}</span>
                <span className="block text-[13px] text-ink-2">{r.card}</span>
              </span>
              <span className="hidden text-[15px] font-semibold tabular-nums sm:block">{r.amount} {currency}</span>
              <span className="relative h-7 w-[124px] shrink-0">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={isPaid ? "paid" : "pending"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] font-medium ${
                      isPaid ? "bg-accent-soft text-accent-text" : "bg-surface-2 text-ink-2"
                    }`}
                  >
                    {isPaid ? (
                      <CheckCircle size={16} weight="fill" aria-hidden />
                    ) : (
                      <ClockCountdown size={16} aria-hidden />
                    )}
                    {isPaid ? done : pending}
                  </motion.span>
                </AnimatePresence>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
