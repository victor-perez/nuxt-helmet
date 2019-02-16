import { Nuxt, Builder } from 'nuxt-edge'
import request from 'request-promise-native'
import config from '../example/nuxt.config'

jest.setTimeout(60000)
process.env.PORT = process.env.PORT || 5060

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request({
  uri: url(path),
  method: 'GET',
  resolveWithFullResponse: true
})
const DEFAULT_HEADERS = expect.objectContaining({
  'x-content-type-options': 'nosniff',
  'x-dns-prefetch-control': 'off',
  'x-download-options': 'noopen',
  'x-frame-options': 'SAMEORIGIN',
  'x-permitted-cross-domain-policies': 'none',
  'x-xss-protection': '1; mode=block'
})

describe('Default headers', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('Default config', async () => {
    const { headers } = await get('/')
    expect(headers).toEqual(DEFAULT_HEADERS)
  })

  test('Static content headers', () => {
    return get('/')
      .then(({ body }) => {
        return body.match(/src="([^"]+)"/g)
          .map(src => /src="([^"]+)"/.exec(src)[1])
      })
      .then((files) => {
        return files.map(file => get(file))
      })
      .then((promises) => {
        return promises.map(p => p.then(({ headers }) => expect(headers).toEqual(DEFAULT_HEADERS)))
      })
      .then((promises) => {
        return Promise.all(promises)
      })
  })
})
