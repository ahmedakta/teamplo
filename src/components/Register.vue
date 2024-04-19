<template>
  <!-- <div class="px-6 pb-2">
    <input
      placeholder="Password"
      inputType="password"
      :error="errors && errors.password ? errors.password[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <input
      placeholder="Confirm Password"
      inputType="password"
      :error="errors && errors.confirmPassword ? errors.confirmPassword[0] : ''"
    />
  </div>

  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="!name || !email || !password || !confirmPassword"
      :class="!name || !email || !password || !confirmPassword ? 'bg-gray-200' : 'bg-[#F02C56]'"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Sign Up
    </button>
  </div> -->

  <form @submit.prevent="register">
    <div class="py-1">
      <label for="email" class="block mb-1">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        required
        class="w-full px-3 py-2 border rounded-md"
      />
    </div>
    <div class="py-1">
      <label for="email" class="block mb-1">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="w-full px-3 py-2 border rounded-md"
      />
    </div>
    <div class="py-1">
      <label for="password" class="block mb-1">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="w-full px-3 py-2 border rounded-md"
      />
    </div>
    <div class="py-1">
      <label for="password" class="block mb-1">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        required
        class="w-full px-3 py-2 border rounded-md"
      />
    </div>
    <button
      type="submit"
      class="items-center bg-[#5DADE2] text-white border rounded-md px-3 py-[6px]"
    >
      Sign Up
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/general'
import { useUserStore } from '@/stores/user'
const generalStore = useGeneralStore()
const userStore = useUserStore()
let email = ref(null)
let name = ref(null)
let password = ref(null)
let confirmPassword = ref(null)
let errors = ref(null)

const register = async () => {
  errors.value = null

  try {
    await userStore.getTokens()
    await userStore.register(name.value, email.value, password.value, confirmPassword.value)
    await userStore.getUser()

    generalStore.isLoginOpen = false
  } catch (error) {
    errors.value = error.response.data.errors
    console.log(error)
  }
}
</script>
