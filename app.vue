<template>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#f13637" />
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  scale: .99;
  filter: blur(.15rem);

}
</style>