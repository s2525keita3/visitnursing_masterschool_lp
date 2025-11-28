import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";
import Section from "./Section";
import Pill from "./Pill";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

const metrics: Metric[] = [
  { label: "融資獲得率", value: 98, suffix: "%", description: "銀行交渉を同席サポート" },
  { label: "平均融資額", value: 15, suffix: "00万円", description: "事業計画と返済設計" },
  { label: "12ヶ月黒字化率", value: 90, suffix: "%", description: "月次KPIで運営を管理" },
  { label: "全国支援実績", value: 50, suffix: "社+", description: "北海道〜沖縄まで" },
];

const useCountUp = (end: number, duration = 1800) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return value;
};

const MetricCard = ({ metric }: { metric: Metric }) => {
  const value = useCountUp(metric.value);
  return (
    <div className="rounded-2xl p-6 text-center border border-brand-dark/10 bg-white/90 shadow-card hover-lift">
      <p className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark">
        {value}
        {metric.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold tracking-wide">{metric.label}</p>
      <p className="text-xs text-brand-muted mt-1">{metric.description}</p>
    </div>
  );
};

const Hero = () => (
  <Section tone="surface">
    <div className="rounded-[36px] p-12 relative overflow-hidden shadow-card gradient-bg">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl" />
      </div>
      <div className="relative text-center space-y-8 animate-fade-up">
        <Pill icon={Sparkles}>90%が12ヶ月以内に黒字化達成</Pill>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-brand-dark leading-tight">
          看護師が疲弊しない
          <br className="hidden md:block" />
          「高収益ステーション」の作り方
        </h1>
        <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto">
          融資獲得率98%、平均融資額1,500万円。開業3ヶ月で黒字化を実現するための「事業計画・採用・マーケティング」を
          ワンストップで伴走します。
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <CTAButton href="#contact">無料面談を予約する</CTAButton>
          <span className="text-sm font-semibold text-brand-dark/70">⚠️ 毎月5社限定 / オンライン60分</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {metrics.map((metric, index) => (
            <div key={metric.label} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-up">
              <MetricCard metric={metric} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;

