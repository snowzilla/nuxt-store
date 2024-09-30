<script setup lang="ts">
import Loader from "~/components/shared/Loader.vue";

const { category } = useCategory()

const route = useRoute()

const {
  data: products,
  status
} = await useLazyFetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${route.params.categoryId}`)
</script>

<template>
  <Loader
    v-if="status === 'pending'"
    class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
  />
  <div
    class="p-6"
    v-else
  >
    <h3 class="text-4xl mb-8">{{ category.name }}</h3>
    <div class="grid grid-cols-5 gap-x-4 gap-y-7">
      <EntitiesProductsCard
        v-for="item in products"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
