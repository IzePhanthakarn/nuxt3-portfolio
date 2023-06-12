<script setup lang="ts">
const props = defineProps({
   name: {
      type: String,
      default: ''
   },
   img: {
      type: String,
      default: ''
   },
   relation: {
      type: String,
      default: ''
   },
   detail: {
      type: String,
      default: ''
   },
   lastUpdate: {
      type: String,
      default: ''
   },
   score: {
      type: Number,
      default: 0
   }
});
// const img = props.img.substring(1)
// let image = `https://go-portfolio.onrender.com${img}`

// const millisec = Date.parse(props.lastUpdate);

// const date = new Date(millisec)

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];
// const year = date.getFullYear()
// const month = monthNames[date.getMonth()]
// const day = date.getDate()
// const formatDate = `${month}, ${day} ${year}`

</script>

<template>
   <div
      class="bg-[#222434] h-full flex flex-col justify-between p-2.5 pb-1 rounded-xl ring-2 ring-[#222434] hover:ring-2 hover:ring-white">
      <div class="w-full">
         <div class="w-full flex space-x-4">
            <img :src=img class="w-14 h-14 object-cover rounded-full border-2" alt="testimonail">
            <div class="w-2/3 flex flex-col items-start">
               <h1 class="text-2xl font-semibold line-1clamp">{{ name }}</h1>
               <h2 class="text-lg">{{ relation }}</h2>
            </div>
            <Icon name="lucide:quote" class="text-primary" size="50" />
         </div>
         <hr class="my-3">
         <div class="w-full">
            <p class="line-4clamp">{{ detail }}</p>
         </div>
      </div>

      <div>
         <hr class="my-3">
         <div class="w-full mb-1 flex items-center justify-between">
            <!-- <p>{{ formatDate }}</p> -->
            <p>{{ lastUpdate }}</p>
            <BaseScore :score="score"/>
         </div>
      </div>
   </div>
</template>
