import { useState } from "react";
import CTAButton from "./CTAButton";
import Section from "./Section";
import Pill from "./Pill";

const stats = [
  { value: "87", suffix: "%", label: "会員継続率" },
  { value: "328", suffix: "社", label: "参加事業所数" },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Section tone="surface">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
        {/* 左側: コンテンツ */}
        <div className="space-y-6 animate-fade-up">
          <Pill>訪問看護管理者・経営者専用コミュニティ</Pill>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-brand-dark leading-tight">
            「感覚」の経営から、
            <br />
            <span className="text-brand-orange">「根拠」</span>ある経営へ。
          </h1>
          
          <div className="space-y-2 text-lg text-brand-dark leading-relaxed">
            <p>現役経営者の実践知 × AI活用 × 財務の仕組み。</p>
            <p>「稼げ、人が育ち、選ばれるステーション」を最短距離で創る。</p>
          </div>
          
          {/* 統計カード */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-brand-dark/10 shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-serif font-semibold text-brand-orange mb-2">
                  {stat.value}
                  <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </p>
                <p className="text-sm font-semibold text-brand-dark">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* CTAボタン */}
          <div className="pt-4 space-y-2">
            <CTAButton href="#contact" size="large">今すぐ詳細を見る</CTAButton>
            <p className="text-sm text-brand-dark text-center">月額1万円で経営が変わる</p>
          </div>
        </div>
        
        {/* 右側: 画像 */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl overflow-hidden shadow-card hover-lift">
            {imageError ? (
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-bg-orange-light to-white rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-brand-dark font-semibold">画像を追加</p>
                </div>
              </div>
            ) : (
              <img
                src="/hero-image.jpg"
                alt="訪問看護経営者コミュニティ"
                className="w-full h-auto object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
