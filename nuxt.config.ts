// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
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
    ['@nuxtjs/tailwindcss', {
      // Using the native Nuxt module for Tailwind CSS
      configPath: '~/tailwind.config.js',
      exposeConfig: true,
      injectPosition: 0,
      viewer: true
    }],
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    ['@nuxt/content', {
      documentDriven: true,
      navigation: {
        fields: ['title', 'description', 'coverImage']
      }
    }],
    '@nuxt/fonts',
    '@vueuse/nuxt',
    ['shadcn-nuxt', {
      componentDir: './app/components/ui',
      prefix: '',
      aliases: {
        components: '@components',
        utils: '@utils'
      }
    }],
    '@pinia/nuxt'
  ]
})