import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// const BASE_API = process.env.VITE_BASE_API;
// const BASE_PREFIX = process.env.VITE_BASE_API_PREFIX;

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://live.devnimble.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api\/v1/, '/api/v1'),
      },
    },
  },
});
