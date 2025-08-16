<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <div class="w-full max-w-2xl p-8 text-center">
      <h1 class="mb-4 text-4xl font-extrabold">Nuxt Boilerplate</h1>
      <p class="mb-6 text-gray-600">
        Welcome to this project — pick an action to get started.
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink to="/login" class="rounded bg-indigo-600 px-4 py-2 text-white"
          >Login</NuxtLink
        >
        <NuxtLink to="/register" class="rounded border px-4 py-2"
          >Register</NuxtLink
        >
        <NuxtLink to="/reset-password" class="rounded border px-4 py-2"
          >Reset</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
</script>

<style scoped>
.border {
  border: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
