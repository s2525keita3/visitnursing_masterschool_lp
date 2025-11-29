import { lazy, Suspense } from "react";
import ProgressBar from "./shared/layout/ProgressBar";
import Header from "./shared/layout/Header";
import Footer from "./shared/layout/Footer";
import StickyBottomCTA from "./shared/layout/StickyBottomCTA";
import { ErrorBoundary } from "./shared/components/ErrorBoundary";
import { Metadata } from "./shared/components/Metadata";
import CtaSection from "./shared/components/CtaSection";

// コード分割：初期ロードを最適化するため、Hero以外は遅延読み込み
// パフォーマンス最適化：Heroはファーストビューなので通常ロード（lazy削除）
import Hero from "./features/hero/Hero";
const Problems = lazy(() => import("./features/problems/Problems"));
const Benefits = lazy(() => import("./features/benefits/Benefits"));
const RoiSection = lazy(() => import("./features/roi/RoiSection"));
const PricingSection = lazy(() => import("./features/pricing/PricingSection"));
const Founder = lazy(() => import("./features/founder/Founder"));
const Testimonials = lazy(() => import("./features/testimonials/Testimonials"));
const Seminar = lazy(() => import("./features/seminar/Seminar"));
const ContactForm = lazy(() => import("./features/contact/ContactForm"));

/**
 * ローディングフォールバックコンポーネント
 * コード分割時のスムーズな読み込み体験を提供
 */
const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-orange border-t-transparent" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <Metadata
      title="看護師が疲弊しない「高収益ステーション」の作り方"
      description="訪問看護ステーションの開業から経営まで、データと戦略で成功を導く専門機関。無料セミナーで「経営の正解」を体感しませんか？"
    />
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-orange selection:text-white">
      <ProgressBar />
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        {/* 1. Hero (FV) */}
        <Hero />
        
        {/* 2. CtaSection (即決用) */}
        <CtaSection />
        
        {/* 3. Problems (共感) */}
        <Problems />
        
        {/* 4. Benefits (解決策: 動画あり) */}
        <Benefits />
        
        {/* 5. Testimonials (証拠: ※新規追加) - Benefitsの直後、gapを狭くし、動画の要約として機能 */}
        <Testimonials />
        
        {/* 6. CtaSection (中間CTA) */}
        <CtaSection />
        
        {/* 7. Founder (権威・信頼: ※新規追加・最重要) - 金額提示の前に「じょん」への信頼を確立 */}
        <Founder />
        
        {/* 9. RoiSection (論理: 投資対効果) */}
        <RoiSection />
        
        {/* 10. PricingSection (オファー: 88万円) */}
        <PricingSection />
        
        {/* 11. Seminar (リスクリバーサル) */}
        <Seminar />
        
        {/* 12. ContactForm (アクション) */}
        <ContactForm />
        
        {/* 13. CtaSection (最終クロージング) */}
        <CtaSection />
      </Suspense>
      <Footer />
      <StickyBottomCTA />
      {/* ScrollToTopCTAとFloatingCTAを削除：StickyBottomCTAのみで統一し、混乱を防止 */}
    </div>
  </ErrorBoundary>
);

export default App;


