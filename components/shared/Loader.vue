<template>
  <div class="flex items-center justify-center">
    <span
      class="loader"
      :style="{
      '--width': props.width,
      '--height': props.height,
      '--size': props.size,
      '--color': props.color
    }"
    />
  </div>
</template>


<script setup lang="ts">

const props = withDefaults(defineProps<{
  width?: string,
  height?: string,
  size?: string,
  color?: string,
}>(), {
  width: '100px',
  height: '100px',
  size: '10px',
  color: 'black'
})

</script>


<style scoped>
.loader {
  width: var(--width);
  height: var(--height);
  border: var(--size) dotted var(--color);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  will-change: transform;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
