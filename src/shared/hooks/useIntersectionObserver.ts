import { useEffect, useRef, useState } from "react";
import { PERFORMANCE } from "../constants/ui";

type UseIntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

/**
 * Intersection Observer APIを使用した遅延読み込みフック
 * パフォーマンス最適化：ビューポートに入るまでコンポーネントを読み込まない
 * 注意：現在は未使用だが、将来的な遅延読み込み最適化のために保持
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = PERFORMANCE.INTERSECTION_THRESHOLD,
    rootMargin = PERFORMANCE.INTERSECTION_ROOT_MARGIN,
    triggerOnce = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
        }

        if (isVisible && triggerOnce && hasIntersected) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};

