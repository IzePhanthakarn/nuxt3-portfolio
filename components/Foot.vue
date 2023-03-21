<template>
   <div class="w-full h-auto sm:h-16 border-0 lg:border-t-[1px] border-primary text-white">
      <div class="container h-full mx-auto mt-2 sm:mt-0 flex flex-col sm:flex-row items-center justify-between">
         <div class="flex justify-around items-center space-x-3">
            <Nuxt-Link to="https://www.facebook.com/ize.phanthakarn.5/" target="_blank">
               <Icon name="fa6-brands:square-facebook" class="hover:text-primary duration-300"
                  size="40"></Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://www.instagram.com/izeimize/" target="_blank">
               <Icon name="fa6-brands:square-instagram" class="hover:text-primary duration-300"
                  size="40"></Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://line.me/ti/p/Gkx0_u2GwJ" target="_blank">
               <Icon name="fa6-brands:line" class="hover:text-primary duration-300" size="35">
               </Icon>
            </Nuxt-Link>
            <Nuxt-Link to="https://github.com/IzePhanthakarn" target="_blank">
               <Icon name="fa6-brands:square-github" class="hover:text-primary duration-300"
                  size="40"></Icon>
            </Nuxt-Link>
         </div>
         <div class="w-full sm:w-auto text-center text-sm sm:text-lg my-3 pt-3 sm:my-0 border-t-[1px] sm:border-none border-primary">
               Copyright © 2023 <NuxtLink to="/about" class="text-primary hover:underline">IzePhanthakarn</NuxtLink> | All Rights Reserved.
         </div>
         <div class="hidden sm:block">
            <NuxtLink to="https://www.buymeacoffee.com/izephanthakarn" target="_blank">
               <img src="/bmc-button.png" alt="buy me a coffee" class="h-10 duration-300 hover:scale-105">
            </NuxtLink>
         </div>
         <div class="block sm:hidden absolute left-3 top-1">
            <NuxtLink to="https://www.buymeacoffee.com/izephanthakarn" target="_blank">
               <img src="/bmc-logo-yellow.png" alt="buy me a coffee" class="h-10 duration-300 hover:scale-105 rounded-full">
            </NuxtLink>
         </div>
      </div>
   </div>
</template>
