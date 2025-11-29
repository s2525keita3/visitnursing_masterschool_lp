/**
 * ROI（投資対効果）セクションコンテンツ
 * CRO最適化：88万円のコストを714万円のリターンとして再定義
 */

/**
 * ベネフィットアイコンの型定義
 * 型安全性を確保するためのリテラル型ユニオン
 */
export type RoiBenefitIcon =
  | "users"
  | "landmark"
  | "rocket"
  | "trending-up"
  | "shield-check";

/**
 * ROIベネフィットの型定義
 * 各ベネフィット項目の構造を厳密に定義
 */
export type RoiBenefit = {
  id: string;
  category: string;
  title: string;
  description: string;
  value: string;
  icon: RoiBenefitIcon;
};

export const roiData = {
  cost: "88万円",
  return: "約714万円",
  roi: "約8.1倍",
  mainTitle: "受講料88万円は「コスト」ではありません。",
  sectionTitle: "費用対効果",
  benefits: [
    {
      id: "hiring",
      category: "【即回収】",
      title: "採用コスト削減",
      description: "紹介会社を使わない自社採用スキーム構築。看護師2名の採用だけで、受講費の2倍以上のお釣りが来ます。",
      value: "+200万円",
      icon: "users" as const,
    },
    {
      id: "funding",
      category: "【資金】",
      title: "融資枠の拡大",
      description: "銀行員を唸らせる計画書で希望額＋αを実現。手元資金の厚みが心の安定に繋がります。",
      value: "+100万円",
      icon: "landmark" as const,
    },
    {
      id: "time",
      category: "【時間】",
      title: "早期開業の特急券",
      description: "50種以上のテンプレートで準備を4ヶ月短縮。2ヶ月分の売上を先取りし、機会損失を防ぎます。",
      value: "+150万円",
      icon: "rocket" as const,
    },
    {
      id: "profit",
      category: "【利益】",
      title: "営業利益の最大化",
      description: "KPI管理で「どんぶり勘定」を撤廃。初年度から確実に利益が出る体質を作ります。",
      value: "+214万円",
      icon: "trending-up" as const,
    },
    {
      id: "insurance",
      category: "【保険】",
      title: "専門家選びの失敗回避",
      description: "「訪問看護を知らない税理士」を選んでしまうリスクをゼロに。無駄な変更コストと時間をカットします。",
      value: "50万円相当",
      icon: "shield-check" as const,
    },
  ] as RoiBenefit[],
};
