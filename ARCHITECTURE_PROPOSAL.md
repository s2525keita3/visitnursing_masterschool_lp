# プロジェクト構造リファクタリング提案

## 1. 現状の課題（3行要約）

1. **機能とUIコンポーネントの混在**: ビジネスロジックを持つ機能コンポーネント（Hero, Problems等）と再利用可能なUIコンポーネント（CTAButton, Pill等）が同じ階層に配置され、責務が不明確。
2. **ドメインの分離不足**: 各機能セクションが独立しているにも関わらず、フラットな構造のため機能単位での変更影響範囲が把握しにくい。
3. **依存関係の可視性欠如**: 共通UIコンポーネントと機能コンポーネントの依存関係が構造から読み取れず、変更時の影響分析が困難。

## 2. 提案する新しいディレクトリ構造

```
kigyo-lp/
├── src/
│   ├── main.tsx                    # エントリーポイント
│   ├── App.tsx                     # ルートコンポーネント
│   ├── index.css                   # グローバルスタイル
│   │
│   ├── features/                   # 機能（ドメイン）単位のコンポーネント
│   │   ├── hero/
│   │   │   └── Hero.tsx
│   │   ├── problems/
│   │   │   └── Problems.tsx
│   │   ├── benefits/
│   │   │   └── Benefits.tsx
│   │   ├── achievements/
│   │   │   └── Achievements.tsx
│   │   ├── roi/
│   │   │   └── RoiSection.tsx
│   │   ├── testimonials/
│   │   │   └── Testimonials.tsx
│   │   ├── founder/
│   │   │   └── Founder.tsx
│   │   ├── seminar/
│   │   │   └── Seminar.tsx
│   │   ├── ai-advisor/
│   │   │   └── AiAdvisor.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   │
│   ├── shared/                     # 共通UIコンポーネント（再利用可能）
│   │   ├── ui/
│   │   │   ├── CTAButton.tsx
│   │   │   ├── Pill.tsx
│   │   │   └── Section.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── ProgressBar.tsx
│   │
│   └── assets/                     # 静的アセット
│
├── public/                          # 公開静的ファイル
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── tsconfig.json
└── tsconfig.node.json
```

## 3. 構成の利点

### 凝集度の向上
- **機能単位のグルーピング**: 各機能が独立したフォルダに配置され、関連するコードが近接
- **責務の明確化**: 機能コンポーネントとUIコンポーネントが明確に分離
- **可読性の向上**: ファイルの目的がディレクトリ構造から即座に理解可能

### 結合度の低減
- **依存関係の明確化**: `shared/`配下のコンポーネントは機能から独立
- **変更影響範囲の限定**: 機能の変更が他の機能に影響しない構造
- **テスト容易性**: 機能単位でのテストが容易

### スケーラビリティ
- **新機能の追加が容易**: `features/`配下に新しいフォルダを追加するだけ
- **共通UIの拡張が容易**: `shared/ui/`に新しいコンポーネントを追加
- **チーム開発の効率化**: 機能ごとに担当を分けやすい構造

## 4. 実行手順

### Step 1: ドライランで確認
```bash
python reorganize.py --dry-run
```

### Step 2: 実際の実行
```bash
python reorganize.py
```

### Step 3: 動作確認
```bash
npm run dev
```

### Step 4: テスト
```bash
npm run build
```

## 5. 注意事項

- **Gitコミット**: 実行前に変更をコミット推奨
- **バックアップ**: 重要な変更がある場合は事前バックアップ
- **ログ確認**: `reorganize_log_*.json`で実行内容を確認可能

