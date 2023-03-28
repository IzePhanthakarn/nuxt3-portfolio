<script setup lang="ts">
import { homeAbout } from '~~/assets/interface'
const experiences: homeAbout[] = [
    { year: "04+", line1: "Years", line2: "experience" },
    { year: "06+", line1: "Completed", line2: "projects" },
    { year: "05+", line1: "People", line2: "work with" }
]
</script>

<template>
    <div class="w-full flex justify-center items-center py-24 lg:py-32 ">
        <div class="container px-5 flex flex-col justify-center items-center">

            <!-- Title -->
            <div>
                <h1 class="head after:content-['who_i_am'] after:bg-color-base before:bg-primary mx-auto">About me</h1>
            </div>

            <!-- Block 1 -->
            <div class="w-full lg:mt-12 2xl:mt-10 flex flex-col lg:flex-row justify-center items-center">
                <!-- Image 1 -->
                <div class="img-about mx-auto lg:w-4/12">
                    <img src="/img/me/profileme.jpg" alt="my profile"
                        class="my-[30px] w-[250px] sm:w-[400px] 2xl:w-[500px] drop-shadow-[2px_2px_4px_rgba(255,255,255,0.25)] rounded-[15px] lg:rounded-[30px]">
                </div>

                <!-- Content 1 -->
                <div class="lg:w-7/12">
                    <div class="w-full flex flex-col">
                        <h3
                            class="font-semibold text-xl sm:text-xl lg:text-lg xl:text-3xl leading-6 sm:leading-9 lg:leading-7">
                            My name is Phanthakarn Khumphai and <br> I'm a <span class="text-primary">Full Stack
                                Developer.</span></h3>

                        <!-- Paragraph 1 -->
                        <p class="text-sm my-2.5 lg:my-4 sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                            I graduated with a bachelor's degree in <a href="https://ee-eng.su.ac.th/" target="_blank"
                            class="text-primary hover:underline decoration-dotted underline-offset-4">Electrical
                            Engineering</a> from <a href="https://www.su.ac.th/" target="_blank"
                            class="text-primary hover:underline decoration-dotted underline-offset-4">Silpakorn
                            University</a>. I have
                            the ability to develop website, can use Nuxt.js framework, React and can also do backend system
                            with Golang, PostgreSQL, including using Google Cloud for CI/CD. application, learn to work with
                            a team and solve problems in the right way I am interested in website development and am ready
                            to keep learning and improving my skills in technology.
                        </p>

                        <!-- Paragraph 2 -->
                        <p class="text-sm my-2.5 lg:my-4 sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                            I am always enjoys learning about new technologies. I strongly believe in reducing global
                            warming, such as by using clean energy sources (like solar cells), and I often use various
                            technologies to solve daily problems. I frequently write or create programs to help with various
                            tasks, such as creating a website to record income and expenses or developing various
                            application websites. These <NuxtLink to="/portfolio"
                                class="text-primary hover:underline decoration-dotted underline-offset-4">projects
                            </NuxtLink> have greatly enhanced my skills in different areas.
                        </p>

                        <!-- Download resume and CV -->
                        <div
                            class="my-2.5 px-2 lg:my-4 flex justify-between sm:justify-start items-center text-lg font-semibold sm:space-x-10">
                            <base-button icon="line-md:downloading-loop" iconSize="30">Resume</base-button>
                            <base-button icon="line-md:downloading-loop" secondary link="/about">CV</base-button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 2 -->
            <div
                class="w-full mt-6 lg:mt-12 2xl:mt-10 flex flex-col-reverse lg:flex-row justify-center items-center border-y-[1px] py-2 sm:py-8">

                <!-- Content 2 -->
                <div class="lg:w-7/12">
                    <div class="w-full flex flex-col">
                        <!-- Paragraph 3 -->
                        <p class="text-sm my-2.5 lg:my-4 sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                            I possess strong leadership skills, excel at working in a team, proficient in project
                            management, adept at time management, skilled at making confident decisions, and have a knack
                            for resolving issues on the spot.
                        </p>

                        <!-- Paragraph 4 -->
                        <p class="text-sm my-2.5 lg:my-4 sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                            I am comfortable working regular hours, and also have the ability to work overtime if required.
                            I don't like to leave problems unaddressed, and always prefer to tackle them head-on. My dream
                            is to have financial freedom and own a house and car. What I enjoy the most is the satisfaction
                            of completing a project and I always strive to achieve that feeling.
                        </p>
                        
                        <!-- Paragraph 5 -->
                        <p class="text-sm my-2.5 lg:my-4 sm:text-lg lg:text-tiny 2xl:text-xl text-justify">
                            I have had an internship experience with <a href="http://aitechnovation.com/" target="_blank"
                                class="text-primary hover:underline decoration-dotted underline-offset-4">AI Technovation
                                Co.,Ltd.</a> I was assigned the role of a
                            Back-end Developer due to my adequate skills in Front-end development. To improve my skills, I
                            decided to learn about back-end systems. Working here has been a flexible experience as I am
                            involved in tasks such as communicating with clients, designing web pages, assisting the
                            front-end team, developing back-end systems, and implementing CI/CD. Through this experience, I
                            have gained the ability to easily develop web applications.
                        </p>
                    </div>
                </div>

                <!-- Image 2 -->
                <div class="img-about mx-auto lg:w-4/12">
                    <img src="/img/me/profileme2.jpg" alt="my profile"
                        class="my-[30px] w-[250px] sm:w-[400px] 2xl:w-[500px] drop-shadow-[2px_2px_4px_rgba(255,255,255,0.25)] rounded-[15px] lg:rounded-[30px]">
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

}</style>
