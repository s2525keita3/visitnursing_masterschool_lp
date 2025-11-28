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
      <div className="relative min-h-[700px] flex items-center justify-center py-12 overflow-hidden">
        {/* 背景画像としてのイラスト要素 */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {/* 左側: プレゼンテーションシーン */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:block">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
              {/* 背景の抽象的な円 */}
              <circle cx="50" cy="100" r="60" fill="#FF6B00" opacity="0.15" />
              <circle cx="120" cy="200" r="40" fill="#FF8533" opacity="0.1" stroke="#FF6B00" strokeWidth="2" strokeOpacity="0.2" />
              
              {/* ボード/スクリーン */}
              <rect x="80" y="250" width="180" height="140" rx="12" fill="white" stroke="#FF6B00" strokeWidth="3" opacity="0.8" />
              
              {/* グラフ */}
              <g transform="translate(100, 270)">
                {/* 棒グラフ */}
                <rect x="10" y="60" width="12" height="30" fill="#FF6B00" opacity="0.6" />
                <rect x="28" y="50" width="12" height="40" fill="#FF6B00" opacity="0.6" />
                <rect x="46" y="40" width="12" height="50" fill="#FF6B00" opacity="0.6" />
                <rect x="64" y="30" width="12" height="60" fill="#FF6B00" opacity="0.6" />
                <rect x="82" y="20" width="12" height="70" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="16,60 34,50 52,40 70,30 88,20" fill="none" stroke="#FF6B00" strokeWidth="2.5" />
                {/* 円グラフの一部 */}
                <path d="M 120 20 A 15 15 0 0 1 135 5 L 120 20 Z" fill="#FF8533" opacity="0.5" />
                {/* チェックマークとX */}
                <circle cx="20" cy="100" r="4" fill="#22C55E" />
                <path d="M 18 100 L 20 102 L 24 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="35" cy="100" r="4" fill="#22C55E" />
                <path d="M 33 100 L 35 102 L 39 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="100" r="4" fill="#22C55E" />
                <path d="M 48 100 L 50 102 L 54 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="100" r="4" fill="#EF4444" />
                <path d="M 63 98 L 67 102 M 67 98 L 63 102" stroke="white" strokeWidth="1.5" />
                <circle cx="80" cy="100" r="4" fill="#EF4444" />
                <path d="M 78 98 L 82 102 M 82 98 L 78 102" stroke="white" strokeWidth="1.5" />
                <circle cx="95" cy="100" r="4" fill="#EF4444" />
                <path d="M 93 98 L 97 102 M 97 98 L 93 102" stroke="white" strokeWidth="1.5" />
                {/* 矢印パス */}
                <path d="M 110 110 Q 130 100 150 110" fill="none" stroke="#FF6B00" strokeWidth="2" />
              </g>
              
              {/* プレゼンター（簡略化） */}
              <rect x="200" y="420" width="30" height="80" rx="15" fill="#FF6B00" opacity="0.3" />
              <circle cx="215" cy="410" r="12" fill="#FF6B00" opacity="0.3" />
              
              {/* 同僚（左側） */}
              <rect x="100" y="440" width="25" height="70" rx="12" fill="#FF8533" opacity="0.25" />
              <circle cx="112" cy="430" r="10" fill="#FF8533" opacity="0.25" />
              <rect x="130" y="440" width="25" height="70" rx="12" fill="#FF6B00" opacity="0.3" />
              <circle cx="142" cy="430" r="10" fill="#FF6B00" opacity="0.3" />
              
              {/* ギアアイコン */}
              <g transform="translate(300, 150)">
                <circle cx="0" cy="0" r="25" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.2" />
                <circle cx="0" cy="0" r="8" fill="#FF8533" opacity="0.3" />
                <rect x="-2" y="-15" width="4" height="8" fill="#FF6B00" opacity="0.2" />
                <rect x="-2" y="7" width="4" height="8" fill="#FF6B00" opacity="0.2" />
                <rect x="-15" y="-2" width="8" height="4" fill="#FF6B00" opacity="0.2" />
                <rect x="7" y="-2" width="8" height="4" fill="#FF6B00" opacity="0.2" />
              </g>
            </svg>
          </div>

          {/* 右側: チームコラボレーションシーン */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:block">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
              {/* 背景の抽象的な円 */}
              <circle cx="350" cy="150" r="50" fill="#FF8533" opacity="0.15" />
              <circle cx="280" cy="250" r="35" fill="#FF6B00" opacity="0.1" />
              
              {/* 中央の大きなモニター */}
              <rect x="100" y="200" width="200" height="120" rx="12" fill="white" stroke="#FF6B00" strokeWidth="3" opacity="0.8" />
              
              {/* グラフとSUCCESS */}
              <g transform="translate(120, 220)">
                {/* 棒グラフ */}
                <rect x="10" y="50" width="14" height="40" fill="#FF6B00" opacity="0.6" />
                <rect x="30" y="45" width="14" height="45" fill="#FF6B00" opacity="0.6" />
                <rect x="50" y="40" width="14" height="50" fill="#FF6B00" opacity="0.6" />
                <rect x="70" y="35" width="14" height="55" fill="#FF6B00" opacity="0.6" />
                <rect x="90" y="30" width="14" height="60" fill="#FF6B00" opacity="0.6" />
                <rect x="110" y="25" width="14" height="65" fill="#FF6B00" opacity="0.6" />
                <rect x="130" y="20" width="14" height="70" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="17,50 37,45 57,40 77,35 97,30 117,25 137,20" fill="none" stroke="#FF6B00" strokeWidth="3" />
                {/* SUCCESSラベル */}
                <rect x="140" y="5" width="50" height="12" fill="#FF6B00" opacity="0.9" rx="3" />
                <text x="165" y="13" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">SUCCESS</text>
              </g>
              
              {/* 左右の小さなモニター */}
              <rect x="50" y="220" width="80" height="60" rx="8" fill="white" stroke="#FF8533" strokeWidth="2" opacity="0.7" />
              <rect x="270" y="220" width="80" height="60" rx="8" fill="white" stroke="#FF8533" strokeWidth="2" opacity="0.7" />
              
              {/* 小さなグラフ */}
              <g transform="translate(60, 230)">
                <rect x="5" y="30" width="8" height="20" fill="#FF8533" opacity="0.5" />
                <rect x="18" y="25" width="8" height="25" fill="#FF8533" opacity="0.5" />
                <rect x="31" y="20" width="8" height="30" fill="#FF8533" opacity="0.5" />
                <polyline points="9,30 22,25 35,20" fill="none" stroke="#FF8533" strokeWidth="1.5" />
              </g>
              <g transform="translate(280, 230)">
                <rect x="5" y="30" width="8" height="20" fill="#FF8533" opacity="0.5" />
                <rect x="18" y="25" width="8" height="25" fill="#FF8533" opacity="0.5" />
                <rect x="31" y="20" width="8" height="30" fill="#FF8533" opacity="0.5" />
                <polyline points="9,30 22,25 35,20" fill="none" stroke="#FF8533" strokeWidth="1.5" />
              </g>
              
              {/* テーブル */}
              <rect x="80" y="380" width="240" height="100" rx="8" fill="white" opacity="0.6" stroke="#FF6B00" strokeWidth="2" />
              
              {/* 人物（4人） */}
              <rect x="100" y="400" width="28" height="70" rx="14" fill="#FF6B00" opacity="0.25" />
              <circle cx="114" cy="390" r="11" fill="#FF6B00" opacity="0.25" />
              
              <rect x="150" y="400" width="28" height="70" rx="14" fill="#333" opacity="0.2" />
              <circle cx="164" cy="390" r="11" fill="#333" opacity="0.2" />
              
              <rect x="200" y="400" width="28" height="70" rx="14" fill="#FF6B00" opacity="0.25" />
              <circle cx="214" cy="390" r="11" fill="#FF6B00" opacity="0.25" />
              
              <rect x="250" y="400" width="28" height="70" rx="14" fill="#FF8533" opacity="0.25" />
              <circle cx="264" cy="390" r="11" fill="#FF8533" opacity="0.25" />
              
              {/* コーヒーカップ */}
              <rect x="170" y="360" width="12" height="16" rx="6" fill="#FF8533" opacity="0.3" stroke="#FF6B00" strokeWidth="1" />
              <ellipse cx="176" cy="360" rx="6" ry="2" fill="#FF8533" opacity="0.3" />
            </svg>
          </div>
        </div>
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
            {/* 上部ターゲット文 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-base md:text-lg text-brand-muted font-medium">訪問看護の開業準備に迷いがある方へ</p>
            </div>

            {/* メインタイトル */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight text-center">
                <span className="text-brand-dark">半年で軌道に乗せる</span>
                <br />
                <span className="text-brand-orange">「再現性の高い起業術」</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-center max-w-2xl mx-auto">
                「想い」だけでは失敗する。データと戦略で勝つ経営を。
              </p>
            </div>

            {/* 特典・オファー */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bg-orange-light to-baum-200 rounded-full px-6 py-3 shadow-card border border-brand-orange/20 animate-fade-up mx-auto" style={{ animationDelay: "0.25s" }}>
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">無料説明会にご参加の方限定 融資が通る！事業計画書テンプレートをプレゼント！</span>
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
                無料説明会に申し込む
              </CTAButton>
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
