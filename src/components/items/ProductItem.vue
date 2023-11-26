<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="mt-6 flex-1">
        <slot name="image"></slot>
        <div class="text-center md:text-left">
            <h3 class="text-lg">
                {{ title }}
            </h3>
        </div>
    </div>
  </template>
