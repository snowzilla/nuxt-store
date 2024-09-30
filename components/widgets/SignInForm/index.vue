<template>
  <h3 class="text-4xl mb-10">Sign In</h3>
  <form class="flex flex-col">
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
      Sign In
    </SharedButtons>
  </form>
  <p class="text-xl mt-2">
    Don't have an account?
    <span
      @click="emits('change', 'signUp')"
      class="text-blue-400 cursor-pointer transition hover:text-blue-600"
    >
      Sign Up!
    </span>
  </p>
</template>


<script setup lang="ts">
import {AuthService} from "~/shared/services/auth.service";
import useLoading from "~/composables/useLoading";

const emits = defineEmits(['change'])

const {isLoading} = useLoading()

const email = ref('1@mail.ru')
const password = ref('12345')


async function onSubmit(): void {
  await AuthService.signIn({email: email.value, password: password.value})
}

</script>
