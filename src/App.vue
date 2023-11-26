<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconHome from './components/icons/IconHome.vue'
import IconInfo from './components/icons/IconInfo.vue'

</script>

<template>
  <header>
    <nav class="flex flex-wrap justify-center space-x-6	py-4 bg-blue-950 text-blue-50 text-lg">
      <RouterLink to="/" class="flex hover:text-blue-200"><IconHome/><span class="pl-1.5">Home</span></RouterLink>
      <RouterLink to="/about" class="flex hover:text-blue-200"><IconInfo/><span class="pl-1.5">About</span></RouterLink>
    </nav>
  </header>
  <main class="container mx-auto py-6 md:px-2 lg:px-24">
    <RouterView />
  </main>
</template>
