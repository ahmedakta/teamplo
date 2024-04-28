<template>
  <div class="bg-gray-800 text-white w-64 py-6 px-8 flex flex-col justify-between">
    <!-- Logo -->
    <div class="text-2xl font-bold">Your Logo</div>
    <!-- Navigation Links -->
    <nav class="mt-6">
      <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">Dashboard</a>
      <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">Projects</a>
      <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">Settings</a>
      <a
        href="#"
        class="block py-2 px-4 text-white hover:bg-gray-700"
        @click="logout()"
        v-if="userStore.id"
        >logout</a
      >
      <!-- Add more links as needed -->
    </nav>
    <!-- Footer (Optional) -->
    <div class="mt-6">Your Footer</div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const userStore = useUserStore()
const generalStore = useGeneralStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  try {
    userStore.logout()
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
</script>
