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
            sizes: '512x512',
            src: '/assets/pwa/icon.svg',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            sizes: '512x512',
            src: '/assets/pwa/icon-maskable.svg',
            type: 'image/svg+xml',
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
