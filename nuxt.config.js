export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "blinker-js-app",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vant/lib/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
    "@/plugins/vant",
    "@/plugins/axios"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    proxy: true,
    prefix: '/blinker',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    "/blinker": {
      target: "https://iot.diandeng.tech", //这个网站是开源的可以请求到数据的
      pathRewrite: {
        "^/blinker/": "/",
        changeOrigin: true
      }
    }
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
