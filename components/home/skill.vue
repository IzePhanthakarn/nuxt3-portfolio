<script setup>
const skillTags = useSkill();
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div data-aos="fade">
            <h1 class="head after:content-['i_am_good_at'] after:bg-color-base before:bg-primary mx-auto">
               My Skills</h1>
         </div>

         <!-- Skill Content -->
         <div
            class="w-full mt-5 sm:mt-4 lg:mt-6 flex flex-col divide-y sm:grid sm:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-8">

            <!-- Soft Skill -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="material-symbols:mindfulness-outline-rounded" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Soft Skill</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.softskillTags" :key="index">
                  <BaseTag softSkill :icon=tag.Icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Programming -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="material-symbols:flip-to-front" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Programming</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.programmingTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Front-end -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="material-symbols:flip-to-front" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Front-end</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.frontendTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Back-end -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="uil:database" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Back-end</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.backendTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Services -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="ic:baseline-miscellaneous-services" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Services</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.serviceTags" :key="index">
                  <BaseTag :link=tag.link :icon=tag.icon :iconSize=tag.iconSize>{{ tag.name }}</BaseTag>
               </div>
            </div>

            <!-- Tools -->
            <div data-aos="fade-up" class="w-full">
               <div class="w-full mt-4 mb-2 flex items-center space-x-2">
                  <Icon name="codicon:tools" size="35" class="text-primary" />
                  <h1 class="text-3xl font-medium">Tools</h1>
               </div>
               <div class="inline-block m-0.5" v-for="(tag, index) in skillTags.toolTags" :key="index">
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
