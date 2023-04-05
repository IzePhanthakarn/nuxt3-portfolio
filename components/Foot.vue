<template>
   <div class="w-full h-auto lg:h-16 border-0 lg:border-t-[1px] border-primary text-white">
      <div class="container h-full mx-auto mt-2 lg:mt-0 flex flex-col lg:flex-row items-center justify-between">
         <div class="block lg:hidden absolute right-4 -translate-y-4">
            <NuxtLink to="https://www.buymeacoffee.com/izephanthakarn" target="_blank">
               <img src="/bmc-logo-yellow.png" alt="buy me a coffee"
                  class="h-10 duration-300 hover:scale-105 rounded-full">
            </NuxtLink>
         </div>
         <div class="flex justify-around items-center space-x-3" v-if="$route.path != '/'">
            <Nuxt-Link to="https://www.facebook.com/ize.phanthakarn.5/" target="_blank">
               <Icon name="fa6-brands:square-facebook" class="hover:text-primary duration-300" size="40"></Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://www.instagram.com/izeimize/" target="_blank">
               <Icon name="fa6-brands:square-instagram" class="hover:text-primary duration-300" size="40"></Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://line.me/ti/p/Gkx0_u2GwJ" target="_blank">
               <Icon name="fa6-brands:line" class="hover:text-primary duration-300" size="35">
               </Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://github.com/IzePhanthakarn" target="_blank">
               <Icon name="fa6-brands:square-github" class="hover:text-primary duration-300" size="40"></Icon>
            </Nuxt-Link>
         </div>
         <div
            class="w-full lg:w-auto text-center text-sm lg:text-lg my-3 pt-3 lg:pt-0 lg:my-0 border-t-[1px] lg:border-none border-primary">
            Copyright © 2023 <NuxtLink to="/about" class="text-primary hover:underline">IzePhanthakarn</NuxtLink> | All
            Rights Reserved.
         </div>
         <div class="hidden lg:block">
            <NuxtLink to="https://www.buymeacoffee.com/izephanthakarn" target="_blank">
               <img src="/bmc-button.png" alt="buy me a coffee" class="h-10 duration-300 hover:scale-105">
            </NuxtLink>
         </div>
      </div>
   </div>
</template>
