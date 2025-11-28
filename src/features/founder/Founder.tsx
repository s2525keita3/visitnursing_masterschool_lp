import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import CTAButton from "../../shared/ui/CTAButton";

const badges = [
  { label: "直営拠点", value: "5拠点" },
  { label: "年商規模", value: "5億円" },
  { label: "SNSフォロワー", value: "11万人" },
];

const Founder = () => (
  <Section tone="surface">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-up">
        <Pill>Founder's Message</Pill>
        <h2 className="text-4xl font-serif font-bold leading-tight tracking-tight">
          <span className="text-brand-dark">「机上の空論」ではなく、</span>
          <span className="text-brand-orange">現場の数字で語る</span>
        </h2>
        <p className="text-brand-muted leading-relaxed">
          私自身が5拠点を運営し、年商5億円を作っている「現役プレイヤー」です。コンサルタントではなく、事業家だからこそ
          語れる「解像度の高い施策」だけを提供します。
        </p>
        <div className="grid grid-cols-3 gap-4">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className="rounded-2xl border border-brand-dark/10 bg-white/90 p-4 text-center shadow-card-subtle hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-2xl font-serif text-brand-dark">{badge.value}</p>
              <p className="text-xs tracking-wide text-brand-muted">{badge.label}</p>
            </div>
          ))}
        </div>
        <CTAButton href="#contact">創業者と直接面談する</CTAButton>
      </div>
      <div className="rounded-3xl bg-white border border-brand-dark/10 shadow-card hover-lift p-10 space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <h3 className="text-2xl font-serif text-brand-dark">メッセージ</h3>
        <p className="text-brand-muted leading-relaxed">
          失敗事例をすべて公開し、再現性が証明されたノウハウしか扱いません。「開業後3ヶ月でキャッシュが尽きる」
          という悪夢をなくすために、財務・人材・集客を同時にマネジメントできる仕組みを提供します。
        </p>
        <p className="text-sm text-brand-muted">
          ※ 週あたり5名まで。面談では事業の前提条件をヒアリングし、リスクが高い場合はお断りすることもあります。
        </p>
      </div>
    </div>
  </Section>
);

export default Founder;


