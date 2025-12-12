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
    // NOTE: Windows環境でのビルド安定性を優先し、Rollup設定を最小化（必要になったら再導入）
    chunkSizeWarningLimit: 1000,
  },
  // パフォーマンス最適化：依存関係の事前バンドル
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
  },
});