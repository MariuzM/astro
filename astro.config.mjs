import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
  integrations: [tailwind()],
});
