<template>
  <div class="welcome flex flex-col items-center justify-center">
    <p class="text-3xl text-neutral-800 mb-2">Welcome to</p>
    <h2 class="text-9xl">Nuxt Shop</h2>
  </div>
</template>

<style scoped>
@keyframes slidein {
  from {
    opacity: 0;
    transform: translateY(-150px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome {
  animation-duration: 2s;
  animation-name: slidein;
  height: calc(100vh - 200px);
}

</style>
