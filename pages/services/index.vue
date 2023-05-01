<script setup lang="ts">
useHead({
    title: 'Phanthakarn | Portfolio',
});
const services = [
    { img: "/img/services/calculator.png", projectTag: ["Calculator"], name: "Calculator", icon: "uil:calculator-alt", link: "/services/calculator", description: "This web service is an online calculator that can be accessed through a website. It supports basic mathematical calculations." },
    { img: "/img/services/password-generator.png", projectTag: ["Generator"], name: "Password Generator", icon: "material-symbols:wifi-protected-setup-rounded", link: "/services/password-generator", description: "This web service is an online password generator that can be generate a strong password for you." },
    { img: "/img/services/qrcode-generator.png", projectTag: ["Generator", "Image"], name: "QR Code Generator", icon: "material-symbols:wifi-protected-setup-rounded", link: "/services/qrcode-generator", description: "This web service is an online QR Code generator that can be generate and customize you QR Code." },
];
const tagList = ['All', 'Calculator', 'Converter', 'Generator', 'Game', 'Image'];
const tagSelected = ref('All');
const searchName = ref('');
function resetsearchName() {
    searchName.value = '';
}
function select(tag: string) {
    tagSelected.value = tag;
}
</script>

<template>
    <div class="w-full min-height text-white pt-24">
        <div class="container mx-auto px-5 flex flex-col justify-center items-center">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['maybe_help_you'] after:bg-color-base before:bg-primary mx-auto">Web Service
                </h1>
            </div>

            <!-- Search box -->
            <div data-aos="fade" class="w-full 2xl:w-11/12 mt-4 sm:mt-8 text-black font-semibold">
                <form class="form w-full px-3.5 h-10 relative flex items-center bg-white before:bg-primary"
                    onsubmit="return false;">
                    <button class="flex items-center space-x-3 border-0 bg-transparent text-[#8b8ba7]">
                        <Icon name="ci:search-magnifying-glass" />
                        <p class="mt-0.5">Search</p>
                    </button>
                    <input v-model="searchName" class="input w-full h-full p-4 bg-transparent border-none"
                        placeholder="Service's name" type="text">
                    <button class="reset border-0 bg-transparent text-[#8b8ba7]" type="reset" @click="resetsearchName">
                        <Icon name="uil:x" />
                    </button>
                </form>
            </div>

            <div data-aos="fade-left" class="w-full 2xl:w-11/12 mt-4 hidden sm:block">
                <ul class="flex h-10 items-center space-x-2">
                    <li class="h-full flex items-center px-6 rounded-full bg-color-base border-2 cursor-pointer duration-300 hover:scale-105 active:scale-95"
                        :class="{ 'border-primary': tagSelected === tag }" v-for="(tag, index) in tagList" :key="index"
                        @click="select(tag)">{{ tag }}</li>
                </ul>
            </div>

            <div data-aos="fade-left" class="w-full mt-4 bg-color-base-2 block sm:hidden">
                <select v-model="tagSelected" name="" id="" class="w-full bg-color-base2 px-4 py-1 rounded-lg">
                    <option v-for="(tag, index) in tagList" :key="index" :value=tag>{{ tag }}</option>
                </select>
            </div>

            <div
                class="w-full 2xl:w-11/12 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-t-2 py-4">
                <div v-for="(slide, index) in services" :key="index" class="duration-300 scale-1 opacity-1"
                    :class="{ 'hidden opacity-0 scale-90': !slide.projectTag.includes(tagSelected) && tagSelected != 'All', 'hidden': !slide.name.includes(searchName) }">
                    <BaseServiceCard :name=slide.name :description=slide.description :link=slide.link :img=slide.img
                        :icon=slide.icon />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.min-height {
    min-height: calc(100vh - 63px);
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
}
</style>