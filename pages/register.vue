<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <h1 class="mb-2 text-3xl font-bold text-gray-900">Get started</h1>
      <p class="mb-6 text-gray-600">
        Welcome to this project — create your account to continue.
      </p>
      <RegisterForm @register="onRegister" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '~/components/auth/RegisterForm.vue';
function onRegister(p: Record<string, unknown>) {
  console.log('register', p);
}
</script>
