import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import process from 'process';
import * as dotenv from 'dotenv';

dotenv.config();

const BASE_API = process.env.VITE_BASE_API;
// const BASE_API = import.meta.env.VITE_BASE_API;
// console.log(BASE_API);

// const BASE_API = 'https://live.devnimble.com';
// const BASE_PREFIX = process.env.VITE_BASE_API_PREFIX;

export default defineConfig({
  base: '/contacts-test/',
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
        configure: proxy => {
          // Add necessary headers
          proxy.on('proxyReq', proxyReq => {
            // Set the Origin header to the URL of your deployed application
            proxyReq.setHeader(
              'Origin',
              'https://ljuzifer.github.io/contacts-test',
            );
          });
        },
      },
    },
  },
});