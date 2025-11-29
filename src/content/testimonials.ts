export type Testimonial = {
  id: number;
  image: string;
  name: string;
  role: string;
  title: string;
  content: string; // 互換性のため残すが、今回はbefore/afterを主に使用
  before?: string; // 新規追加
  after?: string[]; // 新規追加（箇条書き）
  link?: string; // 新規追加（公式サイトURL）
  reverse: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/eme-houkan-daihyo.webp",
    name: "北山 様",
    role: "えめ訪問看護ステーション和歌山 代表",
    title: "「土地勘ゼロの地で、まさかの融資2,000万円超。\n『準備不足』の私が、開業3ヶ月で黒字化できた理由」",
    content: "融資資料と採用導線をセットで整えた結果、経営が最速で安定しました。",
    before: "何を準備すればいいか分からず、不安だけが残っていた状態。",
    after: [
      "想定の2倍、2,000万円超の融資を獲得",
      "開業3ヶ月で単月黒字化を達成",
      "8ヶ月目で月間500件超、毎月10件の新規依頼",
      "6ヶ月で2拠点目の準備に入れるほどキャッシュが安定",
    ],
    reverse: false,
  },
  {
    id: 2,
    image: "/first-houkan-daihyo.webp",
    name: "髙橋 様",
    role: "ファースト訪問看護ステーション灘 代表",
    title: "「訪看未経験、開業直前まで夜勤漬け…\nそんな私が『年商3億円・月間1,600件』を作れた」",
    content: "週次KPIレビューとSlack相談のスピード感が圧倒的。現場の迷いが消え、数字で意思決定できるようになりました。",
    before: "訪看経験ゼロ。制度も設立も分からず、開業1週間前まで夜勤で時間がなかった。",
    after: [
      "マニュアルとテンプレートで最短ルート開業",
      "スタッフ19名、利用者260名へ拡大",
      "月間1,600件の『モンスター級』拠点へ成長",
      "年商3億円超を達成",
    ],
    reverse: true,
  },
  {
    id: 3,
    image: "/ashinara-houkan-daihyo.webp",
    name: "中村 様",
    role: "あしなら訪問看護ステーション 代表",
    title: "「東京23区の激戦区で、スタッフ30名の組織へ。\n経営者の『孤独』が、確信と『自信』に変わりました」",
    content: "マーケ導線と評価制度を整え、『紹介が止まらない理由』をようやく理解できました。",
    before: "経営者への転換期。何が不安かも分からない重圧と孤独で、夜も眠れなかった。",
    after: [
      "スタッフ約30名の組織へ成長",
      "月間1,200件を維持し、安定経営を実現",
      "激戦区で2拠点展開、1年以内に黒字化",
    ],
    reverse: false,
  },
];
