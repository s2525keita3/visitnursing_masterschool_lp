# システム構成レポート (System Architecture Report)

**プロジェクト名**: kigyo-lp (訪問看護ステーション開業支援LP)  
**作成日**: 2024年  
**フレームワーク**: React 19.2.0 + Vite 7.2.4 + TypeScript + Tailwind CSS v4.1.17

---

## 1. プロジェクト構造 (File Structure)

```
kigyo-lp/
├── public/                    # 静的ファイル（画像など）
├── src/
│   ├── App.tsx               # メインアプリケーション（エントリーポイント）
│   ├── main.tsx              # React DOM レンダリング
│   ├── index.css             # グローバルスタイル（Tailwind CSS v4設定含む）
│   ├── vite-env.d.ts         # Vite環境変数の型定義
│   │
│   ├── assets/               # アセットファイル
│   │
│   ├── content/              # コンテンツデータ（外部化）
│   │   ├── achievements.ts
│   │   ├── benefits.ts
│   │   ├── founder.ts
│   │   ├── hero.ts
│   │   ├── pricing.ts
│   │   ├── problems.ts
│   │   ├── program.ts
│   │   ├── roi.ts
│   │   ├── seminar.ts
│   │   └── testimonials.ts
│   │
│   ├── features/             # 機能別コンポーネント（ドメインロジック）
│   │   ├── achievements/
│   │   │   └── Achievements.tsx
│   │   ├── ai-advisor/
│   │   │   └── AiAdvisor.tsx
│   │   ├── benefits/
│   │   │   └── Benefits.tsx
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   ├── founder/
│   │   │   └── Founder.tsx
│   │   ├── hero/
│   │   │   └── Hero.tsx
│   │   ├── pricing/
│   │   │   └── PricingSection.tsx
│   │   ├── problems/
│   │   │   └── Problems.tsx
│   │   ├── program/
│   │   │   └── ProgramHighlights.tsx
│   │   ├── roi/
│   │   │   └── RoiSection.tsx
│   │   ├── seminar/
│   │   │   └── Seminar.tsx
│   │   └── testimonials/
│   │       └── Testimonials.tsx
│   │
│   └── shared/               # 共通コンポーネント・ユーティリティ
│       ├── components/       # 共通コンポーネント
│       │   ├── CtaSection.tsx
│       │   ├── ErrorBoundary.tsx
│       │   └── Metadata.tsx
│       │
│       ├── constants/        # 定数
│       │   ├── animations.ts
│       │   ├── styles.ts
│       │   └── ui.ts
│       │
│       ├── hooks/            # カスタムフック
│       │   ├── useAnimationDelays.ts
│       │   ├── useForm.ts
│       │   ├── useIntersectionObserver.ts
│       │   ├── useScrollListener.ts
│       │   ├── useStaggeredAnimation.ts
│       │   └── useThrottle.ts
│       │
│       ├── layout/          # レイアウトコンポーネント
│       │   ├── FloatingCTA.tsx
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   ├── ProgressBar.tsx
│       │   ├── ScrollToTopCTA.tsx
│       │   └── StickyBottomCTA.tsx
│       │
│       ├── types/           # 型定義
│       │   └── index.ts
│       │
│       ├── ui/              # UIコンポーネント（再利用可能）
│       │   ├── Card.tsx
│       │   ├── CTAButton.tsx
│       │   ├── ImageWithFallback.tsx
│       │   ├── Pill.tsx
│       │   ├── Section.tsx
│       │   └── SectionHeading.tsx
│       │
│       └── utils/           # ユーティリティ関数
│           ├── cn.ts
│           ├── metadata.ts
│           └── validation.ts
│
├── index.html               # HTMLテンプレート
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
├── vite.config.js           # Vite設定
└── README.md
```

---

## 2. エントリーポイントのコード (Main Entry)

### `src/App.tsx` (全コード)

```tsx
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
const ProgramHighlights = lazy(() => import("./features/program/ProgramHighlights"));
const RoiSection = lazy(() => import("./features/roi/RoiSection"));
const PricingSection = lazy(() => import("./features/pricing/PricingSection"));
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
        <ProgramHighlights />
        <RoiSection />
        <PricingSection />
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
```

### セクション配置順序

1. **ProgressBar** - スクロール進捗表示
2. **Header** - 固定ヘッダー
3. **Hero** - ファーストビュー（通常ロード）
4. **CtaSection** - CTAセクション（1回目）
5. **Problems** - 問題提起セクション（遅延読み込み）
6. **Benefits** - ベネフィットセクション（遅延読み込み）
7. **CtaSection** - CTAセクション（2回目）
8. **ProgramHighlights** - プログラム詳細（遅延読み込み）
9. **RoiSection** - ROI（投資対効果）セクション（遅延読み込み）
10. **PricingSection** - 価格提示セクション（遅延読み込み）
11. **Seminar** - セミナーセクション（遅延読み込み）
12. **ContactForm** - お問い合わせフォーム（遅延読み込み）
13. **CtaSection** - CTAセクション（3回目）
14. **Footer** - フッター
15. **StickyBottomCTA** - 固定CTAボタン

