<script setup>
const error = useError()
</script>

<template>
   <div class="h-screen w-full text-white bg-base flex flex-col items-center justify-center">
      <!-- <div class="w-full fixed top-0 h-20 bg-red-200"></div> -->
      <Navbar />
      <div class="container flex flex-col lg:flex-row items-center justify-evenly">
         <div class="data">
            <div
               class="flex flex-col justify-center items-center lg:items-start text-xl sm:text-3xl 2xl:text-4xl">
               <h1 class="font-medium">Error {{ error.statusCode }}</h1>
               <h2 class="text-4xl sm:my-2 lg:my-1 sm:text-5xl lg:text-6xl xl:text-7xl font-semibold">Hey Friend</h2>
               <h2 class="text-center"> <span class="text-primary">>></span> {{ error.statusMessage }}</h2>
               <nuxt-link to="/" class="mt-4 sm:mt-6 tohome text-lg sm:text-2xl font-medium px-3 sm:px-4 py-0 sm:py-0.5 rounded-lg sm:rounded-xl bg-[#282936] duration-300 hover:bg-primary">Go
                  Home
               </nuxt-link>
            </div>
         </div>
         <div class="img mt-12">
            <img src="/ghost.png" alt="" class="mx-auto">
            <div class="shadow"></div>
         </div>
      </div>
      <Foot class="fixed bottom-0"/>
   </div>
</template>

<style scoped>

.tohome {
  outline: 3px solid #f13637;
  outline-offset: 4px;
}

img {
   width: 230px;
   height: auto;
   animation: floaty 1.8s infinite alternate;
}

.shadow {
   width: 130px;
   height: 24px;
   background-color: rgba(0, 0, 0, 0.5);
   margin: 0 auto;
   border-radius: 50%;
   filter: blur(7px);
   animation: shadow 1.8s infinite alternate;
}

/* Animate ghost */
@keyframes floaty {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(15px);
  }
}

@keyframes shadow {
   0% {
      transform: scale(1, 1);
   }

   100% {
      transform: scale(.85, .85);
   }
}

@media (min-width: 768px) {
   img {
      width: 400px;
   }

   .shadow {
      width: 250px;
      height: 40px;
   }
}

@media (min-width: 1536px) {
   img {
      width: 600px;
   }

   .shadow {
      width: 400px;
      height: 60px;
   }
}
</style>
