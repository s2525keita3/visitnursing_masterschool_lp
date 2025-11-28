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
          
          {/* 抽象的な幾何学的図形 */}
          <div className="absolute top-32 left-20 w-16 h-16 bg-brand-orange/15 rounded-full animate-fade-in" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-32 right-24 w-12 h-12 border-2 border-brand-orange/20 rounded-full bg-baum-200/30 animate-fade-in" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-baum-300/25 rounded-full animate-fade-in" style={{ animationDelay: "1.4s" }} />
          
          {/* 斜めの線 */}
          <div className="absolute top-40 left-1/4 w-32 h-0.5 bg-brand-orange/15 transform rotate-45 animate-fade-in" style={{ animationDelay: "1.1s" }} />
          <div className="absolute bottom-40 right-1/3 w-24 h-0.5 bg-baum-300/20 transform -rotate-45 animate-fade-in" style={{ animationDelay: "1.3s" }} />
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

        {/* 左側: プレゼンテーションシーン風イラスト */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="relative w-64 h-64">
            {/* ボード/スクリーン */}
            <div className="absolute top-8 left-12 w-40 h-32 bg-white rounded-2xl shadow-card border-2 border-brand-orange/30">
              {/* グラフ */}
              <svg className="w-full h-full p-3" viewBox="0 0 100 80">
                {/* 棒グラフ */}
                <rect x="10" y="50" width="8" height="20" fill="#FF6B00" opacity="0.6" />
                <rect x="22" y="45" width="8" height="25" fill="#FF6B00" opacity="0.6" />
                <rect x="34" y="40" width="8" height="30" fill="#FF6B00" opacity="0.6" />
                <rect x="46" y="35" width="8" height="35" fill="#FF6B00" opacity="0.6" />
                <rect x="58" y="30" width="8" height="40" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="14,50 26,45 38,40 50,35 62,30" fill="none" stroke="#FF6B00" strokeWidth="2" />
              </svg>
            </div>
            
            {/* 人物シルエット（簡略化） */}
            <div className="absolute bottom-0 left-4 w-12 h-16 bg-brand-orange/20 rounded-full" />
            <div className="absolute bottom-0 left-20 w-10 h-14 bg-baum-300/25 rounded-full" />
            <div className="absolute bottom-0 left-32 w-10 h-14 bg-brand-orange/20 rounded-full" />
            
            {/* ギアアイコン */}
            <div className="absolute top-0 right-8 w-12 h-12">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-brand-orange/20">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* 右側: チームコラボレーションシーン風イラスト */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="relative w-64 h-64">
            {/* モニター/スクリーン */}
            <div className="absolute top-4 right-12 w-44 h-28 bg-white rounded-2xl shadow-card border-2 border-brand-orange/30">
              {/* グラフとSUCCESS表示 */}
              <svg className="w-full h-full p-3" viewBox="0 0 120 70">
                {/* 棒グラフ */}
                <rect x="10" y="40" width="10" height="20" fill="#FF6B00" opacity="0.6" />
                <rect x="25" y="35" width="10" height="25" fill="#FF6B00" opacity="0.6" />
                <rect x="40" y="30" width="10" height="30" fill="#FF6B00" opacity="0.6" />
                <rect x="55" y="25" width="10" height="35" fill="#FF6B00" opacity="0.6" />
                <rect x="70" y="20" width="10" height="40" fill="#FF6B00" opacity="0.6" />
                <rect x="85" y="15" width="10" height="45" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="15,40 30,35 45,30 60,25 75,20 90,15" fill="none" stroke="#FF6B00" strokeWidth="2.5" />
                {/* SUCCESSラベル */}
                <rect x="85" y="5" width="28" height="8" fill="#FF6B00" opacity="0.8" rx="2" />
                <text x="99" y="10" fontSize="5" fill="white" textAnchor="middle" fontWeight="bold">SUCCESS</text>
              </svg>
            </div>
            
            {/* テーブル */}
            <div className="absolute bottom-8 right-8 w-48 h-32 bg-white/80 rounded-xl shadow-card border border-brand-dark/10" />
            
            {/* 人物シルエット（簡略化） */}
            <div className="absolute bottom-0 right-4 w-10 h-14 bg-brand-orange/20 rounded-full" />
            <div className="absolute bottom-0 right-16 w-10 h-14 bg-baum-300/25 rounded-full" />
            <div className="absolute bottom-0 right-28 w-10 h-14 bg-brand-orange/20 rounded-full" />
            <div className="absolute bottom-0 right-40 w-10 h-14 bg-baum-300/25 rounded-full" />
            
            {/* コーヒーカップ */}
            <div className="absolute bottom-20 right-24 w-6 h-8 bg-baum-200/40 rounded-t-full border border-brand-orange/20" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
