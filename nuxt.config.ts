// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'app/',
  alias: {
    '@components': './app/components',
    '@composables': './app/composables',
    '@utils': './app/utils',
    '@server': './server',
    '@modules': './modules',
    '@public': './public'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/content',
    '@nuxt/fonts'
  ]
})