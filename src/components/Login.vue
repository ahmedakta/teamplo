<template>
  <form @submit.prevent="login">
    <div class="mb-4 py-5">
      <label for="email" class="block mb-1">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="w-full px-3 py-2 border rounded-md"
      />
      <span class="text-red-600" v-if="errors?.email">{{ errors.email[0] }}</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-1">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="w-full px-3 py-2 border rounded-md"
        :error="errors && errors.password ? errors.password[0] : ''"
      />
      <span class="text-red-600" v-if="errors?.password">{{ errors.password[0] }}</span>
    </div>
    <button
      type="submit"
      @click="($event) => (generalStore.isLoading = true)"
      class="items-center bg-[#5DADE2] text-white border rounded-md px-3 py-[6px] w-[120px]"
    >
      <font-awesome-icon
        :icon="['fas', 'spinner']"
        class="spinner animate-spin"
        v-if="generalStore.isLoading && !errors"
      />
      <span>Login</span>
    </button>
  </form>

  <hr class="m-5" />
  <span class="">Forgot Your Password ? <a href="#" class="text-[#5DADE2]">Reset Password</a></span>
</template>

<script setup>
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/general'
import { useUserStore } from '@/stores/user'
const generalStore = useGeneralStore()
const userStore = useUserStore()
import { useRouter } from 'vue-router'
const router = useRouter()
let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
  errors.value = null

  try {
    await userStore.getTokens()
    await userStore.login(email.value, password.value)
    await userStore.getUser()
    if (userStore.role_id == 1) {
      router.push('dashboard')
    }
    if (userStore.role_id == 3) {
      router.push('content-creator/dashboard')
    }
    generalStore.isLoginOpen = false
  } catch (error) {
    errors.value = error.response.data.errors
    console.log(errors.value)
  }
}
</script>

<style lang="scss" scoped></style>
