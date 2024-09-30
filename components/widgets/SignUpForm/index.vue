<template>
  <h3 class="text-4xl mb-10">Sign Up</h3>
  <form class="flex flex-col">
    <SharedInput
      placeholder="Name"
      class="mb-5"
      v-model="name"
    />
    <SharedInput
      placeholder="Email"
      class="mb-5"
      v-model="email"
    />
    <SharedInput
      placeholder="Password"
      class="mb-8"
      v-model="password"
    />
    <SharedButtons
      block
      class="h-12 text-2xl"
      :is-loading="isLoading"
      @click.prevent="onSubmit"

    >
      Sign Up
    </SharedButtons>
  </form>
  <p class="text-xl mt-2">
    Have an account?
    <span
      @click="emits('change', 'signIn')"
      class="text-blue-400 cursor-pointer transition hover:text-blue-600"
    >
      Sign In!
    </span>
  </p>
</template>


<script setup lang="ts">
import {AuthService} from "~/shared/services/auth.service";
import useLoading from "~/composables/useLoading";

const emits = defineEmits(['change'])

const name = ref('')
const email = ref('')
const password = ref('')


const {isLoading} = useLoading()
const router = useRouter();


function resetForm(): void {
  name.value = ''
  email.value = ''
  password.value = ''
}

async function onSubmit(): void {
  await AuthService.signUp({email: email.value, password: password.value, name: name.value})
  resetForm()
  await router.push('/')
}

</script>
