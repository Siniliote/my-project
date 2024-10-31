import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

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
  site: 'https://sferey.com',
  server: {
    port: 4321,
    host: true
  },
  image: {
    domains: ['astro.build']
  }
})
