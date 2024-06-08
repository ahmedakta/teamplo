<template>
  <div class="flex bg-[#f3f7f8] relative h-screen pr-5 text-black">
    <!-- Message Modal -->
    <div
      id="successMessage"
      class="fixed flex justify-between right-0 top-0 mr-4 mt-4 px-6 py-3 rounded-lg shadow-lg bg-gray-400 text-white hidden"
    >
      <p id="successIcon" class="text-green-500 mr-2 hidden">
        <font-awesome-icon :icon="['fa', 'check']" />
      </p>
      <p id="errorIcon" class="text-red-500 ml-2 hidden">
        <font-awesome-icon :icon="['fa', 'x']" />
      </p>
      <span id="successMessageText"></span>
    </div>
    <!-- Full Page Loader Modal -->
    <!-- Loading layer -->
    <!-- <div
      v-if="generalStore.isLoading"
      class="absolute inset-0 flex items-center justify-center bg-opacity-50 z-50"
    >
      <div class="spinner">
        <font-awesome-icon :icon="['fa', 'spinner']" class="fa-spin-pulse fa-2x text-black" />
      </div>
    </div> -->
    <SideNav />
    <div class="ml-[20%] flex-1">
      <TopNav />
      <slot />
    </div>
    <!-- Your main content goes here -->

    <!-- Bubble element -->
    <div class="fixed bottom-4 right-4">
      <div
        class="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center text-white text-xl"
      >
        <span><img src="@/assets/ai1.png" width="50" alt="" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/Backend/TopNav.vue'
import SideNav from '@/components/Backend/SideNav.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
</script>
