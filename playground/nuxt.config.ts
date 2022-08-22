import { defineNuxtConfig } from 'nuxt'
import helmetModule from '..'

export default defineNuxtConfig({
  modules: [
    helmetModule
  ],

  helmet: {
    referrerPolicy: true
  }
})
