<template>
    <div class="bg-toggle-bg grid grid-cols-4 gap-4 p-4 mt-2 rounded-xl">
      <button
        :value="key"
        @click="$emit('display:modelValue', $event)"
        v-for="key in numbers"
        :key="key"
        class="bg-color-base2 md:w-24 w-16 py-3 rounded-xl bg-key-bg hover:brightness-125 text-sec-text text-3xl font-medium">
        {{ key }}
      </button>
      <button
        value="Reset"
        class="bg-color-base2 hover:brightness-125 col-span-2 py-3 rounded-xl text-2xl font-medium"
        @click="$emit('display:modelValue', $event)"
      >
        Reset
      </button>
      <button
        class="hover:brightness-125 bg-primary col-span-2 py-3 rounded-xl text-eq-text text-3xl font-medium"
        value="Enter"
        @click="$emit('display:modelValue', $event)"
      >
        =
      </button>
    </div>
  </template>
  <script lang="ts" setup>
  let numbers = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];
  const emit = defineEmits<{
    // (e: 'change', id: number): void
    (e: "display:modelValue", value: Event): void;
  }>();
  </script>

<style scoped>
button {
 transition: all .3s ease;
 box-shadow: black 2px 5px 0px 0px;
}

button:active {
 box-shadow: black 0px 0px 0px 0px;
 transform: translateY(5px);
 transition: 200ms;
}
</style>