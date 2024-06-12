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
    <SideNav />
    <div class="ml-[18rem] flex-1">
      <TopNav />
      <slot />
    </div>
    <!-- Modals -->
    <Modals />

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
import Modals from '@/components/Backend/Modals.vue'
import SideNav from '@/components/Backend/SideNav.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
</script>
