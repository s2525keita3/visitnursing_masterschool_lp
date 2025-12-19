import { heroContent } from "../../content/hero";

/**
 * Heroセクションコンポーネント（クジラスナイパー風デザイン - ホワイト版）
 * 背景を白に変更し、清潔感と視認性を向上
 */
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 pb-16 text-center text-brand-dark md:pt-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* サブキャッチ：権威性の提示 */}
        <div className="animate-fade-up">
          <p className="text-lg font-black tracking-tighter text-brand-orange sm:text-2xl md:text-3xl">
            <span className="text-brand-dark">直営5拠点・年商5億・コンサル50社超の</span> 現役経営者が教える
          </p>
        </div>

        {/* メインキャッチ：数字と結果の提示 */}
        <div className="mt-4 animate-fade-up md:mt-6" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl font-black leading-[1.2] tracking-tighter text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-brand-orange">【勝率94.1%】</span>
            <br className="md:hidden" />
            訪問看護「黒字化」の全戦略
          </h1>
        </div>

        {/* 枠線付きテキスト：実績数値をシンプルに集約 */}
        <div className="mt-10 animate-fade-up md:mt-14" style={{ animationDelay: "0.2s" }}>
          <div className="relative inline-block rounded-sm border-2 border-brand-orange bg-brand-orange/5 px-6 py-4 shadow-[inset_0_0_20px_rgba(255,107,0,0.05)] sm:px-12 sm:py-6">
            <div className="absolute -top-6 left-1/2 h-8 w-px -translate-x-1/2 rotate-45 bg-brand-orange"></div>
            <div className="flex flex-col items-center justify-center gap-4 divide-y divide-brand-orange/20 sm:flex-row sm:gap-8 sm:divide-y-0 sm:divide-x">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-brand-orange md:text-4xl">勝率94.1%</span>
                <span className="text-[10px] font-bold text-brand-dark md:text-xs">黒字化達成率</span>
              </div>
              <div className="flex flex-col items-center pt-4 sm:pt-0 sm:pl-8">
                <span className="text-2xl font-black text-brand-orange md:text-4xl">50社以上</span>
                <span className="text-[10px] font-bold text-brand-dark md:text-xs">導入実績</span>
              </div>
              <div className="flex flex-col items-center pt-4 sm:pt-0 sm:pl-8">
                <span className="text-2xl font-black text-brand-orange md:text-4xl">11万人超</span>
                <span className="text-[10px] font-bold text-brand-dark md:text-xs">SNSフォロワー</span>
              </div>
            </div>
          </div>
        </div>

        {/* ボックス型タイトル：コントラストを最大化（影と文字色を調整） */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-up sm:gap-4 md:mt-14" style={{ animationDelay: "0.3s" }}>
          <div className="bg-brand-orange px-4 py-6 text-5xl font-black text-white shadow-[0_8px_0_#CC5000] ring-4 ring-brand-orange sm:px-8 sm:py-10 sm:text-7xl md:text-8xl lg:text-[110px]">
            訪問看護
          </div>
          <div className="bg-brand-orange px-4 py-6 text-5xl font-black text-white shadow-[0_8px_0_#CC5000] ring-4 ring-brand-orange sm:px-8 sm:py-10 sm:text-7xl md:text-8xl lg:text-[110px]">
            黒字化
          </div>
        </div>

        {/* フッターテキスト：実績とアクション */}
        <div className="mt-10 animate-fade-up md:mt-14" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl font-black tracking-widest text-brand-orange sm:text-3xl md:text-4xl lg:text-5xl">
            50社超を導き、94.1%を黒字化させた『勝てる戦略』を無料公開中
          </p>
        </div>

        {/* 下向き矢印（オレンジに変更 - 縦幅をコンパクトに） */}
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
