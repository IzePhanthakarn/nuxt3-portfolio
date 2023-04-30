<template>
    <div class="w-full p-6 bg-color-base2 mt-4 rounded-xl">
      <h1 class="text-end text-5xl font-medium">
        {{ pressedKey || display }}
      </h1>
    </div>
  </template>
  <script lang="ts" setup>
  const display = ref(0);
  defineProps({
    pressedKey: {
      type: String,
    },
  });
  </script>