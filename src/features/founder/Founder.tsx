import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import CTAButton from "../../shared/ui/CTAButton";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  badges,
  programPhases,
  instructorAchievements,
  instructorRarity,
  type ProgramPhase,
} from "../../content/founder";

const Founder = () => {
  // DRY原則：アニメーション遅延計算ロジックを共通化（定数を使用）
  const getBadgeAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER,
      index
    );
  const imageAnimationStyle = useStaggeredAnimation(ANIMATION_DELAYS.BASE * 2, 0, 0);
  const getPhaseAnimationDelay = (index: number) =>
    useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER,
      index
    );

  return (
  <>
    <Section tone="surface">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6 animate-fade-up">
          <Pill>紹介</Pill>
          <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-brand-dark">開業準備の「迷い」を「確信」に変える！</span>
            <span className="mt-2 block text-brand-orange">
              訪問看護・起業の勝ち筋 公開セミナー
            </span>
          </h2>
          <p className="text-center text-lg font-semibold leading-relaxed text-brand-dark md:text-xl">
            まずは無料セミナーで！とことんお話しします。
          </p>
          <p className="text-brand-muted leading-relaxed">
            私自身が5拠点を運営し、年商5億円を作っている「現役プレイヤー」です。コンサルタントではなく、事業家だからこそ
            語れる「解像度の高い施策」だけを提供します。
          </p>
          {/* 実績強調 */}
          <div className="rounded-lg border-2 border-brand-orange bg-brand-orange/5 p-4">
            <p className="text-center text-lg font-black text-brand-dark md:text-xl">
              {instructorAchievements.achievement}
            </p>
          </div>
          {/* 希少性・緊急性の強調 */}
          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-4">
            <p className="mb-2 text-center text-base font-black text-red-700 md:text-lg">
              {instructorRarity.message.title}
            </p>
            <p className="text-center text-sm leading-relaxed text-red-600 md:text-base">
              {instructorRarity.message.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div
                key={badge.label}
                className="animate-fade-up rounded-3xl border border-brand-dark/5 bg-white p-6 text-center shadow-card hover-lift"
                style={getBadgeAnimationDelay(index)}
              >
                <p className="text-2xl font-sans text-brand-dark">{badge.value}</p>
                <p className="text-xs tracking-wide text-brand-muted">{badge.label}</p>
              </div>
            ))}
          </div>
          <CTAButton href="#contact">創業者と直接面談する</CTAButton>
        </div>
        <div
          className="space-y-6 rounded-3xl border border-brand-dark/5 bg-white p-6 shadow-card animate-fade-up md:p-8"
          style={imageAnimationStyle}
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-dark/10">
            <ImageWithFallback
              src="/koushi-jon-photo.png"
              alt="じょん講師の写真"
              className="w-full h-full object-cover"
              fallbackText="講師写真"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p className="text-lg font-semibold">Founder / じょん</p>
              <p className="text-sm opacity-90">訪問看護 起業塾 主宰</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-sans text-brand-dark">メッセージ</h3>
            <p className="text-brand-muted leading-relaxed">
              失敗事例をすべて公開し、再現性が証明されたノウハウしか扱いません。「開業後3ヶ月でキャッシュが尽きる」
              という悪夢をなくすために、財務・人材・集客を同時にマネジメントできる仕組みを提供します。
            </p>
            <p className="text-sm text-brand-muted">
              ※ 週あたり5名まで。面談では事業の前提条件をヒアリングし、リスクが高い場合はお断りすることもあります。
            </p>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Pill>Program</Pill>
          <h2 className="text-center font-sans text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-brand-dark">迷いを消す「6ヶ月間の集中講義」</span>
            <span className="mt-2 block text-brand-orange">
              開業から黒字化までの実践カリキュラム
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-brand-dark/80 md:text-xl">
            本講座では、開業に必要なタスクを「4つのフェーズ」に分解。
            すべての工程で、現場でそのまま使えるテンプレートとデータを提供し、机上の空論ではない実務を習得します。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programPhases.map((phase: ProgramPhase, index) => (
            <div
              key={phase.phase}
              className="space-y-4 rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-card hover-lift animate-fade-up"
              style={getPhaseAnimationDelay(index)}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold tracking-[0.3em] text-brand-muted uppercase">
                  {phase.phase}
                </p>
                <p className="text-base font-bold text-brand-orange">{phase.label}</p>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-brand-dark md:text-base"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border-2 border-brand-orange/40 bg-brand-orange/5 p-6 md:p-8 space-y-3 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] text-brand-orange uppercase">
            Special
          </p>
          <p className="text-2xl md:text-3xl font-bold text-brand-dark">
            ＼ 受講生限定：実務テンプレート使い放題 ／
          </p>
          <p className="text-brand-dark max-w-4xl mx-auto leading-relaxed">
            事業計画書フォーマット、営業チラシひな形、雇用契約書、管理者マニュアルなど、
            実際に現場で使用している50種類以上の業務ツールをすべて譲渡します。
          </p>
        </div>
      </div>
    </Section>
  </>
  );
};

export default Founder;


