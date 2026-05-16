// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://levygit837-cyber.github.io',
  base: '/SiteThalita',
  vite:{
    plugins: [tailwindcss()]
  }
});