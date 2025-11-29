export type Benefit = {
  image: string;
  title: string;
  description: string;
};

export type StudentResult = {
  name: string;
  location: string;
  headline: string;
  videoPoster: string;
  videoUrl: string;
  website: string;
  before: string;
  after: string[];
  testimonial: string;
  // 画像デザインの改善：コンテキストタグとオーバーレイテキストを追加
  contextTag: string; // カード上部のタグ（例：「経営未経験から開業」）
  overlayHighlights: string[]; // 動画サムネイル上に表示する成果ハイライト（3-4点）
};

export const benefits: Benefit[] = [
  {
    image: "/benefit1.png",
    title: "数字で判断できる経営者になる",
    description:
      "市場調査と収支シミュレーションを使い、「なんとなく不安」という曖昧な状態から脱却。勝てる根拠を持って開業・運営できるようになります。",
  },
  {
    image: "/benefit2.png",
    title: "融資が通る事業計画書",
    description:
      "金融機関が最も重視するポイントを押さえた事業計画を自ら説明でき、開業資金と運転資金の不安を根本から解消します。",
  },
  {
    image: "/benefit3.png",
    title: "現場にいなくても回る仕組み",
    description:
      "カリスマ所長に頼らず、標準化されたマニュアルと業務フローで誰が運営しても同じ品質のケアを提供できる組織を構築します。",
  },
  {
    image: "/benefit4.png",
    title: "欲しい人材だけが集まる採用",
    description:
      "理念と条件に合った人材だけが集まるフィルターを設計し、早期離職によるコストとストレスを最小化します。",
  },
  {
    image: "/benefit5.png",
    title: "最短ルートの開業準備",
    description:
      "指定申請や備品選定など膨大なタスクの正解ルートをテンプレート化。無駄な調査時間を削減し、戦略立案に集中できます。",
  },
];

export const studentResults: StudentResult[] = [
  {
    name: "北山 様",
    location: "和歌山市／開業8ヶ月目",
    headline: "融資2,000万円超を獲得！開業3ヶ月で単月黒字化",
    videoPoster: "/kitayama-thumbnail.png",
    videoUrl: "https://youtu.be/-3gkNUKq5WM",
    website: "https://eme-houkan.com/",
    contextTag: "繋がりの無い土地 大阪 和歌山",
    overlayHighlights: [
      "経営未経験",
      "資金に悩み",
      "毎月10名採用問い合わせ",
      "融資2000万以上成功",
      "開業から3か月黒字化",
    ],
    before:
      "何を準備すればいいか分からず、不安だけが残っていた。",
    after: [
      "想定の2倍、2,000万円超の融資を獲得。",
      "開業3ヶ月で黒字化を達成。",
      "8ヶ月目で月間500件超、毎月10件の新規依頼が入る状態に。",
    ],
    testimonial:
      "「準備の仕方を知らなかったら、お金を借りるのが怖かった。教わった通りにやっただけで2,000万円以上借りられました。採用の反応も全然違います。」",
  },
  {
    name: "高橋 様",
    location: "神戸市灘区／開業4年目",
    headline: "訪看未経験＆夜勤明けでも月間1,600件の\"モンスター級\"拠点へ",
    videoPoster: "/takahashi-thumbnail.png",
    videoUrl: "https://youtu.be/P6UeyhoTKgM",
    website: "https://recruit.gojo-inc.jp/",
    contextTag: "訪問看護未経験から開業",
    overlayHighlights: [
      "直前まで夜勤+毎日勤務",
      "開業直前で燃え尽き",
      "月30件の問い合わせ獲得",
      "現在 年商 3億超え",
    ],
    before:
      "訪問看護の経験ゼロ。制度も会社設立も分からず、開業1週間前まで夜勤で準備時間がなかった。",
    after: [
      "マニュアルとテンプレートで最短ルートで開業準備を完了。",
      "スタッフ19名、利用者260名へ拡大。",
      "月間1,600件の大規模ステーションに成長。年商3億円超。",
    ],
    testimonial:
      "「何も知らない素人でしたが、マニュアルが全てでした。働きながらでも迷わず準備できました。」",
  },
  {
    name: "中村 様",
    location: "東京都台東区／開業3期目",
    headline: "激戦区・東京でスタッフ約30名へ。経営者の孤独を乗り越え急拡大",
    videoPoster: "/nakamura-thumbnail.png",
    videoUrl: "https://youtu.be/ciZIPSAzg6Y",
    website: "https://first1105-nada.com/",
    contextTag: "激戦区東京23区で開業",
    overlayHighlights: [
      "経営者のメンタル崩壊",
      "直前まで週7激務",
      "現在スタッフ30",
      "2拠点、居宅介護支援OPEN",
      "開業1年以内で黒字化",
    ],
    before:
      "経営者への転換期。何が不安かも分からない重圧と孤独で、夜も眠れなかった。",
    after: [
      "スタッフ約30名の組織へ成長。",
      "月間1,200件を維持し、安定経営を実現。",
      "激戦区・東京23区で2拠点展開。開業1年以内に黒字化。",
    ],
    testimonial:
      "「経営者の孤独を感じていましたが、不安を整理してもらえたことが支えになりました。資金から営業まで学べたおかげで、ここまで大きくできました。」",
  },
];


