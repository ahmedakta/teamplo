<template>
  <div class="flex bg-[#f3f7f8] relative h-screen pr-5 text-black">
    
    <SideNav />
    <div class="ml-[20%] flex-1">
      <TopNav />
      <slot />
    </div>
    <!-- Your main content goes here -->

    <!-- Bubble element -->
    <div class="fixed bottom-4 right-4">
      <div class="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center text-white text-xl">
        <span><img src="@/assets/ai1.png" width="50" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/Backend/TopNav.vue'
import SideNav from '@/components/Backend/SideNav.vue'
</script>
