import { memo } from "react";
import CTAButton from "../ui/CTAButton";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { cn } from "../utils/cn";

/**
 * CTAセクションコンポーネント
 * CRO最適化：戦略的な位置に配置してコンバージョン率を最大化
 * デザイン：緑の背景、特典画像、オレンジ色の目立つボタン
 */
const CtaSection = memo(() => {
  return (
    <section className="bg-emerald-500 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
          {/* 特典画像：スマホは上、デスクトップは左 */}
          <div className="flex-shrink-0 md:w-1/2">
            <ImageWithFallback
              src="/present.webp"
              alt="無料セミナー参加特典"
              className="h-auto w-full max-w-md object-contain md:max-w-full"
              fallbackText="特典画像"
            />
          </div>

          {/* テキストとCTAボタン：スマホは下、デスクトップは右 */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-brand-dark md:text-sm">
                  ※先着10名限定
                </span>
              </div>
              <h2 className="text-2xl font-black leading-tight text-white md:text-3xl lg:text-4xl">
                無料セミナー参加特典
              </h2>
              <p className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
                「融資に強い事業計画書フォーマット」を
                <br className="hidden md:block" />
                プレゼント！
              </p>
            </div>

            {/* CTAボタン：モバイル最適化（Thumb Zone）、高さ56px以上 */}
            <div className="w-full md:w-auto">
              <CTAButton
                href="#contact"
                size="large"
                className={cn(
                  "w-full min-h-[56px] text-lg font-black shadow-[0_8px_32px_rgba(255,107,0,0.5)]",
                  "animate-shake-slow md:w-auto md:min-w-[320px]",
                  "touch-manipulation"
                )}
              >
                無料説明会に申し込む
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CtaSection.displayName = "CtaSection";

export default CtaSection;

