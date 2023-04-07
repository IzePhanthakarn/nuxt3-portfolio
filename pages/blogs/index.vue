<script setup>
useHead({
    title: 'Phanthakarn | Blogs',
})
const blogs = [
    {
        title: "How to build Nuxt 3 project",
        author: "Phanthakarn Khumphai",
        img: "https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/Banner-blogs.png?alt=media&token=d5ba768c-72a3-4943-bcc2-3c92d56cd391",
        tags: [
            { icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" },
            { icon: "logos:tailwindcss-icon", name: "TailwindCSS", link: "https://tailwindcss.com/" },
            { icon: "line-md:github-loop", name: "Github", link: "https://github.com/" },
            { icon: "vscode-icons:file-type-netlify", name: "Netlify", link: "https://www.netlify.com/" },
        ],
        description: "This article will focus on explaining how to build a project with Nuxt 3 from scratch, using the CSS framework tailwindcss to make development easier. We will also cover how to store the project on Github and deploy it on Netlify.",
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe soluta ad est ea, asperiores suscipit veniam odit. Tenetur corporis, voluptatem nihil at eaque corrupti officiis unde aut, ducimus, velit dolorem.",
        lastUpdate: "April 7, 2023",
        link: "/blogs/how-to-build-nuxt3-project",
        slug: "how-to-build-nuxt3-project"
    }
]

function countCard() {
    const screenWidth = screen.width;
    if (screenWidth <= 1024) {
        return 2
    } else if (screenWidth <= 1280) {
        return 3
    }
    return 4
}

const countNumber = countCard();
</script>

<template>
    <div class="w-full height-screen min-height text-white pt-24">
        <div class="container mx-auto px-5 flex flex-col justify-center items-center">
            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['what_i_write'] after:bg-color-base before:bg-primary mx-auto">
                    My Blogs</h1>
            </div>

            <div data-aos="fade-up"
                class="w-full h-full mt-4 sm:mt-6 overflow-hidden lg:mt-8 p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div v-for="slide in blogs.slice(0, countNumber)" :key="slide">
                    <BaseBlogCard :title=slide.title :img=slide.img :tags=slide.tags :description=slide.description
                        :lastUpdate=slide.lastUpdate :link=slide.link />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}

@media (max-width: 640) {
    .height-screen {
        height: auto;
    }
}

.head::before {
    bottom: 10.5px;
}

.head::after {
    bottom: -2px;
}
</style>