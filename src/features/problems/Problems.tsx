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
      {/* ターゲット層への呼びかけ（強烈な警告バナー風） */}
      <div className="mb-8 flex flex-col items-center gap-4 text-center animate-fade-up md:mb-12">
        <div className="inline-block bg-brand-dark px-4 py-1 text-sm font-black text-white sm:text-base md:text-lg">
          WARNING
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-black leading-tight text-brand-dark sm:text-3xl md:text-4xl lg:text-5xl">
            まだ<span className="text-brand-orange">「なんとかなる」</span>と<br className="sm:hidden" />思っていませんか？
          </p>
          <div className="mt-4 inline-block border-y-4 border-red-600 py-3 md:py-4">
            <p className="text-xl font-black leading-tight text-red-600 sm:text-2xl md:text-4xl lg:text-5xl">
              9割の開業者が陥る<br className="sm:hidden" />「破滅へのカウントダウン」は、<br className="hidden sm:block" />
              すでに始まっています。
            </p>
          </div>
        </div>
      </div>

      {/* 問題提起（フック） */}
      <div className="mb-6 animate-fade-up text-center md:mb-8" style={titleAnimationStyle}>
        <h2 className="mb-4 text-center font-sans text-3xl font-black leading-[1.1] tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
          開業前に潰すべき<span className="text-red-600 underline decoration-red-600/30 underline-offset-8">6つの致命傷</span>
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

            // 「最悪の未来」部分を強調表示するための簡易パーサー
            // タイトル内の「」の中身を赤く強調
            const renderTitle = (title: string) => {
              const parts = title.split(/[「」]/);
              if (parts.length >= 3) {
                return (
                  <>
                    {parts[0]}<span className="text-red-600">「{parts[1]}」</span>{parts[2]}
                  </>
                );
              }
              return title;
            };

            return (
              <Card
                key={problem.title}
                className="min-h-[120px] cursor-pointer bg-white backdrop-blur-sm hover-lift md:rounded-3xl touch-manipulation flex items-center border-2 border-brand-dark/10"
                padding="md"
                style={animationStyle}
              >
                <div className="w-full space-y-3">
                  <h3 className="mb-2 text-xl font-black text-gray-900 md:text-2xl">
                    {renderTitle(problem.title)}
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
          無料個別相談を申し込む
        </CTAButton>
      </div>
    </div>
  </div>
  );
};

export default Problems;


