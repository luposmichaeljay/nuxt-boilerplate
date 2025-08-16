<template>
  <div class="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
    <h2 class="mb-4 text-2xl font-semibold text-gray-800">Create account</h2>

    <form class="space-y-4" @submit.prevent="onSubmit">
      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700"
          >Full name</label
        >
        <InputText v-model="form.name" placeholder="Jane Doe" class="w-full" />
        <p v-if="errors.name" class="mt-1 text-xs text-red-600">
          {{ errors.name }}
        </p>
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700"
          >Email</label
        >
        <InputText
          v-model="form.email"
          placeholder="you@company.com"
          class="w-full"
        />
        <p v-if="errors.email" class="mt-1 text-xs text-red-600">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700"
          >Password</label
        >
        <Password
          v-model="form.password"
          :feedback="false"
          toggle-mask
          class="w-full"
        />
        <p v-if="errors.password" class="mt-1 text-xs text-red-600">
          {{ errors.password }}
        </p>
      </div>

      <div>
        <Button
          :loading="loading"
          :disabled="loading"
          type="submit"
          label="Create account"
          class="p-button-primary w-full"
        />
      </div>
      <div
        v-if="message"
        class="mt-3 rounded border-l-4 border-green-500 bg-green-50 p-3 text-sm text-green-800"
      >
        {{ message }}
      </div>
      <div class="pt-2 text-center text-sm">
        <span class="text-gray-600 dark:text-gray-300"
          >Already have an account?</span
        >
        <NuxtLink to="/login" class="ml-2 text-indigo-600 hover:underline"
          >Sign in</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { reactive, ref } from 'vue';

const emits = defineEmits(['register']);

const form = reactive({ name: '', email: '', password: '' });
const errors = reactive<{ name?: string; email?: string; password?: string }>(
  {},
);
const loading = ref(false);
const message = ref('');

function validate() {
  errors.name = '';
  errors.email = '';
  errors.password = '';
  let ok = true;
  if (!form.name) {
    errors.name = 'Please enter your full name.';
    ok = false;
  }
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
    ok = false;
  }
  if (!form.password || form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
    ok = false;
  }
  return ok;
}

async function onSubmit() {
  if (!validate()) return;
  loading.value = true;
  message.value = '';
  try {
    await new Promise((r) => setTimeout(r, 600));
    emits('register', { ...form });
    message.value = 'Account created (demo).';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.p-button-primary .p-button-label {
  font-weight: 600;
}
</style>
