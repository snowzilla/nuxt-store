 <template>
  <div @click="router.push(`/product/${props.item.id}`)" class="cursor-pointer">
    <img
      :src="props.item.images[0]"
      alt="img"
      class="w-80 rounded-xl mb-2 h-70"
    >
    <p>{{ props.item.price }} $</p>
    <p class="truncate">{{ props.item.title }}</p>
    <SharedButtons
      block
      class="mt-2 h-12 text-xl"
      @click.stop="addToCart"
    >
      Add to cart
    </SharedButtons>
  </div>
</template>


<script setup lang="ts">
import { toast } from 'vue3-toastify';

import {useCartStore} from "~/stores/cart";

const props = defineProps({
  item: Object
})

const router = useRouter()

const {setToCart} = useCartStore()

function addToCart(): void {
  setToCart(props.item)
  toast.dark('Added to cart', {position: 'bottom-right'})
}

</script>

<style scoped>

</style>
