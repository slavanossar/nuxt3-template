export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    public: {
      site: {
        name: process.env.SITE_NAME,
        url: process.env.SITE_URL,
      },
    },
  },
  experimental: {
    reactivityTransform: true,
  },
})
