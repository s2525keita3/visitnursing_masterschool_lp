import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const steps = [
  { title: "融資増額サポート", amount: "+100万円", detail: "面談同席と資料設計で、平均100万円以上の増額に成功。" },
  { title: "採用コスト削減", amount: "+200万円", detail: "人材紹介手数料・求人広告費を大幅削減する採用導線を構築。" },
  { title: "営業利益の最大化", amount: "+214.6万円", detail: "稼働率/単価/訪問数のKPIを連動させ、営業利益を積み上げ。" },
];

const RoiSection = () => (
  <Section tone="surface">
    <div className="text-center space-y-6 animate-fade-up">
      <Pill icon={ArrowUpRight} variant="gold">
        ROI & Cost Performance
      </Pill>
      <h2 className="text-4xl font-serif text-brand-dark">88万円の投資で得られるリターン</h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        現金流入を3ステップで設計し、12ヶ月後には受講料の5.8倍の投資回収を現実的に描きます。
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-2xl p-8 border border-brand-dark/10 bg-white shadow-card hover-lift space-y-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-sm font-semibold text-brand-muted tracking-wide">STEP {index + 1}</p>
          <h3 className="text-2xl font-serif text-brand-dark">{step.title}</h3>
          <p className="text-3xl font-serif text-brand-orange">{step.amount}</p>
          <p className="text-brand-muted leading-relaxed">{step.detail}</p>
        </div>
      ))}
    </div>
    <div className="rounded-3xl border border-brand-dark/15 bg-white shadow-card hover-lift p-10 text-center space-y-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <p className="text-sm font-semibold text-brand-muted tracking-[0.3em]">RESULT</p>
      <p className="text-5xl font-serif text-brand-dark">5.8x</p>
      <p className="text-brand-muted">
        受講料 <span className="font-semibold text-brand-dark">88万円</span> に対して
        <span className="font-semibold text-brand-dark"> 514.6万円 </span>
        の投資回収シミュレーション（12ヶ月後）
      </p>
    </div>
  </Section>
);

export default RoiSection;


