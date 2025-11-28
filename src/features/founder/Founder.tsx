import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import CTAButton from "../../shared/ui/CTAButton";

const badges = [
  { label: "直営拠点", value: "5拠点" },
  { label: "年商規模", value: "5億円" },
  { label: "SNSフォロワー", value: "11万人" },
];

const programPhases = [
  {
    phase: "Phase 1",
    label: "【戦略・資金】勝てる事業設計",
    items: [
      "融資確定型 事業計画書の作成",
      "銀行員が納得するロジック構成とプレゼン手法",
      "損益分岐点（BEP）の算出と資金繰りシミュレーション",
      "エリアマーケティング選定",
      "競合分析と「勝てる立地」のデータ選定",
      "診療・介護報酬の基礎と収益構造の理解",
    ],
  },
  {
    phase: "Phase 2",
    label: "【環境・組織】盤石な基盤構築",
    items: [
      "指定申請・法人設立の実務",
      "最短で認可を取る申請書類と行政対応",
      "物件契約・備品選定のコスト最適化リスト",
      "リスクゼロの採用・労務設計",
      "トラブルを防ぐ就業規則・給与規定の策定",
      "欲しい人材だけを集める求人票と媒体選定",
    ],
  },
  {
    phase: "Phase 3",
    label: "【営業・集客】ロケットスタート戦略",
    items: [
      "再現性のある営業戦術",
      "ケアマネに刺さる営業トークスクリプト",
      "紹介が途切れない連携・報告の仕組み化",
      "Web・SNS集客の導線設計",
      "コストをかけず信頼を獲得するWebマーケティング",
    ],
  },
  {
    phase: "Phase 4",
    label: "【管理・経営】安定化への数値管理",
    items: [
      "経営ダッシュボードの構築",
      "ドンブリ勘定を脱却する予実管理とKPI設定",
      "管理者が育つ会議と教育のフレームワーク",
    ],
  },
];

const Founder = () => (
  <>
    <Section tone="surface">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <Pill>Founder's Message</Pill>
          <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
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
                className="rounded-3xl border border-brand-dark/5 bg-white p-6 text-center shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-2xl font-sans text-brand-dark">{badge.value}</p>
                <p className="text-xs tracking-wide text-brand-muted">{badge.label}</p>
              </div>
            ))}
          </div>
          <CTAButton href="#contact">創業者と直接面談する</CTAButton>
        </div>
        <div
          className="rounded-3xl bg-white border border-brand-dark/5 shadow-card p-6 md:p-8 space-y-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-dark/10">
            <img
              src="/koushi-jon-photo.png"
              alt="じょん講師の写真"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
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
        <div className="text-center space-y-4">
          <Pill>Program</Pill>
          <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
            <span className="text-brand-dark">迷いを消す「6ヶ月間の集中講義」</span>
            <br />
            <span className="text-brand-orange">開業から黒字化までの実践カリキュラム</span>
          </h2>
          <p className="text-brand-muted max-w-4xl mx-auto leading-relaxed">
            本講座では、開業に必要なタスクを「4つのフェーズ」に分解。
            すべての工程で、現場でそのまま使えるテンプレートとデータを提供し、机上の空論ではない実務を習得します。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programPhases.map((phase, index) => (
            <div
              key={phase.phase}
              className="rounded-3xl border border-brand-dark/10 bg-white p-6 space-y-4 shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-sm font-semibold tracking-[0.3em] text-brand-muted uppercase">
                  {phase.phase}
                </p>
                <p className="text-base font-bold text-brand-orange">{phase.label}</p>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-brand-dark text-sm md:text-base">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0" />
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

export default Founder;


