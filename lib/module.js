import helmet from 'helmet'
import consola from 'consola'

const logger = consola.withScope('nuxt:helmet')

export default function (moduleOptions = {}) {
  const options = {
    permittedCrossDomainPolicies: 'none',
    contentSecurityPolicy: false,
    ...this.options.helmet || {},
    ...moduleOptions
  }

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(helmet(options))
    if (!options.silence) {
      logger.success('Nuxt `Helmet` middleware added')
    }
  })
}
