import { useMemo } from "react";

/**
 * アニメーション遅延を段階的に計算するカスタムフック
 * DRY原則に基づき、各コンポーネントでの重複コードを削減
 */
export const useStaggeredAnimation = (
  baseDelay: number,
  staggerInterval: number,
  index: number
): React.CSSProperties => {
  return useMemo(
    () => ({
      animationDelay: `${baseDelay + index * staggerInterval}s`,
    }),
    [baseDelay, staggerInterval, index]
  );
};




