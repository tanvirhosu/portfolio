// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  server: {
    port: 4321,
  },

  output: 'static',
  outDir: './dist',
  integrations: [react()],
});