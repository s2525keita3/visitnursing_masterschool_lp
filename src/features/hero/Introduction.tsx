import { memo } from "react";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { heroContent } from "../../content/hero";

/**
 * 導入・プロフィールセクション（ホワイト版）
 * 背景を白に変更し、清潔感と信頼感を強調
 */
const Introduction = memo(() => {
  return (
    <section className="bg-white pb-20 text-brand-dark">
      <div className="mx-auto max-w-6xl px-4">
        {/* 1. 上部の実績ボックス */}
        <div className="flex flex-col gap-3 py-10 md:py-16">
          <div className="border-2 border-brand-orange bg-brand-orange/5 py-4 text-center">
            <p className="text-lg font-black tracking-tight text-brand-orange md:text-2xl">
              【実録】直営5拠点・年商5億・コンサル実績50社以上の圧倒的経営ノウハウ
            </p>
          </div>
          <div className="border-2 border-brand-orange bg-white py-4 text-center">
            <p className="text-lg font-black tracking-tight text-brand-dark md:text-2xl">
              【全国50社以上】が導入。勝率94.1%を叩き出す「黒字化」の絶対的ノウハウ
            </p>
          </div>
        </div>

        {/* 2. プロフィール部分 */}
        <div className="relative mt-10 grid gap-8 md:grid-cols-2">
          {/* 左側のテキスト */}
          <div className="relative z-20 space-y-6">
            <div className="space-y-2">
              <p className="inline-block bg-brand-orange px-2 py-0.5 text-sm font-black text-white">
                直営5拠点を運営する現役の経営実務家
              </p>
              <h2 className="text-3xl font-black text-brand-dark md:text-5xl">
                株式会社ジョン代表　渋谷慶太
              </h2>
            </div>

            <p className="text-2xl font-black italic leading-tight text-[#E53E3E] md:text-4xl">
              「机上の空論」は一切なし。
              <br />
              現場で実証済みの「勝ち筋」だけを伝授
            </p>

            {/* 左側に並ぶ3つの実績カード（うっすら色付け） */}
            <div className="flex flex-col gap-4 pt-6">
              {[
                { 
                  title: "勝率94.1%", 
                  label: "の驚異的実績", 
                  subtitle: "個別コンサル生の「黒字化達成率」" 
                },
                { 
                  title: "累計50社以上", 
                  label: "の圧倒的提携数", 
                  subtitle: "全国の最新事例・成功ケースを網羅" 
                },
                { 
                  title: "11万人超", 
                  label: "のSNSフォロワー", 
                  subtitle: "業界最大級の発信力と影響力" 
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-brand-orange/10 bg-brand-orange/[0.03] p-5 shadow-lg shadow-brand-orange/5 transition-transform hover:-translate-y-1 hover:bg-brand-orange/[0.05]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tighter text-brand-orange md:text-5xl">
                      {card.title}
                    </span>
                    <span className="text-sm font-black text-brand-orange md:text-lg">
                      {card.label}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-black text-brand-muted md:text-sm">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 右側の人物画像 */}
          <div className="relative h-[400px] w-full md:h-full">
            <ImageWithFallback
              src={heroContent.portraitImage}
              alt="じょん講師"
              className="h-full w-full object-contain object-bottom"
              fallbackText="講師写真"
            />
          </div>
        </div>

        {/* 3. 下部の4つの詳細ボックス（権威性とメリットを最大化） */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-24">
          {[
            {
              title: "【財務】銀行が唸る事業計画書",
              desc: "自己資金が少なくとも、数千万単位の融資を100%着金させた『門外不出の計画書』を譲渡。資金繰りの不安をゼロにします。",
            },
            {
              title: "【集客】広告費0円の自動集客",
              desc: "ケアマネジャーが『あなたに預けたい』と懇願する紹介営業の仕組み。開業初月から待機者が出る集客ノウハウを伝授します。",
            },
            {
              title: "【採用】看護師を惹きつける文化",
              desc: "「人が採れない」業界で、なぜ自社だけに応募が殺到するのか？離職率を極限まで抑え、最強のチームを作るマネジメント術。",
            },
            {
              title: "【実務】5拠点5億の全テンプレート",
              desc: "雇用契約、管理者教育、経営数字の管理。私が5拠点を5億円まで成長させた際に使用した『全実務ツール』をそのまま差し上げます。",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-sm border-2 border-brand-orange/10 bg-brand-orange/[0.02] p-6 text-center shadow-sm">
              <h3 className="mb-4 text-xl font-black text-brand-orange md:text-2xl">{item.title}</h3>
              <p className="text-base font-bold leading-relaxed text-brand-dark md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Introduction.displayName = "Introduction";

export default Introduction;
