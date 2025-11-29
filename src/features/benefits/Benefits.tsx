import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  benefits,
  studentResults,
  type StudentResult,
} from "../../content/benefits"; // 文言・リンクをコンポーネント外に分離して保守性を高める

/**
 * Benefitsセクションコンポーネント
 * DRY原則：アニメーション遅延計算を共通化
 */
const Benefits = () => {
  // DRY原則：アニメーション遅延計算ロジックを共通化
  const getBenefitAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER,
      index
    );
  const getStudentAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.STUDENT_RESULTS,
      ANIMATION_DELAYS.STAGGER,
      index
    );

  return (
  <Section>
    <div className="text-center space-y-6 animate-fade-up">
      <h2 className="mb-8 text-center font-sans text-5xl font-black leading-[1.1] tracking-tight text-brand-orange md:text-6xl lg:text-7xl">
        5つのベネフィット
      </h2>
    </div>
    {/* ベネフィットカード：画像を大きく見せるレイアウト */}
    <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center space-y-4 animate-fade-up"
          style={getBenefitAnimationDelay(index)}
        >
          {/* 画像 */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border-2 border-brand-dark/10 bg-gradient-to-br from-white to-brand-light/30 shadow-card hover-lift aspect-[4/3]">
            <ImageWithFallback
              src={benefit.image}
              alt={benefit.title}
              className="h-full w-full object-cover"
              fallbackText="画像を追加"
            />
          </div>
          {/* テキスト説明：視覚的階層を明確化 */}
          <div className="text-center space-y-3">
            <h3 className="mb-3 text-xl font-black text-gray-900 md:text-2xl">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    {/* CTA */}
    <div className="mt-12 flex justify-center">
      <CTAButton
        href="#contact"
        size="large"
        className="w-full max-w-md animate-shake-slow"
      >
        無料セミナーに申し込む
      </CTAButton>
    </div>
    {/* 受講生の成果：Video Wallスタイル */}
    <div className="mt-20 space-y-10">
      <div className="text-center space-y-6">
        <h2 className="mb-6 text-center font-sans text-4xl font-black leading-[1.1] tracking-tight text-brand-orange md:text-5xl lg:text-6xl xl:text-7xl">
          受講生の成果
        </h2>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
          定量的な成果と定性的な学びの両方を可視化し、再現性を証明します。
        </p>
        {/* 社会的証明：数値で信頼性を強化 */}
        <div className="mb-6 rounded-2xl border-2 border-brand-orange/30 bg-brand-orange/5 px-6 py-4 md:px-8 md:py-5">
          <p className="text-2xl font-black text-brand-orange md:text-3xl">
            98%の融資承認率
          </p>
          <p className="mt-1 text-sm text-brand-muted md:text-base">
            実際の受講生データより
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {studentResults.map((student: StudentResult, index) => (
          <div
            key={student.name}
            className="group flex flex-col gap-4 animate-fade-up"
            style={getStudentAnimationDelay(index)}
          >
            {/* 動画サムネイル (クリックエリア) */}
            <a
              href={student.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="relative block w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-orange-500/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40"
            >
              <div className="aspect-video w-full overflow-hidden">
                <ImageWithFallback
                  src={student.videoPoster}
                  alt={`${student.name} の動画サムネイル`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackText="動画"
                />
              </div>

              {/* オーバーレイ & 再生ボタン */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-orange shadow-lg transition-transform duration-300 group-hover:scale-110 animate-pulse">
                  <span className="ml-1 text-2xl">▶</span>
                </div>
              </div>
            </a>

            {/* シンプルなキャプション */}
            <div className="text-center px-2">
              <h3 className="text-lg md:text-xl font-black text-brand-dark leading-snug mb-2">
                {student.headline}
              </h3>
              <p className="text-sm font-bold text-brand-orange">
                {student.name}{" "}
                <span className="text-gray-400 font-normal text-xs ml-1">
                  | {student.location}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
  );
};

export default Benefits;


