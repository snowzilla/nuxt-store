<template>
  <div class="h-screen max-w-[1440px] mx-auto">
    <WidgetsHeader v-model="isOpenSidebar"/>
    <WidgetsSidebar
      v-show="isOpenSidebar"
      @onClick="isOpenSidebar = false"
    />
    <slot/>
  </div>
</template>


<script setup lang="ts">
const isOpenSidebar = ref(false);

</script>
