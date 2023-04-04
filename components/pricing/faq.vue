<script setup lang="ts">
const isShow1 = ref(true)
const isShow2 = ref(false)
const isShow3 = ref(false)
const isShow4 = ref(false)
const isShow5 = ref(false)

function showAcc(acc: number) {
    switch (acc) {
        case 1:
            isShow1.value = !isShow1.value
            break
        case 2:
            isShow2.value = !isShow2.value
            break
        case 3:
            isShow3.value = !isShow3.value
            break
        case 4:
            isShow4.value = !isShow4.value
            break
        case 5:
            isShow5.value = !isShow5.value
            break
    }
}
</script>

<template>
    <div class="w-full flex justify-center items-center py-0 lg:py-6 border-t-2 border-white">
        <div class="container flex flex-col justify-center items-center">

            <div data-aos="fade-up" class="w-full flex items-center space-x-1">
                <Icon name="uil:question-circle" size="40" class="text-primary" />
                <h1 class="text-3xl font-medium">FAQ</h1>
            </div>

            <div class="w-full flex flex-col lg:flex-row">


                <div class="w-full lg:w-1/2 mt-4 flex flex-col space-y-4">

                    <div data-aos="fade-right" class="bg-color-base2 px-5 py-3 rounded-xl flex flex-col cursor-pointer border-color-base2 border-2 hover:border-gray-600"
                        @click="showAcc(1)">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium">After the support time has expired.</h1>
                            <Icon name="uil:angle-down" size="30" class="duration-300" :class="{ 'rotate-180': isShow1 }" />
                        </div>
                        <div class="w-full mt-0.5 border-t-2 border-white" :class="{ 'h-0 border-none': !isShow1 }">
                            <p class="block mt-2" :class="{ 'hidden': !isShow1 }">You can choose whether to let me continue
                                to pay for the server rental and domain name or whether to transfer it to your own account
                                to manage all by yourself. However, I will teach you how to manage everything. to be able to
                                do everything</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="bg-color-base2 px-5 py-3 rounded-xl flex flex-col cursor-pointer border-color-base2 border-2 hover:border-gray-600"
                        @click="showAcc(2)">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium">Editing or adding features</h1>
                            <Icon name="uil:angle-down" size="30" class="duration-300" :class="{ 'rotate-180': isShow2 }" />
                        </div>
                        <div class="w-full mt-0.5 border-t-2 border-white" :class="{ 'h-0 border-none': !isShow2 }">
                            <p class="block mt-2" :class="{ 'hidden': !isShow2 }">During the time I was still supporting
                                your project. some fixes Or add features, I will do it for free. But if the support time
                                expires There will be operating expenses. The price depends on the difficulty of editing or
                                adding features.</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" class="bg-color-base2 px-5 py-3 rounded-xl flex flex-col cursor-pointer border-color-base2 border-2 hover:border-gray-600"
                        @click="showAcc(3)">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium">The cost for adding page</h1>
                            <Icon name="uil:angle-down" size="30" class="duration-300" :class="{ 'rotate-180': isShow3 }" />
                        </div>
                        <div class="w-full mt-0.5 border-t-2 border-white" :class="{ 'h-0 border-none': !isShow3 }">
                            <p class="block mt-2" :class="{ 'hidden': !isShow3 }">If you want to add more pages than the
                                maximum limit of each plan, there will be a fee for adding pages. Which will start at 10$
                                (350 ฿) or more. depending on the difficulty of doing that page And it may take about 1-2
                                days.</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="bg-color-base2 px-5 py-3 rounded-xl flex flex-col cursor-pointer border-color-base2 border-2 hover:border-gray-600"
                        @click="showAcc(4)">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium">Cost of additional REST APIs</h1>
                            <Icon name="uil:angle-down" size="30" class="duration-300" :class="{ 'rotate-180': isShow4 }" />
                        </div>
                        <div class="w-full mt-0.5 border-t-2 border-white" :class="{ 'h-0 border-none': !isShow4 }">
                            <p class="block mt-2" :class="{ 'hidden': !isShow4 }">If you want to add a Rest API, there will
                                be a starting cost of 10$ per API (350฿). The price will depend on the difficulty of each
                                API, which will take about 2-3 days to do because there may be some additions. table in the
                                database as well.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="bg-color-base2 px-5 py-3 rounded-xl flex flex-col cursor-pointer border-color-base2 border-2 hover:border-gray-600"
                        @click="showAcc(5)">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-medium">What tools do you use?</h1>
                            <Icon name="uil:angle-down" size="30" class="duration-300" :class="{ 'rotate-180': isShow5 }" />
                        </div>
                        <div class="w-full mt-0.5 border-t-2 border-white" :class="{ 'h-0 border-none': !isShow5 }">
                            <p class="block mt-2" :class="{ 'hidden': !isShow5 }">I use Figma to design and place
                                flowcharts. Use Nuxt 3 for front-end, Golang for APIs, PostgreSQL as database, and CI/CD
                                with Netlify and Google cloud platform.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 flex flex-col items-end">
                    <div data-aos="fade-left" class="flex items-center justify-end space-x-4 border-b-2 w-full lg:w-5/6 pb-4">
                        <div class="flex flex-col items-end">
                            <h1 class="text-3xl font-semibold">Ize Phanthakarn</h1>
                            <div class="flex space-x-2">
                                <p>🏡 Working from home</p>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="h-6 w-6 border-2 border-yellow-600 bg-yellow-500 rounded-full absolute right-0">
                            </div>
                            <img src="/img/projects/me-pricing.jpg" alt=""
                                class="w-20 border-2 border-primary rounded-full">
                        </div>
                    </div>
                    
                    <div class="w-5/6 mt-6 space-y-2">
                        <div data-aos="fade-right" class="w-fit mr-0 ml-auto bg-color-base2 p-5 rounded-b-3xl rounded-tl-3xl border-2">
                            <h1 class="text-xl">If you have any questions about doing this project,</h1>
                        </div>
                        <div data-aos="fade-left" class="w-fit mr-0 ml-auto bg-color-base2 p-5 rounded-b-3xl rounded-tl-3xl border-2">
                            <h1 class="text-xl">Need advice for choosing a cost plan?</h1>
                        </div>
                        <div data-aos="fade-right" class="w-fit mr-0 ml-auto bg-color-base2 p-5 rounded-b-3xl rounded-l-3xl border-2">
                            <h1 class="text-xl">Or want to get a special discount</h1>
                        </div>
                        <div data-aos="fade-left" class="w-fit mr-0 ml-auto bg-color-base2 p-5 rounded-b-3xl rounded-tl-3xl border-2">
                            <h1 class="text-xl"> Please contact me for your questions</h1>
                            <BaseButton class="w-fit mt-4 mr-0 ml-auto">Contact me</BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- https://danbooru.donmai.us/posts?page=2&tags=eufoniuz -->