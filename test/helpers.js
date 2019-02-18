import { Nuxt, Builder } from 'nuxt-edge'
import request from 'request-promise-native'
import getPort from 'get-port'
let nuxt, port

export const url = path => `http://localhost:${port}${path}`
export const get = path => request({
  uri: url(path),
  method: 'GET',
  resolveWithFullResponse: true
})

export const stopNuxt = async () => {
  if (nuxt) {
    await nuxt.close()
  }
  nuxt = undefined
}

export const startNuxt = (config) => {
  return async () => {
    if (nuxt) {
      await stopNuxt()
    }
    nuxt = new Nuxt(config)
    port = await getPort()
    await new Builder(nuxt).build()
    await nuxt.listen(port)
  }
}
