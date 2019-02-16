import helmet from 'helmet'
import consola from 'consola'
const logger = consola.withScope('nuxt:helmet')
export default function (moduleOptions = {}) {
  const options = {
    permittedCrossDomainPolicies: true,
    ...this.options.helmet || {},
    ...moduleOptions
  }

  this.nuxt.hook('render:setupMiddleware', (app) => {
    logger.debug('Adding helmet')
    app.use(helmet(options))
  })
}
