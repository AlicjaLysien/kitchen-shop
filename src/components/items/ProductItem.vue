<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="relative mt-6 flex-1">
    <slot name="image" />
    <div class="text-center md:text-left">
      <button
        class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-gradient-to-b from-orange-500 to-orange-800 px-4 py-2 text-2xl text-gray-200 hover:from-orange-600 hover:to-orange-800"
      >
        {{ title }}
      </button>
    </div>
  </div>
</template>
