module.exports.nuxt = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Sails Nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
        rel: 'stylesheet'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    // {
    //   src: '~assets/style/app.styl',
    //   lang: 'styl'
    // },
    '~assets/css/vuetify.min.css',
    '~assets/css/overide.css'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'white',
    height: '10px'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {},

  /*
   ** Build configuration
   */
  build: {
    // rules: [
    //   {
    //     test: /\.styl$/,
    //     loader: ['style-loader', 'css-loader', 'stylus-loader']
    //   }
    // ],

    extend(config, ctx) {

    }
  },

  srcDir: 'client/',

  plugins: [{
    src: '~plugins/socket.io.js',
    ssr: false
  }, {
    src: '~/plugins/vuetify',
    ssr: true
  }],

};
