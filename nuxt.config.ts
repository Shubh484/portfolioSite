// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
  
  components: [

    '~/components',

    { path: '~/components', prefix: 'custom' } // Components from '~/components/custom' will be prefixed with 'custom'

  ]

})
