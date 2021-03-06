import config from './fixture/nuxt.config.params'
import { startNuxt, stopNuxt, get } from './helpers'

jest.setTimeout(60000)

describe('enable/disable helmet modules via params', () => {
  beforeAll(startNuxt(config))

  afterAll(stopNuxt)

  test('enabled module referrer-Policy', async () => {
    const { headers } = await get('/')
    expect(headers).toHaveProperty('referrer-policy', 'no-referrer')
  })

  test('disabled module referrer-Policy', async () => {
    const { headers } = await get('/')
    expect(headers).not.toHaveProperty('x-frame-options')
  })
})
