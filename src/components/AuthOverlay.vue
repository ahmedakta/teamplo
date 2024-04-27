<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
    <div class="relative h-[60%] bg-white p-8 rounded-lg shadow-md w-[25rem]">
      <div class="justify-center text-center items-center mx-auto">
        <img src="/src/assets/teamplo-logo-v1.png" class="mx-auto" width="80" alt="" />
      </div>
      <div class="w-full flex justify-between">
        <h2 class="text-2xl">Login</h2>
        <button class="p-1.5 rounded-xl" @click="($event) => (generalStore.isLoginOpen = false)">
          X
        </button>
      </div>

      <Login v-if="isRegister" />
      <Register v-else />
      <div class="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
        <span class="text-[14px] text-gray-600" v-if="isRegister">Don't have an account ?</span>
        <span class="text-[14px] text-gray-600" v-else>Already have an account ?</span>
        <button
          @click="($event) => (isRegister = !isRegister)"
          class="text-[14px] text-[#F02C56] font-semibold pl-1"
        >
          <span v-if="isRegister" class="text-[#5DADE2]">Sign Up</span>
          <span v-else class="text-[#5DADE2]">Log in</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/general'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

const generalStore = useGeneralStore()

let isRegister = ref(true)
</script>
