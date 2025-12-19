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
                訪問看護ステーション経営の第一人者
              </p>
              <h2 className="text-3xl font-black text-brand-dark md:text-5xl">
                じょん <span className="text-xl md:text-2xl font-normal text-brand-muted">JOHN</span>
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
                  label: "の導入実績", 
                  subtitle: "全国のステーションへノウハウを供与" 
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

        {/* 3. 下部の4つの詳細ボックス（うっすら色付け） */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-24">
          {[
            {
              title: "【融資成功率100%】の実績",
              desc: "創業以来、私たちがサポートした全案件で融資を勝ち取った事業計画書の「全貌」を公開。",
            },
            {
              title: "【平均3ヶ月】での黒字化",
              desc: "1年かかるのが当たり前の世界で、なぜコンサル生はたった3ヶ月で黒字化するのか？その仕組みを伝授。",
            },
            {
              title: "【300名超】のコミュニティ",
              desc: "全国の志高い経営者たちが集う。業界最大のプラットフォームで「次の一手」を共有。",
            },
            {
              title: "【即戦力】50種類のツール",
              desc: "事業計画書、営業資料、契約書、マニュアル。今すぐ現場で使えるツールをすべて譲渡。",
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
