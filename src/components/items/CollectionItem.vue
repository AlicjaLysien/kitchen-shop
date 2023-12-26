<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
    <div class="mt-6 p-1 flex-1 bg-blue-100 rounded-md hover:opacity-90">
        <slot name="image" />
        <h3 class="h3 text-blue-950 text-2xl font-semibold text-center md:text-left">
            {{ title }}
        </h3>
        <p class="leading-snug text-sm text-gray-700 font-semibold">
            <slot></slot>
        </p>
    </div>
  </template>
