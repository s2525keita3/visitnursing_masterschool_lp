import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useHeroAnimationDelays } from "../../shared/hooks/useAnimationDelays";
import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント
 * 解決策：モバイルでもテキストと人物を横並び(Flex)にし、絶対に重ならないように配置
 */
const Hero = () => {
  const animationDelays = useHeroAnimationDelays();

  return (
    <section className="relative w-full min-h-[auto] overflow-hidden bg-white pt-8 pb-12 md:min-h-[900px] md:py-20 lg:py-24">
      {/* 背景装飾（控えめ） */}
      <div className="absolute right-0 top-0 z-0 h-full w-1/3 bg-gradient-to-l from-brand-muted/5 to-transparent" />

      {/* メインレイアウトコンテナ */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-row items-stretch justify-between gap-2 md:gap-8">
          
          {/* 左：コンテンツエリア（モバイルで幅を確保して重なりを防止） */}
          <div className="w-[62%] shrink-0 py-4 sm:w-[65%] md:w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* キャッチコピー */}
            <div className="animate-fade-up" style={animationDelays.targetText}>
              <p className="inline-block bg-[#E53E3E] px-2 py-0.5 text-[10px] font-black tracking-tighter text-white sm:text-sm md:px-3 md:py-1 md:text-base">
                {heroContent.brandLabel}
              </p>
            </div>

            {/* 強調帯 */}
            <div className="mt-4 animate-fade-up sm:mt-6 md:mt-8" style={animationDelays.title}>
              <div className="inline-block transform skew-x-[-15deg] bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-3 py-1.5 shadow-md sm:px-6 sm:py-2 md:px-8 md:py-3">
                <p className="transform skew-x-[15deg] text-[11px] font-black leading-tight text-white sm:text-base md:text-xl lg:text-2xl italic tracking-tighter">
                  {heroContent.highlightBar}
                </p>
              </div>
            </div>

            {/* メインタイトル */}
            <div className="mt-4 space-y-1 animate-fade-up sm:mt-6 sm:space-y-2 md:mt-8" style={animationDelays.title}>
              <h1 className="font-sans text-2xl font-black leading-[1.1] tracking-tighter text-[#1a1a1a] sm:text-4xl md:text-6xl lg:text-7xl xl:text-[100px]">
                <span className="block">{heroContent.titleLine1}</span>
                <span className="mt-1 block bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent sm:mt-2">{heroContent.titleLine2}</span>
              </h1>
              <p className="mt-4 max-w-xl border-l-2 border-[#FF6B00] pl-3 text-[11px] font-bold leading-relaxed text-brand-muted/90 sm:border-l-4 sm:pl-6 sm:text-base md:text-xl lg:text-2xl">
                {heroContent.subTitle}
              </p>
            </div>

            {/* 実績カード（モバイルでは1列） */}
            <div className="mt-6 grid grid-cols-1 gap-2 animate-fade-up sm:mt-8 sm:grid-cols-2 sm:gap-3 md:mt-12 md:max-w-2xl" style={animationDelays.offer}>
              {heroContent.points.map((p, index) => (
                <div
                  key={p.title}
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1a1a] p-2 shadow-xl transition-all duration-300 hover:bg-[#2a2a2a] sm:gap-4 sm:rounded-xl sm:p-4"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <span className="text-xl font-black italic text-[#F7E39A] drop-shadow-[0_1px_5px_rgba(247,227,154,0.3)] sm:text-3xl md:text-5xl">
                      {p.title}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black leading-tight text-white/70 sm:text-sm md:text-base">
                      {p.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 space-y-3 animate-fade-up sm:mt-12 sm:space-y-4 md:mt-16" style={animationDelays.cta}>
              <CTAButton
                href="#contact"
                size="large"
                className="w-full text-base font-black shadow-[0_10px_30px_rgba(255,107,0,0.4)] animate-shake-slow sm:w-auto sm:min-w-[320px] sm:text-xl md:min-w-[420px] md:text-3xl"
              >
                {heroContent.ctaLabel}
              </CTAButton>
              <p className="flex items-center gap-2 pl-1 text-[10px] font-bold text-brand-muted sm:pl-2 sm:text-sm">
                <span className="inline-block rounded bg-[#FF6B00] px-1.5 py-0.5 text-[9px] text-white">必見</span>
                {heroContent.ctaNote}
              </p>
            </div>
          </div>

          {/* 右：人物エリア（モバイルでも横に居続ける） */}
          <div className="relative w-[38%] shrink-0 sm:w-[35%] md:absolute md:right-0 md:bottom-0 md:h-[85%] md:w-[50%] lg:h-[95%]">
            <div className="sticky top-20 h-full w-full md:relative md:top-0">
              <ImageWithFallback
                src={heroContent.portraitImage}
                alt="講師の写真"
                className="h-full w-full object-contain object-right-bottom transition-transform duration-700 md:object-bottom lg:scale-[1.05]"
                fallbackText="講師写真"
                priority={true}
              />
            </div>
          </div>

        </div>
      </div>

      {/* 補足注釈 */}
      {heroContent.badge.note && (
        <p className="mt-8 px-4 text-center text-[9px] font-medium text-brand-muted/40 md:absolute md:bottom-4 md:left-8 md:mt-0 md:text-left md:text-[11px]">
          {heroContent.badge.note}
        </p>
      )}
    </section>
  );
};

export default Hero;
