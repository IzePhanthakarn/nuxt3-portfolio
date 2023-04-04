<template>
   <div class="w-full my-12 sm:mb-4 lg:mb-0 flex justify-center items-center py-0 lg:py-8">
      <div class="container bg-color-base2 border-y-2 sm:border-2 border-primary flex flex-col sm:flex-row sm:rounded-3xl">
         <div class="w-full sm:w-8/12 px-2 sm:px-4 lg:px-8 pt-2 sm:pt-4 lg:pt-8 font-medium text-default">
            <div data-aos="fade-left" class="w-full flex items-center space-x-2">
               <Icon name="uil:pricetag-alt" class="text-primary" size="40"/>
               <h1 class="w-full text-2xl sm:text-3xl lg:text-4xl">You want to have a website ?</h1>
            </div>
            <h2 data-aos="fade-left" class="text-lg sm:text-xl lg:text-2xl text-gray-400 mt-1 sm:mt-3 px-1">If this is your first project, contact me and get 30% discount on your new project.</h2>
            <div data-aos="fade-left" class="w-full mt-2 sm:mt-4 flex space-x-4">
               <BaseButton class="w-fit" to="/contacts">Consult Me</BaseButton>
               <BaseButton class="w-fit" to="/pricing" secondary>View Pricing</BaseButton>
            </div>
         </div>
         <div data-aos="fade-right" class="w-full sm:w-4/12">
            <img src="/img/me/myprofile2.png" alt=""
               class="w-2/3 lg:w-3/4 sm:w-full sm:rounded-3xl mr-0 ml-auto -mt-12 sm:mt-0">
         </div>
      </div>
   </div>
</template>
