import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useHeroAnimationDelays } from "../../shared/hooks/useAnimationDelays";
import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント
 * 最終解決：z-indexの強化とフォントサイズの極小化により、狭い幅でも文字を「絶対に隠さない・消さない」
 */
const Hero = () => {
  const animationDelays = useHeroAnimationDelays();

  return (
    <section className="relative w-full min-h-[auto] overflow-hidden bg-white pt-6 pb-10 md:min-h-[900px] md:py-20 lg:py-24">
      {/* 背景装飾 */}
      <div className="absolute right-0 top-0 z-0 h-full w-1/3 bg-gradient-to-l from-brand-muted/5 to-transparent" />

      {/* メインレイアウトコンテナ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-3 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-row items-start justify-between gap-1 md:gap-8">
          
          {/* 左：コンテンツエリア（z-30で最前面へ。幅を微調整） */}
          <div className="relative z-30 w-[64%] shrink-0 py-2 sm:w-[65%] md:w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* キャッチコピー */}
            <div className="animate-fade-up" style={animationDelays.targetText}>
              <p className="inline-block bg-[#E53E3E] px-1.5 py-0.5 text-[9px] font-black tracking-tighter text-white sm:text-xs md:px-3 md:py-1 md:text-base">
                {heroContent.brandLabel}
              </p>
            </div>

            {/* 強調帯（斜めカット） */}
            <div className="mt-3 animate-fade-up sm:mt-6 md:mt-8" style={animationDelays.title}>
              <div className="inline-block transform skew-x-[-15deg] bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-2 py-1 shadow-md sm:px-6 sm:py-2 md:px-8 md:py-3">
                <p className="transform skew-x-[15deg] text-[10px] font-black leading-tight text-white sm:text-base md:text-xl lg:text-2xl italic tracking-tighter">
                  {heroContent.highlightBar}
                </p>
              </div>
            </div>

            {/* メインタイトル（モバイルサイズをさらに最適化） */}
            <div className="mt-3 space-y-1 animate-fade-up sm:mt-6 sm:space-y-2 md:mt-8" style={animationDelays.title}>
              <h1 className="font-sans text-xl font-black leading-[1.1] tracking-tighter text-[#1a1a1a] sm:text-4xl md:text-6xl lg:text-7xl xl:text-[100px]">
                <span className="block">{heroContent.titleLine1}</span>
                <span className="mt-0.5 block bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent sm:mt-2">{heroContent.titleLine2}</span>
              </h1>
              <p className="mt-3 max-w-xl border-l-2 border-[#FF6B00] pl-2 text-[9px] font-bold leading-relaxed text-brand-muted/90 sm:border-l-4 sm:pl-6 sm:text-base md:text-xl lg:text-2xl">
                {heroContent.subTitle}
              </p>
            </div>

            {/* 実績カード（モバイルで文字が消えないようサイズを最小化） */}
            <div className="mt-5 grid grid-cols-1 gap-1.5 animate-fade-up sm:mt-8 sm:grid-cols-2 sm:gap-3 md:mt-12 md:max-w-2xl" style={animationDelays.offer}>
              {heroContent.points.map((p, index) => (
                <div
                  key={p.title}
                  className="group flex items-center gap-2 rounded-md border border-white/10 bg-[#1a1a1a] p-1.5 shadow-lg transition-all duration-300 hover:bg-[#2a2a2a] sm:gap-4 sm:rounded-xl sm:p-4"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <span className="text-lg font-black italic text-[#F7E39A] drop-shadow-[0_1px_3px_rgba(247,227,154,0.3)] sm:text-3xl md:text-5xl">
                      {p.title}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-black leading-tight text-white/70 sm:text-sm md:text-base">
                      {p.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA（ボタンが枠からはみ出さないよう調整） */}
            <div className="mt-6 space-y-2 animate-fade-up sm:mt-12 sm:space-y-4 md:mt-16" style={animationDelays.cta}>
              <CTAButton
                href="#contact"
                size="large"
                className="w-full py-3 text-sm font-black shadow-[0_8px_25px_rgba(255,107,0,0.4)] animate-shake-slow sm:w-auto sm:min-w-[320px] sm:text-xl md:min-w-[420px] md:text-3xl"
              >
                {heroContent.ctaLabel}
              </CTAButton>
              <p className="flex items-center gap-1 pl-1 text-[8px] font-bold text-brand-muted sm:pl-2 sm:text-sm">
                <span className="inline-block rounded bg-[#FF6B00] px-1 py-0.5 text-[7px] text-white">必見</span>
                {heroContent.ctaNote}
              </p>
            </div>
          </div>

          {/* 右：人物エリア（z-20で文字の下に配置し、絶対被らせない） */}
          <div className="relative z-20 w-[36%] shrink-0 pt-4 md:absolute md:right-0 md:bottom-0 md:h-[85%] md:w-[50%] lg:h-[95%]">
            <div className="h-full w-full">
              <ImageWithFallback
                src={heroContent.portraitImage}
                alt="講師の写真"
                className="h-full w-full object-contain object-right-top transition-transform duration-700 md:object-right-bottom lg:scale-[1.05]"
                fallbackText="講師写真"
                priority={true}
              />
            </div>
          </div>

        </div>
      </div>

      {/* 補足注釈（最背面 z-0） */}
      {heroContent.badge.note && (
        <p className="mt-6 px-3 text-[8px] font-medium text-brand-muted/40 md:absolute md:bottom-4 md:left-8 md:mt-0 md:text-left md:text-[11px]">
          {heroContent.badge.note}
        </p>
      )}
    </section>
  );
};

export default Hero;
