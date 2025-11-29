import { useState } from "react";
import { useScrollListener } from "../hooks/useScrollListener";
import CTAButton from "../ui/CTAButton";
import { cn } from "../utils/cn";
import { SCROLL_THRESHOLDS } from "../constants/ui";

/**
 * スクロール追従型CTAボタンコンポーネント
 * CRO最適化：スクロール時に画面下部に固定表示され、常にCTAを提示
 * スマホ最適化：高さ50px以上でタップしやすいサイズ
 * パフォーマンス最適化：統合されたスクロールリスナーを使用
 */
const ScrollToTopCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // パフォーマンス最適化：統合されたスクロールリスナーを使用（複数コンポーネントで個別リスナーを防ぐ）
  useScrollListener(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // スクロール閾値を超えたら表示（定数化）
    setIsVisible(scrollTop > SCROLL_THRESHOLDS.SCROLL_TO_TOP_SHOW);
  });

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300",
        "sm:bottom-6"
      )}
    >
      <CTAButton
        href="#contact"
        size="large"
        className={cn(
          "min-h-[50px] w-[calc(100vw-2rem)] max-w-sm text-base font-black",
          "shadow-[0_8px_32px_rgba(255,107,0,0.6)] animate-shake-slow",
          "sm:w-auto sm:min-w-[280px]"
        )}
      >
        無料説明会に申し込む
      </CTAButton>
    </div>
  );
};

export default ScrollToTopCTA;

