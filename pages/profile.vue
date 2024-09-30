<template>
  <div>
    <img :src="avatar" alt="">
  </div>
</template>


<script setup lang="ts">

const { avatar } = useUserStore()

definePageMeta({
  middleware: 'check-auth'
})

</script>


<style scoped>

</style>
