import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/resume': '/resume.pdf',
        '/clock': 'https://rohithmariyala.me/JS-clock/',
    }
});
