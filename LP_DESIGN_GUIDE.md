# ランディングページ（LP）デザインガイドライン・構成説明書

## 1. 概要

このドキュメントは、同様のランディングページを今後作成する際の**デザインシステム**と**構成の大枠**を定義したガイドラインです。

---

## 2. デザインシステム

### 2.1 カラーパレット

#### プライマリカラー（ブランドカラー）
```css
/* オレンジ系（アクション・強調） */
--color-brand-orange: #FF6B00;
--color-brand-orange-light: #FF8533;
--color-brand-orange-dark: #E55A00;
```

#### テキストカラー
```css
/* 階層的なテキストカラー */
--color-text-primary: #000000;      /* メインテキスト */
--color-text-secondary: #333333;    /* サブテキスト */
--color-text-tertiary: #666666;     /* 補助テキスト */
--color-text-muted: #999999;        /* 弱いテキスト */
```

#### 背景カラー
```css
/* 背景色 */
--color-bg-cream: #FFF8F0;          /* クリーム背景 */
--color-bg-white: #FFFFFF;          /* 白背景 */
```

#### アクセントカラー
```css
/* 成功・CTA */
--color-emerald: #06C755;           /* エメラルドグリーン */

/* エラー */
--color-red: #DC2626;               /* レッド */

/* ハイライト */
--color-yellow: #FCD34D;            /* イエロー */
```

#### Tailwind CSSクラス
```typescript
// 使用例
className="text-brand-orange"      // オレンジテキスト
className="bg-brand-light"        // ライト背景
className="text-brand-muted"       // ミュートテキスト
className="border-brand-dark/10"   // ダークボーダー（10%透明度）
```

### 2.2 タイポグラフィ

#### フォントファミリー
```css
/* メインフォント */
font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

#### フォントサイズスケール

| 用途 | モバイル | タブレット | デスクトップ | Tailwindクラス |
|------|---------|-----------|------------|---------------|
| メインタイトル | 36px | 48px | 60px | `text-4xl md:text-5xl lg:text-6xl` |
| セクションタイトル | 30px | 36px | 48px | `text-3xl md:text-4xl lg:text-5xl` |
| カードタイトル | 20px | 24px | - | `text-xl md:text-2xl` |
| 本文 | 16px | 18px | - | `text-base md:text-lg` |
| 小見出し | 14px | 16px | - | `text-sm md:text-base` |

#### フォントウェイト
- **見出し**: `font-black` (900) - 最大のインパクト
- **強調**: `font-bold` (700) - 重要なテキスト
- **本文**: `font-medium` (500) / `font-semibold` (600) - 通常テキスト

#### 行間
- **タイトル**: `leading-tight` (1.25) - コンパクト
- **本文**: `leading-relaxed` (1.625) - 読みやすさ重視

### 2.3 スペーシングシステム

#### セクションパディング
```typescript
// 標準セクション
className="px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:py-40"

// パディング値
// モバイル: px-4 (16px), py-20 (80px)
// タブレット: sm:px-6 (24px), sm:py-24 (96px)
// デスクトップ: md:px-8 (32px), md:py-32 (128px), lg:py-40 (160px)
```

#### 要素間隔
```typescript
// カード間隔
className="gap-6 md:gap-8"  // 24px → 32px

// コンテンツ内間隔
className="space-y-4 md:space-y-6"  // 16px → 24px

// セクション間隔
className="space-y-12 md:space-y-16"  // 48px → 64px
```

### 2.4 シャドウシステム

#### カードシャドウ
```css
/* 通常 */
--shadow-card: 0 8px 32px rgba(0, 0, 0, 0.12);

/* ホバー */
--shadow-card-hover: 0 16px 48px rgba(0, 0, 0, 0.16);
```

#### CTAシャドウ
```css
/* 通常 */
--shadow-cta: 0 12px 32px rgba(255, 107, 0, 0.35);

/* ホバー */
--shadow-cta-hover: 0 16px 40px rgba(255, 107, 0, 0.45);
```

#### Tailwindクラス
```typescript
className="shadow-card hover:shadow-card-hover"
className="shadow-cta hover:shadow-cta-hover"
```

### 2.5 ボーダーシステム

#### 角丸（Border Radius）
```typescript
// カード
className="rounded-3xl"  // 24px

