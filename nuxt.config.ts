// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/styles/main.scss'],

  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  imports: {
    dirs: ['stores', 'constants', 'composables', 'enums'],
    autoImport: true,
  },

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  tailwindcss: {
    viewer: false,
  },

  runtimeConfig: {
    public: {
      apiUrl: '',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
})
