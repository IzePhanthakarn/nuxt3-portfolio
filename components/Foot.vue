<script lang="ts" setup>
const thisYear = new Date().getFullYear();
</script>

<template>
   <div class="w-full h-auto lg:h-16 border-0 lg:border-t-[1px] border-primary text-white">
      <div class="container h-full mx-auto mt-2 lg:mt-0 flex flex-col lg:flex-row items-center justify-center" :class="{ 'justify-around': $route.path != '/' }" >
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
            <Nuxt-Link to="https://discord.gg/uBvnbbjS55" target="_blank">
               <Icon name="mdi:discord" class="hover:text-primary duration-300 translate-y-0.5" size="42"></Icon>
            </Nuxt-Link>
         </div>
         <div
            class="w-full lg:w-auto text-center text-sm lg:text-lg my-3 pt-3 lg:pt-0 lg:my-0 border-t-[1px] lg:border-none border-primary">
            Copyright © {{ thisYear }} <NuxtLink to="/about" class="text-primary hover:underline">IzePhanthakarn</NuxtLink> | All
            Rights Reserved.
         </div>
      </div>
   </div>
</template>
