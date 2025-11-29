/**
 * アニメーション関連の定数
 * マジックナンバーを定数化して可読性と保守性を向上
 */
export const ANIMATION_DELAYS = {
  BASE: 0.1,
  STAGGER: 0.1,
  HERO_TARGET: 0.1,
  HERO_TITLE: 0.2,
  HERO_OFFER: 0.25,
  HERO_CTA: 0.4,
  PROBLEMS_TITLE: 0.1,
  PROBLEMS_LIST: 0.2,
  PROBLEMS_SOLUTION: 0.5,
  STUDENT_RESULTS: 0.2,
} as const;

/**
 * アニメーション遅延計算のヘルパー関数
 * DRY原則：各コンポーネントで重複していたアニメーション遅延計算ロジックを共通化
 */
export const getAnimationDelay = (
  baseDelay: number,
  staggerInterval: number,
  index: number
): number => baseDelay + index * staggerInterval;

