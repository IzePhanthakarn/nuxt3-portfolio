<script setup lang="ts">
import { portfolioCard } from '~~/assets/interface'
useHead({
  title: 'Phanthakarn | Portfolio',
})
const softskillTags: portfolioCard[] = [
    {
        img: "/img/projects/nuxt3-portfolio.png", projectTag: "UI Website", name: "My Portfolio Website", icon: "ph:globe", lastUpdate: "Mar 23, 2023", link: "https://github.com/IzePhanthakarn/nuxt3-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project. I am committed to consistently updating the content, whether it be new projects or newly acquired skills that I have learned.", tags: [
            { icon: "logos:nuxt-icon", name: "Nuxt3", link: "https://nuxtjs.org/" },
            { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "20" },
            { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
            { icon: "vscode-icons:file-type-netlify", name: "Netlify", link: "https://www.netlify.com/" },
        ]
    },
    {
        img: "/img/projects/CLI-generating-lorem.png", projectTag: "Programming", name: "CLI-generating-lorem", icon: "ph:terminal-window-bold", lastUpdate: "Mar 11, 2023", link: "https://github.com/IzePhanthakarn/CLI-generating-lorem", description: "This is a TypeScript-based CLI to generate Lorem Ipsum text, using a faker to generate the data and a commander to create a command-line interface.", tags: [
            { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "22" }
        ]
    },
    {
        img: "/img/projects/cash-book-sheet.png", projectTag: "Spreadsheet", name: "Cash Book Sheet", icon: "simple-icons:microsoftexcel", lastUpdate: "Mar 8, 2023", link: "https://docs.google.com/spreadsheets/d/1KDk4xL5cMBGHrkF4VPU6I6cUnBYcPP0n4qh3kf_XaQU/edit?usp=drivesdk", description: "The monthly income and expense report includes expenditure categories with basic summarized information such as total expenses, food expenses, shopping expenses, and many others. This sheet was created due to the issue of extravagant spending and the lack of knowledge regarding where the money is being spent. To gain insight into daily expenses, this sheet was developed to track where every penny is being spent.", tags: [
            { icon: "simple-icons:googlesheets", name: "Google Sheet", link: "https://www.google.com/intl/th_th/sheets/about/" }
        ]
    },
    {
        img: "/img/projects/nuxt3-isv.png", projectTag: "UI Website", name: "UI Dashboard", icon: "ph:globe", lastUpdate: "Oct 24, 2022", link: "https://github.com/IzePhanthakarn/nuxt3-isv", description: "The monthly income and expense report includes expenditure categories with basic summarized information such as total expenses, food expenses, shopping expenses, and many others. This sheet was created due to the issue of extravagant spending and the lack of knowledge regarding where the money is being spent. To gain insight into daily expenses, this sheet was developed to track where every penny is being spent.", tags: [
            { icon: "logos:nuxt-icon", name: "Nuxt3", link: "https://nuxtjs.org/" },
            { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "20" },
            { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
        ]
    },
    {
        img: "/img/projects/nuxt2-portfolio.png", projectTag: "UI Website", name: "My Portfolio Website (Old version)", icon: "ph:globe", lastUpdate: "Oct 24, 2022", link: "https://github.com/IzePhanthakarn/nuxt-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project.", tags: [
            { icon: "logos:nuxt-icon", name: "Nuxt2", link: "https://nuxtjs.org/" },
            { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
            { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
        ]
    },
    {
        img: "/img/projects/html-portfolio.png", projectTag: "UI Website", name: "My Portfolio Website (Old version)", icon: "ph:globe", lastUpdate: "Dec 31, 2021", link: "https://github.com/IzePhanthakarn/phanthakarns-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project.", tags: [
            { icon: "vscode-icons:file-type-html", name: "HTML", link: 'https://www.w3schools.com/html/' },
            { icon: "vscode-icons:file-type-css", name: "CSS", link: "https://www.w3schools.com/css/" },
            { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
        ]
    },
]

const tagList = ['All', 'UI Website', 'Web Service', 'Programming', 'Spreadsheet']
const tagSelected = ref('All');
const searchName = ref('')
function resetsearchName() {
    searchName.value = ''
}
function select(tag: string) {
    tagSelected.value = tag
}
</script>

<template>
    <div class="w-full min-height text-white pt-24">
        <div class="container mx-auto px-5 flex flex-col justify-center items-center">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['what_i_do'] after:bg-color-base before:bg-primary mx-auto">Portfolio</h1>
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
                        placeholder="Project's name" type="text">
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
                <div v-for="(slide, index) in softskillTags" :key="index" class="duration-300 scale-1 opacity-1"
                    :class="{ 'hidden opacity-0 scale-90': slide.projectTag != tagSelected && tagSelected != 'All', 'hidden': !slide.name.includes(searchName) }">
                    <BaseHomeProjectCard :name=slide.name :lastUpdate=slide.lastUpdate :description=slide.description
                        :link=slide.link :img=slide.img :icon=slide.icon :tags="slide.tags" />
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