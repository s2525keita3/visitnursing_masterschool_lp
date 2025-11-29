import { memo, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  style?: CSSProperties; // アニメーション遅延などのインラインスタイル用
};

const paddingClasses: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-6",
  md: "p-8",
  lg: "p-8 md:p-10 lg:p-12",
};

/**
 * カードレイアウトの共通コンポーネント
 * DRY原則に基づき、各コンポーネントで重複していたカードスタイルを統一
 * パフォーマンス最適化：React.memoで不要な再レンダリングを防止
 */
export const Card = memo<CardProps>(
  ({ children, className = "", hover = true, padding = "md", style }) => {
    return (
      <div
        className={cn(
          "rounded-3xl border border-brand-dark/10 bg-white shadow-card",
          paddingClasses[padding],
          hover && "hover-lift",
          className
        )}
        style={style}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

