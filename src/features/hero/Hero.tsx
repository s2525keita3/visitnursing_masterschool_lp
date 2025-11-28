import Section from "../../shared/ui/Section";

const Hero = () => {
  return (
    <Section tone="surface">
      <div className="relative min-h-screen flex items-center justify-center py-12 overflow-hidden">
        {/* 背景画像としてのイラスト要素 */}
        <div className="absolute inset-0 opacity-100 pointer-events-none">
          {/* 左側: プレゼンテーションシーン */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:block">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
              {/* 背景の抽象的な円 */}
              <circle cx="50" cy="100" r="60" fill="#FF6B00" opacity="0.15" />
              <circle cx="120" cy="200" r="40" fill="#FF8533" opacity="0.1" stroke="#FF6B00" strokeWidth="2" strokeOpacity="0.2" />
              
              {/* ボード/スクリーン */}
              <rect x="80" y="250" width="180" height="140" rx="12" fill="white" stroke="#FF6B00" strokeWidth="3" opacity="0.8" />
              
              {/* グラフ */}
              <g transform="translate(100, 270)">
                {/* 棒グラフ */}
                <rect x="10" y="60" width="12" height="30" fill="#FF6B00" opacity="0.6" />
                <rect x="28" y="50" width="12" height="40" fill="#FF6B00" opacity="0.6" />
                <rect x="46" y="40" width="12" height="50" fill="#FF6B00" opacity="0.6" />
                <rect x="64" y="30" width="12" height="60" fill="#FF6B00" opacity="0.6" />
                <rect x="82" y="20" width="12" height="70" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="16,60 34,50 52,40 70,30 88,20" fill="none" stroke="#FF6B00" strokeWidth="2.5" />
                {/* 円グラフの一部 */}
                <path d="M 120 20 A 15 15 0 0 1 135 5 L 120 20 Z" fill="#FF8533" opacity="0.5" />
                {/* チェックマークとX */}
                <circle cx="20" cy="100" r="4" fill="#22C55E" />
                <path d="M 18 100 L 20 102 L 24 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="35" cy="100" r="4" fill="#22C55E" />
                <path d="M 33 100 L 35 102 L 39 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="100" r="4" fill="#22C55E" />
                <path d="M 48 100 L 50 102 L 54 98" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="100" r="4" fill="#EF4444" />
                <path d="M 63 98 L 67 102 M 67 98 L 63 102" stroke="white" strokeWidth="1.5" />
                <circle cx="80" cy="100" r="4" fill="#EF4444" />
                <path d="M 78 98 L 82 102 M 82 98 L 78 102" stroke="white" strokeWidth="1.5" />
                <circle cx="95" cy="100" r="4" fill="#EF4444" />
                <path d="M 93 98 L 97 102 M 97 98 L 93 102" stroke="white" strokeWidth="1.5" />
                {/* 矢印パス */}
                <path d="M 110 110 Q 130 100 150 110" fill="none" stroke="#FF6B00" strokeWidth="2" />
              </g>
              
              {/* プレゼンター（簡略化） */}
              <rect x="200" y="420" width="30" height="80" rx="15" fill="#FF6B00" opacity="0.3" />
              <circle cx="215" cy="410" r="12" fill="#FF6B00" opacity="0.3" />
              
              {/* 同僚（左側） */}
              <rect x="100" y="440" width="25" height="70" rx="12" fill="#FF8533" opacity="0.25" />
              <circle cx="112" cy="430" r="10" fill="#FF8533" opacity="0.25" />
              <rect x="130" y="440" width="25" height="70" rx="12" fill="#FF6B00" opacity="0.3" />
              <circle cx="142" cy="430" r="10" fill="#FF6B00" opacity="0.3" />
              
              {/* ギアアイコン */}
              <g transform="translate(300, 150)">
                <circle cx="0" cy="0" r="25" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.2" />
                <circle cx="0" cy="0" r="8" fill="#FF8533" opacity="0.3" />
                <rect x="-2" y="-15" width="4" height="8" fill="#FF6B00" opacity="0.2" />
                <rect x="-2" y="7" width="4" height="8" fill="#FF6B00" opacity="0.2" />
                <rect x="-15" y="-2" width="8" height="4" fill="#FF6B00" opacity="0.2" />
                <rect x="7" y="-2" width="8" height="4" fill="#FF6B00" opacity="0.2" />
              </g>
            </svg>
          </div>

          {/* 右側: チームコラボレーションシーン */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:block">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
              {/* 背景の抽象的な円 */}
              <circle cx="350" cy="150" r="50" fill="#FF8533" opacity="0.15" />
              <circle cx="280" cy="250" r="35" fill="#FF6B00" opacity="0.1" />
              
              {/* 中央の大きなモニター */}
              <rect x="100" y="200" width="200" height="120" rx="12" fill="white" stroke="#FF6B00" strokeWidth="3" opacity="0.8" />
              
              {/* グラフとSUCCESS */}
              <g transform="translate(120, 220)">
                {/* 棒グラフ */}
                <rect x="10" y="50" width="14" height="40" fill="#FF6B00" opacity="0.6" />
                <rect x="30" y="45" width="14" height="45" fill="#FF6B00" opacity="0.6" />
                <rect x="50" y="40" width="14" height="50" fill="#FF6B00" opacity="0.6" />
                <rect x="70" y="35" width="14" height="55" fill="#FF6B00" opacity="0.6" />
                <rect x="90" y="30" width="14" height="60" fill="#FF6B00" opacity="0.6" />
                <rect x="110" y="25" width="14" height="65" fill="#FF6B00" opacity="0.6" />
                <rect x="130" y="20" width="14" height="70" fill="#FF6B00" opacity="0.6" />
                {/* トレンドライン */}
                <polyline points="17,50 37,45 57,40 77,35 97,30 117,25 137,20" fill="none" stroke="#FF6B00" strokeWidth="3" />
                {/* SUCCESSラベル */}
                <rect x="140" y="5" width="50" height="12" fill="#FF6B00" opacity="0.9" rx="3" />
                <text x="165" y="13" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">SUCCESS</text>
              </g>
              
              {/* 左右の小さなモニター */}
              <rect x="50" y="220" width="80" height="60" rx="8" fill="white" stroke="#FF8533" strokeWidth="2" opacity="0.7" />
              <rect x="270" y="220" width="80" height="60" rx="8" fill="white" stroke="#FF8533" strokeWidth="2" opacity="0.7" />
              
              {/* 小さなグラフ */}
              <g transform="translate(60, 230)">
                <rect x="5" y="30" width="8" height="20" fill="#FF8533" opacity="0.5" />
                <rect x="18" y="25" width="8" height="25" fill="#FF8533" opacity="0.5" />
                <rect x="31" y="20" width="8" height="30" fill="#FF8533" opacity="0.5" />
                <polyline points="9,30 22,25 35,20" fill="none" stroke="#FF8533" strokeWidth="1.5" />
              </g>
              <g transform="translate(280, 230)">
                <rect x="5" y="30" width="8" height="20" fill="#FF8533" opacity="0.5" />
                <rect x="18" y="25" width="8" height="25" fill="#FF8533" opacity="0.5" />
                <rect x="31" y="20" width="8" height="30" fill="#FF8533" opacity="0.5" />
                <polyline points="9,30 22,25 35,20" fill="none" stroke="#FF8533" strokeWidth="1.5" />
              </g>
              
              {/* テーブル */}
              <rect x="80" y="380" width="240" height="100" rx="8" fill="white" opacity="0.6" stroke="#FF6B00" strokeWidth="2" />
              
              {/* 人物（4人） */}
              <rect x="100" y="400" width="28" height="70" rx="14" fill="#FF6B00" opacity="0.25" />
              <circle cx="114" cy="390" r="11" fill="#FF6B00" opacity="0.25" />
              
              <rect x="150" y="400" width="28" height="70" rx="14" fill="#333" opacity="0.2" />
              <circle cx="164" cy="390" r="11" fill="#333" opacity="0.2" />
              
              <rect x="200" y="400" width="28" height="70" rx="14" fill="#FF6B00" opacity="0.25" />
              <circle cx="214" cy="390" r="11" fill="#FF6B00" opacity="0.25" />
              
              <rect x="250" y="400" width="28" height="70" rx="14" fill="#FF8533" opacity="0.25" />
              <circle cx="264" cy="390" r="11" fill="#FF8533" opacity="0.25" />
              
              {/* コーヒーカップ */}
              <rect x="170" y="360" width="12" height="16" rx="6" fill="#FF8533" opacity="0.3" stroke="#FF6B00" strokeWidth="1" />
              <ellipse cx="176" cy="360" rx="6" ry="2" fill="#FF8533" opacity="0.3" />
            </svg>
          </div>
        </div>
        {/* 背景装飾要素（抽象的な図形） */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl animate-fade-in" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-orange/8 rounded-full blur-3xl animate-fade-in" style={{ animationDelay: "0.7s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-bg-orange-light/20 rounded-full blur-2xl animate-fade-in" style={{ animationDelay: "0.9s" }} />
          
          {/* 抽象的な幾何学的図形 */}
          <div className="absolute top-32 left-20 w-16 h-16 bg-brand-orange/15 rounded-full animate-fade-in" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-32 right-24 w-12 h-12 border-2 border-brand-orange/20 rounded-full bg-baum-200/30 animate-fade-in" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-baum-300/25 rounded-full animate-fade-in" style={{ animationDelay: "1.4s" }} />
          
          {/* 斜めの線 */}
          <div className="absolute top-40 left-1/4 w-32 h-0.5 bg-brand-orange/15 transform rotate-45 animate-fade-in" style={{ animationDelay: "1.1s" }} />
          <div className="absolute bottom-40 right-1/3 w-24 h-0.5 bg-baum-300/20 transform -rotate-45 animate-fade-in" style={{ animationDelay: "1.3s" }} />
        </div>

      </div>
    </Section>
  );
};

export default Hero;
