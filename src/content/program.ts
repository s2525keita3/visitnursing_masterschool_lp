/**
 * プログラム詳細コンテンツ
 * セールスライティング最適化：要点を明確に、視覚的インパクトを最大化
 */

export type ProgramHighlight = {
  category: string;
  title: string;
  emphasis: string;
  description: string;
};

export type ProgramPhase = {
  phase: string;
  period: string;
  title: string;
  subtitle: string;
  months: {
    month: string;
    title: string;
    challenge: string;
    solution: string;
    weapon: string;
  }[];
};

export const programHighlights: ProgramHighlight[] = [
  {
    category: "カネ・戦略",
    title: "銀行員が納得せざるを得ない",
    emphasis: "「完璧な事業計画」",
    description: "が手に入る。",
  },
  {
    category: "ヒト・組織",
    title: "感覚人事からの脱却。",
    emphasis: "「稼げる人材」",
    description: "だけを見抜く採用術。",
  },
  {
    category: "集客・営業",
    title: "精神論一切なし。データに基づく",
    emphasis: "「断られない営業ルート」",
    description: "の構築。",
  },
];

export const programAnalogy = {
  icon: "💡",
  title: "理解を早める「例え話」",
  mainTitle: "起業は「プラモデル」と同じです。",
  description: [
    "多くの人は、説明書も読まず、パーツ（資金や人）を適当に集めて、接着剤で無理やりくっつけようとします。これでは完成しても、すぐに壊れてしまいます。",
    "私たちが渡すのは、「精巧な設計図（戦略）」と「完成されたパーツ（ツール）」、そして「プロの組み立て手順（ノウハウ）」です。あなたは、その手順通りに組み立てるだけ。だから、誰が作っても「頑丈で美しい完成品（黒字経営）」が出来上がるのです。",
  ],
};

/**
 * カリキュラムの5大領域
 * 網羅性を強調し、「これなら自分でもできる」という確信を生む
 */
export const curriculumAreas = [
  {
    id: "strategy",
    category: "【戦略】",
    title: "勝てる商圏選定・差別化コンセプト設計",
  },
  {
    id: "funding",
    category: "【資金】",
    title: "融資満額獲得・銀行員が唸る事業計画書作成",
  },
  {
    id: "hiring",
    category: "【採用】",
    title: "離職を防ぐ採用面接・給与テーブル設計",
  },
  {
    id: "marketing",
    category: "【集客】",
    title: "ケアマネジャーに選ばれる営業・マーケティング",
  },
  {
    id: "operations",
    category: "【運営】",
    title: "指定申請・レセプト請求・実地指導対策",
  },
] as const;

/**
 * 学習環境・サポート体制
 * 安心感を強調し、学習の継続性を担保
 */
export const learningEnvironment = {
  format: {
    title: "学習形式",
    description: "半年間のオンライン動画講義（スマホ・PCで24時間どこでも視聴可能）",
  },
  questions: {
    title: "質問サポート",
    description: "チャットでの質問は無制限（原則3営業日以内に回答）",
  },
  consultation: {
    title: "グループコンサル",
    description: "月1回 Zoomグループコンサル（2時間・他社の事例も共有）",
  },
} as const;

export const programRoadmap: ProgramPhase[] = [
  {
    phase: "Phase 1",
    period: "1〜2ヶ月目",
    title: "盤石な土台作り",
    subtitle: "「お金」と「戦略」の不安をゼロにする期間",
    months: [
      {
        month: "Month 1",
        title: "運営「黄金ルール」策定",
        challenge: "「営業時間・手当どうしよう…」",
        solution: "営業時間、オンコール手当、訪問単価、運営規程…。 迷いがちな重要項目に対し、利益と働きやすさを両立させる「失敗しない黄金ルール（最適解）」を最初からインストールします。",
        weapon: "迷いゼロ。そのまま使える「運営規程＆給与規定・決定版テンプレート」",
      },
      {
        month: "Month 2",
        title: "資金調達・事業計画",
        challenge: "「融資が通らなかったらどうしよう…」",
        solution: "銀行員が\"貸したくなる\"論理構成で、満額融資を引き出す資料作成。",
        weapon: "融資通過率90%超「事業計画書テンプレート」",
      },
    ],
  },
  {
    phase: "Phase 2",
    period: "3〜4ヶ月目",
    title: "最強の組織作り",
    subtitle: "「人」の悩み（離職・採用ミス）を未然に防ぐ期間",
    months: [
      {
        month: "Month 3",
        title: "採用メソッド",
        challenge: "「高い紹介料を払って、変な人が来たら…」",
        solution: "給与条件だけでなく、ビジョンに共感し\"稼げる人材\"だけをフィルタリングする技術。",
        weapon: "応募が殺到する「キラーワード入り求人票ひな形」",
      },
      {
        month: "Month 4",
        title: "鉄壁のルール作り・指定申請",
        challenge: "「手続きの不備」や「労務トラブル」の恐怖",
        solution: "難解な行政手続きを最短でクリアし、モンスター社員から会社を守る防波堤を作る。",
        weapon: "トラブル回避特化型「雇用契約書＆就業規則セット」",
      },
    ],
  },
  {
    phase: "Phase 3",
    period: "5〜6ヶ月目",
    title: "収益の爆発",
    subtitle: "「集客」と「数値」を支配し、自動操縦へ向かう期間",
    months: [
      {
        month: "Month 5",
        title: "依頼獲得の極意",
        challenge: "「営業経験がなく、何を話せばいいか分からない」",
        solution: "ケアマネジャー心理を逆算。口下手でも\"台本通り\"話すだけで依頼が来る仕組み。",
        weapon: "新人でもアポが取れる「魔法の営業トークスクリプト」",
      },
      {
        month: "Month 6",
        title: "数値管理（KPI）・黒字化",
        challenge: "「どんぶり勘定」による経営危機",
        solution: "訪問件数・単価・稼働率。「3つの数字」を見るだけで異常を検知し、即修正する経営手法。",
        weapon: "経営状況が一目でわかる「ダッシュボード管理Excel」",
      },
    ],
  },
];

