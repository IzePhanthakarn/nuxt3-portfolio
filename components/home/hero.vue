<script setup lang="ts">
function scrollDown() {
    window.scrollTo({
        top: screen.height - 82,
        behavior: "smooth"
    });
}
</script>

<template>
    <div class="h-screen text-white w-full flex justify-center items-center">
        <div
            class="container h-full px-5 xl:-mt-12 flex flex-col lg:flex-row justify-center lg:justify-around 2xl:justify-between lg:items-center">
            <div class="mt-4 text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-medium">
                <h1>Hello, my name is </h1>
                <h2 class="-my-1 sm:my-0.5 xl:my-1 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold">Phanthakarn
                    Khumphai
                </h2>
                <div class="waviy font-medium text-xl sm:text-2xl lg:text-4xl xl:text-5xl mb-2 sm:mb-0">
                    And I'm a
                    <span class="text-primary" style="--i:1">f</span>
                    <span class="text-primary" style="--i:2">u</span>
                    <span class="text-primary" style="--i:3">l</span>
                    <span class="text-primary" style="--i:4">l</span>
                    <span class="text-primary" style="--i:5">-</span>
                    <span class="text-primary" style="--i:6">s</span>
                    <span class="text-primary" style="--i:7">t</span>
                    <span class="text-primary" style="--i:8">a</span>
                    <span class="text-primary" style="--i:9">c</span>
                    <span class="text-primary" style="--i:10">k</span>
                    <span>&nbsp;</span>
                    <span class="text-primary" style="--i:11">d</span>
                    <span class="text-primary" style="--i:12">e</span>
                    <span class="text-primary" style="--i:13">v</span>
                    <span class="text-primary" style="--i:14">e</span>
                    <span class="text-primary" style="--i:15">l</span>
                    <span class="text-primary" style="--i:16">o</span>
                    <span class="text-primary" style="--i:17">p</span>
                    <span class="text-primary" style="--i:18">e</span>
                    <span class="text-primary" style="--i:19">r</span>
                    <span class="text-primary" style="--i:20">.</span>
                </div>
                <NuxtLink
                    class="text-lg sm:text-xl xl:text-2xl font-semibold px-4 py-1.5 outline-none border-0 bg-transparent z-[1] relative duration-300 hover:text-white hover:before:w-full before:content-[''] before:z-[-1] before:duration-300 before:bg-primary before:drop-shadow-xl before:rounded-xl before:h-full before:w-1 before:top-0 before:left-0 before:absolute"
                    to="/about">About me</NuxtLink>
            </div>

            <div
                class="w-80 -mt-12 sm:w-[500px] lg:w-96 xl:w-[500px] 2xl:w-[650px] flex justify-center items-center mt-12 mx-auto text-3xl sm:text-5xl 2xl:text-7xl relative sm:mx-auto lg:mx-0">
                <img src="/img/hero/me.png" alt=""
                    class="absolute w-5/6 z-10 my-auto animate-floaty">
                <img src="/img/hero/fire-icon.png" alt="" class="drop-shadow-2xl z-0">
            </div>
        </div>
        <div
            class="absolute w-full lg:container h-20 bottom-6 flex justify-center md:justify-between md:px-6 xl:px-10 2xl:px-0 items-center">
            <div class="flex justify-around items-center space-x-6">
                <Nuxt-Link to="https://www.facebook.com/ize.phanthakarn.5/" target="_blank">
                    <Icon name="fa6-brands:square-facebook" class="hover:text-primary hover:-translate-y-2 duration-300"
                        size="45"></Icon>
                </Nuxt-Link>
                <Nuxt-Link to="https://www.instagram.com/jjaoizee/" target="_blank">
                    <Icon name="fa6-brands:square-instagram" class="hover:text-primary hover:-translate-y-2 duration-300"
                        size="45"></Icon>
                </Nuxt-Link>
                <Nuxt-Link to="https://line.me/ti/p/Gkx0_u2GwJ" target="_blank">
                    <Icon name="fa6-brands:line" class="hover:text-primary hover:-translate-y-2 duration-300" size="40">
                    </Icon>
                </Nuxt-Link>
                <Nuxt-Link to="https://github.com/izephanthakarn" target="_blank">
                    <Icon name="fa6-brands:square-github" class="hover:text-primary hover:-translate-y-2 duration-300"
                        size="45"></Icon>
                </Nuxt-Link>
            </div>

            <div class="hidden sm:flex justify-center items-center space-x-3 cursor-pointer " @click="scrollDown">
                <p class="text-center text-xl font-bold">SCROLL</p>
                <div
                    class="scrolldown relative border-4 border-primary w-[30px] h-[50px] rounded-full before:content-[''] before:absolute before:bottom-[30px] before:left-1/2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:ml-[-3px] before:animate-scrolldown">
                    <div class="chevrons pt-1.5 -ml-1 mt-12 w-[30px] flex flex-col items-center">
                        <div
                            class="chevrondown -mt-1.5 relative border-primary border-r-[3px] border-b-[3px] inline-block w-2.5 h-2.5 rotate-45 animate-pulse">
                        </div>
                        <div
                            class="chevrondown -mt-1.5 relative border-primary border-r-[3px] border-b-[3px] inline-block w-2.5 h-2.5 rotate-45 animate-pulse2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.waviy span {
    display: inline-block;
    text-transform: uppercase;
    animation: flip 5s infinite;
    animation-delay: calc(.2s * var(--i));
}

@keyframes flip {

    0%,
    80% {
        transform: rotateY(360deg)
    }
}</style>
