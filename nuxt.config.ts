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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

