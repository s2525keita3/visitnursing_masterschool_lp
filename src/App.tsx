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
        <Hero />
        {/* 1. Heroセクション（FV）の直後：即決ユーザー向け */}
        <CtaSection />
        <Problems />
        <Benefits />
        {/* 2. 「解決策/ベネフィット」セクションの直後：購買意欲が高まったタイミング */}
        <CtaSection />
        <Seminar />
        <ContactForm />
        {/* 3. フッター直前の「クロージング」エリア：最終的なアクションを促す */}
        <CtaSection />
      </Suspense>
      <Footer />
      <StickyBottomCTA />
      {/* ScrollToTopCTAとFloatingCTAを削除：StickyBottomCTAのみで統一し、混乱を防止 */}
    </div>
  </ErrorBoundary>
);

export default App;


