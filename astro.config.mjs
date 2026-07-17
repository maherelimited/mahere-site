// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// The public production URL. Used for canonical URLs, Open Graph tags and
// the generated sitemap. Update here if the domain ever changes.
export default defineConfig({
  site: 'https://mahereprojects.nz',
  output: 'static',
  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});