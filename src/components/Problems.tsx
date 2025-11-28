import { AlertTriangle, TrendingDown } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const data = [
  {
    title: "倒産件数が過去最多",
    stat: "+176%",
    description: "2024年は小規模訪問看護の倒産が前年比176%増。資金繰りとKPI管理が追いついていません。",
  },
  {
    title: "平均利益率わずか5.9%",
    stat: "5.9%",
    description: "報酬改定と人件費高騰のダブルパンチ。粗利を確保できる価格設定と稼働率設計が不可欠です。",
  },
  {
    title: "準備不足＝即、致命傷",
    stat: "2ヶ月",
    description: "資金ショートまで残された猶予は平均2ヶ月。準備不足のまま開業すると即撤退になります。",
  },
];

const Problems = () => (
  <Section tone="muted">
    <div className="text-center space-y-6">
      <Pill icon={AlertTriangle}>準備不足＝死</Pill>
      <h2 className="text-4xl font-serif text-brand-dark">業界の現実を直視できていますか？</h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        倒産データ・利益率・採用難。市場の「赤信号」を可視化し、対策すべき優先順位を明らかにします。
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.title} className="rounded-2xl bg-white p-8 border border-brand-dark/10 shadow-card-soft space-y-4">
          <div className="flex items-center gap-3">
            <TrendingDown className="w-6 h-6 text-brand-dark" />
            <span className="text-xs font-semibold tracking-wide text-brand-muted">MARKET DATA</span>
          </div>
          <p className="text-5xl font-serif text-brand-dark">{item.stat}</p>
          <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
          <p className="text-brand-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Problems;

