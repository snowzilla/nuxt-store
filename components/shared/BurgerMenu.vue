<template>
  <div
    @click="isOpen = !isOpen"
    class="border-2 h-[52px] grid place-items-center px-3 rounded-md cursor-pointer transition hover:border-gray-500"
  >
    <div
      id="burger-checkbox"
      class="burger-checkbox"
      ref="checkbox"
      :class="{'isChecked': isOpen}"
    />
    <label
      for="burger-checkbox"
      class="burger"
    />
  </div>
</template>


<script setup lang="ts">
const isOpen = defineModel()
</script>


<style scoped>
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}

.burger {
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 30px;
  height: 26px;
}

.burger::before,
.burger::after {
  content: '';
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #000;
}

.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #000;
  transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}

.burger::after {
  bottom: 0;
  transition: bottom .3s .15s, transform .3s;
}

.isChecked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow .15s, top .3s, transform .3s .15s;
}

.isChecked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom .3s, transform .3s .15s;
}

</style>
