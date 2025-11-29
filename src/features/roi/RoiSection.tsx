import { ArrowUpRight, TrendingUp, DollarSign, Users, Target, Rocket, Briefcase } from "lucide-react";
import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import { steps, type RoiStep } from "../../content/roi"; // ROIの各ステップ定義を専用モジュールから読み込み、数値の変更を一箇所に集約

// 各ステップに対応するアイコン
const stepIcons = [DollarSign, Users, Target, Rocket, Briefcase];

const RoiSection = () => {
  const getStepAnimationDelay = (index: number) =>
    useStaggeredAnimation(ANIMATION_DELAYS.BASE, 0.1, index);
  const resultAnimationStyle = useStaggeredAnimation(0.5, 0, 0);

  return (
  <Section tone="surface">
    <div className="space-y-6 text-center animate-fade-up">
      <Pill icon={ArrowUpRight} variant="gold">
        ROI & Cost Performance
      </Pill>
      <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
        <span className="block text-brand-dark">88万円の投資で得られる</span>
        <span className="mt-2 block text-brand-orange">
          リターン（5ステップ構成）
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
        受講料の約8倍の価値を1年で回収する 投資対効果シミュレーション
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step: RoiStep, index) => {
        const Icon = stepIcons[index];
        return (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border-2 border-brand-orange/20 bg-white p-8 shadow-[0_8px_32px_rgba(255,107,0,0.1)] transition-all duration-300 hover:border-brand-orange/40 hover:shadow-[0_12px_48px_rgba(255,107,0,0.2)] hover:-translate-y-1 animate-fade-up"
            style={getStepAnimationDelay(index)}
          >
            {/* 背景装飾 */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-orange/5 blur-2xl" />
            
            {/* アイコン */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-7 w-7 text-white" />
            </div>

            {/* タイトル */}
            <h3 className="mb-3 text-xl font-black leading-tight text-brand-dark md:text-2xl">
              {step.title}
            </h3>

            {/* 金額：大きく目立つ */}
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-4xl font-black text-brand-orange md:text-5xl">
                {step.amount}
              </span>
            </div>

            {/* 説明文 */}
            <p className="leading-relaxed text-brand-dark/80 md:text-base">
              {step.detail}
            </p>
          </div>
        );
      })}
    </div>
    <div
      className="relative overflow-hidden rounded-3xl border-2 border-brand-orange/50 bg-brand-orange p-10 text-center shadow-[0_16px_64px_rgba(255,107,0,0.3)] animate-fade-up"
      style={resultAnimationStyle}
    >
      {/* 背景装飾 */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <div className="relative z-10 space-y-4">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-white/90">
          RESULT
        </p>
        <div className="flex items-baseline justify-center gap-2">
          <p className="font-sans text-6xl font-black text-white md:text-7xl lg:text-8xl">
            約8倍
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-2">
          <p className="text-lg font-bold leading-relaxed text-white md:text-xl">
            受講料 <span className="text-orange-100">88万円</span> に対して
          </p>
          <p className="text-2xl font-black text-white md:text-3xl lg:text-4xl">
            <span className="inline-block rounded-lg bg-white/20 px-4 py-2 backdrop-blur-sm">
              714.6万円
            </span>
          </p>
          <p className="text-base font-semibold leading-relaxed text-white/90 md:text-lg">
            の投資回収シミュレーション（1年後）
          </p>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default RoiSection;


