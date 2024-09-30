<template>
  <ClientOnly>
    <div
      v-if="!cart.length"
      class="grid place-items-center gap-2 absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]"
    >
      <Icon
        name="material-symbols:remove-shopping-cart-outline"
        class="w-32 h-32"
      />
      <h3 class="text-4xl">Cart empty</h3>
    </div>
    <div v-else class="p-6 flex justify-between gap-10">
      <div class="border-2 rounded-md w-full p-4 h-max">
        <h3 class="text-4xl mb-1">Cart</h3>
        <p class="text-xl mb-4">{{ cartStore.getNumberItemsCart }} elements</p>
        <div class="flex flex-col gap-5">
          <div
            v-for="item in cart"
            :key="item.id"
          >
            <div class="flex items-center">
              <div class="flex items-center gap-6 w-full">
                <img
                  :src="item.images[0]"
                  alt=""
                  class="w-24 rounded-xl h-24"
                >
                <p class="text-xl truncate">
                  {{ item.title }}
                </p>
              </div>
              <div class="flex items-center gap-6 mr-10">
                <SharedButtons
                  class="w-8 h-8"
                  :disabled="item.counter === 1"
                  @click="cartStore.decrementProductCounter(item.id)"
                >
                  <Icon
                    name="ic:round-minus"
                    class="w-6 h-6"
                  />
                </SharedButtons>
                <div class="text-2xl w-10 flex justify-center">{{ item.counter }}</div>
                <SharedButtons
                  class="w-8 h-8"
                  @click="cartStore.incrementProductCounter(item.id)"
                >
                  <Icon
                    name="material-symbols:add-rounded"
                    class="w-6 h-6"
                  />
                </SharedButtons>
              </div>
              <p class="whitespace-nowrap text-2xl w-32 flex justify-center">{{ item.price * item.counter }} $</p>
              <SharedButtons
                class="min-w-10 h-10 group transition"
                type="remove"
                @click="cartStore.removeFromCart(item.id)"
              >
                <Icon
                  name="material-symbols:delete-outline-sharp"
                  class="w-6 h-6 bg-black transition group-hover:bg-white"
                />
              </SharedButtons>
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 rounded-md p-4 w-96 h-max">
        <div class="flex justify-between mb-3">
          <span>Products, {{ cartStore.getNumberItemsCart }} el.</span>
          <span>{{ getTotalPrice }} $</span>
        </div>
        <div class="flex text-3xl justify-between mb-3">
          <span>Total: </span>
          <span>{{ getTotalPrice }} $</span>
        </div>
        <SharedButtons block class="h-12 text-2xl">
          Buy
        </SharedButtons>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";


const cartStore = useCartStore()

const {cart} = storeToRefs(cartStore)

const getTotalPrice = computed(() => {
  return cart.value.reduce((acc, item) => {
    return acc + item.price * item.counter
  }, 0)
})
</script>
