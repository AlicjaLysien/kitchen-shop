<script setup lang="ts">
defineProps<{
  category: 'furniture' | 'electronics' | 'accessories'
}>()
</script>

<template>
  <div class="mt-6 flex-1">
    <img
      v-if="category == 'furniture'"
      src="./images/products/furniture.jpg"
      v-bind:alt="category"
    />
    <img
      v-if="category == 'electronics'"
      src="./images/products/electronics.jpg"
      v-bind:alt="category"
    />
    <img
      v-if="category == 'accessories'"
      src="./images/products/accessories.jpg"
      v-bind:alt="category"
    />
    <div class="text-center md:text-left">
      <h3 class="text-lg">
        {{ category[0].toUpperCase() + category.slice(1) }}
      </h3>
    </div>
  </div>
</template>
