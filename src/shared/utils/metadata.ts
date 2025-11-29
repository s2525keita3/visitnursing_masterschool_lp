/**
 * メタデータ管理ユーティリティ
 * OGP、Twitter Cards、基本メタデータを動的に生成
 */

export type MetadataConfig = {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
  type?: "website" | "article";
};

/**
 * メタデータを生成する関数
 */
export const generateMetadata = (config: MetadataConfig) => {
  const {
    title,
    description,
    ogImage = "/og-image.webp",
    url = typeof window !== "undefined" ? window.location.href : "",
    type = "website",
  } = config;

  return {
    title,
    description,
    ogImage,
    url,
    type,
  };
};

/**
 * 構造化データ（JSON-LD）を生成
 */
export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "一般社団法人 全国訪問看護経営研究協会",
    description:
      "訪問看護ステーションの開業から経営まで、データと戦略で成功を導く専門機関",
    url: typeof window !== "undefined" ? window.location.origin : "",
  };
};

