<script setup lang="ts">
definePageMeta({
    layout: false,
});

const runtimeConfig = useRuntimeConfig();
const username = ref('')
const password = ref('')
const is_show = ref(false);

const login = async () => {
    if (username.value === runtimeConfig.public.username) {
        if(password.value === runtimeConfig.public.password) {
            await localStorage.setItem("auth",runtimeConfig.public.token)
            navigateTo('/dashboard')
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("incorrect username")
    }
    
}


function toggleShow() {
    is_show.value = !is_show.value
}
</script>

<template>
    <div class="min-h-screen bg-cover bg-left lg:bg-center bg-login-page w-screen h-screen overflow-hidden">
        <div class="container mx-auto h-full flex items-center justify-center">
            <form onsubmit="return false;" class="login__form w-88 sm:w-96 backdrop-blur border-2 border-white rounded-2xl p-6 pt-8 text-white animate-floaty">
                <h1 class="mb-6 text-4xl font-semibold text-center">Login</h1>
                <div class="login__content grid gap-y-8 mb-8">
                    <div class="login__box grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="uil:user-square" class="login__icon" size="36" />
                        <div class="relative">
                            <input type="text" v-model="username" class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" " spellcheck="false" >
                            <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Username</label>
                        </div>
                    </div>

                    <div class="login__box grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="uil:padlock" class="login__icon" size="36" />
                        <div class="relative">
                            <input v-if="is_show" type="text" v-model="password" class="login__input w-full py-3 pb-1 outline-none bg-transparent relative z-[1]" id="login-pass" placeholder=" " spellcheck="false" >
                            <input v-else type="password" v-model="password" class="login__input w-full py-3 pb-1 outline-none bg-transparent relative z-[1]" id="login-pass" placeholder=" " spellcheck="false" >
                            <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Password</label>
                            <div class="login__eye">
                                <Icon name="uil:eye" v-if="is_show" @click="toggleShow()" />
                                <Icon name="uil:eye-slash" v-else @click="toggleShow()" />
                            </div>
                        </div>
                    </div>
                </div>

                <button @click="login" class="w-full p-3 mb-4 rounded-xl bg-white duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 text-black text-xl font-semibold">Login</button>
                <p class="text-center text-lg">You are not admin? Back to <NuxtLink to="/" class="text-red-400 hover:underline underline-offset-4">Home Page</NuxtLink> !</p>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login__form {
    background-color: hsla(0, 0%, 10%, .1);
}

.login__box {
    grid-template-columns: max-content 1fr;
}

input::-ms-reveal {
    display: none;
}

.login__eye {
    position: absolute;
    right: 0;
    top: 12px;
    z-index: 10;
    cursor: pointer;
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