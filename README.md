# kigyo-lp

訪問看護ステーション開業支援のランディングページ

## 技術スタック

- **Vite** - 高速なビルドツール
- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS v4** - ユーティリティファーストのCSSフレームワーク
- **lucide-react** - アイコンライブラリ

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:5173` にアクセスしてください。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
kigyo-lp/
├── src/
│   ├── App.tsx              # メインのAppコンポーネント
│   ├── main.tsx             # エントリーポイント
│   ├── index.css            # Tailwind CSSのインポート
│   └── components/          # Reactコンポーネント
│       ├── Hero.tsx
│       ├── Problems.tsx
│       ├── Benefits.tsx
│       ├── Achievements.tsx
│       ├── RoiSection.tsx
│       ├── Testimonials.tsx
│       ├── Founder.tsx
│       ├── Seminar.tsx
│       ├── AiAdvisor.tsx
│       ├── ContactForm.tsx
│       ├── Section.tsx
│       ├── Pill.tsx
│       └── CTAButton.tsx
├── public/                  # 静的ファイル（画像など）
├── index.html               # HTMLテンプレート
├── vite.config.js           # Vite設定
├── tailwind.config.ts       # Tailwind CSS設定（TypeScript）
├── tsconfig.json            # TypeScript設定
└── postcss.config.js        # PostCSS設定
```

## 開発

### コンポーネント構造

各セクションは独立したコンポーネントとして実装されています。`src/components/` フォルダ内に配置されています。

### スタイリング

Tailwind CSS v4を使用しています。`src/index.css` に `@import "tailwindcss";` が含まれているため、コンポーネント内でTailwindのクラスを直接使用できます。

カスタムカラーは `tailwind.config.ts` で定義されています：
- `brand-dark`, `brand-gold`, `brand-orange`, `brand-light`, `brand-muted`

### 環境変数

AIアドバイザー機能を使用する場合は、`.env` ファイルに以下を設定してください：

```
VITE_GEMINI_API_KEY=your_api_key_here
```
