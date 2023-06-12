<script setup lang="ts">
import { homeExperience } from '~~/assets/interface'
const eduExps: homeExperience[] = [
   {
      location: "Silpakorn University",
      department: "Electricals engineering",
      year: "2019 - 2023",
      duration: "4 years",
      link: "https://www.su.ac.th/",
      detail: "After graduating from high school, I went on to study electronics and computer systems engineering at Silpakorn University in Nakhon Pathom. I excelled in computer and programming subjects. But the weak point is the subject about electricity.",
      gpa: "3.33 ( Second-class Honors )"
   },
   {
      location: "Samchukratana Phokharam school",
      department: "Science - Math",
      year: "2015 - 2018",
      duration: "3 years",
      link: "http://www.samchukratana.ac.th/",
      detail: "I studied at Samchuk Rattanaphokaram School near my house in Sam Chuk, Suphanburi. I excelled in Chemistry, English and very fond of computers. The weak point is math and physics. and graduated from there with a 3.13 GPA.",
      gpa: "3.13"
   }
]
const workExps: homeExperience[] = [
   {
      location: "Soilfish Co., Ltd.",
      department: "Software Developer",
      year: "2023 - now",
      duration: "1 month",
      link: "http://aitechnovation.com/",
      detail: "I was assigned as a software developer. I replaced my favorite tools like nuxt.js with react and learned to use new tools like Slack, Jira, Bitbucket, Jenkins and many others. And I gained knowledge about DevOps from teaching seniors in this company.",
      other: "Full-time"
   },
   {
      location: "AI Technovation Co.,Ltd.",
      department: "Full-stack Developer",
      year: "2022",
      duration: "6 months",
      link: "http://aitechnovation.com/",
      detail: "I have been interning at AI Technovation Ltd. for 6 months as a Back-end Developer. The working environment here is quite flexible as it is a startup company. My responsibilities include communicating with clients, designing web pages, developing both Front-end and Back-end, and working on CI/CD.",
      other: "Internship"
   },
]
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div data-aos="fade">
            <h1 class="head after:content-['education_&_work'] after:bg-color-base before:bg-primary mx-auto">
               My Experiences</h1>
         </div>

         <!-- Subtitle Work -->
         <div data-aos="fade-right"
            class="w-full my-4 -py-4 font-semibold tracking-wider flex items-end space-x-2 sm:space-x-4">
            <Icon class="text-primary" name="uil-briefcase-alt" size="55" />
            <h1 class="text-3xl mb-1">Work</h1>
         </div>
         <div data-aos="fade-left" class="w-full timeline pl-10 sm:pl-0 flex flex-col relative"
            v-for="(work, index) in workExps" :key="index">
            <div class="timeline-bg bg-primary mb-4 pb-0.5 px-0.5 flex flex-col sm:flex-row sm:space-x-12">
               <div
                  class="timeline-date py-2 sm:py-0 font-semibold text-lg xl:text-base text-white pl-2 sm:pl-2 sm:pr-3 whitespace-nowrap flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0">
                  <p>{{ work.year }}</p> <span class="text-gray-200 sm:text-gray-500">( {{ work.duration }} )</span>
               </div>
               <div class="timeline-info w-full">
                  <h1 class="text-2xl xl:text-lg 2xl:text-xl font-medium">{{ work.department }}</h1>
                  <NuxtLink :to=work.link class="sm:text-xl 2xl:text-lg text-primary xl:font-medium -mt-1" target="_blank">
                     - {{ work.location }}</NuxtLink>
                  <p class="my-2 2xl:text-base">{{ work.detail }}</p>
                  <span class="text-highlight border-l-[3px] pl-2 border-primary text-base font-semibold">{{ work.other
                  }}</span>
               </div>
            </div>
         </div>

         <!-- Subtitle Education -->
         <div data-aos="fade-right"
            class="w-full mb-4 -py-4 font-semibold tracking-wider flex items-end space-x-2 sm:space-x-4">
            <Icon class="text-primary" name="uil-graduation-cap" size="60" />
            <h1 class="text-3xl mb-1">Education</h1>
         </div>
         <div data-aos="fade-right" class="w-full timeline pl-10 sm:pl-0 flex flex-col relative"
            v-for="(education, index) in eduExps" :key="index">
            <div class="timeline-bg bg-primary mb-4 pb-0.5 px-0.5 flex flex-col sm:flex-row sm:space-x-12">
               <div
                  class="timeline-date py-2 sm:py-0 font-semibold text-lg xl:text-base text-white pl-2 sm:pl-2 sm:pr-3 whitespace-nowrap flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0">
                  <p>{{ education.year }}</p> <span class="text-gray-200 sm:text-gray-500">( {{ education.duration }}
                     )</span>
               </div>
               <div class="timeline-info w-full">
                  <h1 class="text-2xl xl:text-lg 2xl:text-xl font-medium">{{ education.department }}</h1>
                  <NuxtLink :to=education.link class="sm:text-xl 2xl:text-lg text-primary xl:font-medium -mt-1"
                     target="_blank">- {{ education.location }}</NuxtLink>
                  <p class="my-2 2xl:text-base">{{ education.detail }}</p>
                  <span class="text-highlight border-l-[3px] pl-2 border-primary text-base font-semibold">GPA : {{
                     education.gpa }}</span>
               </div>
            </div>
         </div>
         <BaseButton data-aos="fade-left" to="/about" class="mt-4 mr-2 ml-auto">More</BaseButton>
      </div>
   </div>
</template>

<style scoped>
.timeline-bg {
   border-radius: 0 22px 22px 22px;
}

.timeline::before {
   display: inline-block;
   position: absolute;
   content: "";
   top: 0;
   left: 0;
   height: 1.5rem;
   width: 1.5rem;
   border: solid 4px #f13637;
   border-radius: 50%;
   background: #171820;
   z-index: 1;
   transition: all .2s;
}

.timeline::after {
   content: "";
   border-left: solid 3px #f13637;
   height: 100%;
   position: absolute;
   top: 0;
   left: .7rem;
   z-index: 0;
}

.timeline:last-child::after {
   border-radius: 10px;
   height: 98%;
}

.timeline-info {
   background: #222434;
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   transition: all .2s;
   padding: .5rem 1rem;
   border-radius: 0 0 20px 20px;
}

@media (min-width:640px) {
   .head::after {
      bottom: -1px;
   }

   .head::before {
      bottom: 12px;
   }

   .timeline-bg {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
   }

   .timeline::before {
      left: 7.5rem;
   }

   .timeline::after {
      left: 8.2rem;
   }

   .timeline-date span {
      border-radius: .25rem;
      -webkit-clip-path: polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%);
      clip-path: polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 15px 100%, 0 100%);
      background: var(--first-color);
      box-shadow: 4px 4px 10px var(--color-shadow-btn);
   }

   .timeline-info {
      border: 0px solid black;
      border-radius: 0 20px 20px 20px;
      box-shadow: 4px 4px 10px var(--color-shadow-img);
   }
}

@media (min-width:1280px) {
   .timeline::before {
      left: 7rem;
   }

   .timeline::after {
      left: 7.67rem;
   }

   .timeline-info {
      border: 0px solid black;
   }
}</style>
