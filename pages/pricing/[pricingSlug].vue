<script setup lang="ts">
const route = useRoute();
const pricing = usePricing();
const darkmode = ref(false)
const multiLang = ref(false)
const plan = computed(() => {
    return pricing.plans.find(
        (plan) => plan.slug === route.params.pricingSlug
    );
});
const checkLists = plan.value?.checkLists;

function addCommas(num: any) {
    num = num.toString();
    var len = num.length;
    var result = '';
    for (var i = 0; i < len; i++) {
        if (i > 0 && (len - i) % 3 === 0) {
            result += ',';
        }
        result += num[i];
    }
    return result;
}
const priceTH = addCommas(plan.value?.thPrice);

const additions: object = computed(() => {
    let addition: string[] = []
    darkmode.value ? addition.push("Darkmode") : addition = addition.filter(num => num != "Darkmode")
    multiLang.value ? addition.push("Multi Language") : addition = addition.filter(num => num != "Multi Language")
    return addition
});

const name = ref('');
const email = ref('');
const phone = ref('');
const description = ref('')

const total: any = computed(() => {
    let total: any = plan.value?.price;
    darkmode.value ? total += 10 : total += 0
    multiLang.value ? total += 10 : total += 0
    return total
});

const totalTH: any = computed(() => {
    let total: any = plan.value?.thPrice;
    darkmode.value ? total += 350 : total += 0
    multiLang.value ? total += 350 : total += 0
    total = addCommas(total)
    return total
})

</script>

