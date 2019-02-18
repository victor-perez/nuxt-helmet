import config from './fixture/nuxt.config.defaults'
import { startNuxt, stopNuxt, get } from './helpers'

jest.setTimeout(60000)

const HEADERS = expect.objectContaining({
  'x-content-type-options': 'nosniff',
  'x-dns-prefetch-control': 'off',
  'x-download-options': 'noopen',
  'x-frame-options': 'SAMEORIGIN',
  'x-permitted-cross-domain-policies': 'none',
  'x-xss-protection': '1; mode=block',
  'strict-transport-security': 'max-age=15552000; includeSubDomains'
})

describe('Default headers', () => {
  beforeAll(startNuxt(config))

  afterAll(stopNuxt)

  test('Default config', async () => {
    const { headers } = await get('/')
    expect(headers).toEqual(HEADERS)
  })

  test('Static content headers', async () => {
    const { body } = await get('/')

    const requests = body.match(/src="([^"]+)"/g)
      .map(src => /src="([^"]+)"/.exec(src)[1])
      .map(file => get(file))
      .map(p => p.then(({ headers }) => expect(headers).toEqual(HEADERS)))

    return Promise.all(requests)
  })
})
