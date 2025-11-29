import { memo, useState, type ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackText?: string;
  priority?: boolean; // ファーストビュー用画像は優先読み込み
};

/**
 * 画像エラーハンドリングを統一するコンポーネント
 * パフォーマンス最適化：優先度に応じた読み込み戦略、React.memoで不要な再レンダリングを防止
 */
export const ImageWithFallback = memo<ImageWithFallbackProps>(
  ({
    src,
    alt,
    fallbackText = "画像を追加",
    className = "",
    priority = false,
    loading,
    ...props
  }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
      return (
        <div
          className={cn(
            "flex items-center justify-center bg-gray-100 text-sm text-gray-400",
            className
          )}
          role="img"
          aria-label={alt || fallbackText}
        >
          {fallbackText}
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading || (priority ? "eager" : "lazy")}
        decoding="async"
        onError={() => setHasError(true)}
        {...props}
      />
    );
  }
);

ImageWithFallback.displayName = "ImageWithFallback";

