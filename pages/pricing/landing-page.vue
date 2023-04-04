<script setup lang="ts">
const checkLists = ["Free Design", "Free Domain Name", "Free support for the first 3 months", "Free server fee for the first 3 months", "Completed in 7-14 days"]
let total = 39.99
let totalTH = '1,499'
const darkmode = ref(false)
const multiLang = ref(false)
</script>

<template>
    <div class="container text-white mx-auto py-32 height-screen">

        <!-- Title -->
        <div data-aos="fade-right" class="w-full flex items-center space-x-1">
            <Icon name="fluent:document-page-24-regular" size="40" class="text-primary" />
            <h1 class="text-3xl font-medium">Landing Page Website</h1>
        </div>

        <div class="w-full h-full mt-4 grid grid-cols-2 gap-8">
            <div class="w-full h-full bg-color-base2 rounded-3xl p-3">
                <div class="w-full flex items-center space-x-2">
                    <Icon name="fluent:document-page-24-regular" class="text-primary" size="60" />
                    <div>
                        <p class="text-lg">Landing Page Website</p>
                        <h1 class="text-3xl font-medium">39.99 $ <span class="text-gray-500 text-2xl">(
                                1,499 ฿ )</span></h1>
                    </div>
                </div>
                <hr class="my-2">
                <ul class="mt-4 px-1">
                    <li v-for="(checkList, index) in checkLists" :key="index" class="my-1 text-lg">
                        <Icon name="uil:check-circle" class="text-primary" /> {{ checkList }}
                    </li>
                </ul>

            </div>
            <div class="w-full h-full flex flex-col justify-between space-y-8">
                <div class="w-full h-full bg-color-base2 rounded-2xl p-5 flex flex-col">
                    <div class="w-full flex items-center space-x-2 border-b-2 pb-3">
                        <Icon name="line-md:sun-rising-loop" size="30" class="text-primary" />
                        <h1 class="text-2xl mt-0.5 font-medium">Darkmode</h1>
                    </div>
                    <div class="mt-4 ml-2 flex items-center">
                        <input v-model="darkmode" type="checkbox" class="h-5 w-5 cursor-pointer">
                        <label class="ml-4 mt-0.5 text-lg">Add Darkmode feature</label>
                    </div>

                    <div class="w-full mt-12 flex items-center space-x-2 border-b-2 pb-3">
                        <Icon name="bi:translate" size="30" class="text-primary" />
                        <h1 class="text-2xl mt-0.5 font-medium">Multi-lang</h1>
                    </div>
                    {{ multiLang }}
                    <div class="mt-4 ml-2 flex items-center">
                        <input :checked="multiLang" type="checkbox" class="h-5 w-5 cursor-pointer">
                        <label class="ml-4 mt-0.5 text-lg">Add Multi-lang feature</label>
                    </div>
                </div>

                <div class="w-full bg-color-base2 rounded-2xl p-5 flex items-center">
                    <h1 class="text-2xl mt-0.5">Total: </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}
input[type="checkbox"] {
  /* ...existing styles */
  display: grid;
  place-content: center;
  appearance: none;
  margin: 0;
  font: inherit;
  /* color: lightgray; */
  border: 0.15em solid lightgray;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
}
input[type="checkbox"]:checked {
    border: 0.15em solid #f13637;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #f13637;
  
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
</style>