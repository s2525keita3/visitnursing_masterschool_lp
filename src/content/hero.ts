export type HeroContent = {
  brandLabel: string;
  highlightBar: string;
  titleLine1: string;
  titleLine2: string;
  subTitle: string;
  points: { title: string; subtitle?: string }[];
  badge: {
    kicker: string;
    value: string;
    note?: string;
  };
  backgroundImage: string;
  portraitImage: string;
  ctaLabel: string;
  ctaNote: string;
};

// Heroセクションのテキストと画像パスを一元管理し、将来の文言変更を容易にする
export const heroContent: HeroContent = {
  brandLabel: "訪問看護起業オンラインスクール",
  highlightBar: "開業から1年以内の黒字化を「最短で」実現する",
  titleLine1: "訪問看護ステーション",
  titleLine2: "黒字化のロードマップ",
  subTitle:
    "資金調達／集客／採用／数字まで。直営5拠点・年商5億・コンサル実績50社以上の現役経営者が、あなたの状況に合わせて「次の一手」を整理します。",
  points: [
    { title: "94%", subtitle: "1年以内黒字化" },
    { title: "50社+", subtitle: "コンサル実績" },
    { title: "5億円", subtitle: "年商規模" },
    { title: "11万人", subtitle: "SNSフォロワー" },
  ],
  badge: {
    kicker: "1年以内黒字化",
    value: "94%",
    note: "※個別伴走プログラム受講生の実績（自社調べ）",
  },
  backgroundImage: "/koushi-jon-photo.webp",
  portraitImage: "/john_hero_haikei (2).png",
  ctaLabel: "無料個別相談を申し込む",
  ctaNote: "所要60分／Zoom（顔出し不要・耳だけOK）／強引な営業なし",
};


