<script setup lang="ts">
import Loader from "~/components/shared/Loader.vue";

const route = useRoute()
const router = useRouter()

const { setToCart } = useCartStore()

const {
  data: product,
  status
} = await useLazyFetch(`https://api.escuelajs.co/api/v1/products/${route.params.productId}`)
</script>

<template>
  <div class="product grid place-items-center px-20 relative">
    <Loader
      v-if="status === 'pending'"
      class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
    />
    <div
      v-else
      class="flex gap-10"
    >
      <SharedButtons
        class="absolute left-20 top-5 w-14 h-14 grid place-items-center rounded-full"
        @click="router.go(-1)"
      >
        <Icon
          name="material-symbols:arrow-back-rounded"
          class="h-10 w-10"
        />
      </SharedButtons>
      <img
        :src="product.images[0]"
        alt="img"
        class="w-[500px] rounded-xl mb-2"
      >
      <div class="flex flex-col">
        <h2 class="text-5xl mt-16 mb-16">{{ product.title }}</h2>
        <p class="text-xl text-neutral-400 mb-16">{{ product.description }}</p>
        <div class="flex items-center justify-between mt-auto">
          <p class="text-3xl">Price: {{ product.price }} $</p>
          <SharedButtons
            class="h-16 text-2xl self-start w-96"
            @click.stop="setToCart(product)"
          >
            Add to cart
          </SharedButtons>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  height: calc(100vh - 104px);
}

</style>
