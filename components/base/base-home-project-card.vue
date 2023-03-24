<script setup lang="ts">
const props = defineProps({
   img: {
      type: String,
      default: ''
   },
   icon: {
      type: String,
      default: ''
   },
   name: {
      type: String,
      default: ''
   },
   link: {
      type: String,
      default: ''
   },
   lastUpdate: {
      type: String,
      default: ''
   },
   description: {
      type: String,
      default: ''
   },
   tags: {
      type: Object,
      default: []
   }
});
</script>

<template>
   <div
      class="bg-[#222434] h-full flex flex-col p-2.5 pb-1 rounded-xl ring-2 ring-[#222434] hover:ring-2 hover:ring-white">
      <img :src=img alt="" class="rounded-2xl">
      <div class="px-1 w-full h-full flex flex-col justify-between">
         <div class="w-full">

            <div class="w-full flex items-center space-x-2">
               <Icon :name=icon size="32" class="text-primary" />
               <h1 class="my-2 mt-3 text-left text-2xl font-medium">{{ name }}</h1>
            </div>
            <hr class="mb-2">
            <p class="line-clamp text-left">{{ description }}</p>
         </div>

         <div class="w-full">

            <div class="w-full text-left mt-3">
               <div class="inline-block m-0.5" v-for="(tag, index) in tags" :key="index">
                  <BaseTag portfolio :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <hr class="mt-2 mb-1">
            <div class="w-full flex items-center justify-between">
               <p class="text-lg">{{ lastUpdate }}</p>
               <BaseButton :to=link tertiary class="w-fit -mr-2 ml-auto py-0">Details</BaseButton>
            </div>
         </div>
      </div>
   </div>
</template>
