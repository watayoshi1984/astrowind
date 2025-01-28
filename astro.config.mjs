import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';
import { fileURLToPath } from 'url';
import remarkMermaid from 'remark-mermaid';
import { remarkKroki } from 'remark-kroki';

// astro.config.mjs
export default defineConfig({
  site: 'https://astrowind.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      remarkPlugins: [
        [remarkMermaid, {
          simple: false,
          mermaidConfig: {
            theme: 'default',
            themeVariables: {
              'fontFamily': 'system-ui, sans-serif'
            }
          }
        }],
      ],
    }),
    tailwind(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': ['*'],
      },
    }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    prefetch(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private', '/admin'],
        },
      ],
      sitemap: true,
      host: 'https://astrowind.vercel.app',
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    format: ['avif', 'webp'],
    quality: 80,
    densities: [1, 2],
    fallbackFormat: 'png',
    supported: ['png', 'jpg', 'jpeg', 'webp', 'avif'],
    includeSourceFormat: false
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/prism']
    },
    resolve: {
      alias: {
        'astrowind:config': fileURLToPath(new URL('./src/config.ts', import.meta.url)),
      },
    },
  }
});
