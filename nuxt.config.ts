// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/services', '/portfolio', '/contact']
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [],
      meta: [
        { name: 'robots', content: 'index, follow, max-image-preview:large' }
      ]
    }
  },
  typescript: {
    strict: true
  },
  vite: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp']
  }
})

