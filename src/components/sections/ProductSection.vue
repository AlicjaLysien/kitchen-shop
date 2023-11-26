<script setup lang="ts">
import ProductItem from '../items/ProductItem.vue'
import { Products } from "../../global/Products";
defineProps<{
  title: string,
}>()
</script>

<template>
    <section class="my-6">
        <h2 class="text-xl">
          {{ title }}
        </h2>
        <div class="md:flex md:space-x-4 md:justify-between">
            <ProductItem v-for="product in Products" v-bind:key="product.name" v-bind:title="product.name">
                <template #image>
                    <img v-bind:src="product.image" v-bind:alt="'product - ' + product.name" />
                </template>
            </ProductItem>
        </div>
    </section>
  </template>
