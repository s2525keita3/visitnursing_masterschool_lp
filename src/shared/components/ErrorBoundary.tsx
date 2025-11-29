import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

/**
 * エラーバウンダリコンポーネント
 * React 18のベストプラクティスに基づき、予期しないエラーをキャッチ
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // エラーログ：将来的にはSentry、LogRocket、Datadogなどのエラーログサービスに統合可能
    // Example: errorLoggingService.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-white p-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-brand-dark">
                エラーが発生しました
              </h2>
              <p className="text-brand-muted">
                ページの読み込み中に問題が発生しました。ページをリロードしてください。
              </p>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-brand-orange px-6 py-3 text-white font-semibold hover:bg-brand-orange/90 transition-colors"
              >
                ページをリロード
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

