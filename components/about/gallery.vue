<script setup lang="ts">

const numPic = ref(6);
const gallerys = [
    { id: "1", imgUrl: "/img/gallery/me3.jpg" },
    { id: "2", imgUrl: "/img/gallery/me4.jpg" },
    { id: "3", imgUrl: "/img/gallery/me5.jpg" },
    { id: "6", imgUrl: "/img/gallery/me8.jpg" },
    { id: "7", imgUrl: "/img/gallery/me9.jpg" },
    { id: "5", imgUrl: "/img/gallery/me7.jpg" },
    { id: "8", imgUrl: "/img/gallery/me10.jpg" },
    { id: "4", imgUrl: "/img/gallery/me6.jpg" },
    { id: "11", imgUrl: "/img/gallery/me13.jpg" },
    { id: "9", imgUrl: "/img/gallery/me11.jpg" },
    { id: "10", imgUrl: "/img/gallery/me12.jpg" },
    { id: "12", imgUrl: "/img/gallery/me14.jpg" },
    { id: "13", imgUrl: "/img/gallery/me15.jpg" },
    { id: "14", imgUrl: "/img/gallery/me16.jpg" },
    { id: "15", imgUrl: "/img/gallery/me17.jpg" },
    { id: "16", imgUrl: "/img/gallery/me18.jpg" },
    { id: "17", imgUrl: "/img/gallery/me19.jpg" },
    { id: "18", imgUrl: "/img/gallery/me20.jpg" },
    { id: "19", imgUrl: "/img/gallery/me21.jpg" },
    { id: "20", imgUrl: "/img/gallery/me22.jpg" },
    { id: "21", imgUrl: "/img/gallery/me23.jpg" },
    { id: "22", imgUrl: "/img/gallery/me24.jpg" },
    { id: "23", imgUrl: "/img/gallery/me25.jpg" },
    { id: "24", imgUrl: "/img/gallery/me26.jpg" }
]
let focusImg = '';
const isOpen = ref(false);
const screen = window.screen.width;

function showmore() {
    numPic.value += 6
}

function responsive() {
    numPic.value = 6
    if (screen > 640 && screen < 1280) {
        numPic.value = 9
    }
    else if (screen >= 1280) {
        numPic.value = 24
    }
}

responsive();
function show(img: string) {
    focusImg = img
    isOpen.value = true
}

function close() {
    focusImg = ''
    isOpen.value = false
}

</script>

<template>
    <div class="w-full mt-6 sm:mt-0 flex justify-center items-center py-0 lg:py-8">
        <div class="container px-2.5 sm:px-5 flex flex-col justify-center items-center">

            <!-- Title -->
            <div data-aos="fade" class="w-full mb-4 -py-4 font-semibold tracking-wider flex items-end space-x-2 sm:space-x-4">
                <Icon class="text-primary translate-y-0.5" name="material-symbols:gallery-thumbnail-outline-rounded"
                    size="50" />
                <h1 class="text-3xl mb-1">My Gallery</h1>
            </div>

            <!-- Gallery -->
            <div class="bg-color-base2 p-2.5 sm:p-4 rounded-2xl columns-2 sm:columns-3 xl:columns-5 gap-2.5 xl:gap-4">
                <div v-for="(gallery, index) in gallerys.slice(0, numPic)" :key="index">
                    <img data-aos="fade-up" class="rounded-lg mb-2.5 xl:mb-4 cursor-pointer duration-300 hover:brightness-110"
                        :src=gallery.imgUrl @click="show(gallery.imgUrl)" />
                </div>
            </div>
            <div class="w-full flex items-center justify-center mt-2">
                <button class="border-2 px-2 py-1.5 active:scale-105 rounded-xl" :isDown=true @click="showmore()" v-show="numPic <= 20">
                    Show more
                    <Icon name="uil:angle-down" />
                </button>
            </div>
        </div>
        <div v-if="focusImg != ''"
            class="prevent-box bg-color-base2 border-2 border-color-base w-11/12 sm:w-2/3 lg:w-auto px-2.5 text-default font-medium"
            :class="{ 'active': isOpen }">
            <div class="flex justify-end mr-0">
                <Icon name="uil:x" class="my-2 mr-1 cursor-pointer duration-100 hover:text-primary" @click="close">close</Icon>
            </div>
            <img class="rounded-lg drop-shadow-md" :src=focusImg>
            <div class="w-full my-3 flex justify-start items-center space-x-1 sm:space-x-4">
                <BaseButton :href=focusImg download="" target="_blank">Download</BaseButton>
                <BaseButton tertiary :href=focusImg target="_blank">Open new tab</BaseButton>
            </div>
        </div>
        <div class="overlay" :class="{ 'active': isOpen }" @click="close"></div>
    </div>
</template>

<style scoped>
.prevent-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: .5s ease-in-out;
    border-radius: 20px;
    z-index: 60;
}

.prevent-box.active {
    transform: translate(-50%, -50%) scale(1);
}

.prevent-box img {
    max-height: 80vh;
}

.overlay {
    position: fixed;
    opacity: 0;
    transition: .2s ease-in-out;
    z-index: 59;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
}

.overlay.active {
    opacity: 1;
    pointer-events: all;
}
</style>