---

## 3. コンポーネントの実装状況 (Component Status)

### Features（機能別コンポーネント）

| ファイル名 | 状態 | 依存関係 | 使用状況 |
|-----------|------|---------|---------|
| `features/hero/Hero.tsx` | ✅ 実装済み | `lucide-react` (Sparkles) | ✅ 使用中 |
| `features/problems/Problems.tsx` | ✅ 実装済み | `lucide-react` (CheckCircle2) | ✅ 使用中 |
| `features/benefits/Benefits.tsx` | ✅ 実装済み | `lucide-react` (Play, ExternalLink) | ✅ 使用中 |
| `features/program/ProgramHighlights.tsx` | ✅ 実装済み | `lucide-react` (Sparkles, Award) | ✅ 使用中 |
| `features/roi/RoiSection.tsx` | ✅ 実装済み | `lucide-react` (Users, Landmark, Rocket, TrendingUp, ShieldCheck, ArrowRight) | ✅ 使用中 |
| `features/pricing/PricingSection.tsx` | ✅ 実装済み | `lucide-react` (Check) | ✅ 使用中 |
| `features/seminar/Seminar.tsx` | ✅ 実装済み | `lucide-react` | ✅ 使用中 |
| `features/contact/ContactForm.tsx` | ✅ 実装済み | `lucide-react` (Mail, Phone, MessageSquare) | ✅ 使用中 |
| `features/achievements/Achievements.tsx` | ✅ 実装済み | なし | ❌ 未使用 |
| `features/ai-advisor/AiAdvisor.tsx` | ✅ 実装済み | なし | ❌ 未使用 |
| `features/founder/Founder.tsx` | ✅ 実装済み | `lucide-react` | ❌ 未使用 |
| `features/testimonials/Testimonials.tsx` | ✅ 実装済み | なし | ❌ 未使用 |

### Shared Components（共通コンポーネント）

| ファイル名 | 状態 | 依存関係 | 使用状況 |
|-----------|------|---------|---------|
| `shared/components/CtaSection.tsx` | ✅ 実装済み | `lucide-react` | ✅ 使用中 |
| `shared/components/ErrorBoundary.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/components/Metadata.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/ui/Card.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/ui/CTAButton.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/ui/ImageWithFallback.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/ui/Pill.tsx` | ✅ 実装済み | なし | ❌ 未使用（削除予定） |
| `shared/ui/Section.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/ui/SectionHeading.tsx` | ✅ 実装済み | なし | ✅ 使用中 |

### Layout Components（レイアウトコンポーネント）

| ファイル名 | 状態 | 依存関係 | 使用状況 |
|-----------|------|---------|---------|
| `shared/layout/Header.tsx` | ✅ 実装済み | `lucide-react` | ✅ 使用中 |
| `shared/layout/Footer.tsx` | ✅ 実装済み | `lucide-react` (Mail, MapPin) | ✅ 使用中 |
| `shared/layout/ProgressBar.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/layout/StickyBottomCTA.tsx` | ✅ 実装済み | なし | ✅ 使用中 |
| `shared/layout/FloatingCTA.tsx` | ✅ 実装済み | なし | ❌ 未使用 |
| `shared/layout/ScrollToTopCTA.tsx` | ✅ 実装済み | なし | ❌ 未使用 |

### 外部ライブラリの使用状況

- **lucide-react** (v0.554.0): アイコンライブラリ（全コンポーネントで使用）
- **Framer Motion**: 未使用
- **Swiper**: 未使用
- **その他のアニメーションライブラリ**: 未使用（CSSアニメーションのみ）

---

## 4. デザインシステム設定 (Design System)

### Tailwind CSS v4 設定

**注意**: このプロジェクトは **Tailwind CSS v4** を使用しており、従来の `tailwind.config.ts` ファイルは使用されていません。代わりに、`src/index.css` 内で `@theme` ディレクティブを使用してテーマ設定を行っています。

### `src/index.css` の主要設定

