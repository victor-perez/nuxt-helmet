import { join } from 'pathe'
import { useLogger, defineNuxtModule, addServerHandler, isNuxt2, addTemplate } from '@nuxt/kit'
import helmet, { HelmetOptions } from 'helmet'
import { name, version } from '../package.json'

const logger = useLogger('nuxt:helmet')

const CONFIG_KEY = 'helmet'

export interface ModuleOptions extends HelmetOptions {
  silence?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: CONFIG_KEY,
    compatibility: {
      bridge: true
    }
  },
  defaults: {
    silence: false,
    contentSecurityPolicy: false,
    permittedCrossDomainPolicies: {
      permittedPolicies: 'none'
    }
  },
  setup (options: ModuleOptions, nuxt) {
    addTemplate({
      filename: 'nuxt-helmet.ts',
      write: true,
      getContents: () => helmetMiddlewareContent(options)
    })

    addServerHandler({
      handler: join(nuxt.options.buildDir, 'nuxt-helmet.ts'),
      middleware: true
    })

    if (isNuxt2()) {
      nuxt.hook('render:setupMiddleware', (app) => {
        app.use(helmet(options))

        if (!options.silence) {
          logger.success('Nuxt `Helmet` middleware added')
        }
      })
    }
  }
})

function helmetMiddlewareContent (options: ModuleOptions): string {
  return `
import { useLogger } from '@nuxt/kit'
import { defineEventHandler } from 'h3'
import helmet from 'helmet'

const logger = useLogger('nuxt:helmet')
const options = ${JSON.stringify(options)}

export default helmet(options)

if (!options.silence) {
  logger.success('Nuxt \`Helmet\` middleware added')
}
`
}
