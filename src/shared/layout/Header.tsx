import { useEffect, useState } from "react";
import CTAButton from "../ui/CTAButton";
import { useScrollListener } from "../hooks/useScrollListener";
import { SCROLL_THRESHOLDS } from "../constants/ui";

/**
 * ヘッダーコンポーネント
 * CRO最適化：スクロール時の視認性向上、Thumb Zone最適化、ブランド強化
 * パフォーマンス最適化：統合されたスクロールリスナーを使用
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // パフォーマンス最適化：統合されたスクロールリスナーを使用（複数コンポーネントで個別リスナーを防ぐ）
  useScrollListener(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLDS.HEADER_SCROLLED);
  });

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        {/* ブランド部分：組織名 */}
        <div className="flex min-w-0 flex-1 items-center">
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold leading-tight text-brand-dark sm:text-base md:text-lg">
              <span className="hidden lg:inline">
                オンライン起業塾マスタープログラム
              </span>
              <span className="hidden sm:inline lg:hidden">
                オンライン起業塾マスタープログラム
              </span>
              <span className="sm:hidden">起業塾マスタープログラム</span>
            </div>
            <div className="hidden text-xs font-medium text-brand-muted sm:block">
              訪問看護ステーション開業支援
            </div>
          </div>
        </div>

        {/* CTAボタン：Thumb Zone最適化 */}
        <div className="ml-4 flex-shrink-0">
          <CTAButton
            href="#contact"
            size="default"
            className="min-h-[44px] px-6 py-2.5 text-sm font-bold shadow-[0_4px_12px_rgba(255,107,0,0.3)] transition-all hover:shadow-[0_6px_16px_rgba(255,107,0,0.4)] sm:px-8 sm:py-3 sm:text-base"
          >
            <span className="hidden sm:inline">無料個別相談を申し込む</span>
            <span className="sm:hidden">無料相談</span>
          </CTAButton>
        </div>
      </div>
    </header>
  );
};

export default Header;

