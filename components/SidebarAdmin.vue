<script setup lang="ts">
import { Menu } from '~/assets/interface'
const menus = [
   { name: 'Dashboard', link: '/dashboard', icon: 'ic:outline-space-dashboard', route: 'dashboard' },
   { name: 'Employment', link: '/employment', icon: 'uil:pricetag-alt', route: 'employment' },
   { name: 'Testimonial', link: '/admin-testimonial', icon: 'lucide:quote', route: 'admin-testimonial' },
   { name: 'Tasks', link: '/tasks', icon: 'uil:clipboard-blank', route: 'tasks' },
   { name: 'Wallet', link: '/wallet', icon: 'uil:wallet', route: 'wallet' },
   { name: 'Health', link: '/health', icon: 'icon-park-outline:muscle', route: 'health' },
]

const props = defineProps<{
   is_open: boolean
}>()

</script>

<template>
   <div class="sidebar border-t pt-1 w-20 bg-neutral flex flex-col justify-between"
      :class="{ 'w-56': is_open }">
      <ul :class="{ 'mt-0': is_open }" class="space-y-0.5 ">
         <li v-for="(menu, index) in menus" :key="index">
            <nuxt-link :to=menu.link
               class="btn px-0 mx-1 h-[40px] flex items-center justify-start rounded-xl cursor-pointer text-base-100 "
               :class="{ 'flex-col justify-center h-[76px] px-0': !is_open, 'bg-neutral-focus': $route.name === menu.route }">
               <Icon :name=menu.icon :class="{ 'ml-2': is_open }" />
               <p class="mt-1 text-xl mb-1 mx-4 font-medium capitalize mx-auto" :class="{ 'text-xs mb-0 mx-0': !is_open }">
                  {{ menu.name
                  }}</p>
            </nuxt-link>
         </li>
      </ul>
      <ul>
         <hr>
         <li>
            <nuxt-link to="/setting"
               class="setting btn px-2 m-1 h-[40px] flex items-center justify-start rounded-xl cursor-pointer duration-300 text-base-100 "
               :class="{ 'flex-col justify-center h-[76px] mt-2 p-0': !is_open, 'bg-neutral-focus': $route.name == 'setting' }">
               <Icon name="uil:setting" class="icon-setting"/>
               <p class="mt-1 text-xs font-medium capitalize mx-auto" :class="{ 'ml-3 mb-1 text-base mx-4': is_open }">
                  Setting</p>
            </nuxt-link>
         </li>
      </ul>
   </div>
</template>

<style scoped>
.sidebar {
   max-height: calc(100vh - 64px);
}

.setting .icon-setting{
   transition: all .3s;
}
.setting:hover .icon-setting{
   transform: rotate(60deg);
}
</style>