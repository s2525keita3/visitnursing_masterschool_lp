import { ShieldAlert, TrendingUp, TrendingDown } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const chartData = [
  { month: "0ヶ月", success: 0, industry: 0 },
  { month: "3ヶ月", success: 45, industry: 20 },
  { month: "6ヶ月", success: 78, industry: 32 },
  { month: "9ヶ月", success: 88, industry: 41 },
  { month: "12ヶ月", success: 90, industry: 47 },
];

const failures = [
  {
    title: "融資否認 2%",
    description: "資料の作り込み不足・面談での根拠提示ができなかったケースをすべて公開し、改善策を共有。",
  },
  {
    title: "黒字化未達成 10%",
    description: "市場選定ミス、採用遅延による稼働率ダウンなど、失敗パターン別のリカバリープランを提示。",
  },
];

const Achievements = () => (
  <Section tone="muted">
    <div className="text-center space-y-6">
      <Pill icon={ShieldAlert}>正直な実績開示</Pill>
      <h2 className="text-4xl font-serif text-brand-dark">成功も失敗もすべて公開します</h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        98%の融資承認率、90%の黒字化率に至るまでのプロセスと同じくらい、失敗データの共有を重視します。
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-3xl bg-white/90 border border-brand-dark/10 shadow-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-brand-dark" />
          <p className="text-sm font-semibold text-brand-muted tracking-wide">SUCCESS x REALITY</p>
        </div>
        <div className="space-y-4">
          {chartData.map((data) => (
            <div key={data.month} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-dark">{data.month}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-brand-muted">業界平均: {data.industry}%</span>
                  <span className="text-sm font-semibold text-brand-dark">当社実績: {data.success}%</span>
                </div>
              </div>
              <div className="relative h-4 bg-brand-light rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-brand-dark rounded-full transition-all duration-500"
                  style={{ width: `${data.success}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full bg-brand-muted/30 rounded-full transition-all duration-500"
                  style={{ width: `${data.industry}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-muted">
          実運用データ 50社分をもとにした平均曲線。業界平均とのギャップを常にモニタリングしています。
        </p>
      </div>
      <div className="rounded-3xl bg-brand-light/70 border border-brand-dark/10 shadow-card p-8 space-y-6">
        {failures.map((item) => (
          <div key={item.title} className="bg-white/95 rounded-2xl border border-brand-dark/5 p-6 shadow-card-subtle space-y-2">
            <div className="flex items-center gap-2 text-brand-dark">
              <TrendingDown className="w-5 h-5" />
              <p className="text-sm font-semibold tracking-wide">{item.title}</p>
            </div>
            <p className="text-brand-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Achievements;
