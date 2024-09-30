<template>
  <input
    v-model="modelValue"
    class="text-2xl border-2 rounded-md p-2 px-4"
    :placeholder="props.placeholder"
  >
</template>


<script setup lang="ts">
const props = defineProps({
  placeholder: String,
})

const modelValue = defineModel()
</script>


<style scoped>

</style>
