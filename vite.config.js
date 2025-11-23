import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/visitnursing_masterschool_lp/', // ⬅️ この行が必須！
  plugins: [react()],
});