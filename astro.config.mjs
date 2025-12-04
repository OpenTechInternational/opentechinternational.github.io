// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://opentechinternational.github.io',
  integrations: [tailwind()],
  outDir: './dist',
  publicDir: './public',
  build: {
    assets: '_assets'
  },
  image: {
    // Optimized for low-connectivity environments
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Generate modern formats with quality optimized for bandwidth
    format: ['webp', 'avif'],
    // Cache images for better performance
    cacheDir: './.astro/image-cache'
  }
});
