<template>
    <div class="w-full min-height text-white pt-24">

        <div class="container mx-auto px-5 flex flex-col justify-center items-center">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['choose_your_plan'] after:bg-color-base before:bg-primary mx-auto">
                    Pricing & Plans</h1>
            </div>

            <PricingHero />
            <PricingExplain />
            <PricingFaq />
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

</style>