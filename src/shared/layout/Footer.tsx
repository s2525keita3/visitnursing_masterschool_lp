import { Mail, MapPin, ExternalLink } from "lucide-react";

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
              <div className="space-y-2 text-sm leading-relaxed text-brand-muted md:text-base">
                <p>代表者: 代表理事 渋谷 慶太</p>
              </div>
            </div>

            {/* 所在地 */}
            <div className="space-y-2 pt-4">
              <div className="flex items-start gap-2 text-sm text-brand-muted md:text-base">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p>〒231-0064</p>
                  <p>神奈川県横浜市中区野毛町2-90</p>
                  <p>桜木町スカイハイツ405</p>
                </div>
              </div>
            </div>

            {/* 事業内容 */}
            <div className="space-y-2 pt-4">
              <h4 className="text-sm font-semibold text-brand-dark md:text-base">
                事業内容
              </h4>
              <ul className="space-y-1 text-sm leading-relaxed text-brand-muted md:text-base">
                <li>・訪問看護経営に関する研修・セミナーの実施</li>
                <li>・訪問看護に関する研究活動</li>
                <li>・訪問看護事業所への経営支援</li>
              </ul>
            </div>

            {/* 連絡先情報 */}
            <div className="space-y-3 pt-4">
              <a
                href="mailto:info@jnhc-mra.or.jp"
                className="flex items-center gap-2 text-sm text-brand-dark transition-colors hover:text-brand-orange md:text-base"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@jnhc-mra.or.jp</span>
              </a>
              {/* 公式LINE：タップしやすいボタンスタイル */}
              <a
                href="https://line.me/R/ti/p/@175zzojf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-[#06C755] bg-[#06C755] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#05B048] hover:shadow-md active:scale-95 touch-manipulation"
                aria-label="公式LINEを開く"
              >
                公式LINE
              </a>
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
        <div className="text-center">
          <p className="text-xs text-brand-muted md:text-sm">
            © {currentYear} 一般社団法人 全国訪問看護経営研究協会. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

