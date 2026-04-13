import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  integrations: [
    react(),
    AstroPWA({
      manifest: {
        background_color: '#09090b',
        description: 'Ambient sounds for focus and calm.',
        display: 'standalone',
        icons: [
          {
            sizes: '192x192',
            src: '/assets/pwa/192.png',
            type: 'image/png',
            purpose: 'any',
          },
          {
            sizes: '512x512',
            src: '/assets/pwa/512x512.png',
            type: 'image/png',
            purpose: 'any',
          },
          {
            sizes: '512x512',
            src: '/assets/pwa/manifest-512x512.png',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        id: '/',
        name: 'Moodist',
        orientation: 'any',
        scope: '/',
        screenshots: [
          {
            sizes: '1280x720',
            src: '/assets/pwa/screenshots/desktop-wide.svg',
            type: 'image/svg+xml',
            form_factor: 'wide',
          },
          {
            sizes: '720x1280',
            src: '/assets/pwa/screenshots/mobile.svg',
            type: 'image/svg+xml',
          },
        ],
        short_name: 'Moodist',
        start_url: '/',
        theme_color: '#09090b',
      },
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*'],
        maximumFileSizeToCacheInBytes: Number.MAX_SAFE_INTEGER,
        navigateFallback: '/',
      },
    }),
  ],
});
