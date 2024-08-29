<template>
  <header class="py-4 bg-[#f3f7f8]">
    <div class="container mx-auto h-[5rem] rounded-xl flex items-center justify-between">
      <!-- Logo on the left -->
      <div class="flex-shrink-0">
        <h1 class="text-black text-20 px-5 font-bold">Welcome 👋🏻 {{ userStore.name }}</h1>
      </div>
      <!-- Login button on the right -->
      <!-- search input -->
      <div class="hidden md:flex justify-between w-[15rem] text-[1rem] text-center">
        <div class="flex justify-between bg-white py-3 h-[3rem] px-3 rounded-2xl">
          <a href="#" @click="generalStore.openModal('searchModal')">
            <img
              src="@/assets/icons/backend/topnav/search.svg"
              class="text-black pr-1"
              alt="Search"
            />
          </a>
        </div>
        <div class="flex justify-between bg-white py-3 h-[3rem] px-3 rounded-2xl">
          <RouterLink to="/settings">
            <img src="@/assets/icons/backend/topnav/settings.svg" class="text-black pr-1" alt="" />
          </RouterLink>
        </div>
        <div class="flex justify-between h-[3rem] bg-white py-3 px-3 rounded-2xl">
          <a href="">
            <img
              src="@/assets/icons/backend/topnav/notifications.svg"
              class="text-black pr-1"
              alt=""
            />
          </a>
        </div>
        <div class="flex h-12 w-12 justify-center items-center bg-white rounded-full">
          <a href="#"
            ><img
              :src="'/src/assets/' + userStore.image"
              alt=""
              class="rounded-full h-10 w-10 object-cover"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const userStore = useUserStore()
const generalStore = useGeneralStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const isLoggedIn = redirect => {
  let storedUserInfo = JSON.parse(localStorage.getItem('user'))
  if (storedUserInfo) {
    if (redirect) {
      router.push(redirect)
    }
  } else {
    generalStore.isLoginOpen = true
  }
}

const logout = () => {
  try {
    userStore.logout()
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped></style>
