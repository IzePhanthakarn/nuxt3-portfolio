<script setup lang="ts">
import { homeSkillTag } from '~~/assets/interface'
const softskillTags: homeSkillTag[] = [
   { name: "Communication" },
   { name: "Leadership" },
   { name: "Teamwork" },
   { name: "Project Management" },
   { name: "Creativity" },
   { name: "Positive Attitude" },
   { name: "Decision Making" },
   { name: "Problem Solving" },
   { name: "Time Management" },
]
const frontendTags: homeSkillTag[] = [
   { icon: "vscode-icons:file-type-html", name: "HTML", link: 'https://www.w3schools.com/html/' },
   { icon: "vscode-icons:file-type-css", name: "CSS", link: "https://www.w3schools.com/css/" },
   { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
   { icon: "skill-icons:typescript", name: "TypeScript", iconSize: "20", link: "https://www.typescriptlang.org/" },
   { icon: "vscode-icons:file-type-node", name: "Node.js", link: "https://nodejs.org/en" },
   { icon: "vscode-icons:file-type-vue", name: "Vue.js", link: "https://vuejs.org/" },
   { icon: "logos:nuxt-icon", name: "Nuxt.js", link: "https://nuxtjs.org/" },
   { icon: "logos:tailwindcss-icon", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
   { icon: "skill-icons:bootstrap", name: "Bootstrap", link: "https://getbootstrap.com/" }
]
const backendTags: homeSkillTag[] = [
   { icon: "skill-icons:javascript", name: "JavaScript", iconSize: "20", link: "https://www.w3schools.com/js/" },
   { icon: "skill-icons:golang", name: "Golang", link: "https://go.dev/" },
   { icon: "logos:python", name: "Python", link: "https://www.python.org/" },
   { icon: "vscode-icons:file-type-appscript", name: "App Script", link: "https://www.google.com/script/start/" },
   { icon: "bi:filetype-sql", name: "SQL", iconSize: "20", link: "https://www.w3schools.com/sql/" }
]
const serviceTags: homeSkillTag[] = [
   { icon: "logos:google-cloud-platform", name: "Google Cloud Platform", link: "https://cloud.google.com/" },
   { icon: "line-md:github-loop", name: "Git", link: "https://git-scm.com/" },
   { icon: "skill-icons:docker", name: "Docker", link: "https://www.docker.com/" },
   { icon: "logos:postgresql", name: "PostgreSQL", link: "https://www.postgresql.org/" },
   { icon: "vscode-icons:file-type-netlify", name: "Netlify", link: "https://www.netlify.com/" },
   { icon: "vscode-icons:file-type-firebase", name: "Firebase", link: "https://firebase.google.com/" },
   { icon: "line-md:github-loop", name: "Github Pages", link: "https://pages.github.com/" },
   { icon: "vscode-icons:file-type-swagger", name: "Swagger", link: "https://swagger.io/" },
]
const toolTags: homeSkillTag[] = [
   { icon: "logos:visual-studio-code", name: "VS Code", link: "https://code.visualstudio.com/" },
   { icon: "line-md:github-loop", name: "Github", link: "https://github.com/" },
   { icon: "skill-icons:postman", name: "Postman", link: "https://www.postman.com/downloads/" },
   { icon: "logos:datagrip", name: "DataGrip", link: "https://www.jetbrains.com/datagrip/" },
   { icon: "logos:stackoverflow-icon", name: "Stack Overflow", link: "https://stackoverflow.com/" },
   { icon: "line-md:discord", name: "Discord", link: "https://discord.com/" },
   { icon: "simple-icons:googlesheets", name: "Google Sheet", link: "https://www.google.com/intl/th_th/sheets/about/" },
   { icon: "logos:figma", name: "Figma", link: "https://www.figma.com/" },
   { icon: "logos:trello", name: "Trello", link: "https://trello.com/th" },
]
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">

         <!-- Skill Content -->
         <div
            class="w-full mt-5 sm:mt-4 lg:mt-6 flex flex-col divide-y sm:grid sm:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-8">

            <!-- Skillset -->
            <div class="w-full flex flex-col">
               <div class="w-full pt-4 pb-2 flex items-center border-t space-x-2">
                  <Icon name="carbon:skill-level" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Skillset</h1>
               </div>
               <p>This is my list of skills that I have. I can use it to work with expertise and skill. If you look at it
                  and think that my abilities match the needs of you or the company. Please contact me so I can work for
                  you.</p>
               <BaseButton icon="uil:comment-alt-message" to="/contacts" class="mt-4 mr-0 ml-auto">Contact me</BaseButton>
            </div>

            <!-- Soft Skill -->
            <div class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="material-symbols:mindfulness-outline-rounded" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Soft Skill</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in softskillTags" :key="index">
                  <BaseTag softSkill :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Front-end -->
            <div class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="material-symbols:flip-to-front" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Front-end</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in frontendTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Back-end -->
            <div class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="uil:database" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Back-end</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in backendTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Services -->
            <div class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="ic:baseline-miscellaneous-services" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Services</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in serviceTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Tools -->
            <div class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="codicon:tools" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Tools</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in toolTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

         </div>
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
</style>
