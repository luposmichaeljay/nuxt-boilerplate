// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  components: false,
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', weights: [400, 500, 700, 800] },
    ],
  },
  primevue: {
    importTheme: { from: '~/theme.ts' },
  },
  tailwindcss: { exposeConfig: true, viewer: true },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
});
