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
    <div className="bg-white rounded-3xl p-8 border border-brand-dark/5 shadow-card hover-lift">
      <p className="text-4xl md:text-5xl font-sans font-bold text-brand-orange mb-3">
        {metric.value}
        <span className="text-2xl md:text-3xl">{metric.suffix}</span>
      </p>
      <p className="text-base font-semibold text-brand-dark mb-2">{metric.label}</p>
      <p className="text-xs text-brand-muted leading-relaxed">{metric.description}</p>
    </div>
  );
};

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Section tone="surface">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
        {/* 左側: コンテンツ */}
        <div className="space-y-6 animate-fade-up">
          <Pill icon={Sparkles}>90%が12ヶ月以内に黒字化達成</Pill>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight">
            <span className="text-brand-dark">看護師が疲弊しない</span>
            <br />
            <span className="text-brand-orange">「高収益ステーション」の作り方</span>
          </h1>
          
          <div className="space-y-2 text-lg text-brand-dark leading-relaxed">
            <p>
              融資獲得率98%、平均融資額1,500万円。開業3ヶ月で黒字化を実現するための「事業計画・採用・マーケティング」を
              ワンストップで伴走します。
            </p>
          </div>
          
          {/* 統計カード - 2列に表示 */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {metrics.slice(0, 2).map((metric, index) => (
              <div key={metric.label} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-up">
                <MetricCard metric={metric} />
              </div>
            ))}
          </div>
          
          {/* CTAボタン */}
          <div className="pt-4 space-y-2">
            <CTAButton href="#contact" size="large">無料面談を予約する</CTAButton>
            <p className="text-sm text-brand-dark text-center">⚠️ 毎月5社限定 / オンライン60分</p>
          </div>
        </div>
        
        {/* 右側: 画像 */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl overflow-hidden shadow-card hover-lift border border-brand-dark/5">
            {imageError ? (
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-bg-orange-light to-white rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-dark font-semibold">画像を追加</p>
                </div>
              </div>
            ) : (
              <img
                src="/hero-image.jpg"
                alt="訪問看護ステーション開業支援"
                className="w-full h-auto object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
