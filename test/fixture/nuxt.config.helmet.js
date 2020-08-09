import { resolve } from 'path'
import libModule from '../../lib/module'
import defaultConfig from './defaults'

export default {
  ...defaultConfig,
  buildDir: resolve(__dirname, '../../.nuxt/test/params'),
  modules: [libModule],
  helmet: {
    referrerPolicy: 'no-referrer',
    frameguard: false
  }
}
