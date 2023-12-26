<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mt-6 flex-1 rounded-md bg-blue-100 p-1 hover:opacity-90">
    <slot name="image" />
    <h3 class="h3 text-center text-2xl font-semibold text-blue-950 md:text-left">
      {{ title }}
    </h3>
    <p class="text-sm font-semibold leading-snug text-gray-700">
      <slot></slot>
    </p>
  </div>
</template>
