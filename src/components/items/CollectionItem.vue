<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
    <div class="mt-6 flex-1">
        <slot name="image" />
        <div class="text-center md:text-left">
            <h3 class="h3">
                {{ title }}
            </h3>
            <p class="leading-snug text-gray-700 text-sm font-semibold">
                <slot></slot>
            </p>
        </div>
    </div>
  </template>
