export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'vite-plugin-vue-type-imports/nuxt',
  ],
  runtimeConfig: {
    public: {},
  },
  experimental: {
    reactivityTransform: true,
  },
})
