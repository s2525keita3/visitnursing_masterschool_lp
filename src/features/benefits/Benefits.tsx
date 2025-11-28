import { CheckCircle2 } from "lucide-react";
import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";

const benefits = [
  {
    title: "融資ストーリーメイク",
    description: "金融機関が評価する事業計画、面談ロープレ、返済シミュレーションを100%テンプレート化。",
  },
  {
    title: "人材オペレーション設計",
    description: "36ヶ月の採用ロードマップ、評価制度、研修動画で「疲弊しないチーム」を構築。",
  },
  {
    title: "地域密着マーケティング",
    description: "医療連携・SNS・紹介をハイブリッドで設計し、稼働率80%超えを狙う導線を構築。",
  },
  {
    title: "財務ダッシュボード",
    description: "キャッシュフロー・人件費率・MIX比率をリアルタイムで可視化。危険指数を常に監視。",
  },
  {
    title: "専門家ネットワーク",
    description: "税理士、社労士、行政書士、M&Aアドバイザーまで信頼できるパートナーを紹介。",
  },
];

const Benefits = () => (
  <Section>
    <div className="text-center space-y-6 animate-fade-up">
      <Pill icon={CheckCircle2} variant="gold">
        Baum Bloom Method
      </Pill>
      <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
        <span className="text-brand-dark">黒字化を逆算する</span>
        <span className="text-brand-orange">5つの伴走</span>
      </h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        財務・人材・マーケティングを同じタイムラインで管理し、「迷いゼロ」の状態で開業を迎えます。
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.title}
          className="rounded-3xl border border-brand-dark/5 bg-white shadow-card hover-lift p-8 space-y-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="text-2xl font-sans leading-tight">
            {benefit.title.includes("設計") || benefit.title.includes("ネットワーク") ? (
              <>
                <span className="text-brand-dark">{benefit.title.slice(0, -2)}</span>
                <span className="text-brand-orange">{benefit.title.slice(-2)}</span>
              </>
            ) : (
              <span className="text-brand-dark">{benefit.title}</span>
            )}
          </h3>
          <p className="text-brand-muted leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Benefits;


