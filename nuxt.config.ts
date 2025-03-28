// https://nuxt.com/docs/api/configuration/nuxt-config
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  srcDir: 'app/',
  // Using consistent alias patterns with Nuxt's built-in alias system
  alias: {
    // Following best practices: use '@/' for direct src dir references and '~/' for root
    // These patterns are more consistent with Nuxt 3 conventions
    '@components': './app/components',
    '@composables': './app/composables',
    '@utils': './app/utils',
    '@server': './server',
    '@modules': './modules',
    '@public': './public'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vite: {
    plugins: [
      // Add vite-tsconfig-paths to resolve paths in tsconfig.json
      tsConfigPaths()
    ]
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
      componentDir: './app/components',
      prefix: '',
      aliases: {
        components: '@components',
        utils: '@utils'
      }
    }],
    '@pinia/nuxt'
  ]
})