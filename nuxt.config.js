module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'integrated-security-system',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/semantic/dist/semantic.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.1.1.min.js', integrity: 'sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=', crossorigin: 'anonymous' },
      { src: '/semantic/dist/semantic.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false, // { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /* Внешние модули */
    vendor: [
      'firebase'
    ]
  },
  /* Общие стили */
  css: [ 
    'assets/main.css' 
  ],
  /* Плагины */
  plugins: [
    '~/plugins/vue-global-objects'
  ],
  router: {
    middleware: 'authenticated'
  }
  // No server-side rendering (only client-side navigation)
  // mode: 'spa'
}
