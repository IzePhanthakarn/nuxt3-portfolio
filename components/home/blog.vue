<script setup>
const blogs = [
   {
      title: "How to build Nuxt3 project",
      img: "/img/blogs/build-nuxt3-project.png",
      tags: [{ icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" }],
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe soluta ad est ea, asperiores suscipit veniam odit. Tenetur corporis, voluptatem nihil at eaque corrupti officiis unde aut, ducimus, velit dolorem.",
      lastUpdate: "Mar 23, 2023",
      link: "/about"
   },
   {
      title: "How to use tailwind with Nuxt3",
      img: "/img/blogs/tailwind-with-nuxt3.png",
      tags: [{ icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" },{ icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" }],
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe soluta ad est ea, asperiores suscipit veniam odit. Tenetur corporis, voluptatem nihil at eaque corrupti officiis unde aut, ducimus, velit dolorem.",
      lastUpdate: "Mar 23, 2023",
      link: "/about"
   },
   {
      title: "How to use Vue3-Carousel with Nuxt3",
      img: "/img/blogs/vue3carousel-with-nuxt3.png",
      tags: [{ icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" }],
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe soluta ad est ea, asperiores suscipit veniam odit. Tenetur corporis, voluptatem nihil at eaque corrupti officiis unde aut, ducimus, velit dolorem.",
      lastUpdate: "Mar 23, 2023",
      link: "/about"
   },
   {
      title: "How to Deploy Nuxt3 to Netlify",
      img: "/img/blogs/deploy-to-netlify.png",
      tags: [{ icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" },{ icon: "vscode-icons:file-type-netlify", name: "Netlify", link: "https://www.netlify.com/" }],
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe soluta ad est ea, asperiores suscipit veniam odit. Tenetur corporis, voluptatem nihil at eaque corrupti officiis unde aut, ducimus, velit dolorem.",
      lastUpdate: "Mar 23, 2023",
      link: "/about"
   }
]

function countCard() {
   const screenWidth = screen.width;
   if (screenWidth <= 640){
      return 1
   } else if (screenWidth <=1024){
      return 2
   } else if (screenWidth <= 1280) {
      return 3
   }
   return 4
}

const countNumber = countCard();
</script>

<template>
   <div class="w-full my-4 lg:my-0 flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div class="my-4 lg:mt-0">
            <h1 class="head after:content-['what_i_write'] after:bg-color-base before:bg-primary mx-auto">
               My Blogs</h1>
         </div>

         <div class="w-full h-full mt-4 sm:mt-6 overflow-hidden lg:mt-8 p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="slide in blogs.slice(0, countNumber)" :key="slide">
               <BaseBlogCard :title=slide.title :img=slide.img :tags=slide.tags :detail=slide.detail
                  :lastUpdate=slide.lastUpdate :link=slide.link />
            </div>
         </div>
         <BaseButton to="/blogs" class="w-fit mr-0 ml-auto mt-8">More</BaseButton>
      </div>
   </div>
</template>

<style scoped>
.head::before {
   bottom: 11.5px;
}

.head::after {
   bottom: 0;
}

.carousel__slide {
   padding: 10px;
}
</style>
