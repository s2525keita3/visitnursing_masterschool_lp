import { Check } from "lucide-react";
import Section from "../../shared/ui/Section";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import { testimonials, type Testimonial } from "../../content/testimonials";

/**
 * 受講生の声セクションコンポーネント
 * ジグザグレイアウトで画像とテキストを交互に配置
 * PC: 左右交互、スマホ: 縦並び統一
 */
const Testimonials = () => {
  const getTestimonialAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER,
      index
    );

  return (
    <Section className="!py-8 md:!py-12">
      <div className="space-y-6 text-center animate-fade-up mb-12 md:mb-16">
        <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight text-brand-orange md:text-5xl lg:text-6xl">
          受講生の声
        </h2>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
          実際の受講生が語る、スクールでの学びと成果
        </p>
      </div>
      <div className="space-y-16 md:space-y-24">
        {testimonials.map((item: Testimonial, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-up ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
            style={getTestimonialAnimationDelay(index)}
          >
            {/* 画像エリア */}
            <div className="relative shrink-0">
              {/* 背景の装飾（ブラー効果） */}
              <div className="absolute inset-0 bg-brand-orange/10 rounded-full scale-110 blur-sm" />
              {/* 画像 */}
              <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  fallbackText={item.name}
                />
              </div>
            </div>

            {/* テキストエリア */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* タイトル */}
              <h3 className="text-xl md:text-2xl font-black text-brand-orange mb-4 leading-snug whitespace-pre-line">
                {item.title}
              </h3>

              {/* Before / After */}
              {item.before && item.after ? (
                <div className="space-y-4 mb-6 text-left">
                  {/* Before Box */}
                  <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                    <p className="text-xs font-bold text-gray-500 mb-1">Before</p>
                    <p className="text-sm text-gray-700">{item.before}</p>
                  </div>
                  {/* After Box */}
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand-orange shadow-sm">
                    <p className="text-xs font-bold text-brand-orange mb-2">After</p>
                    <ul className="space-y-2">
                      {item.after.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm font-bold text-gray-900">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                // データがない場合のフォールバック（既存のcontent表示）
                <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  {item.content}
                </p>
              )}

              {/* コメント (contentをひとこと感想として表示) */}
              {item.before && (
                <p className="text-sm text-gray-600 italic border-l-2 border-gray-200 pl-4 my-4 text-left">
                  "{item.content}"
                </p>
              )}

              {/* 名前と役職 */}
              <div className="md:text-right border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500 mb-1">{item.role}</p>
                <p className="text-lg font-bold text-gray-900">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
