<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: "admin",
});

const name = ref('');
const relationship = ref('');
const date = ref('');
const score = ref(0)
const displayScoreAll = ref(true)
const typeSelected = ref('All')
const typeList = ['All', 'Landing Page Website', 'Multi-Page Website', 'Web Application']
const statusSelected = ref('All')
const statusList = ['All', 'Request', 'Accepted', 'Finished']


const testimonials = [
    {
        name: "Sompong Khumphai",
        img: "/img/testimonial/testimonial1.png",
        relation: "Father",
        detail: "He has the determination, the effort, and the great determination in what needs to be accomplished.",
        lastUpdate: "Mar 23, 2023",
        score: 9,
        verify: true
    },
    {
        name: "Pitchaya Kacharatpaisal",
        img: "/img/testimonial/testimonial2.png",
        relation: "Friend",
        detail: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
        lastUpdate: "Mar 24, 2023",
        score: 10,
        verify: true
    },
    {
        name: "Pitchaya Kacharatpaisal",
        img: "/img/testimonial/testimonial2.png",
        relation: "Friend",
        detail: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
        lastUpdate: "Mar 24, 2023",
        score: 10,
        verify: false
    },
    {
        name: "Pitchaya Kacharatpaisal",
        img: "/img/testimonial/testimonial2.png",
        relation: "Friend",
        detail: "He is my best friend, he is always improving his programming skills. And of course, if there is any job that he is responsible for, he will do it well in the way you want for sure.",
        lastUpdate: "Mar 24, 2023",
        score: 10,
        verify: false
    }
]

function clearScore() {
    score.value = 0
    displayScoreAll.value = true
}
function selectScore() {
    displayScoreAll.value = false
}
</script>

<template>
    <div class="w-full h-full flex flex-col space-y-8">
        <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
            <div class="flex items-center space-x-2">
                <Icon name="lucide:quote" size="34" />
                <h1 class="text-3xl font-medium my-1">Testimonial</h1>
            </div>
        </div>

        <div class="w-full h-full bg-neutral rounded-xl column-1 p-4 shadow-lg">
            <div class="w-full grid grid-cols-4 gap-8">
                <div
                    class="login__box w-full mt-7 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="uil:user" class="login__icon" size="36" />
                    <div class="relative">
                        <input type="text" v-model="name"
                            class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                            spellcheck="false">
                        <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Name</label>
                    </div>
                </div>

                <div
                    class="login__box w-full mt-7 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="uil:users-alt" class="login__icon" size="36" />
                    <div class="relative">
                        <input type="text" v-model="relationship"
                            class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                            spellcheck="false">
                        <label
                            class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Relationship</label>
                    </div>
                </div>

                <div
                    class="login__box w-full mt-7 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="uil:calendar-alt" class="login__icon" size="36" />
                    <div class="relative">
                        <input type="date" v-model="date"
                            class="login__input text-white w-full py-3 pb-2 outline-none bg-transparent relative z-[1]">
                        <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Date</label>
                    </div>
                </div>

                <div class="w-full flex items-end justify-between space-x-4 text-white">
                    <div class="w-full flex space-x-2 items-end">

                        <div class="column-1 mb-1">
                            <p class="text-lg font-medium ml-2.5">Score: <span v-show="displayScoreAll">All</span> <span
                                    v-show="!displayScoreAll">{{
                                        score }}/10</span> </p>
                            <div class="w-full flex rating rating-md rating-half">
                                <input type="radio" name="rating-10" value="0" v-model="score" class="rating-hidden" />
                                <input type="radio" name="rating-10" value="1" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="2" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="3" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="4" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="5" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="6" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="7" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="8" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="9" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="10" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                            </div>
                        </div>
                        <div @click="clearScore"
                            class="border-2 w-full flex justify-center items-center rounded cursor-pointer duration-300 hover:border-primary active:scale-95">
                            All</div>
                    </div>

                    <BaseButton class="h-fit mb-0.5" icon="ci:search-magnifying-glass">Search</BaseButton>
                </div>
            </div>

            <div class="w-full height-content px-2">
                <div class="w-full height-content mt-6 p-3 bg-neutral-content rounded-xl overflow-hidden">
                    <div class="w-full height-table overflow-y-scroll rounded-xl grid grid-cols-3 gap-4">
                        <div v-for="(testimonial, index) in testimonials" :key="index">
                            <!-- class="w-full bg-white border-[3px] border-primary text-black grid grid-cols-3 rounded-xl" -->
                            <BaseAdminTestimonial :name=testimonial.name :img=testimonial.img :relation=testimonial.relation
                                :detail=testimonial.detail :lastUpdate=testimonial.lastUpdate :score=testimonial.score :verify=testimonial.verify />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-content {
    height: calc(100vh - 354px);
}

.height-table {
    height: calc(100vh - 380px);
}

.login__box {
    grid-template-columns: max-content 1fr;
}

input::-ms-reveal {
    display: none;
}

.login__box:nth-child(2) input {
    padding-right: 1.8rem;
}

.login__input:focus+.login__label {
    top: -20px;
    font-size: 16px;
}

.login__input:not(:placeholder-shown).login__input:not(:focus)+.login__label {
    top: -20px;
    font-size: 16px;
}
</style>