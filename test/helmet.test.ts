import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils'

describe('enable/disable helmet modules via helmet', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/helmet', import.meta.url)),
    server: true
  })

  test('enabled module referrer-Policy', async () => {
    const { headers } = await fetch('/')
    expect(headers).toHaveProperty('referrer-policy', 'no-referrer')
  })

  test('disabled module referrer-Policy', async () => {
    const { headers } = await fetch('/')
    expect(headers).not.toHaveProperty('referrer-policy')
  })
})
