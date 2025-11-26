import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // GitHub Pagesでのパス指定を正しく行うための設定
  plugins: [react()],
  build: {
    outDir: 'docs', // ⭐ ここが重要！ 出力先を docs フォルダに指定
  }
});