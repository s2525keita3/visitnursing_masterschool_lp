import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useHeroAnimationDelays } from "../../shared/hooks/useAnimationDelays";
import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント
 */
const Hero = () => {
  const animationDelays = useHeroAnimationDelays();

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f0]">
      {/* 背景画像（右側に人物＋青円が含まれている） */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroContent.portraitImage}
          alt=""
          className="h-full w-full object-cover object-[85%_center] sm:object-[80%_center] md:object-right"
          fallbackText=""
          priority={true}
        />
        {/* モバイルでテキストを読みやすくするための左側グラデーション */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f5f5f0] via-[#f5f5f0]/80 to-transparent md:via-[#f5f5f0]/60 md:to-transparent" />
      </div>


      {/* コンテンツ */}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
        <div className="max-w-md sm:max-w-lg md:max-w-xl">
          {/* ブランドラベル */}
          <div className="animate-fade-up" style={animationDelays.targetText}>
            <p className="text-sm font-bold tracking-tight text-brand-dark sm:text-base md:text-lg">
              {heroContent.brandLabel}
            </p>
          </div>

          {/* オレンジ帯（キーメッセージ） */}
          <div className="mt-4 animate-fade-up sm:mt-6" style={animationDelays.title}>
            <div className="inline-block rounded-sm bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-4 py-2 shadow-[0_8px_24px_rgba(255,107,0,0.35)] sm:px-6 sm:py-3 md:px-7 md:py-4">
              <p className="text-sm font-black leading-tight text-white sm:text-base md:text-lg">
                {heroContent.highlightBar}
              </p>
            </div>
          </div>

          {/* 大見出し */}
          <div className="mt-4 space-y-3 animate-fade-up sm:mt-6 sm:space-y-4" style={animationDelays.title}>
            <h1 className="font-sans text-3xl font-black leading-[1.1] tracking-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">{heroContent.titleLine1}</span>
              <span className="mt-1 block sm:mt-2">{heroContent.titleLine2}</span>
            </h1>
            <p className="max-w-sm text-sm font-semibold leading-relaxed text-brand-muted sm:max-w-md sm:text-base md:max-w-lg md:text-lg">
              {heroContent.subTitle}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 space-y-2 animate-fade-up sm:mt-8 sm:space-y-3" style={animationDelays.cta}>
            <CTAButton
              href="#contact"
              size="large"
              className="w-full text-lg font-black shadow-[0_12px_48px_rgba(255,107,0,0.6)] animate-shake-slow sm:w-auto sm:min-w-[320px] sm:text-xl md:min-w-[360px]"
            >
              {heroContent.ctaLabel}
            </CTAButton>
            <p className="text-[10px] font-semibold text-brand-muted sm:text-xs md:text-sm">
              {heroContent.ctaNote}
            </p>
          </div>

          {/* 下部4丸（実績数字を金色で目立たせる） */}
          <div className="mt-8 grid max-w-md grid-cols-4 gap-3 animate-fade-up sm:mt-10 sm:max-w-lg sm:gap-4 md:max-w-xl md:gap-5" style={animationDelays.offer}>
            {heroContent.points.map((p, index) => (
              <div
                key={p.title}
                className="group relative flex aspect-square flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#F7E39A] via-[#E6C659] to-[#C99A2E] p-2 text-center shadow-[0_10px_30px_rgba(201,154,46,0.4)] ring-4 ring-white/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_rgba(201,154,46,0.5)] sm:p-3 md:p-4"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* 数字（超目立たせる） */}
                <p 
                  className="text-xl font-black leading-none text-[#1E66D0] drop-shadow-[0_2px_4px_rgba(30,102,208,0.3)] sm:text-2xl md:text-3xl lg:text-4xl"
                  style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}
                >
                  {p.title}
                </p>
                {/* サブタイトル（控えめに） */}
                {p.subtitle && (
                  <p className="mt-1 text-[7px] font-bold leading-tight text-[#1E66D0]/70 sm:text-[8px] md:text-[9px] lg:text-[11px]">
                    {p.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {heroContent.badge.note && (
        <p className="absolute bottom-2 right-2 text-[8px] font-medium text-brand-muted sm:bottom-4 sm:right-4 sm:text-[10px] md:text-[11px]">
          {heroContent.badge.note}
        </p>
      )}
    </section>
  );
};

export default Hero;
