<script setup lang="ts">
import { Menu } from '~~/assets/interface'
const menus: Menu[] = [
   { name: 'Home', link: '/', icon: 'uil:home-alt' },
   { name: 'About', link: '/about', icon: 'uil:user-square' },
   { name: 'Experiences', link: '/experiences', icon: 'uil:file-alt' },
   { name: 'Skills', link: '/skills', icon: 'uil:icons' },
   { name: 'Projects', link: '/projects', icon: 'uil:image-v' },
   { name: 'Contacts', link: '/contacts', icon: 'uil:fast-mail' },
]
const is_open = ref(false);
const is_scroll = ref(false);
// click to open menu sidebar
function toggleMenu() {
   is_open.value = !is_open.value;
   console.log(is_open.value);

}
function closeMenu() {
   is_open.value = false;
}

function myScrollFunc() {
   var positionScrollY = window.scrollY;
   is_scroll.value = positionScrollY <= 20 ? false : true;
};

window.addEventListener("scroll", myScrollFunc);
</script>

<template>
   <div class="w-full h-16 bg-[#171820] fixed top-0 duration-300 border-b-[1px] border-b-primary lg:hidden"
      :class="{ 'h-20 lg:bg-transparent ': !is_scroll, 'drop-shadow-none border-b-gray-800': is_open }">
      <div class="relative h-full w-full">
         <div class="w-full mx-auto h-full px-5 z-[2] absolute bg-[#171820]">
            <div class="w-full h-20 flex items-center justify-between">
               <h1 class="text-3xl font-medium">Phanthakarn<span class="text-primary">.dev</span></h1>
               <div>
                  <Icon name="uil:x" v-if="is_open" @click="toggleMenu" />
                  <Icon name="uil:apps" v-else @click="toggleMenu" />
               </div>
            </div>
         </div>
         <div
            class="absolute z-[0] top-[80px] w-full h-52 flex duration-300 bg-[#171820] border-t-[1px] border-b-[1px] rounded-b-xl border-b-primary border-t-gray-800 drop-shadow-[0_-5px_5px_rgba(255,255,255,0.25)]"
            :class="{ 'hide': !is_open }">
            <ul class="w-full h-auto grid grid-cols-3 gap-0">
               <li v-for="(menu, index) in menus" :key="index" @click="toggleMenu()"
                  class="drop-shadow-[0_5px_15px_rgba(255,255,255,0.25)]">
                  <NuxtLink :to=menu.link class="h-full flex flex-col items-center justify-center p-3 pl-0">
                     <div :class="{ 'text-primary': $route.path == menu.link }">
                        <Icon :name=menu.icon size='30' />
                     </div>
                     <p class="font-semibold" :class="{ 'text-primary': $route.path == menu.link }">
                        {{ menu.name }}</p>
                  </NuxtLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<style scoped>
.hide{
   top: -128px;
}
</style>
