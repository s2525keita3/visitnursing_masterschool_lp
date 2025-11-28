import { CheckCircle2 } from "lucide-react";

const problems = [
  {
    title: "売上の壁",
    description: "開業後、稼働率が安定せず、いつまでも収益が見通せない不安",
  },
  {
    title: "組織の拡大",
    description: "開業後、所長（自分）のマンパワー頼りで、事業拡大の絵が描けない",
  },
  {
    title: "経営の安定",
    description: "診療報酬改定のたびに揺らぐ、脆い経営基盤への不安を変えたい",
  },
  {
    title: "採用のミスマッチ",
    description: "開業後、高い紹介料を払っても、期待外れの人材ばかり来る",
  },
  {
    title: "離職の連鎖",
    description: "開業後、「人間関係」を理由に、育てた職員が辞めていく",
  },
  {
    title: "数値管理の欠如",
    description: "開業準備段階から「どんぶり勘定」を避け、数字で語れる経営をしたい",
  },
];

const Problems = () => (
  <div 
    className="relative w-full min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden"
    style={{
      backgroundImage: 'url("/Gemini_Generated_Image_xuxmirxuxmirxuxm.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* 背景オーバーレイ（テキスト視認性向上） */}
    <div className="absolute inset-0 bg-white/50 pointer-events-none" />
    
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* ターゲット層への呼びかけ */}
      <div className="text-center mb-4 md:mb-6 animate-fade-up">
        <p className="text-lg md:text-xl lg:text-2xl text-brand-orange font-bold mb-3 md:mb-4 drop-shadow-lg">
          経営・採用の「正解」が見えない訪問看護ステーション開業希望・準備中の方へ
        </p>
      </div>

      {/* 問題提起（フック） */}
      <div className="text-center mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight tracking-tight text-brand-dark mb-4 drop-shadow-lg">
          経営の停滞を変えよう
        </h2>
      </div>

      {/* メインコンテンツ：左側に問題リスト、右側は背景画像のイラスト部分 */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
        {/* 左側：問題リスト */}
        <div className="space-y-3 md:space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="flex items-start gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur-sm border border-brand-dark/10 shadow-card hover-lift"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <div className="flex-shrink-0 mt-0.5 md:mt-1">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-brand-orange flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-lg md:text-2xl font-bold text-brand-dark">{problem.title}</h3>
                <p className="text-sm md:text-base text-brand-dark leading-relaxed font-medium">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 右側：背景画像のイラスト部分が表示される（何も配置しない） */}
        <div className="hidden md:block" />
      </div>

      {/* 解決策（オファー） */}
      <div className="mt-8 md:mt-12 text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:pt-10 md:px-10 lg:pt-12 lg:px-12 border border-brand-dark/10 shadow-card max-w-5xl mx-auto space-y-3">
          <p className="text-lg md:text-xl lg:text-2xl text-brand-dark leading-relaxed font-semibold drop-shadow-sm">
            精神論や気合いは一切不要。
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-brand-orange drop-shadow-md">
            再現性のある「仕組み」と「データ」で実績を作る
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-brand-dark drop-shadow-md">
            これらのお悩みをすべて解決いたします！
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Problems;


