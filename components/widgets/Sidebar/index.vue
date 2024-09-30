<template>
  <Transition name="slide-fade">
    <aside class="fixed z-10 h-full border-r-2 w-[300px] p-4 bg-white">
      <h4 class="text-2xl mb-4">Category:</h4>
      <NuxtLink
        :to="`/catalog/${category.id}`"
        class="py-2 px-3 flex cursor-pointer hover:bg-neutral-200 transition rounded-xl"
        v-for="category in categories"
        :key="category.id"
        @click="emits('onClick')"
      >
        {{ category.name }}
      </NuxtLink>
    </aside>
  </Transition>
</template>


<script setup lang="ts">
const {categories} = useCategory()

const emits = defineEmits(['onClick'])
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>
