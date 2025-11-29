import { Check } from "lucide-react";

import { Card } from "../../shared/ui/Card";
import Section from "../../shared/ui/Section";
import { pricingData, type PricingFeature } from "../../content/pricing";

/**
 * 価格表示コンポーネント
 * 心理的効果を最大化する価格提示デザイン
 * 高級感とインパクトを両立したリッチなデザイン
 */
const PriceDisplay = () => {
  // 割引額を計算（1,100,000 - 880,000 = 220,000）
  const discountAmount = "220,000円";

  return (
    <div className="space-y-6">
      {/* 定価（打ち消し線）と割引バッジ */}
      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <p className="mb-1 text-xs font-semibold text-gray-500 md:text-sm">
            通常価格
          </p>
          <span className="text-lg font-bold text-gray-400 line-through md:text-xl">
            {pricingData.originalPrice}
          </span>
        </div>
        <div className="rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-1.5 shadow-lg">
          <span className="text-sm font-black text-white md:text-base">
            {discountAmount} OFF
          </span>
        </div>
      </div>

      {/* 提示価格（最大級のフォント + グラデーション + シャドウ） */}
      <div className="relative">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold text-brand-muted md:text-base">
            特別価格
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-6xl font-black text-transparent drop-shadow-[0_4px_8px_rgba(234,88,12,0.3)] md:text-7xl lg:text-8xl">
              {pricingData.currentPrice}
            </span>
            <span className="text-xl font-bold text-gray-600 md:text-2xl">
              {pricingData.priceNote}
            </span>
          </div>
          {/* 価格の下に装飾的なライン */}
          <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-brand-orange to-transparent md:w-32" />
        </div>
      </div>

      {/* キラーワード：月額ロイヤリティ0円（よりリッチに） */}
      <div className="rounded-xl border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-emerald-100 p-5 text-center shadow-[0_8px_24px_rgba(16,185,129,0.2)]">
        <p className="text-xl font-black text-emerald-700 md:text-2xl">
          {pricingData.royaltyText}
        </p>
        <p className="mt-1 text-xs font-semibold text-emerald-600 md:text-sm">
          フランチャイズと違い、追加費用は一切かかりません
        </p>
      </div>
    </div>
  );
};

/**
 * パッケージ内容リストコンポーネント
 * チェックアイコン付きで信頼感を演出
 * よりリッチな視覚効果で価値を強調
 */
const PackageFeatures = () => (
  <div className="space-y-4">
    {pricingData.features.map((feature: PricingFeature) => (
      <div
        key={feature.id}
        className="flex items-start gap-4 rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex-shrink-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-orange-500 shadow-md md:h-8 md:w-8">
            <Check className="h-4 w-4 text-white md:h-5 md:w-5" />
          </div>
        </div>
        <p className="flex-1 text-sm font-semibold leading-relaxed text-brand-dark md:text-base">
          {feature.text}
        </p>
      </div>
    ))}
  </div>
);

/**
 * プライスカードコンポーネント
 * 高級感のあるカードデザイン
 * リッチな視覚効果で価値感を最大化
 */
const PricingCard = () => (
  <Card
    className="relative border-2 border-brand-orange bg-gradient-to-br from-white via-white to-orange-50/30 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
    padding="lg"
  >
    {/* バッジ：第1期生限定価格（より目立つデザイン） */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
      <span className="rounded-full bg-gradient-to-r from-red-600 to-red-700 px-5 py-2 text-sm font-black text-white shadow-[0_8px_24px_rgba(220,38,38,0.4)] md:px-7 md:py-2.5 md:text-base">
        {pricingData.badge}
      </span>
    </div>

    {/* 装飾的な背景要素 */}
    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-orange-200/20 to-transparent blur-3xl" />

    <div className="relative space-y-8 pt-6">
      {/* 価格表示 */}
      <PriceDisplay />

      {/* パッケージ内容（よりリッチに） */}
      <div className="rounded-xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6">
        <h3 className="mb-6 text-center text-2xl font-black text-brand-dark md:text-3xl">
          パッケージ内容
        </h3>
        <PackageFeatures />
      </div>

      {/* 支払いオプション（より目立つデザイン） */}
      <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4 text-center">
        <p className="text-sm font-semibold text-brand-muted md:text-base">
          {pricingData.paymentNote}
        </p>
      </div>
    </div>
  </Card>
);

/**
 * 価格提示セクションコンポーネント
 * CRO最適化：88万円を「最高の投資」として再定義し、無料説明会への誘導を促進
 */
const PricingSection = () => {
  return (
    <Section id="pricing" tone="surface">
      <div className="mx-auto max-w-5xl">
        {/* 導入コピーエリア */}
        <div className="mb-12 text-center animate-fade-up md:mb-16">
          <h2 className="mb-4 font-sans text-3xl font-black leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
            {pricingData.mainTitle}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
            {pricingData.subTitle}
          </p>
        </div>

        {/* プライスカード */}
        <div className="animate-fade-up">
          <PricingCard />
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;

