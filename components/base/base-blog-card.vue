<script setup lang="ts">
const props = defineProps({
   title: {
      type: String,
      default: ''
   },
   img: {
      type: String,
      default: ''
   },
   tags: {
      type: Object,
      default: []
   },
   detail: {
      type: String,
      default: ''
   },
   lastUpdate: {
      type: String,
      default: ''
   },
   link: {
      type: String,
      default: ''
   }
});
</script>

<template>
   <div
      class="bg-[#222434] h-full flex flex-col p-2.5 pb-1 rounded-xl ring-2 ring-[#222434] hover:ring-2 hover:ring-white">
      <div class="w-full">
         <img :src=img alt="" class="rounded-2xl">
      </div>

      <div class="w-full px-1 flex flex-col items-start">
         <h1 class="w-full my-2 text-left text-2xl font-medium line-1clamp">{{ title }}</h1>
         <hr class="mb-2 w-full">

         <div class="w-full mb-2 text-left">
            <div v-for="(tag,index) in tags" :key="index" class="inline-block m-0.5">
               <BaseTag class="inline-block" portfolio :icon=tag.icon>{{ tag.name }}</BaseTag>
            </div>
         </div>

         <p class="text-left line-4clamp">{{ detail }}</p>

         <hr class="mt-2 mb-1 w-full">

         <div class="w-full flex items-center justify-between">
            <p class="text-lg text-gray-500 font-medium"> {{ lastUpdate }}</p>
            <BaseButton :to=link tertiary class="w-fit -mr-2 ml-auto py-0">Read more</BaseButton>
         </div>
      </div>
   </div>
</template>
