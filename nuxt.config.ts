// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      baseURL: '/',
      head: {
         title: "Phanthakarn's Portfolio",
         meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
         ],
         script: [],
         link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap' }
         ],
         style: [],
      },
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   ssr: false,
   devServer: {
      host: '0.0.0.0',
      port: 3000,
   },
   modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/supabase'],
   css: ['@/assets/css/main.css', 'vue-toast-notification/dist/theme-default.css'],
   runtimeConfig: {
      public: {
         username: process.env.USERNAMEDEV,
         password: process.env.PASSWORD,
         token: process.env.TOKEN
      }
   },
})
