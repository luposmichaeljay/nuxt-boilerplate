import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {},
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  plugins: [],
};
