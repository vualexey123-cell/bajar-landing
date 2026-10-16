import Link from "next/link";
import { site } from "@/lib/site";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  ghost: "bg-surface-2 text-ink hover:bg-line",
  light: "bg-on-deep text-deep hover:brightness-105",
};

const sizes = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,transform] duration-300 ease-out-expo active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg aria-hidden viewBox="0 0 64 64" className="size-8 shrink-0">
        <rect width="64" height="64" rx="16" fill="var(--accent)" />
        <rect x="11" y="10" width="11" height="44" rx="5.5" fill="var(--on-accent)" />
        <circle cx="39" cy="40" r="14" fill="var(--on-accent)" />
      </svg>
      <span className="text-[21px] font-semibold tracking-[-0.04em]">{site.name.toLowerCase()}</span>
    </span>
  );
}

