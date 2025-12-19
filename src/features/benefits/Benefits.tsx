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
    {/* ベネフィットカード：画像左・テキスト右のリスト形式（強調色を適用） */}
    <div className="mt-16 space-y-6 max-w-4xl mx-auto">
      {benefits.map((benefit, index) => {
        // 「」や『』で囲まれた重要ワードをブランドカラーで強調するパーサー
        const renderDescription = (desc: string) => {
          // 「」や『』で囲まれた部分を抽出して色付け
          const parts = desc.split(/([「」『』])/);
          let isEmphasized = false;
          let isDoubleEmphasized = false;

          return parts.map((part, i) => {
            if (part === "「") { isEmphasized = true; return null; }
            if (part === "」") { isEmphasized = false; return null; }
            if (part === "『") { isDoubleEmphasized = true; return null; }
            if (part === "』") { isDoubleEmphasized = false; return null; }

            if (isEmphasized) {
              return <span key={i} className="text-brand-orange font-black">「{part}」</span>;
            }
            if (isDoubleEmphasized) {
              return <span key={i} className="text-brand-orange font-black">『{part}』</span>;
            }
            return part;
          });
        };

        return (
          <div
            key={benefit.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:flex-row"
            style={getBenefitAnimationDelay(index)}
          >
            {/* 左側：画像エリア（数字タグ付き） */}
            <div className="relative h-48 shrink-0 sm:h-auto sm:w-1/3 md:w-2/5">
              <div className="absolute top-0 left-0 z-10 flex h-12 w-12 items-center justify-center bg-brand-orange text-2xl font-black text-white rounded-br-2xl shadow-lg">
                {index + 1}
              </div>
              <ImageWithFallback
                src={benefit.image}
                alt={benefit.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                fallbackText="画像"
              />
            </div>

            {/* 右側：テキストエリア */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-black text-gray-900 md:text-2xl lg:text-3xl">
                {renderDescription(benefit.title)}
              </h3>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                {renderDescription(benefit.description)}
              </p>
            </div>
          </div>
        );
      })}
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


