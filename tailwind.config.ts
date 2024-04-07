import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
      },
      common: {
        header: {
          height: '4rem',
        },
        space: {
          xs: '0.25rem', // 4px
          sm: '0.5rem', // 8px
          md: '1rem', // 16px
          lg: '2rem', // 32px
          xl: '4rem', // 64px
        },
        radius: {
          sm: '0.25rem', // 4px
          md: '0.5rem', // 8px
          lg: '1rem', // 16px
          xl: '2rem', // 32px
        },
      },
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
}
