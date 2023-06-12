<script setup lang="ts">
const props = defineProps({
   icon: {
      type: String,
      default: ''
   },
   link: {
      type: String,
      default: ''
   },
   iconSize: {
      type: String,
      default: '24',
   },
   softSkill: {
      type: Boolean,
      default: false
   },
   portfolio:{
      type: Boolean,
      default: false
   }
});
</script>

<template>
   <NuxtLink :to=link target="_blank" >
      <div
         class="bg-[#222434] py-0.5 px-3 rounded-xl w-fit border-2 border-[#222434] duration-300 hover:border-white hover:scale-105 active:scale-95" :class="{'bg-color-base':portfolio}">
         <Icon v-if="icon != '' && iconSize != '' && softSkill == false" :name=icon class="mr-1" :size="iconSize" />
         <Icon v-if="icon != '' && iconSize === '' && softSkill == false" :name=icon class="mr-1" />
         <Icon v-if="softSkill" name='line-md:hash-small' class="mr-1" />
         <slot />
      </div>
   </NuxtLink>
</template>
