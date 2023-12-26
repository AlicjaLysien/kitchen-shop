<script setup lang="ts">
import CollectionItem from '../items/CollectionItem.vue'
import { Collections } from "../../global/Collections";
defineProps<{
  title: string,
}>()
</script>

<template>
    <section class="mt-6 flex-1">
        <h2 class="text-xl text-center text-grey-700 md:text-4xl">
            {{ title }}
        </h2>
        <div class="md:flex md:space-x-4 md:justify-between">
            <CollectionItem v-for="collection in Collections" v-bind:key="collection.name" v-bind:title="collection.name">
                <template #image>
                    <img v-bind:src="collection.image" v-bind:alt="'collection - ' + collection.name" />
                </template>
                {{ collection.description }}
            </CollectionItem>
        </div>
    </section>
</template>
