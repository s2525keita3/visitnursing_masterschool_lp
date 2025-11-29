import Section from "../../shared/ui/Section";
import { Card } from "../../shared/ui/Card";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  programRoadmap,
  curriculumAreas,
  learningEnvironment,
  type ProgramPhase,
} from "../../content/program";
import { Sparkles, Award, CheckCircle2, Video, MessageSquare, Users } from "lucide-react";

/**
 * プログラム要点セクションコンポーネント
 * CRO最適化：要点を明確に提示し、視覚的インパクトで理解を促進
 * 
 * 表示内容：
 * 1. カリキュラムの5大領域（何を学ぶか）
 * 2. 学習環境・サポート体制（チャットし放題など）
 * 3. 6ヶ月間のロードマップ（詳細カリキュラム）
 * 4. 修了証書
 */

/**
 * カリキュラム5大領域コンポーネント
 * 網羅性を強調し、「これなら自分でもできる」という確信を生む
 * タスク1で追加：5大領域を明示
 */
const CurriculumAreas = () => (
  <div className="mb-16 animate-fade-up">
    <div className="mb-8 text-center">
      <h3 className="mb-4 font-sans text-3xl font-black leading-tight tracking-tight text-brand-dark md:text-4xl">
        <span className="block">カリキュラムの</span>
        <span className="block text-brand-orange">5大領域</span>
      </h3>
      <p className="text-base text-brand-muted md:text-lg">
        開業から黒字化まで、必要な知識を網羅的に習得
      </p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {curriculumAreas.map((area, index) => {
        const animationStyle = useStaggeredAnimation(
          ANIMATION_DELAYS.BASE,
          ANIMATION_DELAYS.STAGGER,
          index
        );
        return (
          <Card
            key={area.id}
            className="border-2 border-brand-dark/10 bg-gradient-to-br from-white to-brand-light/20 hover-lift"
            padding="md"
            style={animationStyle}
          >
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold text-brand-orange md:text-sm">
                {area.category}
              </span>
              <h4 className="text-lg font-black text-brand-dark md:text-xl">
                {area.title}
              </h4>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
);

/**
 * 学習環境・サポート体制コンポーネント
 * 安心感を強調し、学習の継続性を担保
 * タスク1で追加：チャットし放題などのサポート体制を明示
 */
const LearningSupport = () => (
  <div className="mb-16 animate-fade-up">
    <div className="mb-8 text-center">
      <h3 className="mb-4 font-sans text-3xl font-black leading-tight tracking-tight text-brand-dark md:text-4xl">
        <span className="block">学習環境・</span>
        <span className="block text-brand-orange">サポート体制</span>
      </h3>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        className="border-2 border-brand-dark/10 bg-gradient-to-br from-blue-50 to-blue-100/50 hover-lift"
        padding="md"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 md:h-14 md:w-14">
              <Video className="h-6 w-6 text-white md:h-7 md:w-7" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-lg font-black text-brand-dark md:text-xl">
              {learningEnvironment.format.title}
            </h4>
            <p className="text-sm leading-relaxed text-brand-muted md:text-base">
              {learningEnvironment.format.description}
            </p>
          </div>
        </div>
      </Card>

      <Card
        className="border-2 border-brand-dark/10 bg-gradient-to-br from-emerald-50 to-emerald-100/50 hover-lift"
        padding="md"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 md:h-14 md:w-14">
              <MessageSquare className="h-6 w-6 text-white md:h-7 md:w-7" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-lg font-black text-brand-dark md:text-xl">
              {learningEnvironment.questions.title}
            </h4>
            <p className="text-sm leading-relaxed text-brand-muted md:text-base">
              {learningEnvironment.questions.description}
            </p>
          </div>
        </div>
      </Card>

      <Card
        className="border-2 border-brand-dark/10 bg-gradient-to-br from-purple-50 to-purple-100/50 hover-lift"
        padding="md"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 md:h-14 md:w-14">
              <Users className="h-6 w-6 text-white md:h-7 md:w-7" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-lg font-black text-brand-dark md:text-xl">
              {learningEnvironment.consultation.title}
            </h4>
            <p className="text-sm leading-relaxed text-brand-muted md:text-base">
              {learningEnvironment.consultation.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const ProgramHighlights = () => {
  return (
    <Section id="program" tone="surface">
      <div className="mx-auto max-w-7xl">
        {/* カリキュラム5大領域 */}
        <CurriculumAreas />

        {/* 学習環境・サポート体制 */}
        <LearningSupport />

        {/* ロードマップセクション */}
        <div className="space-y-12 animate-fade-up md:space-y-16">
          <div className="text-center">
            <h2 className="mb-4 font-sans text-4xl font-black leading-tight tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
              <span className="block">6ヶ月間のロードマップ</span>
              <span className="block text-brand-orange">
                （詳細カリキュラム）
              </span>
            </h2>
          </div>

          {/* Phaseごとのカード */}
          {programRoadmap.map((phase: ProgramPhase, phaseIndex) => {
            const phaseAnimationStyle = useStaggeredAnimation(
              ANIMATION_DELAYS.BASE + phaseIndex * 0.2,
              0,
              0
            );

            return (
              <div key={phase.phase} style={phaseAnimationStyle}>
                <Card className="bg-gradient-to-br from-white to-brand-light/10 border-2 border-brand-dark/10" padding="lg">
                  <div className="space-y-6">
                    {/* Phaseヘッダー */}
                    <div className="border-b-2 border-brand-orange/30 pb-4">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="rounded-full bg-brand-orange px-4 py-1 text-sm font-black text-white">
                          {phase.phase}
                        </span>
                        <span className="text-lg font-bold text-brand-muted">
                          {phase.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-brand-dark md:text-3xl">
                        {phase.title}
                      </h3>
                      <p className="mt-2 text-base text-brand-muted md:text-lg">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* 月ごとの詳細 */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {phase.months.map((month, monthIndex) => {
                        const monthAnimationStyle = useStaggeredAnimation(
                          ANIMATION_DELAYS.BASE + phaseIndex * 0.2 + monthIndex * 0.1,
                          0,
                          0
                        );

                        return (
                          <div
                            key={month.month}
                            className="space-y-4 rounded-xl border border-brand-dark/10 bg-white p-6"
                            style={monthAnimationStyle}
                          >
                            {/* 月とタイトル */}
                            <div>
                              <span className="mb-2 inline-block rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-bold text-brand-orange">
                                {month.month}
                              </span>
                              <h4 className="text-xl font-black text-brand-dark md:text-2xl">
                                {month.title}
                              </h4>
                            </div>

                            {/* 課題 */}
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-red-600">
                                【課題】
                              </p>
                              <p className="text-sm leading-relaxed text-brand-dark">
                                {month.challenge}
                              </p>
                            </div>

                            {/* 解決策 */}
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-emerald-600">
                                【解決】
                              </p>
                              <p className="text-sm leading-relaxed text-brand-dark">
                                {month.solution}
                              </p>
                            </div>

                            {/* 武器（特典） */}
                            <div className="rounded-lg border-2 border-yellow-300 bg-yellow-50 p-4">
                              <div className="flex items-start gap-2">
                                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                                <div>
                                  <p className="mb-1 text-xs font-bold text-yellow-800">
                                    🎁 手に入る武器：
                                  </p>
                                  <p className="text-sm font-semibold leading-relaxed text-yellow-900">
                                    {month.weapon}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* 修了証書セクション */}
        <div className="mt-16 animate-fade-up md:mt-20">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200/50" padding="lg">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* 画像 */}
              <div className="flex justify-center">
                <ImageWithFallback
                  src="/kigyo-kanshu-shuryosho.webp"
                  alt="起業塾修了証書"
                  className="h-auto w-full max-w-md rounded-lg shadow-lg"
                  fallbackText="修了証書"
                  priority={false}
                />
              </div>

              {/* 説明文 */}
              <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Award className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-2xl font-black text-brand-dark md:text-3xl">
                    修了証書を発行
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-brand-dark md:text-xl">
                  プログラムを修了された方には、<span className="font-black text-emerald-600">起業塾修了証書</span>を発行いたします。
                </p>
                <p className="text-base leading-relaxed text-brand-muted md:text-lg">
                  修了したことを証明する証書として、お手元に残しておくことができます。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ProgramHighlights;

