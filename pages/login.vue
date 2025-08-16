<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <h1 class="mb-2 text-3xl font-bold text-gray-900">Welcome back</h1>
      <p class="mb-6 text-gray-600">
        Welcome to this project — sign in to continue.
      </p>
      <LoginForm @login="onLogin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/auth/LoginForm.vue';
function onLogin(p: Record<string, unknown>) {
  console.log('login', p);
}
</script>
