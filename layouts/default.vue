<script setup lang="ts">

const is_scroll = ref(false);

function myScrollFunc() {
    var positionScrollY = window.scrollY;
    is_scroll.value = positionScrollY <= 20 ? false : true;
};

window.addEventListener("scroll", myScrollFunc);

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<template>
    <div class="duration-300 bg-[#171820] text-white">
        <Navbar class="z-20" />
        <slot class="z-10" />
        <div class="h-screen"></div>
        <button
            class="fixed w-[50px] h-[50px] translate-y-2.5 right-2.5 duration-[400ms] bg-primary hover:bg-primary-focus opacity-0 rounded-xl z-50 hide-totop-btn"
            :class="{ 'opacity-100 show-totop-btn': is_scroll }" id="totop" @click="toTop">
            <Icon class="text-white" size="50" name="uil:angle-up" />
        </button>
    </div>
</template>

<style scoped>
.hide-totop-btn {
    bottom: 0;
}

.show-totop-btn {
    bottom: 20px;
}
</style>
