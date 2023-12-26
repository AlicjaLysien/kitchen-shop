<script setup lang="ts">
import HeaderSection from './HeaderSection.vue'
import CollectionSection from './sections/CollectionSection.vue'
import ProductSection from './sections/ProductSection.vue'
import ShowroomSection from './sections/ShowroomSection.vue'
</script>

<template>
  <HeaderSection />
  <ProductSection title="Products" />
  <ShowroomSection title="Best in our collection" />
  <CollectionSection title="Best in our collection" />
</template>
