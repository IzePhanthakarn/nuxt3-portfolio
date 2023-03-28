<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: false
});

function logout() {
    localStorage.removeItem("auth");
    navigateTo('/')
}

</script>

<template>
    <div class="w-screen h-screen bg-gray-700">
        <button @click="logout">logout</button>
        <p>
            dashboard
        </p>
    </div>
</template>