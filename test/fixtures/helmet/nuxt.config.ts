import { defineNuxtConfig } from 'nuxt'
import helmetModule from '../../..'

export default defineNuxtConfig({
  modules: [helmetModule],
  helmet: {
    referrerPolicy: {
      policy: 'no-referrer'
    },
    frameguard: false
  }
})
