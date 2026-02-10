import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/<REPO_NAME>/', // Replace <REPO_NAME> with your GitHub repository name
  build: {
    outDir: 'dist',
  },
});