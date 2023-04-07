<script setup lang="ts">
const blog = {
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

useHead({
  title: `Blog | ${ blog.title}`,
  meta: [
    { name: 'description', content: blog.description}
  ]
})

function copyText(text: string) {
    navigator.clipboard.writeText(text);
}
</script>

<template>
    <div class="container text-white mx-auto pt-28 px-5 pb-10">
        <div class="flex flex-col lg:grid w-full lg:w-3/4 mx-auto lg:grid-cols-2 lg:gap-8">

            <img data-aos="fade-right" :src=blog.img class="w-full mx-auto rounded-2xl mb-4 lg:mb-0" alt="">
            <div data-aos="fade-left" class="mb-4 lg:mb-0">
                <h1 class="text-2xl sm:text-3xl font-semibold">{{ blog.title }}</h1>
                <div class="flex mb-1 items-center space-x-1">
                    <h2 class="">{{ blog.lastUpdate }} by</h2>
                    <NuxtLink to="/about" class="text-primary hover:cursor-pointer hover:underline underline-offset-2">{{
                        blog.author }}</NuxtLink>
            </div>
            <div v-for="(tag, index) in blog.tags" :key="index" class="inline-block m-0.5">
                <BaseTag class="inline-block" portfolio :icon=tag.icon :link="tag.link">{{ tag.name }}</BaseTag>
            </div>
            <hr class="my-4">
            <div>{{ blog.description }}</div>
        </div>
    
        <div class="col-span-2">
            <div class=" mx-auto">
                <p data-aos="fade-up">
                Nuxt is a framework built on top of Vue.js for developing web applications that support Server Side
                Rendering
                (SSR) and Progressive Web Application (PWA) capabilities. It is suitable for web applications that require
                SEO, such as blogs and e-commerce stores. Choosing Nuxt can also reduce development time due to the
                structure and formats provided by the Nuxt framework, such as automatic file-based routing, automatic
                importing of files and modules (Nuxt Auto Import), and the ability to design and create APIs within the
                framework. This makes it easier and more efficient for developers to work.
                </p>
                <br><br>
                <h1 data-aos="fade-right" class="text-xl lg:text-2xl font-medium">🎉 To begin, use the command to create a project via the command prompt.</h1>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-center justify-between select-text"><code>npx nuxi init &lt;project-name></code><Icon @click="copyText('npx nuxi init <project-name>')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">Nuxt project is created with v3 template. Next steps: go to path of project and install dependencies:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>cd &lt;project-name></code><code>npm install</code></div><Icon @click="copyText('cd <project-name> && npm install')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">Finally, use this command to run the project. And open your browser at <NuxtLink to="http://localhost:3000/" target="_blank" class="text-primary hover:underline underline-offset-2">localhost:3000</NuxtLink>:</p> 
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-center justify-between select-text"><code>npm run dev</code><Icon @click="copyText('npm run dev')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">You will see</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/welcom-to-nuxt.png?alt=media&token=924edd5a-5623-4c9f-b505-2ffbcccc52f8" alt="">
                <p data-aos="fade-right">change file app.vue to:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>&lt;template> <br> &nbsp;&lt;NuxtLayout> <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;NuxtPage /> <br>&nbsp;&nbsp;&lt;/NuxtLayout> <br>&lt;/template></code></div><Icon @click="copyText('<template>\n <NuxtLayout>\n      <NuxtPage />\n</NuxtLayout>\n</template>')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">Create file <span class="text-primary">pages/index.vue</span> and add this code:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>&lt;template> <br> &nbsp;&lt;div> <br> &nbsp;&nbsp;&nbsp;&lt;h1>Hello World!&lt;/h1> <br>&nbsp;&nbsp;&lt;/div> <br>&lt;/template></code></div><Icon @click="copyText('<template>\n <div> \n    <h1>Hello World!</h1> \n  </div>\n</template>')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">let's check <NuxtLink to="http://localhost:3000/" target="_blank" class="text-primary hover:underline underline-offset-2">localhost:3000</NuxtLink> page will change to</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/helloworld-nuxt.png?alt=media&token=a8551909-91d5-4797-becc-22e783d45309" alt="">
                <div data-aos="fade-right" class="w-full bg-green-900 border-[1px] border-green-600 mb-4 text-green-200 px-4 py-2.5 rounded-lg">That's it! You can development your project with Nuxt 3 ✨</div>
                <hr data-aos="fade-up" class="my-4">

                <h1 data-aos="fade-left" class="text-2xl font-medium">Next, we'll install TailwindCSS.</h1>
                <p data-aos="fade-right">First, install <NuxtLink to="https://tailwindcss.nuxtjs.org/" target="_blank" class="text-primary hover:underline underline-offset-2">@nuxtjs/tailwindcss</NuxtLink> dependency to your project:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-center justify-between select-text"><code>npm install -D @nuxtjs/tailwindcss</code><Icon @click="copyText('npm install -D @nuxtjs/tailwindcss')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">Add it to your modules section in your <span class="text-primary">nuxt.config</span>:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>export default defineNuxtConfig({ <br>&nbsp; modules: ['@nuxtjs/tailwindcss'] <br>})</code></div><Icon @click="copyText('export default defineNuxtConfig({ \n    modules: [\'@nuxtjs/tailwindcss\'] \n})')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-right">test by add class in h1 tag on pages/index.vue:</p>
                <pre data-aos="fade-left" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>&lt;template> <br> &nbsp;&lt;div> <br> &nbsp;&nbsp;&nbsp;&lt;h1 class="h-96 bg-green-900 text-green-200">Hello World!&lt;/h1> <br>&nbsp;&nbsp;&lt;/div> <br>&lt;/template></code></div><Icon @click="copyText('<template>\n <div> \n    <h1 class=\'h-96 bg-green-900 text-green-200\'>Hello World!</h1> \n  </div>\n</template>')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <img data-aos="fade-right" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/test-tailwind-nuxt.png?alt=media&token=197c82fb-cf9f-4d8b-98b9-c459d87d3fff" alt="">
                <div data-aos="fade-left" class="w-full bg-green-900 border-[1px] border-green-600 mb-4 text-green-200 px-4 py-2.5 rounded-lg">That's it! You can now use Tailwind classes in your Nuxt app ✨</div>
                <hr data-aos="fade-up" class="my-4">
                
                <p data-aos="fade-left">Now we are going to <NuxtLink to="https://github.com/" target="_blank" class="text-primary hover:underline underline-offset-2">github.com</NuxtLink> to store project files, create a new repository and go to your project path to push your file by command</p>
                <pre data-aos="fade-right" class="bg-color-base2 rounded-2xl pl-4 pr-2 py-2 mt-2 mb-4 overflow-auto flex items-start justify-between select-text"><div class="flex flex-col"><code>echo "# &lt;your repository name>" >> README.md</code><code>git init</code><code>git add .</code><code>git commit -m "🎉 Begin a project"</code><code>git branch -M main</code><code>git remote add origin &lt;your repository path>.git</code><code>git push -u origin main</code></div><Icon @click="copyText('echo \'# <your repository name>\' >> README.md \n git init \n git add . \n git commit -m \'🎉 Begin a project\' \n git branch -M main \n git remote add origin <your repository path>.git \n git push -u origin main')" class="text-gray-300 duration-200 cursor-pointer rounded-lg py-1 hover:bg-color-base active:scale-95" name="uil:copy" size="34"/></pre>
                <p data-aos="fade-left">Refresh your github repository and you will see file that in project</p>
                <img data-aos="fade-right" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/first-app-github.png?alt=media&token=c67a416f-6775-4378-8e6c-77bd820ae303" alt="">
                <div data-aos="fade-left" class="w-full bg-green-900 border-[1px] border-green-600 mb-4 text-green-200 px-4 py-2.5 rounded-lg">That's it! You can development project with your friend, let's fun! ✨</div>

                <hr data-aos="fade-up" class="my-4">
                <h1 data-aos="fade-right" class="text-2xl font-medium">Lastly, We are going to <NuxtLink to="netlify.com" target="_blank" class="text-primary hover:underline underline-offset-2">netlify.com</NuxtLink> to deploy a project</h1>
                <p data-aos="fade-left">Login with your github account > click "Import an existing project" </p>
                <br>
                <p data-aos="fade-right">Select Github (netlify will automatically fetch your repository)</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-start.png?alt=media&token=c4995dd4-f45c-4819-909b-ae79927e15bd" alt="">
                <p data-aos="fade-right">Find and select your repository that you will deploy.</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-startrepo.png?alt=media&token=361fccb7-6bf3-4a49-8066-c3ef058a80d6" alt="">
                <p data-aos="fade-right">Click "Deploy site" button (you can set more if you want)</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-startrepo-selected.png?alt=media&token=c1da77b2-8953-4d15-8a9b-d80f36f0f531" alt="">
                <p data-aos="fade-right">Netlify will deploying, wait a minute</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-site-wait.png?alt=media&token=658aad27-6bb0-42a9-8847-5ba1094ab01c" alt="">
                <p data-aos="fade-right">When netlify finished deploy, you can see your link under project id</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-site-finish.png?alt=media&token=9d7646b1-3187-4d27-baa1-0becf4016671" alt="">
                <p data-aos="fade-right">This is webpage made by you</p>
                <img data-aos="fade-left" class="w-full sm:w-3/4 mx-auto my-4 rounded-lg sm:rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nuxt3-portfolio-a111c.appspot.com/o/netlify-finish-deploy.png?alt=media&token=2852d85f-c144-4067-89b6-e6b016fea8a8" alt="">
                <div data-aos="fade-right" class="w-full bg-green-900 border-[1px] border-green-600 mb-4 text-green-200 px-4 py-2.5 rounded-lg">That's it! You can copy link and share to your friend ✨</div>
            </div>
        </div>
    </div>
</div>
</template>