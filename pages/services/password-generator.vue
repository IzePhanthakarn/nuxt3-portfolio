<script lang="ts" setup>
definePageMeta({
    layout: "service",
});
const icon = ref('material-symbols:content-copy-outline-rounded');
const passwordLength = ref(20);
const output = ref('');
const passIndicator = ref('');
let options: Array<string> = ["lowercase"];

const characters: any = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = '';
    let excludeDuplicate = false;
    let passLength = passwordLength.value;

    options.forEach(option => {
        option !== "exc-duplicate" ? staticPassword += characters[option] : excludeDuplicate = true;
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    output.value = randomPassword;
    updatePassIndicator();
}

const updatePassIndicator = () => {
    if (passwordLength.value >= 25 && options.includes('numbers') && options.includes('uppercase') && options.includes('symbols')) {
        passIndicator.value = 'strong';
    } else if (passwordLength.value > 20 || options.includes('numbers') || options.includes('uppercase') || options.includes('symbols')) {
        passIndicator.value = 'medium';
    } else if (passwordLength.value < 15) {
        passIndicator.value = 'weak';
    }
}

const copyPassword = () => {
    navigator.clipboard.writeText(output.value);
    icon.value = 'uil:check-circle';
    setTimeout(() => {
        icon.value = 'material-symbols:content-copy-outline-rounded';
    }, 3000);
}

generatePassword();
</script>

<template>
    <div class="w-full pt-20 text-white">
        <div class="w-full height-screen-content flex flex-col items-center justify-center relative">
            <div class="w-full flex items-center space-between pr-8">

                <div class="text-lg text-white breadcrumbs pl-8">
                    <ul>
                        <li>
                            <NuxtLink to="/services">
                                <Icon name="uil:shutter-alt" class="mr-1" />
                                Web Services
                            </NuxtLink>
                        </li>

                        <li>
                            <Icon name="solar:password-outline" class="mr-1" />
                            Password Generator
                        </li>
                    </ul>
                </div>

                <div @click="navigateTo(`/services`)"
                    class="flex mr-0 ml-auto items-center space-x-1 border-2 w-fit py-1 pl-0.5 pr-2 rounded-lg cursor-pointer duration-100 hover:border-primary">
                    <Icon name="material-symbols:arrow-right-alt-rounded" class="rotate-180" />
                    <p>Back</p>
                </div>
            </div>

            <div class="w-11/12 h-full mx-auto flex items-center justify-center">
                <div class="border-[3px] rounded-2xl p-4 pt-5 w-[500px]">
                    <div class="w-full flex items-center justify-between text-xl mb-2 font-medium">
                        <h1 class="text-2xl">Password Generator</h1>

                        <p>Web <span class="text-primary">Services</span></p>
                    </div>
                    <hr>

                    <div class="wrapper mt-4 mx-8 text-white">
                        <div class="input-box relative">
                            <input :value=output type="text" disabled
                                class="h-14 w-full bg-transparent rounded border px-4 text-xl">
                            <Icon @click="copyPassword" class="absolute right-3 top-4 text-gray-500 cursor-pointer hover:text-primary"
                                :class="{'text-green-500 hover:text-green-500 pointer-events-none': icon ==='uil:check-circle'}" :name=icon />
                        </div>

                        <div class="before:absolute before:h-full before:w-1/3 before:duration-300 before:bg-red-600 before:content-[''] w-full mt-3 h-1 relative bg-white rounded-full"
                            :class="{ 'before:w-2/3 before:bg-blue-500': passIndicator === 'medium', 'before:w-full before:bg-green-500': passIndicator === 'strong' }">
                        </div>

                        <div class="my-4">
                            <div class="w-full flex items-center justify-between">
                                <label class="text-lg">Password Length:</label>
                                <span class="text-lg font-medium">{{ passwordLength }}</span>
                            </div>
                            <input v-model="passwordLength" type="range" min="10" max="30"
                                class="mt-2 range range-primary range-xs" step="5" />
                            <div class="w-full flex justify-between text-xs px-2">
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                            </div>
                        </div>

                        <div class="flex flex-col space-y-3">
                            <label class="text-lg">Password Settings:</label>
                            <ul class="options grid grid-cols-2 gap-4">
                                <li class="option flex items-center">
                                    <input type="checkbox" checked
                                        class="checkbox checkbox-primary opacity-50 pointer-events-none" />
                                    <label class="ml-3" for="lowercase">Lowercase (a-z)</label>
                                </li>
                                <li class="option flex items-center">
                                    <input type="checkbox" v-model="options" value="uppercase"
                                        class="checkbox checkbox-primary" />
                                    <label class="ml-3" for="uppercase">Uppercase (A-Z)</label>
                                </li>
                                <li class="option flex items-center">
                                    <input type="checkbox" v-model="options" value="numbers"
                                        class="checkbox checkbox-primary" />
                                    <label class="ml-3" for="numbers">Numbers (0-9)</label>
                                </li>
                                <li class="option flex items-center">
                                    <input type="checkbox" v-model="options" value="symbols"
                                        class="checkbox checkbox-primary" />
                                    <label class="ml-3" for="symbols">Symbols (!-$^+)</label>
                                </li>
                                <li class="option flex items-center">
                                    <input type="checkbox" v-model="options" value="exc-duplicate"
                                        class="checkbox checkbox-primary" />
                                    <label class="ml-3" for="exc-duplicate">Exclude Duplicate</label>
                                </li>
                            </ul>
                        </div>
                        <button @click="generatePassword"
                            class="w-full py-4 mt-6 flex itmes-center justify-center bg-primary uppercase rounded-xl text-xl font-medium tracking-wide hover:bg-red-600 duration-100">Generate
                            Password</button>
                    </div>
                </div>
            </div>
            <div class="ml-auto mr-4 mb-2 text-lg">Inspired by <NuxtLink class="text-primary font-medium hover:underline underline-offset-4" to="https://www.codingnepalweb.com/" target="_blank">CodingNepal</NuxtLink></div>

        </div>
    </div>
</template>

<style scoped>
.height-screen-content {
    height: calc(100vh - 144px);
}
</style>
