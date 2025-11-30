/**
 * UI関連の定数
 * マジックナンバーを定数化して可読性と保守性を向上
 */

// スクロール関連
export const SCROLL_THRESHOLDS = {
  HEADER_SCROLLED: 50, // ヘッダーのスタイル変更閾値（px）
  STICKY_CTA_HIDE: 200, // フッター手前でCTAを非表示にする距離（px）
  SCROLL_TO_TOP_SHOW: 300, // スクロール追従CTAを表示する閾値（px）
} as const;

// パフォーマンス最適化
export const PERFORMANCE = {
  THROTTLE_DELAY: 16, // スクロールイベントのthrottle間隔（ms、60fps）
  INTERSECTION_ROOT_MARGIN: "50px", // Intersection ObserverのrootMargin
  INTERSECTION_THRESHOLD: 0.1, // Intersection Observerのthreshold
} as const;

// タッチターゲットサイズ（アクセシビリティ）
export const TOUCH_TARGETS = {
  MINIMUM: 44, // 最小タッチターゲットサイズ（px、WCAG推奨）
  RECOMMENDED: 48, // 推奨タッチターゲットサイズ（px）
  LARGE: 56, // 大きなタッチターゲットサイズ（px）
} as const;


