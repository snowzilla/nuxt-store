<template>
  <ClientOnly>
    <div class="p-6 flex items-center border-b-2 gap-8">
      <NuxtLink
        to="/"
        class="text-4xl w-[216px]"
      >
        <h1>NuxtShop</h1>
      </NuxtLink>
      <SharedBurgerMenu v-model="isOpenSidebar"/>
      <SharedInput
        class="ml-auto mr-auto w-full"
        placeholder="Search"
      />
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/favorites"
          class="w-16 flex flex-col items-center cursor-pointer"
        >
          <Icon name="material-symbols:favorite" size="30px"/>
          <p>Favorite</p>
        </NuxtLink>
        <NuxtLink
          to="/cart"
          class="w-16 flex flex-col items-center cursor-pointer relative"
        >
          <div class="absolute -top-1 right-3 w-4 h-4 text-[10px] text-white bg-black z-10 flex justify-center items-center rounded-full">
            <span>{{ cartStore.getNumberItemsCart }}</span>
          </div>
          <Icon name="material-symbols:shopping-cart" size="30px"/>
          <p>Cart</p>
        </NuxtLink>
        <NuxtLink
          to="/profile"
          class="w-16 flex flex-col items-center cursor-pointer"
        >
          <Icon name="material-symbols:person-2" size="30px"/>
          <p>Profile</p>
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>


<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {storeToRefs} from "pinia";

const isOpenSidebar = defineModel()

const cartStore = useCartStore()
const userStore = useUserStore()

const {cart} = storeToRefs(cartStore)


</script>
