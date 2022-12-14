const { SITE_NAME, SITE_URL } = process.env

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
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },
  experimental: {
    reactivityTransform: true,
  },
})
