<template>
   <NuxtLink :to=link
      class="primary-button 2xl:text-xl py-1.5 px-4 ring-zinc-300 hover:ring hover:ring-primary duration-300 rounded-lg flex justify-between items-center cursor-pointer"
      :class="{ 'ring-0 hover:ring-1 hover:ring-zinc-300': secondary , 'ring-2': !secondary && !tertiary, 'py-2.5': secondary && widthScreen >= 1536 && icon == '', 'ring-0 hover:ring-0 decoration-primary hover:underline underline-offset-4': tertiary }">
      <Icon v-if="icon != '' && widthScreen >= 1536" :name=icon class="mr-2" :size=iconSize />
      <Icon v-if="icon != '' && widthScreen < 1536" :name=icon class="mr-2" />
      <slot /> <span v-if="arrow"
         class="arrow w-2 h-2 2xl:w-3 2xl:h-3 relative border-r-[2px] border-b-[2px] border-border-zinc-300 before:bg-zinc-300"></span>
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
<!-- <template>
    <button class="h-10 text-sm font-light px-3 sm:px-8 flex justify-between items-center border rounded-full"
      v-on:mouseover="icon_first = icon_over" v-on:mouseout="icon_first = icon_out" :type="type"
      style="transition: all 0.15s ease 0s" :class="style" @click="$emit('click', $event)" :disabled="disabled">
      <slot />
      <base-icon v-show="show_icon" :color="icon_first ? icon_first : color_icon" class="ml-3" :class="class_icon"
        :icon="icon" viewBox="0 0 512 512" width="20" height="20" />
    </button>
  </template>

  <script>
  import baseIcon from './base-icon.vue'
  export default {
    components: { baseIcon },
    inheritAttrs: true,
    data() {
      return {
        icon_over: '',
        icon_out: '',
        icon_first: '',
      }
    },
    props: {
      type: {
        type: String,
        default: 'button',
      },
      icon: {
        type: String,
        default: 'arrow-right-long',
      },
      show_icon: {
        type: Boolean,
        default: true,
      },
      class_icon: {
        type: String,
        default: '',
      },
      color_icon: {
        type: String,
        default: '',
      },
      color_icon_hover: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'default',
        validator(value) {
          return [
            'default',
            'white',
            'custom',
          ].includes(value)
        },
      },
    },
    mounted() {
      this.arrow_style()
    },
    methods: {
      arrow_style() {
        if (this.color == 'custom') {
          this.icon_first = this.color_icon
          this.icon_over = this.color_icon_hover
          this.icon_out = this.color_icon
        }
      },
    },
    computed: {
      style() {
        if (this.color == 'default') {
          this.icon_first = '#5E5F5F'
          this.icon_over = '#ffffff'
          this.icon_out = '#5E5F5F'
          return 'text-quaternary hover:text-white hover:bg-tertiary hover:border-tertiary border-quaternary'
        } else if (this.color == 'white') {
          this.icon_first = '#ffffff'
          this.icon_over = '#5E5F5F'
          this.icon_out = '#ffffff'
          return 'text-white hover:text-quaternary hover:border-quaternary border-white'
        } else if (this.color == 'custom') {
          return ''
        } else return
      },
    },
  }
  </script> -->
