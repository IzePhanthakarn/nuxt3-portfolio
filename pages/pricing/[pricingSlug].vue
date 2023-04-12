<script setup lang="ts">

const route = useRoute();
const pricing = usePricing();
const darkmode = ref(false)
const multiLang = ref(false)
const formDarkmode = ref(0)
const formMultiLang = ref(0)
const plan = computed(() => {
   return pricing.plans.find(
      (plan) => plan.slug === route.params.pricingSlug
   );
});
const checkLists = plan.value?.checkLists;
useHead({
   title: `Phanthakarn | ${plan.value?.title}`,
})
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
const totalTHForm = ref(0)

const additions: object = computed(() => {
   let addition: string[] = []
   if (darkmode.value) {
      addition.push("Darkmode")
      formDarkmode.value = 1
   } else {
      addition = addition.filter(num => num != "Darkmode")
      formDarkmode.value = 0
   }
   if (multiLang.value) {
      addition.push("Multi Language")
      formMultiLang.value = 1
   } else {
      addition = addition.filter(num => num != "Multi Language")
      formMultiLang.value = 0
   }
   return addition
});

let name: string = ""
let email: string = ""
let phone: string = ""
let description: string

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
   totalTHForm.value = total
   total = addCommas(total)
   return total
})

const isBot = ref(true);
function checkHuman() {
   isBot.value = false
}

async function formRequest(form: any) {
   return await $fetch('http://localhost:8080/employments', {
      method: 'POST',
      body: form,
   });
}

function validateForm(form: any) {
   let error = ""
   const regex = /^[0-9]+$/;
   if (form.name === "") error = "Please enter your name"
   else if (form.email === "") error = "Please enter your email"
   else if (form.email.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) < 0) error = "Please enter a valid email address"
   else if (form.phone === "") error = "Please enter your phone number"
   else if (form.phone.search(/^[0-9]+$/)) error = "Please enter a valid phone number"
   else if (form.phone.length != 10) error = "Please enter a full 10 digit phone number"
   else if (!form.phone.startsWith('0')) error = "Please enter phone number start with 0"
   else error = ""
   return error
}

function formSubmit() {
   let form = {
      planName: plan.value?.title,
      darkmode: formDarkmode.value,
      multiLang: formMultiLang.value,
      name,
      email,
      phone,
      price: total.value,
      priceTh: totalTHForm.value,
      description,
   };

   let error = validateForm(form);
   if (error != "") {
      $toast.open({
         message: error,
         type: "error",
         position: "top-right"
      });
      return;
   }

   formRequest(form).then((result) => {
      // console.log(result)
      // location.reload()
      // show()
      isOpen.value = true
      // notification("Your offer has been submitted successfully", 'success', 6000);
   }).catch((error) => {
      notification(error, 'error', 3000)
   });
}

const { $toast } = useNuxtApp();

function notification(message: string, type: string, duration: number) {
   $toast.open({
      message: message,
      type: type,
      position: 'top-right',
      duration
   });
}
const isOpen = ref(false);

function toPricing() {
   navigateTo('/pricing');
}
</script>

<template>
   <div class="container text-white mx-auto pt-24 px-5 pb-10">

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
            class="w-full bg-color-base2 rounded-2xl p-2 sm:p-5 sm:pb-0 pb-0 col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-x-8">
            <h1 class="mb-4 px-2 sm:px-0 text-2xl font-medium col-span-3">Your Information</h1>

            <div
               class="login__box mt-2 col-span-3 sm:col-span-2 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
               <Icon name="uil:user" class="login__icon" size="32" />
               <div class="relative">
                  <input type="text" v-model.trim="name"
                     class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                     spellcheck="false">
                  <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Name</label>
               </div>
            </div>

            <div
               class="login__box mt-7 col-span-3 sm:col-span-2 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
               <Icon name="line-md:email" class="login__icon" size="36" />
               <div class="relative">
                  <input type="text" v-model.trim="email"
                     class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                     spellcheck="false">
                  <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Email</label>
               </div>
            </div>

            <div
               class="login__box mt-7 col-span-3 sm:col-span-2 lg:col-span-1 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
               <Icon name="uil:phone" class="login__icon" size="32" />
               <div class="relative">
                  <input type="tel" v-model.trim="phone" maxlength="10" minlength="10"
                     class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]" placeholder=" "
                     spellcheck="false">
                  <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Phone</label>
               </div>
            </div>

            <div class="col-span-3 flex flex-col mt-8 pb-0.5">
               <label for="description" class="mb-1 text-xl font-medium">Description:</label>
               <textarea name="description" v-model.trim="description" rows="5" class="rounded-xl bg-gray-700 p-2"
                  spellcheck=false></textarea>
            </div>

            <div
               class="w-full col-span-3 sm:col-span-1 lg:col-span-2 bg-color-base2 rounded-2xl p-5 pl-0 lg:pl-5 flex items-center space-x-2">
               <h1 class="text-2xl mt-0.5">Total: </h1>
               <p class="text-3xl font-medium">{{ total }} $ <span class="text-gray-500 text-2xl">( {{ totalTH }} ฿
                     )</span></p>
            </div>
            <div class="flex flex-col sm:flex-row col-span-3 sm:col-span-1 items-center space-x-4">
               <vue-friendly-captcha sitekey="FCMLH6SG8H3PT7BE" :dark=true startMode="none" :onDone="checkHuman" />
               <div
                  class="w-full sm:w-fit pr-2 mr-0 sm:mr-auto ml-auto mt-4 sm:mt-0 mb-2 sm:mb-0 col-span-3 sm:col-span-1 flex items-center justify-end">
                  <!-- :class="{ 'pointer-events-none border-gray-500 text-gray-500': isBot }" -->
                  <button type="submit" @click="formSubmit"
                     class="px-2.5 py-1.5 border-2 rounded-xl text-lg flex items-center overflow-hidden duration-300 hover:border-primary">
                     <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                           <Icon name="lucide:send" />
                        </div>
                     </div>
                     <span class="font-medium">Submit</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
      <div
         class="prevent-box bg-color-base2 border-2 border-color-base w-11/12 sm:w-2/3 lg:w-auto flex flex-col items-center justify-center text-default font-medium"
         :class="{ 'active': isOpen }">
         <h1 class="py-4 px-8 text-2xl">Your offer has been submitted successfully</h1>
         <hr class="border-t w-full">
         <Icon class="p-5" name="line-md:confirm-circle" size="200" />
         <p class="px-8 text-center">Thank you for your interest and contacting me to hire me. <br> I will read and reply to you as soon as possible.</p>
         <BaseButton class="mb-6 mt-8 mr-6 ml-auto" @click="toPricing">Thanks !</BaseButton>
      </div>
      <div class="overlay" :class="{ 'active': isOpen }"></div>
   </div>
</template>

<style scoped>

.prevent-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: .2s ease-in-out;
    border-radius: 10px;
    z-index: 60;
}

.prevent-box.active {
    transform: translate(-50%, -50%) scale(1);
}

.prevent-box img {
    max-height: 80vh;
}

.overlay {
    position: fixed;
    opacity: 0;
    transition: .2s ease-in-out;
    z-index: 59;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
}

.overlay.active {
    opacity: 1;
    pointer-events: all;
}

.frc-captcha {
   background: transparent !important;
   border: none;
   margin-bottom: 5px;
}

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
