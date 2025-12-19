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
  // 数字で語る成果：定量的な成果を強調
  quantitativeResults: {
    metrics: string; // 例：「月商 2.3倍 / 採用2名」
    description: string; // 成果の説明文
  };
};

export const benefits: Benefit[] = [
  {
    image: "/benefit1.webp",
    title: "最短3ヶ月で「黒字化」の確信を得る",
    description:
      "市場調査と収支シミュレーションを使い、闇雲な不安を「勝てる根拠」に。開業前に黒字化までの明確なロードマップを手に入れ、迷いなく経営に没頭できます。",
  },
  {
    image: "/benefit2.webp",
    title: "数千万の融資を「着金」させる計画書",
    description:
      "銀行員が納得せざるを得ない『論理的な事業計画書』。単なる書類作成ではなく、自ら説明し確実に融資を引き出す交渉術まで身につき、資金不安を根本から解消します。",
  },
  {
    image: "/benefit3.webp",
    title: "経営者が「現場を離れる」自由を手にする",
    description:
      "カリスマ所長やあなた自身に依存しない、標準化された組織体制。マニュアルとKPI管理で、あなたが現場にいなくても安定して利益が出る仕組みを構築します。",
  },
  {
    image: "/benefit4.webp",
    title: "「選ばれる」採用で離職率をゼロに",
    description:
      "理念に共感し、自走する人材だけが応募してくる採用フィルター。人が採れない悩みから解放され、教育に時間を割かなくてもスタッフが勝手に育つ環境を作ります。",
  },
  {
    image: "/benefit5.webp",
    title: "2拠点、3拠点と「拡大」し続ける未来",
    description:
      "1拠点の成功で終わらない、再現性のある展開ノウハウ。一度仕組みを作れば、2拠点目以降はさらに短期間で収益化。年商億超えの事業家へと駆け上がれます。",
  },
];

export const studentResults: StudentResult[] = [
  {
    name: "北山 様",
    location: "えめ訪問看護ステーション和歌山 代表",
    headline: "融資2,000万円超を獲得！開業3ヶ月で単月黒字化",
    videoPoster: "/kitayama-thumbnail.webp",
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
      "融資資料と採用導線をセットで整えた結果、6ヶ月で2拠点目の準備に入れるほどキャッシュが安定しました。",
    quantitativeResults: {
      metrics: "月商 2.3倍 / 採用2名",
      description: "融資資料と採用導線をセットで整えた結果、6ヶ月で2拠点目の準備に入れるほどキャッシュが安定しました。",
    },
  },
  {
    name: "髙橋 様",
    location: "ファースト訪問看護ステーション灘 代表",
    headline: "訪看未経験＆夜勤明けでも月間1,600件の\"モンスター級\"拠点へ",
    videoPoster: "/takahashi-thumbnail.webp",
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
      "週次KPIレビューとSlack相談のスピード感が圧倒的。現場の迷いが消え、数字で意思決定できるようになりました。",
    quantitativeResults: {
      metrics: "稼働率 82% / 利益率 +3.2pt",
      description: "週次KPIレビューとSlack相談のスピード感が圧倒的。現場の迷いが消え、数字で意思決定できるようになりました。",
    },
  },
  {
    name: "中村 様",
    location: "あしなら訪問看護ステーション",
    headline: "激戦区・東京でスタッフ約30名へ. 経営者の孤独を乗り越え急拡大",
    videoPoster: "/nakamura-thumbnail.webp",
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
      "マーケ導線と評価制度を同じタイミングで整えられたのが大きい。『紹介が止まらない理由』をようやく理解できました。",
    quantitativeResults: {
      metrics: "新規紹介 18件 / 採用0離職",
      description: "マーケ導線と評価制度を同じタイミングで整えられたのが大きい。『紹介が止まらない理由』をようやく理解できました。",
    },
  },
];
