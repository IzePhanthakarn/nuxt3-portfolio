<script setup lang="ts">
const props = defineProps({
   name: {
      type: String,
      default: ''
   },
   img: {
      type: String,
      default: ''
   },
   relation: {
      type: String,
      default: ''
   },
   detail: {
      type: String,
      default: ''
   },
   lastUpdate: {
      type: String,
      default: ''
   },
   score: {
      type: Number,
      default: 0
   },
   verify: {
      type: Boolean,
      default: false
   }
});
</script>

<template>
   <div
      class="bg-white text-black shadow h-full flex flex-col justify-between pb-1 rounded-xl">
      <div class="w-full">
         <div class="w-full flex space-x-4 bg-neutral text-white p-2.5 pb-1 rounded-t-xl">
            <img :src=img class="w-14 h-14 rounded-full border-2" alt="testimonail">
            <div class="w-full flex flex-col items-start">
               <h1 class="text-2xl font-semibold line-1clamp">{{ name }}</h1>
               <h2 class="text-lg">{{ relation }}</h2>
            </div>
            <Icon name="lucide:quote" :class="{'text-primary':verify}" size="50" />
         </div>
         <div class="w-full p-2.5">
            <p>{{ detail }}</p>
         </div>
      </div>

      <div>
         <hr class="mb-3 border-t-2 border-neutral">
         <div class="w-full mb-1 flex items-center justify-between px-2.5">
            <p>{{ lastUpdate }}</p>
            <BaseScore :score="score"/>
         </div>
      </div>
   </div>
</template>
