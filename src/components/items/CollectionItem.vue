<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
    <div class="mt-6 flex-1">
        <slot name="image" />
        <div>
            <h3 class="h3 text-blue-950 text-2xl font-semibold text-center md:text-left">
                {{ title }}
            </h3>
            <p class="leading-snug text-sm text-gray-700 font-semibold">
                <slot></slot>
            </p>
        </div>
    </div>
  </template>
