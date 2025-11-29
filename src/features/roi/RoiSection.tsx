import { type CSSProperties, type ComponentType } from "react";
import {
  ArrowRight,
  Landmark,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { Card } from "../../shared/ui/Card";
import Section from "../../shared/ui/Section";
import { roiData, type RoiBenefit } from "../../content/roi";

/**
 * アイコンコンポーネントの型定義
 * 型安全なアイコン取得のためのマッピング
 */
type IconComponent = ComponentType<{
  className?: string;
}>;

type IconMap = Record<RoiBenefit["icon"], IconComponent>;

/**
 * アイコンマッピング
 * 型安全なアイコン取得
 */
const iconMap: IconMap = {
  users: Users,
  landmark: Landmark,
  rocket: Rocket,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
} as const;

/**
 * バーチャートの定数
 * マジックナンバーを定数化して可読性と保守性を向上
 */
const CHART_CONSTANTS = {
  COST_BAR_WIDTH: "12%",
  RETURN_BAR_WIDTH: "100%",
  COST_DISPLAY: "88万円",
  RETURN_DISPLAY: "約714万円",
  DIFFERENCE: "+626万円",
} as const;

/**
 * CSS変数の型定義
 * --target-width プロパティの型安全性を確保
 */
type CSSVariableProperties = CSSProperties & {
  "--target-width"?: string;
};

/**
 * ROI表示コンポーネント
 * 投資回収率を大きく表示
 */
const RoiDisplay = () => (
  <div className="text-center">
    <p className="mb-2 text-sm font-semibold text-brand-muted">
      投資回収率（ROI）
    </p>
    <p className="text-5xl font-black text-brand-orange md:text-6xl lg:text-7xl">
      {roiData.roi}
    </p>
  </div>
);

/**
 * コストバーコンポーネント
 * 88万円のコストを視覚化
 */
const CostBar = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-brand-muted">コスト</span>
      <span className="text-2xl font-bold text-gray-400 md:text-3xl">
        {roiData.cost}
      </span>
    </div>
    <div className="relative h-12 overflow-hidden rounded-lg bg-gray-100">
      <div
        className="h-full animate-bar-grow bg-gray-300"
        style={
          {
            "--target-width": CHART_CONSTANTS.COST_BAR_WIDTH,
          } as CSSVariableProperties
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-600">
          {CHART_CONSTANTS.COST_DISPLAY}
        </span>
      </div>
    </div>
  </div>
);

/**
 * リターンバーコンポーネント
 * 714万円のリターンを視覚化
 */
const ReturnBar = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-brand-muted">リターン</span>
      <span className="text-3xl font-black text-brand-orange md:text-4xl lg:text-5xl">
        {roiData.return}
      </span>
    </div>
    <div className="relative h-16 overflow-hidden rounded-lg bg-gradient-to-r from-brand-orange to-orange-400 shadow-[0_8px_32px_rgba(255,107,0,0.3)] md:h-20">
      <div
        className="h-full animate-bar-grow bg-gradient-to-r from-brand-orange to-orange-500"
        style={
          {
            "--target-width": CHART_CONSTANTS.RETURN_BAR_WIDTH,
          } as CSSVariableProperties
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-black text-white drop-shadow-lg md:text-xl lg:text-2xl">
          {CHART_CONSTANTS.RETURN_DISPLAY}
        </span>
      </div>
    </div>
  </div>
);

/**
 * 差額強調コンポーネント
 * コストとリターンの差額を強調表示
 */
const DifferenceHighlight = () => (
  <div className="rounded-lg border-2 border-brand-orange bg-brand-orange/5 p-4 text-center">
    <p className="text-sm font-semibold text-brand-muted">差額</p>
    <p className="text-3xl font-black text-brand-orange md:text-4xl">
      {CHART_CONSTANTS.DIFFERENCE}
    </p>
  </div>
);

/**
 * 比較バーチャートコンポーネント
 * コストとリターンを視覚的に比較
 */
const ComparisonChart = () => (
  <Card
    className="border-2 border-brand-dark/10 bg-gradient-to-br from-white to-brand-light/10"
    padding="lg"
  >
    <div className="space-y-6">
      <RoiDisplay />
      <div className="space-y-8">
        <CostBar />
        <div className="flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-brand-orange md:h-10 md:w-10" />
        </div>
        <ReturnBar />
      </div>
      <DifferenceHighlight />
    </div>
  </Card>
);

/**
 * ベネフィットカードコンポーネント
 * 各ベネフィットをカード形式で表示
 */
type BenefitCardProps = {
  benefit: RoiBenefit;
  index: number;
};

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  const IconComponent = iconMap[benefit.icon];
  const animationStyle = useStaggeredAnimation(
    ANIMATION_DELAYS.BASE,
    ANIMATION_DELAYS.STAGGER,
    index
  );

  return (
    <Card
      className="border-2 border-brand-dark/10 bg-gradient-to-br from-white to-brand-light/20 hover-lift"
      padding="md"
      style={animationStyle}
    >
      <div className="flex gap-4">
        {/* アイコン */}
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 md:h-14 md:w-14">
            <IconComponent className="h-6 w-6 text-brand-orange md:h-7 md:w-7" />
          </div>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 space-y-2">
          {/* カテゴリとタイトル */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <span className="mb-1 inline-block text-xs font-bold text-brand-orange md:text-sm">
                {benefit.category}
              </span>
              <h3 className="text-lg font-black text-brand-dark md:text-xl">
                {benefit.title}
              </h3>
            </div>
            <span className="flex-shrink-0 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 px-3 py-1 text-sm font-black text-white shadow-[0_4px_16px_rgba(234,88,12,0.5)] md:text-base">
              {benefit.value}
            </span>
          </div>

          {/* 説明文 */}
          <p className="text-sm leading-relaxed text-brand-muted md:text-base">
            {benefit.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

/**
 * ベネフィットリストコンポーネント
 * 5つのベネフィットをリスト形式で表示
 */
const BenefitList = () => (
  <div className="order-1 space-y-4 animate-fade-up lg:order-2">
    {roiData.benefits.map((benefit: RoiBenefit, index: number) => (
      <BenefitCard key={benefit.id} benefit={benefit} index={index} />
    ))}
  </div>
);

/**
 * ROI（投資対効果）セクションコンポーネント
 * CRO最適化：88万円のコストを714万円のリターンとして再定義し、投資判断を促進
 */
const RoiSection = () => {
  return (
    <Section id="roi" tone="surface">
      <div className="mx-auto max-w-7xl">
        {/* メインタイトル */}
        <div className="mb-12 text-center animate-fade-up md:mb-16">
          <h2 className="mb-6 font-sans text-4xl font-black leading-tight tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            {roiData.mainTitle}
          </h2>
          <h3 className="text-3xl font-black text-brand-orange md:text-4xl lg:text-5xl">
            {roiData.sectionTitle}
          </h3>
        </div>

        {/* メインコンテンツ：バーチャートとベネフィットリスト */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* 左側：比較バーチャート */}
          <div className="order-2 animate-fade-up lg:order-1">
            <ComparisonChart />
          </div>

          {/* 右側：5つの根拠リスト */}
          <BenefitList />
        </div>
      </div>
    </Section>
  );
};

export default RoiSection;
