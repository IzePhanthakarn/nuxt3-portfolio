<script setup>
useHead({
    title: 'Phanthakarn | Testimonials',
})

// const { pending, data: testimonials } = useLazyFetch('https://go-portfolio.onrender.com/testimonials')
const testimonials = [
   {
      name:"Sompong Khumphai",
      img: "/img/testimonial/testimonial1.png",
      relationship: "Father",
      description: "He has the determination, the effort, and the great determination in what needs to be accomplished.",
      lastUpdate: "Mar 23, 2023",
      score: 9
   },
   {
      name:"Pitchaya Kacharatpaisal",
      img: "/img/testimonial/testimonial2.png",
      relationship: "Friend",
      description: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
      lastUpdate: "Mar 24, 2023",
      score: 10
   },
]

</script>

<template>
    <!-- <div v-if="pending" class="height-screen pt-24 flex items-center justify-center">
        <Loader />
    </div> -->
    <div class="w-full height-screen text-white flex pt-24 ">
        <div class="container mx-auto px-5 flex flex-col">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['what_people_say'] after:bg-color-base before:bg-primary mx-auto">
                    Testimonials</h1>
            </div>

            <BaseButton class="w-fit mt-4 sm:mt-0 ml-auto mr-0 pointer-events-none border-gray-500 text-gray-500" to="/testimonials/add">Add your opinion</BaseButton>

            <div v-if="testimonials" class="w-full mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonail, index) in testimonials" :key="index">
                    <BaseTestimonial :name=testimonail.name :img=testimonail.img :relation=testimonail.relationship
                        :detail=testimonail.description :lastUpdate=testimonail.lastUpdate :score=testimonail.score />
                </div>
            </div>

            <div v-else class="w-full h-full mt-4 sm:mt-8 flex items-center justify-center">
                <h1 class="mb-28 text-3xl font-medium">Sorry, No Data in the database.</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}
</style>