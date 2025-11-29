import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

/**
 * フッターコンポーネント
 * プロフェッショナルなデザイン：信頼性、アクセシビリティ、SEO最適化を考慮
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-dark/10 bg-white pb-20 sm:pb-24">
      {/* pb-20 sm:pb-24: StickyBottomCTAの高さ分のパディングを追加 */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:py-16">
        {/* メインコンテンツエリア */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 組織情報 */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <h3 className="mb-3 text-lg font-bold text-brand-dark md:text-xl">
                一般社団法人 全国訪問看護経営研究協会
              </h3>
              <p className="text-sm leading-relaxed text-brand-muted md:text-base">
                訪問看護ステーションの開業から経営まで、データと戦略で成功を導く専門機関です。
              </p>
            </div>

            {/* 連絡先情報 */}
            <div className="space-y-2 pt-4">
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-sm text-brand-dark transition-colors hover:text-brand-orange md:text-base"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@example.com</span>
              </a>
              <a
                href="tel:03-1234-5678"
                className="flex items-center gap-2 text-sm text-brand-dark transition-colors hover:text-brand-orange md:text-base"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>03-1234-5678</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-brand-muted md:text-base">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>東京都千代田区〇〇1-2-3</span>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-brand-dark md:text-lg">
              コンテンツ
            </h4>
            <nav className="space-y-2">
              <a
                href="#benefits"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                5つのベネフィット
              </a>
              <a
                href="#achievements"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                実績・成果
              </a>
              <a
                href="#founder"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                講師紹介
              </a>
              <a
                href="#seminar"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                無料セミナー
              </a>
            </nav>
          </div>

          {/* その他リンク */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-brand-dark md:text-lg">
              その他
            </h4>
            <nav className="space-y-2">
              <a
                href="#contact"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                お問い合わせ
              </a>
              <a
                href="/privacy"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                プライバシーポリシー
              </a>
              <a
                href="/terms"
                className="block text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                利用規約
              </a>
              <a
                href="/sitemap"
                className="flex items-center gap-1 text-sm text-brand-muted transition-colors hover:text-brand-orange md:text-base"
              >
                <span>サイトマップ</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        {/* セパレーター */}
        <div className="my-8 border-t border-brand-dark/10" />

        {/* コピーライト */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-xs text-brand-muted md:text-sm">
            © {currentYear} 一般社団法人 全国訪問看護経営研究協会. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-muted transition-colors hover:text-brand-orange"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-muted transition-colors hover:text-brand-orange"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

