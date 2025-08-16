<script lang="ts" setup>
import universe from '@/assets/img/universe.jpg';
</script>

<template>
  <div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
    <div
      class="hidden bg-cover bg-center lg:block"
      :style="{ backgroundImage: `url(${universe})` }"
    ></div>
    <slot />
  </div>
</template>
