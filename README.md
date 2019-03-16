# Helmet for nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvictor-perez%2Fnuxt-helmet.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvictor-perez%2Fnuxt-helmet?ref=badge_shield)

> Easy [Helmet](https://helmetjs.github.io/) integration with Nuxt.js

> [Helmet](https://helmetjs.github.io/) helps you secure your Nuxt apps by setting various HTTP headers. By default [Helmet](https://helmetjs.github.io/) will set the
`X-DNS-Prefetch-Control`, `X-Frame-Options`, `Strict-Transport-Security`, `X-Download-Options`, `X-Content-Type-Options` and `X-XSS-Protection` headers. Beside that this module will also set by default the `X-Permitted-Cross-Domain-Policies` header. 

[📖 **Release Notes**](./CHANGELOG.md) | [📖 **Helmet Docs**](https://helmetjs.github.io/docs/)

## Setup

1. Add `nuxt-helmet` dependency with `yarn` or `npm` into your project
2. Add `nuxt-helmet` at the beginning of the  `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    'nuxt-helmet'
    //...other modules
 ],
 // helmet options
 // @see https://helmetjs.github.io/docs/
 helmet: {
    /*
    dnsPrefetchControl: true,
    expectCt: true,
    featurePolicy: true,
    frameguard: true,
    hidePoweredBy: true,
    hsts: true,
    ieNoOpen: true,
    noCache: true,
    noSniff: true,
    permittedCrossDomainPolicies: true,
    referrerPolicy: true,
    xssFilter: true,
    */
 }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Victor Perez <vpjs@victor-perez.nl>

<!-- Badges -->
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-helmet.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-helmet

[npm-version-src]: https://img.shields.io/npm/v/nuxt-helmet/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-helmet

[circle-ci-src]: https://img.shields.io/circleci/project/github/victor-perez/nuxt-helmet.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/victor-perez/nuxt-helmet

[codecov-src]: https://img.shields.io/codecov/c/github/victor-perez/nuxt-helmet.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/victor-perez/nuxt-helmet

[david-dm-src]: https://david-dm.org/victor-perez/nuxt-helmet/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/victor-perez/nuxt-helmet

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvictor-perez%2Fnuxt-helmet.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvictor-perez%2Fnuxt-helmet?ref=badge_large)