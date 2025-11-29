import { useState } from "react";
import { useScrollListener } from "../hooks/useScrollListener";

/**
 * スクロール進捗を表示するプログレスバー
 * パフォーマンス最適化：統合されたスクロールリスナーを使用
 */
const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // パフォーマンス最適化：統合されたスクロールリスナーを使用（複数コンポーネントで個別リスナーを防ぐ）
  useScrollListener(() => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
    setScrollProgress(Math.min(Math.max(scroll, 0), 1)); // 0-1の範囲にクランプ
  });

  return (
    <div className="fixed top-0 left-0 z-[60] h-1 w-full bg-slate-200">
      <div
        className="h-full gradient-cta transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;


