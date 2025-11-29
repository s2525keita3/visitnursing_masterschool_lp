import { Sparkles } from "lucide-react";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useHeroAnimationDelays } from "../../shared/hooks/useAnimationDelays";
import { heroContent } from "../../content/hero"; // Heroの文言・背景画像をコンテンツモジュールから取得して責務を分離

/**
 * Heroセクションコンポーネント
 * パフォーマンス最適化：統合されたアニメーション遅延フックを使用
 */
const Hero = () => {
  // DRY原則：アニメーション遅延を一括管理するカスタムフックを使用
  const animationDelays = useHeroAnimationDelays();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* 背景画像 - 全画面に隙間なく配置 */}
      <ImageWithFallback
        src={heroContent.backgroundImage}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        fallbackText=""
        priority={true}
      />

      {/* 背景画像に暗いオーバーレイを追加してテキスト視認性を向上 */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      {/* 中央のメインコンテンツ */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div className="space-y-8 animate-fade-up md:space-y-12">
          {/* 上部ターゲット文：控えめに表示してメインタイトルを強調 */}
          <div className="animate-fade-up text-center" style={animationDelays.targetText}>
            <p className="mb-2 text-base font-semibold text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-lg lg:text-xl">
              {heroContent.targetText}
            </p>
          </div>

          {/* メインタイトル：より大きく、コントラスト強化 */}
          <div className="space-y-6 animate-fade-up" style={animationDelays.title}>
            <h1 className="text-center font-sans text-5xl font-black leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl">
              <span className="block">{heroContent.titleLine1}</span>
              <span className="mt-2 block text-brand-orange">
                {heroContent.titleLine2}
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-center text-xl font-bold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:text-2xl">
              {heroContent.subTitle}
            </p>
          </div>

          {/* 特典・オファー：白背景＋緑ボーダーで視認性を大幅に向上 */}
          <div
            className="mx-auto max-w-2xl animate-fade-up space-y-3"
            style={animationDelays.offer}
          >
            <div className="flex items-center justify-center gap-3 rounded-2xl border-[3px] border-emerald-400 bg-white px-8 py-5 shadow-[0_12px_48px_rgba(16,185,129,0.5)] backdrop-blur-sm md:px-10 md:py-6">
              <Sparkles className="h-6 w-6 flex-shrink-0 text-emerald-500 md:h-7 md:w-7" />
              <div className="flex flex-col text-center text-base font-black leading-tight text-brand-dark md:text-lg lg:text-xl">
                <span className="text-emerald-600">無料説明会にご参加の方限定 融資が通る！</span>
                <span className="text-brand-dark">事業計画書テンプレートをプレゼント！</span>
              </div>
            </div>
          </div>

          {/* CTAボタン：より大きく、上部に配置してファーストビューで確実に視認 */}
          <div
            className="mt-8 flex justify-center animate-fade-up"
            style={animationDelays.cta}
          >
            <CTAButton
              href="#contact"
              size="large"
              className="w-full max-w-lg text-xl font-black shadow-[0_12px_48px_rgba(255,107,0,0.6)] animate-shake-slow sm:w-auto sm:min-w-[400px] md:text-2xl md:min-h-[64px]"
            >
              {heroContent.ctaLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
