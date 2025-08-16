// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  components: false,
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  fonts: {
    families: [{ name: 'Montserrat', provider: 'google' }],
  },
  primevue: {
    importTheme: { from: '~/theme.ts' },
  },
  tailwindcss: { exposeConfig: true },
});
