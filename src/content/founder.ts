/**
 * 講師データ
 * 権威性と希少性を強調し、コンバージョン率を最大化
 */

export type Badge = {
  label: string;
  value: string;
};

export type ProgramPhase = {
  phase: string;
  label: string;
  items: string[];
};

export const badges: Badge[] = [
  { label: "直営拠点", value: "5拠点" },
  { label: "年商規模", value: "5億円" },
  { label: "SNSフォロワー", value: "11万人" },
];

/**
 * 講師の実績データ
 * 権威性を強調
 */
export const instructorAchievements = {
  consultingCompanies: "50社以上",
  profitabilityRate: "94%",
  achievement: "コンサル実績50社以上・黒字化達成率94%",
} as const;

/**
 * 講師の希少性・緊急性
 * 個別コンサルティングの完全停止を強調
 */
export const instructorRarity = {
  status: "完全停止",
  normalPrice: "月額15万円",
  availability: "本スクールの受講生のみ",
  message: {
    title: "現在、講師「じょん」は新規の個別コンサルティングを【完全停止】しています。",
    subtitle:
      "通常月額15万円の顧問契約も満枠のため、彼から直接アドバイスを受けられるのは、本スクールの受講生のみです。",
  },
} as const;

export const programPhases: ProgramPhase[] = [
  {
    phase: "Phase 1",
    label: "【戦略・資金】勝てる事業設計",
    items: [
      "融資確定型 事業計画書の作成",
      "銀行員が納得するロジック構成とプレゼン手法",
      "損益分岐点（BEP）の算出と資金繰りシミュレーション",
      "エリアマーケティング選定",
      "競合分析と「勝てる立地」のデータ選定",
      "診療・介護報酬の基礎と収益構造の理解",
    ],
  },
  {
    phase: "Phase 2",
    label: "【環境・組織】盤石な基盤構築",
    items: [
      "指定申請・法人設立の実務",
      "最短で認可を取る申請書類と行政対応",
      "物件契約・備品選定のコスト最適化リスト",
      "リスクゼロの採用・労務設計",
      "トラブルを防ぐ就業規則・給与規定の策定",
      "欲しい人材だけを集める求人票と媒体選定",
    ],
  },
  {
    phase: "Phase 3",
    label: "【営業・集客】ロケットスタート戦略",
    items: [
      "再現性のある営業戦術",
      "ケアマネに刺さる営業トークスクリプト",
      "紹介が途切れない連携・報告の仕組み化",
      "Web・SNS集客の導線設計",
      "コストをかけず信頼を獲得するWebマーケティング",
    ],
  },
  {
    phase: "Phase 4",
    label: "【管理・経営】安定化への数値管理",
    items: [
      "経営ダッシュボードの構築",
      "ドンブリ勘定を脱却する予実管理とKPI設定",
      "管理者が育つ会議と教育のフレームワーク",
    ],
  },
];


