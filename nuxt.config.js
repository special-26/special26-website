// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ssr: false,
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})