<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
    <div class="mt-6 flex-1">
        <slot name="image"></slot>
        <div class="text-center md:text-left">
            <h3 class="inline-block	text-lg bg-blue-900 text-gray-200 mt-1 py-1 px-2 font-medium rounded-md leading-none">
                {{ title }}
            </h3>
        </div>
        <p class="leading-snug text-gray-700 text-sm font-semibold">
            <slot></slot>
        </p>
    </div>
  </template>
