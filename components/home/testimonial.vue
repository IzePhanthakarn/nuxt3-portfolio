<script setup>
const testimonials = [
   {
      name:"Sompong Khumphai",
      img: "/img/testimonial/testimonial1.png",
      relation: "Father",
      detail: "He has the determination, the effort, and the great determination in what needs to be accomplished.",
      lastUpdate: "Mar 23, 2023",
      score: 9
   },
   {
      name:"Pitchaya Kacharatpaisal",
      img: "/img/testimonial/testimonial2.png",
      relation: "Friend",
      detail: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
      lastUpdate: "Mar 24, 2023",
      score: 10
   },
]
function countCard() {
   const screenWidth = screen.width;
   if (screenWidth <= 640) {
      return 1
   } else if (screenWidth <= 1024) {
      return 2
   } else if (screenWidth <= 1280) {
      return 3
   }
   return 4
}

const countNumber = countCard();
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8 xl:py-4">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div data-aos="fade">
            <h1 class="head after:content-['what_people_say'] after:bg-color-base before:bg-primary mx-auto">
               Testimonials</h1>
         </div>
         <div data-aos="fade-up"
            class="w-full h-full mt-4 sm:mt-6 overflow-hidden lg:mt-8 p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(testimonail,index) in testimonials" :key="index">
               <BaseTestimonial :name=testimonail.name :img=testimonail.img :relation=testimonail.relation :detail=testimonail.detail :lastUpdate=testimonail.lastUpdate :score=testimonail.score />
            </div>
         </div>
         <div data-aos="fade-left" class="w-full h-full mt-4 sm:mt-6">
            <BaseButton to="/testimonials" class="w-fit mr-0 ml-auto"> View more</BaseButton>
         </div>
      </div>
   </div>
</template>
