<template>
  <div class="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
    <h2 class="mb-4 text-2xl font-semibold text-gray-800">Reset password</h2>

    <form novalidate class="space-y-4" @submit.prevent="onSubmit">
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
        <Button
          :loading="loading"
          :disabled="loading"
          type="submit"
          label="Send reset link"
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
        <NuxtLink to="/login" class="text-indigo-600 hover:underline"
          >Back to sign in</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { reactive, ref } from 'vue';

const emits = defineEmits(['reset', 'show-login']);
const form = reactive({ email: '' });
const errors = reactive<{ email?: string }>({});
const loading = ref(false);
const message = ref('');

function validate() {
  errors.email = '';
  let ok = true;
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
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
    emits('reset', { ...form });
    message.value = 'If an account exists, a reset link was sent (demo).';
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
