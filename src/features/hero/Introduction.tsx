import { memo } from "react";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { heroContent } from "../../content/hero";

/**
 * 導入・プロフィールセクション
 * 改善：スマホでの不自然な改行を防止（inline-blockによるフレーズ保持）
 */
const Introduction = memo(() => {
  return (
    <section className="bg-white pb-20 text-brand-dark">
      <div className="mx-auto max-w-6xl px-4">
        {/* 1. 上部の実績ボックス */}
        <div className="flex flex-col gap-3 pt-4 pb-10 md:pt-8 md:pb-16">
          <div className="border-2 border-brand-orange bg-brand-orange/5 py-4 text-center">
            <p className="text-lg font-black tracking-tight text-brand-orange md:text-2xl">
              <span className="inline-block">【実録】直営5拠点・年商5億・</span>
              <span className="inline-block">コンサル実績50社以上の</span>
              <span className="inline-block">圧倒的経営ノウハウ</span>
            </p>
          </div>
          <div className="border-2 border-brand-orange bg-white py-4 text-center px-2">
            <p className="text-lg font-black tracking-tight text-brand-dark md:text-2xl">
              <span className="inline-block">【全国50社以上】が導入。</span>
              <span className="inline-block">勝率94.1%を叩き出す</span>
              <span className="inline-block">「黒字化」の絶対的ノウハウ</span>
            </p>
          </div>
        </div>

        {/* 2. プロフィール部分 */}
        <div className="relative mt-6 flex flex-row items-stretch justify-between gap-2 md:mt-10 md:gap-8">
          
          <div className="relative z-20 w-[60%] shrink-0 space-y-4 md:w-1/2 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <p className="inline-block bg-brand-orange px-1.5 py-0.5 text-[10px] font-black text-white md:px-2 md:text-sm">
                <span className="inline-block">直営5拠点を運営する</span>
                <span className="inline-block">現役の経営実務家</span>
              </p>
              <h2 className="text-lg font-black text-brand-dark sm:text-2xl md:text-5xl leading-tight">
                <span className="inline-block">株式会社ジョン代表</span>
                <br className="md:hidden" />
                <span className="inline-block md:mt-2">渋谷慶太</span>
              </h2>
            </div>

            <p className="text-sm font-black italic leading-tight text-[#E53E3E] sm:text-xl md:text-4xl">
              <span className="inline-block">「机上の空論」は一切なし。</span>
              <br />
              <span className="inline-block">現場で実証済みの</span>
              <span className="inline-block">「勝ち筋」だけを伝授</span>
            </p>

            <div className="flex flex-col gap-2 pt-2 md:gap-4 md:pt-6">
              {[
                { 
                  title: "勝率94.1%", 
                  label: "の実績", 
                  subtitle: "黒字化達成率" 
                },
                { 
                  title: "提携50社+", 
                  label: "の網羅性", 
                  subtitle: "全国の成功ケース" 
                },
                { 
                  title: "11万人+", 
                  label: "の発信力", 
                  subtitle: "SNSフォロワー" 
                },
              ].map((card) => (
                <div key={card.title} className="rounded-lg border border-brand-orange/10 bg-brand-orange/[0.03] p-2 shadow-md md:rounded-xl md:p-5">
                  <div className="flex items-baseline gap-0.5 md:gap-1">
                    <span className="text-base font-black tracking-tighter text-brand-orange sm:text-xl md:text-5xl">
                      {card.title}
                    </span>
                    <span className="text-[8px] font-black text-brand-orange md:text-lg">
                      {card.label}
                    </span>
                  </div>
                  <p className="text-[7px] font-black text-brand-muted md:text-sm">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[40%] shrink-0 md:w-1/2">
            <ImageWithFallback
              src={heroContent.portraitImage}
              alt="じょん講師"
              className="h-full w-full object-contain object-bottom"
              fallbackText="講師写真"
            />
          </div>
        </div>

        {/* 3. 下部の4つの詳細ボックス */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-24">
          {[
            {
              title: "【財務】銀行が唸る事業計画書",
              desc: "自己資金が少なくても、数千万単位の融資を100%着金させた『門外不出の計画書』を譲渡。資金繰りの不安をゼロにします。",
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