```css
@import "tailwindcss";

/* Tailwind CSS v4 のテーマ設定 - フォントファミリーを上書き */
@theme {
  --font-sans: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* カスタムカラーの確実な適用のためのCSS変数 */
:root {
  /* バウムブルーム カラーパレット */
  --color-baum-50: #FFF8F0;
  --color-baum-100: #FFF5EB;
  --color-baum-200: #FFE6CC;
  --color-baum-300: #FFD6AD;
  --color-baum-400: #FFB570;
  --color-baum-500: #FF6B00;
  --color-baum-550: #FF8533;
  --color-baum-600: #E55A00;
  --color-baum-700: #CC5000;
  --color-baum-800: #A33F00;
  --color-baum-900: #6B2A00;
  
  /* テキストカラー */
  --color-text-primary: #000000;
  --color-text-secondary: #333333;
  --color-text-tertiary: #666666;
  --color-text-light: #999999;
  
  /* 背景カラー */
  --color-bg-cream: #FFF8F0;
  --color-bg-orange-light: #FFF5EB;
  
  /* シャドウ - より強い影で厚みを出す */
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-card-hover: 0 16px 48px rgba(0, 0, 0, 0.16);
  --shadow-cta: 0 12px 32px rgba(255, 107, 0, 0.35);
  --shadow-cta-hover: 0 16px 40px rgba(255, 107, 0, 0.45);
}

/* グラデーション */
.gradient-bg {
  background: linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%);
}

.gradient-cta {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* セクション背景グラデーション */
.section-gradient {
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 50%, #FFFFFF 100%);
}

.section-gradient-alt {
  background: linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 50%, #FFF8F0 100%);
}
```

### カスタムアニメーション

```css
/* アニメーション */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
}

@keyframes shakeSlow {
  0% {
    transform: translateX(0);
  }
  10%, 30%, 45% {
    transform: translateX(-3px);
  }
  20%, 40% {
    transform: translateX(3px);
  }
  50%, 100% {
    transform: translateX(0);
  }
}

@keyframes barGrow {
  from {
    width: 0%;
  }
  to {
    width: var(--target-width, 100%);
  }
}
```

### Tailwind CSS クラス使用例

プロジェクト全体で使用されている主要なTailwindクラス：

- **カラー**: `brand-orange`, `brand-dark`, `brand-muted`, `brand-light`
- **フォント**: `font-sans`, `font-black`, `font-bold`
- **スペーシング**: `px-4`, `py-20`, `gap-6`, `space-y-4`
- **レスポンシブ**: `md:`, `lg:`, `sm:` ブレークポイント
- **アニメーション**: `animate-fade-up`, `animate-shake-slow`, `animate-bar-grow`

---

## 5. 現在のエラー・課題 (Current Issues)

### ビルドエラー

**ステータス**: ✅ **エラーなし**

```bash
> npm run build
vite v7.2.4 building client environment for production...
✓ 1721 modules transformed.
```

ビルドは正常に完了しています。

### リンターエラー

**ステータス**: ✅ **エラーなし**

`read_lints` ツールで確認した結果、エラーは検出されていません。

### 型エラー

**ステータス**: ✅ **エラーなし**

TypeScriptの型チェックは正常に通過しています。

### 潜在的な課題

1. **未使用コンポーネント**
   - `features/achievements/Achievements.tsx` - 実装済みだが未使用
   - `features/ai-advisor/AiAdvisor.tsx` - 実装済みだが未使用
   - `features/founder/Founder.tsx` - 実装済みだが未使用
   - `features/testimonials/Testimonials.tsx` - 実装済みだが未使用
   - `shared/ui/Pill.tsx` - 実装済みだが未使用
   - `shared/layout/FloatingCTA.tsx` - 実装済みだが未使用
   - `shared/layout/ScrollToTopCTA.tsx` - 実装済みだが未使用

   **推奨**: 不要なコンポーネントは削除するか、必要に応じて `App.tsx` に追加することを検討してください。

2. **パフォーマンス最適化**
   - コード分割は適切に実装されています（Hero以外は遅延読み込み）
   - チャンク分割設定も `vite.config.js` で最適化されています

3. **依存関係**
   - 外部ライブラリは最小限（`lucide-react` のみ）
   - アニメーションライブラリは使用せず、CSSアニメーションで実装

---

## 追加情報

### 技術スタック

- **React**: 19.2.0
- **TypeScript**: 型安全性を確保
- **Vite**: 7.2.4（ビルドツール）
- **Tailwind CSS**: v4.1.17（CSSフレームワーク）
- **lucide-react**: 0.554.0（アイコンライブラリ）

### デプロイ環境

- **Vercel**: 自動デプロイ（GitHub連携）
- **Formspree**: フォーム送信（`https://formspree.io/f/mkglekko`）

### アーキテクチャパターン

- **Feature-based Architecture**: 機能別にコンポーネントを分割
- **Content Separation**: コンテンツデータを `content/` フォルダに外部化
- **Shared Components**: 再利用可能なコンポーネントを `shared/` に集約
- **Code Splitting**: パフォーマンス最適化のため遅延読み込みを実装

---

**レポート作成完了**

このレポートを基に、Geminiが最適な修正指示を行うことができます。


