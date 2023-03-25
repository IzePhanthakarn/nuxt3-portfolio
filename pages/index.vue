<template>
   <div class="text-white">
      <HomeHero class="background" />
      <HomeAbout />
      <HomeExperiences />
      <HomeSkill />
      <HomePortfolio />
      <HomeAdvertise />
      <HomePricing />
      <HomeBlog />
      <HomeTestimonial />
      <HomeContacts class="background-contact"/>
   </div>
</template>

<style scoped>
.background {
   background-image: url('/hero-background.gif');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   min-height: 100vh;
}
.background-contact {
   background-image: url('/8088698.gif');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   min-height: 100vh;
}
</style>
