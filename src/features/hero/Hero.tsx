import { Sparkles } from "lucide-react";
import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";

const Hero = () => {
  return (
    <Section tone="surface">
      <div 
        className="relative min-h-screen flex items-center justify-center py-12 overflow-hidden"
        style={{
          backgroundImage: 'url("/Gemini_Generated_Image_d3aqqed3aqqed3aq.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 中央のメインコンテンツ - カードなし、直接配置 */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="space-y-6 md:space-y-8 animate-fade-up">
            {/* 上部ターゲット文 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-base md:text-lg text-brand-dark font-medium">訪問看護の開業準備に迷いがある方へ</p>
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

            {/* CTAボタン - プルプルアニメーション付き（ゆっくり） */}
            <div className="flex flex-col items-center space-y-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CTAButton href="#contact" size="large" className="w-full max-w-md animate-shake-slow">
                無料説明会に申し込む
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
