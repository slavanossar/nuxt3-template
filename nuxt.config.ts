export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  buildModules: ['vite-plugin-vue-type-imports/nuxt'],
  publicRuntimeConfig: {},
  experimental: {
    reactivityTransform: true,
  },
})
