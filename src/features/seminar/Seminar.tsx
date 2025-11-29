import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  scheduleOptions,
  seminarTopics,
  type ScheduleSlot,
  type SeminarTopic,
} from "../../content/seminar"; // セミナーのトピックと日程を専用モジュールに分離し、再利用と差し替えを容易にする

const Seminar = () => {
  // DRY原則：アニメーション遅延計算ロジックを共通化（定数を使用）
  const getTopicAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER / 2,
      index
    );
  const imageAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.BASE * 2, 0, 0);

  return (
  <Section tone="surface">
    <div className="space-y-12">
      <div className="space-y-4 text-center animate-fade-up">
        <div className="inline-flex items-center justify-center rounded-full bg-brand-orange/10 px-6 py-2 font-semibold text-brand-orange">
          まずは無料セミナーで「経営の正解」を体感しませんか？
        </div>
        <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          <span className="block text-brand-dark">開業準備の「迷い」を「確信」に変える！</span>
          <span className="mt-2 block text-brand-orange">
            訪問看護・起業の勝ち筋 公開セミナー
          </span>
        </h2>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 animate-fade-up">
          {seminarTopics.map((topic: SeminarTopic, index) => (
            <div
              key={topic.title}
              className="rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-card hover-lift"
              style={getTopicAnimationDelay(index)}
            >
              <p className="text-lg font-bold text-brand-dark">{topic.title}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 animate-fade-up" style={imageAnimationStyle}>
          <div className="rounded-3xl overflow-hidden border border-brand-dark/10 shadow-card">
            <ImageWithFallback
              src="/koushi-jon-photo.webp"
              alt="講師 じょん の写真"
              className="w-full h-full object-cover"
              fallbackText="講師写真"
            />
            <div className="p-4 bg-white">
              <p className="text-sm font-semibold text-brand-dark">講師：じょん</p>
              <p className="text-xs text-brand-muted">訪問看護 起業塾 主宰／現役経営者</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center animate-fade-up">
        <div className="w-full max-w-2xl space-y-6 rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-card">
          <div>
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest">
              オンラインセミナー（Zoom開催）
            </p>
            <div className="mt-3 space-y-3">
              {scheduleOptions.map((slot: ScheduleSlot) => (
                <div
                  key={slot.date}
                  className="flex flex-col rounded-2xl border border-brand-dark/10 bg-brand-dark/5 px-4 py-3 text-brand-dark sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-semibold">{slot.date}</span>
                  <span className="text-sm sm:text-base">{slot.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-brand-muted mt-3">
              ※日程が合わない方は個別日程の調整も可能です。
            </p>
          </div>
          <div className="space-y-2 text-brand-dark">
            <p className="font-semibold">参加方法：</p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Zoomを使用します（顔出し不要・耳だけ参加OK）。お申し込み後、視聴用URLをメールで送付します。
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-brand-muted text-sm">
          「まずはセミナーで情報収集だけ」でも歓迎です。強引な営業は一切ありません。
        </p>
        <div className="flex justify-center">
          <CTAButton href="#contact" size="large" className="w-full max-w-md animate-shake-slow">
            無料セミナーに申し込む
          </CTAButton>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Seminar;


