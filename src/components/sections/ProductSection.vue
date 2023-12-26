<script setup lang="ts">
import ProductItem from '../items/ProductItem.vue'
import { Products } from '../../global/Products'
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="my-6">
    <h2 class="text-grey-700 text-center text-xl md:text-4xl">
      {{ title }}
    </h2>
    <div class="md:flex md:justify-between md:space-x-4">
      <ProductItem
        v-for="product in Products"
        v-bind:key="product.name"
        v-bind:title="product.name"
      >
        <template #image>
          <img v-bind:src="product.image" v-bind:alt="'product - ' + product.name" />
        </template>
      </ProductItem>
    </div>
  </section>
</template>
