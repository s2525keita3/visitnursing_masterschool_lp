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
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* 左：コピー（画像レイアウトに合わせて“左余白”を活かす） */}
          <div className="space-y-7">
            <div className="animate-fade-up" style={animationDelays.targetText}>
              <p className="text-center text-base font-bold tracking-tight text-brand-dark md:text-left md:text-lg">
                {heroContent.brandLabel}
              </p>
            </div>

            {/* 青帯（キーメッセージ） */}
            <div className="animate-fade-up" style={animationDelays.title}>
              <div className="mx-auto w-full max-w-[560px] rounded-sm bg-[#1E66D0] px-6 py-4 md:mx-0 md:px-7 md:py-4">
                <p className="text-center text-base font-black leading-tight text-white md:text-left md:text-lg">
                  {heroContent.highlightBar}
                </p>
              </div>
            </div>

            {/* 大見出し */}
            <div className="space-y-4 animate-fade-up" style={animationDelays.title}>
              <h1 className="text-center font-sans text-5xl font-black leading-[1.05] tracking-tight text-brand-dark md:text-left md:text-6xl lg:text-7xl">
                <span className="block">{heroContent.titleLine1}</span>
                <span className="mt-3 block">{heroContent.titleLine2}</span>
              </h1>
              <p className="mx-auto max-w-2xl text-center text-base font-semibold leading-relaxed text-brand-muted md:mx-0 md:text-left md:text-lg">
                {heroContent.subTitle}
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 animate-fade-up" style={animationDelays.cta}>
              <div className="flex justify-center md:justify-start">
                <CTAButton
                  href="#contact"
                  size="large"
                  className="w-full max-w-lg text-xl font-black shadow-[0_12px_48px_rgba(255,107,0,0.6)] animate-shake-slow sm:w-auto sm:min-w-[380px]"
                >
                  {heroContent.ctaLabel}
                </CTAButton>
              </div>
              <p className="text-center text-xs font-semibold text-brand-muted md:text-left md:text-sm">
                {heroContent.ctaNote}
              </p>
            </div>

            {/* 下部3丸（ベネフィット即理解） */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3 animate-fade-up" style={animationDelays.offer}>
              {heroContent.points.map((p) => (
                <div
                  key={p.title}
                  className="flex min-h-[92px] flex-col items-center justify-center rounded-full border-2 border-[#1E66D0] bg-white px-4 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:aspect-square sm:min-h-0 sm:px-3"
                >
                  <p className="text-sm font-black leading-tight text-[#1E66D0] sm:text-base">
                    {p.title}
                  </p>
                  {p.subtitle && (
                    <p className="mt-2 text-[11px] font-semibold leading-tight text-brand-muted sm:text-xs">
                      {p.subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 右：円＋人物＋実績バッジ（画像レイアウトに寄せる） */}
          <div className="relative animate-fade-up" style={animationDelays.offer}>
            {/* 背景の大きい青円 */}
            <div className="pointer-events-none absolute -right-24 top-12 h-[520px] w-[520px] rounded-full bg-[#1E66D0] md:-right-28 md:top-6" />

            <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center md:ml-auto">
              {/* 人物円（kigyo_heroから右側を切り出すイメージ） */}
              <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full bg-white shadow-card sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px]">
                <ImageWithFallback
                  src={heroContent.portraitImage}
                  alt="講師の写真"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "82% 40%" }}
                  fallbackText="講師写真"
                  priority={true}
                />
                {/* ほんのり白グラデで文字の邪魔を防ぐ */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
              </div>

              {/* 94%バッジ */}
              <div className="absolute -left-2 top-10 sm:-left-8 sm:top-12">
                <div className="grid h-[160px] w-[160px] place-items-center rounded-full bg-gradient-to-br from-[#F7E39A] via-[#E6C659] to-[#C99A2E] shadow-[0_18px_60px_rgba(201,154,46,0.35)]">
                  <div className="text-center">
                    <p className="text-sm font-black text-[#1E66D0] sm:text-base">
                      {heroContent.badge.kicker}
                    </p>
                    <p className="mt-1 text-5xl font-black leading-none text-[#1E66D0] sm:text-6xl">
                      {heroContent.badge.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {heroContent.badge.note && (
              <p className="mt-4 text-center text-[11px] font-medium text-brand-muted md:text-right">
                {heroContent.badge.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
