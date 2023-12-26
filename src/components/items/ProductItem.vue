<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="mt-6 flex-1 relative">
        <slot name="image" />
        <div class="text-center md:text-left">
            <button class="absolute text-2xl py-2 px-4 rounded-lg text-gray-200 bg-gradient-to-b from-orange-500 to-orange-800
            top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] hover:from-orange-600 hover:to-orange-800">
                {{ title }}
            </button>
        </div>
    </div>
  </template>
