<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Reset password
      </h1>
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        Enter your email and we'll send a reset link.
      </p>
      <ResetPasswordForm @reset="onReset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ResetPasswordForm from '~/components/auth/ResetPasswordForm.vue';
function onReset(p: Record<string, unknown>) {
  console.log('reset', p);
}
</script>
