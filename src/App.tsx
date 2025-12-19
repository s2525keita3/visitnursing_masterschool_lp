import { lazy, Suspense } from "react";
import ProgressBar from "./shared/layout/ProgressBar";
import Header from "./shared/layout/Header";
import Footer from "./shared/layout/Footer";
import StickyBottomCTA from "./shared/layout/StickyBottomCTA";
import { ErrorBoundary } from "./shared/components/ErrorBoundary";
import { Metadata } from "./shared/components/Metadata";

// Heroはファーストビューなので通常ロード
import Hero from "./features/hero/Hero";
// 新しく作成した導入セクション
import Introduction from "./features/hero/Introduction";

const CtaSection = lazy(() => import("./shared/components/CtaSection"));
const Problems = lazy(() => import("./features/problems/Problems"));
const Benefits = lazy(() => import("./features/benefits/Benefits"));
const RoiSection = lazy(() => import("./features/roi/RoiSection"));
const PricingSection = lazy(() => import("./features/pricing/PricingSection"));
const Testimonials = lazy(() => import("./features/testimonials/Testimonials"));
const Seminar = lazy(() => import("./features/seminar/Seminar"));
const ContactForm = lazy(() => import("./features/contact/ContactForm"));

// ※ FounderセクションはIntroductionに統合されたため一旦非表示にするか、必要に応じて調整

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-orange border-t-transparent" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <Metadata
      title="訪問看護ステーション 黒字化のロードマップ"
      description="訪問看護ステーションの開業から経営まで、データと戦略で成功を導く専門機関。無料個別相談で、あなたの状況に合わせた「次の一手」を整理しませんか？"
    />
    <div className="min-h-screen w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-[#1E66D0] selection:text-white">
      <ProgressBar />
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        {/* 1. 新Hero (FV) - クジラスナイパー風 */}
        <Hero />
        
        {/* 2. 新導入セクション - 実績・プロフィール・特長 */}
        <Introduction />
        
        {/* 3. CtaSection (即決用) */}
        <CtaSection />
        
        {/* 4. Problems (共感) */}
        <Problems />
        
        {/* 5. Benefits (解決策) */}
        <Benefits />
        
        {/* 6. Testimonials (証拠) */}
        <Testimonials />
        
        {/* 7. RoiSection (論理: 投資対効果) */}
        <RoiSection />
        
        {/* 8. PricingSection (オファー) */}
        <PricingSection />
        
        {/* 9. Seminar (リスクリバーサル) */}
        <Seminar />
        
        {/* 10. ContactForm (アクション) */}
        <ContactForm />
        
        {/* 11. CtaSection (最終クロージング) */}
        <CtaSection />
      </Suspense>
      <Footer />
      <StickyBottomCTA />
    </div>
  </ErrorBoundary>
);

export default App;
