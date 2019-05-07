module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Sails Nuxt",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/vuetify.min.css"],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "purple",
    height: "6px",
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // "@nuxtjs/pwa",
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
    extend(config, ctx) {},
  },

  srcDir: "client/",
  plugins: [
    {
      src: "~plugins/socket.io.js",
      ssr: false,
    },
    {
      src: "@/plugins/vuetify",
      ssr: true,
    },
  ],
  dev: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
};
