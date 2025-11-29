import { Sparkles } from "lucide-react";
import CTAButton from "../../shared/ui/CTAButton";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 - 全画面に隙間なく配置 */}
      <img
        src="/Gemini_Generated_Image_d3aqqed3aqqed3aq.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      
      {/* 中央のメインコンテンツ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="space-y-6 md:space-y-8 animate-fade-up">
          {/* 上部ターゲット文 */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg md:text-xl text-brand-dark font-medium">資金調達・依頼獲得・採用…「経営の数字」に不安が残る方へ</p>
          </div>

          {/* メインタイトル */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight text-center">
              <span className="text-brand-dark">半年で黒字化・安定経営へ</span>
              <br />
              <span className="text-brand-orange">「失敗しない開業ロードマップ」</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-orange font-bold leading-relaxed text-center max-w-2xl mx-auto">
              「想い」だけでは失敗する。データと戦略で勝つ経営を。
            </p>
          </div>

          {/* 特典・オファー */}
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-bg-orange-light to-baum-200 rounded-full px-6 py-3 shadow-card border border-brand-orange/20 animate-fade-up mx-auto" style={{ animationDelay: "0.25s" }}>
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-base md:text-lg font-semibold text-brand-orange text-center">無料説明会にご参加の方限定 融資が通る！事業計画書テンプレートをプレゼント！</span>
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
  );
};

export default Hero;
