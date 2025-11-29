import { Card } from "../../shared/ui/Card";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import { BACKGROUND_IMAGES } from "../../shared/constants/styles";
import { problems, type ProblemItem } from "../../content/problems"; // 問題リストを専用モジュールに切り出し、文言変更を一元管理できるようにする

const Problems = () => {
  // アニメーション遅延を直接計算（useStaggeredAnimationは既にuseMemoで最適化済み）
  // パフォーマンス最適化：不要なuseMemoの二重ラップを削除
  const listAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.PROBLEMS_LIST, 0, 0);
  const solutionAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.PROBLEMS_SOLUTION, 0, 0);
  const titleAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.PROBLEMS_TITLE, 0, 0);

  return (
  <div className="relative flex min-h-screen w-full items-center overflow-hidden py-12 md:py-16 lg:py-20">
    {/* 背景画像：インラインスタイルを避け、ImageWithFallbackで管理 */}
    <ImageWithFallback
      src={BACKGROUND_IMAGES.PROBLEMS}
      alt=""
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      fallbackText=""
      priority={false}
    />
    {/* 背景オーバーレイ（背景画像を薄くする） */}
    <div className="pointer-events-none absolute inset-0 z-[1] bg-white/20" />
    
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 md:px-6 lg:px-8">
      {/* ターゲット層への呼びかけ */}
      <div className="mb-4 text-center md:mb-6 animate-fade-up">
        <p className="mb-3 text-lg font-bold text-brand-orange drop-shadow-lg md:mb-4 md:text-xl lg:text-2xl">
          経営・採用の「正解」が見えない訪問看護ステーション開業希望・準備中の方へ
        </p>
      </div>

      {/* 問題提起（フック） */}
      <div className="mb-6 animate-fade-up text-center md:mb-8" style={titleAnimationStyle}>
        <h2 className="mb-4 text-center font-sans text-3xl font-black leading-[1.1] tracking-tight text-brand-orange drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:text-4xl lg:text-5xl">
          開業前に潰すべき6つの致命傷
        </h2>
      </div>

      {/* メインコンテンツ：問題リストを中央に配置 */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-2xl space-y-4 animate-fade-up md:space-y-6"
          style={listAnimationStyle}
        >
          {problems.map((problem: ProblemItem, index) => {
            // DRY原則：アニメーション遅延計算ロジックを共通化（定数を使用）
            const animationStyle = useStaggeredAnimation(
              ANIMATION_DELAYS.PROBLEMS_LIST,
              ANIMATION_DELAYS.STAGGER / 2,
              index
            );

            return (
              <Card
                key={problem.title}
                className="min-h-[120px] cursor-pointer bg-white backdrop-blur-sm hover-lift md:rounded-3xl touch-manipulation flex items-center border-2 border-brand-dark/10"
                padding="md"
                style={animationStyle}
              >
                <div className="w-full space-y-3">
                  <h3 className="mb-2 text-xl font-black text-gray-900 md:text-2xl">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {problem.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 解決策（オファー）：CTAボタン */}
      <div className="mt-8 animate-fade-up text-center md:mt-12" style={solutionAnimationStyle}>
        <CTAButton
          href="#contact"
          size="large"
          className="w-full max-w-md mx-auto text-lg font-black shadow-[0_8px_32px_rgba(255,107,0,0.5)] animate-shake-slow md:text-xl"
        >
          無料説明会に申し込む
        </CTAButton>
      </div>
    </div>
  </div>
  );
};

export default Problems;


