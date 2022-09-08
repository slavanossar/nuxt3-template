import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  buildModules: ['vite-plugin-vue-type-imports/nuxt'],
  publicRuntimeConfig: {},
  experimental: {
    reactivityTransform: true,
  },
})
