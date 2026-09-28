// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Statischer Build: `npm run build` erzeugt den Ordner dist/,
// der 1:1 auf den IONOS-Webspace hochgeladen wird.
export default defineConfig({
  site: 'https://klarwerk.ai',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
