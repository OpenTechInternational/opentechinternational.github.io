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
  }
});