// ボタン（完全な円形）
className="rounded-[50px]"  // 50px

// 入力フィールド
className="rounded-2xl"  // 16px

// 小要素
className="rounded-lg"  // 8px
className="rounded-xl"  // 12px
```

#### ボーダー幅
```typescript
className="border"        // 1px
className="border-2"       // 2px
className="border-[3px]"   // 3px（特典ボックスなど）
```

### 2.6 アニメーションシステム

#### フェードインアニメーション
```css
/* fade-up: 下から上にフェードイン */
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

/* 使用例 */
className="animate-fade-up"
```

#### 段階的アニメーション
```typescript
// アニメーション遅延定数
const ANIMATION_DELAYS = {
  BASE: 0.1,        // ベース遅延
  STAGGER: 0.1,     // 段階的遅延間隔
  // ...
};

// カスタムフック使用
const animationStyle = useStaggeredAnimation(
  ANIMATION_DELAYS.BASE,
  ANIMATION_DELAYS.STAGGER,
  index
);
```

#### 特殊アニメーション
```css
/* shake-slow: CTAボタンのゆっくりした揺れ */
@keyframes shakeSlow {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

/* 使用例 */
className="animate-shake-slow"  // 2秒間隔で繰り返し
```

---

## 3. ページ構成の大枠

### 3.1 標準的なLP構成（CRO最適化）

```
┌─────────────────────────────────────┐
│ 1. Header（固定）                   │
│    - 組織名/サービス名              │
│    - CTAボタン                      │
├─────────────────────────────────────┤
│ 2. ProgressBar（スクロール進捗）    │
├─────────────────────────────────────┤
│ 3. Hero（ファーストビュー）         │
│    - 背景画像                       │
│    - メインメッセージ               │
│    - CTAボタン                      │
├─────────────────────────────────────┤
│ 4. CTAセクション（即決ユーザー向け） │
│    - 特典画像                       │
│    - CTAボタン                      │
├─────────────────────────────────────┤
│ 5. Problems（問題提起）              │
│    - 課題の列挙                     │
│    - CTAボタン                      │
├─────────────────────────────────────┤
│ 6. Benefits（解決策・価値提示）      │
│    - ベネフィットリスト             │
│    - ソーシャルプルーフ             │
│    - 実績・成果                     │
├─────────────────────────────────────┤
│ 7. CTAセクション（購買意欲高揚後）  │
│    - 特典画像                       │
│    - CTAボタン                      │
├─────────────────────────────────────┤
│ 8. Program/Details（詳細情報）       │
│    - プログラム内容                │
│    - カリキュラム                   │
│    - 特典・証書                     │
├─────────────────────────────────────┤
│ 9. Seminar/Event（イベント案内）    │
│    - 無料セミナー情報               │
│    - 日程・テーマ                   │
├─────────────────────────────────────┤
│ 10. ContactForm（お問い合わせ）      │
│     - フォーム                      │
│     - バリデーション                │
├─────────────────────────────────────┤
│ 11. CTAセクション（最終クロージング） │
│     - 特典画像                      │
│     - CTAボタン                     │
├─────────────────────────────────────┤
│ 12. Footer（会社情報）               │
│     - 組織情報                      │
│     - 連絡先                        │
│     - ナビゲーション                │
└─────────────────────────────────────┘
│ 13. StickyBottomCTA（固定CTA）       │
│     - 画面下部固定                  │
└─────────────────────────────────────┘
```

### 3.2 CTA配置戦略

#### 戦略的なCTA配置ポイント
1. **Hero直後**: 即決ユーザー向け
2. **Benefits後**: 購買意欲が高まったタイミング
3. **ContactForm前**: 最終的なクロージング
4. **固定CTA**: 常にアクセス可能（画面下部）

#### CTAデザイン原則
- **色**: オレンジ（`brand-orange`）で目立たせる
- **サイズ**: 最小44px（タッチターゲット）
- **アニメーション**: `shake-slow`で注意を引く
- **シャドウ**: 強いシャドウで浮き上がらせる

---

## 4. コンポーネント設計パターン

### 4.1 セクションコンポーネント

#### 基本構造
```typescript
import Section from "../../shared/ui/Section";
import { useStaggeredAnimation } from "../../shared/hooks/useStaggeredAnimation";
import { ANIMATION_DELAYS } from "../../shared/constants/animations";

const MySection = () => {
  const titleAnimationStyle = useStaggeredAnimation(
    ANIMATION_DELAYS.BASE,
    0,
    0
  );

  return (
    <Section id="my-section" tone="surface">
      <div className="mx-auto max-w-7xl">
        {/* タイトル */}
        <div className="mb-12 text-center animate-fade-up md:mb-16">
          <h2 className="font-sans text-4xl font-black leading-tight tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            <span className="block">メインタイトル</span>
            <span className="block text-brand-orange">強調部分</span>
          </h2>
        </div>

        {/* コンテンツ */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* カードなど */}
        </div>
      </div>
    </Section>
  );
};
```

### 4.2 カードコンポーネント

#### 基本パターン
```typescript
import { Card } from "../../shared/ui/Card";

<Card
  className="bg-gradient-to-br from-white to-brand-light/20 hover-lift border-2 border-brand-dark/10"
  padding="lg"
  style={animationStyle}
>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-brand-dark md:text-2xl">
      タイトル
    </h3>
    <p className="text-sm leading-relaxed text-brand-muted md:text-base">
      説明文
    </p>
  </div>
</Card>
```

### 4.3 CTAボタンパターン

#### 基本パターン
```typescript
import CTAButton from "../../shared/ui/CTAButton";

<CTAButton
  href="#contact"
  size="large"
  className="w-full max-w-lg text-xl font-black shadow-[0_12px_48px_rgba(255,107,0,0.6)] animate-shake-slow sm:w-auto sm:min-w-[400px] md:text-2xl md:min-h-[64px]"
>
  無料説明会に申し込む
</CTAButton>
```

---

## 5. コンテンツ管理パターン

### 5.1 コンテンツファイル構造

```typescript
// src/content/my-section.ts

export type MyItem = {
  title: string;
  description: string;
  image?: string;
};

export const myItems: MyItem[] = [
  {
    title: "タイトル1",
    description: "説明文1",
    image: "/image1.png",
  },
  // ...
];
```

### 5.2 コンポーネントでの使用

```typescript
import { myItems, type MyItem } from "../../content/my-section";

const MySection = () => {
  return (
    <Section>
      {myItems.map((item: MyItem, index) => (
        <Card key={item.title}>
          {/* コンテンツ */}
        </Card>
      ))}
    </Section>
  );
};
```

---

## 6. レスポンシブデザイン原則

### 6.1 ブレークポイント

| サイズ | ブレークポイント | 用途 |
|--------|----------------|------|
| モバイル | デフォルト（< 640px） | スマートフォン |
| タブレット | `sm:` (640px+) | タブレット |
| デスクトップ | `md:` (768px+) | デスクトップ |
| 大型デスクトップ | `lg:` (1024px+) | 大型画面 |

### 6.2 レスポンシブパターン

#### グリッドレイアウト
```typescript
// モバイル: 1列、デスクトップ: 3列
className="grid gap-6 md:grid-cols-3"

// モバイル: 1列、タブレット: 2列、デスクトップ: 3列
className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
```

#### テキストサイズ
```typescript
// レスポンシブフォントサイズ
className="text-4xl md:text-5xl lg:text-6xl"
```

#### パディング・マージン
```typescript
// レスポンシブスペーシング
className="px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:py-40"
```

---

## 7. パフォーマンス最適化パターン

### 7.1 コード分割

```typescript
// Heroは通常ロード（ファーストビュー）
import Hero from "./features/hero/Hero";

// その他は遅延読み込み
const Problems = lazy(() => import("./features/problems/Problems"));
const Benefits = lazy(() => import("./features/benefits/Benefits"));

// Suspenseでラップ
<Suspense fallback={<LoadingFallback />}>
  <Hero />
  <Problems />
  <Benefits />
</Suspense>
```

### 7.2 画像最適化

```typescript
// 優先画像（Hero背景など）
<ImageWithFallback
  src="/hero-bg.png"
  alt=""
  priority={true}
/>

// 遅延読み込み画像
<ImageWithFallback
  src="/benefit1.png"
  alt="ベネフィット1"
  priority={false}
/>
```

### 7.3 スクロール最適化

```typescript
// 統合スクロールリスナー
import { useScrollListener } from "../hooks/useScrollListener";

useScrollListener(() => {
  // スクロール処理
});
```

---

## 8. アクセシビリティガイドライン

### 8.1 タッチターゲット

```typescript
// 最小サイズ: 44px（WCAG推奨）
className="min-h-[44px]"

// 推奨サイズ: 48px
className="min-h-[48px]"

// 大きなターゲット: 56px
className="min-h-[56px]"
```

### 8.2 ARIA属性

```typescript
// ラベル
aria-label="ボタン名"

// エラー状態
aria-invalid={!!errors.field}
aria-describedby={errors.field ? "field-error" : undefined}

// ロール
role="alert"  // エラーメッセージ
role="progressbar"  // プログレスバー
```

### 8.3 キーボードナビゲーション

- すべてのインタラクティブ要素がキーボードで操作可能
- フォーカスリングを視覚的に明確に表示
- タブ順序が論理的

---

## 9. CRO（コンバージョン率最適化）原則

### 9.1 視覚的階層

1. **メインタイトル**: 最大サイズ、オレンジ強調
2. **セクションタイトル**: 中サイズ、ダーク
3. **本文**: 標準サイズ、ミュート
4. **注釈**: 小サイズ、ミュート

### 9.2 余白（Whitespace）

- **セクション間**: 80px以上（モバイル）、160px以上（デスクトップ）
- **カード間**: 24px以上
- **コンテンツ内**: 16px以上

### 9.3 コントラスト

- **テキストと背景**: 4.5:1以上のコントラスト比
- **CTAボタン**: 強いシャドウで浮き上がらせる
- **エラー**: 赤色で明確に表示

### 9.4 緊急性の創出

- **特典ボックス**: 緑色背景で目立たせる
- **バッジ**: 「※先着10名限定」など
- **アニメーション**: shakeアニメーションで注意を引く

---

## 10. アーキテクチャパターン

### 10.1 ディレクトリ構造

```
src/
├── features/           # 機能別コンポーネント（ドメインロジック）
│   ├── hero/
│   │   └── Hero.tsx
│   ├── problems/
│   │   └── Problems.tsx
│   └── ...
├── shared/             # 共通コンポーネント・ユーティリティ
│   ├── components/     # 共通コンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   ├── ui/             # UIコンポーネント（再利用可能）
│   ├── hooks/          # カスタムフック
│   ├── constants/      # 定数
│   ├── types/          # 型定義
│   └── utils/          # ユーティリティ関数
├── content/            # コンテンツデータ（外部化）
└── App.tsx             # メインアプリケーション
```

### 10.2 設計原則

#### DRY原則（Don't Repeat Yourself）
- 重複コードを共通コンポーネント・フックに抽出
- 定数を`constants/`に集約

#### 関心の分離
- コンテンツは`content/`に分離
- ロジックはコンポーネントに
- スタイルはTailwindクラスで

#### 型安全性
- すべてのデータ構造にTypeScript型定義
- `any`型を排除

#### パフォーマンス
- コード分割（lazy loading）
- メモ化（React.memo, useMemo, useCallback）
- イベントthrottle

---

## 11. 実装チェックリスト

### 11.1 新規セクション追加時

- [ ] `src/content/`にコンテンツデータを作成
- [ ] `src/features/`にコンポーネントを作成
- [ ] `App.tsx`にセクションを追加
- [ ] 型定義を`src/shared/types/`に追加
- [ ] アニメーション遅延を`ANIMATION_DELAYS`に追加
- [ ] レスポンシブ対応を確認
- [ ] アクセシビリティ属性を追加
- [ ] パフォーマンス最適化（lazy loadingなど）

### 11.2 デザイン実装時

- [ ] カラーパレットに準拠
- [ ] タイポグラフィスケールに準拠
- [ ] スペーシングシステムに準拠
- [ ] シャドウシステムに準拠
- [ ] ボーダーシステムに準拠
- [ ] アニメーションを適用
- [ ] レスポンシブ対応

### 11.3 CRO最適化時

- [ ] 視覚的階層を明確に
- [ ] 余白を適切に確保
- [ ] コントラストを確認
- [ ] CTAボタンを戦略的に配置
- [ ] 緊急性を創出
- [ ] ソーシャルプルーフを追加

---

## 12. よくあるパターン

### 12.1 タイトルパターン

```typescript
// 2行構成（1行目: ダーク、2行目: オレンジ）
<h2 className="font-sans text-4xl font-black leading-tight tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
  <span className="block">メインタイトル</span>
  <span className="block text-brand-orange">強調部分</span>
</h2>
```

### 12.2 カードグリッドパターン

```typescript
<div className="grid gap-6 md:grid-cols-3">
  {items.map((item, index) => {
    const animationStyle = useStaggeredAnimation(
      ANIMATION_DELAYS.BASE,
      ANIMATION_DELAYS.STAGGER,
      index
    );

    return (
      <Card key={item.id} style={animationStyle}>
        {/* コンテンツ */}
      </Card>
    );
  })}
</div>
```

### 12.3 CTAセクションパターン

```typescript
<section className="bg-emerald-500 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
      {/* 特典画像 */}
      <ImageWithFallback src="/present.png" alt="特典" />
      
      {/* テキストとCTA */}
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <h2 className="text-2xl font-black text-white md:text-3xl">
          特典タイトル
        </h2>
        <CTAButton href="#contact" size="large">
          無料説明会に申し込む
        </CTAButton>
      </div>
    </div>
  </div>
</section>
```

---

## 13. トラブルシューティング

### 13.1 よくある問題

#### フォントが適用されない
- `src/index.css`の`@theme`ディレクティブを確認
- Google Fontsの読み込みを確認（`index.html`）

#### アニメーションが動作しない
- `ANIMATION_DELAYS`定数を確認
- `useStaggeredAnimation`フックの使用を確認

#### レスポンシブが効かない
- Tailwindのブレークポイントを確認（`sm:`, `md:`, `lg:`）
- ビルドを再実行

#### 画像が表示されない
- `public/`フォルダに画像があるか確認
- `ImageWithFallback`の`src`パスを確認（`/`で始まる）

---

## 14. 拡張ガイド

### 14.1 新規セクション追加

1. `src/content/`にコンテンツデータを作成
2. `src/features/`にコンポーネントを作成
3. `App.tsx`にセクションを追加
4. 必要に応じて型定義を追加

### 14.2 新規コンポーネント追加

1. `src/shared/ui/`にUIコンポーネントを作成
2. `React.memo`でメモ化
3. `cn`ユーティリティでクラス結合
4. TypeScript型定義を厳格に

### 14.3 新規フック追加

1. `src/shared/hooks/`にフックを作成
2. `useCallback`、`useMemo`で最適化
3. 依存配列を適切に設定

---

## 15. 参考資料

- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **React 19**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vite**: https://vitejs.dev/guide/
- **Formspree**: https://formspree.io/documentation
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/

---

## 16. まとめ

このガイドラインに従うことで、**一貫性のある**、**パフォーマンスが高い**、**CRO最適化された**ランディングページを効率的に作成できます。

### 重要なポイント

1. **デザインシステムを守る**: カラー、タイポグラフィ、スペーシングを統一
2. **構成パターンを活用**: 標準的なLP構成に従う
3. **コンテンツを外部化**: `content/`フォルダで管理
4. **パフォーマンスを意識**: コード分割、メモ化、最適化
5. **アクセシビリティを確保**: WCAG 2.1準拠
6. **CROを最適化**: 視覚的階層、余白、CTA配置




