const { SITE_NAME, SITE_URL } = process.env

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
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
  // vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'wss',
  //       clientPort: 443,
  //       path: 'hmr/',
  //     },
  //   },
  // },
})
