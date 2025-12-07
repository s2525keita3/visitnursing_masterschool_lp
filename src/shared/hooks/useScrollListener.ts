import { useEffect, useRef } from "react";
import { useThrottle } from "./useThrottle";
import { PERFORMANCE } from "../constants/ui";

type ScrollHandler = () => void;

/**
 * スクロールイベントリスナーを統合管理するカスタムフック
 * パフォーマンス最適化：複数のコンポーネントで個別にリスナーを登録するのを防ぎ、1つのリスナーで統合管理
 */
export const useScrollListener = (handler: ScrollHandler) => {
  const handlerRef = useRef<ScrollHandler>(handler);

  // 最新のハンドラーを常に参照
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  // スクロールイベントをthrottleしてパフォーマンスを最適化
  const throttledHandler = useThrottle(() => {
    handlerRef.current();
  }, PERFORMANCE.THROTTLE_DELAY);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandler, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandler);
  }, [throttledHandler]);
};




