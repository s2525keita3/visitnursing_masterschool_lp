import Section from "../../shared/ui/Section";
import Pill from "../../shared/ui/Pill";
import CTAButton from "../../shared/ui/CTAButton";
import { Sparkles } from "lucide-react";

const benefits = [
  {
    image: "/benefit-1.jpg",
    title: "「感覚」ではなく「数字」で判断できる経営脳への転換",
    description:
      "市場調査と収支シミュレーションを使い、「なんとなく不安」という曖昧な状態から脱却。勝てる根拠を持って開業・運営できるようになります。",
  },
  {
    image: "/benefit-2.jpg",
    title: "銀行が納得する「融資獲得」と「資金繰り」の安全性",
    description:
      "金融機関が最も重視するポイントを押さえた事業計画を自ら説明でき、開業資金と運転資金の不安を根本から解消します。",
  },
  {
    image: "/benefit-3.jpg",
    title: "経営者が現場にいなくても回る「属人化しない仕組み」",
    description:
      "カリスマ所長に頼らず、標準化されたマニュアルと業務フローで誰が運営しても同じ品質のケアを提供できる組織を構築します。",
  },
  {
    image: "/benefit-4.jpg",
    title: "ミスマッチを防ぎ、定着率を高める「採用戦略」",
    description:
      "理念と条件に合った人材だけが集まるフィルターを設計し、早期離職によるコストとストレスを最小化します。",
  },
  {
    image: "/benefit-5.jpg",
    title: "試行錯誤の時間をゼロにする「最短ルートの開業準備」",
    description:
      "指定申請や備品選定など膨大なタスクの正解ルートをテンプレート化。無駄な調査時間を削減し、戦略立案に集中できます。",
  },
];

const studentResults = [
  {
    name: "北山 様",
    location: "和歌山市／開業8ヶ月目",
    headline: "融資2,000万円超を獲得！開業3ヶ月で単月黒字化",
    videoPoster: "/kitayama-thumbnail.png",
    videoUrl: "https://youtu.be/ciZIPSAzg6Y",
    before:
      "開業1年前は、何を具体的に準備すべきか分からず漠然とした不安だけが残り、「やる気」はあっても経営の進め方が描けなかった。",
    after: [
      "事業計画書の精度を高め、想定の倍となる2,000万円以上の融資を実行。",
      "開業2〜3ヶ月で訪問200〜300件を達成し、損益分岐点を突破。",
      "開業8ヶ月で月間訪問500件超、毎月10件の新規依頼と採用応募を獲得中。",
    ],
    testimonial:
      "「何も知らなかったらお金を借りるのが怖かったはず。教わった通りに準備しただけで2,000万円以上引けました。採用も最初のルール設計のおかげで反応が全然違います。」",
  },
  {
    name: "高橋 様",
    location: "神戸市灘区／開業4年目",
    headline: "訪看未経験＆夜勤明けでも月間1,600件の“モンスター級”拠点へ",
    videoPoster: "/takahashi-thumbnail.png",
    videoUrl: "https://youtu.be/P6UeyhoTKgM",
    before:
      "訪問看護の経験ゼロ。制度・レセプト・会社設立も分からないまま、開業1週間前まで病院でフルタイム夜勤をしており準備時間がほぼなかった。",
    after: [
      "マニュアルとテンプレートをフル活用し、最短工数で開業準備を完遂。",
      "スタッフ19名（看護師11・療法士5・ケアマネ2）、利用者約260名へ拡大。",
      "月間訪問1,500〜1,600件の大規模ステーションに成長。",
    ],
    testimonial:
      "「制度も何も分からない素人でしたが、マニュアル共有がめちゃくちゃ助かりました。働きながらでもテンプレートのおかげで迷わず準備できました。」",
  },
  {
    name: "中村 様",
    location: "東京都台東区／開業3期目",
    headline: "激戦区・東京でスタッフ約30名へ。経営者の孤独を乗り越え急拡大",
    videoPoster: "/nakamura-thumbnail.png",
    videoUrl: "https://youtu.be/-3gkNUKq5WM",
    before:
      "プレイヤーから経営者への転換期に、何が不安かも分からないほどの重圧と“経営者の孤独”を抱え、夜も眠れない日々が続いていた。",
    after: [
      "看護師・療法士・ケアマネ等でスタッフ約27名、3月には30名超を見込む組織へ。",
      "月間訪問1,100〜1,200件を維持しつつ安定経営を実現。",
      "資金調達から営業戦略まで伴走支援を受け、激戦区でも確固たる地位を確立。",
    ],
    testimonial:
      "「経営者は本当に孤独だと感じましたが、不安を整理してもらい心の支えにもなりました。資金繰りから営業まで細かく学べたおかげでここまで組織を大きくできました。」",
  },
];

