<script setup lang="ts">
import {WidgetsSignUpForm, WidgetsSignInForm} from '#components'


definePageMeta({
  layout: 'auth',
  middleware: 'auth'
})

const AUTH = {
  signIn: WidgetsSignInForm,
  signUp: WidgetsSignUpForm,
}

const authComponent = shallowRef(WidgetsSignInForm)

function setAuthComponent(name) {
  authComponent.value = AUTH[name]
}

</script>

<template>
  <div class="flex flex-col items-center justify-center border-2 p-14 rounded-xl">
    <KeepAlive>
      <component :is="authComponent" @change="setAuthComponent"/>
    </KeepAlive>
  </div>
</template>

<style scoped>

</style>
