<script setup lang="ts">
const is_open = ref(false);
function toggleBars() {
   is_open.value = !is_open.value
}
</script>

<template>
    <div class="w-screen h-screen bg-[#e5e5e5] text-white">
        <NavbarAdmin @toggle-menu="toggleBars" />
        <div class="w-full content flex">
            <SidebarAdmin :is_open=is_open />
            <div class="w-full p-8">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.content{
   min-height: calc(100vh - 64px);
}
</style>