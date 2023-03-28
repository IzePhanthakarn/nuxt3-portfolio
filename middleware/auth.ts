export default defineNuxtRouteMiddleware((to,from) => {
    const runtimeConfig = useRuntimeConfig();
    const token = localStorage.getItem("auth");
    if (token!=runtimeConfig.public.token){
        return navigateTo('/');
    }
})