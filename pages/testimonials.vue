<script setup lang="ts">
useHead({
  title: 'Phanthakarn | Testimonials',
})

const testimonials = [
    {
        name: "Sompong Khumphai",
        img: "/img/testimonial/testimonial1.png",
        relation: "Father",
        detail: "He has the determination, the effort, and the great determination in what needs to be accomplished.",
        lastUpdate: "Mar 23, 2023",
        score: 9
    },
    {
        name: "Pitchaya Kacharatpaisal",
        img: "/img/testimonial/testimonial2.png",
        relation: "Friend",
        detail: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
        lastUpdate: "Mar 24, 2023",
        score: 10
    }
]
</script>

<template>
    <div class="w-full height-screen text-white flex pt-24 ">
        <div class="container mx-auto px-5 flex flex-col">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['what_people_say'] after:bg-color-base before:bg-primary mx-auto">
                    Testimonials</h1>
            </div>

            <BaseButton class="w-fit mt-4 sm:mt-0 ml-auto mr-0">Add your opinion</BaseButton>

            <div class="w-full mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonail, index) in testimonials" :key="index">
                    <BaseHomeTestimonial :name=testimonail.name :img=testimonail.img :relation=testimonail.relation
                        :detail=testimonail.detail :lastUpdate=testimonail.lastUpdate :score=testimonail.score />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}
</style>