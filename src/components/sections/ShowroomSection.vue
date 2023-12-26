<script setup lang="ts">
import ShowroomItem from '../items/ShowroomItem.vue'
import { Showrooms } from '../../global/Showrooms'
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="my-6">
    <h2 class="text-grey-700 text-center text-xl md:text-4xl">Showroom</h2>
    <div class="md:flex md:justify-between md:space-x-4">
      <ShowroomItem
        v-for="showroom in Showrooms"
        v-bind:key="showroom.name"
        v-bind:title="showroom.name"
      >
        <template #image>
          <img v-bind:src="showroom.image" v-bind:alt="'showroom - ' + showroom.name" />
        </template>
        {{ showroom.description }}
      </ShowroomItem>
    </div>
  </section>
</template>
