import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { setup, fetch, $fetch } from '@nuxt/test-utils'

const expectedHeaders = expect.objectContaining({
  'cross-origin-embedder-policy': 'require-corp',
  'cross-origin-opener-policy': 'same-origin',
  'cross-origin-resource-policy': 'same-origin',
  'expect-ct': 'max-age=0',
  'origin-agent-cluster': '?1',
  'referrer-policy': 'no-referrer',
  'strict-transport-security': 'max-age=15552000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-dns-prefetch-control': 'off',
  'x-download-options': 'noopen',
  'x-frame-options': 'SAMEORIGIN',
  'x-permitted-cross-domain-policies': 'none',
  'x-xss-protection': '0'
})

describe('Default headers', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/defaults', import.meta.url)),
    server: true
  })

  test('Default config', async () => {
    const { headers } = await fetch('/')

    expect(headers).toEqual(expectedHeaders)
  })

  test('Static content headers', async () => {
    const body = await $fetch('/')

    const requests = body.match(/src="([^"]+)"/g)
      .map(src => /src="([^"]+)"/.exec(src)[1])
      .map(file => fetch(file))
      .map(p => p.then(({ headers }) => expect(headers).toEqual(expectedHeaders)))

    return Promise.all(requests)
  })
})
