import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  build: {
    // パフォーマンス最適化：チャンク分割とミニファイ設定
    rollupOptions: {
      output: {
        manualChunks: {
          // ベンダーチャンク：大きなライブラリを分離
          vendor: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
      },
    },
    // チャンクサイズ警告の閾値を上げる（大きな画像アセットがあるため）
    chunkSizeWarningLimit: 1000,
    // ミニファイ設定（esbuildを使用、より高速）
    minify: "esbuild",
  },
  // パフォーマンス最適化：依存関係の事前バンドル
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
  },
});