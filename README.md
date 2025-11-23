# kigyo-lp

Vite、React、Tailwind CSS、lucide-reactを使用したプロジェクトです。

## セットアップ

このプロジェクトには以下の技術が含まれています：

- **Vite** - 高速なビルドツール
- **React** - UIライブラリ
- **Tailwind CSS v4** - ユーティリティファーストのCSSフレームワーク
- **lucide-react** - アイコンライブラリ

## インストール

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:5173` にアクセスしてください。

## ビルド

```bash
npm run build
```

## プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
kigyo-lp/
├── src/
│   ├── App.jsx          # メインのAppコンポーネント
│   ├── index.css        # Tailwind CSSのインポート
│   └── main.jsx         # エントリーポイント
├── public/              # 静的ファイル
├── index.html           # HTMLテンプレート
├── vite.config.js       # Vite設定
├── tailwind.config.js   # Tailwind CSS設定
└── postcss.config.js    # PostCSS設定
```

## 使用方法

### Tailwind CSS

`src/index.css` に `@import "tailwindcss";` が含まれているため、コンポーネント内でTailwindのクラスを直接使用できます。

例：
```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

### lucide-react

アイコンを使用するには、必要なアイコンをインポートして使用します。

例：
```jsx
import { Heart, Star, User } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <Heart className="w-6 h-6 text-red-500" />
      <Star className="w-6 h-6 text-yellow-500" />
      <User className="w-6 h-6 text-blue-500" />
    </div>
  );
}
```
