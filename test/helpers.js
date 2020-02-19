import { Nuxt, Builder } from 'nuxt'
import got from 'got'
import getPort from 'get-port'
let nuxt, port

export const url = path => `http://localhost:${port}${path}`
export const get = path => got(url(path))

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