<template>
    <div class="container text-white mx-auto pt-24 px-5 pb-10 height-scree">

        <!-- Title -->
        <div data-aos="fade-right" class="w-full flex items-center justify-between">
            <div class="flex items-center space-x-1">
                <Icon name="uil:pricetag-alt" size="40" class="text-primary" />
                <h1 class="text-3xl font-medium">Pricing Plans</h1>
            </div>
            <div @click="$router.go(-1)"
                class="flex items-center space-x-1 border-2 w-fit py-1 pl-0.5 pr-2 rounded-lg cursor-pointer duration-100 hover:border-primary">
                <Icon name="material-symbols:arrow-right-alt-rounded" class="rotate-180" />
                <p>Back</p>
            </div>
        </div>

        <div class="w-full h-full mt-4 grid grid-cols-2 gap-4 sm:gap-8">
            <div class="w-full col-span-2 sm:col-span-1 h-full bg-color-base2 rounded-3xl p-3">
                <div class="w-full flex items-center space-x-2">
                    <Icon name="fluent:document-page-24-regular" class="text-primary" size="60" />
                    <div>
                        <p class="text-lg">{{ plan?.title }}</p>
                        <h1 class="text-3xl font-medium">{{ plan?.price }} $ <span class="text-gray-500 text-2xl">(
                                {{ priceTH }} ฿ )</span></h1>
                    </div>
                </div>
                <hr class="my-2">
                <ul class="mt-4 px-1">
                    <li v-for="(checkList, index) in checkLists" :key="index" class="my-1 text-lg">
                        <Icon name="uil:check-circle" class="text-primary" /> {{ checkList }}
                    </li>
                    <li v-for="(addition, index) in additions" :key="index" class="my-1 text-lg">
                        <Icon name="uil:check-circle" class="text-primary" /> {{ addition }}
                    </li>
                </ul>

            </div>
            <div class="w-full col-span-2 sm:col-span-1 sm:h-[340px] flex flex-col justify-between">
                <div class="w-full sm:h-full flex flex-col space-y-4 sm:space-y-8">

                    <div class="w-full h-auto sm:h-full flex flex-col justify-center bg-color-base2 rounded-2xl p-3 sm:p-5">
                        <div class="w-full flex items-end justify-between space-x-2 border-b-2 pb-3">
                            <div class="flex items-center space-x-2">
                                <Icon name="line-md:sun-rising-loop" size="30" class="text-primary" />
                                <h1 class="text-2xl mt-0.5 font-medium">Darkmode</h1>
                            </div>
                            <p class="text-xl font-medium">+10 $ <span class="text-gray-500">( 350 ฿ )</span></p>
                        </div>

                        <div class="mt-4 ml-2 flex items-center">
                            <input v-model="darkmode" type="checkbox" class="h-5 w-5 cursor-pointer">
                            <label class="ml-4 mt-0.5 text-lg">Add Darkmode feature</label>
                        </div>
                    </div>

                    <div class="w-full h-auto sm:h-full flex flex-col justify-center bg-color-base2 rounded-2xl p-3 sm:p-5">
                        <div class="w-full flex items-end justify-between space-x-2 border-b-2 pb-3">
                            <div class="flex items-center space-x-2">
                                <Icon name="bi:translate" size="30" class="text-primary" />
                                <h1 class="text-2xl mt-0.5 font-medium">Multi-lang</h1>
                            </div>
                            <p class="text-xl font-medium">+10 $ <span class="text-gray-500">( 350 ฿ )</span></p>
                        </div>

                        <div class="mt-4 ml-2 flex items-center">
                            <input v-model="multiLang" type="checkbox" class="h-5 w-5 cursor-pointer">
                            <label class="ml-4 mt-0.5 text-lg">Add Multi-lang feature</label>
                        </div>
                    </div>
                </div>

            </div>

            <form onsubmit="return false;"
                class="w-full bg-color-base2 rounded-2xl p-5 pb-0 col-span-2 grid grid-cols-3 gap-x-8">
                <h1 class="mb-4 text-2xl font-medium col-span-3">Your Information</h1>

                <div class="login__box mt-2 col-span-3 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="uil:user" class="login__icon" size="32" />
                    <div class="relative">
                        <input type="text" v-model="name"
                            class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                            spellcheck="false">
                        <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Name</label>
                    </div>
                </div>

                <div class="login__box mt-7 col-span-3 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="line-md:email" class="login__icon" size="36" />
                    <div class="relative">
                        <input type="email" v-model="email"
                            class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                            spellcheck="false">
                        <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Email</label>
                    </div>
                </div>

                <div class="login__box mt-7 col-span-3 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                    <Icon name="uil:phone" class="login__icon" size="32" />
                    <div class="relative">
                        <input type="tell" v-model="phone"
                            class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                            spellcheck="false">
                        <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Phone</label>
                    </div>
                </div>

                <div class="col-span-3 flex flex-col mt-8 pb-0.5">
                    <label for="description" class="mb-1 text-xl font-medium">Description:</label>
                    <textarea name="description" v-model="description" rows="5" class="rounded-xl bg-gray-700 p-2"
                        spellcheck=false></textarea>
                </div>

                <div class="w-full col-span-3 sm:col-span-2 bg-color-base2 rounded-2xl p-5 pl-0 lg:pl-5 flex items-center space-x-2">
                    <h1 class="text-2xl mt-0.5">Total: </h1>
                    <p class="text-3xl font-medium">{{ total }} $ <span class="text-gray-500 text-2xl">( {{ totalTH }} ฿
                            )</span></p>
                </div>
                <div class="w-full mb-4 sm:mb-0 col-span-3 sm:col-span-1 flex items-center justify-end">
                    <button type="submit" class="px-2.5 py-1.5 border-2 rounded-xl text-lg flex items-center overflow-hidden duration-300 hover:border-primary">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <Icon name="lucide:send" />
                            </div>
                        </div>
                        <span class="font-medium">Submit</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}

input[type="checkbox"] {
    display: grid;
    place-content: center;
    appearance: none;
    margin: 0;
    font: inherit;
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

button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
    transform: translateX(1.5em) rotate(45deg) scale(1.1);
}

button:hover span {
    transform: translateX(5em);
}

button:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}
</style>
