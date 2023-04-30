<script setup lang="ts">
const secretCode = ['/', 'l', 'o', 'g', 'i', 'n', 'Enter'];
let index = 0;
const is_open = ref(true)

function toggleMenu() {
    is_open.value = !is_open.value;
}

function closeMenu() {
    is_open.value = false;
}

function onKeyDown(event: any) {
    event.key === secretCode[index] ? index++ : index = 0;
    if (secretCode.length === index) {
        navigateTo('/privatelogin')
    }
}

window.addEventListener('keydown', onKeyDown);
const menus = [
    { name: 'Calculator', link: '/calculator', activeLink: '/services' },
];

</script>
<template>
    <div class="duration-300 min-h-screen flex flex-col justify-between bg-color-base overflow-hidden select-none">
        <Navbar />
        <div class="w-full flex relative">
            <div class="w-20 h-20 absolute left-2 flex items-center justify-center z-40">
                <Icon v-show="!is_open" @click="toggleMenu" name="gg:menu-left" size="44"
                    class="p-1.5 hover:bg-color-base2 rounded-md text-white cursor-pointer" />
                <Icon v-show="is_open" @click="toggleMenu" name="uil:arrow-circle-left" size="44"
                    class="p-1.5 hover:bg-color-base2 rounded-md text-white cursor-pointer" />
            </div>
            <div class="w-0 height-screen-content bg-color-base2 border-t flex flex-col items-center mt-20 relative duration-300 px-0 py-0"
                :class="{ 'w-96 ': is_open }">

                <div class="duration-300 w-full flex flex-col items-center justify-center"
                    :class="{ '-translate-x-40': !is_open }">

                    <!-- Search box -->
                    <div class="w-full 2xl:w-11/12 mt-4 text-black font-semibold">
                        <form class="form w-full px-3.5 h-10 relative flex items-center bg-white before:bg-primary"
                            onsubmit="return false;">
                            <button class="flex items-center space-x-3 border-0 bg-transparent text-[#8b8ba7]">
                                <Icon name="ci:search-magnifying-glass" />
                            </button>
                            <input class="input w-full h-full p-3 bg-transparent border-none" placeholder="Service's name"
                                type="text">
                            <button class="reset border-0 bg-transparent text-[#8b8ba7]" type="reset">
                                <Icon name="uil:x" />
                            </button>
                        </form>
                    </div>
                    <hr class="my-3 w-11/12">
                    <div class="w-full 2xl:w-11/12 text-white">
                        <ul>
                            <li v-for="menu in menus" :key="menu"
                                class="p-2 text-xl font-medium line-1clamp cursor-pointer rounded-lg hover:bg-color-base duration-100"
                                :class="{ 'bg-color-base': $route.path.includes(menu.link) }"
                                @click="navigateTo(`/services${menu.link}`)">{{ menu.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <slot class="z-10" />
        </div>
        <Foot />
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}

.height-screen-content {
    height: calc(100vh - 144px);
}

.form {
    border-radius: 30px;
    transition: border-radius 0.5s ease;
}

.form:before {
    content: "";
    position: absolute;
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 3px;
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform 0.3s ease;
}

.form:focus-within {
    border-radius: 2px;
}

input:focus {
    outline: none;
}

.form:focus-within:before {
    transform: scale(1);
}

.reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
}

input:not(:placeholder-shown)~.reset {
    opacity: 1;
    visibility: visible;
}</style>