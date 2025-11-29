import { memo, type ReactNode } from "react";
import { cn } from "../utils/cn";

type SectionProps = {
  children: ReactNode;
  tone?: "plain" | "muted" | "surface";
  id?: string;
  className?: string;
};

const backgrounds: Record<NonNullable<SectionProps["tone"]>, string> = {
  plain: "bg-white",
  muted: "section-gradient-alt", // 交互のグラデーションで視覚的区切りを強化
  surface: "section-gradient", // 交互のグラデーションで視覚的区切りを強化
};

/**
 * セクションコンポーネント
 * パフォーマンス最適化：React.memoで不要な再レンダリングを防止
 */
const Section = memo<SectionProps>(({ children, tone = "plain", id, className }) => (
  <section
    id={id}
    className={cn(
      "px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:py-40",
      backgrounds[tone],
      className
    )}
  >
    <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">{children}</div>
  </section>
));

Section.displayName = "Section";

export default Section;


