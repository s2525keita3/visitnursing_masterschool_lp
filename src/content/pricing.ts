/**
 * 価格提示セクションコンテンツ
 * CRO最適化：88万円を「最高の投資」として再定義
 */

export type PricingFeature = {
  id: string;
  text: string;
};

export const pricingData = {
  mainTitle: "受講費用",
  subTitle:
    "フランチャイズのような「月額ロイヤリティ」は一切不要。最初の投資だけで、一生モノの経営資産を全てお渡しします。",
  badge: "第1期生 限定価格",
  originalPrice: "1,100,000円",
  currentPrice: "880,000円",
  priceNote: "（税込）",
  royaltyText: "月額ロイヤリティ：永年0円",
  features: [
    {
      id: "lecture",
      text: "半年間の完全講義・録画視聴",
    },
    {
      id: "templates",
      text: "融資・運営・採用の全テンプレート譲渡",
    },
    {
      id: "consultation",
      text: "期間中の無制限チャット相談権",
    },
    {
      id: "accountant",
      text: "訪問看護特化の専門家をあらゆる分野でご紹介",
    },
  ] as PricingFeature[],
  paymentNote: "※分割払い対応（無料説明会にてご相談ください）",
};

