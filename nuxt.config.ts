import { defineNuxtConfig } from 'nuxt'

import nuxtClasses from './nuxtClasses'
import possibleTypes from './possibleTypes.json'

const isDev = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: nuxtClasses.body,
      },
      htmlAttrs: {
        class: nuxtClasses.html,
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  css: [],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  buildModules: ['vite-plugin-vue-type-imports/nuxt'],
  publicRuntimeConfig: {},
  experimental: {
    reactivityTransform: true,
  },
})
