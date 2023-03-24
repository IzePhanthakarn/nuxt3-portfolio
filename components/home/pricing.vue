<script setup>
const plans = [
   {
      icon: "fluent:document-page-24-regular",
      name: "Landing Page Website",
      price: "39.99",
      thPrice: "1,499",
      checkLists: ["Free Design", "Free Domain Name", "Free support for the first 3 months", "Free server fee for the first 3 months", "Completed in 7-14 days"],
      link: "/about"
   },
   {
      icon: "fluent:document-page-24-regular",
      name: "Multi-Page Website",
      price: "79.99",
      thPrice: "2,999",
      checkLists: ["Free Design", "Free Domain Name", "Free 7 web pages", "Free support for the first 6 months", "Free server fee for the first 6 months", "Completed in 15-30 days"],
      link: "/about"
   },
   {
      icon: "fluent:document-page-24-regular",
      name: "Web Application",
      price: "169.99",
      thPrice: "5,999",
      checkLists: ["Free Design", "Free Domain Name", "Free 12 web pages", "Free 12 Rest APIs", "Free support for the first 12 months", "Free server for the first 12 months", "Free database for the first 12 months.", "Completed in 1-3 months"],
      link: "/about"
   }
]
</script>

<template>
   <div class="w-full flex justify-center items-center py-0 lg:py-8">
      <div class="container px-5 flex flex-col justify-center items-center">
         <div class="mb-4">
            <h1 class="head after:content-['choose_your_plan'] after:bg-color-base before:bg-primary mx-auto">
               Pricing & Plans</h1>
         </div>

         <div
            class=" w-full mt-4 grid grid-cols-1 sm:grid-cols-2 xl:flex justify-around gap-10 xl:space-x-10 2xl:space-x-16">
            <div v-for="(plan, index) in plans" :key="index"
               class="w-full bg-color-base2 rounded-xl flex z-[5] flex-col justify-between p-3 border-color-base2 border-2 duration-300 hover:border-white"
               :class="{ 'relative': index === 1 }">
               <div v-if="index === 1" class="ribbin"><span class="bg-primary uppercase text-bold">Recommend</span></div>
               <div class="w-full">
                  <div class="w-full flex items-center space-x-2">
                     <Icon :name=plan.icon class="text-primary" size="60" />
                     <div>
                        <p class="text-lg">{{ plan.name }}</p>
                        <h1 class="text-3xl font-medium">{{ plan.price }} $ <span class="text-gray-500 text-2xl">(
                              {{ plan.thPrice }} ฿ )</span></h1>
                     </div>
                  </div>
                  <hr class="my-2">
                  <ul class="mt-4">
                     <li v-for="(checkList, index) in plan.checkLists" :key="index" class="my-1 text-lg">
                        <Icon name="uil:check-circle" class="text-primary" /> {{ checkList }}
                     </li>
                  </ul>
               </div>
               <div class="w-full">
                  <hr class="my-4">
                  <BaseButton :to=plan.link class="w-fit mx-auto mt-4 mb-1">Select Plan</BaseButton>
               </div>
            </div>
         </div>
         <BaseButton to="/pricing" class="w-fit mr-0 ml-auto mt-8">More</BaseButton>
      </div>
   </div>
</template>

<style scoped>
.head::before {
   bottom: 11.5px;
}

.head::after {
   bottom: 0;
}

.ribbin {
   height: 150px;
   width: 150px;
   position: absolute;
   top: -15px;
   right: -15px;
   overflow: hidden;
   /* background: blue; */
}

.ribbin::before,
.ribbin::after {
   position: absolute;
   content: "";
   display: block;
   border: .43rem solid #811d1d;
   border-top-color: transparent;
   border-right-color: transparent;
}

.ribbin::before {
   bottom: 22px;
   right: 0;
}

.ribbin::after {
   top: 0;
   left: 22px;
}

.ribbin span {
   position: absolute;
   width: 200px;
   padding: 10px 0;
   text-align: center;
   top: 25px;
   right: -50px;
   transform: rotate(45deg);
}</style>
