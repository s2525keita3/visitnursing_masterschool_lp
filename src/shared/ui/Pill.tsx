import { memo, type ComponentType, type ReactNode, type SVGProps } from "react";
import { cn } from "../utils/cn";

type PillProps = {
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: "brand" | "gold";
};

const classes: Record<NonNullable<PillProps["variant"]>, string> = {
  brand: "border border-brand-dark/15 bg-white/90 text-brand-dark shadow-card-soft",
  gold: "border border-brand-gold/30 bg-white/95 text-brand-gold shadow-card-soft",
};

/**
 * ピルコンポーネント（バッジ風のラベル）
 * DRY原則に基づき、各セクションで重複していたピルスタイルを統一
 * パフォーマンス最適化：React.memoで不要な再レンダリングを防止
 */
const Pill = memo<PillProps>(({ children, icon: Icon, variant = "brand" }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold tracking-wide",
      classes[variant]
    )}
  >
    {Icon ? <Icon className="h-4 w-4" /> : null}
    {children}
  </span>
));

Pill.displayName = "Pill";

export default Pill;


