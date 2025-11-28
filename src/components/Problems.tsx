import { AlertTriangle } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const data = [
  {
    title: "薄利構造とコスト増の二重苦",
    stat: "利益率悪化トレンド継続中",
    description: "訪問単価は上昇しているにも関わらず、移動効率の悪化や物価高騰により利益率は低下。ひとつの経営判断ミスが致命傷になる「薄氷の経営」が実態です。",
  },
  {
    title: "小規模事業所の「10人の壁」",
    stat: "倒産の94%が従業員10人未満※2",
    description: "「小規模なら安心」は過去の話。倒産した事業所の9割以上が小規模運営です。人材の定着と規模拡大に失敗したステーションから市場を退出しています。",
  },
  {
    title: "「黒字倒産」を引き起こす採用難",
    stat: "倒産原因の8割が「販売不振」※2",
    description: "依頼はあるのに断らざるを得ない「機会損失」が常態化。売上が作れない根本原因は、営業力不足ではなく「看護師が採用できないこと」にあります。",
  },
];

const Problems = () => (
  <Section tone="muted">
    <div className="text-center space-y-6 animate-fade-up">
      <Pill icon={AlertTriangle}>業界の厳しい現実</Pill>
      <h2 className="text-4xl font-serif text-brand-dark">
        <span className="text-brand-orange">「倒産件数、過去最多」</span>の衝撃。<br />
        なぜ、訪問看護ステーションの淘汰が止まらないのか?
      </h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        2024年報酬改定・物価高騰が直撃<br />
        小規模事業者を襲う「構造的経営難」の正体
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-8 border border-brand-dark/10 shadow-card hover-lift space-y-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
          <p className="text-brand-muted leading-relaxed">{item.description}</p>
          <div className="mt-4 pt-4 border-t border-brand-dark/10">
            <p className="text-sm font-semibold text-brand-dark">{item.stat}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Problems;


