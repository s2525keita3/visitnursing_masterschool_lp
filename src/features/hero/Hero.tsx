import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント（ホワイト版）
 * 改善：スマホでの不自然な改行を防止（inline-blockによるフレーズ保持）
 */
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 pb-4 text-center text-brand-dark md:pt-20 md:pb-8">
      <div className="mx-auto max-w-5xl px-4">
        {/* サブキャッチ */}
        <div className="animate-fade-up">
          <p className="text-lg font-black tracking-tighter text-brand-orange sm:text-2xl md:text-3xl">
            <span className="inline-block text-brand-dark">直営5拠点・年商5億・</span>
            <span className="inline-block text-brand-dark">コンサル50社超の</span>
            <br className="sm:hidden" />
            <span className="inline-block">現役経営者が教える</span>
          </p>
        </div>

        {/* メインキャッチ */}
        <div className="mt-4 animate-fade-up md:mt-6" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl font-black leading-[1.2] tracking-tighter text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block text-brand-orange">【勝率94.1%】</span>
            <br className="md:hidden" />
            <span className="inline-block">訪問看護</span>
            <span className="inline-block">「黒字化」の全戦略</span>
          </h1>
        </div>

        {/* 実績ボックス */}
        <div className="mt-10 animate-fade-up md:mt-14" style={{ animationDelay: "0.2s" }}>
          <div className="relative inline-block rounded-sm border-2 border-brand-orange bg-brand-orange/5 px-2 py-4 shadow-[inset_0_0_20px_rgba(255,107,0,0.05)] sm:px-12 sm:py-6">
            <div className="absolute -top-6 left-1/2 h-8 w-px -translate-x-1/2 rotate-45 bg-brand-orange"></div>
            <div className="flex flex-row items-center justify-center gap-2 divide-x divide-brand-orange/20 sm:gap-8">
              <div className="flex flex-col items-center px-2 sm:px-0">
                <span className="inline-block text-lg font-black text-brand-orange sm:text-2xl md:text-4xl">勝率94.1%</span>
                <span className="inline-block text-[8px] font-bold text-brand-dark sm:text-[10px] md:text-xs whitespace-nowrap">黒字化達成率</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-0 sm:pl-8">
                <span className="inline-block text-lg font-black text-brand-orange sm:text-2xl md:text-4xl">50社以上</span>
                <span className="inline-block text-[8px] font-bold text-brand-dark sm:text-[10px] md:text-xs whitespace-nowrap">導入実績</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-0 sm:pl-8">
                <span className="inline-block text-lg font-black text-brand-orange sm:text-2xl md:text-4xl">11万人超</span>
                <span className="inline-block text-[8px] font-bold text-brand-dark sm:text-[10px] md:text-xs whitespace-nowrap">SNSフォロワー</span>
              </div>
            </div>
          </div>
        </div>

        {/* 巨大タイトル */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-up sm:gap-4 md:mt-14" style={{ animationDelay: "0.3s" }}>
          <div className="bg-brand-orange px-4 py-6 text-5xl font-black text-white shadow-[0_8px_0_#CC5000] ring-4 ring-brand-orange sm:px-8 sm:py-10 sm:text-7xl md:text-8xl lg:text-[110px]">
            訪問看護
          </div>
          <div className="bg-brand-orange px-4 py-6 text-5xl font-black text-white shadow-[0_8px_0_#CC5000] ring-4 ring-brand-orange sm:px-8 sm:py-10 sm:text-7xl md:text-8xl lg:text-[110px]">
            黒字化
          </div>
        </div>

        {/* フッターテキスト */}
        <div className="mt-10 animate-fade-up md:mt-14" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl font-black tracking-widest text-brand-orange sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="inline-block">無料面談で、</span>
            <span className="inline-block">その『勝ち筋』を</span>
            <br className="md:hidden" />
            <span className="inline-block">惜しみなく伝えます</span>
          </p>
        </div>

        {/* 矢印 */}
        <div className="mt-6 flex flex-col items-center gap-0.5 opacity-70 animate-fade-up md:mt-10" style={{ animationDelay: "0.5s" }}>
          <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-brand-orange animate-bounce sm:border-l-[15px] sm:border-r-[15px] sm:border-t-[12px]" style={{ animationDelay: "0s" }}></div>
          <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-brand-orange animate-bounce sm:border-l-[15px] sm:border-r-[15px] sm:border-t-[12px]" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-brand-orange animate-bounce sm:border-l-[15px] sm:border-r-[15px] sm:border-t-[12px]" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
