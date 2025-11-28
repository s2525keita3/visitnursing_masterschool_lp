import type { ComponentType, SVGProps, ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: "brand" | "gold";
};

const classes: Record<NonNullable<PillProps["variant"]>, string> = {
  brand: "bg-white/90 border border-brand-dark/15 text-brand-dark shadow-card-soft",
  gold: "bg-white/95 border border-brand-gold/30 text-brand-gold shadow-card-soft",
};

const Pill = ({ children, icon: Icon, variant = "brand" }: PillProps) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm tracking-wide font-semibold ${classes[variant]}`}>
    {Icon ? <Icon className="w-4 h-4" /> : null}
    {children}
  </span>
);

export default Pill;

