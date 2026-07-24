import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rohithmariyala.com',

  redirects: {
      '/clock': 'https://rohithmariyala.me/JS-clock/',
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
