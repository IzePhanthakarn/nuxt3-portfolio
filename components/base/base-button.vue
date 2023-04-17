<template>
   <NuxtLink :to=link
      class="primary-button  2xl:text-xl py-1.5 px-4 ring-zinc-300 hover:ring hover:ring-primary duration-300 rounded-lg flex justify-between items-center cursor-pointer"
      :class="{ 'ring-0 hover:ring-1 hover:ring-zinc-300': secondary , 'ring-2': !secondary && !tertiary, 'py-2.5': secondary && widthScreen >= 1536 && icon == '', 'ring-0 hover:ring-0 decoration-primary hover:underline underline-offset-4': tertiary }">
      <Icon v-if="icon != '' && widthScreen >= 1536" :name=icon class="mr-2" :size=iconSize />
      <Icon v-if="icon != '' && widthScreen < 1536" :name=icon class="mr-2" />
      <slot /> <span v-if="arrow"
         class="arrow w-2 h-2 2xl:w-3 2xl:h-3 relative border-r-[2px] border-b-[2px] border-border-zinc-300 before:bg-zinc-300" ></span>
   </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
   arrow: {
      type: Boolean,
      default: true
   },
   icon: {
      type: String,
      default: ''
   },
   secondary: {
      type: Boolean,
      default: false
   },
   tertiary: {
      type: Boolean,
      default: false
   },
   link: {
      type: String,
      default: ''
   },
   iconSize: {
      type: String,
      default: '24'
   },
   isDown: {
    type: Boolean,
    default: false
   }
});

const widthScreen = screen.width;
</script>

<style scoped>
.arrow {
   transform: rotate(-45deg);
   margin: 0 6px;
   transition: all .3s ease;
}

.arrow::before {
   display: block;
   width: 3px;
   transform-origin: bottom right;
   height: 2px;
   position: absolute;
   opacity: 0;
   bottom: calc(-2px / 2.5);
   transform: rotate(45deg);
   transition: all .3s ease;
   content: "";
   right: 0;
}

.primary-button:hover>.arrow {
   transform: rotate(-45deg) translate(4px, 4px);
   border-color: text-hover-color;
}

.primary-button:hover>.arrow::before {
   opacity: 1;
   width: 12px;
}

@media (min-width: 1536px) {
   .primary-button:hover>.arrow::before {
      width: 16px;
   }
}
</style>
