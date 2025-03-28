// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  srcDir: 'app/',
  
  // Aliases needed by both Nuxt and Shadcn components
  alias: {
    '@components': './app/components',
    '@composables': './app/composables',
    '@utils': './app/utils',
    '@server': './server',
    '@modules': './modules',
    '@public': './public'
  },
  
  // Auto-imports optimization
  imports: {
    dirs: [
      'app/utils',
      'app/stores'
    ]
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  },
  
  // Simplified modules configuration
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    ['@nuxt/content', { 
      documentDriven: true,
      navigation: { fields: ['title', 'description', 'coverImage'] }
    }],
    '@nuxt/fonts',
    '@vueuse/nuxt',
    ['shadcn-nuxt', {
      componentDir: './app/components',
      prefix: '',
    }],
    '@pinia/nuxt'
  ],
  
  // Module-specific configurations
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    viewer: true
  }
})