<script setup lang="ts">
import provinces from '~~/assets/dictionary/provinces'
const menus = [
   { name: 'Dashboard', link: '/', icon: 'ic:outline-space-dashboard', route: '/dashboard' },
   { name: 'Employment', link: '/employment', icon: 'uil:pricetag-alt', route: '/employment' },
   { name: 'Your tasks', link: '/tasks', icon: 'uil:clipboard-blank', route: '/tasks' },
   { name: 'Your wallet', link: '/wallet', icon: 'uil:wallet', route: '/wallet' },
   { name: 'Your health', link: '/health', icon: 'icon-park-outline:muscle', route: '/health' },
   { name: 'Setting', link: '/setting', icon: 'uil:setting', route: '/setting' }
]
const is_open = ref(false);
const location = {
   province: provinces.get('สุพรรณบุรี'),
   country: 'Thailand'
}

// variable for datetime
const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const displayDate = ref("mmm dd, yyyy")
const displayHour = ref(null);
const displayMinute = ref(null);
const displaySecond = ref(null);

// add 0 in front of value when value less than 10
function minTwoDigits(n: number) {
   return (n < 10 ? '0' : '') + n;
}

// change value of datetime every 1 second
setInterval(() => {
   const date = new Date();
   let years = date.getFullYear();
   let months = date.getMonth();
   let dates = date.getDate();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();

   displayDate.value = `${allMonths[months]} ${minTwoDigits(dates)}, ${years}`
   try {
      // @ts-ignore
      displayHour.value.style.setProperty('--value', hours)
      // @ts-ignore
      displayMinute.value.style.setProperty('--value', minutes)
      // @ts-ignore
      displaySecond.value.style.setProperty('--value', seconds)
   } catch (e) {
      // cannot read properties of undefined (reading 'style')
   }
}, 1000);

// click to open menu sidebar
function toggleMenu() {
   is_open.value = !is_open.value;
}

// click to sign out
function signOut() {
   localStorage.removeItem("auth");
   navigateTo("/")
}

</script>

<template>
   <div class="w-full h-16 pl-3.5 pr-5 bg-neutral flex justify-between items-center">
      <div class="flex items-center">
         <div class="w-16">

            <label class="btn btn-circle swap swap-rotate text-base-100">

               <!-- this hidden checkbox controls the state -->
               <input type="checkbox" @click="toggleMenu(); $emit('toggle-menu', true)" />

               <!-- hamburger icon -->
               <Icon class="swap-off ml-1.5 fill-current" name="fa6-solid:bars-staggered" />

               <!-- close icon -->
               <Icon class="swap-on fill-current" size="36" name="uil:arrow-circle-left" />
            </label>
         </div>

         <!-- location -->
         <div class="py-[5px] px-3 flex items-center space-x-2 text-base-100 bg-neutral-focus rounded-lg">
            <Icon name="mingcute:live-location-line" size="36" class="text-primary" />
            <div class="flex flex-col text-sm font-medium">
               <h1>{{ location.province }},</h1>
               <h2>{{ location.country }}</h2>
            </div>
         </div>
      </div>

      <!-- brand -->
      <NuxtLink to="/" class="btn normal-case text-2xl text-base-100 hover:btn-neutral tracking-wide">
         ize <span class="text-primary ml-0.5">service</span>
      </NuxtLink>

      <!-- datetime -->
      <div class="flex items-center space-x-2 5">
         <div class="py-[5px] px-3 flex items-center space-x-2 text-base-100 bg-neutral-focus rounded-lg">
            <Icon name="uil:clock" size="36" class="text-primary" />
            <div class="flex flex-col text-sm font-medium">
               <span class="countdown font-mono text-base">
                  <span ref="displayHour" style="--value:0;"></span>:
                  <span ref="displayMinute" style="--value:0;"></span>:
                  <span ref="displaySecond" style="--value:0;"></span>
               </span>
               <div class="flex items-center font-mono tracking-tighter">
                  <span>{{ displayDate }}</span>
               </div>
               <!-- <span class="text-base">
                     <span >{{displayMonth}}</span>:
                  </span> -->
            </div>
         </div>


         <!-- dropdown menu -->
         <div class="dropdown dropdown-end">

            <!-- user icon -->
            <div tabindex="0" class="btn btn-circle text-base-100">
               <Icon name="fa6-regular:circle-user" size="32" />
            </div>

            <!-- dropdown content -->
            <div tabindex="0"
               class="menu dropdown-content p-2 pr-2.5 shadow bg-base-100 rounded-box w-64 mt-4 text-neutral font-semibold divide-y">

               <!-- user profile -->
               <div class="w-full p-2 flex flex-col">
                  <p class="truncated-lines line-1">Phanthakarn Khumphai</p>
                  <p class="truncated-lines line-1">izephanthakarn<span
                        class="text-primary hover:underline underline-offset-2 cursor-pointer">#1423</span></p>
               </div>

               <!-- menus list -->
               <ul class="py-1">
                  <li v-for="(menu, index) in menus" :key="index" :class="{'hidden': menu.route === $route.path}">
                     <a class="p-2 flex items-cemter" :href=menu.link>
                        <Icon :name=menu.icon />
                        <p class="mb-1">{{ menu.name }}</p>
                     </a>
                  </li>
               </ul>

               <!-- sign out button -->
               <div>
                  <button class="w-full mt-2 text-base-100 btn btn-neutral gap-2" @click="signOut">
                     <Icon name="uil:signout" />
                     Sign out
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>