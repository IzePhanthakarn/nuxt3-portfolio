<script setup lang="ts">
import { Menu } from '~~/assets/interface'
const menus: Menu[] = [
   { name: 'Home', link: '/', activeLink: ['/'], icon: 'uil:home-alt' },
   { name: 'About', link: '/about', activeLink: ['/about'], icon: 'uil:user-square' },
   { name: 'Portfolio', link: '/portfolio', activeLink: ['/portfolio'], icon: 'uil:image-v' },
   { name: 'Pricing', link: '/pricing', activeLink: ['/pricing', '/pricing/landing-page', '/pricing/multi-page', '/pricing/web-application'], icon: 'uil:pricetag-alt' },
   { name: 'Blogs', link: '/blogs', activeLink: ['/blogs'], icon: 'uil:blogger-alt' },
   { name: 'Web Service', link: '/services', activeLink: ['/services','/services/calculator'], icon: 'uil:shutter-alt' },
]
const is_open = ref(false);
const is_scroll = ref(false);
// click to open menu sidebar
function toggleMenu() {
   is_open.value = !is_open.value;
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
   <div
      class="w-full h-16 bg-color-base text-white fixed top-0 duration-300 border-b-[1px] border-b-primary lg:hidden z-40"
      :class="{ 'h-20 lg:bg-transparent ': !is_scroll, 'drop-shadow-none border-none': is_open }">
      <div class="relative h-full w-full">
         <div class="w-full mx-auto h-full px-5 z-[2] absolute bg-color-base">
            <div class="w-full h-16 flex items-center justify-between duration-300" :class="{ 'h-20 ': !is_scroll, }">
               <h1 class="text-3xl font-medium">Phanthakarn<span class="text-primary">.dev</span></h1>
               <div>
                  <Icon name="uil:x" v-if="is_open" @click="toggleMenu" />
                  <Icon name="uil:apps" v-else @click="toggleMenu" />
               </div>
            </div>
         </div>
         <div
            class="absolute z-[0] top-[64px] w-full h-48 flex duration-300 bg-color-base border-t-[1px] border-b-[1px] rounded-b-xl border-b-primary border-t-gray-800 drop-shadow-[0_-5px_5px_rgba(255,255,255,0.25)]"
            :class="{ 'h-52 top-[80px]': !is_scroll, 'hide': !is_open }">
            <ul class="w-full h-auto grid grid-cols-3 gap-0">
               <li v-for="(menu, index) in menus" :key="index" @click="toggleMenu()"
                  class="drop-shadow-[0_5px_15px_rgba(255,255,255,0.25)]">
                  <NuxtLink :to=menu.link class="h-full flex flex-col items-center justify-center p-3 pl-0">
                     <div :class="{ 'text-primary': menu.activeLink.includes($route.path) }">
                        <Icon :name=menu.icon size='30' />
                     </div>
                     <p class="font-semibold" :class="{ 'text-primary': menu.activeLink.includes($route.path) }">
                        {{ menu.name }}</p>
                  </NuxtLink>
               </li>
            </ul>
         </div>
      </div>
   </div>

   <!-- Responsive Navbar -->
   <div
      class="w-full h-16 text-white hidden lg:block fixed top-0 bg-color-base duration-300 border-b-[1px] border-b-primary z-40"
      :class="{ 'h-20 lg:bg-transparent border-none': !is_scroll, 'drop-shadow-none border-b-gray-800': is_open }">
      <div class="container h-full mx-auto flex items-center justify-between">
         <h1 class="text-4xl font-medium">Phanthakarn<span class="text-primary">.dev</span></h1>
         <ul class="w-full flex items-center justify-evenly text-xl">
            <li v-for="(menu, index) in menus" :key="index">
               <NuxtLink :to="menu.link" :class="{ 'text-primary': menu.activeLink.includes($route.path) }">
                  <p class="font-semibold hover-underline-animation after:bg-base-slate-800 after:h-0.5"
                     :class="{ 'text-primary after:bg-primary': menu.activeLink.includes($route.path), 'after:bg-black dark:after:bg-white': $route.path != menu.link }">
                     {{ menu.name }}</p>
               </NuxtLink>
            </li>
         </ul>
      </div>
   </div>
</template>

<style scoped>
.hide {
   top: -128px;
}

.hover-underline-animation {
   display: inline-block;
   position: relative;
}

.hover-underline-animation::after {
   content: '';
   position: absolute;
   width: 100%;
   transform: scaleX(0);
   border-radius: 2px;
   bottom: 0;
   left: 0;
   transform-origin: bottom right;
   transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
   transform: scaleX(1);
   transform-origin: bottom left;
}
</style>
