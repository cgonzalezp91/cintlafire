
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
    ],
    title: "1er. Cumbre Internacional Aduanera 2019",
    meta: [
      { hid: 'og-title', property: 'og:title', content: '1er. Cumbre Internacional Aduanera 2019' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "1er. Cumbre Internacional Aduanera 2019 Home" },
      { hid: 'og-image', property: 'og:image', content: '/LOGO.png' }      
    ],
    link: [      
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: "stylesheet"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "aos/dist/aos.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  '~plugins/vue-scrollto.js',
  { src: "~/plugins/aos", ssr: false },
  { src: '~plugins/ga.js', ssr: false }
],
  /*
  ** Nuxt.js modules
  */
  modules: [    
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }

    ]
  ],
  /*
  ** Build configuration
  */
 buildDir: '_nuxt',
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    router: {
      scrollBehavior: async (to, from, savedPosition) => {
        if (savedPosition) {
          return savedPosition
        }
  
        const findEl = async (hash, x) => {
          return document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
            })
        }
  
        if (to.hash) {
          let el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }
  
        return { x: 0, y: 0 }
      }
    },
  }
}
