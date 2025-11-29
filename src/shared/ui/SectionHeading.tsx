import { memo, type ReactNode } from "react";
import { cn } from "../utils/cn";

type SectionHeadingProps = {
  line1: ReactNode;
  line2: ReactNode;
  className?: string;
};

/**
 * セクション見出しの共通コンポーネント
 * DRY原則に基づき、各セクションで重複していた見出しパターンを統一
 * パフォーマンス最適化：React.memoで不要な再レンダリングを防止
 */
export const SectionHeading = memo<SectionHeadingProps>(
  ({ line1, line2, className = "" }) => {
    return (
      <h2
        className={cn(
          "text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl",
          className
        )}
      >
        <span className="block text-brand-dark">{line1}</span>
        <span className="mt-2 block text-brand-orange">{line2}</span>
      </h2>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

