import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useHeroAnimationDelays } from "../../shared/hooks/useAnimationDelays";
import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント
 * 黄金律：親(relative) > 子(absolute + object-contain) で配置を完全固定
 */
const Hero = () => {
  const animationDelays = useHeroAnimationDelays();

  return (
    <section className="relative w-full min-h-[850px] overflow-hidden bg-[#ffffff] py-12 md:min-h-[900px] md:py-20 lg:py-24">
      {/* 1. 背景の装飾（大きな青円） */}
      <div className="absolute right-[-10%] top-[15%] z-0 h-[600px] w-[600px] rounded-full bg-[#1E66D0] opacity-[0.07] blur-3xl md:h-[800px] md:w-[800px]" />
      
      {/* 2. 人物画像（赤枠のエリアへ配置を調整） */}
      <div className="absolute right-0 top-[10%] z-10 h-[70%] w-[95%] max-w-[550px] md:right-[-5%] md:top-[5%] md:h-[90%] md:w-[55%] md:max-w-[800px] lg:right-0 lg:top-[2%] lg:h-[98%] lg:max-w-[950px]">
        <div className="relative h-full w-full">
          <ImageWithFallback
            src={heroContent.portraitImage}
            alt="講師の写真"
            className="absolute right-0 top-0 h-full w-full object-contain object-right-top transition-transform duration-700 hover:scale-[1.02]"
            fallbackText="講師写真"
            priority={true}
          />
        </div>
      </div>

      {/* 3. コンテンツエリア（最前面） */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          {/* キャッチコピー（赤のアクセント） */}
          <div className="animate-fade-up" style={animationDelays.targetText}>
            <p className="inline-block bg-[#E53E3E] px-3 py-1 text-xs font-black tracking-tighter text-white sm:text-sm md:text-base">
              {heroContent.brandLabel}
            </p>
          </div>

          {/* オレンジ帯（斜めカットのSNIPERスタイル） */}
          <div className="mt-6 animate-fade-up sm:mt-8" style={animationDelays.title}>
            <div className="inline-block transform skew-x-[-15deg] bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-6 py-2 shadow-[10px_10px_0_rgba(255,107,0,0.2)] sm:px-8 sm:py-3">
              <p className="transform skew-x-[15deg] text-base font-black leading-tight text-white sm:text-lg md:text-2xl italic tracking-tighter">
                {heroContent.highlightBar}
              </p>
            </div>
          </div>

          {/* メインタイトル（超巨大・黒） */}
          <div className="mt-6 space-y-2 animate-fade-up sm:mt-8" style={animationDelays.title}>
            <h1 className="font-sans text-5xl font-black leading-[1.0] tracking-[calc(-0.05em)] text-[#1a1a1a] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px]">
              <span className="block">{heroContent.titleLine1}</span>
              <span className="mt-2 block bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent">{heroContent.titleLine2}</span>
            </h1>
            <p className="mt-8 max-w-xl border-l-4 border-[#FF6B00] pl-6 text-base font-bold leading-relaxed text-brand-muted/90 sm:text-lg md:text-xl lg:text-2xl">
              {heroContent.subTitle}
            </p>
          </div>

          {/* 4つのリッチな実績カード */}
          <div className="mt-10 grid grid-cols-1 gap-3 animate-fade-up sm:grid-cols-2 md:mt-12 md:max-w-2xl" style={animationDelays.offer}>
            {heroContent.points.map((p, index) => (
              <div
                key={p.title}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a2a2a] sm:p-5"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl font-black italic text-[#F7E39A] drop-shadow-[0_2px_10px_rgba(247,227,154,0.3)] sm:text-4xl md:text-5xl">
                    {p.title}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black leading-tight text-white/70 sm:text-sm md:text-base">
                    {p.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA（強烈なシャドウ） */}
          <div className="mt-12 space-y-4 animate-fade-up sm:mt-16" style={animationDelays.cta}>
            <CTAButton
              href="#contact"
              size="large"
              className="w-full text-xl font-black shadow-[0_20px_50px_rgba(255,107,0,0.6)] animate-shake-slow sm:w-auto sm:min-w-[420px] md:text-3xl"
            >
              {heroContent.ctaLabel}
            </CTAButton>
            <p className="flex items-center gap-2 pl-2 text-xs font-bold text-brand-muted sm:text-sm">
              <span className="inline-block rounded bg-[#FF6B00] px-2 py-0.5 text-[10px] text-white">必見</span>
              {heroContent.ctaNote}
            </p>
          </div>
        </div>
      </div>

      {/* 補足（最背面） */}
      {heroContent.badge.note && (
        <p className="absolute bottom-4 left-4 z-0 text-[10px] font-medium text-brand-muted/40 md:left-8 md:text-[11px]">
          {heroContent.badge.note}
        </p>
      )}
    </section>
  );
};

export default Hero;
