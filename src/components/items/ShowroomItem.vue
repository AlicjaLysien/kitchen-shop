<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mt-6 flex-1">
    <slot name="image"></slot>
    <div class="text-center md:text-left">
      <h3
        class="mt-1 inline-block rounded-md bg-blue-900 px-2 py-1 text-lg font-medium leading-none text-gray-200"
      >
        {{ title }}
      </h3>
    </div>
    <p class="text-sm font-semibold leading-snug text-gray-700">
      <slot></slot>
    </p>
  </div>
</template>
