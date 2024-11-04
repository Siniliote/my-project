import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import remarkToc from 'remark-toc'

import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    robotsTxt(),
    mdx(),
    sitemap()
  ],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 3 }]],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  site: 'https://sferey.com',
  server: {
    port: 4321,
    host: true
  },
  image: {
    domains: ['astro.build']
  }
})
