<template>
  <button
    class="active:scale-95 bg-black text-white rounded-md transition hover:bg-neutral-600 flex items-center justify-center"
    :class="{'w-full': props.block, 'bg-red-700': props.isError, 'bg-neutral-600 cursor-not-allowed': props.disabled}"
    :disabled="props.disabled"
    :datatype="type"
  >
    <SharedLoader
      v-if="props.isLoading"
      width="38px"
      height="38px"
      color="white"
      size="4px"
    />
    <slot v-else/>
  </button>
</template>


<script setup lang="ts">
const props = defineProps({
  block: Boolean,
  isLoading: Boolean,
  isError: Boolean,
  disabled: Boolean,
  type: 'default' | 'remove',
})

</script>


<style scoped>
button[datatype="remove"] {
  background-color: transparent;
  border-radius: 100%;
}


button[datatype="remove"]:hover {
  background-color: #fb2a2a;
}
</style>
