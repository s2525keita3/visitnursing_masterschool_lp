import { useEffect, useRef } from "react";
import { generateMetadata, generateStructuredData } from "../utils/metadata";

type MetadataProps = {
  title: string;
  description: string;
  ogImage?: string;
};

/**
 * メタデータ管理コンポーネント
 * パフォーマンス最適化：初回レンダリング時のみ実行（useRefでフラグ管理）
 */
export const Metadata = ({
  title,
  description,
  ogImage = "/og-image.png",
}: MetadataProps) => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    // 初回のみ実行（パフォーマンス最適化：useRefでフラグ管理）
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    const metadata = generateMetadata({ title, description, ogImage });
    const url =
      typeof window !== "undefined" ? window.location.href : "";

    // タイトル更新
    document.title = title;

    // メタタグの更新/追加
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 基本メタタグ
    updateMetaTag("description", metadata.description);
    updateMetaTag("keywords", "訪問看護,開業支援,起業,経営");

    // OGP
    updateMetaTag("og:title", metadata.title, true);
    updateMetaTag("og:description", metadata.description, true);
    updateMetaTag("og:image", metadata.ogImage, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", metadata.type, true);
    updateMetaTag("og:site_name", "訪問看護経営研究協会", true);

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", metadata.title);
    updateMetaTag("twitter:description", metadata.description);
    updateMetaTag("twitter:image", metadata.ogImage);

    // 構造化データ（JSON-LD）
    const structuredData = generateStructuredData();
    let scriptElement = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
    // 依存配列は空にして初回のみ実行（title/description/ogImageの変更は無視）
  }, []);

  return null;
};

