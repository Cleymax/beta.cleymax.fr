export default {
  mode: 'universal',
  head: {
    title: 'Cleymax',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~assets/scss/app.scss'],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/redirect-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader'
  ],
  styleResources: {
    scss: ['./assets/css/*.scss']
  },
  axios: {},
  redirect: [
    {
      from: '^/twitter',
      to: 'https://twitter.com/Cleymax'
    },
    {
      from: '^/github',
      to: 'https://github.com/Cleymax'
    },
    {
      from: '^/email',
      to: 'mailto:contact@cleymax.fr'
    },
    {
      from: '^/paypal',
      to: 'https://paypal.me/clementperrin'
    }
  ],
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(\.svg$)/
        })
      }
    }
  }
}
