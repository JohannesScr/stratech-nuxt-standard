# stratech-nuxt-standard

> My astonishing Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## Standard package list
`npm install --save-dev moment` [Moment](https://momentjs.com/)
`npm install --save-dev ag-grid-enterprise` [AG Grid Enterprise](https://github.com/ag-grid/ag-grid-enterprise)
`npm install --save-dev ag-grid` [Ag Grid](https://www.ag-grid.com/vue-getting-started/)
`npm install --save-dev ag-grid-vue` [Ag Grid Vue](https://github.com/ag-grid/ag-grid-vue)
`npm install --save-dev ag-grid-community` [Ag Grid Community]
`npm install --save-dev echarts vue-echarts-v3` [echarts](https://github.com/xlsdg/vue-echarts-v3)
`npm install --save-dev vue-multiselect` [Vue Multiselect](https://vue-multiselect.js.org/)
`npm install --save-dev vuejs-datepicker` [Vue Datepicker](https://github.com/charliekassel/vuejs-datepicker)
`npm install --save-dev node-sass` [Node SASS](https://github.com/sass/node-sass)
`npm install --save-dev sass-loader` [SASS Loader](https://github.com/webpack-contrib/sass-loader)
`npm install --save-dev uikit` [UIKit](https://github.com/uikit/uikit)
`npm install --save-dev @nuxtjs/pwa` [Nuxt PWA Module](https://pwa.nuxtjs.org/modules/workbox)
`npm install --save-dev vue-js-modal` [Vue Modal](https://vuejs.org/v2/examples/modal.html)
`npm install --save-dev vee-validate` [Vee Validate](https://baianat.github.io/vee-validate/)
`npm install --save-dev nuxt-validate` [Nuxt Validate](https://github.com/lewyuburi/nuxt-validate)

## Nuxt config

# Modules
```
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
```
To extend/add specific Vee Validate locale use [Nuxt Validate](https://github.com/lewyuburi/nuxt-validate). List of languages to use can be found [here](https://github.com/baianat/vee-validate/tree/master/locale)

```
  modules: [
    ...
    ['nuxt-validate', {
      lang: 'es',
      ...
      // regular vee-validate options
    }]
  ]
```

# CSS
```
  css: [
    '@/node_modules/uikit/dist/css/uikit.min.css',
    '@/node_modules/ag-grid/dist/styles/ag-grid.css',
    '@/node_modules/ag-grid/dist/styles/ag-theme-balham.css'
    // '@/assets/custom.css',
    // '@/assets/scss/main.scss'
  ],
```

# Plugins
```
  css: [
    '@/node_modules/uikit/dist/css/uikit.min.css',
    '@/node_modules/ag-grid/dist/styles/ag-grid.css',
    '@/node_modules/ag-grid/dist/styles/ag-theme-balham.css'
    // '@/assets/custom.css',
    // '@/assets/scss/main.scss'
  ],
```

# Build
```
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    cssSourceMap: false,
    vendor: ['~/plugins/custom.js', '~/plugins/third_paty.js'],
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
```

## Nuxt Folder Structure
https://nuxtjs.org/guide/directory-structure/
https://www.academind.com/learn/vue-js/nuxt-js-tutorial-introduction/folders-files/

## Video Tutorials
https://drive.google.com/drive/u/0/folders/1MEZQ3aKMNeCarvfeAXvbX6KlcgyeeH47

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
