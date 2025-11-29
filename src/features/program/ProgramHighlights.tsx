import Section from "../../shared/ui/Section";
import { Card } from "../../shared/ui/Card";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";
import {
  programRoadmap,
  type ProgramPhase,
} from "../../content/program";
import { Sparkles, Award } from "lucide-react";

/**
 * プログラム要点セクションコンポーネント
 * CRO最適化：要点を明確に提示し、視覚的インパクトで理解を促進
 */
const ProgramHighlights = () => {
  return (
    <Section id="program" tone="surface">
      <div className="mx-auto max-w-7xl">
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
                  src="/kigyo-kanshu-shuryosho.png"
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

