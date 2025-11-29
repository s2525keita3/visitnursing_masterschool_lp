import { ShieldAlert } from "lucide-react";
import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  chartData,
  failures,
  type ChartPoint,
  type FailureItem,
} from "../../content/achievements"; // 実績に関するデータセットを外出しし、他コンポーネントからも共有しやすくする

const Achievements = () => {
  const getFailureAnimationDelay = (index: number) =>
    useStaggeredAnimation(ANIMATION_DELAYS.BASE, 0.1, index);

  return (
  <Section tone="muted">
    <div className="space-y-6 text-center animate-fade-up">
      <Pill icon={ShieldAlert}>正直な実績開示</Pill>
      <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
        <span className="block text-brand-dark">成功も失敗も</span>
        <span className="mt-2 block text-brand-orange">
          すべて公開します
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
        98%の融資承認率、90%の黒字化率に至るまでのプロセスと同じくらい、失敗データの共有を重視します。
      </p>
    </div>
    <div className="mx-auto max-w-4xl">
      <div
        className="space-y-6 rounded-3xl border border-brand-dark/5 bg-brand-light/70 p-8 shadow-card animate-fade-up"
      >
        {failures.map((item: FailureItem, index) => (
          <div
            key={item.title}
            className="space-y-2 rounded-3xl border border-brand-dark/5 bg-white p-6 shadow-card hover-lift"
            style={getFailureAnimationDelay(index)}
          >
            <p className="text-sm font-semibold tracking-wide text-brand-dark">{item.title}</p>
            <p className="text-brand-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
  );
};

export default Achievements;


