<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: "admin",
});

const name = ref('');
const email = ref('');
const typeSelected = ref('All')
const typeList = ['All', 'Landing Page Website', 'Multi-Page Website', 'Web Application']
const statusSelected = ref('All')
const statusList = ['All', 'Request', 'Accepted', 'Finished']
</script>

<template>
    <div class="w-full h-full flex flex-col space-y-8">
        <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
            <div class="flex items-center space-x-2">
                <Icon name="uil:pricetag-alt" size="40" />
                <h1 class="text-3xl font-medium">Employment</h1>
            </div>
        </div>

        <div class="w-full h-full bg-neutral rounded-xl column-1 p-4 shadow-lg">
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="w-full flex space-x-8">
                    <div
                        class="login__box w-full mt-7 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="uil:user" class="login__icon" size="36" />
                        <div class="relative">
                            <input type="email" v-model="name"
                                class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]"
                                placeholder=" " spellcheck="false">
                            <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Name</label>
                        </div>
                    </div>

                    <div
                        class="login__box w-full mt-7 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="line-md:email" class="login__icon" size="36" />
                        <div class="relative">
                            <input type="email" v-model="email"
                                class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]"
                                placeholder=" " spellcheck="false">
                            <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Email</label>
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-end space-x-4 text-white">
                    <div class="w-full h-full flex flex-col justify-end">
                        <h1>Type of plan:</h1>
                        <div class="w-full mt-0.5">
                            <select v-model="typeSelected" name="" id=""
                                class="w-full bg-transparent cursor-pointer border-2 h-11 px-2 rounded-lg">
                                <option class="bg-neutral" v-for="(type, index) in typeList" :key="index" :value=type>{{
                                    type }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full h-full flex flex-col justify-end">
                        <h1>Status:</h1>
                        <div class="w-full mt-0.5">
                            <select v-model="statusSelected" name="" id=""
                                class="w-full bg-transparent cursor-pointer border-2 h-11 px-2 rounded-lg">
                                <option class="bg-neutral" v-for="(status, index) in statusList" :key="index" :value=status>
                                    {{ status }}</option>
                            </select>
                        </div>
                    </div>
                    <BaseButton class="h-fit mb-0.5" icon="ci:search-magnifying-glass">Search</BaseButton>
                </div>
            </div>

            <div class="w-full height-content px-2">
                <div class="w-full height-content mt-6 p-3 bg-neutral-content rounded-xl overflow-hidden">
                    <div class="w-full height-table overflow-y-scroll space-y-4 rounded-xl column-1">
                        <div
                            class="w-full h-40 table-content bg-white border-[3px] border-primary text-black grid grid-cols-3 rounded-xl">
                            <div class="w-full h-full border-r-2 p-4">
                                <div class="h-full flex flex-col">
                                    <h1 class="text-3xl font-semibold mb-2 border-b-2">Plan: Web Application</h1>
                                    <div class="w-full flex items-center space-x-3">
                                        <input type="radio" class="radio radio-primary h-5 w-5" checked />
                                        <p class="text-xl font-semibold mt-0.5">Darkmode</p>
                                    </div>
                                    <div class="w-full flex items-center space-x-3">
                                        <input type="radio" class="radio radio-primary h-5 w-5" checked />
                                        <p class="text-xl font-semibold mt-0.5">Multi-lang</p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full h-full border-r-2 px-4 flex flex-col justify-around divide-y-2">
                                <p class="h-full flex items-center text-xl font-semibold">name: Phanthakarn Khumphai</p>
                                <p class="h-full flex items-center text-xl font-semibold">email: izephanthakarn@hotmail.com
                                </p>
                                <p class="h-full flex items-center text-xl font-semibold">Phone: 0983405579</p>
                            </div>

                            <div class="w-full h-full px-4 flex flex-col justify-around divide-y-2 ">
                                <div class="h-full flex items-center justify-between text-xl font-semibold">
                                    <p>Total price:</p>
                                    <p>199.99 $</p>
                                </div>
                                <div class="h-full flex items-center justify-between text-xl font-semibold">
                                    <p>Status</p>
                                    <div class="badge badge-success px-2.5 py-3 text-lg font-medium text-green-900">
                                        success
                                    </div>
                                </div>
                                <div class="h-full w-full pt-1.5">
                                    <BaseButton class="w-fit mr-0 ml-auto">Detail</BaseButton>
                                </div>
                            </div>
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
}</style>