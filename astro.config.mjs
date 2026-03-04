// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://kodibot.id',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ms'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [tailwind(), sitemap()],
  redirects: { '/': '/en/' },
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
      }),
    ],
  },
});
