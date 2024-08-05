import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as dotenv from 'dotenv';

dotenv.config();

const BASE_API = process.env.VITE_BASE_API;

export default defineConfig({
  base: '/contacts-test',
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
        target: BASE_API,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api\/v1/, '/api/v1'),
      },
    },
  },
});
