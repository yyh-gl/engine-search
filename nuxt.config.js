module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'engine-search',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Engineer&apos;s skill searching system' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
    }
  },
  env: { // TODO: envとして定数定義するのはおかしいから直す
    programmingLanguageList: [
      { id: 1, name: "C" },
      { id: 2, name: "C++" },
      { id: 3, name: "Java" },
      { id: 4, name: "JavaScript" },
      { id: 5, name: "Ruby" },
      { id: 6, name: "Python" },
    ]
  }
}

