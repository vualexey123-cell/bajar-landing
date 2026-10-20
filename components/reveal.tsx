"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Render as a list item when the block sits inside a <ul>.
  as?: "div" | "li";
};

// Fades a block up into place the first time it enters the viewport.
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Tag>
  );
}
