<template>
  <div class="flex flex-col md:flex-row bg-[#f3f7f8] h-screen pr-5 text-black relative">
    <!-- Message Modal -->
    <div
      id="successMessage"
      class="fixed flex justify-between right-0 top-0 mr-4 mt-4 px-6 py-3 rounded-lg shadow-lg bg-white index-1 text-black border-gray-500 border-[1px] hidden"
    >
      <p id="successIcon" class="text-green-500 mr-2 hidden">
        <font-awesome-icon :icon="['fa', 'check']" />
      </p>
      <p id="errorIcon" class="text-red-500 ml-2 hidden">
        <font-awesome-icon :icon="['fa', 'x']" />
      </p>
      <span id="successMessageText"></span>
    </div>

    <SideNav class="w-full md:w-[18rem] md:flex-shrink-0" />
    <div class="flex-1 md:ml-[18rem]">
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
