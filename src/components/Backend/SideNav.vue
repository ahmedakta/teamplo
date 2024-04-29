<template>
  <div class="bg-white m-5 rounded-3xl text-white w-64 py-6 px-8 flex flex-col justify-between">
    <!-- Logo -->
    <div class="text-2xl text-black font-bold">
      <img alt="Vue logo" class="h-[4rem] logo px-10 py-2" src="@/assets/teamplo-logo-v1.png" />
    </div>
    <!-- Navigation Links -->
    <nav class="mt-6 text-gray-500">
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-white">Dashboard</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-white">Tasks</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-white">Events</a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-white">Settings</a>
      <a
        href="#"
        class="block py-2 px-4 text-red-500 hover:bg-gray-700"
        @click="logout()"
        v-if="userStore.id"
        >Logout</a
      >
      <!-- Add more links as needed -->
    </nav>
    <!-- Footer (Optional) -->
    <div class="mt-6 text-gray-500"><p>Made By Teamplo</p></div>
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
    if (window.confirm('Are you sure you want to logout?')) {
      // Perform logout action
      userStore.logout()
      router.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
