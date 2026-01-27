import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";

const Seminar = () => {
  const imageAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.BASE * 2, 0, 0);

  return (
  <Section tone="surface">
    <div className="space-y-12">
      <div className="space-y-4 text-center animate-fade-up">
        <div className="inline-flex items-center justify-center rounded-full bg-brand-orange/10 px-6 py-2 font-semibold text-brand-orange">
          まずは無料相談から
        </div>
        <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          <span className="block text-brand-dark">あなたの状況に合わせた</span>
          <span className="mt-2 block text-brand-orange">
            無料個別相談
          </span>
        </h2>
      </div>

      <div className="flex justify-center animate-fade-up">
        <div className="w-full max-w-2xl rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] items-center">
            <div className="flex justify-center" style={imageAnimationStyle}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-orange/20 shadow-lg">
                <ImageWithFallback
                  src="/koushi-jon-photo.webp"
                  alt="講師 じょん の写真"
                  className="w-full h-full object-cover"
                  fallbackText="講師写真"
                />
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <div>
                <p className="text-lg font-bold text-brand-dark">講師：じょん</p>
                <p className="text-sm text-brand-muted">訪問看護 起業塾 主宰／現役経営者</p>
              </div>
              <div className="space-y-2 text-brand-dark">
                <p className="leading-relaxed">
                  ご希望の日程で<span className="font-bold text-brand-orange">60分の無料個別相談</span>を承ります。
                </p>
                <p className="text-sm text-brand-muted">
                  ※Zoomを使用（顔出し不要・耳だけ参加OK）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-brand-muted text-sm">
          「まずは情報収集だけ」でも歓迎です。強引な営業は一切ありません。
        </p>
        <div className="flex justify-center">
          <CTAButton href="#contact" size="large" className="w-full max-w-md animate-shake-slow">
            無料相談に申し込む
          </CTAButton>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Seminar;