const Benefits = () => (
  <Section>
    <div className="text-center space-y-6 animate-fade-up">
      <Pill icon={Sparkles} variant="gold">
        じょんの起業塾
      </Pill>
      <h2 className="text-4xl font-sans font-bold leading-tight tracking-tight">
        <span className="text-brand-dark">論理・データ・再現性で導く</span>
        <span className="text-brand-orange">5つのベネフィット</span>
      </h2>
      <p className="text-brand-muted max-w-3xl mx-auto">
        LPやスライドの「選ばれる理由」としてそのまま使える、受講後の具体的な変化です。
      </p>
    </div>
    <div className="grid md:grid-cols-5 gap-6 mt-12">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center space-y-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* 画像 */}
          <div className="w-full aspect-square rounded-3xl overflow-hidden border border-brand-dark/5 bg-white shadow-card hover-lift">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // 画像が存在しない場合はプレースホルダーを表示
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">画像を追加</div>';
                }
              }}
            />
          </div>
          {/* テキスト説明 */}
          <div className="text-center space-y-2">
            <h3 className="text-lg md:text-xl font-sans font-bold text-brand-dark">
              {benefit.title}
            </h3>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    {/* バナー & CTA */}
    <div className="mt-12 space-y-6">
      <a
        href="#contact"
        className="block rounded-3xl overflow-hidden border border-brand-dark/10 shadow-card hover-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40"
      >
        <img
          src="/kigyo-shindan-present.png"
          alt="無料セミナー申し込みバナー"
          className="w-full h-full object-cover"
        />
      </a>
      <div className="flex justify-center">
        <CTAButton
          href="#contact"
          size="large"
          className="w-full max-w-md animate-shake-slow"
        >
          無料セミナーに申し込む
        </CTAButton>
      </div>
    </div>
    {/* 受講生の成果 */}
    <div className="mt-16 space-y-10">
      <div className="text-center space-y-4">
        <Pill icon={Sparkles} variant="gold">
          受講生の成果
        </Pill>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
          データと仕組みで成果を出した3つのケース
        </h3>
        <p className="text-brand-muted max-w-3xl mx-auto">
          実際の受講生インタビュー（動画）とともに、経営指標がどのように変わったのか可視化しています。
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {studentResults.map((student, index) => (
          <div
            key={student.name}
            className="rounded-3xl border border-brand-dark/10 bg-white shadow-card p-6 space-y-4 animate-fade-up hover-lift"
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <a
              href={student.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40 rounded-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden border border-brand-dark/10 bg-black">
                <div className="w-full aspect-video flex items-center justify-center">
                  <img
                    src={student.videoPoster}
                    alt={`${student.name} の動画サムネイル`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 bg-white/90 text-brand-orange rounded-full flex items-center justify-center text-2xl shadow-card">
                    ▶
                  </span>
                </div>
              </div>
            </a>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-brand-orange">{student.name}</p>
                <p className="text-xs uppercase tracking-wide text-brand-muted">
                  {student.location}
                </p>
              </div>
              <p className="text-xl font-bold text-brand-dark leading-snug">
                {student.headline}
              </p>
              <div className="rounded-2xl bg-brand-dark/5 p-4 border border-brand-dark/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange mb-1">
                  Before
                </p>
                <p className="text-sm text-brand-dark leading-relaxed">{student.before}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange mb-2">
                  After
                </p>
                <ul className="space-y-2">
                  {student.after.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-brand-dark leading-relaxed">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-brand-dark/80 italic">
                {student.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Benefits;


