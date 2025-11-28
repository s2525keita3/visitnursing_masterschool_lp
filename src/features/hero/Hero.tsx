import { useState } from "react";
import { Sparkles } from "lucide-react";
import CTAButton from "../../shared/ui/CTAButton";
import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";

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

const MetricCard = ({ metric }: { metric: Metric }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-brand-dark/5 shadow-card hover-lift text-center">
      <p className="text-3xl md:text-4xl font-sans font-bold text-brand-orange mb-2">
        {metric.value}
        <span className="text-xl md:text-2xl">{metric.suffix}</span>
      </p>
      <p className="text-sm font-semibold text-brand-dark mb-1">{metric.label}</p>
      <p className="text-xs text-brand-muted leading-relaxed">{metric.description}</p>
    </div>
  );
};

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Section tone="surface">
      <div className="relative min-h-[700px] flex items-center justify-center py-12">
        {/* 背景装飾要素（抽象的な図形） */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl animate-fade-in" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-orange/8 rounded-full blur-3xl animate-fade-in" style={{ animationDelay: "0.7s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-bg-orange-light/20 rounded-full blur-2xl animate-fade-in" style={{ animationDelay: "0.9s" }} />
        </div>

        {/* 中央のメインコンテンツカード */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-[48px] shadow-card hover-lift border border-brand-dark/5 p-10 md:p-16 space-y-8 animate-fade-up">
            {/* 限定情報ボックス */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bg-orange-light to-baum-200 rounded-full px-6 py-3 shadow-card border border-brand-orange/20 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">無料面談にご参加の方限定</span>
            </div>

            {/* メインタイトル */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight text-center">
                <span className="text-brand-dark">看護師が疲弊しない</span>
                <br />
                <span className="text-brand-orange">「高収益ステーション」の作り方</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-center max-w-2xl mx-auto">
                融資獲得率98%、平均融資額1,500万円。開業3ヶ月で黒字化を実現するための「事業計画・採用・マーケティング」を
                ワンストップで伴走します。
              </p>
            </div>

            {/* 統計カード - 中央配置 */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {metrics.slice(0, 2).map((metric, index) => (
                <div key={metric.label} style={{ animationDelay: `${0.3 + index * 0.1}s` }} className="animate-fade-up">
                  <MetricCard metric={metric} />
                </div>
              ))}
            </div>

            {/* CTAボタン - 中央配置 */}
            <div className="flex flex-col items-center space-y-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CTAButton href="#contact" size="large" className="w-full max-w-md">
                無料面談を予約する
              </CTAButton>
              <p className="text-sm text-brand-muted text-center">⚠️ 毎月5社限定 / オンライン60分</p>
            </div>
          </div>
        </div>

        {/* 左右の装飾要素（イラストの代わり） */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="w-48 h-48 bg-gradient-to-br from-bg-orange-light/30 to-baum-200/20 rounded-3xl shadow-card border border-brand-dark/5 transform rotate-12" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="w-48 h-48 bg-gradient-to-br from-baum-200/30 to-bg-orange-light/20 rounded-3xl shadow-card border border-brand-dark/5 transform -rotate-12" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
