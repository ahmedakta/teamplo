<template>
  <div class="flex bg-[#f3f7f8] h-screen pr-5">
    
    <SideNav />
    <div class="flex-1">
      <TopNav />
      <slot />
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/Backend/TopNav.vue'
import SideNav from '@/components/Backend/SideNav.vue'
</script>
