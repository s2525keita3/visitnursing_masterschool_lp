import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  tone?: "plain" | "muted" | "surface";
  id?: string;
};

const backgrounds: Record<NonNullable<SectionProps["tone"]>, string> = {
  plain: "bg-transparent",
  muted: "bg-brand-light/40",
  surface: "bg-white/90 backdrop-blur",
};

export const Section = ({ children, tone = "plain", id }: SectionProps) => (
  <section id={id} className={`px-6 py-24 ${backgrounds[tone]}`}>
    <div className="max-w-6xl mx-auto space-y-10">{children}</div>
  </section>
);

export default Section;

