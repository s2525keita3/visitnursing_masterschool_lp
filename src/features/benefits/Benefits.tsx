import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { Card } from "../../shared/ui/Card";
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
    {/* 受講生の成果 */}
    <div className="mt-20 space-y-10">
      <div className="text-center space-y-6">
        <h2 className="mb-6 text-center font-sans text-4xl font-black leading-[1.1] tracking-tight text-brand-orange md:text-5xl lg:text-6xl xl:text-7xl">
          受講生の成果
        </h2>
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
      <div className="grid gap-6 md:grid-cols-3">
        {studentResults.map((student: StudentResult, index) => (
          <Card
            key={student.name}
            className="animate-fade-up space-y-5"
            padding="lg"
            style={getStudentAnimationDelay(index)}
          >
            {/* コンテキストタグ（改善案1） */}
            <div className="mb-2">
              <span className="inline-block rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-1.5 text-xs font-bold text-brand-orange">
                {student.contextTag}
              </span>
            </div>

            {/* 動画サムネイル */}
            <a
              href={student.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40"
            >
              <div className="relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-black">
                <div className="flex aspect-video w-full items-center justify-center">
                  <ImageWithFallback
                    src={student.videoPoster}
                    alt={`${student.name} の動画サムネイル`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    fallbackText="動画サムネイル"
                  />
                </div>

                {/* 再生ボタン */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-2xl text-brand-orange shadow-[0_4px_16px_rgba(255,107,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                    ▶
                  </span>
                </div>
              </div>
            </a>

            <div className="space-y-4">
              {/* クライアント情報 */}
              <div>
                <p className="text-sm font-semibold text-brand-orange">{student.name}</p>
                <p className="text-xs uppercase tracking-wide text-brand-muted">
                  {student.location}
                </p>
              </div>

              {/* ヘッドライン（改善案3：視覚的強調） */}
              <p className="text-xl font-black leading-snug text-brand-dark md:text-2xl">
                {student.headline}
              </p>
              <div className="rounded-2xl border border-brand-dark/10 bg-brand-dark/5 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  Before
                </p>
                <p className="text-sm leading-relaxed text-brand-dark">
                  {student.before}
                </p>
              </div>
              {/* Afterセクション：視覚的に強調 */}
              <div className="rounded-2xl border-2 border-brand-orange/40 bg-brand-orange/10 p-6 shadow-[0_4px_16px_rgba(255,107,0,0.15)]">
                <p className="mb-4 text-base font-black uppercase tracking-wide text-brand-orange md:text-lg">
                  After
                </p>
                <ul className="space-y-3">
                  {student.after.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-base font-bold leading-relaxed text-brand-dark md:text-lg"
                    >
                      <span className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-brand-orange shadow-sm" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-brand-dark/80 italic">
                {student.testimonial}
              </p>
              {student.website && (
                <div className="pt-2">
                  <a
                    href={student.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-brand-orange/30 bg-white px-4 py-2 text-sm font-semibold text-brand-orange shadow-sm transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    公式サイトを見る
                  </a>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Section>
  );
};

export default Benefits;


