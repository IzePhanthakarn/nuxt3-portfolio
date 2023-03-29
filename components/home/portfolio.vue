<script setup>
// import { homeProject } from '~~/assets/interface'
const softskillTags = [
   {
      img: "/img/projects/nuxt3-portfolio.png", name: "My Portfolio Website", icon: "ph:globe", lastUpdate: "Mar 23, 2023", link: "https://github.com/IzePhanthakarn/nuxt3-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project. I am committed to consistently updating the content, whether it be new projects or newly acquired skills that I have learned.", tags: [
         { icon: "logos:nuxt-icon", name: "Nuxt3", link: "https://nuxtjs.org/" },
         { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "22" },
         { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
         { icon: "vscode-icons:file-type-netlify", name: "Netlify", link: "https://www.netlify.com/" },
      ]
   },
   {
      img: "/img/projects/CLI-generating-lorem.png", name: "CLI-generating-lorem", icon: "ph:terminal-window-bold", lastUpdate: "Mar 11, 2023", link: "https://github.com/IzePhanthakarn/CLI-generating-lorem", description: "This is a TypeScript-based CLI to generate Lorem Ipsum text, using a faker to generate the data and a commander to create a command-line interface.", tags: [
         { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "22" }
      ]
   },
   {
      img: "/img/projects/cash-book-sheet.png", name: "Cash Book Sheet", icon: "simple-icons:microsoftexcel", lastUpdate: "Mar 8, 2023", link: "https://docs.google.com/spreadsheets/d/1KDk4xL5cMBGHrkF4VPU6I6cUnBYcPP0n4qh3kf_XaQU/edit?usp=drivesdk", description: "The monthly income and expense report includes expenditure categories with basic summarized information such as total expenses, food expenses, shopping expenses, and many others. This sheet was created due to the issue of extravagant spending and the lack of knowledge regarding where the money is being spent. To gain insight into daily expenses, this sheet was developed to track where every penny is being spent.", tags: [
         { icon: "simple-icons:googlesheets", name: "Google Sheet", link: "https://www.google.com/intl/th_th/sheets/about/" }
      ]
   },
   {
      img: "/img/projects/nuxt3-isv.png", name: "UI Dashboard", icon: "ph:globe", lastUpdate: "Oct 24, 2022", link: "https://github.com/IzePhanthakarn/nuxt3-isv", description: "The monthly income and expense report includes expenditure categories with basic summarized information such as total expenses, food expenses, shopping expenses, and many others. This sheet was created due to the issue of extravagant spending and the lack of knowledge regarding where the money is being spent. To gain insight into daily expenses, this sheet was developed to track where every penny is being spent.", tags: [
         { icon: "logos:nuxt-icon", name: "Nuxt3", link: "https://nuxtjs.org/" },
         { icon: "skill-icons:typescript", name: "TypeScript", link: "https://www.typescriptlang.org/", iconSize: "22" },
         { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      ]
   },
   {
      img: "/img/projects/nuxt2-portfolio.png", name: "My Portfolio Website (Old version)", icon: "ph:globe", lastUpdate: "Oct 24, 2022", link: "https://github.com/IzePhanthakarn/nuxt-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project.", tags: [
         { icon: "logos:nuxt-icon", name: "Nuxt2", link: "https://nuxtjs.org/" },
         { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
         { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      ]
   },
   {
      img: "/img/projects/html-portfolio.png", name: "My Portfolio Website (Old version)", icon: "ph:globe", lastUpdate: "Dec 31, 2021", link: "https://github.com/IzePhanthakarn/phanthakarns-portfolio", description: "This project is a portfolio website that showcases my skills and displays various projects that I have worked on, demonstrating my experience in project development. I utilized nuxt3 and JavaScript libraries to create this project.", tags: [
         { icon: "vscode-icons:file-type-html", name: "HTML", link: 'https://www.w3schools.com/html/' },
         { icon: "vscode-icons:file-type-css", name: "CSS", link: "https://www.w3schools.com/css/" },
         { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
      ]
   },
]
const currentSlide = ref(0)
const myCarousel = ref(null)
const softskillTagsSize = Object.keys(softskillTags).length;
function next() {
   myCarousel.value.next()
}
function prev() {
   myCarousel.value.prev()
}
const breakpoints = ref({
   700: {
      itemsToShow: 1,
      // snapAlign: 'center',
   },
   // 1024 and up
   1024: {
      itemsToShow: 2.5,
      // snapAlign: 'start',
   },
})
</script>

<template>
   <div class="w-full my-14 sm:my-0 sm:mb-4 flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div>
            <h1 class="head after:content-['what_i_do'] after:bg-color-base before:bg-primary mx-auto">
               My Portfolio</h1>
         </div>

         <div
            class="w-full mt-4 sm:mt-6 lg:mt-8 xl:mt-10 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-24">

            <div class="w-full mt-4 flex flex-col items-start justify-between">
               <div class="">
                  <div class="flex items-start space-x-2 mb-2 border-0 sm:border-t pt-0 sm:pt-4">
                     <Icon name="octicon:project-16" size="30" class="mb-2 text-primary" />
                     <h1 class="text-3xl font-medium">About my project</h1>
                  </div>
                  <p> <span class="text-primary text-2xl">>></span> Look to the <span
                        class="hidden sm:inline-block">right</span><span class="inline-block sm:hidden">below</span> here,
                     these are all the projects I have
                     ever created. These projects serve as a
                     testament
                     to my ability to utilize various skills in order to create them, and they can be used to assist you in
                     making decisions, whether it be hiring me for a full-time position or hiring me for a specific
                     project.
                  </p>
                  <BaseButton class="w-fit mt-4" to="/portfolio">More</BaseButton>
               </div>
                  <div class="flex items-end justify-center space-x-2 mr-0 ml-auto">
                     <Icon name="uil:angle-left" @click="prev"
                        class="text-color-base2 border-2 border-color-base2 rounded-full duration-200 hover:cursor-default hover:scale-100 hover:border-color-base2 pointer-events-none"
                        size="40"
                        :class="{ 'text-white border-white hover:border-primary  hover:scale-105 hover:cursor-pointer active:scale-95 pointer-events-auto': currentSlide != 0 }" />
                     <Icon name="uil:angle-right" @click="next"
                        class="text-color-base2 border-2 border-color-base2 rounded-full duration-200 hover:cursor-default hover:scale-100 hover:border-color-base2 pointer-events-none"
                        size="40"
                        :class="{ 'text-white border-white hover:border-primary hover:scale-105 hover:cursor-pointer active:scale-95 pointer-events-auto ': currentSlide != softskillTagsSize - 1 }" />
                  </div>
            </div>

            <div class="lg:col-span-2 mt-2 sm:mt-0">
               <carousel :items-to-show="1" ref="myCarousel" v-model="currentSlide" :breakpoints="breakpoints"
                  :transition="300">
                  <slide v-for="slide in softskillTags" :key="slide">
                     <BaseHomeProjectCard :name=slide.name :lastUpdate=slide.lastUpdate :description=slide.description
                        :link=slide.link :img=slide.img :icon=slide.icon :tags="slide.tags" />
                  </slide>
               </carousel>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.carousel__slide {
   padding: 10px;
}
</style>
