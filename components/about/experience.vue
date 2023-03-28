<script setup lang="ts">
import { homeExperience } from '~~/assets/interface'
const eduExps: homeExperience[] = [
    {
        location: "Silpakorn University",
        department: "Electricals engineering",
        year: "2019 - 2023",
        duration: "4 years",
        link: "https://www.su.ac.th/",
        img: "/img/experience/eesu.png",
        detail: "After graduating from high school with an average GPA of only 3.13, I thought that it might disappoint my parents because I should have gone to a more prestigious university. However, I decided to study in the Faculty of Electrical Engineering and Computer Engineering at Silpakorn University, Nakhon Pathom province. This university is not far from my home, about a 2-hour journey. At first, I wasn't fond of electrical engineering but luckily, the curriculum included computer-related courses such as programming, database systems, and computer systems. I found that I had a knack for these subjects and they quickly became my favorite courses. Ultimately, I was able to graduate from this university with a GPA of 3.33 within a 4-year.",
        gpa: "3.33"
    },
    {
        location: "Samchukratana Phokharam school",
        department: "Science - Math",
        year: "2015 - 2018",
        duration: "3 years",
        link: "http://www.samchukratana.ac.th/",
        img: "/img/experience/samchukratana.jpg",
        detail: "I spent my high school years at Samchuk Rattanaphokhararm School for three years, which was located not far from my home in Samchuk, Suphanburi. It was a time in my life where I was unsure of my direction, not knowing which subjects I enjoyed or which university to attend after graduating from high school. I spent my time doing various things like driving around, playing games, and traveling to different places, but I excelled in chemistry, English, and especially computer studies. I believe I have a talent for this subject. However, my weakness is in mathematics and physics, and I graduated with an average grade of 3.13.",
        gpa: "3.13"
    }
]
const workExps: homeExperience[] = [
    {
        location: "AI Technovation Co.,Ltd.",
        department: "Full-stack Developer",
        year: "2022 - 2023",
        duration: "6 months",
        link: "http://aitechnovation.com/",
        img: "/img/experience/aitech.jpg",
        detail: "During the summer and the first semester of my fourth year of undergraduate studies, which lasted for six months, I interned at AI technovation Co.,Ltd. This internship provided me with valuable experiences as the work was very flexible, as the company specialized in providing technology consulting services and developing various systems such as mobile applications, web applications, POS systems, advertising management programs, and many others. I was involved in various tasks, such as communicating with clients, designing web pages, working on both the front-end and back-end development, as well as implementing CI/CD for projects. At times, I also worked as an IT support and had the opportunity to work part-time at the company's restaurant. Although the work environment was relatively flexible, there was a strict requirement to complete tasks on time.",
        other: "Internship"
    }
]
</script>

<template>
    <div class="w-full flex justify-center items-center py-0 lg:py-8">
        <div class="container px-5 flex flex-col justify-center items-center">

            <!-- Subtitle Education -->
            <div class="w-full mb-4 -py-4 font-semibold tracking-wider flex items-end space-x-2 sm:space-x-4">
                <Icon class="text-primary" name="uil-graduation-cap" size="60" />
                <h1 class="text-4xl mb-1">Education</h1>
            </div>
            <div class="w-full timeline pl-10 sm:pl-0 flex flex-col relative" v-for="(education, index) in eduExps"
                :key="index">
                <div class="timeline-bg bg-primary mb-4 pb-0.5 px-0.5 flex flex-col sm:flex-row sm:space-x-12">
                    <div
                        class="timeline-date py-2 sm:py-0 font-semibold text-lg xl:text-base text-white pl-2 sm:pl-2 sm:pr-3 whitespace-nowrap flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0">
                        <p>{{ education.year }}</p> <span class="text-gray-200 sm:text-gray-500">( {{ education.duration }} )</span>
                    </div>
                    <div class="timeline-info w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8">
                        <div class="w-full">
                            <h1 class="text-2xl xl:text-lg 2xl:text-xl font-medium">{{ education.department }}</h1>
                            <NuxtLink :to=education.link class="sm:text-xl 2xl:text-lg text-primary xl:font-medium -mt-1"
                                target="_blank">- {{ education.location }}</NuxtLink>
                            <p class="my-2 2xl:text-base">{{ education.detail }}</p>
                            <span class="text-highlight border-l-[3px] pl-2 border-primary text-base font-semibold">GPA : {{
                                education.gpa }}</span>
                        </div>
                        <div class="w-auto">
                            <img :src=education.img alt="" class="w-full sm:w-0 lg:w-60 rounded-2xl drop-shadow-2xl my-4 lg:my-0">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Subtitle Work -->
            <div class="w-full my-4 -py-4 font-semibold tracking-wider flex items-end space-x-2 sm:space-x-4">
                <Icon class="text-primary" name="uil-briefcase-alt" size="55" />
                <h1 class="text-4xl mb-1">Work</h1>
            </div>
            <div class="w-full timeline pl-10 sm:pl-0 flex flex-col relative" v-for="(work, index) in workExps"
                :key="index">
                <div class="timeline-bg bg-primary mb-4 pb-0.5 px-0.5 flex flex-col sm:flex-row sm:space-x-12">
                    <div
                        class="timeline-date py-2 sm:py-0 font-semibold text-lg xl:text-base text-white pl-2 sm:pl-2 sm:pr-3 whitespace-nowrap flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0">
                        <p>{{ work.year }}</p> <span class="text-gray-200 sm:text-gray-500">( {{ work.duration }} )</span>
                    </div>
                    <div class="timeline-info w-full flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8">
                        <div class="w-full">
                            <h1 class="text-2xl xl:text-lg 2xl:text-xl font-medium">{{ work.department }}</h1>
                            <NuxtLink :to=work.link class="sm:text-xl 2xl:text-lg text-primary xl:font-medium -mt-1"
                                target="_blank">- {{ work.location }}</NuxtLink>
                            <p class="my-2 2xl:text-base">{{ work.detail }}</p>
                            <span class="text-highlight border-l-[3px] pl-2 border-primary text-base font-semibold">{{
                                work.other }}</span>
                        </div>
                        <div class="w-auto">
                            <img :src=work.img alt="" class="w-full sm:w-0 lg:w-60 rounded-2xl drop-shadow-2xl my-4 lg:my-0">
                        </div>
                    </div>
                </div>
            </div>
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
}
</style>
