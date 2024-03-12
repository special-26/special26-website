// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui"],
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Special-26',
      description: 'Special-26 specializes in bespoke website designing and development solutions tailored to elevate your online presence. Our expert team crafts visually stunning and functionally robust websites to amplify your brand digital footprint. Trust us to transform your vision into a captivating online experience.',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})