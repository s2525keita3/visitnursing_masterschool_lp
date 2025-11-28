import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  tone?: "plain" | "muted" | "surface";
  id?: string;
};

const backgrounds: Record<NonNullable<SectionProps["tone"]>, string> = {
  plain: "bg-transparent",
  muted: "bg-bg-cream",
  surface: "gradient-bg",
};

export const Section = ({ children, tone = "plain", id }: SectionProps) => (
  <section id={id} className={`px-6 py-12 md:py-24 ${backgrounds[tone]}`}>
    <div className="max-w-7xl mx-auto space-y-10">{children}</div>
  </section>
);

export default Section;


