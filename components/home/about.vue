<script setup lang="ts">
import { homeAbout } from '~~/assets/interface'
const experiences: homeAbout[] = [
   { year: "04+", line1: "Years", line2: "experience" },
   { year: "06+", line1: "Completed", line2: "projects" },
   { year: "05+", line1: "People", line2: "work with" }
]
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div data-aos="fade">
            <h1 class="head after:content-['who_i_am'] after:bg-color-base before:bg-primary mx-auto">
               About me</h1>
         </div>
         <div class="w-full lg:mt-12 flex flex-col lg:flex-row justify-center items-center">
            <div data-aos="fade-right" class="img-about mx-auto lg:w-4/12">
               <img src="/img/me/profileme.jpg" alt="my profile"
                  class="my-[30px] w-[250px] sm:w-[400px] 2xl:w-[500px] drop-shadow-[2px_2px_4px_rgba(255,255,255,0.25)] rounded-[15px] lg:rounded-[30px]">
            </div>
            <div class="lg:w-7/12">
               <div class="w-full flex flex-col">
                  <h3 data-aos="fade-left" class="font-semibold text-xl sm:text-xl lg:text-lg xl:text-3xl leading-6 sm:leading-9 lg:leading-7">
                     My name is Phanthakarn Khumphai and <br> I'm a <span class="text-primary">Full Stack Developer.</span></h3>
                  <p data-aos="fade-left" class="my-5 text-sm sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                     I graduated with a bachelor's degree in Electrical Engineering from Silpakorn University. I have
                     the ability to develop website, can use Nuxt.js framework, React and can also do backend system
                     with Golang, PostgreSQL, including using Google Cloud for CI/CD. application, learn to work with
                     a team and solve problems in the right way I am interested in website development and am ready
                     to keep learning and improving my skills in technology.
                  </p>
                  <div data-aos="fade-left" class="px-2 flex justify-between sm:justify-evenly items-center">
                     <div
                        class="flex flex-col justify-center items-center glass-box p-2 rounded-xl w-24 sm:w-28 h-28 sm:h-32"
                        v-for="(experience, index) in experiences" :key="index">
                        <span class="text-2xl sm:text-3xl font-medium text-primary">{{ experience.year }}</span>
                        <p class="text-sm sm:text-lg lg:text-tiny text-center leading-4 sm:leading-6 lg:leading-5">
                           {{ experience.line1 }}<br>{{ experience.line2 }}</p>
                     </div>
                  </div>
                  <div data-aos="fade-left"
                     class="my-6 px-2 sm:my-8 flex justify-between sm:justify-start items-center text-lg font-semibold sm:space-x-10">
                     <base-button icon="line-md:downloading-loop" iconSize="30" link="/Phanthakarn's-Resume.pdf" target="_blank">Resume</base-button>
                     <base-button secondary link="/about">More</base-button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>


.glass-box {
   background: rgba(255, 255, 255, 0.05);
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   border: 2px solid rgba(0, 0, 0, 0.2);
   transition: box-shadow .3s, border .2s;
}

.glass-box:hover {
   border: 3px solid #f13637;
   box-shadow: 4px 8px 30px rgba(0, 0, 0, 0.2);
}

@media(min-width:640px) {
   .img-about img {
      width: 400px;
   }
}

@media(min-width:1536px) {
   .img-about img {
      width: 500px;
   }

}
</style>
