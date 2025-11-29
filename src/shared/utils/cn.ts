/**
 * クラス名を結合するユーティリティ関数
 * Tailwind CSSクラスの競合を防ぎ、条件付きクラスを安全に結合
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

