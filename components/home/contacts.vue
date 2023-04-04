<template>
   <div class="w-full flex justify-center items-center py-0 pb-4 lg:py-8 xl:py-4">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div data-aos="fade">
            <h1 class="head after:content-['get_in_touch'] after:bg-color-base before:bg-primary mx-auto">
               Contacts</h1>
         </div>
         <div class="w-full mt-8 flex flex-col lg:flex-row justify-between items-center">
            <img data-aos="fade-right" class="w-full lg:w-2/5" src="/img/contact.gif" alt="">
            <div data-aos="fade-left" class="w-full lg:w-3/5 lg:pl-40 flex flex-col items-center justify-start">
               <div class="w-full flex space-x-4 items-center">
                  <Icon name="uil:fast-mail" size="60" class="text-primary" />
                  <h1 class="text-3xl sm:text-4xl font-semibold">Get in touch</h1>
               </div>
               <p class="lg:pl-20 text-xl">Looking for more information or want to Contact me to hire me for a full-time job or for your specific project. And if you have any questions or concerns You can choose a way to contact me in the list below.</p>
               <hr class="w-full my-6">
               <ul class="w-full pl-0 sm:pl-6 space-y-6">
                  <li class="w-full">
                     <a href="tel:0983405579" target="_blank" class="flex items-center space-x-3">
                        <Icon name="uil:phone" size="40" class="text-green-500"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">+66 98 340 5579</p>
                     </a>
                  </li>
                  <li class="w-full">
                     <NuxtLink to="https://www.facebook.com/ize.phanthakarn.5/" target="_blank" class="flex items-center space-x-3">
                        <Icon name="logos:facebook" size="40"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">Ize Phanthakarn</p>
                     </NuxtLink>
                  </li>
                  <li class="w-full">
                     <NuxtLink to="https://www.instagram.com/izeimize/" target="_blank" class="flex items-center space-x-3">
                        <Icon name="skill-icons:instagram" size="40"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">izeimize</p>
                     </NuxtLink>
                  </li>
                  <li class="w-full">
                     <NuxtLink to="https://line.me/ti/p/Gkx0_u2GwJ" target="_blank" class="flex items-center space-x-3">
                        <Icon name="fa6-brands:line" class="text-green-400" size="40"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">0983405579iib</p>
                     </NuxtLink>
                  </li>
                  <li class="w-full">
                     <NuxtLink to="https://www.linkedin.com/in/phanthakarn-khumphai-a010a0270/" target="_blank" class="flex items-center space-x-3">
                        <Icon name="skill-icons:linkedin" class="text-green-500" size="40"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">Phanthakarn Khumphai</p>
                     </NuxtLink>
                  </li>
                  <li class="w-full">
                     <NuxtLink to="https://discord.gg/5secPEFq" target="_blank" class="flex items-center space-x-3">
                        <Icon name="skill-icons:discord" class="text-green-500" size="40"></Icon>
                        <p class="text-xl sm:text-2xl font-medium">PhanthakarnDev</p>
                     </NuxtLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
