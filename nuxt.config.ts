const { SITE_NAME, SITE_URL } = process.env

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2024-07-16',
  css: [],
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  robots: {},
  sitemap: {},
  runtimeConfig: {
    public: {
      siteName: SITE_NAME,
      siteUrl: SITE_URL,
    },
  },
})
