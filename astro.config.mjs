// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.uadmonterrey.mx',
  integrations: [sitemap()],
  adapter: netlify({
    imageCDN: true,
  }),
});