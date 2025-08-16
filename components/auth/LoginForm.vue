<template>
  <div class="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
    <h2 class="mb-4 text-2xl font-semibold text-gray-800">Sign in</h2>

    <form class="space-y-4" @submit.prevent="onSubmit">
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

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember"
            v-model="form.remember"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600"
          />
          <label for="remember" class="ml-2 block text-sm text-gray-700"
            >Remember me</label
          >
        </div>
        <NuxtLink
          to="/reset-password"
          class="text-sm text-indigo-600 hover:underline"
          >Forgot?</NuxtLink
        >
      </div>

      <div>
        <Button
          :loading="loading"
          :disabled="loading"
          type="submit"
          label="Sign in"
          class="p-button-primary w-full"
        />
      </div>
      <div
        v-if="message"
        class="rounded border-l-4 border-green-500 bg-green-50 p-3 text-sm text-green-800"
      >
        {{ message }}
      </div>
      <div class="pt-2 text-center text-sm">
        <span class="text-gray-600">Don't have an account?</span>
        <NuxtLink to="/register" class="ml-2 text-indigo-600 hover:underline"
          >Create account</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { reactive, ref } from 'vue';

const emits = defineEmits(['login']);

const form = reactive({ email: '', password: '', remember: false });
const errors = reactive<{ email?: string; password?: string }>({});
const loading = ref(false);
const message = ref('');

function validate() {
  errors.email = '';
  errors.password = '';
  let ok = true;
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
    // simulate async work — replace with real API call
    await new Promise((res) => setTimeout(res, 600));
    emits('login', { ...form });
    message.value = 'Signed in successfully (demo).';
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
