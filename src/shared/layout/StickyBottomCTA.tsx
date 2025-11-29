import { useState } from "react";
import CTAButton from "../ui/CTAButton";
import { useScrollListener } from "../hooks/useScrollListener";
import { SCROLL_THRESHOLDS } from "../constants/ui";

/**
 * ページ下部に固定表示されるCTAボタンコンポーネント
 * CRO最適化：常にCTAを表示し、コンバージョン機会を最大化
 * パフォーマンス最適化：統合されたスクロールリスナーを使用
 */
const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  // スクロール位置に応じて表示/非表示を制御
  // パフォーマンス最適化：統合されたスクロールリスナーを使用（複数コンポーネントで個別リスナーを防ぐ）
  useScrollListener(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    // フッター手前でCTAを非表示（定数化）
    setIsVisible(distanceFromBottom > SCROLL_THRESHOLDS.STICKY_CTA_HIDE);
  });

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-dark/10 bg-white/98 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
        {/* 左側：メッセージ */}
        <div className="hidden flex-1 items-center gap-3 sm:flex">
          <p className="text-sm font-semibold text-brand-dark md:text-base">
            無料セミナーで「経営の正解」を体感しませんか？
          </p>
        </div>

        {/* 右側：CTAボタン */}
        <div className="flex flex-1 items-center justify-end gap-3 sm:flex-initial">
          <CTAButton
            href="#contact"
            size="large"
            className="w-full min-h-[48px] text-base font-black shadow-[0_8px_32px_rgba(255,107,0,0.5)] transition-all hover:shadow-[0_12px_40px_rgba(255,107,0,0.6)] sm:w-auto sm:min-w-[280px]"
          >
            無料説明会に申し込む
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;

