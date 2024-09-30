import {storeToRefs} from "pinia";

export default defineNuxtRouteMiddleware(() => {
  const user = useUserStore()
  const router = useRouter()

  if (!storeToRefs(user).status.value) {
    router.push("/auth")
  }

  return
})
