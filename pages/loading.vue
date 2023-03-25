<script setup>
definePageMeta({
  layout: "loading",
});
</script>

<template>
   <div class="background"></div>
</template>

<style scoped>
.background {
   background-image: url('/sleep-mode.gif');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   min-height: 100vh;
}
</style>
