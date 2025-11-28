import Section from "../../shared/ui/Section";
import CTAButton from "../../shared/ui/CTAButton";

const seminarTopics = [
  {
    title: "■ 融資獲得率90%超の「事業計画」とは",
    description:
      "銀行員がどこを見ているか知っていますか？「熱意」ではなく「根拠」で納得させる、満額融資獲得のためのロジックと資料作成の極意を公開します。",
  },
  {
    title: "■ 採用コスト0円を実現する「採用戦略」",
    description:
      "紹介会社頼みの経営から卒業。高橋様（兵庫）の事例をもとに、ミスマッチを防ぎながら欲しい人材だけを惹きつける自社採用の仕組みを解説します。",
  },
  {
    title: "■ 成功事例から紐解く「再現性のある経営」",
    description:
      "未経験から8ヶ月で月間500件訪問を達成した北山様（和歌山）など、成功者に共通する数字管理と行動量をデータで可視化して共有します。",
  },
  {
    title: "■ 質疑応答・個別相談コーナー",
    description:
      "「エリア選定は？」「自己資金はいくら必要？」など、検索には載っていないリアルな疑問に、実績ベースでその場でお答えします。",
  },
];

const scheduleOptions = [
  { date: "X月X日（火）", time: "19:00 - 20:30" },
  { date: "X月X日（土）", time: "10:00 - 11:30" },
  { date: "X月X日（木）", time: "19:00 - 20:30" },
];

const Seminar = () => (
  <Section tone="surface">
    <div className="space-y-12">
      <div className="text-center space-y-4 animate-fade-up">
        <div className="inline-flex items-center justify-center rounded-full bg-brand-orange/10 px-6 py-2 text-brand-orange font-semibold">
          まずは無料セミナーで「経営の正解」を体感しませんか？
        </div>
        <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
          <span className="text-brand-dark">開業準備の「迷い」を「確信」に変える！</span>
          <br />
          <span className="text-brand-orange">訪問看護・起業の勝ち筋 公開セミナー</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        <div className="space-y-6 animate-fade-up">
          {seminarTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="text-lg font-bold text-brand-dark mb-2">{topic.title}</p>
              <p className="text-brand-muted leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl overflow-hidden border border-brand-dark/10 shadow-card">
            <img
              src="/koushi-jon-photo.png"
              alt="講師 じょん の写真"
              className="w-full h-full object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-sm font-semibold text-brand-dark">講師：じょん</p>
              <p className="text-xs text-brand-muted">訪問看護 起業塾 主宰／現役経営者</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 animate-fade-up">
        <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/80 p-6 space-y-3 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.4em] text-emerald-600">SPECIAL</p>
          <p className="text-2xl font-bold text-brand-dark">＼ 無料セミナー参加特典 ／</p>
          <p className="text-lg font-semibold text-emerald-700">
            そのまま銀行に提出できるレベル！
          </p>
          <p className="text-brand-dark">
            「融資対策・事業計画書テンプレート」をプレゼント！
          </p>
        </div>

        <div className="rounded-3xl border border-brand-dark/10 bg-white p-6 space-y-6 shadow-card">
          <div>
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest">
              オンラインセミナー（Zoom開催）
            </p>
            <div className="mt-3 space-y-3">
              {scheduleOptions.map((slot) => (
                <div
                  key={slot.date}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-brand-dark/10 px-4 py-3 bg-brand-dark/5 text-brand-dark"
                >
                  <span className="font-semibold">{slot.date}</span>
                  <span className="text-sm sm:text-base">{slot.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-brand-muted mt-3">
              ※日程が合わない方は個別日程の調整も可能です。
            </p>
          </div>
          <div className="space-y-2 text-brand-dark">
            <p className="font-semibold">参加方法：</p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Zoomを使用します（顔出し不要・耳だけ参加OK）。お申し込み後、視聴用URLをメールで送付します。
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 animate-fade-up">
        <p className="text-brand-muted text-sm">
          「まずはセミナーで情報収集だけ」でも歓迎です。強引な営業は一切ありません。
        </p>
        <div className="flex justify-center">
          <CTAButton href="#contact" size="large" className="w-full max-w-md animate-shake-slow">
            無料セミナーに申し込む
          </CTAButton>
        </div>
      </div>
    </div>
  </Section>
);

export default Seminar;


