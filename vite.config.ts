import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Parking ITQ',
        short_name: 'Parking',
        start_url: '/',
        display: 'standalone',
        background_color: '#E5700F',
        theme_color: '#E5700F',
        icons: [
          {
            "src": "public/ITQ_LOGO.svg",
            "sizes": "192x192",
            "type": "image/svg+xml"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
