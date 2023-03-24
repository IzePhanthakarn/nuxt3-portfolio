<template>
   <div class="w-full mt-4 flex justify-center items-center py-0 lg:py-8">
      <div class="container bg-color-base2 border-y-2 sm:border-2 border-primary flex flex-col sm:flex-row sm:rounded-3xl">
         <div class="w-full sm:w-8/12 px-2 sm:px-4 lg:px-8 pt-2 sm:pt-4 lg:pt-8 font-medium text-default">
            <div class="w-full flex items-center space-x-2">
               <Icon name="uil:pricetag-alt" class="text-primary" size="40"/>
               <h1 class="w-full text-2xl sm:text-3xl lg:text-4xl">You want to have a website ?</h1>
            </div>
            <h2 class="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-3 px-1">If this is your first project, contact me and get 30% discount on your new project.</h2>
            <div class="w-full mt-2 sm:mt-4 flex space-x-4">
               <BaseButton class="w-fit">Consult Me</BaseButton>
               <BaseButton class="w-fit" secondary>View Pricing</BaseButton>
            </div>
            <!-- <nuxt-link to="/contacts" class="bg-blue-600 text-white rounded-xl py-1 px-3 text-tiny">Contact
               me</nuxt-link> -->
         </div>
         <div class="w-full sm:w-4/12">
            <img src="/img/me/myprofile2.png" alt=""
               class="w-2/3 lg:w-3/4 sm:w-full sm:rounded-3xl mr-0 ml-auto -mt-12 sm:mt-0">
         </div>
      </div>
   </div>
</template>
