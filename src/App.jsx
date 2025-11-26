import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, X, TrendingUp, AlertCircle, Target, Users, BookOpen, Award, Briefcase, DollarSign, Calendar, ArrowRight, LineChart, Shield, Clock, Star, Building, FileText, Video, Mail, Phone, ChevronRight, BarChart3, Lightbulb, Zap, Heart, CheckCircle2, Play, ExternalLink, TrendingDown } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const observerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Mobile CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Count-up animation hook
  const useCountUp = (end, duration = 2000, shouldStart = true) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!shouldStart) return;
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, shouldStart]);
    return count;
  };

  const StatCard = ({ icon: Icon, value, suffix = '', label, delay = 0, shouldAnimate = true }) => {
    const animatedValue = useCountUp(parseInt(value), 2000, shouldAnimate);
    return (
      <div 
        className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-[#06C755]"
        style={{ animationDelay: `${delay}ms` }}
      >
        <Icon className="w-8 h-8 text-[#06C755] mb-3" />
        <div className="text-4xl font-bold text-white mb-2">
          {shouldAnimate ? animatedValue : value}{suffix}
        </div>
        <div className="text-gray-300 text-sm font-semibold">{label}</div>
      </div>
    );
  };

  const CTAButton = ({ children, className = "", size = "default", pulse = true, href = "#apply" }) => {
    const sizeClasses = {
      small: "px-6 py-3 text-base",
      default: "px-8 py-4 text-lg",
      large: "px-12 py-5 text-xl"
    };
    
    return (
      <a 
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`
          bg-gradient-to-r from-[#06C755] to-[#05d65f] hover:from-[#05b34c] hover:to-[#06C755] text-white font-bold rounded-full 
          shadow-2xl hover:shadow-[0_0_40px_rgba(6,199,85,0.6)] 
          transform hover:scale-110 transition-all duration-300 
          inline-flex items-center gap-3 group
          ${pulse ? 'animate-pulse-subtle' : ''}
          ${sizeClasses[size]}
          ${className}
        `}
      >
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    );
  };

  const SectionCTA = ({ text = "今すぐ無料面談に申し込む", className = "" }) => (
    <div className={`text-center py-12 ${className}`}>
      <CTAButton size="large" href="https://timerex.net/s/s2525keita3_0912/470321af">
        {text}
      </CTAButton>
      <p className="text-gray-400 mt-4 text-sm font-semibold">
        ※ 無料面談は60分、オンラインで実施します
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(6,199,85,0.4); }
          50% { box-shadow: 0 0 60px rgba(6,199,85,0.7); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .animate-rainbow {
          animation: rainbow 5s linear infinite;
        }
      `}</style>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-white">
            訪問看護起業マスタープログラム
          </div>
          <CTAButton size="small" pulse={false} href="https://timerex.net/s/s2525keita3_0912/470321af">
            無料面談申し込み
          </CTAButton>
        </div>
      </header>

      {/* Mobile Floating CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900/98 backdrop-blur-md border-t border-slate-700 p-4 transform transition-transform duration-300 md:hidden shadow-2xl ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <CTAButton className="w-full justify-center" size="default" href="https://timerex.net/s/s2525keita3_0912/470321af">
          無料面談に申し込む
        </CTAButton>
      </div>

      {/* Hero Section */}
      <section id="section-hero" className="pt-32 pb-20 px-4 relative overflow-hidden bg-slate-900">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-slate-800 border border-slate-700 rounded-full px-8 py-3 mb-6 shadow-lg">
              <span className="text-white font-bold text-lg">🎯 90%が12ヶ月以内に黒字化達成</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white">
              訪問看護ステーション開業
              <br />
              完全成功メソッド
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-semibold">
              融資獲得率98%、平均融資額1,500万円<br />
              <span className="text-[#06C755] font-black text-3xl">開業3ヶ月で黒字化を実現する</span><br />
              完全オンラインプログラム
            </p>
            <CTAButton size="large" href="https://timerex.net/s/s2525keita3_0912/470321af">
              今すぐ無料面談に申し込む
            </CTAButton>
            <p className="text-amber-500 mt-4 text-sm font-bold">
              ⚠️ 毎月5名限定募集 / 定員超過時は翌月以降となります
            </p>
          </div>

          {/* Stats Grid - BRIGHT */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <StatCard 
              icon={Users} 
              value="90" 
              suffix="%" 
              label="12ヶ月黒字化率" 
              delay={0}
              shouldAnimate={false}
            />
            <StatCard 
              icon={DollarSign} 
              value="1500" 
              suffix="万円" 
              label="平均融資額" 
              delay={200}
              shouldAnimate={false}
            />
            <StatCard 
              icon={TrendingUp} 
              value="98" 
              suffix="%" 
              label="融資承認率" 
              delay={400}
              shouldAnimate={false}
            />
            <StatCard 
              icon={Building} 
              value="50" 
              suffix="社+" 
              label="開業支援実績" 
              delay={600}
              shouldAnimate={false}
            />
          </div>

          {/* Key Numbers - RICH Display */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border-4 border-[#06C755] shadow-2xl">
            <div className="text-center">
              <p className="text-gray-200 text-lg mb-4 font-bold">業界最高水準の成功実績</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-black mb-2">
                    <span className="text-amber-400">
                      98
                    </span>
                    <span className="text-5xl md:text-7xl text-amber-400">%</span>
                  </div>
                  <p className="text-gray-200 font-black text-lg">融資承認率</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-black mb-2">
                    <span className="text-[#06C755]">
                      90
                    </span>
                    <span className="text-5xl md:text-7xl text-[#06C755]">%</span>
                  </div>
                  <p className="text-gray-200 font-black text-lg">12ヶ月黒字化率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Results Section */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-700 border border-slate-600 rounded-full px-8 py-3 mb-6 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">正直な実績開示</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              支援できなかった事例も<br />
              <span className="text-[#06C755]">正直にお伝えします</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold">
              信頼性を最優先に、失敗事例も包み隠さず公開
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 融資否認2% */}
            <div className="bg-slate-700 rounded-3xl p-8 border-2 border-red-500 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center border-2 border-red-500">
                  <span className="text-3xl font-black text-red-400">2%</span>
                </div>
                <h3 className="text-2xl font-black text-red-400">融資否認の実態</h3>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border-2 border-red-200">
                <p className="text-gray-800 mb-4 font-bold">📍 愛知県 1社</p>
                <ul className="space-y-2 text-gray-700 text-sm font-semibold">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>資料の作り込みなし</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>説明時も手元資料無し</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>想定面談実施せず</span>
                  </li>
                </ul>
                <div className="mt-4 bg-green-100 rounded-lg p-3 border-2 border-green-300">
                  <p className="text-green-700 text-sm font-bold">
                    💡 準備を怠らなければ98%は融資承認されます
                  </p>
                </div>
              </div>
            </div>

            {/* 黒字化未達成10% */}
            <div className="bg-slate-700 rounded-3xl p-8 border-2 border-amber-500 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-900 flex items-center justify-center border-2 border-amber-500">
                  <span className="text-3xl font-black text-amber-400">10%</span>
                </div>
                <h3 className="text-2xl font-black text-amber-400">黒字化未達成</h3>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border-2 border-orange-200 space-y-4">
                <div>
                  <p className="text-gray-800 mb-2 font-bold">📍 ケース① 地域選定ミス</p>
                  <ul className="space-y-1 text-gray-700 text-sm font-semibold">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>本人の会社以外1社しかステーション無し</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>暗黙の了解で依頼が既存1社に限定</span>
                    </li>
                  </ul>
                </div>
      <div>
                  <p className="text-gray-800 mb-2 font-bold">📍 ケース② 市場規模不足</p>
                  <ul className="space-y-1 text-gray-700 text-sm font-semibold">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>総人口1万人、取引先30ヶ所のみ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>資金ショート2ヶ月前に音信不通</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded-lg p-3 border-2 border-green-300">
                  <p className="text-green-700 text-sm font-bold">
                    💡 市場調査と地域選定の重要性を徹底指導します
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA text="失敗を回避する方法を今すぐ知る" className="bg-slate-900" />

      {/* Fear Section - UPDATED with Statistics */}
      <section id="section-fear" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-red-500 rounded-full px-8 py-3 mb-6 shadow-lg">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <span className="text-white font-bold text-lg">業界の厳しい現実</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              <span className="text-red-400">「倒産件数、過去最多」</span>の衝撃。<br />
              なぜ、訪問看護ステーションの淘汰が止まらないのか?
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              2024年報酬改定・物価高騰が直撃<br />
              小規模事業者を襲う「構造的経営難」の正体
            </p>
            <div className="inline-block bg-slate-800 border-2 border-red-500 rounded-2xl px-8 py-4 shadow-lg">
              <p className="text-3xl font-black text-red-400">
                業界平均利益率: わずか<span className="text-5xl text-red-300">5.9%</span>
              </p>
              <p className="text-red-400 font-bold text-sm mt-2">(前年調査比 1.3ポイント悪化※1)</p>
            </div>
          </div>

          {/* Updated 3 Reasons */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: TrendingDown, 
                title: '薄利構造とコスト増の二重苦', 
                desc: '訪問単価は上昇しているにも関わらず、移動効率の悪化や物価高騰により利益率は低下。ひとつの経営判断ミスが致命傷になる「薄氷の経営」が実態です。',
                stat: '利益率悪化トレンド継続中',
                color: 'bg-slate-800',
                border: 'border-red-500'
              },
              { 
                icon: Users, 
                title: '小規模事業所の「10人の壁」', 
                desc: '「小規模なら安心」は過去の話。倒産した事業所の9割以上が小規模運営です。人材の定着と規模拡大に失敗したステーションから市場を退出しています。',
                stat: '倒産の94%が従業員10人未満※2',
                color: 'bg-slate-800',
                border: 'border-amber-500'
              },
              { 
                icon: Target, 
                title: '「黒字倒産」を引き起こす採用難', 
                desc: '依頼はあるのに断らざるを得ない「機会損失」が常態化。売上が作れない根本原因は、営業力不足ではなく「看護師が採用できないこと」にあります。',
                stat: '倒産原因の8割が「販売不振」※2',
                color: 'bg-slate-800',
                border: 'border-orange-500'
              }
            ].map((item, i) => (
              <div key={i} className={`${item.color} rounded-2xl p-6 border-2 ${item.border} hover:shadow-2xl transition-all duration-300 group`}>
                <item.icon className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed font-semibold">{item.desc}</p>
                <div className="bg-slate-700 rounded-lg px-4 py-2 inline-block border border-slate-600">
                  <span className="text-gray-200 font-black text-sm">{item.stat}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Data Sources */}
          <div className="bg-white/80 rounded-2xl p-6 border-2 border-gray-300">
            <h4 className="text-sm font-bold text-gray-700 mb-3">【データ出典について】</h4>
            <div className="text-xs text-gray-600 space-y-1 leading-relaxed">
              <p>※1 厚生労働省「令和5年度介護事業経営実態調査結果」(令和2年度決算と比較した訪問看護ステーションの収支差率の推移)</p>
              <p>※2 株式会社東京商工リサーチ「訪問看護ステーションの倒産動向調査」(2024年1-10月期の集計データに基づく/倒産原因としての販売不振構成比、および倒産企業の従業員数構成比)</p>
              <p className="font-semibold">※本ページに記載の「過去最多」等の表現は、上記調査時点における統計データに基づきます。</p>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA text="成功メソッドを無料面談で聞く" className="bg-slate-800" />

      {/* Case Studies Section - VIDEO EMPHASIS */}
      <section id="section-cases" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-[#06C755] rounded-full px-8 py-3 mb-6 shadow-lg">
              <Award className="w-6 h-6 text-[#06C755]" />
              <span className="text-white font-bold text-lg">卒業生の成功事例</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              実際の成功事例を<br />
              <span className="text-[#06C755]">動画でご覧ください</span>
            </h2>
            <p className="text-xl text-gray-300 font-semibold">
              卒業生の<span className="text-[#06C755] font-black">リアルな声</span>を直接お届け
            </p>
          </div>

          {/* Real Case Studies - VIDEO FOCUS */}
          <div className="space-y-12">
            {[
              {
                label: 'Case Study 01',
                company: '株式会社eme',
                station: 'えめ訪問看護ステーション 和歌山',
                representative: '代表取締役 北山寿希也',
                profile: '30代男性 / 和歌山市',
                background: 'ICU看護師から転身、2025年11月現在 開業から8ヶ月',
                funding: '2,000万円以上',
                period: '開業8ヶ月',
                staff: '5名→9名',
                color: 'from-slate-800 to-slate-900',
                url: 'https://eme-houkan.com/',
                video: 'https://youtu.be/-3gkNUKq5WM',
                photo: '/eme-houkan-daihyo.png',
                thumbnail: '/kitayama-thumbnail.png'
              },
              {
                label: 'Case Study 02',
                company: '株式会社first',
                station: 'ファースト訪問看護ステーション灘',
                representative: '代表取締役 髙橋 優太',
                profile: '30代男性 / 神戸市',
                background: '救命センター勤務から独立、居宅介護支援もOPEN、2025年11月現在 開業5年目',
                funding: '1,500万円',
                period: '開業5年目',
                staff: '20名体制',
                color: 'from-slate-800 to-slate-900',
                url: 'https://first1105-nada.com/',
                video: 'https://youtu.be/P6UeyhoTKgM',
                photo: '/first-houkan-daihyo.png',
                thumbnail: '/takahashi-thumbnail.png'
              },
              {
                label: 'Case Study 03',
                company: 'GOJO株式会社',
                station: 'あしなら訪問看護ステーション',
                representative: '代表取締役 中村隆則',
                profile: '40代男性 / 台東区',
                background: '訪問看護経験を活かして開業、2店舗目+居宅介護支援もOPEN、2025年11月現在 開業4年目',
                funding: '1,000万円',
                period: '開業4年目',
                staff: '30名体制',
                color: 'from-slate-800 to-slate-900',
                url: 'https://recruit.gojo-inc.jp/',
                video: null,
                photo: '/ashinara-houkan-daihyo.png',
                thumbnail: '/nakamura-thumbnail.png'
              }
            ].map((caseStudy, i) => (
              <div key={i} className={`bg-slate-800 rounded-3xl p-8 md:p-10 border-2 border-slate-700 hover:border-[#06C755] shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* サムネイル画像のみ表示 - テキストなし */}
                  <div className="md:w-1/3">
                    <div className="relative">
                      {caseStudy.thumbnail ? (
                        <div 
                          className={`block relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-700 ${caseStudy.video ? 'hover:border-[#06C755] group cursor-pointer' : ''} transition-all bg-slate-700`}
                          style={{
                            backgroundImage: `url("${caseStudy.thumbnail}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                          }}
                          onClick={caseStudy.video ? () => window.open(caseStudy.video, '_blank') : undefined}
                        >
                          <div className="relative w-full" style={{
                            paddingBottom: '56.25%'
                          }}>
                            <div className="absolute inset-0">
                              {caseStudy.video && (
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                  <div className="bg-[#06C755]/90 group-hover:bg-[#06C755] rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform z-10">
                                    <Play className="w-12 h-12 text-white ml-1" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-slate-700 rounded-2xl p-6 h-48 flex items-center justify-center border-2 border-slate-600 shadow-lg aspect-[4/3]">
                          <div className="text-center text-white">
                            <Building className="w-16 h-16 mx-auto mb-3" />
                            <p className="text-xl font-black">{caseStudy.company}</p>
                            <p className="text-sm mt-2 font-semibold">{caseStudy.station}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* 動画の下に卒業生の顔写真を配置 */}
                      {caseStudy.photo && (
                        <div className="mt-4 flex justify-center md:justify-start">
                          <img 
                            src={caseStudy.photo} 
                            alt={`${caseStudy.representative}の写真`}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-700 shadow-xl"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 詳細情報 - 常に表示 */}
                  <div className="md:w-2/3">
                    <div className="inline-block bg-slate-700 border border-slate-600 rounded-full px-4 py-1 mb-4">
                      <span className="text-sm font-black text-white">{caseStudy.label}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1 text-white">{caseStudy.company}</h3>
                    <p className="text-xl text-gray-300 mb-2 font-bold">{caseStudy.representative}</p>
                    <p className="text-gray-400 mb-4 text-sm font-semibold">{caseStudy.profile}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed font-semibold">{caseStudy.background}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-700 rounded-xl p-4 border border-slate-600">
                        <DollarSign className="w-8 h-8 text-amber-400 mb-2" />
                        <div className="text-xl font-black text-white">{caseStudy.funding}</div>
                        <div className="text-xs text-gray-400 font-bold">融資額</div>
                      </div>
                      <div className="bg-slate-700 rounded-xl p-4 border border-slate-600">
                        <Clock className="w-8 h-8 text-[#06C755] mb-2" />
                        <div className="text-xl font-black text-white">{caseStudy.period}</div>
                        <div className="text-xs text-gray-400 font-bold">実績</div>
                      </div>
                      <div className="bg-slate-700 rounded-xl p-4 border border-slate-600">
                        <Users className="w-8 h-8 text-blue-400 mb-2" />
                        <div className="text-xl font-black text-white">{caseStudy.staff}</div>
                        <div className="text-xs text-gray-400 font-bold">スタッフ</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={caseStudy.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-full px-6 py-3 transition-all group border border-slate-600 shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform text-white" />
                        <span className="text-sm font-black text-white">公式サイト</span>
                      </a>
                      {caseStudy.video && (
                        <a 
                          href={caseStudy.video} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] rounded-full px-6 py-3 transition-all group shadow-lg"
                        >
                          <Play className="w-4 h-4 group-hover:scale-110 transition-transform text-white" />
                          <span className="text-sm font-black text-white">動画を見る</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Record - ALL 50+ Companies */}
          <div className="mt-16 bg-slate-800 rounded-3xl p-8 md:p-12 border-4 border-[#06C755] shadow-2xl">
            <h3 className="text-3xl font-black text-center mb-4 text-white">
              <span className="text-[#06C755]">開業支援実績 全国50社以上</span>
            </h3>
            <p className="text-center text-xl text-gray-300 mb-8 font-semibold">
              北海道から沖縄まで、全国で開業・運営支援を実施
            </p>
            <div className="bg-slate-700 rounded-2xl p-6 md:p-8 border-2 border-slate-600">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { region: '北海道', count: '5社', color: 'bg-slate-700' },
                  { region: '茨城県', count: '1社', examples: ['ロンフィール訪問看護リハビリステーション'], url: 'https://lonfiel.com/', color: 'bg-slate-700' },
                  { region: '長野県', count: '1社', color: 'bg-slate-700' },
                  { region: '福島県', count: '2社', examples: ['訪問看護リハビリステーションぽっかぽか'], url: 'https://www.pokkapoka-iwaki.com/', color: 'bg-slate-700' },
                  { region: '群馬県', count: '2社', examples: ['訪問看護ステーションこはる'], url: 'https://recruit.coharu-st.com/', color: 'bg-slate-700' },
                  { region: '山梨県', count: '1社', examples: ['あおぞら訪問看護リハビリステーション'], url: 'https://aozora-houkan.net/', color: 'bg-slate-700' },
                  { region: '新潟県', count: '1社', examples: ['訪問看護ステーションラポ'], url: 'https://keanasrapo.com/', color: 'bg-slate-700' },
                  { region: '東京都', count: '7社', examples: ['きずな訪問看護ステーション', 'ひまわり訪問看護ステーション', '訪問看護ステーションスマイル', 'あしなら訪問看護ステーション'], url: 'https://recruit.gojo-inc.jp/', color: 'bg-slate-700' },
                  { region: '神奈川県', count: '5社', examples: ['とまと訪問看護リハビリステーション', 'てんど訪問看護ステーション'], url: 'https://lifetend.jp/', color: 'bg-slate-700' },
                  { region: '千葉県', count: '4社', color: 'bg-slate-700' },
                  { region: '埼玉県', count: '2社', examples: ['ぽぷら訪問看護ステーション'], url: 'https://www.populus-ns.com/', color: 'bg-slate-700' },
                  { region: '愛知県', count: '3社', color: 'bg-slate-700' },
                  { region: '大阪府', count: '5社', examples: ['ひかり訪問看護ステーション', 'ウィル訪問看護ステーション大阪'], url: 'https://wyl.co.jp/station-i/osaka', color: 'bg-slate-700' },
                  { region: '兵庫県', count: '1社', examples: ['ファースト訪問看護ステーション灘'], url: 'https://first1105-nada.com/', color: 'bg-slate-700' },
                  { region: '和歌山県', count: '1社', examples: ['えめ訪問看護ステーション和歌山'], url: 'https://eme-houkan.com/', color: 'bg-slate-700' },
                  { region: '岡山県', count: '2社', examples: ['訪問看護ステーションPLUS'], url: 'https://plus-act-oka.com/', color: 'bg-slate-700' },
                  { region: '広島県', count: '1社', color: 'bg-slate-700' },
                  { region: '山口県', count: '3社', examples: ['きみいろ訪問看護ステーション', 'いろどり訪問看護ステーション', 'でいご訪問看護リハビリステーション'], url: 'https://deigo-simcover.com/', color: 'bg-slate-700' },
                  { region: '香川県', count: '1社', examples: ['訪問看護ステーションシェアハート'], url: 'https://share810.com/', color: 'bg-slate-700' },
                  { region: '福岡県', count: '3社', color: 'bg-slate-700' },
                  { region: '熊本県', count: '1社', examples: ['訪問看護ステーションさくら'], url: 'https://www.houkan-sakura.com/', color: 'bg-slate-700' },
                  { region: '大分県', count: '1社', color: 'bg-slate-700' },
                  { region: '宮崎県', count: '1社', color: 'bg-slate-700' }
                ].map((area, i) => (
                  <div key={i} className={`${area.color} rounded-xl p-4 hover:shadow-xl transition-all border-2 border-slate-600`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-lg text-white">{area.region}</span>
                      <span className="text-[#06C755] font-black text-2xl">{area.count}</span>
                    </div>
                    {area.examples && (
                      <div className="text-xs text-gray-300 space-y-1 font-semibold">
                        {area.examples.map((ex, j) => (
                          <p key={j}>・{ex}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA text="成功事例の詳細を無料面談で聞く" className="bg-slate-800" />

      {/* Instructor Profile - COMPLETE REWRITE */}
      <section id="section-instructor" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-[#06C755] rounded-full px-8 py-3 mb-6 shadow-lg">
              <Star className="w-6 h-6 text-[#06C755]" />
              <span className="text-white font-bold text-lg">講師紹介</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              ただのコンサルタントではありません。
            </h2>
            <p className="text-2xl text-gray-300 font-bold leading-relaxed max-w-4xl mx-auto">
              私は、現在進行形で訪問看護ステーションを5拠点経営し、<span className="text-[#06C755] text-3xl">年商5億円</span>を売り上げている<span className="text-white text-3xl">「現役の実業家」</span>です。
            </p>
          </div>

          {/* 講師写真と紹介文 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="order-2 md:order-1">
              <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border-2 border-slate-700 shadow-xl h-full">
                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-semibold">
                  多くのコンサルが過去の経験則や教科書的な理論を語る中、私は<span className="text-[#06C755] font-black text-2xl">「今の現場」で通用する生きたノウハウ</span>しか教えません。
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-semibold">
                  採用難と言われるこの時代に常勤スタッフ50名を抱え、月間3,500件の訪問を回し続ける<span className="text-white font-black text-2xl">「組織作りの極意」</span>。そして、総フォロワー11万人を熱狂させ、広告費に頼らずとも人とお金を集める<span className="text-white font-black text-2xl">「Webマーケティングの正解」</span>。
                </p>
                <p className="text-xl text-gray-300 leading-relaxed font-semibold">
                  自身の事業で実証し、さらに全国50社以上の支援先で再現されてきた<span className="text-[#06C755] font-black text-2xl">「失敗しない開業メソッド」</span>を、あなたにすべて継承します。
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-slate-800 rounded-3xl p-6 border-2 border-slate-700 shadow-xl h-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/講師じょん　写真.png" 
                  alt="講師プロフィール写真" 
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>


          {/* 3つの権威性ブロック */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ❶ 圧倒的な「現場」実績 */}
            <div className="bg-slate-800 rounded-3xl p-8 border-2 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl font-black text-white">❶</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">圧倒的な「現場」実績</h3>
                <p className="text-sm text-gray-300 font-semibold">机上の理論ではなく、泥臭い現場で磨き上げた数字です。</p>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Building, label: '運営拠点', value: '5拠点(直営)' },
                  { icon: DollarSign, label: '年商規模', value: '5億円達成' },
                  { icon: Users, label: '組織力', value: '常勤スタッフ50名' },
                  { icon: Heart, label: '訪問数', value: '月間3,500件超' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-slate-700 rounded-xl p-3 border border-slate-600">
                    <div className="w-10 h-10 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#06C755]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">{item.label}</p>
                      <p className="text-lg font-black text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ❷ 業界最強の「集客・採用」発信力 */}
            <div className="bg-slate-800 rounded-3xl p-8 border-2 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl font-black text-white">❷</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">業界最強の発信力</h3>
                <p className="text-sm text-gray-300 font-semibold">「見られ方」「顧客心理」「人が動く導線」を熟知</p>
              </div>
              <div className="bg-slate-700 rounded-2xl p-6 mb-4 border-2 border-[#06C755] shadow-lg">
                <div className="text-center">
                  <p className="text-6xl font-black text-white mb-2">11万+</p>
                  <p className="text-white font-bold text-lg">総SNSフォロワー</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between bg-slate-700 rounded-lg p-3 border border-slate-600">
                  <span className="text-gray-300 font-semibold">YouTube</span>
                  <span className="text-white font-black text-lg">2.2万</span>
                </li>
                <li className="flex items-center justify-between bg-slate-700 rounded-lg p-3 border border-slate-600">
                  <span className="text-gray-300 font-semibold">TikTok</span>
                  <span className="text-white font-black text-lg">6万</span>
                </li>
                <li className="flex items-center justify-between bg-slate-700 rounded-lg p-3 border border-slate-600">
                  <span className="text-gray-300 font-semibold">Instagram</span>
                  <span className="text-white font-black text-lg">3万</span>
                </li>
                <li className="flex items-center justify-between bg-slate-700 rounded-lg p-3 border border-slate-600">
                  <span className="text-gray-300 font-semibold">X (Twitter)</span>
                  <span className="text-white font-black text-lg">4千</span>
                </li>
              </ul>
            </div>

            {/* ❸ 再現性のある「指導」実績 */}
            <div className="bg-slate-800 rounded-3xl p-8 border-2 border-slate-700 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl font-black text-white">❸</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">再現性のある指導</h3>
                <p className="text-sm text-gray-300 font-semibold">私だけができたわけではありません。</p>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Award, label: '開業支援実績', value: '50社以上' },
                  { icon: Target, label: '支援エリア', value: '北海道〜沖縄' },
                  { icon: Shield, label: 'モットー', value: '失敗しない開業' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-slate-700 rounded-xl p-4 border border-slate-600">
                    <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">{item.label}</p>
                      <p className="text-lg font-black text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-slate-700 rounded-xl p-4 border-2 border-[#06C755] shadow-lg">
                <p className="text-white font-black text-center text-sm leading-relaxed">
                  私のノウハウをインストールした未経験者たちが、次々と結果を出しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="section-pricing" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-[#06C755] rounded-full px-8 py-3 mb-6 shadow-lg">
              <DollarSign className="w-6 h-6 text-[#06C755]" />
              <span className="text-white font-bold text-lg">受講料とROI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              かけた費用に対して回収できるのか
            </h2>
            <div className="inline-block bg-amber-500/20 border-2 border-amber-500 rounded-2xl px-8 py-4 mb-6 shadow-lg">
              <p className="text-amber-400 font-black text-xl md:text-2xl">
                経営者・社長の時給は1万円以上だと思え！
              </p>
            </div>
            <p className="text-xl text-gray-300 font-semibold">
              受講料は<span className="text-[#06C755] font-black text-2xl">最短3ヶ月で完全回収可能</span>
            </p>
          </div>

          {/* Main Price Display - RICH */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-16 border-4 border-[#06C755] mb-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center">
              <div className="inline-block bg-amber-500 text-white rounded-2xl px-8 py-3 mb-6 shadow-xl">
                <p className="font-black text-2xl">🔥 リリース記念キャンペーン 🔥</p>
              </div>
              <p className="text-2xl text-gray-200 mb-4 font-bold">完全オンラインプログラム</p>
              <div className="mb-6">
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-black text-gray-500 line-through mb-2 opacity-70">
                    110万円
                  </div>
                  <div className="absolute -top-8 -right-8 bg-amber-500 text-white px-6 py-3 rounded-full text-3xl font-black rotate-12 shadow-2xl border-4 border-white animate-pulse-subtle">
                    22万円OFF!
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <ArrowRight className="w-16 h-16 text-[#06C755] animate-bounce" />
                  <div className="text-8xl md:text-9xl font-black">
                    <span className="text-amber-400 drop-shadow-[0_0_50px_rgba(251,191,36,1)]">
                      88
                    </span>
                    <span className="text-6xl md:text-7xl text-amber-400">万円</span>
                  </div>
                </div>
                <p className="text-xl text-gray-200 font-bold">(税込)</p>
              </div>
              <div className="inline-block bg-slate-700 rounded-2xl px-8 py-4 border-4 border-[#06C755] mb-4 shadow-xl">
                <p className="text-2xl text-white font-bold">
                  分割払い: <span className="text-[#06C755] font-black text-3xl">月々14.7万円</span> × 6回
                </p>
                <p className="text-sm text-gray-300 mt-2 font-semibold">※ 分割手数料なし</p>
              </div>
              <div className="inline-block bg-amber-500/20 border-2 border-amber-500 rounded-xl px-6 py-3 shadow-lg">
                <p className="text-amber-400 font-black">
                  期間限定キャンペーン価格
                </p>
              </div>
            </div>
          </div>

          {/* 6 Recovery Methods */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
              <span className="text-[#06C755]">6つの投資回収方法</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: '営業利益で回収',
                  amount: '88万円',
                  period: '3ヶ月',
                  desc: '黒字化達成で営業利益から回収',
                  icon: TrendingUp,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                },
                {
                  number: '02',
                  title: '採用コスト削減',
                  amount: '100万円',
                  period: '初年度',
                  desc: '人材紹介会社への手数料をゼロに',
                  icon: Users,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                },
                {
                  number: '03',
                  title: '融資額最大化',
                  amount: '+100万円',
                  period: '初期',
                  desc: '融資額を100万円以上増額',
                  icon: DollarSign,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                },
                {
                  number: '04',
                  title: '士業紹介で節約',
                  amount: '45万円',
                  period: '初年度',
                  desc: '税理士・社労士費用を大幅削減',
                  icon: Briefcase,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                },
                {
                  number: '05',
                  title: '新規顧客獲得',
                  amount: '93.6万円',
                  period: '6ヶ月',
                  desc: '13名の新規利用者獲得で達成',
                  icon: Target,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                },
                {
                  number: '06',
                  title: 'テンプレート価値',
                  amount: '88万円',
                  period: '即時',
                  desc: '40種以上のテンプレートの市場価値',
                  icon: FileText,
                  color: 'bg-slate-800',
                  border: 'border-slate-700'
                }
              ].map((method, i) => (
                <div key={i} className={`${method.color} rounded-2xl p-6 border-2 ${method.border} hover:shadow-xl hover:border-[#06C755] transition-all duration-300 transform hover:scale-105 group`}>
                  <div className="flex items-start justify-between mb-4">
                    <method.icon className="w-10 h-10 text-[#06C755] group-hover:scale-110 transition-transform" />
                    <span className="text-5xl font-black text-slate-600">{method.number}</span>
                  </div>
                  <h4 className="text-xl font-black mb-2 text-white">{method.title}</h4>
                  <div className="text-4xl font-black mb-2">
                    <span className="text-amber-400">
                      {method.amount}
                    </span>
                  </div>
                  <div className="inline-block bg-slate-700 rounded-full px-3 py-1 mb-3 border border-slate-600">
                    <span className="text-sm font-black text-white">{method.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-semibold">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Timeline */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border-2 border-slate-700 shadow-xl">
            <h3 className="text-3xl font-black text-center mb-8 text-white">
              投資回収タイムライン
            </h3>
            <div className="space-y-4">
              {[
                { time: '即時', method: 'テンプレート価値', amount: '88万円', total: '88万円', color: 'bg-slate-700' },
                { time: '初期', method: '融資額最大化', amount: '+100万円', total: '188万円', color: 'bg-slate-700' },
                { time: '3ヶ月', method: '営業利益', amount: '88万円', total: '276万円', color: 'bg-slate-700' },
                { time: '6ヶ月', method: '新規顧客獲得', amount: '93.6万円', total: '369.6万円', color: 'bg-slate-700' },
                { time: '1年', method: '採用コスト削減+士業紹介', amount: '145万円', total: '514.6万円', color: 'bg-slate-700' }
              ].map((item, i) => (
                <div key={i} className={`${item.color} rounded-xl p-6 border-2 border-slate-600 hover:border-[#06C755] hover:shadow-lg transition-all`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0 border-2 border-[#06C755]">
                        <span className="text-xl font-black text-white">{item.time}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white">{item.method}</h4>
                        <p className="text-2xl font-black text-amber-400">{item.amount}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300 font-bold">累計回収額</p>
                      <p className="text-3xl font-black text-[#06C755]">{item.total}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="inline-block bg-amber-500/20 border-2 border-amber-500 rounded-2xl px-8 py-6 shadow-xl">
                <p className="text-white text-xl mb-2 font-bold">1年後の投資効果</p>
                <p className="text-5xl font-black text-amber-400">
                  514.6万円
                </p>
                <p className="text-white mt-2 font-bold">受講料の<span className="font-black text-2xl text-red-400">5.8倍</span>のリターン</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA text="投資回収プランを無料面談で相談する" className="bg-slate-800" />

      {/* Application Section */}
      <section id="apply" className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-[#06C755] rounded-full px-8 py-3 mb-6 shadow-lg">
              <Zap className="w-6 h-6 text-[#06C755]" />
              <span className="text-white font-bold text-lg">今すぐ行動</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              無料面談お申し込み
            </h2>
            <p className="text-xl text-gray-300 mb-4 font-semibold">
              まずは60分の無料面談で、あなたの開業プランを相談してください
            </p>
            <div className="inline-block bg-amber-500/20 border-2 border-amber-500 rounded-2xl px-6 py-3 mb-2 shadow-lg">
              <p className="text-amber-400 font-black text-lg">
                ⚠️ 毎月5名限定
              </p>
            </div>
            <p className="text-gray-400 text-sm font-semibold">
              個別対応・zoom質問を細かく対応するため<br />
              月の定員を超えた場合、翌月以降に申し込みを延ばさせていただく場合がございます
            </p>
          </div>

          {/* Application Method */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border-2 border-[#06C755] hover:border-[#05b34c] transition-all duration-300 transform hover:scale-105 mb-8 shadow-xl">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#06C755] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">無料面談を予約する</h3>
              <p className="text-gray-300 mb-8 text-lg font-semibold">
                オンラインで60分、あなたの開業プランを徹底サポート<br />
                <span className="text-sm text-gray-400">(推奨)</span>
              </p>
              <CTAButton 
                className="w-full justify-center mb-6" 
                size="large"
                href="https://timerex.net/s/s2525keita3_0912/470321af"
              >
                今すぐ無料面談に申し込む
              </CTAButton>
              <p className="text-sm text-gray-400 font-semibold">
                ※ クリックすると予約ページに移動します
              </p>
            </div>
          </div>

          {/* Email Form */}
          <div id="email-form" className="bg-slate-800 rounded-3xl p-8 md:p-10 border-2 border-slate-700 shadow-lg">
            <h3 className="text-2xl font-black mb-2 text-center text-white">メールでのお問い合わせ</h3>
            <p className="text-center text-gray-300 mb-6 text-sm font-semibold">
              メールアドレス: <a href="mailto:info@jnhc-mra.or.jp" className="text-[#06C755] hover:underline font-bold">info@jnhc-mra.or.jp</a>
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-black mb-2 text-white">お名前 *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-[#06C755] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 text-white placeholder-gray-400 transition-all font-semibold"
                  placeholder="山田太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-black mb-2 text-white">メールアドレス *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-[#06C755] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 text-white placeholder-gray-400 transition-all font-semibold"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-black mb-2 text-white">電話番号 *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-[#06C755] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 text-white placeholder-gray-400 transition-all font-semibold"
                  placeholder="090-1234-5678"
                />
              </div>
              <div>
                <label className="block text-sm font-black mb-2 text-white">希望日程 *</label>
                <textarea 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-[#06C755] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 text-white placeholder-gray-400 transition-all resize-none font-semibold"
                  placeholder="希望の日程を3つほどご記入ください&#10;&#10;例）&#10;12/23 19:00-&#10;12/24 12:00-&#10;12/28 11:30-"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-black mb-2 text-white">ご相談内容</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-[#06C755] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 text-white placeholder-gray-400 transition-all resize-none font-semibold"
                  placeholder="ご質問やご相談内容をご記入ください"
                ></textarea>
      </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#06C755] to-[#05d65f] hover:from-[#05b34c] hover:to-[#06C755] text-white font-black rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                送信する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
            </form>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-slate-800 rounded-2xl px-8 py-6 border-2 border-slate-700 shadow-lg">
              <p className="text-xl text-white leading-relaxed font-semibold">
                <span className="text-[#06C755] font-black text-2xl">あなたの開業成功</span>を全力でサポートします。<br />
                まずは無料面談で、不安や疑問をすべて解消してください。
        </p>
      </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="text-3xl font-black mb-4 text-white">
              訪問看護起業マスタープログラム
            </div>
            <p className="text-gray-300 mb-6 font-semibold">
              訪問看護ステーション開業の成功をトータルサポート
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="#association" className="text-gray-300 hover:text-[#06C755] transition-colors font-semibold">
                協会概要
              </a>
              <a href="#privacy" className="text-gray-300 hover:text-[#06C755] transition-colors font-semibold">
                プライバシーポリシー
              </a>
              <a href="#law" className="text-gray-300 hover:text-[#06C755] transition-colors font-semibold">
                特定商取引法に基づく表記
              </a>
              <a href="mailto:info@jnhc-mra.or.jp" className="text-gray-300 hover:text-[#06C755] transition-colors font-semibold">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* 協会概要 */}
          <div id="association" className="bg-slate-800 rounded-2xl p-6 md:p-8 mb-6 border-2 border-slate-700 shadow-lg">
            <h3 className="text-xl font-black mb-6 text-white">協会概要</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-black text-white mb-2">正式名称</h4>
                <p className="text-gray-300 font-semibold mb-4">一般社団法人 全国訪問看護経営研究協会</p>
                
                <h4 className="font-black text-white mb-2">略称</h4>
                <p className="text-gray-300 font-semibold mb-4">JNHC-MRA</p>
                
                <h4 className="font-black text-white mb-2">設立時期</h4>
                <p className="text-gray-300 font-semibold mb-4">2023年8月23日</p>
              </div>
              <div>
                <h4 className="font-black text-white mb-2">所在地</h4>
                <p className="text-gray-300 font-semibold mb-4">
                  〒231-0064<br />
                  神奈川県横浜市中区野毛町2-90<br />
                  桜木町スカイハイツ405
                </p>
                
                <h4 className="font-black text-white mb-2">連絡先</h4>
                <p className="text-gray-300 font-semibold mb-2">
                  電話番号：<a href="tel:080-6091-7592" className="text-[#06C755] hover:underline">080-6091-7592</a>
                </p>
                <p className="text-gray-300 font-semibold">
                  メールアドレス：<a href="mailto:info@jnhc-mra.or.jp" className="text-[#06C755] hover:underline">info@jnhc-mra.or.jp</a>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="font-black text-white mb-2">目的</h4>
              <p className="text-gray-300 font-semibold leading-relaxed">
                訪問看護の質の向上と、持続可能な経営基盤の確立を目指す。病気や障がいがあっても地域で自分らしく暮らし続けられる環境づくりに貢献する。
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div id="privacy" className="bg-slate-800 rounded-2xl p-6 md:p-8 mb-6 border-2 border-slate-700 shadow-lg">
            <h3 className="text-xl font-black mb-4 text-white">プライバシーポリシー</h3>
            <div className="text-sm text-gray-300 space-y-3 font-semibold">
              <p>当プログラムは、お客様の個人情報保護を重要視し、以下の方針に基づき適切に取り扱います。</p>
              <div>
                <h4 className="font-black text-white mb-2">1. 個人情報の収集</h4>
                <p>氏名、メールアドレス、電話番号等、サービス提供に必要な情報のみを収集します。</p>
              </div>
              <div>
                <h4 className="font-black text-white mb-2">2. 個人情報の利用目的</h4>
                <p>・プログラムのサービス提供<br />・お問い合わせへの対応<br />・重要なお知らせの配信</p>
              </div>
              <div>
                <h4 className="font-black text-white mb-2">3. 個人情報の第三者提供</h4>
                <p>法令に基づく場合を除き、お客様の同意なく第三者に提供することはありません。</p>
              </div>
              <div>
                <h4 className="font-black text-white mb-2">4. 個人情報の管理</h4>
                <p>適切なセキュリティ対策を講じ、不正アクセス・漏洩・改ざん・紛失等を防止します。</p>
              </div>
            </div>
          </div>

          {/* 特定商取引法 */}
          <div id="law" className="bg-slate-800 rounded-2xl p-6 md:p-8 mb-6 border-2 border-slate-700 shadow-lg">
            <h3 className="text-xl font-black mb-4 text-white">特定商取引法に基づく表記</h3>
            <div className="text-sm text-gray-300 space-y-3 font-semibold">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-black text-white mb-1">事業者名</h4>
                  <p>一般社団法人 全国訪問看護経営研究協会（JNHC-MRA）</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">運営責任者</h4>
                  <p>代表理事</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">所在地</h4>
                  <p>〒231-0064<br />神奈川県横浜市中区野毛町2-90<br />桜木町スカイハイツ405</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">連絡先</h4>
                  <p>
                    電話：<a href="tel:080-6091-7592" className="text-[#06C755] hover:underline">080-6091-7592</a><br />
                    メール：<a href="mailto:info@jnhc-mra.or.jp" className="text-[#06C755] hover:underline">info@jnhc-mra.or.jp</a>
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">販売価格</h4>
                  <p>880,000円(税込)<br />キャンペーン価格適用時</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">支払方法</h4>
                  <p>銀行振込、クレジットカード<br />分割払い対応(手数料なし)</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">支払時期</h4>
                  <p>お申込み確定後7日以内</p>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1">提供時期</h4>
                  <p>入金確認後、速やかに提供</p>
                </div>
              </div>
              <div>
                <h4 className="font-black text-white mb-1">キャンセル・返金について</h4>
                <p>サービスの性質上、原則として返金には応じかねます。ただし、サービス提供前のキャンセルについては、手数料を差し引いた金額を返金いたします。詳細はお問い合わせください。</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm text-center font-semibold">
            © 2024-2025 訪問看護起業マスタープログラム All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Missing icon components
const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Gift = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

export default LandingPage;