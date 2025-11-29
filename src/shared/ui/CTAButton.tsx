import { memo, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";
// タッチターゲットサイズ定数（コメント参照用、実際の値はsizeClassesで直接指定）

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;
  size?: "small" | "default" | "large";
};

// タッチターゲットサイズ（保守性向上：TOUCH_TARGETS定数を参照）
// 注意：Tailwindの動的クラス生成には制限があるため、定数値は直接使用
const sizeClasses: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  small: "min-h-[44px] px-8 py-3.5 text-base", // 最小タッチターゲット（WCAG推奨、TOUCH_TARGETS.MINIMUM）
  default: "min-h-[48px] px-10 py-4 text-lg md:px-12 md:py-5", // 推奨タッチターゲット（TOUCH_TARGETS.RECOMMENDED）
  large: "min-h-[56px] px-12 py-5 text-xl md:px-14 md:py-6 md:text-2xl", // 大きなタッチターゲット（TOUCH_TARGETS.LARGE）
};

/**
 * CTAボタンコンポーネント
 * パフォーマンス最適化：React.memoで不要な再レンダリングを防止
 */
const CTAButton = memo<CTAButtonProps>(
  ({
    children,
    href,
    onClick,
    className = "",
    type = "button",
    isLoading = false,
    disabled = false,
    size = "default",
  }) => {
    const isExternalLink = href?.startsWith("http");

    const content = (
      <>
        <div className="absolute inset-0 bg-white/20 transition-opacity group-hover:bg-white/30" />
        <div className={cn("relative flex items-center justify-center gap-3", sizeClasses[size])}>
          <span className="font-bold tracking-wide text-white">
            {isLoading ? "送信中..." : children}
          </span>
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noreferrer noopener" : undefined}
          className={cn(
            "group relative block overflow-hidden rounded-[50px] text-center shadow-cta transition-all duration-300 gradient-cta transform hover:-translate-y-0.5 hover:shadow-cta-hover active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale",
            className
          )}
        >
          {content}
        </a>
      );
    }

    const isDisabled = disabled || isLoading;

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        className={cn(
          "group relative w-full overflow-hidden rounded-[50px] shadow-cta transition-all duration-300 gradient-cta transform hover:-translate-y-0.5 hover:shadow-cta-hover active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale",
          className
        )}
      >
        {content}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;


