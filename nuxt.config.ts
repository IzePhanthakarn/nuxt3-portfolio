import { Title } from "./.nuxt/components";

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
      }
   },
   ssr: false,
   modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
   css: ['@/assets/css/main.css']
})
