import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
      '/resume': '/resume.pdf',
      '/clock': 'https://rohithmariyala.me/JS-clock/',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});